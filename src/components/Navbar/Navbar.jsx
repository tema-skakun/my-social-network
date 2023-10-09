import {Link} from 'react-router-dom';
import {Layout, Menu} from "antd";
import {MessageOutlined, SmileOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {
    DIALOGS_PAGE,
    DIALOGS_PATH,
    FRIENDS_PAGE,
    FRIENDS_PATH,
    PROFILE_PAGE,
    PROFILE_PATH, USERS_PAGE,
    USERS_PATH
} from "../../data/constants";

const {Sider} = Layout;

const Navbar = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key='profile' icon={<UserOutlined/>}>
                    <Link to={PROFILE_PATH}>{PROFILE_PAGE}</Link>
                </Menu.Item>
                <Menu.Item key="messages" icon={<MessageOutlined/>}>
                    <Link to={DIALOGS_PATH}>{DIALOGS_PAGE}</Link>
                </Menu.Item>
                <Menu.Item key="friends" icon={<SmileOutlined/>}>
                    <Link to={FRIENDS_PATH}>{FRIENDS_PAGE}</Link>
                </Menu.Item>
                <Menu.Item key="users" icon={<TeamOutlined/>}>
                    <Link to={USERS_PATH}>{USERS_PAGE}</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Navbar;
