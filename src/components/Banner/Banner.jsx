// import React from 'react'
import { UpdateFollower } from "react-mouse-follower";
import Headphone4 from "../../assets/headphone4.png";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
// import { fadeUp } from "../Services/Services";
const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};
const Banner = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col md:flex-row  items-center py-14 md:py-10 space-y-6 md:space-y-0 gap-12 w-full">
          {/* Banner Image  */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
                rotate: -180,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: easeInOut,
              }}
              className=" w-full lg:w-1/2"
            >
              <img
                src={Headphone4}
                alt="red color headphone"
                className="w-[300px] md:w-[400px] xl:w-[500px] mx-auto"
              />
            </motion.div>
          </AnimatePresence>
          {/* Banner Text Info  */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-center lg:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="show"
                className="uppercase text-2xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphone with the latest technology
              </motion.h1>
              <motion.p
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                velit, ducimus fugiat vel facilis soluta dolor ea deserunt
                perferendis maiores quas.
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  mixBlendMode: "difference",
                  scale: 5,
                }}
              >
                <motion.button
                  variants={fadeUp(0.7)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] text-[#e33343]
                rounded-md hover:bg-[#e33343] hover:text-white py-2 px-6"
                >
                  Shop Now
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
