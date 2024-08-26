// import React from 'react'

// import { useState } from "react";

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

const MobileNav = () => {
  //   const [State, setState] = useState(true);
  //   console.log(State);

  return (
    <nav className="w-full">
      <div className=" bg-brandDark mx-auto py-12 ">
        {/* <h1>Navbar</h1> */}
        <ul className="flex flex-col items-center justify-center text-center gap-6">
          {NavbarMenu.map((item, index) => (
            <a href="#" className="hover:text-primary" key={index}>
              <li className="text-lg font-varela cursor-pointer" key={index}>
                {item.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
