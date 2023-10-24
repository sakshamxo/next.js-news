import Link from "next/link";
import renderHTML from "react-render-html";
const PostCard = ({
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
    <Link href={"/news/" + id}>
      <div
        className={
          small
            ? "flex gap-2 p-1 hover:text-[#FE0001] border-b"
            : "flex flex-col hover:text-[#FE0001] gap-2 p-1 "
        }
      >
        <img
          alt={title}
          src={fullImage ? fullImage : "/placeholder.png"}
          className={
            small
              ? "border rounded shadow h-16 aspect-video object-cover max-w-fit border-slate-300"
              : "border rounded shadow h-52 aspect-video object-cover max-w-fit border-slate-300 "
          }
        />

        <h3
          className={
            small
              ? " text-sm hover:text-[#FE0001]font-bold line-clamp-3"
              : "text-sm hover:text-[#FE0001] font-bold line-clamp-1"
          }
        >
          {renderHTML(title)}
        </h3>
      </div>
    </Link>
  );
};

export default PostCard;
