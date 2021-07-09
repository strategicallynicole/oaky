import React, { Component } from "react"
import { Helmet } from "react-helmet"
class Model extends Component {
  componentDidMount() {
      const code = require('../../static/demo.html');
    // set up and use external package as needed

    const Mount = React.createClass({
        render: function(){
          return (
            <section contentEditable='false' dangerouslySetInnerHTML={{ __html: code }} />
          );
        }
      });
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


export default Model;
