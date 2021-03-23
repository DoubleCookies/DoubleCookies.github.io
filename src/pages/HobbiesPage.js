import React from 'react';
import {Col, Divider, Layout, Row} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import {useTranslation} from "react-i18next";

const {Header, Content, Footer} = Layout;

function HobbiesPage() {
    const {t} = useTranslation(['hobbiesSection']);
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['4']}/>
            </Header>
            <Content>
                <CookiesBlock name={"hobbiesTitle"} />
                <div className="content-main">
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("photoTitle")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>{t("photoStart")}</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("fandomTitle")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>{t("fandomStart")}</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("chessTitle")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>{t("chessStart")}</Col>
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

export default HobbiesPage;