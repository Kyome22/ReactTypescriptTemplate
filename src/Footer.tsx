import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

type Props = {
  appName: string;
};

export default function Footer(props: Props) {
  const { t } = useTranslation();

  const mail = (() => {
    let str = "mailto:kyomesuke@icloud.com";
    str += `?subject=${t("mail_subject", { appName: props.appName })}`;
    str += `&body=${t("mail_body", { appName: props.appName })}`;
    return encodeURI(str);
  })();

  return (
    <div className="footer">
      <div className="section">
        <a className="anchor" id="privacy_policy" />
        <p className="title">{t("privacy_policy")}</p>
        <a className="button" href={t("privacy_policy_url")}>
          {t("detail")}
        </a>
      </div>
      <div className="section">
        <a className="anchor" id="support" />
        <p className="title">{t("support")}</p>
        <a className="mail-link" href={mail}>
          <img className="link-image" src="images/mail.png" />
          <span>kyomesuke[at]icloud.com</span>
        </a>
      </div>
      <p className="copyright">{t("copyright")}</p>
    </div>
  );
}
