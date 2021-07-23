import React, { Component } from "react"
import { Helmet } from "react-helmet"

const hello = `<div class="z-view hello">
H E L L O <br>
W <span class='zoom-me o' data-to='world'>O</span> R L D!
</div>
`

const world = {
    async render() {
        return `<div class="z-view world">
<img class="world" src="https://raw.githubusercontent.com/zumly/website/gh-pages/images/world.png"/>
</div>`
    },
}

export default class Model extends Component {
    componentDidMount() {
    // set up and use external package as needed

    }
    render(props) {
        return (
            <React.Fragment>
                <div className="example zumly-canvas"></div>

                <Helmet>
                    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js" type="text/javascript"></script>

                    <script type="text/javascript" src="https://unpkg.com/zumly"></script>
                    <link rel="/css/filler.css" type="stylesheet" />

                </Helmet>
                <section dangerouslySetInnerHTML={{ __html: `<script>const app = new Zumly({mount: ".example", initialView: "hello", views: { hello, world }}); app.init();</script>` }} />
            </React.Fragment>
        )
    }
}
