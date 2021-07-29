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
        <div className="w-full h-1/3">
            <div className="z-0 hidden text-4xl md:hidden sm:hidden xl:visible lg:visible 2xl:text-9xl bgtext2 lg:text-15xl">{bgtext}</div>
            <h1 className="z-50 text-8xl h1title text-stroke-black xl:pl-20 lg:text-10xl" data-wow-delay="100ms" data-wow-duration="1000ms">
                {titletext}</h1></div>
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

