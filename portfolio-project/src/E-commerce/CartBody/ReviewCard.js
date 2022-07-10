import React from 'react';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
const COLORS = ['red', 'orange', 'purple', 'pink', 'yellow'];
const ReviewCardWrapper = styled.section`
    height : 50vh;
    box-shadow : rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin : 0vh 3vw;
    padding : 3vh 3vw;
    &:hover {
        transform : scale(1.1);
        cursor: pointer;
    }
`;

const InnerHeading = styled.h2`
    text-align : center;
`;

const ReviewParagraph = styled.p`
    text-align : center;
    font-size : small;
`;
function ReviewCard({review}) {
    const getColor = () => {
        let x = Math.floor((Math.random() * 10) % 7);
        return COLORS[x];
    }
  return (
    <ReviewCardWrapper>
        <Avatar sx = {{bgcolor : getColor()}}>{review.name[0]}</Avatar>
        <InnerHeading>{review.name}</InnerHeading>
        <ReviewParagraph>{review.Review}</ReviewParagraph>
        <Rating
        name="simple-controlled"
        value={review.Rating} readonly
      />
    </ReviewCardWrapper>
  )
}

export default ReviewCard