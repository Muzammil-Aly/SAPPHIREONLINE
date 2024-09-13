import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoretoExplore.css";
import "./ShopByCategory.css";

const MoretoExplore = ({ data, SectionName, magnifyOnHover }) => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev-arrow" onClick={onClick}>
        &#8249;
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next-arrow" onClick={onClick}>
        &#8250;
      </div>
    );
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    slidesToShow: 3, // Number of images to show at once
    slidesToScroll: 3, // Number of images to scroll at once
    centerMode: true, // Enable center mode
    autoplay: true,
    autoplayspeed: 3000,
    speed: 500,
    centerPadding: "0", // No padding around the center slide
    beforeChange: (current, next) => setActiveSlide(next),
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  return (
    <div className="More-to-explore-container">
      <div className="shop-by-category">
        <div className="shop-by-category-heading">
          <h3>{SectionName}</h3>
        </div>
      </div>

      <Slider {...settings}>
        {data.map((user, index) => (
          <div
            key={index}
            className={` category-slider-more-explore  slide-item ${
              index === activeSlide ? "active" : ""
            }`}
          >
            <a href="#">
              <div className="SlideImage-more-explore">
                <img src={user.imageUrl} alt={user.CategoryNamee} />
                <p className="trend-text">{user.CategoryNamees}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoretoExplore;
