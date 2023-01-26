import React from 'react';
import { Divider, Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import ComponentTabs from './components/ComponentTabs';
import CookiesBlock from '../../components/general/CookiesBlock/CookiesBlock';
import HeaderNavigation from '../../components/general/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../../components/general/FooterNavigation/FooterNavigation';

import './StringSwapWeb.css';
import 'react-tabs/style/react-tabs.css';

function StringSwapWebPage() {
    const {Content} = Layout;

    const {t} = useTranslation(['stringSwap']);

    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={[]}/>
            <Content>
                <CookiesBlock name={"stringSwap"}/>
                <div className="content-main">
                    <div className="description content-block">
                        {t("intro")}
                    </div>
                    <Divider className="gradient-border"/>
                    <div className="content-block">
                        <ComponentTabs/>
                    </div>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default StringSwapWebPage;