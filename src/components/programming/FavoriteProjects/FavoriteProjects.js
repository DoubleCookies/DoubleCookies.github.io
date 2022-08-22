import React from 'react';
import { Divider } from 'antd';
import './FavoriteProjects.css';
import { Trans, useTranslation } from 'react-i18next';

function FavoriteProjects() {
    const {t} = useTranslation(['programmingProject']);

    const data = [
        {
            title: 'MazeGeneratorAndSolver',
            description: <div>{'ne of the old projects that was created for fun, and in the end it sunk into the soul seriously and for long.' +
                ' Любовь к лабиринтам + визуализация + всякие фичи = <span role="img" aria-label="heart">❤</span>'}</div>,
            link: "https://github.com/DoubleCookies/MazeGeneratorAndSolver"
        },
        {
            title: 'wat-increment',
            description: <div>{'I like JS crazy stuff — at least because almost everything can be explained.'}</div>,
            link: "https://doublecookies.github.io/wat-increment"
        },
        {
            title: 'ewfish',
            description: <div>{'Probably most stylish project so far!'}</div>,
            link: "https://doublecookies.github.io/ewfish"
        },
    ];

    const dataItems = data.map(item =>
        <li key={item.title}>
            <a href={item.link} style={{marginRight: 4}}>{item.title}.</a>
            <Trans i18nKey={"programmingProject:" + item.title}>{item.description}</Trans>
        </li>);

    return (
        <div>
            <h3 className="headings-medium text-miniMedium">{t("favorite")}</h3>
            <Divider className="gradient-border-small"/>
            <div style={{marginBottom: 10}} className="block">
                <Trans i18nKey="programmingProject:favoriteDescription">Список проектов на Github'е не <i>прям чтобы большой</i>,
                    но в нём отдельно хочется выделить следующие:</Trans>
            </div>
            <ul className="what-list">
                {dataItems}
                <li><b style={{marginRight: 4}}><i><Trans i18nKey="programmingProject:inDevelopment">То, что в разработке.</Trans></i></b>
                    <Trans i18nKey="programmingProject:inDevelopmentDescription">Стоять на месте - не лучшая идея, так что в будущих проектах
                        планирую делать новые, полезные и, надеюсь, <i>прикольные</i> вещи.</Trans>
                </li>
            </ul>
        </div>
    );
}

export default FavoriteProjects;