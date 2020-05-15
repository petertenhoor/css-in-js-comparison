import {createGlobalStyle} from "styled-components"

export default createGlobalStyle(({theme}) => ({
    'p': {
        marginBottom: `${theme.gutterVertical / 2}px`,
        marginTop: '0',

        '&:last-of-type': {
            marginBottom: '0'
        }
    },

    'p, li': {
        fontWeight: 'normal',
        wordBreak: 'break-word'
    },

    'p:empty': {
        display: 'none',
    }
}))