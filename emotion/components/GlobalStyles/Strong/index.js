import {Global} from "@emotion/core"
import {useTheme} from "emotion-theming"

const Strong = () => {
    const theme = useTheme()
    return (
        <Global styles={{
            'strong': {
                fontFamily: theme.fonts.quicksand.bold
            }
        }}/>
    )
}

export default Strong