import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios.get(`https://adnanpk-blog.up.railway.app/ownpost`,{ withCredentials: true }).then((res) => {
      setPosts(res.data)
    })
    
  }, [])

  return (
    <section className="min-h-screen bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Admin Panel</h2>
          <Link
            to="/admin/create"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            ➕ Create New Post
          </Link>
        </div>

        {/* Posts Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-t border-gray-700 hover:bg-gray-800"
                >
                  <td className="p-3">{post.title}</td>
                  <td className="p-3 text-gray-400">{post.date}</td>
                  <td className="p-3 text-center">
                    <Link
                      to={`/admin/edit/${post._id}`}
                      className="px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-400 text-black transition"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
