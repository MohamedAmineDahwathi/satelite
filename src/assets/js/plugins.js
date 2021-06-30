/* Modernizr  */

(window.Modernizr = (function (a, b, c) {
    function C(a) {
        j.cssText = a;
    }
    function D(a, b) {
        return C(n.join(a + ";") + (b || ""));
    }
    function E(a, b) {
        return typeof a === b;
    }
    function F(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function G(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
        }
        return !1;
    }
    function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + p.join(d + " ") + d).split(" ");
        return E(b, "string") || E(b, "undefined") ? G(e, b) : ((e = (a + " " + q.join(d + " ") + d).split(" ")), H(e, b, c));
    }
    function J() {
        (e.input = (function (c) {
            for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
            return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u;
        })("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))),
            (e.inputtypes = (function (a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++)
                    k.setAttribute("type", (f = a[d])),
                        (e = k.type !== "text"),
                        e &&
                            ((k.value = l),
                            (k.style.cssText = "position:absolute;visibility:hidden;"),
                            /^range$/.test(f) && k.style.WebkitAppearance !== c
                                ? (g.appendChild(k), (h = b.defaultView), (e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0), g.removeChild(k))
                                : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? (e = k.checkValidity && k.checkValidity() === !1) : (e = k.value != l))),
                        (t[a[d]] = !!e);
                return t;
            })("search tel url email datetime date month week time datetime-local number range color".split(" ")));
    }
    var d = "2.8.3",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k = b.createElement("input"),
        l = ":)",
        m = {}.toString,
        n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms",
        p = o.split(" "),
        q = o.toLowerCase().split(" "),
        r = { svg: "http://www.w3.org/2000/svg" },
        s = {},
        t = {},
        u = {},
        v = [],
        w = v.slice,
        x,
        y = function (a, c, d, e) {
            var f,
                i,
                j,
                k,
                l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10)) while (d--) (j = b.createElement("div")), (j.id = e ? e[d] : h + (d + 1)), l.appendChild(j);
            return (
                (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
                (l.id = h),
                ((m ? l : n).innerHTML += f),
                n.appendChild(l),
                m || ((n.style.background = ""), (n.style.overflow = "hidden"), (k = g.style.overflow), (g.style.overflow = "hidden"), g.appendChild(n)),
                (i = c(l, a)),
                m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), (g.style.overflow = k)),
                !!i
            );
        },
        z = (function () {
            function d(d, e) {
                (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
                var f = d in e;
                return (
                    f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), (f = E(e[d], "function")), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), (e = null), f
                );
            }
            var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
            return d;
        })(),
        A = {}.hasOwnProperty,
        B;
    !E(A, "undefined") && !E(A.call, "undefined")
        ? (B = function (a, b) {
              return A.call(a, b);
          })
        : (B = function (a, b) {
              return b in a && E(a.constructor.prototype[b], "undefined");
          }),
        Function.prototype.bind ||
            (Function.prototype.bind = function (b) {
                var c = this;
                if (typeof c != "function") throw new TypeError();
                var d = w.call(arguments, 1),
                    e = function () {
                        if (this instanceof e) {
                            var a = function () {};
                            a.prototype = c.prototype;
                            var f = new a(),
                                g = c.apply(f, d.concat(w.call(arguments)));
                            return Object(g) === g ? g : f;
                        }
                        return c.apply(b, d.concat(w.call(arguments)));
                    };
                return e;
            }),
        (s.flexbox = function () {
            return I("flexWrap");
        }),
        (s.canvas = function () {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d");
        }),
        (s.canvastext = function () {
            return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function");
        }),
        (s.webgl = function () {
            return !!a.WebGLRenderingContext;
        }),
        (s.touch = function () {
            var c;
            return (
                "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
                    ? (c = !0)
                    : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
                          c = a.offsetTop === 9;
                      }),
                c
            );
        }),
        (s.geolocation = function () {
            return "geolocation" in navigator;
        }),
        (s.postmessage = function () {
            return !!a.postMessage;
        }),
        (s.websqldatabase = function () {
            return !!a.openDatabase;
        }),
        (s.indexedDB = function () {
            return !!I("indexedDB", a);
        }),
        (s.hashchange = function () {
            return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
        }),
        (s.history = function () {
            return !!a.history && !!history.pushState;
        }),
        (s.draganddrop = function () {
            var a = b.createElement("div");
            return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
        }),
        (s.websockets = function () {
            return "WebSocket" in a || "MozWebSocket" in a;
        }),
        (s.rgba = function () {
            return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba");
        }),
        (s.hsla = function () {
            return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla");
        }),
        (s.multiplebgs = function () {
            return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background);
        }),
        (s.backgroundsize = function () {
            return I("backgroundSize");
        }),
        (s.borderimage = function () {
            return I("borderImage");
        }),
        (s.borderradius = function () {
            return I("borderRadius");
        }),
        (s.boxshadow = function () {
            return I("boxShadow");
        }),
        (s.textshadow = function () {
            return b.createElement("div").style.textShadow === "";
        }),
        (s.opacity = function () {
            return D("opacity:.55"), /^0.55$/.test(j.opacity);
        }),
        (s.cssanimations = function () {
            return I("animationName");
        }),
        (s.csscolumns = function () {
            return I("columnCount");
        }),
        (s.cssgradients = function () {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient");
        }),
        (s.cssreflections = function () {
            return I("boxReflect");
        }),
        (s.csstransforms = function () {
            return !!I("transform");
        }),
        (s.csstransforms3d = function () {
            var a = !!I("perspective");
            return (
                a &&
                    "webkitPerspective" in g.style &&
                    y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
                        a = b.offsetLeft === 9 && b.offsetHeight === 3;
                    }),
                a
            );
        }),
        (s.csstransitions = function () {
            return I("transition");
        }),
        (s.fontface = function () {
            var a;
            return (
                y('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
                    var e = b.getElementById("smodernizr"),
                        f = e.sheet || e.styleSheet,
                        g = f ? (f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "") : "";
                    a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
                }),
                a
            );
        }),
        (s.generatedcontent = function () {
            var a;
            return (
                y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
                    a = b.offsetHeight >= 3;
                }),
                a
            );
        }),
        (s.video = function () {
            var a = b.createElement("video"),
                c = !1;
            try {
                if ((c = !!a.canPlayType))
                    (c = new Boolean(c)),
                        (c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")),
                        (c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")),
                        (c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
            } catch (d) {}
            return c;
        }),
        (s.audio = function () {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if ((c = !!a.canPlayType))
                    (c = new Boolean(c)),
                        (c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")),
                        (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
                        (c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
                        (c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""));
            } catch (d) {}
            return c;
        }),
        (s.localstorage = function () {
            try {
                return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
            } catch (a) {
                return !1;
            }
        }),
        (s.sessionstorage = function () {
            try {
                return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
            } catch (a) {
                return !1;
            }
        }),
        (s.webworkers = function () {
            return !!a.Worker;
        }),
        (s.applicationcache = function () {
            return !!a.applicationCache;
        }),
        (s.svg = function () {
            return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect;
        }),
        (s.inlinesvg = function () {
            var a = b.createElement("div");
            return (a.innerHTML = "<svg/>"), (a.firstChild && a.firstChild.namespaceURI) == r.svg;
        }),
        (s.smil = function () {
            return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")));
        }),
        (s.svgclippaths = function () {
            return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")));
        });
    for (var K in s) B(s, K) && ((x = K.toLowerCase()), (e[x] = s[K]()), v.push((e[x] ? "" : "no-") + x));
    return (
        e.input || J(),
        (e.addTest = function (a, b) {
            if (typeof a == "object") for (var d in a) B(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                (b = typeof b == "function" ? b() : b), typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), (e[a] = b);
            }
            return e;
        }),
        C(""),
        (i = k = null),
        (function (a, b) {
            function l(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return (c.innerHTML = "x<style>" + b + "</style>"), d.insertBefore(c.lastChild, d.firstChild);
            }
            function m() {
                var a = s.elements;
                return typeof a == "string" ? a.split(" ") : a;
            }
            function n(a) {
                var b = j[a[h]];
                return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b;
            }
            function o(a, c, d) {
                c || (c = b);
                if (k) return c.createElement(a);
                d || (d = n(c));
                var g;
                return d.cache[a] ? (g = d.cache[a].cloneNode()) : f.test(a) ? (g = (d.cache[a] = d.createElem(a)).cloneNode()) : (g = d.createElem(a)), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g;
            }
            function p(a, c) {
                a || (a = b);
                if (k) return a.createDocumentFragment();
                c = c || n(a);
                var d = c.frag.cloneNode(),
                    e = 0,
                    f = m(),
                    g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d;
            }
            function q(a, b) {
                b.cache || ((b.cache = {}), (b.createElem = a.createElement), (b.createFrag = a.createDocumentFragment), (b.frag = b.createFrag())),
                    (a.createElement = function (c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c);
                    }),
                    (a.createDocumentFragment = Function(
                        "h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                            m()
                                .join()
                                .replace(/[\w\-]+/g, function (a) {
                                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                }) +
                            ");return n}"
                    )(s, b.frag));
            }
            function r(a) {
                a || (a = b);
                var c = n(a);
                return (
                    s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                );
            }
            var c = "3.7.0",
                d = a.html5 || {},
                e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                g,
                h = "_html5shiv",
                i = 0,
                j = {},
                k;
            (function () {
                try {
                    var a = b.createElement("a");
                    (a.innerHTML = "<xyz></xyz>"),
                        (g = "hidden" in a),
                        (k =
                            a.childNodes.length == 1 ||
                            (function () {
                                b.createElement("a");
                                var a = b.createDocumentFragment();
                                return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
                            })());
                } catch (c) {
                    (g = !0), (k = !0);
                }
            })();
            var s = {
                elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: c,
                shivCSS: d.shivCSS !== !1,
                supportsUnknownElements: k,
                shivMethods: d.shivMethods !== !1,
                type: "default",
                shivDocument: r,
                createElement: o,
                createDocumentFragment: p,
            };
            (a.html5 = s), r(b);
        })(this, b),
        (e._version = d),
        (e._prefixes = n),
        (e._domPrefixes = q),
        (e._cssomPrefixes = p),
        (e.hasEvent = z),
        (e.testProp = function (a) {
            return G([a]);
        }),
        (e.testAllProps = I),
        (e.testStyles = y),
        (e.prefixed = function (a, b, c) {
            return b ? I(a, b, c) : I(a, "pfx");
        }),
        (g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : "")),
        e
    );
})(this, this.document)),
    (function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a);
        }
        function e(a) {
            return "string" == typeof a;
        }
        function f() {}
        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
        }
        function h() {
            var a = p.shift();
            (q = 1),
                a
                    ? a.t
                        ? m(function () {
                              ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                          }, 0)
                        : (a(), h())
                    : (q = 0);
        }
        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && ((u.r = o = 1), !q && h(), (l.onload = l.onreadystatechange = null), b)) {
                    "img" != a &&
                        m(function () {
                            t.removeChild(l);
                        }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && ((r = 1), (y[c] = [])),
                "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
                (l.width = l.height = "0"),
                (l.onerror = l.onload = l.onreadystatechange = function () {
                    k.call(this, r);
                }),
                p.splice(e, 0, u),
                "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
        }
        function j(a, b, c, d, f) {
            return (q = 0), (b = b || "j"), e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
        }
        function k() {
            var a = B;
            return (a.loader = { load: j, i: 0 }), a;
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w =
                Array.isArray ||
                function (a) {
                    return "[object Array]" == o.call(a);
                },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a;
                },
            },
            A,
            B;
        (B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e,
                    f,
                    g;
                for (f = 0; f < d; f++) (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c;
            }
            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(),
                    i.bypass ||
                        (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
                        i.instead
                            ? i.instead(a, e, f, g, h)
                            : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                              f.load(i.url, i.forceCSS || (!i.forceJS && "css" == i.url.split(".").pop().split("?").shift()) ? "c" : c, i.noexec, i.attrs, i.timeout),
                              (d(e) || d(j)) &&
                                  f.load(function () {
                                      k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), (y[i.url] = 2);
                                  })));
            }
            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a))
                            c ||
                                (j = function () {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l();
                                }),
                                g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in ((m = (function () {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b;
                            })()),
                            a))
                                a.hasOwnProperty(n) &&
                                    (!c &&
                                        !--m &&
                                        (d(j)
                                            ? (j = function () {
                                                  var a = [].slice.call(arguments);
                                                  k.apply(this, a), l();
                                              })
                                            : (j[n] = (function (a) {
                                                  return function () {
                                                      var b = [].slice.call(arguments);
                                                      a && a.apply(this, b), l();
                                                  };
                                              })(k[n]))),
                                    g(a[n], j, b, n, h));
                    } else !c && l();
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m,
                    n;
                c(h ? a.yep : a.nope, !!i), i && c(i);
            }
            var i,
                j,
                l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a)) for (i = 0; i < a.length; i++) (j = a[i]), e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l);
        }),
            (B.addPrefix = function (a, b) {
                z[a] = b;
            }),
            (B.addFilter = function (a) {
                x.push(a);
            }),
            (B.errorTimeout = 1e4),
            null == b.readyState &&
                b.addEventListener &&
                ((b.readyState = "loading"),
                b.addEventListener(
                    "DOMContentLoaded",
                    (A = function () {
                        b.removeEventListener("DOMContentLoaded", A, 0), (b.readyState = "complete");
                    }),
                    0
                )),
            (a.yepnope = k()),
            (a.yepnope.executeStack = h),
            (a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l,
                    o,
                    e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                (c = j ? h : c || f),
                    (k.onreadystatechange = k.onload = function () {
                        !l && g(k.readyState) && ((l = 1), c(), (k.onload = k.onreadystatechange = null));
                    }),
                    m(function () {
                        l || ((l = 1), c(1));
                    }, e),
                    i ? k.onload() : n.parentNode.insertBefore(k, n);
            }),
            (a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j,
                    c = i ? h : c || f;
                (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0));
            });
    })(this, document),
    (Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0));
    });

/* FlexNav  */

!function () {
    var a;
    (a = jQuery),
        (a.fn.flexNav = function (b) {
            var c, d, e, f, g, h, i, j, k, l, m, n;
            return (
                (k = a.extend({ animationSpeed: 250, transitionOpacity: !0, buttonSelector: "#burger-wrapper", hoverIntent: !1, hoverIntentTimeout: 150, calcItemWidths: !1, hover: !0 }, b)),
                (c = a(this)),
                c.addClass("with-js"),
                k.transitionOpacity === !0 && c.addClass("opacity"),
                c.find("li").each(function () {
                    return a(this).has("ul").length ? a(this).addClass("item-with-ul").find("ul").hide() : void 0;
                }),
                k.calcItemWidths === !0 && ((d = c.find(">li")), (f = d.length), (h = 100 / f), (g = h + "%")),
                c.data("breakpoint") && (e = c.data("breakpoint")),
                (l = function () {
                    return c.hasClass("lg-screen") === !0 && k.hover === !0
                        ? k.transitionOpacity === !0
                            ? a(this)
                                  .find(">ul")
                                  .addClass("flexnav-show")
                                  .stop(!0, !0)
                                  .animate({ height: ["toggle", "swing"], opacity: "toggle" }, k.animationSpeed)
                            : a(this)
                                  .find(">ul")
                                  .addClass("flexnav-show")
                                  .stop(!0, !0)
                                  .animate({ height: ["toggle", "swing"] }, k.animationSpeed)
                        : void 0;
                }),
                (i = function () {
                    return c.hasClass("lg-screen") === !0 && a(this).find(">ul").hasClass("flexnav-show") === !0 && k.hover === !0
                        ? k.transitionOpacity === !0
                            ? a(this)
                                  .find(">ul")
                                  .removeClass("flexnav-show")
                                  .stop(!0, !0)
                                  .animate({ height: ["toggle", "swing"], opacity: "toggle" }, k.animationSpeed)
                            : a(this)
                                  .find(">ul")
                                  .removeClass("flexnav-show")
                                  .stop(!0, !0)
                                  .animate({ height: ["toggle", "swing"] }, k.animationSpeed)
                        : void 0;
                }),
                (j = function () {
                    var b;
                    if (a(window).width() <= e)
                        return (
                            c.removeClass("lg-screen").addClass("sm-screen"),
                            k.calcItemWidths === !0 && d.css("width", "100%"),
                            (b = k.buttonSelector + ", " + k.buttonSelector + " .touch-button"),
                            a(b).removeClass("active"),
                            a(".one-page li a").on("click", function () {
                                return c.removeClass("flexnav-show");
                            })
                        );
                    if (a(window).width() > e) {
                        if (
                            (jQuery("#header-container").removeClass("light-content"),
                            jQuery("#menu-burger").removeClass("open"),
                            jQuery("nav").removeClass("open"),
                            c.removeClass("sm-screen").addClass("lg-screen"),
                            k.calcItemWidths === !0 && d.css("width", g),
                            c.removeClass("flexnav-show").find(".item-with-ul").on(),
                            a(".item-with-ul").find("ul").removeClass("flexnav-show"),
                            i(),
                            k.hoverIntent === !0)
                        )
                            return a(".item-with-ul").hoverIntent({ over: l, out: i, timeout: k.hoverIntentTimeout });
                        if (k.hoverIntent === !1) return a(".item-with-ul").on("mouseenter", l).on("mouseleave", i);
                    }
                }),
                a(k.buttonSelector).data("navEl", c),
                (n = ".item-with-ul, " + k.buttonSelector),
                a(n).append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'),
                (m = k.buttonSelector + ", " + k.buttonSelector + " .touch-button"),
                a(m).on("click", function (b) {
                    var c, d, e;
                    return a(m).toggleClass("active"), b.preventDefault(), b.stopPropagation(), (e = k.buttonSelector), (c = a(this).is(e) ? a(this) : a(this).parent(e)), (d = c.data("navEl")), d.toggleClass("flexnav-show");
                }),
                a(".touch-button").on("click", function () {
                    var b, d;
                    return (
                        (b = a(this).parent(".item-with-ul").find(">ul")),
                        (d = a(this).parent(".item-with-ul").find(">span.touch-button")),
                        c.hasClass("lg-screen") === !0 && a(this).parent(".item-with-ul").siblings().find("ul.flexnav-show").removeClass("flexnav-show").hide(),
                        b.hasClass("flexnav-show") === !0
                            ? (b.removeClass("flexnav-show").slideUp(k.animationSpeed), d.removeClass("active"))
                            : b.hasClass("flexnav-show") === !1
                            ? (b.addClass("flexnav-show").slideDown(k.animationSpeed), d.addClass("active"))
                            : void 0
                    );
                }),
                c.find(".item-with-ul *").focus(function () {
                    return a(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide(), a(this).parent(".item-with-ul").find(">ul").addClass("open").show();
                }),
                j(),
                a(window).on("resize", j)
            );
        });
}.call(this);

/*  Wait For Images */

!(function (a) {
    var b = "waitForImages";
    (a.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"], hasImageAttributes: ["srcset"] }),
        (a.expr[":"].uncached = function (b) {
            if (!a(b).is('img[src][src!=""]')) return !1;
            var c = new Image();
            return (c.src = b.src), !c.complete;
        }),
        (a.fn.waitForImages = function () {
            var c,
                d,
                e,
                f = 0,
                g = 0,
                h = a.Deferred();
            if (
                (a.isPlainObject(arguments[0])
                    ? ((e = arguments[0].waitForAll), (d = arguments[0].each), (c = arguments[0].finished))
                    : 1 === arguments.length && "boolean" === a.type(arguments[0])
                    ? (e = arguments[0])
                    : ((c = arguments[0]), (d = arguments[1]), (e = arguments[2])),
                (c = c || a.noop),
                (d = d || a.noop),
                (e = !!e),
                !a.isFunction(c) || !a.isFunction(d))
            )
                throw new TypeError("An invalid callback was supplied.");
            return (
                this.each(function () {
                    var i = a(this),
                        j = [],
                        k = a.waitForImages.hasImageProperties || [],
                        l = a.waitForImages.hasImageAttributes || [],
                        m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                    e
                        ? i
                              .find("*")
                              .addBack()
                              .each(function () {
                                  var b = a(this);
                                  b.is("img:uncached") && j.push({ src: b.attr("src"), element: b[0] }),
                                      a.each(k, function (a, c) {
                                          var d,
                                              e = b.css(c);
                                          if (!e) return !0;
                                          for (; (d = m.exec(e)); ) j.push({ src: d[2], element: b[0] });
                                      }),
                                      a.each(l, function (c, d) {
                                          var e,
                                              f = b.attr(d);
                                          return f
                                              ? ((e = f.split(",")),
                                                void a.each(e, function (c, d) {
                                                    (d = a.trim(d).split(" ")[0]), j.push({ src: d, element: b[0] });
                                                }))
                                              : !0;
                                      });
                              })
                        : i.find("img:uncached").each(function () {
                              j.push({ src: this.src, element: this });
                          }),
                        (f = j.length),
                        (g = 0),
                        0 === f && (c.call(i[0]), h.resolveWith(i[0])),
                        a.each(j, function (e, j) {
                            var k = new Image(),
                                l = "load." + b + " error." + b;
                            a(k).one(l, function m(b) {
                                var e = [g, f, "load" == b.type];
                                return g++, d.apply(j.element, e), h.notifyWith(j.element, e), a(this).off(l, m), g == f ? (c.call(i[0]), h.resolveWith(i[0]), !1) : void 0;
                            }),
                                (k.src = j.src);
                        });
                }),
                h.promise()
            );
        });
})(jQuery);

/*  Appear */

!(function (e) {
    (e.fn.appear = function (a, r) {
        var n = e.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, r);
        return this.each(function () {
            var r = e(this);
            if (((r.appeared = !1), !a)) return void r.trigger("appear", n.data);
            var p = e(window),
                t = function () {
                    if (!r.is(":visible")) return void (r.appeared = !1);
                    var e = p.scrollLeft(),
                        a = p.scrollTop(),
                        t = r.offset(),
                        c = t.left,
                        i = t.top,
                        o = n.accX,
                        f = n.accY,
                        s = r.height(),
                        u = p.height(),
                        d = r.width(),
                        l = p.width();
                    i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c ? r.appeared || r.trigger("appear", n.data) : (r.appeared = !1);
                },
                c = function () {
                    if (((r.appeared = !0), n.one)) {
                        p.unbind("scroll", t);
                        var c = e.inArray(t, e.fn.appear.checks);
                        c >= 0 && e.fn.appear.checks.splice(c, 1);
                    }
                    a.apply(this, arguments);
                };
            n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c), p.scroll(t), e.fn.appear.checks.push(t), t();
        });
    }),
        e.extend(e.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function () {
                var a = e.fn.appear.checks.length;
                if (a > 0) for (; a--; ) e.fn.appear.checks[a]();
            },
            run: function () {
                e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), (e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20));
            },
        }),
        e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (a, r) {
            var n = e.fn[r];
            n &&
                (e.fn[r] = function () {
                    var a = n.apply(this, arguments);
                    return e.fn.appear.run(), a;
                });
        });
})(jQuery);

/*  Owl Carousel */

!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this.drag = a.extend({}, m)),
            (this.state = a.extend({}, n)),
            (this.e = a.extend({}, o)),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._invalidated = {}),
            (this._pipe = []),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Pipe,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    function f(a) {
        if (a.touches !== d) return { x: a.touches[0].pageX, y: a.touches[0].pageY };
        if (a.touches === d) {
            if (a.pageX !== d) return { x: a.pageX, y: a.pageY };
            if (a.pageX === d) return { x: a.clientX, y: a.clientY };
        }
    }
    function g(a) {
        var b,
            d,
            e = c.createElement("div"),
            f = a;
        for (b in f) if (((d = f[b]), "undefined" != typeof e.style[d])) return (e = null), [d, b];
        return [!1];
    }
    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1];
    }
    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
    }
    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0];
    }
    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
    }
    function l() {
        return b.navigator.msPointerEnabled;
    }
    var m, n, o;
    (m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }),
        (n = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }),
        (o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }),
        (e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active",
        }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Plugins = {}),
        (e.Pipe = [
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var a = this._clones,
                        b = this.$stage.children(".cloned");
                    (b.length !== a.length || (!this.settings.loop && a.length > 0)) && (this.$stage.children(".cloned").remove(), (this._clones = []));
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var a,
                        b,
                        c = this._clones,
                        d = this._items,
                        e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
                    for (a = 0, b = Math.abs(e / 2); b > a; a++)
                        e > 0
                            ? (this.$stage
                                  .children()
                                  .eq(d.length + c.length - 1)
                                  .remove(),
                              c.pop(),
                              this.$stage.children().eq(0).remove(),
                              c.pop())
                            : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")));
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d = this.settings.rtl ? 1 : -1,
                        e = (this.width() / this.settings.items).toFixed(3),
                        f = 0;
                    for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++)
                        (a = this._mergers[this.relative(b)]),
                            (a = (this.settings.mergeFit && Math.min(a, this.settings.items)) || a),
                            (f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d),
                            this._coordinates.push(f);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var b,
                        c,
                        d = (this.width() / this.settings.items).toFixed(3),
                        e = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
                    if (
                        (this.$stage.css(e),
                        (e = { width: this.settings.autoWidth ? "auto" : d - this.settings.margin }),
                        (e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin),
                        !this.settings.autoWidth &&
                            a.grep(this._mergers, function (a) {
                                return a > 1;
                            }).length > 0)
                    )
                        for (b = 0, c = this._coordinates.length; c > b; b++) (e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin), this.$stage.children().eq(b).css(e);
                    else this.$stage.children().css(e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current && this.reset(this.$stage.children().index(a.current));
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; d > c; c++)
                        (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                    this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass),
                        this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass),
                        this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass));
                },
            },
        ]),
        (e.prototype.initialize = function () {
            if (
                (this.trigger("initialize"),
                this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl),
                this.browserSupport(),
                this.settings.autoWidth && this.state.imagesLoaded !== !0)
            ) {
                var b, c, e;
                if (((b = this.$element.find("img")), (c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (e = this.$element.children(c).width()), b.length && 0 >= e))
                    return this.preloadAutoWidthImages(b), !1;
            }
            this.$element.addClass("owl-loading"),
                (this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">')),
                this.$element.append(this.$stage.parent()),
                this.replace(this.$element.children().not(this.$stage.parent())),
                (this._width = this.$element.width()),
                this.refresh(),
                this.$element.removeClass("owl-loading").addClass("owl-loaded"),
                this.eventsCall(),
                this.internalEvents(),
                this.addTriggerableEvents(),
                this.trigger("initialized");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                      b >= a && a > d && (d = Number(a));
                  }),
                  (e = a.extend({}, this.options, c[d])),
                  delete e.responsive,
                  e.responsiveClass &&
                      this.$element
                          .attr("class", function (a, b) {
                              return b.replace(/\b owl-responsive-\S+/g, "");
                          })
                          .addClass("owl-responsive-" + d))
                : (e = a.extend({}, this.options)),
                (null === this.settings || this._breakpoint !== d) &&
                    (this.trigger("change", { property: { name: "settings", value: e } }),
                    (this._breakpoint = d),
                    (this.settings = e),
                    this.invalidate("settings"),
                    this.trigger("changed", { property: { name: "settings", value: this.settings } }));
        }),
        (e.prototype.optionsLogic = function () {
            this.$element.toggleClass("owl-center", this.settings.center),
                this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1),
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.settings.itemClass)
                        .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                c > b;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            this._invalidated = {};
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (e.prototype.refresh = function () {
            if (0 === this._items.length) return !1;
            new Date().getTime();
            this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$stage.addClass("owl-refresh"),
                this.update(),
                this.$stage.removeClass("owl-refresh"),
                (this.state.orientation = b.orientation),
                this.watchVisibility(),
                this.trigger("refreshed");
        }),
        (e.prototype.eventsCall = function () {
            (this.e._onDragStart = a.proxy(function (a) {
                this.onDragStart(a);
            }, this)),
                (this.e._onDragMove = a.proxy(function (a) {
                    this.onDragMove(a);
                }, this)),
                (this.e._onDragEnd = a.proxy(function (a) {
                    this.onDragEnd(a);
                }, this)),
                (this.e._onResize = a.proxy(function (a) {
                    this.onResize(a);
                }, this)),
                (this.e._transitionEnd = a.proxy(function (a) {
                    this.transitionEnd(a);
                }, this)),
                (this.e._preventClick = a.proxy(function (a) {
                    this.preventClick(a);
                }, this));
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return this._items.length
                ? this._width === this.$element.width()
                    ? !1
                    : this.trigger("resize").isDefaultPrevented()
                    ? !1
                    : ((this._width = this.$element.width()), this.invalidate("width"), this.refresh(), void this.trigger("resized"))
                : !1;
        }),
        (e.prototype.eventsRouter = function (a) {
            var b = a.type;
            "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a);
        }),
        (e.prototype.internalEvents = function () {
            var c = (k(), l());
            this.settings.mouseDrag
                ? (this.$stage.on(
                      "mousedown",
                      a.proxy(function (a) {
                          this.eventsRouter(a);
                      }, this)
                  ),
                  this.$stage.on("dragstart", function () {
                      return !1;
                  }),
                  (this.$stage.get(0).onselectstart = function () {
                      return !1;
                  }))
                : this.$element.addClass("owl-text-select-on"),
                this.settings.touchDrag &&
                    !c &&
                    this.$stage.on(
                        "touchstart touchcancel",
                        a.proxy(function (a) {
                            this.eventsRouter(a);
                        }, this)
                    ),
                this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1),
                this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this));
        }),
        (e.prototype.onDragStart = function (d) {
            var e, g, h, i;
            if (((e = d.originalEvent || d || b.event), 3 === e.which || this.state.isTouch)) return !1;
            if (
                ("mousedown" === e.type && this.$stage.addClass("owl-grab"),
                this.trigger("drag"),
                (this.drag.startTime = new Date().getTime()),
                this.speed(0),
                (this.state.isTouch = !0),
                (this.state.isScrolling = !1),
                (this.state.isSwiping = !1),
                (this.drag.distance = 0),
                (g = f(e).x),
                (h = f(e).y),
                (this.drag.offsetX = this.$stage.position().left),
                (this.drag.offsetY = this.$stage.position().top),
                this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin),
                this.state.inMotion && this.support3d)
            )
                (i = this.getTransformProperty()), (this.drag.offsetX = i), this.animate(i), (this.state.inMotion = !0);
            else if (this.state.inMotion && !this.support3d) return (this.state.inMotion = !1), !1;
            (this.drag.startX = g - this.drag.offsetX),
                (this.drag.startY = h - this.drag.offsetY),
                (this.drag.start = g - this.drag.startX),
                (this.drag.targetEl = e.target || e.srcElement),
                (this.drag.updatedX = this.drag.start),
                ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1),
                a(c).on(
                    "mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
                    a.proxy(function (a) {
                        this.eventsRouter(a);
                    }, this)
                );
        }),
        (e.prototype.onDragMove = function (a) {
            var c, e, g, h, i, j;
            this.state.isTouch &&
                (this.state.isScrolling ||
                    ((c = a.originalEvent || a || b.event),
                    (e = f(c).x),
                    (g = f(c).y),
                    (this.drag.currentX = e - this.drag.startX),
                    (this.drag.currentY = g - this.drag.startY),
                    (this.drag.distance = this.drag.currentX - this.drag.offsetX),
                    this.drag.distance < 0 ? (this.state.direction = this.settings.rtl ? "right" : "left") : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"),
                    this.settings.loop
                        ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction
                            ? (this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length))
                            : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) &&
                              "left" === this.state.direction &&
                              (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length))
                        : ((h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum())),
                          (i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum())),
                          (j = this.settings.pullDrag ? this.drag.distance / 5 : 0),
                          (this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j))),
                    (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : (c.returnValue = !1), (this.state.isSwiping = !0)),
                    (this.drag.updatedX = this.drag.currentX),
                    (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && ((this.state.isScrolling = !0), (this.drag.updatedX = this.drag.start)),
                    this.animate(this.drag.updatedX)));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d, e, f;
            if (this.state.isTouch) {
                if (
                    ("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
                    this.trigger("dragged"),
                    this.drag.targetEl.removeAttribute("draggable"),
                    (this.state.isTouch = !1),
                    (this.state.isScrolling = !1),
                    (this.state.isSwiping = !1),
                    0 === this.drag.distance && this.state.inMotion !== !0)
                )
                    return (this.state.inMotion = !1), !1;
                (this.drag.endTime = new Date().getTime()),
                    (d = this.drag.endTime - this.drag.startTime),
                    (e = Math.abs(this.drag.distance)),
                    (e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
                    (f = this.closest(this.drag.updatedX)),
                    this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(f),
                    this.invalidate("position"),
                    this.update(),
                    this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(),
                    (this.drag.distance = 0),
                    a(c).off(".owl.dragEvents");
            }
        }),
        (e.prototype.removeClick = function (c) {
            (this.drag.targetEl = c),
                a(c).on("click.preventClick", this.e._preventClick),
                b.setTimeout(function () {
                    a(c).off("click.preventClick");
                }, 300);
        }),
        (e.prototype.preventClick = function (b) {
            b.preventDefault ? b.preventDefault() : (b.returnValue = !1), b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick");
        }),
        (e.prototype.getTransformProperty = function () {
            var a, c;
            return (a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform")), (a = a.replace(/matrix(3d)?\(|\)/g, "").split(",")), (c = 16 === a.length), c !== !0 ? a[4] : a[12];
        }),
        (e.prototype.closest = function (b) {
            var c = -1,
                d = 30,
                e = this.width(),
                f = this.coordinates();
            return (
                this.settings.freeDrag ||
                    a.each(
                        f,
                        a.proxy(function (a, g) {
                            return b > g - d && g + d > b ? (c = a) : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c;
                        }, this)
                    ),
                this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? (c = b = this.minimum()) : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
                c
            );
        }),
        (e.prototype.animate = function (b) {
            this.trigger("translate"),
                (this.state.inMotion = this.speed() > 0),
                this.support3d
                    ? this.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" })
                    : this.state.isTouch
                    ? this.$stage.css({ left: b + "px" })
                    : this.$stage.animate(
                          { left: b },
                          this.speed() / 1e3,
                          this.settings.fallbackEasing,
                          a.proxy(function () {
                              this.state.inMotion && this.transitionEnd();
                          }, this)
                      );
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (a) {
            this._invalidated[a] = !0;
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)), a !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (b, c) {
            var e = c ? this._items.length : this._items.length + this._clones.length;
            return !a.isNumeric(b) || 1 > e ? d : (b = this._clones.length ? ((b % e) + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b)));
        }),
        (e.prototype.relative = function (a) {
            return (a = this.normalize(a)), (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = 0,
                f = this.settings;
            if (a) return this._items.length - 1;
            if (!f.loop && f.center) b = this._items.length - 1;
            else if (f.loop || f.center)
                if (f.loop || f.center) b = this._items.length + f.items;
                else {
                    if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                    for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c); ) b = ++e;
                }
            else b = this._items.length - f.items;
            return b;
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                      return f(b);
                  })
                : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                  });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c = null;
            return b === d
                ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                          return this.coordinates(b);
                      }, this)
                  )
                : (this.settings.center ? ((c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[b - 1] || 0)) / 2) * (this.settings.rtl ? -1 : 1))) : (c = this._coordinates[b - 1] || 0), c);
        }),
        (e.prototype.duration = function (a, b, c) {
            return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (c, d) {
            if (this.settings.loop) {
                var e = c - this.relative(this.current()),
                    f = this.current(),
                    g = this.current(),
                    h = this.current() + e,
                    i = 0 > g - h ? !0 : !1,
                    j = this._clones.length + this._items.length;
                h < this.settings.items && i === !1 ? ((f = g + this._items.length), this.reset(f)) : h >= j - this.settings.items && i === !0 && ((f = g - this._items.length), this.reset(f)),
                    b.clearTimeout(this.e._goToLoop),
                    (this.e._goToLoop = b.setTimeout(
                        a.proxy(function () {
                            this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update();
                        }, this),
                        30
                    ));
            } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.transitionEnd = function (a) {
            return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : ((this.state.inMotion = !1), void this.trigger("translated"));
        }),
        (e.prototype.viewport = function () {
            var d;
            if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth) d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth;
            }
            return d;
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (a, b) {
            (b = b === d ? this._items.length : this.normalize(b, !0)),
                this.trigger("add", { content: a, position: b }),
                0 === this._items.length || b === this._items.length
                    ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1))
                    : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)),
                this.invalidate("items"),
                this.trigger("added", { content: a, position: b });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)),
                a !== d &&
                    (this.trigger("remove", { content: this._items[a], position: a }),
                    this._items[a].remove(),
                    this._items.splice(a, 1),
                    this._mergers.splice(a, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.addTriggerableEvents = function () {
            var b = a.proxy(function (b, c) {
                return a.proxy(function (a) {
                    a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]));
                }, this);
            }, this);
            a.each(
                { next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove },
                a.proxy(function (a, c) {
                    this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"));
                }, this)
            );
        }),
        (e.prototype.watchVisibility = function () {
            function c(a) {
                return a.offsetWidth > 0 && a.offsetHeight > 0;
            }
            function d() {
                c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile));
            }
            c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), (this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            var c, d, e, f;
            (c = 0),
                (d = this),
                b.each(function (g, h) {
                    (e = a(h)),
                        (f = new Image()),
                        (f.onload = function () {
                            c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && ((d.state.imagesLoaded = !0), d.initialize());
                        }),
                        (f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));
                });
        }),
        (e.prototype.destroy = function () {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass),
                this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
                this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var d in this._plugins) this._plugins[d].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) &&
                (this.$stage.off("mousedown touchstart touchcancel"),
                a(c).off(".owl.dragEvents"),
                (this.$stage.get(0).onselectstart = function () {}),
                this.$stage.off("dragstart", function () {
                    return !1;
                })),
                this.$element.off(".owl"),
                this.$stage.children(".cloned").remove(),
                (this.e = null),
                this.$element.removeData("owlCarousel"),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.unwrap();
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d) {
            var e = { item: { count: this._items.length, index: this.current() } },
                f = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c));
            return (
                this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(g);
                    }),
                    this.$element.trigger(g),
                    this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)),
                g
            );
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.browserSupport = function () {
            if (((this.support3d = j()), this.support3d)) {
                this.transformVendor = i();
                var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                (this.transitionEndVendor = a[h()]), (this.vendorName = this.transformVendor.replace(/Transform/i, "")), (this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "");
            }
            this.state.orientation = b.orientation;
        }),
        (a.fn.owlCarousel = function (b) {
            return this.each(function () {
                a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b));
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b) {
        var c = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type))
                            for (
                                var c = this._core.settings,
                                    d = (c.center && Math.ceil(c.items / 2)) || c.items,
                                    e = (c.center && -1 * d) || 0,
                                    f = ((b.property && b.property.value) || this._core.current()) + e,
                                    g = this._core.clones().length,
                                    h = a.proxy(function (a, b) {
                                        this.load(b);
                                    }, this);
                                e++ < d;

                            )
                                this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h);
                    }, this),
                }),
                (this._core.options = a.extend({}, c.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (c.Defaults = { lazyLoad: !1 }),
            (c.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src");
                            this._core.trigger("load", { element: f, url: g }, "lazy"),
                                f.is("img")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", g)
                                    : ((e = new Image()),
                                      (e.onload = a.proxy(function () {
                                          f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                      }, this)),
                                      (e.src = g));
                        }, this)
                    ),
                    this._loaded.push(d.get(0)));
            }),
            (c.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = c);
    })(window.Zepto || window.jQuery, window, document),
    (function (a) {
        var b = function (c) {
            (this._core = c),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function () {
                        this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        this._core.settings.autoHeight && "position" == a.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, b.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (b.prototype.update = function () {
                this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
            }),
            (b.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c) {
        var d = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._fullscreen = !1),
                (this._handlers = {
                    "resize.owl.carousel": a.proxy(function (a) {
                        this._core.settings.video && !this.isInFullScreen() && a.preventDefault();
                    }, this),
                    "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
                        this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                    }, this),
                }),
                (this._core.options = a.extend({}, d.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (d.prototype.fetch = function (a, b) {
                var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (((d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)), d[3].indexOf("youtu") > -1)) c = "youtube";
                else {
                    if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                    c = "vimeo";
                }
                (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
            }),
            (d.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (a) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>'),
                            b.after(d),
                            b.after(e);
                    };
                return (
                    b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
                    this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
                    h.length
                        ? (l(h.attr(i)), h.remove(), !1)
                        : void ("youtube" === c.type
                              ? ((f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                              : "vimeo" === c.type &&
                                a.ajax({
                                    type: "GET",
                                    url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                                    jsonp: "callback",
                                    dataType: "jsonp",
                                    success: function (a) {
                                        (f = a[0].thumbnail_large), l(f);
                                    },
                                }))
                );
            }),
            (d.prototype.stop = function () {
                this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), (this._playing = null);
            }),
            (d.prototype.play = function (b) {
                this._core.trigger("play", null, "video"), this._playing && this.stop();
                var c,
                    d,
                    e = a(b.target || b.srcElement),
                    f = e.closest("." + this._core.settings.itemClass),
                    g = this._videos[f.attr("data-video")],
                    h = g.width || "100%",
                    i = g.height || this._core.$stage.height();
                "youtube" === g.type
                    ? (c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>')
                    : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
                    f.addClass("owl-video-playing"),
                    (this._playing = f),
                    (d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>")),
                    e.after(d);
            }),
            (d.prototype.isInFullScreen = function () {
                var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return (
                    d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), (this._fullscreen = !0)),
                    d && this._fullscreen && this._playing ? !1 : this._fullscreen ? ((this._fullscreen = !1), !1) : this._playing && this._core.state.orientation !== b.orientation ? ((this._core.state.orientation = b.orientation), !1) : !0
                );
            }),
            (d.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = d);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        this.swapping = "translated" == a.type;
                    }, this),
                    "translate.owl.carousel": a.proxy(function () {
                        this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && this.core.support3d) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            d
                                .css({ left: b + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(g)
                                .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)),
                        f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c) {
        var d = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, d.Defaults, this.core.options)),
                (this.handlers = {
                    "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
                        this.autoplay();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function () {
                        this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this.core.settings.autoplayHoverPause && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this.core.settings.autoplayHoverPause && this.autoplay();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (d.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (d.prototype.autoplay = function () {
                this.core.settings.autoplay && !this.core.state.videoPlay
                    ? (b.clearInterval(this.interval),
                      (this.interval = b.setInterval(
                          a.proxy(function () {
                              this.play();
                          }, this),
                          this.core.settings.autoplayTimeout
                      )))
                    : b.clearInterval(this.interval);
            }),
            (d.prototype.play = function () {
                return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion
                    ? void 0
                    : this.core.settings.autoplay === !1
                    ? void b.clearInterval(this.interval)
                    : void this.core.next(this.core.settings.autoplaySpeed);
            }),
            (d.prototype.stop = function () {
                b.clearInterval(this.interval);
            }),
            (d.prototype.pause = function () {
                b.clearInterval(this.interval);
            }),
            (d.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this.interval);
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = d);
    })(window.Zepto || window.jQuery, window, document),
    (function (a) {
        "use strict";
        var b = function (c) {
            (this._core = c),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
                    }, this),
                    "add.owl.carousel": a.proxy(function (b) {
                        this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
                    }, this),
                    "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
                        this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    "change.owl.carousel": a.proxy(function (a) {
                        if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                            var b = this._core.current(),
                                c = this._core.maximum(),
                                d = this._core.minimum();
                            a.data = a.property.value > c ? (b >= c ? d : c) : a.property.value < d ? c : a.property.value;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        "position" == a.property.name && this.draw();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function () {
                        this._initialized || (this.initialize(), (this._initialized = !0)), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation");
                    }, this),
                }),
                (this._core.options = a.extend({}, b.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (b.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev parallax-wrap", "owl-next parallax-wrap"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls",
        }),
            (b.prototype.initialize = function () {
                var b,
                    c,
                    d = this._core.settings;
                d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),
                    (d.navContainer && d.dotsContainer) || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)),
                    (this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container)),
                    this._controls.$indicators.on(
                        "click",
                        "div",
                        a.proxy(function (b) {
                            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
                            b.preventDefault(), this.to(c, d.dotsSpeed);
                        }, this)
                    ),
                    (b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container)),
                    (this._controls.$next = a("<" + d.navElement + ">")),
                    (this._controls.$previous = this._controls.$next.clone()),
                    this._controls.$previous
                        .addClass(d.navClass[0])
                        .html(d.navText[0])
                        .hide()
                        .prependTo(b)
                        .on(
                            "click",
                            a.proxy(function () {
                                this.prev(d.navSpeed);
                            }, this)
                        ),
                    this._controls.$next
                        .addClass(d.navClass[1])
                        .html(d.navText[1])
                        .hide()
                        .appendTo(b)
                        .on(
                            "click",
                            a.proxy(function () {
                                this.next(d.navSpeed);
                            }, this)
                        );
                for (c in this._overrides) this._core[c] = a.proxy(this[c], this);
            }),
            (b.prototype.destroy = function () {
                var a, b, c, d;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (b.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.settings,
                    e = this._core.clones().length / 2,
                    f = e + this._core.items().length,
                    g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
                if (("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy))
                    for (this._pages = [], a = e, b = 0, c = 0; f > a; a++) (b >= g || 0 === b) && (this._pages.push({ start: a - e, end: a - e + g - 1 }), (b = 0), ++c), (b += this._core.mergers(this._core.relative(a)));
            }),
            (b.prototype.draw = function () {
                var b,
                    c,
                    d = "",
                    e = this._core.settings,
                    f = (this._core.$stage.children(), this._core.relative(this._core.current()));
                if (
                    (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())),
                    this._controls.$previous.toggle(e.nav),
                    this._controls.$next.toggle(e.nav),
                    e.dots)
                ) {
                    if (((b = this._pages.length - this._controls.$indicators.children().length), e.dotData && 0 !== b)) {
                        for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                        this._controls.$indicators.html(d);
                    } else b > 0 ? ((d = new Array(b + 1).join(this._templates[0])), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
                    this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active");
                }
                this._controls.$indicators.toggle(e.dots);
            }),
            (b.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) };
            }),
            (b.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(this._pages, function (a) {
                        return a.start <= b && a.end >= b;
                    })
                    .pop();
            }),
            (b.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (b.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (b.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (b.prototype.to = function (b, c, d) {
                var e;
                d ? a.proxy(this._overrides.to, this._core)(b, c) : ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c));
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = b);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b) {
        "use strict";
        var c = function (d) {
            (this._core = d),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function () {
                        "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                        this._hashes[c] = b.content;
                    }, this),
                }),
                (this._core.options = a.extend({}, c.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function () {
                        var a = b.location.hash.substring(1),
                            c = this._core.$stage.children(),
                            d = (this._hashes[a] && c.index(this._hashes[a])) || 0;
                        return a ? void this._core.to(d, !1, !0) : !1;
                    }, this)
                );
        };
        (c.Defaults = { URLhashListener: !1 }),
            (c.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = c);
    })(window.Zepto || window.jQuery, window, document);

/*  Magnific PopUp */

!(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return (f.className = "mfp-" + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
        },
        A = function () {
            a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
                b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
                (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({ height: d.height(), position: "absolute" }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos)) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : (b.content = a)) : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
            }
            return (e.type = d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[c] = e), y("ElementParse", e), b.items[c];
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? (f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))) : f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close();
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e,
                        f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({ mfpEl: e }, d, f);
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function () {
                b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function () {
                            J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup:
                '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), (c.hasSize = !0), (c.loaded = !0), y("ImageLoadComplete"))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d)
                        : (b.updateStatus("loading"), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)), d)
                );
            },
        },
    });
    var N,
        O = function () {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition";
                            return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
                        },
                        k = function () {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a)) return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return O() ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)") : ((h.left = e.left), (h.top = e.top)), h;
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace("%id%", e)), !1) : void 0;
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            },
        },
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on("click" + e, ".mfp-img", function () {
                                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                                  }),
                                  d.on("keydown" + e, function (a) {
                                      37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w("UpdateStatus" + e, function (a, c) {
                              c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                          }),
                          w("BuildControls" + e, function () {
                              if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
                                      f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
                                  e.click(function () {
                                      b.prev();
                                  }),
                                      f.click(function () {
                                          b.next();
                                      }),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    d.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                                })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                            }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            },
        },
    }),
        A();
});

/* Isotope PACKAGED */

(function (t) {
    function e() {}
    function i(t) {
        function i(e) {
            e.prototype.option ||
                (e.prototype.option = function (e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e));
                });
        }
        function n(e, i) {
            t.fn[e] = function (n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a],
                            h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f) return f;
                            } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'");
                    }
                    return this;
                }
                return this.each(function () {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : ((o = new i(this, n)), t.data(this, e, o));
                });
            };
        }
        if (t) {
            var r =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      };
            return (
                (t.bridget = function (t, e) {
                    i(e), n(t, e);
                }),
                t.bridget
            );
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery);
})(window),
    (function (t) {
        function e(e) {
            var i = t.event;
            return (i.target = i.target || i.srcElement || e), i;
        }
        var i = document.documentElement,
            o = function () {};
        i.addEventListener
            ? (o = function (t, e, i) {
                  t.addEventListener(e, i, !1);
              })
            : i.attachEvent &&
              (o = function (t, i, o) {
                  (t[i + o] = o.handleEvent
                      ? function () {
                            var i = e(t);
                            o.handleEvent.call(o, i);
                        }
                      : function () {
                            var i = e(t);
                            o.call(t, i);
                        }),
                      t.attachEvent("on" + i, t[i + o]);
              });
        var n = function () {};
        i.removeEventListener
            ? (n = function (t, e, i) {
                  t.removeEventListener(e, i, !1);
              })
            : i.detachEvent &&
              (n = function (t, e, i) {
                  t.detachEvent("on" + e, t[e + i]);
                  try {
                      delete t[e + i];
                  } catch (o) {
                      t[e + i] = void 0;
                  }
              });
        var r = { bind: o, unbind: n };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? (module.exports = r) : (t.eventie = r);
    })(this),
    (function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t));
        }
        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || o();
        }
        function o() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var o = s[t];
                o();
            }
        }
        function n(n) {
            return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e;
        }
        var r = t.document,
            s = [];
        (e.isReady = !1), "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? (module.exports = n(require("eventie"))) : (t.docReady = n(t.eventie));
    })(window),
    function () {
        function t() {}
        function e(t, e) {
            for (var i = t.length; i--; ) if (t[i].listener === e) return i;
            return -1;
        }
        function i(t) {
            return function () {
                return this[t].apply(this, arguments);
            };
        }
        var o = t.prototype,
            n = this,
            r = n.EventEmitter;
        (o.getListeners = function (t) {
            var e,
                i,
                o = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]);
            } else e = o[t] || (o[t] = []);
            return e;
        }),
            (o.flattenListeners = function (t) {
                var e,
                    i = [];
                for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
                return i;
            }),
            (o.getListenersAsObject = function (t) {
                var e,
                    i = this.getListeners(t);
                return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
            }),
            (o.addListener = function (t, i) {
                var o,
                    n = this.getListenersAsObject(t),
                    r = "object" == typeof i;
                for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : { listener: i, once: !1 });
                return this;
            }),
            (o.on = i("addListener")),
            (o.addOnceListener = function (t, e) {
                return this.addListener(t, { listener: e, once: !0 });
            }),
            (o.once = i("addOnceListener")),
            (o.defineEvent = function (t) {
                return this.getListeners(t), this;
            }),
            (o.defineEvents = function (t) {
                for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
                return this;
            }),
            (o.removeListener = function (t, i) {
                var o,
                    n,
                    r = this.getListenersAsObject(t);
                for (n in r) r.hasOwnProperty(n) && ((o = e(r[n], i)), -1 !== o && r[n].splice(o, 1));
                return this;
            }),
            (o.off = i("removeListener")),
            (o.addListeners = function (t, e) {
                return this.manipulateListeners(!1, t, e);
            }),
            (o.removeListeners = function (t, e) {
                return this.manipulateListeners(!0, t, e);
            }),
            (o.manipulateListeners = function (t, e, i) {
                var o,
                    n,
                    r = t ? this.removeListener : this.addListener,
                    s = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp) for (o = i.length; o--; ) r.call(this, e, i[o]);
                else for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
                return this;
            }),
            (o.removeEvent = function (t) {
                var e,
                    i = typeof t,
                    o = this._getEvents();
                if ("string" === i) delete o[t];
                else if (t instanceof RegExp) for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
                else delete this._events;
                return this;
            }),
            (o.removeAllListeners = i("removeEvent")),
            (o.emitEvent = function (t, e) {
                var i,
                    o,
                    n,
                    r,
                    s = this.getListenersAsObject(t);
                for (n in s)
                    if (s.hasOwnProperty(n))
                        for (o = s[n].length; o--; ) (i = s[n][o]), i.once === !0 && this.removeListener(t, i.listener), (r = i.listener.apply(this, e || [])), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
                return this;
            }),
            (o.trigger = i("emitEvent")),
            (o.emit = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e);
            }),
            (o.setOnceReturnValue = function (t) {
                return (this._onceReturnValue = t), this;
            }),
            (o._getOnceReturnValue = function () {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
            }),
            (o._getEvents = function () {
                return this._events || (this._events = {});
            }),
            (t.noConflict = function () {
                return (n.EventEmitter = r), t;
            }),
            "function" == typeof define && define.amd
                ? define("eventEmitter/EventEmitter", [], function () {
                      return t;
                  })
                : "object" == typeof module && module.exports
                ? (module.exports = t)
                : (n.EventEmitter = t);
    }.call(this),
    (function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++) if (((e = i[n] + t), "string" == typeof o[e])) return e;
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd
            ? define("get-style-property/get-style-property", [], function () {
                  return e;
              })
            : "object" == typeof exports
            ? (module.exports = e)
            : (t.getStyleProperty = e);
    })(window),
    (function (t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e;
        }
        function i() {}
        function o() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = s.length; i > e; e++) {
                var o = s[e];
                t[o] = 0;
            }
            return t;
        }
        function n(i) {
            function n() {
                if (!d) {
                    d = !0;
                    var o = t.getComputedStyle;
                    if (
                        ((p = (function () {
                            var t = o
                                ? function (t) {
                                      return o(t, null);
                                  }
                                : function (t) {
                                      return t.currentStyle;
                                  };
                            return function (e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i;
                            };
                        })()),
                        (h = i("boxSizing")))
                    ) {
                        var n = document.createElement("div");
                        (n.style.width = "200px"), (n.style.padding = "1px 2px 3px 4px"), (n.style.borderStyle = "solid"), (n.style.borderWidth = "1px 2px 3px 4px"), (n.style[h] = "border-box");
                        var s = document.body || document.documentElement;
                        s.appendChild(n);
                        var a = p(n);
                        (f = 200 === e(a.width)), s.removeChild(n);
                    }
                }
            }
            function a(t) {
                if ((n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType)) {
                    var i = p(t);
                    if ("none" === i.display) return o();
                    var r = {};
                    (r.width = t.offsetWidth), (r.height = t.offsetHeight);
                    for (var a = (r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h])), d = 0, l = s.length; l > d; d++) {
                        var c = s[d],
                            y = i[c];
                        y = u(t, y);
                        var m = parseFloat(y);
                        r[c] = isNaN(m) ? 0 : m;
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        _ = r.marginLeft + r.marginRight,
                        I = r.marginTop + r.marginBottom,
                        L = r.borderLeftWidth + r.borderRightWidth,
                        z = r.borderTopWidth + r.borderBottomWidth,
                        b = a && f,
                        x = e(i.width);
                    x !== !1 && (r.width = x + (b ? 0 : g + L));
                    var S = e(i.height);
                    return S !== !1 && (r.height = S + (b ? 0 : v + z)), (r.innerWidth = r.width - (g + L)), (r.innerHeight = r.height - (v + z)), (r.outerWidth = r.width + _), (r.outerHeight = r.height + I), r;
                }
            }
            function u(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var o = e.style,
                    n = o.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), (o.left = i), (i = o.pixelLeft), (o.left = n), s && (r.left = s), i;
            }
            var p,
                h,
                f,
                d = !1;
            return a;
        }
        var r =
                "undefined" == typeof console
                    ? i
                    : function (t) {
                          console.error(t);
                      },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd
            ? define("get-size/get-size", ["get-style-property/get-style-property"], n)
            : "object" == typeof exports
            ? (module.exports = n(require("desandro-get-style-property")))
            : (t.getSize = n(t.getStyleProperty));
    })(window),
    (function (t) {
        function e(t, e) {
            return t[s](e);
        }
        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t);
            }
        }
        function o(t, e) {
            i(t);
            for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++) if (o[n] === t) return !0;
            return !1;
        }
        function n(t, o) {
            return i(t), e(t, o);
        }
        var r,
            s = (function () {
                if (t.matchesSelector) return "matchesSelector";
                for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
                    var n = e[i],
                        r = n + "MatchesSelector";
                    if (t[r]) return r;
                }
            })();
        if (s) {
            var a = document.createElement("div"),
                u = e(a, "div");
            r = u ? e : n;
        } else r = o;
        "function" == typeof define && define.amd
            ? define("matches-selector/matches-selector", [], function () {
                  return r;
              })
            : "object" == typeof exports
            ? (module.exports = r)
            : (window.matchesSelector = r);
    })(Element.prototype),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        function n(t, n, r) {
            function a(t, e) {
                t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
            }
            var u = r("transition"),
                p = r("transform"),
                h = u && p,
                f = !!r("perspective"),
                d = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[u],
                l = ["transform", "transition", "transitionDuration", "transitionProperty"],
                c = (function () {
                    for (var t = {}, e = 0, i = l.length; i > e; e++) {
                        var o = l[e],
                            n = r(o);
                        n && n !== o && (t[o] = n);
                    }
                    return t;
                })();
            e(a.prototype, t.prototype),
                (a.prototype._create = function () {
                    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
                }),
                (a.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (a.prototype.getSize = function () {
                    this.size = n(this.element);
                }),
                (a.prototype.css = function (t) {
                    var e = this.element.style;
                    for (var i in t) {
                        var o = c[i] || i;
                        e[o] = t[i];
                    }
                }),
                (a.prototype.getPosition = function () {
                    var t = s(this.element),
                        e = this.layout.options,
                        i = e.isOriginLeft,
                        o = e.isOriginTop,
                        n = parseInt(t[i ? "left" : "right"], 10),
                        r = parseInt(t[o ? "top" : "bottom"], 10);
                    (n = isNaN(n) ? 0 : n), (r = isNaN(r) ? 0 : r);
                    var a = this.layout.size;
                    (n -= i ? a.paddingLeft : a.paddingRight), (r -= o ? a.paddingTop : a.paddingBottom), (this.position.x = n), (this.position.y = r);
                }),
                (a.prototype.layoutPosition = function () {
                    var t = this.layout.size,
                        e = this.layout.options,
                        i = {};
                    e.isOriginLeft ? ((i.left = this.position.x + t.paddingLeft + "px"), (i.right = "")) : ((i.right = this.position.x + t.paddingRight + "px"), (i.left = "")),
                        e.isOriginTop ? ((i.top = this.position.y + t.paddingTop + "px"), (i.bottom = "")) : ((i.bottom = this.position.y + t.paddingBottom + "px"), (i.top = "")),
                        this.css(i),
                        this.emitEvent("layout", [this]);
                });
            var y = f
                ? function (t, e) {
                      return "translate3d(" + t + "px, " + e + "px, 0)";
                  }
                : function (t, e) {
                      return "translate(" + t + "px, " + e + "px)";
                  };
            (a.prototype._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = n === this.position.x && r === this.position.y;
                if ((this.setPosition(t, e), s && !this.isTransitioning)) return this.layoutPosition(), void 0;
                var a = t - i,
                    u = e - o,
                    p = {},
                    h = this.layout.options;
                (a = h.isOriginLeft ? a : -a), (u = h.isOriginTop ? u : -u), (p.transform = y(a, u)), this.transition({ to: p, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
                (a.prototype.goTo = function (t, e) {
                    this.setPosition(t, e), this.layoutPosition();
                }),
                (a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo),
                (a.prototype.setPosition = function (t, e) {
                    (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
                }),
                (a.prototype._nonTransition = function (t) {
                    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
                }),
                (a.prototype._transition = function (t) {
                    if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        var o = this.element.offsetHeight;
                        o = null;
                    }
                    this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                });
            var m = p && o(p) + ",opacity";
            (a.prototype.enableTransition = function () {
                this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(d, this, !1));
            }),
                (a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"]),
                (a.prototype.onwebkitTransitionEnd = function (t) {
                    this.ontransitionend(t);
                }),
                (a.prototype.onotransitionend = function (t) {
                    this.ontransitionend(t);
                });
            var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
            (a.prototype.ontransitionend = function (t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        o = g[t.propertyName] || t.propertyName;
                    if ((delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[o]), o in e.onEnd)) {
                        var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o];
                    }
                    this.emitEvent("transitionEnd", [this]);
                }
            }),
                (a.prototype.disableTransition = function () {
                    this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), (this.isTransitioning = !1);
                }),
                (a.prototype._removeStyles = function (t) {
                    var e = {};
                    for (var i in t) e[i] = "";
                    this.css(e);
                });
            var v = { transitionProperty: "", transitionDuration: "" };
            return (
                (a.prototype.removeTransitionStyles = function () {
                    this.css(v);
                }),
                (a.prototype.removeElem = function () {
                    this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]);
                }),
                (a.prototype.remove = function () {
                    if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                    var t = this;
                    this.on("transitionEnd", function () {
                        return t.removeElem(), !0;
                    }),
                        this.hide();
                }),
                (a.prototype.reveal = function () {
                    delete this.isHidden, this.css({ display: "" });
                    var t = this.layout.options;
                    this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0 });
                }),
                (a.prototype.hide = function () {
                    (this.isHidden = !0), this.css({ display: "" });
                    var t = this.layout.options;
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: {
                            opacity: function () {
                                this.isHidden && this.css({ display: "none" });
                            },
                        },
                    });
                }),
                (a.prototype.destroy = function () {
                    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
                }),
                a
            );
        }
        var r = t.getComputedStyle,
            s = r
                ? function (t) {
                      return r(t, null);
                  }
                : function (t) {
                      return t.currentStyle;
                  };
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n)
            : "object" == typeof exports
            ? (module.exports = n(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty)));
    })(window),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            return "[object Array]" === f.call(t);
        }
        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length) for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e;
        }
        function n(t, e) {
            var i = l(e, t);
            -1 !== i && e.splice(i, 1);
        }
        function r(t) {
            return t
                .replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i;
                })
                .toLowerCase();
        }
        function s(i, s, f, l, c, y) {
            function m(t, i) {
                if (("string" == typeof t && (t = a.querySelector(t)), !t || !d(t))) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                (this.element = t), (this.options = e({}, this.constructor.defaults)), this.option(i);
                var o = ++g;
                (this.element.outlayerGUID = o), (v[o] = this), this._create(), this.options.isInitLayout && this.layout();
            }
            var g = 0,
                v = {};
            return (
                (m.namespace = "outlayer"),
                (m.Item = y),
                (m.defaults = {
                    containerStyle: { position: "relative" },
                    isInitLayout: !0,
                    isOriginLeft: !0,
                    isOriginTop: !0,
                    isResizeBound: !0,
                    isResizingContainer: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                    visibleStyle: { opacity: 1, transform: "scale(1)" },
                }),
                e(m.prototype, f.prototype),
                (m.prototype.option = function (t) {
                    e(this.options, t);
                }),
                (m.prototype._create = function () {
                    this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
                }),
                (m.prototype.reloadItems = function () {
                    this.items = this._itemize(this.element.children);
                }),
                (m.prototype._itemize = function (t) {
                    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                        var s = e[n],
                            a = new i(s, this);
                        o.push(a);
                    }
                    return o;
                }),
                (m.prototype._filterFindItemElements = function (t) {
                    t = o(t);
                    for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                        var s = t[n];
                        if (d(s))
                            if (e) {
                                c(s, e) && i.push(s);
                                for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u]);
                            } else i.push(s);
                    }
                    return i;
                }),
                (m.prototype.getItemElements = function () {
                    for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                    return t;
                }),
                (m.prototype.layout = function () {
                    this._resetLayout(), this._manageStamps();
                    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                    this.layoutItems(this.items, t), (this._isLayoutInited = !0);
                }),
                (m.prototype._init = m.prototype.layout),
                (m.prototype._resetLayout = function () {
                    this.getSize();
                }),
                (m.prototype.getSize = function () {
                    this.size = l(this.element);
                }),
                (m.prototype._getMeasurement = function (t, e) {
                    var i,
                        o = this.options[t];
                    o ? ("string" == typeof o ? (i = this.element.querySelector(o)) : d(o) && (i = o), (this[t] = i ? l(i)[e] : o)) : (this[t] = 0);
                }),
                (m.prototype.layoutItems = function (t, e) {
                    (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
                }),
                (m.prototype._getItemsForLayout = function (t) {
                    for (var e = [], i = 0, o = t.length; o > i; i++) {
                        var n = t[i];
                        n.isIgnored || e.push(n);
                    }
                    return e;
                }),
                (m.prototype._layoutItems = function (t, e) {
                    function i() {
                        o.emitEvent("layoutComplete", [o, t]);
                    }
                    var o = this;
                    if (!t || !t.length) return i(), void 0;
                    this._itemsOn(t, "layout", i);
                    for (var n = [], r = 0, s = t.length; s > r; r++) {
                        var a = t[r],
                            u = this._getItemLayoutPosition(a);
                        (u.item = a), (u.isInstant = e || a.isLayoutInstant), n.push(u);
                    }
                    this._processLayoutQueue(n);
                }),
                (m.prototype._getItemLayoutPosition = function () {
                    return { x: 0, y: 0 };
                }),
                (m.prototype._processLayoutQueue = function (t) {
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        this._positionItem(o.item, o.x, o.y, o.isInstant);
                    }
                }),
                (m.prototype._positionItem = function (t, e, i, o) {
                    o ? t.goTo(e, i) : t.moveTo(e, i);
                }),
                (m.prototype._postLayout = function () {
                    this.resizeContainer();
                }),
                (m.prototype.resizeContainer = function () {
                    if (this.options.isResizingContainer) {
                        var t = this._getContainerSize();
                        t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                    }
                }),
                (m.prototype._getContainerSize = h),
                (m.prototype._setContainerMeasure = function (t, e) {
                    if (void 0 !== t) {
                        var i = this.size;
                        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                            (t = Math.max(t, 0)),
                            (this.element.style[e ? "width" : "height"] = t + "px");
                    }
                }),
                (m.prototype._itemsOn = function (t, e, i) {
                    function o() {
                        return n++, n === r && i.call(s), !0;
                    }
                    for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                        var p = t[a];
                        p.on(e, o);
                    }
                }),
                (m.prototype.ignore = function (t) {
                    var e = this.getItem(t);
                    e && (e.isIgnored = !0);
                }),
                (m.prototype.unignore = function (t) {
                    var e = this.getItem(t);
                    e && delete e.isIgnored;
                }),
                (m.prototype.stamp = function (t) {
                    if ((t = this._find(t))) {
                        this.stamps = this.stamps.concat(t);
                        for (var e = 0, i = t.length; i > e; e++) {
                            var o = t[e];
                            this.ignore(o);
                        }
                    }
                }),
                (m.prototype.unstamp = function (t) {
                    if ((t = this._find(t)))
                        for (var e = 0, i = t.length; i > e; e++) {
                            var o = t[e];
                            n(o, this.stamps), this.unignore(o);
                        }
                }),
                (m.prototype._find = function (t) {
                    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), (t = o(t))) : void 0;
                }),
                (m.prototype._manageStamps = function () {
                    if (this.stamps && this.stamps.length) {
                        this._getBoundingRect();
                        for (var t = 0, e = this.stamps.length; e > t; t++) {
                            var i = this.stamps[t];
                            this._manageStamp(i);
                        }
                    }
                }),
                (m.prototype._getBoundingRect = function () {
                    var t = this.element.getBoundingClientRect(),
                        e = this.size;
                    this._boundingRect = {
                        left: t.left + e.paddingLeft + e.borderLeftWidth,
                        top: t.top + e.paddingTop + e.borderTopWidth,
                        right: t.right - (e.paddingRight + e.borderRightWidth),
                        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                    };
                }),
                (m.prototype._manageStamp = h),
                (m.prototype._getElementOffset = function (t) {
                    var e = t.getBoundingClientRect(),
                        i = this._boundingRect,
                        o = l(t),
                        n = { left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom };
                    return n;
                }),
                (m.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (m.prototype.bindResize = function () {
                    this.isResizeBound || (i.bind(t, "resize", this), (this.isResizeBound = !0));
                }),
                (m.prototype.unbindResize = function () {
                    this.isResizeBound && i.unbind(t, "resize", this), (this.isResizeBound = !1);
                }),
                (m.prototype.onresize = function () {
                    function t() {
                        e.resize(), delete e.resizeTimeout;
                    }
                    this.resizeTimeout && clearTimeout(this.resizeTimeout);
                    var e = this;
                    this.resizeTimeout = setTimeout(t, 100);
                }),
                (m.prototype.resize = function () {
                    this.isResizeBound && this.needsResizeLayout() && this.layout();
                }),
                (m.prototype.needsResizeLayout = function () {
                    var t = l(this.element),
                        e = this.size && t;
                    return e && t.innerWidth !== this.size.innerWidth;
                }),
                (m.prototype.addItems = function (t) {
                    var e = this._itemize(t);
                    return e.length && (this.items = this.items.concat(e)), e;
                }),
                (m.prototype.appended = function (t) {
                    var e = this.addItems(t);
                    e.length && (this.layoutItems(e, !0), this.reveal(e));
                }),
                (m.prototype.prepended = function (t) {
                    var e = this._itemize(t);
                    if (e.length) {
                        var i = this.items.slice(0);
                        (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                    }
                }),
                (m.prototype.reveal = function (t) {
                    var e = t && t.length;
                    if (e)
                        for (var i = 0; e > i; i++) {
                            var o = t[i];
                            o.reveal();
                        }
                }),
                (m.prototype.hide = function (t) {
                    var e = t && t.length;
                    if (e)
                        for (var i = 0; e > i; i++) {
                            var o = t[i];
                            o.hide();
                        }
                }),
                (m.prototype.getItem = function (t) {
                    for (var e = 0, i = this.items.length; i > e; e++) {
                        var o = this.items[e];
                        if (o.element === t) return o;
                    }
                }),
                (m.prototype.getItems = function (t) {
                    if (t && t.length) {
                        for (var e = [], i = 0, o = t.length; o > i; i++) {
                            var n = t[i],
                                r = this.getItem(n);
                            r && e.push(r);
                        }
                        return e;
                    }
                }),
                (m.prototype.remove = function (t) {
                    t = o(t);
                    var e = this.getItems(t);
                    if (e && e.length) {
                        this._itemsOn(e, "remove", function () {
                            this.emitEvent("removeComplete", [this, e]);
                        });
                        for (var i = 0, r = e.length; r > i; i++) {
                            var s = e[i];
                            s.remove(), n(s, this.items);
                        }
                    }
                }),
                (m.prototype.destroy = function () {
                    var t = this.element.style;
                    (t.height = ""), (t.position = ""), (t.width = "");
                    for (var e = 0, i = this.items.length; i > e; e++) {
                        var o = this.items[e];
                        o.destroy();
                    }
                    this.unbindResize();
                    var n = this.element.outlayerGUID;
                    delete v[n], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace);
                }),
                (m.data = function (t) {
                    var e = t && t.outlayerGUID;
                    return e && v[e];
                }),
                (m.create = function (t, i) {
                    function o() {
                        m.apply(this, arguments);
                    }
                    return (
                        Object.create ? (o.prototype = Object.create(m.prototype)) : e(o.prototype, m.prototype),
                        (o.prototype.constructor = o),
                        (o.defaults = e({}, m.defaults)),
                        e(o.defaults, i),
                        (o.prototype.settings = {}),
                        (o.namespace = t),
                        (o.data = m.data),
                        (o.Item = function () {
                            y.apply(this, arguments);
                        }),
                        (o.Item.prototype = new y()),
                        s(function () {
                            for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                                var f,
                                    d = i[s],
                                    l = d.getAttribute(n);
                                try {
                                    f = l && JSON.parse(l);
                                } catch (c) {
                                    u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
                                    continue;
                                }
                                var y = new o(d, f);
                                p && p.data(d, t, y);
                            }
                        }),
                        p && p.bridget && p.bridget(t, o),
                        o
                    );
                }),
                (m.Item = y),
                m
            );
        }
        var a = t.document,
            u = t.console,
            p = t.jQuery,
            h = function () {},
            f = Object.prototype.toString,
            d =
                "function" == typeof HTMLElement || "object" == typeof HTMLElement
                    ? function (t) {
                          return t instanceof HTMLElement;
                      }
                    : function (t) {
                          return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName;
                      },
            l = Array.prototype.indexOf
                ? function (t, e) {
                      return t.indexOf(e);
                  }
                : function (t, e) {
                      for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
                      return -1;
                  };
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s)
            : "object" == typeof exports
            ? (module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")))
            : (t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item));
    })(window),
    (function (t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments);
            }
            (e.prototype = new t.Item()),
                (e.prototype._create = function () {
                    (this.id = this.layout.itemGUID++), t.Item.prototype._create.call(this), (this.sortData = {});
                }),
                (e.prototype.updateSortData = function () {
                    if (!this.isIgnored) {
                        (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                        var t = this.layout.options.getSortData,
                            e = this.layout._sorters;
                        for (var i in t) {
                            var o = e[i];
                            this.sortData[i] = o(this.element, this);
                        }
                    }
                });
            var i = e.prototype.destroy;
            return (
                (e.prototype.destroy = function () {
                    i.apply(this, arguments), this.css({ display: "" });
                }),
                e
            );
        }
        "function" == typeof define && define.amd
            ? define("isotope/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window),
    (function (t) {
        function e(t, e) {
            function i(t) {
                (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
            }
            return (
                (function () {
                    function t(t) {
                        return function () {
                            return e.prototype[t].apply(this.isotope, arguments);
                        };
                    }
                    for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                        var s = o[n];
                        i.prototype[s] = t(s);
                    }
                })(),
                (i.prototype.needsVerticalResizeLayout = function () {
                    var e = t(this.isotope.element),
                        i = this.isotope.size && e;
                    return i && e.innerHeight !== this.isotope.size.innerHeight;
                }),
                (i.prototype._getMeasurement = function () {
                    this.isotope._getMeasurement.apply(this, arguments);
                }),
                (i.prototype.getColumnWidth = function () {
                    this.getSegmentSize("column", "Width");
                }),
                (i.prototype.getRowHeight = function () {
                    this.getSegmentSize("row", "Height");
                }),
                (i.prototype.getSegmentSize = function (t, e) {
                    var i = t + e,
                        o = "outer" + e;
                    if ((this._getMeasurement(i, o), !this[i])) {
                        var n = this.getFirstItemSize();
                        this[i] = (n && n[o]) || this.isotope.size["inner" + e];
                    }
                }),
                (i.prototype.getFirstItemSize = function () {
                    var e = this.isotope.filteredItems[0];
                    return e && e.element && t(e.element);
                }),
                (i.prototype.layout = function () {
                    this.isotope.layout.apply(this.isotope, arguments);
                }),
                (i.prototype.getSize = function () {
                    this.isotope.getSize(), (this.size = this.isotope.size);
                }),
                (i.modes = {}),
                (i.create = function (t, e) {
                    function o() {
                        i.apply(this, arguments);
                    }
                    return (o.prototype = new i()), e && (o.options = e), (o.prototype.namespace = t), (i.modes[t] = o), o;
                }),
                i
            );
        }
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window),
    (function (t) {
        function e(t, e) {
            var o = t.create("masonry");
            return (
                (o.prototype._resetLayout = function () {
                    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                    var t = this.cols;
                    for (this.colYs = []; t--; ) this.colYs.push(0);
                    this.maxY = 0;
                }),
                (o.prototype.measureColumns = function () {
                    if ((this.getContainerWidth(), !this.columnWidth)) {
                        var t = this.items[0],
                            i = t && t.element;
                        this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                    }
                    (this.columnWidth += this.gutter), (this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth)), (this.cols = Math.max(this.cols, 1));
                }),
                (o.prototype.getContainerWidth = function () {
                    var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                        i = e(t);
                    this.containerWidth = i && i.innerWidth;
                }),
                (o.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth % this.columnWidth,
                        o = e && 1 > e ? "round" : "ceil",
                        n = Math[o](t.size.outerWidth / this.columnWidth);
                    n = Math.min(n, this.cols);
                    for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = { x: this.columnWidth * a, y: s }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
                    return u;
                }),
                (o.prototype._getColGroup = function (t) {
                    if (2 > t) return this.colYs;
                    for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                        var n = this.colYs.slice(o, o + t);
                        e[o] = Math.max.apply(Math, n);
                    }
                    return e;
                }),
                (o.prototype._manageStamp = function (t) {
                    var i = e(t),
                        o = this._getElementOffset(t),
                        n = this.options.isOriginLeft ? o.left : o.right,
                        r = n + i.outerWidth,
                        s = Math.floor(n / this.columnWidth);
                    s = Math.max(0, s);
                    var a = Math.floor(r / this.columnWidth);
                    (a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
                    for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p]);
                }),
                (o.prototype._getContainerSize = function () {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var t = { height: this.maxY };
                    return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t;
                }),
                (o.prototype._getContainerFitWidth = function () {
                    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                    return (this.cols - t) * this.columnWidth - this.gutter;
                }),
                (o.prototype.needsResizeLayout = function () {
                    var t = this.containerWidth;
                    return this.getContainerWidth(), t !== this.containerWidth;
                }),
                o
            );
        }
        var i = Array.prototype.indexOf
            ? function (t, e) {
                  return t.indexOf(e);
              }
            : function (t, e) {
                  for (var i = 0, o = t.length; o > i; i++) {
                      var n = t[i];
                      if (n === e) return i;
                  }
                  return -1;
              };
        "function" == typeof define && define.amd
            ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t, i) {
            var o = t.create("masonry"),
                n = o.prototype._getElementOffset,
                r = o.prototype.layout,
                s = o.prototype._getMeasurement;
            e(o.prototype, i.prototype), (o.prototype._getElementOffset = n), (o.prototype.layout = r), (o.prototype._getMeasurement = s);
            var a = o.prototype.measureColumns;
            o.prototype.measureColumns = function () {
                (this.items = this.isotope.filteredItems), a.call(this);
            };
            var u = o.prototype._manageStamp;
            return (
                (o.prototype._manageStamp = function () {
                    (this.options.isOriginLeft = this.isotope.options.isOriginLeft), (this.options.isOriginTop = this.isotope.options.isOriginTop), u.apply(this, arguments);
                }),
                o
            );
        }
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i)
            : "object" == typeof exports
            ? (module.exports = i(require("../layout-mode"), require("masonry-layout")))
            : i(t.Isotope.LayoutMode, t.Masonry);
    })(window),
    (function (t) {
        function e(t) {
            var e = t.create("fitRows");
            return (
                (e.prototype._resetLayout = function () {
                    (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
                }),
                (e.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth + this.gutter,
                        i = this.isotope.size.innerWidth + this.gutter;
                    0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                    var o = { x: this.x, y: this.y };
                    return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
                }),
                (e.prototype._getContainerSize = function () {
                    return { height: this.maxY };
                }),
                e
            );
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window),
    (function (t) {
        function e(t) {
            var e = t.create("vertical", { horizontalAlignment: 0 });
            return (
                (e.prototype._resetLayout = function () {
                    this.y = 0;
                }),
                (e.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                        i = this.y;
                    return (this.y += t.size.outerHeight), { x: e, y: i };
                }),
                (e.prototype._getContainerSize = function () {
                    return { height: this.y };
                }),
                e
            );
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            return "[object Array]" === h.call(t);
        }
        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length) for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e;
        }
        function n(t, e) {
            var i = f(e, t);
            -1 !== i && e.splice(i, 1);
        }
        function r(t, i, r, u, h) {
            function f(t, e) {
                return function (i, o) {
                    for (var n = 0, r = t.length; r > n; n++) {
                        var s = t[n],
                            a = i.sortData[s],
                            u = o.sortData[s];
                        if (a > u || u > a) {
                            var p = void 0 !== e[s] ? e[s] : e,
                                h = p ? 1 : -1;
                            return (a > u ? 1 : -1) * h;
                        }
                    }
                    return 0;
                };
            }
            var d = t.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
            (d.Item = u),
                (d.LayoutMode = h),
                (d.prototype._create = function () {
                    (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), t.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
                    for (var e in h.modes) this._initLayoutMode(e);
                }),
                (d.prototype.reloadItems = function () {
                    (this.itemGUID = 0), t.prototype.reloadItems.call(this);
                }),
                (d.prototype._itemize = function () {
                    for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                        var n = e[i];
                        n.id = this.itemGUID++;
                    }
                    return this._updateItemsSortData(e), e;
                }),
                (d.prototype._initLayoutMode = function (t) {
                    var i = h.modes[t],
                        o = this.options[t] || {};
                    (this.options[t] = i.options ? e(i.options, o) : o), (this.modes[t] = new i(this));
                }),
                (d.prototype.layout = function () {
                    return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0);
                }),
                (d.prototype._layout = function () {
                    var t = this._getIsInstant();
                    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
                }),
                (d.prototype.arrange = function (t) {
                    this.option(t), this._getIsInstant(), (this.filteredItems = this._filter(this.items)), this._sort(), this._layout();
                }),
                (d.prototype._init = d.prototype.arrange),
                (d.prototype._getIsInstant = function () {
                    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                    return (this._isInstant = t), t;
                }),
                (d.prototype._filter = function (t) {
                    function e() {
                        f.reveal(n), f.hide(r);
                    }
                    var i = this.options.filter;
                    i = i || "*";
                    for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                        var p = t[a];
                        if (!p.isIgnored) {
                            var h = s(p);
                            h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p);
                        }
                    }
                    var f = this;
                    return this._isInstant ? this._noTransition(e) : e(), o;
                }),
                (d.prototype._getFilterTest = function (t) {
                    return s && this.options.isJQueryFiltering
                        ? function (e) {
                              return s(e.element).is(t);
                          }
                        : "function" == typeof t
                        ? function (e) {
                              return t(e.element);
                          }
                        : function (e) {
                              return r(e.element, t);
                          };
                }),
                (d.prototype.updateSortData = function (t) {
                    var e;
                    t ? ((t = o(t)), (e = this.getItems(t))) : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
                }),
                (d.prototype._getSorters = function () {
                    var t = this.options.getSortData;
                    for (var e in t) {
                        var i = t[e];
                        this._sorters[e] = l(i);
                    }
                }),
                (d.prototype._updateItemsSortData = function (t) {
                    for (var e = t && t.length, i = 0; e && e > i; i++) {
                        var o = t[i];
                        o.updateSortData();
                    }
                });
            var l = (function () {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        o = i[0],
                        n = o.match(/^\[(.+)\]$/),
                        r = n && n[1],
                        s = e(r, o),
                        u = d.sortDataParsers[i[1]];
                    return (t = u
                        ? function (t) {
                              return t && u(s(t));
                          }
                        : function (t) {
                              return t && s(t);
                          });
                }
                function e(t, e) {
                    var i;
                    return (i = t
                        ? function (e) {
                              return e.getAttribute(t);
                          }
                        : function (t) {
                              var i = t.querySelector(e);
                              return i && p(i);
                          });
                }
                return t;
            })();
            (d.sortDataParsers = {
                parseInt: function (t) {
                    return parseInt(t, 10);
                },
                parseFloat: function (t) {
                    return parseFloat(t);
                },
            }),
                (d.prototype._sort = function () {
                    var t = this.options.sortBy;
                    if (t) {
                        var e = [].concat.apply(t, this.sortHistory),
                            i = f(e, this.options.sortAscending);
                        this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t);
                    }
                }),
                (d.prototype._mode = function () {
                    var t = this.options.layoutMode,
                        e = this.modes[t];
                    if (!e) throw Error("No layout mode: " + t);
                    return (e.options = this.options[t]), e;
                }),
                (d.prototype._resetLayout = function () {
                    t.prototype._resetLayout.call(this), this._mode()._resetLayout();
                }),
                (d.prototype._getItemLayoutPosition = function (t) {
                    return this._mode()._getItemLayoutPosition(t);
                }),
                (d.prototype._manageStamp = function (t) {
                    this._mode()._manageStamp(t);
                }),
                (d.prototype._getContainerSize = function () {
                    return this._mode()._getContainerSize();
                }),
                (d.prototype.needsResizeLayout = function () {
                    return this._mode().needsResizeLayout();
                }),
                (d.prototype.appended = function (t) {
                    var e = this.addItems(t);
                    if (e.length) {
                        var i = this._filterRevealAdded(e);
                        this.filteredItems = this.filteredItems.concat(i);
                    }
                }),
                (d.prototype.prepended = function (t) {
                    var e = this._itemize(t);
                    if (e.length) {
                        var i = this.items.slice(0);
                        (this.items = e.concat(i)), this._resetLayout(), this._manageStamps();
                        var o = this._filterRevealAdded(e);
                        this.layoutItems(i), (this.filteredItems = o.concat(this.filteredItems));
                    }
                }),
                (d.prototype._filterRevealAdded = function (t) {
                    var e = this._noTransition(function () {
                        return this._filter(t);
                    });
                    return this.layoutItems(e, !0), this.reveal(e), t;
                }),
                (d.prototype.insert = function (t) {
                    var e = this.addItems(t);
                    if (e.length) {
                        var i,
                            o,
                            n = e.length;
                        for (i = 0; n > i; i++) (o = e[i]), this.element.appendChild(o.element);
                        var r = this._filter(e);
                        for (
                            this._noTransition(function () {
                                this.hide(r);
                            }),
                                i = 0;
                            n > i;
                            i++
                        )
                            e[i].isLayoutInstant = !0;
                        for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                        this.reveal(r);
                    }
                });
            var c = d.prototype.remove;
            return (
                (d.prototype.remove = function (t) {
                    t = o(t);
                    var e = this.getItems(t);
                    if ((c.call(this, t), e && e.length))
                        for (var i = 0, r = e.length; r > i; i++) {
                            var s = e[i];
                            n(s, this.filteredItems);
                        }
                }),
                (d.prototype.shuffle = function () {
                    for (var t = 0, e = this.items.length; e > t; t++) {
                        var i = this.items[t];
                        i.sortData.random = Math.random();
                    }
                    (this.options.sortBy = "random"), this._sort(), this._layout();
                }),
                (d.prototype._noTransition = function (t) {
                    var e = this.options.transitionDuration;
                    this.options.transitionDuration = 0;
                    var i = t.call(this);
                    return (this.options.transitionDuration = e), i;
                }),
                (d.prototype.getFilteredItemElements = function () {
                    for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
                    return t;
                }),
                d
            );
        }
        var s = t.jQuery,
            a = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            u = document.documentElement,
            p = u.textContent
                ? function (t) {
                      return t.textContent;
                  }
                : function (t) {
                      return t.innerText;
                  },
            h = Object.prototype.toString,
            f = Array.prototype.indexOf
                ? function (t, e) {
                      return t.indexOf(e);
                  }
                : function (t, e) {
                      for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
                      return -1;
                  };
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "matches-selector/matches-selector",
                  "isotope/js/item",
                  "isotope/js/layout-mode",
                  "isotope/js/layout-modes/masonry",
                  "isotope/js/layout-modes/fit-rows",
                  "isotope/js/layout-modes/vertical",
              ], r)
            : "object" == typeof exports
            ? (module.exports = r(
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("./item"),
                  require("./layout-mode"),
                  require("./layout-modes/masonry"),
                  require("./layout-modes/fit-rows"),
                  require("./layout-modes/vertical")
              ))
            : (t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode));
    })(window);

/*  Packery layout mode PACKAGED */

!(function (a) {
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)");
    }
    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b);
    }
    var d, e, f;
    "classList" in document.documentElement
        ? ((d = function (a, b) {
              return a.classList.contains(b);
          }),
          (e = function (a, b) {
              a.classList.add(b);
          }),
          (f = function (a, b) {
              a.classList.remove(b);
          }))
        : ((d = function (a, c) {
              return b(c).test(a.className);
          }),
          (e = function (a, b) {
              d(a, b) || (a.className = a.className + " " + b);
          }),
          (f = function (a, c) {
              a.className = a.className.replace(b(c), " ");
          }));
    var g = { hasClass: d, addClass: e, removeClass: f, toggleClass: c, has: d, add: e, remove: f, toggle: c };
    "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? (module.exports = g) : (a.classie = g);
})(window),
    (function (a) {
        function b() {
            function a(b) {
                for (var c in a.defaults) this[c] = a.defaults[c];
                for (c in b) this[c] = b[c];
            }
            return (
                (c.Rect = a),
                (a.defaults = { x: 0, y: 0, width: 0, height: 0 }),
                (a.prototype.contains = function (a) {
                    var b = a.width || 0,
                        c = a.height || 0;
                    return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c;
                }),
                (a.prototype.overlaps = function (a) {
                    var b = this.x + this.width,
                        c = this.y + this.height,
                        d = a.x + a.width,
                        e = a.y + a.height;
                    return this.x < d && b > a.x && this.y < e && c > a.y;
                }),
                (a.prototype.getMaximalFreeRects = function (b) {
                    if (!this.overlaps(b)) return !1;
                    var c,
                        d = [],
                        e = this.x + this.width,
                        f = this.y + this.height,
                        g = b.x + b.width,
                        h = b.y + b.height;
                    return (
                        this.y < b.y && ((c = new a({ x: this.x, y: this.y, width: this.width, height: b.y - this.y })), d.push(c)),
                        e > g && ((c = new a({ x: g, y: this.y, width: e - g, height: this.height })), d.push(c)),
                        f > h && ((c = new a({ x: this.x, y: h, width: this.width, height: f - h })), d.push(c)),
                        this.x < b.x && ((c = new a({ x: this.x, y: this.y, width: b.x - this.x, height: this.height })), d.push(c)),
                        d
                    );
                }),
                (a.prototype.canFit = function (a) {
                    return this.width >= a.width && this.height >= a.height;
                }),
                a
            );
        }
        var c = (a.Packery = function () {});
        "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? (module.exports = b()) : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
    })(window),
    (function (a) {
        function b(a) {
            function b(a, b, c) {
                (this.width = a || 0), (this.height = b || 0), (this.sortDirection = c || "downwardLeftToRight"), this.reset();
            }
            (b.prototype.reset = function () {
                (this.spaces = []), (this.newSpaces = []);
                var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
                this.spaces.push(b), (this.sorter = c[this.sortDirection] || c.downwardLeftToRight);
            }),
                (b.prototype.pack = function (a) {
                    for (var b = 0, c = this.spaces.length; c > b; b++) {
                        var d = this.spaces[b];
                        if (d.canFit(a)) {
                            this.placeInSpace(a, d);
                            break;
                        }
                    }
                }),
                (b.prototype.placeInSpace = function (a, b) {
                    (a.x = b.x), (a.y = b.y), this.placed(a);
                }),
                (b.prototype.placed = function (a) {
                    for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
                        var e = this.spaces[c],
                            f = e.getMaximalFreeRects(a);
                        f ? b.push.apply(b, f) : b.push(e);
                    }
                    (this.spaces = b), this.mergeSortSpaces();
                }),
                (b.prototype.mergeSortSpaces = function () {
                    b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
                }),
                (b.prototype.addSpace = function (a) {
                    this.spaces.push(a), this.mergeSortSpaces();
                }),
                (b.mergeRects = function (a) {
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        if (d) {
                            var e = a.slice(0);
                            e.splice(b, 1);
                            for (var f = 0, g = 0, h = e.length; h > g; g++) {
                                var i = e[g],
                                    j = b > g ? 0 : 1;
                                d.contains(i) && (a.splice(g + j - f, 1), f++);
                            }
                        }
                    }
                    return a;
                });
            var c = {
                downwardLeftToRight: function (a, b) {
                    return a.y - b.y || a.x - b.x;
                },
                rightwardTopToBottom: function (a, b) {
                    return a.x - b.x || a.y - b.y;
                },
            };
            return b;
        }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
        else if ("object" == typeof exports) module.exports = b(require("./rect"));
        else {
            var c = (a.Packery = a.Packery || {});
            c.Packer = b(c.Rect);
        }
    })(window),
    (function (a) {
        function b(a, b, c) {
            var d = a("transform"),
                e = function () {
                    b.Item.apply(this, arguments);
                };
            e.prototype = new b.Item();
            var f = e.prototype._create;
            return (
                (e.prototype._create = function () {
                    f.call(this), (this.rect = new c()), (this.placeRect = new c());
                }),
                (e.prototype.dragStart = function () {
                    this.getPosition(),
                        this.removeTransitionStyles(),
                        this.isTransitioning && d && (this.element.style[d] = "none"),
                        this.getSize(),
                        (this.isPlacing = !0),
                        (this.needsPositioning = !1),
                        this.positionPlaceRect(this.position.x, this.position.y),
                        (this.isTransitioning = !1),
                        (this.didDrag = !1);
                }),
                (e.prototype.dragMove = function (a, b) {
                    this.didDrag = !0;
                    var c = this.layout.size;
                    (a -= c.paddingLeft), (b -= c.paddingTop), this.positionPlaceRect(a, b);
                }),
                (e.prototype.dragStop = function () {
                    this.getPosition();
                    var a = this.position.x !== this.placeRect.x,
                        b = this.position.y !== this.placeRect.y;
                    (this.needsPositioning = a || b), (this.didDrag = !1);
                }),
                (e.prototype.positionPlaceRect = function (a, b, c) {
                    (this.placeRect.x = this.getPlaceRectCoord(a, !0)), (this.placeRect.y = this.getPlaceRectCoord(b, !1, c));
                }),
                (e.prototype.getPlaceRectCoord = function (a, b, c) {
                    var d = b ? "Width" : "Height",
                        e = this.size["outer" + d],
                        f = this.layout[b ? "columnWidth" : "rowHeight"],
                        g = this.layout.size["inner" + d];
                    b || ((g = Math.max(g, this.layout.maxY)), this.layout.rowHeight || (g -= this.layout.gutter));
                    var h;
                    if (f) {
                        (f += this.layout.gutter), (g += b ? this.layout.gutter : 0), (a = Math.round(a / f));
                        var i;
                        i = this.layout.options.isHorizontal ? (b ? "ceil" : "floor") : b ? "floor" : "ceil";
                        var j = Math[i](g / f);
                        (j -= Math.ceil(e / f)), (h = j);
                    } else h = g - e;
                    return (a = c ? a : Math.min(a, h)), (a *= f || 1), Math.max(0, a);
                }),
                (e.prototype.copyPlaceRectPosition = function () {
                    (this.rect.x = this.placeRect.x), (this.rect.y = this.placeRect.y);
                }),
                (e.prototype.removeElem = function () {
                    this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]);
                }),
                e
            );
        }
        "function" == typeof define && define.amd
            ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b)
            : "object" == typeof exports
            ? (module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")))
            : (a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect));
    })(window),
    (function (a) {
        function b(a, b, c, d, e, f) {
            function g(a, b) {
                return a.position.y - b.position.y || a.position.x - b.position.x;
            }
            function h(a, b) {
                return a.position.x - b.position.x || a.position.y - b.position.y;
            }
            d.prototype.canFit = function (a) {
                return this.width >= a.width - 1 && this.height >= a.height - 1;
            };
            var i = c.create("packery");
            return (
                (i.Item = f),
                (i.prototype._create = function () {
                    c.prototype._create.call(this), (this.packer = new e()), this.stamp(this.options.stamped);
                    var a = this;
                    (this.handleDraggabilly = {
                        dragStart: function (b) {
                            a.itemDragStart(b.element);
                        },
                        dragMove: function (b) {
                            a.itemDragMove(b.element, b.position.x, b.position.y);
                        },
                        dragEnd: function (b) {
                            a.itemDragEnd(b.element);
                        },
                    }),
                        (this.handleUIDraggable = {
                            start: function (b) {
                                a.itemDragStart(b.currentTarget);
                            },
                            drag: function (b, c) {
                                a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
                            },
                            stop: function (b) {
                                a.itemDragEnd(b.currentTarget);
                            },
                        });
                }),
                (i.prototype._resetLayout = function () {
                    this.getSize(), this._getMeasurements();
                    var a = this.packer;
                    this.options.isHorizontal
                        ? ((a.width = Number.POSITIVE_INFINITY), (a.height = this.size.innerHeight + this.gutter), (a.sortDirection = "rightwardTopToBottom"))
                        : ((a.width = this.size.innerWidth + this.gutter), (a.height = Number.POSITIVE_INFINITY), (a.sortDirection = "downwardLeftToRight")),
                        a.reset(),
                        (this.maxY = 0),
                        (this.maxX = 0);
                }),
                (i.prototype._getMeasurements = function () {
                    this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width");
                }),
                (i.prototype._getItemLayoutPosition = function (a) {
                    return this._packItem(a), a.rect;
                }),
                (i.prototype._packItem = function (a) {
                    this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect);
                }),
                (i.prototype._setMaxXY = function (a) {
                    (this.maxX = Math.max(a.x + a.width, this.maxX)), (this.maxY = Math.max(a.y + a.height, this.maxY));
                }),
                (i.prototype._setRectSize = function (a, c) {
                    var d = b(a),
                        e = d.outerWidth,
                        f = d.outerHeight;
                    (e || f) && ((e = this._applyGridGutter(e, this.columnWidth)), (f = this._applyGridGutter(f, this.rowHeight))), (c.width = Math.min(e, this.packer.width)), (c.height = Math.min(f, this.packer.height));
                }),
                (i.prototype._applyGridGutter = function (a, b) {
                    if (!b) return a + this.gutter;
                    b += this.gutter;
                    var c = a % b,
                        d = c && 1 > c ? "round" : "ceil";
                    return (a = Math[d](a / b) * b);
                }),
                (i.prototype._getContainerSize = function () {
                    return this.options.isHorizontal ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter };
                }),
                (i.prototype._manageStamp = function (a) {
                    var b,
                        c = this.getItem(a);
                    if (c && c.isPlacing) b = c.placeRect;
                    else {
                        var e = this._getElementOffset(a);
                        b = new d({ x: this.options.isOriginLeft ? e.left : e.right, y: this.options.isOriginTop ? e.top : e.bottom });
                    }
                    this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
                }),
                (i.prototype.sortItemsByPosition = function () {
                    var a = this.options.isHorizontal ? h : g;
                    this.items.sort(a);
                }),
                (i.prototype.fit = function (a, b, c) {
                    var d = this.getItem(a);
                    d &&
                        (this._getMeasurements(),
                        this.stamp(d.element),
                        d.getSize(),
                        (d.isPlacing = !0),
                        (b = void 0 === b ? d.rect.x : b),
                        (c = void 0 === c ? d.rect.y : c),
                        d.positionPlaceRect(b, c, !0),
                        this._bindFitEvents(d),
                        d.moveTo(d.placeRect.x, d.placeRect.y),
                        this.layout(),
                        this.unstamp(d.element),
                        this.sortItemsByPosition(),
                        (d.isPlacing = !1),
                        d.copyPlaceRectPosition());
                }),
                (i.prototype._bindFitEvents = function (a) {
                    function b() {
                        d++, 2 === d && c.emitEvent("fitComplete", [c, a]);
                    }
                    var c = this,
                        d = 0;
                    a.on("layout", function () {
                        return b(), !0;
                    }),
                        this.on("layoutComplete", function () {
                            return b(), !0;
                        });
                }),
                (i.prototype.resize = function () {
                    var a = b(this.element),
                        c = this.size && a,
                        d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                    (c && a[d] === this.size[d]) || this.layout();
                }),
                (i.prototype.itemDragStart = function (a) {
                    this.stamp(a);
                    var b = this.getItem(a);
                    b && b.dragStart();
                }),
                (i.prototype.itemDragMove = function (a, b, c) {
                    function d() {
                        f.layout(), delete f.dragTimeout;
                    }
                    var e = this.getItem(a);
                    e && e.dragMove(b, c);
                    var f = this;
                    this.clearDragTimeout(), (this.dragTimeout = setTimeout(d, 40));
                }),
                (i.prototype.clearDragTimeout = function () {
                    this.dragTimeout && clearTimeout(this.dragTimeout);
                }),
                (i.prototype.itemDragEnd = function (b) {
                    var c,
                        d = this.getItem(b);
                    if ((d && ((c = d.didDrag), d.dragStop()), !d || (!c && !d.needsPositioning))) return void this.unstamp(b);
                    a.add(d.element, "is-positioning-post-drag");
                    var e = this._getDragEndLayoutComplete(b, d);
                    d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout();
                }),
                (i.prototype._getDragEndLayoutComplete = function (b, c) {
                    var d = c && c.needsPositioning,
                        e = 0,
                        f = d ? 2 : 1,
                        g = this;
                    return function () {
                        return (
                            e++,
                            e !== f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), (c.isPlacing = !1), c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [g, c]), !0)
                        );
                    };
                }),
                (i.prototype.bindDraggabillyEvents = function (a) {
                    a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd);
                }),
                (i.prototype.bindUIDraggableEvents = function (a) {
                    a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop);
                }),
                (i.Rect = d),
                (i.Packer = e),
                i
            );
        }
        "function" == typeof define && define.amd
            ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b)
            : "object" == typeof exports
            ? (module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")))
            : (a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item));
    })(window),
    (function (a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a;
        }
        function c(a, c, d) {
            var e = a.create("packery"),
                f = e.prototype._getElementOffset,
                g = e.prototype._getMeasurement;
            b(e.prototype, c.prototype), (e.prototype._getElementOffset = f), (e.prototype._getMeasurement = g);
            var h = e.prototype._resetLayout;
            e.prototype._resetLayout = function () {
                (this.packer = this.packer || new c.Packer()), h.apply(this, arguments);
            };
            var i = e.prototype._getItemLayoutPosition;
            e.prototype._getItemLayoutPosition = function (a) {
                return (a.rect = a.rect || new c.Rect()), i.call(this, a);
            };
            var j = e.prototype._manageStamp;
            return (
                (e.prototype._manageStamp = function () {
                    (this.options.isOriginLeft = this.isotope.options.isOriginLeft), (this.options.isOriginTop = this.isotope.options.isOriginTop), j.apply(this, arguments);
                }),
                (e.prototype.needsResizeLayout = function () {
                    var a = d(this.element),
                        b = this.size && a,
                        c = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                    return b && a[c] !== this.size[c];
                }),
                e
            );
        }
        "function" == typeof define && define.amd
            ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], c)
            : "object" == typeof exports
            ? (module.exports = c(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")))
            : c(a.Isotope.LayoutMode, a.Packery, a.getSize);
    })(window);

/*  TweenMax js */

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "TweenMax",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (a, b, c) {
            var d = function (a) {
                    var b,
                        c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c;
                },
                e = function (a, b, c) {
                    var d,
                        e,
                        f = a.cycle;
                    for (d in f) (e = f[d]), (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
                    delete a.cycle;
                },
                f = function (a, b, d) {
                    c.call(this, a, b, d),
                        (this._cycle = 0),
                        (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        this._repeat && this._uncache(!0),
                        (this.render = f.prototype.render);
                },
                g = 1e-10,
                h = c._internals,
                i = h.isSelector,
                j = h.isArray,
                k = (f.prototype = c.to({}, 0.1, {})),
                l = [];
            (f.version = "1.20.3"),
                (k.constructor = f),
                (k.kill()._gc = !1),
                (f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
                (f.getTweensOf = c.getTweensOf),
                (f.lagSmoothing = c.lagSmoothing),
                (f.ticker = c.ticker),
                (f.render = c.render),
                (k.invalidate = function () {
                    return (
                        (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        (this._yoyoEase = null),
                        this._uncache(!0),
                        c.prototype.invalidate.call(this)
                    );
                }),
                (k.updateTo = function (a, b) {
                    var d,
                        e = this.ratio,
                        f = this.vars.immediateRender || a.immediateRender;
                    b && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted || f)
                        if (b) (this._initted = !1), f && this.render(0, !0, !0);
                        else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                            var g = this._totalTime;
                            this.render(0, !0, !1), (this._initted = !1), this.render(g, !0, !1);
                        } else if (((this._initted = !1), this._init(), this._time > 0 || f)) for (var h, i = 1 / (1 - e), j = this._firstPT; j; ) (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
                    return this;
                }),
                (k.render = function (a, b, d) {
                    this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                    var e,
                        f,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._time,
                        r = this._totalTime,
                        s = this._cycle,
                        t = this._duration,
                        u = this._rawPrevTime;
                    if (
                        (a >= p - 1e-7 && a >= 0
                            ? ((this._totalTime = p),
                              (this._cycle = this._repeat),
                              this._yoyo && 0 !== (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = t), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                              this._reversed || ((e = !0), (f = "onComplete"), (d = d || this._timeline.autoRemoveChildren)),
                              0 === t &&
                                  (this._initted || !this.vars.lazy || d) &&
                                  (this._startTime === this._timeline._duration && (a = 0),
                                  (0 > u || (0 >= a && a >= -1e-7) || (u === g && "isPause" !== this.data)) && u !== a && ((d = !0), u > g && (f = "onReverseComplete")),
                                  (this._rawPrevTime = n = !b || a || u === a ? a : g)))
                            : 1e-7 > a
                            ? ((this._totalTime = this._time = this._cycle = 0),
                              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                              (0 !== r || (0 === t && u > 0)) && ((f = "onReverseComplete"), (e = this._reversed)),
                              0 > a && ((this._active = !1), 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), (this._rawPrevTime = n = !b || a || u === a ? a : g))),
                              this._initted || (d = !0))
                            : ((this._totalTime = this._time = a),
                              0 !== this._repeat &&
                                  ((j = t + this._repeatDelay),
                                  (this._cycle = (this._totalTime / j) >> 0),
                                  0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--,
                                  (this._time = this._totalTime - this._cycle * j),
                                  this._yoyo &&
                                      0 !== (1 & this._cycle) &&
                                      ((this._time = t - this._time),
                                      (o = this._yoyoEase || this.vars.yoyoEase),
                                      o &&
                                          (this._yoyoEase ||
                                              (o !== !0 || this._initted
                                                  ? (this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o])
                                                  : ((o = this.vars.ease), (this._yoyoEase = o = o ? (o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase) : c.defaultEase))),
                                          (this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0))),
                                  this._time > t ? (this._time = t) : this._time < 0 && (this._time = 0)),
                              this._easeType && !o
                                  ? ((k = this._time / t),
                                    (l = this._easeType),
                                    (m = this._easePower),
                                    (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                                    3 === l && (k *= 2),
                                    1 === m ? (k *= k) : 2 === m ? (k *= k * k) : 3 === m ? (k *= k * k * k) : 4 === m && (k *= k * k * k * k),
                                    1 === l ? (this.ratio = 1 - k) : 2 === l ? (this.ratio = k) : this._time / t < 0.5 ? (this.ratio = k / 2) : (this.ratio = 1 - k / 2))
                                  : o || (this.ratio = this._ease.getRatio(this._time / t))),
                        q === this._time && !d && s === this._cycle)
                    )
                        return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (!d && this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)))
                            return (this._time = q), (this._totalTime = r), (this._rawPrevTime = u), (this._cycle = s), h.lazyTweens.push(this), void (this._lazy = [a, b]);
                        !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : (this.ratio = this._ease.getRatio(this._time / t));
                    }
                    for (
                        this._lazy !== !1 && (this._lazy = !1),
                            this._active || (!this._paused && this._time !== q && a >= 0 && (this._active = !0)),
                            0 === r &&
                                (2 === this._initted && a > 0 && this._init(),
                                this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")),
                                this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))),
                            i = this._firstPT;
                        i;

                    )
                        i.f ? i.t[i.p](i.c * this.ratio + i.s) : (i.t[i.p] = i.c * this.ratio + i.s), (i = i._next);
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || ((this._totalTime !== r || f) && this._callback("onUpdate"))),
                        this._cycle !== s && (b || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                        f &&
                            (!this._gc || d) &&
                            (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d),
                            e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                            !b && this.vars[f] && this._callback(f),
                            0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0));
                }),
                (f.to = function (a, b, c) {
                    return new f(a, b, c);
                }),
                (f.from = function (a, b, c) {
                    return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new f(a, b, c);
                }),
                (f.fromTo = function (a, b, c, d) {
                    return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), new f(a, b, d);
                }),
                (f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
                    h = h || 0;
                    var o,
                        p,
                        q,
                        r,
                        s = 0,
                        t = [],
                        u = function () {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l);
                        },
                        v = g.cycle,
                        w = g.startAt && g.startAt.cycle;
                    for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && ((a = d(a)), a.reverse(), (h *= -1)), o = a.length - 1, q = 0; o >= q; q++) {
                        p = {};
                        for (r in g) p[r] = g[r];
                        if ((v && (e(p, a, q), null != p.duration && ((b = p.duration), delete p.duration)), w)) {
                            w = p.startAt = {};
                            for (r in g.startAt) w[r] = g.startAt[r];
                            e(p.startAt, a, q);
                        }
                        (p.delay = s + (p.delay || 0)), q === o && k && (p.onComplete = u), (t[q] = new f(a[q], b, p)), (s += h);
                    }
                    return t;
                }),
                (f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
                    return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), f.staggerTo(a, b, c, d, e, g, h);
                }),
                (f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
                    return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), f.staggerTo(a, b, d, e, g, h, i);
                }),
                (f.delayedCall = function (a, b, c, d, e) {
                    return new f(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: e, overwrite: 0 });
                }),
                (f.set = function (a, b) {
                    return new f(a, 0, b);
                }),
                (f.isTweening = function (a) {
                    return c.getTweensOf(a, !0).length > 0;
                });
            var m = function (a, b) {
                    for (var d = [], e = 0, f = a._first; f; ) f instanceof c ? (d[e++] = f) : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)), (f = f._next);
                    return d;
                },
                n = (f.getAllTweens = function (b) {
                    return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
                });
            (f.killAll = function (a, c, d, e) {
                null == c && (c = !0), null == d && (d = !0);
                var f,
                    g,
                    h,
                    i = n(0 != e),
                    j = i.length,
                    k = c && d && e;
                for (h = 0; j > h; h++) (g = i[h]), (k || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
            }),
                (f.killChildTweensOf = function (a, b) {
                    if (null != a) {
                        var e,
                            g,
                            k,
                            l,
                            m,
                            n = h.tweenLookup;
                        if (("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))) for (l = a.length; --l > -1; ) f.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (k in n) for (g = n[k].target.parentNode; g; ) g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
                        }
                    }
                });
            var o = function (a, c, d, e) {
                (c = c !== !1), (d = d !== !1), (e = e !== !1);
                for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; ) (g = h[j]), (i || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) && g.paused(a);
            };
            return (
                (f.pauseAll = function (a, b, c) {
                    o(!0, a, b, c);
                }),
                (f.resumeAll = function (a, b, c) {
                    o(!1, a, b, c);
                }),
                (f.globalTimeScale = function (b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length
                        ? ((b = b || g),
                          (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                          (d = a._rootFramesTimeline),
                          (e = c.ticker.frame),
                          (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                          (d._timeScale = a._rootTimeline._timeScale = b),
                          b)
                        : d._timeScale;
                }),
                (k.progress = function (a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration();
                }),
                (k.totalProgress = function (a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
                }),
                (k.time = function (a, b) {
                    return arguments.length
                        ? (this._dirty && this.totalDuration(),
                          a > this._duration && (a = this._duration),
                          this._yoyo && 0 !== (1 & this._cycle) ? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
                          this.totalTime(a, b))
                        : this._time;
                }),
                (k.duration = function (b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
                }),
                (k.totalDuration = function (a) {
                    return arguments.length
                        ? -1 === this._repeat
                            ? this
                            : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1))
                        : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
                }),
                (k.repeat = function (a) {
                    return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
                }),
                (k.repeatDelay = function (a) {
                    return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
                }),
                (k.yoyo = function (a) {
                    return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
                }),
                f
            );
        },
        !0
    ),
        _gsScope._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (a, b, c) {
                var d = function (a) {
                        b.call(this, a),
                            (this._labels = {}),
                            (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
                            (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
                            (this._sortChildren = !0),
                            (this._onUpdate = this.vars.onUpdate);
                        var c,
                            d,
                            e = this.vars;
                        for (d in e) (c = e[d]), i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
                    },
                    e = 1e-10,
                    f = c._internals,
                    g = (d._internals = {}),
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function (a) {
                        var b,
                            c = {};
                        for (b in a) c[b] = a[b];
                        return c;
                    },
                    n = function (a, b, c) {
                        var d,
                            e,
                            f = a.cycle;
                        for (d in f) (e = f[d]), (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
                        delete a.cycle;
                    },
                    o = (g.pauseCallback = function () {}),
                    p = function (a) {
                        var b,
                            c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c;
                    },
                    q = (d.prototype = new b());
                return (
                    (d.version = "1.20.3"),
                    (q.constructor = d),
                    (q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
                    (q.to = function (a, b, d, e) {
                        var f = (d.repeat && l.TweenMax) || c;
                        return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
                    }),
                    (q.from = function (a, b, d, e) {
                        return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
                    }),
                    (q.fromTo = function (a, b, d, e, f) {
                        var g = (e.repeat && l.TweenMax) || c;
                        return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
                    }),
                    (q.staggerTo = function (a, b, e, f, g, i, j, k) {
                        var l,
                            o,
                            q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }),
                            r = e.cycle;
                        for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && ((a = p(a)), a.reverse(), (f *= -1)), o = 0; o < a.length; o++)
                            (l = m(e)), l.startAt && ((l.startAt = m(l.startAt)), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && ((b = l.duration), delete l.duration)), q.to(a[o], b, l, o * f);
                        return this.add(q, g);
                    }),
                    (q.staggerFrom = function (a, b, c, d, e, f, g, h) {
                        return (c.immediateRender = 0 != c.immediateRender), (c.runBackwards = !0), this.staggerTo(a, b, c, d, e, f, g, h);
                    }),
                    (q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
                        return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), this.staggerTo(a, b, d, e, f, g, h, i);
                    }),
                    (q.call = function (a, b, d, e) {
                        return this.add(c.delayedCall(0, a, b, d), e);
                    }),
                    (q.set = function (a, b, d) {
                        return (d = this._parseTimeOrLabel(d, 0, !0)), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d);
                    }),
                    (d.exportRoot = function (a, b) {
                        (a = a || {}), null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                        var e,
                            f,
                            g,
                            h,
                            i = new d(a),
                            j = i._timeline;
                        for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g; )
                            (h = g._next), (b && g instanceof c && g.target === g.vars.onComplete) || ((f = g._startTime - g._delay), 0 > f && (e = 1), i.add(g, f)), (g = h);
                        return j.add(i, 0), e && i.totalDuration(), i;
                    }),
                    (q.add = function (e, f, g, h) {
                        var j, k, l, m, n, o;
                        if (("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a))) {
                            if (e instanceof Array || (e && e.push && i(e))) {
                                for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++)
                                    i((m = e[l])) && (m = new d({ tweens: m })),
                                        this.add(m, j),
                                        "string" != typeof m && "function" != typeof m && ("sequence" === g ? (j = m._startTime + m.totalDuration() / m._timeScale) : "start" === g && (m._startTime -= m.delay())),
                                        (j += h);
                                return this._uncache(!0);
                            }
                            if ("string" == typeof e) return this.addLabel(e, f);
                            if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                            e = c.delayedCall(0, e);
                        }
                        if ((b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
                            for (n = this, o = n.rawTime() > e._startTime; n._timeline; ) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), (n = n._timeline);
                        return this;
                    }),
                    (q.remove = function (b) {
                        if (b instanceof a) {
                            this._remove(b, !1);
                            var c = (b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline);
                            return (b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale), this;
                        }
                        if (b instanceof Array || (b && b.push && i(b))) {
                            for (var d = b.length; --d > -1; ) this.remove(b[d]);
                            return this;
                        }
                        return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
                    }),
                    (q._remove = function (a, c) {
                        b.prototype._remove.call(this, a, c);
                        var d = this._last;
                        return d ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0), this;
                    }),
                    (q.append = function (a, b) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
                    }),
                    (q.insert = q.insertMultiple = function (a, b, c, d) {
                        return this.add(a, b || 0, c, d);
                    }),
                    (q.appendMultiple = function (a, b, c, d) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
                    }),
                    (q.addLabel = function (a, b) {
                        return (this._labels[a] = this._parseTimeOrLabel(b)), this;
                    }),
                    (q.addPause = function (a, b, d, e) {
                        var f = c.delayedCall(0, o, d, e || this);
                        return (f.vars.onComplete = f.vars.onReverseComplete = b), (f.data = "isPause"), (this._hasPause = !0), this.add(f, a);
                    }),
                    (q.removeLabel = function (a) {
                        return delete this._labels[a], this;
                    }),
                    (q.getLabelTime = function (a) {
                        return null != this._labels[a] ? this._labels[a] : -1;
                    }),
                    (q._parseTimeOrLabel = function (b, c, d, e) {
                        var f, g;
                        if (e instanceof a && e.timeline === this) this.remove(e);
                        else if (e && (e instanceof Array || (e.push && i(e)))) for (g = e.length; --g > -1; ) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                        if (((f = "number" != typeof b || c ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof c))
                            return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                        if (((c = c || 0), "string" != typeof b || (!isNaN(b) && null == this._labels[b]))) null == b && (b = f);
                        else {
                            if (((g = b.indexOf("=")), -1 === g)) return null == this._labels[b] ? (d ? (this._labels[b] = f + c) : c) : this._labels[b] + c;
                            (c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))), (b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
                        }
                        return Number(b) + c;
                    }),
                    (q.seek = function (a, b) {
                        return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
                    }),
                    (q.stop = function () {
                        return this.paused(!0);
                    }),
                    (q.gotoAndPlay = function (a, b) {
                        return this.play(a, b);
                    }),
                    (q.gotoAndStop = function (a, b) {
                        return this.pause(a, b);
                    }),
                    (q.render = function (a, b, c) {
                        this._gc && this._enabled(!0, !1);
                        var d,
                            f,
                            g,
                            h,
                            i,
                            l,
                            m,
                            n = this._time,
                            o = this._dirty ? this.totalDuration() : this._totalDuration,
                            p = this._startTime,
                            q = this._timeScale,
                            r = this._paused;
                        if ((n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0))
                            (this._totalTime = this._time = o),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((f = !0),
                                    (h = "onComplete"),
                                    (i = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration &&
                                        ((0 >= a && a >= -1e-7) || this._rawPrevTime < 0 || this._rawPrevTime === e) &&
                                        this._rawPrevTime !== a &&
                                        this._first &&
                                        ((i = !0), this._rawPrevTime > e && (h = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
                                (a = o + 1e-4);
                        else if (1e-7 > a)
                            if (
                                ((this._totalTime = this._time = 0),
                                (0 !== n || (0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || (0 > a && this._rawPrevTime >= 0)))) && ((h = "onReverseComplete"), (f = this._reversed)),
                                0 > a)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((i = f = !0), (h = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (i = !0), (this._rawPrevTime = a);
                            else {
                                if (((this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e), 0 === a && f)) for (d = this._first; d && 0 === d._startTime; ) d._duration || (f = !1), (d = d._next);
                                (a = 0), this._initted || (i = !0);
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !b) {
                                if (a >= n) for (d = this._first; d && d._startTime <= a && !l; ) d._duration || "isPause" !== d.data || d.ratio || (0 === d._startTime && 0 === this._rawPrevTime) || (l = d), (d = d._next);
                                else for (d = this._last; d && d._startTime >= a && !l; ) d._duration || ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)), (d = d._prev);
                                l && ((this._time = a = l._startTime), (this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
                            }
                            this._totalTime = this._time = this._rawPrevTime = a;
                        }
                        if ((this._time !== n && this._first) || c || i || l) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._time !== n && a > 0 && (this._active = !0)),
                                0 === n && this.vars.onStart && ((0 === this._time && this._duration) || b || this._callback("onStart")),
                                (m = this._time),
                                m >= n)
                            )
                                for (d = this._first; d && ((g = d._next), m === this._time && (!this._paused || r)); )
                                    (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                                        (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                                        (d = g);
                            else
                                for (d = this._last; d && ((g = d._prev), m === this._time && (!this._paused || r)); ) {
                                    if (d._active || (d._startTime <= n && !d._paused && !d._gc)) {
                                        if (l === d) {
                                            for (l = d._prev; l && l.endTime() > this._time; ) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), (l = l._prev);
                                            (l = null), this.pause();
                                        }
                                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                                    }
                                    d = g;
                                }
                            this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))),
                                h &&
                                    (this._gc ||
                                        ((p === this._startTime || q !== this._timeScale) &&
                                            (0 === this._time || o >= this.totalDuration()) &&
                                            (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !b && this.vars[h] && this._callback(h))));
                        }
                    }),
                    (q._hasPausedChild = function () {
                        for (var a = this._first; a; ) {
                            if (a._paused || (a instanceof d && a._hasPausedChild())) return !0;
                            a = a._next;
                        }
                        return !1;
                    }),
                    (q.getChildren = function (a, b, d, e) {
                        e = e || -9999999999;
                        for (var f = [], g = this._first, h = 0; g; )
                            g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && ((f = f.concat(g.getChildren(!0, b, d))), (h = f.length)))), (g = g._next);
                        return f;
                    }),
                    (q.getTweensOf = function (a, b) {
                        var d,
                            e,
                            f = this._gc,
                            g = [],
                            h = 0;
                        for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1; ) (d[e].timeline === this || (b && this._contains(d[e]))) && (g[h++] = d[e]);
                        return f && this._enabled(!1, !0), g;
                    }),
                    (q.recent = function () {
                        return this._recent;
                    }),
                    (q._contains = function (a) {
                        for (var b = a.timeline; b; ) {
                            if (b === this) return !0;
                            b = b.timeline;
                        }
                        return !1;
                    }),
                    (q.shiftChildren = function (a, b, c) {
                        c = c || 0;
                        for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), (e = e._next);
                        if (b) for (d in f) f[d] >= c && (f[d] += a);
                        return this._uncache(!0);
                    }),
                    (q._kill = function (a, b) {
                        if (!a && !b) return this._enabled(!1, !1);
                        for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; ) c[d]._kill(a, b) && (e = !0);
                        return e;
                    }),
                    (q.clear = function (a) {
                        var b = this.getChildren(!1, !0, !0),
                            c = b.length;
                        for (this._time = this._totalTime = 0; --c > -1; ) b[c]._enabled(!1, !1);
                        return a !== !1 && (this._labels = {}), this._uncache(!0);
                    }),
                    (q.invalidate = function () {
                        for (var b = this._first; b; ) b.invalidate(), (b = b._next);
                        return a.prototype.invalidate.call(this);
                    }),
                    (q._enabled = function (a, c) {
                        if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
                        return b.prototype._enabled.call(this, a, c);
                    }),
                    (q.totalTime = function (b, c, d) {
                        this._forcingPlayhead = !0;
                        var e = a.prototype.totalTime.apply(this, arguments);
                        return (this._forcingPlayhead = !1), e;
                    }),
                    (q.duration = function (a) {
                        return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
                    }),
                    (q.totalDuration = function (a) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                                    (b = e._prev),
                                        e._dirty && e.totalDuration(),
                                        e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration
                                            ? ((this._calculatingDuration = 1), this.add(e, e._startTime - e._delay), (this._calculatingDuration = 0))
                                            : (f = e._startTime),
                                        e._startTime < 0 &&
                                            !e._paused &&
                                            ((d -= e._startTime),
                                            this._timeline.smoothChildTiming && ((this._startTime += e._startTime / this._timeScale), (this._time -= e._startTime), (this._totalTime -= e._startTime), (this._rawPrevTime -= e._startTime)),
                                            this.shiftChildren(-e._startTime, !1, -9999999999),
                                            (f = 0)),
                                        (c = e._startTime + e._totalDuration / e._timeScale),
                                        c > d && (d = c),
                                        (e = b);
                                (this._duration = this._totalDuration = d), (this._dirty = !1);
                            }
                            return this._totalDuration;
                        }
                        return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
                    }),
                    (q.paused = function (b) {
                        if (!b) for (var c = this._first, d = this._time; c; ) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), (c = c._next);
                        return a.prototype.paused.apply(this, arguments);
                    }),
                    (q.usesFrames = function () {
                        for (var b = this._timeline; b._timeline; ) b = b._timeline;
                        return b === a._rootFramesTimeline;
                    }),
                    (q.rawTime = function (a) {
                        return a && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                            ? this._totalTime % (this._duration + this._repeatDelay)
                            : this._paused
                            ? this._totalTime
                            : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
                    }),
                    d
                );
            },
            !0
        ),
        _gsScope._gsDefine(
            "TimelineMax",
            ["TimelineLite", "TweenLite", "easing.Ease"],
            function (a, b, c) {
                var d = function (b) {
                        a.call(this, b), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = this.vars.yoyo === !0), (this._dirty = !0);
                    },
                    e = 1e-10,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = (d.prototype = new a());
                return (
                    (k.constructor = d),
                    (k.kill()._gc = !1),
                    (d.version = "1.20.3"),
                    (k.invalidate = function () {
                        return (this._yoyo = this.vars.yoyo === !0), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), a.prototype.invalidate.call(this);
                    }),
                    (k.addCallback = function (a, c, d, e) {
                        return this.add(b.delayedCall(0, a, d, e), c);
                    }),
                    (k.removeCallback = function (a, b) {
                        if (a)
                            if (null == b) this._kill(null, a);
                            else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1; ) c[d]._startTime === e && c[d]._enabled(!1, !1);
                        return this;
                    }),
                    (k.removePause = function (b) {
                        return this.removeCallback(a._internals.pauseCallback, b);
                    }),
                    (k.tweenTo = function (a, c) {
                        c = c || {};
                        var d,
                            e,
                            f,
                            g = { ease: j, useFrames: this.usesFrames(), immediateRender: !1 },
                            h = (c.repeat && i.TweenMax) || b;
                        for (e in c) g[e] = c[e];
                        return (
                            (g.time = this._parseTimeOrLabel(a)),
                            (d = Math.abs(Number(g.time) - this._time) / this._timeScale || 0.001),
                            (f = new h(this, d, g)),
                            (g.onStart = function () {
                                f.target.paused(!0),
                                    f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale),
                                    c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
                            }),
                            f
                        );
                    }),
                    (k.tweenFromTo = function (a, b, c) {
                        (c = c || {}), (a = this._parseTimeOrLabel(a)), (c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }), (c.immediateRender = c.immediateRender !== !1);
                        var d = this.tweenTo(b, c);
                        return d.duration(Math.abs(d.vars.time - a) / this._timeScale || 0.001);
                    }),
                    (k.render = function (a, b, c) {
                        this._gc && this._enabled(!0, !1);
                        var d,
                            f,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o = this._time,
                            p = this._dirty ? this.totalDuration() : this._totalDuration,
                            q = this._duration,
                            r = this._totalTime,
                            s = this._startTime,
                            t = this._timeScale,
                            u = this._rawPrevTime,
                            v = this._paused,
                            w = this._cycle;
                        if ((o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0))
                            this._locked || ((this._totalTime = p), (this._cycle = this._repeat)),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((f = !0),
                                    (j = "onComplete"),
                                    (k = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration && ((0 >= a && a >= -1e-7) || 0 > u || u === e) && u !== a && this._first && ((k = !0), u > e && (j = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
                                this._yoyo && 0 !== (1 & this._cycle) ? (this._time = a = 0) : ((this._time = q), (a = q + 1e-4));
                        else if (1e-7 > a)
                            if (
                                (this._locked || (this._totalTime = this._cycle = 0),
                                (this._time = 0),
                                (0 !== o || (0 === q && u !== e && (u > 0 || (0 > a && u >= 0)) && !this._locked)) && ((j = "onReverseComplete"), (f = this._reversed)),
                                0 > a)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((k = f = !0), (j = "onReverseComplete")) : u >= 0 && this._first && (k = !0), (this._rawPrevTime = a);
                            else {
                                if (((this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e), 0 === a && f)) for (d = this._first; d && 0 === d._startTime; ) d._duration || (f = !1), (d = d._next);
                                (a = 0), this._initted || (k = !0);
                            }
                        else if (
                            (0 === q && 0 > u && (k = !0),
                            (this._time = this._rawPrevTime = a),
                            this._locked ||
                                ((this._totalTime = a),
                                0 !== this._repeat &&
                                    ((l = q + this._repeatDelay),
                                    (this._cycle = (this._totalTime / l) >> 0),
                                    0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--,
                                    (this._time = this._totalTime - this._cycle * l),
                                    this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time),
                                    this._time > q ? ((this._time = q), (a = q + 1e-4)) : this._time < 0 ? (this._time = a = 0) : (a = this._time))),
                            this._hasPause && !this._forcingPlayhead && !b)
                        ) {
                            if (((a = this._time), a >= o || (this._repeat && w !== this._cycle)))
                                for (d = this._first; d && d._startTime <= a && !m; ) d._duration || "isPause" !== d.data || d.ratio || (0 === d._startTime && 0 === this._rawPrevTime) || (m = d), (d = d._next);
                            else for (d = this._last; d && d._startTime >= a && !m; ) d._duration || ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)), (d = d._prev);
                            m && m._startTime < q && ((this._time = a = m._startTime), (this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
                        }
                        if (this._cycle !== w && !this._locked) {
                            var x = this._yoyo && 0 !== (1 & w),
                                y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                                z = this._totalTime,
                                A = this._cycle,
                                B = this._rawPrevTime,
                                C = this._time;
                            if (
                                ((this._totalTime = w * q),
                                this._cycle < w ? (x = !x) : (this._totalTime += q),
                                (this._time = o),
                                (this._rawPrevTime = 0 === q ? u - 1e-4 : u),
                                (this._cycle = w),
                                (this._locked = !0),
                                (o = x ? 0 : q),
                                this.render(o, b, 0 === q),
                                b || this._gc || (this.vars.onRepeat && ((this._cycle = A), (this._locked = !1), this._callback("onRepeat"))),
                                o !== this._time)
                            )
                                return;
                            if ((y && ((this._cycle = w), (this._locked = !0), (o = x ? q + 1e-4 : -1e-4), this.render(o, !0, !1)), (this._locked = !1), this._paused && !v)) return;
                            (this._time = C), (this._totalTime = z), (this._cycle = A), (this._rawPrevTime = B);
                        }
                        if (!((this._time !== o && this._first) || c || k || m)) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                        if (
                            (this._initted || (this._initted = !0),
                            this._active || (!this._paused && this._totalTime !== r && a > 0 && (this._active = !0)),
                            0 === r && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || b || this._callback("onStart")),
                            (n = this._time),
                            n >= o)
                        )
                            for (d = this._first; d && ((i = d._next), n === this._time && (!this._paused || v)); )
                                (d._active || (d._startTime <= this._time && !d._paused && !d._gc)) &&
                                    (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                                    (d = i);
                        else
                            for (d = this._last; d && ((i = d._prev), n === this._time && (!this._paused || v)); ) {
                                if (d._active || (d._startTime <= o && !d._paused && !d._gc)) {
                                    if (m === d) {
                                        for (m = d._prev; m && m.endTime() > this._time; ) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), (m = m._prev);
                                        (m = null), this.pause();
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                                }
                                d = i;
                            }
                        this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))),
                            j &&
                                (this._locked ||
                                    this._gc ||
                                    ((s === this._startTime || t !== this._timeScale) &&
                                        (0 === this._time || p >= this.totalDuration()) &&
                                        (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !b && this.vars[j] && this._callback(j))));
                    }),
                    (k.getActive = function (a, b, c) {
                        null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                        var d,
                            e,
                            f = [],
                            g = this.getChildren(a, b, c),
                            h = 0,
                            i = g.length;
                        for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
                        return f;
                    }),
                    (k.getLabelAfter = function (a) {
                        a || (0 !== a && (a = this._time));
                        var b,
                            c = this.getLabelsArray(),
                            d = c.length;
                        for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
                        return null;
                    }),
                    (k.getLabelBefore = function (a) {
                        null == a && (a = this._time);
                        for (var b = this.getLabelsArray(), c = b.length; --c > -1; ) if (b[c].time < a) return b[c].name;
                        return null;
                    }),
                    (k.getLabelsArray = function () {
                        var a,
                            b = [],
                            c = 0;
                        for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
                        return (
                            b.sort(function (a, b) {
                                return a.time - b.time;
                            }),
                            b
                        );
                    }),
                    (k.invalidate = function () {
                        return (this._locked = !1), a.prototype.invalidate.call(this);
                    }),
                    (k.progress = function (a, b) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
                    }),
                    (k.totalProgress = function (a, b) {
                        return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
                    }),
                    (k.totalDuration = function (b) {
                        return arguments.length
                            ? -1 !== this._repeat && b
                                ? this.timeScale(this.totalDuration() / b)
                                : this
                            : (this._dirty && (a.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
                    }),
                    (k.time = function (a, b) {
                        return arguments.length
                            ? (this._dirty && this.totalDuration(),
                              a > this._duration && (a = this._duration),
                              this._yoyo && 0 !== (1 & this._cycle) ? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
                              this.totalTime(a, b))
                            : this._time;
                    }),
                    (k.repeat = function (a) {
                        return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
                    }),
                    (k.repeatDelay = function (a) {
                        return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
                    }),
                    (k.yoyo = function (a) {
                        return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
                    }),
                    (k.currentLabel = function (a) {
                        return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
                    }),
                    d
                );
            },
            !0
        ),
        (function () {
            var a = 180 / Math.PI,
                b = [],
                c = [],
                d = [],
                e = {},
                f = _gsScope._gsDefine.globals,
                g = function (a, b, c, d) {
                    c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), (this.a = a), (this.b = b), (this.c = c), (this.d = d), (this.da = d - a), (this.ca = c - a), (this.ba = b - a);
                },
                h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                i = function (a, b, c, d) {
                    var e = { a: a },
                        f = {},
                        g = {},
                        h = { c: d },
                        i = (a + b) / 2,
                        j = (b + c) / 2,
                        k = (c + d) / 2,
                        l = (i + j) / 2,
                        m = (j + k) / 2,
                        n = (m - l) / 8;
                    return (e.b = i + (a - i) / 4), (f.b = l + n), (e.c = f.a = (e.b + f.b) / 2), (f.c = g.a = (l + m) / 2), (g.b = m - n), (h.b = k + (d - k) / 4), (g.c = h.a = (g.b + h.b) / 2), [e, f, g, h];
                },
                j = function (a, e, f, g, h) {
                    var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u,
                        v,
                        w = a.length - 1,
                        x = 0,
                        y = a[0].a;
                    for (j = 0; w > j; j++)
                        (n = a[x]),
                            (k = n.a),
                            (l = n.d),
                            (m = a[x + 1].d),
                            h
                                ? ((t = b[j]),
                                  (u = c[j]),
                                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                                  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                                  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                                  (q = l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                                : ((o = l - (l - k) * e * 0.5), (p = l + (m - l) * e * 0.5), (q = l - (o + p) / 2)),
                            (o += q),
                            (p += q),
                            (n.c = r = o),
                            0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
                            (n.da = l - k),
                            (n.ca = r - k),
                            (n.ba = y - k),
                            f ? ((s = i(k, y, r, l)), a.splice(x, 1, s[0], s[1], s[2], s[3]), (x += 4)) : x++,
                            (y = p);
                    (n = a[x]), (n.b = y), (n.c = y + 0.4 * (n.d - y)), (n.da = n.d - n.a), (n.ca = n.c - n.a), (n.ba = y - n.a), f && ((s = i(n.a, y, n.c, n.d)), a.splice(x, 1, s[0], s[1], s[2], s[3]));
                },
                k = function (a, d, e, f) {
                    var h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n = [];
                    if (f) for (a = [f].concat(a), i = a.length; --i > -1; ) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                    if (((h = a.length - 2), 0 > h)) return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
                    for (i = 0; h > i; i++) (j = a[i][d]), (k = a[i + 1][d]), (n[i] = new g(j, 0, 0, k)), e && ((l = a[i + 2][d]), (b[i] = (b[i] || 0) + (k - j) * (k - j)), (c[i] = (c[i] || 0) + (l - k) * (l - k)));
                    return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
                },
                l = function (a, f, g, i, l, m) {
                    var n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u,
                        v = {},
                        w = [],
                        x = m || a[0];
                    (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
                    for (o in a[0]) w.push(o);
                    if (a.length > 1) {
                        for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
                            if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                                t = !1;
                                break;
                            }
                        t && ((a = a.concat()), m && a.unshift(m), a.push(a[1]), (m = a[a.length - 3]));
                    }
                    for (b.length = c.length = d.length = 0, n = w.length; --n > -1; ) (o = w[n]), (e[o] = -1 !== l.indexOf("," + o + ",")), (v[o] = k(a, o, e[o], m));
                    for (n = b.length; --n > -1; ) (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
                    if (!i) {
                        for (n = w.length; --n > -1; ) if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0), (d[q] = (d[q] || 0) + r * r);
                        for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
                    }
                    for (n = w.length, q = g ? 4 : 1; --n > -1; ) (o = w[n]), (p = v[o]), j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                    return v;
                },
                m = function (a, b, c) {
                    b = b || "soft";
                    var d,
                        e,
                        f,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = {},
                        q = "cubic" === b ? 3 : 2,
                        r = "soft" === b,
                        s = [];
                    if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1)) throw "invalid Bezier data";
                    for (m in a[0]) s.push(m);
                    for (j = s.length; --j > -1; ) {
                        for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++)
                            (d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o)), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), (i[n++] = d);
                        for (l = n - q + 1, n = 0, k = 0; l > k; k += q) (d = i[k]), (e = i[k + 1]), (f = i[k + 2]), (h = 2 === q ? 0 : i[k + 3]), (i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
                        i.length = n;
                    }
                    return p;
                },
                n = function (a, b, c) {
                    for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1; )
                        for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++)
                            (j = o * k), (l = 1 - j), (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)), (n = p * c + k - 1), (b[n] = (b[n] || 0) + d * d);
                },
                o = function (a, b) {
                    b = b >> 0 || 6;
                    var c,
                        d,
                        e,
                        f,
                        g = [],
                        h = [],
                        i = 0,
                        j = 0,
                        k = b - 1,
                        l = [],
                        m = [];
                    for (c in a) n(a[c], g, b);
                    for (e = g.length, d = 0; e > d; d++) (i += Math.sqrt(g[d])), (f = d % b), (m[f] = i), f === k && ((j += i), (f = (d / b) >> 0), (l[f] = m), (h[f] = j), (i = 0), (m = []));
                    return { length: j, lengths: h, segments: l };
                },
                p = _gsScope._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.8",
                    API: 2,
                    global: !0,
                    init: function (a, b, c) {
                        (this._target = a), b instanceof Array && (b = { values: b }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
                        var d,
                            e,
                            f,
                            g,
                            h,
                            i = b.values || [],
                            j = {},
                            k = i[0],
                            n = b.autoRotate || c.vars.orientToBezier;
                        this._autoRotate = n ? (n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]) : null;
                        for (d in k) this._props.push(d);
                        for (f = this._props.length; --f > -1; )
                            (d = this._props[f]),
                                this._overwriteProps.push(d),
                                (e = this._func[d] = "function" == typeof a[d]),
                                (j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d])),
                                h || (j[d] !== i[0][d] && (h = j));
                        if (
                            ((this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j)),
                            (this._segCount = this._beziers[d].length),
                            this._timeRes)
                        ) {
                            var p = o(this._beziers, this._timeRes);
                            (this._length = p.length),
                                (this._lengths = p.lengths),
                                (this._segments = p.segments),
                                (this._l1 = this._li = this._s1 = this._si = 0),
                                (this._l2 = this._lengths[0]),
                                (this._curSeg = this._segments[0]),
                                (this._s2 = this._curSeg[0]),
                                (this._prec = 1 / this._curSeg.length);
                        }
                        if ((n = this._autoRotate))
                            for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1; ) {
                                for (g = 0; 3 > g; g++) (d = n[f][g]), (this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1);
                                (d = n[f][2]), (this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0), this._overwriteProps.push(d);
                            }
                        return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
                    },
                    set: function (b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = this._segCount,
                            n = this._func,
                            o = this._target,
                            p = b !== this._startRatio;
                        if (this._timeRes) {
                            if (((k = this._lengths), (l = this._curSeg), (b *= this._length), (e = this._li), b > this._l2 && m - 1 > e)) {
                                for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
                                (this._l1 = k[e - 1]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s2 = l[(this._s1 = this._si = 0)]);
                            } else if (b < this._l1 && e > 0) {
                                for (; e > 0 && (this._l1 = k[--e]) >= b; );
                                0 === e && b < this._l1 ? (this._l1 = 0) : e++, (this._l2 = k[e]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s1 = l[(this._si = l.length - 1) - 1] || 0), (this._s2 = l[this._si]);
                            }
                            if (((c = e), (b -= this._l1), (e = this._si), b > this._s2 && e < l.length - 1)) {
                                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
                                (this._s1 = l[e - 1]), (this._si = e);
                            } else if (b < this._s1 && e > 0) {
                                for (; e > 0 && (this._s1 = l[--e]) >= b; );
                                0 === e && b < this._s1 ? (this._s1 = 0) : e++, (this._s2 = l[e]), (this._si = e);
                            }
                            h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                        } else (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0), (h = (b - c * (1 / m)) * m);
                        for (d = 1 - h, e = this._props.length; --e > -1; )
                            (f = this._props[e]), (g = this._beziers[f][c]), (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a), this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : (o[f] = i);
                        if (this._autoRotate) {
                            var q,
                                r,
                                s,
                                t,
                                u,
                                v,
                                w,
                                x = this._autoRotate;
                            for (e = x.length; --e > -1; )
                                (f = x[e][2]),
                                    (v = x[e][3] || 0),
                                    (w = x[e][4] === !0 ? 1 : a),
                                    (g = this._beziers[x[e][0]]),
                                    (q = this._beziers[x[e][1]]),
                                    g &&
                                        q &&
                                        ((g = g[c]),
                                        (q = q[c]),
                                        (r = g.a + (g.b - g.a) * h),
                                        (t = g.b + (g.c - g.b) * h),
                                        (r += (t - r) * h),
                                        (t += (g.c + (g.d - g.c) * h - t) * h),
                                        (s = q.a + (q.b - q.a) * h),
                                        (u = q.b + (q.c - q.b) * h),
                                        (s += (u - s) * h),
                                        (u += (q.c + (q.d - q.c) * h - u) * h),
                                        (i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e]),
                                        this._mod[f] && (i = this._mod[f](i, o)),
                                        n[f] ? o[f](i) : (o[f] = i));
                        }
                    },
                }),
                q = p.prototype;
            (p.bezierThrough = l),
                (p.cubicToQuadratic = i),
                (p._autoCSS = !0),
                (p.quadraticToCubic = function (a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
                }),
                (p._cssRegister = function () {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function (a, b, f, g, h, i) {
                                b instanceof Array && (b = { values: b }), (i = new p());
                                var j,
                                    k,
                                    l,
                                    m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                                for (k in b) q[k] = b[k];
                                return (
                                    (q.values = o),
                                    (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                                    (h.data = l),
                                    (h.plugin = i),
                                    (h.setRatio = d),
                                    0 === q.autoRotate && (q.autoRotate = !0),
                                    !q.autoRotate ||
                                        q.autoRotate instanceof Array ||
                                        ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)), (q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1)),
                                    q.autoRotate && (g._transform || g._enableTransforms(!1), (l.autoRotate = g._target._gsTransform), (l.proxy.rotation = l.autoRotate.rotation || 0), g._overwriteProps.push("rotation")),
                                    i._onInitTween(l.proxy, q, g._tween),
                                    h
                                );
                            },
                        });
                    }
                }),
                (q._mod = function (a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1; ) (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
                }),
                (q._kill = function (a) {
                    var b,
                        c,
                        d = this._props;
                    for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1; ) d[c] === b && d.splice(c, 1);
                    if ((d = this._autoRotate)) for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a);
                });
        })(),
        _gsScope._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g = function () {
                        a.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = g.prototype.setRatio);
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = (g.prototype = new a("css"));
                (j.constructor = g),
                    (g.version = "1.20.3"),
                    (g.API = 2),
                    (g.defaultTransformPerspective = 0),
                    (g.defaultSkewType = "compensated"),
                    (g.defaultSmoothOrigin = !0),
                    (j = "px"),
                    (g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" });
                var k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    y = /opacity:([^;]*)/i,
                    z = /alpha\(opacity *=.+?\)/i,
                    A = /^(rgb|hsl)/,
                    B = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function (a, b) {
                        return b.toUpperCase();
                    },
                    F = /(?:Left|Right|Width)/i,
                    G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    K = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    N = { style: {} },
                    O = _gsScope.document || {
                        createElement: function () {
                            return N;
                        },
                    },
                    P = function (a, b) {
                        return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a);
                    },
                    Q = P("div"),
                    R = P("img"),
                    S = (g._internals = { _specialProps: i }),
                    T = (_gsScope.navigator || {}).userAgent || "",
                    U = (function () {
                        var a = T.indexOf("Android"),
                            b = P("a");
                        return (
                            (m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
                            (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
                            (n = -1 !== T.indexOf("Firefox")),
                            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)),
                            b ? ((b.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(b.style.opacity)) : !1
                        );
                    })(),
                    V = function (a) {
                        return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                    },
                    W = function (a) {
                        _gsScope.console && console.log(a);
                    },
                    X = "",
                    Y = "",
                    Z = function (a, b) {
                        b = b || Q;
                        var c,
                            d,
                            e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a]; );
                        return d >= 0 ? ((Y = 3 === d ? "ms" : c[d]), (X = "-" + Y.toLowerCase() + "-"), Y + a) : null;
                    },
                    $ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
                    _ = (g.getStyle = function (a, b, c, d, e) {
                        var f;
                        return U || "opacity" !== b
                            ? (!d && a.style[b] ? (f = a.style[b]) : (c = c || $(a)) ? (f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase())) : a.currentStyle && (f = a.currentStyle[b]),
                              null == e || (f && "none" !== f && "auto" !== f && "auto auto" !== f) ? f : e)
                            : V(a);
                    }),
                    aa = (S.convertToPixels = function (a, c, d, e, f) {
                        if ("px" === e || (!e && "lineHeight" !== c)) return d;
                        if ("auto" === e || !d) return 0;
                        var h,
                            i,
                            j,
                            k = F.test(c),
                            l = a,
                            m = Q.style,
                            n = 0 > d,
                            o = 1 === d;
                        if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
                            if ("%" === e && -1 !== c.indexOf("border")) h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (((m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;"), "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e))
                                    m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (((l = a.parentNode || O.body), -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), (i = l._gsCache), (j = b.ticker.frame), i && k && i.time === j)) return (i.width * d) / 100;
                                    m[k ? "width" : "height"] = d + e;
                                }
                                l.appendChild(Q),
                                    (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                                    l.removeChild(Q),
                                    k && "%" === e && g.cacheWidths !== !1 && ((i = l._gsCache = l._gsCache || {}), (i.time = j), (i.width = (h / d) * 100)),
                                    0 !== h || f || (h = aa(a, c, d, e, !0));
                            }
                        else (i = $(a).lineHeight), (a.style.lineHeight = d), (h = parseFloat($(a).lineHeight)), (a.style.lineHeight = i);
                        return o && (h /= 100), n ? -h : h;
                    }),
                    ba = (S.calculateOffset = function (a, b, c) {
                        if ("absolute" !== _(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = _(a, "margin" + d, c);
                        return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0);
                    }),
                    ca = function (a, b) {
                        var c,
                            d,
                            e,
                            f = {};
                        if ((b = b || $(a, null)))
                            if ((c = b.length)) for (; --c > -1; ) (e = b[c]), (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                            else for (c in b) (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                        else if ((b = a.currentStyle || a.style)) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                        return (
                            U || (f.opacity = V(a)),
                            (d = Ra(a, b, !1)),
                            (f.rotation = d.rotation),
                            (f.skewX = d.skewX),
                            (f.scaleX = d.scaleX),
                            (f.scaleY = d.scaleY),
                            (f.x = d.x),
                            (f.y = d.y),
                            Fa && ((f.z = d.z), (f.rotationX = d.rotationX), (f.rotationY = d.rotationY), (f.scaleZ = d.scaleZ)),
                            f.filters && delete f.filters,
                            f
                        );
                    },
                    da = function (a, b, c, d, e) {
                        var f,
                            g,
                            h,
                            i = {},
                            j = a.style;
                        for (g in c)
                            "cssText" !== g &&
                                "length" !== g &&
                                isNaN(g) &&
                                (b[g] !== (f = c[g]) || (e && e[g])) &&
                                -1 === g.indexOf("Origin") &&
                                ("number" == typeof f || "string" == typeof f) &&
                                ((i[g] = "auto" !== f || ("left" !== g && "top" !== g) ? (("" !== f && "auto" !== f && "none" !== f) || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0) : ba(a, g)),
                                void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                        if (d) for (g in d) "className" !== g && (i[g] = d[g]);
                        return { difs: i, firstMPT: h };
                    },
                    ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ga = function (a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                        if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = ea[b],
                            f = e.length;
                        for (c = c || $(a, null); --f > -1; ) (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0), (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
                        return d;
                    },
                    ha = function (a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c,
                            d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) {
                            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                            return a.join(",");
                        }
                        return (
                            null == f ? (f = "center" === e ? "50%" : "0") : "center" === f && (f = "50%"),
                            ("center" === e || (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) && (e = "50%"),
                            (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
                            b &&
                                ((b.oxp = -1 !== e.indexOf("%")),
                                (b.oyp = -1 !== f.indexOf("%")),
                                (b.oxr = "=" === e.charAt(1)),
                                (b.oyr = "=" === f.charAt(1)),
                                (b.ox = parseFloat(e.replace(v, ""))),
                                (b.oy = parseFloat(f.replace(v, ""))),
                                (b.v = a)),
                            b || a
                        );
                    },
                    ia = function (a, b) {
                        return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
                    },
                    ja = function (a, b) {
                        return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
                    },
                    ka = function (a, b, c, d) {
                        var e,
                            f,
                            g,
                            h,
                            i,
                            j = 1e-6;
                        return (
                            "function" == typeof a && (a = a(r, q)),
                            null == a
                                ? (h = b)
                                : "number" == typeof a
                                ? (h = a)
                                : ((e = 360),
                                  (f = a.split("_")),
                                  (i = "=" === a.charAt(1)),
                                  (g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b)),
                                  f.length &&
                                      (d && (d[c] = b + g),
                                      -1 !== a.indexOf("short") && ((g %= e), g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                                      -1 !== a.indexOf("_cw") && 0 > g ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e) : -1 !== a.indexOf("ccw") && g > 0 && (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                                  (h = b + g)),
                            j > h && h > -j && (h = 0),
                            h
                        );
                    },
                    la = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0],
                    },
                    ma = function (a, b, c) {
                        return (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a), (255 * (1 > 6 * a ? b + (c - b) * a * 6 : 0.5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + 0.5) | 0;
                    },
                    na = (g.parseColor = function (a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
                            else {
                                if (("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a])) c = la[a];
                                else if ("#" === a.charAt(0))
                                    4 === a.length && ((d = a.charAt(1)), (e = a.charAt(2)), (f = a.charAt(3)), (a = "#" + d + d + e + e + f + f)), (a = parseInt(a.substr(1), 16)), (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                                else if ("hsl" === a.substr(0, 3))
                                    if (((c = m = a.match(s)), b)) {
                                        if (-1 !== a.indexOf("=")) return a.match(t);
                                    } else
                                        (g = (Number(c[0]) % 360) / 360),
                                            (h = Number(c[1]) / 100),
                                            (i = Number(c[2]) / 100),
                                            (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                                            (d = 2 * i - e),
                                            c.length > 3 && (c[3] = Number(c[3])),
                                            (c[0] = ma(g + 1 / 3, d, e)),
                                            (c[1] = ma(g, d, e)),
                                            (c[2] = ma(g - 1 / 3, d, e));
                                else c = a.match(s) || la.transparent;
                                (c[0] = Number(c[0])), (c[1] = Number(c[1])), (c[2] = Number(c[2])), c.length > 3 && (c[3] = Number(c[3]));
                            }
                        else c = la.black;
                        return (
                            b &&
                                !m &&
                                ((d = c[0] / 255),
                                (e = c[1] / 255),
                                (f = c[2] / 255),
                                (j = Math.max(d, e, f)),
                                (k = Math.min(d, e, f)),
                                (i = (j + k) / 2),
                                j === k ? (g = h = 0) : ((l = j - k), (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)), (g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4), (g *= 60)),
                                (c[0] = (g + 0.5) | 0),
                                (c[1] = (100 * h + 0.5) | 0),
                                (c[2] = (100 * i + 0.5) | 0)),
                            c
                        );
                    }),
                    oa = function (a, b) {
                        var c,
                            d,
                            e,
                            f = a.match(pa) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++)
                            (d = f[c]),
                                (e = a.substr(g, a.indexOf(d, g) - g)),
                                (g += e.length + d.length),
                                (d = na(d, b)),
                                3 === d.length && d.push(1),
                                (h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")");
                        return h + a.substr(g);
                    },
                    pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in la) pa += "|" + j + "\\b";
                (pa = new RegExp(pa + ")", "gi")),
                    (g.colorStringFilter = function (a) {
                        var b,
                            c = a[0] + " " + a[1];
                        pa.test(c) && ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")), (a[0] = oa(a[0], b)), (a[1] = oa(a[1], b))), (pa.lastIndex = 0);
                    }),
                    b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var qa = function (a, b, c, d) {
                        if (null == a)
                            return function (a) {
                                return a;
                            };
                        var e,
                            f = b ? (a.match(pa) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k
                            ? (e = b
                                  ? function (a) {
                                        var b, m, n, o;
                                        if ("number" == typeof a) a += l;
                                        else if (d && I.test(a)) {
                                            for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                            return o.join(",");
                                        }
                                        if (((b = (a.match(pa) || [f])[0]), (m = a.split(b).join("").match(u) || []), (n = m.length), k > n--)) for (; ++n < k; ) m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                                        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
                                    }
                                  : function (a) {
                                        var b, f, m;
                                        if ("number" == typeof a) a += l;
                                        else if (d && I.test(a)) {
                                            for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                            return f.join(",");
                                        }
                                        if (((b = a.match(u) || []), (m = b.length), k > m--)) for (; ++m < k; ) b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                                        return h + b.join(j) + i;
                                    })
                            : function (a) {
                                  return a;
                              };
                    },
                    ra = function (a) {
                        return (
                            (a = a.split(",")),
                            function (b, c, d, e, f, g, h) {
                                var i,
                                    j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                                return e.parse(b, h, f, g);
                            }
                        );
                    },
                    sa =
                        ((S._setPluginRatio = function (a) {
                            this.plugin.setRatio(a);
                            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i; ) (b = h[i.v]), i.r ? (b = Math.round(b)) : j > b && b > -j && (b = 0), (i.t[i.p] = b), (i = i._next);
                            if ((g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a))
                                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                                    if (((c = i.t), c.type)) {
                                        if (1 === c.type) {
                                            for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                            c[f] = e;
                                        }
                                    } else c[f] = c.s + c.xs0;
                                    i = i._next;
                                }
                        }),
                        function (a, b, c, d, e) {
                            (this.t = a), (this.p = b), (this.v = c), (this.r = e), d && ((d._prev = this), (this._next = d));
                        }),
                    ta =
                        ((S._parseToProxy = function (a, b, c, d, e, f) {
                            var g,
                                h,
                                i,
                                j,
                                k,
                                l = d,
                                m = {},
                                n = {},
                                o = c._transform,
                                p = M;
                            for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && ((c._transform = o), l && ((l._prev = null), l._prev && (l._prev._next = null))); d && d !== l; ) {
                                if (d.type <= 1 && ((h = d.p), (n[h] = d.s + d.c), (m[h] = d.s), f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)), 1 === d.type))
                                    for (g = d.l; --g > 0; ) (i = "xn" + g), (h = d.p + "_" + i), (n[h] = d.data[i]), (m[h] = d[i]), f || (j = new sa(d, i, h, j, d.rxp[i]));
                                d = d._next;
                            }
                            return { proxy: m, end: n, firstMPT: j, pt: k };
                        }),
                        (S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
                            (this.t = a),
                                (this.p = b),
                                (this.s = d),
                                (this.c = e),
                                (this.n = i || b),
                                a instanceof ta || f.push(this.n),
                                (this.r = j),
                                (this.type = h || 0),
                                k && ((this.pr = k), (c = !0)),
                                (this.b = void 0 === l ? d : l),
                                (this.e = void 0 === m ? d + e : m),
                                g && ((this._next = g), (g._prev = this));
                        })),
                    ua = function (a, b, c, d, e, f) {
                        var g = new ta(a, b, c, d - c, e, -1, f);
                        return (g.b = c), (g.e = g.xs0 = d), g;
                    },
                    va = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
                        (c = c || f || ""),
                            "function" == typeof d && (d = d(r, q)),
                            (h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
                            (d += ""),
                            e && pa.test(d + c) && ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
                        var m,
                            n,
                            o,
                            p,
                            u,
                            v,
                            w,
                            x,
                            y,
                            z,
                            A,
                            B,
                            C,
                            D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = k !== !1;
                        for (
                            (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                                (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
                                    ? ((D = D.join(" ").replace(I, ", ").split(" ")), (E = E.join(" ").replace(I, ", ").split(" ")))
                                    : ((D = D.join(" ").split(",").join(", ").split(" ")), (E = E.join(" ").split(",").join(", ").split(" "))),
                                (F = D.length)),
                                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                                h.plugin = j,
                                h.setRatio = l,
                                pa.lastIndex = 0,
                                m = 0;
                            F > m;
                            m++
                        )
                            if (((p = D[m]), (u = E[m]), (x = parseFloat(p)), x || 0 === x)) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
                            else if (e && pa.test(p))
                                (B = u.indexOf(")") + 1),
                                    (B = ")" + (B ? u.substr(B) : "")),
                                    (C = -1 !== u.indexOf("hsl") && U),
                                    (z = u),
                                    (p = na(p, C)),
                                    (u = na(u, C)),
                                    (y = p.length + u.length > 6),
                                    y && !U && 0 === u[3]
                                        ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"), (h.e = h.e.split(E[m]).join("transparent")))
                                        : (U || (y = !1),
                                          C
                                              ? h
                                                    .appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0)
                                                    .appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
                                                    .appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1)
                                              : h
                                                    .appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0)
                                                    .appendXtra("", p[1], u[1] - p[1], ",", !0)
                                                    .appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
                                          y && ((p = p.length < 4 ? 1 : p[3]), h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))),
                                    (pa.lastIndex = 0);
                            else if ((v = p.match(s))) {
                                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                                for (o = 0, n = 0; n < v.length; n++) (A = v[n]), (z = p.indexOf(A, o)), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), (o = z + A.length);
                                h["xs" + h.l] += p.substr(o);
                            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m];
                        }
                        return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
                    }),
                    wa = 9;
                for (j = ta.prototype, j.l = j.pr = 0; --wa > 0; ) (j["xn" + wa] = 0), (j["xs" + wa] = "");
                (j.xs0 = ""),
                    (j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null),
                    (j.appendXtra = function (a, b, c, d, e, f) {
                        var g = this,
                            h = g.l;
                        return (
                            (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
                            c || 0 === h || g.plugin
                                ? (g.l++,
                                  (g.type = g.setRatio ? 2 : 1),
                                  (g["xs" + g.l] = d || ""),
                                  h > 0
                                      ? ((g.data["xn" + h] = b + c), (g.rxp["xn" + h] = e), (g["xn" + h] = b), g.plugin || ((g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr)), (g.xfirst.xs0 = 0)), g)
                                      : ((g.data = { s: b + c }), (g.rxp = {}), (g.s = b), (g.c = c), (g.r = e), g))
                                : ((g["xs" + h] += b + (d || "")), g)
                        );
                    });
                var xa = function (a, b) {
                        (b = b || {}),
                            (this.p = b.prefix ? Z(a) || a : a),
                            (i[a] = i[this.p] = this),
                            (this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi)),
                            b.parser && (this.parse = b.parser),
                            (this.clrs = b.color),
                            (this.multi = b.multi),
                            (this.keyword = b.keyword),
                            (this.dflt = b.defaultValue),
                            (this.pr = b.priority || 0);
                    },
                    ya = (S._registerComplexSpecialProp = function (a, b, c) {
                        "object" != typeof b && (b = { parser: c });
                        var d,
                            e,
                            f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) (b.prefix = 0 === d && b.prefix), (b.defaultValue = c[d] || g), (e = new xa(f[d], b));
                    }),
                    za = (S._registerPluginProp = function (a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            ya(a, {
                                parser: function (a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f);
                                },
                            });
                        }
                    });
                (j = xa.prototype),
                    (j.parseComplex = function (a, b, c, d, e, f) {
                        var g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = this.keyword;
                        if ((this.multi && (I.test(c) || I.test(b) ? ((h = b.replace(I, "|").split("|")), (i = c.replace(I, "|").split("|"))) : m && ((h = [b]), (i = [c]))), i)) {
                            for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++)
                                (b = h[g] = h[g] || this.dflt), (c = i[g] = i[g] || this.dflt), m && ((k = b.indexOf(m)), (l = c.indexOf(m)), k !== l && (-1 === l ? (h[g] = h[g].split(m).join("")) : -1 === k && (h[g] += " " + m)));
                            (b = h.join(", ")), (c = i.join(", "));
                        }
                        return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
                    }),
                    (j.parse = function (a, b, c, d, f, g, h) {
                        return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
                    }),
                    (g.registerSpecialProp = function (a, b, c) {
                        ya(a, {
                            parser: function (a, d, e, f, g, h, i) {
                                var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
                            },
                            priority: c,
                        });
                    }),
                    (g.useSVGTransformAttr = !0);
                var Aa,
                    Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ca = Z("transform"),
                    Da = X + "transform",
                    Ea = Z("transformOrigin"),
                    Fa = null !== Z("perspective"),
                    Ga = (S.Transform = function () {
                        (this.perspective = parseFloat(g.defaultTransformPerspective) || 0), (this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1);
                    }),
                    Ha = _gsScope.SVGElement,
                    Ia = function (a, b, c) {
                        var d,
                            e = O.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e;
                    },
                    Ja = O.documentElement || {},
                    Ka = (function () {
                        var a,
                            b,
                            c,
                            d = p || (/Android/i.test(T) && !_gsScope.chrome);
                        return (
                            O.createElementNS &&
                                !d &&
                                ((a = Ia("svg", Ja)),
                                (b = Ia("rect", a, { width: 100, height: 50, x: 100 })),
                                (c = b.getBoundingClientRect().width),
                                (b.style[Ea] = "50% 50%"),
                                (b.style[Ca] = "scaleX(0.5)"),
                                (d = c === b.getBoundingClientRect().width && !(n && Fa)),
                                Ja.removeChild(a)),
                            d
                        );
                    })(),
                    La = function (a, b, c, d, e, f) {
                        var h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p,
                            q,
                            r,
                            s,
                            t,
                            u,
                            v = a._gsTransform,
                            w = Qa(a, !0);
                        v && ((t = v.xOrigin), (u = v.yOrigin)),
                            (!d || (h = d.split(" ")).length < 2) &&
                                ((n = a.getBBox()),
                                0 === n.x &&
                                    0 === n.y &&
                                    n.width + n.height === 0 &&
                                    (n = {
                                        x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                                        y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                                        width: 0,
                                        height: 0,
                                    }),
                                (b = ha(b).split(" ")),
                                (h = [(-1 !== b[0].indexOf("%") ? (parseFloat(b[0]) / 100) * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? (parseFloat(b[1]) / 100) * n.height : parseFloat(b[1])) + n.y])),
                            (c.xOrigin = k = parseFloat(h[0])),
                            (c.yOrigin = l = parseFloat(h[1])),
                            d &&
                                w !== Pa &&
                                ((m = w[0]),
                                (n = w[1]),
                                (o = w[2]),
                                (p = w[3]),
                                (q = w[4]),
                                (r = w[5]),
                                (s = m * p - n * o),
                                s && ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s), (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s), (k = c.xOrigin = h[0] = i), (l = c.yOrigin = h[1] = j))),
                            v &&
                                (f && ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                                e || (e !== !1 && g.defaultSmoothOrigin !== !1) ? ((i = k - t), (j = l - u), (v.xOffset += i * w[0] + j * w[2] - i), (v.yOffset += i * w[1] + j * w[3] - j)) : (v.xOffset = v.yOffset = 0)),
                            f || a.setAttribute("data-svg-origin", h.join(" "));
                    },
                    Ma = function (a) {
                        var b,
                            c = P("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if ((Ja.appendChild(c), c.appendChild(this), (this.style.display = "block"), a))
                            try {
                                (b = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Ma);
                            } catch (g) {}
                        else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), (this.style.cssText = f), b;
                    },
                    Na = function (a) {
                        try {
                            return a.getBBox();
                        } catch (b) {
                            return Ma.call(a, !0);
                        }
                    },
                    Oa = function (a) {
                        return !(!Ha || !a.getCTM || (a.parentNode && !a.ownerSVGElement) || !Na(a));
                    },
                    Pa = [1, 0, 0, 1, 0, 0],
                    Qa = function (a, b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i = a._gsTransform || new Ga(),
                            j = 1e5,
                            k = a.style;
                        if (
                            (Ca
                                ? (d = _(a, Da, null, !0))
                                : a.currentStyle && ((d = a.currentStyle.filter.match(G)), (d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : "")),
                            (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                            !Ca ||
                                (!(h = !$(a) || "none" === $(a).display) && a.parentNode) ||
                                (h && ((f = k.display), (k.display = "block")),
                                a.parentNode || ((g = 1), Ja.appendChild(a)),
                                (d = _(a, Da, null, !0)),
                                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                                f ? (k.display = f) : h && Va(k, "display"),
                                g && Ja.removeChild(a)),
                            (i.svg || (a.getCTM && Oa(a))) &&
                                (c && -1 !== (k[Ca] + "").indexOf("matrix") && ((d = k[Ca]), (c = 0)),
                                (e = a.getAttribute("transform")),
                                c && e && (-1 !== e.indexOf("matrix") ? ((d = e), (c = 0)) : -1 !== e.indexOf("translate") && ((d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (c = 0)))),
                            c)
                        )
                            return Pa;
                        for (e = (d || "").match(s) || [], wa = e.length; --wa > -1; ) (f = Number(e[wa])), (e[wa] = (g = f - (f |= 0)) ? ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f : f);
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
                    },
                    Ra = (S.getTransform = function (a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = d ? a._gsTransform || new Ga() : new Ga(),
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (((m.svg = !(!a.getCTM || !Oa(a))), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), (Aa = g.useSVGTransformAttr || Ka)), (f = Qa(a)), f !== Pa)) {
                            if (16 === f.length) {
                                var s,
                                    t,
                                    u,
                                    v,
                                    w,
                                    x = f[0],
                                    y = f[1],
                                    z = f[2],
                                    A = f[3],
                                    B = f[4],
                                    C = f[5],
                                    D = f[6],
                                    E = f[7],
                                    F = f[8],
                                    G = f[9],
                                    H = f[10],
                                    I = f[12],
                                    J = f[13],
                                    K = f[14],
                                    M = f[11],
                                    N = Math.atan2(D, H);
                                m.zOrigin && ((K = -m.zOrigin), (I = F * K - f[12]), (J = G * K - f[13]), (K = H * K + m.zOrigin - f[14])),
                                    (m.rotationX = N * L),
                                    N &&
                                        ((v = Math.cos(-N)),
                                        (w = Math.sin(-N)),
                                        (s = B * v + F * w),
                                        (t = C * v + G * w),
                                        (u = D * v + H * w),
                                        (F = B * -w + F * v),
                                        (G = C * -w + G * v),
                                        (H = D * -w + H * v),
                                        (M = E * -w + M * v),
                                        (B = s),
                                        (C = t),
                                        (D = u)),
                                    (N = Math.atan2(-z, H)),
                                    (m.rotationY = N * L),
                                    N && ((v = Math.cos(-N)), (w = Math.sin(-N)), (s = x * v - F * w), (t = y * v - G * w), (u = z * v - H * w), (G = y * w + G * v), (H = z * w + H * v), (M = A * w + M * v), (x = s), (y = t), (z = u)),
                                    (N = Math.atan2(y, x)),
                                    (m.rotation = N * L),
                                    N && ((v = Math.cos(N)), (w = Math.sin(N)), (s = x * v + y * w), (t = B * v + C * w), (u = F * v + G * w), (y = y * v - x * w), (C = C * v - B * w), (G = G * v - F * w), (x = s), (B = t), (F = u)),
                                    m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && ((m.rotationX = m.rotation = 0), (m.rotationY = 180 - m.rotationY)),
                                    (N = Math.atan2(B, C)),
                                    (m.scaleX = ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                                    (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                                    (m.scaleZ = ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                                    (x /= m.scaleX),
                                    (B /= m.scaleY),
                                    (y /= m.scaleX),
                                    (C /= m.scaleY),
                                    Math.abs(N) > o ? ((m.skewX = N * L), (B = 0), "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : (m.skewX = 0),
                                    (m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                                    (m.x = I),
                                    (m.y = J),
                                    (m.z = K),
                                    m.svg && ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)), (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
                            } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || (!m.rotationX && !m.rotationY)) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                (m.x = f[4] || 0),
                                    (m.y = f[5] || 0),
                                    (i = Math.sqrt(P * P + Q * Q)),
                                    (j = Math.sqrt(S * S + R * R)),
                                    (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                                    (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                                    (m.scaleX = i),
                                    (m.scaleY = j),
                                    (m.rotation = k),
                                    (m.skewX = l),
                                    Fa && ((m.rotationX = m.rotationY = m.z = 0), (m.perspective = r), (m.scaleZ = 1)),
                                    m.svg && ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)), (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
                            }
                            Math.abs(m.skewX) > 90 &&
                                Math.abs(m.skewX) < 270 &&
                                (n ? ((m.scaleX *= -1), (m.skewX += m.rotation <= 0 ? 180 : -180), (m.rotation += m.rotation <= 0 ? 180 : -180)) : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                                (m.zOrigin = q);
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
                        }
                        return (
                            d &&
                                ((a._gsTransform = m),
                                m.svg &&
                                    (Aa && a.style[Ca]
                                        ? b.delayedCall(0.001, function () {
                                              Va(a.style, Ca);
                                          })
                                        : !Aa &&
                                          a.getAttribute("transform") &&
                                          b.delayedCall(0.001, function () {
                                              a.removeAttribute("transform");
                                          }))),
                            m
                        );
                    }),
                    Sa = function (a) {
                        var b,
                            c,
                            d = this.data,
                            e = -d.rotation * K,
                            f = e + d.skewX * K,
                            g = 1e5,
                            h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
                            i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
                            j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
                            k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
                            var n,
                                o,
                                q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + (q * d.xPercent) / 100,
                                v = d.y + (r * d.yPercent) / 100;
                            if (
                                (null != d.ox && ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2), (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2), (u += n - (n * h + o * i)), (v += o - (n * j + o * k))),
                                s ? ((n = q / 2), (o = r / 2), (t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")")) : (t += ", sizingMethod='auto expand')"),
                                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? (l.filter = b.replace(H, t)) : (l.filter = t + " " + b),
                                (0 === a || 1 === a) &&
                                    1 === h &&
                                    0 === i &&
                                    0 === j &&
                                    1 === k &&
                                    ((s && -1 === t.indexOf("Dx=0, Dy=0")) || (x.test(b) && 100 !== parseFloat(RegExp.$1)) || (-1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter"))),
                                !s)
                            ) {
                                var y,
                                    z,
                                    A,
                                    B = 8 > p ? 1 : -1;
                                for (
                                    n = d.ieOffsetX || 0,
                                        o = d.ieOffsetY || 0,
                                        d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u),
                                        d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v),
                                        wa = 0;
                                    4 > wa;
                                    wa++
                                )
                                    (z = fa[wa]),
                                        (y = m[z]),
                                        (c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                                        (A = c !== d[z] ? (2 > wa ? -d.ieOffsetX : -d.ieOffsetY) : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY),
                                        (l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px");
                            }
                        }
                    },
                    Ta = (S.set3DTransformRatio = S.setTransformRatio = function (a) {
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            o,
                            p,
                            q,
                            r,
                            s,
                            t,
                            u,
                            v,
                            w,
                            x,
                            y,
                            z = this.data,
                            A = this.t.style,
                            B = z.rotation,
                            C = z.rotationX,
                            D = z.rotationY,
                            E = z.scaleX,
                            F = z.scaleY,
                            G = z.scaleZ,
                            H = z.x,
                            I = z.y,
                            J = z.z,
                            L = z.svg,
                            M = z.perspective,
                            N = z.force3D,
                            O = z.skewY,
                            P = z.skewX;
                        if (
                            (O && ((P += O), (B += O)),
                            ((((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !N) && !J && !M && !D && !C && 1 === G) || (Aa && L) || !Fa)
                        )
                            return void (B || P || L
                                ? ((B *= K),
                                  (x = P * K),
                                  (y = 1e5),
                                  (c = Math.cos(B) * E),
                                  (f = Math.sin(B) * E),
                                  (d = Math.sin(B - x) * -F),
                                  (g = Math.cos(B - x) * F),
                                  x && "simple" === z.skewType && ((b = Math.tan(x - O * K)), (b = Math.sqrt(1 + b * b)), (d *= b), (g *= b), O && ((b = Math.tan(O * K)), (b = Math.sqrt(1 + b * b)), (c *= b), (f *= b))),
                                  L &&
                                      ((H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset),
                                      (I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset),
                                      Aa && (z.xPercent || z.yPercent) && ((q = this.t.getBBox()), (H += 0.01 * z.xPercent * q.width), (I += 0.01 * z.yPercent * q.height)),
                                      (q = 1e-6),
                                      q > H && H > -q && (H = 0),
                                      q > I && I > -q && (I = 0)),
                                  (u = ((c * y) | 0) / y + "," + ((f * y) | 0) / y + "," + ((d * y) | 0) / y + "," + ((g * y) | 0) / y + "," + H + "," + I + ")"),
                                  L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u))
                                : (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")"));
                        if ((n && ((q = 1e-4), q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P))
                            (B *= K),
                                (r = c = Math.cos(B)),
                                (s = f = Math.sin(B)),
                                P &&
                                    ((B -= P * K),
                                    (r = Math.cos(B)),
                                    (s = Math.sin(B)),
                                    "simple" === z.skewType && ((b = Math.tan((P - O) * K)), (b = Math.sqrt(1 + b * b)), (r *= b), (s *= b), z.skewY && ((b = Math.tan(O * K)), (b = Math.sqrt(1 + b * b)), (c *= b), (f *= b)))),
                                (d = -s),
                                (g = r);
                        else {
                            if (!(D || C || 1 !== G || M || L))
                                return void (A[Ca] =
                                    (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") +
                                    H +
                                    "px," +
                                    I +
                                    "px," +
                                    J +
                                    "px)" +
                                    (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                            (c = g = 1), (d = f = 0);
                        }
                        (k = 1),
                            (e = h = i = j = l = m = 0),
                            (o = M ? -1 / M : 0),
                            (p = z.zOrigin),
                            (q = 1e-6),
                            (v = ","),
                            (w = "0"),
                            (B = D * K),
                            B && ((r = Math.cos(B)), (s = Math.sin(B)), (i = -s), (l = o * -s), (e = c * s), (h = f * s), (k = r), (o *= r), (c *= r), (f *= r)),
                            (B = C * K),
                            B && ((r = Math.cos(B)), (s = Math.sin(B)), (b = d * r + e * s), (t = g * r + h * s), (j = k * s), (m = o * s), (e = d * -s + e * r), (h = g * -s + h * r), (k *= r), (o *= r), (d = b), (g = t)),
                            1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                            1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                            1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                            (p || L) &&
                                (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                                L && ((H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset), (I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset)),
                                q > H && H > -q && (H = w),
                                q > I && I > -q && (I = w),
                                q > J && J > -q && (J = 0)),
                            (u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d("),
                            (u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i)),
                            (u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g)),
                            C || D || 1 !== G
                                ? ((u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e)),
                                  (u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v))
                                : (u += ",0,0,0,0,1,0,"),
                            (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                            (A[Ca] = u);
                    });
                (j = Ga.prototype),
                    (j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0),
                    (j.scaleX = j.scaleY = j.scaleZ = 1),
                    ya(
                        "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                        {
                            parser: function (a, b, c, d, f, h, i) {
                                if (d._lastParsedTransform === i) return f;
                                d._lastParsedTransform = i;
                                var j,
                                    k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                                "function" == typeof i[c] && ((j = i[c]), (i[c] = b)), k && (i.scale = k(r, a));
                                var l,
                                    m,
                                    n,
                                    o,
                                    p,
                                    s,
                                    t,
                                    u,
                                    v,
                                    w = a._gsTransform,
                                    x = a.style,
                                    y = 1e-6,
                                    z = Ba.length,
                                    A = i,
                                    B = {},
                                    C = "transformOrigin",
                                    D = Ra(a, e, !0, A.parseTransform),
                                    E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                                if (((D.skewType = A.skewType || D.skewType || g.defaultSkewType), (d._transform = D), E && "string" == typeof E && Ca))
                                    (m = Q.style),
                                        (m[Ca] = E),
                                        (m.display = "block"),
                                        (m.position = "absolute"),
                                        O.body.appendChild(Q),
                                        (l = Ra(Q, null, !1)),
                                        "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)),
                                        D.svg &&
                                            ((s = D.xOrigin),
                                            (t = D.yOrigin),
                                            (l.x -= D.xOffset),
                                            (l.y -= D.yOffset),
                                            (A.transformOrigin || A.svgOrigin) &&
                                                ((E = {}), La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), (s = E.xOrigin), (t = E.yOrigin), (l.x -= E.xOffset - D.xOffset), (l.y -= E.yOffset - D.yOffset)),
                                            (s || t) && ((u = Qa(Q, !0)), (l.x -= s - (s * u[0] + t * u[2])), (l.y -= t - (s * u[1] + t * u[3])))),
                                        O.body.removeChild(Q),
                                        l.perspective || (l.perspective = D.perspective),
                                        null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)),
                                        null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                                else if ("object" == typeof A) {
                                    if (
                                        ((l = {
                                            scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                                            scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                                            scaleZ: ja(A.scaleZ, D.scaleZ),
                                            x: ja(A.x, D.x),
                                            y: ja(A.y, D.y),
                                            z: ja(A.z, D.z),
                                            xPercent: ja(A.xPercent, D.xPercent),
                                            yPercent: ja(A.yPercent, D.yPercent),
                                            perspective: ja(A.transformPerspective, D.perspective),
                                        }),
                                        (p = A.directionalRotation),
                                        null != p)
                                    )
                                        if ("object" == typeof p) for (m in p) A[m] = p[m];
                                        else A.rotation = p;
                                    "string" == typeof A.x && -1 !== A.x.indexOf("%") && ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
                                        "string" == typeof A.y && -1 !== A.y.indexOf("%") && ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
                                        (l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B)),
                                        Fa &&
                                            ((l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B)),
                                            (l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B))),
                                        (l.skewX = ka(A.skewX, D.skewX)),
                                        (l.skewY = ka(A.skewY, D.skewY));
                                }
                                for (
                                    Fa && null != A.force3D && ((D.force3D = A.force3D), (o = !0)),
                                        n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective,
                                        n || null == A.scale || (l.scaleZ = 1);
                                    --z > -1;

                                )
                                    (v = Ba[z]),
                                        (E = l[v] - D[v]),
                                        (E > y || -y > E || null != A[v] || null != M[v]) && ((o = !0), (f = new ta(D, v, D[v], E, f)), v in B && (f.e = B[v]), (f.xs0 = 0), (f.plugin = h), d._overwriteProps.push(f.n));
                                return (
                                    (E = A.transformOrigin),
                                    D.svg &&
                                        (E || A.svgOrigin) &&
                                        ((s = D.xOffset),
                                        (t = D.yOffset),
                                        La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                                        (f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C)),
                                        (f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C)),
                                        (s !== D.xOffset || t !== D.yOffset) && ((f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C)), (f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C))),
                                        (E = "0px 0px")),
                                    (E || (Fa && n && D.zOrigin)) &&
                                        (Ca
                                            ? ((o = !0),
                                              (v = Ea),
                                              (E = (E || _(a, v, e, !1, "50% 50%")) + ""),
                                              (f = new ta(x, v, 0, 0, f, -1, C)),
                                              (f.b = x[v]),
                                              (f.plugin = h),
                                              Fa
                                                  ? ((m = D.zOrigin),
                                                    (E = E.split(" ")),
                                                    (D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0),
                                                    (f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px"),
                                                    (f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
                                                    (f.b = m),
                                                    (f.xs0 = f.e = D.zOrigin))
                                                  : (f.xs0 = f.e = E))
                                            : ha(E + "", D)),
                                    o && (d._transformType = (D.svg && Aa) || (!n && 3 !== this._transformType) ? 2 : 3),
                                    j && (i[c] = j),
                                    k && (i.scale = k),
                                    f
                                );
                            },
                            prefix: !0,
                        }
                    ),
                    ya("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                    ya("borderRadius", {
                        defaultValue: "0px",
                        parser: function (a, b, c, f, g, h) {
                            b = this.format(b);
                            var i,
                                j,
                                k,
                                l,
                                m,
                                n,
                                o,
                                p,
                                q,
                                r,
                                s,
                                t,
                                u,
                                v,
                                w,
                                x,
                                y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                z = a.style;
                            for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++)
                                this.p.indexOf("border") && (y[j] = Z(y[j])),
                                    (m = l = _(a, y[j], e, !1, "0px")),
                                    -1 !== m.indexOf(" ") && ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                                    (n = k = i[j]),
                                    (o = parseFloat(m)),
                                    (t = m.substr((o + "").length)),
                                    (u = "=" === n.charAt(1)),
                                    u ? ((p = parseInt(n.charAt(0) + "1", 10)), (n = n.substr(2)), (p *= parseFloat(n)), (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "")) : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                                    "" === s && (s = d[c] || t),
                                    s !== t &&
                                        ((v = aa(a, "borderLeft", o, t)),
                                        (w = aa(a, "borderTop", o, t)),
                                        "%" === s ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%")) : "em" === s ? ((x = aa(a, "borderLeft", 1, "em")), (m = v / x + "em"), (l = w / x + "em")) : ((m = v + "px"), (l = w + "px")),
                                        u && ((n = parseFloat(m) + p + s), (k = parseFloat(l) + p + s))),
                                    (g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
                            return g;
                        },
                        prefix: !0,
                        formatter: qa("0px 0px 0px 0px", !1, !0),
                    }),
                    ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function (a, b, c, d, f, g) {
                            return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
                        },
                        prefix: !0,
                        formatter: qa("0px 0px", !1, !0),
                    }),
                    ya("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (a, b, c, d, f, g) {
                            var h,
                                i,
                                j,
                                k,
                                l,
                                m,
                                n = "background-position",
                                o = e || $(a, null),
                                q = this.format((o ? (p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n)) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                                r = this.format(b);
                            if ((-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && ((m = _(a, "backgroundImage").replace(D, "")), m && "none" !== m)) {
                                for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1; )
                                    (q = h[j]),
                                        (k = -1 !== q.indexOf("%")),
                                        k !== (-1 !== i[j].indexOf("%")) && ((l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height), (h[j] = k ? (parseFloat(q) / 100) * l + "px" : (parseFloat(q) / l) * 100 + "%"));
                                q = h.join(" ");
                            }
                            return this.parseComplex(a.style, q, r, f, g);
                        },
                        formatter: ha,
                    }),
                    ya("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function (a) {
                            return (a += ""), ha(-1 === a.indexOf(" ") ? a + " " + a : a);
                        },
                    }),
                    ya("perspective", { defaultValue: "0px", prefix: !0 }),
                    ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                    ya("transformStyle", { prefix: !0 }),
                    ya("backfaceVisibility", { prefix: !0 }),
                    ya("userSelect", { prefix: !0 }),
                    ya("margin", { parser: ra("marginTop,marginRight,marginBottom,marginLeft") }),
                    ya("padding", { parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                    ya("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (a, b, c, d, f, g) {
                            var h, i, j;
                            return (
                                9 > p
                                    ? ((i = a.currentStyle), (j = 8 > p ? " " : ","), (h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")"), (b = this.format(b).split(",").join(j)))
                                    : ((h = this.format(_(a, this.p, e, !1, this.dflt))), (b = this.format(b))),
                                this.parseComplex(a.style, h, b, f, g)
                            );
                        },
                    }),
                    ya("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                    ya("autoRound,strictUnits", {
                        parser: function (a, b, c, d, e) {
                            return e;
                        },
                    }),
                    ya("border", {
                        defaultValue: "0px solid #000",
                        parser: function (a, b, c, d, f, g) {
                            var h = _(a, "borderTopWidth", e, !1, "0px"),
                                i = this.format(b).split(" "),
                                j = i[0].replace(w, "");
                            return (
                                "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                                this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                            );
                        },
                        color: !0,
                        formatter: function (a) {
                            var b = a.split(" ");
                            return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0];
                        },
                    }),
                    ya("borderWidth", { parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                    ya("float,cssFloat,styleFloat", {
                        parser: function (a, b, c, d, e, f) {
                            var g = a.style,
                                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                            return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
                        },
                    });
                var Ua = function (a) {
                    var b,
                        c = this.t,
                        d = c.filter || _(this.data, "filter") || "",
                        e = (this.s + this.c * a) | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), (b = !_(this.data, "filter"))) : ((c.filter = d.replace(z, "")), (b = !0))),
                        b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? (0 === e && this.xn1) || (c.filter = d + " alpha(opacity=" + e + ")") : (c.filter = d.replace(x, "opacity=" + e)));
                };
                ya("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (a, b, c, d, f, g) {
                        var h = parseFloat(_(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return (
                            "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                            j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0),
                            U
                                ? (f = new ta(i, "opacity", h, b - h, f))
                                : ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
                                  (f.xn1 = j ? 1 : 0),
                                  (i.zoom = 1),
                                  (f.type = 2),
                                  (f.b = "alpha(opacity=" + f.s + ")"),
                                  (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                                  (f.data = a),
                                  (f.plugin = g),
                                  (f.setRatio = Ua)),
                            j && ((f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit")), (f.xs0 = "inherit"), d._overwriteProps.push(f.n), d._overwriteProps.push(c)),
                            f
                        );
                    },
                });
                var Va = function (a, b) {
                        b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b));
                    },
                    Wa = function (a) {
                        if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b; ) b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                    };
                ya("className", {
                    parser: function (a, b, d, f, g, h, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)), (g.setRatio = Wa), (g.pr = -11), (c = !0), (g.b = o), (k = ca(a, e)), (l = a._gsClassPT))) {
                            for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
                            l.setRatio(1);
                        }
                        return (
                            (a._gsClassPT = g),
                            (g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
                            a.setAttribute("class", g.e),
                            (j = da(a, k, ca(a), i, m)),
                            a.setAttribute("class", o),
                            (g.data = j.firstMPT),
                            (a.style.cssText = p),
                            (g = g.xfirst = f.parse(a, j.difs, g, h))
                        );
                    },
                });
                var Xa = function (a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) (g.cssText = ""), (e = !0);
                        else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1; ) (c = b[d]), i[c] && (i[c].parse === h ? (e = !0) : (c = "transformOrigin" === c ? Ea : i[c].p)), Va(g, c);
                        e && (Va(g, Ca), (f = this.t._gsTransform), f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                    }
                };
                for (
                    ya("clearProps", {
                        parser: function (a, b, d, e, f) {
                            return (f = new ta(a, d, 0, 0, f, 2)), (f.setRatio = Xa), (f.e = b), (f.pr = -10), (f.data = e._tween), (c = !0), f;
                        },
                    }),
                        j = "bezier,throwProps,physicsProps,physics2D".split(","),
                        wa = j.length;
                    wa--;

                )
                    za(j[wa]);
                (j = g.prototype),
                    (j._firstPT = j._lastParsedTransform = j._transform = null),
                    (j._onInitTween = function (a, b, h, j) {
                        if (!a.nodeType) return !1;
                        (this._target = q = a), (this._tween = h), (this._vars = b), (r = j), (k = b.autoRound), (c = !1), (d = b.suffixMap || g.suffixMap), (e = $(a, "")), (f = this._overwriteProps);
                        var n,
                            p,
                            s,
                            t,
                            u,
                            v,
                            w,
                            x,
                            z,
                            A = a.style;
                        if (
                            (l && "" === A.zIndex && ((n = _(a, "zIndex", e)), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
                            "string" == typeof b && ((t = A.cssText), (n = ca(a, e)), (A.cssText = t + ";" + b), (n = da(a, n, ca(a)).difs), !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), (b = n), (A.cssText = t)),
                            b.className ? (this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b)) : (this._firstPT = p = this.parse(a, b, null)),
                            this._transformType)
                        ) {
                            for (
                                z = 3 === this._transformType,
                                    Ca
                                        ? m &&
                                          ((l = !0),
                                          "" === A.zIndex && ((w = _(a, "zIndex", e)), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)),
                                          o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden")))
                                        : (A.zoom = 1),
                                    s = p;
                                s && s._next;

                            )
                                s = s._next;
                            (x = new ta(a, "transform", 0, 0, null, 2)), this._linkCSSP(x, null, s), (x.setRatio = Ca ? Ta : Sa), (x.data = this._transform || Ra(a, e, !0)), (x.tween = h), (x.pr = -1), f.pop();
                        }
                        if (c) {
                            for (; p; ) {
                                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p), (p._next = s) ? (s._prev = p) : (u = p), (p = v);
                            }
                            this._firstPT = t;
                        }
                        return !0;
                    }),
                    (j.parse = function (a, b, c, f) {
                        var g,
                            h,
                            j,
                            l,
                            m,
                            n,
                            o,
                            p,
                            s,
                            t,
                            u = a.style;
                        for (g in b) {
                            if (((n = b[g]), "function" == typeof n && (n = n(r, q)), (h = i[g]))) c = h.parse(a, n, g, this, c, f, b);
                            else {
                                if ("--" === g.substr(0, 2)) {
                                    this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                    continue;
                                }
                                (m = _(a, g, e) + ""),
                                    (s = "string" == typeof n),
                                    "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || (s && A.test(n))
                                        ? (s || ((n = na(n)), (n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")")), (c = va(u, g, m, n, !0, "transparent", c, 0, f)))
                                        : s && J.test(n)
                                        ? (c = va(u, g, m, n, !0, null, c, 0, f))
                                        : ((j = parseFloat(m)),
                                          (o = j || 0 === j ? m.substr((j + "").length) : ""),
                                          ("" === m || "auto" === m) &&
                                              ("width" === g || "height" === g ? ((j = ga(a, g, e)), (o = "px")) : "left" === g || "top" === g ? ((j = ba(a, g, e)), (o = "px")) : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                                          (t = s && "=" === n.charAt(1)),
                                          t ? ((l = parseInt(n.charAt(0) + "1", 10)), (n = n.substr(2)), (l *= parseFloat(n)), (p = n.replace(w, ""))) : ((l = parseFloat(n)), (p = s ? n.replace(w, "") : "")),
                                          "" === p && (p = g in d ? d[g] : o),
                                          (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                                          o !== p &&
                                              ("" !== p || "lineHeight" === g) &&
                                              (l || 0 === l) &&
                                              j &&
                                              ((j = aa(a, g, j, o)),
                                              "%" === p
                                                  ? ((j /= aa(a, g, 100, "%") / 100), b.strictUnits !== !0 && (m = j + "%"))
                                                  : "em" === p || "rem" === p || "vw" === p || "vh" === p
                                                  ? (j /= aa(a, g, 1, p))
                                                  : "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
                                              t && (l || 0 === l) && (n = l + j + p)),
                                          t && (l += j),
                                          (!j && 0 !== j) || (!l && 0 !== l)
                                              ? void 0 !== u[g] && (n || (n + "" != "NaN" && null != n))
                                                  ? ((c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n)), (c.xs0 = "none" !== n || ("display" !== g && -1 === g.indexOf("Style")) ? n : m))
                                                  : W("invalid " + g + " tween value: " + b[g])
                                              : ((c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n)), (c.xs0 = p)));
                            }
                            f && c && !c.plugin && (c.plugin = f);
                        }
                        return c;
                    }),
                    (j.setRatio = function (a) {
                        var b,
                            c,
                            d,
                            e = this._firstPT,
                            f = 1e-6;
                        if (1 !== a || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                            if (a || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || this._tween._rawPrevTime === -1e-6)
                                for (; e; ) {
                                    if (((b = e.c * a + e.s), e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0), e.type))
                                        if (1 === e.type)
                                            if (((d = e.l), 2 === d)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                            else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                            else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                            else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                            else {
                                                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c;
                                            }
                                        else -1 === e.type ? (e.t[e.p] = e.xs0) : e.setRatio && e.setRatio(a);
                                    else e.t[e.p] = b + e.xs0;
                                    e = e._next;
                                }
                            else for (; e; ) 2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a), (e = e._next);
                        else
                            for (; e; ) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (((b = Math.round(e.s + e.c)), e.type)) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c;
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                    else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next;
                            }
                    }),
                    (j._enableTransforms = function (a) {
                        (this._transform = this._transform || Ra(this._target, e, !0)), (this._transformType = (this._transform.svg && Aa) || (!a && 3 !== this._transformType) ? 2 : 3);
                    });
                var Ya = function (a) {
                    (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                };
                (j._addLazySet = function (a, b, c) {
                    var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
                    (d.e = c), (d.setRatio = Ya), (d.data = this);
                }),
                    (j._linkCSSP = function (a, b, c, d) {
                        return (
                            a &&
                                (b && (b._prev = a),
                                a._next && (a._next._prev = a._prev),
                                a._prev ? (a._prev._next = a._next) : this._firstPT === a && ((this._firstPT = a._next), (d = !0)),
                                c ? (c._next = a) : d || null !== this._firstPT || (this._firstPT = a),
                                (a._next = b),
                                (a._prev = c)),
                            a
                        );
                    }),
                    (j._mod = function (a) {
                        for (var b = this._firstPT; b; ) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), (b = b._next);
                    }),
                    (j._kill = function (b) {
                        var c,
                            d,
                            e,
                            f = b;
                        if (b.autoAlpha || b.alpha) {
                            f = {};
                            for (d in b) f[d] = b[d];
                            (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
                        }
                        for (
                            b.className &&
                                (c = this._classNamePT) &&
                                ((e = c.xfirst),
                                e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
                                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                                (this._classNamePT = null)),
                                c = this._firstPT;
                            c;

                        )
                            c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), (d = c.plugin)), (c = c._next);
                        return a.prototype._kill.call(this, f);
                    });
                var Za = function (a, b, c) {
                    var d, e, f, g;
                    if (a.slice) for (e = a.length; --e > -1; ) Za(a[e], b, c);
                    else for (d = a.childNodes, e = d.length; --e > -1; ) (f = d[e]), (g = f.type), f.style && (b.push(ca(f)), c && c.push(f)), (1 !== g && 9 !== g && 11 !== g) || !f.childNodes.length || Za(f, b, c);
                };
                return (
                    (g.cascadeTo = function (a, c, d) {
                        var e,
                            f,
                            g,
                            h,
                            i = b.to(a, c, d),
                            j = [i],
                            k = [],
                            l = [],
                            m = [],
                            n = b._internals.reservedProps;
                        for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1; )
                            if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
                                f = f.difs;
                                for (g in d) n[g] && (f[g] = d[g]);
                                h = {};
                                for (g in f) h[g] = k[e][g];
                                j.push(b.fromTo(m[e], c, h, f));
                            }
                        return j;
                    }),
                    a.activate([g]),
                    g
                );
            },
            !0
        ),
        (function () {
            var a = _gsScope._gsDefine.plugin({
                    propName: "roundProps",
                    version: "1.6.0",
                    priority: -1,
                    API: 2,
                    init: function (a, b, c) {
                        return (this._tween = c), !0;
                    },
                }),
                b = function (a) {
                    for (; a; ) a.f || a.blob || (a.m = Math.round), (a = a._next);
                },
                c = a.prototype;
            (c._onInitAllProps = function () {
                for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1; ) h[f[g]] = Math.round;
                for (g = f.length; --g > -1; )
                    for (a = f[g], c = e._firstPT; c; )
                        (d = c._next),
                            c.pg
                                ? c.t._mod(h)
                                : c.n === a &&
                                  (2 === c.f && c.t
                                      ? b(c.t._firstPT)
                                      : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? (c._prev._next = d) : e._firstPT === c && (e._firstPT = d), (c._next = c._prev = null), (e._propLookup[a] = i))),
                            (c = d);
                return !1;
            }),
                (c._add = function (a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b);
                });
        })(),
        (function () {
            _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function (a, b, c, d) {
                    var e, f;
                    if ("function" != typeof a.setAttribute) return !1;
                    for (e in b) (f = b[e]), "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                    return !0;
                },
            });
        })(),
        (_gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (a, b, c, d) {
                "object" != typeof b && (b = { rotation: b }), (this.finals = {});
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = b.useRadians === !0 ? 2 * Math.PI : 360,
                    l = 1e-6;
                for (e in b)
                    "useRadians" !== e &&
                        ((h = b[e]),
                        "function" == typeof h && (h = h(d, a)),
                        (j = (h + "").split("_")),
                        (f = j[0]),
                        (g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]())),
                        (h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0),
                        (i = h - g),
                        j.length &&
                            ((f = j.join("_")),
                            -1 !== f.indexOf("short") && ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
                            -1 !== f.indexOf("_cw") && 0 > i ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k) : -1 !== f.indexOf("ccw") && i > 0 && (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
                        (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                return !0;
            },
            set: function (a) {
                var b;
                if (1 !== a) this._super.setRatio.call(this, a);
                else for (b = this._firstPT; b; ) b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]), (b = b._next);
            },
        })._autoCSS = !0),
        _gsScope._gsDefine(
            "easing.Back",
            ["easing.Ease"],
            function (a) {
                var b,
                    c,
                    d,
                    e = _gsScope.GreenSockGlobals || _gsScope,
                    f = e.com.greensock,
                    g = 2 * Math.PI,
                    h = Math.PI / 2,
                    i = f._class,
                    j = function (b, c) {
                        var d = i("easing." + b, function () {}, !0),
                            e = (d.prototype = new a());
                        return (e.constructor = d), (e.getRatio = c), d;
                    },
                    k = a.register || function () {},
                    l = function (a, b, c, d, e) {
                        var f = i("easing." + a, { easeOut: new b(), easeIn: new c(), easeInOut: new d() }, !0);
                        return k(f, a), f;
                    },
                    m = function (a, b, c) {
                        (this.t = a), (this.v = b), c && ((this.next = c), (c.prev = this), (this.c = c.v - b), (this.gap = c.t - a));
                    },
                    n = function (b, c) {
                        var d = i(
                                "easing." + b,
                                function (a) {
                                    (this._p1 = a || 0 === a ? a : 1.70158), (this._p2 = 1.525 * this._p1);
                                },
                                !0
                            ),
                            e = (d.prototype = new a());
                        return (
                            (e.constructor = d),
                            (e.getRatio = c),
                            (e.config = function (a) {
                                return new d(a);
                            }),
                            d
                        );
                    },
                    o = l(
                        "Back",
                        n("BackOut", function (a) {
                            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
                        }),
                        n("BackIn", function (a) {
                            return a * a * ((this._p1 + 1) * a - this._p1);
                        }),
                        n("BackInOut", function (a) {
                            return (a *= 2) < 1 ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
                        })
                    ),
                    p = i(
                        "easing.SlowMo",
                        function (a, b, c) {
                            (b = b || 0 === b ? b : 0.7), null == a ? (a = 0.7) : a > 1 && (a = 1), (this._p = 1 !== a ? b : 0), (this._p1 = (1 - a) / 2), (this._p2 = a), (this._p3 = this._p1 + this._p2), (this._calcEnd = c === !0);
                        },
                        !0
                    ),
                    q = (p.prototype = new a());
                return (
                    (q.constructor = p),
                    (q.getRatio = function (a) {
                        var b = a + (0.5 - a) * this._p;
                        return a < this._p1
                            ? this._calcEnd
                                ? 1 - (a = 1 - a / this._p1) * a
                                : b - (a = 1 - a / this._p1) * a * a * a * b
                            : a > this._p3
                            ? this._calcEnd
                                ? 1 === a
                                    ? 0
                                    : 1 - (a = (a - this._p3) / this._p1) * a
                                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
                            : this._calcEnd
                            ? 1
                            : b;
                    }),
                    (p.ease = new p(0.7, 0.7)),
                    (q.config = p.config = function (a, b, c) {
                        return new p(a, b, c);
                    }),
                    (b = i(
                        "easing.SteppedEase",
                        function (a, b) {
                            (a = a || 1), (this._p1 = 1 / a), (this._p2 = a + (b ? 0 : 1)), (this._p3 = b ? 1 : 0);
                        },
                        !0
                    )),
                    (q = b.prototype = new a()),
                    (q.constructor = b),
                    (q.getRatio = function (a) {
                        return 0 > a ? (a = 0) : a >= 1 && (a = 0.999999999), (((this._p2 * a) | 0) + this._p3) * this._p1;
                    }),
                    (q.config = b.config = function (a, c) {
                        return new b(a, c);
                    }),
                    (c = i(
                        "easing.RoughEase",
                        function (b) {
                            b = b || {};
                            for (
                                var c,
                                    d,
                                    e,
                                    f,
                                    g,
                                    h,
                                    i = b.taper || "none",
                                    j = [],
                                    k = 0,
                                    l = 0 | (b.points || 20),
                                    n = l,
                                    o = b.randomize !== !1,
                                    p = b.clamp === !0,
                                    q = b.template instanceof a ? b.template : null,
                                    r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                                --n > -1;

                            )
                                (c = o ? Math.random() : (1 / l) * n),
                                    (d = q ? q.getRatio(c) : c),
                                    "none" === i ? (e = r) : "out" === i ? ((f = 1 - c), (e = f * f * r)) : "in" === i ? (e = c * c * r) : 0.5 > c ? ((f = 2 * c), (e = f * f * 0.5 * r)) : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                                    o ? (d += Math.random() * e - 0.5 * e) : n % 2 ? (d += 0.5 * e) : (d -= 0.5 * e),
                                    p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                                    (j[k++] = { x: c, y: d });
                            for (
                                j.sort(function (a, b) {
                                    return a.x - b.x;
                                }),
                                    h = new m(1, 1, null),
                                    n = l;
                                --n > -1;

                            )
                                (g = j[n]), (h = new m(g.x, g.y, h));
                            this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
                        },
                        !0
                    )),
                    (q = c.prototype = new a()),
                    (q.constructor = c),
                    (q.getRatio = function (a) {
                        var b = this._prev;
                        if (a > b.t) {
                            for (; b.next && a >= b.t; ) b = b.next;
                            b = b.prev;
                        } else for (; b.prev && a <= b.t; ) b = b.prev;
                        return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
                    }),
                    (q.config = function (a) {
                        return new c(a);
                    }),
                    (c.ease = new c()),
                    l(
                        "Bounce",
                        j("BounceOut", function (a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                        }),
                        j("BounceIn", function (a) {
                            return (a = 1 - a) < 1 / 2.75
                                ? 1 - 7.5625 * a * a
                                : 2 / 2.75 > a
                                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                                : 2.5 / 2.75 > a
                                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
                        }),
                        j("BounceInOut", function (a) {
                            var b = 0.5 > a;
                            return (
                                (a = b ? 1 - 2 * a : 2 * a - 1),
                                (a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
                            );
                        })
                    ),
                    l(
                        "Circ",
                        j("CircOut", function (a) {
                            return Math.sqrt(1 - (a -= 1) * a);
                        }),
                        j("CircIn", function (a) {
                            return -(Math.sqrt(1 - a * a) - 1);
                        }),
                        j("CircInOut", function (a) {
                            return (a *= 2) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
                        })
                    ),
                    (d = function (b, c, d) {
                        var e = i(
                                "easing." + b,
                                function (a, b) {
                                    (this._p1 = a >= 1 ? a : 1), (this._p2 = (b || d) / (1 > a ? a : 1)), (this._p3 = (this._p2 / g) * (Math.asin(1 / this._p1) || 0)), (this._p2 = g / this._p2);
                                },
                                !0
                            ),
                            f = (e.prototype = new a());
                        return (
                            (f.constructor = e),
                            (f.getRatio = c),
                            (f.config = function (a, b) {
                                return new e(a, b);
                            }),
                            e
                        );
                    }),
                    l(
                        "Elastic",
                        d(
                            "ElasticOut",
                            function (a) {
                                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
                            },
                            0.3
                        ),
                        d(
                            "ElasticIn",
                            function (a) {
                                return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
                            },
                            0.3
                        ),
                        d(
                            "ElasticInOut",
                            function (a) {
                                return (a *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * 0.5 + 1;
                            },
                            0.45
                        )
                    ),
                    l(
                        "Expo",
                        j("ExpoOut", function (a) {
                            return 1 - Math.pow(2, -10 * a);
                        }),
                        j("ExpoIn", function (a) {
                            return Math.pow(2, 10 * (a - 1)) - 0.001;
                        }),
                        j("ExpoInOut", function (a) {
                            return (a *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
                        })
                    ),
                    l(
                        "Sine",
                        j("SineOut", function (a) {
                            return Math.sin(a * h);
                        }),
                        j("SineIn", function (a) {
                            return -Math.cos(a * h) + 1;
                        }),
                        j("SineInOut", function (a) {
                            return -0.5 * (Math.cos(Math.PI * a) - 1);
                        })
                    ),
                    i(
                        "easing.EaseLookup",
                        {
                            find: function (b) {
                                return a.map[b];
                            },
                        },
                        !0
                    ),
                    k(e.SlowMo, "SlowMo", "ease,"),
                    k(c, "RoughEase", "ease,"),
                    k(b, "SteppedEase", "ease,"),
                    o
                );
            },
            !0
        );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
        if (!e.TweenLite) {
            var f,
                g,
                h,
                i,
                j,
                k = function (a) {
                    var b,
                        c = a.split("."),
                        d = e;
                    for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                    return d;
                },
                l = k("com.greensock"),
                m = 1e-10,
                n = function (a) {
                    var b,
                        c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c;
                },
                o = function () {},
                p = (function () {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function (c) {
                        return null != c && (c instanceof Array || ("object" == typeof c && !!c.push && a.call(c) === b));
                    };
                })(),
                q = {},
                r = function (d, f, g, h) {
                    (this.sc = q[d] ? q[d].sc : []), (q[d] = this), (this.gsClass = null), (this.func = g);
                    var i = [];
                    (this.check = function (j) {
                        for (var l, m, n, o, p = f.length, s = p; --p > -1; ) (l = q[f[p]] || new r(f[p], [])).gsClass ? ((i[p] = l.gsClass), s--) : j && l.sc.push(this);
                        if (0 === s && g) {
                            if (((m = ("com.greensock." + d).split(".")), (n = m.pop()), (o = k(m.join("."))[n] = this.gsClass = g.apply(g, i)), h))
                                if (((e[n] = c[n] = o), "undefined" != typeof module && module.exports))
                                    if (d === b) {
                                        module.exports = c[b] = o;
                                        for (p in c) o[p] = c[p];
                                    } else c[b] && (c[b][n] = o);
                                else
                                    "function" == typeof define &&
                                        define.amd &&
                                        define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                                            return o;
                                        });
                            for (p = 0; p < this.sc.length; p++) this.sc[p].check();
                        }
                    }),
                        this.check(!0);
                },
                s = (a._gsDefine = function (a, b, c, d) {
                    return new r(a, b, c, d);
                }),
                t = (l._class = function (a, b, c) {
                    return (
                        (b = b || function () {}),
                        s(
                            a,
                            [],
                            function () {
                                return b;
                            },
                            c
                        ),
                        b
                    );
                });
            s.globals = e;
            var u = [0, 0, 1, 1],
                v = t(
                    "easing.Ease",
                    function (a, b, c, d) {
                        (this._func = a), (this._type = c || 0), (this._power = d || 0), (this._params = b ? u.concat(b) : u);
                    },
                    !0
                ),
                w = (v.map = {}),
                x = (v.register = function (a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1; )
                        for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1; ) (h = k[g]), (w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a());
                });
            for (
                h = v.prototype,
                    h._calcEnd = !1,
                    h.getRatio = function (a) {
                        if (this._func) return (this._params[0] = a), this._func.apply(null, this._params);
                        var b = this._type,
                            c = this._power,
                            d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
                        return 1 === c ? (d *= d) : 2 === c ? (d *= d * d) : 3 === c ? (d *= d * d * d) : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2;
                    },
                    f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                    g = f.length;
                --g > -1;

            )
                (h = f[g] + ",Power" + g), x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
            (w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
            var y = t("events.EventDispatcher", function (a) {
                (this._listeners = {}), (this._eventTarget = a || this);
            });
            (h = y.prototype),
                (h.addEventListener = function (a, b, c, d, e) {
                    e = e || 0;
                    var f,
                        g,
                        h = this._listeners[a],
                        k = 0;
                    for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1; ) (f = h[g]), f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
                    h.splice(k, 0, { c: b, s: c, up: d, pr: e });
                }),
                (h.removeEventListener = function (a, b) {
                    var c,
                        d = this._listeners[a];
                    if (d) for (c = d.length; --c > -1; ) if (d[c].c === b) return void d.splice(c, 1);
                }),
                (h.dispatchEvent = function (a) {
                    var b,
                        c,
                        d,
                        e = this._listeners[a];
                    if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1; ) (d = e[b]), d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c));
                });
            var z = a.requestAnimationFrame,
                A = a.cancelAnimationFrame,
                B =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    },
                C = B();
            for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z; ) (z = a[f[g] + "RequestAnimationFrame"]), (A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"]);
            t("Ticker", function (a, b) {
                var c,
                    e,
                    f,
                    g,
                    h,
                    k = this,
                    l = B(),
                    n = b !== !1 && z ? "auto" : !1,
                    p = 500,
                    q = 33,
                    r = "tick",
                    s = function (a) {
                        var b,
                            d,
                            i = B() - C;
                        i > p && (l += i - q), (C += i), (k.time = (C - l) / 1e3), (b = k.time - h), (!c || b > 0 || a === !0) && (k.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)), a !== !0 && (f = e(s)), d && k.dispatchEvent(r);
                    };
                y.call(k),
                    (k.time = k.frame = 0),
                    (k.tick = function () {
                        s(!0);
                    }),
                    (k.lagSmoothing = function (a, b) {
                        return arguments.length ? ((p = a || 1 / m), void (q = Math.min(b, p, 0))) : 1 / m > p;
                    }),
                    (k.sleep = function () {
                        null != f && (n && A ? A(f) : clearTimeout(f), (e = o), (f = null), k === i && (j = !1));
                    }),
                    (k.wake = function (a) {
                        null !== f ? k.sleep() : a ? (l += -C + (C = B())) : k.frame > 10 && (C = B() - p + 5),
                            (e =
                                0 === c
                                    ? o
                                    : n && z
                                    ? z
                                    : function (a) {
                                          return setTimeout(a, (1e3 * (h - k.time) + 1) | 0);
                                      }),
                            k === i && (j = !0),
                            s(2);
                    }),
                    (k.fps = function (a) {
                        return arguments.length ? ((c = a), (g = 1 / (c || 60)), (h = this.time + g), void k.wake()) : c;
                    }),
                    (k.useRAF = function (a) {
                        return arguments.length ? (k.sleep(), (n = a), void k.fps(c)) : n;
                    }),
                    k.fps(a),
                    setTimeout(function () {
                        "auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1);
                    }, 1500);
            }),
                (h = l.Ticker.prototype = new l.events.EventDispatcher()),
                (h.constructor = l.Ticker);
            var D = t("core.Animation", function (a, b) {
                if (
                    ((this.vars = b = b || {}),
                    (this._duration = this._totalDuration = a || 0),
                    (this._delay = Number(b.delay) || 0),
                    (this._timeScale = 1),
                    (this._active = b.immediateRender === !0),
                    (this.data = b.data),
                    (this._reversed = b.reversed === !0),
                    X)
                ) {
                    j || i.wake();
                    var c = this.vars.useFrames ? W : X;
                    c.add(this, c._time), this.vars.paused && this.paused(!0);
                }
            });
            (i = D.ticker = new l.Ticker()),
                (h = D.prototype),
                (h._dirty = h._gc = h._initted = h._paused = !1),
                (h._totalTime = h._time = 0),
                (h._rawPrevTime = -1),
                (h._next = h._last = h._onUpdate = h._timeline = h.timeline = null),
                (h._paused = !1);
            var E = function () {
                j && B() - C > 2e3 && ("hidden" !== d.visibilityState || !i.lagSmoothing()) && i.wake();
                var a = setTimeout(E, 2e3);
                a.unref && a.unref();
            };
            E(),
                (h.play = function (a, b) {
                    return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
                }),
                (h.pause = function (a, b) {
                    return null != a && this.seek(a, b), this.paused(!0);
                }),
                (h.resume = function (a, b) {
                    return null != a && this.seek(a, b), this.paused(!1);
                }),
                (h.seek = function (a, b) {
                    return this.totalTime(Number(a), b !== !1);
                }),
                (h.restart = function (a, b) {
                    return this.reversed(!1)
                        .paused(!1)
                        .totalTime(a ? -this._delay : 0, b !== !1, !0);
                }),
                (h.reverse = function (a, b) {
                    return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
                }),
                (h.render = function (a, b, c) {}),
                (h.invalidate = function () {
                    return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
                }),
                (h.isActive = function () {
                    var a,
                        b = this._timeline,
                        c = this._startTime;
                    return !b || (!this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7);
                }),
                (h._enabled = function (a, b) {
                    return (
                        j || i.wake(),
                        (this._gc = !a),
                        (this._active = this.isActive()),
                        b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
                        !1
                    );
                }),
                (h._kill = function (a, b) {
                    return this._enabled(!1, !1);
                }),
                (h.kill = function (a, b) {
                    return this._kill(a, b), this;
                }),
                (h._uncache = function (a) {
                    for (var b = a ? this : this.timeline; b; ) (b._dirty = !0), (b = b.timeline);
                    return this;
                }),
                (h._swapSelfInParams = function (a) {
                    for (var b = a.length, c = a.concat(); --b > -1; ) "{self}" === a[b] && (c[b] = this);
                    return c;
                }),
                (h._callback = function (a) {
                    var b = this.vars,
                        c = b[a],
                        d = b[a + "Params"],
                        e = b[a + "Scope"] || b.callbackScope || this,
                        f = d ? d.length : 0;
                    switch (f) {
                        case 0:
                            c.call(e);
                            break;
                        case 1:
                            c.call(e, d[0]);
                            break;
                        case 2:
                            c.call(e, d[0], d[1]);
                            break;
                        default:
                            c.apply(e, d);
                    }
                }),
                (h.eventCallback = function (a, b, c, d) {
                    if ("on" === (a || "").substr(0, 2)) {
                        var e = this.vars;
                        if (1 === arguments.length) return e[a];
                        null == b ? delete e[a] : ((e[a] = b), (e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c), (e[a + "Scope"] = d)), "onUpdate" === a && (this._onUpdate = b);
                    }
                    return this;
                }),
                (h.delay = function (a) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), (this._delay = a), this) : this._delay;
                }),
                (h.duration = function (a) {
                    return arguments.length
                        ? ((this._duration = this._totalDuration = a),
                          this._uncache(!0),
                          this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
                          this)
                        : ((this._dirty = !1), this._duration);
                }),
                (h.totalDuration = function (a) {
                    return (this._dirty = !1), arguments.length ? this.duration(a) : this._totalDuration;
                }),
                (h.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
                }),
                (h.totalTime = function (a, b, c) {
                    if ((j || i.wake(), !arguments.length)) return this._totalTime;
                    if (this._timeline) {
                        if ((0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming)) {
                            this._dirty && this.totalDuration();
                            var d = this._totalDuration,
                                e = this._timeline;
                            if ((a > d && !c && (a = d), (this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale), e._dirty || this._uncache(!1), e._timeline))
                                for (; e._timeline; ) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), (e = e._timeline);
                        }
                        this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z());
                    }
                    return this;
                }),
                (h.progress = h.totalProgress = function (a, b) {
                    var c = this.duration();
                    return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
                }),
                (h.startTime = function (a) {
                    return arguments.length ? (a !== this._startTime && ((this._startTime = a), this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
                }),
                (h.endTime = function (a) {
                    return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
                }),
                (h.timeScale = function (a) {
                    if (!arguments.length) return this._timeScale;
                    var b, c;
                    for (
                        a = a || m,
                            this._timeline && this._timeline.smoothChildTiming && ((b = this._pauseTime), (c = b || 0 === b ? b : this._timeline.totalTime()), (this._startTime = c - ((c - this._startTime) * this._timeScale) / a)),
                            this._timeScale = a,
                            c = this.timeline;
                        c && c.timeline;

                    )
                        (c._dirty = !0), c.totalDuration(), (c = c.timeline);
                    return this;
                }),
                (h.reversed = function (a) {
                    return arguments.length
                        ? (a != this._reversed && ((this._reversed = a), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                        : this._reversed;
                }),
                (h.paused = function (a) {
                    if (!arguments.length) return this._paused;
                    var b,
                        c,
                        d = this._timeline;
                    return (
                        a != this._paused &&
                            d &&
                            (j || a || i.wake(),
                            (b = d.rawTime()),
                            (c = b - this._pauseTime),
                            !a && d.smoothChildTiming && ((this._startTime += c), this._uncache(!1)),
                            (this._pauseTime = a ? b : null),
                            (this._paused = a),
                            (this._active = this.isActive()),
                            !a && 0 !== c && this._initted && this.duration() && ((b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale), this.render(b, b === this._totalTime, !0))),
                        this._gc && !a && this._enabled(!0, !1),
                        this
                    );
                });
            var F = t("core.SimpleTimeline", function (a) {
                D.call(this, 0, a), (this.autoRemoveChildren = this.smoothChildTiming = !0);
            });
            (h = F.prototype = new D()),
                (h.constructor = F),
                (h.kill()._gc = !1),
                (h._first = h._last = h._recent = null),
                (h._sortChildren = !1),
                (h.add = h.insert = function (a, b, c, d) {
                    var e, f;
                    if (
                        ((a._startTime = Number(b || 0) + a._delay),
                        a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
                        a.timeline && a.timeline._remove(a, !0),
                        (a.timeline = a._timeline = this),
                        a._gc && a._enabled(!0, !0),
                        (e = this._last),
                        this._sortChildren)
                    )
                        for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
                    return (
                        e ? ((a._next = e._next), (e._next = a)) : ((a._next = this._first), (this._first = a)), a._next ? (a._next._prev = a) : (this._last = a), (a._prev = e), (this._recent = a), this._timeline && this._uncache(!0), this
                    );
                }),
                (h._remove = function (a, b) {
                    return (
                        a.timeline === this &&
                            (b || a._enabled(!1, !0),
                            a._prev ? (a._prev._next = a._next) : this._first === a && (this._first = a._next),
                            a._next ? (a._next._prev = a._prev) : this._last === a && (this._last = a._prev),
                            (a._next = a._prev = a.timeline = null),
                            a === this._recent && (this._recent = this._last),
                            this._timeline && this._uncache(!0)),
                        this
                    );
                }),
                (h.render = function (a, b, c) {
                    var d,
                        e = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = a; e; )
                        (d = e._next),
                            (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
                                (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
                            (e = d);
                }),
                (h.rawTime = function () {
                    return j || i.wake(), this._totalTime;
                });
            var G = t(
                    "TweenLite",
                    function (b, c, d) {
                        if ((D.call(this, c, d), (this.render = G.prototype.render), null == b)) throw "Cannot tween a null target.";
                        this.target = b = "string" != typeof b ? b : G.selector(b) || b;
                        var e,
                            f,
                            g,
                            h = b.jquery || (b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
                            i = this.vars.overwrite;
                        if (((this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i]), (h || b instanceof Array || (b.push && p(b))) && "number" != typeof b[0]))
                            for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)
                                (f = g[e]),
                                    f
                                        ? "string" != typeof f
                                            ? f.length && f !== a && f[0] && (f[0] === a || (f[0].nodeType && f[0].style && !f.nodeType))
                                                ? (g.splice(e--, 1), (this._targets = g = g.concat(n(f))))
                                                : ((this._siblings[e] = $(f, this, !1)), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e]))
                                            : ((f = g[e--] = G.selector(f)), "string" == typeof f && g.splice(e + 1, 1))
                                        : g.splice(e--, 1);
                        else (this._propLookup = {}), (this._siblings = $(b, this, !1)), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
                        (this.vars.immediateRender || (0 === c && 0 === this._delay && this.vars.immediateRender !== !1)) && ((this._time = -m), this.render(Math.min(0, -this._delay)));
                    },
                    !0
                ),
                H = function (b) {
                    return b && b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType));
                },
                I = function (a, b) {
                    var c,
                        d = {};
                    for (c in a)
                        U[c] || (c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c) || !(!R[c] || (R[c] && R[c]._autoCSS)) || ((d[c] = a[c]), delete a[c]);
                    a.css = d;
                };
            (h = G.prototype = new D()),
                (h.constructor = G),
                (h.kill()._gc = !1),
                (h.ratio = 0),
                (h._firstPT = h._targets = h._overwrittenProps = h._startAt = null),
                (h._notifyPluginsOfEnabled = h._lazy = !1),
                (G.version = "1.20.3"),
                (G.defaultEase = h._ease = new v(null, null, 1, 1)),
                (G.defaultOverwrite = "auto"),
                (G.ticker = i),
                (G.autoSleep = 120),
                (G.lagSmoothing = function (a, b) {
                    i.lagSmoothing(a, b);
                }),
                (G.selector =
                    a.$ ||
                    a.jQuery ||
                    function (b) {
                        var c = a.$ || a.jQuery;
                        return c ? ((G.selector = c), c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
                    });
            var J = [],
                K = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                M = /[\+-]=-?[\.\d]/,
                N = function (a) {
                    for (var b, c = this._firstPT, d = 1e-6; c; )
                        (b = c.blob ? (1 === a && null != this.end ? this.end : a ? this.join("") : this.start) : c.c * a + c.s),
                            c.m ? (b = c.m(b, this._target || c.t)) : d > b && b > -d && !c.blob && (b = 0),
                            c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
                            (c = c._next);
                },
                O = function (a, b, c, d) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l = [],
                        m = 0,
                        n = "",
                        o = 0;
                    for (
                        l.start = a,
                            l.end = b,
                            a = l[0] = a + "",
                            b = l[1] = b + "",
                            c && (c(l), (a = l[0]), (b = l[1])),
                            l.length = 0,
                            e = a.match(L) || [],
                            f = b.match(L) || [],
                            d && ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
                            i = f.length,
                            h = 0;
                        i > h;
                        h++
                    )
                        (k = f[h]),
                            (j = b.substr(m, b.indexOf(k, m) - m)),
                            (n += j || !h ? j : ","),
                            (m += j.length),
                            o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
                            k === e[h] || e.length <= h
                                ? (n += k)
                                : (n && (l.push(n), (n = "")),
                                  (g = parseFloat(e[h])),
                                  l.push(g),
                                  (l._firstPT = {
                                      _next: l._firstPT,
                                      t: l,
                                      p: l.length - 1,
                                      s: g,
                                      c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                                      f: 0,
                                      m: o && 4 > o ? Math.round : 0,
                                  })),
                            (m += k.length);
                    return (n += b.substr(m)), n && l.push(n), (l.setRatio = N), M.test(b) && (l.end = null), l;
                },
                P = function (a, b, c, d, e, f, g, h, i) {
                    "function" == typeof d && (d = d(i || 0, a));
                    var j,
                        k = typeof a[b],
                        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                        m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
                        n = "string" == typeof d && "=" === d.charAt(1),
                        o = { t: a, p: b, s: m, f: "function" === k, pg: 0, n: e || b, m: f ? ("function" == typeof f ? f : Math.round) : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0 };
                    return (
                        ("number" != typeof m || ("number" != typeof d && !n)) &&
                            (g || isNaN(m) || (!n && isNaN(d)) || "boolean" == typeof m || "boolean" == typeof d
                                ? ((o.fp = g), (j = O(m, n ? parseFloat(o.s) + o.c : d, h || G.defaultStringFilter, o)), (o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }))
                                : ((o.s = parseFloat(m)), n || (o.c = parseFloat(d) - o.s || 0))),
                        o.c ? ((o._next = this._firstPT) && (o._next._prev = o), (this._firstPT = o), o) : void 0
                    );
                },
                Q = (G._internals = { isArray: p, isSelector: H, lazyTweens: J, blobDif: O }),
                R = (G._plugins = {}),
                S = (Q.tweenLookup = {}),
                T = 0,
                U = (Q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1,
                }),
                V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                W = (D._rootFramesTimeline = new F()),
                X = (D._rootTimeline = new F()),
                Y = 30,
                Z = (Q.lazyRender = function () {
                    var a,
                        b = J.length;
                    for (K = {}; --b > -1; ) (a = J[b]), a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
                    J.length = 0;
                });
            (X._startTime = i.time),
                (W._startTime = i.frame),
                (X._active = W._active = !0),
                setTimeout(Z, 1),
                (D._updateRoot = G.render = function () {
                    var a, b, c;
                    if ((J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y)) {
                        Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
                        for (c in S) {
                            for (b = S[c].tweens, a = b.length; --a > -1; ) b[a]._gc && b.splice(a, 1);
                            0 === b.length && delete S[c];
                        }
                        if (((c = X._first), (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length)) {
                            for (; c && c._paused; ) c = c._next;
                            c || i.sleep();
                        }
                    }
                }),
                i.addEventListener("tick", D._updateRoot);
            var $ = function (a, b, c) {
                    var d,
                        e,
                        f = a._gsTweenID;
                    if ((S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = { target: a, tweens: [] }), b && ((d = S[f].tweens), (d[(e = d.length)] = b), c))) for (; --e > -1; ) d[e] === b && d.splice(e, 1);
                    return S[f].tweens;
                },
                _ = function (a, b, c, d) {
                    var e,
                        f,
                        g = a.vars.onOverwrite;
                    return g && (e = g(a, b, c, d)), (g = G.onOverwrite), g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
                },
                aa = function (a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
                            else if (5 === d) break;
                        return g;
                    }
                    var j,
                        k = b._startTime + m,
                        l = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1; )
                        (h = e[f]) === b ||
                            h._gc ||
                            h._paused ||
                            (h._timeline !== b._timeline
                                ? ((j = j || ba(b, 0, o)), 0 === ba(h, j, o) && (l[n++] = h))
                                : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && (((o || !h._initted) && k - h._startTime <= 2e-10) || (l[n++] = h)));
                    for (f = n; --f > -1; )
                        if (((h = l[f]), 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || (!h._firstPT && h._initted))) {
                            if (2 !== d && !_(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0);
                        }
                    return g;
                },
                ba = function (a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
                        if (((f += d._startTime), (e *= d._timeScale), d._paused)) return -100;
                        d = d._timeline;
                    }
                    return (f /= e), f > b ? f - b : (c && f === b) || (!a._initted && 2 * m > f - b) ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m;
                };
            (h._init = function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = this.vars,
                    h = this._overwrittenProps,
                    i = this._duration,
                    j = !!g.immediateRender,
                    k = g.ease;
                if (g.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (e = {});
                    for (d in g.startAt) e[d] = g.startAt[d];
                    if (
                        ((e.data = "isStart"),
                        (e.overwrite = !1),
                        (e.immediateRender = !0),
                        (e.lazy = j && g.lazy !== !1),
                        (e.startAt = e.delay = null),
                        (e.onUpdate = g.onUpdate),
                        (e.onUpdateParams = g.onUpdateParams),
                        (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
                        (this._startAt = G.to(this.target, 0, e)),
                        j)
                    )
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return;
                } else if (g.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                    else {
                        0 !== this._time && (j = !1), (c = {});
                        for (d in g) (U[d] && "autoCSS" !== d) || (c[d] = g[d]);
                        if (((c.overwrite = 0), (c.data = "isFromStart"), (c.lazy = j && g.lazy !== !1), (c.immediateRender = j), (this._startAt = G.to(this.target, 0, c)), j)) {
                            if (0 === this._time) return;
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                    }
                if (
                    ((this._ease = k = k ? (k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase) : G.defaultEase),
                    g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)),
                    (this._easeType = this._ease._type),
                    (this._easePower = this._ease._power),
                    (this._firstPT = null),
                    this._targets)
                )
                    for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], (this._propLookup[a] = {}), this._siblings[a], h ? h[a] : null, a) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
                if ((b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), g.runBackwards))
                    for (c = this._firstPT; c; ) (c.s += c.c), (c.c = -c.c), (c = c._next);
                (this._onUpdate = g.onUpdate), (this._initted = !0);
            }),
                (h._initProps = function (b, c, d, e, f) {
                    var g, h, i, j, k, l;
                    if (null == b) return !1;
                    K[b._gsTweenID] && Z(), this.vars.css || (b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b));
                    for (g in this.vars)
                        if (((l = this.vars[g]), U[g])) l && (l instanceof Array || (l.push && p(l))) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                        else if (R[g] && (j = new R[g]())._onInitTween(b, this.vars[g], this, f)) {
                            for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1; ) c[j._overwriteProps[h]] = this._firstPT;
                            (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
                        } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                    return e && this._kill(e, b)
                        ? this._initProps(b, c, d, e, f)
                        : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d)
                        ? (this._kill(c, b), this._initProps(b, c, d, e, f))
                        : (this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)) && (K[b._gsTweenID] = !0), i);
                }),
                (h.render = function (a, b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h = this._time,
                        i = this._duration,
                        j = this._rawPrevTime;
                    if (a >= i - 1e-7 && a >= 0)
                        (this._totalTime = this._time = i),
                            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                            this._reversed || ((d = !0), (e = "onComplete"), (c = c || this._timeline.autoRemoveChildren)),
                            0 === i &&
                                (this._initted || !this.vars.lazy || c) &&
                                (this._startTime === this._timeline._duration && (a = 0),
                                (0 > j || (0 >= a && a >= -1e-7) || (j === m && "isPause" !== this.data)) && j !== a && ((c = !0), j > m && (e = "onReverseComplete")),
                                (this._rawPrevTime = g = !b || a || j === a ? a : m));
                    else if (1e-7 > a)
                        (this._totalTime = this._time = 0),
                            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                            (0 !== h || (0 === i && j > 0)) && ((e = "onReverseComplete"), (d = this._reversed)),
                            0 > a && ((this._active = !1), 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), (this._rawPrevTime = g = !b || a || j === a ? a : m))),
                            (!this._initted || (this._startAt && this._startAt.progress())) && (c = !0);
                    else if (((this._totalTime = this._time = a), this._easeType)) {
                        var k = a / i,
                            l = this._easeType,
                            n = this._easePower;
                        (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                            3 === l && (k *= 2),
                            1 === n ? (k *= k) : 2 === n ? (k *= k * k) : 3 === n ? (k *= k * k * k) : 4 === n && (k *= k * k * k * k),
                            1 === l ? (this.ratio = 1 - k) : 2 === l ? (this.ratio = k) : 0.5 > a / i ? (this.ratio = k / 2) : (this.ratio = 1 - k / 2);
                    } else this.ratio = this._ease.getRatio(a / i);
                    if (this._time !== h || c) {
                        if (!this._initted) {
                            if ((this._init(), !this._initted || this._gc)) return;
                            if (!c && this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)))
                                return (this._time = this._totalTime = h), (this._rawPrevTime = j), J.push(this), void (this._lazy = [a, b]);
                            this._time && !d ? (this.ratio = this._ease.getRatio(this._time / i)) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                        }
                        for (
                            this._lazy !== !1 && (this._lazy = !1),
                                this._active || (!this._paused && this._time !== h && a >= 0 && (this._active = !0)),
                                0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),
                                f = this._firstPT;
                            f;

                        )
                            f.f ? f.t[f.p](f.c * this.ratio + f.s) : (f.t[f.p] = f.c * this.ratio + f.s), (f = f._next);
                        this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || ((this._time !== h || d || c) && this._callback("onUpdate"))),
                            e &&
                                (!this._gc || c) &&
                                (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c),
                                d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                !b && this.vars[e] && this._callback(e),
                                0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0));
                    }
                }),
                (h._kill = function (a, b, c) {
                    if (("all" === a && (a = null), null == a && (null == b || b === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                    b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                    if ((p(b) || H(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
                    else {
                        if (this._targets) {
                            for (d = this._targets.length; --d > -1; )
                                if (b === this._targets[d]) {
                                    (h = this._propLookup[d] || {}), (this._overwrittenProps = this._overwrittenProps || []), (e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all");
                                    break;
                                }
                        } else {
                            if (b !== this.target) return !1;
                            (h = this._propLookup), (e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all");
                        }
                        if (h) {
                            if (((j = a || h), (k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill)), c && (G.onOverwrite || this.vars.onOverwrite))) {
                                for (f in j) h[f] && (l || (l = []), l.push(f));
                                if ((l || !a) && !_(this, c, b, l)) return !1;
                            }
                            for (f in j)
                                (g = h[f]) &&
                                    (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                                    g.pg && g.t._kill(j) && (i = !0),
                                    (g.pg && 0 !== g.t._overwriteProps.length) || (g._prev ? (g._prev._next = g._next) : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), (g._next = g._prev = null)),
                                    delete h[f]),
                                    k && (e[f] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1);
                        }
                    }
                    return i;
                }),
                (h.invalidate = function () {
                    return (
                        this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this),
                        (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                        (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                        (this._propLookup = this._targets ? {} : []),
                        D.prototype.invalidate.call(this),
                        this.vars.immediateRender && ((this._time = -m), this.render(Math.min(0, -this._delay))),
                        this
                    );
                }),
                (h._enabled = function (a, b) {
                    if ((j || i.wake(), a && this._gc)) {
                        var c,
                            d = this._targets;
                        if (d) for (c = d.length; --c > -1; ) this._siblings[c] = $(d[c], this, !0);
                        else this._siblings = $(this.target, this, !0);
                    }
                    return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
                }),
                (G.to = function (a, b, c) {
                    return new G(a, b, c);
                }),
                (G.from = function (a, b, c) {
                    return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new G(a, b, c);
                }),
                (G.fromTo = function (a, b, c, d) {
                    return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), new G(a, b, d);
                }),
                (G.delayedCall = function (a, b, c, d, e) {
                    return new G(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 });
                }),
                (G.set = function (a, b) {
                    return new G(a, 0, b);
                }),
                (G.getTweensOf = function (a, b) {
                    if (null == a) return [];
                    a = "string" != typeof a ? a : G.selector(a) || a;
                    var c, d, e, f;
                    if ((p(a) || H(a)) && "number" != typeof a[0]) {
                        for (c = a.length, d = []; --c > -1; ) d = d.concat(G.getTweensOf(a[c], b));
                        for (c = d.length; --c > -1; ) for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
                    } else if (a._gsTweenID) for (d = $(a).concat(), c = d.length; --c > -1; ) (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
                    return d || [];
                }),
                (G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
                    "object" == typeof b && ((c = b), (b = !1));
                    for (var d = G.getTweensOf(a, b), e = d.length; --e > -1; ) d[e]._kill(c, a);
                });
            var ca = t(
                "plugins.TweenPlugin",
                function (a, b) {
                    (this._overwriteProps = (a || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = b || 0), (this._super = ca.prototype);
                },
                !0
            );
            if (
                ((h = ca.prototype),
                (ca.version = "1.19.0"),
                (ca.API = 2),
                (h._firstPT = null),
                (h._addTween = P),
                (h.setRatio = N),
                (h._kill = function (a) {
                    var b,
                        c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
                    for (; d; ) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? ((d._prev._next = d._next), (d._prev = null)) : this._firstPT === d && (this._firstPT = d._next)), (d = d._next);
                    return !1;
                }),
                (h._mod = h._roundProps = function (a) {
                    for (var b, c = this._firstPT; c; ) (b = a[this._propName] || (null != c.n && a[c.n.split(this._propName + "_").join("")])), b && "function" == typeof b && (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)), (c = c._next);
                }),
                (G._onPluginEvent = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h; ) {
                            for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
                            (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h), (h._next = d) ? (d._prev = h) : (f = h), (h = g);
                        }
                        h = b._firstPT = e;
                    }
                    for (; h; ) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), (h = h._next);
                    return c;
                }),
                (ca.activate = function (a) {
                    for (var b = a.length; --b > -1; ) a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
                    return !0;
                }),
                (s.plugin = function (a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b,
                        c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                        g = t(
                            "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
                            function () {
                                ca.call(this, c, d), (this._overwriteProps = e || []);
                            },
                            a.global === !0
                        ),
                        h = (g.prototype = new ca(c));
                    (h.constructor = g), (g.API = a.API);
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return (g.version = a.version), ca.activate([g]), g;
                }),
                (f = a._gsQueue))
            ) {
                for (g = 0; g < f.length; g++) f[g]();
                for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h);
            }
            j = !1;
        }
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/* Scroll To   */

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var a = (_gsScope.document || {}).documentElement,
        b = _gsScope,
        c = function (c, d) {
            var e = "x" === d ? "Width" : "Height",
                f = "scroll" + e,
                g = "client" + e,
                h = document.body;
            return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : c[f] - c["offset" + e];
        },
        d = function (a) {
            return "string" == typeof a && (a = TweenLite.selector(a)), a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === b || (a.nodeType && a.style) ? a : null;
        },
        e = function (c, d) {
            var e = "scroll" + ("x" === d ? "Left" : "Top");
            return (
                c === b && (null != c.pageXOffset ? (e = "page" + d.toUpperCase() + "Offset") : (c = null != a[e] ? a : document.body)),
                function () {
                    return c[e];
                }
            );
        },
        f = function (c, f) {
            var g = d(c).getBoundingClientRect(),
                h = !f || f === b || f === document.body,
                i = (h ? a : f).getBoundingClientRect(),
                j = { x: g.left - i.left, y: g.top - i.top };
            return !h && f && ((j.x += e(f, "x")()), (j.y += e(f, "y")())), j;
        },
        g = function (a, b, d) {
            var e = typeof a;
            return isNaN(a) ? ("number" === e || ("string" === e && "=" === a.charAt(1)) ? a : "max" === a ? c(b, d) : Math.min(c(b, d), f(a, b)[d])) : parseFloat(a);
        },
        h = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            global: !0,
            version: "1.9.0",
            init: function (a, c, d) {
                return (
                    (this._wdw = a === b),
                    (this._target = a),
                    (this._tween = d),
                    "object" != typeof c ? ((c = { y: c }), "string" == typeof c.y && "max" !== c.y && "=" !== c.y.charAt(1) && (c.x = c.y)) : c.nodeType && (c = { y: c, x: c }),
                    (this.vars = c),
                    (this._autoKill = c.autoKill !== !1),
                    (this.getX = e(a, "x")),
                    (this.getY = e(a, "y")),
                    (this.x = this.xPrev = this.getX()),
                    (this.y = this.yPrev = this.getY()),
                    null != c.x ? (this._addTween(this, "x", this.x, g(c.x, a, "x") - (c.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
                    null != c.y ? (this._addTween(this, "y", this.y, g(c.y, a, "y") - (c.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
                    !0
                );
            },
            set: function (a) {
                this._super.setRatio.call(this, a);
                var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    f = e - this.yPrev,
                    g = d - this.xPrev,
                    i = h.autoKillThreshold;
                this.x < 0 && (this.x = 0),
                    this.y < 0 && (this.y = 0),
                    this._autoKill &&
                        (!this.skipX && (g > i || -i > g) && d < c(this._target, "x") && (this.skipX = !0),
                        !this.skipY && (f > i || -i > f) && e < c(this._target, "y") && (this.skipY = !0),
                        this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
                    this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
                    (this.xPrev = this.x),
                    (this.yPrev = this.y);
            },
        }),
        i = h.prototype;
    (h.max = c),
        (h.getOffset = f),
        (h.buildGetter = e),
        (h.autoKillThreshold = 7),
        (i._kill = function (a) {
            return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a);
        });
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (a) {
        "use strict";
        var b = function () {
            return (_gsScope.GreenSockGlobals || _gsScope)[a];
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), (module.exports = b())) : "function" == typeof define && define.amd && define(["TweenLite"], b);
    })("ScrollToPlugin");

/* Justified-Gallery  */

!(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : "object" == typeof module && module.exports
        ? (module.exports = function (t, i) {
              return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(i), i;
          })
        : e(jQuery);
})(function (g) {
    var r = function (t, i) {
        (this.settings = i),
            this.checkSettings(),
            (this.imgAnalyzerTimeout = null),
            (this.entries = null),
            (this.buildingRow = { entriesBuff: [], width: 0, height: 0, aspectRatio: 0 }),
            (this.lastFetchedEntry = null),
            (this.lastAnalyzedIndex = -1),
            (this.yield = { every: 2, flushed: 0 }),
            (this.border = 0 <= i.border ? i.border : i.margins),
            (this.maxRowHeight = this.retrieveMaxRowHeight()),
            (this.suffixRanges = this.retrieveSuffixRanges()),
            (this.offY = this.border),
            (this.rows = 0),
            (this.spinner = { phase: 0, timeSlot: 150, $el: g('<div class="spinner"><span></span><span></span><span></span></div>'), intervalId: null }),
            (this.scrollBarOn = !1),
            (this.checkWidthIntervalId = null),
            (this.galleryWidth = t.width()),
            (this.$gallery = t);
    };
    (r.prototype.getSuffix = function (t, i) {
        var e, s;
        for (e = i < t ? t : i, s = 0; s < this.suffixRanges.length; s++) if (e <= this.suffixRanges[s]) return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];
        return this.settings.sizeRangeSuffixes[this.suffixRanges[s - 1]];
    }),
        (r.prototype.removeSuffix = function (t, i) {
            return t.substring(0, t.length - i.length);
        }),
        (r.prototype.endsWith = function (t, i) {
            return -1 !== t.indexOf(i, t.length - i.length);
        }),
        (r.prototype.getUsedSuffix = function (t) {
            for (var i in this.settings.sizeRangeSuffixes)
                if (this.settings.sizeRangeSuffixes.hasOwnProperty(i)) {
                    if (0 === this.settings.sizeRangeSuffixes[i].length) continue;
                    if (this.endsWith(t, this.settings.sizeRangeSuffixes[i])) return this.settings.sizeRangeSuffixes[i];
                }
            return "";
        }),
        (r.prototype.newSrc = function (t, i, e, s) {
            var n;
            if (this.settings.thumbnailPath) n = this.settings.thumbnailPath(t, i, e, s);
            else {
                var r = t.match(this.settings.extension),
                    o = null !== r ? r[0] : "";
                (n = t.replace(this.settings.extension, "")), (n = this.removeSuffix(n, this.getUsedSuffix(n))), (n += this.getSuffix(i, e) + o);
            }
            return n;
        }),
        (r.prototype.showImg = function (t, i) {
            this.settings.cssAnimation ? (t.addClass("entry-visible"), i && i()) : (t.stop().fadeTo(this.settings.imagesAnimationDuration, 1, i), t.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration, 1, i));
        }),
        (r.prototype.extractImgSrcFromImage = function (t) {
            var i = void 0 !== t.data("safe-src") ? t.data("safe-src") : t.attr("src");
            return t.data("jg.originalSrc", i), i;
        }),
        (r.prototype.imgFromEntry = function (t) {
            var i = t.find(this.settings.imgSelector);
            return 0 === i.length ? null : i;
        }),
        (r.prototype.captionFromEntry = function (t) {
            var i = t.find("> .caption");
            return 0 === i.length ? null : i;
        }),
        (r.prototype.displayEntry = function (t, i, e, s, n, r) {
            t.width(s), t.height(r), t.css("top", e), t.css("left", i);
            var o = this.imgFromEntry(t);
            if (null !== o) {
                o.css("width", s), o.css("height", n), o.css("margin-left", -s / 2), o.css("margin-top", -n / 2);
                var a = o.attr("src"),
                    h = this.newSrc(a, s, n, o[0]);
                o.one("error", function () {
                    o.attr("src", o.data("jg.originalSrc"));
                });
                var l = function () {
                    a !== h && o.attr("src", h);
                };
                "skipped" === t.data("jg.loaded")
                    ? this.onImageEvent(
                          a,
                          g.proxy(function () {
                              this.showImg(t, l), t.data("jg.loaded", !0);
                          }, this)
                      )
                    : this.showImg(t, l);
            } else this.showImg(t);
            this.displayEntryCaption(t);
        }),
        (r.prototype.displayEntryCaption = function (t) {
            var i = this.imgFromEntry(t);
            if (null !== i && this.settings.captions) {
                var e = this.captionFromEntry(t);
                if (null === e) {
                    var s = i.attr("alt");
                    this.isValidCaption(s) || (s = t.attr("title")), this.isValidCaption(s) && ((e = g('<div class="caption">' + s + "</div>")), t.append(e), t.data("jg.createdCaption", !0));
                }
                null !== e && (this.settings.cssAnimation || e.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers(t));
            } else this.removeCaptionEventsHandlers(t);
        }),
        (r.prototype.isValidCaption = function (t) {
            return void 0 !== t && 0 < t.length;
        }),
        (r.prototype.onEntryMouseEnterForCaption = function (t) {
            var i = this.captionFromEntry(g(t.currentTarget));
            this.settings.cssAnimation ? i.addClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity);
        }),
        (r.prototype.onEntryMouseLeaveForCaption = function (t) {
            var i = this.captionFromEntry(g(t.currentTarget));
            this.settings.cssAnimation ? i.removeClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity);
        }),
        (r.prototype.addCaptionEventsHandlers = function (t) {
            var i = t.data("jg.captionMouseEvents");
            void 0 === i &&
                ((i = { mouseenter: g.proxy(this.onEntryMouseEnterForCaption, this), mouseleave: g.proxy(this.onEntryMouseLeaveForCaption, this) }),
                t.on("mouseenter", void 0, void 0, i.mouseenter),
                t.on("mouseleave", void 0, void 0, i.mouseleave),
                t.data("jg.captionMouseEvents", i));
        }),
        (r.prototype.removeCaptionEventsHandlers = function (t) {
            var i = t.data("jg.captionMouseEvents");
            void 0 !== i && (t.off("mouseenter", void 0, i.mouseenter), t.off("mouseleave", void 0, i.mouseleave), t.removeData("jg.captionMouseEvents"));
        }),
        (r.prototype.clearBuildingRow = function () {
            (this.buildingRow.entriesBuff = []), (this.buildingRow.aspectRatio = 0), (this.buildingRow.width = 0);
        }),
        (r.prototype.prepareBuildingRow = function (t) {
            var i,
                e,
                s,
                n,
                r,
                o = !0,
                a = 0,
                h = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                l = h / this.buildingRow.aspectRatio,
                g = this.settings.rowHeight,
                u = this.buildingRow.width / h > this.settings.justifyThreshold;
            if (t && "hide" === this.settings.lastRow && !u) {
                for (i = 0; i < this.buildingRow.entriesBuff.length; i++)
                    (e = this.buildingRow.entriesBuff[i]), this.settings.cssAnimation ? e.removeClass("entry-visible") : (e.stop().fadeTo(0, 0.1), e.find("> img, > a > img").fadeTo(0, 0));
                return -1;
            }
            for (
                t &&
                    !u &&
                    "justify" !== this.settings.lastRow &&
                    "hide" !== this.settings.lastRow &&
                    ((o = !1), 0 < this.rows && (o = ((g = (this.offY - this.border - this.settings.margins * this.rows) / this.rows) * this.buildingRow.aspectRatio) / h > this.settings.justifyThreshold)),
                    i = 0;
                i < this.buildingRow.entriesBuff.length;
                i++
            )
                (s = (e = this.buildingRow.entriesBuff[i]).data("jg.width") / e.data("jg.height")),
                    o ? ((n = i === this.buildingRow.entriesBuff.length - 1 ? h : l * s), (r = l)) : ((n = g * s), (r = g)),
                    (h -= Math.round(n)),
                    e.data("jg.jwidth", Math.round(n)),
                    e.data("jg.jheight", Math.ceil(r)),
                    (0 === i || r < a) && (a = r);
            return (this.buildingRow.height = a), o;
        }),
        (r.prototype.flushRow = function (t) {
            var i,
                e,
                s,
                n = this.settings,
                r = this.border;
            if (((e = this.prepareBuildingRow(t)), t && "hide" === n.lastRow && -1 === e)) this.clearBuildingRow();
            else {
                if ((this.maxRowHeight && this.maxRowHeight < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight), t && ("center" === n.lastRow || "right" === n.lastRow))) {
                    var o = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * n.margins;
                    for (s = 0; s < this.buildingRow.entriesBuff.length; s++) o -= (i = this.buildingRow.entriesBuff[s]).data("jg.jwidth");
                    "center" === n.lastRow ? (r += o / 2) : "right" === n.lastRow && (r += o);
                }
                var a = this.buildingRow.entriesBuff.length - 1;
                for (s = 0; s <= a; s++)
                    (i = this.buildingRow.entriesBuff[this.settings.rtl ? a - s : s]), this.displayEntry(i, r, this.offY, i.data("jg.jwidth"), i.data("jg.jheight"), this.buildingRow.height), (r += i.data("jg.jwidth") + n.margins);
                (this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border),
                    this.setGalleryTempHeight(this.galleryHeightToSet + this.getSpinnerHeight()),
                    (!t || (this.buildingRow.height <= n.rowHeight && e)) && ((this.offY += this.buildingRow.height + n.margins), (this.rows += 1), this.clearBuildingRow(), this.settings.triggerEvent.call(this, "jg.rowflush"));
            }
        });
    var i = 0;
    function e() {
        return g("body").height() > g(window).height();
    }
    (r.prototype.rememberGalleryHeight = function () {
        (i = this.$gallery.height()), this.$gallery.height(i);
    }),
        (r.prototype.setGalleryTempHeight = function (t) {
            (i = Math.max(t, i)), this.$gallery.height(i);
        }),
        (r.prototype.setGalleryFinalHeight = function (t) {
            (i = t), this.$gallery.height(t);
        }),
        (r.prototype.checkWidth = function () {
            this.checkWidthIntervalId = setInterval(
                g.proxy(function () {
                    if (this.$gallery.is(":visible")) {
                        var t = parseFloat(this.$gallery.width());
                        e() === this.scrollBarOn
                            ? Math.abs(t - this.galleryWidth) > this.settings.refreshSensitivity && ((this.galleryWidth = t), this.rewind(), this.rememberGalleryHeight(), this.startImgAnalyzer(!0))
                            : ((this.scrollBarOn = e()), (this.galleryWidth = t));
                    }
                }, this),
                this.settings.refreshTime
            );
        }),
        (r.prototype.isSpinnerActive = function () {
            return null !== this.spinner.intervalId;
        }),
        (r.prototype.getSpinnerHeight = function () {
            return this.spinner.$el.innerHeight();
        }),
        (r.prototype.stopLoadingSpinnerAnimation = function () {
            clearInterval(this.spinner.intervalId), (this.spinner.intervalId = null), this.setGalleryTempHeight(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach();
        }),
        (r.prototype.startLoadingSpinnerAnimation = function () {
            var t = this.spinner,
                i = t.$el.find("span");
            clearInterval(t.intervalId),
                this.$gallery.append(t.$el),
                this.setGalleryTempHeight(this.offY + this.buildingRow.height + this.getSpinnerHeight()),
                (t.intervalId = setInterval(function () {
                    t.phase < i.length ? i.eq(t.phase).fadeTo(t.timeSlot, 1) : i.eq(t.phase - i.length).fadeTo(t.timeSlot, 0), (t.phase = (t.phase + 1) % (2 * i.length));
                }, t.timeSlot));
        }),
        (r.prototype.rewind = function () {
            (this.lastFetchedEntry = null), (this.lastAnalyzedIndex = -1), (this.offY = this.border), (this.rows = 0), this.clearBuildingRow();
        }),
        (r.prototype.updateEntries = function (t) {
            var i;
            return (
                t && null != this.lastFetchedEntry ? (i = g(this.lastFetchedEntry).nextAll(this.settings.selector).toArray()) : ((this.entries = []), (i = this.$gallery.children(this.settings.selector).toArray())),
                0 < i.length &&
                    (g.isFunction(this.settings.sort) ? (i = this.sortArray(i)) : this.settings.randomize && (i = this.shuffleArray(i)),
                    (this.lastFetchedEntry = i[i.length - 1]),
                    this.settings.filter ? (i = this.filterArray(i)) : this.resetFilters(i)),
                (this.entries = this.entries.concat(i)),
                !0
            );
        }),
        (r.prototype.insertToGallery = function (t) {
            var i = this;
            g.each(t, function () {
                g(this).appendTo(i.$gallery);
            });
        }),
        (r.prototype.shuffleArray = function (t) {
            var i, e, s;
            for (i = t.length - 1; 0 < i; i--) (e = Math.floor(Math.random() * (i + 1))), (s = t[i]), (t[i] = t[e]), (t[e] = s);
            return this.insertToGallery(t), t;
        }),
        (r.prototype.sortArray = function (t) {
            return t.sort(this.settings.sort), this.insertToGallery(t), t;
        }),
        (r.prototype.resetFilters = function (t) {
            for (var i = 0; i < t.length; i++) g(t[i]).removeClass("jg-filtered");
        }),
        (r.prototype.filterArray = function (t) {
            var e = this.settings;
            if ("string" === g.type(e.filter))
                return t.filter(function (t) {
                    var i = g(t);
                    return i.is(e.filter) ? (i.removeClass("jg-filtered"), !0) : (i.addClass("jg-filtered").removeClass("jg-visible"), !1);
                });
            if (g.isFunction(e.filter)) {
                for (var i = t.filter(e.filter), s = 0; s < t.length; s++) -1 === i.indexOf(t[s]) ? g(t[s]).addClass("jg-filtered").removeClass("jg-visible") : g(t[s]).removeClass("jg-filtered");
                return i;
            }
        }),
        (r.prototype.destroy = function () {
            clearInterval(this.checkWidthIntervalId),
                g.each(
                    this.entries,
                    g.proxy(function (t, i) {
                        var e = g(i);
                        e.css("width", ""), e.css("height", ""), e.css("top", ""), e.css("left", ""), e.data("jg.loaded", void 0), e.removeClass("jg-entry");
                        var s = this.imgFromEntry(e);
                        s.css("width", ""), s.css("height", ""), s.css("margin-left", ""), s.css("margin-top", ""), s.attr("src", s.data("jg.originalSrc")), s.data("jg.originalSrc", void 0), this.removeCaptionEventsHandlers(e);
                        var n = this.captionFromEntry(e);
                        e.data("jg.createdCaption") ? (e.data("jg.createdCaption", void 0), null !== n && n.remove()) : null !== n && n.fadeTo(0, 1);
                    }, this)
                ),
                this.$gallery.css("height", ""),
                this.$gallery.removeClass("justified-gallery"),
                this.$gallery.data("jg.controller", void 0);
        }),
        (r.prototype.analyzeImages = function (t) {
            for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
                var e = g(this.entries[i]);
                if (!0 === e.data("jg.loaded") || "skipped" === e.data("jg.loaded")) {
                    var s = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                        n = e.data("jg.width") / e.data("jg.height");
                    if (s / (this.buildingRow.aspectRatio + n) < this.settings.rowHeight && (this.flushRow(!1), ++this.yield.flushed >= this.yield.every)) return void this.startImgAnalyzer(t);
                    this.buildingRow.entriesBuff.push(e), (this.buildingRow.aspectRatio += n), (this.buildingRow.width += n * this.settings.rowHeight), (this.lastAnalyzedIndex = i);
                } else if ("error" !== e.data("jg.loaded")) return;
            }
            0 < this.buildingRow.entriesBuff.length && this.flushRow(!0),
                this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(),
                this.stopImgAnalyzerStarter(),
                this.settings.triggerEvent.call(this, t ? "jg.resize" : "jg.complete"),
                this.setGalleryFinalHeight(this.galleryHeightToSet);
        }),
        (r.prototype.stopImgAnalyzerStarter = function () {
            (this.yield.flushed = 0), null !== this.imgAnalyzerTimeout && (clearTimeout(this.imgAnalyzerTimeout), (this.imgAnalyzerTimeout = null));
        }),
        (r.prototype.startImgAnalyzer = function (t) {
            var i = this;
            this.stopImgAnalyzerStarter(),
                (this.imgAnalyzerTimeout = setTimeout(function () {
                    i.analyzeImages(t);
                }, 0.001));
        }),
        (r.prototype.onImageEvent = function (t, i, e) {
            if (i || e) {
                var s = new Image(),
                    n = g(s);
                i &&
                    n.one("load", function () {
                        n.off("load error"), i(s);
                    }),
                    e &&
                        n.one("error", function () {
                            n.off("load error"), e(s);
                        }),
                    (s.src = t);
            }
        }),
        (r.prototype.init = function () {
            var a = !1,
                h = !1,
                l = this;
            g.each(this.entries, function (t, i) {
                var e = g(i),
                    s = l.imgFromEntry(e);
                if ((e.addClass("jg-entry"), !0 !== e.data("jg.loaded") && "skipped" !== e.data("jg.loaded")))
                    if ((null !== l.settings.rel && e.attr("rel", l.settings.rel), null !== l.settings.target && e.attr("target", l.settings.target), null !== s)) {
                        var n = l.extractImgSrcFromImage(s);
                        if ((s.attr("src", n), !1 === l.settings.waitThumbnailsLoad)) {
                            var r = parseFloat(s.prop("width")),
                                o = parseFloat(s.prop("height"));
                            if (!isNaN(r) && !isNaN(o)) return e.data("jg.width", r), e.data("jg.height", o), e.data("jg.loaded", "skipped"), (h = !0), l.startImgAnalyzer(!1), !0;
                        }
                        e.data("jg.loaded", !1),
                            (a = !0),
                            l.isSpinnerActive() || l.startLoadingSpinnerAnimation(),
                            l.onImageEvent(
                                n,
                                function (t) {
                                    e.data("jg.width", t.width), e.data("jg.height", t.height), e.data("jg.loaded", !0), l.startImgAnalyzer(!1);
                                },
                                function () {
                                    e.data("jg.loaded", "error"), l.startImgAnalyzer(!1);
                                }
                            );
                    } else e.data("jg.loaded", !0), e.data("jg.width", e.width() | parseFloat(e.css("width")) | 1), e.data("jg.height", e.height() | parseFloat(e.css("height")) | 1);
            }),
                a || h || this.startImgAnalyzer(!1),
                this.checkWidth();
        }),
        (r.prototype.checkOrConvertNumber = function (t, i) {
            if (("string" === g.type(t[i]) && (t[i] = parseFloat(t[i])), "number" !== g.type(t[i]))) throw i + " must be a number";
            if (isNaN(t[i])) throw "invalid number for " + i;
        }),
        (r.prototype.checkSizeRangesSuffixes = function () {
            if ("object" !== g.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
            var t = [];
            for (var i in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(i) && t.push(i);
            for (var e = { 0: "" }, s = 0; s < t.length; s++)
                if ("string" === g.type(t[s]))
                    try {
                        e[parseInt(t[s].replace(/^[a-z]+/, ""), 10)] = this.settings.sizeRangeSuffixes[t[s]];
                    } catch (t) {
                        throw "sizeRangeSuffixes keys must contains correct numbers (" + t + ")";
                    }
                else e[t[s]] = this.settings.sizeRangeSuffixes[t[s]];
            this.settings.sizeRangeSuffixes = e;
        }),
        (r.prototype.retrieveMaxRowHeight = function () {
            var t = null,
                i = this.settings.rowHeight;
            if ("string" === g.type(this.settings.maxRowHeight)) t = this.settings.maxRowHeight.match(/^[0-9]+%$/) ? (i * parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])) / 100 : parseFloat(this.settings.maxRowHeight);
            else {
                if ("number" !== g.type(this.settings.maxRowHeight)) {
                    if (!1 === this.settings.maxRowHeight || null == this.settings.maxRowHeight) return null;
                    throw "maxRowHeight must be a number or a percentage";
                }
                t = this.settings.maxRowHeight;
            }
            if (isNaN(t)) throw "invalid number for maxRowHeight";
            return t < i && (t = i), t;
        }),
        (r.prototype.checkSettings = function () {
            this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border");
            var t = ["justify", "nojustify", "left", "center", "right", "hide"];
            if (-1 === t.indexOf(this.settings.lastRow)) throw "lastRow must be one of: " + t.join(", ");
            if ((this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || 1 < this.settings.justifyThreshold)) throw "justifyThreshold must be in the interval [0,1]";
            if ("boolean" !== g.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean";
            if ("boolean" !== g.type(this.settings.captions)) throw "captions must be a boolean";
            if (
                (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"),
                this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"),
                this.settings.captionSettings.visibleOpacity < 0 || 1 < this.settings.captionSettings.visibleOpacity)
            )
                throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
            if ((this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || 1 < this.settings.captionSettings.nonVisibleOpacity))
                throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
            if (
                (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"),
                this.checkOrConvertNumber(this.settings, "refreshTime"),
                this.checkOrConvertNumber(this.settings, "refreshSensitivity"),
                "boolean" !== g.type(this.settings.randomize))
            )
                throw "randomize must be a boolean";
            if ("string" !== g.type(this.settings.selector)) throw "selector must be a string";
            if (!1 !== this.settings.sort && !g.isFunction(this.settings.sort)) throw "sort must be false or a comparison function";
            if (!1 !== this.settings.filter && !g.isFunction(this.settings.filter) && "string" !== g.type(this.settings.filter)) throw "filter must be false, a string or a filter function";
        }),
        (r.prototype.retrieveSuffixRanges = function () {
            var t = [];
            for (var i in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(i) && t.push(parseInt(i, 10));
            return (
                t.sort(function (t, i) {
                    return i < t ? 1 : t < i ? -1 : 0;
                }),
                t
            );
        }),
        (r.prototype.updateSettings = function (t) {
            (this.settings = g.extend({}, this.settings, t)),
                this.checkSettings(),
                (this.border = 0 <= this.settings.border ? this.settings.border : this.settings.margins),
                (this.maxRowHeight = this.retrieveMaxRowHeight()),
                (this.suffixRanges = this.retrieveSuffixRanges());
        }),
        (r.prototype.defaults = {
            sizeRangeSuffixes: {},
            thumbnailPath: void 0,
            rowHeight: 120,
            maxRowHeight: !1,
            margins: 1,
            border: -1,
            lastRow: "nojustify",
            justifyThreshold: 0.9,
            waitThumbnailsLoad: !0,
            captions: !0,
            cssAnimation: !0,
            imagesAnimationDuration: 500,
            captionSettings: { animationDuration: 500, visibleOpacity: 0.7, nonVisibleOpacity: 0 },
            rel: null,
            target: null,
            extension: /\.[^.\\/]+$/,
            refreshTime: 200,
            refreshSensitivity: 0,
            randomize: !1,
            rtl: !1,
            sort: !1,
            filter: !1,
            selector: "a, div:not(.spinner)",
            imgSelector: "> img, > a > img",
            triggerEvent: function (t) {
                this.$gallery.trigger(t);
            },
        }),
        (g.fn.justifiedGallery = function (n) {
            return this.each(function (t, i) {
                var e = g(i);
                e.addClass("justified-gallery");
                var s = e.data("jg.controller");
                if (void 0 === s) {
                    if (null != n && "object" !== g.type(n)) {
                        if ("destroy" === n) return;
                        throw "The argument must be an object";
                    }
                    (s = new r(e, g.extend({}, r.prototype.defaults, n))), e.data("jg.controller", s);
                } else if ("norewind" === n);
                else {
                    if ("destroy" === n) return void s.destroy();
                    s.updateSettings(n), s.rewind();
                }
                s.updateEntries("norewind" === n) && s.init();
            });
        });
});

/* Ajax Load  */

function AjaxLoad() {
    var e = { x: 0, y: 0 },
        t = { x: 0, y: 0 },
        n = 0.25,
        o = !1,
        a = document.getElementById("ball"),
        i = document.getElementById("ball-loader");
   
        $(".parallax-wrap").mouseenter(function (e) {
            TweenMax.to(this, 0.3, { scale: 2 }),
                TweenMax.to(a, 0.3, { scale: 2, borderWidth: "1px", opacity: 0.2 }),
                TweenMax.to(i, 0.3, { scale: 2, borderWidth: "1px", top: 1, left: 1 }),
                TweenMax.to($(this).children(), 0.3, { scale: 0.5 }),
                (o = !0);
        }),
        $(".parallax-wrap").mouseleave(function (e) {
            TweenMax.to(this, 0.3, { scale: 1 }),
                TweenMax.to(a, 0.3, { scale: 1, borderWidth: "2px", opacity: 1 }),
                TweenMax.to(i, 0.3, { scale: 1, borderWidth: "2px", top: 0, left: 0 }),
                TweenMax.to($(this).children(), 0.3, { scale: 1, x: 0, y: 0 }),
                (o = !1);
        }),
        $(".parallax-wrap").mousemove(function (e) {
            var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
            (n = e),
                (o = 2),
                (i = this.getBoundingClientRect()),
                (l = n.pageX - i.left),
                (r = n.pageY - i.top),
                (d = window.pageYOffset || document.documentElement.scrollTop),
                (t.x = i.left + i.width / 2 + (l - i.width / 2) / o),
                (t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o),
                TweenMax.to(a, 0.3, { x: t.x, y: t.y }),
                (s = e),
                (p = c = this),
                (h = c.querySelector(".parallax-element")),
                (x = 20),
                (u = p.getBoundingClientRect()),
                (w = s.pageX - u.left),
                (f = s.pageY - u.top),
                (m = window.pageYOffset || document.documentElement.scrollTop),
                TweenMax.to(h, 0.3, { x: ((w - u.width / 2) / u.width) * x, y: ((f - u.height / 2 - m) / u.height) * x, ease: Power2.easeOut });
        }),
        $(".hide-ball").mouseenter(function (e) {
            TweenMax.to("#ball", 0.2, { borderWidth: "1px", scale: 2, opacity: 0 });
        }),
        $(".hide-ball").mouseleave(function (e) {
            TweenMax.to("#ball", 0.3, { borderWidth: "2px", scale: 1, opacity: 1 });
        }),
        $(".link").mouseenter(function (e) {
            TweenMax.to("#ball", 0.2, { borderWidth: "0px", scale: 3, backgroundColor: "rgba(127, 127, 127, 1)", opacity: 0.15 });
        }),
        $(".link").mouseleave(function (e) {
            TweenMax.to("#ball", 0.3, { borderWidth: "2px", scale: 1, backgroundColor: "rgba(127, 127, 127, 0)", opacity: 1 });
        })
}

/* FitThumbScreen  */

function FitThumbScreen() {
    $("body")
        .find(".thumb-container")
        .each(function () {
            $("#clone-image").append($(this));
        });
    for (var l = document.documentElement, c = document.body, e = document.querySelectorAll(".thumb-page"), t = document.querySelectorAll(".item-image"), o = 0; o < t.length; o++) i(t[o], e[o]);
    function i(e, t) {
        e.addEventListener("click", function () {
            console.log("me fk off")
            TweenMax.to("#ball", 0.2, { borderWidth: "2px", scale: 1, x: -15, y: -15 }),
                TweenMax.to("#ball-loader", 0.2, { borderWidth: "2px", top: 0, left: 0 }),
                $("#ball").removeClass("with-icon").removeClass("hold"),
                $("#ball i").remove(),
                $("body").addClass("show-loader"),
                setTimeout(function () {
                    $("body").addClass("load-project-thumb");
                }, 160),
                $(this).parents(".item").addClass("above"),
                TweenMax.set(".item.above .item-content", { opacity: 1 }),
                setTimeout(function () {
                    TweenMax.to("#hero, .item-content, .item .item-caption, #page-nav, footer", 0.4, { opacity: 0, delay: 0.1, ease: Power2.easeOut });
                }, 0),
                setTimeout(function () {
                    n(e, t);
                }, 150),
                setTimeout(function () {
                    $(".above").find("a").trigger("click");
                }, 600);
        }),
            t.addEventListener("click", function () {
                $(".item").removeClass("above"), $(".item-image").removeClass("above"), TweenMax.to("#hero, .item-content, .item .item-caption, #page-nav, footer", 0.3, { opacity: 1, delay: 0.6, ease: Power2.easeOut }), n(t, e);
            });
    }
    function n(e, t) {
        var o = e.cloneNode(!0),
            i = d(e),
            n = d(t);
        TweenLite.set([e, t], { visibility: "hidden" }), TweenLite.set(o, { position: "absolute", margin: 0 }), c.appendChild(o);
        var a = {
            x: n.left - i.left,
            y: n.top - i.top,
            width: n.width,
            height: n.height,
            autoRound: !1,
            ease: Power4.easeInOut,
            onComplete: function () {
                TweenLite.set(t, { visibility: "visible" }), c.removeChild(o);
            },
        };
        TweenLite.set(o, i), TweenLite.to(o, 1.2, a);
    }
    function d(e) {
        var t = e.getBoundingClientRect(),
            o = window.pageYOffset || l.scrollTop || c.scrollTop || 0,
            i = window.pageXOffset || l.scrollLeft || c.scrollLeft || 0,
            n = l.clientTop || c.clientTop || 0,
            a = l.clientLeft || c.clientLeft || 0;
        return { top: Math.round(t.top + o - n), left: Math.round(t.left + i - a), height: t.height, width: t.width };
    }
}

function FitSlideScreen() {
    $("body")
        .find(".thumb-container")
        .each(function () {
            $("#clone-image").append($(this));
        });
    for (var a = document.documentElement, s = document.body, e = document.querySelectorAll(".thumb-page"), t = document.querySelectorAll(".section-image"), i = 0; i < t.length; i++) o(t[i], e[i]);
    function o(e, t) {
        e.addEventListener("click", function () {
            TweenMax.to("#ball", 0.2, { borderWidth: "2px", scale: 1, x: -15, y: -15 }),
                TweenMax.to("#ball-loader", 0.2, { borderWidth: "2px", top: 0, left: 0 }),
                $("#ball").removeClass("with-icon").removeClass("hold"),
                $("#ball i").remove(),
                $("body").addClass("show-loader"),
                setTimeout(function () {
                    $("body").addClass("load-project-thumb");
                }, 160),
                $(this).parents(".swiper-slide").addClass("above"),
                TweenMax.set(".swiper-slide.above .section-image", { opacity: 1 }),
                TweenMax.to(".swiper-slide .section-image, .swiper-slide .slide-caption, footer", 0.4, { opacity: 0, delay: 0.2, ease: Power2.easeOut }),
                setTimeout(function () {
                    n(e, t);
                }, 150),
                setTimeout(function () {
                    $(".above").find("a").trigger("click");
                }, 600);
        }),
            t.addEventListener("click", function () {
                $(".swiper-slide").removeClass("above"), TweenMax.to(".swiper-slide .section-image, .swiper-slide .slide-caption, footer", 0.3, { opacity: 1, delay: 0.6, ease: Power2.easeOut }), n(t, e);
            });
    }
    function n(e, t) {
        var i = e.cloneNode(!0),
            o = d(e),
            n = d(t);
        TweenLite.set([e, t], { visibility: "hidden" }), TweenLite.set(i, { position: "absolute", margin: 0 }), s.appendChild(i);
        var l = {
            x: n.left - o.left,
            y: n.top - o.top,
            width: n.width,
            height: n.height,
            autoRound: !1,
            ease: Power4.easeInOut,
            onComplete: function () {
                TweenLite.set(t, { visibility: "visible" }), s.removeChild(i);
            },
        };
        TweenLite.set(i, o), TweenLite.to(i, 1.2, l);
    }
    function d(e) {
        var t = e.getBoundingClientRect(),
            i = window.pageYOffset || a.scrollTop || s.scrollTop || 0,
            o = window.pageXOffset || a.scrollLeft || s.scrollLeft || 0,
            n = a.clientTop || s.clientTop || 0,
            l = a.clientLeft || s.clientLeft || 0;
        return { top: Math.round(t.top + i - n), left: Math.round(t.left + o - l), height: t.height, width: t.width };
    }
}

/* Smooth Scrollbar   */
!(function (t, n) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = n()) : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? (exports.Scrollbar = n()) : (t.Scrollbar = n());
})(this, function () {
    return (function (t) {
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        var e = {};
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
            }),
            (n.p = ""),
            n((n.s = 56))
        );
    })([
        function (t, n, e) {
            var r = e(39)("wks"),
                o = e(16),
                i = e(2).Symbol,
                u = "function" == typeof i;
            (t.exports = function (t) {
                return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
            }).store = r;
        },
        function (t, n) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
            };
        },
        function (t, n) {
            var e = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
            "number" == typeof __g && (__g = e);
        },
        function (t, n) {
            var e = {}.hasOwnProperty;
            t.exports = function (t, n) {
                return e.call(t, n);
            };
        },
        function (t, n) {
            var e = (t.exports = { version: "2.5.1" });
            "number" == typeof __e && (__e = e);
        },
        function (t, n, e) {
            var r = e(2),
                o = e(4),
                i = e(11),
                u = e(6),
                c = e(10),
                s = function (t, n, e) {
                    var a,
                        f,
                        l,
                        p,
                        h = t & s.F,
                        d = t & s.G,
                        v = t & s.S,
                        y = t & s.P,
                        m = t & s.B,
                        g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                        b = d ? o : o[n] || (o[n] = {}),
                        x = b.prototype || (b.prototype = {});
                    d && (e = n);
                    for (a in e)
                        (f = !h && g && void 0 !== g[a]), (l = (f ? g : e)[a]), (p = m && f ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l), g && u(g, a, l, t & s.U), b[a] != l && i(b, a, p), y && x[a] != l && (x[a] = l);
                };
            (r.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (t.exports = s);
        },
        function (t, n, e) {
            var r = e(2),
                o = e(11),
                i = e(3),
                u = e(16)("src"),
                c = Function.toString,
                s = ("" + c).split("toString");
            (e(4).inspectSource = function (t) {
                return c.call(t);
            }),
                (t.exports = function (t, n, e, c) {
                    var a = "function" == typeof e;
                    a && (i(e, "name") || o(e, "name", n)), t[n] !== e && (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))), t === r ? (t[n] = e) : c ? (t[n] ? (t[n] = e) : o(t, n, e)) : (delete t[n], o(t, n, e)));
                })(Function.prototype, "toString", function () {
                    return ("function" == typeof this && this[u]) || c.call(this);
                });
        },
        function (t, n, e) {
            var r = e(8),
                o = e(40),
                i = e(42),
                u = Object.defineProperty;
            n.f = e(9)
                ? Object.defineProperty
                : function (t, n, e) {
                      if ((r(t), (n = i(n, !0)), r(e), o))
                          try {
                              return u(t, n, e);
                          } catch (t) {}
                      if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
                      return "value" in e && (t[n] = e.value), t;
                  };
        },
        function (t, n, e) {
            var r = e(1);
            t.exports = function (t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t;
            };
        },
        function (t, n, e) {
            t.exports = !e(12)(function () {
                return (
                    7 !=
                    Object.defineProperty({}, "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
        },
        function (t, n, e) {
            var r = e(43);
            t.exports = function (t, n, e) {
                if ((r(t), void 0 === n)) return t;
                switch (e) {
                    case 1:
                        return function (e) {
                            return t.call(n, e);
                        };
                    case 2:
                        return function (e, r) {
                            return t.call(n, e, r);
                        };
                    case 3:
                        return function (e, r, o) {
                            return t.call(n, e, r, o);
                        };
                }
                return function () {
                    return t.apply(n, arguments);
                };
            };
        },
        function (t, n, e) {
            var r = e(7),
                o = e(17);
            t.exports = e(9)
                ? function (t, n, e) {
                      return r.f(t, n, o(1, e));
                  }
                : function (t, n, e) {
                      return (t[n] = e), t;
                  };
        },
        function (t, n) {
            t.exports = function (t) {
                try {
                    return !!t();
                } catch (t) {
                    return !0;
                }
            };
        },
        function (t, n) {
            t.exports = {};
        },
        function (t, n, e) {
            var r = e(10),
                o = e(48),
                i = e(49),
                u = e(8),
                c = e(19),
                s = e(50),
                a = {},
                f = {},
                n = (t.exports = function (t, n, e, l, p) {
                    var h,
                        d,
                        v,
                        y,
                        m = p
                            ? function () {
                                  return t;
                              }
                            : s(t),
                        g = r(e, l, n ? 2 : 1),
                        b = 0;
                    if ("function" != typeof m) throw TypeError(t + " is not iterable!");
                    if (i(m)) {
                        for (h = c(t.length); h > b; b++) if ((y = n ? g(u((d = t[b]))[0], d[1]) : g(t[b])) === a || y === f) return y;
                    } else for (v = m.call(t); !(d = v.next()).done; ) if ((y = o(v, g, d.value, n)) === a || y === f) return y;
                });
            (n.BREAK = a), (n.RETURN = f);
        },
        function (t, n, e) {
            var r = e(1);
            t.exports = function (t, n) {
                if (!r(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
                return t;
            };
        },
        function (t, n) {
            var e = 0,
                r = Math.random();
            t.exports = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36));
            };
        },
        function (t, n) {
            t.exports = function (t, n) {
                return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
            };
        },
        function (t, n, e) {
            var r = e(30),
                o = e(27);
            t.exports = function (t) {
                return r(o(t));
            };
        },
        function (t, n, e) {
            var r = e(26),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
        },
        function (t, n, e) {
            var r = e(27);
            t.exports = function (t) {
                return Object(r(t));
            };
        },
        function (t, n, e) {
            var r = e(16)("meta"),
                o = e(1),
                i = e(3),
                u = e(7).f,
                c = 0,
                s =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                a = !e(12)(function () {
                    return s(Object.preventExtensions({}));
                }),
                f = function (t) {
                    u(t, r, { value: { i: "O" + ++c, w: {} } });
                },
                l = function (t, n) {
                    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, r)) {
                        if (!s(t)) return "F";
                        if (!n) return "E";
                        f(t);
                    }
                    return t[r].i;
                },
                p = function (t, n) {
                    if (!i(t, r)) {
                        if (!s(t)) return !0;
                        if (!n) return !1;
                        f(t);
                    }
                    return t[r].w;
                },
                h = function (t) {
                    return a && d.NEED && s(t) && !i(t, r) && f(t), t;
                },
                d = (t.exports = { KEY: r, NEED: !1, fastKey: l, getWeak: p, onFreeze: h });
        },
        function (t, n, e) {
            "use strict";
            var r = e(23),
                o = {};
            (o[e(0)("toStringTag")] = "z"),
                o + "" != "[object z]" &&
                    e(6)(
                        Object.prototype,
                        "toString",
                        function () {
                            return "[object " + r(this) + "]";
                        },
                        !0
                    );
        },
        function (t, n, e) {
            var r = e(24),
                o = e(0)("toStringTag"),
                i =
                    "Arguments" ==
                    r(
                        (function () {
                            return arguments;
                        })()
                    ),
                u = function (t, n) {
                    try {
                        return t[n];
                    } catch (t) {}
                };
            t.exports = function (t) {
                var n, e, c;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = u((n = Object(t)), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c;
            };
        },
        function (t, n) {
            var e = {}.toString;
            t.exports = function (t) {
                return e.call(t).slice(8, -1);
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(59)(!0);
            e(28)(
                String,
                "String",
                function (t) {
                    (this._t = String(t)), (this._i = 0);
                },
                function () {
                    var t,
                        n = this._t,
                        e = this._i;
                    return e >= n.length ? { value: void 0, done: !0 } : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
                }
            );
        },
        function (t, n) {
            var e = Math.ceil,
                r = Math.floor;
            t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
            };
        },
        function (t, n) {
            t.exports = function (t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t;
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(60),
                o = e(5),
                i = e(6),
                u = e(11),
                c = e(3),
                s = e(13),
                a = e(61),
                f = e(32),
                l = e(67),
                p = e(0)("iterator"),
                h = !([].keys && "next" in [].keys()),
                d = function () {
                    return this;
                };
            t.exports = function (t, n, e, v, y, m, g) {
                a(e, n, v);
                var b,
                    x,
                    _,
                    w = function (t) {
                        if (!h && t in T) return T[t];
                        switch (t) {
                            case "keys":
                            case "values":
                                return function () {
                                    return new e(this, t);
                                };
                        }
                        return function () {
                            return new e(this, t);
                        };
                    },
                    E = n + " Iterator",
                    S = "values" == y,
                    O = !1,
                    T = t.prototype,
                    M = T[p] || T["@@iterator"] || (y && T[y]),
                    A = M || w(y),
                    P = y ? (S ? w("entries") : A) : void 0,
                    j = "Array" == n ? T.entries || M : M;
                if (
                    (j && (_ = l(j.call(new t()))) !== Object.prototype && _.next && (f(_, E, !0), r || c(_, p) || u(_, p, d)),
                    S &&
                        M &&
                        "values" !== M.name &&
                        ((O = !0),
                        (A = function () {
                            return M.call(this);
                        })),
                    (r && !g) || (!h && !O && T[p]) || u(T, p, A),
                    (s[n] = A),
                    (s[E] = d),
                    y)
                )
                    if (((b = { values: S ? A : w("values"), keys: m ? A : w("keys"), entries: P }), g)) for (x in b) x in T || i(T, x, b[x]);
                    else o(o.P + o.F * (h || O), n, b);
                return b;
            };
        },
        function (t, n, e) {
            var r = e(63),
                o = e(45);
            t.exports =
                Object.keys ||
                function (t) {
                    return r(t, o);
                };
        },
        function (t, n, e) {
            var r = e(24);
            t.exports = Object("z").propertyIsEnumerable(0)
                ? Object
                : function (t) {
                      return "String" == r(t) ? t.split("") : Object(t);
                  };
        },
        function (t, n, e) {
            var r = e(39)("keys"),
                o = e(16);
            t.exports = function (t) {
                return r[t] || (r[t] = o(t));
            };
        },
        function (t, n, e) {
            var r = e(7).f,
                o = e(3),
                i = e(0)("toStringTag");
            t.exports = function (t, n, e) {
                t && !o((t = e ? t : t.prototype), i) && r(t, i, { configurable: !0, value: n });
            };
        },
        function (t, n, e) {
            for (
                var r = e(68),
                    o = e(29),
                    i = e(6),
                    u = e(2),
                    c = e(11),
                    s = e(13),
                    a = e(0),
                    f = a("iterator"),
                    l = a("toStringTag"),
                    p = s.Array,
                    h = {
                        CSSRuleList: !0,
                        CSSStyleDeclaration: !1,
                        CSSValueList: !1,
                        ClientRectList: !1,
                        DOMRectList: !1,
                        DOMStringList: !1,
                        DOMTokenList: !0,
                        DataTransferItemList: !1,
                        FileList: !1,
                        HTMLAllCollection: !1,
                        HTMLCollection: !1,
                        HTMLFormElement: !1,
                        HTMLSelectElement: !1,
                        MediaList: !0,
                        MimeTypeArray: !1,
                        NamedNodeMap: !1,
                        NodeList: !0,
                        PaintRequestList: !1,
                        Plugin: !1,
                        PluginArray: !1,
                        SVGLengthList: !1,
                        SVGNumberList: !1,
                        SVGPathSegList: !1,
                        SVGPointList: !1,
                        SVGStringList: !1,
                        SVGTransformList: !1,
                        SourceBufferList: !1,
                        StyleSheetList: !0,
                        TextTrackCueList: !1,
                        TextTrackList: !1,
                        TouchList: !1,
                    },
                    d = o(h),
                    v = 0;
                v < d.length;
                v++
            ) {
                var y,
                    m = d[v],
                    g = h[m],
                    b = u[m],
                    x = b && b.prototype;
                if (x && (x[f] || c(x, f, p), x[l] || c(x, l, m), (s[m] = p), g)) for (y in r) x[y] || i(x, y, r[y], !0);
            }
        },
        function (t, n, e) {
            var r = e(6);
            t.exports = function (t, n, e) {
                for (var o in n) r(t, o, n[o], e);
                return t;
            };
        },
        function (t, n) {
            t.exports = function (t, n, e, r) {
                if (!(t instanceof n) || (void 0 !== r && r in t)) throw TypeError(e + ": incorrect invocation!");
                return t;
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(2),
                o = e(5),
                i = e(6),
                u = e(34),
                c = e(21),
                s = e(14),
                a = e(35),
                f = e(1),
                l = e(12),
                p = e(51),
                h = e(32),
                d = e(72);
            t.exports = function (t, n, e, v, y, m) {
                var g = r[t],
                    b = g,
                    x = y ? "set" : "add",
                    _ = b && b.prototype,
                    w = {},
                    E = function (t) {
                        var n = _[t];
                        i(
                            _,
                            t,
                            "delete" == t
                                ? function (t) {
                                      return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                                  }
                                : "has" == t
                                ? function (t) {
                                      return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                                  }
                                : "get" == t
                                ? function (t) {
                                      return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                                  }
                                : "add" == t
                                ? function (t) {
                                      return n.call(this, 0 === t ? 0 : t), this;
                                  }
                                : function (t, e) {
                                      return n.call(this, 0 === t ? 0 : t, e), this;
                                  }
                        );
                    };
                if (
                    "function" == typeof b &&
                    (m ||
                        (_.forEach &&
                            !l(function () {
                                new b().entries().next();
                            })))
                ) {
                    var S = new b(),
                        O = S[x](m ? {} : -0, 1) != S,
                        T = l(function () {
                            S.has(1);
                        }),
                        M = p(function (t) {
                            new b(t);
                        }),
                        A =
                            !m &&
                            l(function () {
                                for (var t = new b(), n = 5; n--; ) t[x](n, n);
                                return !t.has(-0);
                            });
                    M ||
                        ((b = n(function (n, e) {
                            a(n, b, t);
                            var r = d(new g(), n, b);
                            return void 0 != e && s(e, y, r[x], r), r;
                        })),
                        (b.prototype = _),
                        (_.constructor = b)),
                        (T || A) && (E("delete"), E("has"), y && E("get")),
                        (A || O) && E(x),
                        m && _.clear && delete _.clear;
                } else (b = v.getConstructor(n, t, y, x)), u(b.prototype, e), (c.NEED = !0);
                return h(b, t), (w[t] = b), o(o.G + o.W + o.F * (b != g), w), m || v.setStrong(b, t, y), b;
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(5);
            t.exports = function (t) {
                r(r.S, t, {
                    of: function () {
                        for (var t = arguments.length, n = Array(t); t--; ) n[t] = arguments[t];
                        return new this(n);
                    },
                });
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(5),
                o = e(43),
                i = e(10),
                u = e(14);
            t.exports = function (t) {
                r(r.S, t, {
                    from: function (t) {
                        var n,
                            e,
                            r,
                            c,
                            s = arguments[1];
                        return (
                            o(this),
                            (n = void 0 !== s),
                            n && o(s),
                            void 0 == t
                                ? new this()
                                : ((e = []),
                                  n
                                      ? ((r = 0),
                                        (c = i(s, arguments[2], 2)),
                                        u(t, !1, function (t) {
                                            e.push(c(t, r++));
                                        }))
                                      : u(t, !1, e.push, e),
                                  new this(e))
                        );
                    },
                });
            };
        },
        function (t, n, e) {
            var r = e(2),
                o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            t.exports = function (t) {
                return o[t] || (o[t] = {});
            };
        },
        function (t, n, e) {
            t.exports =
                !e(9) &&
                !e(12)(function () {
                    return (
                        7 !=
                        Object.defineProperty(e(41)("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (t, n, e) {
            var r = e(1),
                o = e(2).document,
                i = r(o) && r(o.createElement);
            t.exports = function (t) {
                return i ? o.createElement(t) : {};
            };
        },
        function (t, n, e) {
            var r = e(1);
            t.exports = function (t, n) {
                if (!r(t)) return t;
                var e, o;
                if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t)))) return o;
                if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t)))) return o;
                if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t)))) return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (t, n) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t;
            };
        },
        function (t, n, e) {
            var r = e(8),
                o = e(62),
                i = e(45),
                u = e(31)("IE_PROTO"),
                c = function () {},
                s = function () {
                    var t,
                        n = e(41)("iframe"),
                        r = i.length;
                    for (n.style.display = "none", e(66).appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write("<script>document.F=Object</script>"), t.close(), s = t.F; r--; ) delete s.prototype[i[r]];
                    return s();
                };
            t.exports =
                Object.create ||
                function (t, n) {
                    var e;
                    return null !== t ? ((c.prototype = r(t)), (e = new c()), (c.prototype = null), (e[u] = t)) : (e = s()), void 0 === n ? e : o(e, n);
                };
        },
        function (t, n) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        function (t, n) {
            t.exports = function (t, n) {
                return { value: n, done: !!t };
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(7).f,
                o = e(44),
                i = e(34),
                u = e(10),
                c = e(35),
                s = e(14),
                a = e(28),
                f = e(46),
                l = e(71),
                p = e(9),
                h = e(21).fastKey,
                d = e(15),
                v = p ? "_s" : "size",
                y = function (t, n) {
                    var e,
                        r = h(n);
                    if ("F" !== r) return t._i[r];
                    for (e = t._f; e; e = e.n) if (e.k == n) return e;
                };
            t.exports = {
                getConstructor: function (t, n, e, a) {
                    var f = t(function (t, r) {
                        c(t, f, n, "_i"), (t._t = n), (t._i = o(null)), (t._f = void 0), (t._l = void 0), (t[v] = 0), void 0 != r && s(r, e, t[a], t);
                    });
                    return (
                        i(f.prototype, {
                            clear: function () {
                                for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n) (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
                                (t._f = t._l = void 0), (t[v] = 0);
                            },
                            delete: function (t) {
                                var e = d(this, n),
                                    r = y(e, t);
                                if (r) {
                                    var o = r.n,
                                        i = r.p;
                                    delete e._i[r.i], (r.r = !0), i && (i.n = o), o && (o.p = i), e._f == r && (e._f = o), e._l == r && (e._l = i), e[v]--;
                                }
                                return !!r;
                            },
                            forEach: function (t) {
                                d(this, n);
                                for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); (e = e ? e.n : this._f); ) for (r(e.v, e.k, this); e && e.r; ) e = e.p;
                            },
                            has: function (t) {
                                return !!y(d(this, n), t);
                            },
                        }),
                        p &&
                            r(f.prototype, "size", {
                                get: function () {
                                    return d(this, n)[v];
                                },
                            }),
                        f
                    );
                },
                def: function (t, n, e) {
                    var r,
                        o,
                        i = y(t, n);
                    return i ? (i.v = e) : ((t._l = i = { i: (o = h(n, !0)), k: n, v: e, p: (r = t._l), n: void 0, r: !1 }), t._f || (t._f = i), r && (r.n = i), t[v]++, "F" !== o && (t._i[o] = i)), t;
                },
                getEntry: y,
                setStrong: function (t, n, e) {
                    a(
                        t,
                        n,
                        function (t, e) {
                            (this._t = d(t, n)), (this._k = e), (this._l = void 0);
                        },
                        function () {
                            for (var t = this, n = t._k, e = t._l; e && e.r; ) e = e.p;
                            return t._t && (t._l = e = e ? e.n : t._t._f) ? ("keys" == n ? f(0, e.k) : "values" == n ? f(0, e.v) : f(0, [e.k, e.v])) : ((t._t = void 0), f(1));
                        },
                        e ? "entries" : "values",
                        !e,
                        !0
                    ),
                        l(n);
                },
            };
        },
        function (t, n, e) {
            var r = e(8);
            t.exports = function (t, n, e, o) {
                try {
                    return o ? n(r(e)[0], e[1]) : n(e);
                } catch (n) {
                    var i = t.return;
                    throw (void 0 !== i && r(i.call(t)), n);
                }
            };
        },
        function (t, n, e) {
            var r = e(13),
                o = e(0)("iterator"),
                i = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (r.Array === t || i[o] === t);
            };
        },
        function (t, n, e) {
            var r = e(23),
                o = e(0)("iterator"),
                i = e(13);
            t.exports = e(4).getIteratorMethod = function (t) {
                if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)];
            };
        },
        function (t, n, e) {
            var r = e(0)("iterator"),
                o = !1;
            try {
                var i = [7][r]();
                (i.return = function () {
                    o = !0;
                }),
                    Array.from(i, function () {
                        throw 2;
                    });
            } catch (t) {}
            t.exports = function (t, n) {
                if (!n && !o) return !1;
                var e = !1;
                try {
                    var i = [7],
                        u = i[r]();
                    (u.next = function () {
                        return { done: (e = !0) };
                    }),
                        (i[r] = function () {
                            return u;
                        }),
                        t(i);
                } catch (t) {}
                return e;
            };
        },
        function (t, n) {
            n.f = {}.propertyIsEnumerable;
        },
        function (t, n, e) {
            var r = e(23),
                o = e(76);
            t.exports = function (t) {
                return function () {
                    if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                    return o(this);
                };
            };
        },
        function (t, n, e) {
            var r = e(10),
                o = e(30),
                i = e(20),
                u = e(19),
                c = e(86);
            t.exports = function (t, n) {
                var e = 1 == t,
                    s = 2 == t,
                    a = 3 == t,
                    f = 4 == t,
                    l = 6 == t,
                    p = 5 == t || l,
                    h = n || c;
                return function (n, c, d) {
                    for (var v, y, m = i(n), g = o(m), b = r(c, d, 3), x = u(g.length), _ = 0, w = e ? h(n, x) : s ? h(n, 0) : void 0; x > _; _++)
                        if ((p || _ in g) && ((v = g[_]), (y = b(v, _, m)), t))
                            if (e) w[_] = y;
                            else if (y)
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return v;
                                    case 6:
                                        return _;
                                    case 2:
                                        w.push(v);
                                }
                            else if (f) return !1;
                    return l ? -1 : a || f ? f : w;
                };
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(29),
                o = e(89),
                i = e(52),
                u = e(20),
                c = e(30),
                s = Object.assign;
            t.exports =
                !s ||
                e(12)(function () {
                    var t = {},
                        n = {},
                        e = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return (
                        (t[e] = 7),
                        r.split("").forEach(function (t) {
                            n[t] = t;
                        }),
                        7 != s({}, t)[e] || Object.keys(s({}, n)).join("") != r
                    );
                })
                    ? function (t, n) {
                          for (var e = u(t), s = arguments.length, a = 1, f = o.f, l = i.f; s > a; )
                              for (var p, h = c(arguments[a++]), d = f ? r(h).concat(f(h)) : r(h), v = d.length, y = 0; v > y; ) l.call(h, (p = d[y++])) && (e[p] = h[p]);
                          return e;
                      }
                    : s;
        },
        function (t, n, e) {
            t.exports = e(57);
        },
        function (t, n, e) {
            "use strict";
            function r(t, n) {
                function e() {
                    this.constructor = t;
                }
                K(t, n), (t.prototype = null === n ? Object.create(n) : ((e.prototype = n.prototype), new e()));
            }
            function o(t, n, e, r) {
                var o,
                    i = arguments.length,
                    u = i < 3 ? n : null === r ? (r = Object.getOwnPropertyDescriptor(n, e)) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, e, r);
                else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u);
                return i > 3 && u && Object.defineProperty(n, e, u), u;
            }
            function i(t, n, e) {
                return t === t && (void 0 !== e && (t = t <= e ? t : e), void 0 !== n && (t = t >= n ? t : n)), t;
            }
            function u(t) {
                var n = typeof t;
                return null != t && ("object" == n || "function" == n);
            }
            function c(t) {
                var n = ut.call(t, st),
                    e = t[st];
                try {
                    t[st] = void 0;
                    var r = !0;
                } catch (t) {}
                var o = ct.call(t);
                return r && (n ? (t[st] = e) : delete t[st]), o;
            }
            function s(t) {
                return lt.call(t);
            }
            function a(t) {
                return null == t ? (void 0 === t ? dt : ht) : vt && vt in Object(t) ? at(t) : pt(t);
            }
            function f(t) {
                return null != t && "object" == typeof t;
            }
            function l(t) {
                return "symbol" == typeof t || (mt(t) && yt(t) == gt);
            }
            function p(t) {
                if ("number" == typeof t) return t;
                if (bt(t)) return xt;
                if (Q(t)) {
                    var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = Q(n) ? n + "" : n;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(_t, "");
                var e = Et.test(t);
                return e || St.test(t) ? Ot(t.slice(2), e ? 2 : 8) : wt.test(t) ? xt : +t;
            }
            function h(t, n, e) {
                return void 0 === e && ((e = n), (n = void 0)), void 0 !== e && ((e = Tt(e)), (e = e === e ? e : 0)), void 0 !== n && ((n = Tt(n)), (n = n === n ? n : 0)), J(Tt(t), n, e);
            }
            function d(t, n) {
                return (
                    void 0 === t && (t = -1 / 0),
                    void 0 === n && (n = 1 / 0),
                    function (e, r) {
                        var o = "_" + r;
                        Object.defineProperty(e, r, {
                            get: function () {
                                return this[o];
                            },
                            set: function (e) {
                                Object.defineProperty(this, o, { value: Mt(e, t, n), enumerable: !1, writable: !0, configurable: !0 });
                            },
                            enumerable: !0,
                            configurable: !0,
                        });
                    }
                );
            }
            function v(t, n) {
                var e = "_" + n;
                Object.defineProperty(t, n, {
                    get: function () {
                        return this[e];
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, { value: !!t, enumerable: !1, writable: !0, configurable: !0 });
                    },
                    enumerable: !0,
                    configurable: !0,
                });
            }
            function y(t, n, e) {
                function r(n) {
                    var e = p,
                        r = h;
                    return (p = h = void 0), (g = n), (v = t.apply(r, e));
                }
                function o(t) {
                    return (g = t), (y = setTimeout(c, n)), b ? r(t) : v;
                }
                function i(t) {
                    var e = t - m,
                        r = t - g,
                        o = n - e;
                    return x ? Dt(o, d - r) : o;
                }
                function u(t) {
                    var e = t - m,
                        r = t - g;
                    return void 0 === m || e >= n || e < 0 || (x && r >= d);
                }
                function c() {
                    var t = Pt();
                    if (u(t)) return s(t);
                    y = setTimeout(c, i(t));
                }
                function s(t) {
                    return (y = void 0), _ && p ? r(t) : ((p = h = void 0), v);
                }
                function a() {
                    void 0 !== y && clearTimeout(y), (g = 0), (p = m = h = y = void 0);
                }
                function f() {
                    return void 0 === y ? v : s(Pt());
                }
                function l() {
                    var t = Pt(),
                        e = u(t);
                    if (((p = arguments), (h = this), (m = t), e)) {
                        if (void 0 === y) return o(m);
                        if (x) return (y = setTimeout(c, n)), r(m);
                    }
                    return void 0 === y && (y = setTimeout(c, n)), v;
                }
                var p,
                    h,
                    d,
                    v,
                    y,
                    m,
                    g = 0,
                    b = !1,
                    x = !1,
                    _ = !0;
                if ("function" != typeof t) throw new TypeError(jt);
                return (n = Tt(n) || 0), Q(e) && ((b = !!e.leading), (x = "maxWait" in e), (d = x ? kt(Tt(e.maxWait) || 0, n) : d), (_ = "trailing" in e ? !!e.trailing : _)), (l.cancel = a), (l.flush = f), l;
            }
            function m() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return function (n, e, r) {
                    var o = r.value;
                    return {
                        get: function () {
                            return this.hasOwnProperty(e) || Object.defineProperty(this, e, { value: Lt.apply(void 0, [o].concat(t)) }), this[e];
                        },
                    };
                };
            }
            function g() {
                if (void 0 !== Y) return Y;
                var t = !1;
                try {
                    var n = function () {},
                        e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0;
                            },
                        });
                    window.addEventListener("testPassive", n, e), window.removeEventListener("testPassive", n, e);
                } catch (t) {}
                return (Y = !!t && { passive: !1 });
            }
            function b(t) {
                var n = zt.get(t) || [];
                return (
                    zt.set(t, n),
                    function (t, e, r) {
                        function o(t) {
                            t.defaultPrevented || r(t);
                        }
                        e.split(/\s+/g).forEach(function (e) {
                            n.push({ elem: t, eventName: e, handler: o }), t.addEventListener(e, o, g());
                        });
                    }
                );
            }
            function x(t) {
                var n = zt.get(t);
                n &&
                    (n.forEach(function (t) {
                        var n = t.elem,
                            e = t.eventName,
                            r = t.handler;
                        n.removeEventListener(e, r, g());
                    }),
                    zt.delete(t));
            }
            function _(t) {
                return t.touches ? t.touches[t.touches.length - 1] : t;
            }
            function w(t) {
                var n = _(t);
                return { x: n.clientX, y: n.clientY };
            }
            function E(t, n) {
                return (
                    void 0 === n && (n = []),
                    n.some(function (n) {
                        return t === n;
                    })
                );
            }
            function S(t) {
                var n = {};
                return (
                    Object.keys(t).forEach(function (e) {
                        if (!Rt.test(e)) return void (n[e] = t[e]);
                        var r = t[e];
                        (e = e.replace(/^-/, "")),
                            (n[e] = r),
                            Ct.forEach(function (t) {
                                n["-" + t + "-" + e] = r;
                            });
                    }),
                    n
                );
            }
            function O(t, n) {
                (n = S(n)),
                    Object.keys(n).forEach(function (e) {
                        var r = e.replace(/^-/, "").replace(/-([a-z])/g, function (t, n) {
                            return n.toUpperCase();
                        });
                        t.style[r] = n[e];
                    });
            }
            function T(t) {
                var n = t.containerEl,
                    e = t.contentEl;
                return { container: { width: n.clientWidth, height: n.clientHeight }, content: { width: e.offsetWidth - e.clientWidth + e.scrollWidth, height: e.offsetHeight - e.clientHeight + e.scrollHeight } };
            }
            function M(t, n) {
                var e = t.bounding,
                    r = n.getBoundingClientRect(),
                    o = Math.max(e.top, r.top),
                    i = Math.max(e.left, r.left),
                    u = Math.min(e.right, r.right);
                return o < Math.min(e.bottom, r.bottom) && i < u;
            }
            function A(t) {
                var n = t.getSize(),
                    e = { x: Math.max(n.content.width - n.container.width, 0), y: Math.max(n.content.height - n.container.height, 0) },
                    r = t.containerEl.getBoundingClientRect(),
                    o = { top: Math.max(r.top, 0), right: Math.min(r.right, window.innerWidth), bottom: Math.min(r.bottom, window.innerHeight), left: Math.max(r.left, 0) };
                (t.size = n), (t.limit = e), (t.bounding = o), t.track.update(), t.setPosition();
            }
            function P(t, n, e) {
                var r = t.options,
                    o = t.offset,
                    i = t.limit,
                    u = t.track,
                    c = t.contentEl;
                return (
                    r.renderByPixels && ((n = Math.round(n)), (e = Math.round(e))),
                    (n = Mt(n, 0, i.x)),
                    (e = Mt(e, 0, i.y)),
                    n !== o.x && u.xAxis.show(),
                    e !== o.y && u.yAxis.show(),
                    r.alwaysShowTracks || u.autoHideOnIdle(),
                    n === o.x && e === o.y ? null : ((o.x = n), (o.y = e), O(c, { "-transform": "translate3d(" + -n + "px, " + -e + "px, 0)" }), u.update(), { offset: $({}, o), limit: $({}, i) })
                );
            }
            function j(t, n, e, r, o) {
                function i() {
                    var n = Date.now() - g,
                        e = r ? s(Math.min(n / r, 1)) : 1;
                    if ((t.setPosition(d + y * e, v + m * e), n >= r)) "function" == typeof f && f.call(t);
                    else {
                        var o = requestAnimationFrame(i);
                        Vt.set(t, o);
                    }
                }
                void 0 === r && (r = 0);
                var u = void 0 === o ? {} : o,
                    c = u.easing,
                    s = void 0 === c ? k : c,
                    a = u.callback,
                    f = void 0 === a ? null : a,
                    l = t.options,
                    p = t.offset,
                    h = t.limit;
                l.renderByPixels && ((n = Math.round(n)), (e = Math.round(e)));
                var d = p.x,
                    v = p.y,
                    y = Mt(n, 0, h.x) - d,
                    m = Mt(e, 0, h.y) - v,
                    g = Date.now();
                cancelAnimationFrame(Vt.get(t)), i();
            }
            function k(t) {
                return Math.pow(t - 1, 3) + 1;
            }
            function D(t, n, e) {
                var r = void 0 === e ? {} : e,
                    o = r.alignToTop,
                    i = void 0 === o || o,
                    u = r.onlyScrollIfNeeded,
                    c = void 0 !== u && u,
                    s = r.offsetTop,
                    a = void 0 === s ? 0 : s,
                    f = r.offsetLeft,
                    l = void 0 === f ? 0 : f,
                    p = r.offsetBottom,
                    h = void 0 === p ? 0 : p,
                    d = t.containerEl,
                    v = t.bounding,
                    y = t.offset,
                    m = t.limit;
                if (n && d.contains(n)) {
                    var g = n.getBoundingClientRect();
                    if (!c || !t.isVisible(n)) {
                        var b = i ? g.top - v.top - a : g.bottom - v.bottom + h;
                        t.setMomentum(g.left - v.left - l, Mt(b, -y.y, m.y - y.y));
                    }
                }
            }
            function L() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                t.forEach(function (t) {
                    var n = t.pluginName;
                    if (!n) throw new TypeError("plugin name is required");
                    Xt.order.add(n), (Xt.constructors[n] = t);
                });
            }
            function N(t, n) {
                return Array.from(Xt.order)
                    .filter(function (t) {
                        return !1 !== n[t];
                    })
                    .map(function (e) {
                        var r = Xt.constructors[e],
                            o = new r(t, n[e]);
                        return (n[e] = o.options), o;
                    });
            }
            function z(t) {
                var n = b(t),
                    e = t.containerEl;
                n(e, "keydown", function (n) {
                    if (document.activeElement === e) {
                        var r = C(t, n.keyCode || n.which);
                        if (r) {
                            var o = r[0],
                                i = r[1];
                            t.addTransformableMomentum(o, i, n, function (e) {
                                e ? n.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus());
                            });
                        }
                    }
                });
            }
            function C(t, n) {
                var e = t.size,
                    r = t.limit,
                    o = t.offset;
                switch (n) {
                    case Wt.SPACE:
                        return [0, 200];
                    case Wt.PAGE_UP:
                        return [0, 40 - e.container.height];
                    case Wt.PAGE_DOWN:
                        return [0, e.container.height - 40];
                    case Wt.END:
                        return [0, r.y - o.y];
                    case Wt.HOME:
                        return [0, -o.y];
                    case Wt.LEFT:
                        return [-40, 0];
                    case Wt.UP:
                        return [0, -40];
                    case Wt.RIGHT:
                        return [40, 0];
                    case Wt.DOWN:
                        return [0, 40];
                    default:
                        return null;
                }
            }
            function R(t) {
                function n(n, e) {
                    var r = t.size;
                    if (n === Yt.X) {
                        return (e / (r.container.width + (l.thumb.realSize - l.thumb.displaySize))) * r.content.width;
                    }
                    if (n === Yt.Y) {
                        return (e / (r.container.height + (p.thumb.realSize - p.thumb.displaySize))) * r.content.height;
                    }
                    return 0;
                }
                function e(t) {
                    return E(t, [l.element, l.thumb.element]) ? Yt.X : E(t, [p.element, p.thumb.element]) ? Yt.Y : void 0;
                }
                var r,
                    o,
                    i,
                    u,
                    c,
                    s = b(t),
                    a = t.containerEl,
                    f = t.track,
                    l = f.xAxis,
                    p = f.yAxis;
                s(a, "click", function (r) {
                    if (!o && E(r.target, [l.element, p.element])) {
                        var i = r.target,
                            u = e(i),
                            c = i.getBoundingClientRect(),
                            s = w(r),
                            a = t.offset,
                            f = t.limit;
                        if (u === Yt.X) {
                            var h = s.x - c.left - l.thumb.displaySize / 2;
                            t.setMomentum(Mt(n(u, h) - a.x, -a.x, f.x - a.x), 0);
                        }
                        if (u === Yt.Y) {
                            var h = s.y - c.top - p.thumb.displaySize / 2;
                            t.setMomentum(0, Mt(n(u, h) - a.y, -a.y, f.y - a.y));
                        }
                    }
                }),
                    s(a, "mousedown", function (n) {
                        if (E(n.target, [l.thumb.element, p.thumb.element])) {
                            r = !0;
                            var o = n.target,
                                s = w(n),
                                f = o.getBoundingClientRect();
                            (u = e(o)), (i = { x: s.x - f.left, y: s.y - f.top }), (c = a.getBoundingClientRect()), O(t.containerEl, { "-user-select": "none" });
                        }
                    }),
                    s(window, "mousemove", function (e) {
                        if (r) {
                            o = !0;
                            var s = t.offset,
                                a = w(e);
                            if (u === Yt.X) {
                                var f = a.x - i.x - c.left;
                                t.setPosition(n(u, f), s.y);
                            }
                            if (u === Yt.Y) {
                                var f = a.y - i.y - c.top;
                                t.setPosition(s.x, n(u, f));
                            }
                        }
                    }),
                    s(window, "mouseup blur", function () {
                        (r = o = !1), O(t.containerEl, { "-user-select": "" });
                    });
            }
            function F(t) {
                b(t)(window, "resize", Lt(t.update.bind(t), 300));
            }
            function I(t) {
                function n(r) {
                    var o = r.x,
                        i = r.y;
                    (o || i) &&
                        (t.setMomentum(Mt(u.x + o, 0, c.x) - u.x, Mt(u.y + i, 0, c.y) - u.y),
                        (e = requestAnimationFrame(function () {
                            n({ x: o, y: i });
                        })));
                }
                var e,
                    r = b(t),
                    o = t.containerEl,
                    i = t.contentEl,
                    u = t.offset,
                    c = t.limit,
                    s = !1;
                r(window, "mousemove", function (r) {
                    if (s) {
                        cancelAnimationFrame(e);
                        n(W(t, r));
                    }
                }),
                    r(i, "selectstart", function (t) {
                        t.stopPropagation(), cancelAnimationFrame(e), (s = !0);
                    }),
                    r(window, "mouseup blur", function () {
                        cancelAnimationFrame(e), (s = !1);
                    }),
                    r(o, "scroll", function (t) {
                        t.preventDefault(), (o.scrollTop = o.scrollLeft = 0);
                    });
            }
            function W(t, n) {
                var e = t.bounding,
                    r = e.top,
                    o = e.right,
                    i = e.bottom,
                    u = e.left,
                    c = w(n),
                    s = c.x,
                    a = c.y,
                    f = { x: 0, y: 0 };
                return 0 === s && 0 === a ? f : (s > o - 20 ? (f.x = s - o + 20) : s < u + 20 && (f.x = s - u - 20), a > i - 20 ? (f.y = a - i + 20) : a < r + 20 && (f.y = a - r - 20), (f.x *= 2), (f.y *= 2), f);
            }
            function H(t) {
                var n,
                    e = /Android/.test(navigator.userAgent) ? 3 : 2,
                    r = t.options.delegateTo || t.containerEl,
                    o = new It(),
                    i = b(t),
                    u = 0;
                i(r, "touchstart", function (e) {
                    o.track(e), t.setMomentum(0, 0), 0 === u && ((n = t.options.damping), (t.options.damping = Math.max(n, 0.5))), u++;
                }),
                    i(r, "touchmove", function (n) {
                        if (!qt || qt === t) {
                            o.update(n);
                            var e = o.getDelta(),
                                r = e.x,
                                i = e.y;
                            t.addTransformableMomentum(r, i, n, function (e) {
                                e && (n.preventDefault(), (qt = t));
                            });
                        }
                    }),
                    i(r, "touchcancel touchend", function (r) {
                        var i = o.getVelocity(),
                            c = { x: 0, y: 0 };
                        Object.keys(i).forEach(function (t) {
                            var r = i[t] / n;
                            c[t] = Math.abs(r) < 50 ? 0 : r * e;
                        }),
                            t.addTransformableMomentum(c.x, c.y, r),
                            u--,
                            0 === u && (t.options.damping = n),
                            o.release(r),
                            (qt = null);
                    });
            }
            function B(t) {
                b(t)(t.options.delegateTo || t.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", function (n) {
                    var e = G(n),
                        r = e.x,
                        o = e.y;
                    t.addTransformableMomentum(r, o, n, function (t) {
                        t && n.preventDefault();
                    });
                });
            }
            function G(t) {
                if ("deltaX" in t) {
                    var n = Jt(t.deltaMode);
                    return { x: (t.deltaX / Kt.STANDARD) * n, y: (t.deltaY / Kt.STANDARD) * n };
                }
                return "wheelDeltaX" in t ? { x: t.wheelDeltaX / Kt.OTHERS, y: t.wheelDeltaY / Kt.OTHERS } : { x: 0, y: t.wheelDelta / Kt.OTHERS };
            }
            function V() {
                if (!en && "undefined" != typeof window) {
                    var t = document.createElement("style");
                    (t.id = nn), (t.textContent = tn), document.head.appendChild(t), (en = !0);
                }
            }
            function U() {
                if (en && "undefined" != typeof window) {
                    var t = document.getElementById(nn);
                    t && t.parentNode && (t.parentNode.removeChild(t), (en = !1));
                }
            }
            Object.defineProperty(n, "__esModule", { value: !0 });
            var X = {};
            e.d(X, "keyboardHandler", function () {
                return z;
            }),
                e.d(X, "mouseHandler", function () {
                    return R;
                }),
                e.d(X, "resizeHandler", function () {
                    return F;
                }),
                e.d(X, "selectHandler", function () {
                    return I;
                }),
                e.d(X, "touchHandler", function () {
                    return H;
                }),
                e.d(X, "wheelHandler", function () {
                    return B;
                });
            var Y,
                q,
                K =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, n) {
                            t.__proto__ = n;
                        }) ||
                    function (t, n) {
                        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
                    },
                $ =
                    Object.assign ||
                    function (t) {
                        for (var n, e = 1, r = arguments.length; e < r; e++) {
                            n = arguments[e];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                        }
                        return t;
                    },
                J = (e(58), e(79), e(84), e(93), e(96), i),
                Q = u,
                Z = e(98),
                tt = "object" == typeof self && self && self.Object === Object && self,
                nt = Z.a || tt || Function("return this")(),
                et = nt,
                rt = et.Symbol,
                ot = rt,
                it = Object.prototype,
                ut = it.hasOwnProperty,
                ct = it.toString,
                st = ot ? ot.toStringTag : void 0,
                at = c,
                ft = Object.prototype,
                lt = ft.toString,
                pt = s,
                ht = "[object Null]",
                dt = "[object Undefined]",
                vt = ot ? ot.toStringTag : void 0,
                yt = a,
                mt = f,
                gt = "[object Symbol]",
                bt = l,
                xt = NaN,
                _t = /^\s+|\s+$/g,
                wt = /^[-+]0x[0-9a-f]+$/i,
                Et = /^0b[01]+$/i,
                St = /^0o[0-7]+$/i,
                Ot = parseInt,
                Tt = p,
                Mt = h,
                At = function () {
                    return et.Date.now();
                },
                Pt = At,
                jt = "Expected a function",
                kt = Math.max,
                Dt = Math.min,
                Lt = y,
                Nt = (function () {
                    function t(t) {
                        void 0 === t && (t = {});
                        var n = this;
                        (this.damping = 0.1),
                            (this.thumbMinSize = 20),
                            (this.renderByPixels = !0),
                            (this.alwaysShowTracks = !1),
                            (this.continuousScrolling = !0),
                            (this.delegateTo = null),
                            (this.plugins = {}),
                            Object.keys(t).forEach(function (e) {
                                n[e] = t[e];
                            });
                    }
                    return (
                        Object.defineProperty(t.prototype, "wheelEventTarget", {
                            get: function () {
                                return this.delegateTo;
                            },
                            set: function (t) {
                                console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), (this.delegateTo = t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        o([d(0, 1)], t.prototype, "damping", void 0),
                        o([d(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
                        o([v], t.prototype, "renderByPixels", void 0),
                        o([v], t.prototype, "alwaysShowTracks", void 0),
                        o([v], t.prototype, "continuousScrolling", void 0),
                        t
                    );
                })(),
                zt = new WeakMap(),
                Ct = ["webkit", "moz", "ms", "o"],
                Rt = new RegExp("^-(?!(?:" + Ct.join("|") + ")-)"),
                Ft = (function () {
                    function t(t) {
                        (this.updateTime = Date.now()), (this.delta = { x: 0, y: 0 }), (this.velocity = { x: 0, y: 0 }), (this.lastPosition = { x: 0, y: 0 }), (this.lastPosition = w(t));
                    }
                    return (
                        (t.prototype.update = function (t) {
                            var n = this,
                                e = n.velocity,
                                r = n.updateTime,
                                o = n.lastPosition,
                                i = Date.now(),
                                u = w(t),
                                c = { x: -(u.x - o.x), y: -(u.y - o.y) },
                                s = i - r || 16,
                                a = (c.x / s) * 16,
                                f = (c.y / s) * 16;
                            (e.x = 0.9 * a + 0.1 * e.x), (e.y = 0.9 * f + 0.1 * e.y), (this.delta = c), (this.updateTime = i), (this.lastPosition = u);
                        }),
                        t
                    );
                })(),
                It = (function () {
                    function t() {
                        this._touchList = {};
                    }
                    return (
                        Object.defineProperty(t.prototype, "_primitiveValue", {
                            get: function () {
                                return { x: 0, y: 0 };
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.isActive = function () {
                            return void 0 !== this._activeTouchID;
                        }),
                        (t.prototype.getDelta = function () {
                            var t = this._getActiveTracker();
                            return t ? $({}, t.delta) : this._primitiveValue;
                        }),
                        (t.prototype.getVelocity = function () {
                            var t = this._getActiveTracker();
                            return t ? $({}, t.velocity) : this._primitiveValue;
                        }),
                        (t.prototype.track = function (t) {
                            var n = this,
                                e = t.targetTouches;
                            return (
                                Array.from(e).forEach(function (t) {
                                    n._add(t);
                                }),
                                this._touchList
                            );
                        }),
                        (t.prototype.update = function (t) {
                            var n = this,
                                e = t.touches,
                                r = t.changedTouches;
                            return (
                                Array.from(e).forEach(function (t) {
                                    n._renew(t);
                                }),
                                this._setActiveID(r),
                                this._touchList
                            );
                        }),
                        (t.prototype.release = function (t) {
                            var n = this;
                            delete this._activeTouchID,
                                Array.from(t.changedTouches).forEach(function (t) {
                                    n._delete(t);
                                });
                        }),
                        (t.prototype._add = function (t) {
                            if (!this._has(t)) {
                                var n = new Ft(t);
                                this._touchList[t.identifier] = n;
                            }
                        }),
                        (t.prototype._renew = function (t) {
                            if (this._has(t)) {
                                this._touchList[t.identifier].update(t);
                            }
                        }),
                        (t.prototype._delete = function (t) {
                            delete this._touchList[t.identifier];
                        }),
                        (t.prototype._has = function (t) {
                            return this._touchList.hasOwnProperty(t.identifier);
                        }),
                        (t.prototype._setActiveID = function (t) {
                            (this._activeTouchID = t[t.length - 1].identifier), (this._lastTouch = this._touchList[this._activeTouchID]);
                        }),
                        (t.prototype._getActiveTracker = function () {
                            var t = this;
                            return t._touchList[t._activeTouchID];
                        }),
                        t
                    );
                })();
            !(function (t) {
                (t.X = "x"), (t.Y = "y");
            })(q || (q = {}));
            var Wt,
                Ht = (function () {
                    function t(t, n) {
                        void 0 === n && (n = 0),
                            (this._direction = t),
                            (this._minSize = n),
                            (this.element = document.createElement("div")),
                            (this.displaySize = 0),
                            (this.realSize = 0),
                            (this.offset = 0),
                            (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
                    }
                    return (
                        (t.prototype.attachTo = function (t) {
                            t.appendChild(this.element);
                        }),
                        (t.prototype.update = function (t, n, e) {
                            (this.realSize = Math.min(n / e, 1) * n), (this.displaySize = Math.max(this.realSize, this._minSize)), (this.offset = (t / e) * (n + (this.realSize - this.displaySize))), O(this.element, this._getStyle());
                        }),
                        (t.prototype._getStyle = function () {
                            switch (this._direction) {
                                case q.X:
                                    return { width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)" };
                                case q.Y:
                                    return { height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)" };
                                default:
                                    return null;
                            }
                        }),
                        t
                    );
                })(),
                Bt = (function () {
                    function t(t, n) {
                        void 0 === n && (n = 0),
                            (this.element = document.createElement("div")),
                            (this._isShown = !1),
                            (this.element.className = "scrollbar-track scrollbar-track-" + t),
                            (this.thumb = new Ht(t, n)),
                            this.thumb.attachTo(this.element);
                    }
                    return (
                        (t.prototype.attachTo = function (t) {
                            t.appendChild(this.element);
                        }),
                        (t.prototype.show = function () {
                            this._isShown || ((this._isShown = !0), this.element.classList.add("show"));
                        }),
                        (t.prototype.hide = function () {
                            this._isShown && ((this._isShown = !1), this.element.classList.remove("show"));
                        }),
                        (t.prototype.update = function (t, n, e) {
                            O(this.element, { display: e <= n ? "none" : "block" }), this.thumb.update(t, n, e);
                        }),
                        t
                    );
                })(),
                Gt = (function () {
                    function t(t) {
                        this._scrollbar = t;
                        var n = t.options.thumbMinSize;
                        (this.xAxis = new Bt(q.X, n)), (this.yAxis = new Bt(q.Y, n)), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show());
                    }
                    return (
                        (t.prototype.update = function () {
                            var t = this._scrollbar,
                                n = t.size,
                                e = t.offset;
                            this.xAxis.update(e.x, n.container.width, n.content.width), this.yAxis.update(e.y, n.container.height, n.content.height);
                        }),
                        (t.prototype.autoHideOnIdle = function () {
                            this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide());
                        }),
                        o([m(300)], t.prototype, "autoHideOnIdle", null),
                        t
                    );
                })(),
                Vt = new WeakMap(),
                Ut = (function () {
                    function t(t, n) {
                        var e = this.constructor;
                        (this.scrollbar = t), (this.name = e.pluginName), (this.options = $({}, e.defaultOptions, n));
                    }
                    return (
                        (t.prototype.onInit = function () {}),
                        (t.prototype.onDestory = function () {}),
                        (t.prototype.onUpdate = function () {}),
                        (t.prototype.onRender = function (t) {}),
                        (t.prototype.transformDelta = function (t, n) {
                            return $({}, t);
                        }),
                        (t.pluginName = ""),
                        (t.defaultOptions = {}),
                        t
                    );
                })(),
                Xt = { order: new Set(), constructors: {} };
            !(function (t) {
                (t[(t.SPACE = 32)] = "SPACE"),
                    (t[(t.PAGE_UP = 33)] = "PAGE_UP"),
                    (t[(t.PAGE_DOWN = 34)] = "PAGE_DOWN"),
                    (t[(t.END = 35)] = "END"),
                    (t[(t.HOME = 36)] = "HOME"),
                    (t[(t.LEFT = 37)] = "LEFT"),
                    (t[(t.UP = 38)] = "UP"),
                    (t[(t.RIGHT = 39)] = "RIGHT"),
                    (t[(t.DOWN = 40)] = "DOWN");
            })(Wt || (Wt = {}));
            var Yt;
            !(function (t) {
                (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
            })(Yt || (Yt = {}));
            var qt,
                Kt = { STANDARD: 1, OTHERS: -3 },
                $t = [1, 28, 500],
                Jt = function (t) {
                    return $t[t] || $t[0];
                },
                Qt = new Map(),
                Zt = (function () {
                    function t(t, n) {
                        var e = this;
                        (this.offset = { x: 0, y: 0 }),
                            (this.limit = { x: 1 / 0, y: 1 / 0 }),
                            (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
                            (this._plugins = []),
                            (this._momentum = { x: 0, y: 0 }),
                            (this._listeners = new Set()),
                            (this.containerEl = t);
                        var r = (this.contentEl = document.createElement("div"));
                        (this.options = new Nt(n)),
                            t.setAttribute("data-scrollbar", "true"),
                            t.setAttribute("tabindex", "1"),
                            O(t, { overflow: "hidden", outline: "none" }),
                            window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"),
                            (r.className = "scroll-content"),
                            Array.from(t.childNodes).forEach(function (t) {
                                r.appendChild(t);
                            }),
                            t.appendChild(r),
                            (this.track = new Gt(this)),
                            (this.size = this.getSize()),
                            (this._plugins = N(this, this.options.plugins));
                        var o = t.scrollLeft,
                            i = t.scrollTop;
                        (t.scrollLeft = t.scrollTop = 0), this.setPosition(o, i, { withoutCallbacks: !0 });
                        var u = window,
                            c = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver;
                        "function" == typeof c &&
                            ((this._observer = new c(function () {
                                e.update();
                            })),
                            this._observer.observe(r, { subtree: !0, childList: !0 })),
                            Qt.set(t, this),
                            requestAnimationFrame(function () {
                                e._init();
                            });
                    }
                    return (
                        Object.defineProperty(t.prototype, "parent", {
                            get: function () {
                                for (var t = this.containerEl.parentElement; t; ) {
                                    var n = Qt.get(t);
                                    if (n) return n;
                                    t = t.parentElement;
                                }
                                return null;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "scrollTop", {
                            get: function () {
                                return this.offset.y;
                            },
                            set: function (t) {
                                this.setPosition(this.scrollLeft, t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "scrollLeft", {
                            get: function () {
                                return this.offset.x;
                            },
                            set: function (t) {
                                this.setPosition(t, this.scrollTop);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getSize = function () {
                            return T(this);
                        }),
                        (t.prototype.update = function () {
                            A(this),
                                this._plugins.forEach(function (t) {
                                    t.onUpdate();
                                });
                        }),
                        (t.prototype.isVisible = function (t) {
                            return M(this, t);
                        }),
                        (t.prototype.setPosition = function (t, n, e) {
                            var r = this;
                            void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = {});
                            var o = P(this, t, n);
                            o &&
                                !e.withoutCallbacks &&
                                this._listeners.forEach(function (t) {
                                    t.call(r, o);
                                });
                        }),
                        (t.prototype.scrollTo = function (t, n, e, r) {
                            void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = 0), void 0 === r && (r = {}), j(this, t, n, e, r);
                        }),
                        (t.prototype.scrollIntoView = function (t, n) {
                            void 0 === n && (n = {}), D(this, t, n);
                        }),
                        (t.prototype.addListener = function (t) {
                            if ("function" != typeof t) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                            this._listeners.add(t);
                        }),
                        (t.prototype.removeListener = function (t) {
                            this._listeners.delete(t);
                        }),
                        (t.prototype.addTransformableMomentum = function (t, n, e, r) {
                            this._updateDebounced();
                            var o = this._plugins.reduce(
                                    function (t, n) {
                                        return n.transformDelta(t, e) || t;
                                    },
                                    { x: t, y: n }
                                ),
                                i = !this._shouldPropagateMomentum(o.x, o.y);
                            i && this.addMomentum(o.x, o.y), r && r.call(this, i);
                        }),
                        (t.prototype.addMomentum = function (t, n) {
                            this.setMomentum(this._momentum.x + t, this._momentum.y + n);
                        }),
                        (t.prototype.setMomentum = function (t, n) {
                            0 === this.limit.x && (t = 0), 0 === this.limit.y && (n = 0), this.options.renderByPixels && ((t = Math.round(t)), (n = Math.round(n))), (this._momentum.x = t), (this._momentum.y = n);
                        }),
                        (t.prototype.updatePluginOptions = function (t, n) {
                            this._plugins.forEach(function (e) {
                                e.name === t && Object.assign(e.options, n);
                            });
                        }),
                        (t.prototype.destroy = function () {
                            var t = this,
                                n = t.containerEl,
                                e = t.contentEl;
                            x(this), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), Qt.delete(this.containerEl);
                            for (var r = Array.from(e.childNodes); n.firstChild; ) n.removeChild(n.firstChild);
                            r.forEach(function (t) {
                                n.appendChild(t);
                            }),
                                O(n, { overflow: "" }),
                                (n.scrollTop = this.scrollTop),
                                (n.scrollLeft = this.scrollLeft),
                                this._plugins.forEach(function (t) {
                                    t.onDestory();
                                }),
                                (this._plugins.length = 0);
                        }),
                        (t.prototype._init = function () {
                            var t = this;
                            this.update(),
                                Object.keys(X).forEach(function (n) {
                                    X[n](t);
                                }),
                                this._plugins.forEach(function (t) {
                                    t.onInit();
                                }),
                                this._render();
                        }),
                        (t.prototype._updateDebounced = function () {
                            this.update();
                        }),
                        (t.prototype._shouldPropagateMomentum = function (t, n) {
                            void 0 === t && (t = 0), void 0 === n && (n = 0);
                            var e = this,
                                r = e.options,
                                o = e.offset,
                                i = e.limit;
                            if (!r.continuousScrolling) return !1;
                            0 === i.x && 0 === i.y && this._updateDebounced();
                            var u = Mt(t + o.x, 0, i.x),
                                c = Mt(n + o.y, 0, i.y),
                                s = !0;
                            return (s = s && u === o.x), (s = s && c === o.y), (s = s && (o.x === i.x || 0 === o.x || o.y === i.y || 0 === o.y));
                        }),
                        (t.prototype._render = function () {
                            var t = this._momentum;
                            if (t.x || t.y) {
                                var n = this._nextTick("x"),
                                    e = this._nextTick("y");
                                (t.x = n.momentum), (t.y = e.momentum), this.setPosition(n.position, e.position);
                            }
                            var r = $({}, this._momentum);
                            this._plugins.forEach(function (t) {
                                t.onRender(r);
                            }),
                                (this._renderID = requestAnimationFrame(this._render.bind(this)));
                        }),
                        (t.prototype._nextTick = function (t) {
                            var n = this,
                                e = n.options,
                                r = n.offset,
                                o = n._momentum,
                                i = r[t],
                                u = o[t];
                            if (Math.abs(u) <= 0.1) return { momentum: 0, position: i + u };
                            var c = u * (1 - e.damping);
                            return e.renderByPixels && (c |= 0), { momentum: c, position: i + u - c };
                        }),
                        o([m(100, { leading: !0 })], t.prototype, "_updateDebounced", null),
                        t
                    );
                })(),
                tn =
                    "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",
                nn = "smooth-scrollbar-style",
                en = !1;
            e.d(n, "ScrollbarPlugin", function () {
                return Ut;
            });
            var rn = (function (t) {
                function n() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    r(n, t),
                    (n.init = function (t, n) {
                        if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t);
                        return V(), Qt.has(t) ? Qt.get(t) : new Zt(t, n);
                    }),
                    (n.initAll = function (t) {
                        return Array.from(document.querySelectorAll("[data-scrollbar]"), function (e) {
                            return n.init(e, t);
                        });
                    }),
                    (n.has = function (t) {
                        return Qt.has(t);
                    }),
                    (n.get = function (t) {
                        return Qt.get(t);
                    }),
                    (n.getAll = function () {
                        return Array.from(Qt.values());
                    }),
                    (n.destroy = function (t) {
                        var n = Qt.get(t);
                        n && n.destroy();
                    }),
                    (n.destroyAll = function () {
                        Qt.forEach(function (t) {
                            t.destroy();
                        });
                    }),
                    (n.use = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return L.apply(void 0, t);
                    }),
                    (n.attachStyle = function () {
                        return V();
                    }),
                    (n.detachStyle = function () {
                        return U();
                    }),
                    (n.version = "8.3.1"),
                    (n.ScrollbarPlugin = Ut),
                    n
                );
            })(Zt);
            n.default = rn;
        },
        function (t, n, e) {
            e(22), e(25), e(33), e(70), e(75), e(77), e(78), (t.exports = e(4).Map);
        },
        function (t, n, e) {
            var r = e(26),
                o = e(27);
            t.exports = function (t) {
                return function (n, e) {
                    var i,
                        u,
                        c = String(o(n)),
                        s = r(e),
                        a = c.length;
                    return s < 0 || s >= a
                        ? t
                            ? ""
                            : void 0
                        : ((i = c.charCodeAt(s)), i < 55296 || i > 56319 || s + 1 === a || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? (t ? c.charAt(s) : i) : t ? c.slice(s, s + 2) : u - 56320 + ((i - 55296) << 10) + 65536);
                };
            };
        },
        function (t, n) {
            t.exports = !1;
        },
        function (t, n, e) {
            "use strict";
            var r = e(44),
                o = e(17),
                i = e(32),
                u = {};
            e(11)(u, e(0)("iterator"), function () {
                return this;
            }),
                (t.exports = function (t, n, e) {
                    (t.prototype = r(u, { next: o(1, e) })), i(t, n + " Iterator");
                });
        },
        function (t, n, e) {
            var r = e(7),
                o = e(8),
                i = e(29);
            t.exports = e(9)
                ? Object.defineProperties
                : function (t, n) {
                      o(t);
                      for (var e, u = i(n), c = u.length, s = 0; c > s; ) r.f(t, (e = u[s++]), n[e]);
                      return t;
                  };
        },
        function (t, n, e) {
            var r = e(3),
                o = e(18),
                i = e(64)(!1),
                u = e(31)("IE_PROTO");
            t.exports = function (t, n) {
                var e,
                    c = o(t),
                    s = 0,
                    a = [];
                for (e in c) e != u && r(c, e) && a.push(e);
                for (; n.length > s; ) r(c, (e = n[s++])) && (~i(a, e) || a.push(e));
                return a;
            };
        },
        function (t, n, e) {
            var r = e(18),
                o = e(19),
                i = e(65);
            t.exports = function (t) {
                return function (n, e, u) {
                    var c,
                        s = r(n),
                        a = o(s.length),
                        f = i(u, a);
                    if (t && e != e) {
                        for (; a > f; ) if ((c = s[f++]) != c) return !0;
                    } else for (; a > f; f++) if ((t || f in s) && s[f] === e) return t || f || 0;
                    return !t && -1;
                };
            };
        },
        function (t, n, e) {
            var r = e(26),
                o = Math.max,
                i = Math.min;
            t.exports = function (t, n) {
                return (t = r(t)), t < 0 ? o(t + n, 0) : i(t, n);
            };
        },
        function (t, n, e) {
            var r = e(2).document;
            t.exports = r && r.documentElement;
        },
        function (t, n, e) {
            var r = e(3),
                o = e(20),
                i = e(31)("IE_PROTO"),
                u = Object.prototype;
            t.exports =
                Object.getPrototypeOf ||
                function (t) {
                    return (t = o(t)), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
                };
        },
        function (t, n, e) {
            "use strict";
            var r = e(69),
                o = e(46),
                i = e(13),
                u = e(18);
            (t.exports = e(28)(
                Array,
                "Array",
                function (t, n) {
                    (this._t = u(t)), (this._i = 0), (this._k = n);
                },
                function () {
                    var t = this._t,
                        n = this._k,
                        e = this._i++;
                    return !t || e >= t.length ? ((this._t = void 0), o(1)) : "keys" == n ? o(0, e) : "values" == n ? o(0, t[e]) : o(0, [e, t[e]]);
                },
                "values"
            )),
                (i.Arguments = i.Array),
                r("keys"),
                r("values"),
                r("entries");
        },
        function (t, n, e) {
            var r = e(0)("unscopables"),
                o = Array.prototype;
            void 0 == o[r] && e(11)(o, r, {}),
                (t.exports = function (t) {
                    o[r][t] = !0;
                });
        },
        function (t, n, e) {
            "use strict";
            var r = e(47),
                o = e(15);
            t.exports = e(36)(
                "Map",
                function (t) {
                    return function () {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                {
                    get: function (t) {
                        var n = r.getEntry(o(this, "Map"), t);
                        return n && n.v;
                    },
                    set: function (t, n) {
                        return r.def(o(this, "Map"), 0 === t ? 0 : t, n);
                    },
                },
                r,
                !0
            );
        },
        function (t, n, e) {
            "use strict";
            var r = e(2),
                o = e(7),
                i = e(9),
                u = e(0)("species");
            t.exports = function (t) {
                var n = r[t];
                i &&
                    n &&
                    !n[u] &&
                    o.f(n, u, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (t, n, e) {
            var r = e(1),
                o = e(73).set;
            t.exports = function (t, n, e) {
                var i,
                    u = n.constructor;
                return u !== e && "function" == typeof u && (i = u.prototype) !== e.prototype && r(i) && o && o(t, i), t;
            };
        },
        function (t, n, e) {
            var r = e(1),
                o = e(8),
                i = function (t, n) {
                    if ((o(t), !r(n) && null !== n)) throw TypeError(n + ": can't set as prototype!");
                };
            t.exports = {
                set:
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                        ? (function (t, n, r) {
                              try {
                                  (r = e(10)(Function.call, e(74).f(Object.prototype, "__proto__").set, 2)), r(t, []), (n = !(t instanceof Array));
                              } catch (t) {
                                  n = !0;
                              }
                              return function (t, e) {
                                  return i(t, e), n ? (t.__proto__ = e) : r(t, e), t;
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        function (t, n, e) {
            var r = e(52),
                o = e(17),
                i = e(18),
                u = e(42),
                c = e(3),
                s = e(40),
                a = Object.getOwnPropertyDescriptor;
            n.f = e(9)
                ? a
                : function (t, n) {
                      if (((t = i(t)), (n = u(n, !0)), s))
                          try {
                              return a(t, n);
                          } catch (t) {}
                      if (c(t, n)) return o(!r.f.call(t, n), t[n]);
                  };
        },
        function (t, n, e) {
            var r = e(5);
            r(r.P + r.R, "Map", { toJSON: e(53)("Map") });
        },
        function (t, n, e) {
            var r = e(14);
            t.exports = function (t, n) {
                var e = [];
                return r(t, !1, e.push, e, n), e;
            };
        },
        function (t, n, e) {
            e(37)("Map");
        },
        function (t, n, e) {
            e(38)("Map");
        },
        function (t, n, e) {
            e(22), e(25), e(33), e(80), e(81), e(82), e(83), (t.exports = e(4).Set);
        },
        function (t, n, e) {
            "use strict";
            var r = e(47),
                o = e(15);
            t.exports = e(36)(
                "Set",
                function (t) {
                    return function () {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                {
                    add: function (t) {
                        return r.def(o(this, "Set"), (t = 0 === t ? 0 : t), t);
                    },
                },
                r
            );
        },
        function (t, n, e) {
            var r = e(5);
            r(r.P + r.R, "Set", { toJSON: e(53)("Set") });
        },
        function (t, n, e) {
            e(37)("Set");
        },
        function (t, n, e) {
            e(38)("Set");
        },
        function (t, n, e) {
            e(22), e(33), e(85), e(91), e(92), (t.exports = e(4).WeakMap);
        },
        function (t, n, e) {
            "use strict";
            var r,
                o = e(54)(0),
                i = e(6),
                u = e(21),
                c = e(55),
                s = e(90),
                a = e(1),
                f = e(12),
                l = e(15),
                p = u.getWeak,
                h = Object.isExtensible,
                d = s.ufstore,
                v = {},
                y = function (t) {
                    return function () {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                m = {
                    get: function (t) {
                        if (a(t)) {
                            var n = p(t);
                            return !0 === n ? d(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0;
                        }
                    },
                    set: function (t, n) {
                        return s.def(l(this, "WeakMap"), t, n);
                    },
                },
                g = (t.exports = e(36)("WeakMap", y, m, s, !0, !0));
            f(function () {
                return 7 != new g().set((Object.freeze || Object)(v), 7).get(v);
            }) &&
                ((r = s.getConstructor(y, "WeakMap")),
                c(r.prototype, m),
                (u.NEED = !0),
                o(["delete", "has", "get", "set"], function (t) {
                    var n = g.prototype,
                        e = n[t];
                    i(n, t, function (n, o) {
                        if (a(n) && !h(n)) {
                            this._f || (this._f = new r());
                            var i = this._f[t](n, o);
                            return "set" == t ? this : i;
                        }
                        return e.call(this, n, o);
                    });
                }));
        },
        function (t, n, e) {
            var r = e(87);
            t.exports = function (t, n) {
                return new (r(t))(n);
            };
        },
        function (t, n, e) {
            var r = e(1),
                o = e(88),
                i = e(0)("species");
            t.exports = function (t) {
                var n;
                return o(t) && ((n = t.constructor), "function" != typeof n || (n !== Array && !o(n.prototype)) || (n = void 0), r(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n;
            };
        },
        function (t, n, e) {
            var r = e(24);
            t.exports =
                Array.isArray ||
                function (t) {
                    return "Array" == r(t);
                };
        },
        function (t, n) {
            n.f = Object.getOwnPropertySymbols;
        },
        function (t, n, e) {
            "use strict";
            var r = e(34),
                o = e(21).getWeak,
                i = e(8),
                u = e(1),
                c = e(35),
                s = e(14),
                a = e(54),
                f = e(3),
                l = e(15),
                p = a(5),
                h = a(6),
                d = 0,
                v = function (t) {
                    return t._l || (t._l = new y());
                },
                y = function () {
                    this.a = [];
                },
                m = function (t, n) {
                    return p(t.a, function (t) {
                        return t[0] === n;
                    });
                };
            (y.prototype = {
                get: function (t) {
                    var n = m(this, t);
                    if (n) return n[1];
                },
                has: function (t) {
                    return !!m(this, t);
                },
                set: function (t, n) {
                    var e = m(this, t);
                    e ? (e[1] = n) : this.a.push([t, n]);
                },
                delete: function (t) {
                    var n = h(this.a, function (n) {
                        return n[0] === t;
                    });
                    return ~n && this.a.splice(n, 1), !!~n;
                },
            }),
                (t.exports = {
                    getConstructor: function (t, n, e, i) {
                        var a = t(function (t, r) {
                            c(t, a, n, "_i"), (t._t = n), (t._i = d++), (t._l = void 0), void 0 != r && s(r, e, t[i], t);
                        });
                        return (
                            r(a.prototype, {
                                delete: function (t) {
                                    if (!u(t)) return !1;
                                    var e = o(t);
                                    return !0 === e ? v(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i];
                                },
                                has: function (t) {
                                    if (!u(t)) return !1;
                                    var e = o(t);
                                    return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i);
                                },
                            }),
                            a
                        );
                    },
                    def: function (t, n, e) {
                        var r = o(i(n), !0);
                        return !0 === r ? v(t).set(n, e) : (r[t._i] = e), t;
                    },
                    ufstore: v,
                });
        },
        function (t, n, e) {
            e(37)("WeakMap");
        },
        function (t, n, e) {
            e(38)("WeakMap");
        },
        function (t, n, e) {
            e(25), e(94), (t.exports = e(4).Array.from);
        },
        function (t, n, e) {
            "use strict";
            var r = e(10),
                o = e(5),
                i = e(20),
                u = e(48),
                c = e(49),
                s = e(19),
                a = e(95),
                f = e(50);
            o(
                o.S +
                    o.F *
                        !e(51)(function (t) {
                            Array.from(t);
                        }),
                "Array",
                {
                    from: function (t) {
                        var n,
                            e,
                            o,
                            l,
                            p = i(t),
                            h = "function" == typeof this ? this : Array,
                            d = arguments.length,
                            v = d > 1 ? arguments[1] : void 0,
                            y = void 0 !== v,
                            m = 0,
                            g = f(p);
                        if ((y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), void 0 == g || (h == Array && c(g)))) for (n = s(p.length), e = new h(n); n > m; m++) a(e, m, y ? v(p[m], m) : p[m]);
                        else for (l = g.call(p), e = new h(); !(o = l.next()).done; m++) a(e, m, y ? u(l, v, [o.value, m], !0) : o.value);
                        return (e.length = m), e;
                    },
                }
            );
        },
        function (t, n, e) {
            "use strict";
            var r = e(7),
                o = e(17);
            t.exports = function (t, n, e) {
                n in t ? r.f(t, n, o(0, e)) : (t[n] = e);
            };
        },
        function (t, n, e) {
            e(97), (t.exports = e(4).Object.assign);
        },
        function (t, n, e) {
            var r = e(5);
            r(r.S + r.F, "Object", { assign: e(55) });
        },
        function (t, n, e) {
            "use strict";
            (function (t) {
                var e = "object" == typeof t && t && t.Object === Object && t;
                n.a = e;
            }.call(n, e(99)));
        },
        function (t, n) {
            var e;
            e = (function () {
                return this;
            })();
            try {
                e = e || Function("return this")() || (0, eval)("this");
            } catch (t) {
                "object" == typeof window && (e = window);
            }
            t.exports = e;
        },
    ]).default;
});

/* Swiper   */

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Swiper = t());
})(this, function () {
    "use strict";
    function e(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof r) return e;
        if (e)
            if ("string" == typeof e) {
                var s,
                    n,
                    o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    var l = "div";
                    for (
                        0 === o.indexOf("<li") && (l = "ul"),
                            0 === o.indexOf("<tr") && (l = "tbody"),
                            (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (l = "tr"),
                            0 === o.indexOf("<tbody") && (l = "table"),
                            0 === o.indexOf("<option") && (l = "select"),
                            (n = document.createElement(l)).innerHTML = o,
                            i = 0;
                        i < n.childNodes.length;
                        i += 1
                    )
                        a.push(n.childNodes[i]);
                } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i]);
            } else if (e.nodeType || e === window || e === document) a.push(e);
            else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new r(a);
    }
    function t(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
    }
    function a() {
        var e = "onwheel" in d;
        if (!e) {
            var t = d.createElement("div");
            t.setAttribute("onwheel", "return;"), (e = "function" == typeof t.onwheel);
        }
        return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e;
    }
    var i,
        s = (i =
            "undefined" == typeof window
                ? {
                      navigator: { userAgent: "" },
                      location: {},
                      history: {},
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      getComputedStyle: function () {
                          return {};
                      },
                      Image: function () {},
                      Date: function () {},
                      screen: {},
                  }
                : window),
        r = function (e) {
            for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
            return (t.length = e.length), this;
        };
    (e.fn = r.prototype), (e.Class = r), (e.Dom7 = r);
    "resize scroll".split(" ");
    var n = {
        addClass: function (e) {
            var t = this;
            if (void 0 === e) return this;
            for (var a = e.split(" "), i = 0; i < a.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.add(a[i]);
            return this;
        },
        removeClass: function (e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.remove(a[i]);
            return this;
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
            return this;
        },
        attr: function (e, t) {
            var a = arguments,
                i = this;
            if (1 !== arguments.length || "string" != typeof e) {
                for (var s = 0; s < this.length; s += 1)
                    if (2 === a.length) i[s].setAttribute(e, t);
                    else for (var r in e) (i[s][r] = e[r]), i[s].setAttribute(r, e[r]);
                return this;
            }
            if (this[0]) return this[0].getAttribute(e);
        },
        removeAttr: function (e) {
            for (var t = this, a = 0; a < this.length; a += 1) t[a].removeAttribute(e);
            return this;
        },
        data: function (e, t) {
            var a,
                i = this;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), (a.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((a = this[0])) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var r = a.getAttribute("data-" + e);
                if (r) return r;
            }
        },
        transform: function (e) {
            for (var t = this, a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                (i.webkitTransform = e), (i.transform = e);
            }
            return this;
        },
        transition: function (e) {
            var t = this;
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                (i.webkitTransitionDuration = e), (i.transitionDuration = e);
            }
            return this;
        },
        on: function () {
            function t(t) {
                var a = t.target;
                if (a) {
                    var i = t.target.dom7EventData || [];
                    if ((i.unshift(t), e(a).is(o))) l.apply(a, i);
                    else for (var s = e(a).parents(), r = 0; r < s.length; r += 1) e(s[r]).is(o) && l.apply(s[r], i);
                }
            }
            function a(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), l.apply(this, t);
            }
            for (var i = this, s = [], r = arguments.length; r--; ) s[r] = arguments[r];
            var n = s[0],
                o = s[1],
                l = s[2],
                d = s[3];
            if ("function" == typeof s[1]) {
                var p;
                (n = (p = s)[0]), (l = p[1]), (d = p[2]), (o = void 0);
            }
            d || (d = !1);
            for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
                var v = i[h];
                if (o) for (c = 0; c < u.length; c += 1) v.dom7LiveListeners || (v.dom7LiveListeners = []), v.dom7LiveListeners.push({ type: n, listener: l, proxyListener: t }), v.addEventListener(u[c], t, d);
                else for (c = 0; c < u.length; c += 1) v.dom7Listeners || (v.dom7Listeners = []), v.dom7Listeners.push({ type: n, listener: l, proxyListener: a }), v.addEventListener(u[c], a, d);
            }
            return this;
        },
        off: function () {
            for (var e = this, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            if ("function" == typeof t[1]) {
                var o;
                (i = (o = t)[0]), (r = o[1]), (n = o[2]), (s = void 0);
            }
            n || (n = !1);
            for (var l = i.split(" "), d = 0; d < l.length; d += 1)
                for (var p = 0; p < this.length; p += 1) {
                    var c = e[p];
                    if (s) {
                        if (c.dom7LiveListeners)
                            for (var u = 0; u < c.dom7LiveListeners.length; u += 1)
                                r
                                    ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n)
                                    : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n);
                    } else if (c.dom7Listeners)
                        for (var h = 0; h < c.dom7Listeners.length; h += 1)
                            r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n);
                }
            return this;
        },
        trigger: function () {
            for (var e = this, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
                for (var n = 0; n < this.length; n += 1) {
                    var o = void 0;
                    try {
                        o = new window.CustomEvent(i[r], { detail: s, bubbles: !0, cancelable: !0 });
                    } catch (e) {
                        (o = document.createEvent("Event")).initEvent(i[r], !0, !0), (o.detail = s);
                    }
                    (e[n].dom7EventData = t.filter(function (e, t) {
                        return t > 0;
                    })),
                        e[n].dispatchEvent(o),
                        (e[n].dom7EventData = []),
                        delete e[n].dom7EventData;
                }
            return this;
        },
        transitionEnd: function (e) {
            function t(r) {
                if (r.target === this) for (e.call(this, r), a = 0; a < i.length; a += 1) s.off(i[a], t);
            }
            var a,
                i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            if (e) for (a = 0; a < i.length; a += 1) s.on(i[a], t);
            return this;
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function () {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = document.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === window ? window.scrollY : e.scrollTop,
                    n = e === window ? window.scrollX : e.scrollLeft;
                return { top: t.top + r - i, left: t.left + n - s };
            }
            return null;
        },
        css: function (e, t) {
            var a,
                i = this;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (var s in e) i[a].style[s] = e[s];
                    return this;
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) i[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function (e) {
            var t = this;
            if (!e) return this;
            for (var a = 0; a < this.length; a += 1) if (!1 === e.call(t[a], a, t[a])) return t;
            return this;
        },
        html: function (e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var a = 0; a < this.length; a += 1) t[a].innerHTML = e;
            return this;
        },
        text: function (e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var a = 0; a < this.length; a += 1) t[a].textContent = e;
            return this;
        },
        is: function (t) {
            var a,
                i,
                s = this[0];
            if (!s || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (s.matches) return s.matches(t);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
                if (s.msMatchesSelector) return s.msMatchesSelector(t);
                for (a = e(t), i = 0; i < a.length; i += 1) if (a[i] === s) return !0;
                return !1;
            }
            if (t === document) return s === document;
            if (t === window) return s === window;
            if (t.nodeType || t instanceof r) {
                for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1) if (a[i] === s) return !0;
                return !1;
            }
            return !1;
        },
        index: function () {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t,
                a = this.length;
            return e > a - 1 ? new r([]) : e < 0 ? ((t = a + e), new r(t < 0 ? [] : [this[t]])) : new r([this[e]]);
        },
        append: function () {
            for (var e = this, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            for (var i, s = 0; s < t.length; s += 1) {
                i = t[s];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof i) {
                        var o = document.createElement("div");
                        for (o.innerHTML = i; o.firstChild; ) e[n].appendChild(o.firstChild);
                    } else if (i instanceof r) for (var l = 0; l < i.length; l += 1) e[n].appendChild(i[l]);
                    else e[n].appendChild(i);
            }
            return this;
        },
        prepend: function (e) {
            var t,
                a,
                i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = document.createElement("div");
                    for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]);
                } else if (e instanceof r) for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
                else i[t].insertBefore(e, i[t].childNodes[0]);
            return this;
        },
        next: function (t) {
            return new r(this.length > 0 ? (t ? (this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : []) : this[0].nextElementSibling ? [this[0].nextElementSibling] : []) : []);
        },
        nextAll: function (t) {
            var a = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
            }
            return new r(a);
        },
        prev: function (t) {
            if (this.length > 0) {
                var a = this[0];
                return new r(t ? (a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : []) : a.previousElementSibling ? [a.previousElementSibling] : []);
            }
            return new r([]);
        },
        prevAll: function (t) {
            var a = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
            }
            return new r(a);
        },
        parent: function (a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1) null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
            return e(t(s));
        },
        parents: function (a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1) for (var n = i[r].parentNode; n; ) a ? e(n).is(a) && s.push(n) : s.push(n), (n = n.parentNode);
            return e(t(s));
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
            for (var t = this, a = [], i = 0; i < this.length; i += 1) for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1) a.push(s[n]);
            return new r(a);
        },
        children: function (a) {
            for (var i = this, s = [], n = 0; n < this.length; n += 1) for (var o = i[n].childNodes, l = 0; l < o.length; l += 1) a ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l]) : 1 === o[l].nodeType && s.push(o[l]);
            return new r(t(s));
        },
        remove: function () {
            for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
            return this;
        },
        add: function () {
            for (var t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            var i,
                s,
                r = this;
            for (i = 0; i < t.length; i += 1) {
                var n = e(t[i]);
                for (s = 0; s < n.length; s += 1) (r[r.length] = n[s]), (r.length += 1);
            }
            return r;
        },
        styles: function () {
            return this[0] ? window.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(n).forEach(function (t) {
        e.fn[t] = n[t];
    });
    var o,
        l = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function () {
                return Date.now();
            },
            getTranslate: function (e, t) {
                void 0 === t && (t = "x");
                var a,
                    i,
                    r,
                    n = s.getComputedStyle(e, null);
                return (
                    s.WebKitCSSMatrix
                        ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
                              (i = i
                                  .split(", ")
                                  .map(function (e) {
                                      return e.replace(",", ".");
                                  })
                                  .join(", ")),
                          (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
                        : (a = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                    "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
                    "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
                    i || 0
                );
            },
            parseUrlQuery: function (e) {
                var t,
                    a,
                    i,
                    r,
                    n = {},
                    o = e || s.location.href;
                if ("string" == typeof o && o.length)
                    for (
                        r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e;
                        })).length,
                            t = 0;
                        t < r;
                        t += 1
                    )
                        (i = a[t].replace(/#\S+/g, "").split("=")), (n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
                return n;
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (void 0 !== s && null !== s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var d = r[n],
                                p = Object.getOwnPropertyDescriptor(s, d);
                            void 0 !== p && p.enumerable && (l.isObject(a[d]) && l.isObject(s[d]) ? l.extend(a[d], s[d]) : !l.isObject(a[d]) && l.isObject(s[d]) ? ((a[d] = {}), l.extend(a[d], s[d])) : (a[d] = s[d]));
                        }
                }
                return a;
            },
        },
        d = (o =
            "undefined" == typeof document
                ? {
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      activeElement: { blur: function () {}, nodeName: "" },
                      querySelector: function () {
                          return {};
                      },
                      querySelectorAll: function () {
                          return [];
                      },
                      createElement: function () {
                          return {
                              style: {},
                              setAttribute: function () {},
                              getElementsByTagName: function () {
                                  return [];
                              },
                          };
                      },
                      location: { hash: "" },
                  }
                : document),
        p = {
            touch: (s.Modernizr && !0 === s.Modernizr.touch) || !!("ontouchstart" in s || (s.DocumentTouch && d instanceof s.DocumentTouch)),
            transforms3d:
                (s.Modernizr && !0 === s.Modernizr.csstransforms3d) ||
                (function () {
                    var e = d.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
                })(),
            flexbox: (function () {
                for (
                    var e = d.createElement("div").style,
                        t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),
                        a = 0;
                    a < t.length;
                    a += 1
                )
                    if (t[a] in e) return !0;
                return !1;
            })(),
            observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
            passiveListener: (function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0;
                        },
                    });
                    s.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
            })(),
            gestures: "ongesturestart" in s,
        },
        c = function (e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function (e) {
                        t.on(e, t.params.on[e]);
                    });
        },
        u = { components: {} };
    (c.prototype.on = function (e, t) {
        var a = this;
        return "function" != typeof t
            ? a
            : (e.split(" ").forEach(function (e) {
                  a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t);
              }),
              a);
    }),
        (c.prototype.once = function (e, t) {
            function a() {
                for (var s = [], r = arguments.length; r--; ) s[r] = arguments[r];
                t.apply(i, s), i.off(e, a);
            }
            var i = this;
            return "function" != typeof t ? i : i.on(e, a);
        }),
        (c.prototype.off = function (e, t) {
            var a = this;
            return (
                e.split(" ").forEach(function (e) {
                    void 0 === t
                        ? (a.eventsListeners[e] = [])
                        : a.eventsListeners[e].forEach(function (i, s) {
                              i === t && a.eventsListeners[e].splice(s, 1);
                          });
                }),
                a
            );
        }),
        (c.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var a = this;
            if (!a.eventsListeners) return a;
            var i, s, r;
            return (
                "string" == typeof e[0] || Array.isArray(e[0]) ? ((i = e[0]), (s = e.slice(1, e.length)), (r = a)) : ((i = e[0].events), (s = e[0].data), (r = e[0].context || a)),
                (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
                    if (a.eventsListeners[e]) {
                        var t = [];
                        a.eventsListeners[e].forEach(function (e) {
                            t.push(e);
                        }),
                            t.forEach(function (e) {
                                e.apply(r, s);
                            });
                    }
                }),
                a
            );
        }),
        (c.prototype.useModulesParams = function (e) {
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (a) {
                    var i = t.modules[a];
                    i.params && l.extend(e, i.params);
                });
        }),
        (c.prototype.useModules = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (a) {
                    var i = t.modules[a],
                        s = e[a] || {};
                    i.instance &&
                        Object.keys(i.instance).forEach(function (e) {
                            var a = i.instance[e];
                            t[e] = "function" == typeof a ? a.bind(t) : a;
                        }),
                        i.on &&
                            t.on &&
                            Object.keys(i.on).forEach(function (e) {
                                t.on(e, i.on[e]);
                            }),
                        i.create && i.create.bind(t)(s);
                });
        }),
        (u.components.set = function (e) {
            var t = this;
            t.use && t.use(e);
        }),
        (c.installModule = function (e) {
            for (var t = [], a = arguments.length - 1; a-- > 0; ) t[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();
            return (
                (i.prototype.modules[s] = e),
                e.proto &&
                    Object.keys(e.proto).forEach(function (t) {
                        i.prototype[t] = e.proto[t];
                    }),
                e.static &&
                    Object.keys(e.static).forEach(function (t) {
                        i[t] = e.static[t];
                    }),
                e.install && e.install.apply(i, t),
                i
            );
        }),
        (c.use = function (e) {
            for (var t = [], a = arguments.length - 1; a-- > 0; ) t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e)
                ? (e.forEach(function (e) {
                      return i.installModule(e);
                  }),
                  i)
                : i.installModule.apply(i, [e].concat(t));
        }),
        Object.defineProperties(c, u);
    var h = {
            updateSize: function () {
                var e,
                    t,
                    a = this,
                    i = a.$el;
                (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
                    (t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
                    (0 === e && a.isHorizontal()) ||
                        (0 === t && a.isVertical()) ||
                        ((e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                        (t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                        l.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
            },
            updateSlides: function () {
                var e = this,
                    t = e.params,
                    a = e.$wrapperEl,
                    i = e.size,
                    s = e.rtl,
                    r = e.wrongRTL,
                    n = a.children("." + e.params.slideClass),
                    o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length,
                    d = [],
                    c = [],
                    u = [],
                    h = t.slidesOffsetBefore;
                "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
                var v = t.slidesOffsetAfter;
                "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
                var f = o,
                    m = e.snapGrid.length,
                    g = e.snapGrid.length,
                    b = t.spaceBetween,
                    w = -h,
                    y = 0,
                    x = 0;
                if (void 0 !== i) {
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * i), (e.virtualSize = -b), s ? n.css({ marginLeft: "", marginTop: "" }) : n.css({ marginRight: "", marginBottom: "" });
                    var T;
                    t.slidesPerColumn > 1 &&
                        ((T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn),
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                    for (var E, S = t.slidesPerColumn, C = T / S, M = C - (t.slidesPerColumn * C - o), z = 0; z < o; z += 1) {
                        E = 0;
                        var P = n.eq(z);
                        if (t.slidesPerColumn > 1) {
                            var k = void 0,
                                $ = void 0,
                                I = void 0;
                            "column" === t.slidesPerColumnFill
                                ? ((I = z - ($ = Math.floor(z / S)) * S),
                                  ($ > M || ($ === M && I === S - 1)) && (I += 1) >= S && ((I = 0), ($ += 1)),
                                  (k = $ + (I * T) / S),
                                  P.css({ "-webkit-box-ordinal-group": k, "-moz-box-ordinal-group": k, "-ms-flex-order": k, "-webkit-order": k, order: k }))
                                : ($ = z - (I = Math.floor(z / C)) * C),
                                P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px")
                                    .attr("data-swiper-column", $)
                                    .attr("data-swiper-row", I);
                        }
                        "none" !== P.css("display") &&
                            ("auto" === t.slidesPerView
                                ? ((E = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0)), t.roundLengths && (E = Math.floor(E)))
                                : ((E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView), t.roundLengths && (E = Math.floor(E)), n[z] && (e.isHorizontal() ? (n[z].style.width = E + "px") : (n[z].style.height = E + "px"))),
                            n[z] && (n[z].swiperSlideSize = E),
                            u.push(E),
                            t.centeredSlides
                                ? ((w = w + E / 2 + y / 2 + b), 0 === y && 0 !== z && (w = w - i / 2 - b), 0 === z && (w = w - i / 2 - b), Math.abs(w) < 0.001 && (w = 0), x % t.slidesPerGroup == 0 && d.push(w), c.push(w))
                                : (x % t.slidesPerGroup == 0 && d.push(w), c.push(w), (w = w + E + b)),
                            (e.virtualSize += E + b),
                            (y = E),
                            (x += 1));
                    }
                    e.virtualSize = Math.max(e.virtualSize, i) + v;
                    var L;
                    if (
                        (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                        (p.flexbox && !t.setWrapperSize) || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
                        t.slidesPerColumn > 1 &&
                            ((e.virtualSize = (E + t.spaceBetween) * T),
                            (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                            e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
                            t.centeredSlides))
                    ) {
                        L = [];
                        for (var D = 0; D < d.length; D += 1) d[D] < e.virtualSize + d[0] && L.push(d[D]);
                        d = L;
                    }
                    if (!t.centeredSlides) {
                        L = [];
                        for (var O = 0; O < d.length; O += 1) d[O] <= e.virtualSize - i && L.push(d[O]);
                        (d = L), Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i);
                    }
                    0 === d.length && (d = [0]),
                        0 !== t.spaceBetween && (e.isHorizontal() ? (s ? n.css({ marginLeft: b + "px" }) : n.css({ marginRight: b + "px" })) : n.css({ marginBottom: b + "px" })),
                        l.extend(e, { slides: n, snapGrid: d, slidesGrid: c, slidesSizesGrid: u }),
                        o !== f && e.emit("slidesLengthChange"),
                        d.length !== m && e.emit("snapGridLengthChange"),
                        c.length !== g && e.emit("slidesGridLengthChange"),
                        (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
                }
            },
            updateAutoHeight: function () {
                var e,
                    t = this,
                    a = [],
                    i = 0;
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                        var s = t.activeIndex + e;
                        if (s > t.slides.length) break;
                        a.push(t.slides.eq(s)[0]);
                    }
                else a.push(t.slides.eq(t.activeIndex)[0]);
                for (e = 0; e < a.length; e += 1)
                    if (void 0 !== a[e]) {
                        var r = a[e].offsetHeight;
                        i = r > i ? r : i;
                    }
                i && t.$wrapperEl.css("height", i + "px");
            },
            updateSlidesOffset: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop;
            },
            updateSlidesProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.slides,
                    s = t.rtl;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = -e;
                    s && (r = e), i.removeClass(a.slideVisibleClass);
                    for (var n = 0; n < i.length; n += 1) {
                        var o = i[n],
                            l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                        if (a.watchSlidesVisibility) {
                            var d = -(r - o.swiperSlideOffset),
                                p = d + t.slidesSizesGrid[n];
                            ((d >= 0 && d < t.size) || (p > 0 && p <= t.size) || (d <= 0 && p >= t.size)) && i.eq(n).addClass(a.slideVisibleClass);
                        }
                        o.progress = s ? -l : l;
                    }
                }
            },
            updateProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.maxTranslate() - t.minTranslate(),
                    s = t.progress,
                    r = t.isBeginning,
                    n = t.isEnd,
                    o = r,
                    d = n;
                0 === i ? ((s = 0), (r = !0), (n = !0)) : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = s >= 1)),
                    l.extend(t, { progress: s, isBeginning: r, isEnd: n }),
                    (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
                    r && !o && t.emit("reachBeginning toEdge"),
                    n && !d && t.emit("reachEnd toEdge"),
                    ((o && !r) || (d && !n)) && t.emit("fromEdge"),
                    t.emit("progress", s);
            },
            updateSlidesClasses: function () {
                var e = this,
                    t = e.slides,
                    a = e.params,
                    i = e.$wrapperEl,
                    s = e.activeIndex,
                    r = e.realIndex,
                    n = e.virtual && a.virtual.enabled;
                t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
                var o;
                (o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass),
                    a.loop &&
                        (o.hasClass(a.slideDuplicateClass)
                            ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass)
                            : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
                var l = o
                    .nextAll("." + a.slideClass)
                    .eq(0)
                    .addClass(a.slideNextClass);
                a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
                var d = o
                    .prevAll("." + a.slideClass)
                    .eq(0)
                    .addClass(a.slidePrevClass);
                a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass),
                    a.loop &&
                        (l.hasClass(a.slideDuplicateClass)
                            ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass)
                            : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass),
                        d.hasClass(a.slideDuplicateClass)
                            ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass)
                            : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (e) {
                var t,
                    a = this,
                    i = a.rtl ? a.translate : -a.translate,
                    s = a.slidesGrid,
                    r = a.snapGrid,
                    n = a.params,
                    o = a.activeIndex,
                    d = a.realIndex,
                    p = a.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? (i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? (c = u) : i >= s[u] && i < s[u + 1] && (c = u + 1)) : i >= s[u] && (c = u);
                    n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                }
                if (((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / n.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== o)) {
                    var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    l.extend(a, { snapIndex: t, realIndex: h, previousIndex: o, activeIndex: c }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit("slideChange");
                } else t !== p && ((a.snapIndex = t), a.emit("snapIndexChange"));
            },
            updateClickedSlide: function (t) {
                var a = this,
                    i = a.params,
                    s = e(t.target).closest("." + i.slideClass)[0],
                    r = !1;
                if (s) for (var n = 0; n < a.slides.length; n += 1) a.slides[n] === s && (r = !0);
                if (!s || !r) return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
                (a.clickedSlide = s),
                    a.virtual && a.params.virtual.enabled ? (a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10)) : (a.clickedIndex = e(s).index()),
                    i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
            },
        },
        v = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this,
                    a = t.params,
                    i = t.rtl,
                    s = t.translate,
                    r = t.$wrapperEl;
                if (a.virtualTranslate) return i ? -s : s;
                var n = l.getTranslate(r[0], e);
                return i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
                var a = this,
                    i = a.rtl,
                    s = a.params,
                    r = a.$wrapperEl,
                    n = a.progress,
                    o = 0,
                    l = 0;
                a.isHorizontal() ? (o = i ? -e : e) : (l = e),
                    s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                    s.virtualTranslate || (p.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
                    (a.translate = a.isHorizontal() ? o : l);
                var d = a.maxTranslate() - a.minTranslate();
                (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
            },
            minTranslate: function () {
                return -this.snapGrid[0];
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
        },
        f = {
            setTransition: function (e, t) {
                var a = this;
                a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
            },
            transitionStart: function (e) {
                void 0 === e && (e = !0);
                var t = this,
                    a = t.activeIndex,
                    i = t.params,
                    s = t.previousIndex;
                i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit("slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"));
            },
            transitionEnd: function (e) {
                void 0 === e && (e = !0);
                var t = this,
                    a = t.activeIndex,
                    i = t.previousIndex;
                (t.animating = !1), t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"));
            },
        },
        m = (function () {
            return {
                isSafari: (function () {
                    var e = s.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
                })(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
                ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled,
                ieTouch: (s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1) || (s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1),
                lteIE9: (function () {
                    var e = d.createElement("div");
                    return (e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e"), 1 === e.getElementsByTagName("i").length;
                })(),
            };
        })(),
        g = {
            slideTo: function (e, t, a, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
                var s = this,
                    r = e;
                r < 0 && (r = 0);
                var n = s.params,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    d = s.previousIndex,
                    p = s.activeIndex,
                    c = s.rtl,
                    u = s.$wrapperEl,
                    h = Math.floor(r / n.slidesPerGroup);
                h >= o.length && (h = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
                var v = -o[h];
                if ((s.updateProgress(v), n.normalizeSlideIndex)) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
                return !(
                    (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) ||
                    (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) ||
                    ((c && -v === s.translate) || (!c && v === s.translate)
                        ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), 1)
                        : (0 === t || m.lteIE9
                              ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a))
                              : (s.setTransition(t),
                                s.setTranslate(v),
                                s.updateActiveIndex(r),
                                s.updateSlidesClasses(),
                                s.emit("beforeTransitionStart", t, i),
                                s.transitionStart(a),
                                s.animating ||
                                    ((s.animating = !0),
                                    u.transitionEnd(function () {
                                        s && !s.destroyed && s.transitionEnd(a);
                                    }))),
                          0))
                );
            },
            slideNext: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
            },
            slidePrev: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a);
            },
            slideReset: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this;
                return i.slideTo(i.activeIndex, e, t, a);
            },
            slideToClickedSlide: function () {
                var t,
                    a = this,
                    i = a.params,
                    s = a.$wrapperEl,
                    r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
                    n = a.clickedIndex;
                if (i.loop) {
                    if (a.animating) return;
                    (t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        i.centeredSlides
                            ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2
                                ? (a.loopFix(),
                                  (n = s
                                      .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                      .eq(0)
                                      .index()),
                                  l.nextTick(function () {
                                      a.slideTo(n);
                                  }))
                                : a.slideTo(n)
                            : n > a.slides.length - r
                            ? (a.loopFix(),
                              (n = s
                                  .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                  .eq(0)
                                  .index()),
                              l.nextTick(function () {
                                  a.slideTo(n);
                              }))
                            : a.slideTo(n);
                } else a.slideTo(n);
            },
        },
        b = {
            loopCreate: function () {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl;
                i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
                var s = i.children("." + a.slideClass);
                if (a.loopFillGroupWithBlank) {
                    var r = a.slidesPerGroup - (s.length % a.slidesPerGroup);
                    if (r !== a.slidesPerGroup) {
                        for (var n = 0; n < r; n += 1) {
                            var o = e(d.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                            i.append(o);
                        }
                        s = i.children("." + a.slideClass);
                    }
                }
                "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length),
                    (t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10)),
                    (t.loopedSlides += a.loopAdditionalSlides),
                    t.loopedSlides > s.length && (t.loopedSlides = s.length);
                var l = [],
                    p = [];
                s.each(function (a, i) {
                    var r = e(i);
                    a < t.loopedSlides && p.push(i), a < s.length && a >= s.length - t.loopedSlides && l.push(i), r.attr("data-swiper-slide-index", a);
                });
                for (var c = 0; c < p.length; c += 1) i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
                for (var u = l.length - 1; u >= 0; u -= 1) i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
            },
            loopFix: function () {
                var e,
                    t = this,
                    a = t.params,
                    i = t.activeIndex,
                    s = t.slides,
                    r = t.loopedSlides,
                    n = t.allowSlidePrev,
                    o = t.allowSlideNext;
                (t.allowSlidePrev = !0),
                    (t.allowSlideNext = !0),
                    i < r
                        ? ((e = s.length - 3 * r + i), (e += r), t.slideTo(e, 0, !1, !0))
                        : (("auto" === a.slidesPerView && i >= 2 * r) || i > s.length - 2 * a.slidesPerView) && ((e = -s.length + i + r), (e += r), t.slideTo(e, 0, !1, !0)),
                    (t.allowSlidePrev = n),
                    (t.allowSlideNext = o);
            },
            loopDestroy: function () {
                var e = this,
                    t = e.$wrapperEl,
                    a = e.params,
                    i = e.slides;
                t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
            },
        },
        w = {
            setGrabCursor: function (e) {
                var t = this;
                if (!p.touch && t.params.simulateTouch) {
                    var a = t.el;
                    (a.style.cursor = "move"), (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (a.style.cursor = e ? "grabbing" : "grab");
                }
            },
            unsetGrabCursor: function () {
                var e = this;
                p.touch || (e.el.style.cursor = "");
            },
        },
        y = {
            appendSlide: function (e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), (i.observer && p.observer) || t.update();
            },
            prependSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length;
                } else i.prepend(e);
                a.loop && t.loopCreate(), (a.observer && p.observer) || t.update(), t.slideTo(r, 0, !1);
            },
            removeSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (t.loopDestroy(), (t.slides = i.children("." + a.slideClass)));
                var r,
                    n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) (r = e[o]), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0);
                } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), (n = Math.max(n, 0));
                a.loop && t.loopCreate(), (a.observer && p.observer) || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
            },
            removeAllSlides: function () {
                for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
                e.removeSlide(t);
            },
        },
        x = (function () {
            var e = s.navigator.userAgent,
                t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: s.cordova || s.phonegap, phonegap: s.cordova || s.phonegap },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/),
                n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
                (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
                i && !a && ((t.os = "android"), (t.osVersion = i[2]), (t.android = !0), (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
                (r || o || n) && ((t.os = "ios"), (t.ios = !0)),
                o && !n && ((t.osVersion = o[2].replace(/_/g, ".")), (t.iphone = !0)),
                r && ((t.osVersion = r[2].replace(/_/g, ".")), (t.ipad = !0)),
                n && ((t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null), (t.iphone = !0)),
                t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
                (t.desktop = !(t.os || t.android || t.webView)),
                (t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                t.os && "ios" === t.os)
            ) {
                var l = t.osVersion.split("."),
                    p = d.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (n || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0;
            }
            return (t.pixelRatio = s.devicePixelRatio || 1), t;
        })(),
        T = function (t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                r = a.touches,
                n = t;
            if ((n.originalEvent && (n = n.originalEvent), (i.isTouchEvent = "touchstart" === n.type), (i.isTouchEvent || !("which" in n) || 3 !== n.which) && (!i.isTouched || !i.isMoved)))
                if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0]) a.allowClick = !0;
                else if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
                    (r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX), (r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY);
                    var o = r.currentX,
                        p = r.currentY;
                    if (!(x.ios && !x.cordova && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold && o >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
                        if (
                            (l.extend(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                            (r.startX = o),
                            (r.startY = p),
                            (i.touchStartTime = l.now()),
                            (a.allowClick = !0),
                            a.updateSize(),
                            (a.swipeDirection = void 0),
                            s.threshold > 0 && (i.allowThresholdMove = !1),
                            "touchstart" !== n.type)
                        ) {
                            var c = !0;
                            e(n.target).is(i.formElements) && (c = !1), d.activeElement && e(d.activeElement).is(i.formElements) && d.activeElement.blur(), c && a.allowTouchMove && n.preventDefault();
                        }
                        a.emit("touchStart", n);
                    }
                }
        },
        E = function (t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                r = a.touches,
                n = a.rtl,
                o = t;
            if ((o.originalEvent && (o = o.originalEvent), !i.isTouchEvent || "mousemove" !== o.type)) {
                var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper) return (r.startX = p), void (r.startY = c);
                if (!a.allowTouchMove) return (a.allowClick = !1), void (i.isTouched && (l.extend(r, { startX: p, startY: c, currentX: p, currentY: c }), (i.touchStartTime = l.now())));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (a.isVertical()) {
                        if ((r.currentY < r.startY && a.translate <= a.maxTranslate()) || (r.currentY > r.startY && a.translate >= a.minTranslate())) return;
                    } else if ((r.currentX < r.startX && a.translate <= a.maxTranslate()) || (r.currentX > r.startX && a.translate >= a.minTranslate())) return;
                if (i.isTouchEvent && d.activeElement && o.target === d.activeElement && e(o.target).is(i.formElements)) return (i.isMoved = !0), void (a.allowClick = !1);
                if ((i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                    (r.currentX = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX), (r.currentY = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY);
                    var u = r.currentX - r.startX,
                        h = r.currentY - r.startY;
                    if (void 0 === i.isScrolling) {
                        var v;
                        (a.isHorizontal() && r.currentY === r.startY) || (a.isVertical() && r.currentX === r.startX)
                            ? (i.isScrolling = !1)
                            : u * u + h * h >= 25 && ((v = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI), (i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle));
                    }
                    if ((i.isScrolling && a.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)), i.isTouched))
                        if (i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                            (a.allowClick = !1),
                                o.preventDefault(),
                                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                                i.isMoved ||
                                    (s.loop && a.loopFix(),
                                    (i.startTranslate = a.getTranslate()),
                                    a.setTransition(0),
                                    a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    (i.allowMomentumBounce = !1),
                                    !s.grabCursor || (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) || a.setGrabCursor(!0),
                                    a.emit("sliderFirstMove", o)),
                                a.emit("sliderMove", o),
                                (i.isMoved = !0);
                            var f = a.isHorizontal() ? u : h;
                            (r.diff = f), (f *= s.touchRatio), n && (f = -f), (a.swipeDirection = f > 0 ? "prev" : "next"), (i.currentTranslate = f + i.startTranslate);
                            var m = !0,
                                g = s.resistanceRatio;
                            if (
                                (s.touchReleaseOnEdges && (g = 0),
                                f > 0 && i.currentTranslate > a.minTranslate()
                                    ? ((m = !1), s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, g)))
                                    : f < 0 && i.currentTranslate < a.maxTranslate() && ((m = !1), s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, g))),
                                m && (o.preventedByNestedSwiper = !0),
                                !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                s.threshold > 0)
                            ) {
                                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return (
                                        (i.allowThresholdMove = !0), (r.startX = r.currentX), (r.startY = r.currentY), (i.currentTranslate = i.startTranslate), void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                    );
                            }
                            s.followFinger &&
                                ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()),
                                s.freeMode &&
                                    (0 === i.velocities.length && i.velocities.push({ position: r[a.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                    i.velocities.push({ position: r[a.isHorizontal() ? "currentX" : "currentY"], time: l.now() })),
                                a.updateProgress(i.currentTranslate),
                                a.setTranslate(i.currentTranslate));
                        }
                }
            }
        },
        S = function (e) {
            var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtl,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                d = t.snapGrid,
                p = e;
            if ((p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), (a.allowTouchCallbacks = !1), a.isTouched)) {
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c = l.now(),
                    u = c - a.touchStartTime;
                if (
                    (t.allowClick &&
                        (t.updateClickedSlide(p),
                        t.emit("tap", p),
                        u < 300 &&
                            c - a.lastClickTime > 300 &&
                            (a.clickTimeout && clearTimeout(a.clickTimeout),
                            (a.clickTimeout = l.nextTick(function () {
                                t && !t.destroyed && t.emit("click", p);
                            }, 300))),
                        u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", p))),
                    (a.lastClickTime = l.now()),
                    l.nextTick(function () {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                )
                    return (a.isTouched = !1), void (a.isMoved = !1);
                (a.isTouched = !1), (a.isMoved = !1);
                var h;
                if (((h = i.followFinger ? (r ? t.translate : -t.translate) : -a.currentTranslate), i.freeMode)) {
                    if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (h > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (a.velocities.length > 1) {
                            var v = a.velocities.pop(),
                                f = a.velocities.pop(),
                                m = v.position - f.position,
                                g = v.time - f.time;
                            (t.velocity = m / g), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || l.now() - v.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= i.freeModeMomentumVelocityRatio), (a.velocities.length = 0);
                        var b = 1e3 * i.freeModeMomentumRatio,
                            w = t.velocity * b,
                            y = t.translate + w;
                        r && (y = -y);
                        var x,
                            T = !1,
                            E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), (x = t.maxTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (y = t.maxTranslate());
                        else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), (x = t.minTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (y = t.minTranslate());
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < d.length; C += 1)
                                if (d[C] > -y) {
                                    S = C;
                                    break;
                                }
                            y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1]);
                        }
                        if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideReset();
                        i.freeModeMomentumBounce && T
                            ? (t.updateProgress(x),
                              t.setTransition(b),
                              t.setTranslate(y),
                              t.transitionStart(),
                              (t.animating = !0),
                              n.transitionEnd(function () {
                                  t &&
                                      !t.destroyed &&
                                      a.allowMomentumBounce &&
                                      (t.emit("momentumBounce"),
                                      t.setTransition(i.speed),
                                      t.setTranslate(x),
                                      n.transitionEnd(function () {
                                          t && !t.destroyed && t.transitionEnd();
                                      }));
                              }))
                            : t.velocity
                            ? (t.updateProgress(y),
                              t.setTransition(b),
                              t.setTranslate(y),
                              t.transitionStart(),
                              t.animating ||
                                  ((t.animating = !0),
                                  n.transitionEnd(function () {
                                      t && !t.destroyed && t.transitionEnd();
                                  })))
                            : t.updateProgress(y),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    }
                    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                } else {
                    for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup)
                        void 0 !== o[P + i.slidesPerGroup] ? h >= o[P] && h < o[P + i.slidesPerGroup] && ((M = P), (z = o[P + i.slidesPerGroup] - o[P])) : h >= o[P] && ((M = P), (z = o[o.length - 1] - o[o.length - 2]));
                    var k = (h - o[M]) / z;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
                    }
                }
            }
        },
        C = function () {
            var e = this,
                t = e.params,
                a = e.el,
                i = e.allowSlideNext,
                s = e.allowSlidePrev;
            if (!a || 0 !== a.offsetWidth) {
                if ((t.breakpoints && e.setBreakpoint(), (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
                    var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                (e.allowSlidePrev = s), (e.allowSlideNext = i);
            }
        },
        M = function (e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        },
        z = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        },
        P = {
            update: h,
            translate: v,
            transition: f,
            slide: g,
            loop: b,
            grabCursor: w,
            manipulation: y,
            events: {
                attachEvents: function () {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl;
                    (e.onTouchStart = T.bind(e)), (e.onTouchMove = E.bind(e)), (e.onTouchEnd = S.bind(e)), (e.onClick = M.bind(e));
                    var r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (m.ie) r.addEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (p.touch) {
                            var o = !("touchstart" !== a.start || !p.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, p.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(a.end, e.onTouchEnd, o);
                        }
                        ((t.simulateTouch && !x.ios && !x.android) || (t.simulateTouch && !p.touch && x.ios)) &&
                            (r.addEventListener("mousedown", e.onTouchStart, !1), d.addEventListener("mousemove", e.onTouchMove, n), d.addEventListener("mouseup", e.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", C);
                },
                detachEvents: function () {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl,
                        r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (m.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (p.touch) {
                            var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
                        }
                        ((t.simulateTouch && !x.ios && !x.android) || (t.simulateTouch && !p.touch && x.ios)) &&
                            (r.removeEventListener("mousedown", e.onTouchStart, !1), d.removeEventListener("mousemove", e.onTouchMove, n), d.removeEventListener("mouseup", e.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", C);
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        a = e.loopedSlides;
                    void 0 === a && (a = 0);
                    var i = e.params,
                        s = i.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var r = e.getBreakpoint(s);
                        if (r && e.currentBreakpoint !== r) {
                            var n = r in s ? s[r] : e.originalParams,
                                o = i.loop && n.slidesPerView !== i.slidesPerView;
                            if ((l.extend(e.params, n), l.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), (e.currentBreakpoint = r), o)) {
                                var d = t - a;
                                e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(d + a, 0, !1);
                            }
                            e.emit("breakpoint", n);
                        }
                    }
                },
                getBreakpoint: function (e) {
                    if (e) {
                        var t = !1,
                            a = [];
                        Object.keys(e).forEach(function (e) {
                            a.push(e);
                        }),
                            a.sort(function (e, t) {
                                return parseInt(e, 10) > parseInt(t, 10);
                            });
                        for (var i = 0; i < a.length; i += 1) {
                            var r = a[i];
                            r >= s.innerWidth && !t && (t = r);
                        }
                        return t || "max";
                    }
                },
            },
            classes: {
                addClasses: function () {
                    var e = this,
                        t = e.classNames,
                        a = e.params,
                        i = e.rtl,
                        r = e.$el,
                        n = [];
                    n.push(a.direction),
                        a.freeMode && n.push("free-mode"),
                        p.flexbox || n.push("no-flexbox"),
                        a.autoHeight && n.push("autoheight"),
                        i && n.push("rtl"),
                        a.slidesPerColumn > 1 && n.push("multirow"),
                        x.android && n.push("android"),
                        x.ios && n.push("ios"),
                        (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) && n.push("wp8-" + a.direction),
                        n.forEach(function (e) {
                            t.push(a.containerModifierClass + e);
                        }),
                        r.addClass(t.join(" "));
                },
                removeClasses: function () {
                    var e = this,
                        t = e.$el,
                        a = e.classNames;
                    t.removeClass(a.join(" "));
                },
            },
            images: {
                loadImage: function (e, t, a, i, r, n) {
                    function o() {
                        n && n();
                    }
                    var l;
                    e.complete && r ? o() : t ? (((l = new s.Image()).onload = o), (l.onerror = o), i && (l.sizes = i), a && (l.srcset = a), t && (l.src = t)) : o();
                },
                preloadImages: function () {
                    var e = this;
                    e.imagesToLoad = e.$el.find("img");
                    for (var t = 0; t < e.imagesToLoad.length; t += 1) {
                        var a = e.imagesToLoad[t];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function () {
                            void 0 !== e &&
                                null !== e &&
                                e &&
                                !e.destroyed &&
                                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        });
                    }
                },
            },
        },
        k = {},
        $ = (function (t) {
            function a() {
                for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
                var n, o;
                if (1 === i.length && i[0].constructor && i[0].constructor === Object) o = i[0];
                else {
                    var d;
                    (n = (d = i)[0]), (o = d[1]);
                }
                o || (o = {}),
                    (o = l.extend({}, o)),
                    n && !o.el && (o.el = n),
                    t.call(this, o),
                    Object.keys(P).forEach(function (e) {
                        Object.keys(P[e]).forEach(function (t) {
                            a.prototype[t] || (a.prototype[t] = P[e][t]);
                        });
                    });
                var c = this;
                Object.keys(c.modules).forEach(function (e) {
                    var t = c.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i) return;
                        if (!(a in o && "enabled" in i)) return;
                        !0 === o[a] && (o[a] = { enabled: !0 }), "object" != typeof o[a] || "enabled" in o[a] || (o[a].enabled = !0), o[a] || (o[a] = { enabled: !1 });
                    }
                });
                var u = l.extend({}, z);
                c.useModulesParams(u), (c.params = l.extend({}, u, k, o)), (c.originalParams = l.extend({}, c.params)), (c.passedParams = l.extend({}, o));
                var h = e(c.params.el);
                if ((n = h[0])) {
                    if (h.length > 1) {
                        var v = [];
                        return (
                            h.each(function (e, t) {
                                var i = l.extend({}, o, { el: t });
                                v.push(new a(i));
                            }),
                            v
                        );
                    }
                    (n.swiper = c), h.data("swiper", c);
                    var f = h.children("." + c.params.wrapperClass);
                    return (
                        l.extend(c, {
                            $el: h,
                            el: n,
                            $wrapperEl: f,
                            wrapperEl: f[0],
                            classNames: [],
                            slides: e(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === c.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === c.params.direction;
                            },
                            rtl: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
                            wrongRTL: "-webkit-box" === f.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: c.params.allowSlideNext,
                            allowSlidePrev: c.params.allowSlidePrev,
                            touchEvents: (function () {
                                var e = ["touchstart", "touchmove", "touchend"],
                                    t = ["mousedown", "mousemove", "mouseup"];
                                return (
                                    s.navigator.pointerEnabled ? (t = ["pointerdown", "pointermove", "pointerup"]) : s.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]),
                                    { start: p.touch || !c.params.simulateTouch ? e[0] : t[0], move: p.touch || !c.params.simulateTouch ? e[1] : t[1], end: p.touch || !c.params.simulateTouch ? e[2] : t[2] }
                                );
                            })(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: l.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: c.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        c.useModules(),
                        c.params.init && c.init(),
                        c
                    );
                }
            }
            t && (a.__proto__ = t), (a.prototype = Object.create(t && t.prototype)), (a.prototype.constructor = a);
            var i = { extendedDefaults: {}, defaults: {}, Class: {}, $: {} };
            return (
                (a.prototype.slidesPerViewDynamic = function () {
                    var e = this,
                        t = e.params,
                        a = e.slides,
                        i = e.slidesGrid,
                        s = e.size,
                        r = e.activeIndex,
                        n = 1;
                    if (t.centeredSlides) {
                        for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && ((n += 1), (l += a[d].swiperSlideSize) > s && (o = !0));
                        for (var p = r - 1; p >= 0; p -= 1) a[p] && !o && ((n += 1), (l += a[p].swiperSlideSize) > s && (o = !0));
                    } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                    return n;
                }),
                (a.prototype.update = function () {
                    function e() {
                        (a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate())), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
                    }
                    var t = this;
                    if (t && !t.destroyed) {
                        t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                        var a;
                        t.params.freeMode
                            ? (e(), t.params.autoHeight && t.updateAutoHeight())
                            : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                            t.emit("update");
                    }
                }),
                (a.prototype.init = function () {
                    var e = this;
                    e.initialized ||
                        (e.emit("beforeInit"),
                        e.params.breakpoints && e.setBreakpoint(),
                        e.addClasses(),
                        e.params.loop && e.loopCreate(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.params.preloadImages && e.preloadImages(),
                        e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                        e.attachEvents(),
                        (e.initialized = !0),
                        e.emit("init"));
                }),
                (a.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a = this,
                        i = a.params,
                        s = a.$el,
                        r = a.$wrapperEl,
                        n = a.slides;
                    a.emit("beforeDestroy"),
                        (a.initialized = !1),
                        a.detachEvents(),
                        i.loop && a.loopDestroy(),
                        t &&
                            (a.removeClasses(),
                            s.removeAttr("style"),
                            r.removeAttr("style"),
                            n &&
                                n.length &&
                                n
                                    .removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" "))
                                    .removeAttr("style")
                                    .removeAttr("data-swiper-slide-index")
                                    .removeAttr("data-swiper-column")
                                    .removeAttr("data-swiper-row")),
                        a.emit("destroy"),
                        Object.keys(a.eventsListeners).forEach(function (e) {
                            a.off(e);
                        }),
                        !1 !== e && ((a.$el[0].swiper = null), a.$el.data("swiper", null), l.deleteProps(a)),
                        (a.destroyed = !0);
                }),
                (a.extendDefaults = function (e) {
                    l.extend(k, e);
                }),
                (i.extendedDefaults.get = function () {
                    return k;
                }),
                (i.defaults.get = function () {
                    return z;
                }),
                (i.Class.get = function () {
                    return t;
                }),
                (i.$.get = function () {
                    return e;
                }),
                Object.defineProperties(a, i),
                a
            );
        })(c),
        I = { name: "device", proto: { device: x }, static: { device: x } },
        L = { name: "support", proto: { support: p }, static: { support: p } },
        D = { name: "browser", proto: { browser: m }, static: { browser: m } },
        O = {
            name: "resize",
            create: function () {
                var e = this;
                l.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function () {
                    var e = this;
                    s.addEventListener("resize", e.resize.resizeHandler), s.addEventListener("orientationchange", e.resize.orientationChangeHandler);
                },
                destroy: function () {
                    var e = this;
                    s.removeEventListener("resize", e.resize.resizeHandler), s.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
                },
            },
        },
        A = {
            func: s.MutationObserver || s.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new (0, A.func)(function (e) {
                        e.forEach(function (e) {
                            a.emit("observerUpdate", e);
                        });
                    });
                i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i);
            },
            init: function () {
                var e = this;
                if (p.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                var e = this;
                e.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (e.observer.observers = []);
            },
        },
        H = {
            name: "observer",
            params: { observer: !1, observeParents: !1 },
            create: function () {
                var e = this;
                l.extend(e, { observer: { init: A.init.bind(e), attach: A.attach.bind(e), destroy: A.destroy.bind(e), observers: [] } });
            },
            on: {
                init: function () {
                    this.observer.init();
                },
                destroy: function () {
                    this.observer.destroy();
                },
            },
        },
        X = {
            update: function (e) {
                function t() {
                    a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load();
                }
                var a = this,
                    i = a.params,
                    s = i.slidesPerView,
                    r = i.slidesPerGroup,
                    n = i.centeredSlides,
                    o = a.virtual,
                    d = o.from,
                    p = o.to,
                    c = o.slides,
                    u = o.slidesGrid,
                    h = o.renderSlide,
                    v = o.offset;
                a.updateActiveIndex();
                var f,
                    m = a.activeIndex || 0;
                f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
                var g, b;
                n ? ((g = Math.floor(s / 2) + r), (b = Math.floor(s / 2) + r)) : ((g = s + (r - 1)), (b = r));
                var w = Math.max((m || 0) - b, 0),
                    y = Math.min((m || 0) + g, c.length - 1),
                    x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
                if ((l.extend(a.virtual, { from: w, to: y, offset: x, slidesGrid: a.slidesGrid }), d === w && p === y && !e)) return a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"), void a.updateProgress();
                if (a.params.virtual.renderExternal)
                    return (
                        a.params.virtual.renderExternal.call(a, {
                            offset: x,
                            from: w,
                            to: y,
                            slides: (function () {
                                for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                                return e;
                            })(),
                        }),
                        void t()
                    );
                var T = [],
                    E = [];
                if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
                else for (var S = d; S <= p; S += 1) (S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < c.length; C += 1) C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C), C < d && T.push(C)));
                E.forEach(function (e) {
                    a.$wrapperEl.append(h(c[e], e));
                }),
                    T.sort(function (e, t) {
                        return e < t;
                    }).forEach(function (e) {
                        a.$wrapperEl.prepend(h(c[e], e));
                    }),
                    a.$wrapperEl.children(".swiper-slide").css(f, x + "px"),
                    t();
            },
            renderSlide: function (t, a) {
                var i = this,
                    s = i.params.virtual;
                if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
                var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a), s.cache && (i.virtual.cache[a] = r), r;
            },
            appendSlide: function (e) {
                var t = this;
                t.virtual.slides.push(e), t.virtual.update(!0);
            },
            prependSlide: function (e) {
                var t = this;
                if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e];
                    }),
                        (t.virtual.cache = i);
                }
                t.virtual.update(!0), t.slideNext(0);
            },
        },
        N = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } },
            create: function () {
                var e = this;
                l.extend(e, { virtual: { update: X.update.bind(e), appendSlide: X.appendSlide.bind(e), prependSlide: X.prependSlide.bind(e), renderSlide: X.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = { watchSlidesProgress: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t), e.virtual.update();
                    }
                },
                setTranslate: function () {
                    var e = this;
                    e.params.virtual.enabled && e.virtual.update();
                },
            },
        },
        Y = {
            handle: function (e) {
                var t = this,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                var i = a.keyCode || a.charCode;
                if (!t.allowSlideNext && ((t.isHorizontal() && 39 === i) || (t.isVertical() && 40 === i))) return !1;
                if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === i) || (t.isVertical() && 38 === i))) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || (d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase())))) {
                    if (37 === i || 39 === i || 38 === i || 40 === i) {
                        var r = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = { left: s.pageXOffset, top: s.pageYOffset },
                            o = s.innerWidth,
                            l = s.innerHeight,
                            p = t.$el.offset();
                        t.rtl && (p.left -= t.$el[0].scrollLeft);
                        for (
                            var c = [
                                    [p.left, p.top],
                                    [p.left + t.width, p.top],
                                    [p.left, p.top + t.height],
                                    [p.left + t.width, p.top + t.height],
                                ],
                                u = 0;
                            u < c.length;
                            u += 1
                        ) {
                            var h = c[u];
                            h[0] >= n.left && h[0] <= n.left + o && h[1] >= n.top && h[1] <= n.top + l && (r = !0);
                        }
                        if (!r) return;
                    }
                    t.isHorizontal()
                        ? ((37 !== i && 39 !== i) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                          ((39 === i && !t.rtl) || (37 === i && t.rtl)) && t.slideNext(),
                          ((37 === i && !t.rtl) || (39 === i && t.rtl)) && t.slidePrev())
                        : ((38 !== i && 40 !== i) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), 40 === i && t.slideNext(), 38 === i && t.slidePrev()),
                        t.emit("keyPress", i);
                }
            },
            enable: function () {
                var t = this;
                t.keyboard.enabled || (e(d).on("keydown", t.keyboard.handle), (t.keyboard.enabled = !0));
            },
            disable: function () {
                var t = this;
                t.keyboard.enabled && (e(d).off("keydown", t.keyboard.handle), (t.keyboard.enabled = !1));
            },
        },
        G = {
            name: "keyboard",
            params: { keyboard: { enabled: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { keyboard: { enabled: !1, enable: Y.enable.bind(e), disable: Y.disable.bind(e), handle: Y.handle.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.keyboard.enabled && e.keyboard.enable();
                },
                destroy: function () {
                    var e = this;
                    e.keyboard.enabled && e.keyboard.disable();
                },
            },
        },
        B = {
            lastScrollTime: l.now(),
            event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return (
                    "detail" in e && (a = e.detail),
                    "wheelDelta" in e && (a = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
                    (i = 10 * t),
                    (s = 10 * a),
                    "deltaY" in e && (s = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    (i || s) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (s *= 40)) : ((i *= 800), (s *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    s && !a && (a = s < 1 ? -1 : 1),
                    { spinX: t, spinY: a, pixelX: i, pixelY: s }
                );
            },
            handle: function (e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    n = a.rtl ? -1 : 1,
                    o = B.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * n;
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY;
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                if (0 === r) return !0;
                if ((i.invert && (r = -r), a.params.freeMode)) {
                    var d = a.getTranslate() + r * i.sensitivity,
                        p = a.isBeginning,
                        c = a.isEnd;
                    if (
                        (d >= a.minTranslate() && (d = a.minTranslate()),
                        d <= a.maxTranslate() && (d = a.maxTranslate()),
                        a.setTransition(0),
                        a.setTranslate(d),
                        a.updateProgress(),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses(),
                        ((!p && a.isBeginning) || (!c && a.isEnd)) && a.updateSlidesClasses(),
                        a.params.freeModeSticky &&
                            (clearTimeout(a.mousewheel.timeout),
                            (a.mousewheel.timeout = l.nextTick(function () {
                                a.slideReset();
                            }, 300))),
                        a.emit("scroll", t),
                        a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(),
                        0 === d || d === a.maxTranslate())
                    )
                        return !0;
                } else {
                    if (l.now() - a.mousewheel.lastScrollTime > 60)
                        if (r < 0)
                            if ((a.isEnd && !a.params.loop) || a.animating) {
                                if (i.releaseOnEdges) return !0;
                            } else a.slideNext(), a.emit("scroll", t);
                        else if ((a.isBeginning && !a.params.loop) || a.animating) {
                            if (i.releaseOnEdges) return !0;
                        } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = new s.Date().getTime();
                }
                return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
            },
            enable: function () {
                var t = this;
                if (!B.event) return !1;
                if (t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(B.event, t.mousewheel.handle), (t.mousewheel.enabled = !0), !0;
            },
            disable: function () {
                var t = this;
                if (!B.event) return !1;
                if (!t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(B.event, t.mousewheel.handle), (t.mousewheel.enabled = !1), !0;
            },
        },
        V = {
            name: "mousewheel",
            params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
            create: function () {
                var e = this;
                l.extend(e, { mousewheel: { enabled: !1, enable: B.enable.bind(e), disable: B.disable.bind(e), handle: B.handle.bind(e), lastScrollTime: l.now() } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.mousewheel.enabled && e.mousewheel.enable();
                },
                destroy: function () {
                    var e = this;
                    e.mousewheel.enabled && e.mousewheel.disable();
                },
            },
        },
        R = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass));
                }
            },
            init: function () {
                var t = this,
                    a = t.params.navigation;
                if (a.nextEl || a.prevEl) {
                    var i, s;
                    a.nextEl && ((i = e(a.nextEl)), t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))),
                        a.prevEl && ((s = e(a.prevEl)), t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))),
                        i &&
                            i.length > 0 &&
                            i.on("click", function (e) {
                                e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
                            }),
                        s &&
                            s.length > 0 &&
                            s.on("click", function (e) {
                                e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
                            }),
                        l.extend(t.navigation, { $nextEl: i, nextEl: i && i[0], $prevEl: s, prevEl: s && s[0] });
                }
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass));
            },
        },
        W = {
            name: "navigation",
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden" } },
            create: function () {
                var e = this;
                l.extend(e, { navigation: { init: R.init.bind(e), update: R.update.bind(e), destroy: R.destroy.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.navigation.init(), e.navigation.update();
                },
                toEdge: function () {
                    this.navigation.update();
                },
                fromEdge: function () {
                    this.navigation.update();
                },
                destroy: function () {
                    this.navigation.destroy();
                },
                click: function (t) {
                    var a = this,
                        i = a.navigation,
                        s = i.$nextEl,
                        r = i.$prevEl;
                    !a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
                },
            },
        },
        F = {
            update: function () {
                var t = this,
                    a = t.rtl,
                    i = t.params.pagination;
                if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var s,
                        r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        n = t.pagination.$el,
                        o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (
                        (t.params.loop
                            ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides),
                              s > o - 1 && (s -= o),
                              s < 0 && "bullets" !== t.params.paginationType && (s = o + s))
                            : (s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                        "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                    ) {
                        var l = t.pagination.bullets;
                        if (
                            (i.dynamicBullets && ((t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)), n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")),
                            l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"),
                            n.length > 1)
                        )
                            l.each(function (t, a) {
                                var r = e(a);
                                r.index() === s &&
                                    (r.addClass(i.bulletActiveClass),
                                    i.dynamicBullets &&
                                        (r
                                            .prev()
                                            .addClass(i.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(i.bulletActiveClass + "-prev-prev"),
                                        r
                                            .next()
                                            .addClass(i.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(i.bulletActiveClass + "-next-next")));
                            });
                        else {
                            var d = l.eq(s);
                            d.addClass(i.bulletActiveClass),
                                i.dynamicBullets &&
                                    (d
                                        .prev()
                                        .addClass(i.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(i.bulletActiveClass + "-prev-prev"),
                                    d
                                        .next()
                                        .addClass(i.bulletActiveClass + "-next")
                                        .next()
                                        .addClass(i.bulletActiveClass + "-next-next"));
                        }
                        if (i.dynamicBullets) {
                            var p = Math.min(l.length, 5),
                                c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize,
                                u = a ? "botto," : "top";
                            l.css(t.isHorizontal() ? u : "top", c + "px");
                        }
                    }
                    if (("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)), "progressbar" === i.type)) {
                        var h = (s + 1) / o,
                            v = h,
                            f = 1;
                        t.isHorizontal() || ((f = h), (v = 1)),
                            n
                                .find("." + i.progressbarFillClass)
                                .transform("translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")")
                                .transition(t.params.speed);
                    }
                    "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0]);
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                            t.renderBullet ? (s += t.renderBullet.call(e, n, t.bulletClass)) : (s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                        i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
                    }
                    "fraction" === t.type && ((s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(s)),
                        "progressbar" === t.type && ((s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(s)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                }
            },
            init: function () {
                var t = this,
                    a = t.params.pagination;
                if (a.el) {
                    var i = e(a.el);
                    0 !== i.length &&
                        (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)),
                        "bullets" === a.type && a.clickable && i.addClass(a.clickableClass),
                        i.addClass(a.modifierClass + a.type),
                        "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"),
                        a.clickable &&
                            i.on("click", "." + a.bulletClass, function (a) {
                                a.preventDefault();
                                var i = e(this).index() * t.params.slidesPerGroup;
                                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                            }),
                        l.extend(t.pagination, { $el: i, el: i[0] }));
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
                }
            },
        },
        j = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable",
                },
            },
            create: function () {
                var e = this;
                l.extend(e, { pagination: { init: F.init.bind(e), render: F.render.bind(e), update: F.update.bind(e), destroy: F.destroy.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.pagination.init(), e.pagination.render(), e.pagination.update();
                },
                activeIndexChange: function () {
                    var e = this;
                    e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update();
                },
                snapIndexChange: function () {
                    var e = this;
                    e.params.loop || e.pagination.update();
                },
                slidesLengthChange: function () {
                    var e = this;
                    e.params.loop && (e.pagination.render(), e.pagination.update());
                },
                snapGridLengthChange: function () {
                    var e = this;
                    e.params.loop || (e.pagination.render(), e.pagination.update());
                },
                destroy: function () {
                    this.pagination.destroy();
                },
                click: function (t) {
                    var a = this;
                    a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass);
                },
            },
        },
        q = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtl,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        c = (r - s) * i;
                    a && e.isHorizontal() ? ((c = -c) > 0 ? ((d = s - c), (c = 0)) : -c + s > r && (d = r + c)) : c < 0 ? ((d = s + c), (c = 0)) : c + s > r && (d = r - c),
                        e.isHorizontal()
                            ? (p.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"), (n[0].style.width = d + "px"))
                            : (p.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), (n[0].style.height = d + "px")),
                        l.hide &&
                            (clearTimeout(e.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(function () {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    (a[0].style.width = ""), (a[0].style.height = "");
                    var s,
                        r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    (s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal() ? (a[0].style.width = s + "px") : (a[0].style.height = s + "px"),
                        (i[0].style.display = n >= 1 ? "none" : ""),
                        e.params.scrollbarHide && (i[0].style.opacity = 0),
                        l.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s });
                }
            },
            setDragPosition: function (e) {
                var t,
                    a = this,
                    i = a.scrollbar,
                    s = i.$el,
                    r = i.dragSize,
                    n = i.moveDivider,
                    o =
                        (t = a.isHorizontal()
                            ? "touchstart" === e.type || "touchmove" === e.type
                                ? e.targetTouches[0].pageX
                                : e.pageX || e.clientX
                            : "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageY
                            : e.pageY || e.clientY) -
                        s.offset()[a.isHorizontal() ? "left" : "top"] -
                        r / 2,
                    l = -a.minTranslate() * n,
                    d = -a.maxTranslate() * n;
                o < l ? (o = l) : o > d && (o = d), a.rtl && (o = d - o), (o = -o / n), a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                (t.scrollbar.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    a.hide && r.css("opacity", 1),
                    t.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this,
                    a = t.scrollbar,
                    i = t.$wrapperEl,
                    s = a.$el,
                    r = a.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                    a.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                        (t.scrollbar.dragTimeout = l.nextTick(function () {
                            i.css("opacity", 0), i.transition(400);
                        }, 1e3))),
                    t.emit("scrollbarDragEnd", e),
                    a.snapOnRelease && t.slideReset());
            },
            enableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = p.touch ? a[0] : document;
                    a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd);
                }
            },
            disableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = p.touch ? a[0] : document;
                    a.off(t.scrollbar.dragEvents.start), e(i).off(t.scrollbar.dragEvents.move), e(i).off(t.scrollbar.dragEvents.end);
                }
            },
            init: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar,
                        i = t.$el,
                        s = t.touchEvents,
                        r = t.params.scrollbar,
                        n = e(r.el);
                    t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));
                    var o = n.find(".swiper-scrollbar-drag");
                    0 === o.length && ((o = e('<div class="swiper-scrollbar-drag link"><div class="grab parallax-wrap hide-ball"><div class="grab-dot parallax-element"></div></div></div>')), n.append(o)),
                        (t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || p.touch ? s : { start: "mousedown", move: "mousemove", end: "mouseup" }),
                        l.extend(a, { $el: n, el: n[0], $dragEl: o, dragEl: o[0] }),
                        r.draggable && a.enableDraggable();
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        K = {
            name: "scrollbar",
            params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0 } },
            create: function () {
                var e = this;
                l.extend(e, {
                    scrollbar: {
                        init: q.init.bind(e),
                        destroy: q.destroy.bind(e),
                        updateSize: q.updateSize.bind(e),
                        setTranslate: q.setTranslate.bind(e),
                        setTransition: q.setTransition.bind(e),
                        enableDraggable: q.enableDraggable.bind(e),
                        disableDraggable: q.disableDraggable.bind(e),
                        setDragPosition: q.setDragPosition.bind(e),
                        onDragStart: q.onDragStart.bind(e),
                        onDragMove: q.onDragMove.bind(e),
                        onDragEnd: q.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null,
                    },
                });
            },
            on: {
                init: function () {
                    var e = this;
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
                },
                update: function () {
                    this.scrollbar.updateSize();
                },
                resize: function () {
                    this.scrollbar.updateSize();
                },
                observerUpdate: function () {
                    this.scrollbar.updateSize();
                },
                setTranslate: function () {
                    this.scrollbar.setTranslate();
                },
                setTransition: function (e) {
                    this.scrollbar.setTransition(e);
                },
                destroy: function () {
                    this.scrollbar.destroy();
                },
            },
        },
        U = {
            setTransform: function (t, a) {
                var i = this,
                    s = i.rtl,
                    r = e(t),
                    n = s ? -1 : 1,
                    o = r.attr("data-swiper-parallax") || "0",
                    l = r.attr("data-swiper-parallax-x"),
                    d = r.attr("data-swiper-parallax-y"),
                    p = r.attr("data-swiper-parallax-scale"),
                    c = r.attr("data-swiper-parallax-opacity");
                if (
                    (l || d ? ((l = l || "0"), (d = d || "0")) : i.isHorizontal() ? ((l = o), (d = "0")) : ((d = o), (l = "0")),
                    (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px"),
                    (d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px"),
                    void 0 !== c && null !== c)
                ) {
                    var u = c - (c - 1) * (1 - Math.abs(a));
                    r[0].style.opacity = u;
                }
                if (void 0 === p || null === p) r.transform("translate3d(" + l + ", " + d + ", 0px)");
                else {
                    var h = p - (p - 1) * (1 - Math.abs(a));
                    r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")");
                }
            },
            setTranslate: function () {
                var t = this,
                    a = t.$el,
                    i = t.slides,
                    s = t.progress,
                    r = t.snapGrid;
                a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
                    t.parallax.setTransform(a, s);
                }),
                    i.each(function (a, i) {
                        var n = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)),
                            (n = Math.min(Math.max(n, -1), 1)),
                            e(i)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                .each(function (e, a) {
                                    t.parallax.setTransform(a, n);
                                });
                    });
            },
            setTransition: function (t) {
                void 0 === t && (t = this.params.speed),
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (a, i) {
                        var s = e(i),
                            r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0), s.transition(r);
                    });
            },
        },
        _ = {
            name: "parallax",
            params: { parallax: { enabled: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { parallax: { setTransform: U.setTransform.bind(e), setTranslate: U.setTranslate.bind(e), setTransition: U.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    this.params.watchSlidesProgress = !0;
                },
                init: function () {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate();
                },
                setTranslate: function () {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    t.params.parallax && t.parallax.setTransition(e);
                },
            },
        },
        Z = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
            },
            onGestureStart: function (t) {
                var a = this,
                    i = a.params.zoom,
                    s = a.zoom,
                    r = s.gesture;
                if (((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !p.gestures)) {
                    if ("touchstart" !== t.type || ("touchstart" === t.type && t.targetTouches.length < 2)) return;
                    (s.fakeGestureTouched = !0), (r.scaleStart = Z.getDistanceBetweenTouches(t));
                }
                (r.$slideEl && r.$slideEl.length) ||
                ((r.$slideEl = e(this)),
                0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)),
                (r.$imageEl = r.$slideEl.find("img, svg, canvas")),
                (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
                (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                0 !== r.$imageWrapEl.length)
                    ? (r.$imageEl.transition(0), (a.zoom.isScaling = !0))
                    : (r.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!p.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureMoved = !0), (s.scaleMove = Z.getDistanceBetweenTouches(e));
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    (p.gestures ? (t.zoom.scale = e.scale * i.currentScale) : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
                    i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                    i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, 0.5)),
                    s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
            },
            onGestureEnd: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!p.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !x.android)) return;
                    (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio)),
                    s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                    (i.currentScale = i.scale),
                    (i.isScaling = !1),
                    1 === i.scale && (s.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl &&
                    0 !== a.$imageEl.length &&
                    (i.isTouched ||
                        (x.android && e.preventDefault(),
                        (i.isTouched = !0),
                        (i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && ((t.allowClick = !1), s.isTouched && i.$slideEl)) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0),
                        (s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        t.rtl && (s.startX = -s.startX),
                        t.rtl && (s.startY = -s.startY));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !s.isMoved && !a.isScaling)
                        ) {
                            if (t.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)))
                                return void (s.isTouched = !1);
                            if (!t.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))
                                return void (s.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            (r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                            (r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                            Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                            Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                            (r.prevPositionX = s.touchesCurrent.x),
                            (r.prevPositionY = s.touchesCurrent.y),
                            (r.prevTime = Date.now()),
                            i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    (a.currentX = o), (a.currentY = d);
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                        (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                        t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
                }
            },
            onTransitionEnd: function () {
                var e = this,
                    t = e.zoom,
                    a = t.gesture;
                a.$slideEl &&
                    e.previousIndex !== e.activeIndex &&
                    (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), (a.$slideEl = void 0), (a.$imageEl = void 0), (a.$imageWrapEl = void 0), (t.scale = 1), (t.currentScale = 1));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (t) {
                var a = this,
                    i = a.zoom,
                    s = a.params.zoom,
                    r = i.gesture,
                    n = i.image;
                if (
                    (r.$slideEl || ((r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex)), (r.$imageEl = r.$slideEl.find("img, svg, canvas")), (r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass))),
                    r.$imageEl && 0 !== r.$imageEl.length)
                ) {
                    r.$slideEl.addClass("" + s.zoomedSlideClass);
                    var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;
                    void 0 === n.touchesStart.x && t
                        ? ((o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX), (l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
                        : ((o = n.touchesStart.x), (l = n.touchesStart.y)),
                        (i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                        (i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                        t
                            ? ((x = r.$slideEl[0].offsetWidth),
                              (T = r.$slideEl[0].offsetHeight),
                              (d = r.$slideEl.offset().left + x / 2 - o),
                              (p = r.$slideEl.offset().top + T / 2 - l),
                              (h = r.$imageEl[0].offsetWidth),
                              (v = r.$imageEl[0].offsetHeight),
                              (f = h * i.scale),
                              (m = v * i.scale),
                              (w = -(g = Math.min(x / 2 - f / 2, 0))),
                              (y = -(b = Math.min(T / 2 - m / 2, 0))),
                              (c = d * i.scale),
                              (u = p * i.scale),
                              c < g && (c = g),
                              c > w && (c = w),
                              u < b && (u = b),
                              u > y && (u = y))
                            : ((c = 0), (u = 0)),
                        r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"),
                        r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")");
                }
            },
            out: function () {
                var t = this,
                    a = t.zoom,
                    i = t.params.zoom,
                    s = a.gesture;
                s.$slideEl || ((s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex)), (s.$imageEl = s.$slideEl.find("img, svg, canvas")), (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
                    s.$imageEl &&
                        0 !== s.$imageEl.length &&
                        ((a.scale = 1),
                        (a.currentScale = 1),
                        s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        s.$slideEl.removeClass("" + i.zoomedSlideClass),
                        (s.$slideEl = void 0));
            },
            enable: function () {
                var t = this,
                    a = t.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                    p.gestures
                        ? (i.on("gesturestart", a.onGestureStart, s), i.on("gesturechange", a.onGestureChange, s), i.on("gestureend", a.onGestureEnd, s))
                        : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s), i.on(t.touchEvents.move, a.onGestureChange, s), i.on(t.touchEvents.end, a.onGestureEnd, s)),
                        t.slides.each(function (i, s) {
                            var r = e(s);
                            r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove);
                        });
                }
            },
            disable: function () {
                var t = this,
                    a = t.zoom;
                if (a.enabled) {
                    t.zoom.enabled = !1;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                    p.gestures
                        ? (i.off("gesturestart", a.onGestureStart, s), i.off("gesturechange", a.onGestureChange, s), i.off("gestureend", a.onGestureEnd, s))
                        : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s), i.off(t.touchEvents.move, a.onGestureChange, s), i.off(t.touchEvents.end, a.onGestureEnd, s)),
                        t.slides.each(function (i, s) {
                            var r = e(s);
                            r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove);
                        });
                }
            },
        },
        Q = {
            name: "zoom",
            params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
            create: function () {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {},
                        },
                        velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (a) {
                    t[a] = Z[a].bind(e);
                }),
                    l.extend(e, { zoom: t });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.zoom.enabled && e.zoom.enable();
                },
                destroy: function () {
                    this.zoom.disable();
                },
                touchStart: function (e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchStart(e);
                },
                touchEnd: function (e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchEnd(e);
                },
                doubleTap: function (e) {
                    var t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
                },
                transitionEnd: function () {
                    var e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                },
            },
        },
        J = {
            loadInSlide: function (t, a) {
                void 0 === a && (a = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== t && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                        n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])),
                        0 !== n.length &&
                            n.each(function (t, n) {
                                var o = e(n);
                                o.addClass(s.loadingClass);
                                var l = o.attr("data-background"),
                                    d = o.attr("data-src"),
                                    p = o.attr("data-srcset"),
                                    c = o.attr("data-sizes");
                                i.loadImage(o[0], d || l, p, c, !1, function () {
                                    if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                        if (
                                            (l
                                                ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background"))
                                                : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))),
                                            o.addClass(s.loadedClass).removeClass(s.loadingClass),
                                            r.find("." + s.preloaderClass).remove(),
                                            i.params.loop && a)
                                        ) {
                                            var e = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(i.params.slideDuplicateClass)) {
                                                var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                i.lazy.loadInSlide(t.index(), !1);
                                            } else {
                                                var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                i.lazy.loadInSlide(n.index(), !1);
                                            }
                                        }
                                        i.emit("lazyImageReady", r[0], o[0]);
                                    }
                                }),
                                    i.emit("lazyImageLoad", r[0], o[0]);
                            });
                }
            },
            load: function () {
                function t(e) {
                    if (l) {
                        if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                    } else if (n[e]) return !0;
                    return !1;
                }
                function a(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index();
                }
                var i = this,
                    s = i.$wrapperEl,
                    r = i.params,
                    n = i.slides,
                    o = i.activeIndex,
                    l = i.virtual && r.virtual.enabled,
                    d = r.lazy,
                    p = r.slidesPerView;
                if (("auto" === p && (p = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility))
                    s.children("." + r.slideVisibleClass).each(function (t, a) {
                        var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
                        i.lazy.loadInSlide(s);
                    });
                else if (p > 1) for (var c = o; c < o + p; c += 1) t(c) && i.lazy.loadInSlide(c);
                else i.lazy.loadInSlide(o);
                if (d.loadPrevNext)
                    if (p > 1 || (d.loadPrevNextAmount && d.loadPrevNextAmount > 1)) {
                        for (var u = d.loadPrevNextAmount, h = p, v = Math.min(o + h + Math.max(u, h), n.length), f = Math.max(o - Math.max(h, u), 0), m = o + p; m < v; m += 1) t(m) && i.lazy.loadInSlide(m);
                        for (var g = f; g < o; g += 1) t(g) && i.lazy.loadInSlide(g);
                    } else {
                        var b = s.children("." + r.slideNextClass);
                        b.length > 0 && i.lazy.loadInSlide(a(b));
                        var w = s.children("." + r.slidePrevClass);
                        w.length > 0 && i.lazy.loadInSlide(a(w));
                    }
            },
        },
        ee = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader",
                },
            },
            create: function () {
                var e = this;
                l.extend(e, { lazy: { initialImageLoaded: !1, load: J.load.bind(e), loadInSlide: J.loadInSlide.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    e.params.preloadImages && (e.params.preloadImages = !1);
                },
                init: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
                },
                scroll: function () {
                    var e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                },
                resize: function () {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load();
                },
                scrollbarDragMove: function () {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load();
                },
                transitionStart: function () {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                },
                transitionEnd: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                },
            },
        },
        te = {
            LinearSpline: function (e, t) {
                var a = (function () {
                    var e, t, a;
                    return function (i, s) {
                        for (t = -1, e = i.length; e - t > 1; ) i[(a = (e + t) >> 1)] <= s ? (t = a) : (e = a);
                        return e;
                    };
                })();
                (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                var i, s;
                return (
                    (this.interpolate = function (e) {
                        return e ? ((s = a(this.x, e)), (i = s - 1), ((e - this.x[i]) * (this.y[s] - this.y[i])) / (this.x[s] - this.x[i]) + this.y[i]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                function a(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), (s = -r.controller.spline.interpolate(-t))),
                        (s && "container" !== r.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (s = (t - r.minTranslate()) * i + e.minTranslate())),
                        r.params.controller.inverse && (s = e.maxTranslate() - s),
                        e.updateProgress(s),
                        e.setTranslate(s, r),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                var i,
                    s,
                    r = this,
                    n = r.controller.control;
                if (Array.isArray(n)) for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof $ && a(n[o]);
                else n instanceof $ && t !== n && a(n);
            },
            setTransition: function (e, t) {
                function a(t) {
                    t.setTransition(e, s),
                        0 !== e &&
                            (t.transitionStart(),
                            t.$wrapperEl.transitionEnd(function () {
                                r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                            }));
                }
                var i,
                    s = this,
                    r = s.controller.control;
                if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof $ && a(r[i]);
                else r instanceof $ && t !== r && a(r);
            },
        },
        ae = {
            name: "controller",
            params: { controller: { control: void 0, inverse: !1, by: "slide" } },
            create: function () {
                var e = this;
                l.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: te.getInterpolateFunction.bind(e), setTranslate: te.setTranslate.bind(e), setTransition: te.setTransition.bind(e) } });
            },
            on: {
                update: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                resize: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                observerUpdate: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                setTranslate: function (e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTranslate(e, t);
                },
                setTransition: function (e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTransition(e, t);
                },
            },
        },
        ie = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (t) {
                var a = this,
                    i = a.params.a11y;
                if (13 === t.keyCode) {
                    var s = e(t.target);
                    a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && ((a.isEnd && !a.params.loop) || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)),
                        a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && ((a.isBeginning && !a.params.loop) || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)),
                        a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
                }
            },
            updatePagination: function () {
                var t = this,
                    a = t.params.a11y;
                t.pagination &&
                    t.params.pagination.clickable &&
                    t.pagination.bullets &&
                    t.pagination.bullets.length &&
                    t.pagination.bullets.each(function (i, s) {
                        var r = e(s);
                        t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
                    });
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t,
                    a,
                    i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
                    t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)),
                    a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
            },
            destroy: function () {
                var e = this;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                var t, a;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
                    t && t.off("keydown", e.a11y.onEnterKey),
                    a && a.off("keydown", e.a11y.onEnterKey),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
            },
        },
        se = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                },
            },
            create: function () {
                var t = this;
                l.extend(t, { a11y: { liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                    Object.keys(ie).forEach(function (e) {
                        t.a11y[e] = ie[e].bind(t);
                    });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
                },
                toEdge: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation();
                },
                fromEdge: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation();
                },
                paginationUpdate: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updatePagination();
                },
                destroy: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.destroy();
                },
            },
        },
        re = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!s.history || !s.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    (t.initialized = !0),
                        (t.paths = re.getPathValues()),
                        (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState));
                }
            },
            destroy: function () {
                var e = this;
                e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState);
            },
            setHistoryPopState: function () {
                var e = this;
                (e.history.paths = re.getPathValues()), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
            },
            getPathValues: function () {
                var e = s.location.pathname
                        .slice(1)
                        .split("/")
                        .filter(function (e) {
                            return "" !== e;
                        }),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory: function (e, t) {
                var a = this;
                if (a.history.initialized && a.params.history.enabled) {
                    var i = a.slides.eq(t),
                        r = re.slugify(i.attr("data-history"));
                    s.location.pathname.includes(e) || (r = e + "/" + r);
                    var n = s.history.state;
                    (n && n.value === r) || (a.params.history.replaceState ? s.history.replaceState({ value: r }, null, r) : s.history.pushState({ value: r }, null, r));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (re.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a);
                        }
                    }
                else i.slideTo(0, e, a);
            },
        },
        ne = {
            name: "history",
            params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
            create: function () {
                var e = this;
                l.extend(e, { history: { init: re.init.bind(e), setHistory: re.setHistory.bind(e), setHistoryPopState: re.setHistoryPopState.bind(e), scrollToSlide: re.scrollToSlide.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.history.enabled && e.history.init();
                },
                destroy: function () {
                    var e = this;
                    e.params.history.enabled && e.history.destroy();
                },
                transitionEnd: function () {
                    var e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                },
            },
        },
        oe = {
            onHashCange: function () {
                var e = this,
                    t = d.location.hash.replace("#", "");
                t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index());
            },
            setHash: function () {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        d.location.hash = a || "";
                    }
            },
            init: function () {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled))) {
                    t.hashNavigation.initialized = !0;
                    var a = d.location.hash.replace("#", "");
                    if (a)
                        for (var i = 0, r = t.slides.length; i < r; i += 1) {
                            var n = t.slides.eq(i);
                            if ((n.attr("data-hash") || n.attr("data-history")) === a && !n.hasClass(t.params.slideDuplicateClass)) {
                                var o = n.index();
                                t.slideTo(o, 0, t.params.runCallbacksOnInit, !0);
                            }
                        }
                    t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange);
                }
            },
            destroy: function () {
                var t = this;
                t.params.hashNavigation.watchState && e(s).off("hashchange", t.hashNavigation.onHashCange);
            },
        },
        le = {
            name: "hash-navigation",
            params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { hashNavigation: { initialized: !1, init: oe.init.bind(e), destroy: oe.destroy.bind(e), setHash: oe.setHash.bind(e), onHashCange: oe.onHashCange.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init();
                },
                destroy: function () {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                },
                transitionEnd: function () {
                    var e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash();
                },
            },
        },
        de = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    (e.autoplay.timeout = l.nextTick(function () {
                        e.params.loop
                            ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                    }, a));
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 === e
                            ? ((t.autoplay.paused = !1), t.autoplay.run())
                            : t.$wrapperEl.transitionEnd(function () {
                                  t && !t.destroyed && ((t.autoplay.paused = !1), t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                              })));
            },
        },
        pe = {
            name: "autoplay",
            params: { autoplay: { enabled: !1, delay: 3e3, disableOnInteraction: !0, stopOnLastSlide: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { autoplay: { running: !1, paused: !1, run: de.run.bind(e), start: de.start.bind(e), stop: de.stop.bind(e), pause: de.pause.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.autoplay.enabled && e.autoplay.start();
                },
                beforeTransitionStart: function (e, t) {
                    var a = this;
                    a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop());
                },
                sliderFirstMove: function () {
                    var e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                },
                destroy: function () {
                    var e = this;
                    e.autoplay.running && e.autoplay.stop();
                },
            },
        },
        ce = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || ((r = s), (s = 0));
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.$wrapperEl;
                if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var s = !1;
                    a.transitionEnd(function () {
                        if (!s && t && !t.destroyed) {
                            (s = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a]);
                        }
                    });
                }
            },
        },
        ue = {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { fadeEffect: { setTranslate: ce.setTranslate.bind(e), setTransition: ce.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t);
                    }
                },
                setTranslate: function () {
                    var e = this;
                    "fade" === e.params.effect && e.fadeEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "fade" === t.params.effect && t.fadeEffect.setTransition(e);
                },
            },
        },
        he = {
            setTranslate: function () {
                var t,
                    a = this,
                    i = a.$el,
                    s = a.$wrapperEl,
                    r = a.slides,
                    n = a.width,
                    o = a.height,
                    l = a.rtl,
                    d = a.size,
                    p = a.params.cubeEffect,
                    c = a.isHorizontal(),
                    u = a.virtual && a.params.virtual.enabled,
                    h = 0;
                p.shadow &&
                    (c
                        ? (0 === (t = s.find(".swiper-cube-shadow")).length && ((t = e('<div class="swiper-cube-shadow"></div>')), s.append(t)), t.css({ height: n + "px" }))
                        : 0 === (t = i.find(".swiper-cube-shadow")).length && ((t = e('<div class="swiper-cube-shadow"></div>')), i.append(t)));
                for (var v = 0; v < r.length; v += 1) {
                    var f = r.eq(v),
                        g = v;
                    u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var b = 90 * g,
                        w = Math.floor(b / 360);
                    l && ((b = -b), (w = Math.floor(-b / 360)));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        x = 0,
                        T = 0,
                        E = 0;
                    g % 4 == 0 ? ((x = 4 * -w * d), (E = 0)) : (g - 1) % 4 == 0 ? ((x = 0), (E = 4 * -w * d)) : (g - 2) % 4 == 0 ? ((x = d + 4 * w * d), (E = d)) : (g - 3) % 4 == 0 && ((x = -d), (E = 3 * d + 4 * d * w)),
                        l && (x = -x),
                        c || ((T = x), (x = 0));
                    var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
                    if ((y <= 1 && y > -1 && ((h = 90 * g + 90 * y), l && (h = 90 * -g - 90 * y)), f.transform(S), p.slideShadows)) {
                        var C = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && ((C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>')), f.append(C)),
                            0 === M.length && ((M = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>')), f.append(M)),
                            C.length && (C[0].style.opacity = Math.max(-y, 0)),
                            M.length && (M[0].style.opacity = Math.max(y, 0));
                    }
                }
                if (
                    (s.css({ "-webkit-transform-origin": "50% 50% -" + d / 2 + "px", "-moz-transform-origin": "50% 50% -" + d / 2 + "px", "-ms-transform-origin": "50% 50% -" + d / 2 + "px", "transform-origin": "50% 50% -" + d / 2 + "px" }),
                    p.shadow)
                )
                    if (c) t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                    else {
                        var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            P = 1.5 - (Math.sin((2 * z * Math.PI) / 360) / 2 + Math.cos((2 * z * Math.PI) / 360) / 2),
                            k = p.shadowScale,
                            $ = p.shadowScale / P,
                            I = p.shadowOffset;
                        t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)");
                    }
                var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;
                s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)");
            },
            setTransition: function (e) {
                var t = this,
                    a = t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
            },
        },
        ve = {
            name: "effect-cube",
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
            create: function () {
                var e = this;
                l.extend(e, { cubeEffect: { setTranslate: he.setTranslate.bind(e), setTransition: he.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t);
                    }
                },
                setTranslate: function () {
                    var e = this;
                    "cube" === e.params.effect && e.cubeEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "cube" === t.params.effect && t.cubeEffect.setTransition(e);
                },
            },
        },
        fe = {
            setTranslate: function () {
                for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
                    var s = a.eq(i),
                        r = s[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if ((t.isHorizontal() ? t.rtl && (n = -n) : ((d = l), (l = 0), (o = -n), (n = 0)), (s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length), t.params.flipEffect.slideShadows)) {
                        var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && ((p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>')), s.append(p)),
                            0 === c.length && ((c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>')), s.append(c)),
                            p.length && (p[0].style.opacity = Math.max(-r, 0)),
                            c.length && (c[0].style.opacity = Math.max(r, 0));
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.activeIndex,
                    s = t.$wrapperEl;
                if ((a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var r = !1;
                    a.eq(i).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            (r = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a]);
                        }
                    });
                }
            },
        },
        me = {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function () {
                var e = this;
                l.extend(e, { flipEffect: { setTranslate: fe.setTranslate.bind(e), setTransition: fe.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t);
                    }
                },
                setTranslate: function () {
                    var e = this;
                    "flip" === e.params.effect && e.flipEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "flip" === t.params.effect && t.flipEffect.setTransition(e);
                },
            },
        },
        ge = {
            setTranslate: function () {
                for (
                    var t = this,
                        a = t.width,
                        i = t.height,
                        s = t.slides,
                        r = t.$wrapperEl,
                        n = t.slidesSizesGrid,
                        o = t.params.coverflowEffect,
                        l = t.isHorizontal(),
                        d = t.translate,
                        p = l ? a / 2 - d : i / 2 - d,
                        c = l ? o.rotate : -o.rotate,
                        u = o.depth,
                        h = 0,
                        v = s.length;
                    h < v;
                    h += 1
                ) {
                    var f = s.eq(h),
                        g = n[h],
                        b = ((p - f[0].swiperSlideOffset - g / 2) / g) * o.modifier,
                        w = l ? c * b : 0,
                        y = l ? 0 : c * b,
                        x = -u * Math.abs(b),
                        T = l ? 0 : o.stretch * b,
                        E = l ? o.stretch * b : 0;
                    Math.abs(E) < 0.001 && (E = 0), Math.abs(T) < 0.001 && (T = 0), Math.abs(x) < 0.001 && (x = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(y) < 0.001 && (y = 0);
                    var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
                    if ((f.transform(S), (f[0].style.zIndex = 1 - Math.abs(Math.round(b))), o.slideShadows)) {
                        var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && ((C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>')), f.append(C)),
                            0 === M.length && ((M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>')), f.append(M)),
                            C.length && (C[0].style.opacity = b > 0 ? b : 0),
                            M.length && (M[0].style.opacity = -b > 0 ? -b : 0);
                    }
                }
                m.ie && (r[0].style.perspectiveOrigin = p + "px 50%");
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            },
        },
        be = {
            name: "effect-coverflow",
            params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
            create: function () {
                var e = this;
                l.extend(e, { coverflowEffect: { setTranslate: ge.setTranslate.bind(e), setTransition: ge.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    "coverflow" === e.params.effect &&
                        (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                },
                setTranslate: function () {
                    var e = this;
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e);
                },
            },
        };
    return ($.components = [I, L, D, O, H, N, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, ve, me, be]), $;
});
//# sourceMappingURL=swiper.min.js.map
