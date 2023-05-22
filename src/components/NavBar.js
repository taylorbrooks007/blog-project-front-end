import { Link } from "react-router-dom";
import "./NavBar.css";
export default function Navbar() {
  return (
    <div>
      <article className="navbar"></article>
      <nav>
        <h1>
          Blog Site
          <Link className="button-link" to="/NewBlog">
            <button>Create New Blog</button>
          </Link>
        </h1>
      </nav>
    </div>
  );
}
