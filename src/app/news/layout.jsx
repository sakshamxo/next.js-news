import Refer from "@/components/Refer";
import { Inter } from "next/font/google";

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
      <div className="flex flex-col md:flex-row bg-slate-100">
        <div className="w-full">{children}</div>
     
        <div className="flex w-full p-4 my-8 bg-white border md:w-1/3 sm:ml-8 sm:mr-16 rounded-xl border-slate-200">
          <Refer />
        </div>
        
      </div>
    </>
  );
}
