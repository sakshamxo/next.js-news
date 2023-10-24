
import React from "react";

const Footer = () => {
  return (
    // mobile footer
    <div className="sticky bottom-0 left-0 flex flex-row justify-around w-full h-16 transition duration-500 ease-in bg-white sm:hidden ">
      <a
        href={"/"}
        className="flex flex-col items-center justify-center gap-1 p-2 m-2 hover:text-[#FE0001]"
      >
        <img src="/Home1.png" alt="होम" className="w-4 h-4" />
        <h2>होम</h2>
      </a>

      <a
        href={"/video"}
        className="flex flex-col items-center justify-center gap-1 p-2 m-2 hover:text-[#FE0001]"
      >
        <img src="/Show1.png" alt="देखिये" className="w-4 h-4" />
        <h2>देखिये</h2>
      </a>
      <a
        href={"/audio"}
        className="flex flex-col items-center justify-center gap-1 p-2 m-2 hover:text-[#FE0001]"
      >
        <img src="/Listen1.png" alt="सुनिए" className="w-4 h-4" />
        <h2>सुनिए</h2>
      </a>
      <a
        href="https://epaper.loktantraudghosh.com/"
        className="flex flex-col items-center justify-center gap-1 p-2 m-2 hover:text-[#FE0001]"
      >
        <img src="/Read1.png" alt="पढ़िए" className="w-4 h-4" />
        <h2>ई पेपर</h2>
      </a>
    </div>

    // mobile footer end
  );
};

export default Footer;
