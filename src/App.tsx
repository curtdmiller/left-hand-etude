import * as React from "react";
import "./styles.css";
import Words from "./components/words";
import data from "./data";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1 className="title">Etude</h1>
        <p className="subtitle">for Left Hand Alone</p>
        {/* <p className="author">Curt D Miller</p> */}
      </header>
      <main>
        <Words data={data} />
      </main>
    </div>
  );
}
