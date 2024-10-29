import AboutUs from "./components/AboutUs"
import Detalles from "./components/Detalles"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Models from "./components/Models"
import Referentes from "./components/Referentes"
import Ubicacion from "./components/Ubicacion"

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Referentes/>
      <Detalles/>
      <Models/>
      <Ubicacion/>
      <Footer/>
    </div>
  )
}

export default App
