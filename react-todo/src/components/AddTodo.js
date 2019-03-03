import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    todo: ''
  }
  handleChange = (e) => {
    this.setState({ todo: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.todo)
    this.setState({todo: ''})
  }
  render () {
    return (
      <form className="p-3" onSubmit={this.handleSubmit}>
        <label htmlFor="todo" className="text-success mr-3">Add Todo</label>
        <div className="input-group mb-3">
          <input value={this.state.todo} onChange={this.handleChange} id="todo" type="text" className="form-control" placeholder="Add todo..." />
        </div>
      </form>
    )
  }
}

export default AddTodo