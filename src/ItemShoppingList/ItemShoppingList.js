import React from 'react';
import { connect } from 'react-redux';

class ItemShoppingList extends React.Component {
    render() {
        const { content, creationDate } = this.props;
        return(
            <tr>
                <td>{this.props.content}</td>
                <td>{this.props.creationDate}</td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
};

const connectedItemShoppingList = connect(mapStateToProps)(ItemShoppingList);
export { connectedItemShoppingList as ItemShoppingList };
