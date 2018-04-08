import React from 'react';
import { connect } from 'react-redux';

class ShoppingList extends React.Component {
    render() {
        console.log()
        return(
            <div>Hello</div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
};

const connectedShoppingList = connect(mapStateToProps)(ShoppingList);
export { connectedShoppingList as ShoppingList };
