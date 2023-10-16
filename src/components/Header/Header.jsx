import style from './Header.module.css'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import {LOGIN_BUTTON, LOGIN_PATH, LOGOUT_BUTTON, PROFILE_PATH, PROJECT_NAME} from "../../data/constants";
import {Avatar, Button, Col, Layout, Row, theme} from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/authSelectors";
import {logout} from "../../redux/authReducer.ts";


const Header = (props) => {
    const isAuth = useSelector(selectIsAuth);
    const login = useSelector(selectCurrentUserLogin);

    const dispatch = useDispatch();

    const logoutCallback = () => {
        dispatch(logout());
    }

    const {token: {colorBgContainer},} = theme.useToken();
    const {Header,} = Layout;
    return (
        <Header style={{padding: 0, background: colorBgContainer,}}>
            <Row>
                <Col span={19}>
                    <div className={style.header}>
                        <Link to={PROFILE_PATH}>
                            <img src={logo} alt={PROJECT_NAME}/>
                        </Link>
                    </div>
                </Col>
                {isAuth
                    ?
                    <>
                        <Col span={1}>
                            <Avatar title={login} style={{backgroundColor: '#032abe'}}>
                                {login[0]}
                            </Avatar>
                        </Col>
                        <Col span={4}>
                            <Button onClick={logoutCallback}>{LOGOUT_BUTTON}</Button>
                        </Col>
                    </>
                    :
                    <Col span={5}>
                        <Button> <Link to={LOGIN_PATH}>{LOGIN_BUTTON}</Link> </Button>
                    </Col>
                }
            </Row>
        </Header>
    )
}
export default Header;
