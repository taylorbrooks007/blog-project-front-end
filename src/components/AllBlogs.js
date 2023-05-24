// home page & index of all blogs
// Titles should link to individual blog page to view details

import axios from "axios";
import "./AllBlogs.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleBlog from "./SingleBlog";

export default function AllBlogs(blog) {
  const API = process.env.REACT_APP_API_URL;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/blogs`) // tells where in the back end to look
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div>
      <section className="cards">
        {blogs
          ? blogs.map((blog) => {
              return <SingleBlog blog={blog} key={blog.id} />;
            })
          : null}
      </section>
    </div>
  );
}
