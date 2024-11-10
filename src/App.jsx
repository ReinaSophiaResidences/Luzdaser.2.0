import AboutUs from "./components/AboutUs";
import Detalles from "./components/Detalles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Referentes from "./components/Referentes";
import Ubicacion from "./components/Ubicacion";
import Oliver from "../src/assets/olivermodel1.avif";
import Awdrey from "../src/assets/awdrey.webp";
import Luca from "../src/assets/luca.webp";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Referentes />
      <Detalles />
      <Models
        imgModel={Oliver}
        imgName="oliver"
        model="Oliver"
        pp="En el idílico entorno tropical de Aruba, se encuentra esta magnífica casa que redefine el concepto de lujo y confort."
        p1="A pocos minutos de las deslumbrantes playas."
        p2="Ideal para disfrutar en compañía de la familia o recibir a amigos."
        p3="Diseño contemporáneo cuenta con amplios espacios interiores que favorecen la luminosidad y la comodidad,"
        p4="El extenso patio y la zona exterior son perfectos para aprovechar el estilo de vida al aire libre típico de la isla."
      />
      <Models
        imgModel={Luca}
        imgName="Luca"
        model="Luca"
        pp="Situada en el paraíso tropical de Aruba, esta acogedora casa es la opción ideal para quienes buscan una propiedad funcional y de fácil mantenimiento, sin renunciar a la comodidad ni al estilo."
        p1="A solo unos minutos de las impresionantes playas de arena blanca"
        p2="Ambiente tranquilo y cálido durante todo el año."
        p3="Diseñada de manera que cada rincón maximiza el uso del espacio, brindando una sensación de confort y modernidad."
        p4="Bajo costo de mantenimiento y la inversión inicial reducida la convierten en una excelente oportunidad."
      />
      <Models
        imgModel={Awdrey}
        imgName="Audrey"
        model="Audrey"
        pp="En el idílico entorno tropical de Aruba, se encuentra esta magnífica casa que redefine el concepto multifamiliar de mucho confort"
        p1="A pocos minutos de las deslumbrantes playas."
        p2="Perfecto para una familia grande."
        p3="Diseño contemporáneo, acojedor, amplio con mucha luminosidad y sobretodo comodidad"
        p4="Las áreas sociales para compartir momentos memorables, mientras que el patio y la zona exterior son perfectos para aprovechar el estilo de vida al aire libre típico de la isla."
      />
      <Gallery/>
      <Ubicacion />
      <Footer />
    </div>
  );
}

export default App;
