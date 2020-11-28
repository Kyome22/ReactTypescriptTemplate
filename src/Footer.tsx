import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export function Footer() {
  const { t } = useTranslation();

  const mail = (() => {
    let str = "mailto:kyomesuke@icloud.com";
    str += `?subject=${t("mail_subject")}`;
    str += `&body=${t("mail_body")}`;
    return encodeURI(str);
  })();

  return (
    <div className="footer">
      <div className="privacy-policy">
        <p className="contents-title">{t("privacy_policy")}</p>
        <button
          className="privacy-link"
          onClick={() => {
            window.location.href = t("privacy_policy_url");
          }}
        >
          {t("detail")}
        </button>
      </div>
      <div className="support">
        <p className="contents-title">{t("support")}</p>
        <a className="mail-link" href={mail}>
          <img className="link-image" src="images/mail.png" />
          <span>kyomesuke[at]icloud.com</span>
        </a>
      </div>
      <p className="copyright">{t("copyright")}</p>
    </div>
  );
}
