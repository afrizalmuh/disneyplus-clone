import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import { SLIDER_IMG } from '../dummyData'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
            {
              breakpoint: 1368,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                  infinite: true,
                  dots: true
              }
            }
    ]
  };

  return (
    <Carousel {...settings}>
      {SLIDER_IMG.map((item, key) =>
        <div key={key}>
          <div className='border-2 border-transparent hover:border-white duration-300 transition ease-in-out rounded-lg shadow-3xl'>
            <div className='p-1 block relative'>
              <LazyLoadImage src={item.path } className='h-[12rem] md:h-[23rem]' alt={item.name} />
            </div>
          </div>
        </div>
      )}
    </Carousel>

    // <Slider {...settings}>
    //   {SLIDER_IMG.map((item, key) =>
    //     <div key={key}>
    //       <Wrap>
    //         <a><img src={item.path} alt="" /></a>
    //       </Wrap>
    //     </div>
    //   )}
    // </Slider>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover{
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before{
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before{
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImageSlider