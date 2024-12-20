function Footer() {
  return (
    <footer className="bg-DarkBlueGray text-white p-10">
      <section className="footer justify-between max-w-screen-xl mx-auto">
        <aside>
          <img
            src="/img/logoWebLarge.svg"
            loading="lazy"
            className="object-cover h-32"
            alt="Logo de EasyXplorer"
          />
          <p>Líderes en viajes</p>
        </aside>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </section>
      <section className="max-w-screen-xl mx-auto">
        <div className="text-[0.80rem] text-start m-0 mt-4 flex flex-col">
          <small>
            Certificado de Regístro de Turismo No:{" "}
            <span className="tracking-widest">1793220977001.001.9015187</span>
          </small>
          <small>
            Número de trámite:{" "}
            <span className="tracking-widest">2024WEBLUAE404863</span>
          </small>
        </div>
        <p className="text-sm text-center m-0 mt-4">
          Developed by{" "}
          <a
            href="https://quantumcode.art/"
            className="text-blue-400 font-bold hover:underline"
            target="_blank"
          >
            QuantumCode
          </a>{" "}
          and{" "}
          <a
            href="https://junior-dev.vercel.app/"
            className="text-blue-400 font-bold hover:underline"
            target="_blank"
          >
            Junior Ruiz
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
