import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import * as styles from "../Hero/hero.module.css";

function MovingEclipse({ imgAlt, imgPath, styling }) {
  return (
    <>
      <MouseParallaxContainer className={styling}>
        <MouseParallaxChild factorX={0.05} factorY={0.07}>
          <img className={styles.eclipse} src={imgPath} placeholder="blurred" alt={imgAlt} />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </>
  );
}

export default MovingEclipse;
