import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../images/data";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        interval={3000}
        transitionTime={500}
        showArrows={true}
        
      >
        {images.map((img, index) => (
          <div key={index} className="h-[500px]">
            <img src={img} alt={`slide-${index}`} className="h-full  object-contain"/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;