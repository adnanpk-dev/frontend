import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Blog() {
  const [blogs,setBlogs] = useState([])
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(()=>{
    axios.get('https://adnanpk-blog.up.railway.app/allpost',{withCredentials: true}).then((res)=>{
      setBlogs(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      setError(err.message)
    })

  },[])

  return (
    <section className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Latest Blogs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={blog.imgUrl}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{blog.username}</span>
                  <span>{blog.date}</span>
                </div>
                <Link
                
                  to={`/post/${blog.username}/${blog._id}`}
                  className="mt-4 block text-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
