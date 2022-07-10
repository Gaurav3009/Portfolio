import React from 'react';
import styled from'styled-components';
import Details from './Details';

const ContactSection = styled.section`
    background-color : #C8B6E2;
    height : 50vh;
`;

const Heading = styled.h1`
    font-size : 3rem;
    text-align : center;
`;

const SubHeading = styled.p`
    text-align : center;
    font-size : 1rem;
    margin-top : -4vh;
`;
const Copy = styled.p`
    text-align : center;
    color : gray;
    margin-top : 10vh;
`;

const contacts = [
    {
        name : "github",
        url : "https://github.com/Gaurav3009"
    },
    {
        name : "email",
        url : "mailto:gauravpandey14916@gmail.com"
    },
    {
        name : "linkedin",
        url : "https://www.linkedin.com/in/gaurav-30-pandey/"
    },
    {
        name: "facebook",
        url : "https://www.facebook.com/profile.php?id=100008292632986"
    },
    {
        name : "whatsapp",
        url : " https://wa.me/8081398450?text=I'm%20interested%20in%20your%20car%20for%20sale"
    }
]

function Contact() {
  return (
    <ContactSection id = "contact">
        <Heading>Contact</Heading>
        <SubHeading>Click on the icon below and drop a message!</SubHeading>
        <section style={{display : "flex", flexDirection : "row", justifyContent : "space-evenly", marginTop : "10vh"}}>
            {
                contacts.map((contact, index) => (
                    <Details key = {index} contact = {contact}/>
                ))
            }
        </section>
        
        <Copy>&#169;Gaurav@2022</Copy>

    </ContactSection>
  )
}

export default Contact;