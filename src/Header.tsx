import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

type Props = {
  onLangChange: () => void;
};

export function Header(props: Props) {
  const { onLangChange } = props;
  const { t } = useTranslation();

  return (
    <div className="header">
      <h2 className="title">{t("app_name")}</h2>
      <h3 className="language" onClick={onLangChange}>
        {t("language")}
      </h3>
    </div>
  );
}

export function DummyHeader() {
  return <div className="dummy-header"></div>;
}
