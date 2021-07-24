'use strict';

import React from "react"
import './model.scss'

const iframesrc = `<iframe id='iframe1' scrolling='no' src='/demo.html'></iframe>`;

const Iframe = () => {return ( <> <div dangerouslySetInnerHTML={{ __html: iframesrc }}></div></>) };

export default Iframe
