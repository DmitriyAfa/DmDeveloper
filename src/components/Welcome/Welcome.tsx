import React, { useEffect, useState } from "react";

// styles
import "./Welcome.scss";
import { WelcomeTextMemo } from "./WelcomeText/WelcomeText";

//Components
import { IntroductionMemo } from "./Introduction/Introduction";

//Images
import img1 from "../../assets/images/Welcome/1.jpg";
import img2 from "../../assets/images/Welcome/2.jpg";
import img3 from "../../assets/images/Welcome/3.jpg";
import img4 from "../../assets/images/Welcome/4.jpg";
import img5 from "../../assets/images/Welcome/5.jpg";
import img6 from "../../assets/images/Welcome/6.jpg";
import img7 from "../../assets/images/Welcome/7.jpg";
import img8 from "../../assets/images/Welcome/8.jpg";

import { ScrollInfoMemo } from "./ScrollInfo/ScrollInfo";

const images = [
  {
    img: img1,
    clName: "introduction_chair",
  },
  {
    img: img2,
  },
  {
    img: img3,
    clName: "introduction_cat",
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img7,
  },
  {
    img: img8,
  },
];

const text = ["D", "m", "D", "e", "v", "e", "l", "o", "p", "e", "r"];

export const Welcome: React.FunctionComponent = React.memo(() => {
  return (
    <div className={"welcome"}>
      <WelcomeTextMemo letters={text} />
      <IntroductionMemo data={images} />
      <ScrollInfoMemo />
    </div>
  );
});
