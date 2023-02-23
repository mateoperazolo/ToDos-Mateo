import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';


function TodoCounter (){
    const { totalTodos, completedTodos} = React.useContext(TodoContext)
    
    return (
        <h1 className="TodoCounterTitle">You have been Complited {completedTodos} of {totalTodos} ToDos</h1>
    )
}

export {TodoCounter}