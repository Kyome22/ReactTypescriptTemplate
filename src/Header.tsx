import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

type Props = {
  onLangChange: () => void;
};

export function Header(props: Props) {
  const { onLangChange } = props;
  const { t } = useTranslation();

  return (
    <div className="header">
      <h2 className="title">Title</h2>
      <h3 className="language" onClick={onLangChange}>
        {t("language")}
      </h3>
    </div>
  );
}
