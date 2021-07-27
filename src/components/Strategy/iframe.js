'use strict';

import React from "react"
import './model.scss'

const iframesrc = `<iframe id='iframe1' scrolling='no' className='xl:h-1000 2xl:h-1000 lg:h-1000 md:h-1000 sm:h-500' src='/demo.html'></iframe>`;

const Iframe = () => {return ( <> <div dangerouslySetInnerHTML={{ __html: iframesrc }}></div></>) };

export default Iframe
