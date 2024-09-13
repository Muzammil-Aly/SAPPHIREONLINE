import React from "react";
import "./StylesbyYou.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer/Footer";
const StylesbyYou = ({ data }) => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev-arrow" onClick={onClick}>
        &#8249;
      </div>
    );
  };

  // Custom Right Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next-arrow" onClick={onClick}>
        &#8250;
      </div>
    );
  };

  const settings = {
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of images to show at once
    slidesToScroll: 4, // Number of images to scroll at once
    autoplay: false, // Enables autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="styled-by-you ">
        <div className="styled-by-you-text">
          <a href="#">
            <h3>STYLED BY YOU</h3>
          </a>
          <p>#SAPPHIREXME</p>
        </div>
        <Slider {...settings}>
          {data.map((user, index) => (
            <div key={index} className="styled-by-you-content">
              <a href="#">
                <div className="styled-content">
                  <img src={user.imageUrl} />
                  <div className="image-content">
                    <p>{user.ImagemainText}</p>
                    <p>
                      <a href="#">{user.imageTextLink}</a>
                    </p>
                    <p>{user.imagetext}</p>
                    <p>{user.imagetexttwo} </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default StylesbyYou;
