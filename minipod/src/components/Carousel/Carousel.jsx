import React, { useState } from "react";
import "./Carousel.css"; // Adjust the import path for your CSS
import img1 from "../../assets/Car1.jpg";
import img2 from "../../assets/Car2.jpg";
import img3 from "../../assets/Car3.jpg";
import img4 from "../../assets/Car4.jpg";
import img5 from "../../assets/Car5.jpg";

export const Carousel = () => {
  const slides = [img1, img2, img3, img4, img5];
  const [currIndex, setCurrIndex] = useState(0);
  const [leftImgIndex, setLeftImgIndex] = useState(4); // Initialize with the last image
  const [rightImgIndex, setRightImgIndex] = useState(1); // Initialize with the second image

  const nextSlide = () => {
    const nextIndex = currIndex === slides.length - 1 ? 0 : currIndex + 1;
    setLeftImgIndex(currIndex);
    setCurrIndex(nextIndex);
    setRightImgIndex(nextIndex === slides.length - 1 ? 0 : nextIndex + 1);
  };

  const prevSlide = () => {
    const prevIndex = currIndex === 0 ? slides.length - 1 : currIndex - 1;
    setLeftImgIndex(prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
    setCurrIndex(prevIndex);
    setRightImgIndex(currIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrIndex(slideIndex);
  };
  const sliderContainer = {
    display: "flex",
    alignItems: "center",
  };
  const mainImg = {
    backgroundImage: `url(${slides[currIndex]})`,
    backgroundSize: "cover", // Optional: Adjust background size
    width: "600px", // Adjust the width as needed
    height: "400px", // Adjust the height as needed
    borderRadius: "20px",
    zIndex:"9999"
  };
  const leftSideImg = {
    backgroundImage: `url(${
      slides[leftImgIndex === 0 ? slides.length - 1 : leftImgIndex - 1]
    })`,
    backgroundSize: "cover", // Optional: Adjust background size
    width: "450px", // Adjust the width as needed
    height: "300px",
    borderRadius: "20px", // Position the left image absolutely
    marginRight:"-250px"
  };
  const rightSideImg = {
    backgroundImage: `url(${
      slides[rightImgIndex === slides.length - 1 ? 0 : rightImgIndex + 1]
    })`,
    backgroundSize: "cover", // Optional: Adjust background size
    width: "450px", // Adjust the width as needed
    height: "300px", // Adjust the height as needed
    borderRadius: "20px",
    marginLeft:"-250px"
  };

  const rightArrowStyles = {
    margin: "0 1rem",
    fontSize: "30px",
    zIndex: 1,
    cursor: "pointer",
  };

  const leftArrowStyles = {
    margin: "0 1rem",
    fontSize: "30px",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    marginTop: "0.9rem",
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };
  const buttonContainer = {
    display: "flex",
  };

  // Function to handle changing the background image

  return (
    <div className="container">
      <h1>Carousel</h1>
      <div style={sliderContainer}>
        <div style={leftSideImg}></div>
        <div style={mainImg}></div>
        <div style={rightSideImg}></div>
      </div>

      <div></div>
      <div style={buttonContainer}>
        <div onClick={(index) => prevSlide(index)} style={leftArrowStyles}>
          ❰
        </div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              className="dots"
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
        <div onClick={(index) => nextSlide(index)} style={rightArrowStyles}>
          ❱
        </div>
      </div>
    </div>
  );
};
