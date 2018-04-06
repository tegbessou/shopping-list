import React from 'react';
import { connect } from 'react-redux';

class Register extends React.Component {
    render() {
        return (
            <div>
                Register page
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
};

const connectedRegister = connect(mapStateToProps)(Register);
export { connectedRegister as Register };
