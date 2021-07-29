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
import "./schedule.component.scss"
import img from "./alarmed.svg"

export default function Alarmed() {
    return (
        <>
            <img
                src={img}
                alt="Alarmed"
                layout="fullWidth"
                className="overflow-visible jello animated"
            />
        </>
    )
}
