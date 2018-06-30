module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, defaultValue, href, property, target)
import Html.Event exposing (..)
import Http
import Json.Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (..)

type alias Model = {
  
}

type Msg
  = Click


main :  Program Never Model type Msg
main =
  Html.program
    { view = view
    , update = update
    , init = ( initialModel, Cmd.none )
    , subscriptions = \_ -> Sub.none
    }

view : Model -> Html Msg
  view model = 
    div [ ] 
        [
          text "Hello World"
        ]

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Click ->
      