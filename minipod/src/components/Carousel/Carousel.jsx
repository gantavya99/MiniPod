import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Carousel.css"; // Adjust the import path for your CSS
import img1 from "../../assets/Car1.jpg";
import img2 from "../../assets/Car2.jpg";
import img3 from "../../assets/Car3.jpg";
import img4 from "../../assets/Car4.jpg";
import img5 from "../../assets/Car5.jpg";

export const Carousel = () => {
  const slides = [img1, img2, img3, img4, img5];
  const [leftImg1Index, setLeftImg1Index] = useState(0);
  const [leftImgIndex, setLeftImgIndex] = useState(1);
  const [currIndex, setCurrIndex] = useState(2);
  const [rightImgIndex, setRightImgIndex] = useState(3);
  const [rightImg1Index, setRightImg1Index] = useState(4);
  const prevSlide = () => {
    const nextSlide = currIndex === slides.length - 1 ? 0 : currIndex + 1;
    const nextLeftSlide =
      leftImgIndex === slides.length - 1 ? 0 : leftImgIndex + 1;
    const nextRightSlide =
      rightImgIndex === slides.length - 1 ? 0 : rightImgIndex + 1;
    const nextRight1Slide =
      rightImg1Index === slides.length - 1 ? 0 : rightImg1Index + 1;
    const nextLeft1Slide =
      leftImg1Index === slides.length - 1 ? 0 : leftImg1Index + 1;
    setCurrIndex(nextSlide);
    setLeftImgIndex(nextLeftSlide);
    setRightImgIndex(nextRightSlide);
    setLeftImg1Index(nextLeft1Slide);
    setRightImg1Index(nextRight1Slide);
    console.log(`leftIndex=${leftImgIndex}`);
    console.log(`currIndex=${currIndex}`);
    console.log(`rightIndex=${rightImgIndex}`);
  };
  const nextSlide = () => {
    const nextSlide = currIndex === 0 ? slides.length - 1 : currIndex - 1;
    const nextLeftSlide =
      leftImgIndex === 0 ? slides.length - 1 : leftImgIndex - 1;
    const nextRightSlide =
      rightImgIndex === 0 ? slides.length - 1 : rightImgIndex - 1;
    const nextRight1Slide =
      rightImg1Index === 0 ? slides.length - 1 : rightImg1Index - 1;
    const nextLeft1Slide =
      leftImg1Index === 0 ? slides.length - 1 : leftImg1Index - 1;
    setCurrIndex(nextSlide);
    setLeftImgIndex(nextLeftSlide);
    setRightImgIndex(nextRightSlide);
    setLeftImg1Index(nextLeft1Slide);
    setRightImg1Index(nextRight1Slide);
    setCurrIndex(nextSlide);
  };
  const goToSlide = (slideIndex) => {
    setCurrIndex(slideIndex);
  };
  const slideVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
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
    zIndex: "9999",
  };
  const leftSideImg = {
    backgroundImage: `url(${slides[leftImgIndex]})`,
    backgroundSize: "cover", // Optional: Adjust background size
    width: "450px", // Adjust the width as needed
    height: "300px",
    borderRadius: "20px", // Position the left image absolutely
    marginRight: "-250px",
    zIndex: "10",
  };
  const leftSideImg1 = {
    backgroundImage: `url(${slides[leftImg1Index]})`,
    backgroundSize: "cover", // Optional: Adjust background size
    width: "300px", // Adjust the width as needed
    height: "200px",
    borderRadius: "20px", // Position the left image absolutely
    marginRight: "-150px",
  };
  const rightSideImg = {
    backgroundImage: `url(${slides[rightImgIndex]})`,
    backgroundSize: "cover", // Optional: Adjust background size
    width: "450px", // Adjust the width as needed
    height: "300px", // Adjust the height as needed
    borderRadius: "20px",
    marginLeft: "-250px",
    zIndex: "10",
  };
  const rightSideImg1 = {
    backgroundImage: `url(${slides[rightImg1Index]})`,
    backgroundSize: "cover", // Optional: Adjust background size
    width: "300px", // Adjust the width as needed
    height: "200px", // Adjust the height as needed
    borderRadius: "20px",
    marginLeft: "-150px",
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
          
          <div style={leftSideImg1}></div>
          <div style={leftSideImg}></div>
          <div style={mainImg}></div>
          <div style={rightSideImg}></div>
          <div style={rightSideImg1}></div>
          
        </div>
      

      <div></div>
      <div style={buttonContainer}>
        <div onClick={() => prevSlide()} style={leftArrowStyles}>
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
        <div onClick={() => nextSlide()} style={rightArrowStyles}>
          ❱
        </div>
      </div>
    </div>
  );
};
