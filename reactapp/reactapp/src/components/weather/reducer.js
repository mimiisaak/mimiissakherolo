
import * as actions from '../weather/actionTypes';
import { getLastFocusable } from '@fluentui/react';
const initialState = {
    arr: [],
    defultCity: {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        }
    }

}
//normally use ES6 default argument syntax to provide initial state
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_CITY:
            return {
                ...state,
                arr: state.arr.concat(action.paylaod)

            };
        case actions.REMOVE_CITY:
            return {
                ...state,
                arr: [...state.arr.filter(({ Key }) => Key !== action.Key)]
            };
        case actions.FAVORITECIRY:
            return {
                ...state,
                defultCity: action.obj
            }
        default:
            return state;

    }
}