import Cards from "../Cards/cards";
import Hero from "./HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MainScreen = () => {
  var settings = {};

  return (
    <>
      <div className="w-full bg-blue-950 min-h-screen flex flex-col justify-between gap-20">
        <Hero />

        <div className="pt-10 flex flex-col items-center gap-20 p-10 ">
          <h1 className="text-white sm:text-5xl font-mono ">Your Companions</h1>

          <div className="w-full min-h-screen overflow-hidden">
            <div className="">
              <Swiper
                spaceBetween={0}
                slidesPerView={3}
                className="custom-swiper-slide"
              >
               <SwiperSlide>
                
               </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
