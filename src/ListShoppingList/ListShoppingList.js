import React from 'react';
import { connect } from 'react-redux';
import { ItemShoppingList } from '../ItemShoppingList';

class ListShoppingList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingLists: [
                {
                    id: 1,
                    content: 'One',
                    creationDate: ''
                },
                {
                    id: 2,
                    content: 'Two',
                    creationDate: '27-12-2017'
                },
                {
                    id: 3,
                    content: 'Three',
                    creationDate: '27-11-2017'
                },
                {
                    id: 4,
                    content: 'Four',
                    creationDate: '27-10-2017'
                },
                {
                    id: 5,
                    content: 'Five',
                    creationDate: '27-09-2017'
                },
                {
                    id: 6,
                    content: 'Six',
                    creationDate: '27-08-2017'
                },
                {
                    id: 7,
                    content: 'Seven',
                    creationDate: '27-07-2017'
                },
                {
                    id: 8,
                    content: 'Eight',
                    creationDate: '27-06-2017'
                },
                {
                    id: 9,
                    content: 'Nine',
                    creationDate: '27-05-2017'
                },
                {
                    id: 10,
                    content: 'Ten',
                    creationDate: '27-04-2017'
                },
            ]
        }
    }

    componentDidMount() {
      console.log('Load shopping list');
    }

    render() {
        const { shoppingLists } = this.state;

        const listItems = shoppingLists.map((shoppingList) =>
          <ItemShoppingList content={shoppingList.content} creationDate={shoppingList.creationDate} />
        );

        return (
            <table class="mui-table mui-table--bordered">
                <thead>
                    <tr>
                        <th>Content</th>
                        <th>Creation date</th>
                    </tr>
                </thead>
                <tbody>
                    { listItems }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
};

const connectedListShoppingList = connect(mapStateToProps)(ListShoppingList);
export { connectedListShoppingList as ListShoppingList };
