/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/06/2021 - 18:04:26
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/06/2021
 * - Author          :
 * - Modification    :
 **/
 import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { array, oneOf, PropTypes } from 'prop-types'

import * as styles from "./h2.module.scss"

const Title = (props) => {
    const { titletext } = props
    const { bgtext } = props

    return (
        <>


<div className="section-title mb--40">
                            <h2 className="title" data-wow-delay="100ms" data-wow-duration="1000ms"> {titletext}<span data-wow-delay="100ms" data-wow-duration="1000ms" className="bg">{bgtext}</span></h2>
                        </div>


</>
    )
}

Title.propTypes = {
    titletext: PropTypes.string,
}
Title.defaultProps = {
    titletext: '',

}


export default Title


