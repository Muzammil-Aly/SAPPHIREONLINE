import React, { useState } from "react";
import Slider from "react-slick";
import "./ShopByCategory.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Addtocartp1 from "../AddtoCart/Addtocartp1";

const ShopCatSlider = ({ data, SectionName, magnifyOnHover }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
              </div>
              <p className="cat-slider-text">{user.CategoryNamee}</p>
              <div className="buying">
                {magnifyOnHover && (
                  <div className="button-group">
                    <button
                      className="buy-button"
                      onClick={() => {
                        setIsToggled(true);
                        setSelectedItem(user);
                      }}
                    >
                      ADD TO BAG
                    </button>
                  </div>
                )}
                {/* <p className="cat-slider-text">{user.CategoryNamee}</p> */}
                <div className="trend-info">
                  <p className="trend-text">{user.CategoryNamees}</p>
                  <p className="trend-arrival">{user.Arrival}</p>
                  <p className="trend-price">{user.Price}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>

      {/* Full-screen overlay */}
      {isToggled && (
        <div className="overlay">
          <button className="close-overlay" onClick={() => setIsToggled(false)}>
            X
          </button>
          <Addtocartp1 item={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default ShopCatSlider;
