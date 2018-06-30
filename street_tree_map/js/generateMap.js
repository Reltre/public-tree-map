function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

var csrftoken = getCookie('csrftoken');
var headers = new Headers();
headers.append('X-CSRFToken', csrftoken);
headers.append('content-type', 'application/json');

const query = { "query": "{ allTrees(maxLat:34.03219, minLat: 34.01971, minLon: -118.49517, maxLon: -118.48067) { latitude longitude nameCommon address street } }" };
var mymap = L.map('mapid').setView([34.02, -118.48], 14);
fetch('graphql', {
  body: JSON.stringify(query),
  method: 'POST',
  cache: 'no-cache',
  headers: headers,
  credentials: 'include',
}).then(response => {
  response.json().then(json => {
    let trees = json.data.allTrees;
    for (let i = 0; i < trees.length; i += Math.floor(trees.length/100)) {
      let tree = trees[i];
      L.marker([tree.latitude, tree.longitude]).addTo(mymap)
        .bindPopup(`<b>${tree.nameCommon}</b><br>${tree.address} ${tree.street}`).openPopup();
    }
  });
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);