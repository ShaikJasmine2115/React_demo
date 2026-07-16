import type { LatestPostProps } from "~/types";
import {Link} from "react-router";
import type { Post } from "~/types";

const LatestPost = ({posts, limit=3}: LatestPostProps) => {
    const sortedPosts = [...posts].sort((a: Post, b: Post) => 
        new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-center mb-6 ">Latest Posts</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.slice(0, limit).map((post)    => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="block p-4 border border-gray-200 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-400 mb-1">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{post.excerpt}</p>
            <span className="block mt-3 text-xs text-gray-400 ">{new Date(post.date).toLocaleDateString()}</span>
          </Link>
        ))}
      </div>
    </section>
  )
};

export default LatestPost;