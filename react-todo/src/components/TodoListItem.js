import React, { Component } from 'react'

class TodoListItem extends Component {
  state = {
    todoInput: this.props.todo.content,
    edit: false
  }

  handleChange = (e) => {
    this.setState({
      todoInput: e.target.value
    })
  }

  handleEdit = () => {
    this.setState({edit: true})
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      let { todo, updateTodo } = this.props
      updateTodo({
        id: todo.id,
        content: this.state.todoInput
      })
      this.setState({edit: false})
    }
  }

  render () {
    let { deleteTodo, todo } = this.props
    return (
      <div className="d-flex flex-row justify-content-around bd-highlight shadow-sm pt-2 rounded">
        <div className="input-group p-2 ml-2">
          <input type="text"  className="form-control text-danger"
            value={this.state.todoInput}
            onChange={this.handleChange}
            readOnly={!this.state.edit}
            onDoubleClick={this.handleEdit}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <button type="button" className="close ml-auto" aria-label="Close" onClick={() => deleteTodo(todo.id)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
}

export default TodoListItem