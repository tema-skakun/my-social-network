import React, {useState, useEffect} from "react";
import {Layout, Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import {MessageOutlined, SmileOutlined, TeamOutlined, UserOutlined,} from "@ant-design/icons";
import {
    DIALOGS_PATH, FRIENDS_PAGE,
    FRIENDS_PATH, PROFILE_PAGE,
    PROFILE_PATH, USERS_PAGE,
    USERS_PATH, DIALOGS_PAGE,
} from "../../data/constants";

const {Sider} = Layout;

const Navbar = () => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([]);

    useEffect(() => {
        const path = location.pathname;

        if (path === PROFILE_PATH) {
            setSelectedKeys(["profile"]);
        } else if (path === DIALOGS_PATH) {
            setSelectedKeys(["messages"]);
        } else if (path === FRIENDS_PATH) {
            setSelectedKeys(["friends"]);
        } else if (path === USERS_PATH) {
            setSelectedKeys(["users"]);
        } else {
            setSelectedKeys([]);
        }
    }, [location.pathname]);

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
            <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
                <Menu.Item key="profile" icon={<UserOutlined/>}>
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
    );
};

export default Navbar;
