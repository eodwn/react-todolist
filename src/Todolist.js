import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todolist extends Component{
    render(){
        const {todos} = this.props;

        const Todolist = todos.map(
            ({id, text}) => (
              <TodoItem
                key={`todo-${id}`}
                text={text}
              />
            )
        );

        return(
            <div>
                {Todolist}
            </div>
        )
    }
}

export default Todolist;