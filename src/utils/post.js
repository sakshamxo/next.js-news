import axios from "axios";

export const getPost = async (number = 5, cacheKey) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts?per_page=${number}`,
      { cache: "no-store" },
      { next: { tags: [cacheKey] } }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMenu = async () => {
  try {
    const res = await fetch(
      "https://admin.loktantraudghosh.com/wp-json/menus/v1/menus/front-menu"
    );

    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostByCategory = async (Category = 15, cacheKey) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts?categories=${Category}`,
      { next: { tags: [cacheKey] } }
    );

    const data = await res.json();
    // console.log("data",data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostByCategoryPerPage = async (Category = 15, cacheKey) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts?categories=${Category}&per_page=5`,
      { next: { tags: [cacheKey] } }
    );

    const data = await res.json();
    // console.log("data",data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategorywith5Offset = async (Category = 15, cacheKey) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts?categories=${Category}&offset=5&per_page=5`,
      { next: { tags: [cacheKey] } }
    );

    const data = await res.json();
    // console.log("data",data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategorywith10Offset = async (Category = 15, cacheKey) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts?categories=${Category}&offset=10&per_page=5`,
      { next: { tags: [cacheKey] } }
    );

    const data = await res.json();
    // console.log("data",data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryIdByPostId = async (post = 13763) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts/${post}`
    );
    const data = await res.json();
    // console.log("data",data)
    return data.categories;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts/${id}`,
      { next: { tags: ["test"] } }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePostBySlug = async (slug, cachekey) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts/${slug}`,
      { next: { tags: [cachekey] } }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ?offset=15

export const getPostWithOffset = async (number = 0, cacheKey) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/wp/v2/posts?offset=${number}&per_page=5`,
      { next: { tags: [cacheKey] } }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostRecomendation = async (postId) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/news/api/v1/mighty/get-post-details?post_id=${postId}`
    );

    const data = await res.json();
    const filteredPosts = data.related_news.filter(
      (post) => post.category_id !== 15
    );
    // console.log(filteredPosts)
    return { ...data, related_news: filteredPosts };
    // return data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideoPosts = async () => {
  try {
    const res = await fetch(
      "https://admin.loktantraudghosh.com/wp-json/news/api/v1/mighty/get-video-list"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getVideoNews = async (postId) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/news/api/v1/mighty/get-video-list?search=${postId}`
    );
    const data = res.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getVideoNewsbyOffest = async (postId,number = 5) => {
  try {
    const res = await fetch(
      `https://admin.loktantraudghosh.com/wp-json/news/api/v1/mighty/get-video-list?offest=${number}`
    );
    const data = res.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
