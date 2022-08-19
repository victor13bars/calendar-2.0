import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const navigate = useNavigate()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()
    const logOut = () => {
      logout()
    }

    return (
        <Layout.Header>
            <Row justify={"end"}>
                {
                    isAuth
                        ?
                        <>
                            <div style={{color: "white", marginRight: '30px'}}>
                                {user.username}
                            </div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    onClick={logOut}
                                    style={{width: '100px'}}
                                    key={1}>
                                    Выйти
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => navigate(RouteNames.LOGIN)}
                                style={{width: '100px'}}
                                key={1}>
                                Логин
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;