import React from 'react';
import TodosList from './TodosList';

const todos = [
  {
    task: "do homework",
    isCompleted: false
  },
  {
    task: "eat dinner",
    isCompleted: true
  },
  {
    task: "learn React",
    isCompleted: false
  },
  {
    task: "play a game",
    isCompleted: true
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

    render() {
        return (
          <div>
            <h1>Todo List</h1>
            <TodosList todos={this.state.todos}/>
          </div>
        );
    }
}

export default App;
