import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllBlogs from "./AllBlogs";

const API = process.env.REACT_APP_API_URL;

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    img_url: "",
    body: "",
    author: "",
    date_created: "",
    date_updated: "",
    is_fav: false,
  });

  const updateBlog = (updatedBlog) => {
    axios
      .put(`${API}/blogs/${id}`, updatedBlog)
      .then(
        () => {
          navigate(`/blogs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setBlog({ ...blog, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBlog({ ...blog, is_fav: !blog.is_fav });
  };

  useEffect(() => {
    axios.get(`${API}/blogs/${id}`).then(
      (response) => setBlog(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id]);

  console.log(blog);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBlog(blog, id);
  };

  return (
    <div>
      <header>
        <h2>Edit Blog</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Title: </label>
          <input
            type="text"
            value={blog.title}
            onChange={handleTextChange}
            id="title"
            required
          />
          <label htmlFor="img_url">Image URL: </label>
          <input
            type="text"
            value={blog.img_url}
            onChange={handleTextChange}
            id="img_url"
          />
          <label htmlFor="body">Blog Text: </label>
          <input
            type="text"
            value={blog.body}
            onChange={handleTextChange}
            id="body"
            required
          />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            value={blog.author}
            onChange={handleTextChange}
            id="author"
            required
          />
          <label htmlFor="date created">Date: </label>
          <input
            type="text"
            value={blog.date_created}
            onChange={handleTextChange}
            id="date created"
            required
          />
          <label htmlFor="date updated">Date Updated: </label>
          <input
            type="text"
            value={blog.date_updated}
            onChange={handleTextChange}
            id="date updated"
          />
          <label htmlFor="is_fav">Favorite: </label>
          <input
            type="checkbox"
            id="is_fav"
            name="is_fav"
            checked={blog.is_fav}
            onChange={handleCheckboxChange}
          />
          <input type="submit" />
          <br />
        </form>
      </main>
    </div>
  );
}
