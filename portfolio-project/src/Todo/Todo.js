import React from 'react'
import {useTodoContext} from './TodoContext';
import './Todo.style.css';
import styled from 'styled-components';

const ListSection = styled.section`
    width : 80%;
    height : 4rem;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    background-color : #B7D3DF;
    margin-top : 2vh;
    border-radius : 10px;
    box-shadow : #DCDCDC 2px 8px 10px;
`;
const Button = styled.button`
    // height : 2rem;
    // width : 4rem;
    border-radius : 50%;
    background-color : #32CD32;

    &:hover {
        cursor:pointer;
        background-color : 	#228B22;
    }

`;
const RightDiv = styled.div`
    width : 20%;
    display : flex;
    justify-content : space-between;
    margin-right : 2vw;
`;
const InputLine = styled.span`
    margin-left : 2vw;
    width : 50%;
    height : 2rem;
    font-size : 1.5rem;
`;
function Todo({todoObj}) {
    const {filterTodoList, markTodoItem} = useTodoContext();
    const handleTodoDelete = () => {
        filterTodoList(todoObj.id);
    }
    const handleTodoMark = () => {
        markTodoItem(todoObj.id);
    }

    return <ListSection>
        <InputLine className = {todoObj.done ? "strike-todo" : ""}>{todoObj.text}</InputLine>
        <RightDiv>
            <Button onClick = {handleTodoMark}>✔️</Button>
            <Button onClick = {handleTodoDelete}>❌</Button>
        </RightDiv>
    </ListSection>
}

export default Todo