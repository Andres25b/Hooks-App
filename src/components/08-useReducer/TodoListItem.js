import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li key={todo.id} className="list-group-item">
            <div className="row">
                <div className="col-8">
                    <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
                        {index + 1}.- {todo.desc}
                    </p>
                </div>
                <div className="col-4">
                    <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Borrar</button>
                </div>
            </div>
        </li>
    )
}
