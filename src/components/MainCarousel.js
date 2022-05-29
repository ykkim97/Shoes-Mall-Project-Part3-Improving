import React from "react";
import { Carousel } from "react-bootstrap";
import "./MainCarousel.css";

// 메인홈 슬라이드
function MainCarousel() {
    return (
        <div>
            <Carousel fade className='carousel-frame'>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100 carousel-img"
                        src="img/home-캐러셀1.JPG"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dark navy</h3>
                        <p>15% 할인</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100 carousel-img"
                        src="img/home-캐러셀2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Brown Stone</h3>
                        <p>30% 할인</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100 carousel-img"
                        src="img/home-캐러셀3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='item3' >Converse RedWhite</h3>
                        <p className='item3'>10% 할인</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MainCarousel;