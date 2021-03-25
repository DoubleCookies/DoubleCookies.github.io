import {useTranslation} from 'react-i18next';
import {Col, Divider, Layout, Row} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';

const {Header, Content, Footer} = Layout;

function MainPage() {
    const {t} = useTranslation(['mainPage']);
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['1']}/>
            </Header>
            <Content>
                <CookiesBlock name={"cookies"} />
                <div className="content-main">
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("mainPage:mainTitle")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>{t("mainPage:intro")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("mainPage:programmingTitle")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>
                            <div>{t("mainPage:programmingIntro")}</div><br/>
                            <div>{t("mainPage:programmingOpenSource")}</div><br/>
                            <div>{t("mainPage:programmingPreLink")}<Link to="/programming">{t("mainPage:programmingLink")}</Link></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("mainPage:hobbiesTitle")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}><Link to="/hobbies">{t("mainPage:hobbiesLink")}</Link></Col>
                    </Row>
                </div>
                <Divider className="gradient-border-end" />
            </Content>
            <Footer style={{paddingTop: 10, overflowY: 'hidden'}}>
                <FooterNavigation />
            </Footer>
        </Layout>
    );
}

export default MainPage;