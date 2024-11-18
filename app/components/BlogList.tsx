'use client';

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { useUser } from '#/app/components/UserContext';
import { useBlog } from "./GetBlogProvider";
import { Blog } from "#/graphql/generated/types";
import Link from "next/link";

interface BlogListProps {
}

export default function BlogList({}: BlogListProps) {  
    // Fetch data on the server
    const { data: blogData } = useBlog();
    const blog = blogData as any;
    const blogPosts = blog.data.nodes as Blog[];
    const { user } = useUser(); 

    const [loading, setLoading] = useState(false);  

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="w-full h-auto px-8">
            {blogData && blogPosts.map((blog: Blog) => (
            <div key={'blog-' + blog.uri} className="w-full h-auto">
                <Link href={'/blog/' + blog?.slug} className="text-white">{blog?.title}</Link>
            </div> 
            ))}
        </div>
    );
}
