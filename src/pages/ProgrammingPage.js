import React from 'react';
import {Col, Divider, Layout, List, Row} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import {useTranslation} from "react-i18next";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

const {Content} = Layout;

//TODO replace div with h2-h3, change project list
function ProgrammingPage() {
    const {t} = useTranslation(['programmingSection']);
    const data = [
        {title: 'GdStatistics', description: t("programmingProject:GDStatistics")},
        {title: 'stats4wiki', description: t("programmingProject:stats4wiki")},
        {title: 'StringSwap', description: t("programmingProject:StringSwap")},
        {title: 'MazeGeneratorAndSolver', description: t("programmingProject:MazeGeneratorAndSolver")},
        {title: 'AssociativeRules', description: t("programmingProject:AssociativeRules")},
        ];
    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['2']}/>
            <Content>
                <CookiesBlock name={"programmingTitle"} />
                <div className="content-main">
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("exp")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>{t("start")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}><div className="headings-medium text-miniMedium">Java</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
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
                        <Col span={24}><div className="headings-medium text-miniMedium">Web</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
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
                        <Col span={24}><div className="headings-medium text-miniMedium">{t("otherExp")}</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <Row>
                        <Col span={24}>
                            <ul>
                                <li>C#</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}><div className="headings text-medium">Open source</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[0, 12]} style={{marginBottom: 10}}>
                        <Col span={24}>{t("programmingProject:intro")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <List
                                bordered
                                itemLayout="vertical"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a href={"https://github.com/DoubleCookies/" + item.title}>{item.title}</a>}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                                />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><div className="headings text-miniMedium">{t("githubStats")}</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <GitHubCalendar username="DoubleCookies">
                        <ReactTooltip delayShow={50} html />
                    </GitHubCalendar>
                </div>
            </Content>
            <FooterNavigation />
        </Layout>
    );
}

export default ProgrammingPage;