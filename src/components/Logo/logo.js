/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 02/07/2021 - 15:38:12
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/07/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react'
import { array, oneOf, PropTypes } from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

function LogoComponent(props) {
    const { type } = props
    const { classes } = props
    switch (type) {
        case 'standard':
            return (
                <>
                    <StaticImage
                        src="../../images/logo/darkbgwhitelogo.webp"
                        alt="White Logo"
                        placeholder="blurred"
                         layout="constrained"
                        width={200}                       className={classes}
                    />
                </>
            )
        case 'darkversion':
            return (
                <>
                    <StaticImage
                        src="../../images/logo/lightbglogo.webp"
                        alt="Black Logo"
                        placeholder="blurred"
                         layout="constrained"
                        width={200}
                        className={classes}

                    />
                </>
            )

        case 'stackedwhite':
            return (
                <>
                    <StaticImage
                        src="../../images/logo/stackedonwhitebg.webp"
                        alt="White Logo"
                        placeholder="blurred"
                         layout="constrained"
                        width={100}                      className={classes}
                    />
                </>
            )
        case 'stackeddark':
            return (
                <>
                    <StaticImage
                        src="../../images/logo/verticalondark.webp"
                        alt="BlackLogo"
                        placeholder="blurred"
                         layout="constrained"
                        width={200}
                        className={classes}
                    />
                </>
            )
        case 'symbol':
            return (
                <>
                    <StaticImage
                        src="../../images/logo/symbol.svg"
                        alt="Symbol"
                        placeholder="blurred"
                         layout="constrained"
                        width={200}
                        className={classes}
                    />
                </>
            )
        case 'abbreviation':
            return (
                <>
                    <StaticImage
                        src="../../images/logo/abbreviation.webp"
                        alt="Abbreviation"
                        placeholder="blurred"
                         layout="constrained"
                        width={75}                      className={classes}
                    />
                </>
            )
        default:
            return (
                <>
                    <StaticImage
                        src="../../images/logo/stackedonwhitebg.webp"
                        alt="Placeholder"
                        placeholder="blurred"
                        layout="constrained"
                        width={400}
                        className={classes}
                    />
                </>
            )
    }
}

LogoComponent.propTypes = {
    classes: PropTypes.string,

    type: PropTypes.oneOf([
        'standard',
        'darkversion',
        'stackedwhite',
        'stackeddark',
        'symbol',
        'abbreviation',
        'abbreviationwhite',

    ]),
}
LogoComponent.defaultProps = {
    type: 'standard',
    classes: '',

}

export default LogoComponent
