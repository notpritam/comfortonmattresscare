(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = !0;
        return module.exports; /******/
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0); /******/
})([(function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1); /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    __webpack_require__(3);
    __webpack_require__(5);
    __webpack_require__(9);
    __webpack_require__(10);
    __webpack_require__(11);
    __webpack_require__(13);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _events = __webpack_require__(14);
    var _events2 = _interopRequireDefault(_events);
    var _common = __webpack_require__(12);
    window.$ = _jquery2['default'];
    window.jQuery = _jquery2['default'];
    for (var i in _events2['default'].prototype) {
        _prestashop2['default'][i] = _events2['default'].prototype[i]
    }(0, _jquery2['default'])(document).ready(function() {
        (0, _common.psShowHide)()
    }); /***/
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "use strict";
    (function(global, factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = global.document ? factory(global, !0) : function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return factory(w)
            }
        } else {
            factory(global)
        }
    })(typeof window !== "undefined" ? window : undefined, function(window, noGlobal) {
        var arr = [];
        var document = window.document;
        var _slice = arr.slice;
        var concat = arr.concat;
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var support = {};
        var version = "2.2.4",
            jQuery = function jQuery(selector, context) {
                return new jQuery.fn.init(selector, context)
            },
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([\da-z])/gi,
            fcamelCase = function fcamelCase(all, letter) {
                return letter.toUpperCase()
            };
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            selector: "",
            length: 0,
            toArray: function toArray() {
                return _slice.call(this)
            },
            get: function get(num) {
                return num != null ? num < 0 ? this[num + this.length] : this[num] : _slice.call(this)
            },
            pushStack: function pushStack(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                ret.context = this.context;
                return ret
            },
            each: function each(callback) {
                return jQuery.each(this, callback)
            },
            map: function map(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem)
                }))
            },
            slice: function slice() {
                return this.pushStack(_slice.apply(this, arguments))
            },
            first: function first() {
                return this.eq(0)
            },
            last: function last() {
                return this.eq(-1)
            },
            eq: function eq(i) {
                var len = this.length,
                    j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
            },
            end: function end() {
                return this.prevObject || this.constructor()
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = !1;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++
            }
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {}
            }
            if (i === length) {
                target = this;
                i--
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = !1;
                                clone = src && jQuery.isArray(src) ? src : []
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {}
                            }
                            target[name] = jQuery.extend(deep, clone, copy)
                        } else if (copy !== undefined) {
                            target[name] = copy
                        }
                    }
                }
            }
            return target
        };
        jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function error(msg) {
                throw new Error(msg)
            },
            noop: function noop() {},
            isFunction: function isFunction(obj) {
                return jQuery.type(obj) === "function"
            },
            isArray: Array.isArray,
            isWindow: function isWindow(obj) {
                return obj != null && obj === obj.window
            },
            isNumeric: function isNumeric(obj) {
                var realStringObj = obj && obj.toString();
                return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0
            },
            isPlainObject: function isPlainObject(obj) {
                var key;
                if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                    return !1
                }
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                    return !1
                }
                for (key in obj) {}
                return key === undefined || hasOwn.call(obj, key)
            },
            isEmptyObject: function isEmptyObject(obj) {
                var name;
                for (name in obj) {
                    return !1
                }
                return !0
            },
            type: function type(obj) {
                if (obj == null) {
                    return obj + ""
                }
                return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj
            },
            globalEval: function globalEval(code) {
                var script, indirect = eval;
                code = jQuery.trim(code);
                if (code) {
                    if (code.indexOf("use strict") === 1) {
                        script = document.createElement("script");
                        script.text = code;
                        document.head.appendChild(script).parentNode.removeChild(script)
                    } else {
                        indirect(code)
                    }
                }
            },
            camelCase: function camelCase(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
            },
            nodeName: function nodeName(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
            },
            each: function each(obj, callback) {
                var length, i = 0;
                if (isArrayLike(obj)) {
                    length = obj.length;
                    for (; i < length; i++) {
                        if (callback.call(obj[i], i, obj[i]) === !1) {
                            break
                        }
                    }
                } else {
                    for (i in obj) {
                        if (callback.call(obj[i], i, obj[i]) === !1) {
                            break
                        }
                    }
                }
                return obj
            },
            trim: function trim(text) {
                return text == null ? "" : (text + "").replace(rtrim, "")
            },
            makeArray: function makeArray(arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArrayLike(Object(arr))) {
                        jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                    } else {
                        push.call(ret, arr)
                    }
                }
                return ret
            },
            inArray: function inArray(elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i)
            },
            merge: function merge(first, second) {
                var len = +second.length,
                    j = 0,
                    i = first.length;
                for (; j < len; j++) {
                    first[i++] = second[j]
                }
                first.length = i;
                return first
            },
            grep: function grep(elems, callback, invert) {
                var callbackInverse, matches = [],
                    i = 0,
                    length = elems.length,
                    callbackExpect = !invert;
                for (; i < length; i++) {
                    callbackInverse = !callback(elems[i], i);
                    if (callbackInverse !== callbackExpect) {
                        matches.push(elems[i])
                    }
                }
                return matches
            },
            map: function map(elems, callback, arg) {
                var length, value, i = 0,
                    ret = [];
                if (isArrayLike(elems)) {
                    length = elems.length;
                    for (; i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value)
                        }
                    }
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value)
                        }
                    }
                }
                return concat.apply([], ret)
            },
            guid: 1,
            proxy: function proxy(fn, context) {
                var tmp, args, proxy;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp
                }
                if (!jQuery.isFunction(fn)) {
                    return undefined
                }
                args = _slice.call(arguments, 2);
                proxy = function() {
                    return fn.apply(context || this, args.concat(_slice.call(arguments)))
                };
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy
            },
            now: Date.now,
            support: support
        });
        if (typeof Symbol === "function") {
            jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
        }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase()
        });

        function isArrayLike(obj) {
            var length = !!obj && "length" in obj && obj.length,
                type = jQuery.type(obj);
            if (type === "function" || jQuery.isWindow(obj)) {
                return !1
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj
        }
        var Sizzle = (function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function sortOrder(a, b) {
                    if (a === b) {
                        hasDuplicate = !0
                    }
                    return 0
                },
                MAX_NEGATIVE = 1 << 31,
                hasOwn = ({}).hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
                indexOf = function indexOf(list, elem) {
                    var i = 0,
                        len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i
                        }
                    }
                    return -1
                },
                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                whitespace = "[\\x20\\t\\r\\n\\f]",
                identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),
                matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                rnative = /^[^{]+\{\s*\[native \w/,
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rsibling = /[+~]/,
                rescape = /'|\\/g,
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function funescape(_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 0x10000;
                    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00)
                },
                unloadHandler = function unloadHandler() {
                    setDocument()
                };
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType
            } catch (e) {
                push = {
                    apply: arr.length ? function(target, els) {
                        push_native.apply(target, slice.call(els))
                    } : function(target, els) {
                        var j = target.length,
                            i = 0;
                        while (target[j++] = els[i++]) {}
                        target.length = j - 1
                    }
                }
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument,
                    nodeType = context ? context.nodeType : 9;
                results = results || [];
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results
                }
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context)
                    }
                    context = context || document;
                    if (documentIsHTML) {
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                            if (m = match[1]) {
                                if (nodeType === 9) {
                                    if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results
                                        }
                                    } else {
                                        return results
                                    }
                                } else {
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results
                            }
                        }
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector
                            } else if (context.nodeName.toLowerCase() !== "object") {
                                if (nid = context.getAttribute("id")) {
                                    nid = nid.replace(rescape, "\\$&")
                                } else {
                                    context.setAttribute("id", nid = expando)
                                }
                                groups = tokenize(selector);
                                i = groups.length;
                                nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                                while (i--) {
                                    groups[i] = nidselect + " " + toSelector(groups[i])
                                }
                                newSelector = groups.join(",");
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results
                                } catch (qsaError) {} finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed)
            }

            function createCache() {
                var keys = [];

                function cache(key, value) {
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        delete cache[keys.shift()]
                    }
                    return cache[key + " "] = value
                }
                return cache
            }

            function markFunction(fn) {
                fn[expando] = !0;
                return fn
            }

            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return !!fn(div)
                } catch (e) {
                    return !1
                } finally {
                    if (div.parentNode) {
                        div.parentNode.removeChild(div)
                    }
                    div = null
                }
            }

            function addHandle(attrs, handler) {
                var arr = attrs.split("|"),
                    i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler
                }
            }

            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                if (diff) {
                    return diff
                }
                if (cur) {
                    while (cur = cur.nextSibling) {
                        if (cur === b) {
                            return -1
                        }
                    }
                }
                return a ? 1 : -1
            }

            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type
                }
            }

            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type
                }
            }

            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length;
                        while (i--) {
                            if (seed[j = matchIndexes[i]]) {
                                seed[j] = !(matches[j] = seed[j])
                            }
                        }
                    })
                })
            }

            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context
            }
            support = Sizzle.support = {};
            isXML = Sizzle.isXML = function(elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : !1
            };
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document
                }
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);
                if ((parent = document.defaultView) && parent.top !== parent) {
                    if (parent.addEventListener) {
                        parent.addEventListener("unload", unloadHandler, !1)
                    } else if (parent.attachEvent) {
                        parent.attachEvent("onunload", unloadHandler)
                    }
                }
                support.attributes = assert(function(div) {
                    div.className = "i";
                    return !div.getAttribute("className")
                });
                support.getElementsByTagName = assert(function(div) {
                    div.appendChild(document.createComment(""));
                    return !div.getElementsByTagName("*").length
                });
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                support.getById = assert(function(div) {
                    docElem.appendChild(div).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length
                });
                if (support.getById) {
                    Expr.find.ID = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m ? [m] : []
                        }
                    };
                    Expr.filter.ID = function(id) {

                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    }
                } else {
                    delete Expr.find.ID;
                    Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    }
                }
                Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag)
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag)
                    }
                } : function(tag, context) {
                    var elem, tmp = [],
                        i = 0,
                        results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while (elem = results[i++]) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem)
                            }
                        }
                        return tmp
                    }
                    return results
                };
                Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className)
                    }
                };
                rbuggyMatches = [];
                rbuggyQSA = [];
                if (support.qsa = rnative.test(document.querySelectorAll)) {
                    assert(function(div) {
                        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (div.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                        }
                        if (!div.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                        }
                        if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=")
                        }
                        if (!div.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked")
                        }
                        if (!div.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]")
                        }
                    });
                    assert(function(div) {
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        div.appendChild(input).setAttribute("name", "D");
                        if (div.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=")
                        }
                        if (!div.querySelectorAll(":enabled").length) {
                            rbuggyQSA.push(":enabled", ":disabled")
                        }
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:")
                    })
                }
                if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                    assert(function(div) {
                        support.disconnectedMatch = matches.call(div, "div");
                        matches.call(div, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos)
                    })
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                hasCompare = rnative.test(docElem.compareDocumentPosition);
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
                } : function(a, b) {
                    if (b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return !0
                            }
                        }
                    }
                    return !1
                };
                sortOrder = hasCompare ? function(a, b) {
                    if (a === b) {
                        hasDuplicate = !0;
                        return 0
                    }
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare
                    }
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1
                        }
                        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
                    }
                    return compare & 4 ? -1 : 1
                } : function(a, b) {
                    if (a === b) {
                        hasDuplicate = !0;
                        return 0
                    }
                    var cur, i = 0,
                        aup = a.parentNode,
                        bup = b.parentNode,
                        ap = [a],
                        bp = [b];
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
                    } else if (aup === bup) {
                        return siblingCheck(a, b)
                    }
                    cur = a;
                    while (cur = cur.parentNode) {
                        ap.unshift(cur)
                    }
                    cur = b;
                    while (cur = cur.parentNode) {
                        bp.unshift(cur)
                    }
                    while (ap[i] === bp[i]) {
                        i++
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                };
                return document
            };
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements)
            };
            Sizzle.matchesSelector = function(elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem)
                }
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [elem]).length > 0
            };
            Sizzle.contains = function(context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context)
                }
                return contains(context, elem)
            };
            Sizzle.attr = function(elem, name) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem)
                }
                var fn = Expr.attrHandle[name.toLowerCase()],
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
            };
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg)
            };
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [],
                    j = 0,
                    i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while (elem = results[i++]) {
                        if (elem === results[i]) {
                            j = duplicates.push(i)
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1)
                    }
                }
                sortInput = null;
                return results
            };
            getText = Sizzle.getText = function(elem) {
                var node, ret = "",
                    i = 0,
                    nodeType = elem.nodeType;
                if (!nodeType) {
                    while (node = elem[i++]) {
                        ret += getText(node)
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem)
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue
                }
                return ret
            };
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    "ATTR": function ATTR(match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " "
                        }
                        return match.slice(0, 4)
                    },
                    "CHILD": function CHILD(match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0])
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +(match[7] + match[8] || match[3] === "odd")
                        } else if (match[3]) {
                            Sizzle.error(match[0])
                        }
                        return match
                    },
                    "PSEUDO": function PSEUDO(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr.CHILD.test(match[0])) {
                            return null
                        }
                        if (match[3]) {
                            match[2] = match[4] || match[5] || ""
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess)
                        }
                        return match.slice(0, 3)
                    }
                },
                filter: {
                    "TAG": function TAG(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return !0
                        } : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                        }
                    },
                    "CLASS": function CLASS(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "")
                        })
                    },
                    "ATTR": function ATTR(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!="
                            }
                            if (!operator) {
                                return !0
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : !1
                        }
                    },
                    "CHILD": function CHILD(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";
                        return first === 1 && last === 0 ? function(elem) {
                            return !!elem.parentNode
                        } : function(elem, context, xml) {
                            var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                parent = elem.parentNode,
                                name = ofType && elem.nodeName.toLowerCase(),
                                useCache = !xml && !ofType,
                                diff = !1;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while (node = node[dir]) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return !1
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling"
                                    }
                                    return !0
                                }
                                start = [forward ? parent.firstChild : parent.lastChild];
                                if (forward && useCache) {
                                    node = parent;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                                            break
                                        }
                                    }
                                } else {
                                    if (useCache) {
                                        node = elem;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex
                                    }
                                    if (diff === !1) {
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [dirruns, diff]
                                                }
                                                if (node === elem) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || diff % first === 0 && diff / first >= 0
                            }
                        }
                    },
                    "PSEUDO": function PSEUDO(pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument)
                        }
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument),
                                    i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i])
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args)
                            }
                        }
                        return fn
                    }
                },
                pseudos: {
                    "not": markFunction(function(selector) {
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []),
                                i = seed.length;
                            while (i--) {
                                if (elem = unmatched[i]) {
                                    seed[i] = !(matches[i] = elem)
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            input[0] = null;
                            return !results.pop()
                        }
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0
                        }
                    }),
                    "contains": markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                        }
                    }),
                    "lang": markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang)
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return !1
                        }
                    }),
                    "target": function target(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id
                    },
                    "root": function root(elem) {
                        return elem === docElem
                    },
                    "focus": function focus(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                    },
                    "enabled": function enabled(elem) {
                        return elem.disabled === !1
                    },
                    "disabled": function disabled(elem) {
                        return elem.disabled === !0
                    },
                    "checked": function checked(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
                    },
                    "selected": function selected(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex
                        }
                        return elem.selected === !0
                    },
                    "empty": function empty(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return !1
                            }
                        }
                        return !0
                    },
                    "parent": function parent(elem) {
                        return !Expr.pseudos.empty(elem)
                    },
                    "header": function header(elem) {
                        return rheader.test(elem.nodeName)
                    },
                    "input": function input(elem) {
                        return rinputs.test(elem.nodeName)
                    },
                    "button": function button(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button"
                    },
                    "text": function text(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text")
                    },
                    "first": createPositionalPseudo(function() {
                        return [0]
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1]
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument]
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    })
                }
            };
            Expr.pseudos.nth = Expr.pseudos.eq;
            for (i in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) {
                Expr.pseudos[i] = createInputPseudo(i)
            }
            for (i in {
                    submit: !0,
                    reset: !0
                }) {
                Expr.pseudos[i] = createButtonPseudo(i)
            }

            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0)
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar
                        }
                        groups.push(tokens = [])
                    }
                    matched = !1;
                    if (match = rcombinators.exec(soFar)) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length)
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length)
                        }
                    }
                    if (!matched) {
                        break
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value
                }
                return selector
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    checkNonElements = base && dir === "parentNode",
                    doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml)
                        }
                    }
                } : function(elem, context, xml) {
                    var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                    if (xml) {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return !0
                                }
                            }
                        }
                    } else {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                    return newCache[2] = oldCache[2]
                                } else {
                                    uniqueCache[dir] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) {
                                        return !0
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return !1
                        }
                    }
                    return !0
                } : matchers[0]
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results)
                }
                return results
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;
                for (; i < len; i++) {
                    if (elem = unmatched[i]) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i)
                            }
                        }
                    }
                }
                return newUnmatched
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter)
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector)
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [],
                        postMap = [],
                        preexisting = results.length,
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                        matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml)
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if (elem = temp[i]) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if (elem = matcherOut[i]) {
                                        temp.push(matcherIn[i] = elem)
                                    }
                                }
                                postFinder(null, matcherOut = [], temp, xml)
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem)
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml)
                        } else {
                            push.apply(results, matcherOut)
                        }
                    }
                })
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,
                    matchContext = addCombinator(function(elem) {
                        return elem === checkContext
                    }, implicitRelative, !0),
                    matchAnyContext = addCombinator(function(elem) {
                        return indexOf(checkContext, elem) > -1
                    }, implicitRelative, !0),
                    matchers = [function(elem, context, xml) {
                        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                        checkContext = null;
                        return ret
                    }];
                for (; i < len; i++) {
                    if (matcher = Expr.relative[tokens[i].type]) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)]
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                        }
                        matchers.push(matcher)
                    }
                }
                return elementMatcher(matchers)
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                            elems = seed || byElement && Expr.find.TAG("*", outermost),
                            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
                            len = elems.length;
                        if (outermost) {
                            outermostContext = context === document || context || outermost
                        }
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML
                                }
                                while (matcher = elementMatchers[j++]) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique
                                }
                            }
                            if (bySet) {
                                if (elem = !matcher && elem) {
                                    matchedCount--
                                }
                                if (seed) {
                                    unmatched.push(elem)
                                }
                            }
                        }
                        matchedCount += i;
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while (matcher = setMatchers[j++]) {
                                matcher(unmatched, setMatched, context, xml)
                            }
                            if (seed) {
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results)
                                        }
                                    }
                                }
                                setMatched = condense(setMatched)
                            }
                            push.apply(results, setMatched);
                            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                                Sizzle.uniqueSort(results)
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup
                        }
                        return unmatched
                    };
                return bySet ? markFunction(superMatcher) : superMatcher
            }
            compile = Sizzle.compile = function(selector, match) {
                var i, setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!match) {
                        match = tokenize(selector)
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached)
                        } else {
                            elementMatchers.push(cached)
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                    cached.selector = selector
                }
                return cached
            };
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize(selector = compiled.selector || selector);
                results = results || [];
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results
                        } else if (compiled) {
                            context = context.parentNode
                        }
                        selector = selector.slice(tokens.shift().value.length)
                    }
                    i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results
                                }
                                break
                            }
                        }
                    }
                }(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results
            };
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = !!hasDuplicate;
            setDocument();
            support.sortDetached = assert(function(div1) {
                return div1.compareDocumentPosition(document.createElement("div")) & 1
            });
            if (!assert(function(div) {
                    div.innerHTML = "<a href='#'></a>";
                    return div.firstChild.getAttribute("href") === "#"
                })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!support.attributes || !assert(function(div) {
                    div.innerHTML = "<input/>";
                    div.firstChild.setAttribute("value", "");
                    return div.firstChild.getAttribute("value") === ""
                })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue
                    }
                })
            }
            if (!assert(function(div) {
                    return div.getAttribute("disabled") == null
                })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                    }
                })
            }
            return Sizzle
        })(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        var dir = function dir(elem, _dir, until) {
            var matched = [],
                truncate = until !== undefined;
            while ((elem = elem[_dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break
                    }
                    matched.push(elem)
                }
            }
            return matched
        };
        var _siblings = function _siblings(n, elem) {
            var matched = [];
            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n)
                }
            }
            return matched
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
        var risSimple = /^.[^:#\[\.,]*$/;

        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) {
                return jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not
                })
            }
            if (qualifier.nodeType) {
                return jQuery.grep(elements, function(elem) {
                    return elem === qualifier !== not
                })
            }
            if (typeof qualifier === "string") {
                if (risSimple.test(qualifier)) {
                    return jQuery.filter(qualifier, elements, not)
                }
                qualifier = jQuery.filter(qualifier, elements)
            }
            return jQuery.grep(elements, function(elem) {
                return indexOf.call(qualifier, elem) > -1 !== not
            })
        }
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")"
            }
            return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1
            }))
        };
        jQuery.fn.extend({
            find: function find(selector) {
                var i, len = this.length,
                    ret = [],
                    self = this;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return !0
                            }
                        }
                    }))
                }
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret)
                }
                ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                ret.selector = this.selector ? this.selector + " " + selector : selector;
                return ret
            },
            filter: function filter(selector) {
                return this.pushStack(winnow(this, selector || [], !1))
            },
            not: function not(selector) {
                return this.pushStack(winnow(this, selector || [], !0))
            },
            is: function is(selector) {
                return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
            }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            init = jQuery.fn.init = function(selector, context, root) {
                var match, elem;
                if (!selector) {
                    return this
                }
                root = root || rootjQuery;
                if (typeof selector === "string") {
                    if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                        match = [null, selector, null]
                    } else {
                        match = rquickExpr.exec(selector)
                    }
                    if (match && (match[1] || !context)) {
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                for (match in context) {
                                    if (jQuery.isFunction(this[match])) {
                                        this[match](context[match])
                                    } else {
                                        this.attr(match, context[match])
                                    }
                                }
                            }
                            return this
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem && elem.parentNode) {
                                this.length = 1;
                                this[0] = elem
                            }
                            this.context = document;
                            this.selector = selector;
                            return this
                        }
                    } else if (!context || context.jquery) {
                        return (context || root).find(selector)
                    } else {
                        return this.constructor(context).find(selector)
                    }
                } else if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this
                } else if (jQuery.isFunction(selector)) {
                    return root.ready !== undefined ? root.ready(selector) : selector(jQuery)
                }
                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context
                }
                return jQuery.makeArray(selector, this)
            };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            guaranteedUnique = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        jQuery.fn.extend({
            has: function has(target) {
                var targets = jQuery(target, this),
                    l = targets.length;
                return this.filter(function() {
                    var i = 0;
                    for (; i < l; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return !0
                        }
                    }
                })
            },
            closest: function closest(selectors, context) {
                var cur, i = 0,
                    l = this.length,
                    matched = [],
                    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                        if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break
                        }
                    }
                }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
            },
            index: function index(elem) {
                if (!elem) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof elem === "string") {
                    return indexOf.call(jQuery(elem), this[0])
                }
                return indexOf.call(this, elem.jquery ? elem[0] : elem)
            },
            add: function add(selector, context) {
                return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
            },
            addBack: function addBack(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
            }
        });

        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur
        }
        jQuery.each({
            parent: function parent(elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null
            },
            parents: function parents(elem) {
                return dir(elem, "parentNode")
            },
            parentsUntil: function parentsUntil(elem, i, until) {
                return dir(elem, "parentNode", until)
            },
            next: function next(elem) {
                return sibling(elem, "nextSibling")
            },
            prev: function prev(elem) {
                return sibling(elem, "previousSibling")
            },
            nextAll: function nextAll(elem) {
                return dir(elem, "nextSibling")
            },
            prevAll: function prevAll(elem) {
                return dir(elem, "previousSibling")
            },
            nextUntil: function nextUntil(elem, i, until) {
                return dir(elem, "nextSibling", until)
            },
            prevUntil: function prevUntil(elem, i, until) {
                return dir(elem, "previousSibling", until)
            },
            siblings: function siblings(elem) {
                return _siblings((elem.parentNode || {}).firstChild, elem)
            },
            children: function children(elem) {
                return _siblings(elem.firstChild)
            },
            contents: function contents(elem) {
                return elem.contentDocument || jQuery.merge([], elem.childNodes)
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);
                if (name.slice(-5) !== "Until") {
                    selector = until
                }
                if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched)
                }
                if (this.length > 1) {
                    if (!guaranteedUnique[name]) {
                        jQuery.uniqueSort(matched)
                    }
                    if (rparentsprev.test(name)) {
                        matched.reverse()
                    }
                }
                return this.pushStack(matched)
            }
        });
        var rnotwhite = /\S+/g;

        function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
                object[flag] = !0
            });
            return object
        }
        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
            var firing, memory, _fired, _locked, list = [],
                queue = [],
                firingIndex = -1,
                fire = function fire() {
                    _locked = options.once;
                    _fired = firing = !0;
                    for (; queue.length; firingIndex = -1) {
                        memory = queue.shift();
                        while (++firingIndex < list.length) {
                            if (list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse) {
                                firingIndex = list.length;
                                memory = !1
                            }
                        }
                    }
                    if (!options.memory) {
                        memory = !1
                    }
                    firing = !1;
                    if (_locked) {
                        if (memory) {
                            list = []
                        } else {
                            list = ""
                        }
                    }
                },
                self = {
                    add: function add() {
                        if (list) {
                            if (memory && !firing) {
                                firingIndex = list.length - 1;
                                queue.push(memory)
                            }(function add(args) {
                                jQuery.each(args, function(_, arg) {
                                    if (jQuery.isFunction(arg)) {
                                        if (!options.unique || !self.has(arg)) {
                                            list.push(arg)
                                        }
                                    } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                                        add(arg)
                                    }
                                })
                            })(arguments);
                            if (memory && !firing) {
                                fire()
                            }
                        }
                        return this
                    },
                    remove: function remove() {
                        jQuery.each(arguments, function(_, arg) {
                            var index;
                            while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                list.splice(index, 1);
                                if (index <= firingIndex) {
                                    firingIndex--
                                }
                            }
                        });
                        return this
                    },
                    has: function has(fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
                    },
                    empty: function empty() {
                        if (list) {
                            list = []
                        }
                        return this
                    },
                    disable: function disable() {
                        _locked = queue = [];
                        list = memory = "";
                        return this
                    },
                    disabled: function disabled() {
                        return !list
                    },
                    lock: function lock() {
                        _locked = queue = [];
                        if (!memory) {
                            list = memory = ""
                        }
                        return this
                    },
                    locked: function locked() {
                        return !!_locked
                    },
                    fireWith: function fireWith(context, args) {
                        if (!_locked) {
                            args = args || [];
                            args = [context, args.slice ? args.slice() : args];
                            queue.push(args);
                            if (!firing) {
                                fire()
                            }
                        }
                        return this
                    },
                    fire: function fire() {
                        self.fireWith(this, arguments);
                        return this
                    },
                    fired: function fired() {
                        return !!_fired
                    }
                };
            return self
        };
        jQuery.extend({
            Deferred: function Deferred(func) {
                var tuples = [
                        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", jQuery.Callbacks("memory")]
                    ],
                    _state = "pending",
                    _promise = {
                        state: function state() {
                            return _state
                        },
                        always: function always() {
                            deferred.done(arguments).fail(arguments);
                            return this
                        },
                        then: function then() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(i, tuple) {
                                    var fn = jQuery.isFunction(fns[i]) && fns[i];
                                    deferred[tuple[1]](function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        if (returned && jQuery.isFunction(returned.promise)) {
                                            returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject)
                                        } else {
                                            newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                        }
                                    })
                                });
                                fns = null
                            }).promise()
                        },
                        promise: function promise(obj) {
                            return obj != null ? jQuery.extend(obj, _promise) : _promise
                        }
                    },
                    deferred = {};
                _promise.pipe = _promise.then;
                jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2],
                        stateString = tuple[3];
                    _promise[tuple[1]] = list.add;
                    if (stateString) {
                        list.add(function() {
                            _state = stateString
                        }, tuples[i ^ 1][2].disable, tuples[2][2].lock)
                    }
                    deferred[tuple[0]] = function() {
                        deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
                        return this
                    };
                    deferred[tuple[0] + "With"] = list.fireWith
                });
                _promise.promise(deferred);
                if (func) {
                    func.call(deferred, deferred)
                }
                return deferred
            },
            when: function when(subordinate) {
                var i = 0,
                    resolveValues = _slice.call(arguments),
                    length = resolveValues.length,
                    remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
                    deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
                    updateFunc = function updateFunc(i, contexts, values) {
                        return function(value) {
                            contexts[i] = this;
                            values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
                            if (values === progressValues) {
                                deferred.notifyWith(contexts, values)
                            } else if (!--remaining) {
                                deferred.resolveWith(contexts, values)
                            }
                        }
                    },
                    progressValues, progressContexts, resolveContexts;
                if (length > 1) {
                    progressValues = new Array(length);
                    progressContexts = new Array(length);
                    resolveContexts = new Array(length);
                    for (; i < length; i++) {
                        if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                            resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject)
                        } else {
                            --remaining
                        }
                    }
                }
                if (!remaining) {
                    deferred.resolveWith(resolveContexts, resolveValues)
                }
                return deferred.promise()
            }
        });
        var readyList;
        jQuery.fn.ready = function(fn) {
            jQuery.ready.promise().done(fn);
            return this
        };
        jQuery.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function holdReady(hold) {
                if (hold) {
                    jQuery.readyWait++
                } else {
                    jQuery.ready(!0)
                }
            },
            ready: function ready(wait) {
                if (wait === !0 ? --jQuery.readyWait : jQuery.isReady) {
                    return
                }
                jQuery.isReady = !0;
                if (wait !== !0 && --jQuery.readyWait > 0) {
                    return
                }
                readyList.resolveWith(document, [jQuery]);
                if (jQuery.fn.triggerHandler) {
                    jQuery(document).triggerHandler("ready");
                    jQuery(document).off("ready")
                }
            }
        });

        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            jQuery.ready()
        }
        jQuery.ready.promise = function(obj) {
            if (!readyList) {
                readyList = jQuery.Deferred();
                if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
                    window.setTimeout(jQuery.ready)
                } else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed)
                }
            }
            return readyList.promise(obj)
        };
        jQuery.ready.promise();
        var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0,
                len = elems.length,
                bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = !0;
                for (i in key) {
                    access(elems, fn, i, key[i], !0, emptyGet, raw)
                }
            } else if (value !== undefined) {
                chainable = !0;
                if (!jQuery.isFunction(value)) {
                    raw = !0
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value)
                        }
                    }
                }
                if (fn) {
                    for (; i < len; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
                    }
                }
            }
            return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
        };
        var acceptData = function acceptData(owner) {
            return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType
        };

        function Data() {
            this.expando = jQuery.expando + Data.uid++
        }
        Data.uid = 1;
        Data.prototype = {
            register: function register(owner, initial) {
                var value = initial || {};
                if (owner.nodeType) {
                    owner[this.expando] = value
                } else {
                    Object.defineProperty(owner, this.expando, {
                        value: value,
                        writable: !0,
                        configurable: !0
                    })
                }
                return owner[this.expando]
            },
            cache: function cache(owner) {
                if (!acceptData(owner)) {
                    return {}
                }
                var value = owner[this.expando];
                if (!value) {
                    value = {};
                    if (acceptData(owner)) {
                        if (owner.nodeType) {
                            owner[this.expando] = value
                        } else {
                            Object.defineProperty(owner, this.expando, {
                                value: value,
                                configurable: !0
                            })
                        }
                    }
                }
                return value
            },
            set: function set(owner, data, value) {
                var prop, cache = this.cache(owner);
                if (typeof data === "string") {
                    cache[data] = value
                } else {
                    for (prop in data) {
                        cache[prop] = data[prop]
                    }
                }
                return cache
            },
            get: function get(owner, key) {
                return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key]
            },
            access: function access(owner, key, value) {
                var stored;
                if (key === undefined || key && typeof key === "string" && value === undefined) {
                    stored = this.get(owner, key);
                    return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key))
                }
                this.set(owner, key, value);
                return value !== undefined ? value : key
            },
            remove: function remove(owner, key) {
                var i, name, camel, cache = owner[this.expando];
                if (cache === undefined) {
                    return
                }
                if (key === undefined) {
                    this.register(owner)
                } else {
                    if (jQuery.isArray(key)) {
                        name = key.concat(key.map(jQuery.camelCase))
                    } else {
                        camel = jQuery.camelCase(key);
                        if (key in cache) {
                            name = [key, camel]
                        } else {
                            name = camel;
                            name = name in cache ? [name] : name.match(rnotwhite) || []
                        }
                    }
                    i = name.length;
                    while (i--) {
                        delete cache[name[i]]
                    }
                }
                if (key === undefined || jQuery.isEmptyObject(cache)) {
                    if (owner.nodeType) {
                        owner[this.expando] = undefined
                    } else {
                        delete owner[this.expando]
                    }
                }
            },
            hasData: function hasData(owner) {
                var cache = owner[this.expando];
                return cache !== undefined && !jQuery.isEmptyObject(cache)
            }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /[A-Z]/g;

        function dataAttr(elem, key, data) {
            var name;
            if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
                    } catch (e) {}
                    dataUser.set(elem, key, data)
                } else {
                    data = undefined
                }
            }
            return data
        }
        jQuery.extend({
            hasData: function hasData(elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem)
            },
            data: function data(elem, name, _data) {
                return dataUser.access(elem, name, _data)
            },
            removeData: function removeData(elem, name) {
                dataUser.remove(elem, name)
            },
            _data: function _data(elem, name, data) {
                return dataPriv.access(elem, name, data)
            },
            _removeData: function _removeData(elem, name) {
                dataPriv.remove(elem, name)
            }
        });
        jQuery.fn.extend({
            data: function data(key, value) {
                var i, name, data, elem = this[0],
                    attrs = elem && elem.attributes;
                if (key === undefined) {
                    if (this.length) {
                        data = dataUser.get(elem);
                        if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                            i = attrs.length;
                            while (i--) {
                                if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = jQuery.camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name])
                                    }
                                }
                            }
                            dataPriv.set(elem, "hasDataAttrs", !0)
                        }
                    }
                    return data
                }
                if (typeof key === "object") {
                    return this.each(function() {
                        dataUser.set(this, key)
                    })
                }
                return access(this, function(value) {
                    var data, camelKey;
                    if (elem && value === undefined) {
                        data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
                        if (data !== undefined) {
                            return data
                        }
                        camelKey = jQuery.camelCase(key);
                        data = dataUser.get(elem, camelKey);
                        if (data !== undefined) {
                            return data
                        }
                        data = dataAttr(elem, camelKey, undefined);
                        if (data !== undefined) {
                            return data
                        }
                        return
                    }
                    camelKey = jQuery.camelCase(key);
                    this.each(function() {
                        var data = dataUser.get(this, camelKey);
                        dataUser.set(this, camelKey, value);
                        if (key.indexOf("-") > -1 && data !== undefined) {
                            dataUser.set(this, key, value)
                        }
                    })
                }, null, value, arguments.length > 1, null, !0)
            },
            removeData: function removeData(key) {
                return this.each(function() {
                    dataUser.remove(this, key)
                })
            }
        });
        jQuery.extend({
            queue: function queue(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = dataPriv.get(elem, type);
                    if (data) {
                        if (!queue || jQuery.isArray(data)) {
                            queue = dataPriv.access(elem, type, jQuery.makeArray(data))
                        } else {
                            queue.push(data)
                        }
                    }
                    return queue || []
                }
            },
            dequeue: function dequeue(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type),
                    next = function next() {
                        jQuery.dequeue(elem, type)
                    };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress")
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks)
                }
                if (!startLength && hooks) {
                    hooks.empty.fire()
                }
            },
            _queueHooks: function _queueHooks(elem, type) {
                var key = type + "queueHooks";
                return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        dataPriv.remove(elem, [type + "queue", key])
                    })
                })
            }
        });
        jQuery.fn.extend({
            queue: function queue(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type)
                }
                return data === undefined ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type)
                    }
                })
            },
            dequeue: function dequeue(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type)
                })
            },
            clearQueue: function clearQueue(type) {
                return this.queue(type || "fx", [])
            },
            promise: function promise(type, obj) {
                var tmp, count = 1,
                    defer = jQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function resolve() {
                        if (!--count) {
                            defer.resolveWith(elements, [elements])
                        }
                    };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined
                }
                type = type || "fx";
                while (i--) {
                    tmp = dataPriv.get(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve)
                    }
                }
                resolve();
                return defer.promise(obj)
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var isHidden = function isHidden(elem, el) {
            elem = el || elem;
            return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem)
        };

        function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale = 1,
                maxIterations = 20,
                currentValue = tween ? function() {
                    return tween.cur()
                } : function() {
                    return jQuery.css(elem, prop, "")
                },
                initial = currentValue(),
                unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
                unit = unit || initialInUnit[3];
                valueParts = valueParts || [];
                initialInUnit = +initial || 1;
                do {
                    scale = scale || ".5";
                    initialInUnit = initialInUnit / scale;
                    jQuery.style(elem, prop, initialInUnit + unit)
                } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations)
            }
            if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0;
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                if (tween) {
                    tween.unit = unit;
                    tween.start = initialInUnit;
                    tween.end = adjusted
                }
            }
            return adjusted
        }
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([\w:-]+)/;
        var rscriptType = /^$|\/(?:java|ecma)script/i;
        var wrapMap = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;

        function getAll(context, tag) {
            var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
            return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret
        }

        function setGlobalEval(elems, refElements) {
            var i = 0,
                l = elems.length;
            for (; i < l; i++) {
                dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
            }
        }
        var rhtml = /<|&#?\w+;/;

        function buildFragment(elems, context, scripts, selection, ignored) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(),
                nodes = [],
                i = 0,
                l = elems.length;
            for (; i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem))
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = ""
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) > -1) {
                    if (ignored) {
                        ignored.push(elem)
                    }
                    continue
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp)
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem)
                        }
                    }
                }
            }
            return fragment
        }(function() {
            var fragment = document.createDocumentFragment(),
                div = fragment.appendChild(document.createElement("div")),
                input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
            support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked;
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue
        })();
        var rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }

        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (err) {}
        }

        function _on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined
                }
                for (type in types) {
                    _on(elem, type, selector, data, types[type], one)
                }
                return elem
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined
                }
            }
            if (fn === !1) {
                fn = returnFalse
            } else if (!fn) {
                return elem
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments)
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
            }
            return elem.each(function() {
                jQuery.event.add(this, types, fn, data, selector)
            })
        }
        jQuery.event = {
            global: {},
            add: function add(elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                if (!elemData) {
                    return
                }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector
                }
                if (!handler.guid) {
                    handler.guid = jQuery.guid++
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {}
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function(e) {
                        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined
                    }
                }
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        continue
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === !1) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle)
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid
                        }
                    }
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj)
                    } else {
                        handlers.push(handleObj)
                    }
                    jQuery.event.global[type] = !0
                }
            },
            remove: function remove(elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                if (!elemData || !(events = elemData.events)) {
                    return
                }
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, !0)
                        }
                        continue
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj)
                            }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === !1) {
                            jQuery.removeEvent(elem, type, elemData.handle)
                        }
                        delete events[type]
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    dataPriv.remove(elem, "handle events")
                }
            },
            dispatch: function dispatch(event) {
                event = jQuery.event.fix(event);
                var i, j, ret, matched, handleObj, handlerQueue = [],
                    args = _slice.call(arguments),
                    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
                args[0] = event;
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === !1) {
                    return
                }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === !1) {
                                    event.preventDefault();
                                    event.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) {
                    special.postDispatch.call(this, event)
                }
                return event.result
            },
            handlers: function handlers(event, _handlers) {
                var i, matches, sel, handleObj, handlerQueue = [],
                    delegateCount = _handlers.delegateCount,
                    cur = event.target;
                if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                    for (; cur !== this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && (cur.disabled !== !0 || event.type !== "click")) {
                            matches = [];
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = _handlers[i];
                                sel = handleObj.selector + " ";
                                if (matches[sel] === undefined) {
                                    matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length
                                }
                                if (matches[sel]) {
                                    matches.push(handleObj)
                                }
                            }
                            if (matches.length) {
                                handlerQueue.push({
                                    elem: cur,
                                    handlers: matches
                                })
                            }
                        }
                    }
                }
                if (delegateCount < _handlers.length) {
                    handlerQueue.push({
                        elem: this,
                        handlers: _handlers.slice(delegateCount)
                    })
                }
                return handlerQueue
            },
            props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function filter(event, original) {
                    if (event.which == null) {
                        event.which = original.charCode != null ? original.charCode : original.keyCode
                    }
                    return event
                }
            },
            mouseHooks: {
                props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
                filter: function filter(event, original) {
                    var eventDoc, doc, body, button = original.button;
                    if (event.pageX == null && original.clientX != null) {
                        eventDoc = event.target.ownerDocument || document;
                        doc = eventDoc.documentElement;
                        body = eventDoc.body;
                        event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
                    }
                    if (!event.which && button !== undefined) {
                        event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0
                    }
                    return event
                }
            },
            fix: function fix(event) {
                if (event[jQuery.expando]) {
                    return event
                }
                var i, prop, copy, type = event.type,
                    originalEvent = event,
                    fixHook = this.fixHooks[type];
                if (!fixHook) {
                    this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}
                }
                copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                event = new jQuery.Event(originalEvent);
                i = copy.length;
                while (i--) {
                    prop = copy[i];
                    event[prop] = originalEvent[prop]
                }
                if (!event.target) {
                    event.target = document
                }
                if (event.target.nodeType === 3) {
                    event.target = event.target.parentNode
                }
                return fixHook.filter ? fixHook.filter(event, originalEvent) : event
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function trigger() {
                        if (this !== safeActiveElement() && this.focus) {
                            this.focus();
                            return !1
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function trigger() {
                        if (this === safeActiveElement() && this.blur) {
                            this.blur();
                            return !1
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function trigger() {
                        if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                            this.click();
                            return !1
                        }
                    },
                    _default: function _default(event) {
                        return jQuery.nodeName(event.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function postDispatch(event) {
                        if (event.result !== undefined && event.originalEvent) {
                            event.originalEvent.returnValue = event.result
                        }
                    }
                }
            }
        };
        jQuery.removeEvent = function(elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle)
            }
        };
        jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props)
            }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === !1 ? returnTrue : returnFalse
            } else {
                this.type = src
            }
            if (props) {
                jQuery.extend(this, props)
            }
            this.timeStamp = src && src.timeStamp || jQuery.now();
            this[jQuery.expando] = !0
        };
        jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: !1,
            preventDefault: function preventDefault() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function stopPropagation() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function stopImmediatePropagation() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function handle(event) {
                    var ret, target = this,
                        related = event.relatedTarget,
                        handleObj = event.handleObj;
                    if (!related || related !== target && !jQuery.contains(target, related)) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix
                    }
                    return ret
                }
            }
        });
        jQuery.fn.extend({
            on: function on(types, selector, data, fn) {
                return _on(this, types, selector, data, fn)
            },
            one: function one(types, selector, data, fn) {
                return _on(this, types, selector, data, fn, 1)
            },
            off: function off(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this
                }
                if (typeof types === "object") {
                    for (type in types) {
                        this.off(type, selector, types[type])
                    }
                    return this
                }
                if (selector === !1 || typeof selector === "function") {
                    fn = selector;
                    selector = undefined
                }
                if (fn === !1) {
                    fn = returnFalse
                }
                return this.each(function() {
                    jQuery.event.remove(this, types, fn, selector)
                })
            }
        });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            rnoInnerhtml = /<script|<style|<link/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function manipulationTarget(elem, content) {
            return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
        }

        function disableScript(elem) {
            elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
            return elem
        }

        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            if (match) {
                elem.type = match[1]
            } else {
                elem.removeAttribute("type")
            }
            return elem
        }

        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (dest.nodeType !== 1) {
                return
            }
            if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.access(src);
                pdataCur = dataPriv.set(dest, pdataOld);
                events = pdataOld.events;
                if (events) {
                    delete pdataCur.handle;
                    pdataCur.events = {};
                    for (type in events) {
                        for (i = 0, l = events[type].length; i < l; i++) {
                            jQuery.event.add(dest, type, events[type][i])
                        }
                    }
                }
            }
            if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src);
                udataCur = jQuery.extend({}, udataOld);
                dataUser.set(dest, udataCur)
            }
        }

        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
            if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue
            }
        }

        function domManip(collection, args, callback, ignored) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0,
                l = collection.length,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                return collection.each(function(index) {
                    var self = collection.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html())
                    }
                    domManip(self, args, callback, ignored)
                })
            }
            if (l) {
                fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first
                }
                if (first || ignored) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (; i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, !0, !0);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"))
                            }
                        }
                        callback.call(collection[i], node, i)
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src)
                                    }
                                } else {
                                    jQuery.globalEval(node.textContent.replace(rcleanScript, ""))
                                }
                            }
                        }
                    }
                }
            }
            return collection
        }

        function _remove(elem, selector, keepData) {
            var node, nodes = selector ? jQuery.filter(selector, elem) : elem,
                i = 0;
            for (;
                (node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) {
                    jQuery.cleanData(getAll(node))
                }
                if (node.parentNode) {
                    if (keepData && jQuery.contains(node.ownerDocument, node)) {
                        setGlobalEval(getAll(node, "script"))
                    }
                    node.parentNode.removeChild(node)
                }
            }
            return elem
        }
        jQuery.extend({
            htmlPrefilter: function htmlPrefilter(html) {
                return html.replace(rxhtmlTag, "<$1></$2>")
            },
            clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(!0),
                    inPage = jQuery.contains(elem.ownerDocument, elem);
                if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        fixInput(srcElements[i], destElements[i])
                    }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0, l = srcElements.length; i < l; i++) {
                            cloneCopyEvent(srcElements[i], destElements[i])
                        }
                    } else {
                        cloneCopyEvent(elem, clone)
                    }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"))
                }
                return clone
            },
            cleanData: function cleanData(elems) {
                var data, elem, type, special = jQuery.event.special,
                    i = 0;
                for (;
                    (elem = elems[i]) !== undefined; i++) {
                    if (acceptData(elem)) {
                        if (data = elem[dataPriv.expando]) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type)
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle)
                                    }
                                }
                            }
                            elem[dataPriv.expando] = undefined
                        }
                        if (elem[dataUser.expando]) {
                            elem[dataUser.expando] = undefined
                        }
                    }
                }
            }
        });
        jQuery.fn.extend({
            domManip: domManip,
            detach: function detach(selector) {
                return _remove(this, selector, !0)
            },
            remove: function remove(selector) {
                return _remove(this, selector)
            },
            text: function text(value) {
                return access(this, function(value) {
                    return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = value
                        }
                    })
                }, null, value, arguments.length)
            },
            append: function append() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem)
                    }
                })
            },
            prepend: function prepend() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild)
                    }
                })
            },
            before: function before() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this)
                    }
                })
            },
            after: function after() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this.nextSibling)
                    }
                })
            },
            empty: function empty() {
                var elem, i = 0;
                for (;
                    (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, !1));
                        elem.textContent = ""
                    }
                }
                return this
            },
            clone: function clone(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                })
            },
            html: function html(value) {
                return access(this, function(value) {
                    var elem = this[0] || {},
                        i = 0,
                        l = this.length;
                    if (value === undefined && elem.nodeType === 1) {
                        return elem.innerHTML
                    }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = jQuery.htmlPrefilter(value);
                        try {
                            for (; i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, !1));
                                    elem.innerHTML = value
                                }
                            }
                            elem = 0
                        } catch (e) {}
                    }
                    if (elem) {
                        this.empty().append(value)
                    }
                }, null, value, arguments.length)
            },
            replaceWith: function replaceWith() {
                var ignored = [];
                return domManip(this, arguments, function(elem) {
                    var parent = this.parentNode;
                    if (jQuery.inArray(this, ignored) < 0) {
                        jQuery.cleanData(getAll(this));
                        if (parent) {
                            parent.replaceChild(elem, this)
                        }
                    }
                }, ignored)
            }
        });
        jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                var elems, ret = [],
                    insert = jQuery(selector),
                    last = insert.length - 1,
                    i = 0;
                for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(!0);
                    jQuery(insert[i])[original](elems);
                    push.apply(ret, elems.get())
                }
                return this.pushStack(ret)
            }
        });
        var iframe, elemdisplay = {
            HTML: "block",
            BODY: "block"
        };

        function actualDisplay(name, doc) {
            var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                display = jQuery.css(elem[0], "display");
            elem.detach();
            return display
        }

        function defaultDisplay(nodeName) {
            var doc = document,
                display = elemdisplay[nodeName];
            if (!display) {
                display = actualDisplay(nodeName, doc);
                if (display === "none" || !display) {
                    iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                    doc = iframe[0].contentDocument;
                    doc.write();
                    doc.close();
                    display = actualDisplay(nodeName, doc);
                    iframe.detach()
                }
                elemdisplay[nodeName] = display
            }
            return display
        }
        var rmargin = /^margin/;
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function getStyles(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = window
            }
            return view.getComputedStyle(elem)
        };
        var swap = function swap(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name]
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name]
            }
            return ret
        };
        var documentElement = document.documentElement;
        (function() {
            var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
                div = document.createElement("div");
            if (!div.style) {
                return
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(!0).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            container.appendChild(div);

            function computeStyleTests() {
                div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                div.innerHTML = "";
                documentElement.appendChild(container);
                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = divStyle.top !== "1%";
                reliableMarginLeftVal = divStyle.marginLeft === "2px";
                boxSizingReliableVal = divStyle.width === "4px";
                div.style.marginRight = "50%";
                pixelMarginRightVal = divStyle.marginRight === "4px";
                documentElement.removeChild(container)
            }
            jQuery.extend(support, {
                pixelPosition: function pixelPosition() {
                    computeStyleTests();
                    return pixelPositionVal
                },
                boxSizingReliable: function boxSizingReliable() {
                    if (boxSizingReliableVal == null) {
                        computeStyleTests()
                    }
                    return boxSizingReliableVal
                },
                pixelMarginRight: function pixelMarginRight() {
                    if (boxSizingReliableVal == null) {
                        computeStyleTests()
                    }
                    return pixelMarginRightVal
                },
                reliableMarginLeft: function reliableMarginLeft() {
                    if (boxSizingReliableVal == null) {
                        computeStyleTests()
                    }
                    return reliableMarginLeftVal
                },
                reliableMarginRight: function reliableMarginRight() {
                    var ret, marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    documentElement.appendChild(container);
                    ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
                    documentElement.removeChild(container);
                    div.removeChild(marginDiv);
                    return ret
                }
            })
        })();

        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
            if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name)
            }
            if (computed) {
                if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth
                }
            }
            return ret !== undefined ? ret + "" : ret
        }

        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function get() {
                    if (conditionFn()) {
                        delete this.get;
                        return
                    }
                    return (this.get = hookFn).apply(this, arguments)
                }
            }
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            cssPrefixes = ["Webkit", "O", "Moz", "ms"],
            emptyStyle = document.createElement("div").style;

        function vendorPropName(name) {
            if (name in emptyStyle) {
                return name
            }
            var capName = name[0].toUpperCase() + name.slice(1),
                i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in emptyStyle) {
                    return name
                }
            }
        }

        function setPositiveNumber(elem, value, subtract) {
            var matches = rcssNum.exec(value);
            return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
        }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
                val = 0;
            for (; i < 4; i += 2) {
                if (extra === "margin") {
                    val += jQuery.css(elem, extra + cssExpand[i], !0, styles)
                }
                if (isBorderBox) {
                    if (extra === "content") {
                        val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)
                    }
                    if (extra !== "margin") {
                        val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)
                    }
                } else {
                    val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles);
                    if (extra !== "padding") {
                        val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)
                    }
                }
            }
            return val
        }

        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = !0,
                val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
                styles = getStyles(elem),
                isBorderBox = jQuery.css(elem, "boxSizing", !1, styles) === "border-box";
            if (val <= 0 || val == null) {
                val = curCSS(elem, name, styles);
                if (val < 0 || val == null) {
                    val = elem.style[name]
                }
                if (rnumnonpx.test(val)) {
                    return val
                }
                valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
                val = parseFloat(val) || 0
            }
            return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
        }

        function showHide(elements, show) {
            var display, elem, hidden, values = [],
                index = 0,
                length = elements.length;
            for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue
                }
                values[index] = dataPriv.get(elem, "olddisplay");
                display = elem.style.display;
                if (show) {
                    if (!values[index] && display === "none") {
                        elem.style.display = ""
                    }
                    if (elem.style.display === "" && isHidden(elem)) {
                        values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName))
                    }
                } else {
                    hidden = isHidden(elem);
                    if (display !== "none" || !hidden) {
                        dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))
                    }
                }
            }
            for (index = 0; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue
                }
                if (!show || elem.style.display === "none" || elem.style.display === "") {
                    elem.style.display = show ? values[index] || "" : "none"
                }
            }
            return elements
        }
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function get(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret
                        }
                    }
                }
            },
            cssNumber: {
                "animationIterationCount": !0,
                "columnCount": !0,
                "fillOpacity": !0,
                "flexGrow": !0,
                "flexShrink": !0,
                "fontWeight": !0,
                "lineHeight": !0,
                "opacity": !0,
                "order": !0,
                "orphans": !0,
                "widows": !0,
                "zIndex": !0,
                "zoom": !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function style(elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return
                }
                var ret, type, hooks, origName = jQuery.camelCase(name),
                    style = elem.style;
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                        value = adjustCSS(elem, name, ret);
                        type = "number"
                    }
                    if (value == null || value !== value) {
                        return
                    }
                    if (type === "number") {
                        value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")
                    }
                    if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit"
                    }
                    if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        style[name] = value
                    }
                } else {
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, !1, extra)) !== undefined) {
                        return ret
                    }
                    return style[name]
                }
            },
            css: function css(elem, name, extra, styles) {
                var val, num, hooks, origName = jQuery.camelCase(name);
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get" in hooks) {
                    val = hooks.get(elem, !0, extra)
                }
                if (val === undefined) {
                    val = curCSS(elem, name, styles)
                }
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name]
                }
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === !0 || isFinite(num) ? num || 0 : val
                }
                return val
            }
        });
        jQuery.each(["height", "width"], function(i, name) {
            jQuery.cssHooks[name] = {
                get: function get(elem, computed, extra) {
                    if (computed) {
                        return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, name, extra)
                        }) : getWidthOrHeight(elem, name, extra)
                    }
                },
                set: function set(elem, value, extra) {
                    var matches, styles = extra && getStyles(elem),
                        subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", !1, styles) === "border-box", styles);
                    if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                        elem.style[name] = value;
                        value = jQuery.css(elem, name)
                    }
                    return setPositiveNumber(elem, value, subtract)
                }
            }
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                    marginLeft: 0
                }, function() {
                    return elem.getBoundingClientRect().left
                })) + "px"
            }
        });
        jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
            if (computed) {
                return swap(elem, {
                    "display": "inline-block"
                }, curCSS, [elem, "marginRight"])
            }
        });
        jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function expand(value) {
                    var i = 0,
                        expanded = {},
                        parts = typeof value === "string" ? value.split(" ") : [value];
                    for (; i < 4; i++) {
                        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
                    }
                    return expanded
                }
            };
            if (!rmargin.test(prefix)) {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
            }
        });
        jQuery.fn.extend({
            css: function css(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {},
                        i = 0;
                    if (jQuery.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (; i < len; i++) {
                            map[name[i]] = jQuery.css(elem, name[i], !1, styles)
                        }
                        return map
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                }, name, value, arguments.length > 1)
            },
            show: function show() {
                return showHide(this, !0)
            },
            hide: function hide() {
                return showHide(this)
            },
            toggle: function toggle(state) {
                if (typeof state === "boolean") {
                    return state ? this.show() : this.hide()
                }
                return this.each(function() {
                    if (isHidden(this)) {
                        jQuery(this).show()
                    } else {
                        jQuery(this).hide()
                    }
                })
            }
        });

        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing)
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function init(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || jQuery.easing._default;
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
            },
            cur: function cur() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
            },
            run: function run(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
                } else {
                    this.pos = eased = percent
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (hooks && hooks.set) {
                    hooks.set(this)
                } else {
                    Tween.propHooks._default.set(this)
                }
                return this
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function get(tween) {
                    var result;
                    if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                        return tween.elem[tween.prop]
                    }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result
                },
                set: function set(tween) {
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween)
                    } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                    } else {
                        tween.elem[tween.prop] = tween.now
                    }
                }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function set(tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now
                }
            }
        };
        jQuery.easing = {
            linear: function linear(p) {
                return p
            },
            swing: function swing(p) {
                return 0.5 - Math.cos(p * Math.PI) / 2
            },
            _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
            rrun = /queueHooks$/;

        function createFxNow() {
            window.setTimeout(function() {
                fxNow = undefined
            });
            return fxNow = jQuery.now()
        }

        function genFx(type, includeWidth) {
            var which, i = 0,
                attrs = {
                    height: type
                };
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type
            }
            return attrs
        }

        function createTween(value, prop, animation) {
            var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
                index = 0,
                length = collection.length;
            for (; index < length; index++) {
                if (tween = collection[index].call(animation, prop, value)) {
                    return tween
                }
            }
        }

        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHidden(elem),
                dataShow = dataPriv.get(elem, "fxshow");
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() {
                        if (!hooks.unqueued) {
                            oldfire()
                        }
                    }
                }
                hooks.unqueued++;
                anim.always(function() {
                    anim.always(function() {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire()
                        }
                    })
                })
            }
            if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                display = jQuery.css(elem, "display");
                checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
                if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                    style.display = "inline-block"
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2]
                })
            }
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.exec(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
                        if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                            hidden = !0
                        } else {
                            continue
                        }
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                } else {
                    display = undefined
                }
            }
            if (!jQuery.isEmptyObject(orig)) {
                if (dataShow) {
                    if ("hidden" in dataShow) {
                        hidden = dataShow.hidden
                    }
                } else {
                    dataShow = dataPriv.access(elem, "fxshow", {})
                }
                if (toggle) {
                    dataShow.hidden = !hidden
                }
                if (hidden) {
                    jQuery(elem).show()
                } else {
                    anim.done(function() {
                        jQuery(elem).hide()
                    })
                }
                anim.done(function() {
                    var prop;
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop])
                    }
                });
                for (prop in orig) {
                    tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = tween.start;
                        if (hidden) {
                            tween.end = tween.start;
                            tween.start = prop === "width" || prop === "height" ? 1 : 0
                        }
                    }
                }
            } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
                style.display = display
            }
        }

        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
                name = jQuery.camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (jQuery.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0]
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index]
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing
                        }
                    }
                } else {
                    specialEasing[name] = easing
                }
            }
        }

        function Animation(elem, properties, options) {
            var result, stopped, index = 0,
                length = Animation.prefilters.length,
                deferred = jQuery.Deferred().always(function() {
                    delete tick.elem
                }),
                tick = function tick() {
                    if (stopped) {
                        return !1
                    }
                    var currentTime = fxNow || createFxNow(),
                        remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                        temp = remaining / animation.duration || 0,
                        percent = 1 - temp,
                        index = 0,
                        length = animation.tweens.length;
                    for (; index < length; index++) {
                        animation.tweens[index].run(percent)
                    }
                    deferred.notifyWith(elem, [animation, percent, remaining]);
                    if (percent < 1 && length) {
                        return remaining
                    } else {
                        deferred.resolveWith(elem, [animation]);
                        return !1
                    }
                },
                animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(!0, {
                        specialEasing: {},
                        easing: jQuery.easing._default
                    }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function createTween(prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        animation.tweens.push(tween);
                        return tween
                    },
                    stop: function stop(gotoEnd) {
                        var index = 0,
                            length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) {
                            return this
                        }
                        stopped = !0;
                        for (; index < length; index++) {
                            animation.tweens[index].run(1)
                        }
                        if (gotoEnd) {
                            deferred.notifyWith(elem, [animation, 1, 0]);
                            deferred.resolveWith(elem, [animation, gotoEnd])
                        } else {
                            deferred.rejectWith(elem, [animation, gotoEnd])
                        }
                        return this
                    }
                }),
                props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
                result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    if (jQuery.isFunction(result.stop)) {
                        jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)
                    }
                    return result
                }
            }
            jQuery.map(props, createTween, animation);
            if (jQuery.isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation)
            }
            jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            }));
            return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween
                }]
            },
            tweener: function tweener(props, callback) {
                if (jQuery.isFunction(props)) {
                    callback = props;
                    props = ["*"]
                } else {
                    props = props.match(rnotwhite)
                }
                var prop, index = 0,
                    length = props.length;
                for (; index < length; index++) {
                    prop = props[index];
                    Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                    Animation.tweeners[prop].unshift(callback)
                }
            },
            prefilters: [defaultPrefilter],
            prefilter: function prefilter(callback, prepend) {
                if (prepend) {
                    Animation.prefilters.unshift(callback)
                } else {
                    Animation.prefilters.push(callback)
                }
            }
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
            if (opt.queue == null || opt.queue === !0) {
                opt.queue = "fx"
            }
            opt.old = opt.complete;
            opt.complete = function() {
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this)
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue)
                }
            };
            return opt
        };
        jQuery.fn.extend({
            fadeTo: function fadeTo(speed, to, easing, callback) {
                return this.filter(isHidden).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback)
            },
            animate: function animate(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                    optall = jQuery.speed(speed, easing, callback),
                    doAnimation = function doAnimation() {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        if (empty || dataPriv.get(this, "finish")) {
                            anim.stop(!0)
                        }
                    };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
            },
            stop: function stop(type, clearQueue, gotoEnd) {
                var stopQueue = function stopQueue(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd)
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined
                }
                if (clearQueue && type !== !1) {
                    this.queue(type || "fx", [])
                }
                return this.each(function() {
                    var dequeue = !0,
                        index = type != null && type + "queueHooks",
                        timers = jQuery.timers,
                        data = dataPriv.get(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index])
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index])
                            }
                        }
                    }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = !1;
                            timers.splice(index, 1)
                        }
                    }
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type)
                    }
                })
            },
            finish: function finish(type) {
                if (type !== !1) {
                    type = type || "fx"
                }
                return this.each(function() {
                    var index, data = dataPriv.get(this),
                        queue = data[type + "queue"],
                        hooks = data[type + "queueHooks"],
                        timers = jQuery.timers,
                        length = queue ? queue.length : 0;
                    data.finish = !0;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) {
                        hooks.stop.call(this, !0)
                    }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(!0);
                            timers.splice(index, 1)
                        }
                    }
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this)
                        }
                    }
                    delete data.finish
                })
            }
        });
        jQuery.each(["toggle", "show", "hide"], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
            }
        });
        jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback)
            }
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
            var timer, i = 0,
                timers = jQuery.timers;
            fxNow = jQuery.now();
            for (; i < timers.length; i++) {
                timer = timers[i];
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1)
                }
            }
            if (!timers.length) {
                jQuery.fx.stop()
            }
            fxNow = undefined
        };
        jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer);
            if (timer()) {
                jQuery.fx.start()
            } else {
                jQuery.timers.pop()
            }
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
            if (!timerId) {
                timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval)
            }
        };
        jQuery.fx.stop = function() {
            window.clearInterval(timerId);
            timerId = null
        };
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function() {
                    window.clearTimeout(timeout)
                }
            })
        };
        (function() {
            var input = document.createElement("input"),
                select = document.createElement("select"),
                opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox";
            support.checkOn = input.value !== "";
            support.optSelected = opt.selected;
            select.disabled = !0;
            support.optDisabled = !opt.disabled;
            input = document.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t"
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function attr(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1)
            },
            removeAttr: function removeAttr(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name)
                })
            }
        });
        jQuery.extend({
            attr: function attr(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return
                }
                if (typeof elem.getAttribute === "undefined") {
                    return jQuery.prop(elem, name, value)
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = name.toLowerCase();
                    hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined)
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name);
                        return
                    }
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret
                    }
                    elem.setAttribute(name, value + "");
                    return value
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret
                }
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret
            },
            attrHooks: {
                type: {
                    set: function set(elem, value) {
                        if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val
                            }
                            return value
                        }
                    }
                }
            },
            removeAttr: function removeAttr(elem, value) {
                var name, propName, i = 0,
                    attrNames = value && value.match(rnotwhite);
                if (attrNames && elem.nodeType === 1) {
                    while (name = attrNames[i++]) {
                        propName = jQuery.propFix[name] || name;
                        if (jQuery.expr.match.bool.test(name)) {
                            elem[propName] = !1
                        }
                        elem.removeAttribute(name)
                    }
                }
            }
        });
        boolHook = {
            set: function set(elem, value, name) {
                if (value === !1) {
                    jQuery.removeAttr(elem, name)
                } else {
                    elem.setAttribute(name, name)
                }
                return name
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle;
                if (!isXML) {
                    handle = attrHandle[name];
                    attrHandle[name] = ret;
                    ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                    attrHandle[name] = handle
                }
                return ret
            }
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i,
            rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
            prop: function prop(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1)
            },
            removeProp: function removeProp(name) {
                return this.each(function() {
                    delete this[jQuery.propFix[name] || name]
                })
            }
        });
        jQuery.extend({
            prop: function prop(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name]
                }
                if (value !== undefined) {
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret
                    }
                    return elem[name] = value
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret
                }
                return elem[name]
            },
            propHooks: {
                tabIndex: {
                    get: function get(elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        if (!support.optSelected) {
            jQuery.propHooks.selected = {
                get: function get(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) {
                        parent.parentNode.selectedIndex
                    }
                    return null
                },
                set: function set(elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) {
                            parent.parentNode.selectedIndex
                        }
                    }
                }
            }
        }
        jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            jQuery.propFix[this.toLowerCase()] = this
        });
        var rclass = /[\t\r\n\f]/g;

        function getClass(elem) {
            return elem.getAttribute && elem.getAttribute("class") || ""
        }
        jQuery.fn.extend({
            addClass: function addClass(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, getClass(this)))
                    })
                }
                if (typeof value === "string" && value) {
                    classes = value.match(rnotwhite) || [];
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " "
                                }
                            }
                            finalValue = jQuery.trim(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function removeClass(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, getClass(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof value === "string" && value) {
                    classes = value.match(rnotwhite) || [];
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                while (cur.indexOf(" " + clazz + " ") > -1) {
                                    cur = cur.replace(" " + clazz + " ", " ")
                                }
                            }
                            finalValue = jQuery.trim(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function toggleClass(value, stateVal) {
                var type = typeof value;
                if (typeof stateVal === "boolean" && type === "string") {
                    return stateVal ? this.addClass(value) : this.removeClass(value)
                }
                if (jQuery.isFunction(value)) {
                    return this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
                    })
                }
                return this.each(function() {
                    var className, i, self, classNames;
                    if (type === "string") {
                        i = 0;
                        self = jQuery(this);
                        classNames = value.match(rnotwhite) || [];
                        while (className = classNames[i++]) {
                            if (self.hasClass(className)) {
                                self.removeClass(className)
                            } else {
                                self.addClass(className)
                            }
                        }
                    } else if (value === undefined || type === "boolean") {
                        className = getClass(this);
                        if (className) {
                            dataPriv.set(this, "__className__", className)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", className || value === !1 ? "" : dataPriv.get(this, "__className__") || "")
                        }
                    }
                })
            },
            hasClass: function hasClass(selector) {
                var className, elem, i = 0;
                className = " " + selector + " ";
                while (elem = this[i++]) {
                    if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                        return !0
                    }
                }
                return !1
            }
        });
        var rreturn = /\r/g,
            rspaces = /[\x20\t\r\n\f]+/g;
        jQuery.fn.extend({
            val: function val(value) {
                var hooks, ret, isFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret
                        }
                        ret = elem.value;
                        return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret
                    }
                    return
                }
                isFunction = jQuery.isFunction(value);
                return this.each(function(i) {
                    var val;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (isFunction) {
                        val = value.call(this, i, jQuery(this).val())
                    } else {
                        val = value
                    }
                    if (val == null) {
                        val = ""
                    } else if (typeof val === "number") {
                        val += ""
                    } else if (jQuery.isArray(val)) {
                        val = jQuery.map(val, function(value) {
                            return value == null ? "" : value + ""
                        })
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val
                    }
                })
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function get(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ")
                    }
                },
                select: {
                    get: function get(elem) {
                        var value, option, options = elem.options,
                            index = elem.selectedIndex,
                            one = elem.type === "select-one" || index < 0,
                            values = one ? null : [],
                            max = one ? index + 1 : options.length,
                            i = index < 0 ? max : one ? index : 0;
                        for (; i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) {
                                    return value
                                }
                                values.push(value)
                            }
                        }
                        return values
                    },
                    set: function set(elem, value) {
                        var optionSet, option, options = elem.options,
                            values = jQuery.makeArray(value),
                            i = options.length;
                        while (i--) {
                            option = options[i];
                            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                                optionSet = !0
                            }
                        }
                        if (!optionSet) {
                            elem.selectedIndex = -1
                        }
                        return values
                    }
                }
            }
        });
        jQuery.each(["radio", "checkbox"], function() {
            jQuery.valHooks[this] = {
                set: function set(elem, value) {
                    if (jQuery.isArray(value)) {
                        return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1
                    }
                }
            };
            if (!support.checkOn) {
                jQuery.valHooks[this].get = function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value
                }
            }
        });
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
        jQuery.extend(jQuery.event, {
            trigger: function trigger(event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                    type = hasOwn.call(event, "type") ? event.type : event,
                    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return
                }
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return
                }
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort()
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) {
                    event.target = elem
                }
                data = data == null ? [event] : jQuery.makeArray(data, [event]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === !1) {
                    return
                }
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode
                    }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur
                    }
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                    }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data)
                    }
                    handle = ontype && cur[ontype];
                    if (handle && handle.apply && acceptData(cur)) {
                        event.result = handle.apply(cur, data);
                        if (event.result === !1) {
                            event.preventDefault()
                        }
                    }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === !1) && acceptData(elem)) {
                        if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null
                            }
                            jQuery.event.triggered = type;
                            elem[type]();
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp
                            }
                        }
                    }
                }
                return event.result
            },
            simulate: function simulate(type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                    type: type,
                    isSimulated: !0
                });
                jQuery.event.trigger(e, null, elem)
            }
        });
        jQuery.fn.extend({
            trigger: function trigger(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this)
                })
            },
            triggerHandler: function triggerHandler(type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, !0)
                }
            }
        });
        jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
            }
        });
        jQuery.fn.extend({
            hover: function hover(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
            }
        });
        support.focusin = "onfocusin" in window;
        if (!support.focusin) {
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                var handler = function handler(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
                };
                jQuery.event.special[fix] = {
                    setup: function setup() {
                        var doc = this.ownerDocument || this,
                            attaches = dataPriv.access(doc, fix);
                        if (!attaches) {
                            doc.addEventListener(orig, handler, !0)
                        }
                        dataPriv.access(doc, fix, (attaches || 0) + 1)
                    },
                    teardown: function teardown() {
                        var doc = this.ownerDocument || this,
                            attaches = dataPriv.access(doc, fix) - 1;
                        if (!attaches) {
                            doc.removeEventListener(orig, handler, !0);
                            dataPriv.remove(doc, fix)
                        } else {
                            dataPriv.access(doc, fix, attaches)
                        }
                    }
                }
            })
        }
        var location = window.location;
        var nonce = jQuery.now();
        var rquery = /\?/;
        jQuery.parseJSON = function(data) {
            return JSON.parse(data + "")
        };
        jQuery.parseXML = function(data) {
            var xml;
            if (!data || typeof data !== "string") {
                return null
            }
            try {
                xml = new window.DOMParser().parseFromString(data, "text/xml")
            } catch (e) {
                xml = undefined
            }
            if (!xml || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data)
            }
            return xml
        };
        var rhash = /#.*$/,
            rts = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            prefilters = {},
            transports = {},
            allTypes = "*/".concat("*"),
            originAnchor = document.createElement("a");
        originAnchor.href = location.href;

        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*"
                }
                var dataType, i = 0,
                    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(func)) {
                    while (dataType = dataTypes[i++]) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func)
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func)
                        }
                    }
                }
            }
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {},
                seekingTransport = structure === transports;

            function inspect(dataType) {
                var selected;
                inspected[dataType] = !0;
                jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return !1
                    } else if (seekingTransport) {
                        return !(selected = dataTypeOrTransport)
                    }
                });
                return selected
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
        }

        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
                }
            }
            if (deep) {
                jQuery.extend(!0, target, deep)
            }
            return target
        }

        function ajaxHandleResponses(s, jqXHR, responses) {
            var ct, type, finalDataType, firstDataType, contents = s.contents,
                dataTypes = s.dataTypes;
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
                }
            }
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break
                    }
                }
            }
            if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0]
            } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break
                    }
                    if (!firstDataType) {
                        firstDataType = type
                    }
                }
                finalDataType = finalDataType || firstDataType
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType)
                }
                return responses[finalDataType]
            }
        }

        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {},
                dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv]
                }
            }
            current = dataTypes.shift();
            while (current) {
                if (s.responseFields[current]) {
                    jqXHR[s.responseFields[current]] = response
                }
                if (!prev && isSuccess && s.dataFilter) {
                    response = s.dataFilter(response, s.dataType)
                }
                prev = current;
                current = dataTypes.shift();
                if (current) {
                    if (current === "*") {
                        current = prev
                    } else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === !0) {
                                            conv = converters[conv2]
                                        } else if (converters[conv2] !== !0) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (conv !== !0) {
                            if (conv && s.throws) {
                                response = conv(response)
                            } else {
                                try {
                                    response = conv(response)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: response
            }
        }
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": jQuery.parseJSON,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function ajaxSetup(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function ajax(url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined
                }
                options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, fireGlobals, i, s = jQuery.ajaxSetup({}, options),
                    callbackContext = s.context || s,
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                    deferred = jQuery.Deferred(),
                    completeDeferred = jQuery.Callbacks("once memory"),
                    _statusCode = s.statusCode || {},
                    requestHeaders = {},
                    requestHeadersNames = {},
                    state = 0,
                    strAbort = "canceled",
                    jqXHR = {
                        readyState: 0,
                        getResponseHeader: function getResponseHeader(key) {
                            var match;
                            if (state === 2) {
                                if (!responseHeaders) {
                                    responseHeaders = {};
                                    while (match = rheaders.exec(responseHeadersString)) {
                                        responseHeaders[match[1].toLowerCase()] = match[2]
                                    }
                                }
                                match = responseHeaders[key.toLowerCase()]
                            }
                            return match == null ? null : match
                        },
                        getAllResponseHeaders: function getAllResponseHeaders() {
                            return state === 2 ? responseHeadersString : null
                        },
                        setRequestHeader: function setRequestHeader(name, value) {
                            var lname = name.toLowerCase();
                            if (!state) {
                                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                                requestHeaders[name] = value
                            }
                            return this
                        },
                        overrideMimeType: function overrideMimeType(type) {
                            if (!state) {
                                s.mimeType = type
                            }
                            return this
                        },
                        statusCode: function statusCode(map) {
                            var code;
                            if (map) {
                                if (state < 2) {
                                    for (code in map) {
                                        _statusCode[code] = [_statusCode[code], map[code]]
                                    }
                                } else {
                                    jqXHR.always(map[jqXHR.status])
                                }
                            }
                            return this
                        },
                        abort: function abort(statusText) {
                            var finalText = statusText || strAbort;
                            if (transport) {
                                transport.abort(finalText)
                            }
                            done(0, finalText);
                            return this
                        }
                    };
                deferred.promise(jqXHR).complete = completeDeferred.add;
                jqXHR.success = jqXHR.done;
                jqXHR.error = jqXHR.fail;
                s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
                if (s.crossDomain == null) {
                    urlAnchor = document.createElement("a");
                    try {
                        urlAnchor.href = s.url;
                        urlAnchor.href = urlAnchor.href;
                        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
                    } catch (e) {
                        s.crossDomain = !0
                    }
                }
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional)
                }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (state === 2) {
                    return jqXHR
                }
                fireGlobals = jQuery.event && s.global;
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart")
                }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url;
                if (!s.hasContent) {
                    if (s.data) {
                        cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                        delete s.data
                    }
                    if (s.cache === !1) {
                        s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++
                    }
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
                    }
                }
                if (s.data && s.hasContent && s.contentType !== !1 || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType)
                }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i])
                }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || state === 2)) {
                    return jqXHR.abort()
                }
                strAbort = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) {
                    jqXHR[i](s[i])
                }
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) {
                    done(-1, "No Transport")
                } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [jqXHR, s])
                    }
                    if (state === 2) {
                        return jqXHR
                    }
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = window.setTimeout(function() {
                            jqXHR.abort("timeout")
                        }, s.timeout)
                    }
                    try {
                        state = 1;
                        transport.send(requestHeaders, done)
                    } catch (e) {
                        if (state < 2) {
                            done(-1, e)
                        } else {
                            throw e
                        }
                    }
                }

                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (state === 2) {
                        return
                    }
                    state = 2;
                    if (timeoutTimer) {
                        window.clearTimeout(timeoutTimer)
                    }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    isSuccess = status >= 200 && status < 300 || status === 304;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses)
                    }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified
                            }
                        }
                        if (status === 204 || s.type === "HEAD") {
                            statusText = "nocontent"
                        } else if (status === 304) {
                            statusText = "notmodified"
                        } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error
                        }
                    } else {
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0
                            }
                        }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
                    } else {
                        deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
                    }
                    jqXHR.statusCode(_statusCode);
                    _statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
                    }
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                        if (!--jQuery.active) {
                            jQuery.event.trigger("ajaxStop")
                        }
                    }
                }
                return jqXHR
            },
            getJSON: function getJSON(url, data, callback) {
                return jQuery.get(url, data, callback, "json")
            },
            getScript: function getScript(url, callback) {
                return jQuery.get(url, undefined, callback, "script")
            }
        });
        jQuery.each(["get", "post"], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                if (jQuery.isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined
                }
                return jQuery.ajax(jQuery.extend({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                }, jQuery.isPlainObject(url) && url))
            }
        });
        jQuery._evalUrl = function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        };
        jQuery.fn.extend({
            wrapAll: function wrapAll(html) {
                var wrap;
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapAll(html.call(this, i))
                    })
                }
                if (this[0]) {
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0])
                    }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstElementChild) {
                            elem = elem.firstElementChild
                        }
                        return elem
                    }).append(this)
                }
                return this
            },
            wrapInner: function wrapInner(html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i))
                    })
                }
                return this.each(function() {
                    var self = jQuery(this),
                        contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html)
                    } else {
                        self.append(html)
                    }
                })
            },
            wrap: function wrap(html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                })
            },
            unwrap: function unwrap() {
                return this.parent().each(function() {
                    if (!jQuery.nodeName(this, "body")) {
                        jQuery(this).replaceWith(this.childNodes)
                    }
                }).end()
            }
        });
        jQuery.expr.filters.hidden = function(elem) {
            return !jQuery.expr.filters.visible(elem)
        };
        jQuery.expr.filters.visible = function(elem) {
            return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0
        };
        var r20 = /%20/g,
            rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;

        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) {
                jQuery.each(obj, function(i, v) {
                    if (traditional || rbracket.test(prefix)) {
                        add(prefix, v)
                    } else {
                        buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add)
                    }
                })
            } else if (!traditional && jQuery.type(obj) === "object") {
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
                }
            } else {
                add(prefix, obj)
            }
        }
        jQuery.param = function(a, traditional) {
            var prefix, s = [],
                add = function add(key, value) {
                    value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
                };
            if (traditional === undefined) {
                traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
            }
            if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
                jQuery.each(a, function() {
                    add(this.name, this.value)
                })
            } else {
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add)
                }
            }
            return s.join("&").replace(r20, "+")
        };
        jQuery.fn.extend({
            serialize: function serialize() {
                return jQuery.param(this.serializeArray())
            },
            serializeArray: function serializeArray() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        }
                    }) : {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }).get()
            }
        });
        jQuery.ajaxSettings.xhr = function() {
            try {
                return new window.XMLHttpRequest()
            } catch (e) {}
        };
        var xhrSuccessStatus = {
                0: 200,
                1223: 204
            },
            xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) {
                return {
                    send: function send(headers, complete) {
                        var i, xhr = options.xhr();
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i]
                            }
                        }
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType)
                        }
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (i in headers) {
                            xhr.setRequestHeader(i, headers[i])
                        }
                        callback = function(type) {
                            return function() {
                                if (callback) {
                                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                    if (type === "abort") {

                                        xhr.abort()
                                    } else if (type === "error") {
                                        if (typeof xhr.status !== "number") {
                                            complete(0, "error")
                                        } else {
                                            complete(xhr.status, xhr.statusText)
                                        }
                                    } else {
                                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders())
                                    }
                                }
                            }
                        };
                        xhr.onload = callback();
                        errorCallback = xhr.onerror = callback("error");
                        if (xhr.onabort !== undefined) {
                            xhr.onabort = errorCallback
                        } else {
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) {
                                    window.setTimeout(function() {
                                        if (callback) {
                                            errorCallback()
                                        }
                                    })
                                }
                            }
                        }
                        callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null)
                        } catch (e) {
                            if (callback) {
                                throw e
                            }
                        }
                    },
                    abort: function abort() {
                        if (callback) {
                            callback()
                        }
                    }
                }
            }
        });
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function textScript(text) {
                    jQuery.globalEval(text);
                    return text
                }
            }
        });
        jQuery.ajaxPrefilter("script", function(s) {
            if (s.cache === undefined) {
                s.cache = !1
            }
            if (s.crossDomain) {
                s.type = "GET"
            }
        });
        jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, callback;
                return {
                    send: function send(_, complete) {
                        script = jQuery("<script>").prop({
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function(evt) {
                            script.remove();
                            callback = null;
                            if (evt) {
                                complete(evt.type === "error" ? 404 : 200, evt.type)
                            }
                        });
                        document.head.appendChild(script[0])
                    },
                    abort: function abort() {
                        if (callback) {
                            callback()
                        }
                    }
                }
            }
        });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function jsonpCallback() {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                this[callback] = !0;
                return callback
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
                } else if (s.jsonp !== !1) {
                    s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
                }
                s.converters["script json"] = function() {
                    if (!responseContainer) {
                        jQuery.error(callbackName + " was not called")
                    }
                    return responseContainer[0]
                };
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function() {
                    responseContainer = arguments
                };
                jqXHR.always(function() {
                    if (overwritten === undefined) {
                        jQuery(window).removeProp(callbackName)
                    } else {
                        window[callbackName] = overwritten
                    }
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName)
                    }
                    if (responseContainer && jQuery.isFunction(overwritten)) {
                        overwritten(responseContainer[0])
                    }
                    responseContainer = overwritten = undefined
                });
                return "script"
            }
        });
        jQuery.parseHTML = function(data, context, keepScripts) {
            if (!data || typeof data !== "string") {
                return null
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = !1
            }
            context = context || document;
            var parsed = rsingleTag.exec(data),
                scripts = !keepScripts && [];
            if (parsed) {
                return [context.createElement(parsed[1])]
            }
            parsed = buildFragment([data], context, scripts);
            if (scripts && scripts.length) {
                jQuery(scripts).remove()
            }
            return jQuery.merge([], parsed.childNodes)
        };
        var _load = jQuery.fn.load;
        jQuery.fn.load = function(url, params, callback) {
            if (typeof url !== "string" && _load) {
                return _load.apply(this, arguments)
            }
            var selector, type, response, self = this,
                off = url.indexOf(" ");
            if (off > -1) {
                selector = jQuery.trim(url.slice(off));
                url = url.slice(0, off)
            }
            if (jQuery.isFunction(params)) {
                callback = params;
                params = undefined
            } else if (params && typeof params === "object") {
                type = "POST"
            }
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
                }).always(callback && function(jqXHR, status) {
                    self.each(function() {
                        callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
                    })
                })
            }
            return this
        };
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn)
            }
        });
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem
            }).length
        };

        function getWindow(elem) {
            return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView
        }
        jQuery.offset = {
            setOffset: function setOffset(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                    curElem = jQuery(elem),
                    props = {};
                if (position === "static") {
                    elem.style.position = "relative"
                }
                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0
                }
                if (jQuery.isFunction(options)) {
                    options = options.call(elem, i, jQuery.extend({}, curOffset))
                }
                if (options.top != null) {
                    props.top = options.top - curOffset.top + curTop
                }
                if (options.left != null) {
                    props.left = options.left - curOffset.left + curLeft
                }
                if ("using" in options) {
                    options.using.call(elem, props)
                } else {
                    curElem.css(props)
                }
            }
        };
        jQuery.fn.extend({
            offset: function offset(options) {
                if (arguments.length) {
                    return options === undefined ? this : this.each(function(i) {
                        jQuery.offset.setOffset(this, options, i)
                    })
                }
                var docElem, win, elem = this[0],
                    box = {
                        top: 0,
                        left: 0
                    },
                    doc = elem && elem.ownerDocument;
                if (!doc) {
                    return
                }
                docElem = doc.documentElement;
                if (!jQuery.contains(docElem, elem)) {
                    return box
                }
                box = elem.getBoundingClientRect();
                win = getWindow(doc);
                return {
                    top: box.top + win.pageYOffset - docElem.clientTop,
                    left: box.left + win.pageXOffset - docElem.clientLeft
                }
            },
            position: function position() {
                if (!this[0]) {
                    return
                }
                var offsetParent, offset, elem = this[0],
                    parentOffset = {
                        top: 0,
                        left: 0
                    };
                if (jQuery.css(elem, "position") === "fixed") {
                    offset = elem.getBoundingClientRect()
                } else {
                    offsetParent = this.offsetParent();
                    offset = this.offset();
                    if (!jQuery.nodeName(offsetParent[0], "html")) {
                        parentOffset = offsetParent.offset()
                    }
                    parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0);
                    parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                }
            },
            offsetParent: function offsetParent() {
                return this.map(function() {
                    var offsetParent = this.offsetParent;
                    while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                        offsetParent = offsetParent.offsetParent
                    }
                    return offsetParent || documentElement
                })
            }
        });
        jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win = getWindow(elem);
                    if (val === undefined) {
                        return win ? win[prop] : elem[method]
                    }
                    if (win) {
                        win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset)
                    } else {
                        elem[method] = val
                    }
                }, method, val, arguments.length)
            }
        });
        jQuery.each(["top", "left"], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);
                    return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
                }
            })
        });
        jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                        extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        if (jQuery.isWindow(elem)) {
                            return elem.document.documentElement["client" + name]
                        }
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
                        }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                    }, type, chainable ? margin : undefined, chainable, null)
                }
            })
        });
        jQuery.fn.extend({
            bind: function bind(types, data, fn) {
                return this.on(types, null, data, fn)
            },
            unbind: function unbind(types, fn) {
                return this.off(types, null, fn)
            },
            delegate: function delegate(selector, types, data, fn) {
                return this.on(types, selector, data, fn)
            },
            undelegate: function undelegate(selector, types, fn) {
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
            },
            size: function size() {
                return this.length
            }
        });
        jQuery.fn.andSelf = jQuery.fn.addBack;
        if (!0) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return jQuery
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
        var _jQuery = window.jQuery,
            _$ = window.$;
        jQuery.noConflict = function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery
            }
            return jQuery
        };
        if (!noGlobal) {
            window.jQuery = window.$ = jQuery
        }
        return jQuery
    })
}), (function(module, exports, __webpack_require__) {
    'use strict';

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    (0, _jquery2['default'])(document).ready(function() {
        _prestashop2['default'].on('updateCart', function(event) {
            _prestashop2['default'].cart = event.reason.cart;
            var getCartViewUrl = (0, _jquery2['default'])('.js-cart').data('refresh-url');
            var requestData = {};
            if (event && event.reason) {
                requestData = {
                    id_product_attribute: event.reason.idProductAttribute,
                    id_product: event.reason.idProduct
                }
            }
            _jquery2['default'].post(getCartViewUrl, requestData).then(function(resp) {
                (0, _jquery2['default'])('.cart-detailed-totals').replaceWith(resp.cart_detailed_totals);
                (0, _jquery2['default'])('.cart-summary-items-subtotal').replaceWith(resp.cart_summary_items_subtotal);
                (0, _jquery2['default'])('.cart-summary-totals').replaceWith(resp.cart_summary_totals);
                (0, _jquery2['default'])('.cart-detailed-actions').replaceWith(resp.cart_detailed_actions);
                (0, _jquery2['default'])('.cart-voucher').replaceWith(resp.cart_voucher);
                (0, _jquery2['default'])('.cart-overview').replaceWith(resp.cart_detailed);
                (0, _jquery2['default'])('#product_customization_id').val(0);
                (0, _jquery2['default'])('.js-cart-line-product-quantity').each(function(index, input) {
                    var $input = (0, _jquery2['default'])(input);
                    $input.attr('value', $input.val())
                });
                _prestashop2['default'].emit('updatedCart', {
                    eventType: 'updateCart',
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateCart',
                    resp: resp
                })
            })
        });
        var $body = (0, _jquery2['default'])('body');
        $body.on('click', '[data-button-action="add-to-cart"]', function(event) {
            event.preventDefault();
            if ((0, _jquery2['default'])('#quantity_wanted').val() > (0, _jquery2['default'])('[data-stock]').data('stock') && (0, _jquery2['default'])('[data-allow-oosp]').data('allow-oosp').length === 0) {
                (0, _jquery2['default'])('[data-button-action="add-to-cart"]').attr('disabled', 'disabled')
            } else {
                var _ret = (function() {
                    var $form = (0, _jquery2['default'])(event.target).closest('form');
                    var query = $form.serialize() + '&add=1&action=update';
                    var actionURL = $form.attr('action');
                    var isQuantityInputValid = function isQuantityInputValid($input) {
                        var validInput = !0;
                        $input.each(function(index, input) {
                            var $input = (0, _jquery2['default'])(input);
                            var minimalValue = parseInt($input.attr('min'), 10);
                            if (minimalValue && $input.val() < minimalValue) {
                                onInvalidQuantity($input);
                                validInput = !1
                            }
                        });
                        return validInput
                    };
                    var onInvalidQuantity = function onInvalidQuantity($input) {
                        $input.parents('.product-add-to-cart').first().find('.product-minimal-quantity').addClass('error');
                        $input.parent().find('label').addClass('error')
                    };
                    var $quantityInput = $form.find('input[min]');
                    if (!isQuantityInputValid($quantityInput)) {
                        onInvalidQuantity($quantityInput);
                        return {
                            v: undefined
                        }
                    }
                    _jquery2['default'].post(actionURL, query, null, 'json').then(function(resp) {
                        _prestashop2['default'].emit('updateCart', {
                            reason: {
                                idProduct: resp.id_product,
                                idProductAttribute: resp.id_product_attribute,
                                linkAction: 'add-to-cart',
                                cart: resp.cart
                            },
                            resp: resp
                        })
                    }).fail(function(resp) {
                        _prestashop2['default'].emit('handleError', {
                            eventType: 'addProductToCart',
                            resp: resp
                        })
                    })
                })();
                if (typeof _ret === 'object') return _ret.v
            }
        });
        $body.on('submit', '[data-link-action="add-voucher"]', function(event) {
            event.preventDefault();
            var $addVoucherForm = (0, _jquery2['default'])(event.currentTarget);
            var getCartViewUrl = $addVoucherForm.attr('action');
            if (0 === $addVoucherForm.find('[name=action]').length) {
                $addVoucherForm.append((0, _jquery2['default'])('<input>', {
                    'type': 'hidden',
                    'name': 'ajax',
                    "value": 1
                }))
            }
            if (0 === $addVoucherForm.find('[name=action]').length) {
                $addVoucherForm.append((0, _jquery2['default'])('<input>', {
                    'type': 'hidden',
                    'name': 'action',
                    "value": "update"
                }))
            }
            _jquery2['default'].post(getCartViewUrl, $addVoucherForm.serialize(), null, 'json').then(function(resp) {
                if (resp.hasError) {
                    (0, _jquery2['default'])('.js-error').show().find('.js-error-text').text(resp.errors[0]);
                    return
                }
                _prestashop2['default'].emit('updateCart', {
                    reason: event.target.dataset,
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateCart',
                    resp: resp
                })
            })
        })
    }); /***/
}), (function(module, exports) {
    module.exports = prestashop; /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _checkoutAddress = __webpack_require__(6);
    var _checkoutAddress2 = _interopRequireDefault(_checkoutAddress);
    var _checkoutDelivery = __webpack_require__(7);
    var _checkoutDelivery2 = _interopRequireDefault(_checkoutDelivery);
    var _checkoutPayment = __webpack_require__(8);
    var _checkoutPayment2 = _interopRequireDefault(_checkoutPayment);

    function setUpCheckout() {
        (0, _checkoutAddress2['default'])();
        (0, _checkoutDelivery2['default'])();
        (0, _checkoutPayment2['default'])();
        handleCheckoutStepChange()
    }

    function handleCheckoutStepChange() {
        (0, _jquery2['default'])('.checkout-step').off('click');
        var currentStepClass = 'js-current-step';
        var currentStepSelector = '.' + currentStepClass;
        var stepsAfterPersonalInformation = (0, _jquery2['default'])('#checkout-personal-information-step').nextAll();
        (0, _jquery2['default'])(currentStepSelector).prevAll().add(stepsAfterPersonalInformation).on('click', function(event) {
            var $nextStep = (0, _jquery2['default'])(event.target).closest('.checkout-step');
            if (!$nextStep.hasClass('-unreachable')) {
                (0, _jquery2['default'])(currentStepSelector + ', .-current').removeClass(currentStepClass + ' -current');
                $nextStep.toggleClass('-current');
                $nextStep.toggleClass(currentStepClass)
            }
            _prestashop2['default'].emit('changedCheckoutStep', {
                event: event
            })
        });
        (0, _jquery2['default'])(currentStepSelector + ':not(#checkout-personal-information-step)').nextAll().on('click', function(event) {
            (0, _jquery2['default'])(currentStepSelector + ' button.continue').click();
            _prestashop2['default'].emit('changedCheckoutStep', {
                event: event
            })
        })
    }(0, _jquery2['default'])(document).ready(function() {
        if ((0, _jquery2['default'])('#checkout').length === 1) {
            setUpCheckout()
        }
    }); /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    exports['default'] = function() {
        (0, _jquery2['default'])('.js-edit-addresses').on('click', function(event) {
            event.stopPropagation();
            (0, _jquery2['default'])('#checkout-addresses-step').trigger('click');
            _prestashop2['default'].emit('editAddress')
        });
        (0, _jquery2['default'])('#delivery-addresses, #invoice-addresses input[type=radio]').on('click', function() {
            (0, _jquery2['default'])('.address-item').removeClass('selected');
            (0, _jquery2['default'])('.address-item:has(input[type=radio]:checked)').addClass('selected')
        })
    };
    module.exports = exports['default']; /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    exports['default'] = function() {
        var $body = (0, _jquery2['default'])('body');
        var deliveryFormSelector = '#js-delivery';
        var summarySelector = '#js-checkout-summary';
        var deliveryStepSelector = '#checkout-delivery-step';
        var editDeliveryButtonSelector = '.js-edit-delivery';
        var updateDeliveryForm = function updateDeliveryForm(event) {
            var $deliveryMethodForm = (0, _jquery2['default'])(deliveryFormSelector);
            var requestData = $deliveryMethodForm.serialize();
            var $inputChecked = (0, _jquery2['default'])(event.currentTarget);
            var $newDeliveryOption = $inputChecked.parents("div.delivery-option");
            _jquery2['default'].post($deliveryMethodForm.data('url-update'), requestData).then(function(resp) {
                (0, _jquery2['default'])(summarySelector).replaceWith(resp.preview);
                _prestashop2['default'].emit('updatedDeliveryForm', {
                    dataForm: $deliveryMethodForm.serializeArray(),
                    deliveryOption: $newDeliveryOption,
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].trigger('handleError', {
                    eventType: 'updateDeliveryOptions',
                    resp: resp
                })
            })
        };
        $body.on('change', deliveryFormSelector + ' input', updateDeliveryForm);
        $body.on('click', editDeliveryButtonSelector, function(event) {
            event.stopPropagation();
            (0, _jquery2['default'])(deliveryStepSelector).trigger('click');
            _prestashop2['default'].emit('editDelivery')
        })
    };
    module.exports = exports['default']; /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value' in descriptor) descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor
        }
    })();

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var Payment = (function() {
        function Payment() {
            _classCallCheck(this, Payment);
            this.confirmationSelector = '#payment-confirmation';
            this.paymentSelector = '#payment-section';
            this.conditionsSelector = '#conditions-to-approve';
            this.conditionAlertSelector = '.js-alert-payment-conditions';
            this.additionalInformatonSelector = '.js-additional-information';
            this.optionsForm = '.js-payment-option-form'
        }
        _createClass(Payment, [{
            key: 'init',
            value: function init() {
                (0, _jquery2['default'])(this.paymentSelector + ' input[type="checkbox"][disabled]').attr('disabled', !1);
                var $body = (0, _jquery2['default'])('body');
                $body.on('change', this.conditionsSelector + ' input[type="checkbox"]', _jquery2['default'].proxy(this.toggleOrderButton, this));
                $body.on('change', 'input[name="payment-option"]', _jquery2['default'].proxy(this.toggleOrderButton, this));
                $body.on('click', this.confirmationSelector + ' button', _jquery2['default'].proxy(this.confirm, this));
                this.collapseOptions()
            }
        }, {
            key: 'collapseOptions',
            value: function collapseOptions() {
                (0, _jquery2['default'])(this.additionalInformatonSelector + ', ' + this.optionsForm).hide()
            }
        }, {
            key: 'getSelectedOption',
            value: function getSelectedOption() {
                return (0, _jquery2['default'])('input[name="payment-option"]:checked').attr('id')
            }
        }, {
            key: 'hideConfirmation',
            value: function hideConfirmation() {
                (0, _jquery2['default'])(this.confirmationSelector).hide()
            }
        }, {
            key: 'showConfirmation',
            value: function showConfirmation() {
                (0, _jquery2['default'])(this.confirmationSelector).show()
            }
        }, {
            key: 'toggleOrderButton',
            value: function toggleOrderButton() {
                var show = !0;
                (0, _jquery2['default'])(this.conditionsSelector + ' input[type="checkbox"]').each(function(_, checkbox) {
                    if (!checkbox.checked) {
                        show = !1
                    }
                });
                this.collapseOptions();
                var selectedOption = this.getSelectedOption();
                if (!selectedOption) {
                    show = !1
                }(0, _jquery2['default'])('#' + selectedOption + '-additional-information').show();
                (0, _jquery2['default'])('#pay-with-' + selectedOption + '-form').show();
                (0, _jquery2['default'])('.js-payment-binary').hide();
                if ((0, _jquery2['default'])('#' + selectedOption).hasClass('binary')) {
                    var paymentOption = this.getPaymentOptionSelector(selectedOption);
                    this.hideConfirmation();
                    (0, _jquery2['default'])(paymentOption).show();
                    if (show) {
                        (0, _jquery2['default'])(paymentOption).removeClass('disabled')
                    } else {
                        (0, _jquery2['default'])(paymentOption).addClass('disabled')
                    }
                } else {
                    this.showConfirmation();
                    (0, _jquery2['default'])(this.confirmationSelector + ' button').attr('disabled', !show);
                    if (show) {
                        (0, _jquery2['default'])(this.conditionAlertSelector).hide()
                    } else {
                        (0, _jquery2['default'])(this.conditionAlertSelector).show()
                    }
                }
            }
        }, {
            key: 'getPaymentOptionSelector',
            value: function getPaymentOptionSelector(option) {
                var moduleName = (0, _jquery2['default'])('#' + option).data('module-name');
                return '.js-payment-' + moduleName
            }
        }, {
            key: 'confirm',
            value: function confirm() {
                var option = this.getSelectedOption();
                if (option) {
                    (0, _jquery2['default'])('#pay-with-' + option + '-form form').submit()
                }
            }
        }]);
        return Payment
    })();
    exports['default'] = function() {
        var payment = new Payment();
        payment.init();
        return payment
    };
    module.exports = exports['default']; /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var pendingQuery = !1;

    function updateResults(data) {
        pendingQuery = !1;
        prestashop.emit('updateProductList', data);
        window.history.pushState(data, undefined, data.current_url);
        window.scrollTo(0, 0)
    }

    function handleError() {
        pendingQuery = !1
    }

    function makeQuery(url) {
        if (pendingQuery) {} else {
            var slightlyDifferentURL = [url, url.indexOf('?') >= 0 ? '&' : '?', 'from-xhr'].join('');
            _jquery2['default'].get(slightlyDifferentURL, null, null, 'json').then(updateResults).fail(handleError)
        }
    }(0, _jquery2['default'])(document).ready(function() {
        prestashop.on('updateFacets', function(param) {
            makeQuery(param)
        })
    }); /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
   
}), (function(module, exports, __webpack_require__) {
    'use strict';

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _common = __webpack_require__(12);
    (0, _jquery2['default'])(document).ready(function() {
        (0, _jquery2['default'])('body').on('change', '.product-variants [data-product-attribute]', function() {
            (0, _jquery2['default'])("input[name$='refresh']").click()
        });
        (0, _jquery2['default'])('body').on('click', '.product-refresh', function(event, extraParameters) {
            var $productRefresh = (0, _jquery2['default'])(this);
            event.preventDefault();
            var eventType = 'updatedProductCombination';
            if (typeof extraParameters !== 'undefined' && extraParameters.eventType) {
                eventType = extraParameters.eventType
            }
            var preview = (0, _common.psGetRequestParameter)('preview');
            if (preview !== null) {
                preview = '&preview=' + preview
            } else {
                preview = ''
            }
            var query = (0, _jquery2['default'])(event.target.form).serialize() + '&ajax=1&action=productrefresh' + preview;
            var actionURL = (0, _jquery2['default'])(event.target.form).attr('action');
            _jquery2['default'].post(actionURL, query, null, 'json').then(function(resp) {
                _prestashop2['default'].emit('updateProduct', {
                    reason: {
                        productUrl: resp.productUrl
                    },
                    refreshUrl: $productRefresh.data('url-update'),
                    eventType: eventType,
                    resp: resp
                })
            })
        });
        _prestashop2['default'].on('updateProduct', function(event) {
            if (typeof event.refreshUrl == "undefined") {
                event.refreshUrl = !0
            }
            var eventType = event.eventType;
            var replaceAddToCartSections = function replaceAddToCartSections(addCartHtml) {
                var $addToCartSnippet = (0, _jquery2['default'])(addCartHtml);
                var $addProductToCart = (0, _jquery2['default'])('.product-add-to-cart');

                function replaceAddToCartSection(replacement) {
                    var replace = replacement.$addToCartSnippet.find(replacement.targetSelector);
                    if ((0, _jquery2['default'])(replacement.$targetParent.find(replacement.targetSelector)).length > 0) {
                        if (replace.length > 0) {
                            (0, _jquery2['default'])(replacement.$targetParent.find(replacement.targetSelector)).replaceWith(replace[0].outerHTML)
                        } else {
                            (0, _jquery2['default'])(replacement.$targetParent.find(replacement.targetSelector)).html('')
                        }
                    }
                }
                var productAvailabilitySelector = '.add';
                replaceAddToCartSection({
                    $addToCartSnippet: $addToCartSnippet,
                    $targetParent: $addProductToCart,
                    targetSelector: productAvailabilitySelector
                });
                var productAvailabilityMessageSelector = '#product-availability';
                replaceAddToCartSection({
                    $addToCartSnippet: $addToCartSnippet,
                    $targetParent: $addProductToCart,
                    targetSelector: productAvailabilityMessageSelector
                });
                var productMinimalQuantitySelector = '.product-minimal-quantity';
                replaceAddToCartSection({
                    $addToCartSnippet: $addToCartSnippet,
                    $targetParent: $addProductToCart,
                    targetSelector: productMinimalQuantitySelector
                })
            };
            _jquery2['default'].post(event.reason.productUrl, {
                ajax: '1',
                action: 'refresh'
            }, null, 'json').then(function(resp) {
                (0, _jquery2['default'])('.product-prices').replaceWith(resp.product_prices);
                (0, _jquery2['default'])('.product-customization').replaceWith(resp.product_customization);
                (0, _jquery2['default'])('.product-variants').replaceWith(resp.product_variants);
                (0, _jquery2['default'])('.product-discounts').replaceWith(resp.product_discounts);
                (0, _jquery2['default'])('.images-container').replaceWith(resp.product_cover_thumbnails);
                (0, _jquery2['default'])('.product-additional-info').replaceWith(resp.product_additional_info);
                (0, _jquery2['default'])('#product-details').replaceWith(resp.product_details);
                var $productAddToCart = undefined;
                (0, _jquery2['default'])(resp.product_add_to_cart).each(function(index, value) {
                    if ((0, _jquery2['default'])(value).hasClass('product-add-to-cart')) {
                        $productAddToCart = (0, _jquery2['default'])(value)
                    }
                });
                replaceAddToCartSections($productAddToCart);
                var minimalProductQuantity = parseInt(resp.product_minimal_quantity, 10);
                var quantityInputSelector = '#quantity_wanted';
                var quantityInput = (0, _jquery2['default'])(quantityInputSelector);
                var quantity_wanted = quantityInput.val();
                if (!isNaN(minimalProductQuantity) && quantity_wanted < minimalProductQuantity && eventType !== 'updatedProductQuantity') {
                    quantityInput.attr('min', minimalProductQuantity);
                    quantityInput.val(minimalProductQuantity)
                }
                if (event.refreshUrl) {
                    window.history.pushState({
                        id_product_attribute: resp.id_product_attribute
                    }, undefined, resp.product_url)
                }
                _prestashop2['default'].emit('updatedProduct', resp)
            })
        })
    }); /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    exports.psShowHide = psShowHide;
    exports.psGetRequestParameter = psGetRequestParameter;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);

    function psShowHide() {
        (0, _jquery2['default'])('.ps-shown-by-js').show();
        (0, _jquery2['default'])('.ps-hidden-by-js').hide()
    }

    function psGetRequestParameter(paramName) {
        var vars = {};
        window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(m, key, value) {
            vars[key] = value !== undefined ? value : ''
        });
        if (paramName) {
            return vars[paramName] ? vars[paramName] : null
        }
        return vars
    } /***/
}), (function(module, exports, __webpack_require__) {
    'use strict';

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);

    function handleCountryChange(selectors) {
        (0, _jquery2['default'])('body').on('change', selectors.country, function() {
            var requestData = {
                id_country: (0, _jquery2['default'])(selectors.country).val(),
                id_address: (0, _jquery2['default'])(selectors.address + ' form').data('id-address')
            };
            var getFormViewUrl = (0, _jquery2['default'])(selectors.address + ' form').data('refresh-url');
            var formFieldsSelector = selectors.address + ' input';
            _jquery2['default'].post(getFormViewUrl, requestData).then(function(resp) {
                var inputs = [];
                (0, _jquery2['default'])(formFieldsSelector).each(function() {
                    inputs[(0, _jquery2['default'])(this).prop('name')] = (0, _jquery2['default'])(this).val()
                });
                (0, _jquery2['default'])(selectors.address).replaceWith(resp.address_form);
                (0, _jquery2['default'])(formFieldsSelector).each(function() {
                    (0, _jquery2['default'])(this).val(inputs[(0, _jquery2['default'])(this).prop('name')])
                });
                _prestashop2['default'].emit('updatedAddressForm', {
                    target: (0, _jquery2['default'])(selectors.address),
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateAddressForm',
                    resp: resp
                })
            })
        })
    }(0, _jquery2['default'])(document).ready(function() {
        handleCountryChange({
            'country': '.js-country',
            'address': '.js-address-form'
        })
    }); /***/
}), (function(module, exports) {
    'use strict';

    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined
    }
    module.exports = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this
    };
    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;
        if (!this._events) this._events = {};
        if (type === 'error') {
            if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er
                } else {
                    var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                    err.context = er;
                    throw err
                }
            }
        }
        handler = this._events[type];
        if (isUndefined(handler)) return !1;
        if (isFunction(handler)) {
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args)
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++) listeners[i].apply(this, args);
        }
        return !0
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        if (!this._events) this._events = {};
        if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type])
            this._events[type] = listener;
        else if (isObject(this._events[type]))
            this._events[type].push(listener);
        else this._events[type] = [this._events[type], listener];
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners
            } else {
                m = EventEmitter.defaultMaxListeners
            }
            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = !0;
                console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                if (typeof console.trace === 'function') {
                    console.trace()
                }
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        var fired = !1;

        function g() {
            this.removeListener(type, g);
            if (!fired) {
                fired = !0;
                listener.apply(this, arguments)
            }
        }
        g.listener = listener;
        this.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        if (!this._events || !this._events[type]) return this;
        list = this._events[type];
        length = list.length;
        position = -1;
        if (list === listener || isFunction(list.listener) && list.listener === listener) {
            delete this._events[type];
            if (this._events.removeListener) this.emit('removeListener', type, listener)
        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            if (list.length === 1) {
                list.length = 0;
                delete this._events[type]
            } else {
                list.splice(position, 1)
            }
            if (this._events.removeListener) this.emit('removeListener', type, listener)
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;
        if (!this._events) return this;
        if (!this._events.removeListener) {
            if (arguments.length === 0) this._events = {};
            else if (this._events[type]) delete this._events[type];
            return this
        }
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === 'removeListener') continue;
                this.removeAllListeners(key)
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this
        }
        listeners = this._events[type];
        if (isFunction(listeners)) {
            this.removeListener(type, listeners)
        } else if (listeners) {
            while (listeners.length) this.removeListener(type, listeners[listeners.length - 1])
        }
        delete this._events[type];
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type]) ret = [];
        else if (isFunction(this._events[type])) ret = [this._events[type]];
        else ret = this._events[type].slice();
        return ret
    };
    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener)) return 1;
            else if (evlistener) return evlistener.length
        }
        return 0
    };
    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type)
    };

    function isFunction(arg) {
        return typeof arg === 'function'
    }

    function isNumber(arg) {
        return typeof arg === 'number'
    }

    function isObject(arg) {
        return typeof arg === 'object' && arg !== null
    }

    function isUndefined(arg) {
        return arg === void 0
    } /***/
})]);
(function(jQuery, undefined) {
    jQuery.fn.extend({
        revolution: function(options) {
            defaults = {
                delay: 9000,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: !1,
                isJoomla: !1,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off",
                panZoomDisableOnMobile: "off",
                simplifyAll: "on",
                minHeight: 0,
                nextSlideOnWindowFocus: "off"
            };
            options = jQuery.extend({}, defaults, options);
            return this.each(function() {
                if (window.tplogs == !0)
                    try {} catch (e) {}
                if (punchgs.TweenLite == undefined) {
                    if (window.tplogs == !0)
                        try {
                            console.error("GreenSock Engine Does not Exist!")
                        } catch (e) {}
                    return !1
                }
                punchgs.force3D = !0;
                if (window.tplogs == !0)
                    try {} catch (e) {}
                if (options.simplifyAll == "on") {} else {
                    punchgs.TweenLite.lagSmoothing(1000, 16);
                    punchgs.force3D = "true"
                }
                if (window.tplogs == !0)
                    try {
                        console.groupEnd();
                        console.groupEnd()
                    } catch (e) {}
                initSlider(jQuery(this), options)
            })
        },
        revscroll: function(oy) {
            return this.each(function() {
                var container = jQuery(this);
                jQuery('body,html').animate({
                    scrollTop: (container.offset().top + (container.find('>ul >li').height()) - oy) + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function(oy) {
            return this.each(function() {
                var container = jQuery(this);
                var bt = container.parent().find('.tp-bannertimer');
                var opt = bt.data('opt');
                containerResized(container, opt)
            })
        },
        revpause: function(options) {
            return this.each(function() {
                var container = jQuery(this);
                container.data('conthover', 1);
                container.data('conthover-changed', 1);
                container.trigger('revolution.slide.onpause');
                var bt = container.parent().find('.tp-bannertimer');
                var opt = bt.data('opt');
                opt.bannertimeronpause = !0;
                container.trigger('stoptimer')
            })
        },
        revresume: function(options) {
            return this.each(function() {
                var container = jQuery(this);
                container.data('conthover', 0);
                container.data('conthover-changed', 1);
                container.trigger('revolution.slide.onresume');
                var bt = container.parent().find('.tp-bannertimer');
                var opt = bt.data('opt');
                opt.bannertimeronpause = !1;
                container.trigger('starttimer')
            })
        },
        revnext: function(options) {
            return this.each(function() {
                var container = jQuery(this);
                container.parent().find('.tp-rightarrow').click()
            })
        },
        revprev: function(options) {
            return this.each(function() {
                var container = jQuery(this);
                container.parent().find('.tp-leftarrow').click()
            })
        },
        revmaxslide: function(options) {
            return jQuery(this).find('>ul:first-child >li').length
        },
        revcurrentslide: function(options) {
            var container = jQuery(this);
            var bt = container.parent().find('.tp-bannertimer');
            var opt = bt.data('opt');
            return opt.act
        },
        revlastslide: function(options) {
            var container = jQuery(this);
            var bt = container.parent().find('.tp-bannertimer');
            var opt = bt.data('opt');
            return opt.lastslide
        },
        revshowslide: function(slide) {
            return this.each(function() {
                var container = jQuery(this);
                container.data('showus', slide);
                container.parent().find('.tp-rightarrow').click()
            })
        }
    })

    function iOSVersion() {
        var oldios = !1;
        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
            if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
                oldios = !0
            }
        } else {
            oldios = !1
        }
        return oldios
    }

    function initSlider(container, opt) {
        if (opt.navigationStyle == "preview1" || opt.navigationStyle == "preview3" || opt.navigationStyle == "preview4") {
            opt.soloArrowLeftHalign = "left";
            opt.soloArrowLeftValign = "center";
            opt.soloArrowLeftHOffset = 0;
            opt.soloArrowLeftVOffset = 0;
            opt.soloArrowRightHalign = "right";
            opt.soloArrowRightValign = "center";
            opt.soloArrowRightHOffset = 0;
            opt.soloArrowRightVOffset = 0;
            opt.navigationArrows = "solo"
        }
        if (opt.simplifyAll == "on" && (isIE(8) || iOSVersion())) {
            container.find('.tp-caption').each(function() {
                var tc = jQuery(this);
                tc.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout");
                tc.data('splitin', "");
                tc.data('speed', 400)
            })
            container.find('>ul>li').each(function() {
                var li = jQuery(this);
                li.data('transition', "fade");
                li.data('masterspeed', 500);
                li.data('slotamount', 1);
                var img = li.find('>img').first();
                img.data('kenburns', "off")
            })
        }
        opt.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
        if (opt.fullWidth != "on" && opt.fullScreen != "on") opt.autoHeight = "off";
        if (opt.fullScreen == "on") opt.autoHeight = "on";
        if (opt.fullWidth != "on" && opt.fullScreen != "on") forceFulWidth = "off";
        if (opt.fullWidth == "on" && opt.autoHeight == "off")
            container.css({
                maxHeight: opt.startheight + "px"
            });
        if (is_mobile() && opt.hideThumbsOnMobile == "on" && opt.navigationType == "thumb")
            opt.navigationType = "none"
        if (is_mobile() && opt.hideBulletsOnMobile == "on" && opt.navigationType == "bullet")
            opt.navigationType = "none"
        if (is_mobile() && opt.hideBulletsOnMobile == "on" && opt.navigationType == "both")
            opt.navigationType = "none"
        if (is_mobile() && opt.hideArrowsOnMobile == "on")
            opt.navigationArrows = "none"
        if (opt.forceFullWidth == "on" && container.closest('.forcefullwidth_wrapper_tp_banner').length == 0) {
            var loff = container.parent().offset().left;
            var mb = container.parent().css('marginBottom');
            var mt = container.parent().css('marginTop');
            if (mb == undefined) mb = 0;
            if (mt == undefined) mt = 0;
            container.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + mt + ';margin-bottom:' + mb + '" class="forcefullwidth_wrapper_tp_banner"></div>');
            container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + container.height() + 'px"></div>');
            container.css({
                'backgroundColor': container.parent().css('backgroundColor'),
                'backgroundImage': container.parent().css('backgroundImage')
            });
            container.parent().css({
                'left': (0 - loff) + "px",
                position: 'absolute',
                'width': jQuery(window).width()
            });
            opt.width = jQuery(window).width()
        }
        try {
            if (opt.hideThumbsUnderResolution > jQuery(window).width() && opt.hideThumbsUnderResolution != 0) {
                container.parent().find('.tp-bullets.tp-thumbs').css({
                    display: "none"
                })
            } else {
                container.parent().find('.tp-bullets.tp-thumbs').css({
                    display: "block"
                })
            }
        } catch (e) {}
        if (!container.hasClass("revslider-initialised")) {
            container.addClass("revslider-initialised");
            if (container.attr('id') == undefined) container.attr('id', "revslider-" + Math.round(Math.random() * 1000 + 5));
            opt.firefox13 = !1;
            opt.ie = !jQuery.support.opacity;
            opt.ie9 = (document.documentMode == 9);
            opt.origcd = opt.delay;
            var version = jQuery.fn.jquery.split('.'),
                versionTop = parseFloat(version[0]),
                versionMinor = parseFloat(version[1]),
                versionIncrement = parseFloat(version[2] || '0');
            if (versionTop == 1 && versionMinor < 7) {
                container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + version + ' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>')
            }
            if (versionTop > 1) opt.ie = !1;
            if (!jQuery.support.transition)
                jQuery.fn.transition = jQuery.fn.animate;
            container.find('.caption').each(function() {
                jQuery(this).addClass('tp-caption')
            });
            if (is_mobile()) {
                container.find('.tp-caption').each(function() {
                    var nextcaption = jQuery(this);
                    if (nextcaption.data('autoplayonlyfirsttime') == !0 || nextcaption.data('autoplayonlyfirsttime') == "true")
                        nextcaption.data('autoplayonlyfirsttime', "false");
                    if (nextcaption.data('autoplay') == !0 || nextcaption.data('autoplay') == "true")
                        nextcaption.data('autoplay', !1)
                })
            }
            var addedyt = 0;
            var addedvim = 0;
            var addedvid = 0;
            var httpprefix = "http";
            if (location.protocol === 'https:') {
                httpprefix = "https"
            }
            container.find('.tp-caption').each(function(i) {
                try {
                    if ((jQuery(this).data('ytid') != undefined || jQuery(this).find('iframe').attr('src').toLowerCase().indexOf('youtube') > 0) && addedyt == 0) {
                        addedyt = 1;
                        var s = document.createElement("script");
                        var httpprefix2 = "https";
                        s.src = httpprefix2 + "://www.youtube.com/iframe_api";
                        var before = document.getElementsByTagName("script")[0];
                        var loadit = !0;
                        jQuery('head').find('*').each(function() {
                            if (jQuery(this).attr('src') == httpprefix2 + "://www.youtube.com/iframe_api")
                                loadit = !1
                        });
                        if (loadit) {
                            before.parentNode.insertBefore(s, before)
                        }
                    }
                } catch (e) {}
                try {
                    if ((jQuery(this).data('vimeoid') != undefined || jQuery(this).find('iframe').attr('src').toLowerCase().indexOf('vimeo') > 0) && addedvim == 0) {
                        addedvim = 1;
                        var f = document.createElement("script");
                        f.src = httpprefix + "://a.vimeocdn.com/js/froogaloop2.min.js";
                        var before = document.getElementsByTagName("script")[0];
                        var loadit = !0;
                        jQuery('head').find('*').each(function() {
                            if (jQuery(this).attr('src') == httpprefix + "://a.vimeocdn.com/js/froogaloop2.min.js")
                                loadit = !1
                        });
                        if (loadit)
                            before.parentNode.insertBefore(f, before)
                    }
                } catch (e) {}
                try {
                    if ((jQuery(this).data('videomp4') != undefined || jQuery(this).data('videowebm') != undefined)) {}
                } catch (e) {}
            });
            container.find('.tp-caption video').each(function(i) {
                jQuery(this).removeClass("video-js").removeClass("vjs-default-skin");
                jQuery(this).attr("preload", "");
                jQuery(this).css({
                    display: "none"
                })
            });
            if (opt.shuffle == "on") {
                var fsa = new Object,
                    fli = container.find('>ul:first-child >li:first-child')
                fsa.fstransition = fli.data('fstransition');
                fsa.fsmasterspeed = fli.data('fsmasterspeed');
                fsa.fsslotamount = fli.data('fsslotamount');
                for (var u = 0; u < container.find('>ul:first-child >li').length; u++) {
                    var it = Math.round(Math.random() * container.find('>ul:first-child >li').length);
                    container.find('>ul:first-child >li:eq(' + it + ')').prependTo(container.find('>ul:first-child'))
                }
                var newfli = container.find('>ul:first-child >li:first-child');
                newfli.data('fstransition', fsa.fstransition);
                newfli.data('fsmasterspeed', fsa.fsmasterspeed);
                newfli.data('fsslotamount', fsa.fsslotamount)
            }
            opt.slots = 4;
            opt.act = -1;
            opt.next = 0;
            if (opt.startWithSlide != undefined) opt.next = opt.startWithSlide;
            var deeplink = getUrlVars("#")[0];
            if (deeplink.length < 9) {
                if (deeplink.split('slide').length > 1) {
                    var dslide = parseInt(deeplink.split('slide')[1], 0);
                    if (dslide < 1) dslide = 1;
                    if (dslide > container.find('>ul:first >li').length) dslide = container.find('>ul:first >li').length;
                    opt.next = dslide - 1
                }
            }
            opt.firststart = 1;
            if (opt.navigationHOffset == undefined) opt.navOffsetHorizontal = 0;
            if (opt.navigationVOffset == undefined) opt.navOffsetVertical = 0;
            container.append('<div class="tp-loader ' + opt.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + '</div>');
            if (container.find('.tp-bannertimer').length == 0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var bt = container.find('.tp-bannertimer');
            if (bt.length > 0) {
                bt.css({
                    'width': '0%'
                })
            };
            container.addClass("tp-simpleresponsive");
            opt.container = container;
            opt.slideamount = container.find('>ul:first >li').length;
            if (container.height() == 0) container.height(opt.startheight);
            if (opt.startwidth == undefined || opt.startwidth == 0) opt.startwidth = container.width();
            if (opt.startheight == undefined || opt.startheight == 0) opt.startheight = container.height();
            opt.width = container.width();
            opt.height = container.height();
            opt.bw = opt.startwidth / container.width();
            opt.bh = opt.startheight / container.height();
            if (opt.width != opt.startwidth) {
                opt.height = Math.round(opt.startheight * (opt.width / opt.startwidth));
                container.height(opt.height)
            }
            if (opt.shadow != 0) {
                container.parent().append('<div class="tp-bannershadow tp-shadow' + opt.shadow + '"></div>');
                var loff = 0;
                if (opt.forceFullWidth == "on")
                    loff = 0 - opt.container.parent().offset().left;
                container.parent().find('.tp-bannershadow').css({
                    'width': opt.width,
                    'left': loff
                })
            }
            container.find('ul').css({
                'display': 'none'
            });
            var fliparent = container;
            container.find('ul').css({
                'display': 'block'
            });
            prepareSlides(container, opt);
            if (opt.parallax != "off") checkForParallax(container, opt);
            if (opt.slideamount > 1) createBullets(container, opt);
            if (opt.slideamount > 1 && opt.navigationType == "thumb") createThumbs(container, opt);
            if (opt.slideamount > 1) createArrows(container, opt);
            if (opt.keyboardNavigation == "on") createKeyboard(container, opt);
            swipeAction(container, opt);
            if (opt.hideThumbs > 0) hideThumbs(container, opt);
            swapSlide(container, opt);
            if (opt.slideamount > 1) countDown(container, opt);
            setTimeout(function() {
                container.trigger('revolution.slide.onloaded')
            }, 500);
            jQuery("body").data('rs-fullScreenMode', !1);
            jQuery(window).on('mozfullscreenchange webkitfullscreenchange fullscreenchange', function() {
                jQuery("body").data('rs-fullScreenMode', !jQuery("body").data('rs-fullScreenMode'));
                if (jQuery("body").data('rs-fullScreenMode')) {
                    setTimeout(function() {
                        jQuery(window).trigger("resize")
                    }, 200)
                }
            })
            jQuery(window).resize(function() {
                if (jQuery('body').find(container) != 0)
                    if (opt.forceFullWidth == "on") {
                        var loff = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset().left;
                        opt.container.parent().css({
                            'left': (0 - loff) + "px",
                            'width': jQuery(window).width()
                        })
                    }
                if (container.outerWidth(!0) != opt.width || container.is(":hidden")) {
                    containerResized(container, opt)
                }
            });
            try {
                if (opt.hideThumbsUnderResoluition != 0 && opt.navigationType == "thumb") {
                    if (opt.hideThumbsUnderResoluition > jQuery(window).width())
                        jQuery('.tp-bullets').css({
                            display: "none"
                        });
                    else jQuery('.tp-bullets').css({
                        display: "block"
                    })
                }
            } catch (e) {}
            container.find('.tp-scrollbelowslider').on('click', function() {
                var off = 0;
                try {
                    off = jQuery('body').find(opt.fullScreenOffsetContainer).height()
                } catch (e) {}
                try {
                    off = off - parseInt(jQuery(this).data('scrolloffset'), 0)
                } catch (e) {}
                jQuery('body,html').animate({
                    scrollTop: (container.offset().top + (container.find('>ul >li').height()) - off) + "px"
                }, {
                    duration: 400
                })
            });
            var contpar = container.parent();
            if (jQuery(window).width() < opt.hideSliderAtLimit) {
                container.trigger('stoptimer');
                if (contpar.css('display') != "none")
                    contpar.data('olddisplay', contpar.css('display'));
                contpar.css({
                    display: "none"
                })
            }
            tabBlurringCheck(container, opt)
        }
    }
    var vis = (function() {
        var stateKey, eventKey, keys = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
        for (stateKey in keys) {
            if (stateKey in document) {
                eventKey = keys[stateKey];
                break
            }
        }
        return function(c) {
            if (c) document.addEventListener(eventKey, c);
            return !document[stateKey]
        }
    })();
    var tabBlurringCheck = function(container, opt) {
        var notIE = (document.documentMode === undefined),
            isChromium = window.chrome;
        if (notIE && !isChromium) {
            jQuery(window).on("focusin", function() {
                setTimeout(function() {
                    if (opt.nextSlideOnWindowFocus == "on") container.revnext();
                    container.revredraw()
                }, 300)
            }).on("focusout", function() {})
        } else {
            if (window.addEventListener) {
                window.addEventListener("focus", function(event) {
                    setTimeout(function() {
                        if (opt.nextSlideOnWindowFocus == "on") container.revnext();
                        container.revredraw()
                    }, 300)
                }, !1);
                window.addEventListener("blur", function(event) {}, !1)
            } else {
                window.attachEvent("focus", function(event) {
                    setTimeout(function() {
                        if (opt.nextSlideOnWindowFocus == "on") container.revnext();
                        container.revredraw()
                    }, 300)
                });
                window.attachEvent("blur", function(event) {})
            }
        }
    }
    var getUrlVars = function(hashdivider) {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
        for (var i = 0; i < hashes.length; i++) {
            hashes[i] = hashes[i].replace('%3D', "=");
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1]
        }
        return vars
    }
    var containerResized = function(container, opt) {
        try {
            if (opt.hideThumbsUnderResoluition != 0 && opt.navigationType == "thumb") {
                if (opt.hideThumbsUnderResoluition > jQuery(window).width())
                    jQuery('.tp-bullets').css({
                        display: "none"
                    });
                else jQuery('.tp-bullets').css({
                    display: "block"
                })
            }
        } catch (e) {}
        container.find('.defaultimg').each(function(i) {
            setSize(jQuery(this), opt)
        });
        var contpar = container.parent();
        if (jQuery(window).width() < opt.hideSliderAtLimit) {
            container.trigger('stoptimer');
            if (contpar.css('display') != "none")
                contpar.data('olddisplay', contpar.css('display'));
            contpar.css({
                display: "none"
            })
        } else {
            if (container.is(":hidden")) {
                if (contpar.data('olddisplay') != undefined && contpar.data('olddisplay') != "undefined" && contpar.data('olddisplay') != "none")
                    contpar.css({
                        display: contpar.data('olddisplay')
                    });
                else contpar.css({
                    display: "block"
                });
                container.trigger('restarttimer');
                setTimeout(function() {
                    containerResized(container, opt)
                }, 150)
            }
        }
        var loff = 0;
        if (opt.forceFullWidth == "on")
            loff = 0 - opt.container.parent().offset().left;
        try {
            container.parent().find('.tp-bannershadow').css({
                'width': opt.width,
                'left': loff
            })
        } catch (e) {}
        var actsh = container.find('>ul >li:eq(' + opt.act + ') .slotholder');
        var nextsh = container.find('>ul >li:eq(' + opt.next + ') .slotholder');
        removeSlots(container, opt, container);
        punchgs.TweenLite.set(nextsh.find('.defaultimg'), {
            opacity: 0
        });
        actsh.find('.defaultimg').css({
            'opacity': 1
        });
        nextsh.find('.defaultimg').each(function() {
            var dimg = jQuery(this);
            if (opt.panZoomDisableOnMobile == "on" && is_mobile()) {} else {
                if (dimg.data('kenburn') != undefined) {
                    dimg.data('kenburn').restart();
                    startKenBurn(container, opt, !0)
                }
            }
        });
        var nextli = container.find('>ul >li:eq(' + opt.next + ')');
        var arr = container.parent().find('.tparrows');
        if (arr.hasClass("preview2"))
            arr.css({
                width: (parseInt(arr.css('minWidth'), 0))
            });
        animateTheCaptions(nextli, opt, !0);
        setBulPos(container, opt)
    }
    var isIE = function(version, comparison) {
        var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
        $div.html('<!--[if ' + (comparison || '') + ' IE ' + (version || '') + ']><a>&nbsp;</a><![endif]-->');
        var ieTest = $div.find('a').length;
        $div.remove();
        return ieTest
    }
    var callingNewSlide = function(opt, container) {
        if (opt.next == container.find('>ul >li').length - 1) {
            opt.looptogo = opt.looptogo - 1;
            if (opt.looptogo <= 0)
                opt.stopLoop = "on"
        }
        swapSlide(container, opt)
    }
    var createBullets = function(container, opt) {
        var starthidebullets = "hidebullets";
        if (opt.hideThumbs == 0) starthidebullets = "";
        if (opt.navigationType == "bullet" || opt.navigationType == "both") {
            container.parent().append('<div class="tp-bullets ' + starthidebullets + ' simplebullets ' + opt.navigationStyle + '"></div>')
        }
        var bullets = container.parent().find('.tp-bullets');
        container.find('>ul:first >li').each(function(i) {
            var src = container.find(">ul:first >li:eq(" + i + ") img:first").attr('src');
            bullets.append('<div class="bullet"></div>');
            var bullet = bullets.find('.bullet:first')
        });
        bullets.find('.bullet').each(function(i) {
            var bul = jQuery(this);
            if (i == opt.slideamount - 1) bul.addClass('last');
            if (i == 0) bul.addClass('first');
            bul.click(function() {
                var sameslide = !1;
                if (opt.navigationArrows == "withbullet" || opt.navigationArrows == "nexttobullets") {
                    if (bul.index() - 1 == opt.act) sameslide = !0
                } else {
                    if (bul.index() == opt.act) sameslide = !0
                }
                if (opt.transition == 0 && !sameslide) {
                    if (opt.navigationArrows == "withbullet" || opt.navigationArrows == "nexttobullets") {
                        opt.next = bul.index() - 1
                    } else {
                        opt.next = bul.index()
                    }
                    callingNewSlide(opt, container)
                }
            })
        });
        bullets.append('<div class="tpclear"></div>');
        setBulPos(container, opt)
    }
    var createArrows = function(container, opt) {
        var bullets = container.find('.tp-bullets');
        var hidden = "",
            starthidearrows = "hidearrows";
        if (opt.hideThumbs == 0) starthidearrows = "";
        var arst = opt.navigationStyle;
        if (opt.navigationArrows == "none") hidden = "visibility:hidden;display:none";
        opt.soloArrowStyle = "default" + " " + opt.navigationStyle;
        if (opt.navigationArrows != "none" && opt.navigationArrows != "nexttobullets") arst = opt.soloArrowStyle;

        function aArrow(dir) {
            container.parent().append('<div style="' + hidden + '" class="tp-' + dir + 'arrow ' + starthidearrows + ' tparrows ' + arst + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
        }
        aArrow("left");
        aArrow("right");
        container.parent().find('.tp-rightarrow').click(function() {
            if (opt.transition == 0) {
                if (container.data('showus') != undefined && container.data('showus') != -1)
                    opt.next = container.data('showus') - 1;
                else opt.next = opt.next + 1;
                container.data('showus', -1);
                if (opt.next >= opt.slideamount) opt.next = 0;
                if (opt.next < 0) opt.next = 0;
                if (opt.act != opt.next)
                    callingNewSlide(opt, container)
            }
        });
        container.parent().find('.tp-leftarrow').click(function() {
            if (opt.transition == 0) {
                opt.next = opt.next - 1;
                opt.leftarrowpressed = 1;
                if (opt.next < 0) opt.next = opt.slideamount - 1;
                callingNewSlide(opt, container)
            }
        });
        setBulPos(container, opt)
    }
    var createKeyboard = function(container, opt) {
        jQuery(document).keydown(function(e) {
            if (opt.transition == 0 && e.keyCode == 39) {
                if (container.data('showus') != undefined && container.data('showus') != -1)
                    opt.next = container.data('showus') - 1;
                else opt.next = opt.next + 1;
                container.data('showus', -1);
                if (opt.next >= opt.slideamount) opt.next = 0;
                if (opt.next < 0) opt.next = 0;
                if (opt.act != opt.next)
                    callingNewSlide(opt, container)
            }
            if (opt.transition == 0 && e.keyCode == 37) {
                opt.next = opt.next - 1;
                opt.leftarrowpressed = 1;
                if (opt.next < 0) opt.next = opt.slideamount - 1;
                callingNewSlide(opt, container)
            }
        });
        setBulPos(container, opt)
    }
    var swipeAction = function(container, opt) {
        var aps = "vertical";
        if (opt.touchenabled == "on") {
            if (opt.drag_block_vertical == !0)
                aps = "none";
            container.swipe({
                allowPageScroll: aps,
                fingers: opt.swipe_min_touches,
                treshold: opt.swipe_treshold,
                swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                    switch (direction) {
                        case "left":
                            if (opt.transition == 0) {
                                opt.next = opt.next + 1;
                                if (opt.next == opt.slideamount) opt.next = 0;
                                callingNewSlide(opt, container)
                            }
                            break;
                        case "right":
                            if (opt.transition == 0) {
                                opt.next = opt.next - 1;
                                opt.leftarrowpressed = 1;
                                if (opt.next < 0) opt.next = opt.slideamount - 1;
                                callingNewSlide(opt, container)
                            }
                            break;
                        case "up":
                            if (aps == "none")
                                jQuery("html, body").animate({
                                    scrollTop: (container.offset().top + container.height()) + "px"
                                });
                            break;
                        case "down":
                            if (aps == "none")
                                jQuery("html, body").animate({
                                    scrollTop: (container.offset().top - jQuery(window).height()) + "px"
                                });
                            break
                    }
                }
            })
        }
    }
    var hideThumbs = function(container, opt) {
        var bullets = container.parent().find('.tp-bullets');
        var ca = container.parent().find('.tparrows');
        if (bullets == null) {
            container.append('<div class=".tp-bullets"></div>');
            var bullets = container.parent().find('.tp-bullets')
        }
        if (ca == null) {
            container.append('<div class=".tparrows"></div>');
            var ca = container.parent().find('.tparrows')
        }
        container.data('hideThumbs', opt.hideThumbs);
        bullets.addClass("hidebullets");
        ca.addClass("hidearrows");
        if (is_mobile()) {
            try {
                container.hammer().on('touch', function() {
                    container.addClass("hovered");
                    if (opt.onHoverStop == "on")
                        container.trigger('stoptimer');
                    clearTimeout(container.data('hideThumbs'));
                    bullets.removeClass("hidebullets");
                    ca.removeClass("hidearrows")
                });
                container.hammer().on('release', function() {
                    container.removeClass("hovered");
                    container.trigger('starttimer');
                    if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
                        container.data('hideThumbs', setTimeout(function() {
                            bullets.addClass("hidebullets");
                            ca.addClass("hidearrows");
                            container.trigger('starttimer')
                        }, opt.hideNavDelayOnMobile))
                })
            } catch (e) {}
        } else {
            bullets.hover(function() {
                opt.overnav = !0;
                if (opt.onHoverStop == "on")
                    container.trigger('stoptimer');
                bullets.addClass("hovered");
                clearTimeout(container.data('hideThumbs'));
                bullets.removeClass("hidebullets");
                ca.removeClass("hidearrows")
            }, function() {
                opt.overnav = !1;
                container.trigger('starttimer');
                bullets.removeClass("hovered");
                if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
                    container.data('hideThumbs', setTimeout(function() {
                        bullets.addClass("hidebullets");
                        ca.addClass("hidearrows")
                    }, opt.hideThumbs))
            });
            ca.hover(function() {
                opt.overnav = !0;
                if (opt.onHoverStop == "on")
                    container.trigger('stoptimer');
                bullets.addClass("hovered");
                clearTimeout(container.data('hideThumbs'));
                bullets.removeClass("hidebullets");
                ca.removeClass("hidearrows")
            }, function() {
                opt.overnav = !1;
                container.trigger('starttimer');
                bullets.removeClass("hovered")
            });
            container.on('mouseenter', function() {
                container.addClass("hovered");
                if (opt.onHoverStop == "on")
                    container.trigger('stoptimer');
                clearTimeout(container.data('hideThumbs'));
                bullets.removeClass("hidebullets");
                ca.removeClass("hidearrows")
            });
            container.on('mouseleave', function() {
                container.removeClass("hovered");
                container.trigger('starttimer');
                if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
                    container.data('hideThumbs', setTimeout(function() {
                        bullets.addClass("hidebullets");
                        ca.addClass("hidearrows")
                    }, opt.hideThumbs))
            })
        }
    }
    var setBulPos = function(container, opt) {
        var topcont = container.parent();
        var bullets = topcont.find('.tp-bullets');
        if (opt.navigationType == "thumb") {
            bullets.find('.thumb').each(function(i) {
                var thumb = jQuery(this);
                thumb.css({
                    'width': opt.thumbWidth * opt.bw + "px",
                    'height': opt.thumbHeight * opt.bh + "px"
                })
            })
            var bup = bullets.find('.tp-mask');
            bup.width(opt.thumbWidth * opt.thumbAmount * opt.bw);
            bup.height(opt.thumbHeight * opt.bh);
            bup.parent().width(opt.thumbWidth * opt.thumbAmount * opt.bw);
            bup.parent().height(opt.thumbHeight * opt.bh)
        }
        var tl = topcont.find('.tp-leftarrow');
        var tr = topcont.find('.tp-rightarrow');
        if (opt.navigationType == "thumb" && opt.navigationArrows == "nexttobullets") opt.navigationArrows = "solo";
        if (opt.navigationArrows == "nexttobullets") {
            tl.prependTo(bullets).css({
                'float': 'left'
            });
            tr.insertBefore(bullets.find('.tpclear')).css({
                'float': 'left'
            })
        }
        var loff = 0;
        if (opt.forceFullWidth == "on")
            loff = 0 - opt.container.parent().offset().left;
        var gridposX = 0,
            gridposY = 0;
        if (opt.navigationInGrid == "on") {
            gridposX = container.width() > opt.startwidth ? (container.width() - opt.startwidth) / 2 : 0, gridposY = container.height() > opt.startheight ? (container.height() - opt.startheight) / 2 : 0
        }
        if (opt.navigationArrows != "none" && opt.navigationArrows != "nexttobullets") {
            tl.css({
                'position': 'absolute'
            });
            tr.css({
                'position': 'absolute'
            });
            if (opt.soloArrowLeftValign == "center") tl.css({
                'top': '50%',
                'marginTop': (opt.soloArrowLeftVOffset - Math.round(tl.innerHeight() / 2)) + "px"
            });
            if (opt.soloArrowLeftValign == "bottom") tl.css({
                'top': 'auto',
                'bottom': (0 + opt.soloArrowLeftVOffset) + "px"
            });
            if (opt.soloArrowLeftValign == "top") tl.css({
                'bottom': 'auto',
                'top': (0 + opt.soloArrowLeftVOffset) + "px"
            });
            if (opt.soloArrowLeftHalign == "center") tl.css({
                'left': '50%',
                'marginLeft': (loff + opt.soloArrowLeftHOffset - Math.round(tl.innerWidth() / 2)) + "px"
            });
            if (opt.soloArrowLeftHalign == "left") tl.css({
                'left': (gridposX + opt.soloArrowLeftHOffset + loff) + "px"
            });
            if (opt.soloArrowLeftHalign == "right") tl.css({
                'right': (gridposX + opt.soloArrowLeftHOffset - loff) + "px"
            });
            if (opt.soloArrowRightValign == "center") tr.css({
                'top': '50%',
                'marginTop': (opt.soloArrowRightVOffset - Math.round(tr.innerHeight() / 2)) + "px"
            });
            if (opt.soloArrowRightValign == "bottom") tr.css({
                'top': 'auto',
                'bottom': (0 + opt.soloArrowRightVOffset) + "px"
            });
            if (opt.soloArrowRightValign == "top") tr.css({
                'bottom': 'auto',
                'top': (0 + opt.soloArrowRightVOffset) + "px"
            });
            if (opt.soloArrowRightHalign == "center") tr.css({
                'left': '50%',
                'marginLeft': (loff + opt.soloArrowRightHOffset - Math.round(tr.innerWidth() / 2)) + "px"
            });
            if (opt.soloArrowRightHalign == "left") tr.css({
                'left': (gridposX + opt.soloArrowRightHOffset + loff) + "px"
            });
            if (opt.soloArrowRightHalign == "right") tr.css({
                'right': (gridposX + opt.soloArrowRightHOffset - loff) + "px"
            });
            if (tl.position() != null)
                tl.css({
                    'top': Math.round(parseInt(tl.position().top, 0)) + "px"
                });
            if (tr.position() != null)
                tr.css({
                    'top': Math.round(parseInt(tr.position().top, 0)) + "px"
                })
        }
        if (opt.navigationArrows == "none") {
            tl.css({
                'visibility': 'hidden'
            });
            tr.css({
                'visibility': 'hidden'
            })
        }
        if (opt.navigationVAlign == "center") bullets.css({
            'top': '50%',
            'marginTop': (opt.navigationVOffset - Math.round(bullets.innerHeight() / 2)) + "px"
        });
        if (opt.navigationVAlign == "bottom") bullets.css({
            'bottom': (0 + opt.navigationVOffset) + "px"
        });
        if (opt.navigationVAlign == "top") bullets.css({
            'top': (0 + opt.navigationVOffset) + "px"
        });
        if (opt.navigationHAlign == "center") bullets.css({
            'left': '50%',
            'marginLeft': (loff + opt.navigationHOffset - Math.round(bullets.innerWidth() / 2)) + "px"
        });
        if (opt.navigationHAlign == "left") bullets.css({
            'left': (0 + opt.navigationHOffset + loff) + "px"
        });
        if (opt.navigationHAlign == "right") bullets.css({
            'right': (0 + opt.navigationHOffset - loff) + "px"
        })
    }
    var handleSpecialPreviews = function(opt) {
        var container = opt.container;
        opt.beforli = opt.next - 1;
        opt.comingli = opt.next + 1;
        if (opt.beforli < 0) opt.beforli = opt.slideamount - 1;
        if (opt.comingli >= opt.slideamount) opt.comingli = 0;
        var comingli = container.find('>ul:first-child >li:eq(' + opt.comingli + ')'),
            beforli = container.find('>ul:first-child >li:eq(' + opt.beforli + ')'),
            previmgsrc = beforli.find('.defaultimg').attr('src'),
            nextimgsrc = comingli.find('.defaultimg').attr('src');
        if (opt.arr == undefined) {
            opt.arr = container.parent().find('.tparrows'), opt.rar = container.parent().find('.tp-rightarrow'), opt.lar = container.parent().find('.tp-leftarrow'), opt.raimg = opt.rar.find('.tp-arr-imgholder'), opt.laimg = opt.lar.find('.tp-arr-imgholder'), opt.raimg_b = opt.rar.find('.tp-arr-imgholder2'), opt.laimg_b = opt.lar.find('.tp-arr-imgholder2'), opt.ratit = opt.rar.find('.tp-arr-titleholder'), opt.latit = opt.lar.find('.tp-arr-titleholder')
        }
        var arr = opt.arr,
            rar = opt.rar,
            lar = opt.lar,
            raimg = opt.raimg,
            laimg = opt.laimg,
            raimg_b = opt.raimg_b,
            laimg_b = opt.laimg_b,
            ratit = opt.ratit,
            latit = opt.latit;
        if (comingli.data('title') != undefined) ratit.html(comingli.data('title'));
        if (beforli.data('title') != undefined) latit.html(beforli.data('title'));
        if (rar.hasClass("itishovered")) {
            rar.width(ratit.outerWidth(!0) + parseInt(rar.css('minWidth'), 0))
        }
        if (lar.hasClass("itishovered")) {
            lar.width(latit.outerWidth(!0) + parseInt(lar.css('minWidth'), 0))
        }
        if (arr.hasClass("preview2") && !arr.hasClass("hashoveralready")) {
            arr.addClass("hashoveralready");
            if (!is_mobile())
                arr.hover(function() {
                    var arr = jQuery(this),
                        th = arr.find('.tp-arr-titleholder');
                    if (jQuery(window).width() > 767)
                        arr.width(th.outerWidth(!0) + parseInt(arr.css('minWidth'), 0));
                    arr.addClass("itishovered")
                }, function() {
                    var arr = jQuery(this),
                        th = arr.find('.tp-arr-titleholder');
                    arr.css({
                        width: parseInt(arr.css('minWidth'), 0)
                    });
                    arr.removeClass("itishovered")
                });
            else {
                var arr = jQuery(this),
                    th = arr.find('.tp-arr-titleholder');
                th.addClass("alwayshidden");
                punchgs.TweenLite.set(th, {
                    autoAlpha: 0
                })
            }
        }
        if (beforli.data('thumb') != undefined) previmgsrc = beforli.data('thumb');
        if (comingli.data('thumb') != undefined) nextimgsrc = comingli.data('thumb')
        if (!arr.hasClass("preview4")) {
            punchgs.TweenLite.to(raimg, 0.5, {
                autoAlpha: 0,
                onComplete: function() {
                    raimg.css({
                        'backgroundImage': 'url(' + nextimgsrc + ')'
                    });
                    laimg.css({
                        'backgroundImage': 'url(' + previmgsrc + ')'
                    })
                }
            });
            punchgs.TweenLite.to(laimg, 0.5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(raimg, 0.5, {
                        autoAlpha: 1,
                        delay: 0.2
                    });
                    punchgs.TweenLite.to(laimg, 0.5, {
                        autoAlpha: 1,
                        delay: 0.2
                    })
                }
            })
        } else {
            raimg_b.css({
                'backgroundImage': 'url(' + nextimgsrc + ')'
            });
            laimg_b.css({
                'backgroundImage': 'url(' + previmgsrc + ')'
            });
            punchgs.TweenLite.fromTo(raimg_b, 0.8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -raimg.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    raimg.css({
                        'backgroundImage': 'url(' + nextimgsrc + ')'
                    });
                    punchgs.TweenLite.set(raimg_b, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(laimg_b, 0.8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: raimg.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    laimg.css({
                        'backgroundImage': 'url(' + previmgsrc + ')'
                    });
                    punchgs.TweenLite.set(laimg_b, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(raimg, 0.8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -raimg.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(raimg, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(laimg, 0.8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: raimg.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(laimg, {
                        x: 0
                    })
                }
            })
        }
        if (rar.hasClass("preview4") && !rar.hasClass("hashoveralready")) {
            rar.addClass("hashoveralready");
            rar.hover(function() {
                var iw = jQuery(this).find('.tp-arr-iwrapper');
                var all = jQuery(this).find('.tp-arr-allwrapper');
                punchgs.TweenLite.fromTo(iw, 0.4, {
                    x: iw.width()
                }, {
                    x: 0,
                    delay: 0.3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(all, 0.2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var iw = jQuery(this).find('.tp-arr-iwrapper');
                var all = jQuery(this).find('.tp-arr-allwrapper');
                punchgs.TweenLite.to(iw, 0.4, {
                    x: iw.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: 0.2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(all, 0.2, {
                    delay: 0.6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            });
            lar.hover(function() {
                var iw = jQuery(this).find('.tp-arr-iwrapper');
                var all = jQuery(this).find('.tp-arr-allwrapper');
                punchgs.TweenLite.fromTo(iw, 0.4, {
                    x: (0 - iw.width())
                }, {
                    x: 0,
                    delay: 0.3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(all, 0.2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var iw = jQuery(this).find('.tp-arr-iwrapper');
                var all = jQuery(this).find('.tp-arr-allwrapper');
                punchgs.TweenLite.to(iw, 0.4, {
                    x: (0 - iw.width()),
                    ease: punchgs.Power3.easeOut,
                    delay: 0.2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(all, 0.2, {
                    delay: 0.6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            })
        }
    }
    var setSize = function(img, opt) {
        opt.container.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css({
            'height': opt.container.height()
        });
        opt.container.closest('.rev_slider_wrapper').css({
            'height': opt.container.height()
        });
        opt.width = parseInt(opt.container.width(), 0);
        opt.height = parseInt(opt.container.height(), 0);
        opt.bw = (opt.width / opt.startwidth);
        opt.bh = (opt.height / opt.startheight);
        if (opt.bh > opt.bw) opt.bh = opt.bw;
        if (opt.bh < opt.bw) opt.bw = opt.bh;
        if (opt.bw < opt.bh) opt.bh = opt.bw;
        if (opt.bh > 1) {
            opt.bw = 1;
            opt.bh = 1
        }
        if (opt.bw > 1) {
            opt.bw = 1;
            opt.bh = 1
        }
        opt.height = Math.round(opt.startheight * (opt.width / opt.startwidth));
        if (opt.height > opt.startheight && opt.autoHeight != "on") opt.height = opt.startheight;
        if (opt.fullScreen == "on") {
            opt.height = opt.bw * opt.startheight;
            var cow = opt.container.parent().width();
            var coh = jQuery(window).height();
            if (opt.fullScreenOffsetContainer != undefined) {
                try {
                    var offcontainers = opt.fullScreenOffsetContainer.split(",");
                    jQuery.each(offcontainers, function(index, searchedcont) {
                        coh = coh - jQuery(searchedcont).outerHeight(!0);
                        if (coh < opt.minFullScreenHeight) coh = opt.minFullScreenHeight
                    })
                } catch (e) {}
                try {
                    if (opt.fullScreenOffset.split("%").length > 1 && opt.fullScreenOffset != undefined && opt.fullScreenOffset.length > 0) {
                        coh = coh - (jQuery(window).height() * parseInt(opt.fullScreenOffset, 0) / 100)
                    } else {
                        if (opt.fullScreenOffset != undefined && opt.fullScreenOffset.length > 0)
                            coh = coh - parseInt(opt.fullScreenOffset, 0)
                    }
                    if (coh < opt.minFullScreenHeight) coh = opt.minFullScreenHeight
                } catch (e) {}
            }
            opt.container.parent().height(coh);
            opt.container.closest('.rev_slider_wrapper').height(coh);
            opt.container.css({
                'height': '100%'
            });
            opt.height = coh;
            if (opt.minHeight != undefined && opt.height < opt.minHeight)
                opt.height = opt.minHeight
        } else {
            if (opt.minHeight != undefined && opt.height < opt.minHeight)
                opt.height = opt.minHeight;
            opt.container.height(opt.height)
        }
        opt.slotw = Math.ceil(opt.width / opt.slots);
        if (opt.fullScreen == "on")
            opt.sloth = Math.ceil(jQuery(window).height() / opt.slots);
        else opt.sloth = Math.ceil(opt.height / opt.slots);
        if (opt.autoHeight == "on")
            opt.sloth = Math.ceil(img.height() / opt.slots)
    }
    var prepareSlides = function(container, opt) {
        container.find('.tp-caption').each(function() {
            jQuery(this).addClass(jQuery(this).data('transition'));
            jQuery(this).addClass('start')
        });
        container.find('>ul:first').css({
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            maxHeight: container.parent().css('maxHeight')
        });
        if (opt.autoHeight == "on") {
            container.find('>ul:first').css({
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                maxHeight: "none"
            });
            container.css({
                'maxHeight': 'none'
            });
            container.parent().css({
                'maxHeight': 'none'
            })
        }
        container.find('>ul:first >li').each(function(j) {
            var li = jQuery(this);
            li.css({
                'width': '100%',
                'height': '100%',
                'overflow': 'hidden'
            });
            if (li.data('link') != undefined) {
                var link = li.data('link');
                var target = "_self";
                var zindex = 60;
                if (li.data('slideindex') == "back") zindex = 0;
                var linktoslide = li.data('linktoslide');
                if (li.data('target') != undefined) target = li.data('target');
                if (link == "slide") {
                    li.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + zindex + ';" data-x="center" data-y="center" data-linktoslide="' + linktoslide + '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>')
                } else {
                    linktoslide = "no";
                    li.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + zindex + ';" data-x="center" data-y="center" data-linktoslide="' + linktoslide + '" data-start="0"><a style="width:100%;height:100%;display:block" target="' + target + '" href="' + link + '"><span style="width:100%;height:100%;display:block"></span></a></div>')
                }
            }
        });
        container.parent().css({
            'overflow': 'visible'
        });
        container.find('>ul:first >li >img').each(function(j) {
            var img = jQuery(this);
            img.addClass('defaultimg');
            if (img.data('lazyload') != undefined && img.data('lazydone') != 1) {} else {
                setSize(img, opt)
            }
            img.wrap('<div class="slotholder" style="width:100%;height:100%;"' + 'data-duration="' + img.data('duration') + '"' + 'data-zoomstart="' + img.data("zoomstart") + '"' + 'data-zoomend="' + img.data("zoomend") + '"' + 'data-rotationstart="' + img.data("rotationstart") + '"' + 'data-rotationend="' + img.data("rotationend") + '"' + 'data-ease="' + img.data("ease") + '"' + 'data-duration="' + img.data("duration") + '"' + 'data-bgpositionend="' + img.data("bgpositionend") + '"' + 'data-bgposition="' + img.data("bgposition") + '"' + 'data-duration="' + img.data("duration") + '"' + 'data-kenburns="' + img.data("kenburns") + '"' + 'data-easeme="' + img.data("ease") + '"' + 'data-bgfit="' + img.data("bgfit") + '"' + 'data-bgfitend="' + img.data("bgfitend") + '"' + 'data-owidth="' + img.data("owidth") + '"' + 'data-oheight="' + img.data("oheight") + '"' + '></div>');
            if (opt.dottedOverlay != "none" && opt.dottedOverlay != undefined)
                img.closest('.slotholder').append('<div class="tp-dottedoverlay ' + opt.dottedOverlay + '"></div>');
            var src = img.attr('src'),
                ll = img.data('lazyload'),
                bgfit = img.data('bgfit'),
                bgrepeat = img.data('bgrepeat'),
                bgposition = img.data('bgposition');
            if (bgfit == undefined) bgfit = "cover";
            if (bgrepeat == undefined) bgrepeat = "no-repeat";
            if (bgposition == undefined) bgposition = "center center"
            var pari = img.closest('.slotholder');
            img.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + img.data('lazyload') + '" data-bgfit="' + bgfit + '"data-bgposition="' + bgposition + '" data-bgrepeat="' + bgrepeat + '" data-lazydone="' + img.data('lazydone') + '" src="' + src + '" data-src="' + src + '" style="background-color:' + img.css("backgroundColor") + ';background-repeat:' + bgrepeat + ';background-image:url(' + src + ');background-size:' + bgfit + ';background-position:' + bgposition + ';width:100%;height:100%;"></div>');
            if (isIE(8)) {
                pari.find('.tp-bgimg').css({
                    backgroundImage: "none",
                    'background-image': 'none'
                });
                pari.find('.tp-bgimg').append('<img class="ieeightfallbackimage defaultimg" src="' + src + '" style="width:100%">')
            }
            img.css({
                'opacity': 0
            });
            img.data('li-id', j)
        })
    }
    var prepareOneSlideSlot = function(slotholder, opt, visible, vorh) {
        var sh = slotholder,
            img = sh.find('.defaultimg'),
            scalestart = sh.data('zoomstart'),
            rotatestart = sh.data('rotationstart');
        if (img.data('currotate') != undefined)
            rotatestart = img.data('currotate');
        if (img.data('curscale') != undefined)
            scalestart = img.data('curscale');
        setSize(img, opt)
        var src = img.data('src'),
            bgcolor = img.css('background-color'),
            w = opt.width,
            h = opt.height,
            fulloff = img.data("fxof");
        if (opt.autoHeight == "on") h = opt.container.height();
        if (fulloff == undefined) fulloff = 0;
        fullyoff = 0;
        var off = 0,
            bgfit = img.data('bgfit'),
            bgrepeat = img.data('bgrepeat'),
            bgposition = img.data('bgposition');
        if (bgfit == undefined) bgfit = "cover";
        if (bgrepeat == undefined) bgrepeat = "no-repeat";
        if (bgposition == undefined) bgposition = "center center";
        if (isIE(8)) {
            sh.data('kenburns', "off");
            var imgsrc = src;
            src = ""
        }
        if (opt.panZoomDisableOnMobile == "on" && is_mobile()) {
            sh.data('kenburns', "off")
        }
        if (sh.data('kenburns') == "on") {
            bgfit = scalestart;
            if (bgfit.toString().length < 4)
                bgfit = calculateKenBurnScales(bgfit, sh, opt)
        }
        if (vorh == "horizontal") {
            if (!visible) var off = 0 - opt.slotw;
            for (var i = 0; i < opt.slots; i++) {
                sh.append('<div class="slot" style="position:absolute;' + 'top:' + (0 + fullyoff) + 'px;' + 'left:' + (fulloff + (i * opt.slotw)) + 'px;' + 'overflow:hidden;width:' + (opt.slotw + 0.6) + 'px;' + 'height:' + h + 'px">' + '<div class="slotslide" style="position:absolute;' + 'top:0px;left:' + off + 'px;' + 'width:' + (opt.slotw + 0.6) + 'px;' + 'height:' + h + 'px;overflow:hidden;">' + '<div style="background-color:' + bgcolor + ';' + 'position:absolute;top:0px;' + 'left:' + (0 - (i * opt.slotw)) + 'px;' + 'width:' + w + 'px;height:' + h + 'px;' + 'background-image:url(' + src + ');' + 'background-repeat:' + bgrepeat + ';' + 'background-size:' + bgfit + ';background-position:' + bgposition + ';">' + '</div></div></div>');
                if (scalestart != undefined && rotatestart != undefined)
                    punchgs.TweenLite.set(sh.find('.slot').last(), {
                        rotationZ: rotatestart
                    });
                if (isIE(8)) {
                    sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="' + imgsrc + '" style="width:100%;height:auto">');
                    ieimgposition(sh, opt)
                }
            }
        } else {
            if (!visible) var off = 0 - opt.sloth;
            for (var i = 0; i < opt.slots + 2; i++) {
                sh.append('<div class="slot" style="position:absolute;' + 'top:' + (fullyoff + (i * opt.sloth)) + 'px;' + 'left:' + (fulloff) + 'px;' + 'overflow:hidden;' + 'width:' + w + 'px;' + 'height:' + (opt.sloth) + 'px">' + '<div class="slotslide" style="position:absolute;' + 'top:' + (off) + 'px;' + 'left:0px;width:' + w + 'px;' + 'height:' + opt.sloth + 'px;' + 'overflow:hidden;">' + '<div style="background-color:' + bgcolor + ';' + 'position:absolute;' + 'top:' + (0 - (i * opt.sloth)) + 'px;' + 'left:0px;' + 'width:' + w + 'px;height:' + h + 'px;' + 'background-image:url(' + src + ');' + 'background-repeat:' + bgrepeat + ';' + 'background-size:' + bgfit + ';background-position:' + bgposition + ';">' + '</div></div></div>');
                if (scalestart != undefined && rotatestart != undefined)
                    punchgs.TweenLite.set(sh.find('.slot').last(), {
                        rotationZ: rotatestart
                    });
                if (isIE(8)) {
                    sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="' + imgsrc + '" style="width:100%;height:auto;">');
                    ieimgposition(sh, opt)
                }
            }
        }
    }
    var prepareOneSlideBox = function(slotholder, opt, visible) {
        var sh = slotholder;
        var img = sh.find('.defaultimg');
        var scalestart = sh.data('zoomstart');
        var rotatestart = sh.data('rotationstart');
        if (img.data('currotate') != undefined)
            rotatestart = img.data('currotate');
        if (img.data('curscale') != undefined)
            scalestart = img.data('curscale') * 100;
        setSize(img, opt)
        var src = img.data('src');
        var bgcolor = img.css('backgroundColor');
        var w = opt.width;
        var h = opt.height;
        if (opt.autoHeight == "on")
            h = opt.container.height();
        var fulloff = img.data("fxof");
        if (fulloff == undefined) fulloff = 0;
        fullyoff = 0;
        var off = 0;
        if (isIE(8)) {
            var imgsrc = src;
            src = ""
        }
        var basicsize = 0;
        if (opt.sloth > opt.slotw)
            basicsize = opt.sloth
        else basicsize = opt.slotw;
        if (!visible) {
            var off = 0 - basicsize
        }
        opt.slotw = basicsize;
        opt.sloth = basicsize;
        var x = 0;
        var y = 0;
        var bgfit = img.data('bgfit');
        var bgrepeat = img.data('bgrepeat');
        var bgposition = img.data('bgposition');
        if (bgfit == undefined) bgfit = "cover";
        if (bgrepeat == undefined) bgrepeat = "no-repeat";
        if (bgposition == undefined) bgposition = "center center";
        if (sh.data('kenburns') == "on") {
            bgfit = scalestart;
            if (bgfit.toString().length < 4)
                bgfit = calculateKenBurnScales(bgfit, sh, opt)
        }
        for (var j = 0; j < opt.slots; j++) {
            y = 0;
            for (var i = 0; i < opt.slots; i++) {
                sh.append('<div class="slot" ' + 'style="position:absolute;' + 'top:' + (fullyoff + y) + 'px;' + 'left:' + (fulloff + x) + 'px;' + 'width:' + basicsize + 'px;' + 'height:' + basicsize + 'px;' + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + x + '" data-y="' + y + '" ' + 'style="position:absolute;' + 'top:' + (0) + 'px;' + 'left:' + (0) + 'px;' + 'width:' + basicsize + 'px;' + 'height:' + basicsize + 'px;' + 'overflow:hidden;">' + '<div style="position:absolute;' + 'top:' + (0 - y) + 'px;' + 'left:' + (0 - x) + 'px;' + 'width:' + w + 'px;' + 'height:' + h + 'px;' + 'background-color:' + bgcolor + ';' + 'background-image:url(' + src + ');' + 'background-repeat:' + bgrepeat + ';' + 'background-size:' + bgfit + ';background-position:' + bgposition + ';">' + '</div></div></div>');
                y = y + basicsize;
                if (isIE(8)) {
                    sh.find('.slot ').last().find('.slotslide').append('<img src="' + imgsrc + '">');
                    ieimgposition(sh, opt)
                }
                if (scalestart != undefined && rotatestart != undefined)
                    punchgs.TweenLite.set(sh.find('.slot').last(), {
                        rotationZ: rotatestart
                    })
            }
            x = x + basicsize
        }
    }
    var ieimgposition = function(nextsh, opt) {
        if (isIE(8)) {
            var ie8img = nextsh.find('.ieeightfallbackimage');
            var ie8w = ie8img.width(),
                ie8h = ie8img.height();
            if (opt.startwidth / opt.startheight < nextsh.data('owidth') / nextsh.data('oheight'))
                ie8img.css({
                    width: "auto",
                    height: "100%"
                })
            else ie8img.css({
                width: "100%",
                height: "auto"
            })
            setTimeout(function() {
                var ie8w = ie8img.width(),
                    ie8h = ie8img.height();
                if (nextsh.data('bgposition') == "center center")
                    ie8img.css({
                        position: "absolute",
                        top: opt.height / 2 - ie8h / 2 + "px",
                        left: opt.width / 2 - ie8w / 2 + "px"
                    });
                if (nextsh.data('bgposition') == "center top" || nextsh.data('bgposition') == "top center")
                    ie8img.css({
                        position: "absolute",
                        top: "0px",
                        left: opt.width / 2 - ie8w / 2 + "px"
                    });
                if (nextsh.data('bgposition') == "center bottom" || nextsh.data('bgposition') == "bottom center")
                    ie8img.css({
                        position: "absolute",
                        bottom: "0px",
                        left: opt.width / 2 - ie8w / 2 + "px"
                    });
                if (nextsh.data('bgposition') == "right top" || nextsh.data('bgposition') == "top right")
                    ie8img.css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    });
                if (nextsh.data('bgposition') == "right bottom" || nextsh.data('bgposition') == "bottom right")
                    ie8img.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    });
                if (nextsh.data('bgposition') == "right center" || nextsh.data('bgposition') == "center right")
                    ie8img.css({
                        position: "absolute",
                        top: opt.height / 2 - ie8h / 2 + "px",
                        right: "0px"
                    });
                if (nextsh.data('bgposition') == "left bottom" || nextsh.data('bgposition') == "bottom left")
                    ie8img.css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    });
                if (nextsh.data('bgposition') == "left center" || nextsh.data('bgposition') == "center left")
                    ie8img.css({
                        position: "absolute",
                        top: opt.height / 2 - ie8h / 2 + "px",
                        left: "0px"
                    })
            }, 20)
        }
    }
    var removeSlots = function(container, opt, where) {
        where.find('.slot').each(function() {
            jQuery(this).remove()
        });
        opt.transition = 0
    }
    var loadAllPrepared = function(container, alreadyinload) {
        container.find('img, .defaultimg').each(function(i) {
            var img = jQuery(this);
            if (img.data('lazyload') != img.attr('src') && alreadyinload < 3 && img.data('lazyload') != undefined && img.data('lazyload') != 'undefined') {
                if (img.data('lazyload') != undefined && img.data('lazyload') != 'undefined') {
                    img.attr('src', img.data('lazyload'));
                    var limg = new Image();
                    limg.onload = function(i) {
                        img.data('lazydone', 1);
                        if (img.hasClass("defaultimg")) setDefImg(img, limg)
                    }
                    limg.error = function() {
                        img.data('lazydone', 1)
                    }
                    limg.src = img.attr('src');
                    if (limg.complete) {
                        if (img.hasClass("defaultimg")) setDefImg(img, limg);
                        img.data('lazydone', 1)
                    }
                }
            } else {
                if ((img.data('lazyload') === undefined || img.data('lazyload') === 'undefined') && img.data('lazydone') != 1) {
                    var limg = new Image();
                    limg.onload = function() {
                        if (img.hasClass("defaultimg")) setDefImg(img, limg);
                        img.data('lazydone', 1)
                    }
                    limg.error = function() {
                        img.data('lazydone', 1)
                    }
                    if (img.attr('src') != undefined && img.attr('src') != 'undefined') {
                        limg.src = img.attr('src')
                    } else limg.src = img.data('src');
                    if (limg.complete) {
                        if (img.hasClass("defaultimg")) {
                            setDefImg(img, limg)
                        }
                        img.data('lazydone', 1)
                    }
                }
            }
        })
    }
    var setDefImg = function(img, limg) {
        var nextli = img.closest('li');
        var ww = limg.width;
        var hh = limg.height;
        nextli.data('owidth', ww);
        nextli.data('oheight', hh);
        nextli.find('.slotholder').data('owidth', ww);
        nextli.find('.slotholder').data('oheight', hh);
        nextli.data('loadeddone', 1)
    }
    var waitForLoads = function(element, call, opt) {
        loadAllPrepared(element, 0);
        var inter = setInterval(function() {
            opt.bannertimeronpause = !0;
            opt.container.trigger('stoptimer');
            opt.cd = 0;
            var found = 0;
            element.find('img, .defaultimg').each(function(i) {
                if (jQuery(this).data('lazydone') != 1) {
                    found++
                }
            });
            if (found > 0)
                loadAllPrepared(element, found);
            else {
                clearInterval(inter);
                if (call != undefined)
                    call()
            }
        }, 100)
    }
    var swapSlide = function(container, opt) {
        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')')
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)')
        }
        opt.lastslide = opt.act;
        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')');
        var defimg = nextli.find('.defaultimg');
        opt.bannertimeronpause = !0;
        container.trigger('stoptimer');
        opt.cd = 0;
        if (defimg.data('lazyload') != undefined && defimg.data('lazyload') != "undefined" && defimg.data('lazydone') != 1) {
            if (!isIE(8))
                defimg.css({
                    backgroundImage: 'url("' + nextli.find('.defaultimg').data('lazyload') + '")'
                });
            else {
                defimg.attr('src', nextli.find('.defaultimg').data('lazyload'))
            }
            defimg.data('src', nextli.find('.defaultimg').data('lazyload'));
            defimg.data('lazydone', 1);
            defimg.data('orgw', 0);
            nextli.data('loadeddone', 1);
            container.find('.tp-loader').css({
                display: "block"
            });
            waitForLoads(container.find('.tp-static-layers'), function() {
                waitForLoads(nextli, function() {
                    var nextsh = nextli.find('.slotholder');
                    if (nextsh.data('kenburns') == "on") {
                        var waitfordimension = setInterval(function() {
                            var ow = nextsh.data('owidth');
                            if (ow >= 0) {
                                clearInterval(waitfordimension);
                                swapSlideCall(opt, defimg, container)
                            }
                        }, 10)
                    } else swapSlideCall(opt, defimg, container)
                }, opt)
            }, opt)
        } else {
            if (nextli.data('loadeddone') === undefined) {
                nextli.data('loadeddone', 1);
                waitForLoads(nextli, function() {
                    swapSlideCall(opt, defimg, container)
                }, opt)
            } else swapSlideCall(opt, defimg, container)
        }
    }
    var swapSlideCall = function(opt, defimg, container) {
        opt.bannertimeronpause = !1;
        opt.cd = 0;
        container.trigger('nulltimer');
        container.find('.tp-loader').css({
            display: "none"
        });
        setSize(defimg, opt);
        setBulPos(container, opt);
        setSize(defimg, opt);
        swapSlideProgress(container, opt)
    }
    var swapSlideProgress = function(container, opt) {
        container.trigger('revolution.slide.onbeforeswap');
        opt.transition = 1;
        opt.videoplaying = !1;
        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')')
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)')
        }
        opt.lastslide = opt.act;
        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')');
        setTimeout(function() {
            handleSpecialPreviews(opt)
        }, 200);
        var actsh = actli.find('.slotholder');
        var nextsh = nextli.find('.slotholder');
        if (nextsh.data('kenburns') == "on" || actsh.data('kenburns') == "on") {
            stopKenBurn(container, opt);
            container.find('.kenburnimg').remove()
        }
        if (nextli.data('delay') != undefined) {
            opt.cd = 0;
            opt.delay = nextli.data('delay')
        } else {
            opt.delay = opt.origcd
        }
        if (opt.firststart == 1)
            punchgs.TweenLite.set(actli, {
                autoAlpha: 0
            });
        punchgs.TweenLite.set(actli, {
            zIndex: 18
        });
        punchgs.TweenLite.set(nextli, {
            autoAlpha: 0,
            zIndex: 20
        });
        var removetime = 0;
        if (actli.index() != nextli.index() && opt.firststart != 1) {
            removetime = removeTheCaptions(actli, opt)
        }
        if (actli.data('saveperformance') != "on") removetime = 0;
        setTimeout(function() {
            container.trigger('restarttimer');
            slideAnimation(container, opt, nextli, actli, actsh, nextsh)
        }, removetime)
    }
    var slideAnimation = function(container, opt, nextli, actli, actsh, nextsh) {
        if (nextli.data('differentissplayed') == 'prepared') {
            nextli.data('differentissplayed', 'done');
            nextli.data('transition', nextli.data('savedtransition'));
            nextli.data('slotamount', nextli.data('savedslotamount'));
            nextli.data('masterspeed', nextli.data('savedmasterspeed'))
        }
        if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') != "done") {
            nextli.data('savedtransition', nextli.data('transition'));
            nextli.data('savedslotamount', nextli.data('slotamount'));
            nextli.data('savedmasterspeed', nextli.data('masterspeed'));
            nextli.data('transition', nextli.data('fstransition'));
            nextli.data('slotamount', nextli.data('fsslotamount'));
            nextli.data('masterspeed', nextli.data('fsmasterspeed'));
            nextli.data('differentissplayed', 'prepared')
        }
        container.find('.active-revslide').removeClass('.active-revslide');
        nextli.addClass("active-revslide");
        if (nextli.data('transition') == undefined) nextli.data('transition', "random");
        var nexttrans = 0,
            transtext = nextli.data('transition').split(","),
            curtransid = nextli.data('nexttransid') == undefined ? -1 : nextli.data('nexttransid');
        if (nextli.data('randomtransition') == "on")
            curtransid = Math.round(Math.random() * transtext.length);
        else curtransid = curtransid + 1;
        if (curtransid == transtext.length) curtransid = 0;
        nextli.data('nexttransid', curtransid);
        var comingtransition = transtext[curtransid];
        if (opt.ie) {
            if (comingtransition == "boxfade") comingtransition = "boxslide";
            if (comingtransition == "slotfade-vertical") comingtransition = "slotzoom-vertical";
            if (comingtransition == "slotfade-horizontal") comingtransition = "slotzoom-horizontal"
        }
        if (isIE(8)) {
            comingtransition = 11
        }
        var specials = 0;
        if (opt.parallax == "scroll" && opt.parallaxFirstGo == undefined) {
            opt.parallaxFirstGo = !0;
            scrollParallax(container, opt);
            setTimeout(function() {
                scrollParallax(container, opt)
            }, 210);
            setTimeout(function() {
                scrollParallax(container, opt)
            }, 420)
        }
        if (comingtransition == "boxslide" || comingtransition == "boxfade" || comingtransition == "papercut" || comingtransition == 0 || comingtransition == 1 || comingtransition == 16)
            comingtransition = 9;
        if (comingtransition == "slidehorizontal") {
            comingtransition = "slideleft"
            if (opt.leftarrowpressed == 1)
                comingtransition = "slideright"
        }
        if (comingtransition == "slidevertical") {
            comingtransition = "slideup"
            if (opt.leftarrowpressed == 1)
                comingtransition = "slidedown"
        }
        if (comingtransition == "parallaxhorizontal") {
            comingtransition = "parallaxtoleft"
            if (opt.leftarrowpressed == 1)
                comingtransition = "parallaxtoright"
        }
        if (comingtransition == "parallaxvertical") {
            comingtransition = "parallaxtotop"
            if (opt.leftarrowpressed == 1)
                comingtransition = "parallaxtobottom"
        }
        var transitionsArray = [
            ['boxslide', 0, 1, 10, 0, 'box', !1, null, 0],
            ['boxfade', 1, 0, 10, 0, 'box', !1, null, 1],
            ['slotslide-horizontal', 2, 0, 0, 200, 'horizontal', !0, !1, 2],
            ['slotslide-vertical', 3, 0, 0, 200, 'vertical', !0, !1, 3],
            ['curtain-1', 4, 3, 0, 0, 'horizontal', !0, !0, 4],
            ['curtain-2', 5, 3, 0, 0, 'horizontal', !0, !0, 5],
            ['curtain-3', 6, 3, 25, 0, 'horizontal', !0, !0, 6],
            ['slotzoom-horizontal', 7, 0, 0, 400, 'horizontal', !0, !0, 7],
            ['slotzoom-vertical', 8, 0, 0, 0, 'vertical', !0, !0, 8],
            ['slotfade-horizontal', 9, 0, 0, 500, 'horizontal', !0, null, 9],
            ['slotfade-vertical', 10, 0, 0, 500, 'vertical', !0, null, 10],
            ['fade', 11, 0, 1, 300, 'horizontal', !0, null, 11],
            ['slideleft', 12, 0, 1, 0, 'horizontal', !0, !0, 12],
            ['slideup', 13, 0, 1, 0, 'horizontal', !0, !0, 13],
            ['slidedown', 14, 0, 1, 0, 'horizontal', !0, !0, 14],
            ['slideright', 15, 0, 1, 0, 'horizontal', !0, !0, 15],
            ['papercut', 16, 0, 0, 600, '', null, null, 16],
            ['3dcurtain-horizontal', 17, 0, 20, 100, 'vertical', !1, !0, 17],
            ['3dcurtain-vertical', 18, 0, 10, 100, 'horizontal', !1, !0, 18],
            ['cubic', 19, 0, 20, 600, 'horizontal', !1, !0, 19],
            ['cube', 19, 0, 20, 600, 'horizontal', !1, !0, 20],
            ['flyin', 20, 0, 4, 600, 'vertical', !1, !0, 21],
            ['turnoff', 21, 0, 1, 1600, 'horizontal', !1, !0, 22],
            ['incube', 22, 0, 20, 200, 'horizontal', !1, !0, 23],
            ['cubic-horizontal', 23, 0, 20, 500, 'vertical', !1, !0, 24],
            ['cube-horizontal', 23, 0, 20, 500, 'vertical', !1, !0, 25],
            ['incube-horizontal', 24, 0, 20, 500, 'vertical', !1, !0, 26],
            ['turnoff-vertical', 25, 0, 1, 200, 'horizontal', !1, !0, 27],
            ['fadefromright', 12, 1, 1, 0, 'horizontal', !0, !0, 28],
            ['fadefromleft', 15, 1, 1, 0, 'horizontal', !0, !0, 29],
            ['fadefromtop', 14, 1, 1, 0, 'horizontal', !0, !0, 30],
            ['fadefrombottom', 13, 1, 1, 0, 'horizontal', !0, !0, 31],
            ['fadetoleftfadefromright', 12, 2, 1, 0, 'horizontal', !0, !0, 32],
            ['fadetorightfadetoleft', 15, 2, 1, 0, 'horizontal', !0, !0, 33],
            ['fadetobottomfadefromtop', 14, 2, 1, 0, 'horizontal', !0, !0, 34],
            ['fadetotopfadefrombottom', 13, 2, 1, 0, 'horizontal', !0, !0, 35],
            ['parallaxtoright', 12, 3, 1, 0, 'horizontal', !0, !0, 36],
            ['parallaxtoleft', 15, 3, 1, 0, 'horizontal', !0, !0, 37],
            ['parallaxtotop', 14, 3, 1, 0, 'horizontal', !0, !0, 38],
            ['parallaxtobottom', 13, 3, 1, 0, 'horizontal', !0, !0, 39],
            ['scaledownfromright', 12, 4, 1, 0, 'horizontal', !0, !0, 40],
            ['scaledownfromleft', 15, 4, 1, 0, 'horizontal', !0, !0, 41],
            ['scaledownfromtop', 14, 4, 1, 0, 'horizontal', !0, !0, 42],
            ['scaledownfrombottom', 13, 4, 1, 0, 'horizontal', !0, !0, 43],
            ['zoomout', 13, 5, 1, 0, 'horizontal', !0, !0, 44],
            ['zoomin', 13, 6, 1, 0, 'horizontal', !0, !0, 45],
            ['notransition', 26, 0, 1, 0, 'horizontal', !0, null, 46]
        ];
        var flatTransitions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        var premiumTransitions = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
        var nexttrans = 0;
        var specials = 1;
        var STAindex = 0;
        var indexcounter = 0;
        var STA = new Array;
        if (nextsh.data('kenburns') == "on") {
            if (comingtransition == "boxslide" || comingtransition == 0 || comingtransition == "boxfade" || comingtransition == 1 || comingtransition == "papercut" || comingtransition == 16)
                comingtransition = 11;
            startKenBurn(container, opt, !0, !0)
        }
        if (comingtransition == "random") {
            comingtransition = Math.round(Math.random() * transitionsArray.length - 1);
            if (comingtransition > transitionsArray.length - 1) comingtransition = transitionsArray.length - 1
        }
        if (comingtransition == "random-static") {
            comingtransition = Math.round(Math.random() * flatTransitions.length - 1);
            if (comingtransition > flatTransitions.length - 1) comingtransition = flatTransitions.length - 1;
            comingtransition = flatTransitions[comingtransition]
        }
        if (comingtransition == "random-premium") {
            comingtransition = Math.round(Math.random() * premiumTransitions.length - 1);
            if (comingtransition > premiumTransitions.length - 1) comingtransition = premiumTransitions.length - 1;
            comingtransition = premiumTransitions[comingtransition]
        }
        var problematicTransitions = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        if (opt.isJoomla == !0 && window.MooTools != undefined && problematicTransitions.indexOf(comingtransition) != -1) {
            var newTransIndex = Math.round(Math.random() * (premiumTransitions.length - 2)) + 1;
            if (newTransIndex > premiumTransitions.length - 1)
                newTransIndex = premiumTransitions.length - 1;
            if (newTransIndex == 0)
                newTransIndex = 1;
            comingtransition = premiumTransitions[newTransIndex]
        }

        function findTransition() {
            jQuery.each(transitionsArray, function(inde, trans) {
                if (trans[0] == comingtransition || trans[8] == comingtransition) {
                    nexttrans = trans[1];
                    specials = trans[2];
                    STAindex = indexcounter
                }
                indexcounter = indexcounter + 1
            })
        }
        findTransition();
        if (isIE(8) && nexttrans > 15 && nexttrans < 28) {
            comingtransition = Math.round(Math.random() * flatTransitions.length - 1);
            if (comingtransition > flatTransitions.length - 1) comingtransition = flatTransitions.length - 1;
            comingtransition = flatTransitions[comingtransition];
            indexcounter = 0;
            findTransition()
        }
        var direction = -1;
        if (opt.leftarrowpressed == 1 || opt.act > opt.next) direction = 1;
        opt.leftarrowpressed = 0;
        if (nexttrans > 26) nexttrans = 26;
        if (nexttrans < 0) nexttrans = 0;
        var masterspeed = 300;
        if (nextli.data('masterspeed') != undefined && nextli.data('masterspeed') > 99 && nextli.data('masterspeed') < 4001)
            masterspeed = nextli.data('masterspeed');
        STA = transitionsArray[STAindex];
        container.parent().find(".bullet").each(function() {
            var bul = jQuery(this);
            bul.removeClass("selected");
            if (opt.navigationArrows == "withbullet" || opt.navigationArrows == "nexttobullets") {
                if (bul.index() - 1 == opt.next) bul.addClass('selected')
            } else {
                if (bul.index() == opt.next) bul.addClass('selected')
            }
        });
        var mtl = new punchgs.TimelineLite({
            onComplete: function() {
                letItFree(container, opt, nextsh, actsh, nextli, actli, mtl)
            }
        });
        mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'), {
            opacity: 0
        }));
        mtl.pause();
        if (nextli.data('slotamount') == undefined || nextli.data('slotamount') < 1) {
            opt.slots = Math.round(Math.random() * 12 + 4);
            if (comingtransition == "boxslide")
                opt.slots = Math.round(Math.random() * 6 + 3);
            else if (comingtransition == "flyin")
                opt.slots = Math.round(Math.random() * 4 + 1)
        } else {
            opt.slots = nextli.data('slotamount')
        }
        if (nextli.data('rotate') == undefined)
            opt.rotate = 0
        else if (nextli.data('rotate') == 999)
            opt.rotate = Math.round(Math.random() * 360);
        else opt.rotate = nextli.data('rotate');
        if (!jQuery.support.transition || opt.ie || opt.ie9) opt.rotate = 0;
        if (opt.firststart == 1) opt.firststart = 0;
        masterspeed = masterspeed + STA[4];
        if ((nexttrans == 4 || nexttrans == 5 || nexttrans == 6) && opt.slots < 3) opt.slots = 3;
        if (STA[3] != 0) opt.slots = Math.min(opt.slots, STA[3]);
        if (nexttrans == 9) opt.slots = opt.width / 20;
        if (nexttrans == 10) opt.slots = opt.height / 20;
        if (STA[5] == "box") {
            if (STA[7] != null) prepareOneSlideBox(actsh, opt, STA[7]);
            if (STA[6] != null) prepareOneSlideBox(nextsh, opt, STA[6])
        } else if (STA[5] == "vertical" || STA[5] == "horizontal") {
            if (STA[7] != null) prepareOneSlideSlot(actsh, opt, STA[7], STA[5]);
            if (STA[6] != null) prepareOneSlideSlot(nextsh, opt, STA[6], STA[5])
        }
        if (nexttrans == 0) {
            var maxz = Math.ceil(opt.height / opt.sloth);
            var curz = 0;
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                curz = curz + 1;
                if (curz == maxz) curz = 0;
                mtl.add(punchgs.TweenLite.from(ss, (masterspeed) / 600, {
                    opacity: 0,
                    top: (0 - opt.sloth),
                    left: (0 - opt.slotw),
                    rotation: opt.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), ((j * 15) + ((curz) * 30)) / 1500)
            })
        }
        if (nexttrans == 1) {
            var maxtime, maxj = 0;
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                rand = Math.random() * masterspeed + 300;
                rand2 = Math.random() * 500 + 200;
                if (rand + rand2 > maxtime) {
                    maxtime = rand2 + rand2;
                    maxj = j
                }
                mtl.add(punchgs.TweenLite.from(ss, rand / 1000, {
                    autoAlpha: 0,
                    force3D: "auto",
                    rotation: opt.rotate,
                    ease: punchgs.Power2.easeInOut
                }), rand2 / 1000)
            })
        }
        if (nexttrans == 2) {
            var subtl = new punchgs.TimelineLite();
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this);
                subtl.add(punchgs.TweenLite.to(ss, masterspeed / 1000, {
                    left: opt.slotw,
                    force3D: "auto",
                    rotation: (0 - opt.rotate)
                }), 0);
                mtl.add(subtl, 0)
            });
            nextsh.find('.slotslide').each(function() {
                var ss = jQuery(this);
                subtl.add(punchgs.TweenLite.from(ss, masterspeed / 1000, {
                    left: 0 - opt.slotw,
                    force3D: "auto",
                    rotation: opt.rotate
                }), 0);
                mtl.add(subtl, 0)
            })
        }
        if (nexttrans == 3) {
            var subtl = new punchgs.TimelineLite();
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this);
                subtl.add(punchgs.TweenLite.to(ss, masterspeed / 1000, {
                    top: opt.sloth,
                    rotation: opt.rotate,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                mtl.add(subtl, 0)
            });
            nextsh.find('.slotslide').each(function() {
                var ss = jQuery(this);
                subtl.add(punchgs.TweenLite.from(ss, masterspeed / 1000, {
                    top: 0 - opt.sloth,
                    rotation: opt.rotate,
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                mtl.add(subtl, 0)
            })
        }
        if (nexttrans == 4 || nexttrans == 5) {
            setTimeout(function() {
                actsh.find('.defaultimg').css({
                    opacity: 0
                })
            }, 100);
            var cspeed = (masterspeed) / 1000,
                ticker = cspeed,
                subtl = new punchgs.TimelineLite();
            actsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                var del = (i * cspeed) / opt.slots;
                if (nexttrans == 5) del = ((opt.slots - i - 1) * cspeed) / (opt.slots) / 1.5;
                subtl.add(punchgs.TweenLite.to(ss, cspeed * 3, {
                    transformPerspective: 600,
                    force3D: "auto",
                    top: 0 + opt.height,
                    opacity: 0.5,
                    rotation: opt.rotate,
                    ease: punchgs.Power2.easeInOut,
                    delay: del
                }), 0);
                mtl.add(subtl, 0)
            });
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                var del = (i * cspeed) / opt.slots;
                if (nexttrans == 5) del = ((opt.slots - i - 1) * cspeed) / (opt.slots) / 1.5;
                subtl.add(punchgs.TweenLite.from(ss, cspeed * 3, {
                    top: (0 - opt.height),
                    opacity: 0.5,
                    rotation: opt.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut,
                    delay: del
                }), 0);
                mtl.add(subtl, 0)
            })
        }
        if (nexttrans == 6) {
            if (opt.slots < 2) opt.slots = 2;
            if (opt.slots % 2) opt.slots = opt.slots + 1;
            var subtl = new punchgs.TimelineLite();
            setTimeout(function() {
                actsh.find('.defaultimg').css({
                    opacity: 0
                })
            }, 100);
            actsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                if (i + 1 < opt.slots / 2)
                    var tempo = (i + 2) * 90;
                else var tempo = (2 + opt.slots - i) * 90;
                subtl.add(punchgs.TweenLite.to(ss, (masterspeed + tempo) / 1000, {
                    top: 0 + opt.height,
                    opacity: 1,
                    force3D: "auto",
                    rotation: opt.rotate,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                mtl.add(subtl, 0)
            });
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                if (i + 1 < opt.slots / 2)
                    var tempo = (i + 2) * 90;
                else var tempo = (2 + opt.slots - i) * 90;
                subtl.add(punchgs.TweenLite.from(ss, (masterspeed + tempo) / 1000, {
                    top: (0 - opt.height),
                    opacity: 1,
                    force3D: "auto",
                    rotation: opt.rotate,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                mtl.add(subtl, 0)
            })
        }
        if (nexttrans == 7) {
            masterspeed = masterspeed * 2;
            var subtl = new punchgs.TimelineLite();
            setTimeout(function() {
                actsh.find('.defaultimg').css({
                    opacity: 0
                })
            }, 100);
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this).find('div');
                subtl.add(punchgs.TweenLite.to(ss, masterspeed / 1000, {
                    left: (0 - opt.slotw / 2) + 'px',
                    top: (0 - opt.height / 2) + 'px',
                    width: (opt.slotw * 2) + "px",
                    height: (opt.height * 2) + "px",
                    opacity: 0,
                    rotation: opt.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), 0);
                mtl.add(subtl, 0)
            });
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this).find('div');
                subtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    transformPerspective: 600
                }, {
                    left: (0 - i * opt.slotw) + 'px',
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    top: (0) + 'px',
                    width: opt.width,
                    height: opt.height,
                    opacity: 1,
                    rotation: 0,
                    delay: 0.1
                }), 0);
                mtl.add(subtl, 0)
            })
        }
        if (nexttrans == 8) {
            masterspeed = masterspeed * 3;
            var subtl = new punchgs.TimelineLite();
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this).find('div');
                subtl.add(punchgs.TweenLite.to(ss, masterspeed / 1000, {
                    left: (0 - opt.width / 2) + 'px',
                    top: (0 - opt.sloth / 2) + 'px',
                    width: (opt.width * 2) + "px",
                    height: (opt.sloth * 2) + "px",
                    force3D: "auto",
                    opacity: 0,
                    rotation: opt.rotate
                }), 0);
                mtl.add(subtl, 0)
            });
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this).find('div');
                subtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    force3D: "auto"
                }, {
                    'left': (0) + 'px',
                    'top': (0 - i * opt.sloth) + 'px',
                    'width': (nextsh.find('.defaultimg').data('neww')) + "px",
                    'height': (nextsh.find('.defaultimg').data('newh')) + "px",
                    opacity: 1,
                    rotation: 0,
                }), 0);
                mtl.add(subtl, 0)
            })
        }
        if (nexttrans == 9 || nexttrans == 10) {
            var ssamount = 0;
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                ssamount++;
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    autoAlpha: 0,
                    force3D: "auto",
                    transformPerspective: 600
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power2.easeInOut,
                    delay: (i * 5) / 1000
                }), 0)
            })
        }
        if (nexttrans == 11 || nexttrans == 26) {
            var ssamount = 0;
            if (nexttrans == 26) masterspeed = 0;
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.from(ss, masterspeed / 1000, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        if (nexttrans == 12 || nexttrans == 13 || nexttrans == 14 || nexttrans == 15) {
            masterspeed = 1000;
            setTimeout(function() {
                punchgs.TweenLite.set(actsh.find('.defaultimg'), {
                    autoAlpha: 0
                })
            }, 100);
            var oow = opt.width;
            var ooh = opt.height;
            var ssn = nextsh.find('.slotslide')
            if (opt.fullWidth == "on" || opt.fullScreen == "on") {
                oow = ssn.width();
                ooh = ssn.height()
            }
            var twx = 0;
            var twy = 0;
            if (nexttrans == 12)
                twx = oow;
            else if (nexttrans == 15)
                twx = 0 - oow;
            else if (nexttrans == 13)
                twy = ooh;
            else if (nexttrans == 14)
                twy = 0 - ooh;
            var op = 1;
            var scal = 1;
            var fromscale = 1;
            var easeitout = punchgs.Power2.easeInOut;
            var easeitin = punchgs.Power2.easeInOut;
            var speedy = masterspeed / 1000;
            var speedy2 = speedy;
            if (specials == 1) op = 0;
            if (specials == 2) op = 0;
            if (specials == 3) {
                easeitout = punchgs.Power2.easeInOut;
                easeitin = punchgs.Power1.easeInOut;
                speedy = masterspeed / 1200
            }
            if (specials == 4 || specials == 5)
                scal = 0.6;
            if (specials == 6)
                scal = 1.4;
            if (specials == 5 || specials == 6) {
                fromscale = 1.4;
                op = 0;
                oow = 0;
                ooh = 0;
                twx = 0;
                twy = 0
            }
            if (specials == 6) fromscale = 0.6;
            var dd = 0;
            mtl.add(punchgs.TweenLite.from(ssn, speedy, {
                left: twx,
                top: twy,
                scale: fromscale,
                opacity: op,
                rotation: opt.rotate,
                ease: easeitin,
                force3D: "auto"
            }), 0);
            var ssa = actsh.find('.slotslide');
            if (specials == 4 || specials == 5) {
                oow = 0;
                ooh = 0
            }
            if (specials != 1) {
                if (nexttrans == 12)
                    mtl.add(punchgs.TweenLite.to(ssa, speedy2, {
                        'left': (0 - oow) + 'px',
                        force3D: "auto",
                        scale: scal,
                        opacity: op,
                        rotation: opt.rotate,
                        ease: easeitout
                    }), 0);
                else if (nexttrans == 15)
                    mtl.add(punchgs.TweenLite.to(ssa, speedy2, {
                        'left': (oow) + 'px',
                        force3D: "auto",
                        scale: scal,
                        opacity: op,
                        rotation: opt.rotate,
                        ease: easeitout
                    }), 0);
                else if (nexttrans == 13)
                    mtl.add(punchgs.TweenLite.to(ssa, speedy2, {
                        'top': (0 - ooh) + 'px',
                        force3D: "auto",
                        scale: scal,
                        opacity: op,
                        rotation: opt.rotate,
                        ease: easeitout
                    }), 0);
                else if (nexttrans == 14)
                    mtl.add(punchgs.TweenLite.to(ssa, speedy2, {
                        'top': (ooh) + 'px',
                        force3D: "auto",
                        scale: scal,
                        opacity: op,
                        rotation: opt.rotate,
                        ease: easeitout
                    }), 0)
            }
        }
        if (nexttrans == 16) {
            var subtl = new punchgs.TimelineLite();
            mtl.add(punchgs.TweenLite.set(actli, {
                'position': 'absolute',
                'z-index': 20
            }), 0);
            mtl.add(punchgs.TweenLite.set(nextli, {
                'position': 'absolute',
                'z-index': 15
            }), 0);
            actli.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');
            actli.find('.tp-half-one').clone(!0).appendTo(actli).addClass("tp-half-two");
            actli.find('.tp-half-two').removeClass('tp-half-one');
            var oow = opt.width;
            var ooh = opt.height;
            if (opt.autoHeight == "on")
                ooh = container.height();
            actli.find('.tp-half-one .defaultimg').wrap('<div class="tp-papercut" style="width:' + oow + 'px;height:' + ooh + 'px;"></div>')
            actli.find('.tp-half-two .defaultimg').wrap('<div class="tp-papercut" style="width:' + oow + 'px;height:' + ooh + 'px;"></div>')
            actli.find('.tp-half-two .defaultimg').css({
                position: 'absolute',
                top: '-50%'
            });
            actli.find('.tp-half-two .tp-caption').wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>');
            mtl.add(punchgs.TweenLite.set(actli.find('.tp-half-two'), {
                width: oow,
                height: ooh,
                overflow: 'hidden',
                zIndex: 15,
                position: 'absolute',
                top: ooh / 2,
                left: '0px',
                transformPerspective: 600,
                transformOrigin: "center bottom"
            }), 0);
            mtl.add(punchgs.TweenLite.set(actli.find('.tp-half-one'), {
                width: oow,
                height: ooh / 2,
                overflow: 'visible',
                zIndex: 10,
                position: 'absolute',
                top: '0px',
                left: '0px',
                transformPerspective: 600,
                transformOrigin: "center top"
            }), 0);
            var img = actli.find('.defaultimg');
            var ro1 = Math.round(Math.random() * 20 - 10),
                ro2 = Math.round(Math.random() * 20 - 10),
                ro3 = Math.round(Math.random() * 20 - 10),
                xof = Math.random() * 0.4 - 0.2,
                yof = Math.random() * 0.4 - 0.2,
                sc1 = Math.random() * 1 + 1,
                sc2 = Math.random() * 1 + 1,
                sc3 = Math.random() * 0.3 + 0.3;
            mtl.add(punchgs.TweenLite.set(actli.find('.tp-half-one'), {
                overflow: 'hidden'
            }), 0);
            mtl.add(punchgs.TweenLite.fromTo(actli.find('.tp-half-one'), masterspeed / 800, {
                width: oow,
                height: ooh / 2,
                position: 'absolute',
                top: '0px',
                left: '0px',
                force3D: "auto",
                transformOrigin: "center top"
            }, {
                scale: sc1,
                rotation: ro1,
                y: (0 - ooh - ooh / 4),
                autoAlpha: 0,
                ease: punchgs.Power2.easeInOut
            }), 0);
            mtl.add(punchgs.TweenLite.fromTo(actli.find('.tp-half-two'), masterspeed / 800, {
                width: oow,
                height: ooh,
                overflow: 'hidden',
                position: 'absolute',
                top: ooh / 2,
                left: '0px',
                force3D: "auto",
                transformOrigin: "center bottom"
            }, {
                scale: sc2,
                rotation: ro2,
                y: ooh + ooh / 4,
                ease: punchgs.Power2.easeInOut,
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.set(actli, {
                        'position': 'absolute',
                        'z-index': 15
                    });
                    punchgs.TweenLite.set(nextli, {
                        'position': 'absolute',
                        'z-index': 20
                    });
                    if (actli.find('.tp-half-one').length > 0) {
                        actli.find('.tp-half-one .defaultimg').unwrap();
                        actli.find('.tp-half-one .slotholder').unwrap()
                    }
                    actli.find('.tp-half-two').remove()
                }
            }), 0);
            subtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'), {
                autoAlpha: 1
            }), 0);
            if (actli.html() != null)
                mtl.add(punchgs.TweenLite.fromTo(nextli, (masterspeed - 200) / 1000, {
                    scale: sc3,
                    x: (opt.width / 4) * xof,
                    y: (ooh / 4) * yof,
                    rotation: ro3,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: punchgs.Power2.easeOut
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0);
            mtl.add(subtl, 0)
        }
        if (nexttrans == 17) {
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.fromTo(ss, (masterspeed) / 800, {
                    opacity: 0,
                    rotationY: 0,
                    scale: 0.9,
                    rotationX: -110,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: j * 0.06
                }), 0)
            })
        }
        if (nexttrans == 18) {
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.fromTo(ss, (masterspeed) / 500, {
                    autoAlpha: 0,
                    rotationY: 310,
                    scale: 0.9,
                    rotationX: 10,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    autoAlpha: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: j * 0.06
                }), 0)
            })
        }
        if (nexttrans == 19 || nexttrans == 22) {
            var subtl = new punchgs.TimelineLite();
            mtl.add(punchgs.TweenLite.set(actli, {
                zIndex: 20
            }), 0);
            mtl.add(punchgs.TweenLite.set(nextli, {
                zIndex: 20
            }), 0);
            setTimeout(function() {
                actsh.find('.defaultimg').css({
                    opacity: 0
                })
            }, 100);
            var chix = nextli.css('z-index'),
                chix2 = actli.css('z-index'),
                rot = 90,
                op = 1;
            if (direction == 1) rot = -90;
            if (nexttrans == 19) {
                var torig = "center center -" + opt.height / 2;
                op = 0
            } else {
                var torig = "center center " + opt.height / 2
            }
            punchgs.TweenLite.set(container, {
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transformPerspective: 600
            });
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                subtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    left: 0,
                    rotationY: opt.rotate,
                    z: 10,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationX: rot
                }, {
                    left: 0,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    rotationX: 0,
                    delay: (j * 50) / 1000,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                subtl.add(punchgs.TweenLite.to(ss, 0.1, {
                    autoAlpha: 1,
                    delay: (j * 50) / 1000
                }), 0);
                mtl.add(subtl)
            });
            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                var rot = -90;
                if (direction == 1) rot = 90;
                subtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    autoAlpha: 1,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationX: 0
                }, {
                    autoAlpha: 1,
                    rotationY: opt.rotate,
                    top: 0,
                    z: 10,
                    scale: 1,
                    rotationX: rot,
                    delay: (j * 50) / 1000,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0);
                mtl.add(subtl)
            })
        }
        if (nexttrans == 20) {
            setTimeout(function() {
                actsh.find('.defaultimg').css({
                    opacity: 0
                })
            }, 100);
            var chix = nextli.css('z-index');
            var chix2 = actli.css('z-index');
            if (direction == 1) {
                var ofx = -opt.width
                var rot = 70;
                var torig = "left center -" + opt.height / 2
            } else {
                var ofx = opt.width;
                var rot = -70;
                var torig = "right center -" + opt.height / 2
            }
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1500, {
                    left: ofx,
                    rotationX: 40,
                    z: -600,
                    opacity: op,
                    top: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationY: rot
                }, {
                    left: 0,
                    delay: (j * 50) / 1000,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    rotationX: 40,
                    z: -600,
                    opacity: op,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationY: rot
                }, {
                    rotationX: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: (j * 50) / 1000,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                mtl.add(punchgs.TweenLite.to(ss, 0.1, {
                    opacity: 1,
                    force3D: "auto",
                    delay: (j * 50) / 1000 + masterspeed / 2000
                }), 0)
            });
            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                if (direction != 1) {
                    var ofx = -opt.width
                    var rot = 70;
                    var torig = "left center -" + opt.height / 2
                } else {
                    var ofx = opt.width;
                    var rot = -70;
                    var torig = "right center -" + opt.height / 2
                }
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    opacity: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    left: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationY: 0
                }, {
                    opacity: 1,
                    rotationX: 40,
                    top: 0,
                    z: -600,
                    left: ofx,
                    force3D: "auto",
                    scale: 0.8,
                    rotationY: rot,
                    delay: (j * 50) / 1000,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                mtl.add(punchgs.TweenLite.to(ss, 0.1, {
                    force3D: "auto",
                    opacity: 0,
                    delay: (j * 50) / 1000 + (masterspeed / 1000 - (masterspeed / 10000))
                }), 0)
            })
        }
        if (nexttrans == 21 || nexttrans == 25) {
            setTimeout(function() {
                actsh.find('.defaultimg').css({
                    opacity: 0
                })
            }, 100);
            var chix = nextli.css('z-index');
            var chix2 = actli.css('z-index');
            if (direction == 1) {
                var ofx = -opt.width
                var rot = 90;
                if (nexttrans == 25) {
                    var torig = "center top 0"
                    rot2 = -rot;
                    rot = opt.rotate
                } else {
                    var torig = "left center 0";
                    rot2 = opt.rotate
                }
            } else {
                var ofx = opt.width;
                var rot = -90;
                if (nexttrans == 25) {
                    var torig = "center bottom 0"
                    rot2 = -rot;
                    rot = opt.rotate
                } else {
                    var torig = "right center 0";
                    rot2 = opt.rotate
                }
            }
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: rot2,
                    z: 0,
                    autoAlpha: 0,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationY: rot
                }, {
                    left: 0,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    scale: 1,
                    rotationY: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), 0)
            });
            if (direction != 1) {
                var ofx = -opt.width
                var rot = 90;
                if (nexttrans == 25) {
                    var torig = "center top 0"
                    rot2 = -rot;
                    rot = opt.rotate
                } else {
                    var torig = "left center 0";
                    rot2 = opt.rotate
                }
            } else {
                var ofx = opt.width;
                var rot = -90;
                if (nexttrans == 25) {
                    var torig = "center bottom 0"
                    rot2 = -rot;
                    rot = opt.rotate
                } else {
                    var torig = "right center 0";
                    rot2 = opt.rotate
                }
            }
            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: 0,
                    z: 0,
                    autoAlpha: 1,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationY: 0
                }, {
                    left: 0,
                    rotationX: rot2,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    force3D: "auto",
                    scale: 1,
                    rotationY: rot,
                    ease: punchgs.Power1.easeInOut
                }), 0)
            })
        }
        if (nexttrans == 23 || nexttrans == 24) {
            setTimeout(function() {
                actsh.find('.defaultimg').css({
                    opacity: 0
                })
            }, 100);
            var chix = nextli.css('z-index');
            var chix2 = actli.css('z-index');
            var rot = -90;
            if (direction == 1)
                rot = 90;
            var op = 1;
            if (nexttrans == 23) {
                var torig = "center center -" + opt.width / 2;
                op = 0
            } else {
                var torig = "center center " + opt.width / 2
            }
            var opx = 0;
            punchgs.TweenLite.set(container, {
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                perspective: 2500
            });
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    left: opx,
                    rotationX: opt.rotate,
                    force3D: "auto",
                    opacity: op,
                    top: 0,
                    scale: 1,
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationY: rot
                }, {
                    left: 0,
                    rotationX: 0,
                    autoAlpha: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: (j * 50) / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            });
            rot = 90;
            if (direction == 1)
                rot = -90;
            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                mtl.add(punchgs.TweenLite.fromTo(ss, masterspeed / 1000, {
                    left: 0,
                    autoAlpha: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: torig,
                    rotationY: 0
                }, {
                    left: opx,
                    autoAlpha: 1,
                    rotationX: opt.rotate,
                    top: 0,
                    scale: 1,
                    rotationY: rot,
                    delay: (j * 50) / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        mtl.pause();
        animateTheCaptions(nextli, opt, null, mtl);
        punchgs.TweenLite.to(nextli, 0.001, {
            autoAlpha: 1
        });
        var data = {};
        data.slideIndex = opt.next + 1;
        data.slide = nextli;
        container.trigger('revolution.slide.onchange', data);
        setTimeout(function() {
            container.trigger('revolution.slide.onafterswap')
        }, masterspeed);
        container.trigger('revolution.slide.onvideostop')
    }
    var letItFree = function(container, opt, nextsh, actsh, nextli, actli, mtl) {
        punchgs.TweenLite.to(nextsh.find('.defaultimg'), 0.001, {
            autoAlpha: 1,
            onComplete: function() {
                removeSlots(container, opt, nextli)
            }
        });
        if (nextli.index() != actli.index()) {
            punchgs.TweenLite.to(actli, 0.2, {
                autoAlpha: 0,
                onComplete: function() {
                    removeSlots(container, opt, actli)
                }
            })
        }
        opt.act = opt.next;
        if (opt.navigationType == "thumb") moveSelectedThumb(container);
        if (nextsh.data('kenburns') == "on") {
            startKenBurn(container, opt)
        }
        container.find('.current-sr-slide-visible').removeClass("current-sr-slide-visible");
        nextli.addClass("current-sr-slide-visible");
        if (opt.parallax == "scroll" || opt.parallax == "scroll+mouse" || opt.parallax == "mouse+scroll") {
            scrollParallax(container, opt)
        }
        mtl.clear()
    }
    var onPlayerStateChange = function(event) {
        var embedCode = event.target.getVideoEmbedCode();
        var ytcont = jQuery('#' + embedCode.split('id="')[1].split('"')[0])
        var container = ytcont.closest('.tp-simpleresponsive');
        var player = ytcont.parent().data('player');
        if (event.data == YT.PlayerState.PLAYING) {
            var bt = container.find('.tp-bannertimer');
            var opt = bt.data('opt');
            if (ytcont.closest('.tp-caption').data('volume') == "mute")
                player.mute();
            opt.videoplaying = !0;
            container.trigger('stoptimer');
            container.trigger('revolution.slide.onvideoplay')
        } else {
            var bt = container.find('.tp-bannertimer');
            var opt = bt.data('opt');
            if ((event.data != -1 && event.data != 3)) {
                opt.videoplaying = !1;
                container.trigger('starttimer');
                container.trigger('revolution.slide.onvideostop')
            }
            if (event.data == 0 && opt.nextslideatend == !0)
                opt.container.revnext();
            else {
                opt.videoplaying = !1;
                container.trigger('starttimer');
                container.trigger('revolution.slide.onvideostop')
            }
        }
    }
    var addEvent = function(element, eventName, callback) {
        if (element.addEventListener) element.addEventListener(eventName, callback, !1);
        else element.attachEvent(eventName, callback, !1)
    }
    var vimeoready_auto = function(player_id, autoplay) {
        var froogaloop = $f(player_id),
            vimcont = jQuery('#' + player_id),
            container = vimcont.closest('.tp-simpleresponsive'),
            nextcaption = vimcont.closest('.tp-caption');
        setTimeout(function() {
            froogaloop.addEvent('ready', function(data) {
                if (autoplay) froogaloop.api('play');
                froogaloop.addEvent('play', function(data) {
                    var bt = container.find('.tp-bannertimer');
                    var opt = bt.data('opt');
                    opt.videoplaying = !0;
                    container.trigger('stoptimer');
                    if (nextcaption.data('volume') == "mute")
                        froogaloop.api('setVolume', "0")
                });
                froogaloop.addEvent('finish', function(data) {
                    var bt = container.find('.tp-bannertimer');
                    var opt = bt.data('opt');
                    opt.videoplaying = !1;
                    container.trigger('starttimer');
                    container.trigger('revolution.slide.onvideoplay');
                    if (opt.nextslideatend == !0)
                        opt.container.revnext()
                });
                froogaloop.addEvent('pause', function(data) {
                    var bt = container.find('.tp-bannertimer');
                    var opt = bt.data('opt');
                    opt.videoplaying = !1;
                    container.trigger('starttimer');
                    container.trigger('revolution.slide.onvideostop')
                });
                nextcaption.find('.tp-thumb-image').click(function() {
                    punchgs.TweenLite.to(jQuery(this), 0.3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    })
                    froogaloop.api("play")
                })
            })
        }, 150)
    }
    var updateHTML5Size = function(pc, container) {
        var windowW = container.width();
        var windowH = container.height();
        var mediaAspect = pc.data('mediaAspect');
        if (mediaAspect == undefined) mediaAspect = 1;
        var windowAspect = windowW / windowH;
        pc.css({
            position: "absolute"
        });
        var video = pc.find('video');
        if (windowAspect < mediaAspect) {
            punchgs.TweenLite.to(pc, 0.0001, {
                width: windowH * mediaAspect,
                force3D: "auto",
                top: 0,
                left: 0 - (windowH * mediaAspect - windowW) / 2,
                height: windowH
            })
        } else {
            punchgs.TweenLite.to(pc, 0.0001, {
                width: windowW,
                force3D: "auto",
                top: 0 - (windowW / mediaAspect - windowH) / 2,
                left: 0,
                height: windowW / mediaAspect
            })
        }
    }
    var newAnimObject = function() {
        var a = new Object();
        a.x = 0;
        a.y = 0;
        a.rotationX = 0;
        a.rotationY = 0;
        a.rotationZ = 0;
        a.scale = 1;
        a.scaleX = 1;
        a.scaleY = 1;
        a.skewX = 0;
        a.skewY = 0;
        a.opacity = 0;
        a.transformOrigin = "center, center";
        a.transformPerspective = 400;
        a.rotation = 0;
        return a
    }
    var getAnimDatas = function(frm, data) {
        var customarray = data.split(';');
        jQuery.each(customarray, function(index, param) {
            param = param.split(":")
            var w = param[0],
                v = param[1];
            if (w == "rotationX") frm.rotationX = parseInt(v, 0);
            if (w == "rotationY") frm.rotationY = parseInt(v, 0);
            if (w == "rotationZ") frm.rotationZ = parseInt(v, 0);
            if (w == "rotationZ") frm.rotation = parseInt(v, 0);
            if (w == "scaleX") frm.scaleX = parseFloat(v);
            if (w == "scaleY") frm.scaleY = parseFloat(v);
            if (w == "opacity") frm.opacity = parseFloat(v);
            if (w == "skewX") frm.skewX = parseInt(v, 0);
            if (w == "skewY") frm.skewY = parseInt(v, 0);
            if (w == "x") frm.x = parseInt(v, 0);
            if (w == "y") frm.y = parseInt(v, 0);
            if (w == "z") frm.z = parseInt(v, 0);
            if (w == "transformOrigin") frm.transformOrigin = v.toString();
            if (w == "transformPerspective") frm.transformPerspective = parseInt(v, 0)
        })
        return frm
    }
    var getAnimSteps = function(data) {
        var paramarray = data.split("animation:");
        var params = new Object();
        params.animation = getAnimDatas(newAnimObject(), paramarray[1]);
        var customarray = paramarray[0].split(';');
        jQuery.each(customarray, function(index, param) {
            param = param.split(":")
            var w = param[0],
                v = param[1];
            if (w == "typ") params.typ = v;
            if (w == "speed") params.speed = parseInt(v, 0) / 1000;
            if (w == "start") params.start = parseInt(v, 0) / 1000;
            if (w == "elementdelay") params.elementdelay = parseFloat(v);
            if (w == "ease") params.ease = v
        })
        return params
    }
    var animateTheCaptions = function(nextli, opt, recalled, mtl) {
        if (nextli.data('ctl') == undefined) {
            nextli.data('ctl', new punchgs.TimelineLite())
        }
        var ctl = nextli.data('ctl'),
            offsetx = 0,
            offsety = 0,
            allcaptions = nextli.find('.tp-caption'),
            allstaticcaptions = opt.container.find('.tp-static-layers').find('.tp-caption');
        ctl.pause();
        jQuery.each(allstaticcaptions, function(index, staticcapt) {
            allcaptions.push(staticcapt)
        });
        allcaptions.each(function(i) {
            var internrecalled = recalled,
                staticdirection = -1,
                nextcaption = jQuery(this);
            if (nextcaption.hasClass("tp-static-layer")) {
                var nss = nextcaption.data('startslide'),
                    nes = nextcaption.data('endslide');
                if (nss == -1 || nss == "-1")
                    nextcaption.data('startslide', 0);
                if (nes == -1 || nes == "-1")
                    nextcaption.data('endslide', opt.slideamount);
                if (nss == 0 && nes == opt.slideamount - 1)
                    nextcaption.data('endslide', opt.slideamount + 1);
                nss = nextcaption.data('startslide'), nes = nextcaption.data('endslide');
                if (!nextcaption.hasClass("tp-is-shown")) {
                    if ((nss <= opt.next && nes >= opt.next) || (nss == opt.next) || (nes == opt.next)) {
                        nextcaption.addClass("tp-is-shown");
                        staticdirection = 1
                    } else {
                        staticdirection = 0
                    }
                } else {
                    if ((nes == opt.next) || (nss > opt.next) || (nes < opt.next)) {
                        staticdirection = 2
                    } else {
                        staticdirection = 0
                    }
                }
            }
            offsetx = opt.width / 2 - (opt.startwidth * opt.bw) / 2;
            var xbw = opt.bw;
            var xbh = opt.bh;
            if (opt.fullScreen == "on")
                offsety = opt.height / 2 - (opt.startheight * opt.bh) / 2;
            if (opt.autoHeight == "on" || (opt.minHeight != undefined && opt.minHeight > 0))
                offsety = opt.container.height() / 2 - (opt.startheight * opt.bh) / 2;
            if (offsety < 0) offsety = 0;
            var handlecaption = 0;
            if (opt.width < opt.hideCaptionAtLimit && nextcaption.data('captionhidden') == "on") {
                nextcaption.addClass("tp-hidden-caption")
                handlecaption = 1
            } else {
                if (opt.width < opt.hideAllCaptionAtLimit || opt.width < opt.hideAllCaptionAtLilmit) {
                    nextcaption.addClass("tp-hidden-caption")
                    handlecaption = 1
                } else {
                    nextcaption.removeClass("tp-hidden-caption")
                }
            }
            if (handlecaption == 0) {
                if (nextcaption.data('linktoslide') != undefined && !nextcaption.hasClass("hasclicklistener")) {
                    nextcaption.addClass("hasclicklistener")
                    nextcaption.css({
                        'cursor': 'pointer'
                    });
                    if (nextcaption.data('linktoslide') != "no") {
                        nextcaption.click(function() {
                            var nextcaption = jQuery(this);
                            var dir = nextcaption.data('linktoslide');
                            if (dir != "next" && dir != "prev") {
                                opt.container.data('showus', dir);
                                opt.container.parent().find('.tp-rightarrow').click()
                            } else if (dir == "next")
                                opt.container.parent().find('.tp-rightarrow').click();
                            else if (dir == "prev")
                                opt.container.parent().find('.tp-leftarrow').click()
                        })
                    }
                }
                if (offsetx < 0) offsetx = 0;
                if (nextcaption.hasClass("tp-videolayer") || nextcaption.find('iframe').length > 0 || nextcaption.find('video').length > 0) {
                    var frameID = "iframe" + Math.round(Math.random() * 100000 + 1),
                        vidw = nextcaption.data("videowidth"),
                        vidh = nextcaption.data("videoheight"),
                        vida = nextcaption.data("videoattributes"),
                        vidytid = nextcaption.data('ytid'),
                        vimeoid = nextcaption.data('vimeoid'),
                        videopreload = nextcaption.data('videpreload'),
                        videomp = nextcaption.data('videomp4'),
                        videowebm = nextcaption.data('videowebm'),
                        videocontrols = nextcaption.data('videocontrols'),
                        httpprefix = "http",
                        videoloop = nextcaption.data('videoloop') == "loop" ? "loop" : nextcaption.data('videoloop') == "loopandnoslidestop" ? "loop" : "";
                    if (nextcaption.data('thumbimage') != undefined && nextcaption.data('videoposter') == undefined)
                        nextcaption.data('videoposter', nextcaption.data('thumbimage'))
                    if (vidytid != undefined && String(vidytid).length > 1 && nextcaption.find('iframe').length == 0) {
                        httpprefix = "https";
                        if (videocontrols == "none") {
                            vida = vida.replace("controls=1", "controls=0");
                            if (vida.toLowerCase().indexOf('controls') == -1)
                                vida = vida + "&controls=0"
                        }
                        nextcaption.append('<iframe style="visible:hidden" src="' + httpprefix + '://www.youtube.com/embed/' + vidytid + '?' + vida + '" width="' + vidw + '" height="' + vidh + '" style="width:' + vidw + 'px;height:' + vidh + 'px"></iframe>')
                    }
                    if (vimeoid != undefined && String(vimeoid).length > 1 && nextcaption.find('iframe').length == 0) {
                        nextcaption.append('<iframe style="visible:hidden" src="' + httpprefix + '://player.vimeo.com/video/' + vimeoid + '?' + vida + '" width="' + vidw + '" height="' + vidh + '" style="width:' + vidw + 'px;height:' + vidh + 'px"></iframe>')
                    }
                    if ((videomp != undefined || videowebm != undefined) && nextcaption.find('video').length == 0) {
                        if (videocontrols != "controls") videocontrols = "";
                        nextcaption.append('<video style="visible:hidden" class="" ' + videoloop + ' ' + videocontrols + ' preload="' + videopreload + '" width="' + vidw + '" height="' + vidh + '"' + 'poster="' + nextcaption.data('videoposter') + '">' + '<source src="' + videomp + '" type="video/mp4"" />' + '<source src="' + videowebm + '" type="video/webm"" />' + '</video>')
                    }
                    var autoplaywason = !1;
                    if (nextcaption.data('autoplayonlyfirsttime') == !0 || nextcaption.data('autoplayonlyfirsttime') == "true" || nextcaption.data('autoplay') == !0) {
                        nextcaption.data('autoplay', !0);
                        autoplaywason = !0
                    }
                    nextcaption.find('iframe').each(function() {
                        var ifr = jQuery(this);
                        punchgs.TweenLite.to(ifr, 0.1, {
                            autoAlpha: 1,
                            zIndex: 0,
                            transformStyle: "preserve-3d",
                            z: 0,
                            rotationX: 0,
                            force3D: "auto"
                        });
                        if (is_mobile()) {
                            var oldsrc = ifr.attr('src');
                            ifr.attr('src', "");
                            ifr.attr('src', oldsrc)
                        }
                        opt.nextslideatend = nextcaption.data('nextslideatend');
                        if (nextcaption.data('videoposter') != undefined && nextcaption.data('videoposter').length > 2 && nextcaption.data('autoplay') != !0 && !internrecalled) {
                            if (nextcaption.find('.tp-thumb-image').length == 0)
                                nextcaption.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + nextcaption.data('videoposter') + '); background-size:cover"></div>');
                            else punchgs.TweenLite.set(nextcaption.find('.tp-thumb-image'), {
                                autoAlpha: 1
                            })
                        }
                        if (ifr.attr('src').toLowerCase().indexOf('youtube') >= 0) {
                            if (!ifr.hasClass("HasListener")) {
                                try {
                                    ifr.attr('id', frameID);
                                    var player;
                                    var ytint = setInterval(function() {
                                        if (YT != undefined)
                                            if (typeof YT.Player != undefined && typeof YT.Player != "undefined") {
                                                player = new YT.Player(frameID, {
                                                    events: {
                                                        "onStateChange": onPlayerStateChange,
                                                        'onReady': function(event) {
                                                            var embedCode = event.target.getVideoEmbedCode(),
                                                                ytcont = jQuery('#' + embedCode.split('id="')[1].split('"')[0]),
                                                                nextcaption = ytcont.closest('.tp-caption'),
                                                                videorate = nextcaption.data('videorate'),
                                                                videostart = nextcaption.data('videostart');
                                                            if (videorate != undefined)
                                                                event.target.setPlaybackRate(parseFloat(videorate));
                                                            if (nextcaption.data('autoplay') == !0 || autoplaywason)
                                                                event.target.playVideo();
                                                            nextcaption.find('.tp-thumb-image').click(function() {
                                                                punchgs.TweenLite.to(jQuery(this), 0.3, {
                                                                    autoAlpha: 0,
                                                                    force3D: "auto",
                                                                    ease: punchgs.Power3.easeInOut
                                                                })
                                                                if (!is_mobile()) {
                                                                    player.playVideo()
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        ifr.addClass("HasListener");
                                        nextcaption.data('player', player);
                                        clearInterval(ytint)
                                    }, 100)
                                } catch (e) {}
                            } else {
                                var player = nextcaption.data('player');
                                if (nextcaption.data('forcerewind') == "on" && !is_mobile())
                                    player.seekTo(0);
                                if (!is_mobile() && nextcaption.data('autoplay') == !0 || autoplaywason) {
                                    nextcaption.data('timerplay', setTimeout(function() {
                                        player.playVideo()
                                    }, nextcaption.data('start')))
                                }
                            }
                        } else if (ifr.attr('src').toLowerCase().indexOf('vimeo') >= 0) {
                            if (!ifr.hasClass("HasListener")) {
                                ifr.addClass("HasListener");
                                ifr.attr('id', frameID);
                                var isrc = ifr.attr('src');
                                var queryParameters = {},
                                    queryString = isrc,
                                    re = /([^&=]+)=([^&]*)/g,
                                    m;
                                while (m = re.exec(queryString)) {
                                    queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
                                }
                                if (queryParameters.player_id != undefined)
                                    isrc = isrc.replace(queryParameters.player_id, frameID);
                                else isrc = isrc + "&player_id=" + frameID;
                                try {
                                    isrc = isrc.replace('api=0', 'api=1')
                                } catch (e) {}
                                isrc = isrc + "&api=1";
                                ifr.attr('src', isrc);
                                var player = nextcaption.find('iframe')[0];
                                var vimint = setInterval(function() {
                                    if ($f != undefined) {
                                        if (typeof $f(frameID).api != undefined && typeof $f(frameID).api != "undefined") {
                                            $f(player).addEvent('ready', function() {
                                                vimeoready_auto(frameID, autoplaywason)
                                            });
                                            clearInterval(vimint)
                                        }
                                    }
                                }, 100)
                            } else {
                                if (!is_mobile() && (nextcaption.data('autoplay') == !0 || nextcaption.data('forcerewind') == "on")) {
                                    var ifr = nextcaption.find('iframe');
                                    var id = ifr.attr('id');
                                    var froogaloop = $f(id);
                                    if (nextcaption.data('forcerewind') == "on")
                                        froogaloop.api("seekTo", 0);
                                    nextcaption.data('timerplay', setTimeout(function() {
                                        if (nextcaption.data('autoplay') == !0)
                                            froogaloop.api("play")
                                    }, nextcaption.data('start')))
                                }
                            }
                        }
                    });
                    if (is_mobile() && nextcaption.data('disablevideoonmobile') == 1) nextcaption.find('video').remove();
                    if (is_mobile() && jQuery(window).width() < 569) nextcaption.find('video').remove()
                    if (nextcaption.find('video').length > 0) {
                        nextcaption.find('video').each(function(i) {
                            var video = this,
                                jvideo = jQuery(this);
                            if (!jvideo.parent().hasClass("html5vid"))
                                jvideo.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                            var html5vid = jvideo.parent();
                            if (video.addEventListener)
                                video.addEventListener("loadedmetadata", function() {
                                    html5vid.data('metaloaded', 1)
                                });
                            else video.attachEvent("loadedmetadata", function() {
                                html5vid.data('metaloaded', 1)
                            });
                            clearInterval(html5vid.data('interval'));
                            html5vid.data('interval', setInterval(function() {
                                if (html5vid.data('metaloaded') == 1 || video.duration != NaN) {
                                    clearInterval(html5vid.data('interval'));
                                    if (!html5vid.hasClass("HasListener")) {
                                        html5vid.addClass("HasListener");
                                        if (nextcaption.data('dottedoverlay') != "none" && nextcaption.data('dottedoverlay') != undefined)
                                            if (nextcaption.find('.tp-dottedoverlay').length != 1)
                                                html5vid.append('<div class="tp-dottedoverlay ' + nextcaption.data('dottedoverlay') + '"></div>');
                                        if (jvideo.attr('control') == undefined) {
                                            if (html5vid.find('.tp-video-play-button').length == 0)
                                                html5vid.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>');
                                            html5vid.find('video, .tp-poster, .tp-video-play-button').click(function() {
                                                if (html5vid.hasClass("videoisplaying"))
                                                    video.pause();
                                                else video.play()
                                            })
                                        }
                                        if (nextcaption.data('forcecover') == 1 || nextcaption.hasClass('fullscreenvideo')) {
                                            if (nextcaption.data('forcecover') == 1) {
                                                updateHTML5Size(html5vid, opt.container);
                                                html5vid.addClass("fullcoveredvideo");
                                                nextcaption.addClass("fullcoveredvideo")
                                            }
                                            html5vid.css({
                                                width: "100%",
                                                height: "100%"
                                            })
                                        }
                                        if (video.addEventListener)
                                            video.addEventListener("play", function() {
                                                if (nextcaption.data('volume') == "mute")
                                                    video.muted = !0;
                                                html5vid.addClass("videoisplaying");
                                                if (nextcaption.data('videoloop') == "loopandnoslidestop") {
                                                    opt.videoplaying = !1;
                                                    opt.container.trigger('starttimer');
                                                    opt.container.trigger('revolution.slide.onvideostop')
                                                } else {
                                                    opt.videoplaying = !0;
                                                    opt.container.trigger('stoptimer');
                                                    opt.container.trigger('revolution.slide.onvideoplay')
                                                }
                                            });
                                        else video.attachEvent("play", function() {
                                            if (nextcaption.data('volume') == "mute")
                                                video.muted = !0;
                                            html5vid.addClass("videoisplaying");
                                            if (nextcaption.data('videoloop') == "loopandnoslidestop") {
                                                opt.videoplaying = !1;
                                                opt.container.trigger('starttimer');
                                                opt.container.trigger('revolution.slide.onvideostop')
                                            } else {
                                                opt.videoplaying = !0;
                                                opt.container.trigger('stoptimer');
                                                opt.container.trigger('revolution.slide.onvideoplay')
                                            }
                                        });
                                        if (video.addEventListener)
                                            video.addEventListener("pause", function() {
                                                html5vid.removeClass("videoisplaying");
                                                opt.videoplaying = !1;
                                                opt.container.trigger('starttimer');
                                                opt.container.trigger('revolution.slide.onvideostop')
                                            });
                                        else video.attachEvent("pause", function() {
                                            html5vid.removeClass("videoisplaying");
                                            opt.videoplaying = !1;
                                            opt.container.trigger('starttimer');
                                            opt.container.trigger('revolution.slide.onvideostop')
                                        });
                                        if (video.addEventListener)
                                            video.addEventListener("ended", function() {
                                                html5vid.removeClass("videoisplaying");
                                                opt.videoplaying = !1;
                                                opt.container.trigger('starttimer');
                                                opt.container.trigger('revolution.slide.onvideostop');
                                                if (opt.nextslideatend == !0)
                                                    opt.container.revnext()
                                            });
                                        else video.attachEvent("ended", function() {
                                            html5vid.removeClass("videoisplaying");
                                            opt.videoplaying = !1;
                                            opt.container.trigger('starttimer');
                                            opt.container.trigger('revolution.slide.onvideostop');
                                            if (opt.nextslideatend == !0)
                                                opt.container.revnext()
                                        })
                                    }
                                    var autoplaywason = !1;
                                    if (nextcaption.data('autoplayonlyfirsttime') == !0 || nextcaption.data('autoplayonlyfirsttime') == "true")
                                        autoplaywason = !0;
                                    var mediaaspect = 16 / 9;
                                    if (nextcaption.data('aspectratio') == "4:3") mediaaspect = 4 / 3;
                                    html5vid.data('mediaAspect', mediaaspect);
                                    if (html5vid.closest('.tp-caption').data('forcecover') == 1) {
                                        updateHTML5Size(html5vid, opt.container);
                                        html5vid.addClass("fullcoveredvideo")
                                    }
                                    jvideo.css({
                                        display: "block"
                                    });
                                    opt.nextslideatend = nextcaption.data('nextslideatend');
                                    if (nextcaption.data('autoplay') == !0 || autoplaywason == !0) {
                                        if (nextcaption.data('videoloop') == "loopandnoslidestop") {
                                            opt.videoplaying = !1;
                                            opt.container.trigger('starttimer');
                                            opt.container.trigger('revolution.slide.onvideostop')
                                        } else {
                                            opt.videoplaying = !0;
                                            opt.container.trigger('stoptimer');
                                            opt.container.trigger('revolution.slide.onvideoplay')
                                        }
                                        if (nextcaption.data('forcerewind') == "on" && !html5vid.hasClass("videoisplaying"))
                                            if (video.currentTime > 0) video.currentTime = 0;
                                        if (nextcaption.data('volume') == "mute")
                                            video.muted = !0;
                                        html5vid.data('timerplay', setTimeout(function() {
                                            if (nextcaption.data('forcerewind') == "on" && !html5vid.hasClass("videoisplaying"))
                                                if (video.currentTime > 0) video.currentTime = 0;
                                            if (nextcaption.data('volume') == "mute")
                                                video.muted = !0;
                                            video.play()
                                        }, 10 + nextcaption.data('start')))
                                    }
                                    if (html5vid.data('ww') == undefined) html5vid.data('ww', jvideo.attr('width'));
                                    if (html5vid.data('hh') == undefined) html5vid.data('hh', jvideo.attr('height'));
                                    if (!nextcaption.hasClass("fullscreenvideo") && nextcaption.data('forcecover') == 1) {
                                        try {
                                            html5vid.width(html5vid.data('ww') * opt.bw);
                                            html5vid.height(html5vid.data('hh') * opt.bh)
                                        } catch (e) {}
                                    }
                                    clearInterval(html5vid.data('interval'))
                                }
                            }), 100)
                        })
                    }
                    if (nextcaption.data('autoplay') == !0) {
                        setTimeout(function() {
                            if (nextcaption.data('videoloop') != "loopandnoslidestop") {
                                opt.videoplaying = !0;
                                opt.container.trigger('stoptimer')
                            }
                        }, 200)
                        if (nextcaption.data('videoloop') != "loopandnoslidestop") {
                            opt.videoplaying = !0;
                            opt.container.trigger('stoptimer')
                        }
                        if (nextcaption.data('autoplayonlyfirsttime') == !0 || nextcaption.data('autoplayonlyfirsttime') == "true") {
                            nextcaption.data('autoplay', !1);
                            nextcaption.data('autoplayonlyfirsttime', !1)
                        }
                    }
                }
                var imw = 0;
                var imh = 0;
                if (nextcaption.find('img').length > 0) {
                    var im = nextcaption.find('img');
                    if (im.width() == 0) im.css({
                        width: "auto"
                    });
                    if (im.height() == 0) im.css({
                        height: "auto"
                    });
                    if (im.data('ww') == undefined && im.width() > 0) im.data('ww', im.width());
                    if (im.data('hh') == undefined && im.height() > 0) im.data('hh', im.height());
                    var ww = im.data('ww');
                    var hh = im.data('hh');
                    if (ww == undefined) ww = 0;
                    if (hh == undefined) hh = 0;
                    im.width(ww * opt.bw);
                    im.height(hh * opt.bh);
                    imw = im.width();
                    imh = im.height()
                } else {
                    if (nextcaption.find('iframe').length > 0 || nextcaption.find('video').length > 0) {
                        var html5vid = !1;
                        var im = nextcaption.find('iframe');
                        if (im.length == 0) {
                            im = nextcaption.find('video');
                            html5vid = !0
                        }
                        im.css({
                            display: "block"
                        });
                        if (nextcaption.data('ww') == undefined) nextcaption.data('ww', im.width());
                        if (nextcaption.data('hh') == undefined) nextcaption.data('hh', im.height());
                        var ww = nextcaption.data('ww');
                        var hh = nextcaption.data('hh');
                        var nc = nextcaption;
                        if (nc.data('fsize') == undefined) nc.data('fsize', parseInt(nc.css('font-size'), 0) || 0);
                        if (nc.data('pt') == undefined) nc.data('pt', parseInt(nc.css('paddingTop'), 0) || 0);
                        if (nc.data('pb') == undefined) nc.data('pb', parseInt(nc.css('paddingBottom'), 0) || 0);
                        if (nc.data('pl') == undefined) nc.data('pl', parseInt(nc.css('paddingLeft'), 0) || 0);
                        if (nc.data('pr') == undefined) nc.data('pr', parseInt(nc.css('paddingRight'), 0) || 0);
                        if (nc.data('mt') == undefined) nc.data('mt', parseInt(nc.css('marginTop'), 0) || 0);
                        if (nc.data('mb') == undefined) nc.data('mb', parseInt(nc.css('marginBottom'), 0) || 0);
                        if (nc.data('ml') == undefined) nc.data('ml', parseInt(nc.css('marginLeft'), 0) || 0);
                        if (nc.data('mr') == undefined) nc.data('mr', parseInt(nc.css('marginRight'), 0) || 0);
                        if (nc.data('bt') == undefined) nc.data('bt', parseInt(nc.css('borderTop'), 0) || 0);
                        if (nc.data('bb') == undefined) nc.data('bb', parseInt(nc.css('borderBottom'), 0) || 0);
                        if (nc.data('bl') == undefined) nc.data('bl', parseInt(nc.css('borderLeft'), 0) || 0);
                        if (nc.data('br') == undefined) nc.data('br', parseInt(nc.css('borderRight'), 0) || 0);
                        if (nc.data('lh') == undefined) nc.data('lh', parseInt(nc.css('lineHeight'), 0) || 0);
                        var fvwidth = opt.width;
                        var fvheight = opt.height;
                        if (fvwidth > opt.startwidth) fvwidth = opt.startwidth;
                        if (fvheight > opt.startheight) fvheight = opt.startheight;
                        if (!nextcaption.hasClass('fullscreenvideo'))
                            nextcaption.css({
                                'font-size': (nc.data('fsize') * opt.bw) + "px",
                                'padding-top': (nc.data('pt') * opt.bh) + "px",
                                'padding-bottom': (nc.data('pb') * opt.bh) + "px",
                                'padding-left': (nc.data('pl') * opt.bw) + "px",
                                'padding-right': (nc.data('pr') * opt.bw) + "px",
                                'margin-top': (nc.data('mt') * opt.bh) + "px",
                                'margin-bottom': (nc.data('mb') * opt.bh) + "px",
                                'margin-left': (nc.data('ml') * opt.bw) + "px",
                                'margin-right': (nc.data('mr') * opt.bw) + "px",
                                'border-top': (nc.data('bt') * opt.bh) + "px",
                                'border-bottom': (nc.data('bb') * opt.bh) + "px",
                                'border-left': (nc.data('bl') * opt.bw) + "px",
                                'border-right': (nc.data('br') * opt.bw) + "px",
                                'line-height': (nc.data('lh') * opt.bh) + "px",
                                'height': (hh * opt.bh) + 'px'
                            });
                        else {
                            offsetx = 0;
                            offsety = 0;
                            nextcaption.data('x', 0)
                            nextcaption.data('y', 0)
                            var ovhh = opt.height
                            if (opt.autoHeight == "on")
                                ovhh = opt.container.height()
                            nextcaption.css({
                                'width': opt.width,
                                'height': ovhh
                            })
                        }
                        if (html5vid == !1) {
                            im.width(ww * opt.bw);
                            im.height(hh * opt.bh)
                        } else if (nextcaption.data('forcecover') != 1 && !nextcaption.hasClass('fullscreenvideo')) {
                            im.width(ww * opt.bw);
                            im.height(hh * opt.bh)
                        }
                        imw = im.width();
                        imh = im.height()
                    } else {
                        nextcaption.find('.tp-resizeme, .tp-resizeme *').each(function() {
                            calcCaptionResponsive(jQuery(this), opt)
                        });
                        if (nextcaption.hasClass("tp-resizeme")) {
                            nextcaption.find('*').each(function() {
                                calcCaptionResponsive(jQuery(this), opt)
                            })
                        }
                        calcCaptionResponsive(nextcaption, opt);
                        imh = nextcaption.outerHeight(!0);
                        imw = nextcaption.outerWidth(!0);
                        var ncch = nextcaption.outerHeight();
                        var bgcol = nextcaption.css('backgroundColor');
                        nextcaption.find('.frontcorner').css({
                            'borderWidth': ncch + "px",
                            'left': (0 - ncch) + 'px',
                            'borderRight': '0px solid transparent',
                            'borderTopColor': bgcol
                        });
                        nextcaption.find('.frontcornertop').css({
                            'borderWidth': ncch + "px",
                            'left': (0 - ncch) + 'px',
                            'borderRight': '0px solid transparent',
                            'borderBottomColor': bgcol
                        });
                        nextcaption.find('.backcorner').css({
                            'borderWidth': ncch + "px",
                            'right': (0 - ncch) + 'px',
                            'borderLeft': '0px solid transparent',
                            'borderBottomColor': bgcol
                        });
                        nextcaption.find('.backcornertop').css({
                            'borderWidth': ncch + "px",
                            'right': (0 - ncch) + 'px',
                            'borderLeft': '0px solid transparent',
                            'borderTopColor': bgcol
                        })
                    }
                }
                if (opt.fullScreenAlignForce == "on") {
                    offsetx = 0;
                    offsety = 0
                }
                if (nextcaption.data('voffset') == undefined) nextcaption.data('voffset', 0);
                if (nextcaption.data('hoffset') == undefined) nextcaption.data('hoffset', 0);
                var vofs = nextcaption.data('voffset') * xbw;
                var hofs = nextcaption.data('hoffset') * xbw;
                var crw = opt.startwidth * xbw;
                var crh = opt.startheight * xbw;
                if (opt.fullScreenAlignForce == "on") {
                    crw = opt.container.width();
                    crh = opt.container.height()
                }
                if (nextcaption.data('x') == "center" || nextcaption.data('xcenter') == 'center') {
                    nextcaption.data('xcenter', 'center');
                    nextcaption.data('x', (crw / 2 - nextcaption.outerWidth(!0) / 2) + hofs)
                }
                if (nextcaption.data('x') == "left" || nextcaption.data('xleft') == 'left') {
                    nextcaption.data('xleft', 'left');
                    nextcaption.data('x', (0) / xbw + hofs)
                }
                if (nextcaption.data('x') == "right" || nextcaption.data('xright') == 'right') {
                    nextcaption.data('xright', 'right');
                    nextcaption.data('x', ((crw - nextcaption.outerWidth(!0)) + hofs) / xbw)
                }
                if (nextcaption.data('y') == "center" || nextcaption.data('ycenter') == 'center') {
                    nextcaption.data('ycenter', 'center');
                    nextcaption.data('y', (crh / 2 - nextcaption.outerHeight(!0) / 2) + vofs)
                }
                if (nextcaption.data('y') == "top" || nextcaption.data('ytop') == 'top') {
                    nextcaption.data('ytop', 'top');
                    nextcaption.data('y', (0) / opt.bh + vofs)
                }
                if (nextcaption.data('y') == "bottom" || nextcaption.data('ybottom') == 'bottom') {
                    nextcaption.data('ybottom', 'bottom');
                    nextcaption.data('y', ((crh - nextcaption.outerHeight(!0)) + vofs) / xbw)
                }
                if (nextcaption.data('start') == undefined) nextcaption.data('start', 1000);
                var easedata = nextcaption.data('easing');
                if (easedata == undefined) easedata = "punchgs.Power1.easeOut";
                var mdelay = nextcaption.data('start') / 1000;
                var mspeed = nextcaption.data('speed') / 1000;
                if (nextcaption.data('x') == "center" || nextcaption.data('xcenter') == 'center')
                    var calcx = (nextcaption.data('x') + offsetx);
                else {
                    var calcx = (xbw * nextcaption.data('x') + offsetx)
                }
                if (nextcaption.data('y') == "center" || nextcaption.data('ycenter') == 'center')
                    var calcy = (nextcaption.data('y') + offsety);
                else {
                    var calcy = (opt.bh * nextcaption.data('y') + offsety)
                }
                punchgs.TweenLite.set(nextcaption, {
                    top: calcy,
                    left: calcx,
                    overwrite: "auto"
                });
                if (staticdirection == 0)
                    internrecalled = !0;
                if (nextcaption.data('timeline') != undefined && !internrecalled) {
                    if (staticdirection != 2)
                        nextcaption.data('timeline').gotoAndPlay(0);
                    internrecalled = !0
                }
                if (!internrecalled) {
                    if (nextcaption.data('timeline') != undefined) {}

                    function animcompleted() {}

                    function tlstart() {}
                    var tl = new punchgs.TimelineLite({
                        smoothChildTiming: !0,
                        onStart: tlstart
                    });
                    tl.pause();
                    if (opt.fullScreenAlignForce == "on") {}
                    var animobject = nextcaption;
                    if (nextcaption.data('mySplitText') != undefined) nextcaption.data('mySplitText').revert();
                    if (nextcaption.data('splitin') == "chars" || nextcaption.data('splitin') == "words" || nextcaption.data('splitin') == "lines" || nextcaption.data('splitout') == "chars" || nextcaption.data('splitout') == "words" || nextcaption.data('splitout') == "lines") {
                        if (nextcaption.find('a').length > 0)
                            nextcaption.data('mySplitText', new punchgs.SplitText(nextcaption.find('a'), {
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            }));
                        else if (nextcaption.find('.tp-layer-inner-rotation').length > 0)
                            nextcaption.data('mySplitText', new punchgs.SplitText(nextcaption.find('.tp-layer-inner-rotation'), {
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            }));
                        else nextcaption.data('mySplitText', new punchgs.SplitText(nextcaption, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        }));
                        nextcaption.addClass("splitted")
                    }
                    if (nextcaption.data('splitin') == "chars")
                        animobject = nextcaption.data('mySplitText').chars;
                    if (nextcaption.data('splitin') == "words")
                        animobject = nextcaption.data('mySplitText').words;
                    if (nextcaption.data('splitin') == "lines")
                        animobject = nextcaption.data('mySplitText').lines;
                    var frm = newAnimObject();
                    var endfrm = newAnimObject();
                    if (nextcaption.data('repeat') != undefined) repeatV = nextcaption.data('repeat');
                    if (nextcaption.data('yoyo') != undefined) yoyoV = nextcaption.data('yoyo');
                    if (nextcaption.data('repeatdelay') != undefined) repeatdelayV = nextcaption.data('repeatdelay');
                    if (nextcaption.hasClass("customin")) frm = getAnimDatas(frm, nextcaption.data('customin'));
                    else if (nextcaption.hasClass("randomrotate")) {
                        frm.scale = Math.random() * 3 + 1;
                        frm.rotation = Math.round(Math.random() * 200 - 100);
                        frm.x = Math.round(Math.random() * 200 - 100);
                        frm.y = Math.round(Math.random() * 200 - 100)
                    } else if (nextcaption.hasClass('lfr') || nextcaption.hasClass('skewfromright')) frm.x = 15 + opt.width;
                    else if (nextcaption.hasClass('lfl') || nextcaption.hasClass('skewfromleft')) frm.x = -15 - imw;
                    else if (nextcaption.hasClass('sfl') || nextcaption.hasClass('skewfromleftshort')) frm.x = -50;
                    else if (nextcaption.hasClass('sfr') || nextcaption.hasClass('skewfromrightshort')) frm.x = 50;
                    else if (nextcaption.hasClass('lft')) frm.y = -25 - imh;
                    else if (nextcaption.hasClass('lfb')) frm.y = 25 + opt.height;
                    else if (nextcaption.hasClass('sft')) frm.y = -50;
                    else if (nextcaption.hasClass('sfb')) frm.y = 50;
                    if (nextcaption.hasClass('skewfromright') || nextcaption.hasClass('skewfromrightshort')) frm.skewX = -85
                    else if (nextcaption.hasClass('skewfromleft') || nextcaption.hasClass('skewfromleftshort')) frm.skewX = 85
                    if (nextcaption.hasClass("fade") || nextcaption.hasClass('sft') || nextcaption.hasClass('sfl') || nextcaption.hasClass('sfb') || nextcaption.hasClass('skewfromleftshort') || nextcaption.hasClass('sfr') || nextcaption.hasClass('skewfromrightshort'))
                        frm.opacity = 0;
                    if (get_browser().toLowerCase() == "safari") {}
                    var elemdelay = (nextcaption.data('elementdelay') == undefined) ? 0 : nextcaption.data('elementdelay');
                    endfrm.ease = frm.ease = (nextcaption.data('easing') == undefined) ? punchgs.Power1.easeInOut : nextcaption.data('easing');
                    frm.data = new Object();
                    frm.data.oldx = frm.x;
                    frm.data.oldy = frm.y;
                    endfrm.data = new Object();
                    endfrm.data.oldx = endfrm.x;
                    endfrm.data.oldy = endfrm.y;
                    frm.x = frm.x * xbw;
                    frm.y = frm.y * xbw;
                    var newtl = new punchgs.TimelineLite();
                    if (staticdirection != 2) {
                        if (nextcaption.hasClass("customin")) {
                            if (animobject != nextcaption)
                                tl.add(punchgs.TweenLite.set(nextcaption, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: 'visible',
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                }));
                            frm.visibility = "hidden";
                            endfrm.visibility = "visible";
                            endfrm.overwrite = "all";
                            endfrm.opacity = 1;
                            endfrm.onComplete = animcompleted();
                            endfrm.delay = mdelay;
                            endfrm.force3D = "auto"
                            tl.add(newtl.staggerFromTo(animobject, mspeed, frm, endfrm, elemdelay), "frame0")
                        } else {
                            frm.visibility = "visible";
                            frm.transformPerspective = 600;
                            if (animobject != nextcaption)
                                tl.add(punchgs.TweenLite.set(nextcaption, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: 'visible',
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                }));
                            endfrm.visibility = "visible";
                            endfrm.delay = mdelay;
                            endfrm.onComplete = animcompleted();
                            endfrm.opacity = 1;
                            endfrm.force3D = "auto";
                            if (nextcaption.hasClass("randomrotate") && animobject != nextcaption) {
                                for (var i = 0; i < animobject.length; i++) {
                                    var obj = new Object();
                                    var endobj = new Object();
                                    jQuery.extend(obj, frm);
                                    jQuery.extend(endobj, endfrm);
                                    frm.scale = Math.random() * 3 + 1;
                                    frm.rotation = Math.round(Math.random() * 200 - 100);
                                    frm.x = Math.round(Math.random() * 200 - 100);
                                    frm.y = Math.round(Math.random() * 200 - 100);
                                    if (i != 0) endobj.delay = mdelay + (i * elemdelay);
                                    tl.append(punchgs.TweenLite.fromTo(animobject[i], mspeed, obj, endobj), "frame0")
                                }
                            } else tl.add(newtl.staggerFromTo(animobject, mspeed, frm, endfrm, elemdelay), "frame0")
                        }
                    }
                    nextcaption.data('timeline', tl);
                    var frames = new Array();
                    if (nextcaption.data('frames') != undefined) {
                        var rowtext = nextcaption.data('frames');
                        rowtext = rowtext.replace(/\s+/g, '');
                        rowtext = rowtext.replace("{", "");
                        var spframes = rowtext.split('}');
                        jQuery.each(spframes, function(index, spframe) {
                            if (spframe.length > 0) {
                                var params = getAnimSteps(spframe);
                                addMoveCaption(nextcaption, opt, params, "frame" + (index + 10), xbw)
                            }
                        })
                    }
                    tl = nextcaption.data('timeline');
                    if ((nextcaption.data('end') != undefined) && (staticdirection == -1 || staticdirection == 2)) {
                        endMoveCaption(nextcaption, opt, nextcaption.data('end') / 1000, frm, "frame99", xbw)
                    } else {
                        if (staticdirection == -1 || staticdirection == 2)
                            endMoveCaption(nextcaption, opt, 999999, frm, "frame99", xbw);
                        else endMoveCaption(nextcaption, opt, 200, frm, "frame99", xbw)
                    }
                    tl = nextcaption.data('timeline');
                    nextcaption.data('timeline', tl);
                    callCaptionLoops(nextcaption, xbw);
                    tl.resume()
                }
            }
            if (internrecalled) {
                killCaptionLoops(nextcaption);
                callCaptionLoops(nextcaption, xbw);
                if (nextcaption.data('timeline') != undefined) {
                    var tweens = nextcaption.data('timeline').getTweensOf();
                    jQuery.each(tweens, function(index, tween) {
                        if (tween.vars.data != undefined) {
                            var newx = tween.vars.data.oldx * xbw;
                            var newy = tween.vars.data.oldy * xbw;
                            if (tween.progress() != 1 && tween.progress() != 0) {
                                try {
                                    tween.vars.x = newx;
                                    tween.vary.y = newy
                                } catch (e) {}
                            } else {
                                if (tween.progress() == 1) {
                                    punchgs.TweenLite.set(tween.target, {
                                        x: newx,
                                        y: newy
                                    })
                                }
                            }
                        }
                    })
                }
            }
        })
        var bt = jQuery('body').find('#' + opt.container.attr('id')).find('.tp-bannertimer');
        bt.data('opt', opt);
        if (mtl != undefined) setTimeout(function() {
            mtl.resume()
        }, 30)
    }
    var get_browser = function() {
        var N = navigator.appName,
            ua = navigator.userAgent,
            tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
        return M[0]
    }
    var get_browser_version = function() {
        var N = navigator.appName,
            ua = navigator.userAgent,
            tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
        return M[1]
    }
    var calcCaptionResponsive = function(nc, opt) {
        if (nc.data('fsize') == undefined) nc.data('fsize', parseInt(nc.css('font-size'), 0) || 0);
        if (nc.data('pt') == undefined) nc.data('pt', parseInt(nc.css('paddingTop'), 0) || 0);
        if (nc.data('pb') == undefined) nc.data('pb', parseInt(nc.css('paddingBottom'), 0) || 0);
        if (nc.data('pl') == undefined) nc.data('pl', parseInt(nc.css('paddingLeft'), 0) || 0);
        if (nc.data('pr') == undefined) nc.data('pr', parseInt(nc.css('paddingRight'), 0) || 0);
        if (nc.data('mt') == undefined) nc.data('mt', parseInt(nc.css('marginTop'), 0) || 0);
        if (nc.data('mb') == undefined) nc.data('mb', parseInt(nc.css('marginBottom'), 0) || 0);
        if (nc.data('ml') == undefined) nc.data('ml', parseInt(nc.css('marginLeft'), 0) || 0);
        if (nc.data('mr') == undefined) nc.data('mr', parseInt(nc.css('marginRight'), 0) || 0);
        if (nc.data('bt') == undefined) nc.data('bt', parseInt(nc.css('borderTopWidth'), 0) || 0);
        if (nc.data('bb') == undefined) nc.data('bb', parseInt(nc.css('borderBottomWidth'), 0) || 0);
        if (nc.data('bl') == undefined) nc.data('bl', parseInt(nc.css('borderLeftWidth'), 0) || 0);
        if (nc.data('br') == undefined) nc.data('br', parseInt(nc.css('borderRightWidth'), 0) || 0);
        if (nc.data('ls') == undefined) nc.data('ls', parseInt(nc.css('letterSpacing'), 0) || 0);
        if (nc.data('lh') == undefined) nc.data('lh', parseInt(nc.css('lineHeight'), 0) || "auto");
        if (nc.data('minwidth') == undefined) nc.data('minwidth', parseInt(nc.css('minWidth'), 0) || 0);
        if (nc.data('minheight') == undefined) nc.data('minheight', parseInt(nc.css('minHeight'), 0) || 0);
        if (nc.data('maxwidth') == undefined) nc.data('maxwidth', parseInt(nc.css('maxWidth'), 0) || "none");
        if (nc.data('maxheight') == undefined) nc.data('maxheight', parseInt(nc.css('maxHeight'), 0) || "none");
        if (nc.data('wii') == undefined) nc.data('wii', parseInt(nc.css('width'), 0) || 0);
        if (nc.data('hii') == undefined) nc.data('hii', parseInt(nc.css('height'), 0) || 0);
        if (nc.data('wan') == undefined) nc.data('wan', nc.css("-webkit-transition"));
        if (nc.data('moan') == undefined) nc.data('moan', nc.css("-moz-animation-transition"));
        if (nc.data('man') == undefined) nc.data('man', nc.css("-ms-animation-transition"));
        if (nc.data('ani') == undefined) nc.data('ani', nc.css("transition"));
        if (!nc.hasClass("tp-splitted")) {
            nc.css("-webkit-transition", "none");
            nc.css("-moz-transition", "none");
            nc.css("-ms-transition", "none");
            nc.css("transition", "none");
            punchgs.TweenLite.set(nc, {
                fontSize: Math.round((nc.data('fsize') * opt.bw)) + "px",
                letterSpacing: Math.floor((nc.data('ls') * opt.bw)) + "px",
                paddingTop: Math.round((nc.data('pt') * opt.bh)) + "px",
                paddingBottom: Math.round((nc.data('pb') * opt.bh)) + "px",
                paddingLeft: Math.round((nc.data('pl') * opt.bw)) + "px",
                paddingRight: Math.round((nc.data('pr') * opt.bw)) + "px",
                marginTop: (nc.data('mt') * opt.bh) + "px",
                marginBottom: (nc.data('mb') * opt.bh) + "px",
                marginLeft: (nc.data('ml') * opt.bw) + "px",
                marginRight: (nc.data('mr') * opt.bw) + "px",
                borderTopWidth: Math.round((nc.data('bt') * opt.bh)) + "px",
                borderBottomWidth: Math.round((nc.data('bb') * opt.bh)) + "px",
                borderLeftWidth: Math.round((nc.data('bl') * opt.bw)) + "px",
                borderRightWidth: Math.round((nc.data('br') * opt.bw)) + "px",
                lineHeight: Math.round((nc.data('lh') * opt.bh)) + "px",
                minWidth: (nc.data('minwidth') * opt.bw) + "px",
                minHeight: (nc.data('minheight') * opt.bh) + "px",
                overwrite: "auto"
            });
            setTimeout(function() {
                nc.css("-webkit-transition", nc.data('wan'));
                nc.css("-moz-transition", nc.data('moan'));
                nc.css("-ms-transition", nc.data('man'));
                nc.css("transition", nc.data('ani'))
            }, 30);
            if (nc.data('maxheight') != 'none')
                nc.css({
                    'maxHeight': (nc.data('maxheight') * opt.bh) + "px"
                });
            if (nc.data('maxwidth') != 'none')
                nc.css({
                    'maxWidth': (nc.data('maxwidth') * opt.bw) + "px"
                })
        }
    }
    var callCaptionLoops = function(nextcaption, factor) {
        nextcaption.find('.rs-pendulum').each(function() {
            var el = jQuery(this);
            if (el.data('timeline') == undefined) {
                el.data('timeline', new punchgs.TimelineLite);
                var startdeg = el.data('startdeg') == undefined ? -20 : el.data('startdeg'),
                    enddeg = el.data('enddeg') == undefined ? 20 : el.data('enddeg');
                speed = el.data('speed') == undefined ? 2 : el.data('speed'), origin = el.data('origin') == undefined ? "50% 50%" : el.data('origin'), easing = el.data('ease') == undefined ? punchgs.Power2.easeInOut : el.data('ease');
                startdeg = startdeg * factor;
                enddeg = enddeg * factor;
                el.data('timeline').append(new punchgs.TweenLite.fromTo(el, speed, {
                    force3D: "auto",
                    rotation: startdeg,
                    transformOrigin: origin
                }, {
                    rotation: enddeg,
                    ease: easing
                }));
                el.data('timeline').append(new punchgs.TweenLite.fromTo(el, speed, {
                    force3D: "auto",
                    rotation: enddeg,
                    transformOrigin: origin
                }, {
                    rotation: startdeg,
                    ease: easing,
                    onComplete: function() {
                        el.data('timeline').restart()
                    }
                }))
            }
        })
        nextcaption.find('.rs-slideloop').each(function() {
            var el = jQuery(this);
            if (el.data('timeline') == undefined) {
                el.data('timeline', new punchgs.TimelineLite);
                var xs = el.data('xs') == undefined ? 0 : el.data('xs'),
                    ys = el.data('ys') == undefined ? 0 : el.data('ys');
                xe = el.data('xe') == undefined ? 0 : el.data('xe'), ye = el.data('ye') == undefined ? 0 : el.data('ye'), speed = el.data('speed') == undefined ? 2 : el.data('speed'), easing = el.data('ease') == undefined ? punchgs.Power2.easeInOut : el.data('ease');
                xs = xs * factor;
                ys = ys * factor;
                xe = xe * factor;
                ye = ye * factor;
                el.data('timeline').append(new punchgs.TweenLite.fromTo(el, speed, {
                    force3D: "auto",
                    x: xs,
                    y: ys
                }, {
                    x: xe,
                    y: ye,
                    ease: easing
                }));
                el.data('timeline').append(new punchgs.TweenLite.fromTo(el, speed, {
                    force3D: "auto",
                    x: xe,
                    y: ye
                }, {
                    x: xs,
                    y: ys,
                    onComplete: function() {
                        el.data('timeline').restart()
                    }
                }))
            }
        })
        nextcaption.find('.rs-pulse').each(function() {
            var el = jQuery(this);
            if (el.data('timeline') == undefined) {
                el.data('timeline', new punchgs.TimelineLite);
                var zoomstart = el.data('zoomstart') == undefined ? 0 : el.data('zoomstart'),
                    zoomend = el.data('zoomend') == undefined ? 0 : el.data('zoomend');
                speed = el.data('speed') == undefined ? 2 : el.data('speed'), easing = el.data('ease') == undefined ? punchgs.Power2.easeInOut : el.data('ease');
                el.data('timeline').append(new punchgs.TweenLite.fromTo(el, speed, {
                    force3D: "auto",
                    scale: zoomstart
                }, {
                    scale: zoomend,
                    ease: easing
                }));
                el.data('timeline').append(new punchgs.TweenLite.fromTo(el, speed, {
                    force3D: "auto",
                    scale: zoomend
                }, {
                    scale: zoomstart,
                    onComplete: function() {
                        el.data('timeline').restart()
                    }
                }))
            }
        })
        nextcaption.find('.rs-wave').each(function() {
            var el = jQuery(this);
            if (el.data('timeline') == undefined) {
                el.data('timeline', new punchgs.TimelineLite);
                var angle = el.data('angle') == undefined ? 10 : el.data('angle'),
                    radius = el.data('radius') == undefined ? 10 : el.data('radius'),
                    speed = el.data('speed') == undefined ? -20 : el.data('speed'),
                    origin = el.data('origin') == undefined ? -20 : el.data('origin');
                angle = angle * factor;
                radius = radius * factor;
                var angobj = {
                    a: 0,
                    ang: angle,
                    element: el,
                    unit: radius
                };
                el.data('timeline').append(new punchgs.TweenLite.fromTo(angobj, speed, {
                    a: 360
                }, {
                    a: 0,
                    force3D: "auto",
                    ease: punchgs.Linear.easeNone,
                    onUpdate: function() {
                        var rad = angobj.a * (Math.PI / 180);
                        punchgs.TweenLite.to(angobj.element, 0.1, {
                            force3D: "auto",
                            x: Math.cos(rad) * angobj.unit,
                            y: angobj.unit * (1 - Math.sin(rad))
                        })
                    },
                    onComplete: function() {
                        el.data('timeline').restart()
                    }
                }))
            }
        })
    }
    var killCaptionLoops = function(nextcaption) {
        nextcaption.find('.rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave').each(function() {
            var el = jQuery(this);
            if (el.data('timeline') != undefined) {
                el.data('timeline').pause();
                el.data('timeline', null)
            }
        })
    }
    var removeTheCaptions = function(actli, opt) {
        var removetime = 0;
        var allcaptions = actli.find('.tp-caption'),
            allstaticcaptions = opt.container.find('.tp-static-layers').find('.tp-caption');
        jQuery.each(allstaticcaptions, function(index, staticcapt) {
            allcaptions.push(staticcapt)
        });
        allcaptions.each(function(i) {
            var staticdirection = -1;
            var nextcaption = jQuery(this);
            if (nextcaption.hasClass("tp-static-layer")) {
                if (nextcaption.data('startslide') == -1 || nextcaption.data('startslide') == "-1")
                    nextcaption.data('startslide', 0);
                if (nextcaption.data('endslide') == -1 || nextcaption.data('endslide') == "-1")
                    nextcaption.data('endslide', opt.slideamount);
                if (nextcaption.hasClass("tp-is-shown")) {
                    if ((nextcaption.data('startslide') > opt.next) || (nextcaption.data('endslide') < opt.next)) {
                        staticdirection = 2;
                        nextcaption.removeClass("tp-is-shown")
                    } else {
                        staticdirection = 0
                    }
                } else {
                    staticdirection = 2
                }
            }
            if (staticdirection != 0) {
                killCaptionLoops(nextcaption);
                if (nextcaption.find('iframe').length > 0) {
                    punchgs.TweenLite.to(nextcaption.find('iframe'), 0.2, {
                        autoAlpha: 0
                    });
                    if (is_mobile()) nextcaption.find('iframe').remove();
                    try {
                        var ifr = nextcaption.find('iframe');
                        var id = ifr.attr('id');
                        var froogaloop = $f(id);
                        froogaloop.api("pause");
                        clearTimeout(nextcaption.data('timerplay'))
                    } catch (e) {}
                    try {
                        var player = nextcaption.data('player');
                        player.stopVideo();
                        clearTimeout(nextcaption.data('timerplay'))
                    } catch (e) {}
                }
                if (nextcaption.find('video').length > 0) {
                    try {
                        nextcaption.find('video').each(function(i) {
                            var html5vid = jQuery(this).parent();
                            var videoID = html5vid.attr('id');
                            clearTimeout(html5vid.data('timerplay'));
                            var video = this;
                            video.pause()
                        })
                    } catch (e) {}
                }
                try {
                    var tl = nextcaption.data('timeline');
                    var endstarts = tl.getLabelTime("frame99");
                    var curtime = tl.time();
                    if (endstarts > curtime) {
                        var tweens = tl.getTweensOf(nextcaption);
                        jQuery.each(tweens, function(index, tw) {
                            if (index != 0)
                                tw.pause()
                        });
                        if (nextcaption.css('opacity') != 0) {
                            var spp = nextcaption.data('endspeed') == undefined ? nextcaption.data('speed') : nextcaption.data('endspeed');
                            if (spp > removetime) removetime = spp;
                            tl.play("frame99")
                        } else tl.progress(1, !1)
                    }
                } catch (e) {}
            }
        });
        return removetime
    }
    var addMoveCaption = function(nextcaption, opt, params, frame, downscale) {
        var tl = nextcaption.data('timeline');
        var newtl = new punchgs.TimelineLite();
        var animobject = nextcaption;
        if (params.typ == "chars") animobject = nextcaption.data('mySplitText').chars;
        else if (params.typ == "words") animobject = nextcaption.data('mySplitText').words;
        else if (params.typ == "lines") animobject = nextcaption.data('mySplitText').lines;
        params.animation.ease = params.ease;
        if (params.animation.rotationZ != undefined) params.animation.rotation = params.animation.rotationZ;
        params.animation.data = new Object();
        params.animation.data.oldx = params.animation.x;
        params.animation.data.oldy = params.animation.y;
        params.animation.x = params.animation.x * downscale;
        params.animation.y = params.animation.y * downscale;
        tl.add(newtl.staggerTo(animobject, params.speed, params.animation, params.elementdelay), params.start);
        tl.addLabel(frame, params.start);
        nextcaption.data('timeline', tl)
    }
    var endMoveCaption = function(nextcaption, opt, mdelay, backwards, frame, downscale) {
        var tl = nextcaption.data('timeline');
        var newtl = new punchgs.TimelineLite();
        var frm = newAnimObject();
        var mspeed = (nextcaption.data('endspeed') == undefined) ? nextcaption.data('speed') : nextcaption.data('endspeed');
        frm.ease = (nextcaption.data('endeasing') == undefined) ? punchgs.Power1.easeInOut : nextcaption.data('endeasing');
        mspeed = mspeed / 1000;
        if (nextcaption.hasClass('ltr') || nextcaption.hasClass('ltl') || nextcaption.hasClass('str') || nextcaption.hasClass('stl') || nextcaption.hasClass('ltt') || nextcaption.hasClass('ltb') || nextcaption.hasClass('stt') || nextcaption.hasClass('stb') || nextcaption.hasClass('skewtoright') || nextcaption.hasClass('skewtorightshort') || nextcaption.hasClass('skewtoleft') || nextcaption.hasClass('skewtoleftshort') || nextcaption.hasClass('fadeout') || nextcaption.hasClass("randomrotateout")) {
            if (nextcaption.hasClass('skewtoright') || nextcaption.hasClass('skewtorightshort')) frm.skewX = 35
            else if (nextcaption.hasClass('skewtoleft') || nextcaption.hasClass('skewtoleftshort')) frm.skewX = -35
            if (nextcaption.hasClass('ltr') || nextcaption.hasClass('skewtoright'))
                frm.x = opt.width + 60;
            else if (nextcaption.hasClass('ltl') || nextcaption.hasClass('skewtoleft'))
                frm.x = 0 - (opt.width + 60);
            else if (nextcaption.hasClass('ltt'))
                frm.y = 0 - (opt.height + 60);
            else if (nextcaption.hasClass('ltb'))
                frm.y = opt.height + 60;
            else if (nextcaption.hasClass('str') || nextcaption.hasClass('skewtorightshort')) {
                frm.x = 50;
                frm.opacity = 0
            } else if (nextcaption.hasClass('stl') || nextcaption.hasClass('skewtoleftshort')) {
                frm.x = -50;
                frm.opacity = 0
            } else if (nextcaption.hasClass('stt')) {
                frm.y = -50;
                frm.opacity = 0
            } else if (nextcaption.hasClass('stb')) {
                frm.y = 50;
                frm.opacity = 0
            } else if (nextcaption.hasClass("randomrotateout")) {
                frm.x = Math.random() * opt.width;
                frm.y = Math.random() * opt.height;
                frm.scale = Math.random() * 2 + 0.3;
                frm.rotation = Math.random() * 360 - 180;
                frm.opacity = 0
            } else if (nextcaption.hasClass('fadeout')) {
                frm.opacity = 0
            }
            if (nextcaption.hasClass('skewtorightshort')) frm.x = 270;
            else if (nextcaption.hasClass('skewtoleftshort')) frm.x = -270
            frm.data = new Object();
            frm.data.oldx = frm.x;
            frm.data.oldy = frm.y;
            frm.x = frm.x * downscale;
            frm.y = frm.y * downscale;
            frm.overwrite = "auto";
            var animobject = nextcaption;
            var animobject = nextcaption;
            if (nextcaption.data('splitout') == "chars") animobject = nextcaption.data('mySplitText').chars;
            else if (nextcaption.data('splitout') == "words") animobject = nextcaption.data('mySplitText').words;
            else if (nextcaption.data('splitout') == "lines") animobject = nextcaption.data('mySplitText').lines;
            var elemdelay = (nextcaption.data('endelementdelay') == undefined) ? 0 : nextcaption.data('endelementdelay');
            tl.add(newtl.staggerTo(animobject, mspeed, frm, elemdelay), mdelay)
        } else if (nextcaption.hasClass("customout")) {
            frm = getAnimDatas(frm, nextcaption.data('customout'));
            var animobject = nextcaption;
            if (nextcaption.data('splitout') == "chars") animobject = nextcaption.data('mySplitText').chars;
            else if (nextcaption.data('splitout') == "words") animobject = nextcaption.data('mySplitText').words;
            else if (nextcaption.data('splitout') == "lines") animobject = nextcaption.data('mySplitText').lines;
            var elemdelay = (nextcaption.data('endelementdelay') == undefined) ? 0 : nextcaption.data('endelementdelay');
            frm.onStart = function() {
                punchgs.TweenLite.set(nextcaption, {
                    transformPerspective: frm.transformPerspective,
                    transformOrigin: frm.transformOrigin,
                    overwrite: "auto"
                })
            }
            frm.data = new Object();
            frm.data.oldx = frm.x;
            frm.data.oldy = frm.y;
            frm.x = frm.x * downscale;
            frm.y = frm.y * downscale;
            tl.add(newtl.staggerTo(animobject, mspeed, frm, elemdelay), mdelay)
        } else {
            backwards.delay = 0;
            tl.add(punchgs.TweenLite.to(nextcaption, mspeed, backwards), mdelay)
        }
        tl.addLabel(frame, mdelay);
        nextcaption.data('timeline', tl)
    }
    var removeAllListeners = function(container, opt) {
        container.children().each(function() {
            try {
                jQuery(this).die('click')
            } catch (e) {}
            try {
                jQuery(this).die('mouseenter')
            } catch (e) {}
            try {
                jQuery(this).die('mouseleave')
            } catch (e) {}
            try {
                jQuery(this).unbind('hover')
            } catch (e) {}
        })
        try {
            container.die('click', 'mouseenter', 'mouseleave')
        } catch (e) {}
        clearInterval(opt.cdint);
        container = null
    }
    var countDown = function(container, opt) {
        opt.cd = 0;
        opt.loop = 0;
        if (opt.stopAfterLoops != undefined && opt.stopAfterLoops > -1)
            opt.looptogo = opt.stopAfterLoops;
        else opt.looptogo = 9999999;
        if (opt.stopAtSlide != undefined && opt.stopAtSlide > -1)
            opt.lastslidetoshow = opt.stopAtSlide;
        else opt.lastslidetoshow = 999;
        opt.stopLoop = "off";
        if (opt.looptogo == 0) opt.stopLoop = "on";
        if (opt.slideamount > 1 && !(opt.stopAfterLoops == 0 && opt.stopAtSlide == 1)) {
            var bt = container.find('.tp-bannertimer');
            container.on('stoptimer', function() {
                var bt = jQuery(this).find('.tp-bannertimer');
                bt.data('tween').pause();
                if (opt.hideTimerBar == "on") bt.css({
                    visibility: "hidden"
                })
            });
            container.on('starttimer', function() {
                if (opt.conthover != 1 && opt.videoplaying != !0 && opt.width > opt.hideSliderAtLimit && opt.bannertimeronpause != !0 && opt.overnav != !0)
                    if ((opt.stopLoop == "on" && opt.next == opt.lastslidetoshow - 1) || opt.noloopanymore == 1) {
                        opt.noloopanymore = 1
                    }
                else {
                    bt.css({
                        visibility: "visible"
                    });
                    bt.data('tween').resume()
                }
                if (opt.hideTimerBar == "on") bt.css({
                    visibility: "hidden"
                })
            });
            container.on('restarttimer', function() {
                var bt = jQuery(this).find('.tp-bannertimer');
                if ((opt.stopLoop == "on" && opt.next == opt.lastslidetoshow - 1) || opt.noloopanymore == 1) {
                    opt.noloopanymore = 1
                } else {
                    bt.css({
                        visibility: "visible"
                    });
                    bt.data('tween').kill();
                    bt.data('tween', punchgs.TweenLite.fromTo(bt, opt.delay / 1000, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: countDownNext,
                        delay: 1
                    }))
                }
                if (opt.hideTimerBar == "on") bt.css({
                    visibility: "hidden"
                })
            });
            container.on('nulltimer', function() {
                bt.data('tween').pause(0);
                if (opt.hideTimerBar == "on") bt.css({
                    visibility: "hidden"
                })
            });
            var countDownNext = function() {
                if (jQuery('body').find(container).length == 0) {
                    removeAllListeners(container, opt);
                    clearInterval(opt.cdint)
                }
                container.trigger("revolution.slide.slideatend");
                if (container.data('conthover-changed') == 1) {
                    opt.conthover = container.data('conthover');
                    container.data('conthover-changed', 0)
                }
                opt.act = opt.next;
                opt.next = opt.next + 1;
                if (opt.next > container.find('>ul >li').length - 1) {
                    opt.next = 0;
                    opt.looptogo = opt.looptogo - 1;
                    if (opt.looptogo <= 0) {
                        opt.stopLoop = "on"
                    }
                }
                if (opt.stopLoop == "on" && opt.next == opt.lastslidetoshow - 1) {
                    container.find('.tp-bannertimer').css({
                        'visibility': 'hidden'
                    });
                    container.trigger('revolution.slide.onstop');
                    opt.noloopanymore = 1
                } else {
                    bt.data('tween').restart()
                }
                swapSlide(container, opt)
            }
            bt.data('tween', punchgs.TweenLite.fromTo(bt, opt.delay / 1000, {
                width: "0%"
            }, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: countDownNext,
                delay: 1
            }));
            bt.data('opt', opt);
            container.hover(function() {
                if (opt.onHoverStop == "on" && (!is_mobile())) {
                    container.trigger('stoptimer');
                    container.trigger('revolution.slide.onpause');
                    var nextsh = container.find('>ul >li:eq(' + opt.next + ') .slotholder');
                    nextsh.find('.defaultimg').each(function() {
                        var dimg = jQuery(this);
                        if (dimg.data('kenburn') != undefined) {
                            dimg.data('kenburn').pause()
                        }
                    })
                }
            }, function() {
                if (container.data('conthover') != 1) {
                    container.trigger('revolution.slide.onresume');
                    container.trigger('starttimer');
                    var nextsh = container.find('>ul >li:eq(' + opt.next + ') .slotholder');
                    nextsh.find('.defaultimg').each(function() {
                        var dimg = jQuery(this);
                        if (dimg.data('kenburn') != undefined) {
                            dimg.data('kenburn').play()
                        }
                    })
                }
            })
        }
    }
    var is_mobile = function() {
        var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'Android', 'webos', , 'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
        var ismobile = !1;
        for (i in agents) {
            if (navigator.userAgent.split(agents[i]).length > 1) {
                ismobile = !0
            }
        }
        return ismobile
    }
    var calculateKenBurnScales = function(proc, sloth, opt) {
        var ow = sloth.data('owidth');
        var oh = sloth.data('oheight');
        if (ow / oh > opt.width / opt.height) {
            var factor = (opt.container.width() / ow);
            var nheight = oh * factor;
            var hfactor = (nheight / opt.container.height()) * proc;
            proc = proc * (100 / hfactor);
            hfactor = 100;
            proc = proc;
            return (proc + "% " + hfactor + "%" + " 1")
        } else {
            var factor = (opt.container.width() / ow);
            var nheight = oh * factor;
            var hfactor = (nheight / opt.container.height()) * proc;
            return (proc + "% " + hfactor + "%")
        }
    }
    var startKenBurn = function(container, opt, recalc, prepareonly) {
        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')')
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)')
        }
        opt.lastslide = opt.act;
        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')'),
            nextsh = nextli.find('.slotholder'),
            bgps = nextsh.data('bgposition'),
            bgpe = nextsh.data('bgpositionend'),
            zos = nextsh.data('zoomstart') / 100,
            zoe = nextsh.data('zoomend') / 100,
            ros = nextsh.data('rotationstart'),
            roe = nextsh.data('rotationend'),
            bgfs = nextsh.data('bgfit'),
            bgfe = nextsh.data('bgfitend'),
            easeme = nextsh.data('easeme'),
            dur = nextsh.data('duration') / 1000,
            bgfb = 100;
        if (bgfs == undefined) bgfs = 100;
        if (bgfe == undefined) bgfe = 100;
        var obgfs = bgfs,
            obgfe = bgfe;
        bgfs = calculateKenBurnScales(bgfs, nextsh, opt);
        bgfe = calculateKenBurnScales(bgfe, nextsh, opt);
        bgfb = calculateKenBurnScales(100, nextsh, opt);
        if (zos == undefined) zos = 1;
        if (zoe == undefined) zoe = 1;
        if (ros == undefined) ros = 0;
        if (roe == undefined) roe = 0;
        if (zos < 1) zos = 1;
        if (zoe < 1) zoe = 1;
        var imgobj = new Object();
        imgobj.w = parseInt(bgfb.split(" ")[0], 0), imgobj.h = parseInt(bgfb.split(" ")[1], 0);
        var turned = !1;
        if (bgfb.split(" ")[2] == "1") {
            turned = !0
        }
        nextsh.find('.defaultimg').each(function() {
            var defimg = jQuery(this);
            if (nextsh.find('.kenburnimg').length == 0)
                nextsh.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + defimg.attr('src') + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + imgobj.w + '%;height:' + imgobj.h + '%;"></div>');
            else {
                nextsh.find('.kenburnimg img').css({
                    width: imgobj.w + '%',
                    height: imgobj.h + '%'
                })
            }
            var kbimg = nextsh.find('.kenburnimg img');
            var imgs = calculateKenBurnImgPos(opt, bgps, bgfs, kbimg, turned),
                imge = calculateKenBurnImgPos(opt, bgpe, bgfe, kbimg, turned);
            if (turned) {
                imgs.w = obgfs / 100;
                imge.w = obgfe / 100
            }
            if (prepareonly) {
                punchgs.TweenLite.set(kbimg, {
                    autoAlpha: 0,
                    transformPerspective: 1200,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: imgs.w,
                    x: imgs.x,
                    y: imgs.y
                });
                var sx = imgs.w,
                    ww = (sx * kbimg.width()) - opt.width,
                    hh = (sx * kbimg.height()) - opt.height,
                    hor = Math.abs((imgs.x / ww) * 100),
                    ver = Math.abs((imgs.y / hh) * 100);
                if (hh == 0) ver = 0;
                if (ww == 0) hor = 0;
                defimg.data('bgposition', hor + "% " + ver + "%");
                if (!isIE(8)) defimg.data('currotate', getRotationDegrees(kbimg));
                if (!isIE(8)) defimg.data('curscale', (imgobj.w * sx) + "%  " + (imgobj.h * sx + "%"));
                nextsh.find('.kenburnimg').remove()
            } else defimg.data('kenburn', punchgs.TweenLite.fromTo(kbimg, dur, {
                autoAlpha: 1,
                force3D: punchgs.force3d,
                transformOrigin: "0% 0%",
                top: 0,
                left: 0,
                scale: imgs.w,
                x: imgs.x,
                y: imgs.y
            }, {
                autoAlpha: 1,
                rotationZ: roe,
                ease: easeme,
                x: imge.x,
                y: imge.y,
                scale: imge.w,
                onUpdate: function() {
                    var sx = kbimg[0]._gsTransform.scaleX;
                    var ww = (sx * kbimg.width()) - opt.width,
                        hh = (sx * kbimg.height()) - opt.height,
                        hor = Math.abs((kbimg[0]._gsTransform.x / ww) * 100),
                        ver = Math.abs((kbimg[0]._gsTransform.y / hh) * 100);
                    if (hh == 0) ver = 0;
                    if (ww == 0) hor = 0;
                    defimg.data('bgposition', hor + "% " + ver + "%");
                    if (!isIE(8)) defimg.data('currotate', getRotationDegrees(kbimg));
                    if (!isIE(8)) defimg.data('curscale', (imgobj.w * sx) + "%  " + (imgobj.h * sx + "%"))
                }
            }))
        })
    }
    var calculateKenBurnImgPos = function(opt, bgp, bgf, img, turned) {
        var imgobj = new Object;
        if (!turned)
            imgobj.w = parseInt(bgf.split(" ")[0], 0) / 100;
        else imgobj.w = parseInt(bgf.split(" ")[1], 0) / 100;
        switch (bgp) {
            case "left top":
            case "top left":
                imgobj.x = 0;
                imgobj.y = 0;
                break;
            case "center top":
            case "top center":
                imgobj.x = (((0 - img.width()) * imgobj.w) + parseInt(opt.width, 0)) / 2;
                imgobj.y = 0;
                break;
            case "top right":
            case "right top":
                imgobj.x = ((0 - img.width()) * imgobj.w) + parseInt(opt.width, 0);
                imgobj.y = 0;
                break;
            case "center left":
            case "left center":
                imgobj.x = 0;
                imgobj.y = (((0 - img.height()) * imgobj.w) + parseInt(opt.height, 0)) / 2;
                break;
            case "center center":
                imgobj.x = (((0 - img.width()) * imgobj.w) + parseInt(opt.width, 0)) / 2;
                imgobj.y = (((0 - img.height()) * imgobj.w) + parseInt(opt.height, 0)) / 2;
                break;
            case "center right":
            case "right center":
                imgobj.x = ((0 - img.width()) * imgobj.w) + parseInt(opt.width, 0);
                imgobj.y = (((0 - img.height()) * imgobj.w) + parseInt(opt.height, 0)) / 2;
                break;
            case "bottom left":
            case "left bottom":
                imgobj.x = 0;
                imgobj.y = ((0 - img.height()) * imgobj.w) + parseInt(opt.height, 0);
                break;
            case "bottom center":
            case "center bottom":
                imgobj.x = (((0 - img.width()) * imgobj.w) + parseInt(opt.width, 0)) / 2;
                imgobj.y = ((0 - img.height()) * imgobj.w) + parseInt(opt.height, 0);
                break;
            case "bottom right":
            case "right bottom":
                imgobj.x = ((0 - img.width()) * imgobj.w) + parseInt(opt.width, 0);
                imgobj.y = ((0 - img.height()) * imgobj.w) + parseInt(opt.height, 0);
                break
        }
        return imgobj
    }
    var getRotationDegrees = function(obj) {
        var matrix = obj.css("-webkit-transform") || obj.css("-moz-transform") || obj.css("-ms-transform") || obj.css("-o-transform") || obj.css("transform");
        if (matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI))
        } else {
            var angle = 0
        }
        return (angle < 0) ? angle += 360 : angle
    }
    var stopKenBurn = function(container, opt) {
        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')')
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)')
        }
        opt.lastslide = opt.act;
        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')');
        var actsh = actli.find('.slotholder');
        var nextsh = nextli.find('.slotholder');
        container.find('.defaultimg').each(function() {
            var defimg = jQuery(this);
            punchgs.TweenLite.killTweensOf(defimg, !1);
            punchgs.TweenLite.set(defimg, {
                scale: 1,
                rotationZ: 0
            });
            punchgs.TweenLite.killTweensOf(defimg.data('kenburn img'), !1);
            if (defimg.data('kenburn') != undefined) {
                defimg.data('kenburn').pause()
            }
            if (defimg.data('currotate') != undefined && defimg.data('bgposition') != undefined && defimg.data('curscale') != undefined)
                punchgs.TweenLite.set(defimg, {
                    rotation: defimg.data('currotate'),
                    backgroundPosition: defimg.data('bgposition'),
                    backgroundSize: defimg.data('curscale')
                });
            if (defimg != undefined && defimg.data('kenburn img') != undefined && defimg.data('kenburn img').length > 0) punchgs.TweenLite.set(defimg.data('kenburn img'), {
                autoAlpha: 0
            })
        })
    }
    var checkForParallax = function(container, opt) {
        if (is_mobile() && opt.parallaxDisableOnMobile == "on") return !1;
        container.find('>ul:first-child >li').each(function() {
            var li = jQuery(this);
            for (var i = 1; i <= 10; i++)
                li.find('.rs-parallaxlevel-' + i).each(function() {
                    var pw = jQuery(this);
                    pw.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + pw.css('zIndex') + '" class="tp-parallax-container" data-parallaxlevel="' + opt.parallaxLevels[i - 1] + '"></div>')
                })
        })
        if (opt.parallax == "mouse" || opt.parallax == "scroll+mouse" || opt.parallax == "mouse+scroll") {
            container.mouseenter(function(event) {
                var currslide = container.find('.current-sr-slide-visible');
                var t = container.offset().top,
                    l = container.offset().left,
                    ex = (event.pageX - l),
                    ey = (event.pageY - t);
                currslide.data("enterx", ex);
                currslide.data("entery", ey)
            })
            container.on('mousemove.hoverdir, mouseleave.hoverdir', function(event) {
                var currslide = container.find('.current-sr-slide-visible');
                switch (event.type) {
                    case "mousemove":
                        var t = container.offset().top,
                            l = container.offset().left,
                            mh = currslide.data("enterx"),
                            mv = currslide.data("entery"),
                            diffh = (mh - (event.pageX - l)),
                            diffv = (mv - (event.pageY - t));
                        currslide.find(".tp-parallax-container").each(function() {
                            var pc = jQuery(this),
                                pl = parseInt(pc.data('parallaxlevel'), 0) / 100,
                                offsh = diffh * pl,
                                offsv = diffv * pl;
                            if (opt.parallax == "scroll+mouse" || opt.parallax == "mouse+scroll")
                                punchgs.TweenLite.to(pc, 0.4, {
                                    force3D: "auto",
                                    x: offsh,
                                    ease: punchgs.Power3.easeOut,
                                    overwrite: "all"
                                });
                            else punchgs.TweenLite.to(pc, 0.4, {
                                force3D: "auto",
                                x: offsh,
                                y: offsv,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        })
                        break;
                    case "mouseleave":
                        currslide.find(".tp-parallax-container").each(function() {
                            var pc = jQuery(this);
                            if (opt.parallax == "scroll+mouse" || opt.parallax == "mouse+scroll")
                                punchgs.TweenLite.to(pc, 1.5, {
                                    force3D: "auto",
                                    x: 0,
                                    ease: punchgs.Power3.easeOut
                                });
                            else punchgs.TweenLite.to(pc, 1.5, {
                                force3D: "auto",
                                x: 0,
                                y: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                        break
                }
            });
            if (is_mobile())
                window.ondeviceorientation = function(event) {
                    var y = Math.round(event.beta || 0),
                        x = Math.round(event.gamma || 0);
                    var currslide = container.find('.current-sr-slide-visible');
                    if (jQuery(window).width() > jQuery(window).height()) {
                        var xx = x;
                        x = y;
                        y = xx
                    }
                    var curh = 360 / container.width() * x,
                        curv = 180 / container.height() * y;
                    currslide.find(".tp-parallax-container").each(function() {
                        var pc = jQuery(this),
                            pl = parseInt(pc.data('parallaxlevel'), 0) / 100,
                            offsh = curh * pl,
                            offsv = curv * pl;
                        punchgs.TweenLite.to(pc, 0.2, {
                            force3D: "auto",
                            x: offsh,
                            y: offsv,
                            ease: punchgs.Power3.easeOut
                        })
                    })
                }
        }
        if (opt.parallax == "scroll" || opt.parallax == "scroll+mouse" || opt.parallax == "mouse+scroll") {
            jQuery(window).on('scroll', function(event) {
                scrollParallax(container, opt)
            })
        }
    }
    var scrollParallax = function(container, opt) {
        if (is_mobile() && opt.parallaxDisableOnMobile == "on") return !1;
        var t = container.offset().top,
            st = jQuery(window).scrollTop(),
            dist = t + container.height() / 2,
            mv = t + container.height() / 2 - st,
            wh = jQuery(window).height() / 2,
            diffv = wh - mv;
        if (dist < wh) diffv = diffv - (wh - dist);
        var currslide = container.find('.current-sr-slide-visible');
        container.find(".tp-parallax-container").each(function(i) {
            var pc = jQuery(this),
                pl = parseInt(pc.data('parallaxlevel'), 0) / 100,
                offsv = diffv * pl;
            pc.data('parallaxoffset', offsv);
            punchgs.TweenLite.to(pc, 0.2, {
                force3D: "auto",
                y: offsv,
                ease: punchgs.Power3.easeOut
            })
        })
        if (opt.parallaxBgFreeze != "on") {
            var pl = opt.parallaxLevels[0] / 100,
                offsv = diffv * pl;
            punchgs.TweenLite.to(container, 0.2, {
                force3D: "auto",
                y: offsv,
                ease: punchgs.Power3.easeOut
            })
        }
    }
    var createThumbs = function(container, opt) {
        var cap = container.parent();
        if (opt.navigationType == "thumb" || opt.navsecond == "both") {
            cap.append('<div class="tp-bullets tp-thumbs ' + opt.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')
        }
        var bullets = cap.find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
        var bup = bullets.parent();
        bup.width(opt.thumbWidth * opt.thumbAmount);
        bup.height(opt.thumbHeight);
        bup.parent().width(opt.thumbWidth * opt.thumbAmount);
        bup.parent().height(opt.thumbHeight);
        container.find('>ul:first >li').each(function(i) {
            var li = container.find(">ul:first >li:eq(" + i + ")");
            var bgcolor = li.find(".defaultimg").css("backgroundColor");
            if (li.data('thumb') != undefined)
                var src = li.data('thumb')
            else var src = li.find("img:first").attr('src');
            bullets.append('<div class="bullet thumb" style="background-color:' + bgcolor + ';position:relative;width:' + opt.thumbWidth + 'px;height:' + opt.thumbHeight + 'px;background-image:url(' + src + ') !important;background-size:cover;background-position:center center;"></div>');
            var bullet = bullets.find('.bullet:first')
        });
        var minwidth = 10;
        bullets.find('.bullet').each(function(i) {
            var bul = jQuery(this);
            if (i == opt.slideamount - 1) bul.addClass('last');
            if (i == 0) bul.addClass('first');
            bul.width(opt.thumbWidth);
            bul.height(opt.thumbHeight);
            if (minwidth < bul.outerWidth(!0)) minwidth = bul.outerWidth(!0);
            bul.click(function() {
                if (opt.transition == 0 && bul.index() != opt.act) {
                    opt.next = bul.index();
                    callingNewSlide(opt, container)
                }
            })
        });
        var max = minwidth * container.find('>ul:first >li').length;
        var thumbconwidth = bullets.parent().width();
        opt.thumbWidth = minwidth;
        if (thumbconwidth < max) {
            jQuery(document).mousemove(function(e) {
                jQuery('body').data('mousex', e.pageX)
            });
            bullets.parent().mouseenter(function() {
                var $this = jQuery(this);
                $this.addClass("over");
                var offset = $this.offset();
                var x = jQuery('body').data('mousex') - offset.left;
                var thumbconwidth = $this.width();
                var minwidth = $this.find('.bullet:first').outerWidth(!0);
                var max = minwidth * container.find('>ul:first >li').length;
                var diff = (max - thumbconwidth) + 15;
                var steps = diff / thumbconwidth;
                x = x - 30;
                var pos = (0 - ((x) * steps));
                if (pos > 0) pos = 0;
                if (pos < 0 - max + thumbconwidth) pos = 0 - max + thumbconwidth;
                moveThumbSliderToPosition($this, pos, 200)
            });
            bullets.parent().mousemove(function() {
                var $this = jQuery(this);
                var offset = $this.offset();
                var x = jQuery('body').data('mousex') - offset.left;
                var thumbconwidth = $this.width();
                var minwidth = $this.find('.bullet:first').outerWidth(!0);
                var max = minwidth * container.find('>ul:first >li').length - 1;
                var diff = (max - thumbconwidth) + 15;
                var steps = diff / thumbconwidth;
                x = x - 3;
                if (x < 6) x = 0;
                if (x + 3 > thumbconwidth - 6) x = thumbconwidth;
                var pos = (0 - ((x) * steps));
                if (pos > 0) pos = 0;
                if (pos < 0 - max + thumbconwidth) pos = 0 - max + thumbconwidth;
                moveThumbSliderToPosition($this, pos, 0)
            });
            bullets.parent().mouseleave(function() {
                var $this = jQuery(this);
                $this.removeClass("over");
                moveSelectedThumb(container)
            })
        }
    }
    var moveSelectedThumb = function(container) {
        var bullets = container.parent().find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
        var $this = bullets.parent();
        var offset = $this.offset();
        var minwidth = $this.find('.bullet:first').outerWidth(!0);
        var x = $this.find('.bullet.selected').index() * minwidth;
        var thumbconwidth = $this.width();
        var minwidth = $this.find('.bullet:first').outerWidth(!0);
        var max = minwidth * container.find('>ul:first >li').length;
        var diff = (max - thumbconwidth);
        var steps = diff / thumbconwidth;
        var pos = 0 - x;
        if (pos > 0) pos = 0;
        if (pos < 0 - max + thumbconwidth) pos = 0 - max + thumbconwidth;
        if (!$this.hasClass("over")) {
            moveThumbSliderToPosition($this, pos, 200)
        }
    }
    var moveThumbSliderToPosition = function($this, pos, speed) {
        punchgs.TweenLite.to($this.find('.tp-thumbcontainer'), 0.2, {
            force3D: "auto",
            left: pos,
            ease: punchgs.Power3.easeOut,
            overwrite: "auto"
        })
    }
})(jQuery);

function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
    jQuery(sliderID).show().html(errorMessage)
};
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        z = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        A = "tap",
        j = "doubletap",
        b = "longtap",
        y = "hold",
        D = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        B = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    f.fn.swipe = function(G) {
        var F = f(this),
            E = F.data(B);
        if (E && typeof G === "string") {
            if (E[G]) {
                return E[G].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + G + " does not exist on jQuery.swipe")
            }
        } else {
            if (!E && (typeof G === "object" || !G)) {
                return w.apply(this, arguments)
            }
        }
        return F
    };
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: z
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: D,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(E) {
        if (E && (E.allowPageScroll === undefined && (E.swipe !== undefined || E.swipeStatus !== undefined))) {
            E.allowPageScroll = m
        }
        if (E.click !== undefined && E.tap === undefined) {
            E.tap = E.click
        }
        if (!E) {
            E = {}
        }
        E = f.extend({}, f.fn.swipe.defaults, E);
        return this.each(function() {
            var G = f(this);
            var F = G.data(B);
            if (!F) {
                F = new C(this, E);
                G.data(B, F)
            }
        })
    }

    function C(a4, av) {
        var az = (a || d || !av.fallbackToMouseEvents),
            J = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ay = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            S = az ? null : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0,
            aP = null,
            ab = 0,
            a1 = 0,
            aZ = 0,
            G = 1,
            aq = 0,
            aJ = 0,
            M = null;
        var aR = f(a4);
        var Z = "start";
        var W = 0;
        var aQ = null;
        var T = 0,
            a2 = 0,
            a5 = 0,
            ad = 0,
            N = 0;
        var aW = null,
            af = null;
        try {
            aR.bind(J, aN);
            aR.bind(aD, a9)
        } catch (ak) {
            f.error("events not supported " + J + "," + aD + " on jQuery.swipe")
        }
        this.enable = function() {
            aR.bind(J, aN);
            aR.bind(aD, a9);
            return aR
        };
        this.disable = function() {
            aK();
            return aR
        };
        this.destroy = function() {
            aK();
            aR.data(B, null);
            return aR
        };
        this.option = function(bc, bb) {
            if (av[bc] !== undefined) {
                if (bb === undefined) {
                    return av[bc]
                } else {
                    av[bc] = bb
                }
            } else {
                f.error("Option " + bc + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function aN(bd) {
            if (aB()) {
                return
            }
            if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
                return
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bb = a ? be.touches[0] : be;
            Z = g;
            if (a) {
                W = be.touches.length
            } else {
                bd.preventDefault()
            }
            ag = 0;
            aP = null;
            aJ = null;
            ab = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            aq = 0;
            aQ = aj();
            M = aa();
            R();
            if (!a || (W === av.fingers || av.fingers === i) || aX()) {
                ai(0, bb);
                T = at();
                if (W == 2) {
                    ai(1, be.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                }
                if (av.swipeStatus || av.pinchStatus) {
                    bc = O(be, Z)
                }
            } else {
                bc = !1
            }
            if (bc === !1) {
                Z = q;
                O(be, Z);
                return bc
            } else {
                if (av.hold) {
                    af = setTimeout(f.proxy(function() {
                        aR.trigger("hold", [be.target]);
                        if (av.hold) {
                            bc = av.hold.call(aR, be, be.target)
                        }
                    }, this), av.longTapThreshold)
                }
                ao(!0)
            }
            return null
        }

        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (Z === h || Z === q || am()) {
                return
            }
            var bd, bc = a ? bh.touches[0] : bh;
            var bf = aH(bc);
            a2 = at();
            if (a) {
                W = bh.touches.length
            }
            if (av.hold) {
                clearTimeout(af)
            }
            Z = k;
            if (W == 2) {
                if (a1 == 0) {
                    ai(1, bh.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                } else {
                    aH(bh.touches[1]);
                    aZ = au(aQ[0].end, aQ[1].end);
                    aJ = ar(aQ[0].end, aQ[1].end)
                }
                G = a7(a1, aZ);
                aq = Math.abs(a1 - aZ)
            }
            if ((W === av.fingers || av.fingers === i) || !a || aX()) {
                aP = aL(bf.start, bf.end);
                al(be, aP);
                ag = aS(bf.start, bf.end);
                ab = aM();
                aI(aP, ag);
                if (av.swipeStatus || av.pinchStatus) {
                    bd = O(bh, Z)
                }
                if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
                    var bb = !0;
                    if (av.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = E(bf.end, bg)
                    }
                    if (!av.triggerOnTouchEnd && bb) {
                        Z = aC(k)
                    } else {
                        if (av.triggerOnTouchLeave && !bb) {
                            Z = aC(h)
                        }
                    }
                    if (Z == q || Z == h) {
                        O(bh, Z)
                    }
                }
            } else {
                Z = q;
                O(bh, Z)
            }
            if (bd === !1) {
                Z = q;
                O(bh, Z)
            }
        }

        function L(bb) {
            var bc = bb.originalEvent;
            if (a) {
                if (bc.touches.length > 0) {
                    F();
                    return !0
                }
            }
            if (am()) {
                W = ad
            }
            a2 = at();
            ab = aM();
            if (ba() || !an()) {
                Z = q;
                O(bc, Z)
            } else {
                if (av.triggerOnTouchEnd || (av.triggerOnTouchEnd == !1 && Z === k)) {
                    bb.preventDefault();
                    Z = h;
                    O(bc, Z)
                } else {
                    if (!av.triggerOnTouchEnd && a6()) {
                        Z = h;
                        aF(bc, Z, A)
                    } else {
                        if (Z === k) {
                            Z = q;
                            O(bc, Z)
                        }
                    }
                }
            }
            ao(!1);
            return null
        }

        function a9() {
            W = 0;
            a2 = 0;
            T = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            R();
            ao(!1)
        }

        function K(bb) {
            var bc = bb.originalEvent;
            if (av.triggerOnTouchLeave) {
                Z = aC(h);
                O(bc, Z)
            }
        }

        function aK() {
            aR.unbind(J, aN);
            aR.unbind(aD, a9);
            aR.unbind(ay, a3);
            aR.unbind(U, L);
            if (S) {
                aR.unbind(S, K)
            }
            ao(!1)
        }

        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = an();
            var bb = ba();
            if (!bd || bb) {
                be = q
            } else {
                if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) {
                    be = h
                } else {
                    if (!bc && bf == h && av.triggerOnTouchLeave) {
                        be = q
                    }
                }
            }
            return be
        }

        function O(bd, bb) {
            var bc = undefined;
            if (I() || V()) {
                bc = aF(bd, bb, l)
            } else {
                if ((P() || aX()) && bc !== !1) {
                    bc = aF(bd, bb, t)
                }
            }
            if (aG() && bc !== !1) {
                bc = aF(bd, bb, j)
            } else {
                if (ap() && bc !== !1) {
                    bc = aF(bd, bb, b)
                } else {
                    if (ah() && bc !== !1) {
                        bc = aF(bd, bb, A)
                    }
                }
            }
            if (bb === q) {
                a9(bd)
            }
            if (bb === h) {
                if (a) {
                    if (bd.touches.length == 0) {
                        a9(bd)
                    }
                } else {
                    a9(bd)
                }
            }
            return bc
        }

        function aF(be, bb, bd) {
            var bc = undefined;
            if (bd == l) {
                aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]);
                if (av.swipeStatus) {
                    bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ);
                    if (bc === !1) {
                        return !1
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [aP, ag, ab, W, aQ]);
                    if (av.swipe) {
                        bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
                        if (bc === !1) {
                            return !1
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]);
                            if (av.swipeLeft) {
                                bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ab, W, aQ]);
                            if (av.swipeRight) {
                                bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ab, W, aQ]);
                            if (av.swipeUp) {
                                bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ)

                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ab, W, aQ]);
                            if (av.swipeDown) {
                                bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]);
                if (av.pinchStatus) {
                    bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ);
                    if (bc === !1) {
                        return !1
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchIn) {
                                bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break;
                        case z:
                            aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchOut) {
                                bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == A) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Y() && !H()) {
                        N = at();
                        aW = setTimeout(f.proxy(function() {
                            N = null;
                            aR.trigger("tap", [be.target]);
                            if (av.tap) {
                                bc = av.tap.call(aR, be, be.target)
                            }
                        }, this), av.doubleTapThreshold)
                    } else {
                        N = null;
                        aR.trigger("tap", [be.target]);
                        if (av.tap) {
                            bc = av.tap.call(aR, be, be.target)
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        N = null;
                        aR.trigger("doubletap", [be.target]);
                        if (av.doubleTap) {
                            bc = av.doubleTap.call(aR, be, be.target)
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            N = null;
                            aR.trigger("longtap", [be.target]);
                            if (av.longTap) {
                                bc = av.longTap.call(aR, be, be.target)
                            }
                        }
                    }
                }
            }
            return bc
        }

        function an() {
            var bb = !0;
            if (av.threshold !== null) {
                bb = ag >= av.threshold
            }
            return bb
        }

        function ba() {
            var bb = !1;
            if (av.cancelThreshold !== null && aP !== null) {
                bb = (aT(aP) - ag) >= av.cancelThreshold
            }
            return bb
        }

        function ae() {
            if (av.pinchThreshold !== null) {
                return aq >= av.pinchThreshold
            }
            return !0
        }

        function aA() {
            var bb;
            if (av.maxTimeThreshold) {
                if (ab >= av.maxTimeThreshold) {
                    bb = !1
                } else {
                    bb = !0
                }
            } else {
                bb = !0
            }
            return bb
        }

        function al(bb, bc) {
            if (av.allowPageScroll === m || aX()) {
                bb.preventDefault()
            } else {
                var bd = av.allowPageScroll === s;
                switch (bc) {
                    case p:
                        if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case o:
                        if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case e:
                        if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break;
                    case x:
                        if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break
                }
            }
        }

        function a8() {
            var bc = aO();
            var bb = X();
            var bd = ae();
            return bc && bb && bd
        }

        function aX() {
            return !!(av.pinchStatus || av.pinchIn || av.pinchOut)
        }

        function P() {
            return !!(a8() && aX())
        }

        function aV() {
            var be = aA();
            var bg = an();
            var bd = aO();
            var bb = X();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf
        }

        function V() {
            return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown)
        }

        function I() {
            return !!(aV() && V())
        }

        function aO() {
            return ((W === av.fingers || av.fingers === i) || !a)
        }

        function X() {
            return aQ[0].end.x !== 0
        }

        function a6() {
            return !!(av.tap)
        }

        function Y() {
            return !!(av.doubleTap)
        }

        function aU() {
            return !!(av.longTap)
        }

        function Q() {
            if (N == null) {
                return !1
            }
            var bb = at();
            return (Y() && ((bb - N) <= av.doubleTapThreshold))
        }

        function H() {
            return Q()
        }

        function ax() {
            return ((W === 1 || !a) && (isNaN(ag) || ag < av.threshold))
        }

        function a0() {
            return ((ab > av.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(ax() && a6())
        }

        function aG() {
            return !!(Q() && Y())
        }

        function ap() {
            return !!(a0() && aU())
        }

        function F() {
            a5 = at();
            ad = event.touches.length + 1
        }

        function R() {
            a5 = 0;
            ad = 0
        }

        function am() {
            var bb = !1;
            if (a5) {
                var bc = at() - a5;
                if (bc <= av.fingerReleaseThreshold) {
                    bb = !0
                }
            }
            return bb
        }

        function aB() {
            return !!(aR.data(B + "_intouch") === !0)
        }

        function ao(bb) {
            if (bb === !0) {
                aR.bind(ay, a3);
                aR.bind(U, L);
                if (S) {
                    aR.bind(S, K)
                }
            } else {
                aR.unbind(ay, a3, !1);
                aR.unbind(U, L, !1);
                if (S) {
                    aR.unbind(S, K, !1)
                }
            }
            aR.data(B + "_intouch", bb === !0)
        }

        function ai(bc, bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            aQ[bc].identifier = bd;
            aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
            aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
            return aQ[bc]
        }

        function aH(bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            var bc = ac(bd);
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc
        }

        function ac(bc) {
            for (var bb = 0; bb < aQ.length; bb++) {
                if (aQ[bb].identifier == bc) {
                    return aQ[bb]
                }
            }
        }

        function aj() {
            var bb = [];
            for (var bc = 0; bc <= 5; bc++) {
                bb.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bb
        }

        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            M[bb].distance = bc
        }

        function aT(bb) {
            if (M[bb]) {
                return M[bb].distance
            }
            return undefined
        }

        function aa() {
            var bb = {};
            bb[p] = aw(p);
            bb[o] = aw(o);
            bb[e] = aw(e);
            bb[x] = aw(x);
            return bb
        }

        function aw(bb) {
            return {
                direction: bb,
                distance: 0
            }
        }

        function aM() {
            return a2 - T
        }

        function au(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb))
        }

        function a7(bb, bc) {
            var bd = (bc / bb) * 1;
            return bd.toFixed(2)
        }

        function ar() {
            if (G < 1) {
                return z
            } else {
                return c
            }
        }

        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)))
        }

        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(bd * 180 / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf)
            }
            return bf
        }

        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if ((bd <= 45) && (bd >= 0)) {
                return p
            } else {
                if ((bd <= 360) && (bd >= 315)) {
                    return p
                } else {
                    if ((bd >= 135) && (bd <= 225)) {
                        return o
                    } else {
                        if ((bd > 45) && (bd < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function at() {
            var bb = new Date();
            return bb.getTime()
        }

        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {
                left: bd.left,
                right: bd.left + bb.outerWidth(),
                top: bd.top,
                bottom: bd.top + bb.outerHeight()
            };
            return bc
        }

        function E(bb, bc) {
            return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom)
        }
    }
}));
if (typeof(console) === 'undefined') {
    var console = {}
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
if (window.tplogs == !0)
    try {} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == !0)
    try {} catch (e) {}(function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, n, r, a, o, l = function(t) {
                    var e, s = t.split("."),
                        n = i;
                    for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
                    return n
                },
                h = l("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                f = function() {},
                m = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                c = function(s, n, r, a) {
                    this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = r;
                    var o = [];
                    this.check = function(h) {
                        for (var _, u, f, m, d = n.length, v = d; --d > -1;)(_ = p[n[d]] || new c(n[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                        if (0 === v && r)
                            for (u = ("com.greensock." + s).split("."), f = u.pop(), m = l(u.join("."))[f] = this.gsClass = r.apply(r, o), a && (i[f] = m, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return m
                                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = m)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new c(t, e, i, s)
                },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var g = [0, 0, 1, 1],
                T = [],
                y = v("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
                }, !0),
                w = y.map = {},
                P = y.register = function(t, e, i, s) {
                    for (var n, r, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (r = l[_], n = s ? v("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = n[o] = t.getRatio ? t : t[o] || new t
                };
            for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;) r = s[n] + ",Power" + n, P(new y(null, null, 1, n), r, "easeOut", !0), P(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), P(new y(null, null, 3, n), r, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var b = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = b.prototype, r.addEventListener = function(t, e, i, s, n) {
                n = n || 0;
                var r, l, h = this._listeners[t],
                    _ = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === _ && n > r.pr && (_ = l + 1);
                h.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: n
                }), this !== a || o || a.wake()
            }, r.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, r.dispatchEvent = function(t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
            };
            var k = t.requestAnimationFrame,
                A = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                x = S();
            for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;) k = t[s[n] + "RequestAnimationFrame"], A = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, s, n, r, l, h = this,
                    u = S(),
                    m = e !== !1 && k,
                    p = 500,
                    c = 33,
                    d = function(t) {
                        var e, a, o = S() - x;
                        o > p && (u += o - c), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (n = s(d)), a && h.dispatchEvent("tick")
                    };
                b.call(h), h.time = h.frame = 0, h.tick = function() {
                    d(!0)
                }, h.lagSmoothing = function(t, e) {
                    p = t || 1 / _, c = Math.min(e, p, 0)
                }, h.sleep = function() {
                    null != n && (m && A ? A(n) : clearTimeout(n), s = f, n = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== n ? h.sleep() : h.frame > 10 && (x = S() - p + 5), s = 0 === i ? f : m && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), d(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, h.wake(), void 0) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), m = t, h.fps(i), void 0) : m
                }, h.fps(t), setTimeout(function() {
                    m && (!n || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var C = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    o || a.wake();
                    var i = this.vars.useFrames ? q : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = C.ticker = new h.Ticker, r = C.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var R = function() {
                o && S() - x > 2e3 && a.wake(), setTimeout(R, 2e3)
            };
            R(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, r._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), O.length && M())
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    o || t || a.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var D = v("core.SimpleTimeline", function(t) {
                C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = D.prototype = new C, r.constructor = D, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var s, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
            }, r.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var I = v("TweenLite", function(e, i, s) {
                    if (C.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                    var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[n] = $(r, this, !1), 1 === l && this._siblings[n].length > 1 && K(r, this, null, 1, this._siblings[n])) : (r = a[n--] = I.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                E = function(e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            r = I.prototype = new C, r.constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "1.13.1", I.defaultEase = r._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = !0, I.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, I.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var O = [],
                L = {},
                N = I._internals = {
                    isArray: m,
                    isSelector: E,
                    lazyTweens: O
                },
                U = I._plugins = {},
                F = N.tweenLookup = {},
                j = 0,
                G = N.reservedProps = {
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
                    lazy: 1
                },
                Q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                q = C._rootFramesTimeline = new D,
                B = C._rootTimeline = new D,
                M = N.lazyRender = function() {
                    var t = O.length;
                    for (L = {}; --t > -1;) s = O[t], s && s._lazy !== !1 && (s.render(s._lazy, !1, !0), s._lazy = !1);
                    O.length = 0
                };
            B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout(M, 1), C._updateRoot = I.render = function() {
                var t, e, i;
                if (O.length && M(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), O.length && M(), !(a.frame % 120)) {
                    for (i in F) {
                        for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete F[i]
                    }
                    if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", C._updateRoot);
            var $ = function(t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (F[r || (t._gsTweenID = r = "t" + j++)] || (F[r] = {
                            target: t,
                            tweens: []
                        }), e && (s = F[r].tweens, s[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return F[r].tweens
                },
                K = function(t, e, i, s, n) {
                    var r, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((o = n[r]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, u = e._startTime + _,
                        f = [],
                        m = 0,
                        p = 0 === e._duration;
                    for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || H(e, 0, p), 0 === H(o, h, p) && (f[m++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (f[m++] = o)));
                    for (r = m; --r > -1;) o = f[r], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                    return a
                },
                H = function(t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * _ > r - e ? _ : (r += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : r - e - _
                };
            r._init = function() {
                var t, e, i, s, n, r = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                    for (s in r.startAt) n[s] = r.startAt[s];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = I.to(this.target, 0, n), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (r.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        i = {};
                        for (s in r) G[s] && "autoCSS" !== s || (i[s] = r[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    } if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, r.easeParams) : w[h] || I.defaultEase : I.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, s, n) {
                var r, a, o, l, h, _;
                if (null == e) return !1;
                L[e._gsTweenID] && M(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (r in this.vars) {
                    if (_ = this.vars[r], G[r]) _ && (_ instanceof Array || _.push && m(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                    else if (U[r] && (l = new U[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[r] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
            }, r.render = function(t, e, i) {
                var s, n, r, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _) && h !== t && (i = !0, h > _ && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== _) && (n = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        f = this._easeType,
                        m = this._easePower;
                    (1 === f || 3 === f && u >= .5) && (u = 1 - u), 3 === f && (u *= 2), 1 === m ? u *= u : 2 === m ? u *= u * u : 3 === m ? u *= u * u * u : 4 === m && (u *= u * u * u * u), this.ratio = 1 === f ? 1 - u : 2 === f ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, O.push(this), this._lazy = t, void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, r._kill = function(t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                var i, s, n, r, a, o, l, h;
                if ((m(e) || E(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        l = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                        for (n in l)(r = a[n]) && (r.pg && r.t._kill(l) && (o = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[n]), h && (s[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, r._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, I.to = function(t, e, i) {
                return new I(t, e, i)
            }, I.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
            }, I.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s)
            }, I.delayedCall = function(t, e, i, s, n) {
                return new I(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, I.set = function(t, e) {
                return new I(t, 0, e)
            }, I.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : I.selector(t) || t;
                var i, s, n, r;
                if ((m(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else
                    for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = I.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
            };
            var J = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = J.prototype
            }, !0);
            if (r = J.prototype, J.version = "1.10.1", J.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, n, r) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: n || e,
                        r: r
                    }, o._next && (o._next._prev = o), o) : void 0
                }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, I._onPluginEvent = function(t, e) {
                    var i, s, n, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                        }
                        o = e._firstPT = n
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, J.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === J.API && (U[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            J.call(this, i, s), this._overwriteProps = n || []
                        }, t.global === !0),
                        o = a.prototype = new J(i);
                    o.constructor = a, a.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, J.activate([a]), a
                }, s = t._gsQueue) {
                for (n = 0; s.length > n; n++) s[n]();
                for (r in p) p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            o = !1
        }
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, r = this.vars;
                    for (s in r) i = r[s], o(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                    o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                },
                r = 1e-10,
                n = i._internals,
                a = n.isSelector,
                o = n.isArray,
                h = n.lazyTweens,
                l = n.lazyRender,
                _ = [],
                u = _gsScope._gsDefine.globals,
                p = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                f = function(t, e, i, s) {
                    t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || _)
                },
                c = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                m = s.prototype = new e;
            return s.version = "1.13.1", m.constructor = s, m.kill()._gc = !1, m.to = function(t, e, s, r) {
                var n = s.repeat && u.TweenMax || i;
                return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
            }, m.from = function(t, e, s, r) {
                return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
            }, m.fromTo = function(t, e, s, r, n) {
                var a = r.repeat && u.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
            }, m.staggerTo = function(t, e, r, n, o, h, l, _) {
                var u, f = new s({
                    onComplete: h,
                    onCompleteParams: l,
                    onCompleteScope: _,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = c(t)), n = n || 0, u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), f.to(t[u], e, p(r), u * n);
                return this.add(f, o)
            }, m.staggerFrom = function(t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
            }, m.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
            }, m.call = function(t, e, s, r) {
                return this.add(i.delayedCall(0, t, e, s), r)
            }, m.set = function(t, e, s) {
                return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
            }, s.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, n, a = new s(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                return o.add(a, 0), a
            }, m.add = function(r, n, a, h) {
                var l, _, u, p, f, c;
                if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && o(r)) {
                        for (a = a || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++) o(p = r[u]) && (p = new s({
                            tweens: p
                        })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += h;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, n);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (f = this, c = f.rawTime() > r._startTime; f._timeline;) c && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                return this
            }, m.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && o(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, m._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var s = this._last;
                return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, m.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, m.insert = m.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, m.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, m.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, m.addPause = function(t, e, i, s) {
                return this.call(f, ["{self}", e, i, s], this, t)
            }, m.removeLabel = function(t) {
                return delete this._labels[t], this
            }, m.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, m._parseTimeOrLabel = function(e, i, s, r) {
                var n;
                if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && o(r)))
                    for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                }
                return Number(e) + i
            }, m.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, m.stop = function() {
                return this.paused(!0)
            }, m.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, m.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, n, a, o, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    c = this._startTime,
                    m = this._timeScale,
                    d = this._paused;
                if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== f && this._first || i || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _)), this._time >= f)
                        for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || (h.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))), o && (this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (h.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || _)))
                }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, m.getChildren = function(t, e, s, r) {
                r = r || -9999999999;
                for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                return n
            }, m.getTweensOf = function(t, e) {
                var s, r, n = this._gc,
                    a = [],
                    o = 0;
                for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                return n && this._enabled(!1, !0), a
            }, m._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, m.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return this._uncache(!0)
            }, m._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                return r
            }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, m.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return this
            }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, m.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, m.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, m.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function(e, i) {
                var s = h("easing." + e, function() {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function() {},
            u = function(t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            },
            c = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            p = function(e, i) {
                var s = h("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function(t) {
                    return new s(t)
                }, s
            },
            f = u("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function(t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), p = u; --p > -1;) a = l[p], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                    this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, r, s, n, a = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                },
                o = {},
                l = a.prototype = new t("css");
            l.constructor = a, a.version = "1.13.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
                top: l,
                right: l,
                bottom: l,
                left: l,
                width: l,
                height: l,
                fontSize: l,
                padding: l,
                margin: l,
                perspective: l,
                lineHeight: ""
            };
            var h, u, f, p, _, c, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                v = /[^\d\-\.]/g,
                y = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                w = /alpha\(opacity *=.+?\)/i,
                b = /^(rgb|hsl)/,
                P = /([A-Z])/g,
                S = /-([a-z])/gi,
                k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                R = function(t, e) {
                    return e.toUpperCase()
                },
                C = /(?:Left|Right|Width)/i,
                A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                D = /,(?=[^\)]*(?:\(|$))/gi,
                M = Math.PI / 180,
                L = 180 / Math.PI,
                N = {},
                X = document,
                z = X.createElement("div"),
                I = X.createElement("img"),
                E = a._internals = {
                    _specialProps: o
                },
                F = navigator.userAgent,
                Y = function() {
                    var t, e = F.indexOf("Android"),
                        i = X.createElement("div");
                    return f = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), _ = f && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), p = -1 !== F.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) && (c = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                }(),
                B = function(t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                U = function(t) {
                    window.console && console.log(t)
                },
                j = "",
                W = "",
                V = function(t, e) {
                    e = e || z;
                    var i, r, s = e.style;
                    if (void 0 !== s[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];);
                    return r >= 0 ? (W = 3 === r ? "ms" : i[r], j = "-" + W.toLowerCase() + "-", W + t) : null
                },
                q = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                H = a.getStyle = function(t, e, i, r, s) {
                    var n;

                    return Y || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || q(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : B(t)
                },
                Q = E.convertToPixels = function(t, i, r, s, n) {
                    if ("px" === s || !s) return r;
                    if ("auto" === s || !r) return 0;
                    var o, l, h, u = C.test(i),
                        f = t,
                        p = z.style,
                        _ = 0 > r;
                    if (_ && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (p.cssText = "border:0 solid red;position:" + H(t, "position") + ";line-height:0;", "%" !== s && f.appendChild) p[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                        else {
                            if (f = t.parentNode || X.body, l = f._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
                            p[u ? "width" : "height"] = r + s
                        }
                        f.appendChild(z), o = parseFloat(z[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(z), u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = Q(t, i, r, s, !0))
                    }
                    return _ ? -o : o
                },
                G = E.calculateOffset = function(t, e, i) {
                    if ("absolute" !== H(t, "position", i)) return 0;
                    var r = "left" === e ? "Left" : "Top",
                        s = H(t, "margin" + r, i);
                    return t["offset" + r] - (Q(t, e, parseFloat(s), s.replace(y, "")) || 0)
                },
                Z = function(t, e) {
                    var i, r, s = {};
                    if (e = e || q(t, null))
                        if (i = e.length)
                            for (; --i > -1;) s[e[i].replace(S, R)] = e.getPropertyValue(e[i]);
                        else
                            for (i in e) s[i] = e[i];
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(S, R)] = e[i]);
                    return Y || (s.opacity = B(t)), r = Pe(t, e, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX = r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, we && (s.z = r.z, s.rotationX = r.rotationX, s.rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s
                },
                $ = function(t, e, i, r, s) {
                    var n, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : G(t, a), void 0 !== h[a] && (o = new fe(h, a, h[a], o)));
                    if (r)
                        for (a in r) "className" !== a && (l[a] = r[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                K = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                te = function(t, e, i) {
                    var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        s = K[e],
                        n = s.length;
                    for (i = i || q(t, null); --n > -1;) r -= parseFloat(H(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(H(t, "border" + s[n] + "Width", i, !0)) || 0;
                    return r
                },
                ee = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == s ? s = "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(v, "")), e.oy = parseFloat(s.replace(v, ""))), r + " " + s + (i.length > 2 ? " " + i[2] : "")
                },
                ie = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                re = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                },
                se = function(t, e, i, r) {
                    var s, n, a, o, l = 1e-6;
                    return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : L) - ("=" === t.charAt(1) ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), l > o && o > -l && (o = 0), o
                },
                ne = {
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
                    transparent: [255, 255, 255, 0]
                },
                ae = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                oe = function(t) {
                    var e, i, r, s, n, a;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), r = t.charAt(3), t = "#" + e + e + i + i + r + r), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), s = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(s + 1 / 3, e, i), t[1] = ae(s, e, i), t[2] = ae(s - 1 / 3, e, i), t) : (t = t.match(d) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
                },
                le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (l in ne) le += "|" + l + "\\b";
            le = RegExp(le + ")", "gi");
            var he = function(t, e, i, r) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var s, n = e ? (t.match(le) || [""])[0] : "",
                        a = t.split(n).join("").match(g) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        u = a.length,
                        f = u > 0 ? a[0].replace(d, "") : "";
                    return u ? s = e ? function(t) {
                        var e, p, _, c;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (c = t.replace(D, "|").split("|"), _ = 0; c.length > _; _++) c[_] = s(c[_]);
                            return c.join(",")
                        }
                        if (e = (t.match(le) || [n])[0], p = t.split(e).join("").match(g) || [], _ = p.length, u > _--)
                            for (; u > ++_;) p[_] = i ? p[0 | (_ - 1) / 2] : a[_];
                        return o + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, n, p;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = s(n[p]);
                            return n.join(",")
                        }
                        if (e = t.match(g) || [], p = e.length, u > p--)
                            for (; u > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                        return o + e.join(h) + l
                    } : function(t) {
                        return t
                    }
                },
                ue = function(t) {
                    return t = t.split(","),
                        function(e, i, r, s, n, a, o) {
                            var l, h = (i + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return s.parse(e, o, n, a)
                        }
                },
                fe = (E._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                    if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                        for (o = n.firstMPT; o;) {
                            if (i = o.t, i.type) {
                                if (1 === i.type) {
                                    for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) s += i["xn" + r] + i["xs" + (r + 1)];
                                    i.e = s
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                }, function(t, e, i, r, s) {
                    this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r)
                }),
                pe = (E._parseToProxy = function(t, e, i, r, s, n) {
                    var a, o, l, h, u, f = r,
                        p = {},
                        _ = {},
                        c = i._transform,
                        d = N;
                    for (i._transform = null, N = e, r = u = i.parse(t, e, r, s), N = d, n && (i._transform = c, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
                        if (1 >= r.type && (o = r.p, _[o] = r.s + r.c, p[o] = r.s, n || (h = new fe(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                            for (a = r.l; --a > 0;) l = "xn" + a, o = r.p + "_" + l, _[o] = r.data[l], p[o] = r[l], n || (h = new fe(r, l, o, h, r.rxp[l]));
                        r = r._next
                    }
                    return {
                        proxy: p,
                        end: _,
                        firstMPT: h,
                        pt: u
                    }
                }, E.CSSPropTween = function(t, e, r, s, a, o, l, h, u, f, p) {
                    this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof pe || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === p ? r + s : p, a && (this._next = a, a._prev = this)
                }),
                _e = a.parseComplex = function(t, e, i, r, s, n, a, o, l, u) {
                    i = i || n || "", a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, r), r += "";
                    var f, p, _, c, g, v, y, T, x, w, P, S, k = i.split(", ").join(",").split(" "),
                        R = r.split(", ").join(",").split(" "),
                        C = k.length,
                        A = h !== !1;
                    for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "), R = R.join(" ").replace(D, ", ").split(" "), C = k.length), C !== R.length && (k = (n || "").split(" "), C = k.length), a.plugin = l, a.setRatio = u, f = 0; C > f; f++)
                        if (c = k[f], g = R[f], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0);
                        else if (s && ("#" === c.charAt(0) || ne[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), x = c.length + g.length > 6, x && !Y && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[f]).join("transparent")) : (Y || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? "," : S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                    else if (v = c.match(d)) {
                        if (y = g.match(m), !y || y.length !== v.length) return a;
                        for (_ = 0, p = 0; v.length > p; p++) P = v[p], w = c.indexOf(P, _), a.appendXtra(c.substr(_, w - _), Number(P), ie(y[p], P), "", A && "px" === c.substr(w + P.length, 2), 0 === p), _ = w + P.length;
                        a["xs" + a.l] += c.substr(_)
                    } else a["xs" + a.l] += a.l ? " " + c : c;
                    if (-1 !== r.indexOf("=") && a.data) {
                        for (S = a.xs0 + a.data.s, f = 1; a.l > f; f++) S += a["xs" + f] + a.data["xn" + f];
                        a.e = S + a["xs" + f]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                ce = 9;
            for (l = pe.prototype, l.l = l.pr = 0; --ce > 0;) l["xn" + ce] = 0, l["xs" + ce] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, r, s, n) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a)
            };
            var de = function(t, e) {
                    e = e || {}, this.p = e.prefix ? V(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                me = E._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var r, s, n = t.split(","),
                        a = e.defaultValue;
                    for (i = i || [a], r = 0; n.length > r; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new de(n[r], e)
                },
                ge = function(t) {
                    if (!o[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        me(t, {
                            parser: function(t, i, r, s, n, a, l) {
                                var h = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                                return h ? (h._cssRegister(), o[r].parse(t, i, r, s, n, a, l)) : (U("Error: " + e + " js file not loaded."), n)
                            }
                        })
                    }
                };
            l = de.prototype, l.parseComplex = function(t, e, i, r, s, n) {
                var a, o, l, h, u, f, p = this.keyword;
                if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, p && (u = e.indexOf(p), f = i.indexOf(p), u !== f && (i = -1 === f ? l : o, i[a] += " " + p));
                    e = o.join(", "), i = l.join(", ")
                }
                return _e(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
            }, l.parse = function(t, e, i, r, n, a) {
                return this.parseComplex(t.style, this.format(H(t, this.p, s, !1, this.dflt)), this.format(e), n, a)
            }, a.registerSpecialProp = function(t, e, i) {
                me(t, {
                    parser: function(t, r, s, n, a, o) {
                        var l = new pe(t, s, 0, 0, a, 2, s, !1, i);
                        return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l
                    },
                    priority: i
                })
            };
            var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                ye = V("transform"),
                Te = j + "transform",
                xe = V("transformOrigin"),
                we = null !== V("perspective"),
                be = E.Transform = function() {
                    this.skewY = 0
                },
                Pe = E.getTransform = function(t, e, i, r) {
                    if (t._gsTransform && i && !r) return t._gsTransform;
                    var s, n, o, l, h, u, f, p, _, c, d, m, g, v = i ? t._gsTransform || new be : new be,
                        y = 0 > v.scaleX,
                        T = 2e-5,
                        x = 1e5,
                        w = 179.99,
                        b = w * M,
                        P = we ? parseFloat(H(t, xe, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                    if (ye ? s = H(t, Te, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(A), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), s && "none" !== s && "matrix(1, 0, 0, 1, 0, 0)" !== s) {
                        for (n = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) l = Number(n[o]), n[o] = (h = l - (l |= 0)) ? (0 | h * x + (0 > h ? -.5 : .5)) / x + l : l;
                        if (16 === n.length) {
                            var S = n[8],
                                k = n[9],
                                R = n[10],
                                C = n[12],
                                O = n[13],
                                D = n[14];
                            if (v.zOrigin && (D = -v.zOrigin, C = S * D - n[12], O = k * D - n[13], D = R * D + v.zOrigin - n[14]), !i || r || null == v.rotationX) {
                                var N, X, z, I, E, F, Y, B = n[0],
                                    U = n[1],
                                    j = n[2],
                                    W = n[3],
                                    V = n[4],
                                    q = n[5],
                                    Q = n[6],
                                    G = n[7],
                                    Z = n[11],
                                    $ = Math.atan2(Q, R),
                                    K = -b > $ || $ > b;
                                v.rotationX = $ * L, $ && (I = Math.cos(-$), E = Math.sin(-$), N = V * I + S * E, X = q * I + k * E, z = Q * I + R * E, S = V * -E + S * I, k = q * -E + k * I, R = Q * -E + R * I, Z = G * -E + Z * I, V = N, q = X, Q = z), $ = Math.atan2(S, B), v.rotationY = $ * L, $ && (F = -b > $ || $ > b, I = Math.cos(-$), E = Math.sin(-$), N = B * I - S * E, X = U * I - k * E, z = j * I - R * E, k = U * E + k * I, R = j * E + R * I, Z = W * E + Z * I, B = N, U = X, j = z), $ = Math.atan2(U, q), v.rotation = $ * L, $ && (Y = -b > $ || $ > b, I = Math.cos(-$), E = Math.sin(-$), B = B * I + V * E, X = U * I + q * E, q = U * -E + q * I, Q = j * -E + Q * I, U = X), Y && K ? v.rotation = v.rotationX = 0 : Y && F ? v.rotation = v.rotationY = 0 : F && K && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(B * B + U * U) * x + .5) / x, v.scaleY = (0 | Math.sqrt(q * q + k * k) * x + .5) / x, v.scaleZ = (0 | Math.sqrt(Q * Q + R * R) * x + .5) / x, v.skewX = 0, v.perspective = Z ? 1 / (0 > Z ? -Z : Z) : 0, v.x = C, v.y = O, v.z = D
                            }
                        } else if (!(we && !r && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === H(t, "display", e))) {
                            var J = n.length >= 6,
                                te = J ? n[0] : 1,
                                ee = n[1] || 0,
                                ie = n[2] || 0,
                                re = J ? n[3] : 1;
                            v.x = n[4] || 0, v.y = n[5] || 0, u = Math.sqrt(te * te + ee * ee), f = Math.sqrt(re * re + ie * ie), p = te || ee ? Math.atan2(ee, te) * L : v.rotation || 0, _ = ie || re ? Math.atan2(ie, re) * L + p : v.skewX || 0, c = u - Math.abs(v.scaleX || 0), d = f - Math.abs(v.scaleY || 0), Math.abs(_) > 90 && 270 > Math.abs(_) && (y ? (u *= -1, _ += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (f *= -1, _ += 0 >= _ ? 180 : -180)), m = (p - v.rotation) % 180, g = (_ - v.skewX) % 180, (void 0 === v.skewX || c > T || -T > c || d > T || -T > d || m > -w && w > m && !1 | m * x || g > -w && w > g && !1 | g * x) && (v.scaleX = u, v.scaleY = f, v.rotation = p, v.skewX = _), we && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = P;
                        for (o in v) T > v[o] && v[o] > -T && (v[o] = 0)
                    } else v = {
                        x: 0,
                        y: 0,
                        z: 0,
                        scaleX: 1,
                        scaleY: 1,
                        scaleZ: 1,
                        skewX: 0,
                        perspective: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        zOrigin: 0
                    };
                    return i && (t._gsTransform = v), v.xPercent = v.yPercent = 0, v
                },
                Se = function(t) {
                    var e, i, r = this.data,
                        s = -r.rotation * M,
                        n = s + r.skewX * M,
                        a = 1e5,
                        o = (0 | Math.cos(s) * r.scaleX * a) / a,
                        l = (0 | Math.sin(s) * r.scaleX * a) / a,
                        h = (0 | Math.sin(n) * -r.scaleY * a) / a,
                        u = (0 | Math.cos(n) * r.scaleY * a) / a,
                        f = this.t.style,
                        p = this.t.currentStyle;
                    if (p) {
                        i = l, l = -h, h = -i, e = p.filter, f.filter = "";
                        var _, d, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== p.position,
                            x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                            w = r.x + m * r.xPercent / 100,
                            b = r.y + g * r.yPercent / 100;
                        if (null != r.ox && (_ = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, d = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, w += _ - (_ * o + d * l), b += d - (_ * h + d * u)), v ? (_ = m / 2, d = g / 2, x += ", Dx=" + (_ - (_ * o + d * l) + w) + ", Dy=" + (d - (_ * h + d * u) + b) + ")") : x += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, x) : x + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
                            var P, S, k, R = 8 > c ? 1 : -1;
                            for (_ = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ce = 0; 4 > ce; ce++) S = J[ce], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Q(this.t, S, parseFloat(P), P.replace(y, "")) || 0, k = i !== r[S] ? 2 > ce ? -r.ieOffsetX : -r.ieOffsetY : 2 > ce ? _ - r.ieOffsetX : d - r.ieOffsetY, f[S] = (r[S] = Math.round(i - k * (0 === ce || 2 === ce ? 1 : R))) + "px"
                        }
                    }
                },
                ke = E.set3DTransformRatio = function(t) {
                    var e, i, r, s, n, a, o, l, h, u, f, _, c, d, m, g, v, y, T, x, w, b, P, S = this.data,
                        k = this.t.style,
                        R = S.rotation * M,
                        C = S.scaleX,
                        A = S.scaleY,
                        O = S.scaleZ,
                        D = S.x,
                        L = S.y,
                        N = S.z,
                        X = S.perspective;
                    if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== O || X || N)) return Re.call(this, t), void 0;
                    if (p) {
                        var z = 1e-4;
                        z > C && C > -z && (C = O = 2e-5), z > A && A > -z && (A = O = 2e-5), !X || S.z || S.rotationX || S.rotationY || (X = 0)
                    }
                    if (R || S.skewX) y = Math.cos(R), T = Math.sin(R), e = y, n = T, S.skewX && (R -= S.skewX * M, y = Math.cos(R), T = Math.sin(R), "simple" === S.skewType && (x = Math.tan(S.skewX * M), x = Math.sqrt(1 + x * x), y *= x, T *= x)), i = -T, a = y;
                    else {
                        if (!(S.rotationY || S.rotationX || 1 !== O || X)) return k[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + N + "px)" + (1 !== C || 1 !== A ? " scale(" + C + "," + A + ")" : ""), void 0;
                        e = a = 1, i = n = 0
                    }
                    f = 1, r = s = o = l = h = u = _ = c = d = 0, m = X ? -1 / X : 0, g = S.zOrigin, v = 1e5, R = S.rotationY * M, R && (y = Math.cos(R), T = Math.sin(R), h = f * -T, c = m * -T, r = e * T, o = n * T, f *= y, m *= y, e *= y, n *= y), R = S.rotationX * M, R && (y = Math.cos(R), T = Math.sin(R), x = i * y + r * T, w = a * y + o * T, b = u * y + f * T, P = d * y + m * T, r = i * -T + r * y, o = a * -T + o * y, f = u * -T + f * y, m = d * -T + m * y, i = x, a = w, u = b, d = P), 1 !== O && (r *= O, o *= O, f *= O, m *= O), 1 !== A && (i *= A, a *= A, u *= A, d *= A), 1 !== C && (e *= C, n *= C, h *= C, c *= C), g && (_ -= g, s = r * _, l = o * _, _ = f * _ + g), s = (x = (s += D) - (s |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + s : s, l = (x = (l += L) - (l |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + l : l, _ = (x = (_ += N) - (_ |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + _ : _, k[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * v) / v, (0 | n * v) / v, (0 | h * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | u * v) / v, (0 | d * v) / v, (0 | r * v) / v, (0 | o * v) / v, (0 | f * v) / v, (0 | m * v) / v, s, l, _, X ? 1 + -_ / X : 1].join(",") + ")"
                },
                Re = E.set2DTransformRatio = function(t) {
                    var e, i, r, s, n, a = this.data,
                        o = this.t,
                        l = o.style,
                        h = a.x,
                        u = a.y;
                    return a.rotationX || a.rotationY || a.z || a.force3D === !0 || "auto" === a.force3D && 1 !== t && 0 !== t ? (this.setRatio = ke, ke.call(this, t), void 0) : (a.rotation || a.skewX ? (e = a.rotation * M, i = e - a.skewX * M, r = 1e5, s = a.scaleX * r, n = a.scaleY * r, l[ye] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + (0 | Math.cos(e) * s) / r + "," + (0 | Math.sin(e) * s) / r + "," + (0 | Math.sin(i) * -n) / r + "," + (0 | Math.cos(i) * n) / r + "," + h + "," + u + ")") : l[ye] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + a.scaleX + ",0,0," + a.scaleY + "," + h + "," + u + ")", void 0)
                };
            me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                parser: function(t, e, i, r, n, o, l) {
                    if (r._transform) return n;
                    var h, u, f, p, _, c, d, m = r._transform = Pe(t, s, !0, l.parseTransform),
                        g = t.style,
                        v = 1e-6,
                        y = ve.length,
                        T = l,
                        x = {};
                    if ("string" == typeof T.transform && ye) f = z.style, f[ye] = T.transform, f.display = "block", f.position = "absolute", X.body.appendChild(z), h = Pe(z, null, !1), X.body.removeChild(z);
                    else if ("object" == typeof T) {
                        if (h = {
                                scaleX: re(null != T.scaleX ? T.scaleX : T.scale, m.scaleX),
                                scaleY: re(null != T.scaleY ? T.scaleY : T.scale, m.scaleY),
                                scaleZ: re(T.scaleZ, m.scaleZ),
                                x: re(T.x, m.x),
                                y: re(T.y, m.y),
                                z: re(T.z, m.z),
                                xPercent: re(T.xPercent, m.xPercent),
                                yPercent: re(T.yPercent, m.yPercent),
                                perspective: re(T.transformPerspective, m.perspective)
                            }, d = T.directionalRotation, null != d)
                            if ("object" == typeof d)
                                for (f in d) T[f] = d[f];
                            else T.rotation = d;
                        "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0, h.xPercent = re(T.x, m.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0, h.yPercent = re(T.y, m.yPercent)), h.rotation = se("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : m.rotation, m.rotation, "rotation", x), we && (h.rotationX = se("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", x), h.rotationY = se("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", x)), h.skewX = null == T.skewX ? m.skewX : se(T.skewX, m.skewX), h.skewY = null == T.skewY ? m.skewY : se(T.skewY, m.skewY), (u = h.skewY - m.skewY) && (h.skewX += u, h.rotation += u)
                    }
                    for (we && null != T.force3D && (m.force3D = T.force3D, c = !0), m.skewType = T.skewType || m.skewType || a.defaultSkewType, _ = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, _ || null == T.scale || (h.scaleZ = 1); --y > -1;) i = ve[y], p = h[i] - m[i], (p > v || -v > p || null != N[i]) && (c = !0, n = new pe(m, i, m[i], p, n), i in x && (n.e = x[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
                    return p = T.transformOrigin, (p || we && _ && m.zOrigin) && (ye ? (c = !0, i = xe, p = (p || H(t, i, s, !1, "50% 50%")) + "", n = new pe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, we ? (f = m.zOrigin, p = p.split(" "), m.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new pe(m, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = p) : ee(p + "", m)), c && (r._transformType = _ || 3 === this._transformType ? 3 : 2), n
                },
                prefix: !0
            }), me("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), me("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, a) {
                    e = this.format(e);
                    var o, l, h, u, f, p, _, c, d, m, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        P = t.style;
                    for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = V(b[l])), f = u = H(t, b[l], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), p = h = o[l], _ = parseFloat(f), v = f.substr((_ + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = r[i] || v), g !== v && (T = Q(t, "borderLeft", _, v), x = Q(t, "borderTop", _, v), "%" === g ? (f = 100 * (T / d) + "%", u = 100 * (x / m) + "%") : "em" === g ? (w = Q(t, "borderLeft", 1, "em"), f = T / w + "em", u = x / w + "em") : (f = T + "px", u = x + "px"), y && (p = parseFloat(f) + c + g, h = parseFloat(u) + c + g)), a = _e(P, b[l], f + " " + u, p + " " + h, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: he("0px 0px 0px 0px", !1, !0)
            }), me("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, r, n, a) {
                    var o, l, h, u, f, p, _ = "background-position",
                        d = s || q(t, null),
                        m = this.format((d ? c ? d.getPropertyValue(_ + "-x") + " " + d.getPropertyValue(_ + "-y") : d.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (p = H(t, "backgroundImage").replace(k, ""), p && "none" !== p)) {
                        for (o = m.split(" "), l = g.split(" "), I.setAttribute("src", p), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%");
                        m = o.join(" ")
                    }
                    return this.parseComplex(t.style, m, g, n, a)
                },
                formatter: ee
            }), me("backgroundSize", {
                defaultValue: "0 0",
                formatter: ee
            }), me("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), me("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), me("transformStyle", {
                prefix: !0
            }), me("backfaceVisibility", {
                prefix: !0
            }), me("userSelect", {
                prefix: !0
            }), me("margin", {
                parser: ue("marginTop,marginRight,marginBottom,marginLeft")
            }), me("padding", {
                parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), me("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, r, n, a) {
                    var o, l, h;
                    return 9 > c ? (l = t.currentStyle, h = 8 > c ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(H(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                }
            }), me("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), me("autoRound,strictUnits", {
                parser: function(t, e, i, r, s) {
                    return s
                }
            }), me("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, r, n, a) {
                    return this.parseComplex(t.style, this.format(H(t, "borderTopWidth", s, !1, "0px") + " " + H(t, "borderTopStyle", s, !1, "solid") + " " + H(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
                }
            }), me("borderWidth", {
                parser: ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), me("float,cssFloat,styleFloat", {
                parser: function(t, e, i, r, s) {
                    var n = t.style,
                        a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                    return new pe(n, a, 0, 0, s, -1, i, !1, 0, n[a], e)
                }
            });
            var Ce = function(t) {
                var e, i = this.t,
                    r = i.filter || H(this.data, "filter"),
                    s = 0 | this.s + this.c * t;
                100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !H(this.data, "filter")) : (i.filter = r.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s))
            };
            me("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, r, n, a) {
                    var o = parseFloat(H(t, "opacity", s, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === H(t, "visibility", s) && 0 !== e && (o = 0), Y ? n = new pe(l, "opacity", o, e - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ce), h && (n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                }
            });
            var Ae = function(t, e) {
                    e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Oe = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ae(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            me("className", {
                parser: function(t, e, r, n, a, o, l) {
                    var h, u, f, p, _, c = t.getAttribute("class") || "",
                        d = t.style.cssText;
                    if (a = n._classNamePT = new pe(t, r, 0, 0, a, 2), a.setRatio = Oe, a.pr = -11, i = !0, a.b = c, u = Z(t, s), f = t._gsClassPT) {
                        for (p = {}, _ = f.data; _;) p[_.p] = 1, _ = _._next;
                        f.setRatio(1)
                    }
                    return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), h = $(t, u, Z(t), l, p), t.setAttribute("class", c), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)), a
                }
            });
            var De = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, r, s, n = this.t.style,
                        a = o.transform.parse;
                    if ("all" === this.e) n.cssText = "", s = !0;
                    else
                        for (e = this.e.split(","), r = e.length; --r > -1;) i = e[r], o[i] && (o[i].parse === a ? s = !0 : i = "transformOrigin" === i ? xe : o[i].p), Ae(n, i);
                    s && (Ae(n, ye), this.t._gsTransform && delete this.t._gsTransform)
                }
            };
            for (me("clearProps", {
                    parser: function(t, e, r, s, n) {
                        return n = new pe(t, r, 0, 0, n, 2), n.setRatio = De, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n
                    }
                }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ce = l.length; ce--;) ge(l[ce]);
            l = a.prototype, l._firstPT = null, l._onInitTween = function(t, e, o) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = q(t, ""), n = this._overwriteProps;
                var l, p, c, d, m, g, v, y, T, w = t.style;
                if (u && "" === w.zIndex && (l = H(t, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (d = w.cssText, l = Z(t, s), w.cssText = d + ";" + e, l = $(t, l, Z(t)).difs, !Y && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = d), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                    for (T = 3 === this._transformType, ye ? f && (u = !0, "" === w.zIndex && (v = H(t, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), _ && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                    y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && we ? ke : ye ? Re : Se, y.data = this._transform || Pe(t, s, !0), n.pop()
                }
                if (i) {
                    for (; p;) {
                        for (g = p._next, c = d; c && c.pr > p.pr;) c = c._next;
                        (p._prev = c ? c._prev : m) ? p._prev._next = p: d = p, (p._next = c) ? c._prev = p : m = p, p = g
                    }
                    this._firstPT = d
                }
                return !0
            }, l.parse = function(t, e, i, n) {
                var a, l, u, f, p, _, c, d, m, g, v = t.style;
                for (a in e) _ = e[a], l = o[a], l ? i = l.parse(t, _, a, this, i, n, e) : (p = H(t, a, s) + "", m = "string" == typeof _, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && b.test(_) ? (m || (_ = oe(_), _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = _e(v, a, p, _, !0, "transparent", i, 0, n)) : !m || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (u = parseFloat(p), c = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (u = te(t, a, s), c = "px") : "left" === a || "top" === a ? (u = G(t, a, s), c = "px") : (u = "opacity" !== a ? 0 : 1, c = "")), g = m && "=" === _.charAt(1), g ? (f = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), f *= parseFloat(_), d = _.replace(y, "")) : (f = parseFloat(_), d = m ? _.substr((f + "").length) || "" : ""), "" === d && (d = a in r ? r[a] : c), _ = f || 0 === f ? (g ? f + u : f) + d : e[a], c !== d && "" !== d && (f || 0 === f) && u && (u = Q(t, a, u, c), "%" === d ? (u /= Q(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = u + "%")) : "em" === d ? u /= Q(t, a, 1, "em") : "px" !== d && (f = Q(t, a, f, d), d = "px"), g && (f || 0 === f) && (_ = f + u + d)), g && (f += u), !u && 0 !== u || !f && 0 !== f ? void 0 !== v[a] && (_ || "NaN" != _ + "" && null != _) ? (i = new pe(v, a, f || u || 0, 0, i, -1, a, !1, 0, p, _), i.xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : p) : U("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, u, f - u, i, 0, a, h !== !1 && ("px" === d || "zIndex" === a), 0, p, _), i.xs0 = d)) : i = _e(v, a, p, _, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                return i
            }, l.setRatio = function(t) {
                var e, i, r, s = this._firstPT,
                    n = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; s;) {
                            if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type)
                                if (1 === s.type)
                                    if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                    else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                            else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                            else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                            else {
                                for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                s.t[s.p] = i
                            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                            else s.t[s.p] = e + s.xs0;
                            s = s._next
                        } else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                    else
                        for (; s;) 2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t), s = s._next
            }, l._enableTransforms = function(t) {
                this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Pe(this._target, s, !0)
            };
            var Me = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            l._addLazySet = function(t, e, i) {
                var r = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
                r.e = i, r.setRatio = Me, r.data = this
            }, l._linkCSSP = function(t, e, i, r) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, l._kill = function(e) {
                var i, r, s, n = e;
                if (e.autoAlpha || e.alpha) {
                    n = {};
                    for (r in e) n[r] = e[r];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
            };
            var Le = function(t, e, i) {
                var r, s, n, a;
                if (t.slice)
                    for (s = t.length; --s > -1;) Le(t[s], e, i);
                else
                    for (r = t.childNodes, s = r.length; --s > -1;) n = r[s], a = n.type, n.style && (e.push(Z(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Le(n, e, i)
            };
            return a.cascadeTo = function(t, i, r) {
                var s, n, a, o = e.to(t, i, r),
                    l = [o],
                    h = [],
                    u = [],
                    f = [],
                    p = e._internals.reservedProps;
                for (t = o._targets || o.target, Le(t, h, f), o.render(i, !0), Le(t, u), o.render(0, !0), o._enabled(!0), s = f.length; --s > -1;)
                    if (n = $(f[s], h[s], u[s]), n.firstMPT) {
                        n = n.difs;
                        for (a in r) p[a] && (n[a] = r[a]);
                        l.push(e.to(f[s], i, n))
                    } return l
            }, t.activate([a]), a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, s = t.split("."),
                r = e;
            for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
            return r
        },
        s = i("com.greensock.utils"),
        r = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        n = document,
        a = n.defaultView ? n.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        h = function(t, e, i, s) {
            var r;
            return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0
        },
        l = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        _ = function(t) {
            var e, i, s, r = [],
                n = t.length;
            for (e = 0; n > e; e++)
                if (i = t[e], l(i))
                    for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
                else r.push(i);
            return r
        },
        u = ")eefec303079ad17405c",
        c = /(?:<br>|<br\/>|<br \/>)/gi,
        p = n.all && !n.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
        m = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        },
        d = s.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
            this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        g = function(t, e, i, s, o) {
            c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
            var l, _, p, f, d, g, v, y, T, w, b, x, P, S = r(t),
                C = e.type || e.split || "chars,words,lines",
                k = -1 !== C.indexOf("lines") ? [] : null,
                R = -1 !== C.indexOf("words"),
                A = -1 !== C.indexOf("chars"),
                D = "absolute" === e.position || e.absolute === !0,
                O = D ? "&#173; " : " ",
                M = -999,
                L = a(t),
                z = h(t, "paddingLeft", L),
                I = h(t, "borderBottomWidth", L) + h(t, "borderTopWidth", L),
                E = h(t, "borderLeftWidth", L) + h(t, "borderRightWidth", L),
                N = h(t, "paddingTop", L) + h(t, "paddingBottom", L),
                F = h(t, "paddingLeft", L) + h(t, "paddingRight", L),
                X = h(t, "textAlign", L, !0),
                U = t.clientHeight,
                B = t.clientWidth,
                j = S.length,
                Y = "</div>",
                q = m(e.wordsClass),
                G = m(e.charsClass),
                V = -1 !== (e.linesClass || "").indexOf("++"),
                Q = e.linesClass;
            for (V && (Q = Q.split("++").join("")), p = q(), f = 0; j > f; f++) g = S.charAt(f), ")" === g && S.substr(f, 20) === u ? (p += Y + "<BR/>", f !== j - 1 && (p += " " + q()), f += 19) : " " === g && " " !== S.charAt(f - 1) && f !== j - 1 ? (p += Y, f !== j - 1 && (p += O + q())) : p += A && " " !== g ? G() + g + "</div>" : g;
            for (t.innerHTML = p + Y, d = t.getElementsByTagName("*"), j = d.length, v = [], f = 0; j > f; f++) v[f] = d[f];
            if (k || D)
                for (f = 0; j > f; f++) y = v[f], _ = y.parentNode === t, (_ || D || A && !R) && (T = y.offsetTop, k && _ && T !== M && "BR" !== y.nodeName && (l = [], k.push(l), M = T), D && (y._x = y.offsetLeft, y._y = T, y._w = y.offsetWidth, y._h = y.offsetHeight), k && (R !== _ && A || (l.push(y), y._x -= z), _ && f && (v[f - 1]._wordEnd = !0)));
            for (f = 0; j > f; f++) y = v[f], _ = y.parentNode === t, "BR" !== y.nodeName ? (D && (b = y.style, R || _ || (y._x += y.parentNode._x, y._y += y.parentNode._y), b.left = y._x + "px", b.top = y._y + "px", b.position = "absolute", b.display = "block", b.width = y._w + 1 + "px", b.height = y._h + "px"), R ? _ ? s.push(y) : A && i.push(y) : _ ? (t.removeChild(y), v.splice(f--, 1), j--) : !_ && A && (T = !k && !D && y.nextSibling, t.appendChild(y), T || t.appendChild(n.createTextNode(" ")), i.push(y))) : k || D ? (t.removeChild(y), v.splice(f--, 1), j--) : R || t.appendChild(y);
            if (k) {
                for (D && (w = n.createElement("div"), t.appendChild(w), x = w.offsetWidth + "px", T = w.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(w)), b = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (P = !D || !R && !A, f = 0; k.length > f; f++) {
                    for (l = k[f], w = n.createElement("div"), w.style.cssText = "display:block;text-align:" + X + ";position:" + (D ? "absolute;" : "relative;"), Q && (w.className = Q + (V ? f + 1 : "")), o.push(w), j = l.length, d = 0; j > d; d++) "BR" !== l[d].nodeName && (y = l[d], w.appendChild(y), P && (y._wordEnd || R) && w.appendChild(n.createTextNode(" ")), D && (0 === d && (w.style.top = y._y + "px", w.style.left = z + T + "px"), y.style.top = "0px", T && (y.style.left = y._x - T + "px")));
                    R || A || (w.innerHTML = r(w).split(String.fromCharCode(160)).join(" ")), D && (w.style.width = x, w.style.height = y._h + "px"), t.appendChild(w)
                }
                t.style.cssText = b
            }
            D && (U > t.clientHeight && (t.style.height = U - N + "px", U > t.clientHeight && (t.style.height = U + I + "px")), B > t.clientWidth && (t.style.width = B - F + "px", B > t.clientWidth && (t.style.width = B + E + "px")))
        },
        v = d.prototype;
    v.split = function(t) {
        this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = 0; this.elements.length > e; e++) this._originals[e] = this.elements[e].innerHTML, g(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.isSplit = !0, this
    }, v.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, d.selector = t.$ || t.jQuery || function(e) {
        return t.$ ? (d.selector = t.$, t.$(e)) : n ? n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    }, d.version = "0.2.4"
})(_gsScope),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText");
try {
    window.GreenSockGobals = null;
    window._gsQueue = null;
    delete(window.GreenSockGlobals);
    delete(window._gsQueue)
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs;
    window._gsQueue = oldgs_queue
} catch (e) {}
if (window.tplogs == !0)
    try {
        console.groupEnd()
    } catch (e) {}(function(e, t) {
        e.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        };
        e.expr[":"].uncached = function(t) {
            var n = document.createElement("img");
            n.src = t.src;
            return e(t).is('img[src!=""]') && !n.complete
        };
        e.fn.waitForImages = function(t, n, r) {
            if (e.isPlainObject(arguments[0])) {
                n = t.each;
                r = t.waitForAll;
                t = t.finished
            }
            t = t || e.noop;
            n = n || e.noop;
            r = !!r;
            if (!e.isFunction(t) || !e.isFunction(n)) {
                throw new TypeError("An invalid callback was supplied.")
            }
            return this.each(function() {
                var i = e(this),
                    s = [];
                if (r) {
                    var o = e.waitForImages.hasImageProperties || [],
                        u = /url\((['"]?)(.*?)\1\)/g;
                    i.find("*").each(function() {
                        var t = e(this);
                        if (t.is("img:uncached")) {
                            s.push({
                                src: t.attr("src"),
                                element: t[0]
                            })
                        }
                        e.each(o, function(e, n) {
                            var r = t.css(n);
                            if (!r) {
                                return !0
                            }
                            var i;
                            while (i = u.exec(r)) {
                                s.push({
                                    src: i[2],
                                    element: t[0]
                                })
                            }
                        })
                    })
                } else {
                    i.find("img:uncached").each(function() {
                        s.push({
                            src: this.src,
                            element: this
                        })
                    })
                }
                var f = s.length,
                    l = 0;
                if (f == 0) {
                    t.call(i[0])
                }
                e.each(s, function(r, s) {
                    var o = new Image;
                    e(o).bind("load error", function(e) {
                        l++;
                        n.call(s.element, l, f, e.type == "load");
                        if (l == f) {
                            t.call(i[0]);
                            return !1
                        }
                    });
                    o.src = s.src
                })
            })
        }
    })(jQuery)