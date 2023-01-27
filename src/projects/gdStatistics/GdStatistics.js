import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Layout } from 'antd';
import HeaderNavigation from '../../components/general/HeaderNavigation/HeaderNavigation';
import CookiesBlock from '../../components/general/CookiesBlock/CookiesBlock';
import FooterNavigation from '../../components/general/FooterNavigation/FooterNavigation';
import './GdStatistics.css';

function GdStatistics() {
    const { Content } = Layout;
    const { t } = useTranslation(['gdStatistics']);

    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={[]} />
            <Content>
                <CookiesBlock name={'gdStatistics'} />
                <div className="content-main">
                    <h2 className="headings text-medium">{t('aboutTitle')}</h2>
                    <Trans i18nKey="gdStatistics:aboutText">
                        Этот проект посвящён сбору статистики по уровням в Geometry Dash — сколько раз уровень был
                        скачан, лайкнут, кем он был создан, какой трек использовался и т. д. После этого все результаты
                        заносятся в различные таблицы.. и всё!
                    </Trans>
                    <h2 className="headings text-medium">{t('locationTitle')}</h2>
                    <Trans i18nKey="gdStatistics:locationText">
                        Посмотреть на все таблицы можно{' '}
                        <a href="https://github.com/DoubleCookies/gd-statistics/tree/master/Statistics">тут</a>.
                    </Trans>
                    <h2 className="headings text-medium">{t('workTitle')}</h2>
                    <Trans i18nKey="gdStatistics:workList">
                        Всё довольно просто и последовательно:
                        <ul className="tight-list">
                            <li>
                                Обращаемся к серверам Geometry Dash и получаем страницу (10 featured-уровней). После
                                этого продолжаем получать страницы с уровнями до тех пор, пока они не закончатся.
                            </li>
                            <li>
                                На основе списка featured-уровней формируем отдельный список epic-уровней (так как они
                                автоматически являются featured — список будет полным).
                            </li>
                            <li>
                                Всячески манипулируя списками формируем различные новые списки — по сложностям, по
                                кол-ву использований саундтреков, по кол-ву уровней у определенных игроков, и т. д.
                            </li>
                            <li>Сохраняем списки в отдельные файлы.</li>
                            <li>
                                <b>Готово!</b>
                            </li>
                        </ul>
                    </Trans>
                    <h2 className="headings text-medium">{t('plansTitle')}</h2>
                    <Trans i18nKey="gdStatistics:plansList">
                        <ul className="tight-list">
                            <li>
                                Можно будет пройтись по старым коммитам, собрать информацию по прошлым месяцам/годам и
                                построить сводную табличку/график/<i>другую штуку</i>.
                            </li>
                            <li>Добавить иллюстраций. Все же любят картинки?</li>
                        </ul>
                    </Trans>
                </div>
            </Content>
            <FooterNavigation />
        </Layout>
    );
}

export default GdStatistics;
