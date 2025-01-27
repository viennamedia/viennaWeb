// src/app/blog/posts.ts
export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
  }
  
  // Simulated static posts (replace this with a database call later)
  const posts: Post[] = [
    {
      id: "1",
      title: "How to Make Music Royalties Work for You",
      excerpt: "Discover how to maximize your earnings with music royalties...",
      content: "Detailed content about maximizing music royalties...",
      image: "/images/blog-1.jpg",
      date: "January 27, 2025",
    },
    {
      id: "2",
      title: "Top 5 Artists to Invest In",
      excerpt: "These artists are taking the industry by storm. Find out why...",
      content: "In-depth content about top artists to invest in...",
      image: "/images/blog-2.jpg",
      date: "January 25, 2025",
    },
    {
      id: "3",
      title: "The Future of Music Royalties",
      excerpt: "How blockchain is revolutionizing the music industry.",
      content: "How blockchain technology is impacting royalties...",
      image: "/images/blog-3.jpg",
      date: "January 20, 2025",
    },
    {
        id: "4",
        title: "The Future of Music Royalties",
        excerpt: "How blockchain is revolutionizing the music industry.",
        content: "How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties, How blockchain technology is impacting royalties,",
        image: "/images/blog-3.jpg",
        date: "January 20, 2025",
      },
      {
        id: "5",
        title: "The Future of Music Royalties",
        excerpt: "How blockchain is revolutionizing the music industry.",
        content: "How blockchain technology is impacting royalties...",
        image: "/images/blog-3.jpg",
        date: "January 20, 2025",
      },
  ];
  
  // Fetch all posts
  export function getAllPosts(): Post[] {
    return posts;
  }
  
  // Fetch a single post by ID
  export function getPostById(id: string): Post | null {
    return posts.find((post) => post.id === id) || null;
  }
  