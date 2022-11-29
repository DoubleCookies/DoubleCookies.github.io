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
            <ul className="what-list">
                {dataItems}
            </ul>
        </div>
    );
}

export default FavoriteProjects;