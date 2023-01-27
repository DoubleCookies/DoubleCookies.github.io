import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { GlobalOutlined } from '@ant-design/icons';
import i18n from '../../../i18n';
import './HeaderNavigation.css';

function HeaderNavigation(props) {
    const { Header } = Layout;
    const { t } = useTranslation(['mainPage']);
    const changeLanguage = () => {
        if (i18n.language === 'ru') i18n.changeLanguage('en').then();
        else i18n.changeLanguage('ru').then();
    };

    return (
        <Header>
            <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={props.selectedKeys}
                style={{ lineHeight: '32px', height: '32px' }}
            >
                <Menu.Item key="languageSelector">
                    <GlobalOutlined
                        onClick={() => changeLanguage()}
                        style={{
                            fontSize: 20,
                            verticalAlign: 'sub',
                        }}
                    />
                </Menu.Item>
                <Menu.Item key="main">
                    <Link to="/">{t('mainTitle')}</Link>
                </Menu.Item>
                <Menu.Item key="programming">
                    <Link to="/programming">{t('programmingTitle')}</Link>
                </Menu.Item>
                <Menu.Item key="projects">
                    <Link to="/projects">{t('projectsTitle')}</Link>
                </Menu.Item>
                <Menu.Item key="hobbies">
                    <Link to="/hobbies">{t('hobbiesTitle')}</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default HeaderNavigation;
