import {Link} from 'react-router-dom';
import {Layout, Menu} from "antd";
import {MessageOutlined, SmileOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

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
                <Menu.Item key="profile" icon={<UserOutlined/>}>
                    <Link to='/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item key="messages" icon={<MessageOutlined/>}>
                    <Link to='/dialogs'>Messages</Link>
                </Menu.Item>
                <Menu.Item key="friends" icon={<SmileOutlined/>}>
                    <Link to='/friends'>Friends</Link>
                </Menu.Item>
                <Menu.Item key="users" icon={<TeamOutlined/>}>
                    <Link to='/users'>Developers</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Navbar;
