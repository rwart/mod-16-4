import React from 'react';
import uuid from 'uuid'; // uuid/v4 ?
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: uuid.v4(),
          text: 'clean room', },
        { id: uuid.v4(),
          text: 'wash the dishes', },
        { id: uuid.v4(),
          text: 'feed my cat', },
      ],
    };
  }

  addTodo(val) {

    const todo = {
      text: val,
      id: uuid.v4(),
    };

    const data = [...this.state.data, todo];
    this.setState({ data });  // można by użyć prev => {}
  }

  removeTodo = id => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder }); // można by użyć prev => {}
  };

  render() {
    return (
      <div className={style.TodoApp}>
        <Title todoNumber={this.state.data.length}/>
        <TodoList List={this.state.data} HandleRemoveTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
