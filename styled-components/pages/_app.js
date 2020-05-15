import {wrapper} from "redux/store"

import Header from "components/Header"

const CustomApp = ({Component, pageProps}) => {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(CustomApp)