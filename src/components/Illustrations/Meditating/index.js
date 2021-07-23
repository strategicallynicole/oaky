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
import './meditating.component.scss'

export default function RunAwayLittleGirl() {
    return (
        <>
            <StaticImage
                src="./femalemeditation.svg"
                alt="Run Away Little Girl"
                layout="fullWidth"
                className="overflow-visible banner floater meditate meditateimg animate-enter"
            />
        </>
    )
}
