import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact.jsx"
import Properties from "./pages/Properties.jsx"
import Admin from "./componenets/Admin.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App