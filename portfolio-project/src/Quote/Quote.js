import React, { useState, useEffect } from "react";
import { fetchRandomQuote } from "./QuoteClient";
import styled from "styled-components";

const TopSection = styled.section`
  height: 90vh;
`;
const InsideSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Bigelow+Rules&family=Joan&family=Poppins:ital,wght@1,200&family=The+Nautigal&display=swap");
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0px 2px 10px gray;
  font-size: 2rem;
  font-family: "Edu TAS Beginner", cursive;
  margin: 10vh 10vw;
`;
const Heading = styled.h1`
  color: #EFFFFD;
  font-size: 3rem;
  font-family: "Noto Serif", serif;
`;
const Button = styled.button`
  margin-top: 2vh;
  padding : 1rem 3rem;
  font-size : 1.1rem;
  font-family: "Noto Serif", serif;
  border-radius: 5px;
  background-color: #42C2FF;
  color : #EFFFFD;
  border: none;
  transition : all 0.8s;
  box-shadow: 0px 2px 5px gray;
  font-weight: 600;
  &:hover {
    background-color: #85B4FF;
    cursor: pointer;
  }
`;
const Section = styled.section`
  background : url('https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg');
  background-size : cover;
  background-repeat : no-repeat;
  overflow : hidden;
`;
export default function Quote() {
  const [quote, setQuote] = useState(" ");

  useEffect(() => {
    fetchRandomQuote(setQuote);
  }, []);

  const handleRefreshClick = () => {
    fetchRandomQuote(setQuote);
  };

  return (
    <Section>
      <Heading>Random Quote Generator</Heading>
      <TopSection>
        <InsideSection>{quote}</InsideSection>
        <Button onClick={handleRefreshClick}>Refresh</Button>
      </TopSection>
    </Section>
  );
}
