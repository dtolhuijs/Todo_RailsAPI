import React from 'react';

  class TodosListItem extends React.Component {
      render() {
          return (
              <tr>
                <td><li>{this.props.task}</li></td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
          );
      }
  }

export default TodosListItem;
