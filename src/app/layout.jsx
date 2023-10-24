import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SlimNav from "@/components/SlimNav";
import Footer from "@/components/Footer";

import FooterBar from "@/components/FooterBar";
import Whatsapp from "@/components/Whatsapp";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 60;
fetch(
  `https://loktantraudghosh.com/api/revalidate?tag=posts&secret=${process.env.MY_SECRET_TOKEN}`,
  { next: { revalidate: 60 } }
);


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    
        <meta
          name="google-site-verification"
          content="vqjsdk94rZshZoOgO1Nr7QjIPpULu1gLR53NttpdlYU"
        />

         {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
        <script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          defer
        ></script>
      </head>
      <Script src="/OneSignal.js" />
      <body className={inter.className}>
        <Navbar />
        <SlimNav />
        <Whatsapp />

        {children}
        <FooterBar />
        <Footer />
      </body>
    </html>
  );
}
