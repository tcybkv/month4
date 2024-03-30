import React from 'react';

function Todo({todo, changeStatus, deleteJson}) {
    return (
        <li>
            {todo.status ? <s>{todo.title}</s> : todo.title }
            <input type="checkbox" onChange={changeStatus} value={todo.id} checked={todo.status}/>
            <button onClick={deleteJson} value={todo.id}>delete todo</button>
        </li>
    );
}

export default Todo;