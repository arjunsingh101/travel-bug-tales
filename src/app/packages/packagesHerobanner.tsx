/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const PackagesHeroBanner = () => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    // Initialize autoplay
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,    
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    pauseOnHover: false,
    pauseOnFocus: false,
    waitForAnimate: false,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      sliderRef.current.slickPlay(); // Ensure autoplay continues after manual navigation
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      sliderRef.current.slickPlay(); // Ensure autoplay continues after manual navigation
    }
  };

  const firstSlide = () => {
    return (
      <div className="relative h-screen overflow-hidden bg-packages_hero_bg_1 bg-cover bg-center bg-no-repeat">
        <div className="absolute z-10 top-0 left-0 size-full bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF]/35 to-[#FFFFFF]/0" />
        <div className="absolute text-[119px] outlined-only-1 text-[#F78D00] italic font-medium font-playListScript z-20 left-[10%] top-[23%]">
          its time to
        </div>
        <div className="absolute text-[200px] text-[#184A57] font-poppins font-bold z-10 left-[5%] top-[30%]">
          TRAVEL
        </div>
        <div className="absolute bottom-0 left-[50%] -translate-x-1/2">
          <div className="relative flex items-end justify-center h-40">
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-orange-400 top-5 z-0"></div>
            <div className="w-[250px] h-[120px] bg-teal-900 rounded-t-full z-10"></div>
          </div>
        </div>
      </div>
    );
  };

  const secondSlide = () => {
    return (
      <div className="relative h-screen bg-white overflow-hidden">
        <div className="h-full flex flex-col gap-5">
          <div className="flex flex-row justify-between pt-[9%] pl-[40px]">
            <div className="flex flex-col">
              <div className="text-[52px] leading-10 font-playListScript text-orange-400">
                Travel Presentation
              </div>
              <div className="text-[80px] leading-[70px] font-poppins text-black font-bold">
                Ultimate Travel <br /> Experience
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <img
                src={"/images/packages-1.webp"}
                alt="image"
                className="h-[200px] w-[500px] rounded-l-3xl object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[100px] flex-1">
            <div className="max-w-[35%] pl-[40px]">
              <div className="text-2xl text-black font-poppins font-bold">
                Journey Beyond Borders
              </div>
              <div className="text-xl font-poppins text-black pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                ipsum vitae lacus lobortis lacinia. Donec tristique arcu massa,
                at pharetra tortor.
              </div>
              <div>
                <Button
                  sx={{
                    fontSize: 20,
                    fontFamily: "poppins",
                    width: "150px",
                    textTransform: "capitalize",
                    backgroundColor: "#007370",
                    color: "white",
                    borderRadius: "25px",
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={"/images/packages-1.webp"}
                alt="image"
                className="w-full h-full rounded-l-3xl object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-[20%]">
            <div className="relative flex items-end justify-center h-40">
              <div className="absolute w-[220px] h-[220px] rounded-full border-2 border-dashed border-orange-400 top-12 z-0"></div>
              <div className="w-[200px] h-[100px] bg-teal-900 rounded-t-full z-10"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const thirdSlide = () => {
    return (
      <div className="h-screen bg-white relative overflow-hidden">
        <div className="h-full flex flex-col gap-[30px] pt-[8%]">
          <div className="flex flex-col text-center px-[250px] gap-5">
            <div className="text-[40px] leading-10 font-playListScript text-orange-400">
              Travel Presentation
            </div>
            <div className="text-[50px] leading-[50px] font-poppins text-black font-bold">
              A Traveler&apos;s Dream
            </div>
            <div className="text-xl font-poppins text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              ipsum vitae lacus lobortis lacinia. Donec tristique arcu massa, at
              pharetra tortor feugiat non.
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full px-10 flex-1">
            <div className="flex-1">
              <img
                src={"/images/packages-1.webp"}
                alt="image"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src={"/images/packages-1.webp"}
                alt="image"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="absolute right-0 top-[20%] -rotate-90">
            <div className="relative flex items-end justify-center h-40">
              <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-dashed border-orange-400 top-12 z-0"></div>
              <div className="w-[150px] h-[80px] bg-teal-900 rounded-t-full z-10"></div>
            </div>
          </div>
          <div className="absolute left-[5%] top-[40%]">
            <div className="relative flex items-end justify-center">
              <div className="absolute w-[50px] h-[50px] rounded-full border-2 border-dashed border-orange-400 z-0"></div>
              <div className="absolute w-[30px] h-[30px] bg-teal-900 rounded-full bottom-2.5 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CustomNavigation = () => (
    <div className="absolute bottom-10 right-10 z-50 flex gap-4">
      <button
        onClick={handlePrev}
        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {firstSlide()}
        {secondSlide()}
        {thirdSlide()}
      </Slider>
      <CustomNavigation />
    </div>
  );
};
