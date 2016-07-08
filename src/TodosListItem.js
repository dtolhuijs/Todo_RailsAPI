import React from 'react';

  class TodosListItem extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isEditing: false
    };
  }

  let component = this;

    let newState = jQuery.extend({
      id: this.state.id,
      title: this.state.title,
      completed: this.state.completed
    }, updatedState);

    this.setState(newState);

    console.log(newState);

    jQuery.ajax({
      type: "PUT",
      url: `https://calm-cove-62935.herokuapp.com/todos${this.props.todoId}/todos/${this.props.id}.json`,
      data: JSON.stringify({
          todo: newState
      }),
      contentType: "application/json",
      dataType: "json"
    })

  onEditClick() {
    this.setState({isEditing: true});
  }
  onCancelClick() {
    this.setState({isEditing: false});
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({isEditing: false});
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };
    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
            </form>
        </td>
      );
    }

    return (
      <td style={taskStyle}
        onclick={this.props.toggleTask.bind(this, task)}>
         <input type="checkbox" />{task}
      </td>
    );
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}
        >Delete</button>
      </td>
    );
  }

    render() {
      return (
        <tr>
          {this.renderTaskSection()}
          {this.renderActionSection()}
        </tr>
      );
    }
  }

export default TodosListItem;
