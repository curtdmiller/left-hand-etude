import * as React from "react";

interface Props {
  data: string[];
}

export default function Words({ data }: Props) {
  const alpha: { [letter: string]: string[] } = {};
  "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
    alpha[letter] = [];
  });

  data.forEach((word) => {
    alpha[word[0]].push(word);
  });

  return (
    <div>
      {Object.keys(alpha).map((letter) => {
        if (alpha[letter].length > 0) {
          return (
            <div>
              <h2>{letter}</h2>
              <p>{alpha[letter].join(" ")}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
