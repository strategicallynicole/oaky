/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 22/06/2021 - 19:53:19
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/06/2021
 * - Author          :
 * - Modification    :
 **/
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as animations from 'animate.css'
import './pyramid.scss'

export default function Pyramid() {
    return (
        <>
            <StaticImage
                src="./pyramid.svg"
                alt="Pyramid"
                layout="fullWidth"
                className="animate__animated animate__rubberBand animate rubberBand pyramid"
            />
        </>
    )
}
