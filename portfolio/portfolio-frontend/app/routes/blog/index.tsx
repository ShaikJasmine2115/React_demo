import type { Route } from "./+types/index";
import type { BlogPost } from "../../types";
import PostCard from "../../components/PostCard";
import {useState} from "react";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Blog - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

export async function loader({request}: Route.LoaderArgs): Promise<{ posts: BlogPost[] }> {
    const url = new URL('/posts-meta.json', request.url);
    const res = await fetch(url.href);

    if (!res.ok) throw new Error('Failed to fetch blog posts');

    const posts = await res.json();

    posts.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { posts };
}
const Blog = ({loaderData}: Route.ComponentProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const { posts } = loaderData;

    const filteredPosts = posts.filter((post: BlogPost)=>{
        const query = searchQuery.toLowerCase();
        return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
        )
    })


    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    
    
    return(
        <div className="max-w-3xl mx-auto px-6 py-6 bg-gray-900">
            <h2 className="text-3xl text-white font-bold mb-6">Blog</h2>
            <PostFilter searchQuery={searchQuery} 
            onSearchChange={(query)=>{
                setSearchQuery(query);
                setCurrentPage(1);
            }}/>
            <div className="space-y-8">
                {currentPosts.length === 0 ? (
                    <p className="text-gray-400 text-center">No posts found</p>
                ) : currentPosts.map((post)=>(
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
                
            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page)=>setCurrentPage(page)}/>
            )}
        </div>
        
    )
}

export default Blog;