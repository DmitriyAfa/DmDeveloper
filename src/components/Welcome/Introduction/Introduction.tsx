import React, { useLayoutEffect } from "react";

// Helpers
import { introductionHelper } from "../../../services/helpers/introductionHelper";

// styles
import "./Introduction.scss";

const Introduction = ({
  data,
}: {
  data: Array<{ img: string; clName?: string }>;
}) => {
  useLayoutEffect(() => {
    // Собираем список листов
    let introList: any = document.querySelectorAll(".itnroduction__list");

    // Добавляем необходимые классы для динамики
    // checkClasses первый запуск =  4500ms  + 1500ms
    const timeout1 = setTimeout(() => {
      introductionHelper(introList, true);
    }, 1500);
    // Затем продолжаем работать с классами по кругу через 10500
    const interval1 = setInterval(() => {
      introductionHelper(introList);
    }, 6000);

    return () => {
      clearTimeout(timeout1);
      clearInterval(interval1);
    };
  }, []);

  const content = data.map((image, i) => {
    const { img, clName } = image;
    return <MakeListMemo img={img} clName={clName!} key={img} />;
  });

  return <ul className="introduction">{content}</ul>;
};

const MakeList = ({ img, clName }: { img: string; clName: string }) => {
  return (
    <li
      className={`itnroduction__list ${clName ? clName : ""}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    ></li>
  );
};

const MakeListMemo = React.memo(MakeList);

export const IntroductionMemo = React.memo(Introduction);
