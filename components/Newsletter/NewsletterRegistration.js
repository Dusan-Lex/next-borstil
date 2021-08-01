import { useRef, useContext, Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  Newsletter,
  NewsletterTitle,
  NewsletterSubtitle,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton,
  NewsletterNotification,
} from "./NewsletterRegistrationStyles";
import PopupContext from "../../store/popupContext";

const NewsletterRegistration = () => {
  const emailInputRef = useRef();
  const buttonRef = useRef();
  const popupCtx = useContext(PopupContext);
  const { t } = useTranslation();

  const registrationHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    popupCtx.showPopup({
      title: t("common:newsletter.pending.title"),
      text1: t("common:newsletter.pending.subtitle"),
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        popupCtx.showPopup({
          title: t("common:newsletter.success.title"),
          text1: t("common:newsletter.success.subtitle"),
          status: "success",
        });
        emailInputRef.current.value = "";
      })
      .catch((error) => {
        popupCtx.showPopup({
          title: t("common:newsletter.error.title"),
          text1: t(
            `common:newsletter.error.subtitle${
              error.message === "Invalid email address"
                ? "1"
                : error.message === "Email already exists"
                ? "3"
                : "2"
            }`
          ),
          status: "error",
        });
        // emailInputRef.current.focus();
      });
  };
  return (
    <Newsletter>
      <NewsletterTitle>{t("common:newsletter.title")}</NewsletterTitle>
      <NewsletterSubtitle>{t("common:newsletter.subtitle")}</NewsletterSubtitle>
      <NewsletterForm onSubmit={registrationHandler}>
        <NewsletterInput
          placeholder={t("common:newsletter.placeholder")}
          ref={emailInputRef}
        />
        <NewsletterButton ref={buttonRef}>
          {t("common:newsletter.send")}
        </NewsletterButton>
      </NewsletterForm>
      <NewsletterNotification>
        {popupCtx.popup && (
          <Fragment>
            <h5 key={popupCtx.popup.title}>{popupCtx.popup.title}</h5>
            <p key={popupCtx.popup.text1}>{popupCtx.popup.text1}</p>
          </Fragment>
        )}
      </NewsletterNotification>
    </Newsletter>
  );
};

export default NewsletterRegistration;
