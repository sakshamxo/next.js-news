import React from "react";


const disclaimer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <h1 className="text-4xl font-bold mt-4">Website Disclaimer</h1>
      
      <p className="w-9/12 mt-5 text-base">
        {" "}
        All the information contained on our website is to serve the general
        information purposes. The information is brought to you by {" "}
        <a
          className="text-red-600 font-semibold"
          href="https://loktantraudghosh.com/"
        >
          www.loktantraudghosh.com
        </a>
         and while we focus on keeping the information up to date and correct,
        we don’t deal with representations or warranties of any such kind,
        express or implied, about the completeness, reliability, accuracy,
        availability or suitability or availability of the website or the
        information, products, services, or related graphics displayed on our
        website for any purpose. Any kind of reliance you offer on such
        information is strictly at your own risk.
      </p>
      <p className="w-9/12 mt-3 text-base">
        In no event, we will be liable to any loss or damage which includes
        without limitation, indirect or consequential damage or loss or, or any
        loss or damage whatever comes up from a loss of data or profits arising
        from that, or in connection with the use of
        <a
          className="text-red-600 font-semibold"
          href="https://loktantraudghosh.com/"
        >
          www.loktantraudghosh.com
        </a>
        .
      </p>
      <p className="w-9/12 mt-3 text-base">
        By using this website you can link to several other websites which are
        not at all controlled by The Look . We have also no such control
        regarding the content, nature and availability of those sites. The
        inclusion of any external links does not give a recommendation or
        support the views expressed within them.
      </p>
      <p className="w-9/12 mt-3 text-base">
        We make every effort to keep our website running smoothly.
        However, <a
          className="text-red-600 font-semibold"
          href="https://loktantraudghosh.com/"
        >
          www.loktantraudghosh.com
        </a> has no responsibility for, and will not
        be liable if the website becomes temporarily unavailable because of
        technical issues beyond our control.
      
      </p>
 
    </div>
  );
};

export default disclaimer;
