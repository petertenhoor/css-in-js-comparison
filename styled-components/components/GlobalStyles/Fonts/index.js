import {createGlobalStyle} from "styled-components"

export default createGlobalStyle(({theme}) => ({
    '@font-face': {
        fontFamily: theme.fonts.quicksand.bold,
        src: `local('${theme.fonts.quicksand.bold}'), url('/static/fonts/quicksand/bold/quicksand-bold.woff2') format('woff2'), url('/static/fonts/quicksand/bold/quicksand-bold.woff') format('woff')`,
        fontWeight: 'bold',
        fontDisplay: 'swap',
        fontStyle: 'normal'
    },

    '@font-face ': {
        fontFamily: theme.fonts.quicksand.regular,
        src: `local('${theme.fonts.quicksand.regular}'), url('/static/fonts/quicksand/regular/quicksand-regular.woff2') format('woff2'), url('/static/regular/quicksand/bold/quicksand-regular.woff') format('woff')`,
        fontWeight: 'normal',
        fontDisplay: 'swap',
        fontStyle: 'normal'
    },

    '@font-face  ': {
        fontFamily: theme.fonts.oswald.bold,
        src: `local('${theme.fonts.oswald.bold}'), url('/static/fonts/oswald/bold/oswald-bold.woff2') format('woff2'), url('/static/fonts/oswald/bold/oswald-bold.woff') format('woff')`,
        fontWeight: 'bold',
        fontDisplay: 'swap',
        fontStyle: 'normal'
    }
}))