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
              Quienes Somos
            </h2>
            <p className="text-white text-sm md:text-lg font-text max-w-lg mx-auto mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
              aperiam? Ullam soluta animi modi commodi ea ipsa esse provident
              accusamus dolorum aut. Ducimus mollitia eius inventore amet
              accusantium quaerat tempore nulla in voluptate blanditiis
              obcaecati, possimus numquam quidem sint. Eum, eveniet ad. Hic est
              eligendi et sapiente dicta a. Reiciendis!
            </p>
            <p className="text-white text-sm md:text-lg font-text max-w-lg mx-auto mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              cum, possimus id ut facere excepturi enim aliquid deleniti ad
              itaque.
            </p>
          </section>
          <figure className="max-w-sm relative mx-auto hidden md:block">
            <img
              className="w-full h-full rounded-lg object-cover"
              loading="lazy"
              style={{
                maskImage: "linear-gradient(black 90%, transparent)",
              }}
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-52 rounded-lg object-cover absolute top-20 left-0 -translate-x-1/2"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute top-8 right-0 translate-x-1/2"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute bottom-0 left-0 -translate-x-6 translate-y-8"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-48 rounded-lg object-cover absolute bottom-0 right-0 translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1663012992954-cf8c909be7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
        </article>
        <div className="my-8">
          <div className="hero-content flex-col flex-col-reverse lg:flex-row">
            <img
              src="/img/index/misison.avif"
              className="max-w-sm rounded-lg"
            />
            <div className="text-start md:text-end">
              <h1 className="text-5xl font-bold font-title uppercase">
                Misión
              </h1>
              <p className="py-6 max-w-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                reprehenderit molestias quaerat dicta veniam iure repudiandae
                praesentium alias consequuntur nihil pariatur corporis quod
                doloremque ab architecto perferendis minima illum quos
                assumenda, voluptatum labore maiores? <br />
                Quis similique quae quibusdam veritatis nisi accusantium minus
                asperiores! Recusandae consectetur sapiente neque aut at iure!
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                reprehenderit molestias quaerat dicta veniam iure repudiandae
                praesentium alias consequuntur nihil pariatur corporis quod
                doloremque ab architecto perferendis minima illum quos
                assumenda, voluptatum labore maiores? <br />
                Quis similique quae quibusdam veritatis nisi accusantium minus
                asperiores! Recusandae consectetur sapiente neque aut at iure!
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
