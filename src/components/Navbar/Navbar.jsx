// import React from "react";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import MobileNav from "../MobileNav/MobileNav";
import { useState } from "react";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

// const NavData = () => {
//   NavbarMenu.map((item) => {
//     item;
//   });
// };
const Navbar = () => {
  const [State, setState] = useState(false);

  return (
    <>
      <div className="bg-brandDark text-white py-8 font-varela ">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container flex justify-between items-center"
        >
          {/* Logo Section  */}
          <div>
            <a href="/" className="text-xl font-bold uppercase">
              Playing /{" "}
              <span className="font-extralight text-white/70">Market</span>
            </a>
          </div>
          {/* Menu Section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      scale: 3,
                      followSpeed: 1.5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a
                      href={item.link}
                      className="inline-block text-sm uppercase py-2 px-3"
                    >
                      {item.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  scale: 3,
                  followSpeed: 1.5,
                  mixBlendMode: "difference",
                }}
              >
                <div className="text-xl ps-14">
                  <SlEarphones />
                </div>
              </UpdateFollower>
            </ul>
          </div>
          {/* Mobile Hamburger Section  */}
          {State == false ? (
            <div className="md:hidden">
              <MdMenu onClick={() => setState(true)} className="text-4xl" />
            </div>
          ) : (
            <div className="md:hidden">
              <ImCross onClick={() => setState(false)} className="text-2xl" />
            </div>
          )}
          {/* Mobile Navbar  */}
        </motion.nav>
        {!State == false ? <MobileNav State={State} /> : null}
      </div>
    </>
  );
};

export default Navbar;
