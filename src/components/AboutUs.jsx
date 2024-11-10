import React from "react";
import imgSlider1 from "../assets/Us1.avif";
import imgSlider4 from "../assets/Us4.avif";
import logo2 from "../assets/Logo_negativ.png"

const AboutUs = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const delay = 5000; // 5 segundos
  // const intervalRef = useRef(null); // Guardar referencia del intervalo

  // const startInterval = () => {
  //   intervalRef.current = window.setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, delay);
  // };

  // // Iniciar intervalo en el montaje del componente
  // useEffect(() => {
  //   startInterval();
  //   return () => clearInterval(intervalRef.current); // Limpiar intervalo al desmontar
  // }, []);

  // // Reiniciar el intervalo al hacer clic en 'Next' o 'Prev'
  // const handleNext = () => {
  //   clearInterval(intervalRef.current); // Limpiar intervalo actual
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   startInterval(); // Reiniciar intervalo
  // };

  // const handlePrev = () => {
  //   clearInterval(intervalRef.current); // Limpiar intervalo actual
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  //   startInterval(); // Reiniciar intervalo
  // };

  return (
    <section id="we" className="w-full h-full mx-auto my-20">
      <div className="flex flex-col lg:flex-row-reverse max-w-6xl mx-auto justify-between items-center px-5 lg:px-0 mb-20">
        {/* Contenedor de la imagen */}
        <div className="relative w-full lg:max-w-[50%] h-[300px] lg:h-[400px] py-10">
          <img
            src={imgSlider4}
            alt="aboutUs"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Contenedor del texto */}
        <div className="lg:w-1/2 space-y-5 mb-5 lg:py-10">
          <div className="flex">
            <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left my-5 border-secondary border-b-[2px] pr-2 w-fit">
              <strong>Sobre</strong>
            </h2>
            <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left my-5 border-primary/20 border-b-[2px] pl-2 w-fit">
              Nosotros
            </h2>
          </div>
          <div className="leading-snug lg:text-sm font-serif text-primary lg:pr-12 space-y-4">
            <p className="">
              A través de Eco Blog Real Estate & Construction VBA, creamos
              viviendas que combinan calidad, belleza y diseño innovador.
              Nuestro proyeco Reina Sofha en Paradera es un testimonio de
              nuestra visión: Lineas limpias, minimalismo elegante y una
              infraestructura de vanguardia
            </p>
            <p className="">
              JBSS ECO Real Estate te acompaña en la busqueda de tu hogar ideal
              en Aruba. Ya seas local o extrajero, nuestras oferta inmobiliaria
              se adapta a tus necesidades y estilo de vida.
            </p>
            <p className="">
              Somos el referente que impulsa el desarrollo de Aruba, brindando
              oportunidades de vivienda excepcionales para todos.
            </p>
          </div>
        </div>
      </div>
      {/* seccion 2 */}
      {/* <section className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between items-center px-5 lg:px-0">
        {/* Contenedor de la imagen */}
      {/* <div className="relative w-full lg:max-w-[50%] h-[400px] lg:h-[500px]">
        <img
          src={imgSlider1}
          alt="aboutUs2"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div> */}
      {/* Contenedor del texto */}
      {/* <div className="lg:w-1/2 space-y-10 mb-5">
        <h2 className="font-serif text-6xl text-center lg:text-right my-5">
          Nuestros Servicios
        </h2>
        <p className="leading-snug lg:text-base text-justify lg:pl-5">
          En estos momentos nuestros servicios, pasión y energías están volcadas
          en la creación de un Proyecto Residencial con fecha determinada.
          Durante esta etapa, nuestra dedicación se centra en ofrecer servicios
          de diseño y gestión de proyectos de la más alta calidad. garantizando
          que cada elemento se alinee con nuestra Visión de excelencia. Nuestro
          compromiso inquebrantable es entregar un Complejo Residencial que no
          solo cumpla sino que supere las expectativas de quienes tendrán el
          privilegio de llamarlo Hogar. Aspiramos a crear un entorno que
          inspire, deleite y brinde una experiencia de vida inigualable a cada
          uno de sus residentes. Nos enorgullece ser una empresa organizada y
          perseverante.
        </p>
        <button className="mx-auto flex bg-teal-500 text-white px-5 py-1 rounded-md font-serif font-medium hover:scale-105 transition ease-in-out hover:font-semibold">
          Ver Más
        </button>
      </div> */}
      {/* </div> */}
      <div className="min-h-screen bg-[url('./assets/27.webp')] bg-center bg-cover bg-fixed pb-40">
        <div id="services" className="w-60 h-full mx-auto">
          <img src={logo2} alt="Logo Luzdaser" className="w-full h-full object-cover py-10" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="p-10 lg:flex bg-white">
            <picture className="w-2/5">
              <img
                src={imgSlider1}
                alt="aboutUs2"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="lg:w-3/5 space-y-5 mb-5 lg:pl-10 lg:py-10">
              <div className="flex">
                <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left my-5 border-secondary border-b-[2px] pr-2 w-fit">
                  <strong>Nuestros</strong>
                </h2>
                <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left my-5 border-primary/20 border-b-[2px] pl-2 w-fit">
                  Servicios
                </h2>
              </div>
              <div className="leading-snug lg:text-sm font-serif text-primary space-y-4">
                <p className="">
                  En estos momentos nuestros servicios, pasión y energías están
                  volcadas en la creación de un Proyecto Residencial con fecha
                  determinada. Durante esta etapa, nuestra dedicación se centra
                  en ofrecer servicios de diseño y gestión de proyectos de la
                  más alta calidad, garantizando que cada elemento se alinee con
                  nuestra Visión de excelencia.
                </p>
                <p className="">
                  Nuestro compromiso inquebrantable es entregar un Complejo
                  Residencial que no solo cumpla sino que supere las
                  expectativas de quienes tendrán el privilegio de llamarlo
                  Hogar.
                </p>
                {/* <p className="">
                  Somos el referente que impulsa el desarrollo de Aruba,
                  brindando oportunidades de vivienda excepcionales para todos.
                </p> */}
              </div>

              {/* <p className="text-sm text-primary font-serif">
                  Aspiramos a crear un entorno que inspire,
                deleite y brinde una experiencia de vida inigualable a cada uno
                de sus residentes. Nos enorgullece ser una empresa organizada y
                perseverante.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
