import React from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi ipsam fugit
     repellendus aperiam, adipisci, mollitia facilis, autem optio.`,
    price: "$100",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi ipsam fugit
     repellendus aperiam, adipisci, mollitia facilis, autem optio.`,
    price: "$100",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi ipsam fugit
     repellendus aperiam, adipisci, mollitia facilis, autem optio.`,
    price: "$100",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <section className="bg-brandDark text-white font-varela">
      <div className="container w-full flex flex-col justify-center md:items-start md:flex-row md:justify-center gap-10 py-14 min-h-[700px]">
        {/* HeadPhone Info  */}
        <div className="flex flex-col items-center  w-full md:w-1/2  py-14 md:py-0 xl:max-w-[500px]">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: -720,
                  mixBlendMode: "difference",
                }}
              >
                <motion.h1
                  key={activeData.id}
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl font-bold font-varela"
                >
                  {activeData.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={fadeUp(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  followSpeed: 0.5,
                  zIndex: 999,
                  scale: 6,
                  rotate: -720,
                  //   mixBlendMode: "difference",
                  backgroundElement: (
                    <di>
                      <img src={activeData.image} alt="headphone image" />
                    </di>
                  ),
                }}
              >
                <motion.button
                  key={activeData.id}
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ backgroundColor: activeData.bgColor }}
                  className="px-4 py-2 inline-block font-normal rounded-sm"
                >
                  Buy and Listen
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>
            {/* Headphone list sperator  */}
            <div className="flex justify-center items-center md:justify-start gap-4 !mt-24">
              <div className="w-20 h-[1px] bg-white"></div>
              <p className="uppercase text-sm">Top Headphones for you</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </div>
            {/* Headphone List switcher  */}
            <div className="grid grid-cols-3 gap-4 lg:gap-10">
              {headphoneData.map((item) => {
                return (
                  <UpdateFollower
                    key={item.id}
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      followSpeed: 0.7,
                      zIndex: 999,
                      scale: 5,
                      text: "view Details",
                      textFontSize: "3px",
                    }}
                  >
                    <div
                      onClick={() => {
                        handleActiveData(item);
                      }}
                      key={item.id}
                      className="grid grid-cols-2 place-items-center gap-4 cursor-pointer"
                    >
                      <div>
                        <img
                          src={item.image}
                          alt=""
                          className="w-[150px] lg:w-[200px]"
                        />
                      </div>
                      <div className="space-y-1 text-start">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.modal}
                        </p>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </div>
          </div>
        </div>
        {/* HeadPhone Image  */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.9,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 100,
                transition: {
                  duration: 0.2,
                },
              }}
              src={activeData.image}
              alt="headphone image"
              className="w-[300px] md:w-[400px] xl:w-[550px]"
            />
          </AnimatePresence>
        </div>
        {/* Whatsapp Icon  */}
        <div
          className="text-3xl !text-green-500 fixed bottom-5 right-5 lg:text-4xl lg:bottom-10 lg:right-10 hover:rotate-[360deg]
             duration-500 z-[9999]"
        >
          <a href="#">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
