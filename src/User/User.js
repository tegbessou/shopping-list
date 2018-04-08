import React from 'react';
import { connect } from 'react-redux';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import { UserForm } from '../UserForm';
import { ListShoppingList } from '../ListShoppingList';

class User extends React.Component {
    render () {
        const user = {
            username: 'pedro'
        }

        return (
            <div>
                <Tabs justified={true}>
                    <Tab value="pane-1" label="Informations">
                        <UserForm user={user} />
                    </Tab>
                    <Tab value="pane-2" label="My Shopping List">
                        <ListShoppingList />
                    </Tab>
                </Tabs>
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
