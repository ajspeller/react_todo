import React, { Component } from 'react';
import './App.css';

const todos = [
  {
    todoTitle: 'My first entry',
    todoResponsible: 'ajoseph',
    todoDescription: 'Get it done',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My second entry',
    todoResponsible: 'cbspeller',
    todoDescription: 'Keep getting stronger',
    todoPriority: 'high'
  },
  {
    todoTitle: 'My 3rd entry',
    todoResponsible: 'saspeller',
    todoDescription: "Don't give up",
    todoPriority: 'medium'
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(indexToRemove) {
    this.setState({
      todos: this.state.todos.filter((e, idx) => idx !== indexToRemove)
    });
  }

  handleAddTodo(todo) {
    if (
      todo.todoDescription &&
      todo.todoTitle &&
      todo.todoPriority &&
      todo.todoResponsible
    ) {
      this.setState({
        todos: [...this.state.todos, todo]
      });
    }
  }

  render() {
    return (
      <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo} />
        <hr />
        <h4>
          Todos Cout: <span className="badge">{this.state.todos.length}</span>
        </h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) => (
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">
                {todo.todoTitle}{' '}
                <small>
                  <span className="label label-info">{todo.todoPriority}</span>
                </small>
              </h4>
              <p className="glyphicon glypicon-user">{todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.handleRemoveTodo.bind(this, index)}
              >
                <span className="glyphicon glyphicon-trash" /> Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h4>Add New Todo</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">
              Todo
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="todoTitle"
                id="inputTodoTitle"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputTodoDescription"
              className="col-sm-2 control-label"
            >
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                name="todoDescription"
                id="inputTodoDescription"
                className="form-control"
                value={this.state.todoDescription}
                onChange={this.handleInputChange}
                placeholder="Description"
                rows="3"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputTodoPriority"
              className="col-sm-2 control-label"
            >
              Priority
            </label>
            <div className="col-sm-10">
              <select
                type="text"
                name="todoPriority"
                id="inputTodoPriority"
                className="form-control"
                value={this.state.todoPriority}
                onChange={this.handleInputChange}
                placeholder="Priority"
              >
                <option>Lowest</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputTodoResponsible"
              className="col-sm-2 control-label"
            >
              Responsible
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="todoResponsible"
                id="inputTodoResponsible"
                className="form-control"
                value={this.state.todoResponsible}
                onChange={this.handleInputChange}
                placeholder="Responsible"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
