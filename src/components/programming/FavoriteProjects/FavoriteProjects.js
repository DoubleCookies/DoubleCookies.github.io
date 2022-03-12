import React from 'react';
import { Divider } from 'antd';
import './FavoriteProjects.css';

function FavoriteProjects() {
    // const {t} = useTranslation(['programmingProject']);

    return (
        <div>
            <h3 className="headings-medium text-miniMedium">Любимые проекты</h3>
            <Divider className="gradient-border-small"/>
            <div style={{marginBottom: 10}}>Список проектов на Github'е не <i>прям чтобы большой</i>, но в нём отдельно
                хочется выделить следующие:
            </div>
            <ul className="what-list">
                <li><a href="https://github.com/DoubleCookies/MazeGeneratorAndSolver"
                       style={{marginRight: 4}}>MazeGeneratorAndSolver.</a> Один из старых проектов, который был создан
                    ради развлечения,
                    и в итоге он запал в душу всерьёз и надолго. Любовь к лабиринтам + визуализация + всякие фичи
                    = <span role="img" aria-label="heart">❤</span></li>
                <li><a href="https://github.com/DoubleCookies/wat-increment"
                       style={{marginRight: 4}}>wat-increment.</a> Пусть он и незавершён, но тем не менее мне очень
                    нравится тема
                    <i>хаоса</i> в Javascript, за которым скрывается <i>порядок</i>.
                </li>
                <li><b><i>То, что в разработке.</i></b> Стоять на месте - не лучшая идея, так что в будущих проектах
                    планирую делать новые, полезные и, надеюсь, <i>прикольные</i> вещи.
                </li>
            </ul>
        </div>
    );
}

export default FavoriteProjects;