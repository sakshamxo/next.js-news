import { getPostByCategory } from "@/utils/post";
import React from "react";
import PostCard from "@/components/PostCard";

const CategoryPage = async ({ params }) => {
  const categoryId = params.CategoryId;
  const posts = await getPostByCategory(categoryId);
  // console.log(posts)

  return (
    <>
      <div className="flex flex-col justify-around px-1 -mt-14 sm:px-16 sm:flex-row sm:gap-4">
        <div>
          {posts.map((post, index) => (
            <>
              <PostCard
                key={post.id}
                title={post.title.rendered}
                fullImage={
                  post.x_featured_media_original
                    ? post.x_featured_media_original
                    : "/placeholder.png"
                }
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

export default CategoryPage;
