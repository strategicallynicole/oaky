import React from "react";
import ReactDOM from "react-dom";
import './model.scss';

const Iframe = () => {
    setTimeout(function() {

    var cssLink = document.createElement("link");
    var iframe = document.getElementsByTagName('iframe')[0],
    iframeDoc = iframe.contentWindow.document;
    var otherhead = iframeDoc.getElementsByTagName("head")[0];

    cssLink.href = "style.css";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    otherhead.appendChild(cssLink);
}, 500);
   // const { iframesrc } = props.iframesrc
    return (
        <>
 <div dangerouslySetInnerHTML={{ __html: "<iframe id='iframe1' scrolling='no' src='/demo.html' width='2600px' />"}} />
 </>
 );
  }

export default Iframe;
