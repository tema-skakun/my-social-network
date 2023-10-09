import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import {LOGIN_BUTTON, LOGIN_PATH, LOGOUT_BUTTON, PROFILE_PATH, PROJECT_NAME} from "../../data/constants";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div>
                <NavLink to={PROFILE_PATH}>
                    <img
                        src={logo}
                        alt={PROJECT_NAME}
                    />
                </NavLink>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>{LOGOUT_BUTTON}</button></div>
                    : <NavLink to={LOGIN_PATH}>{LOGIN_BUTTON}</NavLink>}
            </div>
        </header>
    )
}

export default Header;
