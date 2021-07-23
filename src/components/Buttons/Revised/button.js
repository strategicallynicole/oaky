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
import * as styles from "./button.module.scss"

const Button = (props) => {
    const { btntext } = props
    const { btnlink } = props
    return (
        <>
            <div className="button-group">
                <div
                    className="wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"

                ><a className={styles.thatbutton} href={btnlink}>

                        <span style={styles}>{btntext}</span>
                    </a>
                </div>

            </div>
        </>
    )
}
export default Button
