import React from "react";
import "./Markdown.css";

type Props = {
  id: string;
};

export function Markdown(props: Props) {
  const { id } = props;

  return <div className="Markdown">{".mdファイルを読み込む"}</div>;
}
