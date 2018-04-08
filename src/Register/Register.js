import React from 'react';
import { connect } from 'react-redux';
import styles from './Register.css';
import { UserForm } from '../UserForm';

class Register extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Register</h1>
                <UserForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
};

const connectedRegister = connect(mapStateToProps)(Register);
export { connectedRegister as Register };
