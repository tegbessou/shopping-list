import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { Header } from '../Header'
import { Login } from '../Login';
import { Register } from '../Register';
import { User } from '../User';
import { ShoppingList } from '../ShoppingList';
import styles from './App.css';

class App extends React.Component {
    render() {
        return (
          <div>
              <Router history={history}>
                  <Switch>
                      <div>
                          <Header />
                          <div className={ styles.container }>
                              <Route path="/user" component={User} />
                              <Route path="/sign-in" component={Login} />
                              <Route path="/register" component={Register} />
                              <Route path="/shopping-list/:id" component={ShoppingList} something="dope" />
                          </div>
                      </div>
                </Switch>
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
