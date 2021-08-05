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

                className="text-white rn-button wow fadeInLeft montserrat"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
                href={btnlink}
            >
                <span>{btntext}</span>
            </a>


    )
}
export default Button
