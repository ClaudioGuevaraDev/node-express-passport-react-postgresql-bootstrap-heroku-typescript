import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CreateReview from "./pages/CreateReview";
import useGetUserLogged from "./hooks/auth/useGetUserLogged";

function App() {
  useGetUserLogged()

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
