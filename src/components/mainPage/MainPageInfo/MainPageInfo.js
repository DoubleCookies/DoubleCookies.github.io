import { useTranslation } from 'react-i18next';
import React from 'react';

function MainPageInfo() {
    const { t } = useTranslation(['aboutBlock']);
    const data = [
        {
            description: t('Java'),
        },
        {
            description: t('Skills'),
        },
        {
            description: t('Project'),
        },
        {
            description: t('TeamManagement'),
        },
        {
            description: t('OpenSource'),
        },
        {
            description: t('Hobbies'),
        },
        {
            description: t('SplatoonStart'),
        },
        {
            description: t('SplatoonFin'),
        },
    ];

    const dataItems = data.map((item, index) => <li key={index}>{item.description}</li>);

    return (
        <div>
            <ul>{dataItems}</ul>
        </div>
    );
}

export default MainPageInfo;
