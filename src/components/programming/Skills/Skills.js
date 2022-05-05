import { Col, Divider, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import React from 'react';


function Skills() {
    const {t} = useTranslation(['programmingSection']);

    return (
        <div>
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
                <Col span={24}>
                    <h3 className="headings-medium text-miniMedium">Java</h3>
                </Col>
            </Row>
            <Divider className="gradient-border-small"/>
            <Row>
                <Col span={24} className="block">
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
                <Col span={24} className="block">
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
                <Col span={24} className="block">
                    <ul>
                        <li>C#</li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default Skills;