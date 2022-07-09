import { Trans, useTranslation } from 'react-i18next';
import { Col, Divider, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import HeaderNavigation from '../components/general/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/general/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/general/CookiesBlock/CookiesBlock';
import MainPageInfo from '../components/mainPage/MainPageInfo/MainPageInfo';

const {Content} = Layout;

function MainPage() {
    const {t} = useTranslation(['mainPage']);
    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['main']}/>
            <Content>
                <CookiesBlock name={"cookies"}/>
                <div className="content-main">
                    <Row className="mainpage-margin">
                        <Col span={24} className="block">
                            <Trans i18nKey="mainPage:intro">Hello! My name is <b>Igor</b> but some people know me
                                as <b>DoubleCookies</b> — person who loves programming,
                                eating cookies, check statistics and other things!</Trans>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-miniMedium">{t("mainTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24}>
                            <MainPageInfo/>
                        </Col>
                    </Row>
                    <Row justify="center" gutter={12} className="mainPageButtons">
                        <Col span={12} flex>
                            <div className="progLink"><Link to="/programming">{t("programmingLink")}</Link></div>
                        </Col>
                        <Col span={12} flex>
                            <div className="hobbyLink"><Link to="/hobbies">{t("hobbiesLink")}</Link></div>
                        </Col>
                    </Row>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default MainPage;