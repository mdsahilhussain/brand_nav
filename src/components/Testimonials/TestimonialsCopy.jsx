import React, { Component } from "react";
import "./testimonials copy.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
];

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass:"testimonialDots",
  infinite: true,
  autoplay: false,
  speed: 2000,
  autoplaySpeed: 2000,
};

export class TestimonialsCopy extends Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <button
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <img src={leftArrow} alt="" className="arrow" />
        </button>
        <button
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <img src={rightArrow} alt="" className="arrow" />
        </button>
      </div>
    );
  };

  render() {
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
          <Slider  {...settings}>
          {peopleInfo.map((item, index) => (
              <div className="testimonials___slider--controler" key={index}>
                <div >
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
          </Slider>
        </div>
      </section>
    );
  }
}

export default TestimonialsCopy;
