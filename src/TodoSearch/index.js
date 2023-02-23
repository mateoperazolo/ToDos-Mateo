import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch () {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (even) => {
        console.log(even.target.value)
        setSearchValue(even.target.value)
    }

    return (
        <input
            className="TodoSearch"
            placeholder=" Search ToDo"
            value={searchValue}
            onChange={onSearchValueChange} 
        />
    )
}
export {TodoSearch}