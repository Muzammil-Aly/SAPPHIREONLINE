import React from "react";
import { useState } from "react";
import "./ShopByCategory.css";
import ShopCatSlider from "./ShopCatSlider";
import MoretoExplore from "./MoretoExplore";
import StylesbyYou from "./StylesbyYou";

const ShopByCategory = () => {
  const dataWithoutMagnify = [
    {
      id: 1,
      CategoryNamee: "KID",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/sbc-kids_fe3a6287-800c-4e7a-acbf-e2c08776791b.jpg?v=1723112862&width=600",
    },
    {
      id: 2,
      CategoryNamee: "BEAUTY",

      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/sbc-fragrance.jpg?v=1723112862&width=600",
    },
    {
      id: 3,
      CategoryNamee: "MODEST WEAR",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-modest.jpg?v=1723718648&width=600",
    },
    {
      id: 4,
      CategoryNamee: "ACCESSORIES",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/sbc-accessories_7ae208fe-1be3-4922-add6-3b7956108ce1.jpg?v=1721296694&width=600",
    },
    {
      id: 5,
      CategoryNamee: "UNSTICHED",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-us.jpg?v=1723718649&width=600",
    },
    {
      id: 6,
      CategoryNamee: "READY TO WEAR",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/RTW-sbc.jpg?v=1723718647&width=600",
    },
    {
      id: 7,
      CategoryNamee: "MAN",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-man-2.jpg?v=1723718648&width=600",
    },

    {
      id: 7,
      CategoryNamee: "WEST",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-west.jpg?v=1723718648&width=600",
    },
  ];

  const dataWithMagnify = [
    {
      id: 1,
      CategoryNamees: "DENIM DRESS WITH BELT",
      Price: "Rs.3,990.00",
      Arrival: "New Arrivals",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V50043_1.jpg?v=1724149891&width=600",
      Color: "White and Blue",
      Fabric: "Cotton",
    },
    {
      id: 2,
      CategoryNamees: "PAPER BAG JEANS",
      Arrival: "New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/WDNM24V40008_5.jpg?v=1720176496&width=600",
      Color: "White and Blue",
      Fabric: "Cotton",
    },
    {
      id: 3,
      CategoryNamees: "OVER SIZED SHIRT WITH POCKET",
      Arrival: "New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V50049_6.jpg?v=1724150024&width=600",
      Color: "White and Blue",
      Fabric: "Cotton",
    },
    {
      id: 4,
      CategoryNamees: "WHITE LEG JEANS",
      Arrival: "New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/WDNM24V40006_6.jpg?v=1720176803&width=600",
      Color: "White and Blue",
      Fabric: "Cotton",
    },
    {
      id: 5,
      CategoryNamees: "PRINTED ARABIC LOAN DRESS",
      Arrival: " Intermix New Arrivals",
      Price: "Rs.4,590.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PFFSW24V212_3.jpg?v=1724228427&width=600",
      Color: "White and Blue",
      Fabric: "Cotton",
    },
    {
      id: 6,
      CategoryNamees: "EMBROIDERED COTTON SHIRT",
      Arrival: "Intermix New Arrivals",
      Price: "Rs.6,590.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STDYW24V24_2.jpg?v=1724228467&width=600",
      Color: "White and Blue",
      Fabric: "Cotton",
    },
    {
      id: 7,
      CategoryNamees: "EMBROIDERED COTTON SHIRT",
      Arrival: "Intermix New Arrivals",
      Price: "Rs.5,990.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STDYW24V23_6.jpg?v=1724228476&width=600",

      Color: "White and Blue",
      Fabric: "Cotton",
    },
    {
      id: 8,
      CategoryNamees: "PRINTED ARABIC LOAN DRESS",
      Arrival: "Intermix New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PFFSW24V213_3.jpg?v=1724228416&width=600",

      Color: "White and Blue",
      Fabric: "Cotton",
    },
  ];
  const MoreToExploreData = [
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0026/9238/2780/files/mommy_and_me.jpg?v=1723114267 ",
    },
    {
      imageUrl:
        " https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore_e96039a0-9920-4013-a417-203af968659b.jpg?v=1724312278",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore2.jpg?v=1723731851 ",
    },
    {
      imageUrl:
        " https://cdn.shopify.com/s/files/1/1592/0041/files/more_to_explore_c9f48b98-b619-4603-a6c7-9754e5063d2c.jpg?v=1715614629",
    },
    {
      imageUrl:
        " https://cdn.shopify.com/s/files/1/1592/0041/files/styled_by_you_MTE.jpg?v=1719989941",
    },
    {
      imageUrl:
        " https://cdn.shopify.com/s/files/1/1592/0041/files/fabric-more-to-explore.webp?v=1698053691",
    },
    {
      imageUrl:
        " https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore_69e767f0-c94c-4205-9fbf-ada217269011.jpg?v=1723731851",
    },
    {
      imageUrl:
        " https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore2.jpg?v=1723731851",
    },
  ];

  const StylesbyYOU = [
    {
      id: 1,
      ImagemainText: " Laiba Gahuri ",
      imageTextLink: "@libahghauri",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/libah_ghauri.jpg?v=1724879061&width=800",
      imagetext: "wearing our",
      imagetexttwo: "Piece-Embroidered Raw Silk Suit",
    },
    {
      id: 2,
      ImagemainText: " Ayesha Ahmad ",
      imageTextLink: "@vogueayesha",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Abeera-Riaz.jpg?v=1719989689&width=800",
      imagetext: "wearing our",
      imagetexttwo: "Seersucker Shirt-Dress With Pocket",
    },
    ,
    {
      id: 3,
      ImagemainText: "Zahra Safraz",
      imageTextLink: "@zahrasafraz",

      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Zara-Sarfaraz.jpg?v=1724879061&width=800",
      imagetext: "wearing our",
      imagetexttwo: "3 Piece-Embroidered Raw Silk Suit",
    },
    ,
    {
      id: 4,
      ImagemainText: "Qudsiya",
      imageTextLink: "@qudsiya",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Qudsia.jpg?v=1724879061&width=800",
      imagetext: "wearing our",
      imagetexttwo: "Embroidered Dobby Shirt",
    },
    {
      id: 5,
      ImagemainText: "Tashfeen Arshad",
      imageTextLink: "@tashfeenarshad",

      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Tashfeen-Arshad.jpg?v=1719920034&width=800",
      imagetext: "wearing our",
      imagetexttwo: "Embroidered Dobby Shirt",
    },
    {
      id: 6,
      ImagemainText: "Abeera Riaz",
      imageTextLink: "@abeera_riaz",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Abeera-Riaz.jpg?v=1719989689&width=800",
      imagetext: "wearing our",
      imagetexttwo: "3 Piece-Embroidered Raw Silk Suit",
    },
    ,
    {
      id: 7,
      ImagemainText: "Mahira Khan",
      imageTextLink: "@mahirnaKhan",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Mahira-Khan_styled-by-you.jpg?v=1715669672&width=800",
      imagetext: "wearing our",
      imagetexttwo: "3 Piece-Embroidered Khaddi Net Suit",
    },
    ,
  ];

  return (
    <>
      <div className="shop-by-category-container">
        <div className="shop-by-category"></div>

        <div>
          {/* <ConstData /> */}
          <ShopCatSlider
            data={dataWithoutMagnify}
            SectionName="SHOP BY CATEGORY"
            magnifyOnHover={false}
          />

          <ShopCatSlider
            data={dataWithMagnify}
            SectionName="TRENDING"
            magnifyOnHover={true}
          />

          <MoretoExplore
            data={MoreToExploreData}
            SectionName="MORE TO EXPLORE"
            magnifyOnHover={false}
          />
        </div>
        <StylesbyYou data={StylesbyYOU} />
      </div>
    </>
  );
};

export default ShopByCategory;
