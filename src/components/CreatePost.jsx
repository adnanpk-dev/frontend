import { useState } from "react";
import axios, { Axios } from 'axios'

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const res = await axios.post('https://adnanpk-blog.up.railway.app/create-post',formData,{ withCredentials: true })
      
    }catch(err){
      console.log(err)
    }




    
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 max-w-3xl bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-400 mb-1">Post Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter post title"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-400 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-gray-400 mb-1">Short Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="Write a short description (3–4 lines)..."
            ></textarea>
          </div>

          {/* Main Blog Content */}
          <div>
            <label className="block text-gray-400 mb-1">Main Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="8"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write the full blog content here..."
            ></textarea>
          </div>

          {/* Publish Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 font-medium"
          >
            🚀 Publish Post
          </button>
        </form>
      </div>
    </section>
  );
}
