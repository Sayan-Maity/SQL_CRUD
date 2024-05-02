import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import AdminPage from "./pages/AdminPage";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/update" element={<UpdateBook />} />
      </Routes>
    </Router>
  )
}

export default App
