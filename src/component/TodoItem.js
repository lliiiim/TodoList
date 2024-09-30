import React from "react";

function TodoItem({item, delItem}){
    return(
        <div className="todo-item">
            {item}
            <button onClick={() => delItem(item)}>삭제</button>
        </div>
    )
}
export default TodoItem