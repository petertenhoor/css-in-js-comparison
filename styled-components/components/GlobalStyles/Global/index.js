import {createGlobalStyle} from "styled-components"

export default createGlobalStyle(({theme}) => ({
    'html': {
        textSizeAdjust: '100%',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        fontFamily: theme.fonts.quicksand.regular,
        fontSize: `${theme.baseFontSize}px`,
        lineHeight: `${theme.lineHeight}em`,
        backgroundColor: theme.background,
        color: theme.text,
        overflowX: 'hidden',
        maxWidth: '100vw',
        width: '100%',
    },

    '*': {
        fontFamily: theme.fonts.quicksand.regular,
        fontSize: `${theme.baseFontSize}px`,
        lineHeight: `${theme.lineHeight}em`,
    },

    'body': {
        margin: 0,
        maxWidth: '100vw',
        width: '100%',
        position: 'relative',
        overflowY: 'auto',
        overflowX: 'hidden',
    }
}))