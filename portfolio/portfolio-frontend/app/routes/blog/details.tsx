import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import type { Route } from "./+types/details";
import type { Post, StrapiPost, StrapiResponse } from "../../types";
import type { BlogPostDetailsProps } from "../../types";
import { FaArrowLeft } from "react-icons/fa";

export async function loader({request,params}: Route.LoaderArgs) {
    const { slug } = params;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`);
 
    if (!res.ok) throw new Error('Failed to fetch blog post');
    
    const json: StrapiResponse<StrapiPost> = await res.json();

    if (!json.data.length) throw new Response('Blog post not found',{status: 404});

    const item = json.data[0];

    const post ={
        id: item.id,
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
        body: item.body,
        image: item.image?.url
        ? `${item.image.url}`
        : "/images/no-image.png",
    };

    return { post };
}

const BlogPostDetails = ({loaderData}: BlogPostDetailsProps) => {
    const { post } = loaderData;
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">{post.title}</h1>
            <p className="text-sm text-gray-400 mb-2">{new Date(post.date).toDateString()}</p>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="prose prose-invert max-w-nont mb-12">
                <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
            <Link to='/blog' className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                <FaArrowLeft className="mr-2" /> Back to Blog Posts     
            </Link>     
        </div>
    )
}

export default BlogPostDetails;