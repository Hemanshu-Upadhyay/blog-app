"use server";

import BlogDetail from "./BlogDetail";
import { BlogPost } from "./BlogDetail";
import NotFound from "../../not-found";

const fetchPost = async (slug: string): Promise<BlogPost | null> => {
  const response = await fetch("https://server-rlsk.onrender.com/api/posts");
  const data: BlogPost[] = await response.json();
  return data.find((item) => item.slug === slug) || null;
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchPost(params.slug);

  if (!post) {
    return <NotFound />;
  }

  return <BlogDetail post={post} />;
};

export default BlogDetailPage;
