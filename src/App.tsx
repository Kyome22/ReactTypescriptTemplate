import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { ParsedQuery, parse } from "query-string";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
  const location = window.location;
  const defaultLang = ((qs: ParsedQuery) => {
    if ("lang" in qs && qs.lang === "en") {
      return "en";
    }
    return "ja";
  })(parse(location.search));
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const onLangChange = () => {
    window.scrollTo(0, 0);
    setLang(lang === "en" ? "ja" : "en");
  };

  return (
    <div className="app">
      <HelmetProvider>
        <Helmet title={t("app_name")} />
      </HelmetProvider>
      <Header onLangChange={onLangChange} />
      <DummyHeader />
      <Content />
      <Footer />
    </div>
  );
}
