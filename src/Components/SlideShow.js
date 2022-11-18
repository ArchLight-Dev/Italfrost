import React from 'react';
import { useState } from "react";
import bg from "../Art/bg.jpg";
import slide1 from "../Art/criocabin-lada-enixe-regal-eride.jpg";
import slide2 from "../Art/drzwi-bezramowe-gran-vista.jpg";
import slide3 from "../Art/lada-chlodnicza-ebonyony-z-produktami-garmazeryjnymi.jpg";
import slide4 from "../Art/lada-chlodnicza-enixe-na-swieze-mieso.jpg";
import slide5 from "../Art/lady-chlodnicze-z-miesem-enixe-elisir.jpg";

const slideStyles = {
    width: "90%",
    height: "60%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "10% auto 0 auto",
};

const rightArrowStyles = {
    position: "absolute",
    top: "35%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "35%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
};

const SlideShow = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlideShow;