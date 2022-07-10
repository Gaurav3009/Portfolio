import React from 'react';
import Slider from "react-slick";
import PopularItemCard from './PopularItemCard';
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
  const ITEMS = [
    {
        name : "I phone X",
        Rating : 5,
        price : 58000,
        desc : "With the new system of gestures, users can swipe up to go home and swipe down to see notifications. They can also use their fingers to navigate through the phone by swiping right or left on the screen. The virtual home button enables touch ID, so users don't have to enter their passcode every time they want to unlock their phone."
    },
    {
        name : "OnePlus 9",
        Rating : 4,
        price : 48000,
        desc : "One Plus 9 is the latest flagship phone from One Plus. It has a 6.3 inch screen and is powered by the Snapdragon 855 processor. The screen resolution is 1080 x 2340 pixels and has a pixel density of 402 PPI."
    },
    {
        name : "Realme Narzo",
        Rating : 4,
        price : 28000,
        desc : "Realme Narzo is the latest smartphone from Realme. It's a budget phone with an 18:9 display and a notch at the top of its screen."
    },
    {
        name : "I Phone 13",
        Rating : 5,
        price : 98000,
        desc : "The IPhone 13 is the next generation of the IPhone. It has a new design and features a 6.1 inch OLED display with a resolution of 1792 x 828 pixels, an A13 Bionic chip and a 12MP camera. The phone also has dual SIM capability, up to 512GB of storage, and up to 10 hours of battery life."
    },
    {
        name : "Sony Bravia",
        Rating : 4,
        price : 68000,
        desc : "Sony Bravia was established in 1995 in an attempt to compete with the then-dominant Japanese company, Sharp. The original Bravia line consisted of two screen sizes: a 27-inch (69 cm) model and a 36-inch (91 cm) model."
    }

];

export default function PopularSlider() {
    const getSlider = () => {
        return (
            <section style={{width : '95vw'}}>
                <h1 style={{textAlign: 'center', fontSize: '3rem'}}>Popular Items</h1>
                <Slider {...settings}>
                {
                    ITEMS.map((item, index) => (
                        <PopularItemCard key = {index} item = {item}/>
                    ))
                }
              </Slider>
            </section>
          );
    }
  return (
    <section>
        {getSlider()}
    </section>
  )
}
