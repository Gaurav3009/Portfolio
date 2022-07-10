import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
    width : 100%;
    height : 100%;
    border-radius : 50%;
`;
const Section = styled.section`
    width : 20vw;
    height : 30vh;
    box-shadow : rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin : 3vh 6vw;
    border-radius : 50%;
`;
function SkillCard({skill}) {
  return (
    <Section>
        <Image src = {skill.imageUrl} alt = "Logo"/>
    </Section>
  )
}

export default SkillCard