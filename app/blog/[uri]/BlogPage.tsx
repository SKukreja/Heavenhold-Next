'use client';

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Blog } from "#/graphql/generated/types";
import { useBlog } from "#/app/components/GetBlogProvider";

interface BlogPageProps {
  uri: string;
}

export default function BlogPage({
  uri,
}: BlogPageProps) {  
  // Fetch data on the server
  const { data: blogData } = useBlog();
  const blog = blogData as any;
  const blogPosts = blog.data.nodes as Blog[];
  const currentPost = blogPosts.find((blog) => blog.slug === uri);

  const [currentBlog, setCurrentBlog] = useState<Blog | null>(blog as Blog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentBlog(currentPost as Blog);
  }, [blog]);

  if (!currentBlog) {
    return <div>Error: Blog not found</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="BlogPage" className="w-full h-auto">
      <div id="blog-header" className="w-full text-8xl font-oswald px-8 py-8">{currentBlog.title}</div>
      <div className="px-8" dangerouslySetInnerHTML={{ __html: currentBlog.content || "" }}></div>
    </div>
  );
}
