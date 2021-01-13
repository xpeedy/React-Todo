import React from "react";
import "./Todo.css"
// class Todo extends React.Component {
//     constructor(props){
//         super();
        
//     }

//     Toggle = (evt) => {
//         this.handleToggle(evt.item.id)
//     }

//     render(){
//         return(
//             <div onClick={this.Toggle}>
//                 <p>{this.props.item}</p>
//             </div>
//         )
//     }
// }
const Todo = props => {
    console.log(props)
    const Toggle = () => {
        props.handleToggle(props.item.id);
    }
    console.log(props.item.id);
    return(
        <div onClick={Toggle} className={`item${props.item.completed ? `completed` : ``}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;