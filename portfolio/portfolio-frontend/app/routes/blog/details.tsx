import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import type { Route } from "./+types/details";
import type { BlogPost } from "../../types";
import type { BlogPostDetailsProps } from "../../types";
import { FaArrowLeft } from "react-icons/fa";

export async function loader({request,params}: Route.LoaderArgs) {
    const { slug } = params;

    const url = new URL(`/posts-meta.json`, request.url);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error('Failed to fetch blog post');
    const index = await res.json();
    const post = index.find((post: BlogPost) => post.slug === slug);
    if (!post) throw new Response('Blog post not found',{status: 404});
    const markdown = await import(`../../posts/${slug}.md?raw`);
    return { post, markdown: markdown.default };
}

const BlogPostDetails = ({loaderData}: BlogPostDetailsProps) => {
    const { post, markdown } = loaderData;
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">{post.title}</h1>
            <p className="text-sm text-gray-400 mb-2">{new Date(post.date).toDateString()}</p>
            <div className="prose prose-invert max-w-nont mb-12">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <Link to='/blog' className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                <FaArrowLeft className="mr-2" /> Back to Blog Posts     
            </Link>     
        </div>
    )
}

export default BlogPostDetails;