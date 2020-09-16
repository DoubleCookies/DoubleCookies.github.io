import React from 'react';
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';
import FandomIcon from '../FandomIcon/FandomIcon';
import {Image, List, Popover} from 'antd';
import chocolateCookie from '../../images/ChocoCookie.png';
import './FooterNavigation.css';
import {useTranslation} from 'react-i18next';

function FooterNavigation() {
    const {t} = useTranslation(['thisPage']);
    const data = [
        {
            title: 'Antd',
            link: 'https://ant.design/',
            description: t('antd')
        },
        {
            title: 'Create React App',
            link: 'https://create-react-app.dev/',
            description: t('createReactApp')
        },
        {
            title: 'GitHub Pages',
            link: 'https://pages.github.com/',
            description: t('ghPages')
        },
        {
            title: 'i18next',
            link: 'https://www.i18next.com/',
            description: t('i18next')
        },
        {
            title: 'React Router',
            link: 'https://reactrouter.com/',
            description: t('reactRouter')
        }
    ];
    const content = (
        <div>
            <List
                size="large"
                style={{maxWidth: 400}}
                header={<div>{t('title')}</div>}
                dataSource={data}
                renderItem={item => <List.Item>
                    <List.Item.Meta
                        title={<a href={item.link}>{item.title}</a>}
                        description={item.description}
                    />
                </List.Item>}
            />
            <span style={{fontStyle: 'italic'}}>{t('cookie')}</span>
        </div>

    );

    return(
        <div style={{position: 'relative'}}>
            <div className="footerIcons">
                <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined style={{fontSize: 32}} /></a>
                <a href="https://twitter.com/BigDoubleCookie" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{fontSize: 32}} /></a>
                <a href="https://community.fandom.com/wiki/User:DoubleCookies" target="_blank" rel="noopener noreferrer"><FandomIcon className="fandomIcon" style={{width: 32, height: 32}} /></a>
            </div>
            <div className="footer-font">
                Copyright © 2020 Igor Nemytyshev
            </div>
            <Popover content={content} style={{paddingRight: 20}} placement="topRight">
                <Image preview={false} src={chocolateCookie} alt={"ChocolateCookie"} className={"footerImg"} />
            </Popover>

        </div>
    );
}

export default FooterNavigation;