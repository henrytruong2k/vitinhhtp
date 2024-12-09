import { Link, Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <h1>Vi Tinh HTP</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/product-detail">Product Detail</Link>
          </li>
          <li>
            <Link to="/search-page">Search Page</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
