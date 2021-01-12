import React from "react";

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
    const Toggle = () => {
        props.handleToggle(props.task.id);
    }
    console.log(props);
    return(
        <div onClick={Toggle} className={`item${props.task.completed ? `complete` : ``}`}>
            <p>{props.task}</p>
        </div>
    )
}

export default Todo;