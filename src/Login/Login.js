import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    render() {
        return(
            <div>
                LoginPage
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
};

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };
