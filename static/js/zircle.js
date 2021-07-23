const foo = {
    template: `<z-view>
  OAKwave Strategic Model  <z-spot
    slot="extension"
    :angle="45"
    to-view="context">
    Context
    </z-spot>
  </z-view>`,
}
const context = {
    template: `<z-view>
  Context   <z-spot
    slot="extension"
    :angle="85"
    to-view="vision">
    Vision
    </z-spot><z-spot
    slot="extension"
    :angle="125"
    to-view="mission">
    Mission
    </z-spot></z-view>`,
}
new Vue({
    el: `#app`,
    components: {
        foo,
        context,
    },
    mounted() {
        this.$zircle.config({
            style: {
                theme: `black`,
            },
        })
        this.$zircle.setView(`foo`)
    },
})
