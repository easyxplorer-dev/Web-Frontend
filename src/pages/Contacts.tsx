import Button from "@components/Button";
import { ChangeEvent, FormEvent, ReactNode, useRef, useState } from "react";
import { LuMail, LuMapPin, LuPhone, LuUser } from "react-icons/lu";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
const recaptchaPublicKey = import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY;
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

function Contacts() {
  const [isValidRecaptcha, setIsValidRecaptcha] = useState(false);
  const recaptchaRef = useRef(null);
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
    <section className="mx-4 md:mx-0">
      <section className="max-w-7xl mx-auto py-4">
        <div className="flex flex-wrap justify-center gap-6">
          <article className="flex-1">
            <div className="mb-8">
              <h3 className="text-xl md:text-4xl mb-4 text-MaizeYellow">
                Puedes encontrarnos en
              </h3>
              <div className="flex items-center gap-2 text-white">
                <LuMapPin className="w-5 h-5" />
                <p className="text-gray-400">Ubicación</p>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xl md:text-4xl mb-4 text-MaizeYellow">
                O si prefieres contactarnos por
              </h3>
              <div className="flex items-center gap-2 text-white">
                <LuPhone className="w-5 h-5" />
                <p className="text-gray-400">+593 000 0000</p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <LuPhone className="w-5 h-5" />
                <p className="text-gray-400">+593 111 1111</p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <LuMail className="w-5 h-5" />
                <p className="text-gray-400">example@easyxplorer.com</p>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xl md:text-4xl mb-4 text-MaizeYellow">
                También puedes seguirnos
              </h3>
              <div className="flex flex-wrap gap-4">
                <SocialsCard
                  url=""
                  extraClassName="hover:bg-[#4dc247] hover:text-white"
                >
                  <IoLogoWhatsapp className="w-8 h-8" />
                </SocialsCard>
                <SocialsCard
                  url=""
                  extraClassName="hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white"
                >
                  <IoLogoInstagram className="w-8 h-8" />
                </SocialsCard>
                <SocialsCard
                  url=""
                  extraClassName="hover:bg-[#3b5998] hover:text-white"
                >
                  <IoLogoFacebook className="w-8 h-8" />
                </SocialsCard>
                <SocialsCard
                  url=""
                  extraClassName="hover:bg-black hover:text-white"
                >
                  <FaXTwitter className="w-8 h-8" />
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
                  <LuUser />
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
                  <LuUser />
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
                <LuMail />
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
      </section>
    </section>
  );
}

export default Contacts;
