import {HYDRATE} from "next-redux-wrapper"

import {SET_THEME} from "../actions/actions"

const initialState = {
    darkThemeEnabled: false
}

/**
 * Reducer
 * @param state
 * @param action
 * @returns object
 */
export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case HYDRATE:
            return {...state, ...payload}
        case SET_THEME:
            return {...state, ...{darkThemeEnabled: payload}}
        default:
            return state
    }
}