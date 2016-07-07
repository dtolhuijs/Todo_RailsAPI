import _ from 'lodash';
import jQuery from 'jquery';
import React from 'react';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';

  class TodosList extends React.Component {
    constructor(){
      super();

      this.state = {
        message: "There are no task yet.",
        todos: []
      };
    }

    renderItems(){
      const props = _.omit(this.props, 'todos');

      return _.map(this.props.todos,
        (todo, index) => <TodosListItem key={index}
        {...todo} {...props} />
      );
    }

    render() {
      return (
        <table>
          <TodosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      );
    }
  }

export default TodosList;
