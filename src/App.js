import NewBlog from "./components/NewBlog";
import Navbar from "./components/NavBar";
import AllBlogs from "./components/AllBlogs";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
          <Link to="/">
            <h1>Welcome to Blog Site</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/newBlog" element={<NewBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
