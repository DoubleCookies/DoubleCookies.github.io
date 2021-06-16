import React from 'react';
import { Layout} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import Skills from '../components/programming/Skills/Skills';
import OpenSource from '../components/programming/OpenSource/OpenSource';


function ProgrammingPage() {
    const {Content} = Layout;

    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['programming']}/>
            <Content>
                <CookiesBlock name={"programmingTitle"}/>
                <div className="content-main">
                    <Skills/>
                    <OpenSource/>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default ProgrammingPage;