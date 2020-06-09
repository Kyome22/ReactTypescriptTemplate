import React from "react";
import { ParsedQuery } from "query-string";
import { Header } from "./Header";
import { ArticlesList, ArticleData } from "./ArticlesList";
import { Footer } from "./Footer";
import articles from "./articles.json";
import "./App.css";

const App: React.FC<{ qs: ParsedQuery }> = (props) => {
  const list = articles as ArticleData[];
  const total = Math.floor(list.length / 20);
  const id = "id" in props.qs ? (props.qs.id as string) : "";
  const title = () => {
    const index = list.findIndex((e) => e.id === id);
    return index < 0 ? "技術記事とポエム一覧" : list[index].title;
  };
  const page = () => {
    const value = parseInt(
      "page" in props.qs ? (props.qs.page as string) : "1"
    );
    return isNaN(value) ? 1 : Math.min(total, Math.max(1, value));
  };

  return (
    <div className="App">
      <Header title={title()} />
      <ArticlesList page={page()} list={list} total={total} />
      <Footer />
    </div>
  );
};

export default App;
