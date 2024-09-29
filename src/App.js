import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {
  DASHBOARD_PAGE_URL,
  NOTIFICATIONS_PAGE_URL,
  PRODUCTS_PAGE_URL,
  SIGN_IN_PAGE_URL,
  SIGN_UP_PAGE_URL,
} from "./Constants/Urls";
import Notifications from "./pages/Notifications";
import ProductsPage from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={DASHBOARD_PAGE_URL} element={<Dashboard />} />
          <Route path={PRODUCTS_PAGE_URL} element={<ProductsPage />} />
          <Route path={NOTIFICATIONS_PAGE_URL} element={<Notifications />} />
          <Route path={SIGN_IN_PAGE_URL} element={<SignIn />} />
          <Route path={SIGN_UP_PAGE_URL} element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
