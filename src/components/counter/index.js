import React from "react";
import Counter from "./counter";
import * as styles from "./counter.module.scss";
import Title from '../Titles/h2';

export default function CountUp() {
    return (
    <>
    <div className="px-16">
    <Title titletext="By The Numbers" bgtext="Braggadocio"></Title>
<div className={styles.counterholder}>
  <div className={styles.counteruparea}>
      <Counter />
      </div></div></div>
</>
)}
