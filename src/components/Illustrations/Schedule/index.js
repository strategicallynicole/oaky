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
import * as animations from 'animate.css';


export default function Alarmed() {
    return (
        <>
        <StaticImage
            src="./alarmed.svg"
            alt="Alarmed"
            layout="fullWidth"
            className="overflow-visible animate__jackInTheBox animate__animated"
        />
        </>
    )
}
