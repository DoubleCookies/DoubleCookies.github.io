import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Button} from 'antd';
import {useTranslation} from 'react-i18next';
import { GlobalOutlined } from '@ant-design/icons';
import i18n from '../../i18n';
import './HeaderNavigation.css'

function HeaderNavigation(props) {
    const {t} = useTranslation(['mainPage']);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then();
    }
    const { SubMenu } = Menu;
    return(
        <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={props.selectedKeys}
            style={{ lineHeight: '32px', height: '32px' }}
        >
            <Menu.Item key="1"><Link to="/">{t('mainTitle')}</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/programming">{t('programmingTitle')}</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/hobbies">{t('hobbiesTitle')}</Link></Menu.Item>
            <SubMenu key="4" icon={<GlobalOutlined style={{fontSize: 20, verticalAlign: 'sub', marginLeft: 'auto', marginRight: 'auto'}}/>}>
                <Menu.Item key="lang:1">
                    <Button onClick={() => changeLanguage('en')} type="link" disabled={i18n.language === 'en'}>En</Button>
                </Menu.Item>
                <Menu.Item key="lang:2">
                    <Button onClick={() => changeLanguage('ru')} type="link" disabled={i18n.language === 'ru'}>Ru</Button>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default HeaderNavigation;