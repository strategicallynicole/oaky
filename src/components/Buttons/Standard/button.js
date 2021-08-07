/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 15:54:23
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import "./button.comp.scss"

function Button(props) {
    const btnlink = props.btnlink
    const btntext = props.btntext
    return (

            <a

                className="inline-block mr-10 text-white rn-button wow fadeInLeft font-heavy lg:font-heavy xl:font-heavy 2xl:font-heaviest md:font-heavy sm:font-heavy lg:text-xl xl:text-2xl 2xl:text-3xl md:text-lg sm:text-lg montserrat"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
                href={btnlink}
            >
                <span>{btntext}</span>
            </a>


    )
}
export default Button
