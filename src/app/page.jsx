import PostCard from "@/components/PostCard";
import VideoMain from "@/components/Videomain";
import "remixicon/fonts/remixicon.css";
import {
  getCategorywith10Offset,
  getCategorywith5Offset,
  getPost,
  getPostByCategoryPerPage,
  getPostWithOffset,
  getVideoNewsbyOffest,
} from "@/utils/post";
import Link from "next/link";

export default async function Home() {
  const posts = await getPost(5, "posts");
  const posts2 = await getPostWithOffset(5, "posts");
  const posts3 = await getPostWithOffset(10, "posts");

  const madhyapradesh = await getPostByCategoryPerPage(31, "category");
  const madhyapradesh1 = await getCategorywith5Offset(31, "category");
  const madhyapradesh2 = await getCategorywith10Offset(31, "category");

  const entertainment = await getPostByCategoryPerPage(3, "category");
  const entertainment1 = await getCategorywith5Offset(3, "category");
  const entertainment2 = await getCategorywith10Offset(3, "category");

  const crime = await getPostByCategoryPerPage(18, "category");
  const crime1 = await getCategorywith5Offset(18, "category");
  const crime2 = await getCategorywith10Offset(18, "category");

  const politics = await getPostByCategoryPerPage(28, "category");
  const politics1 = await getCategorywith5Offset(28, "category");
  const politics2 = await getCategorywith10Offset(28, "category");

  const pollkhol = await getPostByCategoryPerPage(12, "category");
  const pollkhol1 = await getCategorywith5Offset(12, "category");
  const pollkhol2 = await getCategorywith10Offset(12, "category");

  const videocard = await getVideoNewsbyOffest(4);
  // console.log(videocard)

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
      <main className="-mt-20">
        <div className="flex flex-col justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4">
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
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {posts2.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {posts3.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}
      </main>
      {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
      {/* ------------------------------------------------videos------------------------------------------------------------------------ */}
      <main className="mt-6 bg-black p-1">
        <div className="w-full flex items-center justify-between md:px-36 p-2">
          <h1 className="text-white font-semibold text-xl">
            <i className="ri-movie-fill"></i> वीडियो
          </h1>
          <Link
            className="hover:text-[#FE0001] text-white text-base font-bold"
            href="/video/"
          >
            और देखें <i className="ri-arrow-right-s-line"></i>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4 ">
          <div className="flex flex-col md:flex-row items-center justify-around">
            {videocard.map((post, index) => (
              <>
                <VideoMain
                  key={post.id}
                  title={post.title}
                  fullImage={
                    post.image_url ? post.image_url : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}
      </main>
      {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
      {/* -----------------------------------------madhya pradesh------------------------------------------------------------- */}
      <main className="mt-6">
        <div className="w-full flex items-center justify-between md:px-36 p-2">
          <h1 className="text-teal-600 font-semibold text-xl">
            <i className="ri-newspaper-fill"></i> मध्य प्रदेश
          </h1>
          <Link
            className="hover:text-[#FE0001] text-base font-bold"
            href="/all/31"
          >
            और देखें <i className="ri-arrow-right-s-line"></i>
          </Link>
        </div>
        <div className="flex flex-col justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4">
          <div>
            {madhyapradesh.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {madhyapradesh1.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {madhyapradesh2.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}
      </main>
      {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
      {/* -----------------------------------------------------Entertainment🐶🐕--------------------------------------------------------------------- */}

      <main className="mt-6">
        <div className="w-full flex items-center justify-between md:px-36 p-2">
          <h1 className="text-sky-400 font-semibold text-xl">
            <i className="ri-film-fill"></i> मनोरंजन
          </h1>
          <Link
            className="hover:text-[#FE0001] text-base font-bold"
            href="/all/3"
          >
            और देखें <i className="ri-arrow-right-s-line"></i>
          </Link>
        </div>
        <div className="flex flex-col justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4">
          <div>
            {entertainment.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {entertainment1.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {entertainment2.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
        </div>
      </main>
      {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
      {/* -------------------------------------------------------------crime ptrol 🚓------------------------------------------------------------------------- */}
      <main className="mt-6">
        <div className="w-full flex items-center justify-between md:px-36 p-2">
          <h1 className="text-green-600 font-semibold text-xl">
            <i className="ri-slice-fill"></i> क्राइम
          </h1>
          <Link
            className="hover:text-[#FE0001] text-base font-bold"
            href="/all/18"
          >
            और देखें <i className="ri-arrow-right-s-line"></i>
          </Link>
        </div>
        <div className="flex flex-col justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4">
          <div>
            {crime.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {crime1.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {crime2.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
        </div>
      </main>
      <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
      {/* --------------------------------------------------------------------neta neta....(politics)----------------------------------------------------------- */}
      <main className="mt-6">
        <div className="w-full flex items-center justify-between md:px-36 p-2">
          <h1 className="text-orange-600 font-semibold text-xl">
            <i className="ri-article-fill"></i> राजनीति
          </h1>
          <Link
            className="hover:text-[#FE0001] text-base font-bold"
            href="/all/28"
          >
            और देखें <i className="ri-arrow-right-s-line"></i>
          </Link>
        </div>
        <div className="flex flex-col justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4">
          <div>
            {politics.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {politics1.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {politics2.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
        </div>
      </main>
      {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
      {/* -----------------------------------------------------------Pollkhol---------------------------------------------------------------------------------- */}
      <main className="mt-6">
        <div className="w-full flex items-center justify-between md:px-36 p-2">
          <h1 className="text-yellow-500 font-semibold text-xl">
            <i className="ri-user-star-fill"></i> बिंदासबोल पोलखोल
          </h1>
          <Link
            className="hover:text-[#FE0001] text-base font-bold"
            href="/all/12"
          >
            और देखें <i className="ri-arrow-right-s-line"></i>
          </Link>
        </div>
        <div className="flex flex-col justify-around px-1 mt-6 sm:px-16 sm:flex-row sm:gap-4">
          <div>
            {pollkhol.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {pollkhol1.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
          <div>
            {pollkhol2.map((post, index) => (
              <>
                <PostCard
                  key={post.id}
                  title={post.title.rendered}
                  fullImage={
                    post.x_featured_media_original
                      ? post.x_featured_media_original
                      : "/placeholder.png"
                    // post.blog_post_layout_featured_media_urls?.full?.[0] || "/placeholder.png"
                  }
                  small={index === 0 ? false : true}
                  id={post.id}
                />
              </>
            ))}
          </div>
        </div>
      </main>
      {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6540056585668328"
            crossorigin="anonymous"
          ></script>
        )}
    </>
  );
}
