import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class Todos extends Component {
  state = {
    todos: []
  }

  addTodo = (todo) => {
    const id = Math.floor(Math.random() * Date.now())
    let todos = [...this.state.todos, {
      id,
      content: todo
    }]
    this.setState({todos})
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos})
  }

  updateTodo = ({id, content}) => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.content = content
      return todo
    })
    this.setState({todos})
  }

  render () {
    return (
      <div className="border">
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
      </div>
    )
  }
}

export default Todos