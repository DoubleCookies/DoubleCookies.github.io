import React from 'react';
import {Col, Divider, Layout, Row, Image} from 'antd';
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
                    <Row style={{marginBottom: 10}}>
                        <Col span={24}>{t("photoGallery")}</Col>
                    </Row>
                    <Row style={{lineHeight: 0, textAlign: 'center'}}>
                        <Col span={24}>
                            <Image.PreviewGroup>
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_0935_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_0935.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2171_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2171.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2456_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2456.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2901_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2901.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2929_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2929.jpg'
                                    }}
                                />

                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_3823_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_3823.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_4043_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_4043.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_6172_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_6172.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_6290_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_6290.jpg'
                                    }}
                                />
                                <Image
                                    width={160}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_6600_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_6600.jpg'
                                    }}
                                />
                            </Image.PreviewGroup>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("fandomTitle")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>{t("fandomStart")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}>{t("fandomVanguard")}</Col>
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