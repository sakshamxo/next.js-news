"use client";
import React, { useEffect, useState } from "react";

import { getURL } from "next/dist/shared/lib/utils";
import renderHTML from "react-render-html";
import { getPostRecomendation } from "@/utils/post";
import Link from "next/link";

const Refer = () => {
  const [referPost, setReferPost] = useState([]);
  const [idPost, setIdPost] = useState(null); // Store idPost in state

  useEffect(() => {
    const refPost = async () => {
      const Url = await getURL();
      const postId = Url.split("/news/");
      const newIdPost = postId[1];
      setIdPost(newIdPost);
      const referPost = await getPostRecomendation(newIdPost);
      // console.log(referPost.related_news);
      setReferPost(referPost.related_news);
    };
    refPost();
  }, [idPost]); // Add idPost as a dependency

  return (
    <div>
      <h1 className="text-2xl text-red-600">Recommendation</h1>
      {referPost.map((post) => (
        <Link key={post.ID} href={"/news/" + post.ID}>
          <div className="flex gap-2 p-1 border-b h-fit md:h-32 hover:text-[#FE0001]">
            <img
              alt={post.post_title}
              src={post.image ? post.image : "/placeholder.png"}
              className="object-cover h-16 border rounded shadow md:h-24 aspect-video max-w-fit border-slate-300"
            />

            <h3 className="text-sm font-bold line-clamp-3">
              {renderHTML(post.post_title)}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Refer;
