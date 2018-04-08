import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;

        this.setState({
            submitted: true
        })

        if (username && password) {
            console.log('Ask login')
        }
        console.log('Failed');
    }

    render() {
        const { submitted, username, password} = this.state;

        return(
            <div className={styles.container}>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit} className={styles.formContainer}>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input onChange={this.handleChange} type="email" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter email" />
                        {submitted && !username
                            ? <p className={styles.errorMessage}>Email address missing</p>
                            : ''
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        {submitted && !password
                            ? <p className={styles.errorMessage}>Password missing</p>
                            : ''
                        }
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className={"btn btn-primary " + styles.spaceBetweenButton} to="/register">Register</Link>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
};

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };
