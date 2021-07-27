'use strict';

import React from 'react'
import Iframe from "./iframe"
import Title from '../Titles/h2.js'
import { useRef, useState } from 'react'
import IframeResizer from 'iframe-resizer-react'

const Model = () => {
    const iframeRef = useRef(null)
  const [messageData, setMessageData] = useState()

  const onResized = data => setMessageData(data)

  const onMessage = data => {
    setMessageData(data)
    iframeRef.current.sendMessage('Hello back from the parent page')
  }

return (

        <section className="mx-10 -mb-60 mt-50">
            <div
                className="title wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
            >
                <Title
                    bgtext="Strategy"
                    titletext="Our Strategic Model"
                />
            </div>
            <div
                className="title wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
            >
      <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage="On"
        onResized="resized"
        src="/demo.html"
        className="xl:h-1000 2xl:h-1000 lg:h-1000 md:h-1000 sm:h-500"
        style={{ width: '1px', minWidth: '100%'}}
      />


            </div>

        </section>
)
}

export default Model;

