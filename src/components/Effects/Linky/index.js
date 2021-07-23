import React from 'react'
import './index.scss'
//Styeld Component does not support @for loops

class Linky extends React.Component {
    render() {
        const { text } = this.props
        const { link } = this.props

        return (
            <a className="linky" data-text={text} href={link}>{text}</a>
        )
    }
}
export default Linky
