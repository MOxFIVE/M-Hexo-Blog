! function() {
    function h(a, b) {
        var c;
        for (c in b) b.hasOwnProperty(c) && (a.style[c] = b[c])
    }

    function i(a, b) {
        var d, c = a || {};
        for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
        return c
    }

    function j() {
        return /AppleWebKit.*Mobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent) ? 1 : 0
    }

    function k(a, b, c) {
        var f, g, h, i, j, d = {},
            e = a.split(b);
        for (f = 0; f < e.length; f++) g = e[f], h = g.indexOf(c), h > 0 && (i = g.substring(0, h).toLowerCase(), j = g.substring(h + 1, g.length), "q" !== i && (j = encodeURIComponent(j)), d[i] = j);
        return d
    }

    function l() {
        var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a = {},
            b = window.bdcsFrameResultNum ? window.bdcsFrameResultNum : 3,
            c = window.bdcsFrameCharset ? window.bdcsFrameCharset : "utf-8",
            d = void 0 !== window.bdcsRecommend ? window.bdcsRecommend : 0,
            e = window.bdcsDefaultQuery ? window.bdcsDefaultQuery : 0,
            h = window.bdcsDefaultQueryNum ? window.bdcsDefaultQueryNum : 1,
            i = void 0 !== window.bdcsFramePos ? window.bdcsFramePos : 2,
            j = window.bdcsRemoveEm ? window.bdcsRemoveEm : 0;
        if (g && (a.pg = g.replace("#", "")), parseInt(b) && (a.pn = parseInt(b)), ("gbk" === c.toLowerCase() || "gb2312" === c.toLowerCase()) && (a.ie = c.toLowerCase()), 1 === d) {
            if (a.rec = 1, k = document.referrer) {
                if (n = {}, decodeURIComponent(k) && (l = decodeURIComponent(k)), m = l.split("?"), m[1])
                    for (o = m[1].split("&"), p = 0; p < o.length; p++) q = o[p].split("=")[0], r = o[p].split("=")[1], q && r && (n[q] = r);
                s = /www\.baidu\.com/, t = /cse\/search/, s.test(l) && n["eqid"] ? (a.eqid = n["eqid"], a.qfrom = 1) : t.test(l) && n["q"] && (a.q = encodeURIComponent(n["q"]), a.qfrom = 2)
            }
            if (0 !== e || a.q && "" !== a.q) a.q = encodeURIComponent(e);
            else {
                for (u = document.getElementsByTagName("meta"), v = "", w = [], x = [], p = 0; p < u.length; p++) u[p].getAttribute("name") && u[p].getAttribute("content") && "keywords" === u[p].getAttribute("name").toLowerCase() && (w = u[p].getAttribute("content").split(/,| |、|;|，/));
                if (w.length > 0) {
                    for (p = 0; p < w.length; p++) "" !== w[p] && x.push(w[p]);
                    for (y = Math.min(x.length, h), z = 0; y > z; z++) v = v + " " + x[z];
                    1 !== a.qfrom && (a.qfrom = 3)
                }
                "" === v && document.title && (v = document.title, 1 !== a.qfrom && (a.qfrom = 4)), "" !== v && (a.q = encodeURIComponent(v))
            }
        } else a.rec = 0, e && (a.q = encodeURIComponent(e));
        return a.reg = f ? encodeURIComponent(f) : "", a.fpos = 1 === i ? 1 : 2 === i ? 2 : 0, a.rmem = 1 === j ? 1 : 0, a.isIframe = 1, a
    }

    function m() {
        var l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, a = {},
            b = window.bdcsFrameWt ? window.bdcsFrameWt : 1,
            c = window.bdcsFrameHt ? window.bdcsFrameHt : 1,
            d = window.bdcsFrameResultNum ? window.bdcsFrameResultNum : 10,
            e = window.bdcsFrameCharset ? window.bdcsFrameCharset : "utf-8",
            g = window.bdcsRecommend ? window.bdcsRecommend : 0,
            h = window.bdcsDefaultQuery ? window.bdcsDefaultQuery : 0,
            i = window.bdcsDefaultQueryNum ? window.bdcsDefaultQueryNum : 1,
            j = void 0 !== window.bdcsFramePos ? window.bdcsFramePos : 2,
            k = window.bdcsRemoveEm ? window.bdcsRemoveEm : 0;
        if (a.wt = parseInt(b, 10) > 0 && parseInt(b, 10) < 4 ? parseInt(b, 10) : 1, a.ht = parseInt(c, 10) > 0 && parseInt(c, 10) < 4 ? parseInt(c, 10) : 1, parseInt(d, 10) && (a.pn = parseInt(d, 10)), ("gbk" === e.toLowerCase() || "gb2312" === e.toLowerCase()) && (a.ie = e.toLowerCase()), 1 === g) {
            if (a.rec = 1, l = document.referrer) {
                if (o = {}, decodeURIComponent(l) && (m = decodeURIComponent(l)), n = m.split("?"), n[1])
                    for (p = n[1].split("&"), q = 0; q < p.length; q++) r = p[q].split("=")[0], s = p[q].split("=")[1], r && s && (o[r] = s);
                t = /www\.baidu\.com/, u = /cse\/search/, t.test(m) && o["eqid"] ? (a.eqid = o["eqid"], a.qfrom = 1) : u.test(m) && o["q"] && (a.q = encodeURIComponent(o["q"]), a.qfrom = 2)
            }
            if (0 !== h || a.q && "" !== a.q) a.q = encodeURIComponent(h);
            else {
                for (v = document.getElementsByTagName("meta"), w = "", x = [], y = [], q = 0; q < v.length; q++) v[q].getAttribute("name") && v[q].getAttribute("content") && "keywords" === v[q].getAttribute("name").toLowerCase() && (x = v[q].getAttribute("content").split(/,| |、|;|，/));
                if (x.length > 0) {
                    for (q = 0; q < x.length; q++) "" !== x[q] && y.push(x[q]);
                    for (z = Math.min(y.length, i), A = 0; z > A; A++) w = w + " " + y[A];
                    1 !== a.qfrom && (a.qfrom = 3)
                }
                "" === w && document.title && (w = document.title, 1 !== a.qfrom && (a.qfrom = 4)), "" !== w && (a.q = encodeURIComponent(w))
            }
        } else h && (a.q = encodeURIComponent(h));
        return a.fpos = 1 === j ? 1 : 2 === j ? 2 : 0, a.rmem = 1 === k ? 1 : 0, a.reg = f ? encodeURIComponent(f) : "", a
    }

    function n(a) {
        var f, c = b;
        c = c + "?" + "s=" + d + "&loc=" + encodeURIComponent(window.location.href) + "&width=" + e;
        for (f in a) c = c + "&" + encodeURIComponent(f) + "=" + a[f];
        return c
    }

    function o() {
        var f, o, q, r, s, t, u, v, w, x, b = document.getElementById("bdcs-frame-box"),
            c = j() ? l() : m();
        if (4 === c.qfrom && "" !== document.title) f = {
            title: document.title,
            locUrl: window.location.href
        }, o = "", a.init(), a.get({
            url: "http://zhannei.baidu.com/api/customsearch/keywords",
            parameters: f,
            success: function(a) {
                var f, l, m, q, r, s, t, u, v, w, x;
                if (a && a.result && a.result.res && a.result.res.keyword_list)
                    for (f = a.result.res.keyword_list, l = Math.min(f.length, 3), m = 0; l > m; m++) o = o + " " + f[m];
                if (c.qfrom = 5, c.q = o, "" === o && (c.q = document.title, c.qfrom = 4), q = window.location.search.substring(1), r = k(q, "&", "="), s = {}, r.q && "" !== r.q && (s.q = r.q), r = i(r, c), r = i(r, s), t = n(r), u = {
                        name: "bdcsFrame",
                        id: "bdcsFrame",
                        src: t,
                        frameBorder: "0",
                        width: "100%",
                        height: "100%",
                        marginWidth: "0",
                        marginHeight: "0",
                        hspace: "0",
                        vspace: "0",
                        allowTransparency: "true",
                        scrolling: "no"
                    }, b && t && "" !== d) {
                    1 === j() ? h(b, {
                        width: "100%",
                        height: "auto",
                        backgroundColor: g
                    }) : h(b, {
                        width: e + "px",
                        height: "auto",
                        backgroundColor: g
                    }), v = document.createElement("iframe");
                    for (w in u) v.setAttribute(w, u[w]);
                    b.appendChild(v), x = window.bdcsRecommend ? window.bdcsRecommend : 0, window.postMessage && (window.attachEvent ? window.attachEvent("onmessage", function(a) {
                        if (0 === parseInt(a.data, 10)) v.height = "100%", document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight", "*");
                        else {
                            var b = parseInt(a.data, 10) + 10;
                            isNaN(b) || (v.height = b + "px")
                        }
                    }) : window.addEventListener("message", function(a) {
                        if (0 === parseInt(a.data, 10)) v.height = "100%", document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight", "*");
                        else {
                            var b = parseInt(a.data, 10) + 10;
                            isNaN(b) || (v.height = b + "px")
                        }
                    }, !1)), v.attachEvent ? v.attachEvent("onload", function() {
                        x || (window.scrollTo(0, 0), window.parent.window.scrollTo(0, 0)), window.postMessage || p(v, b)
                    }) : v.addEventListener("load", function() {
                        x || (window.scrollTo(0, 0), window.parent.window.scrollTo(0, 0)), window.postMessage || p(v, b)
                    }, !1)
                }
            }
        });
        else if (q = window.location.search.substring(1), r = k(q, "&", "="), s = {}, r.q && "" !== r.q && (s.q = r.q), r = i(r, c), r = i(r, s), t = n(r), u = {
                name: "bdcsFrame",
                id: "bdcsFrame",
                src: t,
                frameBorder: "0",
                width: "100%",
                height: "100%",
                marginWidth: "0",
                marginHeight: "0",
                hspace: "0",
                vspace: "0",
                allowTransparency: "true",
                scrolling: "no"
            }, b && t && "" !== d) {
            1 === j() ? h(b, {
                width: "100%",
                height: "auto",
                backgroundColor: g
            }) : h(b, {
                width: e + "px",
                height: "auto",
                backgroundColor: g
            }), v = document.createElement("iframe");
            for (w in u) v.setAttribute(w, u[w]);
            b.appendChild(v), x = window.bdcsRecommend ? window.bdcsRecommend : 0, window.postMessage && (window.attachEvent ? window.attachEvent("onmessage", function(a) {
                if (0 === parseInt(a.data, 10)) v.height = "100%", document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight", "*");
                else {
                    var b = parseInt(a.data, 10) + 10;
                    isNaN(b) || (v.height = b + "px")
                }
            }) : window.addEventListener("message", function(a) {
                if (0 === parseInt(a.data, 10)) v.height = "100%", document.getElementById("bdcsFrame").contentWindow.postMessage("getHeight", "*");
                else {
                    var b = parseInt(a.data, 10) + 10;
                    isNaN(b) || (v.height = b + "px")
                }
            }, !1)), v.attachEvent ? v.attachEvent("onload", function() {
                x || (window.scrollTo(0, 0), window.parent.window.scrollTo(0, 0)), window.postMessage || p(v, b)
            }) : v.addEventListener("load", function() {
                x || (window.scrollTo(0, 0), window.parent.window.scrollTo(0, 0)), window.postMessage || p(v, b)
            }, !1)
        }
    }

    function p(a) {
        if ("" !== window.name && 0 === j()) {
            var c = parseInt(window.name) + 10;
            a.height = c + "px"
        }
    }

    function q(a, b) {
        var c = b,
            d = b;
        return a.style.inlineName ? a.style[c] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(a, null).getPropertyValue(d) : a.currentStyle ? a.currentStyle[c] : null
    }

    function r(a, b) {
        var c, d, e, f, g;
        if (b = b || document, b.getElementsByClassName) return b.getElementsByClassName(a);
        for (c = [], d = b.getElementsByTagName("*"), e = new RegExp("(^|\\s)" + a.replace(/\-/g, "\\-") + "(\\s|$)"), f = 0, g = d.length; g > f; f++) e.test(d[f].className) && c.push(d[f]);
        return c
    }

    function s(a, b, c) {
        document.addEventListener ? a.addEventListener(b, c, !1) : document.attachEvent && a.attachEvent("on" + b, function(b) {
            b.preventDefault = function() {
                b.returnValue = !1
            }, b.stopPropagation = function() {
                b.cancelBubble = !0
            }, c.call(a, b)
        })
    }

    function w(a, b, c) {
        var d, e, f, g;
        b = b === !1 ? !1 : !0, c = c || "bdcs-styleElem", b && (a = (a || "").replace(u, ".bdcs-container .bdcs-")), d = document.getElementById("znBdcsStyle"), d ? d.styleSheet ? (v.push(a), d.styleSheet.cssText = v.join("\n")) : d.appendChild(document.createTextNode(a)) : (e = document.createElement("style"), e.id = "znBdcsStyle", e.rel = "stylesheet", e.type = "text/css", f = document.getElementsByTagName("head"), f && (g = f[0], g.children[0] ? g.insertBefore(e, g.children[0]) : g.appendChild(e)), e.styleSheet ? (e.styleSheet.cssText = a, v.push(a)) : e.appendChild(document.createTextNode(a)))
    }
    var t, u, v, x, y, z, a = function(a) {
            "use strict";
            var b, c, d, e, f, g, h, i, j;
            return c = function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
            }, d = function(c, d) {
                b.log("Garbage collecting!"), d.parentNode.removeChild(d), a[c] = void 0;
                try {
                    delete a[c]
                } catch (e) {}
            }, e = function(a, b) {
                var d, e, c = "";
                for (d in a) a.hasOwnProperty(d) && (d = b ? encodeURIComponent(d) : d, e = b ? encodeURIComponent(a[d]) : a[d], c += d + "=" + e + "&");
                return c.replace(/&$/, "")
            }, f = function() {
                var a = "",
                    b = [],
                    c = "0123456789ABCDEF",
                    d = 0;
                for (d = 0; 32 > d; d += 1) b[d] = c.substr(Math.floor(16 * Math.random()), 1);
                return b[12] = "4", b[16] = c.substr(8 | 3 & b[16], 1), a = "flyjsonp_" + b.join("")
            }, g = function(a, c) {
                b.log(c), "undefined" != typeof a && a(c)
            }, h = function(a, c) {
                b.log("GET success"), "undefined" != typeof a && a(c), b.log(c)
            }, i = function(a, c) {
                b.log("POST success"), "undefined" != typeof a && a(c), b.log(c)
            }, j = function(a) {
                b.log("Request complete"), "undefined" != typeof a && a()
            }, b = {}, b.options = {
                debug: !1
            }, b.init = function(a) {
                var c;
                b.log("Initializing!");
                for (c in a) a.hasOwnProperty(c) && (b.options[c] = a[c]);
                return b.log("Initialization options"), b.log(b.options), !0
            }, b.log = function(c) {
                a.console && b.options.debug && a.console.log(c)
            }, b.get = function(k) {
                k = k || {};
                var l = k.url,
                    m = k.callbackParameter || "callback",
                    n = k.parameters || {},
                    o = a.document.createElement("script"),
                    p = f(),
                    q = "?";
                if (!l) throw new Error("URL must be specified!");
                n[m] = p, l.indexOf("?") >= 0 && (q = "&"), l += q + e(n, !0), a[p] = function(a) {
                    "undefined" == typeof a ? g(k.error, "Invalid JSON data returned") : "post" === k.httpMethod ? (a = a.query.results, a && a.postresult ? (a = a.postresult.json ? a.postresult.json : a.postresult, i(k.success, a)) : g(k.error, "Invalid JSON data returned")) : h(k.success, a), d(p, o), j(k.complete)
                }, b.log("Getting JSONP data"), o.setAttribute("src", l), o.setAttribute("charset", "utf-8"), a.document.getElementsByTagName("head")[0].appendChild(o), c(o, "error", function() {
                    d(p, o), j(k.complete), g(k.error, "Error while trying to access the URL")
                })
            }, b.post = function(a) {
                a = a || {};
                var f, g, c = a.url,
                    d = a.parameters || {},
                    h = {};
                if (!c) throw new Error("URL must be specified!");
                f = encodeURIComponent('select * from jsonpost where url="' + c + '" and postdata="' + e(d, !1) + '"'), g = "http://query.yahooapis.com/v1/public/yql?q=" + f + "&format=json" + "&env=" + encodeURIComponent("store://datatables.org/alltableswithkeys"), h.url = g, h.httpMethod = "post", "undefined" != typeof a.success && (h.success = a.success), "undefined" != typeof a.error && (h.error = a.error), "undefined" != typeof a.complete && (h.complete = a.complete), b.get(h)
            }, b
        }(window),
        b = "http://zhannei.baidu.com/cse/search",
        c = new RegExp("^#[0-9a-fA-F]{6}$"),
        d = window.bdcsFrameSid ? window.bdcsFrameSid.toString() : "",
        e = window.bdcsFrameWidth ? parseInt(window.bdcsFrameWidth, 10) : 552,
        f = window.bdcsFrameReg ? window.bdcsFrameReg : "",
        g = c.test(window.bdcsFrameBgColor) ? window.bdcsFrameBgColor : "transparent";
    o(), t = function() {
            function a(a) {
                var b = "_rpLog-" + (new Date).getTime(),
                    c = new Image;
                window[b] = c, c.onload = c.onerror = function() {
                    window[b] = null
                }, c.src = a, c = null
            }

            function b(a, b) {
                var d, c = a || {};
                for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                return c
            }

            function c(c) {
                var i, k, l, f = {
                        logid: 0,
                        version: 0,
                        prod_id: "rp",
                        plate_url: encodeURIComponent(window.location.href),
                        referrer: encodeURIComponent(document.referrer),
                        time: (new Date).getTime()
                    },
                    g = f,
                    h = [],
                    j = c;
                for ("?" !== j.charAt(j.length - 1) && (j += "?"), k = 1, l = arguments.length; l > k; k++) "[object Object]" === Object.prototype.toString.call(arguments[k]) && (g = b(g, arguments[k]));
                for (i in g) h.push(i + "=" + g[i]);
                a(j + h.join("&")), "[object Function]" === Object.prototype.toString.call(arguments[arguments.length - 1]) && arguments[arguments.length - 1].call()
            }
            return {
                send: c
            }
        }(), u = /\.bdcs-/g, v = [], x = '<div class="bcse-card-top">\n<span class="bcse-card-title">搜索到关于</span>\n<span class="bcse-card-query" title=""></span>\n<span class="bcse-card-title">的其他站内文章</span>\n<span class="bcse-card-close">×</span>\n</div>\n<div class="bcse-card-center">\n<iframe width="125" height="71" scrolling="no" class="bcse-card-frame" id="bdcsCardFrame" frameborder="0" src=""></iframe>\n<div class="bcse-card-result-title">\n<a class="bcse-card-first-link" href="" target="_blank" title="" cpos="1"></a>\n</div>\n<div class="bcse-card-result-abstract"></div>\n<div class="bcse-card-result-next">\n<a class="bcse-card-next-link" href="" target="_blank" title="" cpos="2"></a>\n</div>\n</div>\n', y = "#bdcsWnCard{position:fixed;bottom:50px;left:0;width:326px;max-height:158px;box-shadow:2px 3px 3px #ccc;background-color:#fff;display:none;left:-328px;z-index:99999999;font-family:'Microsoft Yahei',微软雅黑,serif}#bdcsWnCard .bcse-card-top{width:316px;height:28px;line-height:28px;font-size:13px;color:#ebedfb;background-color:#2C85FF;padding-left:10px}#bdcsWnCard .bcse-card-title{float:left;display:inline-block}#bdcsWnCard .bcse-card-query{float:left;display:inline-block;font-weight:700;margin:0 3px;max-width:110px;overflow:hidden;white-space:nowrap;color:#fff;-o-text-overflow:ellipsis;text-overflow:ellipsis}#bdcsWnCard .bcse-card-close{float:right;font-size:22px;margin-right:5px;margin-top:-2px;cursor:pointer}#bdcsWnCard .bcse-card-center{padding:15px 10px}#bdcsWnCard .bcse-card-frame{float:left;height:75px;width:121px;margin-right:15px;margin-bottom:10px}#bdcsWnCard .bcse-card-result-title{word-break:break-all;line-height:16px;max-height:33px;overflow:hidden}#bdcsWnCard .bcse-card-center a{font-size:14px;color:#333;text-decoration:none}#bdcsWnCard .bcse-card-result-title a:visited{color:#333}#bdcsWnCard .bcse-card-result-abstract{font-size:12px;word-break:break-all;color:#bfbfbf;height:28px;line-height:14px;margin-top:10px;overflow:hidden}#bdcsWnCard .bcse-card-result-next{font-size:14px;width:100%;line-height:16px;height:16px;overflow:hidden;color:#333;margin-top:15px}.clearfix:after{content:'';display:block;clear:both;height:0}.clearfix{zoom:1}", z = function() {
            function c(e) {
                var h, f = document.getElementById("bdcsWnCard"),
                    g = parseInt(q(f, "left"), 10);
                0 > g ? (window.bdcsMncardReady = 0, f.style.left = g + 4 + "px", window.setTimeout(function() {
                    c(e)
                }, 1)) : (window.bdcsMncardReady = 1, a = 1, b = 0, t.send("http://znsv.baidu.com/customer_search/click", h, {
                    query: r("bcse-card-query")[0].getAttribute("title"),
                    log_type: "wn-card-show",
                    site_id: d,
                    type: e,
                    from: "iframe",
                    plate_url: window.location.href
                }))
            }

            function e() {
                var c = document.getElementById("bdcsWnCard"),
                    d = parseInt(q(c, "left"), 10);
                d > -328 ? (window.bdcsMncardReady = 0, c.style.left = d - 4 + "px", window.setTimeout(function() {
                    e()
                }, 1)) : (a = 0, b = 1, c.style.display = "none", window.bdcsMncardReady = 1)
            }

            function f(a) {
                this.options = a, this.render(this.options.data, this.options.qType)
            }
            var a = 1,
                b = 1;
            return f.prototype.render = function(a, b) {
                var c, e, f, g, h, i, j, k;
                w(y), c = document.createElement("div"), c.className = "bcse-wn-card", c.id = "bdcsWnCard", document.body.appendChild(c), c.innerHTML = x, e = r("bcse-card-query")[0], e.innerHTML = a["query"], e.setAttribute("title", a["query"]), f = r("bcse-card-first-link")[0], f.innerHTML = a["results"][0]["title"].replace(/<em>/g, "").replace(/<\/em>/g, ""), f.setAttribute("title", a["results"][0]["title"].replace(/<em>/g, "").replace(/<\/em>/g, "")), f.setAttribute("href", a["results"][0]["url"]), g = r("bcse-card-next-link")[0], g.innerHTML = a["results"][1]["title"].replace(/<em>/g, "").replace(/<\/em>/g, ""), g.setAttribute("title", a["results"][1]["title"].replace(/<em>/g, "").replace(/<\/em>/g, "")), g.setAttribute("href", a["results"][1]["url"]), h = r("bcse-card-result-abstract")[0], h.innerHTML = a["results"][0]["abstract"].replace(/<em>/g, "").replace(/<\/em>/g, ""), i = document.getElementById("bdcsCardFrame"), a["results"][0]["img"] ? i.setAttribute("src", "http://znsv.baidu.com/static/customer-search/html/wncard.html?a=" + a["results"][0]["url"] + "&q=" + r("bcse-card-query")[0].getAttribute("title") + "&s=" + d + "&p=" + window.location.href + "&t=" + b + "#" + a["results"][0]["img"]) : i.style.display = "none", window.bdcsMncardMtd = 1, window.bdcsMncardReady = 1, j = document.documentElement.scrollTop || document.body.scrollTop, k = Math.max(document.documentElement.scrollHeight, document.body.clientHeight), j >= (k - document.documentElement.clientHeight) / 2 && 1 === window.bdcsMncardMtd && (document.getElementById("bdcsWnCard").style.display = "block", document.getElementById("bdcsWnCard").style.left = 0), this.bind(b)
            }, f.prototype.bind = function(f) {
                s(r("bcse-card-close")[0], "click", function() {
                    document.getElementById("bdcsWnCard").style.display = "none", window.bdcsMncardMtd = 0
                }), window.onscroll = function() {
                    var d = document.documentElement.scrollTop || document.body.scrollTop,
                        g = Math.max(document.documentElement.scrollHeight, document.body.clientHeight),
                        h = document.getElementById("bdcsWnCard");
                    d >= (g - document.documentElement.clientHeight) / 2 && 1 === window.bdcsMncardMtd && 1 === window.bdcsMncardReady && 1 === b ? (h.style.display = "block", c(f)) : d < (g - document.documentElement.clientHeight) / 2 && 1 === window.bdcsMncardReady && 1 === a && e()
                };
                for (var g = 0; g < document.getElementById("bdcsWnCard").getElementsByTagName("a").length; g++) s(document.getElementById("bdcsWnCard").getElementsByTagName("a")[g], "click", function() {
                    var c, b = this.getAttribute("href");
                    t.send("http://znsv.baidu.com/customer_search/click", c, {
                        query: r("bcse-card-query")[0].getAttribute("title"),
                        url: b,
                        log_type: "wn-card-click",
                        site_id: d,
                        plate_url: window.location.href,
                        type: f,
                        from: "iframe",
                        cpos: this.getAttribute("cpos") ? this.getAttribute("cpos") : 3
                    })
                })
            }, f
        }(),
        function() {
            var g, i, k, l, m, n, o, p, q, r, s, t, u, v, w, b = [],
                c = [],
                e = 0,
                f = {
                    s: d,
                    locUrl: window.location.href
                },
                h = document.referrer;
            if (h) {
                if (l = {}, decodeURIComponent(h) && (i = decodeURIComponent(h)), k = i.split("?"), k[1])
                    for (m = k[1].split("&"), n = 0; n < m.length; n++) o = m[n].split("=")[0], p = m[n].split("=")[1], o && p && (l[o] = p);
                q = /www\.baidu\.com/, r = /cse\/search/, q.test(i) && l["eqid"] ? (f["eqid"] = l["eqid"], g = 1) : r.test(i) && l["q"] && (f["q"] = l["q"], g = 2)
            }
            if (!f["q"]) {
                for (s = document.getElementsByTagName("meta"), t = "", u = [], v = [], n = 0; n < s.length; n++) s[n].getAttribute("name") && s[n].getAttribute("content") && "keywords" === s[n].getAttribute("name").toLowerCase() && (u = s[n].getAttribute("content").split(/,| |、|;|，/));
                if (u.length > 0) {
                    for (n = 0; n < u.length; n++) "" !== u[n] && v.push(u[n]);
                    v.length > 0 && (t = v[0], 1 !== g && (g = 3))
                }
                "" === t && document.title && (t = document.title, 1 !== g && (g = 4)), "" !== t && (f["q"] = t)
            }
            for (w = 0; w < c.length; w++) window.location.href === c[w] && (e = 1);
            for (n = 0; n < b.length; n++) window.location.href.indexOf(b[n]) >= 0 && 0 === e && 0 === j() && !document.getElementById("bdcsWnCard") && (f["q"] || f["eqid"]) && (a.init(), a.get({
                url: "http://zhannei.baidu.com/api/customsearch/search",
                parameters: f,
                success: function(a) {
                    a && 0 === a.error && a.results.length > 1 && new z({
                        data: a,
                        qType: g
                    })
                }
            }))
        }()
}();
