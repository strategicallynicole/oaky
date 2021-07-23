import React from 'react'
import './index.scss'
//Styeld Component does not support @for loops

class Linky extends React.Component {
    render() {
        const { text } = this.props
        return (
            <a className="linky" data-text={text}>{text}</a>
        )
    }
}
export default Linky
