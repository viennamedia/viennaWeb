import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostById } from "../posts";
import CollapseButton from "../../../components/collapseButton"; // Updated path

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-card rounded-lg shadow-lg">
      <CollapseButton /> {/* Client Component */}
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
  );
}
