import {createGlobalStyle} from "styled-components"

export default createGlobalStyle(({theme}) => ({
    'a, a:active, a:visited': {
        textDecoration: 'none',
        transition: 'color .15s ease-in-out',
        color: theme.primary,
        cursor: 'pointer',

        '&:focus': {
            outline: 'none',
        },

        '&:hover': {
            color: theme.primaryHover,
        }
    }
}))