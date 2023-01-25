import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.less';
import './i18n';
import MainPage from './views/MainPage';
import ProgrammingPage from './views/ProgrammingPage';
import HobbiesPage from './views/HobbiesPage';
import ScrollToTop from "./services/ScrollToTop/ScrollToTop";
import ProjectsPage from './views/ProjectsPage';
import WikiWamLogPage from './projects/wiki-wam-log/WikiWamLog';
import StringSwapWebPage from './projects/string-swap-web/StringSwapWeb';

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/projects/wiki-wam-log" component={WikiWamLogPage} />
                    <Route exact path="/projects/string-swap-web" component={StringSwapWebPage} />
                    <Route path="/programming" component={ProgrammingPage} />
                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="/hobbies" component={HobbiesPage} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}

ReactDOM.render(
<Routes />,
    document.getElementById('root')
);