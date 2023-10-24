import Refer from "@/components/Refer";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <>
         <head>
        {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
      </head>
      <div className="flex flex-col h-full md:flex-row bg-slate-100">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
