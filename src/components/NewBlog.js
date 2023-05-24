import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewBlog.css";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function NewBlog() {
  let navigate = useNavigate();

  const addBlog = (newBlog) => {
    console.log(newBlog);
    axios.post(`${API}/blogs`, newBlog).then(
      () => {
        navigate("/");
      },
      (error) => console.error(error)
    );
    // .catch((c) => console.warn("catch", c));
  };

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    img_url: "",
    body: "",
    date_created: "",
    date_updated: "",
    is_fav: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    addBlog(blog);
  }

  function handleTextChange(event) {
    setBlog({
      ...blog,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <div className="new-blog-post">
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            value={blog.title}
            onChange={handleTextChange}
            id="title"
          />
          <label htmlFor="img_url">Image Url : </label>
          <input
            type="text"
            value={blog.image_url}
            onChange={handleTextChange}
            id="img_url"
          />
          <label htmlFor="body">Text : </label>
          <input
            type="body"
            value={blog.body}
            onChange={handleTextChange}
            id="body"
          />
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            value={blog.author}
            onChange={handleTextChange}
            id="author"
          />
          <label htmlFor="date_created">Date Created : </label>
          <input
            type="text"
            value={blog.date_created}
            onChange={handleTextChange}
            id="date_created"
          />
          <label htmlFor="date_updated">Date Updated : </label>
          <input
            type="text"
            value={blog.date_updated}
            onChange={handleTextChange}
            id="date_updated"
          />

          <input className="button-link" type="submit" />
        </form>
      </main>
    </div>
  );
}
