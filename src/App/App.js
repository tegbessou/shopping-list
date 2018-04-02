import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          Hello world !!
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    }
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
