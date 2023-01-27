import React from 'react';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import FandomIcon from '../FandomIcon/FandomIcon';
import { Divider, Layout, List, Popover } from 'antd';
import chocolateCookie from '../../../images/ChocoCookie.webp';
import './FooterNavigation.css';
import { useTranslation } from 'react-i18next';

function FooterNavigation() {
    const { Footer } = Layout;
    const { t } = useTranslation(['aboutThisPage']);
    const data = [
        {
            title: 'Antd',
            link: 'https://ant.design/',
            description: t('antd'),
        },
        {
            title: 'Create React App',
            link: 'https://create-react-app.dev/',
            description: t('createReactApp'),
        },
        {
            title: 'GitHub Pages',
            link: 'https://pages.github.com/',
            description: t('ghPages'),
        },
        {
            title: 'i18next',
            link: 'https://www.i18next.com/',
            description: t('i18next'),
        },
        {
            title: 'React Router',
            link: 'https://reactrouter.com/',
            description: t('reactRouter'),
        },
    ];
    const content = (
        <div>
            <List
                size="small"
                className="skills-list"
                header={<div>{t('title')}</div>}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta title={<a href={item.link}>{item.title}</a>} description={item.description} />
                    </List.Item>
                )}
            />
            <span style={{ fontStyle: 'italic' }}>{t('cookie')}</span>
        </div>
    );

    return (
        <Footer className="footer-block">
            <Divider className="gradient-border-end" />
            <div style={{ position: 'relative' }}>
                <div className="footer-icons">
                    <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined style={{ fontSize: 32 }} />
                    </a>
                    <a href="https://linkedin.com/in/igor-nemytyshev" target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined style={{ fontSize: 32 }} />
                    </a>
                    <a href="https://twitter.com/DblCookies" target="_blank" rel="noopener noreferrer">
                        <TwitterOutlined style={{ fontSize: 32 }} />
                    </a>
                    <a
                        href="https://community.fandom.com/wiki/User:DoubleCookies"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Fandom"
                    >
                        <FandomIcon className="fandomIcon" style={{ width: 32, height: 32 }} />
                    </a>
                </div>
                <div className="footer-font">
                    2019-2022{' '}
                    <span role="img" aria-label="cookieEmoji">
                        🍪
                    </span>
                </div>
                <Popover content={content} style={{ paddingRight: 20 }} placement="topRight">
                    <img src={chocolateCookie} alt={'ChocolateCookie'} className="footer-img" />
                </Popover>
            </div>
        </Footer>
    );
}

export default FooterNavigation;
