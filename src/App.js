import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pages">
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
