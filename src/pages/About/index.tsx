import ValueCard from "./ValueCard";
import { Value } from "./ValueCard";

const Values: Value[] = [
  {
    id: 1,
    name: "Orientación al Cliente",
    description:
      "Priorizar las necesidades y deseos del cliente, proporcionando un servicio personalizado y atento para asegurar una experiencia memorable y satisfactoria.",
  },
  {
    id: 2,
    name: "Transparencia",
    description:
      "Ser claro y honesto en todas las comunicaciones, desde los costos hasta las políticas de cancelación y los detalles del viaje, para construir confianza y evitar malentendidos.",
  },
  {
    id: 3,
    name: "Compromiso con la Calidad",
    description:
      "Ofrecer productos y servicios de alta calidad, asegurando que todos los detalles del viaje sean revisados y cumplan con los estándares de excelencia.",
  },
  {
    id: 4,
    name: "Innovación",
    description:
      "Estar al tanto de las últimas tendencias en el sector de viajes y ofrecer soluciones creativas y actualizadas que mejoren la experiencia del cliente.",
  },
  {
    id: 5,
    name: "Responsabilidad",
    description:
      "Actuar de manera ética y responsable, tanto en la gestión de los viajes como en la sostenibilidad y el impacto ambiental de las actividades ofrecidas.",
  },
  {
    id: 6,
    name: "Confianza",
    description:
      "Fomentar una relación de confianza con los clientes, demostrando integridad y consistencia en todas las transacciones y recomendaciones.",
  },
];

function About() {
  return (
    <section className="mx-4 md:mx-0">
      <section className="max-w-7xl mx-auto py-4">
        <article className="my-12 flex flex-wrap gap-4 justify-between mb-24">
          <section className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl text-white font-title font-bolder uppercase tracking-wider text-center mb-4">
              Quiénes Somos
            </h2>
            <p className="text-white text-sm md:text-lg font-text max-w-lg mx-auto mb-2">
              En Easy Xplorer, somos una agencia de viajes innovadora dedicada a
              transformar la manera en que exploras el mundo. Nos especializamos
              en ofrecer experiencias de viaje únicas y personalizadas,
              diseñadas para superar las expectativas de nuestros clientes.
              Nuestra pasión por la aventura y el descubrimiento se combina con
              un enfoque creativo y un profundo conocimiento del mercado para
              proporcionar itinerarios excepcionales que reflejan la
              autenticidad y la emoción de cada destino.
            </p>
            <p className="text-white text-sm md:text-lg font-text max-w-lg mx-auto mb-2">
              Nos destacamos por nuestra capacidad para simplificar el proceso
              de viaje, haciendo que explorar nuevos horizontes sea accesible y
              emocionante. Con un equipo de expertos comprometidos y un servicio
              al cliente excepcional, estamos aquí para guiarte en cada paso del
              camino, asegurándonos de que cada viaje sea una aventura memorable
              y enriquecedora.
              <br />
              En Easy Xplorer, no solo te ayudamos a planificar tus vacaciones;
              transformamos cada viaje en una experiencia inolvidable,
              conectándote con el mundo de una manera que solo nosotros sabemos
              hacer.
            </p>
          </section>
          <figure className="max-w-sm relative mx-auto hidden md:block">
            <img
              className="w-full h-full rounded-lg object-cover"
              loading="lazy"
              style={{
                maskImage: "linear-gradient(black 90%, transparent)",
              }}
              src="https://images.unsplash.com/photo-1574359467742-16ffd0a1b81f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hvJTIwaSUyMGFtfGVufDB8fDB8fHww"
              alt=""
            />
            <img
              className="h-52 rounded-lg object-cover absolute top-20 left-0 -translate-x-1/2"
              loading="lazy"
              src="https://images.unsplash.com/photo-1585195834027-5b28b11f473d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdobyUyMGklMjBhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute top-8 right-0 translate-x-1/2"
              loading="lazy"
              src="https://images.unsplash.com/photo-1577644609404-b426743767f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdobyUyMGklMjBhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute bottom-0 left-0 -translate-x-6 translate-y-8"
              loading="lazy"
              src="https://images.unsplash.com/photo-1577644609404-b426743767f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdobyUyMGklMjBhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute bottom-0 right-0 translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              src="https://images.unsplash.com/photo-1585195834027-5b28b11f473d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdobyUyMGklMjBhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </figure>
        </article>
        <div className="my-8">
          <div className="hero-content flex-col flex-col-reverse lg:flex-row">
            <img src="/img/index/mision.avif" className="max-w-sm rounded-lg" />
            <div className="text-start md:text-end">
              <h1 className="text-5xl font-bold font-title uppercase">
                Misión
              </h1>
              <p className="py-6 max-w-lg">
                En Easy Xplorer, nuestra misión es reinventar el arte de viajar
                mediante la creación de experiencias personalizadas y
                excepcionales. Nos dedicamos a conectar a los viajeros con
                destinos auténticos y emocionantes a través de soluciones
                innovadoras que combinan un enfoque creativo con un toque
                humano. Nuestro compromiso es superar las expectativas de
                nuestros clientes, ofreciendo asesoramiento experto, itinerarios
                únicos y un servicio excepcional que haga de cada viaje una
                aventura inolvidable.
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-start">
              <h1 className="text-5xl font-bold font-title uppercase">
                Visión
              </h1>
              <p className="py-6 max-w-lg">
                En Easy Xplorer, nuestra visión es ser líderes en la
                transformación del turismo global, estableciendo nuevos
                estándares en la personalización y la innovación. Aspiramos a
                ser la primera elección para viajeros que buscan aventuras
                auténticas y memorables, creando un mundo donde cada destino sea
                una experiencia única y cada viaje, una historia que contar. Nos
                comprometemos a explorar y expandir continuamente nuestras
                ofertas, impulsando un cambio positivo en la manera en que el
                mundo viaja y conecta.
              </p>
            </div>
            <img
              src="/img/index/vision.avif"
              className="max-w-sm rounded-lg "
            />
          </div>
        </div>
        <section className="my-8">
          <h2 className="text-5xl text-center font-title text-white mb-2">
            Nuestros Valores
          </h2>
          <p className="text-white mb-6 max-w-md md:max-w-lg mx-auto">
            Estos valores no solo ayudan a construir una buena reputación, sino
            que también contribuyen a la fidelización de clientes y al éxito
            sostenido de la agencia.
          </p>
          <article className="flex gap-8 justify-evenly flex-wrap">
            {Values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </article>
        </section>
      </section>
    </section>
  );
}

export default About;
