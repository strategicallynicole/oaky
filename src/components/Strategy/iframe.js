import React from "react"
import './model.scss'

const Iframe = () => {
return (
            <div dangerouslySetInnerHTML={{ __html: `<iframe id='iframe1' scrolling='no' src='/demo.html' />` }}></div>
)
};

export default Iframe
