import {Global} from "@emotion/core"
import {rgba} from "polished"
import {useTheme} from "emotion-theming"

const Selected = () => {
    const theme = useTheme()

    return (
        <Global styles={{
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
        }}/>
    )
}

export default Selected