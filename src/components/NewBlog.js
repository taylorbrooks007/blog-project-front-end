import { useState } from "react";

export default function NewBlog() {
  const [blog, setBlog] = useState({
    Title: "",
    author: "",
    image_url: "",
    date_created: "",
  });

  return (
    <div className="new-blog-post">
      <main>
        <form>
          <label htmlFor="Title">Title : </label>
          <input
            type="text"
            value={blog.title}
            // onChange={handleTextChange}
            id="image_url"
          />
          <label htmlFor="img_url">Image Url : </label>
          <input
            type="text"
            value={blog.img_url}
            // onChange={handleTextChange}
            id="image_url"
          />
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            value={blog.author}
            // onChange={handleTextChange}
            id="author"
          />
          <label htmlFor="date_created">Date Created : </label>
          <input
            type="text"
            value={blog.date_created}
            // onChange={handleTextChange}
            id="date_created"
          />
        </form>
      </main>
    </div>
  );
}
