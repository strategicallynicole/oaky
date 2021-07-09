import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';

import Vue from 'vue';


const foo = {
    template: `<z-view>
    Foo View
    <z-spot
    slot="extension1"
    :angle="45"
    to-view="bar">
    Bar
    </z-spot>
    <z-spot
    slot="extension"
    :angle="45"
    to-view="bar">
    Bar
    </z-spot>
    <z-spot
    slot="extension"
    :angle="45"
    to-view="bar">
    Bar
    </z-spot>
    <z-spot
    slot="extension"
    :angle="95"
    to-view="bar">
    Bar
    </z-spot>
    <z-spot
    slot="extension"
    :angle="45"
    to-view="bar">
    Bar
    </z-spot>
  </z-view>`
  }
  const bar = {
    template: `<z-view>
    Bar View
    </z-view>`
  }
  const play = {
    template: `<z-view>
    Bar View
    </z-view>`
  }
  const bar2 = {
    template: `<z-view>
    Bar View
    </z-view>`
  }
  new Vue({
    el: '#app',
    components: {
      foo,
      bar,
      play
    },
    mounted () {
      this.$zircle.config({
        mode: 'mixed',
        style: {
          theme: 'black'
        }
      })
      this.$zircle.setView('foo')
    }
  })




const Canvas = `<div id="app"><z-canvas :views='$options.components'style="width: 50%; height:100%; border: 2px solid red;"></z-canvas></div>`;

ReactDOM.render(Canvas, document.getElementById('canvas'));

export default Canvas;
