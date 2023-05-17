// import AllBlogs from "./components/Allblogs";
import NewBlog from "./components/NewBlog";
import Navbar from "./components/NavBar";
// import { Link } from "react-router-dom";
// import { Router, Route, Routes } from "react-router-dom";
// import CreateNew from "./components/CreateNew";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <NewBlog />
    </div>
  );
}

export default App;
