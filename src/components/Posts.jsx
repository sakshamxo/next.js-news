import axios from "axios";
import Image from "next/image";
import renderHTML from "react-render-html";
export const dynamic = "force-dynamic";

const getPost = async () => {
  try {
    const res = await axios.get(
      "https://loktantraudghosh.com/wp-json/wp/v2/posts?per_page=3"
    );

    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const Posts = async () => {
  const post = await getPost();

  return (
    <div>
      {post.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 p-2 hover:text-[#FE0001] "
        >
          {
            <>
              <img
                alt={item.title}
                src={
                  item.blog_post_layout_featured_media_urls.full[0]
                    ? item.blog_post_layout_featured_media_urls.full[0]
                    : "/next.svg"
                }
                className="border rounded shadow h-52 aspect-video border-slate-300 "
              />
              <h3 className="text-sm font-bold">
                {renderHTML(item.title.rendered)}
              </h3>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default Posts;
