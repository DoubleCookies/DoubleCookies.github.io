import { List } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';


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
            description: t("programmingProject:StringSwap"),
            link: "https://github.com/DoubleCookies/StringSwap"
        },
        {
            title: 'MazeGeneratorAndSolver',
            description: t("MazeGeneratorAndSolver"),
            link: "https://github.com/DoubleCookies/MazeGeneratorAndSolver"
        },
        {
            title: 'AssociativeRules',
            description: t("AssociativeRules"),
            link: "https://github.com/DoubleCookies/AssociativeRules"
        },
    ];

    return (
        <List
            itemLayout="vertical"
            size="small"
            className="projectsList"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href={item.link}>{item.title}</a>}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    );
}

export default ProjectsList;