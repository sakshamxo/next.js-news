import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import 'remixicon/fonts/remixicon.css';

const FooterBar = () => {
  return (
    <footer className="bg-black">
    <div
      className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="">
          <Image
          alt="Loktantra Udghosh app Download"
          className="min-w-[150px] min-h-[50px]"
          src={"/loktantrawhitec.png"}
          width={300}
          height={100}
        />
          </div>
  
          <p className="mt-4 max-w-xs text-white">
          लोकतंत्र उद्घोष -  सत्य, निष्ठा, साहस और समर्पण
          </p>
  
          <ul className="mt-8 flex gap-6">
            <li>
              <a
                href="https://www.facebook.com/loktantrau"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
                <i className="text-3xl text-blue-600 ri-facebook-circle-fill"></i>
                
              </a>
            </li>
  
            <li>
              <a
                href="https://www.instagram.com/loktantrau/"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Whatsapp</span>
                <i className="text-3xl text-[#E4405F] ri-instagram-fill"></i>
              </a>
            </li>
  
            <li>
              <a
                href="https://twitter.com/LoktantraUdghos"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>
  
                <i className="text-3xl ri-twitter-x-fill"></i>
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
  
                <i className="text-3xl text-sky-400 ri-telegram-fill"></i>
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
  
                <i className="text-3xl text-red-600 ri-youtube-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/loktantra-udghosh-6147621a6/"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75"
              >
                <span className="sr-only">Linkedin</span>
  
                <i className="text-3xl text-blue-700 ri-linkedin-box-fill"></i>
              </a>
            </li>
          </ul>
        </div>
  
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
        >
          <div></div>
  
          <div>
            <p className="font-medium text-white">QUICK LINK</p>
  
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="/about" className="text-white transition hover:text-[#FE0001]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-white transition hover:text-[#FE0001]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://team.loktantraudghosh.com/" className="text-white transition hover:text-[#FE0001]">
                Join Us
                </a>
              </li>
              
            </ul>
          </div>
  
          <div>
            <p className="font-medium text-white">Helpful Links</p>
  
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="/dcma" className="text-white transition hover:text-[#FE0001]">
               DCMA
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-white transition hover:text-[#FE0001]">
                 Disclaimer
                </a>
              </li>
              <li>
                <a href="/donetion" className="text-white transition hover:text-[#FE0001]">
                Donetion
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <p className="font-medium text-white">CONSUMER POLICY</p>
  
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="/termofuse" className="text-white transition hover:text-[#FE0001]">
                  Term of Use
                </a>
              </li>
  
              <li>
                <a href="/privacypolicy" className="text-white transition hover:text-[#FE0001]">
                  Privacy Policy
                </a>
              </li>
  
              <li>
                <a href="/rnrpolicy" className="text-white transition hover:text-[#FE0001]">
                  Return & Refund Policy
                </a>
              </li>
  
              <li>
                <a href="/cookie" className="text-white transition hover:text-[#FE0001]">
                Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <p className="text-xs text-white">
        &copy;2023.लोकतंत्र उद्घोष. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default FooterBar