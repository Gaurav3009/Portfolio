import React from 'react'
import  styled from 'styled-components';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Section = styled.section`
    width : 50%;
    height : 35vh;
    box-shadow : rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin : 3vh 12vw;
    padding : 1vh 2vw;
    background-color : #FFF2F2;
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-evenly;
    &:hover {
        background-color : #E8A0BF;
        transform : scale(1.09);
        transition : 800ms ease-in-out;
    }
`;

const Para = styled.p`
    margin-top : -1vh;
`;
const ProjectTitle = styled.h2`
    font-size : 2rem;
    padding : 0
`;
const ButtonSection = styled.section`
    &:hover{
        transform : scale(1.1);
    }
`;
function Project({project}) {
  return (
    <Section>
        <ProjectTitle>{project.name}</ProjectTitle>
        <Para>{project.desc}</Para>  
        <ButtonSection><Button style = {{backgroundImage : "linear-gradient(135deg, #000010 0%,#000000 25%,#1e539e 50%,#ff3083 75%,#7800a8 100%)", color : "white"}} variant="outlined"><Link style = {{textDecoration : "none", color : "white"}}to={"/"+project.route}>Click Here</Link></Button></ButtonSection>           
    </Section>
  )
}

export default Project