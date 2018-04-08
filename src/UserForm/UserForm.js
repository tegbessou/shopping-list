import React from 'react';
import { connect } from 'react-redux';
import styles from './UserForm.css';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: '',
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                address2: '',
                zipCode: '',
                city: '',
                country: '',
                phoneNumber: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      const { user } = this.state;

      if (user.id) {
          console.log('Update');
      }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            submitted: true
        })

        const { submitted } = this.state;
        const { username, password, firstName, lastName, address, zipCode, city, country, phoneNumber } = this.state.user;

        if (submitted && username && password && firstName && lastName && address && zipCode && city && country && phoneNumber ) {
            console.log('register ok');
        }
    }

    render() {
        const { submitted } = this.state;
        const { username, password, firstName, lastName, address, zipCode, city, country, phoneNumber } = this.state.user;

        return (
            <form onSubmit={this.handleSubmit} className={styles.formContainer}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="email" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                    { submitted && !username
                        ? <p className={styles.errorMessage}>Username mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    { submitted && !password
                        ? <p className={styles.errorMessage}>Password mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First name" onChange={this.handleChange} />
                    { submitted && !firstName
                        ? <p className={styles.errorMessage}>First name mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last name" onChange={this.handleChange} />
                    { submitted && !lastName
                        ? <p className={styles.errorMessage}>Last name mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="Address" onChange={this.handleChange} />
                    { submitted && !address
                        ? <p className={styles.errorMessage}>Address mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address 2</label>
                    <input type="text" className="form-control" id="address2" name="address2" placeholder="Address 2" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="zipCode">Zip code</label>
                    <input type="text" className="form-control" id="zipCode" name="zipCode" placeholder="Zip code" maxLength="5" onChange={this.handleChange} />
                    { submitted && !zipCode
                        ? <p className={styles.errorMessage}>Zip code mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" name="city" placeholder="City" onChange={this.handleChange} />
                    { submitted && !city
                        ? <p className={styles.errorMessage}>City mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" name="country" placeholder="Country" onChange={this.handleChange} />
                    { submitted && !country
                        ? <p className={styles.errorMessage}>Country mandatory</p>
                        : ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone number" onChange={this.handleChange} />
                    { submitted && !phoneNumber
                        ? <p className={styles.errorMessage}>Phone number mandatory</p>
                        : ''
                    }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
};

const connectedUserForm = connect(mapStateToProps)(UserForm);
export { connectedUserForm as UserForm };
