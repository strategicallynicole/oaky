import React, { Component } from "react"
import { Helmet } from "react-helmet"
import code from '../../../static/demo.html'
import render from 'react-dom'
import createReactClass from 'create-react-class'

const Mount = createReactClass({
    render: function (){
        return (
            <>
                <section contentEditable="false" dangerouslySetInnerHTML={{ __html: code }} />
            </>
        )
    },
})

class Model extends Component {
    componentDidMount() {
    // set up and use external package as needed

    }
    render(props, Mount) {
        return (
            <React.Fragment>

                <Helmet>

                    <script type="text/javascript" src="https://unpkg.com/vue"></script>
                    <script type="text/javascript" src="https://unpkg.com/zircle"></script></Helmet>
                <Mount></Mount>
            </React.Fragment>
        )
    }
}

export default Model

