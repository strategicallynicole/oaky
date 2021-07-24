'use strict';

import React from 'react'
import Iframe from "./iframe"
import Title from '../Titles/h2.js'

const Model = () => {
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
                <Iframe />

            </div>

        </section>
)
}

export default Model;

