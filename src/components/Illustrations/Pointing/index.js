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
import './pointing.component.scss'

export default function Pointing() {
    return (
        <>
        <StaticImage
            src="./pointing.webp"
            alt="Pointing"
            layout="fullWidth"
            className="overflow-visible banner floater meditate meditateimg animate-enter"
        />
        </>
    )
}
