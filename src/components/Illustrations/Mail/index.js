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
 import './mail.scss'

 export default function Mail() {
     return (
         <>
             <StaticImage
                 src="./youvegotmail.svg"
                 alt="Contact"
                 layout="fullWidth"
                 className="floater animate-enter youvegotmail animate__tada tada animated animate_animated"
             />
         </>
     )
 }
