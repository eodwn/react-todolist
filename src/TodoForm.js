import React from 'react';

const TodoForm = ({value, onChange, onCreate, onKeyPress}) => {
    return(
        <div>
            <input {...{value, onChange, onKeyPress}} />
            <button {...{onClick: onCreate}}>추가</button>
        </div>
    );
}
export default TodoForm;