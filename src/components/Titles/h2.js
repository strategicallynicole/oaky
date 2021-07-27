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
'use strict'

import React from 'react'
import { array, oneOf, PropTypes } from 'prop-types'

import './h2.scss'

const Title = (props) => {
    const { titletext } = props
    const { bgtext } = props

    return (
        <>
            <div className="section-title mb--40">
                <h2
                    className="text-2xl title lg:text-5xl md:text-3xl"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                >
                    {titletext}
                    <span
                        data-wow-delay="100ms"
                        data-wow-duration="1000ms"
                        className="text-15xl bgtext2 xl:text-19xl 2xl:text-19xl lg:text-19xl md:text-19xl"
                    >
                        {bgtext}
                    </span>
                </h2>
            </div>
        </>
    )
}

Title.propTypes = {
    titletext: PropTypes.string,
}
Title.defaultProps = {
    titletext: ``,
}

export default Title
