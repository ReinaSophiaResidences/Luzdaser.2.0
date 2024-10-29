import React from "react";

const Ubicacion = () => {
  return (
    <section className="md:flex justify-between items-center max-w-6xl mx-5 xl:mx-auto mb-10 font-serif">
      <div className="py-10">
        <h3 className="mt-4 text-xl font-extrabold">UBICACIÓN</h3>
        <p className="mt-2">
          <strong>Dirección: </strong>Paradera 184, Aruba.
        </p>
        <h3 className="mt-4 text-xl font-extrabold">Contactto de oficina</h3>
        <p className="mt-2">+297 699 22 22</p>
        <h3 className="mt-4 text-xl font-extrabold">Correos</h3>
        <p className="mt-2">info@reinasophiaresidences.com</p>
        <p className="mt-2">luzdaseranalyst@gmail.com</p>
        <p className="mt-2">www.reinasophiaresidences.com</p>
      </div>
      <div className="">
        <iframe
          title="google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.7756882217964!2d-70.00398682588684!3d12.531013824386632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e853901f136059d%3A0xa809cb22b39064d5!2sParadera%20184%2C%20Oranjestad%2C%20Aruba!5e0!3m2!1ses!2sco!4v1729617073719!5m2!1ses!2sco"
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen
          loading="lazy"
          className="w-full md:w-[480px] h-60"
        />
      </div>
    </section>
  );
};

export default Ubicacion;
