import { Col, Divider, Row, Tabs } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import React from 'react';
import javaLogo from '../../../images/javaLogo.webp';
import jsLogo from '../../../images/jsLogo.webp';
import gitLogo from '../../../images/gitLogo.webp';
import './Skills.less';


function Skills() {
    const {t} = useTranslation(['programmingSection']);
    const { TabPane } = Tabs;

    return (
        <div className="skillsSection">
            <Row>
                <Col span={24}>
                    <h2 className="headings text-medium">{t("exp")}</h2>
                </Col>
            </Row>
            <Divider className="gradient-border"/>
            <Row>
                <Col span={24} className="block">{t("start")}</Col>
            </Row>
            <Row>
                <div  className="card-container">
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab={t("backendTab")} key="1">
                        <h3 className="headings-medium text-small-2">{t("javaIntro")}</h3>
                        <Divider className="gradient-border-small"/>
                        <img src={javaLogo} alt={"Java Logo"} className="progLogo"/>
                        <div>{t("javaExp")}</div>
                        <Trans i18nKey="programmingSection:backendSkills">
                            <ul style={{marginTop: 10}}>
                                <li>Spring Boot and Maven for creating, compiling and building apps</li>
                                <li>JUnit and Mockito for testing</li>
                                <li>Hibernate and PostgreSQL for databases. Also worked with MS SQL Server and Oracle
                                    Database.</li>
                            </ul>
                        </Trans>
                    </TabPane>
                    <TabPane tab={t("frontendTab")} key="2">
                        <h3 className="headings-medium text-small-2">{t("frontendIntro")}</h3>
                        <Divider className="gradient-border-small"/>
                        <img src={jsLogo} alt={"Javascript Logo"} className="progLogo"/>
                        <div>{t("frontendExp")}</div>
                        <Trans i18nKey="programmingSection:frontendSkills">
                            <ul style={{marginTop: 10}}>
                                <li>JavaScript and TypeScript as programming language. I don't know what is better.</li>
                                <li>React. Tried Angular before but it isn't my cup of tea. Maybe I'll try Vue and other
                                frameworks later.</li>
                                <li>Ant Design. Big and cool library.</li>
                                <li>HTML + CSS. It's just must have.</li>
                            </ul>
                        </Trans>
                    </TabPane>
                    <TabPane tab={t("otherTab")} key="3">
                        <h3 className="headings-medium text-small-2">{t("otherIntro")}</h3>
                        <Divider className="gradient-border-small"/>
                        <img src={gitLogo} alt={"Git Logo"} className="progLogo"/>
                        <Trans i18nKey="programmingSection:otherSkills">
                            <ul style={{marginTop: 10}}>
                                <li>C#. Probably first modern programming language I learned.</li>
                                <li>Git, Github. Version control + hosting for repos.</li>
                                <li>Github Pages + Jekyll. Hosting pages for free is awesome, and powerful static pages generator
                                is good addition to it!</li>
                            </ul>
                        </Trans>
                    </TabPane>
                </Tabs>
                </div>
            </Row>
        </div>
    );
}

export default Skills;