import React, { useEffect } from 'react';
import { Col, Divider, Layout, List, Row } from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import i18n from "../i18n";

const {Content} = Layout;

//TODO replace div with h2-h3, change project list
function ProgrammingPage() {

    // Kinda weird but works. Github calendar need some time to render.
    useEffect(() => {
        setTimeout(() => {
            if (i18n.language === 'ru') {
                let calendarSummary = document.getElementsByClassName("react-github-calendar__meta")[0];
                if (calendarSummary) {
                    let replacement = calendarSummary.innerHTML.replace("Last year – ", "За последний год – ").replace("contributions", "изменений");
                    console.log('replacement', replacement);
                    calendarSummary.innerHTML = replacement;
                }
            }
        }, 1000);
    });
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
            <HeaderNavigation selectedKeys={['2']}/>
            <Content>
                <CookiesBlock name={"programmingTitle"}/>
                <div className="content-main">
                    <Row>
                        <Col span={24}>
                            <div className="headings text-medium">{t("exp")}</div>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row>
                        <Col span={24}>{t("start")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className="headings-medium text-miniMedium">Java</div>
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
                            <div className="headings-medium text-miniMedium">Web</div>
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
                            <div className="headings-medium text-miniMedium">{t("otherExp")}</div>
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
                            <div className="headings text-medium">Open source</div>
                        </Col>
                    </Row>
                    <Divider className="gradient-border"/>
                    <Row gutter={[0, 12]} style={{marginBottom: 10}}>
                        <Col span={24}>
                            <div>{t("programmingProject:preIntro")}<a href="https://github.com/DoubleCookies"
                                                                      target="_blank" rel="noopener noreferrer">
                                {t("programmingProject:introLink")}
                            </a>{t("programmingProject:intro")}</div>

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
                            <div className="headings text-miniMedium">{t("githubStats")}</div>
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