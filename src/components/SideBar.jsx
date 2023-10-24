"use client";
import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { getMenu } from "@/utils/post";
const SideBar = () => {
  const [menu, setmenu] = useState(null);
  const OpenNavbar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("hidden");
  };
  const CloseNavbar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("hidden");
  };
  const menunav = async () => {
    const menu = await getMenu();
    // console.log(menu)
    setmenu(menu);
  };

  useEffect(() => {
    menunav();
  }, []);

  return (
    <>
      <div className="menu px-3 flex items-center justify-center hover:text-[#FE0001]">
        <button onClick={OpenNavbar}>
          <i className="text-xl text-white ri-menu-fill"></i>
        </button>
      </div>
      <div
        id="sidebar"
        className="hidden rounded absolute top-20 left-3 md:top-24 md:left-4 bg-white p-3 md:p-8 shadow-md shadow-slate-300 transform transition-transform translate-x-0 z-30"
      >
        <button className="w-5 h-5 hover:text-[#FE0001]" onClick={CloseNavbar}>
          <i className="text-2xl ri-close-fill"></i>
        </button>

        {
          <div className="flex flex-col items-center">
            {menu ? (
              menu.items.map((item, index) => (
                <Link key={index} href={"/all/" + item.object_id}>
                  <div className="md:w-52 md:h-14 w-40 h-14 flex items-center justify-evenly hover:text-[#FE0001] border-b-2 border-gray-300">
                    {item.title}
                    {/* {item.object_id} */}
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading menu....</p>
            )}
          </div>
        }
      </div>
    </>
  );
};

export default SideBar;
