import React, { useState, useRef } from "react";
import { Image, Type, UploadCloud, X } from "lucide-react"; // Optional: icon library
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  // 1. State Management
  const [postData, setPostData] = useState({ text: "", image: null });
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  // 2. Handlers
  const handleTextChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostData({ ...postData, image: file });
      setPreview(URL.createObjectURL(file)); // Create a local URL for instant preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!postData.image) {
      alert("Please select an image");
      return;
    }
    if (!postData.text.trim()) {
      alert("Please enter a caption");
      return;
    }

    const formData = new FormData(e.target);
    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        alert("Post created successfully!");
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
        const errorMsg =
          err.response?.data?.message || err.message || "Error creating post";
        alert(errorMsg);
      });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Create New Post</h1>
        <p className="text-gray-500 text-sm">
          Share your moments with the world
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Area */}
        <div
          onClick={() => fileInputRef.current.click()}
          className="relative group cursor-pointer border-2 border-dashed border-gray-200 rounded-lg p-8 transition-colors hover:border-blue-400 hover:bg-blue-50/50"
        >
          <input
            type="file"
            name="image"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />

          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="rounded-lg max-h-64 mx-auto object-cover"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreview(null);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <UploadCloud
                className="text-gray-400 mb-2 group-hover:text-blue-500"
                size={40}
              />
              <span className="text-sm font-medium text-gray-600">
                Click to upload photo
              </span>
            </div>
          )}
        </div>

        {/* Text Input Section */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Type size={16} /> Caption
          </label>
          <textarea
            name="text"
            rows="3"
            value={postData.text}
            onChange={handleTextChange}
            placeholder="What's on your mind?"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
