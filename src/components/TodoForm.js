import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ""
        }
    }

    Change = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
        console.log(this.state.inputValue)
    }

    Submit = (evt) => {
        evt.preventDefault()
        this.props.handleAdd(this.state.inputValue)
        //take input value and add it to todoList
        this.setState({
            inputValue: "",
        })
        //create a new object
    }


    render() {
        return(
            <form onSubmit={this.Submit}>
                <input onChange={this.Change} value={this.state.inputValue}
                type="text"
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;