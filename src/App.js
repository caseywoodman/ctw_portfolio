import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./index.css";

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <div class="bg-[#1C2541] h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
