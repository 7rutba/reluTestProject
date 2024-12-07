import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import ProductCard from "./ProductCard";

const Post = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Ritesh kumar",
      username: "ritesh",
      avatar: "https://via.placeholder.com/50",
      image:
        "https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?t=st=1733506616~exp=1733510216~hmac=9cc672bb71aef2dca39e59c8021b944eedb064cfa7195923654878a3c213a7d1&w=900",
      caption: "Enjoying the beautiful sunset ",
      likes: 10,
      comments: ["Awesome!", "Looks amazing!"],
      isLiked: false,
    },
    {
      id: 2,
      name: "Ritesh kumar",
      username: "ritesh",
      avatar: "https://via.placeholder.com/50",
      image:
        "https://img.freepik.com/free-photo/beautiful-shot-lake-forest-sunny-day_181624-38336.jpg?t=st=1733506885~exp=1733510485~hmac=48ae455bab06b2b6dd97e847a2cab5ce85ba0035a6174670a91e29fe9125b594&w=900",
      caption: "A perfect day at the beach ",
      likes: 25,
      comments: ["So relaxing!", "Wish I was there!"],
      isLiked: false,
    },
  ]);

  const toggleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="w-8/12 mt-4 max-h-screen overflow-hidden overflow-y-auto">
      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-5 bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="flex items-center p-4">
            <img
              src={post.avatar}
              alt={`${post.username}'s avatar`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                {" "}
                <p className="font-semibold">{post.name}</p>
                <p className="font-thin text-sm">@{post.username}</p>
              </div>
              <div>
                <IoMdMore className="w-8 h-8" />
              </div>
            </div>
          </div>
          <p className="text-base py-4 px-4">
            {" "}
            {post.caption}{" "}
            <span className="px-2 text-sm text-red-400">Read more</span>
          </p>
          <img src={post.image} alt="Post" className="w-full" />

          <div className="p-4">
            <div className="flex items-center space-x-4 mb-3">
              <button
                onClick={() => toggleLike(post.id)}
                className="text-red-500"
              >
                {post.isLiked ? (
                  <>
                    {" "}
                    <FaHeart size={20} className="text-white" />
                    {post.likes}
                  </>
                ) : (
                  <div className="flex justify-center items-center text-black">
                    {" "}
                    <FaRegHeart size={20} /> {post.likes}
                  </div>
                )}
              </button>
              <button className="text-black flex items-center gap-1">
                <FaComment size={20} /> 8.8k
              </button>
              <button className="text-black flex items-center gap-1">
                <FaShare size={20} /> 7.2k
              </button>
            </div>
            <div className="mb-3">
              <span className="font-semibold mr-2">{post.username}</span>
            </div>
            <div className="text-gray-600">
              {post.comments.map((comment, index) => (
                <p key={index}>
                  <span className="font-semibold">{post.username}</span>{" "}
                  {comment}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
      <ProductCard />
    </div>
  );
};

export default Post;
