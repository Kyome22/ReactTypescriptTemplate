import React, { useState } from "react";
import "./ArticlesList.css";

export type ArticleData = {
  id: string;
  title: string;
};

type Props = {
  page: number;
  list: ArticleData[];
  total: number;
  isUnspecified: boolean;
};

export function ArticlesList(props: Props) {
  const { page, list, total, isUnspecified } = props;
  const [currentPage, setPage] = useState(page);

  const items = list
    .filter((value, index) => {
      return (currentPage - 1) * 20 <= index && index < currentPage * 20;
    })
    .map(({ id, title }, i) => (
      <li key={`article-${i}`}>
        <a href={`./articles.html?id=${id}&page=${currentPage}`}>{title}</a>
      </li>
    ));

  return (
    <div className={"ArticlesList" + (isUnspecified ? " unspecified" : "")}>
      <ul>{items}</ul>
      <button onClick={() => setPage(Math.max(currentPage - 1, 1))}>
        {"◀︎"}
      </button>
      <span>
        {currentPage}/{total}
      </span>
      <button onClick={() => setPage(Math.min(currentPage + 1, total))}>
        {"▶︎"}
      </button>
    </div>
  );
}
