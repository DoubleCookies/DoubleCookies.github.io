import React from 'react';
import { Col, Divider, Image, Layout, Row } from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
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
                        <Col span={24}>{t("photoStart")}</Col>
                    </Row>
                    <Row style={{marginBottom: 10}}>
                        <Col span={24}>{t("photoGallery")}</Col>
                    </Row>
                    <Row style={{lineHeight: 0, textAlign: 'center'}}>
                        <Col span={24}>
                            <Image.PreviewGroup>
                                <Image
                                    width={150}
                                    alt={"Pigeon image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_0935_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_0935.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Glass image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2171_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2171.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Butterfly image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2456_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2456.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Apple tree image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2901_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2901.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Sunset image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_2929_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_2929.jpg'
                                    }}
                                />

                                <Image
                                    width={150}
                                    alt={"Glass with ice image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_3823_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_3823.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Fireworks image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_4043_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_4043.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Sunset river image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_6172_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_6172.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Flower image"}
                                    src={process.env.PUBLIC_URL + '/previewImages/IMG_6290_preview.jpg'}
                                    preview={{
                                        src: process.env.PUBLIC_URL + '/images/IMG_6290.jpg'
                                    }}
                                />
                                <Image
                                    width={150}
                                    alt={"Tree and old building image"}
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
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("fandomTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24}>{t("fandomStart")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}>{t("fandomVanguard")}</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("chessTitle")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24}>{t("chessStart")}</Col>
                    </Row>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default HobbiesPage;