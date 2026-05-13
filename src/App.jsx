import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import Properties from "./pages/Properties.jsx";
import Admin from "./componenets/Admin.jsx";
import Regjister from "./pages/Regjister.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home user={user} logout={logout} />}
      />

      <Route
        path="/contact"
        element={<Contact user={user} logout={logout} />}
      />

      <Route
        path="/properties"
        element={<Properties user={user} logout={logout} />}
      />

      <Route
        path="/admin"
        element={<Admin user={user} logout={logout} />}
      />

      <Route
        path="/regjister"
        element={<Regjister />}
      />

      <Route
        path="/login"
        element={<Login setUser={setUser} />}
      />
    </Routes>
  );
}

export default App;