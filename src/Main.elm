module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, defaultValue, href, property, target)
import Html.Events exposing (..)
import Http
import Json.Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (..)

type alias Model = {
    markers : List Int
}

type Msg
  = Click

initialModel : Model
initialModel = 
    { markers = [1, 2, 3] }

main :  Program Never Model Msg
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
      ( { model | markers = [1, 2, 3] }, Cmd.none )