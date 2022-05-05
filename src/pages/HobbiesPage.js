import React from 'react';
import { Col, Divider, Layout, Row } from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import ImagesGallery from '../components/hobbies/Gallery/ImagesGallery';
import { useTranslation } from "react-i18next";

const {Content} = Layout;

function HobbiesPage() {
    const {t} = useTranslation(['hobbiesSection']);
    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['hobbies']}/>
            <Content>
                <CookiesBlock name={"hobbiesTitle"}/>
                <div className="content-main">
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("photoTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24} className="block">{t("photoStart")}</Col>
                    </Row>
                    <Row style={{marginBottom: 10}}>
                        <Col span={24} className="block">{t("photoGallery")}</Col>
                    </Row>
                    <Row style={{lineHeight: 0, textAlign: 'center'}}>
                        <Col span={24}>
                            <ImagesGallery/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("fandomTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24} className="block">{t("fandomStart")}</Col>
                    </Row>
                    <Row>
                        <Col span={24} className="block">{t("fandomVanguard")}</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("chessTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24} className="block">{t("chessStart")}</Col>
                    </Row>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default HobbiesPage;