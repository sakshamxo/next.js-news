import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-1">
      <div>
        <a href={"/"}>
          <Image
            alt="Loktantra Udghosh"
            src={"/Loktrantra-768x271.png"}
            width={300}
            height={106}
            className="min-w-[150px] min-h-[53px]"
          />
        </a>
      </div>
      <div className="items-center hidden py-4 md:flex">
        <div className="flex ">
          <a href={"/"}>
            <div className="flex gap-2 px-8 py-3 border-t border-b border-l hover:bg-black hover:text-[#FE0001] rounded-l-xl border-slate-400 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h2>होम</h2>
            </div>
          </a>
          <p className="flex py-3 border-t border-b border-slate-400 text-slate-400 ">
            |
          </p>
        </div>
        <div className="flex gap-2 px-8 py-3 border-t border-b hover:bg-black hover:text-[#FE0001] border-slate-400 ">
          <a href={"/audio"}>
            <div className="flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>

              <h2>सुनिए</h2>
            </div>
          </a>
        </div>
        <p className="flex py-3 border-t border-b border-slate-400 text-slate-400 ">
          |
        </p>
        <div className="flex gap-2 px-8 py-3 border-t border-b hover:bg-black hover:text-[#FE0001] border-slate-400 ">
          <Link href={"/video"}>
            <div className="flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <h2>देखिये</h2>
            </div>
          </Link>
        </div>
        <p className="flex py-3 border-t border-b border-slate-400 text-slate-400 ">
          |
        </p>
        <div className="flex items-center gap-2 px-8 py-3 border-t border-b border-r hover:bg-black hover:text-[#FE0001] rounded-r-xl border-slate-400 ">
          <a href="https://epaper.loktantraudghosh.com/">
            <div className="flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>

              <h2>ईपेपर</h2>
            </div>
          </a>
        </div>
      </div>
      <div>
        <Image
          alt="Loktantra Udghosh app Download"
          className="min-w-[150px] min-h-[50px]"
          src={"/app_download.png"}
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

export default Navbar;
