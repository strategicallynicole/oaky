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
import * as styles from './button.module.scss'
import PropTypes from 'prop-types'

const Button = (props) => {
    const { btntext } = props
    const { btnlink } = props
    return (
        <>
            <div className={styles.boxgroup}>

                <a
                    className={styles.box}
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                    href={btnlink}>
                    <span className="pl-4 pr-4 md:text-xs md:pl-2 md:pr-2 lg:pl-4 lg:pr-4 lg:text-lg xl:text-xl">{btntext}</span>
                </a>
            </div>
        </>
    )
}

Button.propTypes = {
    btntext: PropTypes.string,
    btnlink: PropTypes.string,
}
Button.defaultProps = {
    btntext: ``,
    btnlink: ``,

}
export default Button
