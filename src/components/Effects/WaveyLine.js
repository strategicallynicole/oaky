import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout";

const WaveyLine = () => (



<>

</>
)

import React from 'react'
import './index.scss'
//Styeld Component does not support @for loops

class Linky extends React.Component {

    render() {
        const { text } = this.props
        const { link } = this.props

        return(
            <a href={link} className="link link--iocaste">
						<span>{text}</span>
						<svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
							<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
						</svg>
					</a>
        )
    }
}
export default Linky
