import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      { 
        todos.length > 0
          ? todos.map(todo => (<TodoListItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id}/>))
          : <h4 className="pl-3">Please Add todos...</h4>
      }
    </div>
  )
}

export default TodoList