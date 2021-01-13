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

    

    // Completed = (e) => {
    //     e.preventDefult()
    //     this.props.handleCompleted();
    // }


    render() {
        return(
            <form onSubmit={this.Submit}>
                <input onChange={this.Change} value={this.state.inputValue}
                type="text" name="item"
                />
                <button>Add Todo</button>
                <button onClick={this.props.handleCompleted} className="clean-btn">Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;