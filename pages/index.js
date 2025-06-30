import Navbar from "components/navbar";
import Product from "components/product";
import Footer from "components/footer"

export default function Home() {
  return (
    <>
    <div className="container">
    <Navbar/>
    
    <Product/>
    <Footer />
    </div>
    </>
  )
}
