import React, { useState } from "react";
import Slider from "react-slick";
import "./ShopByCategory.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopByCategory from "./ShopByCategory";
import Navbar from "../../Navabar/Navbar";
import Addtocartp1 from "../../Addtocartp1";
const ShopCatSlider = ({ data, SectionName, magnifyOnHover }) => {
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

  const [isToggled, setisToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="category-sliderMap">
      <div className="shop-by-category">
        <div className="shop-by-category-heading">
          <h3>{SectionName}</h3>
        </div>
      </div>

      <Slider {...settings}>
        {data.map((user, index) => (
          <div key={index} className="category-slider">
            <a href="#">
              <div
                className={`imagesSlider ${
                  magnifyOnHover ? "magnify-on-hover" : ""
                }`}
              >
                <img src={user.imageUrl} alt={user.CategoryNamee} />
                {magnifyOnHover && (
                  <div className="button-group">
                    <button
                      className="buy-button"
                      onClick={() => {
                        setisToggled(true);
                        setSelectedItem(user);
                        // e.preventDefault();
                      }}
                    >
                      ADD TO BAG
                    </button>
                  </div>
                )}
              </div>
              <p className="cat-slider-text">{user.CategoryNamee}</p>
              <div className="trend-info">
                <p className="trend-text">{user.CategoryNamees}</p>
                <p className="trend-arrival">{user.Arrival}</p>
                <p className="trend-price">{user.Price}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
      {isToggled && <Addtocartp1 item={selectedItem} />}
      {/* {isToggled ? <Addtocartp1 /> : null} */}
    </div>
  );
};

export default ShopCatSlider;
