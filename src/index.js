import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import './i18n';
import MainPage from './pages/MainPage';
import ProgrammingPage from './pages/ProgrammingPage';
import HobbiesPage from './pages/HobbiesPage';

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/programming" component={ProgrammingPage} />
                <Route path="/hobbies" component={HobbiesPage} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(
<Routes />,
    document.getElementById('root')
);