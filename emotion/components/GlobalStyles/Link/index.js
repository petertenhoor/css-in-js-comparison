import {Global} from "@emotion/core"
import {useTheme} from "emotion-theming"

const Link = () => {
    const theme = useTheme()

    return (
        <Global styles={{
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
        }}/>
    )
}

export default Link