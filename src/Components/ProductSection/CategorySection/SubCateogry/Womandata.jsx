import React from "react";
import { useState } from "react";
import "./WhatsNew.css";
import Navbar from "../../../Navabar/Navbar";
import Addtocartp1 from "./../../AddtoCart/Addtocartp1";
import WhatsNew from "./WhatsNew";
import Slider from "react-slick";
import FilterDropdown from "./FilterDropdown";
import Footer from "../../../Footer/Footer";
const Woman = ({ name }) => {
  const [columns, setColumns] = useState(4);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  // const [columns, setColumns] = useState(4);
  const WomanDetails = [
    {
      id: 1,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Daily-Unstitched-Intermix.jpg?v=1723717371&width=200",
      CategoryNamefirst: "Daily",
      CategoryNameScnd: "Unstitched Intermix",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
    {
      id: 2,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Tie-_-Dye-Ready-to-Wear-Intermix.jpg?v=1723717413&width=200",
      CategoryNamefirst: "TIE & DYE",
      CategoryNameScnd: "RTW Intermix",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },

    {
      id: 3,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Kids-New-Arrivals.jpg?v=1723717506&width=200",
      CategoryNamefirst: "KIDS",
      CategoryNameScnd: "NEW Arrivals",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
    {
      id: 4,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/whats-new-_-west-new-arrivals.jpg?v=1724304199&width=200",
      CategoryNamefirst: "WEST",
      CategoryNameScnd: "New Arrivals",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
    {
      id: 5,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Ready-to-Wear-Summer-_24.jpg?v=1723717815&width=200",
      CategoryNamefirst: "Ready To Wear",
      CategoryNameScnd: "Summer '24 ",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
    {
      id: 6,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/mens-outfits.jpg?v=1723718485&width=200",
      CategoryNamefirst: "Men's Outfits",
      CategoryNameScnd: "Intermix",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
    {
      id: 7,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/fragrance-what_s-new.jpg?v=1719828912&width=200",
      CategoryNamefirst: "Fragrances",
      // CategoryNameScnd: "RTW Intermix",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
  ];
  const ManData = [
    {
      id: 1,
      CategoryNamefirst: "Unstiched",
      // CategoryNameScnd: "Intermix",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0026/9238/2780/files/man___unstitched.jpg?v=1715949564",
      imageUrl01:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_1_7f7155dd-d7d4-488f-baca-062f0f8c0e32.jpg?v=1723704111&width=400",
    },
    {
      id: 2,
      CategoryNamefirst: "Stitched",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/Men-stitched_8db9b0f1-9883-49ae-9123-43c6f72d1773.jpg?v=1719838739",

      imageUrl01:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_1_7f7155dd-d7d4-488f-baca-062f0f8c0e32.jpg?v=1723704111&width=400",
    },
    ,
  ];
  const BeautyData = [
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
  ];
  const KidData = [
    {
      id: 1,

      CategoryNamefirst: "Girls",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0026/9238/2780/files/girls.jpg?v=1721902567",
    },
    {
      id: 2,
      CategoryNamefirst: "Boys",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0026/9238/2780/files/boys.jpg?v=1721902567",
    },
    {
      id: 3,
      CategoryNamefirst: "Kids Bedding",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/kids_bedding_main.jpg?v=1706179842",
    },
  ];
  const kidImages = [
    {
      id: 1,
      CategoryNamees: "2 Piece - Printed Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0002472BKS14_6.jpg?v=1723024258&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0002472BKS14_5.jpg?v=1723024259&width=400",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 7,
      CategoryNamees: "2 Piece - Embroidered Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC12_5.jpg?v=1721720836&width=400",

      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC12_6.jpg?v=1721720836&width=400",

      Arrival: "Summer New Arrivals",
    },
    {
      id: 2,
      CategoryNamees: "2 Piece - Printed Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0002472BKS14_6.jpg?v=1723024258&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0002472BKS14_5.jpg?v=1723024259&width=400",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 3,
      CategoryNamees: "2 Piece - Embroidered Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC19_4.jpg?v=1721720667&width=400",

      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC19_1.jpg?v=1721720667&width=400",

      Arrival: "Summer New Arrivals",
    },
    {
      id: 4,
      CategoryNamees: "2 Piece - Printed Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC28_4.jpg?v=1723025571&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC28_7.jpg?v=1723025570&width=400",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 5,
      CategoryNamees: "2 Piece - Printed Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0002472BKS14_6.jpg?v=1723024258&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0002472BKS14_5.jpg?v=1723024259&width=400",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 6,
      CategoryNamees: "2 Piece - Embroidered Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC12_5.jpg?v=1721720836&width=400",

      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC12_6.jpg?v=1721720836&width=400",

      Arrival: "Summer New Arrivals",
    },
    {
      id: 7,
      CategoryNamees: "2 Piece - Embroidered Lawn Suit",
      Price: "Rs.3,990.00-40900.0",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC12_5.jpg?v=1721720836&width=400",

      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/002472GKSC12_6.jpg?v=1721720836&width=400",

      Arrival: "Summer New Arrivals",
    },
  ];
  const dataWithMagnify = [
    {
      id: 1,
      CategoryNamees: "DROPPED LIGHT-WEIGHT DENIM SHIRT",
      Price: "Rs.3,990.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V50053_4.jpg?v=1724149926&width=600",
      Color: "White and Blue",
      Fabric: "Cotton",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
    {
      id: 2,
      CategoryNamees: "2 Piece - Printed Lawn Suit",
      Arrival: "New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000002472ME7_6.jpg?v=1723022850&width=400",
      Color: "White and Blue",
      Fabric: "Cotton",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000002472ME7_5.jpg?v=1723022850&width=400",
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
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
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
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
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
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
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
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
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
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
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
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2176SD_1.jpg?v=1723700874&width=600",
    },
  ];

  const newInData = [
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
  const newinImages = [
    {
      id: 1,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V522_2.jpg?v=1722325963&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V522_4.jpg?v=1722325963&width=400",
      CategoryNamees: "3 Piece - Embroidered Cambric Suit",
      Price: "Rs.4,590.00",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 2,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V521_1.jpg?v=1722325937&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V521_5.jpg?v=1722325937&width=400",
      CategoryNamees: "3 Piece - Embroidered Lawn Suit",
      Price: "Rs.4,590.00",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 3,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2SDF24V299ST_2.jpg?v=1723705092&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2SDF24V299ST_5.jpg?v=1723705092&width=400",
      CategoryNamees: "Printed Cotton Viscose Shirt",
      Price: "Rs.2,690.00",
      Arrival: "Intermix '24",
    },
    {
      id: 4,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PBDYW24V219_2.jpg?v=1723705535&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PBDYW24V219_5.jpg?v=1723705535&width=400",
      CategoryNamees: "Printed Lawn Shirt",
      Price: "Rs.3,590.00",
      Arrival: "Intermix '24",
    },
    {
      id: 5,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V522_2.jpg?v=1722325963&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V522_4.jpg?v=1722325963&width=400",
      CategoryNamees: "3 Piece - Embroidered Cambric Suit",
      Price: "Rs.4,590.00",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 6,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V521_1.jpg?v=1722325937&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V521_5.jpg?v=1722325937&width=400",
      CategoryNamees: "3 Piece - Embroidered Lawn Suit",
      Price: "Rs.4,590.00",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 7,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2SDF24V299ST_2.jpg?v=1723705092&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2SDF24V299ST_5.jpg?v=1723705092&width=400",
      CategoryNamees: "Printed Cotton Viscose Shirt",
      Price: "Rs.2,690.00",
      Arrival: "Intermix '24",
    },
    {
      id: 8,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PBDYW24V219_2.jpg?v=1723705535&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PBDYW24V219_5.jpg?v=1723705535&width=400",
      CategoryNamees: "Printed Lawn Shirt",
      Price: "Rs.3,590.00",
      Arrival: "Intermix '24",
    },
    {
      id: 9,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V522_2.jpg?v=1722325963&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V522_4.jpg?v=1722325963&width=400",
      CategoryNamees: "3 Piece - Embroidered Cambric Suit",
      Price: "Rs.4,590.00",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 10,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V521_1.jpg?v=1722325937&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V521_5.jpg?v=1722325937&width=400",
      CategoryNamees: "3 Piece - Embroidered Lawn Suit",
      Price: "Rs.4,590.00",
      Arrival: "Summer New Arrivals",
    },
    {
      id: 11,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2SDF24V299ST_2.jpg?v=1723705092&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2SDF24V299ST_5.jpg?v=1723705092&width=400",
      CategoryNamees: "Printed Cotton Viscose Shirt",
      Price: "Rs.2,690.00",
      Arrival: "Intermix '24",
    },
    {
      id: 12,
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PBDYW24V219_2.jpg?v=1723705535&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/0PBDYW24V219_5.jpg?v=1723705535&width=400",
      CategoryNamees: "Printed Lawn Shirt",
      Price: "Rs.3,590.00",
      Arrival: "Intermix '24",
    },
  ];
  const womanImages = [
    {
      id: 1,
      CategoryNamees: "Printed Lawn Shirt",

      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_4.jpg?v=1723702222&width=400",
      Price: "3543.00",
      Arrival: "New Arrival",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_7.jpg?v=1723702222&width=400",
    },
    {
      id: 2,
      CategoryNamees: "Printed Lawn Shirt",

      Price: "3543.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_2_d572287a-6bee-471f-bd2f-6a611c5aff26.jpg?v=1723704110&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_1_7f7155dd-d7d4-488f-baca-062f0f8c0e32.jpg?v=1723704111&width=400",
    },
    {
      id: 3,
      CategoryNamees: "Printed Lawn Shirt",

      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_4.jpg?v=1723702222&width=400",
      Price: "3543.00",
      Arrival: "New Arrival",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_7.jpg?v=1723702222&width=400",
    },
    {
      id: 4,
      CategoryNamees: "Printed Lawn Shirt",

      Price: "3543.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_2_d572287a-6bee-471f-bd2f-6a611c5aff26.jpg?v=1723704110&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_1_7f7155dd-d7d4-488f-baca-062f0f8c0e32.jpg?v=1723704111&width=400",
    },
    {
      id: 1,
      CategoryNamees: "Printed Lawn Shirt",

      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_4.jpg?v=1723702222&width=400",
      Price: "3543.00",
      Arrival: "New Arrival",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_7.jpg?v=1723702222&width=400",
    },
    {
      id: 2,
      CategoryNamees: "Printed Lawn Shirt",

      Price: "3543.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_2_d572287a-6bee-471f-bd2f-6a611c5aff26.jpg?v=1723704110&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_1_7f7155dd-d7d4-488f-baca-062f0f8c0e32.jpg?v=1723704111&width=400",
    },
    {
      id: 3,
      CategoryNamees: "Printed Lawn Shirt",

      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_4.jpg?v=1723702222&width=400",
      Price: "3543.00",
      Arrival: "New Arrival",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/2DF24V2162SD_7.jpg?v=1723702222&width=400",
    },
    {
      id: 4,
      CategoryNamees: "Printed Lawn Shirt",

      Price: "3543.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_2_d572287a-6bee-471f-bd2f-6a611c5aff26.jpg?v=1723704110&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V28_1_7f7155dd-d7d4-488f-baca-062f0f8c0e32.jpg?v=1723704111&width=400",
    },
  ];

  const ManImages = [
    {
      id: 1,
      CategoryNamees: "Embroidered Cotton Jacquard Kurta",

      Price: "Rs.4590.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V217_5.jpg?v=1723696919&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V217_2.jpg?v=1723696920&width=400",
    },
    {
      id: 2,
      CategoryNamees: "Embroidered Cotton Kurta",

      Price: "Rs.4590.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V223_2.jpg?v=1723697003&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V223_4.jpg?v=1723697003&width=400",
    },
    {
      id: 3,
      CategoryNamees: "Wash & Wear Suit",

      Price: "Rs.5990.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2PNSBLV19_5.jpg?v=1723697653&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2PNSBLV19_4.jpg?v=1723697653&width=400",
    },
    {
      id: 4,
      CategoryNamees: "Embroidered Cotton Jacquard Kurta",

      Price: "Rs.4590.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2P24IV233_1.jpg?v=1723697632&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2P24IV233_5.jpg?v=1723697632&width=400",
    },
    {
      id: 5,
      CategoryNamees: "Embroidered Cotton Jacquard Kurta",

      Price: "Rs.4590.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V217_5.jpg?v=1723696919&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V217_2.jpg?v=1723696920&width=400",
    },
    {
      id: 6,
      CategoryNamees: "Embroidered Cotton Kurta",

      Price: "Rs. 4590.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V223_2.jpg?v=1723697003&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MSTEKR24V223_4.jpg?v=1723697003&width=400",
    },
    {
      id: 7,
      CategoryNamees: "Wash & Wear Suit",

      Price: "Rs.5990.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2PNSBLV19_5.jpg?v=1723697653&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2PNSBLV19_4.jpg?v=1723697653&width=400",
    },
    {
      id: 8,
      CategoryNamees: "Embroidered Cotton Jacquard Kurta",

      Price: "Rs.4590.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2P24IV233_1.jpg?v=1723697632&width=400",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MST2P24IV233_5.jpg?v=1723697632&width=400",
    },
  ];
  const accesoriesDetails = [
    {
      id: 1,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/women-shoes_ae0743d8-df23-4289-bb10-4fca6ada0f7f.jpg?v=1720085440",
      CategoryNamefirst: "Women's Shoes",
      // CategoryNameScnd: "Intermix",
    },

    {
      id: 2,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/women-bags.jpg?v=1720085440",
      CategoryNamefirst: "Women's Bags",
      // CategoryNameScnd: "Intermix",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/west-scarves.jpg?v=1715237307",
      CategoryNamefirst: "Scarves",
      // CategoryNameScnd: "Intermix",
    },
  ];

  const homeDetails = [
    {
      id: 1,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/bed-throwsThumbnail_2e414958-a36b-42f0-8393-029e0803539f.jpg?v=1694772001",
      CategoryNamefirst: "Bedding",
      // CategoryNameScnd: "Intermix",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/home___table_linen.jpg?v=1710412600",
      CategoryNamefirst: "Table and Kitchen Linen",
      // CategoryNameScnd: "Intermix",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/bath-linen-Thumbnails.jpg?v=1692267877",
      CategoryNamefirst: "Bath linen",
      // CategoryNameScnd: "Intermix",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/Living-_cushion_coverss.jpg?v=1706179842",
      CategoryNamefirst: "Living",
      // CategoryNameScnd: "Intermix",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/printed-thumbnail_97168a7c-7145-487b-90e9-a2e2e092fce3.jpg?v=1698916202",
      CategoryNamefirst: "Shop by Type",
      // CategoryNameScnd: "Intermix",
    },
    {
      id: 6,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/home___shop_by_theme.jpg?v=1707214922",
      CategoryNamefirst: "Shop by Theme",
      // CategoryNameScnd: "Intermix",
    },
  ];
  const beautyDetails = [
    {
      id: 1,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/cosmetics-2.jpg?v=1649325465",
      CategoryNamefirst: "Cosmetics",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/fragrances_main_519fa46f-e1e7-4391-999b-9488d8d72a77.jpg?v=1706783181",
      CategoryNamefirst: "Fragrances",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1592/0041/files/MicrosoftTeams-image_1811e4c1-f423-45a2-92c6-cd2bbbac04b4.jpg?v=1701688454",
      CategoryNamefirst: "Shop By Scent",
    },
  ];
  const beautyImage = [
    {
      id: 1,
      CategoryNamees: "Hydrating Lipstick - Rosewood",

      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MNGO2677.jpg?v=1719581808&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Rosewood.jpg?v=1719581808&width=600",
    },
    {
      id: 2,
      CategoryNamees: "Hydrating Lipstick - Berry Red",
      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML0856.jpg?v=1725862201&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/BerryRed_2.jpg?v=1725862203&width=600",
    },
    {
      id: 3,
      CategoryNamees: "Lipstick",

      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML06317.jpg?v=1725862144&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML063_3.jpg?v=1725626121&width=600",
    },
    {
      id: 4,
      CategoryNamees: "Lipstick",

      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML06317.jpg?v=1725862144&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML063_3.jpg?v=1725626121&width=600",
    },
    {
      id: 1,
      CategoryNamees: "Hydrating Lipstick - Rosewood",

      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/MNGO2677.jpg?v=1719581808&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/Rosewood.jpg?v=1719581808&width=600",
    },
    {
      id: 2,
      CategoryNamees: "Hydrating Lipstick - Berry Red",
      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML0856.jpg?v=1725862201&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/BerryRed_2.jpg?v=1725862203&width=600",
    },
    {
      id: 3,
      CategoryNamees: "Lipstick",

      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML06317.jpg?v=1725862144&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML063_3.jpg?v=1725626121&width=600",
    },
    {
      id: 4,
      CategoryNamees: "Lipstick",

      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML06317.jpg?v=1725862144&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000CML063_3.jpg?v=1725626121&width=600",
    },
  ];

  const AccesImages = [
    {
      id: 1,
      CategoryNamees: "Square-toe Flats",

      Price: "Rs.4990.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2506_1.jpg?v=1719999215&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2506_3.jpg?v=1719999215&width=600",
    },
    {
      id: 2,
      CategoryNamees: "Black Top Handle Bag",
      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1472_1.jpg?v=1719998282&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1472_3.jpg?v=1720089661&width=600",
    },
    {
      id: 3,
      CategoryNamees: "Square-toe Flats",

      Price: "Rs.2790.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2505_1.jpg?v=1719999208&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2505_3.jpg?v=1719999208&width=600",
    },
    {
      id: 4,
      CategoryNamees: "Tan Top Handle Bag",

      Price: "Rs.4,390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1473_1.jpg?v=1720090617&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1473_2.jpg?v=1720090617&width=600",
    },
    {
      id: 1,
      CategoryNamees: "Square-toe Flats",

      Price: "Rs.4990.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2506_1.jpg?v=1719999215&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2506_3.jpg?v=1719999215&width=600",
    },
    {
      id: 2,
      CategoryNamees: "Black Top Handle Bag",
      Price: "Rs.1390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1472_1.jpg?v=1719998282&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1472_3.jpg?v=1720089661&width=600",
    },
    {
      id: 3,
      CategoryNamees: "Square-toe Flats",

      Price: "Rs.2790.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2505_1.jpg?v=1719999208&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000SL2505_3.jpg?v=1719999208&width=600",
    },
    {
      id: 4,
      CategoryNamees: "Tan Top Handle Bag",

      Price: "Rs.4,390.00",
      Arrival: "New Arrival",
      imageUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1473_1.jpg?v=1720090617&width=600",
      hoverUrl:
        "https://pk.sapphireonline.pk/cdn/shop/files/000000HB1473_2.jpg?v=1720090617&width=600",
    },
  ];
  const featured = [
    {
      id: 1,
      listName: "Featured",
    },
    { id: 2, listName: "Best selling" },
    {
      id: 3,
      listName: "Alphabetically, A-Z",
    },
    { id: 4, listName: "Alphabetically, Z-A" },
    {
      id: 5,
      listName: "Price, low to high",
    },
    { id: 6, listName: "Price, high to low" },

    { id: 7, listName: "    Date, old to new" },
    { id: 6, listName: "    Date, new to old" },
  ];
  // con
  // const displayData = name === "MAN" ? ManData : WomanDetails;

  const displayData =
    {
      "NEW IN": newInData,
      MAN: ManData,
      WOMAN: WomanDetails,
      BEAUTY: beautyDetails,
      KIDS: KidData,
      ACCESSORIES: accesoriesDetails,
      HOME: homeDetails,
    }[name] || [];
  const scndDisplayData =
    {
      "NEW IN": newinImages,
      MAN: ManImages,
      WOMAN: womanImages,
      ACCESSORIES: AccesImages,
      BEAUTY: beautyImage,
      KIDS: kidImages,
      HOME: womanImages,
    }[name] || [];
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <div className="containerDet">
          {/* <WhatsNew Data={displayData} firstText={name} /> */}
          <WhatsNew
            Data={displayData}
            firstText={name}
            firstTextClass="first-text-class"
            dailyUnstitchedDet="daily-unstitched-det"
            headingItemsdet="heading-items-det"
            whatsnewcontainerDet="whats-new-containerDet"
          />
        </div>

        <div className="Product-Container">
          {/* <div className="whats-new-container">
          <div className="Heading">
            <p>{name}</p>
          </div>

          <div className="heading-items">
            {displayData.map((item) => (
              <div key={item.id} className="daily-unstitched">
                <a href="#">
                  <img src={item.imageUrl} alt={item.CategoryNamees} />
                  <h3 className="whats-new-title">{item.CategoryName}</h3>
                </a>
              </div>
            ))}
          </div>
        </div> */}

          <div className="grid-controls">
            <div className="whats-new-title button-grids">
              <p>Home > </p>
              <p>{name} </p>
            </div>
            <div className="grid-layout">
              <button className="layout-button" onClick={() => setColumns(2)}>
                II
              </button>
              <button onClick={() => setColumns(3)}>III</button>
              <button onClick={() => setColumns(4)}> IIII</button>
            </div>
          </div>
          <div className="filter-section">
            <div className="filter-section-1stchild">
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iXUdHt6ibVbWIcS-9VQ3tGo4Y0ETJuF5xA&s" />
              </div>
              <div>
                <p>Filter</p>
              </div>
            </div>
            <div>
              <FilterDropdown list={featured} />
            </div>
          </div>
          <div
            className="ProductImages"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {scndDisplayData.map((item) => (
              <div key={item.id} className="grid-items">
                <div className="Product-image">
                  <a href="#">
                    <img src={item.imageUrl} alt={item.CategoryNamees} />
                  </a>
                  <img
                    src={item.hoverUrl}
                    alt={`${item.CategoryNamees}-magnified`}
                    className="magnified-image"
                  />
                </div>
                <div className="trend-info-woman">
                  <div className="trend-info-container">
                    <p className="trend-text m-0 p-0">{item.CategoryNamees}</p>
                    <p className="trend-arrival m-0 p-0">{item.Arrival}</p>
                    <p className="trend-price m-0 p-0">{item.Price}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setIsToggled(true);
                        setSelectedItem(item);
                      }}
                      className="buyButton"
                    >
                      ADD TO BAG
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isToggled && (
          <div className="overlay">
            <button
              className="close-overlay"
              onClick={() => setIsToggled(false)}
            >
              X
            </button>

            <Addtocartp1 item={selectedItem} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Woman;
