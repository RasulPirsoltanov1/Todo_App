import React, { useState } from 'react'

function TodoField({ addTodo }) {
    const [todo, setTodo] = useState(null);
    return (
        <div className='todofield'>
            <input value={todo} onChange={(e) => {
                setTodo(e.target.value)
            }} type="text" className='todoField_input' />
            <button className='todoField_btn' onClick={() => {
                if (todo) {
                    if (todo.length < 20 && todo.trim().length > 2){
                        addTodo(todo);
                        setTodo('');
                    }
                    else
                        alert("too long string!")
                }
            }}>Add</button>
        </div>
    )
}

export default TodoField