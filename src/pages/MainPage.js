import { Trans, useTranslation } from 'react-i18next';
import { Col, Divider, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';

const {Content} = Layout;

function MainPage() {
    const {t} = useTranslation(['mainPage']);
    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['main']}/>
            <Content>
                <CookiesBlock name={"cookies"}/>
                <div className="content-main">
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("mainTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24} className="block">{t("mainPage:intro")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("programmingTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24} className="block">
                            <div>{t("programmingIntro")}</div>
                            <br/>
                            <div>{t("programmingOpenSource")}</div>
                            <br/>
                            <div><Trans i18nKey="mainPage:programmingLink">More information about me can be found in <Link
                                to="/programming">this section</Link>.</Trans></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("hobbiesTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24} className="block"><Link to="/hobbies">{t("hobbiesLink")}</Link></Col>
                    </Row>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default MainPage;