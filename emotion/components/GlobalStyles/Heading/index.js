import {Global} from "@emotion/core"
import {useTheme} from "emotion-theming"

const Heading = () => {
    const theme = useTheme()

    return (
        <Global styles={{
            'h1, h2, h3, h4, h5, h6': {
                fontFamily: theme.fonts.oswald.bold,
                wordBreak: 'break-word',
                lineHeight: '1em',
                margin: '.25em 0 .5em 0',
            },

            'h1': {
                fontSize: '70px',
                letterSpacing: '-0.5px'
            },

            'h2': {
                fontSize: '60px',
                letterSpacing: '-0.5px'
            },

            'h3': {
                fontSize: '50px',
                letterSpacing: 0
            },

            'h4': {
                fontSize: '40px',
                letterSpacing: '0.25px'
            },

            'h5': {
                fontSize: '30px',
                letterSpacing: 0
            },

            'h6': {
                fontSize: '20px',
                letterSpacing: '0.15px'
            }
        }}/>
    )
}

export default Heading