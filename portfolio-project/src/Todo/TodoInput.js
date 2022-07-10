import React, {useState} from 'react';
import {useTodoContext} from './TodoContext';
import styled from 'styled-components';

const Section = styled.section`
    text-align : center;
`;
const InputTag = styled.input`
    margin-right : 1vw;
    height : 2rem;
    width : 20rem;
    border-radius : 5px;
    border : none;
    background-color :  whitesmoke;
    border-style : outset;
    &:focus{
        outline : none;
    }
`;
const Button = styled.button`
    margin-left : 1vw;
    height : 2rem;
    width : 3rem;
    border-radius : 5px;
    border : none;
    background-color :  #C8B6E2;
`;
export function TodoInput(){

    const {todoList, setTodoList, currId, setCurrId} = useTodoContext();
    const [todoInput, setTodoInput] = useState('');

    const handleTodoInputChange = (e) => {
        setTodoInput(e.target.value);
    }

    const handleInsertClick = () => {
        let todoObj = {
            text : todoInput,
            done : false,
            id : currId
        }
        setCurrId(currId + 1);
        setTodoList([...todoList, todoObj]);
    }

    return <Section>
            <InputTag type="text" onChange = {handleTodoInputChange}/>
            <Button onClick={handleInsertClick}>Add</Button>
        </Section>
}