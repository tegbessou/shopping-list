import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { Header } from '../Header'
import { Login } from '../Login';
import { User } from '../User';

class App extends React.Component {
    render() {
        return (
          <div>
              <Router history={history}>
                  <div>
                      <Header />
                      <PrivateRoute exact path="/user" component={User} />
                      <Route path="/sign-in" component={Login} />
                  </div>
              </Router>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
