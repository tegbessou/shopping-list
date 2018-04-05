import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
              <Link className="navbar-brand" to="/">Shopping List</Link>
              <div id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        { user
                            ? <Link className="nav-link" to="/user">User</Link>
                            : <Link className="nav-link" to="/sign-in">Sign In</Link>
                        }
                      </li>
                    </ul>
              </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
};

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
