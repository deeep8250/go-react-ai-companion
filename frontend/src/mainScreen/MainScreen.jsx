import Cards from "../Cards/cards";
import Hero from "./HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const MainScreen = () => {
  const [Data, setData] = useState([]);

  const Api = async () => {
    try {
      const resp = await fetch("http://localhost:8080/get", {
        method: "GET",
      });

      if (!resp.ok) {
        const Text = await resp.text();
        throw new Error(`server error : ${resp.status} ${Text}`);
      }
      const data = await resp.json();
      // use this if /get returns full array
      setData(data.response);

      console.log(data);
    } catch (err) {
      console.error("failed to create companion  : ", err);
    }
  };

  useEffect(() => {
    Api();
  }, [location]);

  return (
    <>
      <div className="w-full bg-blue-950 min-h-screen flex flex-col justify-between gap-20">
        <Hero />

        <div className="pt-10 flex flex-col items-center gap-20 p-10 ">
          <h1 className="text-white sm:text-5xl font-mono ">Your Companions</h1>

          <div className="w-full min-h-screen overflow-hidden flex">
            <div className="w-full">
              {Data != null && Data.length > 0 ? (
                <Swiper
                  slidesPerView={4} // <-- EXACTLY 4 slides visible
                  spaceBetween={130} // <-- spacing between cards
                  observer={true}
                  observeParents={true}
                  observeSlideChildren={true}
                >
                  {Data.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <Cards image={item.avatar} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <h1 className="text-3xl text-gray-500 font-mono font-semibold">
                  No Companion is created
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
