import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';


function ProjectsList() {
    const {t} = useTranslation(['programmingProject']);
    const data = [
        {
            title: 'GdStatistics',
            description: t("GDStatistics"),
            link: "https://github.com/DoubleCookies/GDStatistics"
        },
        {
            title: 'stats4wiki',
            description: t("stats4wiki"),
            link: "https://doublecookies.github.io/stats4wiki"
        },
        {
            title: 'wiki-wam-log',
            description: t("wikiWamLog"),
            link: "https://doublecookies.github.io/wiki-wam-log/"
        },
        {
            title: 'StringSwap',
            description: t("StringSwap"),
            link: "https://github.com/DoubleCookies/StringSwap"
        },
        {
            title: 'AssociativeRules',
            description: t("AssociativeRules"),
            link: "https://github.com/DoubleCookies/AssociativeRules"
        },
    ];

    const dataItems = data.map(item =>
        <li key={item.title}>
            <a href={item.link} style={{marginRight: 4}}>{item.title}.</a>
            {item.description}
        </li>);

    return (
        <div>
            <h3 className="headings-medium text-miniMedium">{t("mention")}</h3>
            <Divider className="gradient-border-small"/>
            <div style={{marginBottom: 10}}>{t("mentionProjects")}</div>
            <ul>
                {dataItems}
            </ul>
        </div>
    );
}

export default ProjectsList;