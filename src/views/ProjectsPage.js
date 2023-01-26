import React from 'react';
import { Col, Divider, Layout, Row } from 'antd';
import HeaderNavigation from '../components/general/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/general/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/general/CookiesBlock/CookiesBlock';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ProjectsPage() {
    const {Content} = Layout;
    const {t} = useTranslation(['programmingSection']);

    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['projects']}/>
            <Content>
                <CookiesBlock name={"projectsTitle"}/>
                <div className="content-main">
                    <div>
                        <Row>
                            <Col span={24}>
                                <h2 className="headings text-medium">{t("Small Projects")}</h2>
                            </Col>
                        </Row>
                    </div>
                    <ul>
                        <li><Link to="/projects/wiki-wam-log">Wiki WAM Log</Link></li>
                        <li><Link to="/projects/string-swap-web">String Swap</Link></li>
                        <li><Link to="/projects/stats4wiki">stats4wiki</Link></li>

                    </ul>
                    <Divider className="gradient-border-end"/>
                    <i>Work in progress. More info soon!</i>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default ProjectsPage;