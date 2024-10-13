import CustomerLogo from "@components/CustomerLogo";
import { Partners } from "src/data/Partners";

function Logos() {
  return (
    <section className="bg-transparent mb-14">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl font-title-regular">
          Trabajamos con las mejores marcas
        </h2>
        <div className="text-gray-500 dark:text-gray-400 flex flex-wrap gap-4 items-center justify-evenly">
          {Partners.map((partner) => (
            <CustomerLogo url="#" key={partner.id}>
              <img
                src={partner.img}
                className="h-14 mx-auto object-cover transition hover:scale-110 rounded-lg"
                loading="lazy"
                alt={`Logo de ${
                  partner?.name ? partner.name : "una marca de confianza"
                }`}
              />
            </CustomerLogo>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logos;
