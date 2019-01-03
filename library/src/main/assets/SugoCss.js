var sugoioKit = function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t),
        i.l = !0,
        i.exports
    }
    var r = {};
    return t.m = e,
    t.c = r,
    t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    },
    t.n = function(e) {
        var r = e && e.__esModule ?
        function() {
            return e["default "]
        }: function() {
            return e
        };
        return t.d(r, "a ", r),
        r
    },
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    t.p = " ",
    t(t.s = 0)
} ([function(e, t, r) {
    "use strict ";
    function n(e, t, r, n) {
        if (e.nodeType !== N.ELEMENT_NODE) return null;
        var i = e.getAttribute("id ");
        if (t && i && !n) return new s({
            value: a.idSelector(i),
            optimized: !0
        });
        var o = e.nodeName.toLowerCase();
        return "body " === o || "head " === o || "html " === o ? new s({
            value: e.nodeName.toLowerCase(),
            optimized: !0
        }) : function(e, t, r) {
            if (e.nodeType !== N.ELEMENT_NODE) return null;
            var n = e.getAttribute("id ");
            if (t && n) return new s({
                value: e.nodeName.toLowerCase() + a.idSelector(n),
                optimized: !0
            });
            var i = e.parentNode,
            o = e.nodeName.toLowerCase();
            if (!i || i.nodeType === N.DOCUMENT_NODE) return new s({
                value: o.toLowerCase(),
                optimized: !0
            });
            var u = a.prefixedElementClassNames(e),
            f = !1,
            d = !1,
            E = -1,
            l = i.children,
            c = 0,
            O = [];
            if (t) for (c = 0; ( - 1 === E || !d) && c < l.length; ++c) {
                var p = l[c];
                if (p !== e) {
                    if (!d && p.nodeName.toLowerCase() === o.toLowerCase()) {
                        f = !0,
                        O = u;
                        for (var T = 0,
                        _ = 0; _ < O.length; _++)++T;
                        if (0 !== T) for (var C = a.prefixedElementClassNames(p), v = 0; v < C.length; ++v) {
                            var I = C[v],
                            D = O.indexOf(I);
                            if ( - 1 !== D && (O.splice(D, 1), !--T)) {
                                d = !0;
                                break
                            }
                        } else d = !0
                    }
                } else E = c
            } else if (l.length > 1) for (c = 0; c < l.length; c++) if (l[c] === e) {
                E = c,
                d = !0;
                break
            }
            var h = o.toLowerCase();
            if (r && "input " === o.toLowerCase() && e.getAttribute("type ") && !e.getAttribute("id ") && !e.getAttribute("class ") && (h += '[type= "' + e.getAttribute("type ") + ' "]'), d) h += ":nth-child( " + (E + 1) + ") ";
            else if (f) for (var m = 0; m < O.length; m++) h += ". " + a.escapeIdentifierIfNeeded(O[m].substr(1));
            return new s({
                value: h,
                optimized: !1
            })
        } (e, t, r)
    }
    function i(e, t, r) {
        if (e.nodeType !== N.ELEMENT_NODE) return " ";
        for (var i = [], o = e; o;) {
            var u = n(o, t, o === e, r);
            if (!u) break;
            if (i.push(u), u.optimized) break;
            o = o.parentNode
        }
        return i.reverse().join(" >  ")
    }
    function o(e) {
        return i(e, !0, !0)
    }
    function u(e) {
        return i(e, !1, !1)
    }
    Object.defineProperty(t, "__esModule ", {
        value: !0
    });
    var a = r(1),
    f = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12,
        DOCUMENT_POSITION_DISCONNECTED: 1,
        DOCUMENT_POSITION_PRECEDING: 2,
        DOCUMENT_POSITION_FOLLOWING: 4,
        DOCUMENT_POSITION_CONTAINS: 8,
        DOCUMENT_POSITION_CONTAINED_BY: 16,
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
    },
    N = a.isBrowser() ? window.Node || f: f,
    s = a.DOMNodePathStep;
    t.optimized = o,
    t.entire = u,
    t.cssPath = function(e) {
        var t = o(e);
        return function(e, t) {
            return (void 0 || document).querySelectorAll(e)
        } (t).length > 1 && (t = u(e)),
        t
    }
},
function(e, t, r) {
    "use strict ";
    function n(e) {
        var t = e.charCodeAt(0).toString(16);
        return 1 === t.length && (t = "0 " + t),
        t
    }
    function i(e) {
        return !! /[a-zA-Z0-9_-]/.test(e) || e.charCodeAt(0) >= 160
    }
    function o(e) {
        return /^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(e)
    }
    function u(e, t) {
        return "\\\\ " + n(e) + (t ? " ": "  ")
    }
    function a(e) {
        if (o(e)) return e;
        var t = /^(?:[0-9]|-[0-9-]?)/.test(e),
        r = e.length - 1;
        return e.replace(/./g,
        function(e, n) {
            return t && 0 === n || !i(e) ? u(e, n === r) : e
        })
    }
    Object.defineProperty(t, "__esModule ", {
        value: !0
    });
    var f = function() {
        function e(e) {
            this.value = e.value,
            this.optimized = e.optimized || !1
        }
        return e.prototype.toString = function() {
            return this.value
        },
        e
    } ();
    t.DOMNodePathStep = f,
    t.toHexByte = n,
    t.isCSSIdentChar = i,
    t.isCSSIdentifier = o,
    t.escapeAsciiChar = u,
    t.escapeIdentifierIfNeeded = a,
    t.idSelector = function(e) {
        return "# " + a(e)
    },
    t.prefixedElementClassNames = function(e) {
        var t = e.getAttribute("class ");
        if (!t) return [];
        var r = t.split(/\\s+/g);
        return (r = r.filter(Boolean)).map(function(e) {
            return "$ " + e
        })
    },
    t.isBrowser = function() {
        var e = !1;
        try {
            e = "undefined " != typeof window
        } catch(t) {
            e = !1
        }
        return e
    }
}]);