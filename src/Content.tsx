import React from "react";
import { useTranslation } from "react-i18next";
import "./Content.css";

export function Content() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <p>Hello World!</p>
    </div>
  );
}
