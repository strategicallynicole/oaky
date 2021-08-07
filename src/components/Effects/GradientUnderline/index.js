import React from 'react'
import './link.scss'
import { Link } from 'gatsby'
//Styeld Component does not support @for loops

class Linky extends React.Component {
    render() {
        const { text } = this.props
        const { link } = this.props
        const { classes } = this.props


        return (
            <>
            <div className={`inline-block mlinkitem ${classes}`}><Link className="inline-block text-xl text-white  hover:text-white font-heavy lg:font-heavy xl:font-heavy 2xl:font-heavy md:font-heavy sm:font-heavy lg:text-xl xl:text-2xl 2xl:text-2xl md:text-lg sm:text-lg montserrat" data-text={text} to={link}>{text}</Link></div>
            </>
        )
    }
}
export default Linky
