import React from 'react';
import { Col, Divider, Layout, List, Row } from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import { Trans, useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

const {Content} = Layout;

//TODO: change project list, move blocks to diff components
function ProgrammingPage() {

    const {t} = useTranslation(['programmingSection']);
    const data = [
        {
            title: 'GdStatistics',
            description: t("programmingProject:GDStatistics"),
            link: "https://github.com/DoubleCookies/GDStatistics"
        },
        {
            title: 'stats4wiki',
            description: t("programmingProject:stats4wiki"),
            link: "https://doublecookies.github.io/stats4wiki"
        },
        {
            title: 'wiki-wam-log',
            description: t("programmingProject:wikiWamLog"),
            link: "https://doublecookies.github.io/wiki-wam-log/"
        },
        {
            title: 'StringSwap',
            description: t("programmingProject:StringSwap"),
            link: "https://github.com/DoubleCookies/StringSwap"
        },
        {
            title: 'MazeGeneratorAndSolver',
            description: t("programmingProject:MazeGeneratorAndSolver"),
            link: "https://github.com/DoubleCookies/MazeGeneratorAndSolver"
        },
        {
            title: 'AssociativeRules',
            description: t("programmingProject:AssociativeRules"),
            link: "https://github.com/DoubleCookies/AssociativeRules"
        },
    ];
    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['programming']}/>
            <Content>
                <CookiesBlock name={"programmingTitle"}/>
                <div className="content-main">
                    <Row>
                        <Col span={24}>
                            <h2 className="headings text-medium">{t("exp")}</h2>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24}>{t("start")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h3 className="headings-medium text-miniMedium">Java</h3>
                        </Col>
                    </Row>
                    <Divider className="gradient-border-small"/>
                    <Row>
                        <Col span={24}>
                            <div>{t("javaExp")}</div>
                            <ul>
                                <li>Spring Boot</li>
                                <li>Maven</li>
                                <li>JUnit</li>
                                <li>Mockito</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h3 className="headings-medium text-miniMedium">Web</h3>
                        </Col>
                    </Row>
                    <Divider className="gradient-border-small"/>
                    <Row>
                        <Col span={24}>
                            <div>{t("jsExp")}</div>
                            <ul>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Ant Design</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h3 className="headings-medium text-miniMedium">{t("otherExp")}</h3>
                        </Col>
                    </Row>
                    <Divider className="gradient-border-small"/>
                    <Row>
                        <Col span={24}>
                            <ul>
                                <li>C#</li>
                            </ul>
                        </Col>
                    </Row>

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
                            <List
                                itemLayout="vertical"
                                size="small"
                                className="progList"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a href={item.link}>{item.title}</a>}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h3 className="headings text-miniMedium">{t("githubStats")}</h3>
                        </Col>
                    </Row>
                    <Divider className="gradient-border-small"/>
                    <GitHubCalendar username="DoubleCookies">
                        <ReactTooltip delayShow={50} html/>
                    </GitHubCalendar>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default ProgrammingPage;