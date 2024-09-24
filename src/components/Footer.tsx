function Footer() {
  return (
    <footer className="bg-DarkBlueGray text-white p-10">
      <section className="footer">
        <aside>
          <img
            src="/img/easyxplorerLogo.webp"
            loading="lazy"
            className="object-cover h-32 -translate-x-10 translate-y-4"
            alt="Logo de EasyXplorer"
          />
          <p>
            EasyXplorer
            <br />
            Brindando destinos desde 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
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
