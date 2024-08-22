// import React from 'react'
import { UpdateFollower } from "react-mouse-follower";
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";

const BlogsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est 
    quibusdam provident porro officia neque minima
     tempore officiis rem sunt debitis?`,
    Link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est 
    quibusdam provident porro officia neque minima
     tempore officiis rem sunt debitis?`,
    Link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est 
    quibusdam provident porro officia neque minima
     tempore officiis rem sunt debitis?`,
    Link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est 
    quibusdam provident porro officia neque minima
     tempore officiis rem sunt debitis?`,
    Link: "#",
    img: Blog4,
  },
];

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold font-poppins text-center pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((data) => {
              return (
                <UpdateFollower
                  key={data.id}
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1,
                    scale: 4,
                    text: "read",
                    textFontSize: "3px",
                  }}
                >
                  <div
                    key={data.id}
                    className=" flex flex-col justify-center items-center gap-6 
                  p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white
                  hover:-translate-y-2 duration-500"
                  >
                    <img src={data.img} alt={data.title} />
                    <div className="space-y-2">
                      <h1 className="line-clamp-2 text-xl font-bold">
                        {data.title}
                      </h1>
                      <p className="line-clamp-2">{data.desc}</p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
