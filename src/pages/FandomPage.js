import React from 'react';
import {Divider, Layout} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';

const {Header, Content, Footer} = Layout;

function FandomPage() {
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['3']}/>
            </Header>
            <Content>
                <CookiesBlock name={"fandomTitle"} />
                <div className="content-main">
                    Work in progress!
                </div>
                <Divider className="gradient-border-end" />
            </Content>
            <Footer style={{paddingTop: 10, overflowY: 'hidden'}}>
                <FooterNavigation />
            </Footer>

        </Layout>
    );
}

export default FandomPage;