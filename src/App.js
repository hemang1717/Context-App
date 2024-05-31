import logo from "./logo.svg";
import "./App.css";
import Blog from "./Components/Blog";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <h2>Context-app</h2>
      <div className="blogAndCart">
        <Blog />
        <Cart />
      </div>
    </div>
  );
}

export default App;
