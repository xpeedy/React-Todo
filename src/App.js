import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


const todoList = [
  {
    task: "clean",
    id:500,
    completed: false,
  },
  {
    task: "homework",
    id:501,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: todoList
    }
  }

  handleAdd = (evt) => {
    this.setState({
      todoList: [...this.state.todoList,{
        task: evt,
        id: this.state.todoList.length,
        completed: false,
      }]
    })
  }

  handleToggle = (itemId) => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if(itemId === item.id){
          return {...item,completed: !item.completed}
        }
        else {
          return item;
        }
      })
    })
  }

  handleCompleted = () => {
    const newTodoList = this.state.todoList.filter(item=>{
      return(!item.completed);
    });

    this.setState({
      todoList: newTodoList
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
          handleAdd={this.handleAdd}
          />
        </div>
        <TodoList 
        todoList={this.state.todoList} 
        handleToggle={this.handleToggle} 
        handleCompleted={this.handleCompleted} />
      </div>
    );
  }
}

export default App;
