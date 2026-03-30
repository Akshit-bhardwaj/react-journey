import { Routes , Route } from "react-router-dom"
import HomePage from "./pages/Homepage"
import ContactPage from "./pages/Contact"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/About"
import ServicesPage from "./pages/Services"
import Footer from "./components/Footer"
const App = ()=>{

  return(
    <>
    <Navbar/>

    <Routes>
    <Route path="/" element = {<HomePage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/service" element={<ServicesPage/>}></Route>
    <Route path="/contact" element={<ContactPage/>}></Route>
    </Routes>
    <AboutPage/>
    <ContactPage/>
    <ServicesPage/>
    <Footer/>

    </>
  )
}

export default App