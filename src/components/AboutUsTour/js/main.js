(function () {
    "use strict"

    let $ = require(`jquery`)
    let handlebars = require(`handlebars`)
    let impress = require(`impress`)

    handlebars.registerHelper(`step`, function (data) {
        let ret = ``
        for (let key in data) {
            ret = ret + ` data-` + key + `="` + data[key] + `"`
        }
        return ret
    })

    $(function () {
        $.getJSON(`steps/steps.json`, function (data) {
            let steps = data
            let htmltemplate = $(`#step-template`).html()
            let htmltempl = handlebars.compile(htmltemplate)
            steps.forEach(function (step, index) {
                let templ = htmltempl
                console.log(step)
                $.ajax({
                    url: `/steps/` + step.uri,
                    success: function (data) {
                        $(`.steps`).append(templ({ file: data, data: step.data,
                            class: step.class, id: step.id }))
                    },
                    async: false,
                })
            })
            impress().init()
        })
    })
})()