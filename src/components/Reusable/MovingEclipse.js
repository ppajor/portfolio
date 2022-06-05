import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import * as styles from "../Hero/hero.module.css";

function MovingEclipse({ imgAlt, imgPath, styling, ...props }) {
  return (
    <>
      <MouseParallaxContainer className={styling}>
        <MouseParallaxChild factorX={0.05} factorY={0.07}>
          {props.children}
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </>
  );
}

export default MovingEclipse;
