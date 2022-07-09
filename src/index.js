import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.less';
import './i18n';
import MainPage from './views/MainPage';
import ProgrammingPage from './views/ProgrammingPage';
import HobbiesPage from './views/HobbiesPage';
import ScrollToTop from "./services/ScrollToTop/ScrollToTop";

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/programming" component={ProgrammingPage} />
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