/*!
 * Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
(function () {
    'use strict'

    function _typeof(obj) {
        "@babel/helpers - typeof"

        if (typeof Symbol === `function` && typeof Symbol.iterator === `symbol`) {
            _typeof = function (obj) {
                return typeof obj
            }
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === `function` && obj.constructor === Symbol && obj !== Symbol.prototype ? `symbol` : typeof obj
            }
        }

        return _typeof(obj)
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError(`Cannot call a class as a function`)
        }
    }

    function _defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            let descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if (`value` in descriptor) {
                descriptor.writable = true
            }
            Object.defineProperty(target, descriptor.key, descriptor)
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps)
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps)
        }
        return Constructor
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
            })
        } else {
            obj[key] = value
        }

        return obj
    }

    function _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? Object(arguments[i]) : {}
            let ownKeys = Object.keys(source)

            if (typeof Object.getOwnPropertySymbols === `function`) {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable
                }))
            }

            ownKeys.forEach(function (key) {
                _defineProperty(target, key, source[key])
            })
        }

        return target
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            return _arrayLikeToArray(arr)
        }
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) {
            return arr
        }
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== `undefined` && Symbol.iterator in Object(iter)) {
            return Array.from(iter)
        }
    }

    function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === `undefined` || !(Symbol.iterator in Object(arr))) {
            return
        }
        let _arr = []
        let _n = true
        let _d = false
        let _e = undefined

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value)

                if (i && _arr.length === i) {
                    break
                }
            }
        } catch (err) {
            _d = true
            _e = err
        } finally {
            try {
                if (!_n && _i.return != null) {
                    _i.return()
                }
            } finally {
                if (_d) {
                    throw _e
                }
            }
        }

        return _arr
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) {
            return
        }
        if (typeof o === `string`) {
            return _arrayLikeToArray(o, minLen)
        }
        let n = Object.prototype.toString.call(o).slice(8, -1)
        if (n === `Object` && o.constructor) {
            n = o.constructor.name
        }
        if (n === `Map` || n === `Set`) {
            return Array.from(o)
        }
        if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return _arrayLikeToArray(o, minLen)
        }
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) {
            len = arr.length
        }

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i]
        }

        return arr2
    }

    function _nonIterableSpread() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function _nonIterableRest() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    let noop = function noop() {}

    let _GLOBAL = {}
    let _SET_TIMEOUT = undefined // eslint-disable-line no-undef-init

    let _SET_IMMEDIATE = undefined // eslint-disable-line no-undef-init

    let _WINDOW = {}
    let _DOCUMENT = {}
    let _MUTATION_OBSERVER = null
    let _PERFORMANCE = {
        mark: noop,
        measure: noop,
    }

    try {
        if (typeof global !== `undefined`) {
            _GLOBAL = global
        }
        if (typeof setTimeout === `function`) {
            _SET_TIMEOUT = setTimeout
        }
        if (typeof setImmediate === `function`) {
            _SET_IMMEDIATE = setImmediate
        }
        if (typeof window !== `undefined`) {
            _WINDOW = window
        }
        if (typeof document !== `undefined`) {
            _DOCUMENT = document
        }
        if (typeof MutationObserver !== `undefined`) {
            _MUTATION_OBSERVER = MutationObserver
        }
        if (typeof performance !== `undefined`) {
            _PERFORMANCE = performance
        }
    } catch (e) {}

    let _ref = _WINDOW.navigator || {}
    let _ref$userAgent = _ref.userAgent
    let userAgent = _ref$userAgent === void 0 ? `` : _ref$userAgent

    let GLOBAL = _GLOBAL
    let SET_TIMEOUT = _SET_TIMEOUT
    let SET_IMMEDIATE = _SET_IMMEDIATE
    let WINDOW = _WINDOW
    let DOCUMENT = _DOCUMENT
    let MUTATION_OBSERVER = _MUTATION_OBSERVER
    let PERFORMANCE = _PERFORMANCE
    let IS_BROWSER = !!WINDOW.document
    let IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === `function` && typeof DOCUMENT.createElement === `function`
    let IS_IE = ~userAgent.indexOf(`MSIE`) || ~userAgent.indexOf(`Trident/`)

    let PENDING = `pending`
    let SETTLED = `settled`
    let FULFILLED = `fulfilled`
    let REJECTED = `rejected`

    let NOOP = function NOOP() {}

    let isNode = typeof GLOBAL !== `undefined` && typeof GLOBAL.process !== `undefined` && typeof GLOBAL.process.emit === `function`
    let asyncSetTimer = typeof SET_IMMEDIATE !== `undefined` ? SET_IMMEDIATE : SET_TIMEOUT
    let asyncQueue = []
    let asyncTimer

    function asyncFlush() {
    // run promise callbacks
        for (let i = 0; i < asyncQueue.length; i++) {
            asyncQueue[i][0](asyncQueue[i][1])
        } // reset async asyncQueue

        asyncQueue = []
        asyncTimer = false
    }

    function asyncCall(callback, arg) {
        asyncQueue.push([callback, arg])

        if (!asyncTimer) {
            asyncTimer = true
            asyncSetTimer(asyncFlush, 0)
        }
    }

    function invokeResolver(resolver, promise) {
        function resolvePromise(value) {
            resolve(promise, value)
        }

        function rejectPromise(reason) {
            reject(promise, reason)
        }

        try {
            resolver(resolvePromise, rejectPromise)
        } catch (e) {
            rejectPromise(e)
        }
    }

    function invokeCallback(subscriber) {
        let owner = subscriber.owner
        let settled = owner._state
        let value = owner._data
        let callback = subscriber[settled]
        let promise = subscriber.then

        if (typeof callback === `function`) {
            settled = FULFILLED

            try {
                value = callback(value)
            } catch (e) {
                reject(promise, e)
            }
        }

        if (!handleThenable(promise, value)) {
            if (settled === FULFILLED) {
                resolve(promise, value)
            }

            if (settled === REJECTED) {
                reject(promise, value)
            }
        }
    }

    function handleThenable(promise, value) {
        let resolved

        try {
            if (promise === value) {
                throw new TypeError(`A promises callback cannot return that same promise.`)
            }

            if (value && (typeof value === `function` || _typeof(value) === `object`)) {
                // then should be retrieved only once
                let then = value.then

                if (typeof then === `function`) {
                    then.call(value, function (val) {
                        if (!resolved) {
                            resolved = true

                            if (value === val) {
                                fulfill(promise, val)
                            } else {
                                resolve(promise, val)
                            }
                        }
                    }, function (reason) {
                        if (!resolved) {
                            resolved = true
                            reject(promise, reason)
                        }
                    })
                    return true
                }
            }
        } catch (e) {
            if (!resolved) {
                reject(promise, e)
            }

            return true
        }

        return false
    }

    function resolve(promise, value) {
        if (promise === value || !handleThenable(promise, value)) {
            fulfill(promise, value)
        }
    }

    function fulfill(promise, value) {
        if (promise._state === PENDING) {
            promise._state = SETTLED
            promise._data = value
            asyncCall(publishFulfillment, promise)
        }
    }

    function reject(promise, reason) {
        if (promise._state === PENDING) {
            promise._state = SETTLED
            promise._data = reason
            asyncCall(publishRejection, promise)
        }
    }

    function publish(promise) {
        promise._then = promise._then.forEach(invokeCallback)
    }

    function publishFulfillment(promise) {
        promise._state = FULFILLED
        publish(promise)
    }

    function publishRejection(promise) {
        promise._state = REJECTED
        publish(promise)

        if (!promise._handled && isNode) {
            GLOBAL.process.emit(`unhandledRejection`, promise._data, promise)
        }
    }

    function notifyRejectionHandled(promise) {
        GLOBAL.process.emit(`rejectionHandled`, promise)
    }

    let P =
  /*#__PURE__*/
  function () {
      function P(resolver) {
          _classCallCheck(this, P)

          if (typeof resolver !== `function`) {
              throw new TypeError(`Promise resolver ` + resolver + ` is not a function`)
          }

          if (this instanceof P === false) {
              throw new TypeError(`Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.`)
          }

          this._then = []
          this._state = PENDING
          this._then = null
          this._data = undefined
          this._handled = false
          invokeResolver(resolver, this)
      }

      _createClass(P, [{
          key: `then`,
          value: function then(onFulfillment, onRejection) {
              let subscriber = {
                  owner: this,
                  then: new this.constructor(NOOP),
                  fulfilled: onFulfillment,
                  rejected: onRejection,
              }

              if ((onRejection || onFulfillment) && !this._handled) {
                  this._handled = true

                  if (this._state === REJECTED && isNode) {
                      asyncCall(notifyRejectionHandled, this)
                  }
              }

              if (this._state === FULFILLED || this._state === REJECTED) {
                  // already resolved, call callback async
                  asyncCall(invokeCallback, subscriber)
              } else {
                  // subscribe
                  this._then.push(subscriber)
              }

              return subscriber.then
          },
      }, {
          key: `catch`,
          value: function _catch(onRejection) {
              return this.then(null, onRejection)
          },
      }], [{
          key: `all`,
          value: function all(promises) {
              if (!Array.isArray(promises)) {
                  throw new TypeError(`You must pass an array to Promise.all().`)
              }

              return new P(function (resolve, reject) {
                  let results = []
                  let remaining = 0

                  function resolver(index) {
                      remaining++
                      return function (value) {
                          results[index] = value

                          if (!--remaining) {
                              resolve(results)
                          }
                      }
                  }

                  for (var i = 0, promise; i < promises.length; i++) {
                      promise = promises[i]

                      if (promise && typeof promise.then === `function`) {
                          promise.then(resolver(i), reject)
                      } else {
                          results[i] = promise
                      }
                  }

                  if (!remaining) {
                      resolve(results)
                  }
              })
          },
      }, {
          key: `resolve`,
          value: function resolve(value) {
              if (value && _typeof(value) === `object` && value.constructor === P) {
                  return value
              }

              return new P(function (resolve) {
                  resolve(value)
              })
          },
      }, {
          key: `reject`,
          value: function reject(reason) {
              return new P(function (resolve, reject) {
                  reject(reason)
              })
          },
      }])

      return P
  }()

    let PromisePonyfill = {
        provides: function provides(providers) {
            if (typeof providers.Promise === `undefined`) {
                providers.Promise = P
            }
        },
    }

    let NAMESPACE_IDENTIFIER = `___FONT_AWESOME___`
    let UNITS_IN_GRID = 16
    let DEFAULT_FAMILY_PREFIX = `fa`
    let DEFAULT_REPLACEMENT_CLASS = `svg-inline--fa`
    let DATA_FA_I2SVG = `data-fa-i2svg`
    let DATA_FA_PSEUDO_ELEMENT = `data-fa-pseudo-element`
    let DATA_FA_PSEUDO_ELEMENT_PENDING = `data-fa-pseudo-element-pending`
    let DATA_PREFIX = `data-prefix`
    let DATA_ICON = `data-icon`
    let HTML_CLASS_I2SVG_BASE_CLASS = `fontawesome-i2svg`
    let MUTATION_APPROACH_ASYNC = `async`
    let TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = [`HTML`, `HEAD`, `STYLE`, `SCRIPT`]
    let PRODUCTION = function () {
        try {
            return `production` === `production`
        } catch (e) {
            return false
        }
    }()
    let PREFIX_TO_STYLE = {
        fas: `solid`,
        'fa-solid': `solid`,
        far: `regular`,
        'far-regular': `regular`,
        fal: `light`,
        'fa-light': `light`,
        fat: `thin`,
        'fa-thin': `thin`,
        fad: `duotone`,
        'fa-duotone': `duotone`,
        fab: `brands`,
        'fa-brands': `brands`,
        fak: `kit`,
        'fa-kit': `kit`,
        fa: `solid`,
    }
    let STYLE_TO_PREFIX = {
        solid: `fas`,
        regular: `far`,
        light: `fal`,
        thin: `fat`,
        duotone: `fad`,
        brands: `fab`,
        kit: `fak`,
    }
    let ICON_SELECTION_SYNTAX_PATTERN = /fa[srltdbk\-\ ]/ // eslint-disable-line no-useless-escape

    let LAYERS_TEXT_CLASSNAME = `fa-layers-text`
    let FONT_FAMILY_PATTERN = /Font Awesome ([6 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit).*/ // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

    let FONT_WEIGHT_TO_PREFIX = {
        900: `fas`,
        400: `far`,
        normal: `far`,
        300: `fal`,
        100: `fat`,
    }
    let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    let ATTRIBUTES_WATCHED_FOR_MUTATION = [`class`, `data-prefix`, `data-icon`, `data-fa-transform`, `data-fa-mask`]
    let DUOTONE_CLASSES = {
        GROUP: `group`,
        SWAP_OPACITY: `swap-opacity`,
        PRIMARY: `primary`,
        SECONDARY: `secondary`,
    }
    let RESERVED_CLASSES = [`2xs`, `xs`, `sm`, `lg`, `xl`, `2xl`, `beat`, `border`, `fade`, `flash`, `flip-both`, `flip-horizontal`, `flip-vertical`, `flip`, `fw`, `inverse`, `layers-counter`, `layers-text`, `layers`, `li`, `pull-left`, `pull-right`, `pulse`, `rotate-180`, `rotate-270`, `rotate-90`, `rotate-by`, `spin-pulse`, `spin-reverse`, `spin`, `stack-1x`, `stack-2x`, `stack`, `ul`, DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
        return ``.concat(n, `x`)
    })).concat(oneToTwenty.map(function (n) {
        return `w-`.concat(n)
    }))

    let initial = WINDOW.FontAwesomeConfig || {}

    function getAttrConfig(attr) {
        let element = DOCUMENT.querySelector(`script[` + attr + `]`)

        if (element) {
            return element.getAttribute(attr)
        }
    }

    function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
        if (val === ``) {
            return true
        }
        if (val === `false`) {
            return false
        }
        if (val === `true`) {
            return true
        }
        return val
    }

    if (DOCUMENT && typeof DOCUMENT.querySelector === `function`) {
        let attrs = [[`data-family-prefix`, `familyPrefix`], [`data-style-default`, `styleDefault`], [`data-replacement-class`, `replacementClass`], [`data-auto-replace-svg`, `autoReplaceSvg`], [`data-auto-add-css`, `autoAddCss`], [`data-auto-a11y`, `autoA11y`], [`data-search-pseudo-elements`, `searchPseudoElements`], [`data-observe-mutations`, `observeMutations`], [`data-mutate-approach`, `mutateApproach`], [`data-keep-original-source`, `keepOriginalSource`], [`data-measure-performance`, `measurePerformance`], [`data-show-missing-icons`, `showMissingIcons`]]
        attrs.forEach(function (_ref) {
            let _ref2 = _slicedToArray(_ref, 2)
            let attr = _ref2[0]
            let key = _ref2[1]

            let val = coerce(getAttrConfig(attr))

            if (val !== undefined && val !== null) {
                initial[key] = val
            }
        })
    }

    let _default = {
        familyPrefix: DEFAULT_FAMILY_PREFIX,
        styleDefault: null,
        replacementClass: DEFAULT_REPLACEMENT_CLASS,
        autoReplaceSvg: true,
        autoAddCss: true,
        autoA11y: true,
        searchPseudoElements: false,
        observeMutations: true,
        mutateApproach: `async`,
        keepOriginalSource: true,
        measurePerformance: false,
        showMissingIcons: true,
    }

    let _config = _objectSpread({}, _default, initial)

    if (!_config.autoReplaceSvg) {
        _config.observeMutations = false
    }

    let config = _objectSpread({}, _config)

    WINDOW.FontAwesomeConfig = config

    let d = UNITS_IN_GRID
    let meaninglessTransform = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: false,
        flipY: false,
    }

    function isReserved(name) {
        return ~RESERVED_CLASSES.indexOf(name)
    }

    function bunker(fn) {
        try {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key]
            }

            fn.apply(void 0, args)
        } catch (e) {
            if (!PRODUCTION) {
                throw e
            }
        }
    }
    function insertCss(css) {
        if (!css || !IS_DOM) {
            return
        }

        let style = DOCUMENT.createElement(`style`)
        style.setAttribute(`type`, `text/css`)
        style.innerHTML = css
        let headChildren = DOCUMENT.head.childNodes
        let beforeChild = null

        for (let i = headChildren.length - 1; i > -1; i--) {
            let child = headChildren[i]
            let tagName = (child.tagName || ``).toUpperCase()

            if ([`STYLE`, `LINK`].indexOf(tagName) > -1) {
                beforeChild = child
            }
        }

        DOCUMENT.head.insertBefore(style, beforeChild)
        return css
    }
    let idPool = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
    function nextUniqueId() {
        let size = 12
        let id = ``

        while (size-- > 0) {
            id += idPool[Math.random() * 62 | 0]
        }

        return id
    }
    function toArray(obj) {
        let array = []

        for (let i = (obj || []).length >>> 0; i--;) {
            array[i] = obj[i]
        }

        return array
    }
    function classArray(node) {
        if (node.classList) {
            return toArray(node.classList)
        } else {
            return (node.getAttribute(`class`) || ``).split(` `).filter(function (i) {
                return i
            })
        }
    }
    function getIconName(familyPrefix, cls) {
        let parts = cls.split(`-`)
        let prefix = parts[0]
        let iconName = parts.slice(1).join(`-`)

        if (prefix === familyPrefix && iconName !== `` && !isReserved(iconName)) {
            return iconName
        } else {
            return null
        }
    }
    function htmlEscape(str) {
        return ``.concat(str).replace(/&/g, `&amp;`).replace(/"/g, `&quot;`).replace(/'/g, `&#39;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`)
    }
    function joinAttributes(attributes) {
        return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
            return acc + ``.concat(attributeName, `="`).concat(htmlEscape(attributes[attributeName]), `" `)
        }, ``).trim()
    }
    function joinStyles(styles) {
        return Object.keys(styles || {}).reduce(function (acc, styleName) {
            return acc + ``.concat(styleName, `: `).concat(styles[styleName].trim(), `;`)
        }, ``)
    }
    function transformIsMeaningful(transform) {
        return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY
    }
    function transformForSvg(_ref) {
        let transform = _ref.transform
        let containerWidth = _ref.containerWidth
        let iconWidth = _ref.iconWidth
        let outer = {
            transform: `translate(`.concat(containerWidth / 2, ` 256)`),
        }
        let innerTranslate = `translate(`.concat(transform.x * 32, `, `).concat(transform.y * 32, `) `)
        let innerScale = `scale(`.concat(transform.size / 16 * (transform.flipX ? -1 : 1), `, `).concat(transform.size / 16 * (transform.flipY ? -1 : 1), `) `)
        let innerRotate = `rotate(`.concat(transform.rotate, ` 0 0)`)
        let inner = {
            transform: ``.concat(innerTranslate, ` `).concat(innerScale, ` `).concat(innerRotate),
        }
        let path = {
            transform: `translate(`.concat(iconWidth / 2 * -1, ` -256)`),
        }
        return {
            outer: outer,
            inner: inner,
            path: path,
        }
    }
    function transformForCss(_ref2) {
        let transform = _ref2.transform
        let _ref2$width = _ref2.width
        let width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width
        let _ref2$height = _ref2.height
        let height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height
        let _ref2$startCentered = _ref2.startCentered
        let startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered
        let val = ``

        if (startCentered && IS_IE) {
            val += `translate(`.concat(transform.x / d - width / 2, `em, `).concat(transform.y / d - height / 2, `em) `)
        } else if (startCentered) {
            val += `translate(calc(-50% + `.concat(transform.x / d, `em), calc(-50% + `).concat(transform.y / d, `em)) `)
        } else {
            val += `translate(`.concat(transform.x / d, `em, `).concat(transform.y / d, `em) `)
        }

        val += `scale(`.concat(transform.size / d * (transform.flipX ? -1 : 1), `, `).concat(transform.size / d * (transform.flipY ? -1 : 1), `) `)
        val += `rotate(`.concat(transform.rotate, `deg) `)
        return val
    }

    let baseStyles = `svg:not(:root).svg-inline--fa{overflow:visible;-webkit-box-sizing:content-box;box-sizing:content-box}.svg-inline--fa{display:inline-block;display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285714em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em;width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:1.25em;width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;background-color:var(--fa-counter-background-color,#ff253a);border-radius:1em;border-radius:var(--fa-counter-border-radius,1em);-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;color:var(--fa-inverse,#fff);line-height:1;line-height:var(--fa-counter-line-height,1);max-width:5em;max-width:var(--fa-counter-max-width,5em);min-width:1.5em;min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:.25em .5em;padding:var(--fa-counter-padding,.25em .5em);right:0;right:var(--fa-right,0);text-overflow:ellipsis;top:0;top:var(--fa-top,0);-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;bottom:var(--fa-bottom,0);right:0;right:var(--fa-right,0);top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;bottom:var(--fa-bottom,0);left:0;left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:0;top:var(--fa-top,0);right:0;right:var(--fa-right,0);-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;left:var(--fa-left,0);right:auto;top:0;top:var(--fa-top,0);-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285714em;vertical-align:.0535714286em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666667em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(2em * -1);left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:2em;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:#eee;border-color:var(--fa-border-color,#eee);border-radius:.1em;border-radius:var(--fa-border-radius,.1em);border-style:solid;border-style:var(--fa-border-style,solid);border-width:.08em;border-width:var(--fa-border-width,.08em);padding:.2em .25em .15em;padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:.3em;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:.3em;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:cubic-bezier(.4,0,.6,1);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flash{-webkit-animation-name:fa-flash;animation-name:fa-flash;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:cubic-bezier(.4,0,.6,1);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:steps(8);animation-timing-function:steps(8);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-fade,.fa-flash,.fa-flip,.fa-pulse,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(1.25);transform:scale(1.25);-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(1.25);transform:scale(1.25);-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-fade{50%{opacity:.4;opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:.4;opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-flash{0%,100%{opacity:.4;opacity:var(--fa-flash-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125);-webkit-transform:scale(var(--fa-flash-scale,1.125));transform:scale(var(--fa-flash-scale,1.125))}}@keyframes fa-flash{0%,100%{opacity:.4;opacity:var(--fa-flash-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125);-webkit-transform:scale(var(--fa-flash-scale,1.125));transform:scale(var(--fa-flash-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(0,1,0,-180deg);transform:rotate3d(0,1,0,-180deg);-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(0,1,0,-180deg);transform:rotate3d(0,1,0,-180deg);-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(none);transform:rotate(none);-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:auto;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}`

    function css() {
        let dfp = DEFAULT_FAMILY_PREFIX
        let drc = DEFAULT_REPLACEMENT_CLASS
        let fp = config.familyPrefix
        let rc = config.replacementClass
        let s = baseStyles

        if (fp !== dfp || rc !== drc) {
            let dPatt = new RegExp(`\\.`.concat(dfp, `\\-`), `g`)
            let customPropPatt = new RegExp(`\\--`.concat(dfp, `\\-`), `g`)
            let rPatt = new RegExp(`\\.`.concat(drc), `g`)
            s = s.replace(dPatt, `.`.concat(fp, `-`)).replace(customPropPatt, `--`.concat(fp, `-`)).replace(rPatt, `.`.concat(rc))
        }

        return s
    }

    let _cssInserted = false

    function ensureCss() {
        if (config.autoAddCss && !_cssInserted) {
            insertCss(css())
            _cssInserted = true
        }
    }

    let InjectCSS = {
        mixout: function mixout() {
            return {
                dom: {
                    css: css,
                    insertCss: ensureCss,
                },
            }
        },
        hooks: function hooks() {
            return {
                beforeDOMElementCreation: function beforeDOMElementCreation() {
                    ensureCss()
                },
                beforeI2svg: function beforeI2svg() {
                    ensureCss()
                },
            }
        },
    }

    let w = WINDOW || {}
    if (!w[NAMESPACE_IDENTIFIER]) {
        w[NAMESPACE_IDENTIFIER] = {}
    }
    if (!w[NAMESPACE_IDENTIFIER].styles) {
        w[NAMESPACE_IDENTIFIER].styles = {}
    }
    if (!w[NAMESPACE_IDENTIFIER].hooks) {
        w[NAMESPACE_IDENTIFIER].hooks = {}
    }
    if (!w[NAMESPACE_IDENTIFIER].shims) {
        w[NAMESPACE_IDENTIFIER].shims = []
    }
    let namespace = w[NAMESPACE_IDENTIFIER]

    let functions = []

    let listener = function listener() {
        DOCUMENT.removeEventListener(`DOMContentLoaded`, listener)
        loaded = 1
        functions.map(function (fn) {
            return fn()
        })
    }

    var loaded = false

    if (IS_DOM) {
        loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState)
        if (!loaded) {
            DOCUMENT.addEventListener(`DOMContentLoaded`, listener)
        }
    }

    function domready(fn) {
        if (!IS_DOM) {
            return
        }
        loaded ? setTimeout(fn, 0) : functions.push(fn)
    }

    function toHtml(abstractNodes) {
        let tag = abstractNodes.tag
        let _abstractNodes$attrib = abstractNodes.attributes
        let attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib
        let _abstractNodes$childr = abstractNodes.children
        let children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr

        if (typeof abstractNodes === `string`) {
            return htmlEscape(abstractNodes)
        } else {
            return `<`.concat(tag, ` `).concat(joinAttributes(attributes), `>`).concat(children.map(toHtml).join(``), `</`).concat(tag, `>`)
        }
    }

    /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

    let bindInternal4 = function bindInternal4(func, thisContext) {
        return function (a, b, c, d) {
            return func.call(thisContext, a, b, c, d)
        }
    }

    /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */

    let reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
        let keys = Object.keys(subject)
        let length = keys.length
        let iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn
        let i
        let key
        let result

        if (initialValue === undefined) {
            i = 1
            result = subject[keys[0]]
        } else {
            i = 0
            result = initialValue
        }

        for (; i < length; i++) {
            key = keys[i]
            result = iterator(result, subject[key], key, subject)
        }

        return result
    }

    function toHex(unicode) {
        let result = ``

        for (let i = 0; i < unicode.length; i++) {
            let hex = unicode.charCodeAt(i).toString(16)
            result += (`000` + hex).slice(-4)
        }

        return result
    }

    function normalizeIcons(icons) {
        return Object.keys(icons).reduce(function (acc, iconName) {
            let icon = icons[iconName]
            let expanded = !!icon.icon

            if (expanded) {
                acc[icon.iconName] = icon.icon
            } else {
                acc[iconName] = icon
            }

            return acc
        }, {})
    }

    function defineIcons(prefix, icons) {
        let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
        let _params$skipHooks = params.skipHooks
        let skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks
        let normalized = normalizeIcons(icons)

        if (typeof namespace.hooks.addPack === `function` && !skipHooks) {
            namespace.hooks.addPack(prefix, normalizeIcons(icons))
        } else {
            namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized)
        }
        /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */

        if (prefix === `fas`) {
            defineIcons(`fa`, icons)
        }
    }

    let _plugins = []
    let _hooks = {}
    let providers = {
        Promise: Promise,
    }
    let defaultProviderKeys = Object.keys(providers)
    function registerPlugins(nextPlugins, _ref) {
        let obj = _ref.mixoutsTo
        _plugins = nextPlugins
        _hooks = {}
        Object.keys(providers).forEach(function (k) {
            if (defaultProviderKeys.indexOf(k) === -1) {
                delete providers[k]
            }
        })

        _plugins.forEach(function (plugin) {
            let mixout = plugin.mixout ? plugin.mixout() : {}
            Object.keys(mixout).forEach(function (tk) {
                if (typeof mixout[tk] === `function`) {
                    obj[tk] = mixout[tk]
                }

                if (_typeof(mixout[tk]) === `object`) {
                    Object.keys(mixout[tk]).forEach(function (sk) {
                        if (!obj[tk]) {
                            obj[tk] = {}
                        }

                        obj[tk][sk] = mixout[tk][sk]
                    })
                }
            })

            if (plugin.hooks) {
                let hooks = plugin.hooks()
                Object.keys(hooks).forEach(function (hook) {
                    if (!_hooks[hook]) {
                        _hooks[hook] = []
                    }

                    _hooks[hook].push(hooks[hook])
                })
            }

            if (plugin.provides) {
                plugin.provides(providers)
            }
        })

        return obj
    }
    function chainHooks(hook, accumulator) {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key]
        }

        let hookFns = _hooks[hook] || []
        hookFns.forEach(function (hookFn) {
            accumulator = hookFn.apply(null, [accumulator].concat(args)) // eslint-disable-line no-useless-call
        })
        return accumulator
    }
    function callHooks(hook) {
        let hookFns = _hooks[hook] || []

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2]
        }

        let _iteratorNormalCompletion = true
        let _didIteratorError = false
        let _iteratorError = undefined

        try {
            for (var _iterator = hookFns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                let hookFn = _step.value
                hookFn.apply(null, args)
            }
        } catch (err) {
            _didIteratorError = true
            _iteratorError = err
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return()
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError
                }
            }
        }

        return undefined
    }
    function callProvided() {
        let hook = arguments[0]
        let args = Array.prototype.slice.call(arguments, 1)
        return providers[hook] ? providers[hook].apply(null, args) : undefined
    }

    let styles = namespace.styles
    let shims = namespace.shims
    let _byUnicode = {}
    let _byLigature = {}
    let _byOldName = {}
    let _byAlias = {}
    let build = function build() {
        let lookup = function lookup(reducer) {
            return reduce(styles, function (o, style, prefix) {
                o[prefix] = reduce(style, reducer, {})
                return o
            }, {})
        }

        _byUnicode = lookup(function (acc, icon, iconName) {
            if (icon[3]) {
                acc[icon[3]] = iconName
            }

            if (icon[2]) {
                let aliases = icon[2].filter(function (a) {
                    return typeof a === `number`
                })
                aliases.forEach(function (alias) {
                    acc[alias.toString(16)] = iconName
                })
            }

            return acc
        })
        _byLigature = lookup(function (acc, icon, iconName) {
            acc[iconName] = iconName

            if (icon[2]) {
                let aliases = icon[2].filter(function (a) {
                    return typeof a === `string`
                })
                aliases.forEach(function (alias) {
                    acc[alias] = iconName
                })
            }

            return acc
        })
        _byAlias = lookup(function (acc, icon, iconName) {
            let aliases = icon[2]
            acc[iconName] = iconName
            aliases.forEach(function (alias) {
                acc[alias] = iconName
            })
            return acc
        })
        let hasRegular = `far` in styles
        _byOldName = reduce(shims, function (acc, shim) {
            let oldName = shim[0]
            let prefix = shim[1]
            let iconName = shim[2]

            if (prefix === `far` && !hasRegular) {
                prefix = `fas`
            }

            acc[oldName] = {
                prefix: prefix,
                iconName: iconName,
            }
            return acc
        }, {})
    }
    build()
    function byUnicode(prefix, unicode) {
        return (_byUnicode[prefix] || {})[unicode]
    }
    function byLigature(prefix, ligature) {
        return (_byLigature[prefix] || {})[ligature]
    }
    function byAlias(prefix, alias) {
        return (_byAlias[prefix] || {})[alias]
    }
    function byOldName(name) {
        return _byOldName[name] || {
            prefix: null,
            iconName: null,
        }
    }

    let styles$1 = namespace.styles
    let emptyCanonicalIcon = function emptyCanonicalIcon() {
        return {
            prefix: null,
            iconName: null,
            rest: [],
        }
    }
    function getCanonicalIcon(values) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        let _params$skipLookups = params.skipLookups
        let skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups
        return values.reduce(function (acc, cls) {
            let iconName = getIconName(config.familyPrefix, cls)

            if (styles$1[cls]) {
                acc.prefix = cls
            } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
                acc.prefix = cls
            } else if (iconName) {
                acc.iconName = iconName
            } else if (cls !== config.replacementClass && cls.indexOf(`fa-w-`) !== 0) {
                acc.rest.push(cls)
            }

            if (!skipLookups && acc.prefix && acc.iconName) {
                let shim = acc.prefix === `fa` ? byOldName(acc.iconName) : {}
                let aliasIconName = byAlias(acc.prefix, acc.iconName)
                acc.iconName = shim.iconName || aliasIconName || acc.iconName
                acc.prefix = shim.prefix || acc.prefix
            }

            return acc
        }, emptyCanonicalIcon())
    }
    function iconFromMapping(mapping, prefix, iconName) {
        if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
            return {
                prefix: prefix,
                iconName: iconName,
                icon: mapping[prefix][iconName],
            }
        }
    }

    let Library =
  /*#__PURE__*/
  function () {
      function Library() {
          _classCallCheck(this, Library)

          this.definitions = {}
      }

      _createClass(Library, [{
          key: `add`,
          value: function add() {
              let _this = this

              for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
                  definitions[_key] = arguments[_key]
              }

              let additions = definitions.reduce(this._pullDefinitions, {})
              Object.keys(additions).forEach(function (key) {
                  _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key])
                  defineIcons(key, additions[key])
                  build()
              })
          },
      }, {
          key: `reset`,
          value: function reset() {
              this.definitions = {}
          },
      }, {
          key: `_pullDefinitions`,
          value: function _pullDefinitions(additions, definition) {
              let normalized = definition.prefix && definition.iconName && definition.icon ? {
                  0: definition,
              } : definition
              Object.keys(normalized).map(function (key) {
                  let _normalized$key = normalized[key]
                  let prefix = _normalized$key.prefix
                  let iconName = _normalized$key.iconName
                  let icon = _normalized$key.icon
                  let aliases = icon[2]
                  if (!additions[prefix]) {
                      additions[prefix] = {}
                  }

                  if (aliases.length > 0) {
                      aliases.forEach(function (alias) {
                          if (typeof alias === `string`) {
                              additions[prefix][alias] = icon
                          }
                      })
                  }

                  additions[prefix][iconName] = icon
              })
              return additions
          },
      }])

      return Library
  }()

    function getStyle(defaultStyle) {
        return defaultStyle in STYLE_TO_PREFIX ? defaultStyle : PREFIX_TO_STYLE[defaultStyle] || `solid`
    }

    function getPrefix(defaultStyle) {
        return STYLE_TO_PREFIX[getStyle(defaultStyle)]
    }

    function findIconDefinition(iconLookup) {
        iconLookup.prefix === `fa` ? iconLookup.prefix = `fas` : iconLookup.prefix
        let _iconLookup$prefix = iconLookup.prefix
        let prefix = _iconLookup$prefix === void 0 ? getPrefix(config.styleDefault) : _iconLookup$prefix
        let iconName = iconLookup.iconName
        if (!iconName) {
            return
        }
        return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName)
    }
    var library = new Library()
    let noAuto = function noAuto() {
        config.autoReplaceSvg = false
        config.observeMutations = false
        callHooks(`noAuto`)
    }
    let dom = {
        i2svg: function i2svg() {
            let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

            if (IS_DOM) {
                callHooks(`beforeI2svg`, params)
                callProvided(`pseudoElements2svg`, params)
                return callProvided(`i2svg`, params)
            } else {
                return providers.Promise.reject(`Operation requires a DOM of some kind.`)
            }
        },
        watch: function watch() {
            let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
            let autoReplaceSvgRoot = params.autoReplaceSvgRoot

            if (config.autoReplaceSvg === false) {
                config.autoReplaceSvg = true
            }

            config.observeMutations = true
            domready(function () {
                autoReplace({
                    autoReplaceSvgRoot: autoReplaceSvgRoot,
                })
                callHooks(`watch`, params)
            })
        },
    }
    let parse = {
        icon: function icon(_icon) {
            if (_icon === null) {
                return null
            }

            if (_typeof(_icon) === `object` && _icon.prefix && _icon.iconName) {
                return _icon
            }

            if (Array.isArray(_icon) && _icon.length === 2) {
                return {
                    prefix: getPrefix(_icon[0]),
                    iconName: _icon[1].indexOf(`fa-`) === 0 ? _icon[1].slice(3) : _icon[1],
                }
            }

            if (typeof _icon === `string` && (_icon.indexOf(``.concat(config.familyPrefix, `-`)) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
                let canonicalIcon = getCanonicalIcon(_icon.split(` `), {
                    skipLookups: true,
                })
                return {
                    prefix: getPrefix(canonicalIcon.prefix || config.styleDefault),
                    iconName: canonicalIcon.iconName,
                }
            }

            if (typeof _icon === `string`) {
                return {
                    prefix: getPrefix(config.styleDefault),
                    iconName: _icon,
                }
            }
        },
    }
    let api = {
        noAuto: noAuto,
        config: config,
        dom: dom,
        parse: parse,
        library: library,
        findIconDefinition: findIconDefinition,
        toHtml: toHtml,
    }

    var autoReplace = function autoReplace() {
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
        let _params$autoReplaceSv = params.autoReplaceSvgRoot
        let autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv
        if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) {
            api.dom.i2svg({
                node: autoReplaceSvgRoot,
            })
        }
    }

    function bootstrap(plugins) {
        if (IS_BROWSER) {
            if (!WINDOW.FontAwesome) {
                WINDOW.FontAwesome = api
            }

            domready(function () {
                autoReplace()
                callHooks(`bootstrap`)
            })
        }

        namespace.hooks = _objectSpread({}, namespace.hooks, {
            addPack: function addPack(prefix, icons) {
                namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, icons)
                build()
                autoReplace()
            },
            addPacks: function addPacks(packs) {
                packs.forEach(function (_ref) {
                    let _ref2 = _slicedToArray(_ref, 2)
                    let prefix = _ref2[0]
                    let icons = _ref2[1]

                    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, icons)
                })
                build()
                autoReplace()
            },
            addShims: function addShims(shims) {
                let _namespace$shims;

                (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims))

                build()
                autoReplace()
            },
        })
    }

    function domVariants(val, abstractCreator) {
        Object.defineProperty(val, `abstract`, {
            get: abstractCreator,
        })
        Object.defineProperty(val, `html`, {
            get: function get() {
                return val.abstract.map(function (a) {
                    return toHtml(a)
                })
            },
        })
        Object.defineProperty(val, `node`, {
            get: function get() {
                if (!IS_DOM) {
                    return
                }
                let container = DOCUMENT.createElement(`div`)
                container.innerHTML = val.html
                return container.children
            },
        })
        return val
    }

    function asIcon(_ref) {
        let children = _ref.children
        let main = _ref.main
        let mask = _ref.mask
        let attributes = _ref.attributes
        let styles = _ref.styles
        let transform = _ref.transform

        if (transformIsMeaningful(transform) && main.found && !mask.found) {
            let width = main.width
            let height = main.height
            let offset = {
                x: width / height / 2,
                y: 0.5,
            }
            attributes.style = joinStyles(_objectSpread({}, styles, {
                'transform-origin': ``.concat(offset.x + transform.x / 16, `em `).concat(offset.y + transform.y / 16, `em`),
            }))
        }

        return [{
            tag: `svg`,
            attributes: attributes,
            children: children,
        }]
    }

    function asSymbol(_ref) {
        let prefix = _ref.prefix
        let iconName = _ref.iconName
        let children = _ref.children
        let attributes = _ref.attributes
        let symbol = _ref.symbol
        let id = symbol === true ? ``.concat(prefix, `-`).concat(config.familyPrefix, `-`).concat(iconName) : symbol
        return [{
            tag: `svg`,
            attributes: {
                style: `display: none;`,
            },
            children: [{
                tag: `symbol`,
                attributes: _objectSpread({}, attributes, {
                    id: id,
                }),
                children: children,
            }],
        }]
    }

    function makeInlineSvgAbstract(params) {
        let _params$icons = params.icons
        let main = _params$icons.main
        let mask = _params$icons.mask
        let prefix = params.prefix
        let iconName = params.iconName
        let transform = params.transform
        let symbol = params.symbol
        let title = params.title
        let maskId = params.maskId
        let titleId = params.titleId
        let extra = params.extra
        let _params$watchable = params.watchable
        let watchable = _params$watchable === void 0 ? false : _params$watchable

        let _ref = mask.found ? mask : main
        let width = _ref.width
        let height = _ref.height

        let isUploadedIcon = prefix === `fak`
        let widthClass = isUploadedIcon ? `` : `fa-w-`.concat(Math.ceil(width / height * 16))
        let attrClass = [config.replacementClass, iconName ? ``.concat(config.familyPrefix, `-`).concat(iconName) : ``, widthClass].filter(function (c) {
            return extra.classes.indexOf(c) === -1
        }).filter(function (c) {
            return c !== `` || !!c
        }).concat(extra.classes).join(` `)
        let content = {
            children: [],
            attributes: _objectSpread({}, extra.attributes, {
                'data-prefix': prefix,
                'data-icon': iconName,
                class: attrClass,
                role: extra.attributes.role || `img`,
                xmlns: `http://www.w3.org/2000/svg`,
                viewBox: `0 0 `.concat(width, ` `).concat(height),
            }),
        }
        let uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf(`fa-fw`) ? {
            width: ``.concat(width / height * 16 * 0.0625, `em`),
        } : {}

        if (watchable) {
            content.attributes[DATA_FA_I2SVG] = ``
        }

        if (title) {
            content.children.push({
                tag: `title`,
                attributes: {
                    id: content.attributes[`aria-labelledby`] || `title-`.concat(titleId || nextUniqueId()),
                },
                children: [title],
            })
        }

        let args = _objectSpread({}, content, {
            prefix: prefix,
            iconName: iconName,
            main: main,
            mask: mask,
            maskId: maskId,
            transform: transform,
            symbol: symbol,
            styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles),
        })

        let _ref2 = mask.found && main.found ? callProvided(`generateAbstractMask`, args) || {
            children: [],
            attributes: {},
        } : callProvided(`generateAbstractIcon`, args) || {
            children: [],
            attributes: {},
        }
        let children = _ref2.children
        let attributes = _ref2.attributes

        args.children = children
        args.attributes = attributes

        if (symbol) {
            return asSymbol(args)
        } else {
            return asIcon(args)
        }
    }
    function makeLayersTextAbstract(params) {
        let content = params.content
        let width = params.width
        let height = params.height
        let transform = params.transform
        let title = params.title
        let extra = params.extra
        let _params$watchable2 = params.watchable
        let watchable = _params$watchable2 === void 0 ? false : _params$watchable2

        let attributes = _objectSpread({}, extra.attributes, title ? {
            title: title,
        } : {}, {
            class: extra.classes.join(` `),
        })

        if (watchable) {
            attributes[DATA_FA_I2SVG] = ``
        }

        let styles = _objectSpread({}, extra.styles)

        if (transformIsMeaningful(transform)) {
            styles.transform = transformForCss({
                transform: transform,
                startCentered: true,
                width: width,
                height: height,
            })
            styles[`-webkit-transform`] = styles.transform
        }

        let styleString = joinStyles(styles)

        if (styleString.length > 0) {
            attributes.style = styleString
        }

        let val = []
        val.push({
            tag: `span`,
            attributes: attributes,
            children: [content],
        })

        if (title) {
            val.push({
                tag: `span`,
                attributes: {
                    class: `sr-only`,
                },
                children: [title],
            })
        }

        return val
    }
    function makeLayersCounterAbstract(params) {
        let content = params.content
        let title = params.title
        let extra = params.extra

        let attributes = _objectSpread({}, extra.attributes, title ? {
            title: title,
        } : {}, {
            class: extra.classes.join(` `),
        })

        let styleString = joinStyles(extra.styles)

        if (styleString.length > 0) {
            attributes.style = styleString
        }

        let val = []
        val.push({
            tag: `span`,
            attributes: attributes,
            children: [content],
        })

        if (title) {
            val.push({
                tag: `span`,
                attributes: {
                    class: `sr-only`,
                },
                children: [title],
            })
        }

        return val
    }

    function MissingIcon(error) {
        this.name = `MissingIcon`
        this.message = error || `Icon unavailable`
        this.stack = new Error().stack
    }
    MissingIcon.prototype = Object.create(Error.prototype)
    MissingIcon.prototype.constructor = MissingIcon

    let styles$2 = namespace.styles
    function asFoundIcon(icon) {
        let width = icon[0]
        let height = icon[1]

        let _icon$slice = icon.slice(4)
        let _icon$slice2 = _slicedToArray(_icon$slice, 1)
        let vectorData = _icon$slice2[0]

        let element = null

        if (Array.isArray(vectorData)) {
            element = {
                tag: `g`,
                attributes: {
                    class: ``.concat(config.familyPrefix, `-`).concat(DUOTONE_CLASSES.GROUP),
                },
                children: [{
                    tag: `path`,
                    attributes: {
                        class: ``.concat(config.familyPrefix, `-`).concat(DUOTONE_CLASSES.SECONDARY),
                        fill: `currentColor`,
                        d: vectorData[0],
                    },
                }, {
                    tag: `path`,
                    attributes: {
                        class: ``.concat(config.familyPrefix, `-`).concat(DUOTONE_CLASSES.PRIMARY),
                        fill: `currentColor`,
                        d: vectorData[1],
                    },
                }],
            }
        } else {
            element = {
                tag: `path`,
                attributes: {
                    fill: `currentColor`,
                    d: vectorData,
                },
            }
        }

        return {
            found: true,
            width: width,
            height: height,
            icon: element,
        }
    }
    function findIcon(iconName, prefix) {
        if (prefix === `fa` && config.styleDefault !== null) {
            prefix = config.styleDefault
        }

        return new providers.Promise(function (resolve, reject) {
            let val = {
                found: false,
                width: 512,
                height: 512,
                icon: callProvided(`missingIconAbstract`) || {},
            }

            if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
                let icon = styles$2[prefix][iconName]
                return resolve(asFoundIcon(icon))
            }

            if (iconName && prefix && !config.showMissingIcons) {
                reject(new MissingIcon(`Icon is missing for prefix `.concat(prefix, ` with icon name `).concat(iconName)))
            } else {
                resolve(val)
            }
        })
    }

    let noop$1 = function noop() {}

    let p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
        mark: noop$1,
        measure: noop$1,
    }
    let preamble = `FA "6.0.0-alpha3"`

    let begin = function begin(name) {
        p.mark(``.concat(preamble, ` `).concat(name, ` begins`))
        return function () {
            return end(name)
        }
    }

    var end = function end(name) {
        p.mark(``.concat(preamble, ` `).concat(name, ` ends`))
        p.measure(``.concat(preamble, ` `).concat(name), ``.concat(preamble, ` `).concat(name, ` begins`), ``.concat(preamble, ` `).concat(name, ` ends`))
    }

    let perf = {
        begin: begin,
        end: end,
    }

    let noop$2 = function noop() {}

    function isWatched(node) {
        let i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null
        return typeof i2svg === `string`
    }

    function getMutator() {
        if (config.autoReplaceSvg === true) {
            return mutators.replace
        }

        let mutator = mutators[config.autoReplaceSvg]
        return mutator || mutators.replace
    }

    function convertSVG(abstractObj) {
        if (typeof abstractObj === `string`) {
            return DOCUMENT.createTextNode(abstractObj)
        }

        let tag = DOCUMENT.createElementNS(`http://www.w3.org/2000/svg`, abstractObj.tag)
        Object.keys(abstractObj.attributes || []).forEach(function (key) {
            tag.setAttribute(key, abstractObj.attributes[key])
        })
        let children = abstractObj.children || []
        children.forEach(function (child) {
            tag.appendChild(convertSVG(child))
        })
        return tag
    }

    function nodeAsComment(node) {
        return ` `.concat(node.outerHTML, ` Font Awesome fontawesome.com `)
    }

    var mutators = {
        replace: function replace(mutation) {
            let node = mutation[0]
            let nodeTagName = node.tagName.toLowerCase()

            if (node.parentNode) {
                mutation[1].forEach(function (abstract) {
                    node.parentNode.insertBefore(convertSVG(abstract), node)
                })
                let comment = DOCUMENT.createComment(config.keepOriginalSource && nodeTagName.toLowerCase() !== `svg` ? nodeAsComment(node) : ``)
                node.parentNode.replaceChild(comment, node)
            }
        },
        nest: function nest(mutation) {
            let node = mutation[0]
            let abstract = mutation[1] // If we already have a replaced node we do not want to continue nesting within it.
            // Short-circuit to the standard replacement

            if (~classArray(node).indexOf(config.replacementClass)) {
                return mutators.replace(mutation)
            }

            let forSvg = new RegExp(``.concat(config.familyPrefix, `-.*`))
            delete abstract[0].attributes.style
            delete abstract[0].attributes.id
            let splitClasses = abstract[0].attributes.class.split(` `).reduce(function (acc, cls) {
                if (cls === config.replacementClass || cls.match(forSvg)) {
                    acc.toSvg.push(cls)
                } else {
                    acc.toNode.push(cls)
                }

                return acc
            }, {
                toNode: [],
                toSvg: [],
            })
            abstract[0].attributes.class = splitClasses.toSvg.join(` `)
            let newInnerHTML = abstract.map(function (a) {
                return toHtml(a)
            }).join(`\n`)
            node.setAttribute(`class`, splitClasses.toNode.join(` `))
            node.setAttribute(DATA_FA_I2SVG, ``)
            node.innerHTML = newInnerHTML
        },
    }

    function performOperationSync(op) {
        op()
    }

    function perform(mutations, callback) {
        let callbackFunction = typeof callback === `function` ? callback : noop$2

        if (mutations.length === 0) {
            callbackFunction()
        } else {
            let frame = performOperationSync

            if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
                frame = WINDOW.requestAnimationFrame || performOperationSync
            }

            frame(function () {
                let mutator = getMutator()
                let mark = perf.begin(`mutate`)
                mutations.map(mutator)
                mark()
                callbackFunction()
            })
        }
    }
    let disabled = false
    function disableObservation() {
        disabled = true
    }
    function enableObservation() {
        disabled = false
    }
    let mo = null
    function observe(options) {
        if (!MUTATION_OBSERVER) {
            return
        }

        if (!config.observeMutations) {
            return
        }

        let _options$treeCallback = options.treeCallback
        let treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback
        let _options$nodeCallback = options.nodeCallback
        let nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback
        let _options$pseudoElemen = options.pseudoElementsCallback
        let pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen
        let _options$observeMutat = options.observeMutationsRoot
        let observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat
        mo = new MUTATION_OBSERVER(function (objects) {
            if (disabled) {
                return
            }
            toArray(objects).forEach(function (mutationRecord) {
                if (mutationRecord.type === `childList` && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
                    if (config.searchPseudoElements) {
                        pseudoElementsCallback(mutationRecord.target)
                    }

                    treeCallback(mutationRecord.target)
                }

                if (mutationRecord.type === `attributes` && mutationRecord.target.parentNode && config.searchPseudoElements) {
                    pseudoElementsCallback(mutationRecord.target.parentNode)
                }

                if (mutationRecord.type === `attributes` && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
                    if (mutationRecord.attributeName === `class`) {
                        let _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target))
                        let prefix = _getCanonicalIcon.prefix
                        let iconName = _getCanonicalIcon.iconName

                        if (prefix) {
                            mutationRecord.target.setAttribute(`data-prefix`, prefix)
                        }
                        if (iconName) {
                            mutationRecord.target.setAttribute(`data-icon`, iconName)
                        }
                    } else {
                        nodeCallback(mutationRecord.target)
                    }
                }
            })
        })
        if (!IS_DOM) {
            return
        }
        mo.observe(observeMutationsRoot, {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
        })
    }
    function disconnect() {
        if (!mo) {
            return
        }
        mo.disconnect()
    }

    function styleParser(node) {
        let style = node.getAttribute(`style`)
        let val = []

        if (style) {
            val = style.split(`;`).reduce(function (acc, style) {
                let styles = style.split(`:`)
                let prop = styles[0]
                let value = styles.slice(1)

                if (prop && value.length > 0) {
                    acc[prop] = value.join(`:`).trim()
                }

                return acc
            }, {})
        }

        return val
    }

    function classParser(node) {
        let existingPrefix = node.getAttribute(`data-prefix`)
        let existingIconName = node.getAttribute(`data-icon`)
        let innerText = node.innerText !== undefined ? node.innerText.trim() : ``
        let val = getCanonicalIcon(classArray(node))

        if (existingPrefix && existingIconName) {
            val.prefix = existingPrefix
            val.iconName = existingIconName
        }

        if (val.prefix && innerText.length > 1) {
            val.iconName = byLigature(val.prefix, node.innerText)
        } else if (val.prefix && innerText.length === 1) {
            val.iconName = byUnicode(val.prefix, toHex(node.innerText))
        }

        return val
    }

    function attributesParser(node) {
        let extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
            if (acc.name !== `class` && acc.name !== `style`) {
                acc[attr.name] = attr.value
            }

            return acc
        }, {})
        let title = node.getAttribute(`title`)
        let titleId = node.getAttribute(`data-fa-title-id`)

        if (config.autoA11y) {
            if (title) {
                extraAttributes[`aria-labelledby`] = ``.concat(config.replacementClass, `-title-`).concat(titleId || nextUniqueId())
            } else {
                extraAttributes[`aria-hidden`] = `true`
                extraAttributes.focusable = `false`
            }
        }

        return extraAttributes
    }

    function blankMeta() {
        return {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: meaninglessTransform,
            symbol: false,
            mask: {
                iconName: null,
                prefix: null,
                rest: [],
            },
            maskId: null,
            extra: {
                classes: [],
                styles: {},
                attributes: {},
            },
        }
    }
    function parseMeta(node) {
        let _classParser = classParser(node)
        let iconName = _classParser.iconName
        let prefix = _classParser.prefix
        let extraClasses = _classParser.rest

        let extraStyles = styleParser(node)
        let extraAttributes = attributesParser(node)
        let pluginMeta = chainHooks(`parseNodeAttributes`, {}, node)
        return _objectSpread({
            iconName: iconName,
            title: node.getAttribute(`title`),
            titleId: node.getAttribute(`data-fa-title-id`),
            prefix: prefix,
            transform: meaninglessTransform,
            mask: {
                iconName: null,
                prefix: null,
                rest: [],
            },
            maskId: null,
            symbol: false,
            extra: {
                classes: extraClasses,
                styles: extraStyles,
                attributes: extraAttributes,
            },
        }, pluginMeta)
    }

    let styles$3 = namespace.styles

    function generateMutation(node) {
        let nodeMeta = parseMeta(node)

        if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
            return callProvided(`generateLayersText`, node, nodeMeta)
        } else {
            return callProvided(`generateSvgReplacementMutation`, node, nodeMeta)
        }
    }

    function onTree(root) {
        let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
        if (!IS_DOM) {
            return providers.Promise.resolve()
        }
        let htmlClassList = DOCUMENT.documentElement.classList

        let hclAdd = function hclAdd(suffix) {
            return htmlClassList.add(``.concat(HTML_CLASS_I2SVG_BASE_CLASS, `-`).concat(suffix))
        }

        let hclRemove = function hclRemove(suffix) {
            return htmlClassList.remove(``.concat(HTML_CLASS_I2SVG_BASE_CLASS, `-`).concat(suffix))
        }

        let prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3)
        let prefixesDomQuery = [`.`.concat(LAYERS_TEXT_CLASSNAME, `:not([`).concat(DATA_FA_I2SVG, `])`)].concat(prefixes.map(function (p) {
            return `.`.concat(p, `:not([`).concat(DATA_FA_I2SVG, `])`)
        })).join(`, `)

        if (prefixesDomQuery.length === 0) {
            return providers.Promise.resolve()
        }

        let candidates = []

        try {
            candidates = toArray(root.querySelectorAll(prefixesDomQuery))
        } catch (e) {// noop
        }

        if (candidates.length > 0) {
            hclAdd(`pending`)
            hclRemove(`complete`)
        } else {
            return providers.Promise.resolve()
        }

        let mark = perf.begin(`onTree`)
        let mutations = candidates.reduce(function (acc, node) {
            try {
                let mutation = generateMutation(node)

                if (mutation) {
                    acc.push(mutation)
                }
            } catch (e) {
                if (!PRODUCTION) {
                    if (e.name === `MissingIcon`) {
                        console.error(e)
                    }
                }
            }

            return acc
        }, [])
        return new providers.Promise(function (resolve, reject) {
            providers.Promise.all(mutations).then(function (resolvedMutations) {
                perform(resolvedMutations, function () {
                    hclAdd(`active`)
                    hclAdd(`complete`)
                    hclRemove(`pending`)
                    if (typeof callback === `function`) {
                        callback()
                    }
                    mark()
                    resolve()
                })
            }).catch(function () {
                mark()
                reject()
            })
        })
    }

    function onNode(node) {
        let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
        generateMutation(node).then(function (mutation) {
            if (mutation) {
                perform([mutation], callback)
            }
        })
    }

    function resolveIcons(next) {
        return function (maybeIconDefinition) {
            let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
            let iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {})
            let mask = params.mask

            if (mask) {
                mask = (mask || {}).icon ? mask : findIconDefinition(mask || {})
            }

            return next(iconDefinition, _objectSpread({}, params, {
                mask: mask,
            }))
        }
    }

    let render = function render(iconDefinition) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        let _params$transform = params.transform
        let transform = _params$transform === void 0 ? meaninglessTransform : _params$transform
        let _params$symbol = params.symbol
        let symbol = _params$symbol === void 0 ? false : _params$symbol
        let _params$mask = params.mask
        let mask = _params$mask === void 0 ? null : _params$mask
        let _params$maskId = params.maskId
        let maskId = _params$maskId === void 0 ? null : _params$maskId
        let _params$title = params.title
        let title = _params$title === void 0 ? null : _params$title
        let _params$titleId = params.titleId
        let titleId = _params$titleId === void 0 ? null : _params$titleId
        let _params$classes = params.classes
        let classes = _params$classes === void 0 ? [] : _params$classes
        let _params$attributes = params.attributes
        let attributes = _params$attributes === void 0 ? {} : _params$attributes
        let _params$styles = params.styles
        let styles = _params$styles === void 0 ? {} : _params$styles
        if (!iconDefinition) {
            return
        }
        let prefix = iconDefinition.prefix
        let iconName = iconDefinition.iconName
        let icon = iconDefinition.icon
        return domVariants(_objectSpread({
            type: `icon`,
        }, iconDefinition), function () {
            callHooks(`beforeDOMElementCreation`, {
                iconDefinition: iconDefinition,
                params: params,
            })

            if (config.autoA11y) {
                if (title) {
                    attributes[`aria-labelledby`] = ``.concat(config.replacementClass, `-title-`).concat(titleId || nextUniqueId())
                } else {
                    attributes[`aria-hidden`] = `true`
                    attributes.focusable = `false`
                }
            }

            return makeInlineSvgAbstract({
                icons: {
                    main: asFoundIcon(icon),
                    mask: mask ? asFoundIcon(mask.icon) : {
                        found: false,
                        width: null,
                        height: null,
                        icon: {},
                    },
                },
                prefix: prefix,
                iconName: iconName,
                transform: _objectSpread({}, meaninglessTransform, transform),
                symbol: symbol,
                title: title,
                maskId: maskId,
                titleId: titleId,
                extra: {
                    attributes: attributes,
                    styles: styles,
                    classes: classes,
                },
            })
        })
    }
    let ReplaceElements = {
        mixout: function mixout() {
            return {
                icon: resolveIcons(render),
            }
        },
        hooks: function hooks() {
            return {
                mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                    accumulator.treeCallback = onTree
                    accumulator.nodeCallback = onNode
                    return accumulator
                },
            }
        },
        provides: function provides(providers$$1) {
            providers$$1.i2svg = function (params) {
                let _params$node = params.node
                let node = _params$node === void 0 ? DOCUMENT : _params$node
                let _params$callback = params.callback
                let callback = _params$callback === void 0 ? function () {} : _params$callback
                return onTree(node, callback)
            }

            providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
                let iconName = nodeMeta.iconName
                let title = nodeMeta.title
                let titleId = nodeMeta.titleId
                let prefix = nodeMeta.prefix
                let transform = nodeMeta.transform
                let symbol = nodeMeta.symbol
                let mask = nodeMeta.mask
                let maskId = nodeMeta.maskId
                let extra = nodeMeta.extra
                return new providers$$1.Promise(function (resolve, reject) {
                    providers$$1.Promise.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
                        let _ref2 = _slicedToArray(_ref, 2)
                        let main = _ref2[0]
                        let mask = _ref2[1]

                        resolve([node, makeInlineSvgAbstract({
                            icons: {
                                main: main,
                                mask: mask,
                            },
                            prefix: prefix,
                            iconName: iconName,
                            transform: transform,
                            symbol: symbol,
                            mask: mask,
                            maskId: maskId,
                            title: title,
                            titleId: titleId,
                            extra: extra,
                            watchable: true,
                        })])
                    })
                })
            }

            providers$$1.generateAbstractIcon = function (_ref3) {
                let children = _ref3.children
                let attributes = _ref3.attributes
                let main = _ref3.main
                let transform = _ref3.transform
                let styles = _ref3.styles
                let styleString = joinStyles(styles)

                if (styleString.length > 0) {
                    attributes.style = styleString
                }

                let nextChild

                if (transformIsMeaningful(transform)) {
                    nextChild = callProvided(`generateAbstractTransformGrouping`, {
                        main: main,
                        transform: transform,
                        containerWidth: main.width,
                        iconWidth: main.width,
                    })
                }

                children.push(nextChild || main.icon)
                return {
                    children: children,
                    attributes: attributes,
                }
            }
        },
    }

    let Layers = {
        mixout: function mixout() {
            return {
                layer: function layer(assembler) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                    let _params$classes = params.classes
                    let classes = _params$classes === void 0 ? [] : _params$classes
                    return domVariants({
                        type: `layer`,
                    }, function () {
                        callHooks(`beforeDOMElementCreation`, {
                            assembler: assembler,
                            params: params,
                        })
                        let children = []
                        assembler(function (args) {
                            Array.isArray(args) ? args.map(function (a) {
                                children = children.concat(a.abstract)
                            }) : children = children.concat(args.abstract)
                        })
                        return [{
                            tag: `span`,
                            attributes: {
                                class: [``.concat(config.familyPrefix, `-layers`)].concat(_toConsumableArray(classes)).join(` `),
                            },
                            children: children,
                        }]
                    })
                },
            }
        },
    }

    let LayersCounter = {
        mixout: function mixout() {
            return {
                counter: function counter(content) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                    let _params$title = params.title
                    let title = _params$title === void 0 ? null : _params$title
                    let _params$classes = params.classes
                    let classes = _params$classes === void 0 ? [] : _params$classes
                    let _params$attributes = params.attributes
                    let attributes = _params$attributes === void 0 ? {} : _params$attributes
                    let _params$styles = params.styles
                    let styles = _params$styles === void 0 ? {} : _params$styles
                    return domVariants({
                        type: `counter`,
                        content: content,
                    }, function () {
                        callHooks(`beforeDOMElementCreation`, {
                            content: content,
                            params: params,
                        })
                        return makeLayersCounterAbstract({
                            content: content.toString(),
                            title: title,
                            extra: {
                                attributes: attributes,
                                styles: styles,
                                classes: [``.concat(config.familyPrefix, `-layers-counter`)].concat(_toConsumableArray(classes)),
                            },
                        })
                    })
                },
            }
        },
    }

    let LayersText = {
        mixout: function mixout() {
            return {
                text: function text(content) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                    let _params$transform = params.transform
                    let transform = _params$transform === void 0 ? meaninglessTransform : _params$transform
                    let _params$title = params.title
                    let title = _params$title === void 0 ? null : _params$title
                    let _params$classes = params.classes
                    let classes = _params$classes === void 0 ? [] : _params$classes
                    let _params$attributes = params.attributes
                    let attributes = _params$attributes === void 0 ? {} : _params$attributes
                    let _params$styles = params.styles
                    let styles = _params$styles === void 0 ? {} : _params$styles
                    return domVariants({
                        type: `text`,
                        content: content,
                    }, function () {
                        callHooks(`beforeDOMElementCreation`, {
                            content: content,
                            params: params,
                        })
                        return makeLayersTextAbstract({
                            content: content,
                            transform: _objectSpread({}, meaninglessTransform, transform),
                            title: title,
                            extra: {
                                attributes: attributes,
                                styles: styles,
                                classes: [``.concat(config.familyPrefix, `-layers-text`)].concat(_toConsumableArray(classes)),
                            },
                        })
                    })
                },
            }
        },
        provides: function provides(providers$$1) {
            providers$$1.generateLayersText = function (node, nodeMeta) {
                let title = nodeMeta.title
                let transform = nodeMeta.transform
                let extra = nodeMeta.extra
                let width = null
                let height = null

                if (IS_IE) {
                    let computedFontSize = parseInt(getComputedStyle(node).fontSize, 10)
                    let boundingClientRect = node.getBoundingClientRect()
                    width = boundingClientRect.width / computedFontSize
                    height = boundingClientRect.height / computedFontSize
                }

                if (config.autoA11y && !title) {
                    extra.attributes[`aria-hidden`] = `true`
                }

                return providers.Promise.resolve([node, makeLayersTextAbstract({
                    content: node.innerHTML,
                    width: width,
                    height: height,
                    transform: transform,
                    title: title,
                    extra: extra,
                    watchable: true,
                })])
            }
        },
    }

    function replaceForPosition(node, position) {
        let pendingAttribute = ``.concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(`:`, `-`))
        return new providers.Promise(function (resolve, reject) {
            if (node.getAttribute(pendingAttribute) !== null) {
                // This node is already being processed
                return resolve()
            }

            let children = toArray(node.children)
            let alreadyProcessedPseudoElement = children.filter(function (c) {
                return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position
            })[0]
            let styles = WINDOW.getComputedStyle(node, position)
            let fontFamily = styles.getPropertyValue(`font-family`).match(FONT_FAMILY_PATTERN)
            let fontWeight = styles.getPropertyValue(`font-weight`)
            let content = styles.getPropertyValue(`content`)

            if (alreadyProcessedPseudoElement && !fontFamily) {
                // If we've already processed it but the current computed style does not result in a font-family,
                // that probably means that a class name that was previously present to make the icon has been
                // removed. So we now should delete the icon.
                node.removeChild(alreadyProcessedPseudoElement)
                return resolve()
            } else if (fontFamily && content !== `none` && content !== ``) {
                let _content = styles.getPropertyValue(`content`)

                let prefix = ~[`Solid`, `Regular`, `Light`, `Thin`, `Duotone`, `Brands`, `Kit`].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight]
                let hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content)
                let iconName = byUnicode(prefix, hexValue)
                let iconIdentifier = iconName // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
                // already done so with the same prefix and iconName

                if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
                    node.setAttribute(pendingAttribute, iconIdentifier)

                    if (alreadyProcessedPseudoElement) {
                        // Delete the old one, since we're replacing it with a new one
                        node.removeChild(alreadyProcessedPseudoElement)
                    }

                    let meta = blankMeta()
                    let extra = meta.extra
                    extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position
                    findIcon(iconName, prefix).then(function (main) {
                        let abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
                            icons: {
                                main: main,
                                mask: emptyCanonicalIcon(),
                            },
                            prefix: prefix,
                            iconName: iconIdentifier,
                            extra: extra,
                            watchable: true,
                        }))
                        let element = DOCUMENT.createElement(`svg`)

                        if (position === `::before`) {
                            node.insertBefore(element, node.firstChild)
                        } else {
                            node.appendChild(element)
                        }

                        element.outerHTML = abstract.map(function (a) {
                            return toHtml(a)
                        }).join(`\n`)
                        node.removeAttribute(pendingAttribute)
                        resolve()
                    }).catch(reject)
                } else {
                    resolve()
                }
            } else {
                resolve()
            }
        })
    }

    function replace(node) {
        return providers.Promise.all([replaceForPosition(node, `::before`), replaceForPosition(node, `::after`)])
    }

    function processable(node) {
        return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== `svg`)
    }

    function searchPseudoElements(root) {
        if (!IS_DOM) {
            return
        }
        return new providers.Promise(function (resolve, reject) {
            let operations = toArray(root.querySelectorAll(`*`)).filter(processable).map(replace)
            let end = perf.begin(`searchPseudoElements`)
            disableObservation()
            providers.Promise.all(operations).then(function () {
                end()
                enableObservation()
                resolve()
            }).catch(function () {
                end()
                enableObservation()
                reject()
            })
        })
    }

    let PseudoElements = {
        hooks: function hooks() {
            return {
                mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                    accumulator.pseudoElementsCallback = searchPseudoElements
                    return accumulator
                },
            }
        },
        provides: function provides(providers$$1) {
            providers$$1.pseudoElements2svg = function (params) {
                let _params$node = params.node
                let node = _params$node === void 0 ? DOCUMENT : _params$node

                if (config.searchPseudoElements) {
                    searchPseudoElements(node)
                }
            }
        },
    }

    let _unwatched = false
    let MutationObserver$1 = {
        mixout: function mixout() {
            return {
                dom: {
                    unwatch: function unwatch() {
                        disableObservation()
                        _unwatched = true
                    },
                },
            }
        },
        hooks: function hooks() {
            return {
                bootstrap: function bootstrap() {
                    observe(chainHooks(`mutationObserverCallbacks`, {}))
                },
                noAuto: function noAuto() {
                    disconnect()
                },
                watch: function watch(params) {
                    let observeMutationsRoot = params.observeMutationsRoot

                    if (_unwatched) {
                        enableObservation()
                    } else {
                        observe(chainHooks(`mutationObserverCallbacks`, {
                            observeMutationsRoot: observeMutationsRoot,
                        }))
                    }
                },
            }
        },
    }

    let parseTransformString = function parseTransformString(transformString) {
        let transform = {
            size: 16,
            x: 0,
            y: 0,
            flipX: false,
            flipY: false,
            rotate: 0,
        }
        return transformString.toLowerCase().split(` `).reduce(function (acc, n) {
            let parts = n.toLowerCase().split(`-`)
            let first = parts[0]
            let rest = parts.slice(1).join(`-`)

            if (first && rest === `h`) {
                acc.flipX = true
                return acc
            }

            if (first && rest === `v`) {
                acc.flipY = true
                return acc
            }

            rest = parseFloat(rest)

            if (isNaN(rest)) {
                return acc
            }

            switch (first) {
            case `grow`:
                acc.size = acc.size + rest
                break

            case `shrink`:
                acc.size = acc.size - rest
                break

            case `left`:
                acc.x = acc.x - rest
                break

            case `right`:
                acc.x = acc.x + rest
                break

            case `up`:
                acc.y = acc.y - rest
                break

            case `down`:
                acc.y = acc.y + rest
                break

            case `rotate`:
                acc.rotate = acc.rotate + rest
                break
            }

            return acc
        }, transform)
    }
    let PowerTransforms = {
        mixout: function mixout() {
            return {
                parse: {
                    transform: function transform(transformString) {
                        return parseTransformString(transformString)
                    },
                },
            }
        },
        hooks: function hooks() {
            return {
                parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                    let transformString = node.getAttribute(`data-fa-transform`)

                    if (transformString) {
                        accumulator.transform = parseTransformString(transformString)
                    }

                    return accumulator
                },
            }
        },
        provides: function provides(providers) {
            providers.generateAbstractTransformGrouping = function (_ref) {
                let main = _ref.main
                let transform = _ref.transform
                let containerWidth = _ref.containerWidth
                let iconWidth = _ref.iconWidth
                let outer = {
                    transform: `translate(`.concat(containerWidth / 2, ` 256)`),
                }
                let innerTranslate = `translate(`.concat(transform.x * 32, `, `).concat(transform.y * 32, `) `)
                let innerScale = `scale(`.concat(transform.size / 16 * (transform.flipX ? -1 : 1), `, `).concat(transform.size / 16 * (transform.flipY ? -1 : 1), `) `)
                let innerRotate = `rotate(`.concat(transform.rotate, ` 0 0)`)
                let inner = {
                    transform: ``.concat(innerTranslate, ` `).concat(innerScale, ` `).concat(innerRotate),
                }
                let path = {
                    transform: `translate(`.concat(iconWidth / 2 * -1, ` -256)`),
                }
                let operations = {
                    outer: outer,
                    inner: inner,
                    path: path,
                }
                return {
                    tag: `g`,
                    attributes: _objectSpread({}, operations.outer),
                    children: [{
                        tag: `g`,
                        attributes: _objectSpread({}, operations.inner),
                        children: [{
                            tag: main.icon.tag,
                            children: main.icon.children,
                            attributes: _objectSpread({}, main.icon.attributes, operations.path),
                        }],
                    }],
                }
            }
        },
    }

    let ALL_SPACE = {
        x: 0,
        y: 0,
        width: `100%`,
        height: `100%`,
    }

    function fillBlack(abstract) {
        let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true

        if (abstract.attributes && (abstract.attributes.fill || force)) {
            abstract.attributes.fill = `black`
        }

        return abstract
    }

    function deGroup(abstract) {
        if (abstract.tag === `g`) {
            return abstract.children
        } else {
            return [abstract]
        }
    }

    let Masks = {
        hooks: function hooks() {
            return {
                parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                    let maskData = node.getAttribute(`data-fa-mask`)
                    let mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(` `).map(function (i) {
                        return i.trim()
                    }))
                    accumulator.mask = mask
                    accumulator.maskId = node.getAttribute(`data-fa-mask-id`)
                    return accumulator
                },
            }
        },
        provides: function provides(providers) {
            providers.generateAbstractMask = function (_ref) {
                let children = _ref.children
                let attributes = _ref.attributes
                let main = _ref.main
                let mask = _ref.mask
                let explicitMaskId = _ref.maskId
                let transform = _ref.transform
                let mainWidth = main.width
                let mainPath = main.icon
                let maskWidth = mask.width
                let maskPath = mask.icon
                let trans = transformForSvg({
                    transform: transform,
                    containerWidth: maskWidth,
                    iconWidth: mainWidth,
                })
                let maskRect = {
                    tag: `rect`,
                    attributes: _objectSpread({}, ALL_SPACE, {
                        fill: `white`,
                    }),
                }
                let maskInnerGroupChildrenMixin = mainPath.children ? {
                    children: mainPath.children.map(fillBlack),
                } : {}
                let maskInnerGroup = {
                    tag: `g`,
                    attributes: _objectSpread({}, trans.inner),
                    children: [fillBlack(_objectSpread({
                        tag: mainPath.tag,
                        attributes: _objectSpread({}, mainPath.attributes, trans.path),
                    }, maskInnerGroupChildrenMixin))],
                }
                let maskOuterGroup = {
                    tag: `g`,
                    attributes: _objectSpread({}, trans.outer),
                    children: [maskInnerGroup],
                }
                let maskId = `mask-`.concat(explicitMaskId || nextUniqueId())
                let clipId = `clip-`.concat(explicitMaskId || nextUniqueId())
                let maskTag = {
                    tag: `mask`,
                    attributes: _objectSpread({}, ALL_SPACE, {
                        id: maskId,
                        maskUnits: `userSpaceOnUse`,
                        maskContentUnits: `userSpaceOnUse`,
                    }),
                    children: [maskRect, maskOuterGroup],
                }
                let defs = {
                    tag: `defs`,
                    children: [{
                        tag: `clipPath`,
                        attributes: {
                            id: clipId,
                        },
                        children: deGroup(maskPath),
                    }, maskTag],
                }
                children.push(defs, {
                    tag: `rect`,
                    attributes: _objectSpread({
                        fill: `currentColor`,
                        'clip-path': `url(#`.concat(clipId, `)`),
                        mask: `url(#`.concat(maskId, `)`),
                    }, ALL_SPACE),
                })
                return {
                    children: children,
                    attributes: attributes,
                }
            }
        },
    }

    let MissingIconIndicator = {
        provides: function provides(providers) {
            providers.missingIconAbstract = function () {
                let FILL = {
                    fill: `currentColor`,
                    test: 2,
                }
                let ANIMATION_BASE = {
                    attributeType: `XML`,
                    repeatCount: `indefinite`,
                    dur: `2s`,
                }
                let RING = {
                    tag: `path`,
                    attributes: _objectSpread({}, FILL, {
                        d: `M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`,
                    }),
                }

                let OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
                    attributeName: `opacity`,
                })

                let DOT = {
                    tag: `circle`,
                    attributes: _objectSpread({}, FILL, {
                        cx: `256`,
                        cy: `364`,
                        r: `28`,
                    }),
                    children: [{
                        tag: `animate`,
                        attributes: _objectSpread({}, ANIMATION_BASE, {
                            attributeName: `r`,
                            values: `28;14;28;28;14;28;`,
                        }),
                    }, {
                        tag: `animate`,
                        attributes: _objectSpread({}, OPACITY_ANIMATE, {
                            values: `1;0;1;1;0;1;`,
                        }),
                    }],
                }
                let QUESTION = {
                    tag: `path`,
                    attributes: _objectSpread({}, FILL, {
                        opacity: `1`,
                        d: `M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`,
                    }),
                    children: [{
                        tag: `animate`,
                        attributes: _objectSpread({}, OPACITY_ANIMATE, {
                            values: `1;0;0;0;0;1;`,
                        }),
                    }],
                }
                let EXCLAMATION = {
                    tag: `path`,
                    attributes: _objectSpread({}, FILL, {
                        opacity: `0`,
                        d: `M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`,
                    }),
                    children: [{
                        tag: `animate`,
                        attributes: _objectSpread({}, OPACITY_ANIMATE, {
                            values: `0;0;1;1;0;0;`,
                        }),
                    }],
                }
                return {
                    tag: `g`,
                    children: [RING, DOT, QUESTION, EXCLAMATION],
                }
            }
        },
    }

    let SvgSymbols = {
        hooks: function hooks() {
            return {
                parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                    let symbolData = node.getAttribute(`data-fa-symbol`)
                    let symbol = symbolData === null ? false : symbolData === `` ? true : symbolData
                    accumulator.symbol = symbol
                    return accumulator
                },
            }
        },
    }

    let plugins = [PromisePonyfill, InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols]

    registerPlugins(plugins, {
        mixoutsTo: api,
    })
    bunker(bootstrap)
}())
