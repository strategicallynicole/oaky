import React from "react"
import ReactDOM from "react-dom"
import './model.scss'

const Iframe = () =>
// const { iframesrc } = props.iframesrc
    (
        <>
            <div dangerouslySetInnerHTML={{ __html: `<iframe id='iframe1' scrolling='no' src='/demo.html' width='2200px' />` }} />
        </>
    )

export default Iframe
