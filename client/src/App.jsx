import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="text-zinc-100 bg-zinc-900">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
