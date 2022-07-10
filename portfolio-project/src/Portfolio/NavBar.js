import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Introduction from './Introduction';
import Skills from './Skills';

const Image = styled.img`
    width : 2rem;
    height : 2rem;
    display : inline;
`;
const Section = styled.section`
    display : flex;
    flex-direction : row;
    justify-content :space-between;
    background-color : #FFEEEE;
    box-shadow : rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const LeftDiv = styled.div`
    display : flex;
    align-items : center;
    width : 20%;
    justify-content : space-evenly;
`;
const Heading = styled.h3`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&family=Ubuntu:wght@300&display=swap');
    display : inline;
    font-family: 'Ubuntu', sans-serif;
`;
const A = styled.a`
    text-decoration: none;
    font-weight: bold;
    color : black;
`;
function NavBar() {
  return (
    <Section>
        <LeftDiv>
            <Image src="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png" alt = 'Logo'/>
            <Heading>LovelyProfessional University</Heading>
        </LeftDiv>
        <Stack spacing={4} direction="row">
            <Button variant="text"><A href ="#intro">About</A></Button>
            <Button variant="text"><A href="#skills">Skills</A></Button>
            <Button variant="text"><A href = "#project">Projects</A></Button>
            <Button variant="text"><A href = "#edu">Academics</A></Button>
            <Button variant="text"><A href = "#contact">Contact</A></Button>
        </Stack>
    </Section>
  )
}

export default NavBar