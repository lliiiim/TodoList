import React from "react";
import TodoItem from "./TodoItem";

// function TodoBoard(props){
// //     console.log('todoBoard', props.todoList)
//     return(
//         <div>
//             <h1>Todo List</h1>
//             {/* <TodoItem/> */}
//             {props.todoList.map((item, index) => <TodoItem key={index} item={item} delItem={props.delItem} />)}
//         </div>
//     )
// }

function TodoBoard({todoList, delItem}){
        return(
            <div>
                {/* <TodoItem/> */}
                {/* {todoList.map((index) => <TodoItem key={index.id} item={index} delItem={delItem} />)} */}
                {[...todoList].reverse().map((item) => (<TodoItem key={item.id} item={item} delItem={delItem} />))}
            </div>
        )
    }
    
export default TodoBoard