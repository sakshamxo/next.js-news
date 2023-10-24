import axios from "axios";
import Link from "next/link";
import { getMenu } from "@/utils/post";
import "remixicon/fonts/remixicon.css";
import SideBar from "./SideBar";
// import SideBar from "./SideBar";

// export const revalidate = 1; // revalidate at most every hour

export const dynamic = "force-dynamic";

const SlimNav = async () => {
  // https://loktantraudghosh.com/wp-json/menus/v1/menus/front-menu

  const menu = await getMenu();

  // console.log(menu)
  return (
    <div className="flex items-center justify-between bg-black">
      <SideBar/>

      {
        <ul className="flex w-full gap-2 pb-1 overflow-scroll md:overflow-auto text-sm snap-mandatory md:items-center md:justify-center text-white">
          {menu.items.map((item, index) => (
            <Link key={index} href={"/all/" + item.object_id}>
              <li className="px-2 py-1 rounded cursor-pointer font-bold hover:text-[#FE0001] whitespace-nowrap">
                {item.title}
                {/* {item.object_id} */}
              </li>
            </Link>
          ))}
        </ul>
      }
      <ul className="mt-1 md:mr-3 flex md:gap-6">
            <li>
              <a
                href="https://www.facebook.com/loktantrau"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
                <i className="text-sm md:text-2xl text-blue-600 ri-facebook-circle-fill"></i>
                
              </a>
            </li>
  
            <li>
              <a
                href="https://t.me/loktantraudghos"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Telegram</span>
  
                <i className="text-sm md:text-2xl text-sky-400 ri-telegram-fill"></i>
              </a>
            </li>
  
            <li>
              <a
                href="https://www.youtube.com/channel/UCeH4i_nZBty5IjLFf0F1g1A"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Youtube</span>
  
                <i className="text-sm md:text-2xl text-red-600 ri-youtube-fill"></i>
              </a>
            </li>
          </ul>
    </div>
  );
};

export default SlimNav;
