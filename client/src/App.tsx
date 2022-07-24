import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CreateReview from "./pages/CreateReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create-review" element={<CreateReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
