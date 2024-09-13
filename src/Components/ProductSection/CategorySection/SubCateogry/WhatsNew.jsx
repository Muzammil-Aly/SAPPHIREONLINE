import React from "react";
import "./WhatsNew.css";
const WhatsNew = ({
  Data,
  firstText,
  scndText,
  firstTextClass,
  dailyUnstitchedDet,
  headingItemsdet,
  whatsnewcontainerDet,
}) => {
  const whatsNew = [
    {
      id: 1,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Daily-Unstitched-Intermix.jpg?v=1723717371&width=200",
      CategoryNamefirst: "Daily",
      CategoryNameScnd: "Unstitched Intermix",
    },
    {
      id: 2,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Tie-_-Dye-Ready-to-Wear-Intermix.jpg?v=1723717413&width=200",
      CategoryNamefirst: "TIE & DYE",
      CategoryNameScnd: "RTW Intermix",
    },

    {
      id: 3,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Kids-New-Arrivals.jpg?v=1723717506&width=200",
      CategoryNamefirst: "KIDS",
      CategoryNameScnd: "NEW Arrivals",
    },
    {
      id: 4,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/whats-new-_-west-new-arrivals.jpg?v=1724304199&width=200",
      CategoryNamefirst: "WEST",
      CategoryNameScnd: "New Arrivals",
    },
    {
      id: 5,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Ready-to-Wear-Summer-_24.jpg?v=1723717815&width=200",
      CategoryNamefirst: "Ready To Wear",
      CategoryNameScnd: "Summer '24 ",
    },
    {
      id: 6,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/mens-outfits.jpg?v=1723718485&width=200",
      CategoryNamefirst: "Men's Outfits",
      CategoryNameScnd: "Intermix",
    },
    {
      id: 7,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/fragrance-what_s-new.jpg?v=1719828912&width=200",
      CategoryNamefirst: "Fragrances",
      // CategoryNameScnd: "RTW Intermix",
    },
  ];
  return (
    <>
      <div className={whatsnewcontainerDet}>
        <div className="whats-new-container">
          <div className={`Heading ${firstTextClass}`}>
            <p>{firstText}</p>
            <p>{scndText}</p>
            {/* <p>WHAT'S</p>
          <p>NEW</p> */}
          </div>

          <div className={whatsnewcontainerDet}>
            <div className={`heading-items ${headingItemsdet}`}>
              {Data.map((item) => (
                <div
                  key={item.id}
                  className={`daily-unstitched ${dailyUnstitchedDet} `}
                >
                  <a href="#">
                    <img src={item.imageUrl} alt={item.CategoryNamees} />
                    <div className="whats-new-title">
                      <p>
                        {item.CategoryNamefirst} <br></br>{" "}
                        {item.CategoryNameScnd}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
