import React from 'react'
import MyVueComponent from './src/App.vue'
import { VueWrapper } from 'vuera'

export default () => (
    <div>
      <VueWrapper
        component={MyVueComponent}
        message='Hello from Vue!'
      />
    </div>
  )
