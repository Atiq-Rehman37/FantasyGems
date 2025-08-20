import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WalletPage from "./pages/WalletPage";
import Accountpage from "./pages/Accountpage";
import ActivityPage from "./pages/ActivityPage";
import Promotion from "./pages/Promotion";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/account" element={<Accountpage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/promotion" element={<Promotion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
