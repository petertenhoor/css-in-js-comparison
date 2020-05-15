import {Global} from "@emotion/core"
import {useTheme} from "emotion-theming"

const Typography = () => {
    const theme = useTheme()

    return (
        <Global styles={{
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
        }}/>
    )
}

export default Typography