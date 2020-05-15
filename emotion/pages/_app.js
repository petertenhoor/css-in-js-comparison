import {wrapper} from "redux/store"
import {ThemeProvider} from "emotion-theming"
import {CacheProvider} from "@emotion/core"
import {cache} from "emotion"
import {useSelector} from "react-redux"

import {lightTheme, darkTheme} from "utils/themes"

import GlobalStyles from "components/GlobalStyles"
import Header from "components/Header"

const CustomApp = ({Component, pageProps}) => {
    const {darkThemeEnabled} = useSelector(state => state)

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Header/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

export default wrapper.withRedux(CustomApp)