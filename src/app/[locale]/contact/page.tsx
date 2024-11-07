"use client";

import { useEffect, useRef, useState } from "react";
import FooterLink from "@/components/Footer";
import { Input, TextArea } from "@/components/Form/styles";
import Layout, { PageWrapper } from "@/components/Layout";
import { PageSection } from "@/components/Layout/styles";
import ToastNotification from "@/components/Toast";
import { Typography } from "@/components/Typography";
import useTranslation from "@/hooks/useTranslation";
import { ContactSection } from "@/styles/pages/contact/styles";
import { ValidationError, useForm } from "@formspree/react";
import { usePathname, useRouter } from "next/navigation";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState("Thanks for joining!");

  const [state, handleSubmit] = useForm("xbjnbzly");
  const { succeeded, errors, result, submitting } = state;

  const notify = (message: string) => {
    setShow(true);
    setMessage(message);
  };

  const closeToast = () => {
    setShow(false);
  };

  useEffect(() => {
    if (succeeded) {
      notify("Enviado com sucesso!");
      setTimeout(() => {
        setShow(false);
        formRef.current!.reset();
      }, 3000);
    }
    if (errors) {
      setMessage("Error! Please try again.");
    }
  }, [succeeded, errors]);

  return (
    <Layout>
      <PageSection>
        <PageWrapper>
          <ContactSection>
            <Typography type="h1"> {t("contact")}. </Typography>
            <article>
              <Typography type="p">
                {t("contactText")}
                <b> thiagohonorato.thp@gmail.com </b>
              </Typography>
            </article>
            <br />

            <form onSubmit={handleSubmit} ref={formRef}>
              <Input
                type="text"
                placeholder={t("labelName")}
                name="text"
                required
              />
              <ValidationError prefix="text" field="text" errors={errors} />

              <Input type="email" name="email" placeholder={"Email"} required />
              <ValidationError prefix="Email" field="email" errors={errors} />

              <TextArea
                placeholder={t("labelMessage")}
                name="message"
                rows={5}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={errors}
              />

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-default"
              >
                {submitting ? "Enviando..." : t("buttonText")}
              </button>
            </form>
          </ContactSection>
          <div>
            {show && (
              <ToastNotification close={closeToast}>
                {message}
              </ToastNotification>
            )}
          </div>

          <FooterLink goto="/">{t("contactFooter")}</FooterLink>
        </PageWrapper>
      </PageSection>
    </Layout>
  );
}
