import React, { useEffect, useState } from "react";

// styles
import "./WelcomeText.scss";

function randomInteger(min: number, max: number) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const WelcomeText = ({ letters }: { letters: string[] }) => {
  const [classN, setClassN] = useState("welcome-text");

  useEffect(() => {
    setTimeout(() => {
      setClassN("welcome-text welcome-text_show");
    }, 1000);
  }, [classN]);

  const content = letters.map((l, i) => {
    return <MakeLetter letter={l} number={i} key={l + i} />;
  });

  return <div className={classN}>{content}</div>;
};

const MakeLetter = ({
  letter,
  number,
}: {
  letter: string | number;
  number: string | number;
}) => {
  return (
    <span
      style={{ transitionDelay: `${randomInteger(50, 950)}ms` }}
      className={`l-${number}`}
    >
      {letter}
    </span>
  );
};

export const WelcomeTextMemo = React.memo(WelcomeText);
