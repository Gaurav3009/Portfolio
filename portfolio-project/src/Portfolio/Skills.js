import React from 'react';
import Slider from "react-slick";
import SkillCard from './SkillCard';
import styled from 'styled-components';

const Section = styled.section`
    background-color : whitesmoke;
    height : 60vh;
`;

const InsideSection = styled.section`
    width : 97vw;
`;

const Title = styled.h1`
    font-size : 3rem;
    text-align : center;
`;
const settings = {
    className: "center",
    centerMode: true,
    dots : true,
    autoplay : true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
}

const skills = [
    {
        imageUrl : "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld"
    },
    {
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14U4J0XYAmbVs9BCCAQYvdTsGBGTGfxuPSxQ84K7jON-vBCfthFibip6wd_JF5Jsv5ow&usqp=CAU"
    },
    {
        imageUrl : "https://reactjs.org/logo-og.png"
    },
    {
        imageUrl : "https://cdn-icons-png.flaticon.com/512/919/919825.png"
    },
    {
        imageUrl : "https://v4.mui.com/static/logo.png"
    },
    {
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcc-Lykm_jfxQKxfK88KZdaJPyNcn4GinrXVZpjVknxImCjiepLtBPPJ5xp7wzXqG7Evs&usqp=CAU"
    },
    {
        imageUrl : "https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg"
    },
    {
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5P46g45SQTC-g-04Br7cI2bJQmogwaSyziC8naKDc0f-iUqqJ-D_MLxUoV0lQpf4v-AY&usqp=CAU"
    }
];
function Skills() {
  return (
    <Section id="skills">
        <Title>Skills</Title>
        <InsideSection>
            <Slider {...settings}>
                {skills.map((skill, index)=>(
                    <SkillCard key = {index} skill = {skill}/>
                ))}
            </Slider>
        </InsideSection>
    </Section>
  )
}

export default Skills