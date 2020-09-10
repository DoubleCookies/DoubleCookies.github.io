import {useTranslation} from 'react-i18next';
import {Col, Divider, Image, Layout, Row} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
import logo from '../images/doublecookies av.png';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';

const {Header, Content, Footer} = Layout;

function MainPage() {
    const {t} = useTranslation(['about', 'programming', 'fandom', 'photography']);
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['1']}/>
            </Header>
            <Content>
                <div className="content-title">
                    <Row type="flex" gutter={48} align="middle">
                        <Col span={6} offset={2}>
                            <Image preview={false} src={logo} alt={"Cookies"} className={"myImg u--fadeInDown"} />
                        </Col>
                        <Col span={15} offset={1}>
                            <div>
                                <span className="headings text-big">DoubleCookies</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="content-main">
                    <Row gutter={[8, 8]} style={{marginTop: 10}}>
                        <Col span={24}><div className="headings text-medium">{t("about:title")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("about:intro")}</Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">{t("programming:title")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("programming:intro")}<br/><Link to="/programming">Link to programming</Link></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">FANDOM</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("fandom:intro")}</Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">{t("photography:title")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("photography:intro")}</Col>
                    </Row>
                </div>
                <Divider className="gradient-border-end" />
            </Content>
            <Footer style={{paddingTop: 36, overflowY: 'hidden'}}>
                <FooterNavigation/>
            </Footer>
        </Layout>
    );
}

export default MainPage;