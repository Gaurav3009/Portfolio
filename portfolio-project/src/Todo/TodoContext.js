import React, {useState, useContext, useEffect} from 'react';

const TodoContext = React.createContext();

export function useTodoContext(){
    return useContext(TodoContext);
}

export function TodoContextProvider({children}){
    let arr = JSON.parse(localStorage.getItem('todoList')) || [];
    const [todoList, setTodoList] = useState(arr);
    const [currId, setCurrId] = useState(0);
    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList])
    const filterTodoList = (id) => {
     let filteredList = todoList.filter((curr) => {
        return id !== curr.id
     })
     setTodoList(filteredList);   
    }
    const markTodoItem = (id) => {
        let arr = [...todoList];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id === id) {
                arr[i].done = !arr[i].done;
                break;
            }
        }
        setTodoList(arr);
    }
    const value = {
        todoList,
        setTodoList,
        currId,
        setCurrId,
        filterTodoList,
        markTodoItem
    };

    return <TodoContext.Provider value = {value}>
        {children}
    </TodoContext.Provider>
}
