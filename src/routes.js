import React from 'react'
import { HashRouter, Route, Switch, } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Helmet } from 'react-helmet'
import favicon from 'Assets/images/favicon.png'

import Home from 'Containers/Home/Home';
import Login from 'Containers/Login/Login';
import NotFound404 from 'Containers/404/404';

const browserHistory = createBrowserHistory();

const router = () => {
  return (

    // Using HashRouter to allow entering an URL directly, you can try to find some workaround for 
    // BrowserRouter or Router with `history`. This aim to keep the code short and simple.
    <HashRouter>
      <div>
          <Helmet>
            <link rel="icon" type="image/png" href={favicon} />
          </Helmet>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route component={NotFound404} />
          </Switch>
      </div>
    </HashRouter>
  );
}
export default router