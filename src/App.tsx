import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import queryString from "query-string";
import { Header, DummyHeader } from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ja from "./json/locales/ja.json";
import en from "./json/locales/en.json";
import "./App.css";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    ja: { translation: ja },
    en: { translation: en },
  },
  lng: "ja",
  fallbackLng: "en",
  returnEmptyString: false,
});

export default function App() {
  const defaultLang = ((qs: queryString.ParsedQuery) => {
    if ("lang" in qs && qs.lang === "en") {
      return "en";
    }
    return "ja";
  })(queryString.parse(window.location.search));
  const { t, i18n } = useTranslation();
  const [lang] = useState(defaultLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang, i18n]);

  const onLangChange = () => {
    window.scrollTo(0, 0);
    const newLang = lang === "en" ? "ja" : "en";
    window.location.replace(`?lang=${newLang}`);
  };

  return (
    <div className="app">
      <title>{t("app_name")}</title>
      <Header onLangChange={onLangChange} />
      <DummyHeader />
      <Content />
      <Footer appName={t("app_name")} />
    </div>
  );
}
