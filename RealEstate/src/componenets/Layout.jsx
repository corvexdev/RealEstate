import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow p-6 bg-gray-100">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout;