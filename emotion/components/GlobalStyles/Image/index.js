import {Global} from "@emotion/core"

const Image = () => (
    <Global styles={{
        'img': {
            display: 'block',
            maxWidth: '100%',
            height: 'auto'
        }
    }}/>
)

export default Image