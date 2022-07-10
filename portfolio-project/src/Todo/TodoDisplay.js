import React from 'react';
import {useTodoContext} from './TodoContext';
import Todo from './Todo';
export function TodoDisplay(){
    const {todoList, setTodoList} = useTodoContext();
    return <>
            {todoList.map((element, index) => {
                return <Todo key = {index} todoObj = {element}></Todo>
            })}
        </>
}