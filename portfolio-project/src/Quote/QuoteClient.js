import React from 'react';
import axios from 'axios';

const randomQuoteUrl = 'https://api.quotable.io';
function fetchRandomQuote(setQuote) {
    axios(randomQuoteUrl + '/random')
    .then((value)=>{
        setQuote(value.data.content);
        console.log(value.data.content);
    })
    .catch((error)=>{
        console.log(error);
    })
}

export {
    fetchRandomQuote
}