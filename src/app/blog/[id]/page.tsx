import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostById } from "../posts";
import CollapseButton from "../../../components/collapseButton"; // Updated path
import Comments from "../../../components/comments"; // New Comments component

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Post Content (Left Column) */}
        <div className="col-span-2 bg-card rounded-lg shadow-lg p-6">
          <CollapseButton />
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          <p className="text-gray-400 text-sm mb-4">{post.date}</p>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
          <p className="text-gray-300 leading-relaxed">{post.content}</p>
        </div>

        {/* Comments Section (Right Column on Desktop, Below on Mobile) */}
        <div className="lg:col-span-1 bg-card rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Comments</h2>
          <Comments postId={id} />
        </div>
      </div>
    </div>
  );
}
