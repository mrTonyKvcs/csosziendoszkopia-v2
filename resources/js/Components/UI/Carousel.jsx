import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

const CarouselContent = styled.div`
    display: flex;
    width: ${(props) => props.width}px;
    transition: transform ${(props) => props.transition}s ease-in-out;
    transform: translateX(-${(props) => props.translate}px);
`;

const CarouselSlide = styled.div`
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
`;

const Carousel = ({ children, autoSlideInterval = 5000, transition = 0.5 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
        }, autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlideInterval, children.length]);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setTranslate(activeIndex * width);
    }, [activeIndex, width]);

    return (
        <CarouselWrapper>
            <CarouselContent
                width={width * children.length}
                translate={translate}
                transition={transition}
            >
                {children((child, index) => (
                    <CarouselSlide key={index}>{child}</CarouselSlide>
                ))}
            </CarouselContent>
        </CarouselWrapper>
    );
};

export default Carousel;
