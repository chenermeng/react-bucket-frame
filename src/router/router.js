import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home/inedx.jsx';
import Page404 from '../pages/404/index.jsx';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/404">404</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/404" component={Page404}/>
            </Switch>
        </div>
    </Router>
);
export default getRouter;