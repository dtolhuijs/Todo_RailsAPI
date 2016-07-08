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

    reloadTodos(event) {
    let projectId = this.props.todosId;
    let component = this;

    jQuery.getJSON(`https://calm-cove-62935.herokuapp.com/todos${todosId}/todos`, function(data) {
      console.log(data);

      component.setState({
        todos: data.todos
      });

      component.reCount();
    });
  }

  reCount() {
    let component = this;

    this.setState({
      counts: {
        todo: component.todosTodo().length,
        done: component.todosDone().length
      }
    });
  }

 componentDidMount() {
   this.reloadTodos();
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
