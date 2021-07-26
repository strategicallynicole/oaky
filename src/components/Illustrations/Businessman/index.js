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
import './index.scss'
import businessman from './businessman.svg'

export default function BusinessMan() {
    return (
        <>
            <img
                src={businessman}
                alt="Business Man"
                layout="fullWidth"
                className="z-50 overflow-visible businessman"
            />
        </>
    )
}
