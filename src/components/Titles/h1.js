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
import { array, oneOf, PropTypes } from 'prop-types'

import "./h1.scss"

const Title = (props) => {
    const { titletext } = props
    const { bgtext } = props

    return (
        <>
            <div className="z-0 text-9xl bgtext lg:text-15xl">{bgtext}</div>
            <h1 className="text-8xl h1title text-stroke-black lg:text-10xl" data-wow-delay="100ms" data-wow-duration="1000ms">
                {titletext}</h1>

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

