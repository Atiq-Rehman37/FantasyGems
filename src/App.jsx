import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const WalletPage = lazy(() => import("./pages/WalletPage"));
const Accountpage = lazy(() => import("./pages/Accountpage"));
const ActivityPage = lazy(() => import("./pages/ActivityPage"));
const Promotion = lazy(() => import("./pages/Promotion"));
const DepositPage = lazy(() => import("./pages/DepositPage"));
const WithdrawPage = lazy(() => import("./pages/WithdrawPage"));
const SafePage = lazy(() => import("./pages/SafePage"));
const BetHistory = lazy(() => import("./pages/BetHistory"));
const TransactionHistory = lazy(() => import("./pages/TransactionHistory"));
const DepositHistory = lazy(() => import("./pages/DepositHistory"));
const WithdrawHistory = lazy(() => import("./pages/WithdrawHistory"));
const Notification = lazy(() => import("./pages/Notification"));
const Giftpage = lazy(() => import("./pages/Gift"));
const GameStatistics = lazy(() => import("./pages/GameStatistics"));
const Feedback = lazy(() => import("./pages/Feedback"));
const Announcement = lazy(() => import("./pages/Announcement"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/wallet"
              element={
                <ProtectedRoute>
                  <WalletPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Accountpage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activity"
              element={
                <ProtectedRoute>
                  <ActivityPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/promotion"
              element={
                <ProtectedRoute>
                  <Promotion />
                </ProtectedRoute>
              }
            />
            <Route
              path="/deposit"
              element={
                <ProtectedRoute>
                  <DepositPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/withdraw"
              element={
                <ProtectedRoute>
                  <WithdrawPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/safe"
              element={
                <ProtectedRoute>
                  <SafePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bethistory"
              element={
                <ProtectedRoute>
                  <BetHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transactionhistory"
              element={
                <ProtectedRoute>
                  <TransactionHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/depositistory"
              element={
                <ProtectedRoute>
                  <DepositHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/withdrawhistory"
              element={
                <ProtectedRoute>
                  <WithdrawHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <Notification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gift"
              element={
                <ProtectedRoute>
                  <Giftpage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gameStats"
              element={
                <ProtectedRoute>
                  <GameStatistics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feedback"
              element={
                <ProtectedRoute>
                  <Feedback />
                </ProtectedRoute>
              }
            />
            <Route
              path="/announcement"
              element={
                <ProtectedRoute>
                  <Announcement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/aboutus"
              element={
                <ProtectedRoute>
                  <AboutUs />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
