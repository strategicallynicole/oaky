import React from "react"
import ReactDOM from "react-dom"
import './model.scss'

const Iframe = () => {
    setTimeout(function () {
        let cssLink = document.createElement(`link`)
        let iframe = document.getElementsByTagName(`iframe`)[0]
        let iframeDoc = iframe.contentWindow.document
        let otherhead = iframeDoc.getElementsByTagName(`head`)[0]

        cssLink.href = `style.css`
        cssLink.rel = `stylesheet`
        cssLink.type = `text/css`
        otherhead.appendChild(cssLink)
    }, 500)
    // const { iframesrc } = props.iframesrc
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: `<iframe id='iframe1' scrolling='no' className="xl:h-1000 2xl:h-1000 lg:h-1000 md:h-1000 sm:h-500" src='/demo.html' width='2600px' />` }} />
        </>
    )
}

export default Iframe
