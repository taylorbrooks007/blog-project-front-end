// displays all info about blogs & allows user to edit & delete
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function SingleBlog({ blog, id }) {
  const API = process.env.REACT_APP_API_URL;
  // DELETE
  const handleDelete = () => {
    deleteBlog();
  };
  const deleteBlog = () => {
    axios
      .delete(`${API}/blogs/${id}`)
      .then(() => {
        Navigate(`/`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

  // EDIT OR UPDATE
  const updateBlog = (updatedBlog) => {
    axios
      .put(`${API}/blogs/${id}`, updatedBlog)
      .then(
        () => {
          Navigate(`/blogs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="card">
      <main>
        <Link to={`/blogs/${blog.id}`} />
        <h2>{blog.Title}</h2>
        <img src={`${blog.img_url}`} alt="image_url" />
        <Link to={`/blogs/${id}/edit`}>
          <button onClick={updateBlog}>Edit</button>
        </Link>
        <Link to={`/blogs/${id}/delete`}>
          <button onClick={handleDelete}>Delete</button>
        </Link>
      </main>
    </div>
  );
}
