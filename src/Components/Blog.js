import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { CounterContext } from "../CounterProvider";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const cartItems = useContext(CounterContext);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(blogs);
  function updateCount(){
    cartItems.setCount(cartItems.count+1);
  }
  return (
    <div className="blogComponent">
      <h2>Blog Component</h2>
      <div className="blogs">
        {blogs &&
          blogs.map((blog, id) => (
            <div key={id} className="blogDetails">
              <div className="eachBlog">
                <p className="blogTitle">{blog.title}</p>
                <button
                  onClick={updateCount}
                  className="addToCart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
