import {Col, Image, Row} from 'antd';
import logo from '../../images/DoubleCookies.webp';
import React from 'react';
import './CookiesBlock.css'
import {useTranslation} from 'react-i18next';

function CookiesBlock(props) {
    const {t} = useTranslation(['mainPage']);
    return(
        <div className="content-title">
            <Row type="flex" justify="center">
                <Col>
                    <div className="cookies-img-wrapper">
                        <Image preview={false} src={logo} alt={"DoubleCookies"} className={"cookies-img u--fadeInDown"} />
                    </div>

                </Col>
            </Row>
            <Row type="flex" align="middle" justify="center">
                <span className="headings text-big">{t(props.name)}</span>
            </Row>
        </div>
    );
}
export default CookiesBlock;