import Vue from 'vue'
import React, { Component } from "react";
import {Zumly} from 'zumly'
import { VueWrapper } from 'vuera'

import Helmet from 'react-helmet';


function poop () => {
    <>
    <div>
      <VueWrapper
        component={Example}
        message='Hello from Vue!'
      />
    </div>
    </>
}


class Example extends Component {
    componentDidMount() {

        const hello = `
<div class="z-view">
H E L L O <br>
W <span class="zoom-me" data-to="world">O</span> R L D!
</div>
`;

const world = `
<div class="z-view">
<img src="https://raw.githubusercontent.com/zumly/website/gh-pages/images/world.png"/>
</div>
`;


const app = new Zumly({
    mount: '.example',
    initialView: 'hello',
    views: {
      hello,
      world
    }
  })




}


    render() {
      return (
          <>
          <Helmet>
</Helmet>

<div className="example zumly-canvas"></div>
<VueWrapper
        component={app.init()}
        message='Hello from Vue!'
      />


</>}}

export default Example;




