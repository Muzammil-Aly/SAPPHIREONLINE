import React from "react";
import Woman from "./SubCateogry/Woman";

const ConstData = () => {
  const womanData = [
    {
      id: 1,
      CategoryNamee: "PRINTED ARABIC LOAN DRESS",
      Arrival: "Intermix New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl: "https://example.com/image1.jpg", // Use valid image URLs
    },
    {
      id: 2,
      CategoryNamee: "PRINTED ARABIC LOAN DRESS",
      Arrival: "Intermix New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      CategoryNamee: "PRINTED ARABIC LOAN DRESS",
      Arrival: "Intermix New Arrivals",
      Price: "Rs.3,990.00",
      imageUrl: "https://example.com/image3.jpg",
    },
  ];

  return (
    <>
      <Woman items01={womanData} />
    </>
  );
};

export default ConstData;
