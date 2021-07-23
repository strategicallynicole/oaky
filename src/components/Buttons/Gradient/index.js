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
            <a
                className="rn-button wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
                href={btnlink}
            >
                <button className={styles.button, styles.button1}>
                    <span className={styles.buttonContent}>{btntext}</span>
                </button>
            </a>

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
