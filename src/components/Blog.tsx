import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";

export function Blog() {
  return (
    <section className="py-24" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-mono font-bold text-white mb-12">
          Latest Insights_
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ 
  id,
  title, 
  excerpt, 
  image 
}: { 
  id: string;
  title: string; 
  excerpt: string; 
  image: string;
}) {
  return (
    <div className="group relative bg-black/50 border border-purple-500/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-purple-500/40">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-mono text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <Link 
          to={`/blog/${id}`}
          className="flex items-center text-purple-400 font-mono group-hover:text-purple-300 transition-colors"
        >
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}