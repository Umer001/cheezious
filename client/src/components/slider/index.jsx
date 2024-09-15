import React from "react";
import { Carousel } from "flowbite-react";
const Slider = () => {
  return (
    <div className="h-[120px] sm:h-64 xl:h-80 2xl:h-[455px] rounded ">
      <Carousel indicators={false}>
        <img
          src="https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fbanners%2Fwebsite%2F1725625699609-Cheezious%20New%20Web%20Banner%2003.jpg&w=1920&q=75"
          alt="..."
        />
        <img
          src="https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fbanners%2Fwebsite%2F1725625656600-Cheezious%20New%20Web%20Banner%2001.jpg&w=1920&q=75"
          alt="..."
        />
        <img
          src="https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fbanners%2Fwebsite%2F1725625729436-Cheezious%20New%20Web%20Banner%2002.jpg&w=1920&q=75"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Slider;
