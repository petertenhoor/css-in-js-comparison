import {Global} from "@emotion/core"
import {useTheme} from "emotion-theming"

const GlobalStyle = () => {
    const theme = useTheme()

    return (
        <Global styles={{
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
        }}/>
    )
}

export default GlobalStyle