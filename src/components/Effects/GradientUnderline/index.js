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
            <div className={`inline-block mlinkitem ${classes}`}><Link className="inline-block text-xl text-white font-heavy lg:font-heaviest xl:font-heaviest 2xl:font-heaviest md:font-heavy sm:font-heavy lg:text-3xl xl:text-3xl 2xl:text-3xl md:text-xl sm:text-xl montserrat" data-text={text} to={link}>{text}</Link></div>
            </>
        )
    }
}
export default Linky
