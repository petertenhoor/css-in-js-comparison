import {rgba} from "polished"
import {createGlobalStyle} from "styled-components"

export default createGlobalStyle(({theme}) => ({
    '::-moz-selection': {
        backgroundColor: theme.text,
        color: theme.background
    },

    '::selection': {
        backgroundColor: theme.text,
        color: theme.background
    },

    '*': {
        WebkitTapHighlightColor: rgba(theme.background, 0.2),
    }
}))