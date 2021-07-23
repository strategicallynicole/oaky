const home = {
    template: `<z-view>Hello World!</z-view>`,
}
new Vue({
    el: `#app`,
    components: {
        home,
    },
    mounted() {
        this.$zircle.setView(`home`)
    },
})
