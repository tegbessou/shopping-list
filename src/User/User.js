import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
    render () {
        return (
            <div>
                User Page
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
};

const connectedUser = connect(mapStateToProps)(User);
export { connectedUser as User };
