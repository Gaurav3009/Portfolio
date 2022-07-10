import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color : black;
  height : 40vh;
  width : 40vh;
  color : green;
  display : flex;
  justify-content : center;
  align-items : center;
  font-size : 2rem;
  border-radius : 10px;
`;
function Timer() {
    const [time, setTime] = useState(new Date());
    var timer = useRef();
    useEffect(()=>{
        timer = setInterval(()=>{
            setTime(new Date())
        }, 1000);
    })

    useEffect(()=>{
        return () => {
            clearInterval(timer)
        }
    })

    return (
        <section style = {{display: 'flex', justifyContent: 'space-evenly', flexDirection : 'column', alignItems: 'center', backgroundColor : 'gray', height : '100vh'}}>
            <h1 style={{color: 'black', textAlign: 'center', fontSize: '3rem'}}>Timer</h1>
            <Div id="first-Div">{time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()}</Div>
        </section>
    )
} 

export default Timer; 

