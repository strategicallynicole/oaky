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
        <div>
            <StaticImage
                src="./femalemeditation.svg"
                alt="Run Away Little Girl"
                layout="fullWidth"
                className="w-full floater meditate meditateimg animate-enter"
            />
            </div>
        </>
    )
}
