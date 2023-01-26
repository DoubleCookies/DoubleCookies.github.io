import React from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Layout } from 'antd';
import HeaderNavigation from '../../components/general/HeaderNavigation/HeaderNavigation';
import CookiesBlock from '../../components/general/CookiesBlock/CookiesBlock';
import FooterNavigation from '../../components/general/FooterNavigation/FooterNavigation';
import './StatsForWiki.css';

function StatsForWiki() {
    const {Content} = Layout;
    const {t} = useTranslation(['stats4wiki']);

    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={[]}/>
            <Content>
                <CookiesBlock name={"stats4wiki"}/>
                <div className="content-main">
                    <h2 className="headings text-medium">{t("aboutTitle")}</h2>
                    <Trans i18nKey="stats4wiki:aboutText">
                        В данном проекте собираются данные по топ-50 самых скачиваемых и залайканных уровней
                        (как в целом, так и для отдельной категории \"демонических\" уровней), после чего формируется
                        таблица, которая затем размещается на Geometry Dash вики. Параллельно с этим генерируется
                        содержимое для пары шаблонов, которые используются в статьях про самые скачиваемые уровни.
                        <br/>
                        В итоге получается своего рода полуавтоматическое обновление топов и шаблонов (и, как бонус,
                        на вики хранится история изменений этих топов).
                    </Trans>
                    <h2 className="headings text-medium">{t("workTitle")}</h2>
                    <Trans i18nKey="stats4wiki:workList">
                        Всё довольно просто и последовательно:
                        <ul className="tight-list">
                            <li>Обращаемся к серверам Geometry Dash и получаем страницу (10 уровней). В зависимости
                                от типа (кол-во скачиваний/лайков) формируем два набора уровней.
                            </li>
                            <li>Останавливаемся в тот момент, когда в списке будет 50 демонов (при этом автоматически
                                выполняется условие, что у нас будет 50 любых уровней).
                            </li>
                            <li>Из каждого списка формируем ещё два — для всех видов уровней и только для демонов.</li>
                            <li>Каждый список переводим в текстовый формат (с учётом различных нюансов по типу шаблонов
                                сложности, наличия или отсутствия ссылок, разделителей и т. д.)
                            </li>
                            <li>Формируем текст для шаблонов и также сохраняем.</li>
                            <li><b>Готово!</b></li>
                        </ul>
                    </Trans>
                    <h2 className="headings text-medium">{t("plansTitle")}</h2>
                    <Trans i18nKey="stats4wiki:plansList">
                        <ul className="tight-list">
                            <li>Можно будет пройтись по старым коммитам, собрать информацию по прошлым месяцам/годам
                                и построить сводную табличку/график/<i>другую штуку</i>.
                            </li>
                            <li>Добавить иллюстраций. Все же любят картинки?</li>
                        </ul>
                    </Trans>
                </div>
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default StatsForWiki;
