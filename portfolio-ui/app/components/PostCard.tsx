import type { BlogPost } from "../types";
import { Link } from "react-router";

const PostCard = ({post}: {post: BlogPost}) => {
    return (
        <article  className="bg-gray-800 p-6 rounded-lg shadow mb-4">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{new Date(post.date).toDateString()}</p>
            <p className="text-sm text-gray-400 mb-2">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-400 text-sm hover:text-blue-600 hover:underline">Read More</Link>
        </article>
    )
}

export default PostCard;

