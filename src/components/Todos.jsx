import React from 'react'

export default function Todos({ todos, setStatusTrue,deleteTodo }) {
    return (
        <ul className='todos'>
            {
                todos.length > 0 ? todos.map((todo, index) => {
                    return <li key={index} className='todos_item'>
                        <span className={todo.status === true ? "todos_text todos_text_done" : ""}>{todo.title}</span>
                        <div className="todos_buttons">
                            <button onClick={()=>{
                                deleteTodo(todo.id)
                            }}>❌</button>
                            <button disabled={todo.status} onClick={() => {
                                setStatusTrue(todo.id);
                            }} href="#">💹</button>
                        </div>
                    </li>
                }) : null
            }
        </ul>
    )
}
