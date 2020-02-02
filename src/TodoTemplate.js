import React from 'react';

const TodoTemplate = ({form, children}) => {
    return(
        <div>
            <div>오늘할일</div>
            <div>{form}</div>
            <div>{children}</div>
        </div>
        
    )
}

export default TodoTemplate;