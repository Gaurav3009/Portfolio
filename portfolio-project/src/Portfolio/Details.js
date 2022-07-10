import React from 'react'
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
const Section = styled.section`
    width : 100%;
    // background-color : white;
    text-align : center;
`;
function Details({contact}) {
    console.log(contact);
  return (
    <Section>
        <div>
            <SocialIcon id = "icons" network = {contact.name} url = {contact.url}/>
        </div>
    </Section>
  )
}

export default Details