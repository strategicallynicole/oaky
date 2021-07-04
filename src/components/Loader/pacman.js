/** @jsx jsx */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import * as styles from './pacman.module.scss';


const Loader = () => {
return (
    <div id="loading" className={styles.loader}>

        <div className={styles.loader}>
        <div className={styles.circles}>
          <span className={styles.one}></span>
          <span className={styles.two}></span>
          <span className={styles.three}></span>
        </div>
        <div className={styles.pacman}>
          <span className={styles.top}></span>
          <span className={styles.bottom}></span>
          <span className={styles.left}></span>
          <div className={styles.eye}></div>
        </div>
        </div>
      </div>

)
}
export default Loader;
