import Vue from 'vue'
import App from './App.vue'
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
Vue.use(zircle);

const mounter =
    new Vue({
      render: h => h(App)
    }).$mount('#app');

export default mounter
