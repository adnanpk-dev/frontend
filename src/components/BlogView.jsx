import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";






export default function BlogView() {
  const { user, id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:3001/post/${user}/${id}`).then((res)=>{
      setBlog(res.data)
      
    })
  },[user,id])





  const blogs = {
    title: "Getting Started with React",
    content: `
      React is a popular JavaScript library for building user interfaces.
      It allows developers to create reusable UI components and manage state
      effectively. In this article, we'll walk through the basics of React,
      including components, props, and state.
      
      React follows a declarative approach, which makes your code more predictable
      and easier to debug. Whether you're building a small project or a large-scale
      application, React provides the flexibility you need.
    `,
    author: "Adnan",
    date: "Sep 28, 2025",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*YxaAcUGlXxnKd7C0.png",
  };

  return (
    <section className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Blog Image */}
        <img
          src={blog.imgUrl}
          alt={blog.title}
          className="w-full rounded-2xl shadow-lg mb-6 object-cover"
        />

        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        {/* Author & Date */}
        <div className="flex items-center gap-4 text-gray-400 mb-8 text-sm">
          <span>✍️ {blog.username}</span>
          <span>📅 {blog.date}</span>
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {blog.content}
        </article>
      </div>
    </section>
  );
}
