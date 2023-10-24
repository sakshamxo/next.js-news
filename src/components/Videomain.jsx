import React from "react";
import Link from "next/link";
import renderHTML from "react-render-html";
import play from "../../public/playbutton.png";

const VideoCard = ({
  first,
  fullImage,
  title,
  postImageUrl,
  categoryName,
  categoryId,
  url,
  id,
  shareUrl,
  small,
}) => {
  return (
    <Link href={"/video/" + title} className="hover:text-[#FE0001]">
      <div
        className={
          small
            ? "flex flex-col gap-2 p-1  hover:text-[#FE0001] "
            : "flex flex-col gap-2 p-1 hover:text-[#FE0001] "
        }
      >
        <div className="relative">
          <div className="h-11 w-11 aspect-video object-cover absolute bottom-2 left-2">
            <img className="" src="/playbutton.png" alt="play" />
          </div>
          <img
            alt={title}
            src={fullImage ? fullImage : "/placeholder.png"}
            className="border rounded shadow h-52 aspect-video object-cover  border-slate-300"
          />
        </div>
        <h3 className="text-sm font-bold line-clamp-1 text-white hover:text-[#FE0001]">
          {renderHTML(title)}
        </h3>
      </div>
    </Link>
  );
};

export default VideoCard;
