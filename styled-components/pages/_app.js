import {wrapper} from "redux/store"
import {ThemeProvider} from "styled-components"
import {useSelector} from "react-redux"

import Header from "components/Header"
import GlobalStyles from "components/GlobalStyles"

import {lightTheme, darkTheme} from "utils/themes"

const CustomApp = ({Component, pageProps}) => {
    const {darkThemeEnabled} = useSelector(state => state)
    return (
        <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <Header/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default wrapper.withRedux(CustomApp)