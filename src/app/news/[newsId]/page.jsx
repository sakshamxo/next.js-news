import { getSinglePost, getSinglePostBySlug } from "@/utils/post";
import React from "react";

import "remixicon/fonts/remixicon.css";
import renderHTML from "react-render-html";

import Head from "next/head";

const NewsPage = async ({ params }) => {
  const post = await getSinglePost(params.newsId);
  // const post = await getSinglePostBySlug(params.newsId);
  // console.log(post.content.rendered);
  // console.log(post.categories[0])
  // let refer = await post?.categories[0]
  // console.log(post)
 
  return (
    <div className="flex flex-col items-center p-4 mx-4 my-8 bg-white border sm:ml-16 rounded-xl border-slate-200">
      <head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title.rendered} />
        <meta
          property="og:description"
          content="सत्य, निष्ठा, साहस और समर्पण || Latest news | daily e-paper | national and local news"
        />
        <meta property="og:image" content={post.x_featured_media_large} />
        <meta
          property="og:url"
          content={`https://www.loktantraudghosh.com/news/${post.id}`}
        />
          <meta property="og:site_name" content="Loktantra Udhgosh" />
      </head>
      <h1 className="text-xl font-bold ">{renderHTML(post.title.rendered)}</h1>
      <img
        className="w-full h-auto mt-4"
        src={post.x_featured_media_large}
        alt="feature image"
      />
      <div className="flex flex-col items-center justify-between w-full md:flex-row">
        <div className="flex items-center mt-4 mb-4 w-50 content-evenly">
          <div className="overflow-hidden rounded-full w-11 h-11 ">
            <img src={post.x_gravatar} alt="author" />
          </div>
          <div className="flex flex-col items-center mx-1 md:flex-row md:justify-evenly">
            <h5 className="text-xl md:mx-6 md:w-50">{post.x_author}</h5>{" "}
            <h6 className="md: w-50">{post.x_date}</h6>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 m-2 rounded w-50 flex-wrap">
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href={`https://www.facebook.com/sharer.php?u=https://www.loktantraudghosh.com/news/${post?.id}}`}
            >
              <i className="text-3xl text-blue-600 ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/intent/tweet?text=${post?.title.rendered} https://www.loktantraudghosh.com/news/${post?.id} `}
            >
              <i className="text-3xl ri-twitter-x-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `Check Out This Article:- ${post?.title.rendered} - https://www.loktantraudghosh.com/news/${post?.id}`
              )}`}
            >
              <i className="text-3xl text-green-600 ri-whatsapp-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://t.me/share/url?url=https://www.loktantraudghosh.com/news/${post?.id}&text=${post?.title.rendered}`}
            >
              <i className="text-3xl text-sky-400 ri-telegram-fill"></i>
            </a>
            <a
              target="_blank"
              href="https://news.google.com/publications/CAAqBwgKMJWWkgswn8enAw"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="L-XE1-AhSuENmensHMz7Ea_eGZs8grn6szD_gr1"
                  x1="-57.494"
                  x2="-46.494"
                  y1="73.498"
                  y2="84.498"
                  gradientTransform="translate(68.993 -66.999)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#33c481"></stop>
                  <stop offset="1" stop-color="#21a366"></stop>
                </linearGradient>
                <path
                  fill="url(#L-XE1-AhSuENmensHMz7Ea_eGZs8grn6szD_gr1)"
                  d="M9.999,7.006v23.988c0,1.107,0.9,2.007,2.007,2.007	h23.988c1.107,0,2.007-0.9,2.007-2.007V7.006c0-1.107-0.9-2.007-2.007-2.007H12.006C10.899,4.999,9.999,5.899,9.999,7.006z"
                ></path>
                <path
                  fill-opacity=".047"
                  d="M37.514,17.545l-9.729-7.271l10.215,1.493l0.001,4.241	L37.514,17.545z"
                ></path>
                <path
                  fill-opacity=".071"
                  d="M37.514,17.545l-9.729-7.271l10.215,2.132l0.001,3.603	L37.514,17.545z"
                ></path>
                <linearGradient
                  id="L-XE1-AhSuENmensHMz7Eb_eGZs8grn6szD_gr2"
                  x1="-50.347"
                  x2="-31.391"
                  y1="70.123"
                  y2="89.079"
                  gradientTransform="translate(70.438 -57.129)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f44f5b"></stop>
                  <stop offset="1" stop-color="#e5202e"></stop>
                </linearGradient>
                <path
                  fill="url(#L-XE1-AhSuENmensHMz7Eb_eGZs8grn6szD_gr2)"
                  d="M22.511,10.767l-5.837,21.14	c-0.269,0.976,0.304,1.987,1.279,2.256l20.898,5.769c0.975,0.269,1.985-0.303,2.255-1.279l5.837-21.141	c0.269-0.975-0.304-1.985-1.279-2.255L24.766,9.487C23.791,9.218,22.781,9.791,22.511,10.767z"
                ></path>
                <path
                  fill-opacity=".047"
                  d="M29.999,15.999l-4-5l1.507-0.753l2.492,0.688	L29.999,15.999z"
                ></path>
                <path
                  fill-opacity=".047"
                  d="M9.999,12.773L24.201,6.17	c0.916-0.425,2.007-0.027,2.432,0.888l1.407,3.025L9.999,12.773z"
                ></path>
                <path
                  fill-opacity=".071"
                  d="M9.999,13.309l14.201-6.603	c0.916-0.425,2.007-0.027,2.432,0.888l1.407,3.025L9.999,13.309z"
                ></path>
                <path
                  fill-opacity=".071"
                  d="M29.999,15.999l-4-5l1.507-0.753l1.84,0.507	L29.999,15.999z"
                ></path>
                <linearGradient
                  id="L-XE1-AhSuENmensHMz7Ec_eGZs8grn6szD_gr3"
                  x1="-57.175"
                  x2="-40.639"
                  y1="71.926"
                  y2="88.462"
                  gradientTransform="translate(61.113 -62.879)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ffe074"></stop>
                  <stop offset="1" stop-color="#f8cf40"></stop>
                </linearGradient>
                <path
                  fill="url(#L-XE1-AhSuENmensHMz7Ec_eGZs8grn6szD_gr3)"
                  d="M1.11,17.969l7.489,20.576	c0.345,0.949,1.399,1.44,2.347,1.095l23.384-8.511c0.948-0.345,1.439-1.399,1.093-2.347L27.934,8.205	c-0.345-0.948-1.397-1.439-2.347-1.095L2.204,15.622C1.255,15.967,0.764,17.019,1.11,17.969z"
                ></path>
                <linearGradient
                  id="L-XE1-AhSuENmensHMz7Ed_eGZs8grn6szD_gr4"
                  x1="-57.523"
                  x2="-32.956"
                  y1="75.268"
                  y2="99.834"
                  gradientTransform="translate(67.502 -60.287)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#55adfd"></stop>
                  <stop offset="1" stop-color="#438ffd"></stop>
                </linearGradient>
                <path
                  fill="url(#L-XE1-AhSuENmensHMz7Ed_eGZs8grn6szD_gr4)"
                  d="M5.998,17.006v23.988c0,1.107,0.9,2.007,2.007,2.007	h31.988c1.107,0,2.007-0.9,2.007-2.007V17.006c0-1.107-0.9-2.007-2.007-2.007H8.004C6.898,14.999,5.998,15.899,5.998,17.006z"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M24.999,25.001v-3.001	h10.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.999z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M24.998,29.999v-3.001	h12.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.998z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M24.999,34.999v-3.001	h10.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.999z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M9.994,28.499	c0-3.591,2.913-6.505,6.505-6.505c1.795,0,3.423,0.729,4.6,1.908l-2.121,2.121c-0.635-0.635-1.512-1.029-2.479-1.029	c-1.935,0-3.505,1.572-3.505,3.505c0,1.935,1.571,3.505,3.505,3.505c1.933,0,3.505-1.571,3.505-3.505c0-0.169-0.013-0.336-0.036-0.5	h3.016c0.013,0.165,0.02,0.332,0.02,0.5c0,3.592-2.915,6.505-6.505,6.505C12.907,35.005,9.994,32.091,9.994,28.499z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M16.998,28.001v2.001	h3.001l1-1.003l-1-0.999H16.998z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
                    
        </div>
      </div>

      <div className="w-full h-auto mt-4 overflow-hidden">
        {/* <Markup content={post.content.rendered} /> */}

        {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
        {renderHTML(post.content.rendered)}

        {/* <Interweave content={ post.content.rendered } /> */}
      </div>

      {/* <div>{post.content.rendered}</div> */}
      <div className="flex items-center justify-center w-full px-10 m-2 border w-50 md:p-4 rounded-xl flex-wrap">
        <div className="flex items-center gap-4">
          <h2 className="text-xs md:text-xl">Keep on Sharing:</h2>
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer.php?u=https://www.loktantraudghosh.com/news/${post?.id}}`}
          >
            <i className="text-3xl text-blue-600 ri-facebook-circle-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${post?.title.rendered} https://www.loktantraudghosh.com/news/${post?.id} `}
          >
            <i className="text-3xl ri-twitter-x-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              `Check Out This Article:- ${post?.title.rendered} - https://www.loktantraudghosh.com/news/${post?.id}`
            )}`}
          >
            <i className="text-3xl text-green-600 ri-whatsapp-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://t.me/share/url?url=https://www.loktantraudghosh.com/news/${post?.id}&text=${post?.title.rendered}`}
          >
            <i className="text-3xl text-sky-400 ri-telegram-fill"></i>
          </a>
          <a
            target="_blank"
            href="https://news.google.com/publications/CAAqBwgKMJWWkgswn8enAw"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="L-XE1-AhSuENmensHMz7Ea_eGZs8grn6szD_gr1"
                x1="-57.494"
                x2="-46.494"
                y1="73.498"
                y2="84.498"
                gradientTransform="translate(68.993 -66.999)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#33c481"></stop>
                <stop offset="1" stop-color="#21a366"></stop>
              </linearGradient>
              <path
                fill="url(#L-XE1-AhSuENmensHMz7Ea_eGZs8grn6szD_gr1)"
                d="M9.999,7.006v23.988c0,1.107,0.9,2.007,2.007,2.007	h23.988c1.107,0,2.007-0.9,2.007-2.007V7.006c0-1.107-0.9-2.007-2.007-2.007H12.006C10.899,4.999,9.999,5.899,9.999,7.006z"
              ></path>
              <path
                fill-opacity=".047"
                d="M37.514,17.545l-9.729-7.271l10.215,1.493l0.001,4.241	L37.514,17.545z"
              ></path>
              <path
                fill-opacity=".071"
                d="M37.514,17.545l-9.729-7.271l10.215,2.132l0.001,3.603	L37.514,17.545z"
              ></path>
              <linearGradient
                id="L-XE1-AhSuENmensHMz7Eb_eGZs8grn6szD_gr2"
                x1="-50.347"
                x2="-31.391"
                y1="70.123"
                y2="89.079"
                gradientTransform="translate(70.438 -57.129)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f44f5b"></stop>
                <stop offset="1" stop-color="#e5202e"></stop>
              </linearGradient>
              <path
                fill="url(#L-XE1-AhSuENmensHMz7Eb_eGZs8grn6szD_gr2)"
                d="M22.511,10.767l-5.837,21.14	c-0.269,0.976,0.304,1.987,1.279,2.256l20.898,5.769c0.975,0.269,1.985-0.303,2.255-1.279l5.837-21.141	c0.269-0.975-0.304-1.985-1.279-2.255L24.766,9.487C23.791,9.218,22.781,9.791,22.511,10.767z"
              ></path>
              <path
                fill-opacity=".047"
                d="M29.999,15.999l-4-5l1.507-0.753l2.492,0.688	L29.999,15.999z"
              ></path>
              <path
                fill-opacity=".047"
                d="M9.999,12.773L24.201,6.17	c0.916-0.425,2.007-0.027,2.432,0.888l1.407,3.025L9.999,12.773z"
              ></path>
              <path
                fill-opacity=".071"
                d="M9.999,13.309l14.201-6.603	c0.916-0.425,2.007-0.027,2.432,0.888l1.407,3.025L9.999,13.309z"
              ></path>
              <path
                fill-opacity=".071"
                d="M29.999,15.999l-4-5l1.507-0.753l1.84,0.507	L29.999,15.999z"
              ></path>
              <linearGradient
                id="L-XE1-AhSuENmensHMz7Ec_eGZs8grn6szD_gr3"
                x1="-57.175"
                x2="-40.639"
                y1="71.926"
                y2="88.462"
                gradientTransform="translate(61.113 -62.879)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ffe074"></stop>
                <stop offset="1" stop-color="#f8cf40"></stop>
              </linearGradient>
              <path
                fill="url(#L-XE1-AhSuENmensHMz7Ec_eGZs8grn6szD_gr3)"
                d="M1.11,17.969l7.489,20.576	c0.345,0.949,1.399,1.44,2.347,1.095l23.384-8.511c0.948-0.345,1.439-1.399,1.093-2.347L27.934,8.205	c-0.345-0.948-1.397-1.439-2.347-1.095L2.204,15.622C1.255,15.967,0.764,17.019,1.11,17.969z"
              ></path>
              <linearGradient
                id="L-XE1-AhSuENmensHMz7Ed_eGZs8grn6szD_gr4"
                x1="-57.523"
                x2="-32.956"
                y1="75.268"
                y2="99.834"
                gradientTransform="translate(67.502 -60.287)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#55adfd"></stop>
                <stop offset="1" stop-color="#438ffd"></stop>
              </linearGradient>
              <path
                fill="url(#L-XE1-AhSuENmensHMz7Ed_eGZs8grn6szD_gr4)"
                d="M5.998,17.006v23.988c0,1.107,0.9,2.007,2.007,2.007	h31.988c1.107,0,2.007-0.9,2.007-2.007V17.006c0-1.107-0.9-2.007-2.007-2.007H8.004C6.898,14.999,5.998,15.899,5.998,17.006z"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M24.999,25.001v-3.001	h10.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.999z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M24.998,29.999v-3.001	h12.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.998z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M24.999,34.999v-3.001	h10.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.999z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M9.994,28.499	c0-3.591,2.913-6.505,6.505-6.505c1.795,0,3.423,0.729,4.6,1.908l-2.121,2.121c-0.635-0.635-1.512-1.029-2.479-1.029	c-1.935,0-3.505,1.572-3.505,3.505c0,1.935,1.571,3.505,3.505,3.505c1.933,0,3.505-1.571,3.505-3.505c0-0.169-0.013-0.336-0.036-0.5	h3.016c0.013,0.165,0.02,0.332,0.02,0.5c0,3.592-2.915,6.505-6.505,6.505C12.907,35.005,9.994,32.091,9.994,28.499z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M16.998,28.001v2.001	h3.001l1-1.003l-1-0.999H16.998z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
                  
      </div>
      <h4 className="font-bold">
        {" "}
        <span className="text-red-500">सूचना :-</span> यह खबर संवाददात के द्वारा
        अपडेट की गई है। इस खबर की सम्पूर्ण जिम्मेदार{" "}
        <span className="text-blue-700">संवाददाता</span> जी की होगी।{" "}
        <a className="text-blue-500" href="https://loktantraudghosh.com/">
          www.loktantraudghoshd.com
        </a>{" "}
        लोकतंत्र उद्घोष या संपादक मंडल की कोई जिम्मेदारी नहीं होगी।
      </h4>
    </div>
  );
};

export default NewsPage;
