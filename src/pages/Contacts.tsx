import Button from "@components/Button";
import { ChangeEvent, FormEvent, ReactNode, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Phone from "@components/Icons/Phone";
import Mail from "@components/Icons/Mail";
import BrandWhatsApp from "@components/Icons/BrandWhatsApp";
import BrandInstagram from "@components/Icons/BrandInstagram";
import BrandFacebook from "@components/Icons/BrandFacebook";
import User from "@components/Icons/User";
const recaptchaPublicKey = import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY;
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

function Contacts() {
  const [isValidRecaptcha, setIsValidRecaptcha] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleCaptcha = (value: string | null) => {
    setIsValidRecaptcha(value ? true : false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    recaptchaRef.current?.reset();
    setIsValidRecaptcha(recaptchaRef.current?.getValue() ? true : false);
    if (!formRef.current) return;
    const emailSentAlert = document.getElementById(
      "emailSentSuccessfullyAlert"
    );
    const emailNotSentAlert = document.getElementById("emailNotSentAlert");
    emailjs
      .sendForm(emailJsServiceId, emailJsTemplateId, formRef.current, {
        publicKey: emailJsPublicId,
      })
      .then(
        () => {
          emailNotSentAlert?.classList.replace("block", "hidden");
          emailSentAlert?.classList.replace("hidden", "block");
        },
        (error) => {
          emailNotSentAlert?.classList.replace("hidden", "block");
          emailSentAlert?.classList.replace("block", "hidden");
          console.log(`Error al enviar el email: ${error.text}`);
        }
      );
    formRef.current.reset();
  };

  const countLeftCharacters = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const helpText = document.getElementById(`help-text-${e.target.id}`);
    if (!helpText) return;
    if (e.target.value.length > 0) {
      helpText.classList.replace("hidden", "block");
      helpText.innerHTML = `${e.target.value.length} de ${e.target.getAttribute(
        "maxLength"
      )}`;
    } else helpText.classList.replace("block", "hidden");
    return;
  };

  const SocialsCard = ({
    children,
    url,
    extraClassName,
  }: {
    children: ReactNode;
    url: string;
    extraClassName?: string;
  }) => {
    return (
      <a
        href={url}
        target="_blank"
        className={`p-6 bg-gray-700 rounded-lg transition ${extraClassName} hover:scale-105`}
      >
        {children}
      </a>
    );
  };

  return (
    <section className="mx-4 md:mx-0 h-full">
      <section className="max-w-7xl mx-auto py-4">
        <div className="flex flex-wrap justify-center items-center gap-6 min-h-screen">
          <article className="flex-1">
            <figure className="mb-8 w-96">
              <img src="/img/index/contacto.svg" alt="Imágen de contacto" />
            </figure>
            <div className="mb-8">
              <h3 className="text-xl md:text-4xl mb-4 text-MaizeYellow">
                Puedes contactarnos por
              </h3>
              <div className="flex items-center gap-2 text-white">
                <Phone extraClassName="w-5 h-5" />
                <p className="text-gray-400">+593 99 279 1323</p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone extraClassName="w-5 h-5" />
                <p className="text-gray-400">02 601 4057</p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mail extraClassName="w-5 h-5" />
                <a
                  href="mailto:atencionalcliente@easyxplorer.vacations"
                  target="_blank"
                  className="text-gray-400 hover:underline"
                >
                  atencionalcliente@easyxplorer.vacations
                </a>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xl md:text-4xl mb-4 text-MaizeYellow">
                También puedes seguirnos
              </h3>
              <div className="flex flex-wrap gap-4">
                <SocialsCard
                  url="https://wa.me/593992791323/"
                  extraClassName="hover:bg-[#4dc247] hover:text-white"
                >
                  <BrandWhatsApp extraClassName="w-8 h-8" />
                </SocialsCard>
                <SocialsCard
                  url="https://www.instagram.com/easyxplorerec/"
                  extraClassName="hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white"
                >
                  <BrandInstagram extraClassName="w-8 h-8" />
                </SocialsCard>
                <SocialsCard
                  url="https://www.facebook.com/profile.php?id=61565504110551"
                  extraClassName="hover:bg-[#3b5998] hover:text-white"
                >
                  <BrandFacebook extraClassName="w-8 h-8" />
                </SocialsCard>
              </div>
            </div>
          </article>
          <article className="flex-1">
            <header className="mb-4 space-y-2">
              <h2 className="text-3xl md:text-5xl text-white font-title font-bold">
                Contactanos
              </h2>
              <p>¿Alguna pregunta? Solo escribenos un mensaje</p>
            </header>
            <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
              {/* Fullname */}
              <div className="flex gap-4 flex-wrap mb-4">
                <label className="input input-bordered flex items-center gap-2 flex-1">
                  <User extraClassName="w-6" />
                  <input
                    type="text"
                    className="grow"
                    minLength={3}
                    maxLength={150}
                    onChange={(e) => countLeftCharacters(e)}
                    required
                    id="names"
                    name="names"
                    placeholder="Nombres"
                  />
                  <span
                    className="label-text-alt ml-auto my-2 hidden"
                    id="help-text-names"
                  ></span>
                </label>
                <label className="input input-bordered flex items-center gap-2 flex-1">
                  <User extraClassName="w-6" />
                  <input
                    type="text"
                    className="grow"
                    minLength={3}
                    maxLength={150}
                    onChange={(e) => countLeftCharacters(e)}
                    required
                    id="lastNames"
                    name="lastNames"
                    placeholder="Apellidos"
                  />
                  <span
                    className="label-text-alt ml-auto my-2 hidden"
                    id="help-text-lastNames"
                  ></span>
                </label>
              </div>
              {/* Email */}
              <label className="input input-bordered flex items-center gap-2">
                <Mail extraClassName="w-6" />
                <input
                  type="email"
                  className="grow"
                  required
                  id="email"
                  name="email"
                  placeholder="Correo Electrónico"
                />
              </label>
              {/* Radios */}
              <div className="form-control">
                <h3 className="text-lg md:text-xl text-white">
                  ¿Por qué nos contacta?
                </h3>
                <div className="flex gap-4 justify-between flex-wrap">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2">Compra de productos</span>
                    <input
                      value="Compra de productos"
                      type="radio"
                      id="subject"
                      name="subject"
                      required
                      className="radio radio-warning"
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2">Ser socio</span>
                    <input
                      value="Ser socio"
                      type="radio"
                      id="subject"
                      name="subject"
                      required
                      className="radio radio-warning"
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2">Encontré un bug</span>
                    <input
                      value="Encontré un bug"
                      type="radio"
                      id="subject"
                      name="subject"
                      required
                      className="radio radio-warning"
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2">Otro</span>
                    <input
                      value="Otro"
                      type="radio"
                      id="subject"
                      name="subject"
                      required
                      className="radio radio-warning"
                    />
                  </label>
                </div>
              </div>
              {/* Textarea */}
              <label className="form-control">
                <span className="label label-text">Mensaje</span>
                <textarea
                  required
                  minLength={5}
                  maxLength={255}
                  onChange={(e) => countLeftCharacters(e)}
                  className="textarea textarea-bordered h-24"
                  placeholder="Escriba su mensaje"
                  id="message"
                  name="message"
                ></textarea>
                <span
                  className="label-text-alt ml-auto my-2 hidden"
                  id="help-text-message"
                ></span>
              </label>
              <ReCAPTCHA
                sitekey={`${recaptchaPublicKey}`}
                ref={recaptchaRef}
                onChange={handleCaptcha}
              />
              <Button
                variant="submit"
                disabled={!isValidRecaptcha}
                color="GoldenYellow"
                outline
              >
                Enviar
              </Button>
              <p
                className="text-success hidden"
                id="emailSentSuccessfullyAlert"
              >
                ¡Correo enviado exitosamente!
              </p>
              <p className="text-error hidden" id="emailNotSentAlert">
                Hubo un error al enviar el correo, intenta más tarde
              </p>
            </form>
          </article>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4805.427456676932!2d-78.47103218869835!3d-0.15588673543620626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5900f5ef3ec8f%3A0xa2d7cd0307aa6362!2sPlatinum%20Plaza%20Condominios!5e1!3m2!1ses-419!2sec!4v1728482373675!5m2!1ses-419!2sec"
          className="w-full h-96 rounded-lg mb-8"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
}

export default Contacts;
