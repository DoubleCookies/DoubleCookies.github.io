import { Col, Divider, Row } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import ProjectsList from './ProjectsList/ProjectsList';
import GithubCalendar from './GithubCalendar/GithubCalendar';
import React from 'react';
import FavoriteProjects from '../FavoriteProjects/FavoriteProjects';


function OpenSource() {
    const {t} = useTranslation(['programmingSection']);

    return (
      <div>
          <Row>
              <Col span={24}>
                  <h2 className="headings text-medium">Open source</h2>
              </Col>
          </Row>
          <Divider className="gradient-border"/>
          <Row gutter={[0, 12]} style={{marginBottom: 10}}>
              <Col span={24}>
                  <Trans i18nKey="link">There are some repositories <a
                      href="https://github.com/DoubleCookies"
                      target="_blank" rel="noopener noreferrer">on my Github-page</a>:</Trans>
              </Col>
          </Row>
          <Row>
              <Col span={24}>
                  <FavoriteProjects/>
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
    );
}

export default OpenSource;