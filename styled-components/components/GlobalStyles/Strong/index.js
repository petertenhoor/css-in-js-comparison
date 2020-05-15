import {createGlobalStyle} from "styled-components"

export default createGlobalStyle(({theme}) => ({
    'strong': {
        fontFamily: theme.fonts.quicksand.bold
    }
}))