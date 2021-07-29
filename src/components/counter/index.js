import React from "react";
import CounterOne from './counter.js';
import * as styles from "./counter.module.scss";
import Title from '../Titles/h2';

export default function CountUp() {
    return (
    <>
    <div className="mx-16">
    <Title titletext="By The Numbers" bgtext="Braggadocio"></Title>
<div className={styles.counterholder}>
  <div className={styles.counteruparea}>
      <CounterOne />
      </div></div></div>
</>
)}
