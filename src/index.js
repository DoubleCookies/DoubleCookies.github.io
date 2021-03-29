import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.less';
import './i18n';
import MainPage from './pages/MainPage';
import ProgrammingPage from './pages/ProgrammingPage';
import HobbiesPage from './pages/HobbiesPage';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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