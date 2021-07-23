(function (t){
    function e(e){
        for (var s,o,n = e[0],c = e[1],l = e[2],u = 0,h = []; u < n.length; u++){
            o = n[u],Object.prototype.hasOwnProperty.call(r,o) && r[o] && h.push(r[o][0]),r[o] = 0
        } for (s in c){
            Object.prototype.hasOwnProperty.call(c,s) && (t[s] = c[s])
        }d && d(e); while (h.length){
            h.shift()()
        } return i.push.apply(i,l || []),a()
    } function a(){
        for (var t,e = 0; e < i.length; e++){
            for (var a = i[e],s = !0,n = 1; n < a.length; n++){
                let c = a[n]; 0 !== r[c] && (s = !1)
            }s && (i.splice(e--,1),t = o(o.s = a[0]))
        } return t
    } let s = {}; var r = { app: 0 }; var i = []; function o(e){
        if (s[e]) {
            return s[e].exports
        } let a = s[e] = { i: e,l: !1,exports: {} }; return t[e].call(a.exports,a,a.exports,o),a.l = !0,a.exports
    }o.m = t,o.c = s,o.d = function (t,e,a){
        o.o(t,e) || Object.defineProperty(t,e,{ enumerable: !0,get: a })
    },o.r = function (t){
        `undefined` !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t,Symbol.toStringTag,{ value: `Module` }),Object.defineProperty(t,`__esModule`,{ value: !0 })
    },o.t = function (t,e){
        if (1 & e && (t = o(t)),8 & e) {
            return t
        } if (4 & e && `object` === typeof t && t && t.__esModule) {
            return t
        } let a = Object.create(null); if (o.r(a),Object.defineProperty(a,`default`,{ enumerable: !0,value: t }),2 & e && `string` !== typeof t) {
            for (let s in t){
                o.d(a,s,function (e){
                    return t[e]
                }.bind(null,s))
            }
        } return a
    },o.n = function (t){
        let e = t && t.__esModule ? function (){
            return t.default
        } : function (){
            return t
        }; return o.d(e,`a`,e),e
    },o.o = function (t,e){
        return Object.prototype.hasOwnProperty.call(t,e)
    },o.p = `/`; let n = window.webpackJsonp = window.webpackJsonp || []; let c = n.push.bind(n); n.push = e,n = n.slice(); for (let l = 0; l < n.length; l++){
        e(n[l])
    } var d = c; i.push([0,`chunk-vendors`]),a()
})({ 0: function (t,e,a){
    t.exports = a(`56d7`)
},"034f": function (t,e,a){
    "use strict"; a(`64a9`)
},"3cb5": function (t,e,a){},4678: function (t,e,a){
    let s = { "./af": `2bfb`,"./af.js": `2bfb`,"./ar": `8e73`,"./ar-dz": `a356`,"./ar-dz.js": `a356`,"./ar-kw": `423e`,"./ar-kw.js": `423e`,"./ar-ly": `1cfd`,"./ar-ly.js": `1cfd`,"./ar-ma": `0a84`,"./ar-ma.js": `0a84`,"./ar-sa": `8230`,"./ar-sa.js": `8230`,"./ar-tn": `6d83`,"./ar-tn.js": `6d83`,"./ar.js": `8e73`,"./az": `485c`,"./az.js": `485c`,"./be": `1fc1`,"./be.js": `1fc1`,"./bg": `84aa`,"./bg.js": `84aa`,"./bm": `a7fa`,"./bm.js": `a7fa`,"./bn": `9043`,"./bn-bd": `9686`,"./bn-bd.js": `9686`,"./bn.js": `9043`,"./bo": `d26a`,"./bo.js": `d26a`,"./br": `6887`,"./br.js": `6887`,"./bs": `2554`,"./bs.js": `2554`,"./ca": `d716`,"./ca.js": `d716`,"./cs": `3c0d`,"./cs.js": `3c0d`,"./cv": `03ec`,"./cv.js": `03ec`,"./cy": `9797`,"./cy.js": `9797`,"./da": `0f14`,"./da.js": `0f14`,"./de": `b469`,"./de-at": `b3eb`,"./de-at.js": `b3eb`,"./de-ch": `bb71`,"./de-ch.js": `bb71`,"./de.js": `b469`,"./dv": `598a`,"./dv.js": `598a`,"./el": `8d47`,"./el.js": `8d47`,"./en-au": `0e6b`,"./en-au.js": `0e6b`,"./en-ca": `3886`,"./en-ca.js": `3886`,"./en-gb": `39a6`,"./en-gb.js": `39a6`,"./en-ie": `e1d3`,"./en-ie.js": `e1d3`,"./en-il": `7333`,"./en-il.js": `7333`,"./en-in": `ec2e`,"./en-in.js": `ec2e`,"./en-nz": `6f50`,"./en-nz.js": `6f50`,"./en-sg": `b7e9`,"./en-sg.js": `b7e9`,"./eo": `65db`,"./eo.js": `65db`,"./es": `898b`,"./es-do": `0a3c`,"./es-do.js": `0a3c`,"./es-mx": `b5b7`,"./es-mx.js": `b5b7`,"./es-us": `55c9`,"./es-us.js": `55c9`,"./es.js": `898b`,"./et": `ec18`,"./et.js": `ec18`,"./eu": `0ff2`,"./eu.js": `0ff2`,"./fa": `8df4`,"./fa.js": `8df4`,"./fi": `81e9`,"./fi.js": `81e9`,"./fil": `d69a`,"./fil.js": `d69a`,"./fo": `0721`,"./fo.js": `0721`,"./fr": `9f26`,"./fr-ca": `d9f8`,"./fr-ca.js": `d9f8`,"./fr-ch": `0e49`,"./fr-ch.js": `0e49`,"./fr.js": `9f26`,"./fy": `7118`,"./fy.js": `7118`,"./ga": `5120`,"./ga.js": `5120`,"./gd": `f6b4`,"./gd.js": `f6b4`,"./gl": `8840`,"./gl.js": `8840`,"./gom-deva": `aaf2`,"./gom-deva.js": `aaf2`,"./gom-latn": `0caa`,"./gom-latn.js": `0caa`,"./gu": `e0c5`,"./gu.js": `e0c5`,"./he": `c7aa`,"./he.js": `c7aa`,"./hi": `dc4d`,"./hi.js": `dc4d`,"./hr": `4ba9`,"./hr.js": `4ba9`,"./hu": `5b14`,"./hu.js": `5b14`,"./hy-am": `d6b6`,"./hy-am.js": `d6b6`,"./id": `5038`,"./id.js": `5038`,"./is": `0558`,"./is.js": `0558`,"./it": `6e98`,"./it-ch": `6f12`,"./it-ch.js": `6f12`,"./it.js": `6e98`,"./ja": `079e`,"./ja.js": `079e`,"./jv": `b540`,"./jv.js": `b540`,"./ka": `201b`,"./ka.js": `201b`,"./kk": `6d79`,"./kk.js": `6d79`,"./km": `e81d`,"./km.js": `e81d`,"./kn": `3e92`,"./kn.js": `3e92`,"./ko": `22f8`,"./ko.js": `22f8`,"./ku": `2421`,"./ku.js": `2421`,"./ky": `9609`,"./ky.js": `9609`,"./lb": `440c`,"./lb.js": `440c`,"./lo": `b29d`,"./lo.js": `b29d`,"./lt": `26f9`,"./lt.js": `26f9`,"./lv": `b97c`,"./lv.js": `b97c`,"./me": `293c`,"./me.js": `293c`,"./mi": `688b`,"./mi.js": `688b`,"./mk": `6909`,"./mk.js": `6909`,"./ml": `02fb`,"./ml.js": `02fb`,"./mn": `958b`,"./mn.js": `958b`,"./mr": `39bd`,"./mr.js": `39bd`,"./ms": `ebe4`,"./ms-my": `6403`,"./ms-my.js": `6403`,"./ms.js": `ebe4`,"./mt": `1b45`,"./mt.js": `1b45`,"./my": `8689`,"./my.js": `8689`,"./nb": `6ce3`,"./nb.js": `6ce3`,"./ne": `3a39`,"./ne.js": `3a39`,"./nl": `facd`,"./nl-be": `db29`,"./nl-be.js": `db29`,"./nl.js": `facd`,"./nn": `b84c`,"./nn.js": `b84c`,"./oc-lnc": `167b`,"./oc-lnc.js": `167b`,"./pa-in": `f3ff`,"./pa-in.js": `f3ff`,"./pl": `8d57`,"./pl.js": `8d57`,"./pt": `f260`,"./pt-br": `d2d4`,"./pt-br.js": `d2d4`,"./pt.js": `f260`,"./ro": `972c`,"./ro.js": `972c`,"./ru": `957c`,"./ru.js": `957c`,"./sd": `6784`,"./sd.js": `6784`,"./se": `ffff`,"./se.js": `ffff`,"./si": `eda5`,"./si.js": `eda5`,"./sk": `7be6`,"./sk.js": `7be6`,"./sl": `8155`,"./sl.js": `8155`,"./sq": `c8f3`,"./sq.js": `c8f3`,"./sr": `cf1e`,"./sr-cyrl": `13e9`,"./sr-cyrl.js": `13e9`,"./sr.js": `cf1e`,"./ss": `52bd`,"./ss.js": `52bd`,"./sv": `5fbd`,"./sv.js": `5fbd`,"./sw": `74dc`,"./sw.js": `74dc`,"./ta": `3de5`,"./ta.js": `3de5`,"./te": `5cbb`,"./te.js": `5cbb`,"./tet": `576c`,"./tet.js": `576c`,"./tg": `3b1b`,"./tg.js": `3b1b`,"./th": `10e8`,"./th.js": `10e8`,"./tk": `5aff`,"./tk.js": `5aff`,"./tl-ph": `0f38`,"./tl-ph.js": `0f38`,"./tlh": `cf75`,"./tlh.js": `cf75`,"./tr": `0e81`,"./tr.js": `0e81`,"./tzl": `cf51`,"./tzl.js": `cf51`,"./tzm": `c109`,"./tzm-latn": `b53d`,"./tzm-latn.js": `b53d`,"./tzm.js": `c109`,"./ug-cn": `6117`,"./ug-cn.js": `6117`,"./uk": `ada2`,"./uk.js": `ada2`,"./ur": `5294`,"./ur.js": `5294`,"./uz": `2e8c`,"./uz-latn": `010e`,"./uz-latn.js": `010e`,"./uz.js": `2e8c`,"./vi": `2921`,"./vi.js": `2921`,"./x-pseudo": `fd7e`,"./x-pseudo.js": `fd7e`,"./yo": `7f33`,"./yo.js": `7f33`,"./zh-cn": `5c3a`,"./zh-cn.js": `5c3a`,"./zh-hk": `49ab`,"./zh-hk.js": `49ab`,"./zh-mo": `3a6c`,"./zh-mo.js": `3a6c`,"./zh-tw": `90ea`,"./zh-tw.js": `90ea` }; function r(t){
        let e = i(t); return a(e)
    } function i(t){
        if (!a.o(s,t)){
            let e = new Error(`Cannot find module '` + t + `'`); throw e.code = `MODULE_NOT_FOUND`,e
        } return s[t]
    }r.keys = function (){
        return Object.keys(s)
    },r.resolve = i,t.exports = r,r.id = `4678`
},"56d7": function (t,e,a){
    "use strict"; a.r(e); a(`cadf`),a(`551c`),a(`f751`),a(`097d`); let s = a(`2b0e`); let r = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`div`,{ staticStyle: { "user-select": `none` },attrs: { id: `app` } },[a(`span`,{ staticStyle: { "z-index": `999`,position: `absolute`,top: `10px`,right: `10px`,"font-weight": `500`,"font-size": `13px` } },[`home--0` !== t.$zircle.getCurrentViewName() ? a(`span`,[t._v(`Github trending plus  `)]) : t._e(),t._v(` by `),t._m(0)]),a(`transition`,{ attrs: { name: `head` } },[`home--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `title home` },[t._v(`\n            Github trending `),a(`span`,{ style: `color:` + t.sharedState.colorMe.main },[t._v(`plus`)]),a(`br`),a(`div`,{ staticStyle: { "line-height": `0.9em`,"font-weight": `300`,"font-size": `20px`,color: `#8a8f94` } },[a(`br`),a(`span`,{ staticStyle: { "text-transform": `capitalize` } },[t._v(t._s(t.sharedState.since))]),t._v(` repos & devs for `),a(`span`,{ style: `color:` + t.sharedState.colorMe.main },[t._v(t._s(`` === t.sharedState.language ? `all coding languages` : t.sharedState.language))])])]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`home--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `footer` },[a(`span`,{ staticStyle: { "font-size": `13px` } },[a(`b`,[t._v(`Tip: `)]),t._v(` use filter to change coding language & time period`)])]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`repos--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `title other` },[a(`span`,{ staticStyle: { "text-transform": `capitalize` } },[t._v(t._s(t.sharedState.since))]),t._v(` trending repositories\n            `),a(`br`),a(`div`,{ staticStyle: { "line-height": `0.8em`,"font-weight": `300`,"font-size": `20px`,color: `#8a8f94` } },[a(`br`),t._v(t._s(`` === t.sharedState.language ? `all coding languages` : t.sharedState.language) + ` `)])]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`repos--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `footer other` },[a(`span`,{ staticStyle: { "font-size": `13px` } },[a(`b`,[t._v(`Tip: `)]),t._v(` use filter to change coding language & time period`)])]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`repo--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `footer` },[a(`span`,{ staticStyle: { "font-size": `13px` } },[a(`b`,[t._v(`Tip: `)]),t._v(` use insights to see repo evolution on chart`)])]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`devs--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `title other` },[a(`span`,{ staticStyle: { "text-transform": `capitalize` } },[t._v(t._s(t.sharedState.since))]),t._v(` trending developers\n            `),a(`br`),a(`div`,{ staticStyle: { "line-height": `0.8em`,"font-weight": `300`,"font-size": `20px`,color: `#8a8f94` } },[a(`br`),t._v(t._s(`` === t.sharedState.language ? `all coding languages` : t.sharedState.language) + ` `)])]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`devs--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `footer other` },[a(`span`,{ staticStyle: { "font-size": `13px` } },[a(`b`,[t._v(`Tip: `)]),t._v(` use filter to change coding language & time period`)])]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`languages--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `title other` },[t._v(`\n            Coding languages & time period\n        `)]) : t._e()]),a(`transition`,{ attrs: { name: `head` } },[`languages--0` === t.$zircle.getCurrentViewName() ? a(`div`,{ staticClass: `footer` },[t.sharedState.isSearch ? t._e() : a(`span`,{ staticStyle: { "font-size": `13px` } },[a(`b`,[t._v(`Tip: `)]),a(`b`,[t._v(`+ languages`)]),t._v(` to find other languages`)]),t.sharedState.isSearch ? a(`span`,{ staticStyle: { "font-size": `13px` } },[a(`b`,[t._v(`Tip: `)]),t._v(` Only coding languages with trending results are shown. Your query may have results trying other time period.`)]) : t._e()]) : t._e()]),a(`z-canvas`,{ attrs: { views: t.$options.components },nativeOn: { wheel: function (e){
            return t.backward.apply(null,arguments)
        },touchstart: function (e){
            return t.startPos.apply(null,arguments)
        },touchend: function (e){
            return t.endPos.apply(null,arguments)
        } } })],1)
    }; let i = [function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`a`,{ attrs: { href: `https://github.com/zircleui/zircleui`,target: `_blank` } },[a(`img`,{ staticStyle: { "vertical-align": `middle` },attrs: { src: `zircle.png`,width: `13px` } }),t._v(`  zircle`)])
    }]; let o = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`z-view`,{ staticClass: `is-home`,staticStyle: { color: `white`,"background-color": `#454545`,"border-color": `var(--shade-color)`,"border-width": `7px` },attrs: { size: `xl` } },[a(`i`,{ staticClass: `fab fa-github fa-4x` }),a(`div`,{ attrs: { slot: `extension` },slot: `extension` },[a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `s`,distance: 150,angle: -65 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `s`,distance: 160,angle: -130 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `s`,distance: 150,angle: 140 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `15px`,"border-color": `white` },attrs: { size: `s`,distance: 130,angle: 75 } }),a(`z-spot`,{ staticClass: `asteroids stay`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `6px`,"border-color": `white` },attrs: { size: `xs`,distance: 160,angle: -47 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `7px`,"border-color": `white` },attrs: { size: `xs`,distance: 185,angle: 160 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `9px`,"border-color": `white` },attrs: { size: `s`,distance: 130,angle: -110 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `s`,distance: 180,angle: 94 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `xs`,distance: 148,angle: 0 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `xs`,distance: 160,angle: 110 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `1px`,"border-color": `white` },attrs: { size: `xxs`,distance: 148,angle: 43 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `1px`,"border-color": `white` },attrs: { size: `xxs`,distance: 122,angle: 113 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `1px`,"border-color": `white` },attrs: { size: `xxs`,distance: 132,angle: 210 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `1px`,"border-color": `white` },attrs: { size: `xxs`,distance: 132,angle: -82 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `xs`,distance: 190,angle: -160 } }),a(`z-spot`,{ staticClass: `asteroids`,staticStyle: { "background-color": `var(--shade-color)`,"border-width": `3px`,"border-color": `white` },attrs: { size: `xs`,distance: 190,angle: t.angle + 130 } }),a(`z-spot`,{ ref: `repos`,staticClass: `meteors`,staticStyle: { color: `white`,"font-size": `40px`,"border-color": `white`,"border-width": `3px`,"background-color": `var(--shade-color)` },attrs: { distance: 170,angle: -30,label: `top repos` },nativeOn: { mouseup: function (e){
            return t.renderMe(`repos`)
        },wheel: function (e){
            return e.preventDefault(),t.forward(e,`repos`)
        } } },[t._v(`\n            R\n        `)]),a(`z-spot`,{ ref: `devs`,staticClass: `meteors`,staticStyle: { color: `white`,"font-size": `40px`,"border-color": `white`,"border-width": `3px`,"background-color": `var(--shade-color)` },attrs: { distance: 160,angle: 20,label: `top devs` },nativeOn: { mouseup: function (e){
            return t.renderMe(`devs`)
        },wheel: function (e){
            return t.forward(e,`devs`)
        } } },[t._v(`\n            D\n        `)]),a(`z-spot`,{ ref: `about`,staticClass: `meteors`,staticStyle: { color: `white`,"font-size": `25px`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { button: ``,distance: 160,angle: -180,size: `s`,label: `about` },nativeOn: { mouseup: function (e){
            return t.renderMe(`about`)
        },wheel: function (e){
            return t.forward(e,`about`)
        } } },[a(`i`,{ staticClass: `fas fa-question` })]),a(`z-spot`,{ ref: `languages`,staticClass: `meteors`,staticStyle: { color: `white`,"border-color": `white`,"background-color": `var(--shade-color)` },attrs: { distance: 180,size: `s`,angle: 55,label: `filter` },nativeOn: { mouseup: function (e){
            return t.renderMe(`languages`)
        },wheel: function (e){
            return t.forward(e,`languages`)
        } } },[a(`i`,{ staticClass: `fas fa-ellipsis-v` })])],1)])
    }; let n = []; let c = new s.default({ data: { language: ``,since: `daily`,refresh: !1,initRepos: !1,colorMe: {},axiosError: ``,clearResults: !1,languageTracked: !1,isSearch: !1 } }); let l = c; let d = a(`5a72`); let u = a.n(d); let h = { data: function (){
        return { time: !1,collection: [],sharedState: l.$data,angle: 0,dessvs: [],devs1: [],angle1: 0,ani: {},hideThis: ``,colors: [{ main: `#5484f8`,sec: `hsl(222, 92%, 25%)` }] }
    },computed: { home: function (){
        return this.$zircle.getCurrentViewName()
    } },watch: { home: function (){
        `home--0` === this.home && this.callRandomColors()
    } },methods: { hideMe: function (t){
        this.hideThis = t,this.$refs[t].$el.style.opacity = 0
    },forward: function (t,e){
        t.deltaY < 0 && `home--0` === this.$zircle.getCurrentViewName() && this.renderMe(e)
    },renderMe: function (t){
        this.sharedState.initRepos = !0,this.$zircle.toView({ to: t,fromSpot: this.$refs[t] })
    },toLink: function (t){
        return window.open(t,`_blank`)
    },callRandomColors: function (){
        let t = this.colors[Math.floor(Math.random() * this.colors.length)]; return this.sharedState.colorMe = t,document.querySelector(`.theme-github`).style.setProperty(`--accent-color`,t.sec),document.querySelector(`.theme-github`).style.setProperty(`--shade-color`,t.main),t
    },asteroids: function (){
        let t = this; let e = { degree: 0 }; u()({ targets: e,degree: 360,duration: 3e5,easing: `linear`,update: function (){
            t.angle = e.degree
        } })
    },meteors: function (){
        let t = this; let e = { degree: 0 }; t.ani = u()({ targets: e,degree: 360,duration: 12e4,elasticity: 100,easing: `linear`,update: function (){
            t.angle1 = e.degree
        } })
    } },mounted: function (){
        let t = this; setTimeout((function (){
            t.callRandomColors()
        }),1500)
    } }; let g = h; let f = (a(`7df3`),a(`2877`)); let p = Object(f.a)(g,o,n,!1,null,null,null); let b = p.exports; let v = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`z-view`,{ staticClass: `is-repos`,style: (t.$zircle.getCurrentViewName(),`border-width: 3px; background-color: transparent`) },[t._v(`\n    ` + t._s(t.msg) + `\n    `),`` !== t.sharedState.axiosError ? a(`div`,[t._v(`\n        Oops!! ` + t._s(t.sharedState.axiosError) + `\n    `)]) : t._e(),0 === t.collection.length ? a(`div`,[a(`i`,{ staticClass: `fas fa-spinner fa-spin fa-2x` })]) : t._e(),t.trending ? a(`div`,{ attrs: { slot: `extension` },slot: `extension` },[t.day || !t.trending ? a(`z-spot`,{ staticClass: `meteors`,staticStyle: { color: `white`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { distance: 120,size: `s`,angle: 45,"to-view": `languages` } },[a(`i`,{ staticClass: `fas fa-ellipsis-v` })]) : t._e(),t.$zircle.getCurrentPageIndex() <= 3 && t.collection.length > 0 ? a(`z-spot`,{ staticClass: `filter buttons`,staticStyle: { color: `white`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { button: ``,distance: 115,size: `xs`,angle: 0 },nativeOn: { mouseup: function (e){
            t.$zircle.setCurrentPageIndex(t.$zircle.getCurrentPageIndex() + 1)
        } } },[a(`i`,{ staticClass: `fas fa-arrow-right` })]) : t._e(),t.$zircle.getCurrentPageIndex() >= 1 ? a(`z-spot`,{ staticClass: `filter buttons`,staticStyle: { color: `white`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { button: ``,distance: 115,size: `xs`,angle: 180 },nativeOn: { mouseup: function (e){
            t.$zircle.setCurrentPageIndex(t.$zircle.getCurrentPageIndex() - 1)
        } } },[a(`i`,{ staticClass: `fas fa-arrow-left` })]) : t._e(),t.collection.length > 0 ? a(`div`,[a(`z-list`,{ staticClass: `stay`,attrs: { items: t.collection,"per-page": 5 },nativeOn: { touchstart: function (e){
            return t.startPos.apply(null,arguments)
        },touchend: function (e){
            return t.endPos.apply(null,arguments)
        } },scopedSlots: t._u([{ key: `default`,fn: function (e){
            return a(`div`,{ on: { mouseenter: function (a){
                return t.showMe(e.index)
            } } },[a(`z-spot`,{ ref: `res-` + e.position,staticClass: `test`,staticStyle: { "border-color": `var(--shade-color)`,"border-width": `3px`,"background-color": `white` },style: `repos--0` === t.$zircle.getCurrentViewName() && t.hideThis === `res-` + e.position ? `opacity: 1` : ``,attrs: { "image-path": e.avatar,distance: 61,props: e,size: `m`,index: e.position,label: t.show === e.position ? e.name : t.trimLabels(e.position,e.name) },nativeOn: { click: function (a){
                return t.hideMe(`res-` + e.position)
            },mouseup: function (a){
                return t.sendMe(`res-` + e.position)
            } } },[a(`div`,{ staticClass: `extra`,attrs: { slot: `extension` },slot: `extension` },[a(`z-spot`,{ staticClass: `pos numeral`,attrs: { size: `xs`,index: e.position,distance: 100,angle: -135 } },[a(`span`,[t._v(t._s(t.$zircle.getComponentWidth(`xxl`) > 260 ? t.getOrdinal(e.position + 1) : e.position + 1))])]),e.diff > 0 && -1 !== e.prevPos ? a(`z-spot`,{ staticStyle: { "border-color": `white`,"background-color": `#54a74c` },attrs: { size: `xs`,angle: 45,distance: 100 } },[a(`i`,{ staticClass: `fas fa-arrow-up`,staticStyle: { color: `white` } })]) : t._e(),e.diff > 0 && -1 === e.prevPos ? a(`z-spot`,{ staticStyle: { "font-weight": `700`,"font-size": `10px`,color: `hsl(47, 100%, 27%)`,"border-color": `white`,"background-color": `#f2bd00` },attrs: { size: `xs`,angle: 45,distance: 100 } },[t._v(`\n                                new\n                            `)]) : t._e(),e.diff < 0 ? a(`z-spot`,{ staticStyle: { "border-color": `white`,"background-color": `#da482f` },attrs: { size: `xs`,angle: 45,distance: 100 } },[a(`i`,{ staticClass: `fas fa-arrow-down`,staticStyle: { color: `white` } })]) : t._e()],1)])],1)
        } }],null,!1,671806424) })],1) : t._e()],1) : t._e()])
    }; let m = []; let w = (a(`a481`),a(`7f7f`),a(`7514`),a(`bc3a`)); let y = a.n(w); let S = { data: function (){
        return { time: !1,collection: [],show: 99,sharedState: l.$data,showResults: !1,msg: ``,startX: {},progress: 0,day: !1,day0: !1,day1: !1,lang: !1,trending: !0,prevPage: 0,hideThis: ``,vlang: l.$data.language,vsince: l.$data.since,colors: [`#da482f`,`#54a74c`,`#f2bd00`,`#5484f8`] }
    },computed: { check: function (){
        return this.vlang !== this.sharedState.language || this.vsince !== this.sharedState.since
    },viewn: function (){
        return this.$zircle.getCurrentViewName()
    },page: function (){
        return this.$zircle.getCurrentPageIndex()
    },line1: function (){
        if (this.$refs.line1){
            let t = this.$refs.line1.$el.getBoundingClientRect(); return console.log(t),t
        } return { left: -80,top: 80 }
    } },watch: { page: function (){
        this.prevPage < this.page && this.animee(),this.prevPage = this.page
    },viewn: function (){
        `repos--0` === this.$zircle.getCurrentViewName() && this.sharedState.clearResults && (this.collection = [],this.getRepos(),this.sharedState.clearResults = !1)
    } },methods: { getOrdinal: function (t){
        let e = [`th`,`st`,`nd`,`rd`]; let a = t % 100; return t + (e[(a - 20) % 10] || e[a] || e[0])
    },trimLabels: function (t,e){
        return 2 === t || 3 === t ? e.length > 9 ? e.substring(0,5) + `…` : e : e.length > 11 ? e.substring(0,7) + `…` : e
    },hideMe: function (t){
        this.hideThis = t,this.$refs[t].$el.style.opacity = 0
    },sendMe: function (t){
        this.$zircle.toView({ to: `repo`,fromSpot: this.$refs[t],params: { data: this.$refs[t].$attrs.props } })
    },startPos: function (t){
        1 === t.touches.length && `repos--0` === this.$zircle.getCurrentViewName() ? this.startX = t.touches.item(0).clientX : this.startX = null
    },endPos: function (t){
        let e = 60; if (this.startX && `repos--0` === this.$zircle.getCurrentViewName()){
            let a = t.changedTouches.item(0).clientX; a < this.startX - e && this.$zircle.getCurrentPageIndex() <= 3 && this.$zircle.setCurrentPageIndex(this.$zircle.getCurrentPageIndex() + 1),a > this.startX + e && this.$zircle.getCurrentPageIndex() >= 1 && this.$zircle.setCurrentPageIndex(this.$zircle.getCurrentPageIndex() - 1)
        }
    },animee: function (){
        let t = document.querySelectorAll(`.test`); let e = document.querySelectorAll(`.z-pagination`); let a = u()({ targets: e,opacity: [0,1],duration: function (t,e){
            return 500 + 200 * e
        } }); u()({ targets: t,opacity: [0,1],duration: function (t,e){
            return 2e3 + 200 * e
        },delay: function (t,e){
            return 120 * e
        },complete: function (){
            return a
        } })
    },init: function (){
        this.animee(),this.day = !0
    },showMe: function (t){
        this.show === t ? this.show = 99 : this.show = t
    },getRepos: function (){
        let t = this; let e = `8d2zo`; switch (this.sharedState.language){
        case ``:e = `8d2zo`,this.sharedState.languageTracked = !1; break; case `vue`:e = `9dv7w`,this.sharedState.languageTracked = !1; break; case `html`:e = `oxbng`,this.sharedState.languageTracked = !1; break; case `java`:e = `1eiynw`,this.sharedState.languageTracked = !1; break; case `javascript`:e = `j14rg`,this.sharedState.languageTracked = !1; break; case `php`:e = `jmkd8`,this.sharedState.languageTracked = !1; break; case `python`:e = `181c64`,this.sharedState.languageTracked = !1; break; case `ruby`:e = `139vbw`,this.sharedState.languageTracked = !1; break; case `c++`:e = `1frz18`,this.sharedState.languageTracked = !1; break; case `typescript`:e = `sk2fw`,this.sharedState.languageTracked = !1; break; case `rust`:e = `1b0i70`,this.sharedState.languageTracked = !1; break; case `go`:e = `zrmks`,this.sharedState.languageTracked = !1; break; case `swift`:e = `6ldxo`,this.sharedState.languageTracked = !1; break; case `css`:e = `v05qk`,this.sharedState.languageTracked = !1; break; case `shell`:e = `1e213g`,this.sharedState.languageTracked = !1; break; default:this.sharedState.languageTracked = !0
        }y.a.all([y.a.get(`https://zircle-github-trending-ranking.now.sh/` + e),y.a.get(`https://github-trending-api.now.sh/repositories?since=` + this.sharedState.since + `&language=` + encodeURIComponent(this.sharedState.language)),y.a.get(`https://github-trending-api.now.sh/developers?since=` + this.sharedState.since + `&language=` + encodeURIComponent(this.sharedState.language))]).then(y.a.spread((function (e,a,s){
            t.sharedState.axiosError = ``,t.collection = []; let r = a.data.map((function (a,r){
                let i = e.data[e.data.length - 1].timestamp; let o = e.data[e.data.length - 1][t.sharedState.since].repos.find((function (t){
                    return t.name === a.name
                })); void 0 !== o && !0 !== t.sharedState.languageTracked || (o = { prevPos: -1,diff: 0,stay: 3 }); let n = s.data.find((function (t){
                    return t.username === a.author
                })); return void 0 === n ? (n = {},a.builtBy.length > 0 ? n.avatar = a.builtBy[0].avatar : n.avatar = `https://avatars1.githubusercontent.com/u/29514947?s=40&v=4`,n.avatar = n.avatar.replace(/s=40/gi,`s=200`)) : n.avatar = n.avatar.replace(/s=96/gi,`s=200`),{ updated: i,position: r,author: a.author,name: a.name,url: a.url,description: a.description,language: a.language,stars: a.stars,forks: a.forks,avatar: n.avatar,currentPeriodStars: a.currentPeriodStars,prevPos: o.prevPos,diff: o.diff,stay: o.stay }
            })); r.length > 0 ? (t.collection = r,t.init()) : t.trending = !1
        }))).catch((function (e){
            console.log(e),t.sharedState.axiosError = e.message
        }))
    } },mounted: function (){
        this.sharedState.axiosError = ``,0 === this.collection.length && this.getRepos()
    } }; let z = S; let k = (a(`6a68`),Object(f.a)(z,v,m,!1,null,null,null)); let x = k.exports; let _ = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`z-view`,{ staticClass: `is-repos`,style: (t.$zircle.getCurrentViewName(),`border-width: 3px; background-color: white !important`) },[t._v(`\n    ` + t._s(t.msg) + `\n    `),`` !== t.sharedState.axiosError ? a(`div`,[t._v(`\n        Oops!! ` + t._s(t.sharedState.axiosError) + `\n    `)]) : t._e(),0 === t.collection.length && `` === t.sharedState.axiosError ? a(`div`,[a(`i`,{ staticClass: `fas fa-spinner fa-spin fa-2x` })]) : t._e(),t.trending ? a(`div`,{ attrs: { slot: `extension` },slot: `extension` },[t.day || !t.trending ? a(`z-spot`,{ staticClass: `meteors`,staticStyle: { color: `white`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { distance: 120,size: `s`,angle: 45,"to-view": `languages` } },[a(`i`,{ staticClass: `fas fa-ellipsis-v` })]) : t._e(),t.$zircle.getCurrentPageIndex() <= 3 && t.collection.length > 0 ? a(`z-spot`,{ staticClass: `filter buttons`,staticStyle: { color: `white`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { button: ``,distance: 115,size: `xs`,angle: 0 },nativeOn: { mouseup: function (e){
            t.$zircle.setCurrentPageIndex(t.$zircle.getCurrentPageIndex() + 1)
        } } },[a(`i`,{ staticClass: `fas fa-arrow-right` })]) : t._e(),t.$zircle.getCurrentPageIndex() >= 1 ? a(`z-spot`,{ staticClass: `filter buttons`,staticStyle: { color: `white`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { button: ``,distance: 115,size: `xs`,angle: 180 },nativeOn: { mouseup: function (e){
            t.$zircle.setCurrentPageIndex(t.$zircle.getCurrentPageIndex() - 1)
        } } },[a(`i`,{ staticClass: `fas fa-arrow-left` })]) : t._e(),t.collection.length > 0 ? a(`div`,[a(`z-list`,{ staticClass: `stay`,attrs: { items: t.collection,"per-page": 5 },nativeOn: { touchstart: function (e){
            return t.startPos.apply(null,arguments)
        },touchend: function (e){
            return t.endPos.apply(null,arguments)
        } },scopedSlots: t._u([{ key: `default`,fn: function (e){
            return a(`div`,{ on: { mouseenter: function (a){
                return t.showMe(e.position)
            } } },[a(`z-spot`,{ ref: `dev-` + e.position,staticClass: `test`,staticStyle: { "border-color": `var(--shade-color)`,"border-width": `3px`,"background-color": `white` },style: `devs--0` === t.$zircle.getCurrentViewName() && t.hideThis === `dev-` + e.position ? `opacity: 1` : ``,attrs: { "image-path": e.avatar,distance: 61,props: e,size: `m`,index: e.position,label: t.show === e.position ? e.name : t.trimLabels(e.position,e.name) },nativeOn: { click: function (a){
                return t.hideMe(`dev-` + e.position)
            },mouseup: function (a){
                return t.sendMe(`dev-` + e.position)
            } } },[a(`div`,{ staticClass: `extra`,attrs: { slot: `extension` },slot: `extension` },[a(`z-spot`,{ staticClass: `pos numeral`,attrs: { size: `xs`,index: e.position,distance: 100,angle: -135 } },[a(`span`,[t._v(t._s(t.$zircle.getComponentWidth(`xxl`) > 260 ? t.getOrdinal(e.position + 1) : e.position + 1))])]),e.diff > 0 && -1 !== e.prevPos ? a(`z-spot`,{ staticStyle: { "border-color": `white`,"background-color": `#54a74c` },attrs: { size: `xs`,angle: 0,distance: 100 } },[a(`i`,{ staticClass: `fas fa-arrow-up`,staticStyle: { color: `white` } })]) : t._e(),e.diff > 0 && -1 === e.prevPos ? a(`z-spot`,{ staticStyle: { "font-weight": `700`,"font-size": `10px`,color: `hsl(47, 100%, 27%)`,"border-color": `white`,"background-color": `#f2bd00` },attrs: { size: `xs`,angle: 0,distance: 100 } },[t._v(`\n                                new\n                            `)]) : t._e(),e.diff < 0 ? a(`z-spot`,{ staticStyle: { "border-color": `white`,"background-color": `#da482f` },attrs: { size: `xs`,angle: 0,distance: 100 } },[a(`i`,{ staticClass: `fas fa-arrow-down`,staticStyle: { color: `white` } })]) : t._e()],1)])],1)
        } }],null,!1,3714452049) })],1) : t._e()],1) : t._e()])
    }; let C = []; let j = { data: function (){
        return { time: !1,collection: [],show: 99,sharedState: l.$data,showResults: !1,msg: ``,startX: {},progress: 0,day: !1,day0: !1,day1: !1,lang: !1,trending: !0,hideThis: ``,prevPage: 0,vlang: l.$data.language,vsince: l.$data.since,colors: [`#da482f`,`#54a74c`,`#f2bd00`,`#5484f8`] }
    },computed: { check: function (){
        return this.vlang !== this.sharedState.language || this.vsince !== this.sharedState.since
    },viewn: function (){
        return this.$zircle.getCurrentViewName()
    },page: function (){
        return this.$zircle.getCurrentPageIndex()
    },line1: function (){
        if (this.$refs.line1){
            let t = this.$refs.line1.$el.getBoundingClientRect(); return console.log(t),t
        } return { left: -80,top: 80 }
    } },watch: { page: function (){
        this.prevPage < this.page && this.animee(),this.prevPage = this.page
    },viewn: function (){
        `devs--0` === this.$zircle.getCurrentViewName() && this.sharedState.clearResults && (this.collection = [],this.getDevs(),this.sharedState.clearResults = !1)
    } },methods: { getOrdinal: function (t){
        let e = [`th`,`st`,`nd`,`rd`]; let a = t % 100; return t + (e[(a - 20) % 10] || e[a] || e[0])
    },trimLabels: function (t,e){
        return 2 === t || 3 === t ? e.length > 7 ? e.substring(0,4) + `…` : e : e.length > 11 ? e.substring(0,7) + `…` : e
    },hideMe: function (t){
        this.hideThis = t,this.$refs[t].$el.style.opacity = 0
    },sendMe: function (t){
        this.$zircle.toView({ to: `dev`,fromSpot: this.$refs[t],params: { data: this.$refs[t].$attrs.props } })
    },startPos: function (t){
        1 === t.touches.length ? this.startX = t.touches.item(0).clientX : this.startX = null
    },endPos: function (t){
        let e = 60; if (this.startX){
            let a = t.changedTouches.item(0).clientX; a < this.startX - e && this.$zircle.getCurrentPageIndex() <= 3 && this.$zircle.setCurrentPageIndex(this.$zircle.getCurrentPageIndex() + 1),a > this.startX + e && this.$zircle.getCurrentPageIndex() >= 1 && this.$zircle.setCurrentPageIndex(this.$zircle.getCurrentPageIndex() - 1)
        }
    },animee: function (){
        let t = document.querySelectorAll(`.test`); let e = document.querySelectorAll(`.z-pagination`); let a = u()({ targets: e,opacity: [0,1],duration: function (t,e){
            return 500 + 200 * e
        } }); u()({ targets: t,opacity: [0,1],duration: function (t,e){
            return 2e3 + 200 * e
        },delay: function (t,e){
            return 120 * e
        },complete: function (){
            return a
        } })
    },init: function (){
        this.animee(),this.day = !0
    },showMe: function (t){
        this.show === t ? this.show = 99 : this.show = t
    },getDevs: function (){
        let t = this; let e = `8d2zo`; switch (this.sharedState.language){
        case ``:e = `8d2zo`,this.sharedState.languageTracked = !1; break; case `vue`:e = `9dv7w`,this.sharedState.languageTracked = !1; break; case `html`:e = `oxbng`,this.sharedState.languageTracked = !1; break; case `java`:e = `1eiynw`,this.sharedState.languageTracked = !1; break; case `javascript`:e = `j14rg`,this.sharedState.languageTracked = !1; break; case `php`:e = `jmkd8`,this.sharedState.languageTracked = !1; break; case `python`:e = `181c64`,this.sharedState.languageTracked = !1; break; case `ruby`:e = `139vbw`,this.sharedState.languageTracked = !1; break; case `c++`:e = `1frz18`,this.sharedState.languageTracked = !1; break; case `typescript`:e = `sk2fw`,this.sharedState.languageTracked = !1; break; case `rust`:e = `1b0i70`,this.sharedState.languageTracked = !1; break; case `go`:e = `zrmks`,this.sharedState.languageTracked = !1; break; case `swift`:e = `6ldxo`,this.sharedState.languageTracked = !1; break; case `css`:e = `v05qk`,this.sharedState.languageTracked = !1; break; case `shell`:e = `1e213g`,this.sharedState.languageTracked = !1; break; default:this.sharedState.languageTracked = !0
        }y.a.all([y.a.get(`https://zircle-github-trending-ranking.now.sh/` + e),y.a.get(`https://github-trending-api.now.sh/developers?since=` + this.sharedState.since + `&language=` + encodeURIComponent(this.sharedState.language))]).then(y.a.spread((function (e,a){
            t.sharedState.axiosError = ``,t.collection = []; let s = a.data.map((function (a,s){
                let r = e.data[e.data.length - 1].timestamp; let i = e.data[e.data.length - 1][t.sharedState.since].devs.find((function (t){
                    return t.username === a.username
                })); return void 0 !== i && !0 !== t.sharedState.languageTracked || (i = { prevPos: -1,diff: 0,stay: 3 }),a.avatar = a.avatar.replace(/s=96/gi,`s=200`),{ updated: r,position: s,username: a.username,name: a.username,url: a.url,avatar: a.avatar,prevPos: i.prevPos,diff: i.diff,stay: i.stay }
            })); s.length > 0 ? (t.collection = s,t.init()) : (t.day = !0,t.sharedState.axiosError = `No trending developers for ` + t.sharedState.language + `. Try another language/time`)
        }))).catch((function (e){
            console.log(e),t.sharedState.axiosError = e.message
        }))
    } },mounted: function (){
        this.sharedState.axiosError = ``,0 === this.collection.length && this.getDevs()
    } }; let $ = j; let P = Object(f.a)($,_,C,!1,null,null,null); let T = P.exports; let M = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`z-view`,{ staticStyle: { "border-width": `3px`,"background-color": `white` } },[`` !== t.sharedState.axiosError ? a(`div`,[t._v(`\n        Oops!! ` + t._s(t.sharedState.axiosError) + `\n    `)]) : t._e(),t.sharedState.isSearch ? a(`div`,[a(`input`,{ attrs: { type: `text`,placeholder: `type a language ...` },domProps: { value: t.language },on: { input: function (e){
            return t.searchLanguages(e.target.value)
        } } })]) : t._e(),a(`div`,{ attrs: { slot: `extension` },slot: `extension` },[`` !== t.query && t.sharedState.isSearch && `languages--0` === t.$zircle.getCurrentViewName() ? a(`div`,t._l(t.wt,(function (e,s){
            return a(`z-spot`,{ key: `lang` + s,staticClass: `test1 butt`,staticStyle: { border: `none` },style: t.sharedState.language === e.urlParam ? `background-color:` + t.sharedState.colorMe.main : `background-color: transparent; border: 1px solid ` + t.sharedState.colorMe.main,attrs: { button: ``,distance: 60,angle: 360 / t.wt.length * s - 90,size: `xs`,label: e.name },nativeOn: { click: function (a){
                t.sharedState.language = e.urlParam
            } } })
        })),1) : t._e(),0 === t.wt.length && t.sharedState.isSearch && t.searchActive ? a(`div`,[a(`z-spot`,{ staticClass: `test1 butt`,staticStyle: { border: `none`,"background-color": `transparent` },attrs: { button: ``,distance: 60,angle: -90,size: `xs`,label: `😕 try another term` } })],1) : t._e(),a(`z-spot`,{ staticClass: `buttons`,staticStyle: { color: `white`,"border-color": `white`,"border-width": `0px`,"background-color": `var(--shade-color)` },attrs: { button: ``,size: `s`,angle: 45,label: t.sharedState.isSearch ? `go back` : `+ languages`,distance: 130 },nativeOn: { click: function (e){
            return t.getLanguages()
        },mouseup: function (e){
            t.sharedState.isSearch = !t.sharedState.isSearch
        } } },[t.sharedState.isSearch ? t._e() : a(`i`,{ staticClass: `fas fa-search` }),t.sharedState.isSearch ? a(`i`,{ staticClass: `fas fa-undo` }) : t._e()]),t.popular.length && !t.sharedState.isSearch && `languages--0` === t.$zircle.getCurrentViewName() ? a(`div`,[a(`z-list`,{ attrs: { items: t.popular,"per-page": 8 },scopedSlots: t._u([{ key: `default`,fn: function (e){
            return a(`z-spot`,{ staticClass: `test1 butt`,staticStyle: { border: `none` },style: t.sharedState.language === e.urlParam ? `background-color:` + t.sharedState.colorMe.main : `background-color: transparent; border: 1px solid ` + t.sharedState.colorMe.main,attrs: { button: ``,size: `xs`,distance: 60,index: e.index,label: e.name },nativeOn: { click: function (a){
                t.sharedState.language = e.urlParam
            } } })
        } }],null,!1,3409698120) })],1) : t._e(),a(`z-spot`,{ staticClass: `buttons`,staticStyle: { border: `none`,color: `white` },style: `daily` === t.sharedState.since ? `background-color: var(--shade-color)` : `background-color: var(--accent-color)`,attrs: { button: ``,size: `xs`,distance: 125,angle: -45,label: `daily` },nativeOn: { click: function (e){
            return t.changeTime(`daily`)
        } } },[t._v(`T`)]),a(`z-spot`,{ staticClass: `buttons`,staticStyle: { border: `none`,color: `white` },style: `weekly` === t.sharedState.since ? `background-color: var(--shade-color)` : `background-color: var(--accent-color)`,attrs: { button: ``,size: `xs`,distance: 125,angle: -20,label: `weekly` },nativeOn: { click: function (e){
            return t.changeTime(`weekly`)
        } } },[t._v(`W`)]),a(`z-spot`,{ staticClass: `buttons`,staticStyle: { border: `none`,color: `white` },style: `monthly` === t.sharedState.since ? `background-color: var(--shade-color)` : `background-color: var(--accent-color)`,attrs: { button: ``,size: `xs`,distance: 125,angle: 5,label: `monthly` },nativeOn: { click: function (e){
            return t.changeTime(`monthly`)
        } } },[t._v(`M`)])],1)])
    }; let O = []; a(`55dd`),a(`ac6a`),a(`5df3`); function I(t,e,a){
        return Promise.all(t.map((function (t){
            return y.a.get(`https://github-trending-api.now.sh/repositories?since=` + e + `&language=` + (`c%23` === t.urlParam ? t.urlParam : encodeURIComponent(t.urlParam))).catch((function (t){
                console.log(t),t.message
            }))
        }))).then((function (t){
            let e = t.filter((function (t){
                return t.data.length > 0
            })); return e.map((function (t){
                return t.data[0].language
            }))
        }))
    } let E = { data: function (){
        return { time: !1,popular: [],other: [],results: [],query: ``,wt: [],sharedState: l.$data,searchActive: !1 }
    },computed: { viewn: function (){
        return this.$zircle.getCurrentViewName()
    },language: function (){
        return this.query
    } },watch: { viewn: function (){
        this.popular = [],this.results = []
    } },methods: { changeTime: function (t){
        this.searchActive = !1,this.query = ``,this.results = [],this.wt = [],this.sharedState.since = t
    },searchLanguages: function (t){
        let e = this; if (`` !== t){
            let a = t.toLowerCase(); let s = this.other.filter((function (t){
                let e = t.name.toLowerCase(); return e.indexOf(a) > -1
            })); let r = s.sort((function (t,e){
                return t.name.length - e.name.length
            })); this.results = r.slice(0,7); let i = I(e.results,e.sharedState.since,e.sharedState.axiosError); i.then((function (t){
                e.wt = t.map((function (t){
                    let e = t.replace(/\s+/g,`-`).toLowerCase(); return { name: t,urlParam: e }
                })),e.searchActive = !0
            })),this.query = t
        } else {
            this.searchActive = !1,this.query = ``,this.results = [],this.wt = []
        }
    },getLanguages: function (){
        let t = this; let e = this; this.popular = [],this.query = ``,this.results = [],y.a.get(`https://github-trending-api.now.sh/languages`).then((function (t){
            let a = t.data.popular; a.push({ name: `all languages`,urlParam: `` }); let s = ``; s = `` === e.sharedState.language ? `all languages` : e.sharedState.language; let r = a.filter((function (t){
                return t.name.toLowerCase() === s.toLowerCase()
            })); r.length ? e.popular = a : (a.push({ name: e.sharedState.language,urlParam: e.sharedState.language.replace(/\s+/g,`-`).toLowerCase() }),e.popular = a.slice(-8)),e.other = t.data.all
        })).catch((function (e){
            console.log(e),t.sharedState.axiosError = e.message
        }))
    } },mounted: function (){
        this.sharedState.axiosError = ``,this.getLanguages(),this.sharedState.clearResults = !0
    } }; let N = E; let V = (a(`c4e5`),Object(f.a)(N,M,O,!1,null,null,null)); let L = V.exports; let R = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`z-view`,{ staticStyle: { "background-color": `white`,"border-width": `7px` },style: `border-color:` + t.sharedState.colorMe.main,attrs: { size: `xxl` } },[a(`img`,{ staticStyle: { opacity: `0.1` },attrs: { slot: `image`,src: t.info.avatar,width: `100%` },slot: `image` }),a(`div`,{ staticClass: `super-label`,style: `z-index: 10; color:` + t.sharedState.colorMe.sec },[a(`span`,{ style: `color:` + t.sharedState.colorMe.sec },[t._v(` ` + t._s(t.$zircle.getParams().data.name) + ` `),a(`span`,{ staticStyle: { "word-break": `break-word`,"font-weight": `300` },style: `color:` + t.sharedState.colorMe.sec },[t._v(` by ` + t._s(t.$zircle.getParams().data.author))])])]),t.activePage ? a(`div`,{ staticClass: `label`,style: `z-index: 10; color:` + t.sharedState.colorMe.sec },[t._v(`\n        ` + t._s(t.info.description.length > 80 ? t.info.description.substring(0,80) + `…` : 0 === t.info.description.length ? `No description provided` : t.info.description) + `\n    `)]) : t._e(),t.activePage ? a(`div`,{ staticStyle: { position: `absolute`,left: `0`,bottom: `0`,"z-index": `90`,"font-weight": `300`,"padding-top": `10px`,"padding-bottom": `50px`,"background-color": `var(--shade-color)`,color: `var(--accent-color)`,"font-size": `11px`,margin: `0`,height: `20%`,width: `100%` } },[a(`center`,[a(`div`,{ staticClass: `sub-label`,staticStyle: { overflow: `hidden` } },[a(`span`,{ staticStyle: { width: `30%`,"vertical-align": `top` } },[a(`i`,{ staticClass: `fas fa-star` }),t._v(` ` + t._s(t.info.stars > 999 ? Math.round(t.info.stars / 1e3 * 10) / 10 + `k` : ` ` + t.info.stars))]),a(`span`,{ staticStyle: { width: `30%` } },[a(`i`,{ staticClass: `fas fa-code-branch` }),t._v(` ` + t._s(t.info.forks > 999 ? Math.round(t.info.forks / 1e3 * 10) / 10 + `k` : ` ` + t.info.forks))]),a(`span`,{ staticStyle: { width: `40%` } },[a(`i`,{ staticClass: `fas fa-code` }),t._v(` ` + t._s(`` === t.info.language ? `not defined` : t.info.language))])])])],1) : t._e(),t.activePage ? t._e() : a(`div`,{ style: `left: 0; width: 100%; z-index: 10; color:` + t.sharedState.colorMe.sec },[a(`center`,[a(`div`,{ staticClass: `sub-label`,staticStyle: { "padding-top": `30px`,"line-height": `0.9em`,width: `100%`,overflow: `hidden`,"font-size": `calc(10px + 1vw)` } },[-1 !== t.info.prevPos && !1 === t.sharedState.languageTracked ? a(`span`,{ staticStyle: { width: `33%`,"vertical-align": `top` } },[t.info.diff > 0 ? a(`i`,{ staticClass: `fas fa-arrow-up`,style: `color:` + t.sharedState.colorMe.sec }) : t._e(),t.info.diff < 0 ? a(`i`,{ staticClass: `fas fa-arrow-down`,style: `color:` + t.sharedState.colorMe.sec }) : t._e(),0 === t.info.diff ? a(`i`,{ staticClass: `fas fa-equals`,style: `color:` + t.sharedState.colorMe.sec }) : t._e(),a(`br`),a(`span`,{},[t._v(t._s(t.info.diff > 0 ? `+ ` + t.info.diff : 0 === t.info.diff ? `same pos.` : t.info.diff))])]) : t._e(),a(`span`,{ style: !1 === t.sharedState.languageTracked ? `width: 33%` : `width: 100%` },[a(`i`,{ staticClass: `fas fa-star`,style: `color:` + t.sharedState.colorMe.sec }),a(`br`),a(`span`,{},[t._v(t._s(`+` + (t.info.periodStars > 999 ? Math.round(t.info.periodStars / 1e3 * 10) / 10 + `k` : ` ` + t.info.periodStars) + ` ` + (`daily` === t.sharedState.since ? `today` : `weekly` === t.sharedState.since ? `this week` : `this month`)))])]),!1 === t.sharedState.languageTracked ? a(`span`,{ staticStyle: { width: `33%` } },[a(`i`,{ staticClass: `fas fa-clock`,style: `color:` + t.sharedState.colorMe.sec }),a(`br`),a(`span`,{},[t._v(t._s(t.permanency + ` on chart`))])]) : t._e()])])],1),t.activePage ? t._e() : a(`div`,{ staticStyle: { position: `absolute`,left: `0`,bottom: `0`,"z-index": `90`,"font-weight": `300`,"padding-top": `10px`,"padding-bottom": `50px`,"background-color": `var(--shade-color)`,color: `var(--accent-color)`,"font-size": `12px`,margin: `0`,width: `100%` },style: !1 === t.sharedState.languageTracked ? `height: 20%` : `height: 35%` },[a(`center`,[a(`div`,{ staticClass: `sub-label`,staticStyle: { overflow: `hidden` } },[!1 === t.sharedState.languageTracked ? a(`span`,[t._v(`Updated at ` + t._s(t.formatTime(t.info.updated) + `. Next at ` + t.plus3(t.info.updated)))]) : t._e(),!0 === t.sharedState.languageTracked ? a(`span`,[a(`b`,[t._v(t._s(t.sharedState.language))]),t._v(` is not currently tracked. If you wish to add it open `),a(`a`,{ staticStyle: { color: `inherit` },attrs: { href: `https://github.com/zircleUI/github-trending-plus`,target: `_blank` } },[t._v(`an issue`)])]) : t._e()])])],1),a(`div`,{ attrs: { slot: `extension` },slot: `extension` },[a(`z-spot`,{ staticClass: `butt2`,staticStyle: { "font-size": `18px`,color: `white`,"border-color": `var(--shade-color)`,"background-color": `var(--shade-color)` },attrs: { button: ``,size: `s`,distance: 120,angle: 45,label: t.activePage ? `insights` : `return` },nativeOn: { click: function (e){
            return t.toggle.apply(null,arguments)
        } } },[t.activePage ? a(`i`,{ staticClass: `fas fa-chart-line` }) : t._e(),t.activePage ? t._e() : a(`i`,{ staticClass: `fas fa-undo` }),t.activePage ? a(`z-spot`,{ staticClass: `emit`,style: `border: none; background-color:rgb(218, 72, 47)`,attrs: { slot: `extension`,distance: 135,angle: -45,size: `xxs` },slot: `extension` }) : t._e()],1),a(`z-spot`,{ staticClass: `butt2`,staticStyle: { "font-size": `25px`,color: `white`,"border-color": `var(--shade-color)`,"background-color": `var(--shade-color)` },attrs: { button: ``,size: `s`,label: `☝️ star it`,distance: 120,angle: 135 },nativeOn: { mouseup: function (e){
            t.toLink(t.$zircle.getParams().data.url)
        } } },[a(`i`,{ staticClass: `fas fa-star` })]),a(`z-spot`,{ staticClass: `side`,staticStyle: { "font-size": `25px`,color: `white`,"border-color": `var(--shade-color)`,"background-color": `var(--shade-color)` },attrs: { angle: -135,distance: 100,label: t.getOrdinal(t.info.position + 1),"label-pos": `left`,size: `s` } },[a(`i`,{ staticClass: `fas fa-award` })])],1)])
    }; let q = []; let X = a(`c1df`); let Y = a.n(X); let U = (a(`4623`),{ data: function (){
        return { info: {},activePage: !0,startX: {},sharedState: l.$data,colors: [{ main: `#54a74c`,sec: `hsl(115, 37%, 18%)` },{ main: `#f2bd00`,sec: `hsl(47, 100%, 17%)` },{ main: `#5484f8`,sec: `hsl(222, 92%, 25%)` }] }
    },methods: { toggle: function (){
        this.activePage = !this.activePage
    },getOrdinal: function (t){
        let e = [`th`,`st`,`nd`,`rd`]; let a = t % 100; return t + (e[(a - 20) % 10] || e[a] || e[0])
    },toLink: function (t){
        return window.open(t,`_blank`)
    },formatTime: function (t){
        return Y()(t).format(`H:mm`)
    },plus3: function (t){
        let e = Y()(t).add(4,`hours`).diff(Y()(),`minutes`); return Y()(t).add(4,`hours`).format(`H:mm`) + ` (in ` + Y.a.duration(e,`minutes`).format(`H:mm`) + `)`
    } },computed: { permanency: function (){
        return 3 === this.info.stay ? `new!` : this.info.stay > 3 && this.info.stay <= 48 ? this.info.stay + ` h.` : this.info.stay > 49 ? Math.floor(this.info.stay / 24) + ` days` : void 0
    } },created: function (){
        let t = this.$zircle.getParams().data; this.info = { updated: t.updated,avatar: t.avatar,description: t.description,url: t.url,language: t.language,author: t.author,name: t.name,forks: t.forks,stars: t.stars,periodStars: t.currentPeriodStars,position: t.position,diff: t.diff,prevPos: t.prevPos,stay: t.stay }
    },mounted: function (){} }); let A = U; let D = Object(f.a)(A,R,q,!1,null,null,null); let B = D.exports; let H = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`z-view`,{ staticStyle: { "background-color": `white`,"border-width": `7px` },style: `border-color:` + t.sharedState.colorMe.main,attrs: { size: `xxl` } },[a(`img`,{ staticStyle: { opacity: `0.1` },attrs: { slot: `image`,src: t.info.avatar,width: `100%` },slot: `image` }),a(`div`,{ staticClass: `super-label`,style: `z-index: 10; color:` + t.sharedState.colorMe.sec },[a(`span`,{ style: `color:` + t.sharedState.colorMe.sec },[t._v(` ` + t._s(t.$zircle.getParams().data.name))])]),t.activePage ? a(`div`,{ staticClass: `label`,style: `z-index: 10; color:` + t.sharedState.colorMe.sec }) : t._e(),t.activePage ? a(`div`,{ style: `eft: 0; width: 100%; z-index: 10; color:` + t.sharedState.colorMe.sec },[a(`center`,[a(`div`,{ staticClass: `sub-label`,staticStyle: { "padding-top": `30px`,"line-height": `0.9em`,width: `100%`,overflow: `hidden`,"font-size": `calc(10px + 1vw)` } },[-1 !== t.info.prevPos && !1 === t.sharedState.languageTracked ? a(`span`,{ staticStyle: { width: `50%`,"vertical-align": `top` } },[t.info.diff > 0 ? a(`i`,{ staticClass: `fas fa-arrow-up`,style: `color:` + t.sharedState.colorMe.sec }) : t._e(),t.info.diff < 0 ? a(`i`,{ staticClass: `fas fa-arrow-down`,style: `color:` + t.sharedState.colorMe.sec }) : t._e(),0 === t.info.diff ? a(`i`,{ staticClass: `fas fa-equals`,style: `color:` + t.sharedState.colorMe.sec }) : t._e(),a(`br`),a(`span`,{},[t._v(t._s(t.info.diff > 0 ? `+ ` + t.info.diff : 0 === t.info.diff ? `same pos.` : t.info.diff))])]) : t._e(),!1 === t.sharedState.languageTracked ? a(`span`,{ staticStyle: { width: `50%` } },[a(`i`,{ staticClass: `fas fa-clock`,style: `color:` + t.sharedState.colorMe.sec }),a(`br`),a(`span`,{},[t._v(t._s(t.permanency + ` on chart`))])]) : t._e()])])],1) : t._e(),t.activePage ? a(`div`,{ staticStyle: { position: `absolute`,left: `0`,bottom: `0`,"z-index": `90`,"font-weight": `300`,"padding-top": `10px`,"padding-bottom": `50px`,"background-color": `var(--shade-color)`,color: `var(--accent-color)`,"font-size": `12px`,margin: `0`,width: `100%` },style: !1 === t.sharedState.languageTracked ? `height: 20%` : `height: 35%` },[a(`center`,[a(`div`,{ staticClass: `sub-label`,staticStyle: { overflow: `hidden` } },[!1 === t.sharedState.languageTracked ? a(`span`,[t._v(`Updated at ` + t._s(t.formatTime(t.info.updated) + `. Next at ` + t.plus3(t.info.updated)))]) : t._e(),!0 === t.sharedState.languageTracked ? a(`span`,[a(`b`,[t._v(t._s(t.sharedState.language))]),t._v(` is not currently tracked. If you wish to add it open `),a(`a`,{ staticStyle: { color: `inherit` },attrs: { href: `https://github.com/zircleUI/github-trending-plus`,target: `_blank` } },[t._v(`an issue`)])]) : t._e()])])],1) : t._e(),a(`div`,{ attrs: { slot: `extension` },slot: `extension` },[a(`z-spot`,{ staticClass: `butt2`,staticStyle: { "font-size": `25px`,color: `white`,"border-color": `var(--shade-color)`,"background-color": `var(--shade-color)` },attrs: { button: ``,size: `s`,label: `profile`,distance: 120,angle: 45 },nativeOn: { click: function (e){
            return t.toLink(`https://github.com/` + t.info.name)
        } } },[a(`i`,{ staticClass: `fab fa-github-alt` })]),a(`z-spot`,{ staticClass: `side`,staticStyle: { "font-size": `25px`,color: `white`,"border-color": `var(--shade-color)`,"background-color": `var(--shade-color)` },attrs: { angle: -135,distance: 100,label: t.getOrdinal(t.info.position + 1),"label-pos": `left`,size: `s` } },[a(`i`,{ staticClass: `fas fa-award` })])],1)])
    }; let W = []; let G = { data: function (){
        return { info: {},activePage: !0,startX: {},sharedState: l.$data,colors: [{ main: `#54a74c`,sec: `hsl(115, 37%, 18%)` },{ main: `#f2bd00`,sec: `hsl(47, 100%, 17%)` },{ main: `#5484f8`,sec: `hsl(222, 92%, 25%)` }] }
    },methods: { getOrdinal: function (t){
        let e = [`th`,`st`,`nd`,`rd`]; let a = t % 100; return t + (e[(a - 20) % 10] || e[a] || e[0])
    },toLink: function (t){
        return window.open(t,`_blank`)
    },formatTime: function (t){
        return Y()(t).format(`H:mm`)
    },plus3: function (t){
        let e = Y()(t).add(4,`hours`).diff(Y()(),`minutes`); return Y()(t).add(4,`hours`).format(`H:mm`) + ` (in ` + Y.a.duration(e,`minutes`).format(`H:mm`) + `)`
    } },computed: { permanency: function (){
        return 3 === this.info.stay ? `new!` : this.info.stay > 3 && this.info.stay <= 48 ? this.info.stay + ` h.` : this.info.stay > 49 ? Math.floor(this.info.stay / 24) + ` days` : void 0
    } },created: function (){
        let t = this.$zircle.getParams().data; this.info = { updated: t.updated,position: t.index,username: t.username,name: t.username,url: t.url,avatar: t.avatar,prevPos: t.prevPos,diff: t.diff,stay: t.stay }
    },mounted: function (){} }; let J = G; let Z = Object(f.a)(J,H,W,!1,null,null,null); let F = Z.exports; let K = function (){
        let t = this; let e = t.$createElement; let a = t._self._c || e; return a(`z-view`,{ staticStyle: { "background-color": `white`,"border-width": `7px` },style: `border-color:` + t.sharedState.colorMe.main,attrs: { size: `xxl` } },[a(`img`,{ staticStyle: { opacity: `0.3` },attrs: { slot: `image`,src: t.info.avatar,width: `100%` },slot: `image` }),a(`div`,{ staticClass: `super-label`,style: `z-index: 10; color:` + t.sharedState.colorMe.sec },[a(`span`,{ style: `color:` + t.sharedState.colorMe.sec },[t._v(` ` + t._s(t.info.name) + ` `),a(`span`,{ staticStyle: { "word-break": `break-word`,"font-weight": `300` },style: `color:` + t.sharedState.colorMe.sec },[t._v(` by ` + t._s(t.info.author))])])]),t.activePage ? a(`div`,{ staticClass: `label`,style: `z-index: 10; color:` + t.sharedState.colorMe.sec },[t._v(`\n        ` + t._s(t.info.description) + `\n    `)]) : t._e(),t.activePage ? a(`div`,{ staticStyle: { position: `absolute`,left: `0`,bottom: `0`,"z-index": `90`,"font-weight": `300`,"padding-top": `10px`,"padding-bottom": `50px`,"background-color": `var(--shade-color)`,color: `var(--accent-color)`,margin: `0`,height: `20%`,width: `100%` } },[a(`center`,[a(`div`,{ staticClass: `sub-label`,staticStyle: { overflow: `hidden` } },[a(`span`,{ staticStyle: { width: `33%`,"vertical-align": `top` } },[a(`i`,{ staticClass: `fas fa-star` }),t._v(` ` + t._s(t.info.stars > 999 ? Math.round(t.info.stars / 1e3 * 10) / 10 + `k` : ` ` + t.info.stars))]),a(`span`,{ staticStyle: { width: `33%` } },[a(`i`,{ staticClass: `fas fa-code-branch` }),t._v(` ` + t._s(t.info.forks > 999 ? Math.round(t.info.forks / 1e3 * 10) / 10 + `k` : ` ` + t.info.forks))]),a(`span`,{ staticStyle: { width: `33%` } },[a(`i`,{ staticClass: `fas fa-code` }),t._v(` ` + t._s(`` === t.info.language ? `not defined` : t.info.language))])])])],1) : t._e(),a(`div`,{ attrs: { slot: `extension` },slot: `extension` },[a(`z-spot`,{ staticClass: `butt2`,staticStyle: { "font-size": `25px`,color: `white`,"border-color": `var(--shade-color)`,"background-color": `var(--shade-color)` },attrs: { button: ``,size: `s`,label: `source code`,distance: 120,angle: 135 },nativeOn: { click: function (e){
            return t.toLink(t.info.url)
        } } },[a(`i`,{ staticClass: `fab fa-github-alt` })]),a(`z-spot`,{ staticClass: `butt2`,staticStyle: { "font-size": `25px`,color: `white`,"border-color": `var(--shade-color)`,"background-color": `var(--shade-color)` },attrs: { button: ``,size: `s`,label: `follow zircle`,distance: 120,angle: 45 },nativeOn: { click: function (e){
            return t.toLink(`https://twitter.com/zircle_ui`)
        } } },[a(`i`,{ staticClass: `fab fa-twitter` })])],1)])
    }; let Q = []; let tt = { data: function (){
        return { info: {},activePage: !0,startX: {},sharedState: l.$data,colors: [{ main: `#54a74c`,sec: `hsl(115, 37%, 18%)` },{ main: `#f2bd00`,sec: `hsl(47, 100%, 17%)` },{ main: `#5484f8`,sec: `hsl(222, 92%, 25%)` }] }
    },methods: { toLink: function (t){
        return window.open(t,`_blank`)
    },getZircle: function (){
        return y.a.get(`https://api.github.com/repos/zircleui/github-trending-plus`).then((function (t){
            return { avatar: t.data.owner.avatar_url,description: t.data.description,url: t.data.html_url,language: t.data.language,author: t.data.owner.login,name: t.data.name,forks: t.data.forks_count,stars: t.data.stargazers_count }
        }))
    } },computed: {},mounted: function (){
        let t = this; this.getZircle().then((function (e){
            t.info = e
        }))
    } }; let et = tt; let at = (a(`a61d`),Object(f.a)(et,K,Q,!1,null,null,null)); let st = at.exports; let rt = { components: { home: b,repos: x,devs: T,languages: L,repo: B,about: st,dev: F },data: function (){
        return { sharedState: l.$data,startY: {},valid: !0,mouse: [] }
    },methods: { startPos: function (t){
        t = t.changedTouches ? t.changedTouches[0] : t,this.startY = { posY: t.pageY,time: (new Date).getTime() }
    },endPos: function (t){
        t = t.changedTouches ? t.changedTouches[0] : t; let e = t.pageY - this.startY.posY; let a = (new Date).getTime() - this.startY.time; a <= 500 && (Math.abs(e) >= 200 && e < 0 ? (this.$zircle.goBack(),this.startY = {}) : Math.abs(e) >= 200 && e > 0 && (this.startY = {}))
    },backward: function (t){
        let e = this; this.mouse.push(t.timeStamp); let a = t.deltaY; a > 0 && !0 === this.valid && t.timeStamp - this.mouse[0] > 300 && (this.valid = !1,this.mouse = [],this.$zircle.goBack(),setTimeout((function (){
            e.valid = !0
        }),1800))
    } },mounted: function (){
        let t = this; this.$zircle.config({ style: { theme: `github` } }),this.$zircle.setView(`home`),document.body.addEventListener(`keyup`,(function (e){
            if (`Escape` === e.code) {
                return t.$zircle.goBack()
            }
        }))
    } }; let it = rt; let ot = (a(`034f`),Object(f.a)(it,r,i,!1,null,null,null)); let nt = ot.exports; let ct = a(`55fa`); let lt = a.n(ct); a(`45d3`); s.default.use(lt.a),new s.default({ render: function (t){
        return t(nt)
    } }).$mount(`#app`)
},"64a9": function (t,e,a){},"6a68": function (t,e,a){
    "use strict"; a(`3cb5`)
},"7df3": function (t,e,a){
    "use strict"; a(`8e7d`)
},"8e7d": function (t,e,a){},"9b52": function (t,e,a){},a61d: function (t,e,a){
    "use strict"; a(`c05b`)
},c05b: function (t,e,a){},c4e5: function (t,e,a){
    "use strict"; a(`9b52`)
} })
//# sourceMappingURL=app.4c90cbe5.js.map