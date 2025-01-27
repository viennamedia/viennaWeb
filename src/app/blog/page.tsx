"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getAllPosts } from "./posts";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <section className="space-y-6">
      {/* Centered Title */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-white">Blog</h1>
      </div>

      {/* Carousel for Posts */}
      <div className="mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="rounded-lg overflow-hidden"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                  <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-300">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="mt-4 text-primary hover:underline">
                    Read more →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
