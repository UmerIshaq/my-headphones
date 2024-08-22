// import React from 'react'

import { UpdateFollower } from "react-mouse-follower";

const BannerText = () => {
  return (
    <>
      <section className="py-12 text-center font-varela">
        <div className="container">
          <div
            className="bg-gradient-to-r from-primary to-primary/70
           text-white rounded-3xl p-8 hover:scale-105 hover:shadow-2xl duration-500"
          >
            <UpdateFollower
              mouseOptions={{
                zIndex: 999,
                backgroundColor: "black",
                followSpeed: 0.5,
                mixBlendMode: "screen",
                scale: 10,
              }}
            >
              <p className=" font-bold text-2xl md:text-4xl mx-auto leading-normal max-w-[700px]">
                Headphones with good quality and affordable Price
              </p>
            </UpdateFollower>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerText;
