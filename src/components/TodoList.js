// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
// class TodoList extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         {this.props.todoList.map((item) => (
//           <Todo key={item.id} task={item.task} />
//         ))}
//       </div>
//     );
//   }
// }
// export default TodoList;

// import React from "react";
// import Todo from "./Todo";

// class TodoList extends React.Component {
//     constructor(){
//         super();
//     }

//     render(){
//         return(
//         <div className="todo-list">
//             {this.props.todoList.map((item) => ( 
//                 <Todo item={item.task} key={item.id}/>
//             ))}
//         </div>
//     );
//         }
// }

const TodoList = props => {

    return(
        <div className="todo-list">
            {props.todoList.map(item => {
                // console.log(item.task);
                return <Todo handleToggle={props.handleToggle} task={item.task} key={item.id}/>
            })}
            
        </div>
    )
}

export default TodoList;