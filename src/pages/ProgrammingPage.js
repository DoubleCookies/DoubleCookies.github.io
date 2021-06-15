import React from 'react';
import { Col, Divider, Layout, Row } from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import { Trans, useTranslation } from "react-i18next";
import GithubCalendar from '../components/programming/GithubCalendar/GithubCalendar'
import ProjectsList from '../components/programming/ProjectsList/ProjectsList';
import Skills from '../components/programming/Skills/Skills';

const {Content} = Layout;

//TODO: change project list, move blocks to diff components
function ProgrammingPage() {

    const {t} = useTranslation(['programmingSection']);

    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['programming']}/>
            <Content>
                <CookiesBlock name={"programmingTitle"}/>
                <div className="content-main">
                    <Skills/>
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">Open source</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row gutter={[0, 12]} style={{marginBottom: 10}}>
                        <Col span={24}>
                            <Trans i18nKey="programmingProject:link">There are some repositories <a
                                href="https://github.com/DoubleCookies"
                                target="_blank" rel="noopener noreferrer">on my Github-page</a>:</Trans>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <ProjectsList/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h3 className="headings text-miniMedium">{t("githubStats")}</h3>
                        </Col>
                    </Row>
                    <Divider className="gradient-border-small"/>
                    <GithubCalendar/>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default ProgrammingPage;