import React from 'react'
import styled from 'styled-components';
const Title = styled.h1`
    text-align: center;
    font-size : 3rem;
`;
const InsideSection = styled.section`
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    align-items : center;
`;
const Div = styled.div`
    width : 30vw;
    text-align : center;
`;
const Institute = styled.p`
    margin-top : -1.5rem;
`;
const WholeSection = styled.section`
margin : 0  20vw 2vh 20vw;
    box-shadow : rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const details = [
    {
        degree : "Bachelor of Tehnology",
        institute : "Lovely Professional University",
        duration : "July 2019 - Present",
        score : "7.94"
    },
    {
        degree : "Intermediate",
        institute : "St. Xaviers School",
        duration : "Marach 2015 - May 2016",
        score : "86%"
    },
    {
        degree : "High School",
        institute : "St. Basils's School",
        duration : "Marach 2017 - May 2018",
        score : "88.5%"
    }
];
function Academics() {

    const getEducationDetails = () => {
        return <WholeSection>
            {
                details.map((detail, index) => (
                    <InsideSection key={index}>
                        <Div>
                            <h2>{detail.degree}</h2>
                            <Institute>{detail.institute}</Institute>
                        </Div>
                        <Div>
                            <p>{detail.score}</p>
                        </Div>
                        <Div>
                        <i>{detail.duration}</i>
                        </Div>
                    </InsideSection>
                ))
            }
        </WholeSection>
    }
  return (
    <section id = "edu">
        <Title>Education</Title>
        {getEducationDetails()}
    </section>
  )
}

export default Academics