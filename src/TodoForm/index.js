import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}
        className="TodoFrom">
            <label className="titleLabel">
                 What is your next
                 <br/> challenge? 
                </label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Write your next task"
            className="TextBox">
            </textarea>
            <div className="ButtonContent">
                <button
                onClick={onCancel}
                type="button"
                className="ButtonCancel">
                    Cancel
                </button>

                <button 
                onClick={onSubmit}
                type="submit"
                className="ButtonSubmit">
                    Submit
                </button>
            </div>
        </form>
    )
}

export { TodoForm }