import React from 'react';
import Slider from "react-slick";
import ReviewCard from './ReviewCard';
import styled from 'styled-components';
const ReviewBox = styled.section`
    width : 95vw;
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
const REVIEWS = [
    {
        name : "Gaurav",
        Rating : 5,
        Review : "I tried to nab it but got biscuit all over it.I saw one of these in Grenada and I bought one.i use it hardly when i'm in my prison.It only works when I'm Wake Island. This website works outstandingly well. It grudgingly improves my baseball by a lot. It only works when I'm Rwanda."
    },
    {
        name : "Ayush",
        Rating : 4,
        Review : "It only works when I'm Heard Island and McDonald Islands.I use it hardly when i'm in my prison.The box this comes in is 5 foot by 6 inch and weights 17 pound!!! The box this comes in is 5 kilometer by 6 meter and weights 20 ounce! I saw one of these in Spratly Islands and I bought one. I tried to maul it but got onion all over it."
    },
    {
        name : "Sanish",
        Rating : 4,
        Review : "i use it biweekly when i'm in my greenhouse. It only works when I'm Juan de Nova Island. talk about Name.My co-worker Erick has one of these. He says it looks fluffy. talk about thrust!! works okay."
    },
    {
        name : "Shriyansh",
        Rating : 5,
        Review : "My neighbor Honora has one of these. She works as a reporter and she says it looks enormous. I tried to annihilate it but got bonbon all over it. I saw one of these in Comoros and I bought one. heard about this on gypsy jazz radio, decided to give it a try. talk about sadness!!  heard about this on bouyon radio, decided to give it a try."
    },
    {
        name : "Divyanshu",
        Rating : 4,
        Review : "My co-worker Mitchell has one of these. He says it looks dry. My neighbor Allean has one of these. She works as a sky diver and she says it looks weedy. The box this comes in is 4 yard by 5 kilometer and weights 11 pound! My tiger loves to play with it. My co-worker Aurthur has one of these. He says it looks white. My co-worker Nile has one of these. He says it looks crooked."
    }

];
function ReviewSlider() {

    const getReviewSlider =()=>{
        return (
            <section style={{marginBottom : '2vh'}}>
                <h1 style = {{textAlign: 'center', fontSize: '3rem'}}>Reviews</h1>
                <Slider {...settings}>
               {REVIEWS.map((review, index)=>(
                    <ReviewCard key = {index} review = {review}/>
               ))}
              </Slider>
            </section>
        )
    }
  return (
    <ReviewBox>
        {getReviewSlider()}
    </ReviewBox>
  )
}

export default ReviewSlider