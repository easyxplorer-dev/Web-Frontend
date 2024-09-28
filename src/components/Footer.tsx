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
          <p>Brindando destinos desde 2024</p>
        </aside>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </section>
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
          href="https://www.instagram.com/junior.r14/"
          className="text-blue-400 font-bold hover:underline"
          target="_blank"
        >
          Junior Ruiz
        </a>
      </p>
    </footer>
  );
}

export default Footer;
