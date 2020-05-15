import Link from "next/link"
import styled from "@emotion/styled"
import {useSelector, useDispatch} from "react-redux"

import {SET_THEME} from "redux/actions/actions"

import Logo from "public/static/icons/pedium-logo.svg"

const HeaderContainer = styled.header(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: `${theme.background}`,
    padding: `${theme.gutterVertical / 2}px`,
    borderBottom: `1px solid ${theme.backgroundAccent}`,
    marginBottom: `${theme.gutterVertical}px`
}))

const HeaderLogoLink = styled.a(({theme}) => ({
    color: theme.text
}))

const HeaderThemeButton = styled.button(({theme}) => ({
    fontFamily: theme.fonts.oswald.bold,
    border: 'none',
    appearance: 'none',
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: theme.text,
    cursor: 'pointer'
}))

const Header = () => {
    const {darkThemeEnabled} = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <HeaderContainer>

            <Link href={`/archive-blog`} as={`/`}>
                <HeaderLogoLink>
                    <Logo width={120}/>
                </HeaderLogoLink>
            </Link>

            <HeaderThemeButton onClick={(event) => {
                event.preventDefault()
                dispatch({type: SET_THEME, payload: !darkThemeEnabled})
            }}>

                {darkThemeEnabled ? 'Disable ' : 'Enable '} dark theme

            </HeaderThemeButton>

        </HeaderContainer>
    )
}

export default Header