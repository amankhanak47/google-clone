import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import SearchPage from "./pages/SearchPage";
import Option from "./pages/Option";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/option" element={<Option/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
