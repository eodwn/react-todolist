import React, { Component } from 'react';

class TodoItem extends Component{
    render(){
        const {text} = this.props;

        return (
            <div>
                <div>{text}</div>
                <button>닫기</button>
            </div>
        );
    }
}

export default TodoItem;