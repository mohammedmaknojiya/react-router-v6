import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Tab1 from "./components/Home/Tabs/Tab1";
import NavBar from "./components/NavBar/NavBar";
import Tab2 from "./components/Home/Tabs/Tab2";
import InternalTab1 from "./components/Home/InternalTabs/InternalTab1";
import InternalTab2 from "./components/Home/InternalTabs/InternalTab2";
import PageNotFound from "./components/404Page/404Page";
import ContactDetails from "./components/Contact/ContactDetails/ContactDetails";
import Subscribe from "./components/Subscribe/Subscribe";
import Profile from "./components/Profile/Profile";
import { AuthProvider } from "./utils/Auth";
import Login from "./components/Login/Login";
import { RequireAuth } from "./utils/RequireAuth";
import AdminNavBar from "./components/AdminNavBar/AdminNavBar";
import AdminHome from "./components/Home/AdminHome";
import AdminAbout from "./components/About/AdminAbout";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Home />}>
              <Route index element={<Tab1 />} />
              <Route path="tab1" element={<Tab1 />} />
              <Route path="tab2" element={<Tab2 />}>
                <Route index element={<InternalTab1 />} />
                <Route path="itab1" element={<InternalTab1 />} />
                <Route path="itab2" element={<InternalTab2 />} />
              </Route>
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}>
              <Route path=":contactId" element={<ContactDetails />} />
            </Route>
            <Route path="/subscribe" element={<Subscribe />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/admin" element={<AdminNavBar />}>
            <Route index element={<AdminHome />} />
            <Route path="about" element={<AdminAbout />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
          {/** to redirect to home page when no routes match. Instead of redirecting it to 404 page use Navigate component */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
