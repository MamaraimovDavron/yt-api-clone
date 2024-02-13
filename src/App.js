import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex mt-16">
        <Sidebar />
        {/* Video render here... */}
        <Feed />
      </div>
    </div>
  );
}

export default App;
