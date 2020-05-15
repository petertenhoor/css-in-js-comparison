import {darken, lighten} from "polished"

const shared = {
    primary: '#8c5dff',
    primaryHover: darken(0.05, '#8c5dff'),
    gutterVertical: 40,
    gutterHorizontal: 40,
    baseFontSize: 18,
    lineHeight: 1.4,
    containerWidth: 900,
    containerWidthNarrow: 600,
    fonts: {
        quicksand: {
            regular: 'Quicksand regular',
            bold: 'Quicksand bold'
        },
        oswald: {
            bold: 'Oswald bold'
        }
    }
}

const lightTheme = {
    background: '#fff',
    backgroundAccent: darken(0.05, '#fff'),
    heading: '#000',
    intro: darken(0.5, '#fff'),
    text: '#000',
    ...shared
}

const darkTheme = {
    background: '#000',
    backgroundAccent: lighten(0.05, '#000'),
    heading: '#fff',
    intro: lighten(0.5, '#000'),
    text: '#fff',
    ...shared
}

export {lightTheme, darkTheme}