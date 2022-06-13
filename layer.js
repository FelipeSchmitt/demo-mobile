// layerJS 0.6.4
// https://github.com/layerJS/layerJS
// contact us at developers@layerjs.org
// (c) 2017 - 2018
// this is open-source software. some restrictions apply.
// see https://github.com/layerJS/layerJS/blob/master/LICENSE
// branch: master
// commit: 096e17846510248af7d9c0bef063e3e3792d360f
// M package.json
// M src/framework/router/router.js


/** SOFTEXPERT **/
/** SOFTEXPERT **/
/** SOFTEXPERT **/
/** SOFTEXPERT **/
/** SOFTEXPERT **/
/** SOFTEXPERT **/

/** Esse JavaScript pertence à biblioteca Layer.JS, esse código é praticamente original, a única adaptação feita foi o tempo de duração das transições de slides.
Para mudar o tempo de transição: CTRL + F para pesquisar conteúdo no VSCode e digite "defaultDuration", encontrará o valor em segundos... **/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(e) {
    var m = 0;
    return function() {
        return m < e.length ? {
            done: !1,
            value: e[m++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(e) {
    return {
        next: $jscomp.arrayIteratorImpl(e)
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, m, l) {
    e != Array.prototype && e != Object.prototype && (e[m] = l.value)
};
$jscomp.getGlobal = function(e) {
    e = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, e];
    for (var m = 0; m < e.length; ++m) {
        var l = e[m];
        if (l && l.Math == Math) return l
    }
    return globalThis
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.SymbolClass = function(e, m) {
    this.$jscomp$symbol$id_ = e;
    $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: m
    })
};
$jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_
};
$jscomp.Symbol = function() {
    function e(l) {
        if (this instanceof e) throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (l || "") + "_" + m++, l)
    }
    var m = 0;
    return e
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.asyncIterator;
    e || (e = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {}
};
$jscomp.iteratorPrototype = function(e) {
    $jscomp.initSymbolIterator();
    e = {
        next: e
    };
    e[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return e
};
$jscomp.iteratorFromArray = function(e, m) {
    $jscomp.initSymbolIterator();
    e instanceof String && (e += "");
    var l = 0,
        h = {
            next: function() {
                if (l < e.length) {
                    var c = l++;
                    return {
                        value: m(c, e[c]),
                        done: !1
                    }
                }
                h.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return h.next()
            }
        };
    h[Symbol.iterator] = function() {
        return h
    };
    return h
};
$jscomp.polyfill = function(e, m, l, h) {
    if (m) {
        l = $jscomp.global;
        e = e.split(".");
        for (h = 0; h < e.length - 1; h++) {
            var c = e[h];
            c in l || (l[c] = {});
            l = l[c]
        }
        e = e[e.length - 1];
        h = l[e];
        m = m(h);
        m != h && null != m && $jscomp.defineProperty(l, e, {
            configurable: !0,
            writable: !0,
            value: m
        })
    }
};
$jscomp.polyfill("Array.prototype.keys", function(e) {
    return e ? e : function() {
        return $jscomp.iteratorFromArray(this, function(e) {
            return e
        })
    }
}, "es6", "es3");
$jscomp.checkStringArgs = function(e, m, l) {
    if (null == e) throw new TypeError("The 'this' value for String.prototype." + l + " must not be null or undefined");
    if (m instanceof RegExp) throw new TypeError("First argument to String.prototype." + l + " must not be a regular expression");
    return e + ""
};
$jscomp.polyfill("String.prototype.startsWith", function(e) {
    return e ? e : function(e, l) {
        var h = $jscomp.checkStringArgs(this, e, "startsWith");
        e += "";
        var c = h.length,
            f = e.length;
        l = Math.max(0, Math.min(l | 0, h.length));
        for (var b = 0; b < f && l < c;)
            if (h[l++] != e[b++]) return !1;
        return b >= f
    }
}, "es6", "es3");
$jscomp.polyfill("Number.parseFloat", function(e) {
    return e || parseFloat
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function(e) {
    return e ? e : function(e, l) {
        var h = $jscomp.checkStringArgs(this, e, "endsWith");
        e += "";
        void 0 === l && (l = h.length);
        l = Math.max(0, Math.min(l | 0, h.length));
        for (var c = e.length; 0 < c && 0 < l;)
            if (h[--l] != e[--c]) return !1;
        return 0 >= c
    }
}, "es6", "es3");
(function() {
    function e(m, l, h) {
        function c(a, g) {
            if (!l[a]) {
                if (!m[a]) {
                    var b = "function" == typeof require && require;
                    if (!g && b) return b(a, !0);
                    if (f) return f(a, !0);
                    g = Error("Cannot find module '" + a + "'");
                    throw g.code = "MODULE_NOT_FOUND", g;
                }
                g = l[a] = {
                    exports: {}
                };
                m[a][0].call(g.exports, function(d) {
                    return c(m[a][1][d] || d)
                }, g, g.exports, e, m, l, h)
            }
            return l[a].exports
        }
        for (var f = "function" == typeof require && require, b = 0; b < h.length; b++) c(h[b]);
        return c
    }
    return e
})()({
    1: [function(e, m, l) {
        var h = e("./domhelpers.js"),
            c = e("./pluginmanager.js"),
            f = e("./parsemanager.js"),
            b = e("./observer/domobserver.js");
        e = b.extend({
            constructor: function(a) {
                a = a || {};
                b.call(this);
                this._cache = {};
                this.childType = a.childType;
                this._setDocument(a);
                this.parent = a.parent;
                this.innerEl = this.innerEl || a.el;
                if (this.innerEl._ljView) throw "trying to initialialize view on element that already has a view";
                this.innerEl._ljView = this;
                this.outerEl = this.outerEl || a.el || this.innerEl;
                this.outerEl._ljView = this;
                this._parseChildren();
                this.registerEventHandlers();
                this.startObserving()
            },
            startObserving: function() {},
            registerEventHandlers: function() {
                this.on("childrenChanged", function(a) {
                    (a.addedNodes && 0 < a.addedNodes.length || a.removedNodes && 0 < a.removedNodes.length) && this._parseChildren({
                        addedNodes: a.addedNodes,
                        removedNodes: a.removedNodes
                    })
                })
            },
            _parseChildren: function(a) {
                a = a || {};
                var b = this;
                this._cache.children = [];
                this._cache.childNames = {};
                this._cache.childIDs = {};
                a.removedNodes && 0 < a.removedNodes.length && a.removedNodes.forEach(function(a) {
                    a._ljView && b.trigger("childRemoved", a._ljView)
                });
                var p = {};
                if (this.childType)
                    for (var d =
                            0; d < this.innerEl.children.length; d++) {
                        var n = this.innerEl.children[d];
                        n._ljView || h.getAttributeLJ(n, "type") !== this.childType || (c.createView(this.childType, {
                            el: n,
                            parent: this,
                            document: this.document
                        }), this._renderChildPosition(n._ljView), this.trigger("childAdded", n._ljView), p[n._ljView.id()] = 1);
                        n._ljView && n._ljView.type() === this.childType && (n = n._ljView, this._cache.children.push(n), this._cache.childNames[n.name()] = n, this._cache.childIDs[n.id()] = n)
                    }
                d = !1;
                if (a.addedNodes && 0 < a.addedNodes.length) {
                    n = a.addedNodes.length;
                    for (var k = 0; k < n; k++) a.addedNodes[k].parentElement === this.innerEl && (a.addedNodes[k]._ljView ? a.addedNodes[k]._ljView.parent !== this && (a.addedNodes[k]._ljView.parent = this) : d || (f.parseElement(a.addedNodes[k].parentNode, {
                        parent: this
                    }), d = !0), a.addedNodes[k]._ljView && !p[a.addedNodes[k]._ljView.id()] && this.trigger("childAdded", a.addedNodes[k]._ljView))
                }
            },
            getChildViewByName: function(a) {
                this._cache.childNames || this._parseChildren();
                return this._cache.childNames[a]
            },
            getChildViews: function() {
                this._cache.children ||
                    this._parseChildren();
                return this._cache.children
            },
            _setDocument: function(a) {
                this.document = document;
                a && (a.document ? this.document = a.document : a.el && (this.document = a.el.ownerDocument))
            },
            _renderChildPosition: function(a) {},
            applyStyles: function() {
                for (var a = arguments.length, b = 0; b < a; b++)
                    for (var c = Object.keys(arguments[b]), d = 0; d < c.length; d++) h.cssPrefix[c[d]] && (this.outerEl.style[h.cssPrefix[c[d]]] = arguments[b][c[d]]), this.outerEl.style[c[d]] = arguments[b][c[d]]
            },
            setAttributeLJ: function(a, b) {
                h.hasCssAttributeLJ(this.outerEl,
                    a) ? h.setCssAttributeLJ(this.outerEl, a, b) : h.setAttributeLJ(this.outerEl, a, b)
            },
            getAttributeLJ: function(a) {
                return h.getCssAttributeLJ(this.outerEl, a) || h.getAttributeLJ(this.outerEl, a)
            },
            getAttribute: function(a) {
                return this.outerEl.getAttribute(a)
            },
            id: function() {
                this._id || (this._id = this.getAttributeLJ("id") || this.outerEl.id || h.uniqueID(this.type(), this.document));
                return this._id
            },
            name: function() {
                var a = this.getAttributeLJ("name") || this.id();
                if (a.match(/\./)) {
                    if (this._name) return this._name;
                    console.warn('unsuitable layerJS name "' +
                        a + '" replaced by "' + (this._name = a = h.uniqueID(this.type(), this.document)) + '"')
                }
                this._name && (this._name = a);
                return a
            },
            type: function() {
                return this.getAttributeLJ("type")
            },
            nodeType: function() {
                return this.outerEl && this.outerEl.nodeType
            },
            width: function() {
                var a = this.getAttributeLJ("width") || this.getAttribute("width");
                null !== a ? this.setWidth(a) : a = this.outerEl.offsetWidth || this.outerEl.style.width || 0;
                return h.parseDimension(a, this.outerEl)
            },
            height: function() {
                var a = this.getAttributeLJ("height") || this.getAttribute("height");
                null !== a ? this.setHeight(a) : a = this.outerEl.offsetHeight || this.outerEl.style.height || 0;
                return h.parseDimension(a, this.outerEl)
            },
            setWidth: function(a) {
                a = h.parseDimension(a, this.outerEl);
                var b = this.getMargin();
                this.outerEl.style.width = a - (b.left + b.right) + "px"
            },
            setHeight: function(a) {
                a = h.parseDimension(a, this.outerEl);
                var b = this.getMargin();
                this.outerEl.style.height = a - (b.top + b.bottom) + "px"
            },
            x: function() {
                var a = this.getAttributeLJ("x");
                a = a || this.outerEl.offsetLeft || this.outerEl.style.left || 0;
                return h.parseDimension(a,
                    this.outerEl)
            },
            y: function() {
                var a = this.getAttributeLJ("y");
                a = a || this.outerEl.offsetTop || this.outerEl.style.top || 0;
                return h.parseDimension(a)
            },
            scaleX: function() {
                var a = this.getAttributeLJ("scale") || this.getAttributeLJ("scale-x");
                return a ? parseFloat(a) : 1
            },
            scaleY: function() {
                var a = this.getAttributeLJ("scale") || this.getAttributeLJ("scale-y");
                return a ? parseFloat(a) : 1
            },
            fitTo: function(a) {
                var b = this.getAttributeLJ("fit-to");
                !1 === a || b || (b = "width");
                return b
            },
            elasticLeft: function() {
                return this.getAttributeLJ("elastic-left")
            },
            elasticRight: function() {
                return this.getAttributeLJ("elastic-right")
            },
            elasticTop: function() {
                return this.getAttributeLJ("elastic-top")
            },
            elasticBottom: function() {
                return this.getAttributeLJ("elastic-bottom")
            },
            startPosition: function() {
                return this.getAttributeLJ("start-position") || "top-left"
            },
            noScrolling: function() {
                var a = this.getAttributeLJ("no-scrolling");
                return a ? "true" === a : !1
            },
            rotation: function() {
                return this.getAttributeLJ("rotation")
            },
            neighbors: function() {
                return {
                    l: this.getAttributeLJ("neighbors-l") ||
                        this.getAttributeLJ("neighbors.l"),
                    r: this.getAttributeLJ("neighbors-r") || this.getAttributeLJ("neighbors.r"),
                    t: this.getAttributeLJ("neighbors-t") || this.getAttributeLJ("neighbors.t"),
                    b: this.getAttributeLJ("neighbors-b") || this.getAttributeLJ("neighbors.b")
                }
            },
            layoutType: function() {
                return this.getAttributeLJ("layout-type") || this.getAttributeLJ("layout") || "slide"
            },
            defaultFrame: function() {
                return this.getAttributeLJ("default-frame")
            },
            defaultTransition: function() {
                return this.getAttributeLJ("transition")
            },
            nativeScroll: function() {
                var a = this.getAttributeLJ("native-scroll");
                return a ? "true" === a : !0
            },
            setNativeScroll: function(a) {
                this.setAttributeLJ("native-scroll", a)
            },
            getMargin: function() {
                var a = this.getComputedStyle();
                return {
                    top: h.parseDimension(a.getPropertyValue("margin-top") || "0"),
                    bottom: h.parseDimension(a.getPropertyValue("margin-bottom") || "0"),
                    right: h.parseDimension(a.getPropertyValue("margin-right") || "0"),
                    left: h.parseDimension(a.getPropertyValue("margin-left") || "0")
                }
            },
            noUrl: function() {
                return "true" ===
                    this.getAttributeLJ("no-url") ? !0 : !1
            },
            timer: function() {
                return this.getAttributeLJ("timer")
            },
            autoHeight: function() {
                return this.getAttributeLJ("auto-height")
            },
            autoWidth: function() {
                return this.getAttributeLJ("auto-width")
            },
            draggable: function() {
                return "true" === this.getAttributeLJ("draggable") ? !0 : !1
            },
            destroy: function() {
                this.unobserve();
                this.outerEl.parentNode.removeChild(this.outerEl)
            },
            setOriginalWidth: function() {
                this.originalWidth = {
                    width: "" === this.outerEl.style.width ? "" : this.outerEl.style.width,
                    computedStyleWidth: h.parseDimension(this.getComputedStyle().getPropertyValue("width"),
                        this.outerEl)
                }
            },
            getOriginalWidth: function() {
                return this.originalWidth
            },
            setOriginalHeight: function() {
                this.originalHeight = {
                    height: "" === this.outerEl.style.height ? "" : this.outerEl.style.height,
                    computedStyleHeight: h.parseDimension(this.getComputedStyle().getPropertyValue("height"), this.outerEl)
                }
            },
            getOriginalHeight: function() {
                return this.originalHeight
            },
            getComputedStyle: function() {
                return window.getComputedStyle(this.outerEl, null)
            },
            widthSet: function(a) {
                void 0 !== a && (this.widthSetByLJ = a);
                return this.widthSetByLJ
            },
            heightSet: function(a) {
                void 0 !== a && (this.heightSetByLJ = a);
                return this.heightSetByLJ
            }
        });
        m.exports = e
    }, {
        "./domhelpers.js": 3,
        "./observer/domobserver.js": 13,
        "./parsemanager.js": 20,
        "./pluginmanager.js": 21
    }],
    2: [function(e, m, l) {
        m.exports = {
            version: "default",
            defaultDuration: "0.2s",
            transitionParameters: {
                duration: "t",
                type: "p",
                delay: "d"
            },
            identifyPriority: {
                low: 1,
                normal: 2,
                high: 3
            },
            directions2neighbors: {
                up: "b",
                down: "t",
                left: "r",
                right: "l"
            },
            neighbors2transition: {
                b: "auto:up",
                t: "auto:down",
                r: "auto:left",
                l: "auto:right"
            },
            specialFrames: {
                none: "!none",
                left: "!left",
                right: "!right",
                top: "!top",
                bottom: "!bottom",
                next: "!next",
                previous: "!prev",
                default: "!default",
                current: "!current",
                toggle: "!toggle"
            }
        }
    }, {}],
    3: [function(e, m, l) {
        var h = e("./defaults.js"),
            c = e("./tmat.js"),
            f = null,
            b = {
                wrapChildren: function(a, b) {
                    b = b || {};
                    for (b = a.ownerDocument.createElement(b.tag || "div"); a.childNodes.length;) b.appendChild(a.childNodes[0]);
                    a.appendChild(b);
                    return b
                },
                unwrapChildren: function(a) {
                    for (var b = a.removeChild(a.children[0]); b.childNodes.length;) a.appendChild(b.childNodes[0])
                },
                addClass: function(a, b) {
                    a.className += (a.className ? " " : "") + b
                },
                removeClass: function(a, b) {
                    a.className = a.className.replace(new RegExp("(?:\\s+|^)" + b + "(?:\\s+|$)"), "")
                },
                detectBrowser: function() {
                    var a;
                    "undefined" === typeof navigator ? this.browser = "node" : (a = navigator.userAgent.match(/Edge\/([0-9]*)/)) ? (this.vendorPrefix = "-ms-", this.browserVersion = a[1], this.browser = "edge") : (a = navigator.userAgent.match(/MSIE ([0-9]*)/)) ? (this.vendorPrefix = "-ms-", this.browserVersion = a[1], this.browser = "ie") : (a = navigator.userAgent.match(/Trident.*rv:([0-9]*)/)) ?
                        (this.vendorPrefix = "-ms-", this.browserVersion = a[1], this.browser = "ie") : (a = navigator.userAgent.match(/Chrome\/([0-9]*)/)) ? (this.vendorPrefix = "-webkit-", this.browserVersion = a[1], this.browser = "chrome") : (a = navigator.userAgent.match(/Firefox\/([0-9]*)/)) ? (this.vendorPrefix = "", this.browserVersion = a[1], this.browser = "firefox") : navigator.userAgent.match(/iPad|iPhone|iPod/) ? (this.vendorPrefix = "-webkit-", this.browserVersion = 0, this.browser = "ios") : (a = navigator.userAgent.match(/Safari\/([0-9]*)/)) ? (this.vendorPrefix =
                            "-webkit-", this.browserVersion = a[1], this.browser = "safari") : navigator.userAgent.match(/AppleWebKit/) && (this.vendorPrefix = "-webkit-", this.browserVersion = 0, this.browser = "webkit")
                },
                calculatePrefixes: function(a) {
                    this.cssPrefix = this.cssPrefix || {};
                    for (var b = 0; b < a.length; b++) this.cssPrefix[a[b]] = this.vendorPrefix && this.vendorPrefix + a[b] || a[b]
                },
                postAnimationFrame: function(a) {
                    (window.requestAnimationFrame || function(a) {
                        setTimeout(a, 1E3 / 60)
                    })(function() {
                        setTimeout(a, 0)
                    })
                },
                selectView: function(a) {
                    a = a instanceof
                    HTMLElement ? [a] : document.querySelectorAll(a);
                    for (var b = 0; b < a.length; b++)
                        if (a[b]._ljView) return a[b]._ljView
                },
                addDelegtedListener: function(a, b, c, d) {
                    window.Element.prototype.matches || (window.Element.prototype.matches = window.Element.prototype.matchesSelector || window.Element.prototype.mozMatchesSelector || window.Element.prototype.msMatchesSelector || window.Element.prototype.oMatchesSelector || window.Element.prototype.webkitMatchesSelector || function(a) {
                        a = (this.document || this.ownerDocument).querySelectorAll(a);
                        for (var b = a.length; 0 <= --b && a.item(b) !== this;);
                        return -1 < b
                    });
                    a.addEventListener(b, function(b) {
                        var k = b.target;
                        if (k && document.contains(k)) {
                            for (; k !== a && !k.matches(c);) k = k.parentNode;
                            k !== a && d.call(k, b)
                        }
                    })
                },
                comparePosition: function(a, b) {
                    if (a === b) return 0;
                    if (!a.compareDocumentPosition) return a.sourceIndex - b.sourceIndex;
                    a = a.compareDocumentPosition(b);
                    if (a & window.Node.DOCUMENT_POSITION_DISCONNECTED) throw "compare position: the two elements belong to different documents";
                    return a & window.Node.DOCUMENT_POSITION_PRECEDING ||
                        a & window.Node.DOCUMENT_POSITION_CONTAINS ? 1 : -1
                },
                getAttributeLJ: function(a, b) {
                    return a.getAttribute("data-lj-" + b) || a.getAttribute("lj-" + b)
                },
                getCssAttributeLJ: function(a, b) {
                    return (a = window.getComputedStyle(a, null).getPropertyValue("--lj-" + b)) ? a.trim() : a
                },
                hasAttributeLJ: function(a, b) {
                    return a.hasAttribute("data-lj-" + b) || a.hasAttribute("lj-" + b)
                },
                hasCssAttributeLJ: function(a, b) {
                    return window.getComputedStyle(a, null).getPropertyValue("--lj-" + b)
                },
                setAttributeLJ: function(a, b, c) {
                    b = "lj-" + b;
                    a.getAttribute("data-" +
                        b) ? a.setAttribute("data-" + b, c) : a.setAttribute(b, c)
                },
                setCssAttributeLJ: function(a, b, c) {
                    a.style["--lj-" + b] = c
                },
                findParentViewOfType: function(a, b) {
                    a = a.parentElement;
                    for (var g = !1; a && !g;) a._ljView && a._ljView.type() === b ? g = !0 : a = a.parentElement;
                    return g ? a._ljView : void 0
                },
                timeToMS: function(a) {
                    if (isFinite(a)) return a;
                    a = a && a.match(/^([\d\.]*)(s|ms|min|h)$/);
                    if (!a) return 0;
                    switch (a[2]) {
                        case "ms":
                            return a[1];
                        case "s":
                            return 1E3 * a[1];
                        case "min":
                            return 6E4 * a[1];
                        case "h":
                            return 36E5 * a[1]
                    }
                    return 0
                },
                parseDimension: function(a,
                    b) {
                    if (!isNaN(Number(a))) return Number(a);
                    if (a.match(/px$/)) return parseInt(a);
                    if (a.match(/em$/)) return parseInt(a) * parseInt(window.getComputedStyle(b)["font-size"]);
                    if (a.match(/vh$/)) return parseInt(a) * window.innerHeight / 100;
                    if (a.match(/vw$/)) return parseInt(a) * window.innerWidth / 100
                },
                uniqueID: function(a, b) {
                    b = b || document;
                    void 0 === b._ljUniqueHash && (b._ljUniqueHash = {});
                    b = b._ljUniqueHash;
                    a = a || -1;
                    void 0 === b[a] && (b[a] = -1);
                    return -1 !== a ? a + "[" + ++b[a] + "]" : ++b[a]
                },
                debug: function() {
                    null === f && (f = document && document.body &&
                        b.getAttributeLJ(document.body, "debug") ? !0 : !1);
                    f && console.log.apply(console, arguments)
                },
                splitUrl: function(a) {
                    a = a.match(/^([^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/);
                    return {
                        location: a[1],
                        queryString: a[2],
                        hash: a[3]
                    }
                },
                joinUrl: function(a, b) {
                    var g = (a.location ? a.location : "") + (a.queryString ? "?" + a.queryString : "");
                    !0 !== b && (g += a.hash ? "#" + a.hash : "");
                    return g
                },
                parseStringForTransitions: function(a, b) {
                    var g = {};
                    if (a)
                        for (var d in h.transitionParameters)
                            if (h.transitionParameters.hasOwnProperty(d)) {
                                var c = new RegExp("(?:^|[?&])" +
                                        h.transitionParameters[d] + "=([^&]+)"),
                                    k = a.match(c);
                                k && (g[d] = k[1], !0 !== b && (a = a.replace(c, "")))
                            } return {
                        string: a,
                        transition: g
                    }
                },
                getAbsoluteUrl: function() {
                    var a = document.createElement("a");
                    return function(b) {
                        a.href = b;
                        return a.href
                    }
                }(),
                _parents: function(a) {
                    for (var b = [a]; a; a = a.parentNode) b.unshift(a);
                    return b
                },
                commonParent: function(a, b) {
                    a = this._parents(a);
                    b = this._parents(b);
                    if (a[0] !== b[0]) return null;
                    for (var g = 0; g < a.length; ++g)
                        if (a[g] !== b[g]) return a[g - 1];
                    return null
                },
                getMatrixArray: function(a) {
                    a = window.getComputedStyle(a,
                        null);
                    a = a.getPropertyValue("-webkit-transform") || a.getPropertyValue("-moz-transform") || a.getPropertyValue("-ms-transform") || a.getPropertyValue("-o-transform") || a.getPropertyValue("transform") || "FAIL";
                    if ("none" === a || void 0 === a || "FAIL" === a) a = [1, 0, 0, 1, 0, 0];
                    else {
                        a = a.toLowerCase();
                        var b = a.split("(")[1].split(")")[0].split(",").map(function(a) {
                                return parseFloat(a.replace(/\s+/g, ""))
                            }),
                            c = b[0],
                            d = b[1],
                            f = b[2],
                            k = b[3],
                            q = b[4],
                            e = b[5];
                        a.startsWith("matrix3d(") && (c = b[0], d = b[1], f = b[4], k = b[5], q = b[12], e = b[13]);
                        a = [c,
                            d, f, k, q, e
                        ]
                    }
                    return a
                },
                getMatrix: function(a) {
                    var b = new c(this.getMatrixArray(a));
                    return b = this.getTopLeftMatrix(a).prod(b)
                },
                getScaleAndRotationMatrix: function(a) {
                    a = new c(this.getMatrixArray(a));
                    a.tx = a.ty = 0;
                    return a
                },
                applyTopLeftOnMatrix: function(a, b) {
                    var c = b.get_rotation_equal();
                    c %= 360;
                    a = a.getBoundingClientRect();
                    var d = a.width,
                        g = a.height;
                    var k = a.top;
                    var q = a.left;
                    if (0 < c && 90 >= c || -270 > c && -360 <= c) c = c * Math.PI / 180 * -1, k = a.top, q = a.left - Math.sin(c) * g;
                    else if (90 < c && 180 >= c || -180 > c && -270 <= c) k = (180 - c) * Math.PI / 180,
                        q = c * Math.PI / 180, k = a.top - Math.cos(k) * g * -1, q = a.left + (Math.sin(q) * g + -1 * Math.cos(q) * d);
                    else if (0 > c && -90 <= c || 270 < c && 360 >= c) c = -c * Math.PI / 180, k = a.top + Math.sin(c) * d, q = a.left;
                    else if (-90 > c && -180 <= c || 180 < c && 270 >= c) q = (180 - c) * Math.PI / 180, k = -c * Math.PI / 180, q = a.left + Math.cos(q) * d, k = a.top + (Math.sin(k) * d + -1 * Math.cos(k) * g);
                    b.tx = q;
                    b.ty = k;
                    return b
                }
            };
        b.detectBrowser();
        b.calculatePrefixes(["transform", "transform-origin"]);
        m.exports = b
    }, {
        "./defaults.js": 2,
        "./tmat.js": 30
    }],
    4: [function(e, m, l) {
        l = e("./pluginmanager.js");
        var h =
            e("./domhelpers.js"),
            c = e("./baseview.js");
        e = e("./defaults.js");
        var f = c.extend({
            constructor: function(b) {
                this.renderRequiredAttributes = "lj-fit-to lj-elastic-left lj-elastic-right lj-elastic-top lj-elastic-bottom lj-width lj-height lj-x lj-y lj-scale-x lj-scale-y lj-rotation lj-start-position".split(" ");
                this.transformData = void 0;
                c.call(this, b);
                this.originalParent = this.parent
            },
            startObserving: function() {
                c.prototype.observe.call(this, this.innerEl, {
                    attributes: !0,
                    attributeFilter: ["name", "lj-name", "id"].concat(this.renderRequiredAttributes),
                    children: !0,
                    size: !0
                })
            },
            registerEventHandlers: function() {
                var b = this;
                c.prototype.registerEventHandlers.call(this);
                this.on("sizeChanged", function() {
                    b.parent && (b.inTransition ? (b.inTransitionListening || setTimeout(function g() {
                        b.inTransition ? setTimeout(g, 100) : (b.inTransitionListening = !1, b.trigger("renderRequired", b.name()))
                    }, 100), b.inTransitionListening = !0) : b.trigger("renderRequired", b.name()))
                });
                this.on("attributesChanged", this.attributesChanged)
            },
            attributesChanged: function(b) {
                for (var a = 0; a < this.renderRequiredAttributes.length; a++) {
                    var c =
                        Object.getOwnPropertyNames(b);
                    if (-1 !== c.indexOf(this.renderRequiredAttributes[a]) || -1 !== c.indexOf("data-" + this.renderRequiredAttributes[a])) {
                        this.trigger("renderRequired", this.name());
                        break
                    }
                }
            },
            getTransformData: function(b, a, c) {
                var g = this.transformData;
                if (!g || g.isDirty || g.layer !== b || a && a !== g.startPosition) return g && delete g.isDirty, this.unobserve(), this.transformData = this.calculateTransformData(b, a), this.startObserving(), this.transformData;
                c || (g.scrollX = g.initialScrollX, g.scrollY = g.initialScrollY);
                return g
            },
            getScrollData: function() {
                return this.transformData ? {
                    scrollX: this.transformData.scrollX,
                    scrollY: this.transformData.scrollY
                } : {}
            },
            calculateTransformData: function(b, a) {
                var c = b.parent,
                    f = b.getStageDimensions(this),
                    d = this.transformData = {},
                    e = d.stageWidth = f ? f.width : 0;
                f = d.stageHeight = f ? f.height : 0;
                if (0 === f || 0 === e) d.isDirty = !0;
                d.layer = b;
                d.scale = 1;
                d.frameWidth = this.width();
                d.frameHeight = this.height();
                d.shiftX = 0;
                d.shiftY = 0;
                d.scrollX = 0;
                d.scrollY = 0;
                d.isScrollX = !1;
                d.isScrollY = !1;
                d.margin = this.getMargin();
                b = this.fitTo(!1) || b.fitTo(); - 1 === ["responsive", "responsive-width"].indexOf(b) && this.widthSet() && (d.frameWidth = this.getOriginalWidth().computedStyleWidth, d.frameOriginalWidth = this.getOriginalWidth().width, this.widthSet(!1)); - 1 === ["responsive", "responsive-height"].indexOf(b) && this.heightSet() && (d.frameHeight = this.getOriginalHeight().computedStyleHeight, d.frameOriginalHeight = this.getOriginalHeight().height, this.heightSet(!1));
                var k = !1,
                    q = !1;
                switch (b) {
                    case "width":
                        d.scale = e / d.frameWidth;
                        k = d.isScrollY = !0;
                        break;
                    case "height":
                        d.scale = f / d.frameHeight;
                        q = !0;
                        d.isScrollX = !0;
                        break;
                    case "fixed":
                        d.scale = 1;
                        d.isScrollX = !0;
                        d.isScrollY = !0;
                        break;
                    case "contain":
                        d.scaleX = e / d.frameWidth;
                        d.scaleY = f / d.frameHeight;
                        q = k = !0;
                        d.scaleX < d.scaleY ? (d.scale = d.scaleX, d.isScrollY = !0) : (d.scale = d.scaleY, d.isScrollX = !0);
                        break;
                    case "cover":
                        d.scaleX = e / d.frameWidth;
                        d.scaleY = f / d.frameHeight;
                        q = k = !0;
                        d.scaleX > d.scaleY ? (d.scale = d.scaleX, d.isScrollY = !0) : (d.scale = d.scaleY, d.isScrollX = !0);
                        break;
                    case "elastic-width":
                        e <= d.frameWidth && e >= d.frameWidth -
                            this.elasticLeft() - this.elasticRight() ? (d.scale = 1, d.shiftX = this.elasticLeft() * (d.frameWidth - e) / (parseInt(this.elasticLeft()) + parseInt(this.elasticRight()))) : e > d.frameWidth ? d.scale = e / d.frameWidth : (d.scale = e / (d.frameWidth - this.elasticLeft() - this.elasticRight()), d.shiftX = this.elasticLeft());
                        k = !0;
                        d.isScrollY = !0;
                        break;
                    case "elastic-height":
                        f <= d.frameHeight && f >= d.frameHeight - this.elasticTop() - this.elasticBottom() ? (d.scale = 1, d.shiftY = this.elasticTop() * (d.frameHeight - f) / (parseInt(this.elasticTop()) + parseInt(this.elasticBottom()))) :
                            f > d.frameHeight ? d.scale = f / d.frameHeight : (d.scale = f / (d.frameHeight - this.elasticTop() - this.elasticBottom()), d.shiftY = this.elasticTop());
                        q = !0;
                        d.isScrollY = !0;
                        break;
                    case "responsive":
                        d.scale = 1;
                        d.frameWidth = e;
                        d.applyWidth = !0;
                        d.applyHeight = !0;
                        d.frameHeight = f;
                        q = k = !0;
                        break;
                    case "responsive-width":
                        d.scale = 1;
                        d.isScrollY = !0;
                        d.applyWidth = !0;
                        d.frameWidth = e;
                        k = !0;
                        break;
                    case "responsive-height":
                        d.scale = 1;
                        d.isScrollX = !0;
                        d.applyHeight = !0;
                        d.frameHeight = f;
                        q = !0;
                        break;
                    default:
                        throw "unkown fitTo type '" + b + "'";
                }
                k && c.autoWidth() ?
                    (console.warn("we can't adapt stage width if we fit to width"), d.stageWidth = e = d.width = 100) : q && c.autoHeight() && (console.warn("we can't adapt stage height if we fit to height"), d.stageHeight = f = d.height = 100);
                d.width = d.frameWidth * d.scale;
                d.height = d.frameHeight * d.scale;
                c && c.autoWidth() ? d.stageWidth = e = d.width : c && c.autoHeight() && (d.stageHeight = f = d.height);
                d.maxScrollY = 0;
                d.maxScrollX = 0;
                d.isScrollY && (d.maxScrollY = d.frameHeight - f / d.scale);
                d.isScrollX && (d.maxScrollX = d.frameWidth - e / d.scale);
                d.startPosition = a ||
                    this.startPosition();
                a = {
                    top: ["top", "center"],
                    bottom: ["bottom", "center"],
                    left: ["left", "middle"],
                    right: ["right", "middle"],
                    "top-left": ["top", "left"],
                    "top-right": ["top", "right"],
                    "bottom-left": ["bottom", "left"],
                    "bottom-right": ["bottom", "right"],
                    "middle-center": ["middle", "center"],
                    middle: ["middle", "center"],
                    center: ["middle", "center"]
                } [d.startPosition];
                for (c = 0; c < a.length; c++) switch (a[c]) {
                    case "top":
                        d.isScrollY && (d.scrollY = 0);
                        break;
                    case "bottom":
                        d.isScrollY && (d.scrollY = d.maxScrollY, 0 > d.scrollY && (d.shiftY =
                            d.scrollY, d.scrollY = 0));
                        break;
                    case "left":
                        d.isScrollX && (d.scrollX = 0);
                        break;
                    case "right":
                        d.isScrollX && (d.scrollX = d.maxScrollX, 0 > d.scrollX && (d.shiftX = d.scrollX, d.scrollX = 0));
                        break;
                    case "center":
                        d.isScrollX && (d.scrollX = (d.frameWidth - e / d.scale) / 2, 0 > d.scrollX && (d.shiftX = d.scrollX, d.scrollX = 0));
                        break;
                    case "middle":
                        d.isScrollY && (d.scrollY = (d.frameHeight - f / d.scale) / 2, 0 > d.scrollY && (d.shiftY = d.scrollY, d.scrollY = 0));
                        break;
                    default:
                        d.isScrollX && (d.scrollX = 0), d.isScrollY && (d.scrollY = 0)
                }
                0 >= d.maxScrollX && (d.shiftX +=
                    d.scrollX, d.scrollX = 0, d.maxScrollX = 0, d.isScrollX = !1);
                0 >= d.maxScrollY && (d.shiftY += d.scrollY, d.scrollY = 0, d.maxScrollY = 0, d.isScrollY = !1);
                this.noScrolling() && (d.shiftX += d.scrollX, d.shiftY += d.scrollY, d.scrollX = 0, d.scrollY = 0, d.isScrollX = !1, d.isScrollY = !1, d.maxScrollX = 0, d.maxScrollY = 0);
                d.shiftX *= d.scale;
                d.shiftY *= d.scale;
                d.initialScrollX = d.scrollX;
                d.initialScrollY = d.scrollY;
                d.frame = this;
                d.applyWidth && !this.widthSet() && (this.setOriginalWidth(), this.widthSet(!0));
                d.applyHeight && !this.heightSet() && (this.setOriginalHeight(),
                    this.heightSet(!0));
                return this.transformData = d
            },
            width: function() {
                var b = this.getMargin();
                b = b.left + b.right;
                return c.prototype.width.call(this) + b
            },
            height: function() {
                var b = this.getMargin();
                b = b.top + b.bottom;
                return c.prototype.height.call(this) + b
            }
        }, {
            defaultProperties: {
                type: "frame"
            },
            identify: function(b) {
                b = h.getAttributeLJ(b, "type");
                return null !== b && b.toLowerCase() === f.defaultProperties.type
            }
        });
        l.registerType("frame", f, e.identifyPriority.normal);
        m.exports = f
    }, {
        "./baseview.js": 1,
        "./defaults.js": 2,
        "./domhelpers.js": 3,
        "./pluginmanager.js": 21
    }],
    5: [function(e, m, l) {
        e = e("../../kern/Kern.js").Base.extend({
            constructor: function() {
                this.buttons = [!1, !1, !1];
                this.first = this.doubleClick = this.click = this.cancel = !1;
                this.id = 0;
                this.move = this.last = !1;
                this.shift = {
                    x: 0,
                    y: 0
                };
                this.shiftKey = !1;
                this.start = {
                    x: 0,
                    y: 0
                };
                this.startTime = (new Date).getTime();
                this.wheel = this.touch = !1;
                this.wheelDelta = 0;
                this.position = {
                    x: 0,
                    y: 0
                }
            },
            lifeTime: function() {
                return (new Date).getTime() - this.startTime
            },
            enoughDistance: function() {
                return 10 < Math.abs(this.shift.x) +
                    Math.abs(this.shift.y)
            }
        }, {});
        m.exports = e
    }, {
        "../../kern/Kern.js": 31
    }],
    6: [function(e, m, l) {
        l = e("../../kern/Kern.js");
        var h = e("./gesture.js");
        e = e("../layerjs.js");
        l = l.EventManager.extend({
            constructor: function() {
                this.element = this.gesture = null;
                this.gesturecc = 0;
                this.timeoutWheel = null
            },
            register: function(c, f, b) {
                b = b || {};
                this._registerTouchEvents(c, f, b);
                this._registerWheelEvents(c, f, b)
            },
            _registerWheelEvents: function(c, f, b) {
                var a = this;
                c.addEventListener("wheel", function(g) {
                    return a._wheel(g, c, f, b)
                })
            },
            _registerTouchEvents: function(c,
                f, b) {
                var a = this,
                    g = function(d) {
                        return a._tap(d, c, f, b)
                    },
                    e = function(d) {
                        return a._drag(d, c, f, b)
                    },
                    d = function(d) {
                        return a._release(d, c, f, b)
                    };
                "undefined" !== typeof window.ontouchstart && (c.addEventListener("touchstart", g), c.addEventListener("touchend", d), b.dragging && c.addEventListener("touchmove", e));
                b.mouseDragging && (c.addEventListener("mousedown", g), c.addEventListener("mouseup", d), b.dragging && c.addEventListener("mousemove", e))
            },
            _wheel: function(c, f, b, a) {
                this.timeoutWheel && clearTimeout(this.timeoutWheel);
                this.gesture = new h;
                this.gesture.wheel = !0;
                this.gesture.first = !0;
                this.gesture.start.x = this.gesture.position.x = this._xPosition(c);
                this.gesture.start.y = this.gesture.position.y = this._yPosition(c);
                this.element = f;
                this._raiseGesture(c, b);
                this.gesture.first = !1;
                this.gesture.wheelDelta = this._wheelDelta(c);
                this.gesture.position = {
                    x: this.gesture.position.x + 6 * this.gesture.wheelDelta.x,
                    y: this.gesture.position.y + 6 * this.gesture.wheelDelta.y
                };
                this.gesture.shift = {
                    x: this.gesture.position.x - this.gesture.start.x,
                    y: this.gesture.position.y -
                        this.gesture.start.y
                };
                this.gesture.last = !0;
                this._raiseGesture(c, b);
                return !1
            },
            _wheelDelta: function(c) {
                var f = {
                    x: 0,
                    y: 0
                };
                void 0 !== c.deltaY && void 0 !== c.deltaX ? (f.y = -c.deltaY / 3, f.x = -c.deltaX / 3) : void 0 !== c.wheelDeltaY && void 0 !== c.wheelDeltaX ? (f.y = -c.wheelDeltaY / 120, f.x = -c.wheelDeltaX / 120) : void 0 !== c.detail && (f.Y = -c.detail / 3);
                return f
            },
            _tap: function(c, f, b, a) {
                this.element = f;
                this.gesture = new h;
                this.gesture.first = !0;
                this.gesture.start.x = this._xPosition(c);
                this.gesture.start.y = this._yPosition(c);
                this.gesture.touch =
                    "mousedown" !== c.type;
                this.gesture.click = "mousedown" === c.type;
                this._raiseGesture(c, b);
                return !1
            },
            _release: function(c, f, b, a) {
                this.gesture.move = !1;
                this.gesture.last = !0;
                this.gesture.position.x = this._xPosition(c);
                this.gesture.position.y = this._yPosition(c);
                this.gesture.shift.x = this.gesture.position.x - this.gesture.start.x;
                this.gesture.shift.y = this.gesture.position.y - this.gesture.start.y;
                this._raiseGesture(c, b);
                this.gesture = this.element = null;
                return !1
            },
            _drag: function(c, f, b, a) {
                null !== this.gesture && (this.gesture.click ||
                    this.gesture.touch) && (this.gesture.first = !1, this.gesture.move = !0, this.gesture.position.x = this._xPosition(c), this.gesture.position.y = this._yPosition(c), this.gesture.shift.x = this.gesture.position.x - this.gesture.start.x, this.gesture.shift.y = this.gesture.position.y - this.gesture.start.y, this._raiseGesture(c, b));
                return !1
            },
            _yPosition: function(c) {
                return c.targetTouches && 1 <= c.targetTouches.length ? c.targetTouches[0].clientY : c.changedTouches && 1 <= c.changedTouches.length ? c.changedTouches[0].clientY : c.clientY
            },
            _xPosition: function(c) {
                return c.targetTouches && 1 <= c.targetTouches.length ? c.targetTouches[0].clientX : c.changedTouches && 1 <= c.changedTouches.length ? c.changedTouches[0].clientX : c.clientX
            },
            _raiseGesture: function(c, f) {
                if (f && this.gesture) {
                    this.gesture.event = c;
                    if (!this.gesture.direction) {
                        var b = this.gesture.shift.x,
                            a = this.gesture.shift.y;
                        this.gesture.enoughDistance() && (Math.abs(b) > Math.abs(a) ? (this.gesture.direction = 0 > b ? "left" : "right", this.gesture.axis = "x") : (this.gesture.direction = 0 > a ? "up" : "down", this.gesture.axis =
                            "y"))
                    }
                    f(this.gesture);
                    this.gesture.preventDefault && (c.preventDefault(), c.stopPropagation());
                    this.gesture.cancelled && (this.gesture = this.element = null)
                }
            }
        });
        e.gestureManager2 = new l;
        m.exports = e.gestureManager2
    }, {
        "../../kern/Kern.js": 31,
        "../layerjs.js": 7,
        "./gesture.js": 5
    }],
    7: [function(e, m, l) {
        l = e("./domhelpers.js");
        var h = e("./defaults.js");
        e("./polyfill.js");
        layerJS = {
            select: l.selectView,
            imagePath: "/",
            executeScriptCode: !0,
            defaults: h
        };
        m.exports = layerJS
    }, {
        "./defaults.js": 2,
        "./domhelpers.js": 3,
        "./polyfill.js": 22
    }],
    8: [function(e, m, l) {
        var h = e("./domhelpers.js"),
            c = e("../kern/Kern.js");
        l = e("./pluginmanager.js");
        var f = e("./layoutmanager.js"),
            b = e("./scrolltransformer.js"),
            a = e("./gestures/gesturemanager.js"),
            g = e("./defaults.js"),
            p = e("./baseview.js"),
            d = e("./layerjs.js"),
            n = p.extend({
                constructor: function(b) {
                    b = b || {};
                    b.childType = "frame";
                    this.transitionQueue = new c.Queue;
                    this.innerEl = this.outerEl = b.el;
                    1 === this.outerEl.children.length && "scroller" === h.getAttributeLJ(this.outerEl.children[0], "helper") && (this.innerEl = this.outerEl.children[0]);
                    p.call(this, b);
                    this._inTransition = !1;
                    this.scrollID = this.transitionID = this._transitionIDcounter = 1;
                    this.currentFrame = null;
                    this.switchLayout(this.layoutType());
                    this.switchScrolling(this.nativeScroll());
                    a.register(this.outerEl, this.gestureListener.bind(this), {
                        dragging: !0,
                        mouseDragging: this.draggable()
                    });
                    var d = this;
                    this.onResizeCallBack = function() {
                        d.render()
                    };
                    this.stage = this.parent;
                    this.on("scroll", function() {
                        this.trigger("scrolled")
                    });
                    var k;
                    (b = this.defaultFrame()) && b !== g.specialFrames.none && ((k = this._getFrame(b) ||
                        null) || console.warn("layerJS: layer '" + this.name() + "': could not find defaultframe: '" + b + "'"));
                    k || b === g.specialFrames.none || (k = this._getFrame(g.specialFrames.next) || null);
                    this.currentFrameTransformData = this.noFrameTransformdata();
                    k ? (this.currentFrame = k, this.showFrame(k.name(), {
                        lastFrameName: "",
                        applyCurrentPostPosition: !1
                    })) : (this.currentFrame = null, this.showFrame(g.specialFrames.none, {
                        lastFrameName: ""
                    }));
                    this.autoTrigger()
                },
                startObserving: function() {
                    p.prototype.observe.call(this, this.innerEl, {
                        attributes: !0,
                        attributeFilter: "name lj-name id lj-layout-type lj-native-scroll lj-no-scrolling".split(" "),
                        children: !0
                    })
                },
                registerEventHandlers: function() {
                    var a = this;
                    p.prototype.registerEventHandlers.call(this);
                    this.on("attributesChanged", this.attributesChanged);
                    if (this.parent) this.parent.on("renderRequired", function() {
                        a.render()
                    });
                    this.on("transitionStarted", function() {
                        a.autoTrigger()
                    })
                },
                attributesChanged: function(a) {
                    (a["lj-native-scroll"] || -1 !== a["data-lj-native-scroll"]) && this.switchScrolling(this.nativeScroll()); -
                    1 === a["lj-layout-type"] && -1 === a["data-lj-layout-type"] || this.switchLayout(this.layoutType()); - 1 === a["lj-timer"] && -1 === a["data-lj-timer"] || this.autoTrigger()
                },
                autoTrigger: function() {
                    var a = this.timer();
                    a && (a.match(/^[0-9]/) && (a = "#!next&d=" + a), d.router.navigate(a, this))
                },
                renderChildPosition: function(a) {
                    this._layout || this.switchLayout(this.layoutType());
                    this._layout.renderFramePosition(a, this._currentTransform)
                },
                inTransition: function(a, b) {
                    if (a) {
                        var d = this;
                        a = b && b.duration ? 50 + Number.parseFloat(b.duration) :
                            0;
                        this._inTransitionTimestamp = Date.now();
                        this._inTransitionDuration = a;
                        this._intransitionID = b.transitionID;
                        this._inTransition = !0;
                        0 < a && setTimeout(function() {
                            d._transitionEnd(b)
                        }, a)
                    } else !1 === a && this.transitionID === this._intransitionID && (delete this._inTransitionTimestamp, delete this._inTransitionDuration, delete this._intransitionID, this._inTransition = !1);
                    return this._inTransition
                },
                getRemainingTransitionTime: function() {
                    return this._inTransition ? Math.max(1, this._inTransitionDuration - (Date.now() - this._inTransitionTimestamp) -
                        50) : !1
                },
                switchScrolling: function(a) {
                    this.unobserve();
                    var d = 1 === this.outerEl.children.length && "scroller" === h.getAttributeLJ(this.outerEl.children[0], "helper");
                    a ? (this.innerEl = d ? this.outerEl.children[0] : h.wrapChildren(this.outerEl), h.setAttributeLJ(this.innerEl, "helper", "scroller"), this.innerEl._ljView || (this.innerEl._ljView = this.outerEl._ljView, this.innerEl._state = this.outerEl._state), h.addClass(this.outerEl, "nativescroll")) : (d && h.unwrapChildren(this.outerEl), this.innerEl = this.outerEl, h.removeClass(this.outerEl,
                        "nativescroll"));
                    this._transformer = this._layout.getScrollTransformer() || new b(this);
                    this.setNativeScroll(a);
                    this.currentFrame && this.showFrame(this.currentFrame.name(), this.currentFrame.getScrollData());
                    this.startObserving()
                },
                getCurrentScroll: function() {
                    return {
                        scrollX: this.currentFrameTransformData.scrollX,
                        scrollY: this.currentFrameTransformData.scrollY
                    }
                },
                resolveScrollElement: function(a, b) {
                    var d = a.scrollElement,
                        k = a.frame.innerEl;
                    if (d && k.contains(d)) {
                        if (d instanceof Text) {
                            var c = document.createRange();
                            c.selectNodeContents(d);
                            d = c.getBoundingClientRect()
                        } else d = d.getBoundingClientRect();
                        k = k.getBoundingClientRect();
                        if (a.scrollIfNeeded) {
                            c = (d.top - k.top) / b.scale;
                            var f = (d.bottom - k.top - b.stageHeight) / b.scale + b.margin.top;
                            if (Math.min(c, f) > b.scrollY || Math.max(c, f) < b.scrollY) a.scrollY = Math.abs(b.scrollY - c) < Math.abs(b.scrollY - f) ? c : f;
                            c = (d.left - k.left) / b.scale;
                            d = (d.right - k.left - b.stageWidth) / b.scale + b.margin.left;
                            if (Math.min(c, d) > b.scrollX || Math.max(c, d) < b.scrollX) a.scrollX = Math.abs(b.scrollX - c) < Math.abs(b.scrollX -
                                d) ? c : d
                        } else a.scrollX = (d.left - k.left) / b.scale, a.scrollY = (d.top - k.top) / b.scale
                    }
                },
                scrollTo: function(a, b, d) {
                    if (null !== this.currentFrame) {
                        a instanceof HTMLElement || a instanceof Text ? (d = b || {}, d.scrollElement = a, a = b = void 0) : "object" === typeof a && (d = a, a = b = void 0);
                        d = d || {};
                        d.startPosition && (this.currentFrameTransformData = this.currentFrame.getTransformData(this, d.startPosition));
                        var k = this.currentFrameTransformData;
                        a = void 0 !== a ? a : void 0 !== d.scrollX ? d.scrollX : k.scrollX || 0;
                        b = void 0 !== b ? b : void 0 !== d.scrollY ? d.scrollY :
                            k.scrollY || 0;
                        d.scrollX = a;
                        d.scrollY = b;
                        d = c._extend({
                            lastFrameName: this.currentFrame.name(),
                            applyTargetPrePosition: !1,
                            applyCurrentPostPosition: !1,
                            applyCurrentPrePosition: !1,
                            duration: "",
                            type: "none"
                        }, d || {});
                        return this.transitionTo(this.currentFrame.name(), d)
                    }
                },
                switchLayout: function(a) {
                    this._layout = new(f.get(a))(this);
                    this._transformer = this._layout.getScrollTransformer() || new b(this);
                    this.currentFrame && this.render()
                },
                setLayerTransform: function(a, b) {
                    var d = 0;
                    b && b.transition && (d = h.timeToMS(b.transition));
                    d = this.inTransition() ? Math.max(this.getRemainingTransitionTime(), d) : d;
                    return this._layout.setLayerTransform(a, {
                        transition: d ? d + "ms" : ""
                    })
                },
                gestureListener: function(a) {
                    if (!a.event._ljEvtHndld || a.event._ljEvtHndld === this)
                        if (a.event._ljEvtHndld = this, null !== this.currentFrame) {
                            var b = this._transformer.scrollGestureListener(a);
                            if (!a.first)
                                if ("wheel" === a.event.type && (a.preventDefault = !0), !0 === b) a.preventDefault = !1;
                                else if (b) this.setLayerTransform(this.currentTransform = b), this.trigger("scrolled"), a.preventDefault = !0;
                            else if (this.inTransition() && (a.preventDefault = !0), b = this.currentFrame.neighbors(), a.direction)
                                if (b && b[g.directions2neighbors[a.direction]]) {
                                    if (a.preventDefault = !0, !this.inTransition() && (a.last || a.wheel && a.enoughDistance())) {
                                        var c = b[g.directions2neighbors[a.direction]];
                                        c.match(/^#/) ? d.router.navigate(c) : this.transitionTo(b[g.directions2neighbors[a.direction]], {
                                            type: g.neighbors2transition[g.directions2neighbors[a.direction]]
                                        })
                                    }
                                } else a.preventDefault = !1, h.debug(a.direction), !b || !b.l && !b.r || "left" !==
                                    a.direction && "right" !== a.direction || (a.preventDefault = !0);
                            else a.event.stopPropagation(), a.preventDefault = !0
                        }
                },
                getStageDimensions: function(a) {
                    if (this._layout && this._layout.getStageDimensions) return this._layout.getStageDimensions(a);
                    if (this.parent) return {
                        width: this.parent.width(),
                        height: this.parent.height()
                    }
                },
                showFrame: function(a, b) {
                    if (this.stage) return b = c._extend({
                        scrollX: 0,
                        scrollY: 0,
                        lastFrameName: this.currentFrame && this.currentFrame.name() || g.specialFrames.none,
                        applyTargetPrePosition: !1,
                        applyCurrentPostPosition: this.currentFrame ?
                            a !== this.currentFrame.name() && a !== g.specialFrames.current : !1,
                        applyCurrentPrePosition: !1,
                        duration: "",
                        type: "none"
                    }, b || {}), this.transitionTo(a, b)
                },
                noFrameTransformdata: function(a) {
                    if (this._noframetd && this._noframetd.startPosition === a) return this._noframetd;
                    var b = this._noframetd = {};
                    b.scale = 1;
                    b.width = this.stage ? this.stage.width() : 0;
                    b.height = this.stage ? this.stage.height() : 0;
                    b.frameWidth = 0;
                    b.frameHeight = 0;
                    var d = this.fitTo();
                    switch (d) {
                        case "width":
                        case "elastic-width":
                        case "responsive-width":
                            b.frameWidth =
                                b.width;
                            break;
                        case "height":
                        case "elastic-height":
                        case "responsive-height":
                            b.frameHeight = b.height;
                            break;
                        case "fixed":
                        case "responsive":
                        case "contain":
                        case "cover":
                            b.frameWidth = b.width;
                            b.frameHeight = b.height;
                            break;
                        default:
                            throw "unkown fitTo type '" + d + "'";
                    }
                    this.stage && this.stage.autoHeight() && (b.height = b.frameHeight = 0);
                    this.stage && this.stage.autoWidth() && (b.width = b.frameWidth = 0);
                    b.shiftX = b.shiftY = b.scrollX = b.scrollY = 0;
                    b.isScrollX = b.isScrollY = !1;
                    b.startPosition = a || "top";
                    b.initialScrollX = b.scrollX;
                    b.initialScrollY =
                        b.scrollY;
                    return b
                },
                transitionTo: function(a, b) {
                    var d = this;
                    b = b || {};
                    "object" === typeof a && null !== a ? (b = a, a = b.framename) : null !== a && (a = a || b && b.framename);
                    var f = b.groupId || (b.groupId = h.uniqueID("group")),
                        k = this.lastgroupId !== f;
                    this.lastgroupId = f;
                    if (b.delay) b.semaphore && b.semaphore.skip(), setTimeout(function() {
                        b.groupId === d.lastgroupId && (delete b.semaphore, delete b.delay, delete b.transitionID, d.transitionTo(a, b))
                    }, h.timeToMS(b.delay));
                    else {
                        var e = function() {
                            if (!a && null !== a) throw "transformTo: no frame given";
                            var f = a ? d._getFrame(a, b) : null;
                            if (!f && null !== f) throw "transformTo: " + a + " does not exist in layer";
                            f && null !== f && (a = f.name());
                            if (b && b.type && b.type.match(/^auto:/)) {
                                var k = b.type.replace(/^auto:/, "");
                                delete b.type
                            }
                            b = c._extend({
                                type: b && b.type ? "default" : f && f.defaultTransition() || d.defaultTransition() || k || "default",
                                previousType: b && b.type ? void 0 : d.currentFrame && d.currentFrame.defaultTransition() || void 0,
                                duration: g.defaultDuration,
                                lastFrameName: d.currentFrame && d.currentFrame.name() || g.specialFrames.none,
                                frame: f,
                                framename: a,
                                applyTargetPrePosition: !b.noActivation && (b.applyTargetPrePosition || f && f.parent && f.parent === d) || !1,
                                interStage: f && f.parent && f.parent !== d,
                                applyCurrentPostPosition: !0 !== b.applyCurrentPostPosition && d.currentFrame && d.currentFrame.parent && d.currentFrame.parent === d && !b.noActivation || !1,
                                applyCurrentPrePosition: !0 !== b.applyCurrentPrePosition && d.currentFrame && d.currentFrame.parent && d.currentFrame.parent === d && !b.noActivation || !1
                            }, b || {});
                            b.type && b.type.match(/^(?:r:|reverse:)/i) && (b.type = b.type.replace(/^(?:r:|reverse:)/i,
                                ""), b.reverse = !0);
                            b.previousType && b.previousType.match(/^(?:r:|reverse:)/i) && (b.previousType = b.previousType.replace(/^(?:r:|reverse:)/i, ""), b.previousReverse = !0);
                            b.semaphore || (b.semaphore = (new c.Semaphore).register());
                            b.semaphore.listen(!0).then(function(a) {
                                0 < a && (!1 !== b.applyTargetPrePosition || b.interStage) && d.trigger("transitionPrepared")
                            });
                            b.semaphore.listen().then(function() {
                                d.updateClasses();
                                d.transitionQueue.continue()
                            });
                            d.inTransition() && (b.wasInTransition = !0);
                            b.duration = Math.max(d.getRemainingTransitionTime() ||
                                0, h.timeToMS(b.duration) || 0) + "ms";
                            "0ms" === b.duration && (b.duration = "");
                            d.trigger("beforeTransition", a);
                            b.transitionID = d.transitionID = ++d._transitionIDcounter;
                            d.inTransition(!0, b);
                            h.debug("running new transition", b.transitionID, b, a, d.id());
                            return d._layout.loadFrame(f).then(function() {
                                var k = d.getCurrentScroll(),
                                    g = b.targetFrameTransformData = null === f ? d.noFrameTransformdata(b.startPosition) : f.getTransformData(d, b.startPosition);
                                b.scrollElement && d.resolveScrollElement(b, g);
                                var e = d._transformer.getScrollTransform(g,
                                    b, !0);
                                if (d.currentFrame === f && d.currentFrameTransformData === g)
                                    if (g.scrollX !== k.scrollX || g.scrollY !== k.scrollY) b = c._extend(b, {
                                        applyTargetPrePosition: !1,
                                        applyCurrentPostPosition: !1,
                                        applyCurrentPrePosition: !1,
                                        scrollX: g.scrollX,
                                        scrollY: g.scrollY,
                                        type: "none"
                                    });
                                    else {
                                        var n = new c.Promise;
                                        d.trigger("transitionStarted", a, b);
                                        b.semaphore.sync().then(function() {
                                            b.wasInTransition || (d.trigger("transitionFinished", a), d.inTransition(!1));
                                            n.resolve()
                                        });
                                        return n
                                    } f && (f.inTransition = !0);
                                k = d._layout.transitionTo(f, b, g,
                                    e).then(function() {
                                    d._transitionEnd(b)
                                });
                                b.noActivation || (d.currentFrameTransformData = g, d.currentFrame = f, d.currentTransform = e);
                                d.trigger("transitionStarted", a, b);
                                return k
                            })
                        };
                        return k ? this.transitionQueue.add(b.isEvent && "event").then(function() {
                            try {
                                return e()
                            } catch (t) {
                                throw d.transitionQueue.continue(), t;
                            }
                        }) : e()
                    }
                },
                _transitionEnd: function(a) {
                    var b = this;
                    a.transitionID === this.transitionID && (h.debug("transition finished", a.transitionID), a.noActivation || (this.currentTransform = this._transformer.getScrollTransform(a.targetFrameTransformData || {}, a, !1)), this.inTransition(!1), a.noActivation || this.setLayerTransform(this.currentTransform), this.updateClasses(), a.frame && (a.frame.inTransition = !1), h.postAnimationFrame(function() {
                        b.trigger("transitionFinished", a.framename)
                    }))
                },
                _getFrame: function(a, b) {
                    if (a === g.specialFrames.left || a === g.specialFrames.right || a === g.specialFrames.top || a === g.specialFrames.bottom)
                        if (null !== this.currentFrame) {
                            var c = this.currentFrame.neighbors();
                            b = b || {};
                            c && c.l && a === g.specialFrames.left ? a = c.l : c && c.r && a === g.specialFrames.right ?
                                a = c.r : c && c.t && a === g.specialFrames.top ? a = c.t : c && c.b && a === g.specialFrames.bottom ? a = c.b : b.type !== g.neighbors2transition.r || a !== g.specialFrames.left || (!c || c.l) && c ? b.type !== g.neighbors2transition.l || a !== g.specialFrames.right || (!c || c.r) && c ? b.type !== g.neighbors2transition.b || a !== g.specialFrames.bottom || (!c || c.u) && c ? b.type !== g.neighbors2transition.u || a !== g.specialFrames.top || (!c || c.b) && c ? c || (a = g.specialFrames.next) : a = g.specialFrames.next : a = g.specialFrames.previous : a = g.specialFrames.previous : a = g.specialFrames.next
                        } else null ===
                            this.currentFrame && (a !== g.specialFrames.previous ? a = g.specialFrames.next : a !== g.specialFrames.next && (a = g.specialFrames.previous));
                    a === g.specialFrames.toggle && (a = null === this.currentFrame ? g.specialFrames.next : g.specialFrames.none);
                    a === g.specialFrames.next ? a = this._getNextFrameName() : a === g.specialFrames.previous ? a = this._getPreviousFrameName() : a === g.specialFrames.current && (a = null !== this.currentFrame ? this.currentFrame.name() : g.specialFrames.none);
                    if (a === g.specialFrames.none) b = null;
                    else if (b = this.getChildViewByName(a),
                        void 0 === b && void 0 !== a) {
                        a = d.getState().resolvePath(a);
                        if (1 < a.length) throw "only 1 path should be expected";
                        0 < a.length && (b = a[0].view)
                    }
                    return b
                },
                _getNextFrameName: function() {
                    var a = this.getChildViews();
                    if (null === this.currentFrame && 0 < a.length) var b = a[0].name();
                    else if (null !== this.currentFrame && 0 < a.length) {
                        for (b = 0; b < a.length && this.currentFrame.name() !== a[b].name(); b++);
                        b = b + 1 < a.length ? a[b + 1].name() : a[0].name()
                    }
                    return b
                },
                _getPreviousFrameName: function() {
                    var a = this.getChildViews();
                    if (null === this.currentFrame &&
                        0 < a.length) var b = a[0].name();
                    else if (null !== this.currentFrame && 0 < a.length) {
                        for (var d = a.length - 1; 0 <= d && this.currentFrame.name() !== a[d].name(); d--);
                        0 === d ? b = a[a.length - 1].name() : 0 < d && (b = a[d - 1].name())
                    }
                    return b
                },
                getCurrentTransform: function() {
                    return this.currentTransform
                },
                updateClasses: function() {
                    for (var a = this.getChildViews(), b = a.length, d = 0; d < b; d++) h.removeClass(a[d].outerEl, "lj-active"), h.removeClass(a[d].outerEl, "lj-transition");
                    null !== this.currentFrame && h.addClass(this.currentFrame.outerEl, "lj-active");
                    for (d = 0; d < arguments.length; d++) arguments[d] && arguments[d].outerEl && h.addClass(arguments[d].outerEl, "lj-transition")
                },
                _renderChildPosition: function(a) {
                    this._layout || this.switchLayout(this.layoutType());
                    a.unobserve();
                    this._layout.renderFramePosition(a, this.currentTransform);
                    a.startObserving()
                },
                render: function() {
                    var a = this.getChildViews(),
                        b = a.length,
                        d = null !== this.currentFrame ? this.currentFrame.getScrollData() : {};
                    d.isEvent = !0;
                    for (var c = 0; c < b; c++) {
                        var f = a[c];
                        void 0 !== f.transformData && (f.transformData.isDirty = !0)
                    }
                    this.showFrame(g.specialFrames.current, d)
                },
                _parseChildren: function(a) {
                    p.prototype._parseChildren.call(this, a);
                    var b = this._cache.children,
                        d = this;
                    a && a.removedNodes && 0 < a.removedNodes.length && a.removedNodes.forEach(function(a) {
                        a._ljView && a._ljView.off("renderRequired", void 0, d)
                    });
                    if (a && a.addedNodes && 0 < a.addedNodes.length) {
                        b = [];
                        for (var c = 0; c < a.addedNodes.length; c++) a.addedNodes[c]._ljView && b.push(a.addedNodes[c]._ljView)
                    }
                    a = function(a) {
                        d.currentFrame && null !== d.currentFrame && d.currentFrame.name() ===
                            a && (d._renderChildPosition(d._cache.childNames[a]), d.render())
                    };
                    for (c = 0; c < b.length; c++) b[c].on("renderRequired", a, {
                        context: this
                    })
                }
            }, {
                defaultProperties: {
                    type: "layer"
                },
                identify: function(a) {
                    a = h.getAttributeLJ(a, "type");
                    return null !== a && a.toLowerCase() === n.defaultProperties.type
                }
            });
        l.registerType("layer", n, g.identifyPriority.normal);
        m.exports = n
    }, {
        "../kern/Kern.js": 31,
        "./baseview.js": 1,
        "./defaults.js": 2,
        "./domhelpers.js": 3,
        "./gestures/gesturemanager.js": 6,
        "./layerjs.js": 7,
        "./layoutmanager.js": 9,
        "./pluginmanager.js": 21,
        "./scrolltransformer.js": 27
    }],
    9: [function(e, m, l) {
        l = e("./layerjs.js");
        var h = e("../kern/Kern.js");
        e = h.EventManager.extend({
            constructor: function(c) {
                h.EventManager.call(this);
                this.map = c || {}
            },
            registerType: function(c, f) {
                this.map[c] = f
            },
            get: function(c) {
                return this.map[c]
            }
        });
        l.layoutManager = new e;
        m.exports = l.layoutManager
    }, {
        "../kern/Kern.js": 31,
        "./layerjs.js": 7
    }],
    10: [function(e, m, l) {
        var h = e("../domhelpers.js"),
            c = e("../../kern/Kern.js");
        l = e("../layoutmanager.js");
        var f = e("./layerlayout.js");
        e = f.extend({
            constructor: function(b) {
                f.call(this,
                    b);
                this._frameTransforms = {}
            },
            transitionTo: function(b, a, f, e) {
                var d = new c.Promise,
                    g = this,
                    k = this.layer.getChildViews(),
                    h = k.length,
                    p, l = function(b, d) {
                        var c = b.getTransformData(g.layer);
                        d = {
                            transition: void 0 !== d ? d : a.duration,
                            opacity: 1,
                            display: "block"
                        };
                        d.width = c.applyWidth ? c.frameWidth - c.margin.left - c.margin.right + "px" : c.frameOriginalWidth;
                        d.height = c.applyHeight ? c.frameHeight - c.margin.top - c.margin.bottom + "px" : c.frameOriginalHeight;
                        g._applyTransform(b, g._reverseTransform, e, d)
                    },
                    m = g.layer.currentFrame;
                if (m &&
                    m.transformData.isDirty) {
                    g._reverseTransform = g._calculateReverseTransform(m, m.getTransformData(g.layer, void 0, !0));
                    for (m = 0; m < h; m++) l(k[m], "none");
                    for (m = 0; m < h; m++) window.getComputedStyle(k[m].outerEl)
                }
                var r = a.noActivation ? b : k[h - 1],
                    t = function() {
                        if (a.transitionID === g.layer.transitionID)
                            for (var c = 0; c < (a.noActivation ? 1 : h); c++) p = a.noActivation ? b : k[c], p.applyStyles({
                                transition: "none"
                            });
                        d.resolve()
                    };
                "" !== a.duration && r.outerEl.addEventListener("transitionend", function w(a) {
                    r.outerEl === a.target && (a.target.removeEventListener(a.type,
                        w), t())
                });
                a.semaphore.sync().then(function() {
                    if (null !== b)
                        if (a.noActivation) l(b);
                        else {
                            g._reverseTransform = g._calculateReverseTransform(b, f);
                            for (var d = 0; d < h; d++) l(k[d])
                        }
                    else
                        for (d = 0; d < h; d++) p = k[d], p.applyStyles({
                            opacity: 0,
                            transition: a.duration
                        });
                    "" === a.duration && t()
                });
                return d
            },
            _calculateReverseTransform: function(b, a) {
                var c = parseInt(b.x(), 10) || 0,
                    f = parseInt(b.y(), 10) || 0,
                    d = b.rotation() || 0;
                this._currentRotation && (d > this._currentRotation + 180 && (d -= 360 * (1 + Math.floor((d - this._currentRotation) / 360))), d < this._currentRotation -
                    180 && (d += 360 * (1 + Math.floor((this._currentRotation - d) / 360))));
                this._currentRotation = d;
                return "translate3d(" + parseInt(-a.shiftX, 10) + "px," + parseInt(-a.shiftY, 10) + "px,0px) scale(" + a.scale / (b.scaleX() || 1) + "," + a.scale / (b.scaleY() || 1) + ") rotate(" + (-d || 0) + "deg)  translate3d(" + -c + "px," + -f + "px,0px)"
            },
            setLayerTransform: function(b, a) {
                var f = this.layer.getChildViews(),
                    e = f.length,
                    d = new c.Promise;
                a.transition ? this.layer.currentFrame.outerEl.addEventListener("transitionend", function A(a) {
                    a.target.removeEventListener(a.type,
                        A);
                    d.resolve()
                }) : d.resolve();
                for (var n = 0; n < e; n++) {
                    var k = f[n];
                    this._applyTransform(k, this._reverseTransform, b, a)
                }
                return d
            },
            renderFramePosition: function(b, a) {
                f.prototype.renderFramePosition.call(this, b, a);
                delete this._frameTransforms[b.id()];
                this._reverseTransform && a && this._applyTransform(b, this._reverseTransform, this.layer.currentTransform, {})
            },
            _applyTransform: function(b, a, c, f) {
                f = f || {};
                var d = b.x(),
                    g = b.y();
                void 0 !== d && (f.left = h.parseDimension(d) + "px");
                void 0 !== g && (f.top = h.parseDimension(g) + "px");
                b.applyStyles(f || {}, {
                    transform: "translate3d(" + (-b.x() || 0) + "px," + (-b.y() || 0) + "px,0px)" + c + " " + a + " " + (this._frameTransforms[b.id()] = "translate3d(" + (b.x() || 0) + "px," + (b.y() || 0) + "px,0px) rotate(" + (b.rotation() || 0) + "deg) scale(" + b.scaleX() + "," + b.scaleY() + ")")
                })
            }
        });
        l.registerType("canvas", e);
        m.exports = e
    }, {
        "../../kern/Kern.js": 31,
        "../domhelpers.js": 3,
        "../layoutmanager.js": 9,
        "./layerlayout.js": 11
    }],
    11: [function(e, m, l) {
        var h = e("../domhelpers.js"),
            c = e("../../kern/Kern.js"),
            f = e("../tmat.js");
        e = c.EventManager.extend({
            constructor: function(b) {
                c.EventManager.call(this);
                if (!b) throw "provide a layer";
                this.layer = b
            },
            renderFramePosition: function(b) {
                b.x();
                b.y();
                b.width();
                b.height()
            },
            loadFrame: function(b) {
                var a = new c.Promise,
                    g = null !== b && b.document.defaultView && b.document.defaultView.getComputedStyle || function(a) {
                        return a.style
                    };
                if (null === b || b.document.body.contains(b.outerEl) && "none" !== g(b.outerEl).display && b.parent === this.layer) a.resolve();
                else if (b.parent !== this.layer) {
                    g = this.layer.outerEl;
                    var e = h.commonParent(b.innerEl, g),
                        d = function(a, b) {
                            var c = new f;
                            a !== b && (c = d(a.parentNode,
                                b));
                            a = h.getScaleAndRotationMatrix(a);
                            return c.prod(a)
                        },
                        n = d(b.outerEl, e);
                    n = h.applyTopLeftOnMatrix(b.outerEl, n);
                    e = d(g, e);
                    e = h.applyTopLeftOnMatrix(g, e);
                    g = e.invert().prod(n);
                    b.parent.currentFrame === b && (b.parent.currentFrame = null);
                    this.layer.innerEl.appendChild(b.outerEl);
                    b.transformData = void 0;
                    b.applyStyles({
                        transform: g.transform_nomatrix(),
                        top: "0px",
                        left: "0px"
                    });
                    h.debug("moved " + b.id() + " to layer " + this.layer.id());
                    h.postAnimationFrame(function() {
                        a.resolve()
                    })
                } else b.outerEl.style.display = "block", b.outerEl.style.opacity =
                    "0", a.resolve();
                return a
            },
            getStageWidth: function() {
                return this.layer.stage.width()
            },
            getStageHeight: function() {
                return this.layer.stage.height()
            },
            transitionTo: function() {
                throw "transitionTo() not implemented";
            },
            prepareTransition: function() {},
            parametricTransition: function() {
                throw "parametricTransition() not implemented";
            },
            getScrollTransformer: function() {}
        });
        m.exports = e
    }, {
        "../../kern/Kern.js": 31,
        "../domhelpers.js": 3,
        "../tmat.js": 30
    }],
    12: [function(e, m, l) {
        var h = e("../domhelpers.js"),
            c = e("../../kern/Kern.js");
        l = e("../layoutmanager.js");
        var f = e("./layerlayout.js"),
            b = ["adjacent", 0, 0, 1, 0];
        e = ["adjacent", -1, 0, 1, 0];
        var a = ["adjacent", 1, 0, 1, 0],
            g = ["adjacent", 0, 1, 1, 0],
            p = ["adjacent", 0, -1, 1, 0],
            d = ["adjacent", 0, 0, 1, 0, {
                opacity: 0
            }],
            n = ["adjacent", 0, 0, 1, 0, {
                filter: "blur(5px)",
                opacity: 0
            }, {
                filter: "blur(0px)"
            }],
            k = ["adjacent", 0, 0, .666, 0, {
                opacity: 0
            }],
            q = ["adjacent", 0, 0, 1.5, 0, {
                opacity: 0
            }],
            z = {
                default: [a, e, 1],
                none: [b, b, 1],
                left: [a, e, 1],
                right: [e, a, 1],
                up: [g, p, 1],
                down: [p, g, 1],
                fade: [d, d, -1],
                blur: [n, n, -1],
                slideOverLeft: [a, b, 1],
                slideOverRight: [e,
                    b, 1
                ],
                slideOverUp: [g, b, 1],
                slideOverDown: [p, b, 1],
                slideOverLeftFade: [a, d, 1],
                slideOverRightFade: [e, d, 1],
                slideOverUpFade: [g, d, 1],
                slideOverDownFade: [p, d, 1],
                zoomout: [q, k, 1],
                zoomin: [k, q, -1],
                inouttop: [p, p, 1],
                inoutleft: [e, e, 1],
                inoutright: [a, a, 1],
                inoutbottom: [g, g, 1]
            };
        e = f.extend({
            constructor: function(a) {
                f.call(this, a);
                this._preparedTransitions = {}
            },
            hideOtherFrames: function(a, b) {
                for (var d = this.layer.getChildViews(), c = 0; c < d.length; c++) d[c] !== b && d[c] !== a && null !== d[c].outerEl.parentNode && d[c].applyStyles({
                    display: "none"
                })
            },
            transitionTo: function(a, b, d, f) {
                var g = this,
                    e = g.layer.currentFrame;
                return this.prepareTransition(a, b, d, f).then(function(k) {
                    var n = new c.Promise,
                        p = 0,
                        q = function(a, d) {
                            a.transitionID && b.transitionID !== a.transitionID || (a.applyStyles(k.fix_css, d ? {
                                transition: "none",
                                display: "none",
                                "z-index": "initial"
                            } : {
                                transition: "none",
                                "z-index": "initial"
                            }), h.debug("slidelayout: fix " + (d ? "c" : "t")));
                            p--;
                            0 === p && n.resolve()
                        };
                    b.semaphore.sync().then(function() {
                        var c = {
                            transition: b.duration,
                            top: "0px",
                            left: "0px",
                            opacity: "1",
                            width: d.frameOriginalWidth,
                            height: d.frameOriginalHeight
                        };
                        d.applyWidth && (c.width = d.frameWidth - d.margin.left - d.margin.right + "px");
                        d.applyHeight && (c.height = d.frameHeight - d.margin.top - d.margin.bottom + "px");
                        a && (a.transitionID = b.transitionID);
                        a && "" !== b.duration && (a.outerEl.addEventListener("transitionend", function B(d) {
                            d.target === a.outerEl && (d.target.removeEventListener(d.type, B), q(a, !!b.noActivation))
                        }), p++);
                        b.noActivation ? g._applyTransform(a, {
                            opacity: 0,
                            transition: b.duration
                        }, {}, {}) : g._applyTransform(a, g._currentFrameTransform =
                            k.t1, f, c);
                        h.debug("slidelayout: apply t1");
                        !1 !== b.applyCurrentPostPosition && (e && (e.transitionID = b.transitionID), e && "" !== b.duration && (e.outerEl.addEventListener("transitionend", function B(a) {
                            a.target === e.outerEl && (a.target.removeEventListener(a.type, B), q(e, !0))
                        }), p++), g._applyTransform(e, k.c1, f, {
                            transition: b.duration,
                            top: "0px",
                            left: "0px"
                        }), h.debug("slidelayout: apply c1"));
                        "" === b.duration && (p = e && e !== a && a ? 2 : 1, e && e !== a && q(e, !0), a && q(a));
                        g._preparedTransitions = {}
                    });
                    return n
                })
            },
            prepareTransition: function(a,
                d, f, g) {
                var e = new c.Promise,
                    k, n = this.layer.currentFrame;
                d.wasInTransition || this.hideOtherFrames(a, n);
                a && (k = this._preparedTransitions[a.id()]) && (k.transform === g && k.applied ? e.resolve(k) : k = void 0);
                if (!k) {
                    var p = z[d.type];
                    !p && d.type && d.type.match(/:/) ? p = d.type.split(":") : p || (p = [b, b, 1]);
                    if ("function" === typeof p) k = p(d.type, this.layer.currentFrameTransformData, f);
                    else if (Array.isArray(p)) {
                        p = d.reverse ? [p[1], p[0], this.layer.currentFrameTransformData, f, p[2] && -p[2] || 0] : [p[0], p[1], this.layer.currentFrameTransformData,
                            f, p[2]
                        ];
                        if (d.previousType) {
                            var q = z[d.previousType];
                            Array.isArray(q) && (p[1] = d.previousReverse ? q[1] : q[0])
                        }
                        k = this.genericTransition.apply(this, p)
                    } else throw "slidelayout: error in registered transition type.";
                    k.transform = g;
                    if (!1 === d.applyTargetPrePosition && !1 === d.applyCurrentPrePosition) return e.resolve(k), e;
                    if (null === a && !k.current_css) return k.applied = !0, e.resolve(k), e;
                    g = {
                        transition: "none",
                        visibility: "inital"
                    };
                    g.width = f.applyWidth ? f.frameWidth - f.margin.left - f.margin.right + "px" : f.frame.getOriginalWidth() +
                        "px";
                    f.applyHeight && (g.height = f.frameHeight - f.margin.top - f.margin.bottom + "px");
                    !1 !== d.applyTargetPrePosition && (this._applyTransform(a, k.t0, this.layer.currentTransform, g), h.debug("slidelayout: apply t0"));
                    n && k.current_css && !1 !== d.applyCurrentPrePosition && (this._applyTransform(n, k.c0, this.layer.currentTransform, {
                        transition: "none",
                        "z-index": "initial"
                    }), h.debug("slidelayout: apply c0"));
                    h.postAnimationFrame(function() {
                        k.applied = !0;
                        e.resolve(k)
                    })
                }
                return e
            },
            setLayerTransform: function(a, b) {
                b = b || {};
                var d =
                    new c.Promise;
                b.transition ? this.layer.currentFrame.outerEl.addEventListener("transitionend", function v(a) {
                    a.target.removeEventListener(a.type, v);
                    d.resolve()
                }) : d.resolve();
                this._applyTransform(this.layer.currentFrame, this._currentFrameTransform, a, b);
                return d
            },
            _applyTransform: function(a, b, d, f) {
                a && (b = c._extend({}, b), b.transform = d + " " + (b.transform || ""), a.applyStyles({
                    left: "0px",
                    top: "0px"
                }, f || {}, b))
            },
            _calcFrameTransform: function(a) {
                return {
                    transform: "translate3d(" + -a.shiftX + "px," +  "0px,0px) scale(" +
                        a.scale + ")",
                    opacity: 1
                }
            },
            genericTransition: function(a, b, d, f, g) {
                var e = this,
                    k = function(a, b, d, f) {
                        var g = e.getStageWidth(),
                            k = e.getStageHeight(),
                            n = -b.shiftX,
                            h = -b.shiftY,
                            p = -d.shiftX,
                            q = -d.shiftY,
                            m = a[1],
                            l = a[2],
                            z = a[3],
                            A = a[4],
                            u = a[5] || {};
                        switch (a[0]) {
                            case "adjacent":
                                return p = 0 > m ? p + (Math.min(n, 0) - d.width - p) * Math.abs(m) : p + (Math.max(n + b.width, g) - p) * Math.abs(m), q = 0 > l ? q + (Math.min(h, 0) - d.height - q) * Math.abs(l) : q + (Math.max(h + b.height, k) - q) * Math.abs(l), 0 === m && (p += -d.scrollX * d.scale + b.scrollX * b.scale), 0 === l && (q += -d.scrollY *
                                    d.scale + b.scrollY * b.scale), c._extend({
                                    transform: "translate3d(" + p + "px," + q + "px," + f + "px) translate(" + g / 2 + "px," + k / 2 + "px) scale(" + z + ") rotate(" + A + "deg) translate(" + -g / 2 + "px," + -k / 2 + "px) scale(" + d.scale + ")",
                                    opacity: 1,
                                    "z-index": f
                                }, u)
                        }
                    },
                    n = a[6] || {},
                    h = b[6] || {};
                n = {
                    t1: c._extend(this._calcFrameTransform(f), n),
                    c0: c._extend(this._calcFrameTransform(d), h)
                };
                Object.keys(h).length && (n.current_css = !0);
                n.t0 = k(a, d, f, g || 0);
                n.c1 = k(b, f, d, g && -g || 0);
                n.fix_css = [a[5], b[5], a[6], b[6]].map(function(a) {
                    return Object.keys(a || {})
                }).reduce(function(a,
                    b) {
                    b && "transform" !== b && (a[b] = "initial");
                    return a
                }, {});
                return n
            }
        });
        l.registerType("slide", e);
        m.exports = e
    }, {
        "../../kern/Kern.js": 31,
        "../domhelpers.js": 3,
        "../layoutmanager.js": 9,
        "./layerlayout.js": 11
    }],
    13: [function(e, m, l) {
        var h = e("../../kern/Kern.js"),
            c = e("./observerfactory.js");
        e = h.EventManager.extend({
            constructor: function() {
                h.EventManager.call(this)
            },
            _domElementChanged: function(c) {
                0 < Object.getOwnPropertyNames(c.attributes).length && this.trigger("attributesChanged", c.attributes);
                (0 < c.removedNodes.length ||
                    0 < c.addedNodes.length) && this.trigger("childrenChanged", {
                    addedNodes: c.addedNodes,
                    removedNodes: c.removedNodes
                })
            },
            observe: function(f, b) {
                this.unobserve();
                var a = this;
                if (b.attributes || b.children) this._observer = c.getObserver(f, {
                    attributes: b.attributes,
                    attributeFilter: b.attributeFilter,
                    childList: b.children || !1,
                    timeout: b.timeout,
                    callback: function(b) {
                        a._domElementChanged(b)
                    }
                }), this._observer.observe();
                b.size && (this._sizeObserver = c.getSizeObserver(f, {
                        timeout: b.timeout,
                        callback: function() {
                            a.trigger("sizeChanged")
                        }
                    }),
                    this._sizeObserver.observe())
            },
            unobserve: function() {
                this._observer && this._observer.stop();
                this._sizeObserver && this._sizeObserver.stop()
            },
            isObserving: function() {
                return void 0 !== this._observer && this._observer.isObserving() || void 0 !== this._sizeObserver && this._sizeObserver.isObserving()
            }
        });
        m.exports = e
    }, {
        "../../kern/Kern.js": 31,
        "./observerfactory.js": 17
    }],
    14: [function(e, m, l) {
        var h = e("./observer.js");
        e = h.extend({
            constructor: function(c, f) {
                this.attributes = {};
                h.call(this, c, f)
            },
            _initalizeAttributes: function() {
                this.attributes = {};
                for (var c = this.element.attributes.length, f = 0; f < c; f++) {
                    var b = this.element.attributes[f];
                    this.attributes[b.name] = b.value
                }
            },
            _invokeCallBack: function(c) {
                if (this.options.attributeFilter && c.attributes && 0 < Object.getOwnPropertyNames(c.attributes).length) {
                    var f = {},
                        b;
                    for (b in c.attributes)
                        if (c.attributes.hasOwnProperty(b))
                            for (var a = b.toUpperCase(), g = 0; g < this.options.attributeFilter.length; g++) {
                                var e = this.options.attributeFilter[g].toUpperCase(),
                                    d = e === a || e.endsWith("*") && a.startsWith(e.slice(0, -1));
                                !d && e.startsWith("LJ-") &&
                                    (e = "DATA-" + e, d = e === a || e.endsWith("*") && a.startsWith(e.slice(0, -1)));
                                d && (f[b] = c.attributes[b])
                            }
                    c.attributes = f
                }
                this.options.callback && (c.attributes && 0 < Object.getOwnPropertyNames(c.attributes).length || c.addedNodes && 0 < c.addedNodes.length || c.removedNodes && 0 < c.removedNodes.length || c.characterData) && this.options.callback(c)
            }
        });
        m.exports = e
    }, {
        "./observer.js": 16
    }],
    15: [function(e, m, l) {
        var h = e("./elementobserver.js");
        e = h.extend({
            constructor: function(c, f) {
                h.call(this, c, f);
                var b = this;
                this.mutationObserver = new(c.ownerDocument.defaultView ||
                    c.ownerDocument.parentWindow).MutationObserver(function(a) {
                    b.mutationCallback(a)
                })
            },
            mutationCallback: function(c) {
                for (var f = {
                        attributes: [],
                        addedNodes: [],
                        removedNodes: []
                    }, b = 0; b < c.length; b++) {
                    var a = c[b];
                    this.options.attributes && "attributes" === a.type && (f.attributes[a.attributeName] = {
                        oldValue: this.attributes[a.attributeName],
                        newValue: this.element.getAttribute(a.attributeName)
                    }, this.attributes[a.attributeName] = f.attributes[a.attributeName].newValue);
                    if (this.options.childList && "childList" === a.type) {
                        if (a.addedNodes &&
                            0 < a.addedNodes.length)
                            for (var g = 0; g < a.addedNodes.length; g++) f.addedNodes.push(a.addedNodes[g]);
                        if (a.removedNodes && 0 < a.removedNodes.length)
                            for (g = 0; g < a.removedNodes.length; g++) f.removedNodes.push(a.removedNodes[g])
                    }
                }
                this._invokeCallBack(f)
            },
            observe: function() {
                0 !== this.counter && this.counter--;
                0 === this.counter && (1 === this.element.nodeType && this.options.attributes && this._initalizeAttributes(), this.mutationObserver.observe(this.element, {
                    attributes: this.options.attributes || !1,
                    childList: this.options.childList ||
                        !1,
                    characterData: this.options.characterData || !1
                }))
            },
            stop: function() {
                0 === this.counter && this.mutationObserver.disconnect();
                this.counter++
            }
        });
        m.exports = e
    }, {
        "./elementobserver.js": 14
    }],
    16: [function(e, m, l) {
        e = e("../../kern/Kern.js").Base.extend({
            constructor: function(e, c) {
                c = c || {};
                this.element = e;
                this.options = c;
                this.counter = 1
            },
            observe: function() {
                throw "not implemented";
            },
            stop: function() {
                throw "not implemented";
            },
            isObserving: function() {
                return 0 === this.counter
            },
            _invokeCallBack: function() {
                this.options && this.options.callback &&
                    this.options.callback()
            }
        });
        m.exports = e
    }, {
        "../../kern/Kern.js": 31
    }],
    17: [function(e, m, l) {
        l = e("../../kern/Kern.js");
        var h = e("./mutationsobserver.js"),
            c = e("./timeoutobserver.js"),
            f = e("./sizeobserver.js");
        e = l.Base.extend({
            constructor: function() {},
            getObserver: function(b, a) {
                var f = b.ownerDocument.defaultView || b.ownerDocument.parentWindow;
                return f && f.MutationObserver ? new h(b, a) : new c(b, a)
            },
            getSizeObserver: function(b, a) {
                return new f(b, a)
            }
        });
        m.exports = new e
    }, {
        "../../kern/Kern.js": 31,
        "./mutationsobserver.js": 15,
        "./sizeobserver.js": 18,
        "./timeoutobserver.js": 19
    }],
    18: [function(e, m, l) {
        var h = e("./observer.js");
        e = h.extend({
            constructor: function(c, f) {
                h.call(this, c, f);
                this.dimensions = void 0
            },
            observe: function() {
                0 !== this.counter && this.counter--;
                0 === this.counter && (this.dimensions = {
                    size_inner: {
                        width: this.element.scrollWidth,
                        height: this.element.scrollHeight
                    },
                    size: {
                        width: this.element.clientWidth,
                        height: this.element.clientHeight
                    }
                }, this.checkSize())
            },
            stop: function() {
                this.counter++;
                1 === this.counter && (clearTimeout(this.myTimeout),
                    this.myTimeout = void 0)
            },
            checkSize: function() {
                var c = this.element,
                    f = c.scrollWidth,
                    b = c.scrollHeight,
                    a = c.clientWidth;
                c = c.clientHeight;
                if (a !== this.dimensions.size.width || c !== this.dimensions.size.height || f !== this.dimensions.size_inner.width || b !== this.dimensions.size_inner.height) this.dimensions.size = {
                    width: a,
                    height: c
                }, this.dimensions.size_inner = {
                    width: f,
                    height: b
                }, this._invokeCallBack();
                var g = this;
                this.myTimeout = setTimeout(function() {
                    g.checkSize()
                }, this.options.timeout || 100)
            }
        });
        m.exports = e
    }, {
        "./observer.js": 16
    }],
    19: [function(e, m, l) {
        var h = e("./elementobserver.js");
        e = h.extend({
            constructor: function(c, f) {
                h.call(this, c, f);
                this.childNodes = [];
                this.myTimeout = this.characterData = void 0
            },
            elementModified: function() {
                var c = {
                    attributes: {},
                    addedNodes: [],
                    removedNodes: [],
                    characterData: !1
                };
                if (this.options.attributes && 1 === this.element.nodeType) {
                    var f, b = {};
                    for (f in this.attributes) this.attributes.hasOwnProperty(f) && (b[f] = !1);
                    for (var a = 0; a < this.element.attributes.length; a++) {
                        var g = this.element.attributes[a];
                        this.attributes.hasOwnProperty(g.name) ?
                            this.attributes[g.name] !== g.value && (c.attributes[g.name] = {
                                oldValue: this.attributes[g.name],
                                newValue: g.value
                            }, this.attributes[g.name] = g.value) : (c.attributes[g.name] = {
                                oldValue: void 0,
                                newValue: g.value
                            }, this.attributes[g.name] = g.value);
                        b[g.name] = !0
                    }
                    for (f in b) b.hasOwnProperty(f) && !b[f] && (c.attributes[f] = {
                        oldValue: this.attributes[f],
                        newValue: void 0
                    }, delete this.attributes[f])
                }
                if (this.options.childList && 1 === this.element.nodeType) {
                    for (f = 0; f < this.childNodes.length; f++) b = this.childNodes[f], this.element.contains(b) ||
                        (this.childNodes.splice(f, 1), c.removedNodes.push(b));
                    for (f = 0; f < this.element.childNodes.length; f++) b = this.element.childNodes[f], -1 === this.childNodes.indexOf(b) && (c.addedNodes.push(b), this.childNodes.push(b))
                }
                this.options.characterData && 3 === this.element.nodeType && this.characterData !== this.element.data && (c.characterData = !0, this.characterData = this.element.data);
                this._invokeCallBack(c);
                this.observe()
            },
            observe: function() {
                0 !== this.counter && this.counter--;
                if (0 === this.counter) {
                    1 === this.element.nodeType && this.options.attributes &&
                        this._initalizeAttributes();
                    3 === this.element.nodeType && (this.characterData = this.element.data);
                    this.childNodes = [];
                    this.myTimeout = void 0;
                    for (var c = this.element.childNodes.length, f = 0; f < c; f++) this.childNodes.push(this.element.childNodes[f]);
                    var b = this;
                    this.myTimeout = setTimeout(function() {
                        b.elementModified()
                    }, this.options.timeout || 25)
                }
            },
            stop: function() {
                this.counter++;
                void 0 !== this.myTimeout && (clearTimeout(this.myTimeout), this.myTimeout = void 0)
            }
        });
        m.exports = e
    }, {
        "./elementobserver.js": 14
    }],
    20: [function(e,
        m, l) {
        var h = e("./pluginmanager.js"),
            c = e("./domhelpers.js"),
            f = e("../kern/Kern.js");
        layerJS.parseManager = new function() {
            this.parseDocument = function(b) {
                b = b || document;
                this._parse(b, b)
            };
            this.parseElement = function(b, a) {
                1 === b.nodeType && this._parse(b, b.ownerDocument, a)
            };
            this._parse = function(b, a, g) {
                b = b.querySelectorAll("[data-lj-type='stage'],[lj-type='stage']");
                var e = b.length;
                g = g || {};
                for (var d = layerJS.getState(a), n = 0; n < e; n++) {
                    var k = h.createView(c.getAttributeLJ(b[n], "type"), f._extend(g, {
                        el: b[n],
                        document: a
                    }));
                    d.registerView(k)
                }
            }
        };
        m.exports = layerJS.parseManager
    }, {
        "../kern/Kern.js": 31,
        "./domhelpers.js": 3,
        "./pluginmanager.js": 21
    }],
    21: [function(e, m, l) {
        l = e("./layerjs.js");
        var h = e("../kern/Kern.js");
        e = h.EventManager.extend({
            constructor: function(c, f) {
                h.EventManager.call(this);
                this.map = c || {};
                this.identifyPriorities = f || {}
            },
            createView: function(c, f) {
                if (f && f.el && f.el._ljView) return f.el._ljView;
                if ("string" === typeof c && this.map.hasOwnProperty(c)) return new this.map[c].view(f);
                throw "no constructor found for objects of type '" +
                    c + "'";
            },
            registerType: function(c, f, b) {
                this.map[c] = {
                    view: f,
                    identify: f.identify
                };
                void 0 === this.identifyPriorities[b] && (this.identifyPriorities[b] = []);
                this.identifyPriorities[b].push(f)
            },
            identify: function(c) {
                for (var f, b = Object.keys(this.identifyPriorities).sort(function(a, b) {
                        return -1 * (a - b)
                    }), a = 0; a < b.length; a++) {
                    for (var g = b[a], e = 0; e < this.identifyPriorities[g].length; e++)
                        if (this.identifyPriorities[g][e].identify(c)) {
                            f = this.identifyPriorities[g][e].defaultProperties.type;
                            break
                        } if (void 0 !== f) break
                }
                if (void 0 ===
                    f) throw "no ViewType found for element '" + c + "'";
                return f
            }
        });
        l.pluginManager = new e({});
        m.exports = l.pluginManager
    }, {
        "../kern/Kern.js": 31,
        "./layerjs.js": 7
    }],
    22: [function(e, m, l) {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, c) {
                var f = this.toString();
                if ("number" !== typeof c || !isFinite(c) || Math.floor(c) !== c || c > f.length) c = f.length;
                c -= e.length;
                e = f.lastIndexOf(e, c);
                return -1 !== e && e === c
            }
        });
        String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
            value: function(e, c) {
                return this.substr(c || 0, e.length) === e
            }
        });
        Number.parseFloat || (Number.parseFloat = parseFloat)
    }, {}],
    23: [function(e, m, l) {
        var h = e("../../kern/Kern.js"),
            c = e("../parsemanager.js"),
            f = e("../domhelpers.js"),
            b = e("./staticrouter.js");
        e = b.extend({
            constructor: function(a) {
                a = a || {};
                this._state = layerJS.getState();
                b.call(this, a);
                a.cacheCurrent && (a = f.splitUrl(window.location.href), a.queryString = f.parseStringForTransitions(a.queryString, !0).string, this.addRoute(f.joinUrl(a, !0), {
                    pageTitle: document.title,
                    state: this._state.exportState()
                }))
            },
            handle: function(a) {
                var e = this,
                    p = new h.Promise;
                b.prototype.handle.call(this, a).then(function(b) {
                    b.handled || b.optout ? p.resolve(b) : e._loadHTML(f.joinUrl(a, !0)).then(function(b) {
                        c.parseDocument(b);
                        var d = {},
                            g = e._state;
                        g.exportStructure().forEach(function(a) {
                            a = a.replace(/\$$/, "");
                            d[a] = {}
                        });
                        var n = layerJS.getState(b),
                            m = [];
                        n.exportStructure().forEach(function(a) {
                            a = a.replace(/\$$/, "");
                            if (!(d[a] || 0 < m.filter(function(b) {
                                    return a.startsWith(b)
                                }).length)) {
                                var b = !a.match(/\./),
                                    c = a.replace(/\.[^\.]*$/, "");
                                if (d[c] || b) {
                                    var f = n.resolvePath(a)[0].view.outerEl.outerHTML;
                                    b = b ? document.body : g.resolvePath(c)[0].view.innerEl;
                                    b.insertAdjacentHTML("beforeend", f);
                                    b.lastChild.style.display = "none";
                                    f = b.lastChild.getElementsByTagName("script");
                                    for (b = 0; b < f.length; b++) {
                                        c = f[b];
                                        var e = document.createElement("script");
                                        e.text = c.innerHTML;
                                        for (var k = c.attributes.length - 1; 0 <= k; k--) e.setAttribute(c.attributes[k].name, c.attributes[k].value);
                                        c.parentNode.replaceChild(e, c)
                                    }
                                    m.push(a)
                                } else throw "filerouter: didn't find '" +
                                    c + "' in current document to add new '" + a + "'";
                            }
                        });
                        0 === m.length && console.warn("layerJS: filerouter: loaded new document '" + f.joinUrl(a, !0) + "' but didn't add any new content. You should give the frame that should be added a different name or id.");
                        var l = n.exportState(),
                            r = l.filter(function(a) {
                                var b = a.split(".").pop().startsWith("!"),
                                    c = a;
                                b && (c = a.replace(/\.[^\.]*$/, ""));
                                return d.hasOwnProperty(c) || -1 !== m.indexOf(c)
                            }),
                            t = r.map(function() {
                                return h._extend({}, a.globalTransition)
                            });
                        e.addRoute(f.joinUrl(a, !0), {
                            state: l,
                            pageTitle: b.title
                        });
                        f.postAnimationFrame(function() {
                            p.resolve({
                                stop: !1,
                                handled: !0,
                                paths: r,
                                transitions: t
                            })
                        })
                    }, function() {
                        p.resolve({
                            stop: !1,
                            handled: !1,
                            paths: [],
                            transitions: []
                        })
                    })
                });
                return p
            },
            _loadHTML: function(a) {
                var b = new h.Promise;
                try {
                    var c = new XMLHttpRequest;
                    c.onerror = function() {
                        b.reject()
                    };
                    c.onload = function() {
                        if (200 === c.status) {
                            var a = document.implementation.createHTMLDocument("framedoc");
                            a.documentElement.innerHTML = c.responseText;
                            b.resolve(a)
                        } else b.reject()
                    };
                    c.open("GET", a);
                    c.responseType =
                        "text";
                    c.send()
                } catch (d) {
                    b.reject(d)
                }
                return b
            }
        });
        m.exports = e
    }, {
        "../../kern/Kern.js": 31,
        "../domhelpers.js": 3,
        "../parsemanager.js": 20,
        "./staticrouter.js": 26
    }],
    24: [function(e, m, l) {
        var h = e("../../kern/Kern.js"),
            c = e("../domhelpers.js");
        e = h.EventManager.extend({
            handle: function(f) {
                var b = new h.Promise;
                if (void 0 === f.hash || "#" === f.hash || "" === f.hash) b.resolve({
                    handled: !1,
                    stop: !1,
                    paths: []
                });
                else {
                    for (var a = (f.hash.startsWith("#") ? f.hash.substr(1) : f.hash).split(";"), e = [], p = [], d = layerJS.getState(), n = function(a) {
                            return function(b) {
                                return a ===
                                    b.replace(/\.[^\.]*$/, "")
                            }
                        }, k = 0; k < a.length; k++) {
                        var q = a[k].split("?")[0].split("&")[0].replace("(", "").replace(")", ""),
                            m = c.parseStringForTransitions(a[k]),
                            l = !1;
                        try {
                            for (var y = d.resolvePath(q), r = 0; r < y.length; r++) {
                                var t = y[r];
                                t.hasOwnProperty("frameName") && t.hasOwnProperty("layer") && (e.push(t.path), p.push(h._extend(f.globalTransition, m.transition)), l = !0)
                            }
                        } catch (D) {}
                        if (!l && (l = (l = document.getElementsByName(q)) && l[0] || document.getElementById(q)) && "none" !== window.getComputedStyle(l).display && (r = c.findParentViewOfType(l,
                                "frame"), void 0 !== r)) {
                            var u = d.buildPath(r.outerEl, !1),
                                v = e.indexOf(u);
                            if (-1 !== v) var w = p[v];
                            else if (-1 === v && (u = u.replace(/\.[^\.]*$/, ""), u = f.paths.filter(n(u)), 1 === u.length)) {
                                var x = d.resolvePath(u[0])[0].view;
                                if ((q = (q = x.outerEl.querySelectorAll("[name=" + q + "], #" + q)) && q[0]) && "none" !== window.getComputedStyle(q).display) {
                                    var C = "none" === window.getComputedStyle(x.outerEl).display;
                                    C && (x.outerEl.style.opacity = 0, x.outerEl.style.display = "");
                                    l = q;
                                    v = f.paths.indexOf(u[0]);
                                    w = f.transitions[v];
                                    l = {
                                        offsetTop: q.offsetTop,
                                        offsetLeft: q.offsetLeft
                                    };
                                    C && (x.outerEl.style.display = "none", x.outerEl.style.opacity = 1)
                                }
                            } - 1 === v && r.parent.currentFrame === r && (e.push(d.buildPath(r.outerEl, !1)), w = h._extend({}, f.globalTransition, m.transition), p.push(w));
                            w && (w.scrollY = l.offsetTop, w.scrollX = l.offsetLeft)
                        }
                    }
                    b.resolve({
                        stop: !1,
                        handled: 0 < e.length,
                        paths: e,
                        transitions: p
                    })
                }
                return b
            },
            buildUrl: function(c) {
                for (var b = layerJS.getState(), a = [], f = 0; f < c.state.length; f++) {
                    var e = c.state[f].split("."),
                        d = void 0,
                        n = !1;
                    do {
                        d = e.pop() + (d ? "." + d : "");
                        var k = b.resolvePath(d);
                        1 === k.length && (n = !0, d = k[0].view && k[0].view.originalParent && k[0].view.originalParent !== k[0].view.parent ? c.state[f] : d)
                    } while (!n && 0 < e.length);
                    n && (a.push(d), c.state.splice(f, 1), f--)
                }
                c.hash = a.join(";")
            }
        });
        m.exports = e
    }, {
        "../../kern/Kern.js": 31,
        "../domhelpers.js": 3
    }],
    25: [function(e, m, l) {
        var h = e("../layerjs.js"),
            c = e("../domhelpers.js"),
            f = e("../../kern/Kern.js"),
            b = e("./staticrouter.js");
        e = f.EventManager.extend({
            constructor: function(a) {
                this._init(a)
            },
            _init: function(a) {
                this.rootElement = a || document;
                this.routers = [];
                this._registerLinkClickedListener();
                this.addToHistory = !0;
                this.isClickEvent = !1;
                this.state = h.getState();
                this.state.on("stateChanged", this._stateChanged, {
                    context: this
                })
            },
            addRouter: function(a) {
                this.routers.push(a);
                a instanceof b && (this.staticRouter = a)
            },
            clearRouters: function() {
                this.routers = []
            },
            _registerLinkClickedListener: function() {
                var a = this;
                window.onpopstate = function(b) {
                    document.location.href === a.ignoreUrl ? delete a.ignoreUrl : b && b.state && b.state.state ? a.state.transitionTo(b.state.state, b.state.transitions, {
                        noHistory: !0
                    }) : a.navigate(document.location.href, null, !0)
                };
                c.addDelegtedListener(this.rootElement, "click", "a:not([data-lj-no-link='true']):not([lj-no-link='true'])", function(b) {
                    var f = function(b) {
                        b || setTimeout(function() {
                            a.ignoreUrl = c.getAbsoluteUrl(d);
                            window.location.href = d
                        }, 1)
                    };
                    if ("" !== this.href && !this.href.startsWith("javascript:")) {
                        var d = this.getAttribute("href"),
                            e = this.getAttribute("target");
                        e && "_self" !== e || (b.preventDefault(), a.navigate(d, c.findParentViewOfType(this, "layer")).then(f))
                    }
                })
            },
            navigate: function(a,
                b, e, d) {
                var g = f._extend(c.splitUrl(a), {
                    transitions: [],
                    context: b,
                    paths: [],
                    globalTransition: {}
                });
                if (g.location || g.queryString) g.explLoc = !0, f._extend(g, c.splitUrl(c.getAbsoluteUrl(a)));
                if (b = g.queryString && c.parseStringForTransitions(g.queryString, !1)) g.globalTransition = b.transition, g.queryString = b.string;
                var k = this.routers.length,
                    h = this,
                    p = new f.Promise,
                    l = !1,
                    m = function() {
                        l && (!0 === d ? h.state.showState(g.paths, g.transitions, {
                            paths: g.paths,
                            transitions: g.transitions,
                            noHistory: e,
                            originalUrl: a,
                            initial: d
                        }) : h.state.transitionTo(g.paths,
                            g.transitions, {
                                paths: g.paths,
                                transitions: g.transitions,
                                noHistory: e,
                                originalUrl: a
                            }));
                        p.resolve(l)
                    },
                    r = function(a) {
                        a < k ? h.routers[a].handle(g).then(function(b) {
                            b.handled && (l = b.handled, Array.prototype.push.apply(g.paths, b.paths), Array.prototype.push.apply(g.transitions, b.transitions));
                            b.handled && !b.stop || !b.handled ? r(a + 1) : m()
                        }) : m()
                    };
                g.location && g.location.match(/^\w+:/) && !g.location.match(new RegExp("^" + window.location.origin)) ? p.resolve(!1) : r(0);
                return p
            },
            _stateChanged: function(a, b) {
                b = b || {};
                b.state = b.state || [];
                b.transitions = b.transitions || [];
                var e = a && a.exportMinimizedState() || {
                    state: [],
                    defaultState: [],
                    omittedState: []
                };
                a = e.state.concat(e.omittedState).concat(e.defaultState).filter(function(a) {
                    return 0 > b.state.indexOf(a) && b.state.indexOf(a.replace("$"))
                });
                a = b.state.concat(a);
                var d = b.transitions;
                e = f._extend(c.splitUrl(window.location.href), e);
                e.queryString = c.parseStringForTransitions(e.queryString, !1).string;
                for (var g = 0; g < this.routers.length; g++) this.routers[g].buildUrl(e);
                g = c.joinUrl(e);
                !window.history ||
                    b && b.noHistory || window.location.href === g ? !window.history || b && b.noHistory && !b.initial || (window.history.replaceState({
                        state: a,
                        transitions: d
                    }, "", g), e.pageTitle && (document.title = e.pageTitle)) : (window.history.pushState({
                        state: a,
                        transitions: d
                    }, "", g), e.pageTitle && (document.title = e.pageTitle))
            }
        });
        m.exports = h.router = new e
    }, {
        "../../kern/Kern.js": 31,
        "../domhelpers.js": 3,
        "../layerjs.js": 7,
        "./staticrouter.js": 26
    }],
    26: [function(e, m, l) {
        var h = e("../../kern/Kern.js"),
            c = e("../domhelpers.js");
        e = h.EventManager.extend({
            constructor: function() {
                this.routes = {}
            },
            addRoute: function(f, b, a) {
                f = c.getAbsoluteUrl(f);
                a && this.routes.hasOwnProperty(f) || (this.routes[f] = b)
            },
            hasRoute: function(f) {
                f = c.getAbsoluteUrl(f);
                return this.routes.hasOwnProperty(f)
            },
            handle: function(f) {
                var b = c.joinUrl(f, !0),
                    a = !b || !f.explLoc && c.joinUrl(c.splitUrl(window.location.href), !0) === b;
                var e = a ? !1 : this.hasRoute(b);
                var p = new h.Promise,
                    d = [],
                    n = [];
                e && (d = this.routes[b].state, d.forEach(function() {
                    n.push(h._extend({}, f.globalTransition))
                }));
                p.resolve({
                    stop: !1,
                    handled: e,
                    transitions: n,
                    optout: a,
                    paths: d
                });
                return p
            },
            buildUrl: function(f) {
                var b = f.state.concat(f.defaultState),
                    a = this,
                    e = c.joinUrl(f, !0);
                var h = e;
                var d = function(b) {
                        return a.routes[e] && -1 !== a.routes[e].state.indexOf(b)
                    },
                    n = b.filter(d),
                    k = n.length;
                for (e in this.routes)
                    if (this.routes.hasOwnProperty(e) && this.routes[e].state.length > k) {
                        var q = b.filter(d),
                            l = q.length;
                        l > k && (n = q, k = l, h = e)
                    } this.routes.hasOwnProperty(h) && this.routes[h].pageTitle && (f.pageTitle = this.routes[h].pageTitle);
                h = c.splitUrl(h);
                f.location = h.location;
                f.queryString = h.queryString;
                n.forEach(function(a) {
                    var b =
                        f.state.indexOf(a); - 1 !== b ? f.state.splice(b, 1) : f.defaultState.splice(f.defaultState.indexOf(a), 1)
                })
            }
        });
        m.exports = e
    }, {
        "../../kern/Kern.js": 31,
        "../domhelpers.js": 3
    }],
    27: [function(e, m, l) {
        var h = e("../kern/Kern.js"),
            c = e("./domhelpers.js");
        e = h.EventManager.extend({
            constructor: function(c) {
                h.EventManager.call(this);
                var b = this;
                if (!c) throw "provide a layer";
                this.layer = c;
                this.layer.outerEl.addEventListener("scroll", function() {
                    if (b.layer.nativeScroll()) {
                        var a = b.layer.currentFrameTransformData;
                        a.scrollX = b.layer.outerEl.scrollLeft /
                            a.scale;
                        a.scrollY = b.layer.outerEl.scrollTop / a.scale;
                        b.layer.trigger("scroll")
                    }
                })
            },
            scrollTransform: function(c, b) {
                return "translate3d(" + c + "px," + b + "px,0px)"
            },
            _detectInnerScrolling: function(c) {
                for (var b = c.event.target; b && this.layer.innerEl.contains(b) && b !== this.layer.innerEl;) {
                    if (Math.abs(c.shift.x) > Math.abs(c.shift.y)) {
                        if (b.clientWidth < b.scrollWidth && !(window.getComputedStyle(b)["overflow-x"] in {
                                visible: 1,
                                hidden: 1
                            }) && (0 < c.shift.x && 0 < b.scrollLeft || b.scrollLeft < b.scrollWidth - b.clientWidth)) return c.event.stopPropagation(),
                            !0
                    } else if (b.clientHeight < b.scrollHeight && !(window.getComputedStyle(b)["overflow-y"] in {
                            visible: 1,
                            hidden: 1
                        }) && (0 < c.shift.y && 0 < b.scrollTop || b.scrollTop < b.scrollHeight - b.clientHeight)) return c.event.stopPropagation(), !0;
                    b = b.parentElement
                }
                return !1
            },
            scrollGestureListener: function(c) {
                var b = this.layer.currentFrameTransformData;
                if (c.first) return this.scrollStartX = b.scrollX, this.scrollStartY = b.scrollY, !0;
                if (this._detectInnerScrolling(c)) return !0;
                var a = Math.abs(c.shift.x) > Math.abs(c.shift.y) ? "x" : "y";
                if ("x" ===
                    a && !b.isScrollX || "y" === a && !b.isScrollY) return !1;
                if (this.layer.nativeScroll()) {
                    if (10 > Math.abs(c.shift.x) + Math.abs(c.shift.y)) return !0;
                    if ("y" === a) return 0 < c.shift.y ? 0 < b.scrollY : this.layer.outerEl.scrollHeight - this.layer.outerEl.clientHeight - 1 > this.layer.outerEl.scrollTop;
                    if ("x" === a) return 0 < c.shift.x ? 0 < b.scrollX : this.layer.outerEl.scrollWidth - this.layer.outerEl.clientWidth - 1 > this.layer.outerEl.scrollLeft
                } else {
                    if ("y" === a)
                        if (0 < c.shift.y) {
                            if (0 === b.scrollY) return !1
                        } else {
                            if (1 > b.maxScrollY - b.scrollY) return !1
                        }
                    else if ("x" ===
                        a)
                        if (0 < c.shift.x) {
                            if (0 === b.scrollX) return !1
                        } else if (1 > b.maxScrollX - b.scrollX) return !1;
                    b.scrollX = this.scrollStartX - c.shift.x / b.scale;
                    b.scrollY = this.scrollStartY - c.shift.y / b.scale;
                    b.isScrollX || (b.scrollX = this.scrollStartX);
                    b.isScrollY || (b.scrollY = this.scrollStartY);
                    0 > b.scrollX && (b.scrollX = 0);
                    b.scrollX > b.maxScrollX && (b.scrollX = b.maxScrollX);
                    0 > b.scrollY && (b.scrollY = 0);
                    b.scrollY > b.maxScrollY && (b.scrollY = b.maxScrollY);
                    return this.scrollTransform(-b.scrollX * b.scale, -b.scrollY * b.scale)
                }
            },
            switchNativeScroll: function(c) {},
            getScrollTransform: function(e, b, a) {
                var f = b.scrollX || e.scrollX,
                    h = b.scrollY || e.scrollY;
                a || (f = b.scrollX || e.initialScrollX, h = b.scrollY || e.initialScrollY);
                e.scrollX = void 0 !== f ? f : e.scrollX;
                e.scrollY = void 0 !== h ? h : e.scrollY;
                e.scrollX > e.maxScrollX && (e.scrollX = e.maxScrollX);
                e.scrollY > e.maxScrollY && (e.scrollY = e.maxScrollY);
                0 > e.scrollX && (e.scrollX = 0);
                0 > e.scrollY && (e.scrollY = 0);
                if (this.layer.nativeScroll()) {
                    if (a) return a = b = 0, b = (this.layer.outerEl.scrollLeft || 0) - (e.scrollX * e.scale || 0), a = (this.layer.outerEl.scrollTop ||
                        0) - (e.scrollY * e.scale || 0), this.scrollTransform(b, a);
                    this.layer.innerEl.style.height = e.isScrollY ? e.height + "px" : "100%";
                    this.layer.innerEl.style.width = e.isScrollX ? e.width + "px" : "100%";
                    this.layer.outerEl.scrollLeft = e.scrollX * e.scale;
                    this.layer.outerEl.scrollTop = e.scrollY * e.scale;
                    if ("ios" === c.browser) {
                        this.layer.outerEl.style["-webkit-overflow-scrolling"] = "auto";
                        var d = this;
                        setTimeout(function() {
                            d.layer.outerEl.style["-webkit-overflow-scrolling"] = "touch"
                        }, 1)
                    }
                    return this.scrollTransform(0, 0)
                }
                return this.scrollTransform(-e.scrollX *
                    e.scale, -e.scrollY * e.scale)
            }
        });
        m.exports = e
    }, {
        "../kern/Kern.js": 31,
        "./domhelpers.js": 3
    }],
    28: [function(e, m, l) {
        l = e("./pluginmanager.js");
        var h = e("./gestures/gesturemanager.js"),
            c = e("./defaults.js"),
            f = e("./domhelpers.js"),
            b = e("./baseview.js"),
            a = b.extend({
                constructor: function(a) {
                    a = a || {};
                    a.childType = "layer";
                    b.call(this, a);
                    h.register(this.outerEl, this.gestureListener.bind(this), {
                        dragging: !0,
                        mouseDragging: this.draggable()
                    })
                },
                gestureListener: function(a) {
                    this.getChildViews()[0].gestureListener(a)
                },
                registerEventHandlers: function() {
                    var a =
                        this,
                        c = function() {
                            a.trigger("renderRequired")
                        };
                    b.prototype.registerEventHandlers.call(this);
                    window.addEventListener("resize", c, !1);
                    this.on("sizeChanged", c)
                },
                startObserving: function() {
                    b.prototype.observe.call(this, this.innerEl, {
                        attributes: !0,
                        children: !0,
                        size: !0
                    })
                },
                _renderChildPosition: function(a) {
                    1 === a.nodeType() && (a.unobserve(), a.outerEl.style.left = "0px", a.outerEl.style.top = "0px", a.startObserving())
                },
                _parseChildren: function(a) {
                    var c = this,
                        d = this.autoWidth() || this.autoHeight(),
                        e = function(a) {
                            return function(b,
                                d) {
                                d = d || {};
                                b = a.currentFrameTransformData;
                                d = {
                                    transition: d.duration || ""
                                };
                                c.autoWidth() && (d.width = b.width + "px");
                                c.autoHeight() && (d.height = b.height + "px");
                                c.applyStyles(d)
                            }
                        };
                    b.prototype._parseChildren.call(this, a);
                    if (d) {
                        a = null;
                        for (var f = 0; f < this._cache.children.length; f++) this._cache.children[f].name() === d && (this._cache.children[f].on("transitionStarted", e(this._cache.children[f])), a = this._cache.children[f]);
                        !a && this._cache.children[0] && (this._cache.children[0].on("transitionStarted", e(this._cache.children[0])),
                            a = this._cache.children[0]);
                        a && e(a)()
                    }
                }
            }, {
                defaultProperties: {
                    type: "stage"
                },
                identify: function(b) {
                    b = f.getAttributeLJ(b, "type");
                    return null !== b && b.toLowerCase() === a.defaultProperties.type
                }
            });
        l.registerType("stage", a, c.identifyPriority.normal);
        m.exports = a
    }, {
        "./baseview.js": 1,
        "./defaults.js": 2,
        "./domhelpers.js": 3,
        "./gestures/gesturemanager.js": 6,
        "./pluginmanager.js": 21
    }],
    29: [function(e, m, l) {
        var h = e("../kern/Kern.js");
        l = e("./layerjs.js");
        var c = e("./domhelpers.js"),
            f = h.EventManager.extend({
                constructor: function(b) {
                    this.document =
                        b || document;
                    this.document._ljState = this;
                    this.viewTypes = ["stage", "layer", "frame"];
                    this.views = {};
                    this.layers = [];
                    this.paths = {};
                    this._transitionGroup = {};
                    h.EventManager.call(this);
                    this.previousState = void 0
                },
                registerView: function(b) {
                    if (b.document.body.contains(b.outerEl)) {
                        var a = b.id();
                        if (this.views[a]) {
                            if (this.views[a].view !== b) throw "state.registerView: duplicate HTML id '" + a + "'";
                        } else {
                            var c = this.buildPath(b.outerEl);
                            this.views[a] = {
                                view: b,
                                path: c
                            };
                            var e = this;
                            this.getTrailingPaths(c).forEach(function(b) {
                                (e.paths[b] =
                                    e.paths[b] || []).push(a)
                            });
                            "layer" === b.type() && this.layers.push(a);
                            b.on("childRemoved", function(a) {
                                (a.parent && b.id() === a.parent.id() || void 0 === a.parent) && e.unregisterView(a)
                            }, {
                                context: this
                            });
                            b.on("childAdded", function(a) {
                                e.views[a.id()] && e.unregisterView(a);
                                e.registerView(a)
                            }, {
                                context: this
                            });
                            b.on("transitionStarted", function(a, b) {
                                var d = !0,
                                    c = {};
                                if (!b || b.lastFrameName !== a || b.hasOwnProperty("groupId") && this._transitionGroup.hasOwnProperty(b.groupId)) b && b.hasOwnProperty("groupId") && this._transitionGroup.hasOwnProperty(b.groupId) &&
                                    (this._transitionGroup[b.groupId].length--, b.lastFrameName !== a && (this._transitionGroup[b.groupId].changed = !0), d = 0 === this._transitionGroup[b.groupId].length && this._transitionGroup[b.groupId].changed, c = this._transitionGroup[b.groupId].payload), d && (!b || b && !b.isEvent) && this.trigger("stateChanged", this, c)
                            }, {
                                context: this
                            });
                            b.on("attributesChanged", this._attributesChangedEvent(b), {
                                context: this
                            });
                            b.getChildViews().forEach(function(a) {
                                e.registerView(a)
                            })
                        }
                    }
                },
                unregisterView: function(b) {
                    var a = b.id(),
                        c = this;
                    this.getTrailingPaths(this.views[a].path).forEach(function(b) {
                        var d =
                            c.paths[b].indexOf(a);
                        c.paths[b].splice(d, 1);
                        0 === c.paths[b].length && delete c.paths[b]
                    });
                    if ("layer" === b.type()) {
                        var e = this.layers.indexOf(b);
                        this.layers.splice(e, 1)
                    }
                    delete this.views[a];
                    b.off(void 0, void 0, this);
                    b.getChildViews().forEach(function(a) {
                        c.unregisterView(a)
                    })
                },
                exportState: function() {
                    return this._exportState().state
                },
                exportMinimizedState: function() {
                    return this._exportState(!0)
                },
                _exportState: function(b) {
                    b = b || !1;
                    var a = {
                            state: [],
                            defaultState: [],
                            omittedState: []
                        },
                        c = this;
                    c.exportStructure("frame").forEach(function(e) {
                        var d =
                            e.endsWith("$"),
                            f = e;
                        d && (f = f.substr(0, f.length - 1));
                        f = c.paths[f];
                        if (1 < f.length) throw "state.exportState: multiple frames found for " + e;
                        f = c.views[f[0]].view;
                        var g = f.parent;
                        f === g.currentFrame ? !0 === b && g.noUrl() ? a.omittedState.push(e) : !0 === b && (g.currentFrame.name() === g.defaultFrame() || null === g.defaultFrame() && null === g.currentFrame.outerEl.previousElementSibling) ? a.defaultState.push(e) : a.state.push(e) : d && f.parent !== f.originalParent ? a.state.push(e) : d && a.omittedState.push(e)
                    });
                    this.layers.map(function(a) {
                        return c.views[a].view
                    }).filter(function(a) {
                        return null ===
                            a.currentFrame || void 0 === a.currentFrame
                    }).forEach(function(e) {
                        !0 === b && e.noUrl() ? a.omittedState.push(c.views[e.id()].path + ".!none") : !0 === b && "!none" === e.defaultFrame() ? a.defaultState.push(c.views[e.id()].path + ".!none") : a.state.push(c.views[e.id()].path + ".!none")
                    });
                    return a
                },
                exportStructure: function(b) {
                    var a = this,
                        e = Object.keys(this.views).map(function(b) {
                            return a.views[b].view.outerEl
                        }).sort(c.comparePosition);
                    b && (e = e.filter(function(a) {
                        return a._ljView.type() === b
                    }));
                    return e.map(function(b) {
                        var d = !0;
                        "frame" === b._ljView.type() && (d = b._ljView, d = d.parent.currentFrame === d);
                        return a.views[b._ljView.id()].path + (d ? "" : "$")
                    })
                },
                transitionTo: function(b, a, c) {
                    this._transitionTo(!1, b, a, c)
                },
                showState: function(b, a, c) {
                    return this._transitionTo(!0, b, a, c)
                },
                _transitionTo: function(b, a, e, f) {
                    var d = this;
                    e = e || [];
                    f = f || {};
                    f.state = a;
                    f.transitions = e.map(function(a) {
                        return h._extend({}, a)
                    });
                    var g = {},
                        k = {},
                        l = {},
                        m = function(a) {
                            var b = g[a].layer.id();
                            l = g[a].transition;
                            delete g[a];
                            delete k[b]
                        };
                    a.map(function(a) {
                        return d.resolvePath(a)
                    }).forEach(function(a,
                        b) {
                        for (var d = 0; d < a.length; d++) {
                            var c = a[d],
                                f = c.layer.id();
                            l = {};
                            var n = h._extend(l, e[Math.min(b, e.length - 1)] || {});
                            !0 !== c.noActivation && (c.isInterStage && g.hasOwnProperty(c.originalPath) && m(c.originalPath), g.hasOwnProperty(c.path) && m(c.path), k.hasOwnProperty(f) && m(k[f]), k[f] = c.path);
                            if (!0 !== c.noActivation || c.isInterStage) g[c.path] = {
                                layer: c.layer,
                                frameName: c.frameName,
                                transition: h._extend({
                                    noActivation: c.noActivation
                                }, l, n)
                            }
                        }
                    });
                    a = Object.getOwnPropertyNames(g);
                    var p = new h.Semaphore(a.length),
                        y = c.uniqueID("group");
                    this._transitionGroup[y] = {
                        length: a.length,
                        payload: f
                    };
                    for (f = 0; f < a.length; f++) {
                        var r = g[a[f]];
                        r.transition.semaphore = p;
                        r.transition.groupId = y;
                        b ? r.layer.showFrame(r.frameName, r.transition) : r.layer.transitionTo(r.frameName, r.transition)
                    }
                    return 0 < e.length
                },
                buildPath: function(b, a) {
                    if (!b) return "";
                    if (!b._ljView) return this.buildPath(b.parentNode);
                    var c = b._ljView.parent;
                    a = !a && c ? this.views[c.id()].path : this.buildPath(b.parentNode);
                    "" !== a && (a += ".");
                    return a + b._ljView.name()
                },
                getTrailingPaths: function(b) {
                    for (var a = [b]; b = b.replace(/^[^\.]*\.?/, "");) a.push(b);
                    return a
                },
                resolvePath: function(b, a) {
                    var c = b.endsWith("$");
                    c && (b = b.substr(0, b.length - 1));
                    var e = a && this.buildPath(a),
                        d = b.split(".");
                    a = d.pop();
                    var f = "!" === a[0];
                    var k = d.join(".");
                    d = f ? k ? this.paths[k] : this.layers : this.paths[b];
                    f || d && 0 !== d.length || !k || (d = this.paths[k]);
                    if (!d || 0 === d.length) return [];
                    if (1 < d.length && e) {
                        for (var h = []; 0 === h.length && e;) {
                            for (k = 0; k < d.length; k++) this.views[d[k]].path.startsWith(e) && h.push(d[k]);
                            e = e.replace(/\.?[^\.]$/, "")
                        }
                        d = h.length ? h : d
                    }
                    e = [];
                    for (k = 0; k < d.length; k++) {
                        h = this.views[d[k]].view;
                        var l = this.views[d[k]].path;
                        if (f) {
                            if ("layer" !== h.type()) throw "state: expected layer name in front of '" + a + "'";
                            e.push({
                                layer: h,
                                frameName: a,
                                path: l + "." + a + (c ? "$" : "")
                            })
                        } else if ("frame" === h.type()) e.push({
                            layer: h.parent,
                            view: h,
                            frameName: a,
                            path: l + (c ? "$" : ""),
                            active: void 0 !== h.parent.currentFrame && null !== h.parent.currentFrame ? h.parent.currentFrame.name() === a : !1,
                            noActivation: c
                        });
                        else if ("layer" === h.type())
                            if (l.endsWith(b)) e.push({
                                view: h,
                                path: l
                            });
                            else {
                                var m =
                                    this.resolvePath(a);
                                1 === m.length && e.push({
                                    layer: h,
                                    frameName: a,
                                    view: m[0].view,
                                    path: l + "." + a + (c ? "$" : ""),
                                    active: !1,
                                    isInterStage: !0,
                                    originalPath: m[0].path,
                                    noActivation: c
                                })
                            }
                        else e.push({
                            view: h,
                            path: l
                        })
                    }
                    return e
                },
                _attributesChangedEvent: function(b) {
                    var a = this;
                    return function(c) {
                        if (c["lj-name"] || c["data-lj-name"] || c.id) a.unregisterView(b), a.registerView(b)
                    }
                }
            });
        l.getState = function(b) {
            b = b || document;
            return b._ljState || new f(b)
        };
        m.exports = f
    }, {
        "../kern/Kern.js": 31,
        "./domhelpers.js": 3,
        "./layerjs.js": 7
    }],
    30: [function(e,
        m, l) {
        var h = function(c) {
            c instanceof Array ? (this.a = c[0], this.b = c[1], this.c = c[2], this.d = c[3], this.tx = c[4], this.ty = c[5]) : (this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0)
        };
        h.prototype = {
            prod: function(c) {
                return new h([this.a * c.a + this.b * c.c, this.a * c.b + this.b * c.d, this.c * c.a + this.d * c.c, this.c * c.b + this.d * c.d, this.a * c.tx + this.b * c.ty + this.tx, this.c * c.tx + this.d * c.ty + this.ty])
            },
            transform: function() {
                return "matrix(" + this.a.toFixed(4) + "," + this.c.toFixed(4) + "," + this.b.toFixed(4) + "," + this.d.toFixed(4) + "," + this.tx.toFixed(4) +
                    "," + this.ty.toFixed(4) + ")"
            },
            transform_nomatrix: function(c) {
                var e = this.get_translation_equal(),
                    b = this.get_scale_equal(),
                    a = this.get_rotation_equal();
                e = h.Tscale(0 < b ? 1 / b : b).prod(h.Trot(-a)).transform_vec(e);
                1E-6 > Math.abs(e.x) && (e.x = 0);
                1E-6 > Math.abs(e.y) && (e.y = 0);
                return "scale(" + this.get_scale_equal() + ") rotate(" + (this.get_rotation_equal() + (c ? c : 0)) + "deg) " + h.getTranslateString(e.x, e.y)
            },
            transform_vec: function(c) {
                return {
                    x: this.a * c.x + this.b * c.y + this.tx,
                    y: this.c * c.x + this.d * c.y + this.ty
                }
            },
            invert: function() {
                var c =
                    1 / (this.a * this.d - this.b * this.c || 1),
                    e = c * this.d,
                    b = -c * this.b,
                    a = -c * this.c;
                c *= this.a;
                return new h([e, b, a, c, -e * this.tx - b * this.ty, -a * this.tx - c * this.ty])
            },
            get_scale_equal: function() {
                var c = this.a,
                    e = this.c;
                return Math.sqrt(c * c + e * e)
            },
            get_rotation_equal: function() {
                return 180 / Math.PI * Math.atan2(this.b, this.a)
            },
            get_translation_equal: function() {
                return {
                    x: this.tx,
                    y: this.ty
                }
            },
            set_scale_equal: function(c) {
                var e = this.get_scale_equal();
                this.a *= c / e;
                this.b *= c / e;
                this.c *= c / e;
                this.d *= c / e
            },
            copy: function() {
                return new h([this.a,
                    this.b, this.c, this.d, this.tx, this.ty
                ])
            },
            clearShift: function() {
                this.ty = this.tx = 0;
                return this
            }
        };
        h.Trot = function(c) {
            c = c * Math.PI / 180;
            return new h([Math.cos(c), -Math.sin(c), Math.sin(c), Math.cos(c), 0, 0])
        };
        h.Tscale = function(c) {
            return new h([c, 0, 0, c, 0, 0])
        };
        h.Tscalexy = function(c, e) {
            return new h([c, 0, 0, e, 0, 0])
        };
        h.Ttrans = function(c, e) {
            return new h([1, 0, 0, 1, c, e])
        };
        h.Tall = function(c, e, b, a) {
            a = a * Math.PI / 180;
            return new h([b * Math.cos(a), -b * Math.sin(a), b * Math.sin(a), b * Math.cos(a), c, e])
        };
        h.getTranslateString = function(c,
            e) {
            return "translate3d(" + c + "px," + e + "px,0)"
        };
        m.exports = h
    }, {}],
    31: [function(e, m, l) {
        (function() {
            var e = function() {
                function c(a, b) {
                    return (new Function("c", "return function " + a + "(){c.apply(this, arguments)}"))(b)
                }
                var e = function(a) {
                        var b = arguments.length;
                        if (2 > b) throw "too few arguments in _extend";
                        if (null === a) throw "no object provided in _extend";
                        for (var d = 1; d < b; d++)
                            for (var c = Object.keys(arguments[d]), e = 0; e < c.length; e++) a[c[e]] = arguments[d][c[e]];
                        return a
                    },
                    b = function(a) {
                        if ("object" === typeof a) {
                            if (Array.isArray(a)) {
                                var d = [];
                                for (var c = a.length - 1; 0 <= c; c--) d[c] = b(a[c]);
                                return d
                            }
                            if (null === a) return null;
                            d = {};
                            for (c in Object.keys(a)) a.hasOwnProperty(c) && (d[c] = b(a[c]));
                            return d
                        }
                        return a
                    },
                    a = {
                        _extend: e,
                        _extendKeep: function(a) {
                            var b = arguments.length;
                            if (2 > b) throw "too few arguments in _extend";
                            if (null === a) throw "no object provided in _extend";
                            for (var d = 1; d < b; d++)
                                for (var c = Object.keys(arguments[d]), e = 0; e < c.length; e++) a.hasOwnProperty(c[e]) || (a[c[e]] = arguments[d][c[e]]);
                            return a
                        },
                        _extendKeepDeepCopy: function(a) {
                            var d = arguments.length;
                            if (2 > d) throw "too few arguments in _extend";
                            if (null === a) throw "no object provided in _extend";
                            for (var c = 1; c < d; c++)
                                for (var e = Object.keys(arguments[c]), f = 0; f < e.length; f++) a.hasOwnProperty(e[f]) || (a[e[f]] = b(arguments[c][e[f]]));
                            return a
                        }
                    },
                    g = a.Base = function() {};
                g.extend = function(a, b) {
                    a = a || {};
                    b = b || {};
                    var d = this,
                        f = a.hasOwnProperty("constructor") ? a.constructor : function() {
                            return d.apply(this, arguments)
                        };
                    b && b.className && (f = c(b.className, f));
                    delete a.constructor;
                    f.prototype = Object.create(d.prototype);
                    f.prototype.constructor =
                        f;
                    e(f.prototype, a);
                    e(f, this, b);
                    return f
                };
                a.EventManager = g.extend({
                    constructor: function() {
                        this.__listeners__ = {}
                    },
                    on: function(a, b, c) {
                        this.__listeners__[a] = this.__listeners__[a] || [];
                        this.__listeners__[a].push({
                            callback: b,
                            options: c || {}
                        });
                        return this
                    },
                    once: function(a, b, c) {
                        var d = this,
                            e = function() {
                                b.apply(this, arguments);
                                d.off(a, e)
                            };
                        this.on(a, e, c);
                        return this
                    },
                    off: function(a, b, c) {
                        if (a)
                            if (b || c) {
                                var d = this.__listeners__[a];
                                for (a = 0; a < d.length; a++) b && d[a].callback !== b || c && d[a].options.context !== c || d.splice(a,
                                    1)
                            } else delete this.__listeners__[a];
                        else if (b || c)
                            for (var e in this.__listeners__) {
                                if (this.__listeners__.hasOwnProperty(e))
                                    for (d = this.__listeners__[e], a = 0; a < d.length; a++) b && d[a].callback !== b || c && d[a].options.context !== c || d.splice(a, 1)
                            } else this.__listeners__ = {};
                        return this
                    },
                    trigger: function(a) {
                        if (this.__listeners__[a])
                            for (var b = 0; b < this.__listeners__[a].length; b++) {
                                for (var d = arguments.length, c = Array(d - 1), e = 0; e < d - 1; e++) c[e] = arguments[e + 1];
                                d = this.__listeners__[a][b];
                                d.callback.apply(d.options.context ||
                                    this, c)
                            }
                        return this
                    },
                    triggerBy: function(a, b) {
                        if (this.__listeners__[b])
                            for (var d = 0; d < this.__listeners__[b].length; d++)
                                if (!this.__listeners__[b][d].options.ignoreSender || this.__listeners__[b][d].options.ignoreSender !== a) {
                                    for (var c = arguments.length, e = Array(c - 2), f = 0; f < c - 2; f++) e[f] = arguments[f + 2];
                                    c = this.__listeners__[b][d];
                                    c.callback.apply(c.options.context || this, e)
                                } return this
                    }
                });
                var h = a.Promise = g.extend({
                    constructor: function() {
                        this.reason = this.value = this.state = void 0
                    },
                    then: function(a, b) {
                        this.nextPromise =
                            new h;
                        this.fn = a;
                        this.errFn = b;
                        void 0 !== this.state && this.execute();
                        return this.nextPromise
                    },
                    resolve: function(a) {
                        if (void 0 !== this.state) console.warn("Promise: double resolve/reject (ignored).");
                        else return this.state = !0, this.value = a, this.execute(), this
                    },
                    reject: function(a) {
                        if (void 0 !== this.state) console.warn("Promise: double resolve/reject (ignored).");
                        else return this.state = !1, this.reason = a, this.execute(), this
                    },
                    execute: function() {
                        if (this.nextPromise) {
                            var a = this;
                            if (!0 === this.state) {
                                if (this.fn) try {
                                    var b =
                                        this.fn(this.value);
                                    b instanceof h ? b.then(function(b) {
                                        a.nextPromise.resolve(b)
                                    }, function(b) {
                                        a.nextPromise.reject(b)
                                    }) : a.nextPromise.resolve(b)
                                } catch (k) {
                                    console.log("in Promise handler:", k), this.nextPromise.reject(k)
                                }
                            } else !1 === this.state && (this.errFn && this.errFn(this.reason), this.nextPromise.reject(this.reason))
                        }
                    }
                });
                a.Semaphore = g.extend({
                    constructor: function(a) {
                        this.num = a || 0;
                        this.cc = 0;
                        this.ps = [];
                        this.ls = [];
                        this.ls2 = []
                    },
                    register: function() {
                        this.num++;
                        return this
                    },
                    listen: function(b) {
                        var c = new a.Promise;
                        b ? this.ls.push(c) : this.ls2.push(c);
                        return c
                    },
                    skip: function() {
                        this.num--;
                        if (0 > this.num) throw "semaphore: skipped stakeholder that was not registered";
                        this.num === this.cc && (this.cc--, this.sync())
                    },
                    sync: function() {
                        var b;
                        this.cc++;
                        this.ps.push(b = new a.Promise);
                        if (this.cc === this.num) {
                            for (var c = 0; c < this.ls.length; c++) this.ls[c].resolve(this.num);
                            for (c = 0; c < this.ps.length; c++) this.ps[c].resolve(this.num);
                            var e = this;
                            setTimeout(function() {
                                for (var a = 0; a < e.ls2.length; a++) e.ls2[a].resolve(e.num)
                            }, 0)
                        } else if (this.cc >=
                            this.num) throw "semaphore: more syncs than stakeholders";
                        return b
                    }
                });
                a.Queue = g.extend({
                    constructor: function() {
                        this.q = [];
                        this.waiting = !1
                    },
                    add: function(b) {
                        var c = new a.Promise;
                        if (this.waiting) {
                            var d = 0 < this.q.length && b === this.q[this.q.length - 1].category;
                            void 0 !== b && d && this.q.pop().promise.reject();
                            this.q.push({
                                promise: c,
                                category: b
                            })
                        } else c.resolve(), this.waiting = !0;
                        return c
                    },
                    continue: function() {
                        this.q.length ? this.q.shift().promise.resolve() : this.waiting = !1
                    },
                    clear: function() {
                        for (; 0 < this.q.length;) this.q.shift().promise.reject();
                        this.waiting = !1
                    }
                });
                return a
            };
            "function" === typeof define && define.amd ? define("Kern", [], e) : "undefined" !== typeof m && m.exports ? (e = e(), m.exports = e) : window.Kern = e()
        })()
    }, {}],
    32: [function(e, m, l) {
        e("./kern/Kern.js");
        e("./framework/layerjs.js");
        e("./framework/state.js");
        e("./framework/pluginmanager.js");
        e("./framework/layoutmanager.js");
        e("./framework/parsemanager.js");
        e("./framework/layouts/layerlayout.js");
        e("./framework/layouts/slidelayout.js");
        e("./framework/layouts/canvaslayout.js");
        e("./framework/gestures/gesturemanager.js");
        e("./framework/router/router.js");
        e("./framework/defaults.js");
        e("./framework/layerview.js");
        e("./framework/frameview.js");
        e("./framework/stageview.js");
        var h = window.location.href,
            c = e("./framework/router/filerouter.js"),
            f = e("./framework/router/hashrouter.js"),
            b = e("./framework/domhelpers.js"),
            a = !1;
        layerJS.init = function() {
            if (!a) {
                a = !0;
                layerJS.parseManager.parseDocument();
                var e = b.getAttributeLJ(document.body, "router");
                e && "filerouter" === e.toLowerCase() && layerJS.router.addRouter(new c({
                    cacheCurrent: !0
                }));
                layerJS.router.addRouter(new f);
                layerJS.router.navigate(h, null, !0, !0).then(function() {})
            }
        };
        "interactive" === document.readyState ? b.getAttributeLJ(document.body, "no-init") || a || layerJS.init() : document.addEventListener("DOMContentLoaded", function() {
            b.getAttributeLJ(document.body, "no-init") || a || layerJS.init()
        });
        console.log("*** layerJS *** checkout http://layerjs.org *** happy to help you: developers@layerjs.org ***")
    }, {
        "./framework/defaults.js": 2,
        "./framework/domhelpers.js": 3,
        "./framework/frameview.js": 4,
        "./framework/gestures/gesturemanager.js": 6,
        "./framework/layerjs.js": 7,
        "./framework/layerview.js": 8,
        "./framework/layoutmanager.js": 9,
        "./framework/layouts/canvaslayout.js": 10,
        "./framework/layouts/layerlayout.js": 11,
        "./framework/layouts/slidelayout.js": 12,
        "./framework/parsemanager.js": 20,
        "./framework/pluginmanager.js": 21,
        "./framework/router/filerouter.js": 23,
        "./framework/router/hashrouter.js": 24,
        "./framework/router/router.js": 25,
        "./framework/stageview.js": 28,
        "./framework/state.js": 29,
        "./kern/Kern.js": 31
    }]
}, {}, [32]);