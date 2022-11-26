import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";

import peopleOne from "../../assets/Ellipse 175.png";
import peopleTwo from "../../assets/Ellipse 175 (1).png";
import peopleThree from "../../assets/Ellipse 175 (2).png";
import ratingStar from "../../assets/rating-star.svg";
import rightArrow from "../../assets/right-arrow.svg";
import leftArrow from "../../assets/left-arrow.svg";
const peopleInfo = [
  {
    img: peopleOne,
    name: "Viezh Robert",
    addres: "Warsaw, Poland",
    rating: "4.5",
    comment:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.”",
  },
  {
    img: peopleTwo,
    name: "Yessica Christy",
    addres: "Shanxi, China",
    rating: "4.5",
    comment:
      "“I like it because I like to travel far and still can connect with high speed.”",
  },
  {
    img: peopleThree,
    name: "Kim Young Jou",
    addres: "Seoul, South Korea",
    rating: "4.5",
    comment:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”",
  },
  {
    img: peopleTwo,
    name: "Yessica Christy",
    addres: "Shanxi, China",
    rating: "4.5",
    comment:
      "“I like it because I like to travel far and still can connect with high speed.”",
  },
];

function Testimonials() {
  const onChange = () => {
    document.querySelector(".slick-current").focus();
  };
  const slider = React.useRef(null);
  const btn = React.useRef(null);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "dots",
    arrow: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <section className="testimonials" id="testimonials">
      <h2>
        Trusted by Thousands of <br /> Happy Customer
      </h2>
      <p>
        These are the stories of our customers who have joined us with great
        <br />
        pleasure when using this crazy feature.
      </p>
      <div className="testimonials___slider">
        <Slider ref={slider} {...settings}>
          {peopleInfo.map((item, index) => (
            <div className="slider__container" key={index}>
              <div className="testimonials___slider--card">
                <div className="testimonials___slider--card-bio">
                  <img src={item.img} alt="" />
                  <div className="testimonials___slider--card-bio__info">
                    <h5>{item.name}</h5>
                    <p>{item.addres}</p>
                  </div>
                  <div className="testimonials___slider--card-rating">
                    <p>{item.rating}</p>
                    <img src={ratingStar} alt="checkImg" />
                  </div>
                </div>
                <div className="testimonials___slider--card___coment">
                  <p>{item.comment}</p>
                </div>
              </div>
            </div>
          ))}
          {console.log(btn)}
        </Slider>
      </div>
      <ui className="testimonials___slider--controler___btn">
        <li>
          <img
            src={leftArrow}
            alt="leftArrow"
            onClick={() => slider?.current?.slickPrev()}
          />
        </li>
        <li>
          <img
            src={rightArrow}
            alt="rightArrow"
            onClick={() => slider?.current?.slickNext()}
          />
        </li>
      </ui>
    </section>
  );
}

export default Testimonials;
