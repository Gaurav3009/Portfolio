import React from 'react';
import Project from './Project';
import styled from 'styled-components';
const Heading = styled.h1`
    font-size : 3rem;
    text-align : center;
`;
const ProjectsSection = styled.section`
    display : grid;
    grid-template-columns : 1fr 1fr;
    text-align : center;
`;

const project = [
    {
        name : "Timer",
        desc : "Timer is built using useEffect() Hook and basic React functionality.",
        route : "timer"
    },
    {
        name : "Quote Generator",
        desc : "This project is built using componentDidMount() lifecycle method and Quote API.",
        route : "quote"
    },
    {
        name : "Todo App",
        desc : "It is built using useContext() hook and Browser local storage is used to save the tasks.",
        route : "todo"
    },
    {
        name : "E-commerce",
        desc : "Built using react-router-dom and todo is implemented in it to manage the marketing list.",
        route : "ecom"
    }
]

function Projects() {
    const getTheProjects = () => {
        return <ProjectsSection id = "project">
            {
                project.map((project, index) => (
                    <Project key = {index} project = {project}/>
                ))
            }
        </ProjectsSection>
    }
  return (
    <section>
        <Heading>Projects</Heading>
        {getTheProjects()}
    </section>
  )
}

export default Projects