import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { GlobalOutlined } from '@ant-design/icons';
import i18n from '../../i18n';
import './HeaderNavigation.css'

const {Header} = Layout;

function HeaderNavigation(props) {
    const {t} = useTranslation(['mainPage']);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then();
    }
    const {SubMenu} = Menu;
    return (
        <Header>
            <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={props.selectedKeys}
                style={{lineHeight: '32px', height: '32px'}}
            >
                <Menu.Item key="main"><Link to="/">{t('mainTitle')}</Link></Menu.Item>
                <Menu.Item key="programming"><Link to="/programming">{t('programmingTitle')}</Link></Menu.Item>
                <Menu.Item key="hobbies"><Link to="/hobbies">{t('hobbiesTitle')}</Link></Menu.Item>
                <SubMenu key="languageSelector" icon={
                    <GlobalOutlined style={{fontSize: 20, verticalAlign: 'sub', paddingLeft: 9}}/>
                }>
                    <Menu.Item key="lang:en">
                        <Button onClick={() => changeLanguage('en')} type="link"
                                disabled={i18n.language === 'en'}>En</Button>
                    </Menu.Item>
                    <Menu.Item key="lang:ru">
                        <Button onClick={() => changeLanguage('ru')} type="link"
                                disabled={i18n.language === 'ru'}>Ru</Button>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Header>

    );
}

export default HeaderNavigation;