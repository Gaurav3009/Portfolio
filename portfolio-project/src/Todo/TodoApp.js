import React, {useState} from 'react'
import {TodoDisplay} from './TodoDisplay';
import {TodoInput} from './TodoInput';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size : 3rem;
    text-align : center;
`;

const DisplayList = styled.div`
    height : 30vh;
    width : 80%;
    background-color : #FFDEDE;
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 2vh 0;
    overflow : auto;
    border-radius : 20px;
    box-shadow : #DCDCDC 2px 8px 10px;
`;

const InputSection = styled.section`
    margin : 5vh 0;
`;
function TodoApp() {

  return (
    <div style = {{backgroundColor : 'bisque', padding : "2vh 0", margin: "8vh 10vw", borderRadius : "20px", boxShadow : "#DCDCDC 2px 8px 10px", display : "flex", flexDirection : "column", alignItems : "center"}}>
        <Heading>Make Your Lists</Heading>
        <DisplayList>
            <TodoDisplay />
        </DisplayList>
        <InputSection>
            <TodoInput />
        </InputSection>
    </div>
  )
}

export default TodoApp