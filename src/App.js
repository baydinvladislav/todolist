import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

class App extends React.Component {

  state = {
    todos: todosData
  }

  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item =>
    <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App