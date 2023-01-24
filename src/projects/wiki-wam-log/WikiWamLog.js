import React from 'react';
import {Layout} from 'antd';
import HeaderNavigation from '../../components/general/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../../components/general/FooterNavigation/FooterNavigation';
import CookiesBlock from '../../components/general/CookiesBlock/CookiesBlock';
import UndertaleChart from './charts/UndertaleChart';
import GeometryDashChart from './charts/GeometryDashChart';
import StevenUniverseChart from './charts/StevenUniverseChart';
import BattleCatsChart from './charts/BattleCatsChart';
import { useTranslation } from 'react-i18next';
import './WikiWamLog.css';

function WikiWamLogPage() {
    const {Content} = Layout;

    const {t} = useTranslation(['wikiWamLog']);

    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={[]}/>
            <Content>
                <CookiesBlock name={"programmingTitle"}/>
                <div className="content-main">
                    <div className="description">
                        {t("wamIntroStart")}
                        <br/>
                        {t("wamIntroFinish")}
                    </div>
                    <div className="charts-block">
                        <div className="charts-names">{t("undertale")}</div>
                        <UndertaleChart/>
                        <div className="charts-names">{t("geometryDash")}</div>
                        <GeometryDashChart/>
                        <div className="charts-names">{t("stevenUniverse")}</div>
                        <StevenUniverseChart/>
                        <div className="charts-names">{t("battleCats")}</div>
                        <BattleCatsChart/>
                    </div>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default WikiWamLogPage;