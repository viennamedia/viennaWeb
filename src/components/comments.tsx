"use client";

import { useState } from "react";

interface Comment {
  id: number;
  user: string;
  content: string;
  timestamp: string;
}

const Comments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: "Jane Doe", content: "Great post!", timestamp: "2h ago" },
    { id: 2, user: "John Smith", content: "Very insightful!", timestamp: "1h ago" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentData: Comment = {
      id: comments.length + 1,
      user: "Current User", // Replace with actual user data
      content: newComment,
      timestamp: "Just now",
    };

    setComments([...comments, newCommentData]);
    setNewComment("");
  };

  return (
    <div>
      {/* Comments List */}
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-gray-400">{comment.user}</p>
            <p className="text-gray-300">{comment.content}</p>
            <p className="text-xs text-gray-500">{comment.timestamp}</p>
          </li>
        ))}
      </ul>

      {/* Add Comment Form */}
      <div className="mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full bg-gray-900 text-gray-300 p-3 rounded-lg"
          placeholder="Add a comment..."
          rows={3}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comments;
