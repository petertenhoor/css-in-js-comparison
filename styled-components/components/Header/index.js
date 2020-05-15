import Link from "next/link"
import {useSelector, useDispatch} from "react-redux"

import {SET_THEME} from "redux/actions/actions"

import Logo from "public/static/icons/pedium-logo.svg"

const Header = () => {
    const {darkThemeEnabled} = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <header>

            <Link href={`/archive-blog`} as={`/`}>
                <a>
                    <Logo width={120}/>
                </a>
            </Link>

            <label>

                <input type="checkbox"
                       onChange={(event) => dispatch({type: SET_THEME, payload: event.currentTarget.checked})}
                       checked={darkThemeEnabled}/>

                {darkThemeEnabled ? 'Disable ' : 'Enable '} dark theme

            </label>

        </header>
    )
}

export default Header