import React from "react";
import { useTranslation } from "react-i18next";
import Top from "./Top";
import "./Content.css";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <Top />
      <div className="section">
        <a className="anchor" id="what_is_this" />
        <p className="title">{t("what_is_this")}</p>
        <img src="images/sample.png" alt="" />
        <p className="limited-explain">{t("explain1")}</p>
      </div>
    </div>
  );
}
