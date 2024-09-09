import React, { useRef, useState, useEffect } from "react";
import imgvt from "../img/city/VungTau/vt1.jpg";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SmoothHorizontalScrolling } from "../utils";

const destinations = [
    { name: "Vũng Tàu", text: "1.826 chỗ nghỉ", img: imgvt },
    { name: "Đà Nẵng", text: "2.513 chỗ nghỉ", img: imgvt },
    { name: "Đà Lạt", text: "2.145 chỗ nghỉ", img: imgvt },
    { name: "Nha Trang", text: "2.000 chỗ nghỉ", img: imgvt },
    { name: "Phú Quốc", text: "1.500 chỗ nghỉ", img: imgvt },
];

const ComponentDiscoverIndex = () => {
    const sliderRef = useRef();
    const imgRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const handlScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(sliderRef.current, 250,
                imgRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft);
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(sliderRef.current, 250,
                -imgRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft);
        }
    };

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handlScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag]);

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setDragDown(e.screenX);
    };

    const onDragEnd = (e) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const onDragEnter = (e) => {
        e.preventDefault();
        setDragMove(e.screenX);
    };

    return (
        <section className="explore-section spad">
            <SliderContainer className="container">
                <div className="section-title">
                    <h2 style={{ fontSize: '28px', fontWeight: 'bolder' }}>Khám Phá Việt Nam</h2>
                    <p>Các điểm đến phổ biến này có nhiều điều chờ đón bạn</p>
                </div>
                <ImageSiler ref={sliderRef} draggable="true"
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    onDragEnter={onDragEnter}>
                    {destinations.map((destination, index) => (
                        <div key={index} className="imgItem" ref={imgRef} draggable="false">
                            <div className="d-flex justify-content-center">
                                <div className="card">
                                    <img src={destination.img} className="card-img-top" alt={destination.name} draggable="false" />
                                    <div className="card-body">
                                        <h5 className="card-title">{destination.name}</h5>
                                        <p className="card-text">{destination.text}</p>
                                        <a href="#" className="btn" style={{ width: '100%', backgroundColor: '#dfa974' }} onClick={(e) => e.preventDefault()}>Xem chi tiết</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ImageSiler>
                <div className="container">
                    <div className="btnLeft" onClick={(e) => { e.preventDefault(); handleScrollLeft(); }}>
                        <FiChevronLeft />
                    </div>
                    <div className="btnRight" onClick={(e) => { e.preventDefault(); handlScrollRight(); }}>
                        <FiChevronRight />
                    </div>
                </div>
            </SliderContainer>
        </section>
    );
};

export default ComponentDiscoverIndex;

const SliderContainer = styled.div`
background-color: var(--color-background);
color: var(--color-white);
padding: 20px 20px 0;
position: relative;
width: 100%;
height: 100%;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.btnLeft, .btnRight {
  display: flex;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  height: 50px;
  width: 30px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btnLeft:hover, .btnRight:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.btnLeft:hover svg, .btnRight:hover svg {
  opacity: 1;
  transform: scale(1.2);
}

.btnLeft svg, .btnRight svg {
  opacity: 0.7;
  font-size: 20px;
  transition: all 0.3s linear;
}

`;

const ImageSiler = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(${destinations.length}, 300px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    .imgItem {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 8px;
        position: relative;
    }
`;
