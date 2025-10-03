import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";






export default function BlogView() {
  const { user, id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(()=>{
    axios.get(`https://adnanpk-blog.up.railway.app/post/${user}/${id}`,{withCredentials: true}).then((res)=>{
      setBlog(res.data)
      
    })
  },[user,id])





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
