import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Section } from "./compoments/Layout";

import Home from "./pages/Home";
import Directory from "./pages/Directory";
import BusinessProfile from "./pages/BusinessProfile";
import MyReviews from "./pages/MyReviews";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminBusinesses from "./pages/AdminBusinesses";
import AdminBusinessForm from "./pages/AdminBusinessForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Section>
              <Outlet />
            </Section>
          }
        >
          <Route path="/" element={<Home />} />

          <Route path="/directory" element={<Directory />} />

          <Route path="/business/:id" element={<BusinessProfile />} />

          <Route path="/my-reviews" element={<MyReviews />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/admin" element={<AdminBusinesses />} />

          <Route path="/admin/add" element={<AdminBusinessForm />} />
          <Route path="/admin/edit/:id" element={<AdminBusinessForm />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;