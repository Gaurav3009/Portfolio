import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    padding : 0 20vw;
    background-color : whitesmoke;
`;
const ProfileImage = styled.img`
    border-radius : 50%;
`;
const LeftDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around;

`;
const Name = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Montserrat&family=Noto+Serif:ital@1&family=Nunito&family=Ubuntu:wght@300&display=swap');
font-size : 3rem;
font-family: 'Noto Serif', serif;
`;

const Intro = styled.p`
    text-align : center;
    @import url('https://fonts.googleapis.com/css2?family=Acme&family=Montserrat&family=Noto+Serif:ital@1&family=Nunito&family=Ubuntu:wght@300&display=swap');
    font-family: 'Noto Serif', serif;
`;

function Introduction() {
  return (
    <Section id = "intro">
        <LeftDiv>
            <Name>Gaurav Pandey</Name>
            <Intro>Aspiring MERN stack developer and machine learning enthusiast with good problem-solving skills. Possess 5+ certifications in different technologies and proficient in three programming languages. Looking to leverage my knowledge and experience into a role as Software Developer Engineer.</Intro>
        </LeftDiv>
        <div>
            <ProfileImage src = "profile.png" alt = "profile-picture"/>
        </div>
    </Section>
  )
}

export default Introduction