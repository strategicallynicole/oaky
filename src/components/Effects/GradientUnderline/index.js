import React from 'react'
import './link.scss'
import { Link } from 'gatsby'
//Styeld Component does not support @for loops

class Linky extends React.Component {
    render() {
        const { text } = this.props
        const { link } = this.props
        const { classes } = this.classes


        return (
            <Link className={`m-linkitem ${classes}`} data-text={text} to={link}>{text}</Link>
        )
    }
}
export default Linky
