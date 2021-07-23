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

const MobileButton = (props) => {
    const { btntext } = props
    const { btnlink } = props
    return (
        <>
            <div className="button-group mt--30">

                <a
                    className="rn-button wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                    href={btnlink}
                >
                    <span>{btntext}</span>
                </a>
            </div>
        </>
    )
}
export default MobileButton
