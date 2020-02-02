import React, { Component } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoForm from './TodoForm';
import Todolist from './Todolist';

class App extends Component{
  id = 0
  state = {
    input:'',
    todos : []
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input
      })
    });
  }

  heandleKeyPress = (e) => {
      if(e.key === 'Enter'){
          this.handleCreate();
      }
  }

  render(){
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      heandleKeyPress
    } = this;

    return (
      <TodoTemplate form={(
        <TodoForm 
          value={input}
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={heandleKeyPress}
        />
      )}>
          <Todolist todos={todos} />
      </TodoTemplate>
    )
  }
}
export default App;
