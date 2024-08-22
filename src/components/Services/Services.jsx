// import React from 'react'
import { UpdateFollower } from "react-mouse-follower";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { motion } from "framer-motion";

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

const ServicesData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
         odio quia sapiente architecto vero maxime tempora rerum. Soluta, officiis
          labore voluptatibus mollitia quod ab eligendi, tempore odio unde possimus iste.`,
    delay: 0.5,
  },
  {
    id: 2,
    title: "Gurantee",
    icon: Icon2,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
         odio quia sapiente architecto vero maxime tempora rerum. Soluta, officiis
          labore voluptatibus mollitia quod ab eligendi, tempore odio unde possimus iste.`,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
         odio quia sapiente architecto vero maxime tempora rerum. Soluta, officiis
          labore voluptatibus mollitia quod ab eligendi, tempore odio unde possimus iste.`,
    delay: 1.1,
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Services
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {ServicesData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: "white",
                  followSpeed: 0.5,
                  zIndex: 999,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div>
                      <img src={data.icon} alt="icon" />
                    </div>
                  ),
                }}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  whileInView="show"
                  className="flex flex-col justify-center items-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white "
                >
                  <img src={data.icon} alt="icon" className="w-[100px] mb-4" />
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold 2xl:font-extrabold">
                      {data.title}
                    </h1>
                    <p className="text-sm text-center text-black/75">
                      {data.description}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
