import React from 'react'
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const COLORS = ['red', 'orange', 'purple', 'pink', 'yellow'];
const ReviewCardWrapper = styled.section`
    height : 60vh;
    box-shadow : rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin : 3vh 3vw;
    padding : 0vh 3vw;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    &:hover {
        transform : scale(1.01);
        cursor: pointer;
        transition : 700ms ease-in-out;
    }
`;

const InnerHeading = styled.h2`
    text-align : center;
`;

const ReviewParagraph = styled.p`
    text-align : center;
    font-size : small;
`;
function PopularItemCard({item}) {
  return (
    <ReviewCardWrapper>
    <InnerHeading>{item.name}</InnerHeading>
    <ReviewParagraph>{item.desc}</ReviewParagraph>
    <Rating
        name="simple-controlled"
        value={item.Rating} readonly
      />
    <p>Price : {item.price}</p>
    <Button variant="outlined" startIcon={<ShoppingCartRoundedIcon />}>
        Add to Cart
      </Button>
    
</ReviewCardWrapper>
  )
}

export default PopularItemCard