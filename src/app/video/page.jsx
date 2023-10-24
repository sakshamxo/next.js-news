// 'use client'
import VideoCard from "@/components/VideoCard";
import { getVideoPosts } from "@/utils/post";
import React from "react";

const page = async () => {
  // const [Videopost, setVideopost] = useState([])
  //   const Video = async ()=>{
  //     const post =  await getVideoPosts()
  //     setVideopost
  //   }
  const posts = await getVideoPosts();
  // console.log(posts);

  return (
    <>
      <div className="flex flex-col justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4">
        <div>
          {posts.map((post, index) => (
            <>
              <VideoCard
                key={post.id}
                title={post.title}
                fullImage={post.image_url ? post.image_url : "/placeholder.png"}
                small={index === 0 ? false : true}
                id={post.id}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
