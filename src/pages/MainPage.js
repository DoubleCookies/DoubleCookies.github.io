import { Trans, useTranslation } from 'react-i18next';
import { Col, Divider, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import MainPageInfo from '../components/MainPageInfo/MainPageInfo';

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
                        <Col span={24} className="block text-miniMedium">
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
                    <Row justify="center">
                        <Col span={10} flex>
                            <div className="progLink"><Link to="/programming">{t("programmingLink")}</Link></div>
                        </Col>
                        <Col span={10} flex>
                            <div className="hobbyLink"><Link to="/hobbies">{t("hobbiesLink")}</Link></div>
                        </Col>
                    </Row>
                    {/*тут уже всё остальное надо убрать*/}
                    {/*<Row>*/}
                    {/*    <Col span={24}>*/}
                    {/*        <h2 className="headings text-medium">{t("programmingTitle")}</h2>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Divider className="gradient-border"/>*/}
                    {/*<Row>*/}
                    {/*    <Col span={24} className="block">*/}
                    {/*        <div>{t("programmingIntro")}</div>*/}
                    {/*        <br/>*/}
                    {/*        <div>{t("programmingOpenSource")}</div>*/}
                    {/*        <br/>*/}
                    {/*        <div><Trans i18nKey="mainPage:programmingLink">More information about me can be found in <Link*/}
                    {/*            to="/programming">this section</Link>.</Trans></div>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col span={24}>*/}
                    {/*        <h2 className="headings text-medium">{t("hobbiesTitle")}</h2>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Divider className="gradient-border"/>*/}
                    {/*<Row>*/}
                    {/*    <Col span={24} className="block"><Link to="/hobbies">{t("hobbiesLink")}</Link></Col>*/}
                    {/*</Row>*/}
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default MainPage;