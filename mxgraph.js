var mxClient = {VERSION:"1.10.2.1", IS_IE:0 <= navigator.userAgent.indexOf("MSIE"), IS_IE6:0 <= navigator.userAgent.indexOf("MSIE 6"), IS_QUIRKS:0 <= navigator.userAgent.indexOf("MSIE") && (null == document.documentMode || 5 == document.documentMode), IS_NS:0 <= navigator.userAgent.indexOf("Mozilla/") && 0 > navigator.userAgent.indexOf("MSIE"), IS_OP:0 <= navigator.userAgent.indexOf("Opera/"), IS_OT:0 > navigator.userAgent.indexOf("Presto/2.4.") && 0 > navigator.userAgent.indexOf("Presto/2.3.") && 0 > navigator.userAgent.indexOf("Presto/2.2.") &&
    0 > navigator.userAgent.indexOf("Presto/2.1.") && 0 > navigator.userAgent.indexOf("Presto/2.0.") && 0 > navigator.userAgent.indexOf("Presto/1."), IS_SF:0 <= navigator.userAgent.indexOf("AppleWebKit/") && 0 > navigator.userAgent.indexOf("Chrome/"), IS_GC:0 <= navigator.userAgent.indexOf("Chrome/"), IS_MT:0 <= navigator.userAgent.indexOf("Firefox/") && 0 > navigator.userAgent.indexOf("Firefox/1.") && 0 > navigator.userAgent.indexOf("Firefox/2.") || 0 <= navigator.userAgent.indexOf("Iceweasel/") && 0 > navigator.userAgent.indexOf("Iceweasel/1.") &&
    0 > navigator.userAgent.indexOf("Iceweasel/2.") || 0 <= navigator.userAgent.indexOf("SeaMonkey/") && 0 > navigator.userAgent.indexOf("SeaMonkey/1.") || 0 <= navigator.userAgent.indexOf("Iceape/") && 0 > navigator.userAgent.indexOf("Iceape/1."), IS_SVG:0 <= navigator.userAgent.indexOf("Firefox/") || 0 <= navigator.userAgent.indexOf("Iceweasel/") || 0 <= navigator.userAgent.indexOf("Seamonkey/") || 0 <= navigator.userAgent.indexOf("Iceape/") || 0 <= navigator.userAgent.indexOf("Galeon/") || 0 <= navigator.userAgent.indexOf("Epiphany/") || 0 <=
    navigator.userAgent.indexOf("AppleWebKit/") || 0 <= navigator.userAgent.indexOf("Gecko/") || 0 <= navigator.userAgent.indexOf("Opera/"), NO_FO:0 <= navigator.userAgent.indexOf("Firefox/1.") || 0 <= navigator.userAgent.indexOf("Iceweasel/1.") || 0 <= navigator.userAgent.indexOf("Firefox/2.") || 0 <= navigator.userAgent.indexOf("Iceweasel/2.") || 0 <= navigator.userAgent.indexOf("SeaMonkey/1.") || 0 <= navigator.userAgent.indexOf("Iceape/1.") || 0 <= navigator.userAgent.indexOf("Camino/1.") || 0 <= navigator.userAgent.indexOf("Epiphany/2.") ||
    0 <= navigator.userAgent.indexOf("Opera/") || 0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Mozilla/2."), IS_VML:"MICROSOFT INTERNET EXPLORER" == navigator.appName.toUpperCase(), IS_MAC:0 < navigator.userAgent.toUpperCase().indexOf("MACINTOSH"), IS_TOUCH:0 < navigator.userAgent.toUpperCase().indexOf("IPAD") || 0 < navigator.userAgent.toUpperCase().indexOf("IPOD") || 0 < navigator.userAgent.toUpperCase().indexOf("IPHONE") || 0 < navigator.userAgent.toUpperCase().indexOf("ANDROID"), IS_LOCAL:0 > document.location.href.indexOf("http://") &&
    0 > document.location.href.indexOf("https://"), isBrowserSupported:function () {
    return mxClient.IS_VML || mxClient.IS_SVG
}, link:function (a, b, c) {
    c = c || document;
    if (mxClient.IS_IE6)c.write('<link rel="' + a + '" href="' + b + '" charset="ISO-8859-1" type="text/css"/>'); else {
        var d = c.createElement("link");
        d.setAttribute("rel", a);
        d.setAttribute("href", b);
        d.setAttribute("charset", "ISO-8859-1");
        d.setAttribute("type", "text/css");
        c.getElementsByTagName("head")[0].appendChild(d)
    }
}, include:function (a) {
    document.write('<script src="' +
        a + '"><\/script>')
}, dispose:function () {
    for (var a = 0; a < mxEvent.objects.length; a++)null != mxEvent.objects[a].mxListenerList && mxEvent.removeAllListeners(mxEvent.objects[a])
}};
"undefined" == typeof mxLoadResources && (mxLoadResources = !0);
"undefined" == typeof mxLoadStylesheets && (mxLoadStylesheets = !0);
"undefined" != typeof mxBasePath && 0 < mxBasePath.length ? ("/" == mxBasePath.substring(mxBasePath.length - 1) && (mxBasePath = mxBasePath.substring(0, mxBasePath.length - 1)), mxClient.basePath = mxBasePath) : mxClient.basePath = ".";
"undefined" != typeof mxImageBasePath && 0 < mxImageBasePath.length ? ("/" == mxImageBasePath.substring(mxImageBasePath.length - 1) && (mxImageBasePath = mxImageBasePath.substring(0, mxImageBasePath.length - 1)), mxClient.imageBasePath = mxImageBasePath) : mxClient.imageBasePath = mxClient.basePath + "/images";
mxClient.language = "undefined" != typeof mxLanguage ? mxLanguage : mxClient.IS_IE ? navigator.userLanguage : navigator.language;
mxClient.defaultLanguage = "undefined" != typeof mxDefaultLanguage ? mxDefaultLanguage : "en";
mxLoadStylesheets && mxClient.link("stylesheet", "mxgraph.css");
"undefined" != typeof mxLanguages && (mxClient.languages = mxLanguages);
if (mxClient.IS_IE) {
    if (9 <= document.documentMode)mxClient.IS_VML = !1, mxClient.IS_SVG = !0; else {
        8 == document.documentMode ? (document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), document.namespaces.add("o", "urn:schemas-microsoft-com:office:office", "#default#VML")) : (document.namespaces.add("v", "urn:schemas-microsoft-com:vml"), document.namespaces.add("o", "urn:schemas-microsoft-com:office:office"));
        var ss = document.createStyleSheet();
        ss.cssText = "v\\:*{behavior:url(#default#VML)}o\\:*{behavior:url(#default#VML)}";
        mxLoadStylesheets && mxClient.link("stylesheet", mxClient.basePath + "/css/explorer.css")
    }
    window.attachEvent("onunload", mxClient.dispose)
}
var mxLog = {consoleName:"Console", TRACE:!1, DEBUG:!0, WARN:!0, buffer:"", init:function () {
    if (mxLog.window == null && document.body != null) {
        var a = mxLog.consoleName + " - mxGraph " + mxClient.VERSION, b = document.createElement("table");
        b.setAttribute("width", "100%");
        b.setAttribute("height", "100%");
        var c = document.createElement("tbody"), d = document.createElement("tr"), e = document.createElement("td");
        e.style.verticalAlign = "top";
        mxLog.textarea = document.createElement("textarea");
        mxLog.textarea.setAttribute("readOnly", "true");
        mxLog.textarea.style.height = "100%";
        mxLog.textarea.style.resize = "none";
        mxLog.textarea.value = mxLog.buffer;
        mxLog.textarea.style.width = mxClient.IS_NS && document.compatMode != "BackCompat" ? "99%" : "100%";
        e.appendChild(mxLog.textarea);
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("tr");
        mxLog.td = document.createElement("td");
        mxLog.td.style.verticalAlign = "top";
        mxLog.td.setAttribute("height", "30px");
        d.appendChild(mxLog.td);
        c.appendChild(d);
        b.appendChild(c);
        mxLog.addButton("Info", function () {
            mxLog.info()
        });
        mxLog.addButton("DOM", function () {
            var a = mxUtils.getInnerHtml(document.body);
            mxLog.debug(a)
        });
        mxLog.addButton("Trace", function () {
            mxLog.TRACE = !mxLog.TRACE;
            mxLog.TRACE ? mxLog.debug("Tracing enabled") : mxLog.debug("Tracing disabled")
        });
        mxLog.addButton("Copy", function () {
            try {
                mxUtils.copy(mxLog.textarea.value)
            } catch (a) {
                mxUtils.alert(a)
            }
        });
        mxLog.addButton("Show", function () {
            try {
                mxUtils.popup(mxLog.textarea.value)
            } catch (a) {
                mxUtils.alert(a)
            }
        });
        mxLog.addButton("Clear", function () {
            mxLog.textarea.value = ""
        });
        c = document.body.clientHeight ||
            document.documentElement.clientHeight;
        mxLog.window = new mxWindow(a, b, Math.max(0, document.body.clientWidth - 320), Math.max(0, c - 250), 300, 200);
        mxLog.window.setMaximizable(true);
        mxLog.window.setScrollable(false);
        mxLog.window.setResizable(true);
        mxLog.window.setClosable(true);
        mxLog.window.destroyOnClose = false;
        if ((mxClient.IS_NS || mxClient.IS_IE) && !mxClient.IS_GC && !mxClient.IS_SF && document.compatMode != "BackCompat") {
            var f = mxLog.window.getElement(), a = function () {
                mxLog.textarea.style.height = Math.max(0, f.offsetHeight -
                    70) + "px"
            };
            mxLog.window.addListener(mxEvent.RESIZE_END, a);
            mxLog.window.addListener(mxEvent.MAXIMIZE, a);
            mxLog.window.addListener(mxEvent.NORMALIZE, a);
            mxLog.textarea.style.height = "92px"
        }
    }
}, info:function () {
    mxLog.writeln(mxUtils.toString(navigator))
}, addButton:function (a, b) {
    var c = document.createElement("button");
    mxUtils.write(c, a);
    mxEvent.addListener(c, "click", b);
    mxLog.td.appendChild(c)
}, isVisible:function () {
    return mxLog.window != null ? mxLog.window.isVisible() : false
}, show:function () {
    mxLog.setVisible(true)
},
    setVisible:function (a) {
        mxLog.window == null && mxLog.init();
        mxLog.window != null && mxLog.window.setVisible(a)
    }, enter:function (a) {
        if (mxLog.TRACE) {
            mxLog.writeln("Entering " + a);
            return(new Date).getTime()
        }
    }, leave:function (a, b) {
        if (mxLog.TRACE) {
            var c = b != 0 ? " (" + ((new Date).getTime() - b) + " ms)" : "";
            mxLog.writeln("Leaving " + a + c)
        }
    }, debug:function () {
        mxLog.DEBUG && mxLog.writeln.apply(this, arguments)
    }, warn:function () {
        mxLog.WARN && mxLog.writeln.apply(this, arguments)
    }, write:function () {
        for (var a = "", b = 0; b < arguments.length; b++) {
            a =
                a + arguments[b];
            b < arguments.length - 1 && (a = a + " ")
        }
        if (mxLog.textarea != null) {
            mxLog.textarea.value = mxLog.textarea.value + a;
            if (navigator.userAgent.indexOf("Presto/2.5") >= 0) {
                mxLog.textarea.style.visibility = "hidden";
                mxLog.textarea.style.visibility = "visible"
            }
            mxLog.textarea.scrollTop = mxLog.textarea.scrollHeight
        } else mxLog.buffer = mxLog.buffer + a
    }, writeln:function () {
        for (var a = "", b = 0; b < arguments.length; b++) {
            a = a + arguments[b];
            b < arguments.length - 1 && (a = a + " ")
        }
        mxLog.write(a + "\n")
    }}, mxObjectIdentity = {FIELD_NAME:"mxObjectId",
    counter:0, get:function (a) {
        if (typeof a == "object" && a[mxObjectIdentity.FIELD_NAME] == null) {
            var b = mxUtils.getFunctionName(a.constructor);
            a[mxObjectIdentity.FIELD_NAME] = b + "#" + mxObjectIdentity.counter++
        }
        return a[mxObjectIdentity.FIELD_NAME]
    }, clear:function (a) {
        typeof a == "object" && delete a[mxObjectIdentity.FIELD_NAME]
    }};
function mxDictionary() {
    this.clear()
}
mxDictionary.prototype.map = null;
mxDictionary.prototype.clear = function () {
    this.map = {}
};
mxDictionary.prototype.get = function (a) {
    return this.map[mxObjectIdentity.get(a)]
};
mxDictionary.prototype.put = function (a, b) {
    var c = mxObjectIdentity.get(a), d = this.map[c];
    this.map[c] = b;
    return d
};
mxDictionary.prototype.remove = function (a) {
    var a = mxObjectIdentity.get(a), b = this.map[a];
    delete this.map[a];
    return b
};
mxDictionary.prototype.getKeys = function () {
    var a = [], b;
    for (b in this.map)a.push(b);
    return a
};
mxDictionary.prototype.getValues = function () {
    var a = [], b;
    for (b in this.map)a.push(this.map[b]);
    return a
};
mxDictionary.prototype.visit = function (a) {
    for (var b in this.map)a(b, this.map[b])
};
var mxResources = {resources:[], loadDefaultBundle:!0, loadSpecialBundle:!0, isLanguageSupported:function (a) {
    return mxClient.languages != null ? mxUtils.indexOf(mxClient.languages, a) >= 0 : true
}, getDefaultBundle:function (a, b) {
    return mxResources.loadDefaultBundle || !mxResources.isLanguageSupported(b) ? a + ".properties" : null
}, getSpecialBundle:function (a, b) {
    if (mxClient.languages == null || !this.isLanguageSupported(b)) {
        var c = b.indexOf("-");
        c > 0 && (b = b.substring(0, c))
    }
    return mxResources.loadSpecialBundle && mxResources.isLanguageSupported(b) &&
        b != mxClient.defaultLanguage ? a + "_" + b + ".properties" : null
}, add:function (a, b) {
    b = b != null ? b : mxClient.language.toLowerCase();
    if (b != mxConstants.NONE) {
        var c = mxResources.getDefaultBundle(a, b);
        if (c != null)try {
            var d = mxUtils.load(c);
            d.isReady() && mxResources.parse(d.getText())
        } catch (e) {
        }
        c = mxResources.getSpecialBundle(a, b);
        if (c != null)try {
            d = mxUtils.load(c);
            d.isReady() && mxResources.parse(d.getText())
        } catch (f) {
        }
    }
}, parse:function (a) {
    if (a != null)for (var a = a.split("\n"), b = 0; b < a.length; b++) {
        var c = a[b].indexOf("=");
        if (c >
            0) {
            var d = a[b].substring(0, c), e = a[b].length;
            a[b].charCodeAt(e - 1) == 13 && e--;
            c = a[b].substring(c + 1, e);
            mxResources.resources[d] = unescape(c)
        }
    }
}, get:function (a, b, c) {
    a = mxResources.resources[a];
    a == null && (a = c);
    if (a != null && b != null) {
        for (var c = [], d = null, e = 0; e < a.length; e++) {
            var f = a.charAt(e);
            if (f == "{")d = ""; else if (d != null && f == "}") {
                d = parseInt(d) - 1;
                d >= 0 && d < b.length && c.push(b[d]);
                d = null
            } else d != null ? d = d + f : c.push(f)
        }
        a = c.join("")
    }
    return a
}};
function mxPoint(a, b) {
    this.x = a != null ? a : 0;
    this.y = b != null ? b : 0
}
mxPoint.prototype.x = null;
mxPoint.prototype.y = null;
mxPoint.prototype.equals = function (a) {
    return a.x == this.x && a.y == this.y
};
mxPoint.prototype.clone = function () {
    return mxUtils.clone(this)
};
function mxRectangle(a, b, c, d) {
    mxPoint.call(this, a, b);
    this.width = c != null ? c : 0;
    this.height = d != null ? d : 0
}
mxRectangle.prototype = new mxPoint;
mxRectangle.prototype.constructor = mxRectangle;
mxRectangle.prototype.width = null;
mxRectangle.prototype.height = null;
mxRectangle.prototype.setRect = function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d
};
mxRectangle.prototype.getCenterX = function () {
    return this.x + this.width / 2
};
mxRectangle.prototype.getCenterY = function () {
    return this.y + this.height / 2
};
mxRectangle.prototype.add = function (a) {
    if (a != null) {
        var b = Math.min(this.x, a.x), c = Math.min(this.y, a.y), d = Math.max(this.x + this.width, a.x + a.width), a = Math.max(this.y + this.height, a.y + a.height);
        this.x = b;
        this.y = c;
        this.width = d - b;
        this.height = a - c
    }
};
mxRectangle.prototype.grow = function (a) {
    this.x = this.x - a;
    this.y = this.y - a;
    this.width = this.width + 2 * a;
    this.height = this.height + 2 * a
};
mxRectangle.prototype.getPoint = function () {
    return new mxPoint(this.x, this.y)
};
mxRectangle.prototype.equals = function (a) {
    return a.x == this.x && a.y == this.y && a.width == this.width && a.height == this.height
};
var mxEffects = {animateChanges:function (a, b, c) {
    var d = 0, e = function () {
        for (var g = false, h = 0; h < b.length; h++) {
            var k = b[h];
            if (k instanceof mxGeometryChange || k instanceof mxTerminalChange || k instanceof mxValueChange || k instanceof mxChildChange || k instanceof mxStyleChange) {
                var i = a.getView().getState(k.cell || k.child, false);
                if (i != null) {
                    g = true;
                    if (k.constructor != mxGeometryChange || a.model.isEdge(k.cell))mxUtils.setOpacity(i.shape.node, 100 * d / 10); else {
                        var l = a.getView().scale, m = (k.geometry.x - k.previous.x) * l, n = (k.geometry.y -
                            k.previous.y) * l, o = (k.geometry.width - k.previous.width) * l, l = (k.geometry.height - k.previous.height) * l;
                        if (d == 0) {
                            i.x = i.x - m;
                            i.y = i.y - n;
                            i.width = i.width - o;
                            i.height = i.height - l
                        } else {
                            i.x = i.x + m / 10;
                            i.y = i.y + n / 10;
                            i.width = i.width + o / 10;
                            i.height = i.height + l / 10
                        }
                        a.cellRenderer.redraw(i);
                        mxEffects.cascadeOpacity(a, k.cell, 100 * d / 10)
                    }
                }
            }
        }
        mxUtils.repaintGraph(a, new mxPoint(1, 1));
        if (d < 10 && g) {
            d++;
            window.setTimeout(e, f)
        } else c != null && c()
    }, f = 30;
    e()
}, cascadeOpacity:function (a, b, c) {
    for (var d = a.model.getChildCount(b), e = 0; e < d; e++) {
        var f =
            a.model.getChildAt(b, e), g = a.getView().getState(f);
        if (g != null) {
            mxUtils.setOpacity(g.shape.node, c);
            mxEffects.cascadeOpacity(a, f, c)
        }
    }
    b = a.model.getEdges(b);
    if (b != null)for (e = 0; e < b.length; e++) {
        d = a.getView().getState(b[e]);
        d != null && mxUtils.setOpacity(d.shape.node, c)
    }
}, fadeOut:function (a, b, c, d, e, f) {
    var d = d || 40, e = e || 30, g = b || 100;
    mxUtils.setOpacity(a, g);
    if (f || f == null) {
        var h = function () {
            g = Math.max(g - d, 0);
            mxUtils.setOpacity(a, g);
            if (g > 0)window.setTimeout(h, e); else {
                a.style.visibility = "hidden";
                c && a.parentNode && a.parentNode.removeChild(a)
            }
        };
        window.setTimeout(h, e)
    } else {
        a.style.visibility = "hidden";
        c && a.parentNode && a.parentNode.removeChild(a)
    }
}}, mxUtils = {errorResource:"none" != mxClient.language ? "error" : "", closeResource:"none" != mxClient.language ? "close" : "", errorImage:mxClient.imageBasePath + "/error.gif", removeCursors:function (a) {
    if (a.style != null)a.style.cursor = "";
    a = a.childNodes;
    if (a != null)for (var b = a.length, c = 0; c < b; c = c + 1)mxUtils.removeCursors(a[c])
}, repaintGraph:function (a, b) {
    if (mxClient.IS_GC || mxClient.IS_SF || mxClient.IS_OP) {
        var c = a.container;
        if (c != null && b != null && (c.scrollLeft > 0 || c.scrollTop > 0)) {
            var d = document.createElement("div");
            d.style.position = "absolute";
            d.style.left = b.x + "px";
            d.style.top = b.y + "px";
            d.style.width = "1px";
            d.style.height = "1px";
            c.appendChild(d);
            c.removeChild(d)
        }
    }
}, getCurrentStyle:function () {
    return mxClient.IS_IE ? function (a) {
        return a != null ? a.currentStyle : null
    } : function (a) {
        return a != null ? window.getComputedStyle(a, "") : null
    }
}(), hasScrollbars:function (a) {
    a = mxUtils.getCurrentStyle(a);
    return a != null && (a.overflow == "scroll" || a.overflow ==
        "auto")
}, bind:function (a, b) {
    return function () {
        return b.apply(a, arguments)
    }
}, eval:function (a) {
    var b = null;
    if (a.indexOf("function") >= 0)try {
        eval("var _mxJavaScriptExpression=" + a);
        b = _mxJavaScriptExpression;
        _mxJavaScriptExpression = null
    } catch (c) {
        mxLog.warn(c.message + " while evaluating " + a)
    } else try {
        b = eval(a)
    } catch (d) {
        mxLog.warn(d.message + " while evaluating " + a)
    }
    return b
}, findNode:function (a, b, c) {
    var d = a.getAttribute(b);
    if (d != null && d == c)return a;
    for (a = a.firstChild; a != null;) {
        d = mxUtils.findNode(a, b, c);
        if (d !=
            null)return d;
        a = a.nextSibling
    }
    return null
}, findNodeByAttribute:function () {
    return document.documentMode >= 9 ? function (a, b, c) {
        var d = null;
        if (a.nodeType == mxConstants.NODETYPE_ELEMENT && a.getAttribute(b) == c)d = a; else for (a = a.firstChild; a != null && d == null;) {
            d = mxUtils.findNodeByAttribute(a, b, c);
            a = a.nextSibling
        }
        return d
    } : mxClient.IS_IE ? function (a, b, c) {
        return a.ownerDocument.selectSingleNode("//*[@" + b + "='" + c + "']")
    } : function (a, b, c) {
        return a.ownerDocument.evaluate("//*[@" + b + "='" + c + "']", a.ownerDocument, null, XPathResult.ANY_TYPE,
            null).iterateNext()
    }
}(), getFunctionName:function (a) {
    var b = null;
    if (a != null)if (a.name != null)b = a.name; else {
        a = a.toString();
        for (b = 9; a.charAt(b) == " ";)b++;
        var c = a.indexOf("(", b), b = a.substring(b, c)
    }
    return b
}, indexOf:function (a, b) {
    if (a != null && b != null)for (var c = 0; c < a.length; c++)if (a[c] == b)return c;
    return-1
}, remove:function (a, b) {
    var c = null;
    if (typeof b == "object")for (var d = mxUtils.indexOf(b, a); d >= 0;) {
        b.splice(d, 1);
        c = a;
        d = mxUtils.indexOf(b, a)
    }
    for (var e in b)if (b[e] == a) {
        delete b[e];
        c = a
    }
    return c
}, isNode:function (a, b, c, d) {
    return a != null && !isNaN(a.nodeType) && (b == null || a.nodeName.toLowerCase() == b.toLowerCase()) ? c == null || a.getAttribute(c) == d : false
}, getChildNodes:function (a, b) {
    for (var b = b || mxConstants.NODETYPE_ELEMENT, c = [], d = a.firstChild; d != null;) {
        d.nodeType == b && c.push(d);
        d = d.nextSibling
    }
    return c
}, createXmlDocument:function () {
    var a = null;
    document.implementation && document.implementation.createDocument ? a = document.implementation.createDocument("", "", null) : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLDOM"));
    return a
}, parseXml:function () {
    return mxClient.IS_IE && (typeof document.documentMode === "undefined" || document.documentMode < 9) ? function (a) {
        var b = mxUtils.createXmlDocument();
        b.async = "false";
        b.loadXML(a);
        return b
    } : function (a) {
        return(new DOMParser).parseFromString(a, "text/xml")
    }
}(), clearSelection:function () {
    if (document.selection)return function () {
        document.selection.empty()
    };
    if (window.getSelection)return function () {
        window.getSelection().removeAllRanges()
    }
}(), getPrettyXml:function (a, b, c) {
    var d = [];
    if (a != null) {
        b =
            b || "  ";
        c = c || "";
        if (a.nodeType == mxConstants.NODETYPE_TEXT)d.push(a.nodeValue); else {
            d.push(c + "<" + a.nodeName);
            var e = a.attributes;
            if (e != null)for (var f = 0; f < e.length; f++) {
                var g = mxUtils.htmlEntities(e[f].nodeValue);
                d.push(" " + e[f].nodeName + '="' + g + '"')
            }
            e = a.firstChild;
            if (e != null) {
                for (d.push(">\n"); e != null;) {
                    d.push(mxUtils.getPrettyXml(e, b, c + b));
                    e = e.nextSibling
                }
                d.push(c + "</" + a.nodeName + ">\n")
            } else d.push("/>\n")
        }
    }
    return d.join("")
}, removeWhitespace:function (a, b) {
    for (var c = b ? a.previousSibling : a.nextSibling; c !=
        null && c.nodeType == mxConstants.NODETYPE_TEXT;) {
        var d = b ? c.previousSibling : c.nextSibling, e = mxUtils.getTextContent(c);
        mxUtils.trim(e).length == 0 && c.parentNode.removeChild(c);
        c = d
    }
}, htmlEntities:function (a, b) {
    a = (a || "").replace(/&/g, "&amp;");
    a = a.replace(/"/g, "&quot;");
    a = a.replace(/\'/g, "&#39;");
    a = a.replace(/</g, "&lt;");
    a = a.replace(/>/g, "&gt;");
    if (b == null || b)a = a.replace(/\n/g, "&#xa;");
    return a
}, isVml:function (a) {
    return a != null && a.tagUrn == "urn:schemas-microsoft-com:vml"
}, getXml:function (a, b) {
    var c = "";
    if (a !=
        null) {
        c = a.xml;
        c = c == null ? a.innerHTML ? a.innerHTML : (new XMLSerializer).serializeToString(a) : c.replace(/\r\n\t[\t]*/g, "").replace(/>\r\n/g, ">").replace(/\r\n/g, "\n")
    }
    return c = c.replace(/\n/g, b || "&#xa;")
}, getTextContent:function (a) {
    var b = "";
    if (a != null) {
        if (a.firstChild != null)a = a.firstChild;
        b = a.nodeValue || ""
    }
    return b
}, getInnerHtml:function () {
    return mxClient.IS_IE ? function (a) {
        return a != null ? a.innerHTML : ""
    } : function (a) {
        return a != null ? (new XMLSerializer).serializeToString(a) : ""
    }
}(), getOuterHtml:function () {
    return mxClient.IS_IE ?
        function (a) {
            if (a != null) {
                if (a.outerHTML != null)return a.outerHTML;
                var b = [];
                b.push("<" + a.nodeName);
                var c = a.attributes;
                if (c != null)for (var d = 0; d < c.length; d++) {
                    var e = c[d].nodeValue;
                    if (e != null && e.length > 0) {
                        b.push(" ");
                        b.push(c[d].nodeName);
                        b.push('="');
                        b.push(e);
                        b.push('"')
                    }
                }
                if (a.innerHTML.length == 0)b.push("/>"); else {
                    b.push(">");
                    b.push(a.innerHTML);
                    b.push("</" + a.nodeName + ">")
                }
                return b.join("")
            }
            return""
        } : function (a) {
        return a != null ? (new XMLSerializer).serializeToString(a) : ""
    }
}(), write:function (a, b) {
    doc = a.ownerDocument;
    var c = doc.createTextNode(b);
    a != null && a.appendChild(c);
    return c
}, writeln:function (a, b) {
    doc = a.ownerDocument;
    var c = doc.createTextNode(b);
    if (a != null) {
        a.appendChild(c);
        a.appendChild(document.createElement("br"))
    }
    return c
}, br:function (a, b) {
    for (var b = b || 1, c = null, d = 0; d < b; d++)if (a != null) {
        c = a.ownerDocument.createElement("br");
        a.appendChild(c)
    }
    return c
}, button:function (a, b, c) {
    c = c != null ? c : document;
    c = c.createElement("button");
    mxUtils.write(c, a);
    mxEvent.addListener(c, "click", function (a) {
        b(a)
    });
    return c
}, para:function (a, b) {
    var c = document.createElement("p");
    mxUtils.write(c, b);
    a != null && a.appendChild(c);
    return c
}, linkAction:function (a, b, c, d, e) {
    return mxUtils.link(a, b, function () {
        c.execute(d)
    }, e)
}, linkInvoke:function (a, b, c, d, e, f) {
    return mxUtils.link(a, b, function () {
        c[d](e)
    }, f)
}, link:function (a, b, c, d) {
    var e = document.createElement("span");
    e.style.color = "blue";
    e.style.textDecoration = "underline";
    e.style.cursor = "pointer";
    if (d != null)e.style.paddingLeft = d + "px";
    mxEvent.addListener(e, "click", c);
    mxUtils.write(e, b);
    a != null && a.appendChild(e);
    return e
}, fit:function (a) {
    var b = parseInt(a.offsetLeft), c = parseInt(a.offsetWidth), d = document.body, e = document.documentElement, f = (d.scrollLeft || e.scrollLeft) + (d.clientWidth || e.clientWidth);
    if (b + c > f)a.style.left = Math.max(d.scrollLeft || e.scrollLeft, f - c) + "px";
    b = parseInt(a.offsetTop);
    c = parseInt(a.offsetHeight);
    f = (d.scrollTop || e.scrollTop) + Math.max(d.clientHeight || 0, e.clientHeight);
    if (b + c > f)a.style.top = Math.max(d.scrollTop || e.scrollTop, f - c) + "px"
}, open:function (a) {
    if (mxClient.IS_NS) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
        } catch (b) {
            mxUtils.alert("Permission to read file denied.");
            return""
        }
        var c = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
        c.initWithPath(a);
        if (!c.exists()) {
            mxUtils.alert("File not found.");
            return""
        }
        a = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
        a.init(c, 1, 4, null);
        c = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
        c.init(a);
        return c.read(c.available())
    }
    c = (new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(a,
        1);
    a = c.readAll();
    c.close();
    return a
}, save:function (a, b) {
    if (mxClient.IS_NS) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
        } catch (c) {
            mxUtils.alert("Permission to write file denied.");
            return
        }
        var d = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
        d.initWithPath(a);
        d.exists() || d.create(0, 420);
        var e = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
        e.init(d,
            34, 4, null);
        e.write(b, b.length);
        e.flush();
        e.close()
    } else {
        d = (new ActiveXObject("Scripting.FileSystemObject")).CreateTextFile(a, true);
        d.Write(b);
        d.Close()
    }
}, saveAs:function (a) {
    var b = document.createElement("iframe");
    b.setAttribute("src", "");
    b.style.visibility = "hidden";
    document.body.appendChild(b);
    try {
        if (mxClient.IS_NS) {
            var c = b.contentDocument;
            c.open();
            c.write(a);
            c.close();
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                b.focus();
                saveDocument(c)
            } catch (d) {
                mxUtils.alert("Permission to save document denied.")
            }
        } else {
            c =
                b.contentWindow.document;
            c.write(a);
            c.execCommand("SaveAs", false, document.location)
        }
    } finally {
        document.body.removeChild(b)
    }
}, copy:function (a) {
    if (window.clipboardData)window.clipboardData.setData("Text", a); else {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        var b = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
        if (b) {
            var c = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
            if (c) {
                c.addDataFlavor("text/unicode");
                var d = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
                d.data = a;
                c.setTransferData("text/unicode", d, a.length * 2);
                b.setData(c, null, Components.interfaces.nsIClipboard.kGlobalClipboard)
            }
        }
    }
}, load:function (a) {
    a = new mxXmlRequest(a, null, "GET", false);
    a.send();
    return a
}, get:function (a, b, c) {
    return(new mxXmlRequest(a, null, "GET")).send(b, c)
}, post:function (a, b, c, d) {
    return(new mxXmlRequest(a, b)).send(c, d)
}, submit:function (a, b, c, d) {
    return(new mxXmlRequest(a, b)).simulate(c, d)
}, loadInto:function (a, b, c) {
    mxClient.IS_IE ? b.onreadystatechange = function () {
        b.readyState == 4 && c()
    } : b.addEventListener("load", c, false);
    b.load(a)
}, getValue:function (a, b, c) {
    a = a != null ? a[b] : null;
    a == null && (a = c);
    return a
}, getNumber:function (a, b, c) {
    a = a != null ? a[b] : null;
    a == null && (a = c || 0);
    return Number(a)
}, getColor:function (a, b, c) {
    a = a != null ? a[b] : null;
    a == null ? a = c : a == mxConstants.NONE && (a = null);
    return a
}, clone:function (a, b, c) {
    var c = c != null ? c : false, d = null;
    if (a != null &&
        typeof a.constructor == "function") {
        var d = new a.constructor, e;
        for (e in a)if (e != mxObjectIdentity.FIELD_NAME && (b == null || mxUtils.indexOf(b, e) < 0))d[e] = !c && typeof a[e] == "object" ? mxUtils.clone(a[e]) : a[e]
    }
    return d
}, equalPoints:function (a, b) {
    if (a == null && b != null || a != null && b == null || a != null && b != null && a.length != b.length)return false;
    if (a != null && b != null)for (var c = 0; c < a.length; c++)if (a[c] == b[c] || a[c] != null && !a[c].equals(b[c]))return false;
    return true
}, equalEntries:function (a, b) {
    if (a == null && b != null || a != null && b == null ||
        a != null && b != null && a.length != b.length)return false;
    if (a != null && b != null)for (var c in a)if (a[c] != b[c])return false;
    return true
}, extend:function (a, b) {
    var c = function () {
    };
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
}, toString:function (a) {
    var b = "", c;
    for (c in a)try {
        if (a[c] == null)b = b + (c + " = [null]\n"); else if (typeof a[c] == "function")b = b + (c + " => [Function]\n"); else if (typeof a[c] == "object")var d = mxUtils.getFunctionName(a[c].constructor), b = b + (c + " => [" + d + "]\n"); else b = b + (c + " = " + a[c] +
            "\n")
    } catch (e) {
        b = b + (c + "=" + e.message)
    }
    return b
}, toRadians:function (a) {
    return Math.PI * a / 180
}, arcToCurves:function (a, b, c, d, e, f, g, h, k) {
    h = h - a;
    k = k - b;
    if (c === 0 || d === 0)return n;
    var c = Math.abs(c), d = Math.abs(d), i = -h / 2, l = -k / 2, m = Math.cos(e * Math.PI / 180), n = Math.sin(e * Math.PI / 180), e = m * i + n * l, i = -1 * n * i + m * l, l = e * e, o = i * i, p = c * c, q = d * d, t = l / p + o / q;
    if (t > 1) {
        c = Math.sqrt(t) * c;
        d = Math.sqrt(t) * d;
        f = 0
    } else {
        t = 1;
        f === g && (t = -1);
        f = t * Math.sqrt((p * q - p * o - q * l) / (p * o + q * l))
    }
    l = f * c * i / d;
    o = -1 * f * d * e / c;
    h = m * l - n * o + h / 2;
    k = n * l + m * o + k / 2;
    p = Math.atan2((i - o) /
        d, (e - l) / c) - Math.atan2(0, 1);
    f = p >= 0 ? p : 2 * Math.PI + p;
    p = Math.atan2((-i - o) / d, (-e - l) / c) - Math.atan2((i - o) / d, (e - l) / c);
    e = p >= 0 ? p : 2 * Math.PI + p;
    g == 0 && e > 0 ? e = e - 2 * Math.PI : g != 0 && e < 0 && (e = e + 2 * Math.PI);
    for (var g = e * 2 / Math.PI, g = Math.ceil(g < 0 ? -1 * g : g), e = e / g, i = 8 / 3 * Math.sin(e / 4) * Math.sin(e / 4) / Math.sin(e / 2), l = m * c, m = m * d, c = n * c, d = n * d, u = Math.cos(f), v = Math.sin(f), o = -i * (l * v + d * u), p = -i * (c * v - m * u), t = q = 0, n = [], w = 0; w < g; ++w) {
        var f = f + e, u = Math.cos(f), v = Math.sin(f), q = l * u - d * v + h, t = c * u + m * v + k, r = -i * (l * v + d * u), u = -i * (c * v - m * u), v = w * 6;
        n[v] = Number(o + a);
        n[v + 1] = Number(p + b);
        n[v + 2] = Number(q - r + a);
        n[v + 3] = Number(t - u + b);
        n[v + 4] = Number(q + a);
        n[v + 5] = Number(t + b);
        o = q + r;
        p = t + u
    }
    return n
}, getBoundingBox:function (a, b) {
    var c = null;
    if (a != null && b != null && b != 0) {
        var d = mxUtils.toRadians(b), c = Math.cos(d), e = Math.sin(d), f = new mxPoint(a.x + a.width / 2, a.y + a.height / 2), g = new mxPoint(a.x, a.y), d = new mxPoint(a.x + a.width, a.y), h = new mxPoint(d.x, a.y + a.height), k = new mxPoint(a.x, h.y), g = mxUtils.getRotatedPoint(g, c, e, f), d = mxUtils.getRotatedPoint(d, c, e, f), h = mxUtils.getRotatedPoint(h, c, e, f),
            k = mxUtils.getRotatedPoint(k, c, e, f), c = new mxRectangle(g.x, g.y, 0, 0);
        c.add(new mxRectangle(d.x, d.y, 0, 0));
        c.add(new mxRectangle(h.x, h.y, 0, 0));
        c.add(new mxRectangle(k.x, k.y, 0, 0))
    }
    return c
}, getRotatedPoint:function (a, b, c, d) {
    var d = d != null ? d : new mxPoint, e = a.x - d.x, a = a.y - d.y;
    return new mxPoint(e * b - a * c + d.x, a * b + e * c + d.y)
}, getPortConstraints:function (a, b, c, d) {
    a = mxUtils.getValue(a.style, mxConstants.STYLE_PORT_CONSTRAINT, null);
    if (a == null)return d;
    d = a.toString();
    a = mxConstants.DIRECTION_MASK_NONE;
    d.indexOf(mxConstants.DIRECTION_NORTH) >=
        0 && (a = a | mxConstants.DIRECTION_MASK_NORTH);
    d.indexOf(mxConstants.DIRECTION_WEST) >= 0 && (a = a | mxConstants.DIRECTION_MASK_WEST);
    d.indexOf(mxConstants.DIRECTION_SOUTH) >= 0 && (a = a | mxConstants.DIRECTION_MASK_SOUTH);
    d.indexOf(mxConstants.DIRECTION_EAST) >= 0 && (a = a | mxConstants.DIRECTION_MASK_EAST);
    return a
}, reversePortConstraints:function (a) {
    var b = 0, b = (a & mxConstants.DIRECTION_MASK_WEST) << 3, b = b | (a & mxConstants.DIRECTION_MASK_NORTH) << 1, b = b | (a & mxConstants.DIRECTION_MASK_SOUTH) >> 1;
    return b = b | (a & mxConstants.DIRECTION_MASK_EAST) >>
        3
}, findNearestSegment:function (a, b, c) {
    var d = -1;
    if (a.absolutePoints.length > 0)for (var e = a.absolutePoints[0], f = null, g = 1; g < a.absolutePoints.length; g++) {
        var h = a.absolutePoints[g], e = mxUtils.ptSegDistSq(e.x, e.y, h.x, h.y, b, c);
        if (f == null || e < f) {
            f = e;
            d = g - 1
        }
        e = h
    }
    return d
}, rectangleIntersectsSegment:function (a, b, c) {
    var d = a.y, e = a.x, f = d + a.height, g = e + a.width, a = b.x, h = c.x;
    if (b.x > c.x) {
        a = c.x;
        h = b.x
    }
    h > g && (h = g);
    a < e && (a = e);
    if (a > h)return false;
    var e = b.y, g = c.y, k = c.x - b.x;
    if (Math.abs(k) > 1.0E-7) {
        c = (c.y - b.y) / k;
        b = b.y - c * b.x;
        e = c * a +
            b;
        g = c * h + b
    }
    if (e > g) {
        b = g;
        g = e;
        e = b
    }
    g > f && (g = f);
    e < d && (e = d);
    return e > g ? false : true
}, contains:function (a, b, c) {
    return a.x <= b && a.x + a.width >= b && a.y <= c && a.y + a.height >= c
}, intersects:function (a, b) {
    var c = a.width, d = a.height, e = b.width, f = b.height;
    if (e <= 0 || f <= 0 || c <= 0 || d <= 0)return false;
    var g = a.x, h = a.y, k = b.x, i = b.y, e = e + k, f = f + i, c = c + g, d = d + h;
    return(e < k || e > g) && (f < i || f > h) && (c < g || c > k) && (d < h || d > i)
}, intersectsHotspot:function (a, b, c, d, e, f) {
    d = d != null ? d : 1;
    e = e != null ? e : 0;
    f = f != null ? f : 0;
    if (d > 0) {
        var g = a.getCenterX(), h = a.getCenterY(), k =
            a.width, i = a.height, l = mxUtils.getValue(a.style, mxConstants.STYLE_STARTSIZE);
        if (l > 0)if (mxUtils.getValue(a.style, mxConstants.STYLE_HORIZONTAL, true)) {
            h = a.y + l / 2;
            i = l
        } else {
            g = a.x + l / 2;
            k = l
        }
        k = Math.max(e, k * d);
        i = Math.max(e, i * d);
        if (f > 0) {
            k = Math.min(k, f);
            i = Math.min(i, f)
        }
        a = new mxRectangle(g - k / 2, h - i / 2, k, i);
        return mxUtils.contains(a, b, c)
    }
    return true
}, getOffset:function (a) {
    for (var b = 0, c = 0; a.offsetParent;) {
        b = b + a.offsetLeft;
        c = c + a.offsetTop;
        a = a.offsetParent
    }
    return new mxPoint(b, c)
}, getScrollOrigin:function (a) {
    for (var b =
        document.body, c = document.documentElement, d = new mxPoint(b.scrollLeft || c.scrollLeft, b.scrollTop || c.scrollTop); a != null && a != b && a != c;) {
        if (!isNaN(a.scrollLeft) && !isNaN(a.scrollTop)) {
            d.x = d.x + a.scrollLeft;
            d.y = d.y + a.scrollTop
        }
        a = a.parentNode
    }
    return d
}, convertPoint:function (a, b, c) {
    var d = mxUtils.getScrollOrigin(a), a = mxUtils.getOffset(a);
    a.x = a.x - d.x;
    a.y = a.y - d.y;
    return new mxPoint(b - a.x, c - a.y)
}, ltrim:function (a, b) {
    return a.replace(RegExp("^[" + (b || "\\s") + "]+", "g"), "")
}, rtrim:function (a, b) {
    return a.replace(RegExp("[" +
        (b || "\\s") + "]+$", "g"), "")
}, trim:function (a, b) {
    return mxUtils.ltrim(mxUtils.rtrim(a, b), b)
}, isNumeric:function (a) {
    return a != null && (a.length == null || a.length > 0 && a.indexOf("0x") < 0 && a.indexOf("0X") < 0) && !isNaN(a)
}, mod:function (a, b) {
    return(a % b + b) % b
}, intersection:function (a, b, c, d, e, f, g, h) {
    var k = (h - f) * (c - a) - (g - e) * (d - b), g = ((g - e) * (b - f) - (h - f) * (a - e)) / k, e = ((c - a) * (b - f) - (d - b) * (a - e)) / k;
    return g >= 0 && g <= 1 && e >= 0 && e <= 1 ? new mxPoint(a + g * (c - a), b + g * (d - b)) : null
}, ptSegDistSq:function (a, b, c, d, e, f) {
    c = c - a;
    d = d - b;
    e = e - a;
    f = f - b;
    if (e *
        c + f * d <= 0)c = 0; else {
        e = c - e;
        f = d - f;
        a = e * c + f * d;
        c = a <= 0 ? 0 : a * a / (c * c + d * d)
    }
    e = e * e + f * f - c;
    e < 0 && (e = 0);
    return e
}, relativeCcw:function (a, b, c, d, e, f) {
    c = c - a;
    d = d - b;
    e = e - a;
    f = f - b;
    a = e * d - f * c;
    if (a == 0) {
        a = e * c + f * d;
        if (a > 0) {
            a = (e - c) * c + (f - d) * d;
            a < 0 && (a = 0)
        }
    }
    return a < 0 ? -1 : a > 0 ? 1 : 0
}, animateChanges:function (a, b) {
    mxEffects.animateChanges.apply(this, arguments)
}, cascadeOpacity:function (a, b, c) {
    mxEffects.cascadeOpacity.apply(this, arguments)
}, fadeOut:function (a, b, c, d, e, f) {
    mxEffects.fadeOut.apply(this, arguments)
}, setOpacity:function (a, b) {
    mxUtils.isVml(a) ?
        a.style.filter = b >= 100 ? null : "alpha(opacity=" + b / 5 + ")" : mxClient.IS_IE && (typeof document.documentMode === "undefined" || document.documentMode < 9) ? a.style.filter = b >= 100 ? null : "alpha(opacity=" + b + ")" : a.style.opacity = b / 100
}, createImage:function (a) {
    var b = null;
    if (mxClient.IS_IE6 && document.compatMode != "CSS1Compat") {
        b = document.createElement("v:image");
        b.setAttribute("src", a);
        b.style.borderStyle = "none"
    } else {
        b = document.createElement("img");
        b.setAttribute("src", a);
        b.setAttribute("border", "0")
    }
    return b
}, sortCells:function (a, b) {
    var b = b != null ? b : true, c = new mxDictionary;
    a.sort(function (a, e) {
        var f = c.get(a);
        if (f == null) {
            f = mxCellPath.create(a).split(mxCellPath.PATH_SEPARATOR);
            c.put(a, f)
        }
        var g = c.get(e);
        if (g == null) {
            g = mxCellPath.create(e).split(mxCellPath.PATH_SEPARATOR);
            c.put(e, g)
        }
        f = mxCellPath.compare(f, g);
        return f == 0 ? 0 : f > 0 == b ? 1 : -1
    });
    return a
}, getStylename:function (a) {
    if (a != null) {
        a = a.split(";")[0];
        if (a.indexOf("=") < 0)return a
    }
    return""
}, getStylenames:function (a) {
    var b = [];
    if (a != null)for (var a = a.split(";"), c = 0; c < a.length; c++)a[c].indexOf("=") <
        0 && b.push(a[c]);
    return b
}, indexOfStylename:function (a, b) {
    if (a != null && b != null)for (var c = a.split(";"), d = 0, e = 0; e < c.length; e++) {
        if (c[e] == b)return d;
        d = d + (c[e].length + 1)
    }
    return-1
}, addStylename:function (a, b) {
    if (mxUtils.indexOfStylename(a, b) < 0) {
        a == null ? a = "" : a.length > 0 && a.charAt(a.length - 1) != ";" && (a = a + ";");
        a = a + b
    }
    return a
}, removeStylename:function (a, b) {
    var c = [];
    if (a != null)for (var d = a.split(";"), e = 0; e < d.length; e++)d[e] != b && c.push(d[e]);
    return c.join(";")
}, removeAllStylenames:function (a) {
    var b = [];
    if (a != null)for (var a =
        a.split(";"), c = 0; c < a.length; c++)a[c].indexOf("=") >= 0 && b.push(a[c]);
    return b.join(";")
}, setCellStyles:function (a, b, c, d) {
    if (b != null && b.length > 0) {
        a.beginUpdate();
        try {
            for (var e = 0; e < b.length; e++)if (b[e] != null) {
                var f = mxUtils.setStyle(a.getStyle(b[e]), c, d);
                a.setStyle(b[e], f)
            }
        } finally {
            a.endUpdate()
        }
    }
}, setStyle:function (a, b, c) {
    var d = c != null && (typeof c.length == "undefined" || c.length > 0);
    if (a == null || a.length == 0)d && (a = b + "=" + c); else {
        var e = a.indexOf(b + "=");
        if (e < 0) {
            if (d) {
                d = a.charAt(a.length - 1) == ";" ? "" : ";";
                a = a + d + b +
                    "=" + c
            }
        } else {
            b = d ? b + "=" + c : "";
            c = a.indexOf(";", e);
            d || c++;
            a = a.substring(0, e) + b + (c > e ? a.substring(c) : "")
        }
    }
    return a
}, setCellStyleFlags:function (a, b, c, d, e) {
    if (b != null && b.length > 0) {
        a.beginUpdate();
        try {
            for (var f = 0; f < b.length; f++)if (b[f] != null) {
                var g = mxUtils.setStyleFlag(a.getStyle(b[f]), c, d, e);
                a.setStyle(b[f], g)
            }
        } finally {
            a.endUpdate()
        }
    }
}, setStyleFlag:function (a, b, c, d) {
    if (a == null || a.length == 0)a = d || d == null ? b + "=" + c : b + "=0"; else {
        var e = a.indexOf(b + "=");
        if (e < 0) {
            e = a.charAt(a.length - 1) == ";" ? "" : ";";
            a = d || d == null ? a + e + b +
                "=" + c : a + e + b + "=0"
        } else var f = a.indexOf(";", e), g = "", g = f < 0 ? a.substring(e + b.length + 1) : a.substring(e + b.length + 1, f), g = d == null ? parseInt(g) ^ c : d ? parseInt(g) | c : parseInt(g) & ~c, a = a.substring(0, e) + b + "=" + g + (f >= 0 ? a.substring(f) : "")
    }
    return a
}, getSizeForString:function (a, b, c) {
    var d = document.createElement("div");
    d.style.fontSize = (b || mxConstants.DEFAULT_FONTSIZE) + "px";
    d.style.fontFamily = c || mxConstants.DEFAULT_FONTFAMILY;
    d.style.position = "absolute";
    d.style.display = "inline";
    d.style.visibility = "hidden";
    d.innerHTML = a;
    document.body.appendChild(d);
    a = new mxRectangle(0, 0, d.offsetWidth, d.offsetHeight);
    document.body.removeChild(d);
    return a
}, getViewXml:function (a, b, c, d, e) {
    d = d != null ? d : 0;
    e = e != null ? e : 0;
    b = b != null ? b : 1;
    c == null && (c = [a.getModel().getRoot()]);
    var f = a.getView(), g = null, h = f.isEventsEnabled();
    f.setEventsEnabled(false);
    var k = f.drawPane, i = f.overlayPane;
    if (a.dialect == mxConstants.DIALECT_SVG) {
        f.drawPane = document.createElementNS(mxConstants.NS_SVG, "g");
        f.canvas.appendChild(f.drawPane);
        f.overlayPane = document.createElementNS(mxConstants.NS_SVG, "g")
    } else {
        f.drawPane =
            f.drawPane.cloneNode(false);
        f.canvas.appendChild(f.drawPane);
        f.overlayPane = f.overlayPane.cloneNode(false)
    }
    f.canvas.appendChild(f.overlayPane);
    var l = f.getTranslate();
    f.translate = new mxPoint(d, e);
    b = new mxTemporaryCellStates(a.getView(), b, c);
    try {
        g = (new mxCodec).encode(a.getView())
    } finally {
        b.destroy();
        f.translate = l;
        f.canvas.removeChild(f.drawPane);
        f.canvas.removeChild(f.overlayPane);
        f.drawPane = k;
        f.overlayPane = i;
        f.setEventsEnabled(h)
    }
    return g
}, getScaleForPageCount:function (a, b, c, d) {
    if (a < 1)return 1;
    var c =
        c != null ? c : mxConstants.PAGE_FORMAT_A4_PORTRAIT, d = d != null ? d : 0, e = c.width - d * 2, c = c.height - d * 2, d = b.getGraphBounds().clone(), b = b.getView().getScale();
    d.width = d.width / b;
    d.height = d.height / b;
    var b = d.width, c = b / d.height / (e / c), d = Math.sqrt(a), f = Math.sqrt(c), c = d * f, d = d / f;
    if (c < 1 && d > a)var g = d / a, d = a, c = c / g;
    if (d < 1 && c > a) {
        g = c / a;
        c = a;
        d = d / g
    }
    g = Math.ceil(c) * Math.ceil(d);
    for (f = 0; g > a;) {
        var g = Math.floor(c) / c, h = Math.floor(d) / d;
        g == 1 && (g = Math.floor(c - 1) / c);
        h == 1 && (h = Math.floor(d - 1) / d);
        g = g > h ? g : h;
        c = c * g;
        d = d * g;
        g = Math.ceil(c) * Math.ceil(d);
        f++;
        if (f > 10)break
    }
    return e * c / b * 0.99999
}, show:function (a, b, c, d) {
    c = c != null ? c : 0;
    d = d != null ? d : 0;
    b == null ? b = window.open().document : b.open();
    var e = a.getGraphBounds(), c = -e.x + c, d = -e.y + d;
    if (mxClient.IS_IE) {
        for (var e = "<html><head>", f = document.getElementsByTagName("base"), g = 0; g < f.length; g++)e = e + f[g].outerHTML;
        e = e + "<style>";
        for (g = 0; g < document.styleSheets.length; g++)try {
            e = e + document.styleSheets(g).cssText
        } catch (h) {
        }
        e = e + "</style></head><body>" + a.container.innerHTML;
        b.writeln(e + "</body><html>");
        b.close();
        a = b.body.getElementsByTagName("DIV")[0];
        if (a != null) {
            a.style.position = "absolute";
            a.style.left = c + "px";
            a.style.top = d + "px"
        }
    } else {
        b.writeln("<html");
        b.writeln("<head>");
        f = document.getElementsByTagName("base");
        for (g = 0; g < f.length; g++)b.writeln(mxUtils.getOuterHtml(f[g]));
        f = document.getElementsByTagName("link");
        for (g = 0; g < f.length; g++)b.writeln(mxUtils.getOuterHtml(f[g]));
        f = document.getElementsByTagName("style");
        for (g = 0; g < f.length; g++)b.writeln(mxUtils.getOuterHtml(f[g]));
        b.writeln("</head>");
        b.writeln("</html>");
        b.close();
        b.body == null && b.documentElement.appendChild(b.createElement("body"));
        b.body.style.overflow = "auto";
        for (a = a.container.firstChild; a != null;) {
            g = a.cloneNode(true);
            b.body.appendChild(g);
            a = a.nextSibling
        }
        a = b.getElementsByTagName("g")[0];
        if (a != null) {
            a.setAttribute("transform", "translate(" + c + "," + d + ")");
            c = a.ownerSVGElement;
            c.setAttribute("width", e.width + Math.max(e.x, 0) + 3);
            c.setAttribute("height", e.height + Math.max(e.y, 0) + 3)
        }
    }
    mxUtils.removeCursors(b.body);
    return b
}, printScreen:function (a) {
    var b = window.open();
    mxUtils.show(a, b.document);
    a = function () {
        b.focus();
        b.print();
        b.close()
    };
    mxClient.IS_GC ? b.setTimeout(a, 500) : a()
}, popup:function (a, b) {
    if (b) {
        var c = document.createElement("div");
        c.style.overflow = "scroll";
        c.style.width = "636px";
        c.style.height = "460px";
        var d = document.createElement("pre");
        d.innerHTML = mxUtils.htmlEntities(a, false).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
        c.appendChild(d);
        c = new mxWindow("Popup Window", c, document.body.clientWidth / 2 - 320, (document.body.clientHeight || document.documentElement.clientHeight) / 2 - 240, 640, 480, false, true);
        c.setClosable(true);
        c.setVisible(true)
    } else if (mxClient.IS_NS) {
        c =
            window.open();
        c.document.writeln("<pre>" + mxUtils.htmlEntities(a) + "</pre");
        c.document.close()
    } else {
        c = window.open();
        d = c.document.createElement("pre");
        d.innerHTML = mxUtils.htmlEntities(a, false).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
        c.document.body.appendChild(d)
    }
}, alert:function (a) {
    alert(a)
}, prompt:function (a, b) {
    return prompt(a, b)
}, confirm:function (a) {
    return confirm(a)
}, error:function (a, b, c, d) {
    var e = document.createElement("div");
    e.style.padding = "20px";
    var f = document.createElement("img");
    f.setAttribute("src",
        d || mxUtils.errorImage);
    f.setAttribute("valign", "bottom");
    f.style.verticalAlign = "middle";
    e.appendChild(f);
    e.appendChild(document.createTextNode("\u00a0"));
    e.appendChild(document.createTextNode("\u00a0"));
    e.appendChild(document.createTextNode("\u00a0"));
    mxUtils.write(e, a);
    var a = document.body.clientWidth, d = document.body.clientHeight || document.documentElement.clientHeight, g = new mxWindow(mxResources.get(mxUtils.errorResource) || mxUtils.errorResource, e, (a - b) / 2, d / 4, b, null, false, true);
    if (c) {
        mxUtils.br(e);
        b = document.createElement("p");
        c = document.createElement("button");
        mxClient.IS_IE ? c.style.cssText = "float:right" : c.setAttribute("style", "float:right");
        mxEvent.addListener(c, "click", function () {
            g.destroy()
        });
        mxUtils.write(c, mxResources.get(mxUtils.closeResource) || mxUtils.closeResource);
        b.appendChild(c);
        e.appendChild(b);
        mxUtils.br(e);
        g.setClosable(true)
    }
    g.setVisible(true);
    return g
}, makeDraggable:function (a, b, c, d, e, f, g, h, k, i) {
    a = new mxDragSource(a, c);
    a.dragOffset = new mxPoint(e != null ? e : 0, f != null ? f : mxConstants.TOOLTIP_VERTICAL_OFFSET);
    a.autoscroll = g;
    a.setGuidesEnabled(false);
    if (k != null)a.highlightDropTargets = k;
    if (i != null)a.getDropTarget = i;
    a.getGraphForEvent = function (a) {
        return typeof b == "function" ? b(a) : b
    };
    if (d != null) {
        a.createDragElement = function () {
            return d.cloneNode(true)
        };
        if (h)a.createPreviewElement = function (a) {
            var b = d.cloneNode(true), c = parseInt(b.style.width), e = parseInt(b.style.height);
            b.style.width = Math.round(c * a.view.scale) + "px";
            b.style.height = Math.round(e * a.view.scale) + "px";
            return b
        }
    }
    return a
}}, mxConstants = {DEFAULT_HOTSPOT:0.3,
    MIN_HOTSPOT_SIZE:8, MAX_HOTSPOT_SIZE:0, RENDERING_HINT_EXACT:"exact", RENDERING_HINT_FASTER:"faster", RENDERING_HINT_FASTEST:"fastest", DIALECT_SVG:"svg", DIALECT_VML:"vml", DIALECT_MIXEDHTML:"mixedHtml", DIALECT_PREFERHTML:"preferHtml", DIALECT_STRICTHTML:"strictHtml", NS_SVG:"http://www.w3.org/2000/svg", NS_XHTML:"http://www.w3.org/1999/xhtml", NS_XLINK:"http://www.w3.org/1999/xlink", SHADOWCOLOR:"gray", SHADOW_OFFSET_X:2, SHADOW_OFFSET_Y:3, SHADOW_OPACITY:1, NODETYPE_ELEMENT:1, NODETYPE_ATTRIBUTE:2, NODETYPE_TEXT:3,
    NODETYPE_CDATA:4, NODETYPE_ENTITY_REFERENCE:5, NODETYPE_ENTITY:6, NODETYPE_PROCESSING_INSTRUCTION:7, NODETYPE_COMMENT:8, NODETYPE_DOCUMENT:9, NODETYPE_DOCUMENTTYPE:10, NODETYPE_DOCUMENT_FRAGMENT:11, NODETYPE_NOTATION:12, TOOLTIP_VERTICAL_OFFSET:16, DEFAULT_VALID_COLOR:"#00FF00", DEFAULT_INVALID_COLOR:"#FF0000", HIGHLIGHT_STROKEWIDTH:3, CURSOR_MOVABLE_VERTEX:"move", CURSOR_MOVABLE_EDGE:"move", CURSOR_LABEL_HANDLE:"default", CURSOR_BEND_HANDLE:"pointer", CURSOR_CONNECT:"pointer", HIGHLIGHT_COLOR:"#00FF00", CONNECT_TARGET_COLOR:"#0000FF",
    INVALID_CONNECT_TARGET_COLOR:"#FF0000", DROP_TARGET_COLOR:"#0000FF", VALID_COLOR:"#00FF00", INVALID_COLOR:"#FF0000", EDGE_SELECTION_COLOR:"#00FF00", VERTEX_SELECTION_COLOR:"#00FF00", VERTEX_SELECTION_STROKEWIDTH:1, EDGE_SELECTION_STROKEWIDTH:1, VERTEX_SELECTION_DASHED:!0, EDGE_SELECTION_DASHED:!0, GUIDE_COLOR:"#FF0000", GUIDE_STROKEWIDTH:1, OUTLINE_COLOR:"#0099FF", OUTLINE_STROKEWIDTH:mxClient.IS_IE ? 2 : 3, HANDLE_SIZE:7, LABEL_HANDLE_SIZE:4, HANDLE_FILLCOLOR:"#00FF00", HANDLE_STROKECOLOR:"black", LABEL_HANDLE_FILLCOLOR:"yellow",
    CONNECT_HANDLE_FILLCOLOR:"#0000FF", LOCKED_HANDLE_FILLCOLOR:"#FF0000", OUTLINE_HANDLE_FILLCOLOR:"#00FFFF", OUTLINE_HANDLE_STROKECOLOR:"#0033FF", DEFAULT_FONTFAMILY:"Arial,Helvetica", DEFAULT_FONTSIZE:11, DEFAULT_STARTSIZE:40, DEFAULT_MARKERSIZE:6, DEFAULT_IMAGESIZE:24, ENTITY_SEGMENT:30, RECTANGLE_ROUNDING_FACTOR:0.15, LINE_ARCSIZE:20, ARROW_SPACING:10, ARROW_WIDTH:30, ARROW_SIZE:30, PAGE_FORMAT_A4_PORTRAIT:new mxRectangle(0, 0, 826, 1169), PAGE_FORMAT_A4_LANDSCAPE:new mxRectangle(0, 0, 1169, 826), PAGE_FORMAT_LETTER_PORTRAIT:new mxRectangle(0,
        0, 850, 1100), PAGE_FORMAT_LETTER_LANDSCAPE:new mxRectangle(0, 0, 1100, 850), NONE:"none", STYLE_PERIMETER:"perimeter", STYLE_SOURCE_PORT:"sourcePort", STYLE_TARGET_PORT:"targetPort", STYLE_PORT_CONSTRAINT:"portConstraint", STYLE_OPACITY:"opacity", STYLE_TEXT_OPACITY:"textOpacity", STYLE_OVERFLOW:"overflow", STYLE_ORTHOGONAL:"orthogonal", STYLE_EXIT_X:"exitX", STYLE_EXIT_Y:"exitY", STYLE_EXIT_PERIMETER:"exitPerimeter", STYLE_ENTRY_X:"entryX", STYLE_ENTRY_Y:"entryY", STYLE_ENTRY_PERIMETER:"entryPerimeter", STYLE_WHITE_SPACE:"whiteSpace",
    STYLE_ROTATION:"rotation", STYLE_FILLCOLOR:"fillColor", STYLE_GRADIENTCOLOR:"gradientColor", STYLE_GRADIENT_DIRECTION:"gradientDirection", STYLE_STROKECOLOR:"strokeColor", STYLE_SEPARATORCOLOR:"separatorColor", STYLE_STROKEWIDTH:"strokeWidth", STYLE_ALIGN:"align", STYLE_VERTICAL_ALIGN:"verticalAlign", STYLE_LABEL_POSITION:"labelPosition", STYLE_VERTICAL_LABEL_POSITION:"verticalLabelPosition", STYLE_IMAGE_ASPECT:"imageAspect", STYLE_IMAGE_ALIGN:"imageAlign", STYLE_IMAGE_VERTICAL_ALIGN:"imageVerticalAlign", STYLE_GLASS:"glass",
    STYLE_IMAGE:"image", STYLE_IMAGE_WIDTH:"imageWidth", STYLE_IMAGE_HEIGHT:"imageHeight", STYLE_IMAGE_BACKGROUND:"imageBackground", STYLE_IMAGE_BORDER:"imageBorder", STYLE_IMAGE_FLIPH:"imageFlipH", STYLE_IMAGE_FLIPV:"imageFlipV", STYLE_STENCIL_FLIPH:"stencilFlipH", STYLE_STENCIL_FLIPV:"stencilFlipV", STYLE_NOLABEL:"noLabel", STYLE_NOEDGESTYLE:"noEdgeStyle", STYLE_LABEL_BACKGROUNDCOLOR:"labelBackgroundColor", STYLE_LABEL_BORDERCOLOR:"labelBorderColor", STYLE_LABEL_PADDING:"labelPadding", STYLE_INDICATOR_SHAPE:"indicatorShape",
    STYLE_INDICATOR_IMAGE:"indicatorImage", STYLE_INDICATOR_COLOR:"indicatorColor", STYLE_INDICATOR_STROKECOLOR:"indicatorStrokeColor", STYLE_INDICATOR_GRADIENTCOLOR:"indicatorGradientColor", STYLE_INDICATOR_SPACING:"indicatorSpacing", STYLE_INDICATOR_WIDTH:"indicatorWidth", STYLE_INDICATOR_HEIGHT:"indicatorHeight", STYLE_INDICATOR_DIRECTION:"indicatorDirection", STYLE_SHADOW:"shadow", STYLE_SEGMENT:"segment", STYLE_ENDARROW:"endArrow", STYLE_STARTARROW:"startArrow", STYLE_ENDSIZE:"endSize", STYLE_STARTSIZE:"startSize",
    STYLE_ENDFILL:"endFill", STYLE_STARTFILL:"startFill", STYLE_DASHED:"dashed", STYLE_DASH_PATTERN:"dashPattern", STYLE_ROUNDED:"rounded", STYLE_ARCSIZE:"arcSize", STYLE_SMOOTH:"smooth", STYLE_SOURCE_PERIMETER_SPACING:"sourcePerimeterSpacing", STYLE_TARGET_PERIMETER_SPACING:"targetPerimeterSpacing", STYLE_PERIMETER_SPACING:"perimeterSpacing", STYLE_SPACING:"spacing", STYLE_SPACING_TOP:"spacingTop", STYLE_SPACING_LEFT:"spacingLeft", STYLE_SPACING_BOTTOM:"spacingBottom", STYLE_SPACING_RIGHT:"spacingRight", STYLE_HORIZONTAL:"horizontal",
    STYLE_DIRECTION:"direction", STYLE_ELBOW:"elbow", STYLE_FONTCOLOR:"fontColor", STYLE_FONTFAMILY:"fontFamily", STYLE_FONTSIZE:"fontSize", STYLE_FONTSTYLE:"fontStyle", STYLE_AUTOSIZE:"autosize", STYLE_FOLDABLE:"foldable", STYLE_EDITABLE:"editable", STYLE_BENDABLE:"bendable", STYLE_MOVABLE:"movable", STYLE_RESIZABLE:"resizable", STYLE_CLONEABLE:"cloneable", STYLE_DELETABLE:"deletable", STYLE_SHAPE:"shape", STYLE_EDGE:"edgeStyle", STYLE_LOOP:"loopStyle", STYLE_ROUTING_CENTER_X:"routingCenterX", STYLE_ROUTING_CENTER_Y:"routingCenterY",
    FONT_BOLD:1, FONT_ITALIC:2, FONT_UNDERLINE:4, FONT_SHADOW:8, SHAPE_RECTANGLE:"rectangle", SHAPE_ELLIPSE:"ellipse", SHAPE_DOUBLE_ELLIPSE:"doubleEllipse", SHAPE_RHOMBUS:"rhombus", SHAPE_LINE:"line", SHAPE_IMAGE:"image", SHAPE_ARROW:"arrow", SHAPE_LABEL:"label", SHAPE_CYLINDER:"cylinder", SHAPE_SWIMLANE:"swimlane", SHAPE_CONNECTOR:"connector", SHAPE_ACTOR:"actor", SHAPE_CLOUD:"cloud", SHAPE_TRIANGLE:"triangle", SHAPE_HEXAGON:"hexagon", ARROW_CLASSIC:"classic", ARROW_BLOCK:"block", ARROW_OPEN:"open", ARROW_OVAL:"oval", ARROW_DIAMOND:"diamond",
    ARROW_DIAMOND_THIN:"diamondThin", ALIGN_LEFT:"left", ALIGN_CENTER:"center", ALIGN_RIGHT:"right", ALIGN_TOP:"top", ALIGN_MIDDLE:"middle", ALIGN_BOTTOM:"bottom", DIRECTION_NORTH:"north", DIRECTION_SOUTH:"south", DIRECTION_EAST:"east", DIRECTION_WEST:"west", DIRECTION_MASK_NONE:0, DIRECTION_MASK_WEST:1, DIRECTION_MASK_NORTH:2, DIRECTION_MASK_SOUTH:4, DIRECTION_MASK_EAST:8, DIRECTION_MASK_ALL:15, ELBOW_VERTICAL:"vertical", ELBOW_HORIZONTAL:"horizontal", EDGESTYLE_ELBOW:"elbowEdgeStyle", EDGESTYLE_ENTITY_RELATION:"entityRelationEdgeStyle",
    EDGESTYLE_LOOP:"loopEdgeStyle", EDGESTYLE_SIDETOSIDE:"sideToSideEdgeStyle", EDGESTYLE_TOPTOBOTTOM:"topToBottomEdgeStyle", EDGESTYLE_ORTHOGONAL:"orthogonalEdgeStyle", EDGESTYLE_SEGMENT:"segmentEdgeStyle", PERIMETER_ELLIPSE:"ellipsePerimeter", PERIMETER_RECTANGLE:"rectanglePerimeter", PERIMETER_RHOMBUS:"rhombusPerimeter", PERIMETER_TRIANGLE:"trianglePerimeter"};
function mxEventObject(a) {
    this.name = a;
    this.properties = [];
    for (var b = 1; b < arguments.length; b = b + 2)arguments[b + 1] != null && (this.properties[arguments[b]] = arguments[b + 1])
}
mxEventObject.prototype.name = null;
mxEventObject.prototype.properties = null;
mxEventObject.prototype.consumed = !1;
mxEventObject.prototype.getName = function () {
    return this.name
};
mxEventObject.prototype.getProperties = function () {
    return this.properties
};
mxEventObject.prototype.getProperty = function (a) {
    return this.properties[a]
};
mxEventObject.prototype.isConsumed = function () {
    return this.consumed
};
mxEventObject.prototype.consume = function () {
    this.consumed = true
};
function mxMouseEvent(a, b) {
    this.evt = a;
    this.state = b
}
mxMouseEvent.prototype.consumed = !1;
mxMouseEvent.prototype.evt = null;
mxMouseEvent.prototype.graphX = null;
mxMouseEvent.prototype.graphY = null;
mxMouseEvent.prototype.state = null;
mxMouseEvent.prototype.getEvent = function () {
    return this.evt
};
mxMouseEvent.prototype.getSource = function () {
    return mxEvent.getSource(this.evt)
};
mxMouseEvent.prototype.isSource = function (a) {
    if (a != null)for (var b = this.getSource(); b != null;) {
        if (b == a.node)return true;
        b = b.parentNode
    }
    return false
};
mxMouseEvent.prototype.getX = function () {
    return mxEvent.getClientX(this.getEvent())
};
mxMouseEvent.prototype.getY = function () {
    return mxEvent.getClientY(this.getEvent())
};
mxMouseEvent.prototype.getGraphX = function () {
    return this.graphX
};
mxMouseEvent.prototype.getGraphY = function () {
    return this.graphY
};
mxMouseEvent.prototype.getState = function () {
    return this.state
};
mxMouseEvent.prototype.getCell = function () {
    var a = this.getState();
    return a != null ? a.cell : null
};
mxMouseEvent.prototype.isPopupTrigger = function () {
    return mxEvent.isPopupTrigger(this.getEvent())
};
mxMouseEvent.prototype.isConsumed = function () {
    return this.consumed
};
mxMouseEvent.prototype.consume = function (a) {
    (a != null ? a : 1) && this.evt.preventDefault && this.evt.preventDefault();
    this.evt.returnValue = false;
    this.consumed = true
};
function mxEventSource(a) {
    this.setEventSource(a)
}
mxEventSource.prototype.eventListeners = null;
mxEventSource.prototype.eventsEnabled = !0;
mxEventSource.prototype.eventSource = null;
mxEventSource.prototype.isEventsEnabled = function () {
    return this.eventsEnabled
};
mxEventSource.prototype.setEventsEnabled = function (a) {
    this.eventsEnabled = a
};
mxEventSource.prototype.getEventSource = function () {
    return this.eventSource
};
mxEventSource.prototype.setEventSource = function (a) {
    this.eventSource = a
};
mxEventSource.prototype.addListener = function (a, b) {
    if (this.eventListeners == null)this.eventListeners = [];
    this.eventListeners.push(a);
    this.eventListeners.push(b)
};
mxEventSource.prototype.removeListener = function (a) {
    if (this.eventListeners != null)for (var b = 0; b < this.eventListeners.length;)this.eventListeners[b + 1] == a ? this.eventListeners.splice(b, 2) : b = b + 2
};
mxEventSource.prototype.fireEvent = function (a, b) {
    if (this.eventListeners != null && this.isEventsEnabled()) {
        a == null && (a = new mxEventObject);
        b == null && (b = this.getEventSource());
        b == null && (b = this);
        for (var c = [b, a], d = 0; d < this.eventListeners.length; d = d + 2) {
            var e = this.eventListeners[d];
            (e == null || e == a.getName()) && this.eventListeners[d + 1].apply(this, c)
        }
    }
};
var mxEvent = {objects:[], addListener:function () {
    var a = function (a, c, d) {
        if (a.mxListenerList == null) {
            a.mxListenerList = [];
            mxEvent.objects.push(a)
        }
        a.mxListenerList.push({name:c, f:d})
    };
    return window.addEventListener ? function (b, c, d) {
        b.addEventListener(c, d, false);
        a(b, c, d)
    } : function (b, c, d) {
        b.attachEvent("on" + c, d);
        a(b, c, d)
    }
}(), removeListener:function () {
    var a = function (a, c, d) {
        if (a.mxListenerList != null) {
            for (var c = a.mxListenerList.length, e = 0; e < c; e++)if (a.mxListenerList[e].f == d) {
                a.mxListenerList.splice(e, 1);
                break
            }
            if (a.mxListenerList.length ==
                0)a.mxListenerList = null
        }
    };
    return window.removeEventListener ? function (b, c, d) {
        b.removeEventListener(c, d, false);
        a(b, c, d)
    } : function (b, c, d) {
        b.detachEvent("on" + c, d);
        a(b, c, d)
    }
}(), removeAllListeners:function (a) {
    var b = a.mxListenerList;
    if (b != null)for (; b.length > 0;) {
        var c = b[0];
        mxEvent.removeListener(a, c.name, c.f)
    }
}, redirectMouseEvents:function (a, b, c, d, e, f, g) {
    var h = function (a) {
        return typeof c == "function" ? c(a) : c
    }, k = mxClient.IS_TOUCH ? "touchmove" : "mousemove", i = mxClient.IS_TOUCH ? "touchend" : "mouseup";
    mxEvent.addListener(a,
        mxClient.IS_TOUCH ? "touchstart" : "mousedown", function (a) {
            d != null ? d(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a, h(a)))
        });
    mxEvent.addListener(a, k, function (a) {
        e != null ? e(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a, h(a)))
    });
    mxEvent.addListener(a, i, function (a) {
        f != null ? f(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a, h(a)))
    });
    mxEvent.addListener(a, "dblclick", function (a) {
        if (g != null)g(a); else if (!mxEvent.isConsumed(a)) {
            var c =
                h(a);
            b.dblClick(a, c != null ? c.cell : null)
        }
    })
}, release:function (a) {
    if (a != null) {
        mxEvent.removeAllListeners(a);
        a = a.childNodes;
        if (a != null)for (var b = a.length, c = 0; c < b; c = c + 1)mxEvent.release(a[c])
    }
}, addMouseWheelListener:function (a) {
    if (a != null) {
        var b = function (b) {
            if (b == null)b = window.event;
            var d = 0, d = mxClient.IS_NS && !mxClient.IS_SF && !mxClient.IS_GC ? -b.detail / 2 : b.wheelDelta / 120;
            d != 0 && a(b, d > 0)
        };
        mxClient.IS_NS ? mxEvent.addListener(window, mxClient.IS_SF || mxClient.IS_GC ? "mousewheel" : "DOMMouseScroll", b) : mxEvent.addListener(document,
            "mousewheel", b)
    }
}, disableContextMenu:function () {
    return mxClient.IS_IE && (typeof document.documentMode === "undefined" || document.documentMode < 9) ? function (a) {
        mxEvent.addListener(a, "contextmenu", function () {
            return false
        })
    } : function (a) {
        a.setAttribute("oncontextmenu", "return false;")
    }
}(), getSource:function (a) {
    return a.srcElement != null ? a.srcElement : a.target
}, isConsumed:function (a) {
    return a.isConsumed != null && a.isConsumed
}, isLeftMouseButton:function (a) {
    return a.button == (mxClient.IS_IE && (typeof document.documentMode ===
        "undefined" || document.documentMode < 9) ? 1 : 0)
}, isRightMouseButton:function (a) {
    return a.button == 2
}, isPopupTrigger:function (a) {
    return mxEvent.isRightMouseButton(a) || mxEvent.isShiftDown(a) && !mxEvent.isControlDown(a)
}, isShiftDown:function (a) {
    return a != null ? a.shiftKey : false
}, isAltDown:function (a) {
    return a != null ? a.altKey : false
}, isControlDown:function (a) {
    return a != null ? a.ctrlKey : false
}, isMetaDown:function (a) {
    return a != null ? a.metaKey : false
}, getMainEvent:function (a) {
    (a.type == "touchstart" || a.type == "touchmove") &&
        a.touches != null && a.touches[0] != null ? a = a.touches[0] : a.type == "touchend" && (a.changedTouches != null && a.changedTouches[0] != null) && (a = a.changedTouches[0]);
    return a
}, getClientX:function (a) {
    return mxEvent.getMainEvent(a).clientX
}, getClientY:function (a) {
    return mxEvent.getMainEvent(a).clientY
}, consume:function (a, b, c) {
    c = c != null ? c : true;
    if (b != null ? b : 1)if (a.preventDefault) {
        c && a.stopPropagation();
        a.preventDefault()
    } else if (c)a.cancelBubble = true;
    a.isConsumed = true;
    a.returnValue = false
}, LABEL_HANDLE:-1, ROTATION_HANDLE:-2,
    MOUSE_DOWN:"mouseDown", MOUSE_MOVE:"mouseMove", MOUSE_UP:"mouseUp", ACTIVATE:"activate", RESIZE_START:"resizeStart", RESIZE:"resize", RESIZE_END:"resizeEnd", MOVE_START:"moveStart", MOVE:"move", MOVE_END:"moveEnd", PAN_START:"panStart", PAN:"pan", PAN_END:"panEnd", MINIMIZE:"minimize", NORMALIZE:"normalize", MAXIMIZE:"maximize", HIDE:"hide", SHOW:"show", CLOSE:"close", DESTROY:"destroy", REFRESH:"layout", SIZE:"size", SELECT:"select", FIRED:"fired", GET:"get", RECEIVE:"receive", CONNECT:"connect", DISCONNECT:"disconnect",
    SUSPEND:"suspend", RESUME:"resume", MARK:"mark", SESSION:"session", ROOT:"root", POST:"post", OPEN:"open", SAVE:"save", BEFORE_ADD_VERTEX:"beforeAddVertex", ADD_VERTEX:"addVertex", AFTER_ADD_VERTEX:"afterAddVertex", DONE:"done", EXECUTE:"execute", BEGIN_UPDATE:"beginUpdate", END_UPDATE:"endUpdate", BEFORE_UNDO:"beforeUndo", UNDO:"undo", REDO:"redo", CHANGE:"change", NOTIFY:"notify", LAYOUT_CELLS:"layoutCells", CLICK:"click", SCALE:"scale", TRANSLATE:"translate", SCALE_AND_TRANSLATE:"scaleAndTranslate", UP:"up", DOWN:"down",
    ADD:"add", CLEAR:"clear", ADD_CELLS:"addCells", CELLS_ADDED:"cellsAdded", MOVE_CELLS:"moveCells", CELLS_MOVED:"cellsMoved", RESIZE_CELLS:"resizeCells", CELLS_RESIZED:"cellsResized", TOGGLE_CELLS:"toggleCells", CELLS_TOGGLED:"cellsToggled", ORDER_CELLS:"orderCells", CELLS_ORDERED:"cellsOrdered", REMOVE_CELLS:"removeCells", CELLS_REMOVED:"cellsRemoved", GROUP_CELLS:"groupCells", UNGROUP_CELLS:"ungroupCells", REMOVE_CELLS_FROM_PARENT:"removeCellsFromParent", FOLD_CELLS:"foldCells", CELLS_FOLDED:"cellsFolded", ALIGN_CELLS:"alignCells",
    LABEL_CHANGED:"labelChanged", CONNECT_CELL:"connectCell", CELL_CONNECTED:"cellConnected", SPLIT_EDGE:"splitEdge", FLIP_EDGE:"flipEdge", START_EDITING:"startEditing", ADD_OVERLAY:"addOverlay", REMOVE_OVERLAY:"removeOverlay", UPDATE_CELL_SIZE:"updateCellSize", ESCAPE:"escape", CLICK:"click", DOUBLE_CLICK:"doubleClick"};
function mxXmlRequest(a, b, c, d, e, f) {
    this.url = a;
    this.params = b;
    this.method = c || "POST";
    this.async = d != null ? d : true;
    this.username = e;
    this.password = f
}
mxXmlRequest.prototype.url = null;
mxXmlRequest.prototype.params = null;
mxXmlRequest.prototype.method = null;
mxXmlRequest.prototype.async = null;
mxXmlRequest.prototype.binary = !1;
mxXmlRequest.prototype.username = null;
mxXmlRequest.prototype.password = null;
mxXmlRequest.prototype.request = null;
mxXmlRequest.prototype.isBinary = function () {
    return this.binary
};
mxXmlRequest.prototype.setBinary = function (a) {
    this.binary = a
};
mxXmlRequest.prototype.getText = function () {
    return this.request.responseText
};
mxXmlRequest.prototype.isReady = function () {
    return this.request.readyState == 4
};
mxXmlRequest.prototype.getDocumentElement = function () {
    var a = this.getXml();
    return a != null ? a.documentElement : null
};
mxXmlRequest.prototype.getXml = function () {
    var a = this.request.responseXML;
    if (document.documentMode >= 9 || a == null || a.documentElement == null)a = mxUtils.parseXml(this.request.responseText);
    return a
};
mxXmlRequest.prototype.getText = function () {
    return this.request.responseText
};
mxXmlRequest.prototype.getStatus = function () {
    return this.request.status
};
mxXmlRequest.prototype.create = function () {
    if (window.XMLHttpRequest)return function () {
        var a = new XMLHttpRequest;
        this.isBinary() && a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined");
        return a
    };
    if (typeof ActiveXObject != "undefined")return function () {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
}();
mxXmlRequest.prototype.send = function (a) {
    this.request = this.create();
    if (this.request != null) {
        if (a != null)this.request.onreadystatechange = mxUtils.bind(this, function () {
            if (this.isReady()) {
                a(this);
                this.onreadystatechaange = null
            }
        });
        this.request.open(this.method, this.url, this.async, this.username, this.password);
        this.setRequestHeaders(this.request, this.params);
        this.request.send(this.params)
    }
};
mxXmlRequest.prototype.setRequestHeaders = function (a, b) {
    b != null && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
};
mxXmlRequest.prototype.simulate = function (a, b) {
    var a = a || document, c = null;
    if (a == document) {
        c = window.onbeforeunload;
        window.onbeforeunload = null
    }
    var d = a.createElement("form");
    d.setAttribute("method", this.method);
    d.setAttribute("action", this.url);
    b != null && d.setAttribute("target", b);
    d.style.display = "none";
    d.style.visibility = "hidden";
    for (var e = this.params.indexOf("&") > 0 ? this.params.split("&") : this.params.split(), f = 0; f < e.length; f++) {
        var g = e[f].indexOf("=");
        if (g > 0) {
            var h = e[f].substring(0, g), k = e[f].substring(g +
                1), g = a.createElement("textarea");
            g.setAttribute("name", h);
            k = k.replace(/\n/g, "&#xa;");
            h = a.createTextNode(k);
            g.appendChild(h);
            d.appendChild(g)
        }
    }
    a.body.appendChild(d);
    d.submit();
    a.body.removeChild(d);
    if (c != null)window.onbeforeunload = c
};
var mxClipboard = {STEPSIZE:10, insertCount:1, cells:null, isEmpty:function () {
    return mxClipboard.cells == null
}, cut:function (a, b) {
    b = mxClipboard.copy(a, b);
    mxClipboard.insertCount = 0;
    mxClipboard.removeCells(a, b);
    return b
}, removeCells:function (a, b) {
    a.removeCells(b)
}, copy:function (a, b) {
    var b = b || a.getSelectionCells(), c = a.getExportableCells(b);
    mxClipboard.insertCount = 1;
    mxClipboard.cells = a.cloneCells(c);
    return c
}, paste:function (a) {
    if (mxClipboard.cells != null) {
        var b = a.getImportableCells(mxClipboard.cells), c = mxClipboard.insertCount *
            mxClipboard.STEPSIZE, d = a.getDefaultParent(), b = a.importCells(b, c, c, d);
        mxClipboard.insertCount++;
        a.setSelectionCells(b)
    }
}};
function mxWindow(a, b, c, d, e, f, g, h, k, i) {
    if (b != null) {
        g = g != null ? g : true;
        this.content = b;
        this.init(c, d, e, f, i);
        this.installMaximizeHandler();
        this.installMinimizeHandler();
        this.installCloseHandler();
        this.setMinimizable(g);
        this.setTitle(a);
        (h == null || h) && this.installMoveHandler();
        k != null && k.parentNode != null ? k.parentNode.replaceChild(this.div, k) : document.body.appendChild(this.div)
    }
}
mxWindow.prototype = new mxEventSource;
mxWindow.prototype.constructor = mxWindow;
mxWindow.prototype.closeImage = mxClient.imageBasePath + "/close.gif";
mxWindow.prototype.minimizeImage = mxClient.imageBasePath + "/minimize.gif";
mxWindow.prototype.normalizeImage = mxClient.imageBasePath + "/normalize.gif";
mxWindow.prototype.maximizeImage = mxClient.imageBasePath + "/maximize.gif";
mxWindow.prototype.resizeImage = mxClient.imageBasePath + "/resize.gif";
mxWindow.prototype.visible = !1;
mxWindow.prototype.content = !1;
mxWindow.prototype.minimumSize = new mxRectangle(0, 0, 50, 40);
mxWindow.prototype.title = !1;
mxWindow.prototype.content = !1;
mxWindow.prototype.destroyOnClose = !0;
mxWindow.prototype.init = function (a, b, c, d, e) {
    e = e != null ? e : "mxWindow";
    this.div = document.createElement("div");
    this.div.className = e;
    this.div.style.left = a + "px";
    this.div.style.top = b + "px";
    this.table = document.createElement("table");
    this.table.className = e;
    if (c != null) {
        if (!mxClient.IS_IE)this.div.style.width = c + "px";
        this.table.style.width = c + "px"
    }
    if (d != null) {
        if (!mxClient.IS_IE)this.div.style.height = d + "px";
        this.table.style.height = d + "px"
    }
    a = document.createElement("tbody");
    b = document.createElement("tr");
    this.title =
        document.createElement("td");
    this.title.className = e + "Title";
    b.appendChild(this.title);
    a.appendChild(b);
    b = document.createElement("tr");
    this.td = document.createElement("td");
    this.td.className = e + "Pane";
    this.contentWrapper = document.createElement("div");
    this.contentWrapper.className = e + "Pane";
    this.contentWrapper.style.width = "100%";
    this.contentWrapper.appendChild(this.content);
    if (mxClient.IS_IE || this.content.nodeName.toUpperCase() != "DIV")this.contentWrapper.style.height = "100%";
    this.td.appendChild(this.contentWrapper);
    b.appendChild(this.td);
    a.appendChild(b);
    this.table.appendChild(a);
    this.div.appendChild(this.table);
    e = mxUtils.bind(this, function () {
        this.activate()
    });
    a = mxClient.IS_TOUCH ? "touchstart" : "mousedown";
    mxEvent.addListener(this.title, a, e);
    mxEvent.addListener(this.table, a, e);
    this.hide()
};
mxWindow.prototype.setTitle = function (a) {
    for (var b = this.title.firstChild; b != null;) {
        var c = b.nextSibling;
        b.nodeType == mxConstants.NODETYPE_TEXT && b.parentNode.removeChild(b);
        b = c
    }
    mxUtils.write(this.title, a || "")
};
mxWindow.prototype.setScrollable = function (a) {
    if (navigator.userAgent.indexOf("Presto/2.5") < 0)this.contentWrapper.style.overflow = a ? "auto" : "hidden"
};
mxWindow.prototype.activate = function () {
    if (mxWindow.activeWindow != this) {
        var a = mxUtils.getCurrentStyle(this.getElement()), a = a != null ? a.zIndex : 3;
        if (mxWindow.activeWindow) {
            var b = mxWindow.activeWindow.getElement();
            if (b != null && b.style != null)b.style.zIndex = a
        }
        b = mxWindow.activeWindow;
        this.getElement().style.zIndex = parseInt(a) + 1;
        mxWindow.activeWindow = this;
        this.fireEvent(new mxEventObject(mxEvent.ACTIVATE, "previousWindow", b))
    }
};
mxWindow.prototype.getElement = function () {
    return this.div
};
mxWindow.prototype.fit = function () {
    mxUtils.fit(this.div)
};
mxWindow.prototype.isResizable = function () {
    return this.resize != null ? this.resize.style.display != "none" : false
};
mxWindow.prototype.setResizable = function (a) {
    if (a)if (this.resize == null) {
        this.resize = document.createElement("img");
        this.resize.style.position = "absolute";
        this.resize.style.bottom = "2px";
        this.resize.style.right = "2px";
        this.resize.setAttribute("src", mxClient.imageBasePath + "/resize.gif");
        this.resize.style.cursor = "nw-resize";
        var b = mxClient.IS_TOUCH ? "touchmove" : "mousemove", c = mxClient.IS_TOUCH ? "touchend" : "mouseup";
        mxEvent.addListener(this.resize, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (a) {
            this.activate();
            var e = mxEvent.getClientX(a), f = mxEvent.getClientY(a), g = this.div.offsetWidth, h = this.div.offsetHeight, k = mxUtils.bind(this, function (a) {
                var b = mxEvent.getClientX(a) - e, c = mxEvent.getClientY(a) - f;
                this.setSize(g + b, h + c);
                this.fireEvent(new mxEventObject(mxEvent.RESIZE, "event", a));
                mxEvent.consume(a)
            }), i = mxUtils.bind(this, function (a) {
                mxEvent.removeListener(document, b, k);
                mxEvent.removeListener(document, c, i);
                this.fireEvent(new mxEventObject(mxEvent.RESIZE_END, "event", a));
                mxEvent.consume(a)
            });
            mxEvent.addListener(document,
                b, k);
            mxEvent.addListener(document, c, i);
            this.fireEvent(new mxEventObject(mxEvent.RESIZE_START, "event", a));
            mxEvent.consume(a)
        }));
        this.div.appendChild(this.resize)
    } else this.resize.style.display = "inline"; else if (this.resize != null)this.resize.style.display = "none"
};
mxWindow.prototype.setSize = function (a, b) {
    a = Math.max(this.minimumSize.width, a);
    b = Math.max(this.minimumSize.height, b);
    if (!mxClient.IS_IE) {
        this.div.style.width = a + "px";
        this.div.style.height = b + "px"
    }
    this.table.style.width = a + "px";
    this.table.style.height = b + "px";
    if (!mxClient.IS_IE)this.contentWrapper.style.height = this.div.offsetHeight - this.title.offsetHeight - 2 + "px"
};
mxWindow.prototype.setMinimizable = function (a) {
    this.minimize.style.display = a ? "" : "none"
};
mxWindow.prototype.getMinimumSize = function () {
    return new mxRectangle(0, 0, 0, this.title.offsetHeight)
};
mxWindow.prototype.installMinimizeHandler = function () {
    this.minimize = document.createElement("img");
    this.minimize.setAttribute("src", this.minimizeImage);
    this.minimize.setAttribute("align", "right");
    this.minimize.setAttribute("title", "Minimize");
    this.minimize.style.cursor = "pointer";
    this.minimize.style.marginRight = "1px";
    this.minimize.style.display = "none";
    this.title.appendChild(this.minimize);
    var a = false, b = null, c = null, d = mxUtils.bind(this, function (d) {
        this.activate();
        if (a) {
            a = false;
            this.minimize.setAttribute("src",
                this.minimizeImage);
            this.minimize.setAttribute("title", "Minimize");
            this.contentWrapper.style.display = "";
            this.maximize.style.display = b;
            if (!mxClient.IS_IE)this.div.style.height = c;
            this.table.style.height = c;
            if (this.resize != null)this.resize.style.visibility = "";
            this.fireEvent(new mxEventObject(mxEvent.NORMALIZE, "event", d))
        } else {
            a = true;
            this.minimize.setAttribute("src", this.normalizeImage);
            this.minimize.setAttribute("title", "Normalize");
            this.contentWrapper.style.display = "none";
            b = this.maximize.style.display;
            this.maximize.style.display = "none";
            c = this.table.style.height;
            var f = this.getMinimumSize();
            if (f.height > 0) {
                if (!mxClient.IS_IE)this.div.style.height = f.height + "px";
                this.table.style.height = f.height + "px"
            }
            if (f.width > 0) {
                if (!mxClient.IS_IE)this.div.style.width = f.width + "px";
                this.table.style.width = f.width + "px"
            }
            if (this.resize != null)this.resize.style.visibility = "hidden";
            this.fireEvent(new mxEventObject(mxEvent.MINIMIZE, "event", d))
        }
        mxEvent.consume(d)
    });
    mxEvent.addListener(this.minimize, mxClient.IS_TOUCH ? "touchstart" :
        "mousedown", d)
};
mxWindow.prototype.setMaximizable = function (a) {
    this.maximize.style.display = a ? "" : "none"
};
mxWindow.prototype.installMaximizeHandler = function () {
    this.maximize = document.createElement("img");
    this.maximize.setAttribute("src", this.maximizeImage);
    this.maximize.setAttribute("align", "right");
    this.maximize.setAttribute("title", "Maximize");
    this.maximize.style.cursor = "default";
    this.maximize.style.marginLeft = "1px";
    this.maximize.style.cursor = "pointer";
    this.maximize.style.display = "none";
    this.title.appendChild(this.maximize);
    var a = false, b = null, c = null, d = null, e = null, f = mxUtils.bind(this, function (f) {
        this.activate();
        if (this.maximize.style.display != "none") {
            if (a) {
                a = false;
                this.maximize.setAttribute("src", this.maximizeImage);
                this.maximize.setAttribute("title", "Maximize");
                this.contentWrapper.style.display = "";
                this.minimize.style.visibility = "";
                this.div.style.left = b + "px";
                this.div.style.top = c + "px";
                if (!mxClient.IS_IE) {
                    this.div.style.height = d;
                    this.div.style.width = e;
                    h = mxUtils.getCurrentStyle(this.contentWrapper);
                    if (h.overflow == "auto" || this.resize != null)this.contentWrapper.style.height = this.div.offsetHeight - this.title.offsetHeight -
                        2 + "px"
                }
                this.table.style.height = d;
                this.table.style.width = e;
                if (this.resize != null)this.resize.style.visibility = "";
                this.fireEvent(new mxEventObject(mxEvent.NORMALIZE, "event", f))
            } else {
                a = true;
                this.maximize.setAttribute("src", this.normalizeImage);
                this.maximize.setAttribute("title", "Normalize");
                this.contentWrapper.style.display = "";
                this.minimize.style.visibility = "hidden";
                b = parseInt(this.div.style.left);
                c = parseInt(this.div.style.top);
                d = this.table.style.height;
                e = this.table.style.width;
                this.div.style.left = "0px";
                this.div.style.top = "0px";
                if (!mxClient.IS_IE) {
                    this.div.style.height = document.body.clientHeight - 2 + "px";
                    this.div.style.width = document.body.clientWidth - 2 + "px"
                }
                this.table.style.width = document.body.clientWidth - 2 + "px";
                this.table.style.height = document.body.clientHeight - 2 + "px";
                if (this.resize != null)this.resize.style.visibility = "hidden";
                if (!mxClient.IS_IE) {
                    var h = mxUtils.getCurrentStyle(this.contentWrapper);
                    if (h.overflow == "auto" || this.resize != null)this.contentWrapper.style.height = this.div.offsetHeight - this.title.offsetHeight -
                        2 + "px"
                }
                this.fireEvent(new mxEventObject(mxEvent.MAXIMIZE, "event", f))
            }
            mxEvent.consume(f)
        }
    });
    mxEvent.addListener(this.maximize, mxClient.IS_TOUCH ? "touchstart" : "mousedown", f);
    mxEvent.addListener(this.title, "dblclick", f)
};
mxWindow.prototype.installMoveHandler = function () {
    this.title.style.cursor = "move";
    var a = mxClient.IS_TOUCH ? "touchmove" : "mousemove", b = mxClient.IS_TOUCH ? "touchend" : "mouseup";
    mxEvent.addListener(this.title, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (c) {
        var d = mxEvent.getClientX(c), e = mxEvent.getClientY(c), f = this.getX(), g = this.getY(), h = mxUtils.bind(this, function (a) {
            var b = mxEvent.getClientX(a) - d, c = mxEvent.getClientY(a) - e;
            this.setLocation(f + b, g + c);
            this.fireEvent(new mxEventObject(mxEvent.MOVE,
                "event", a));
            mxEvent.consume(a)
        }), k = mxUtils.bind(this, function (c) {
            mxEvent.removeListener(document, a, h);
            mxEvent.removeListener(document, b, k);
            this.fireEvent(new mxEventObject(mxEvent.MOVE_END, "event", c));
            mxEvent.consume(c)
        });
        mxEvent.addListener(document, a, h);
        mxEvent.addListener(document, b, k);
        this.fireEvent(new mxEventObject(mxEvent.MOVE_START, "event", c));
        mxEvent.consume(c)
    }))
};
mxWindow.prototype.setLocation = function (a, b) {
    this.div.style.left = a + "px";
    this.div.style.top = b + "px"
};
mxWindow.prototype.getX = function () {
    return parseInt(this.div.style.left)
};
mxWindow.prototype.getY = function () {
    return parseInt(this.div.style.top)
};
mxWindow.prototype.installCloseHandler = function () {
    this.closeImg = document.createElement("img");
    this.closeImg.setAttribute("src", this.closeImage);
    this.closeImg.setAttribute("align", "right");
    this.closeImg.setAttribute("title", "Close");
    this.closeImg.style.marginLeft = "2px";
    this.closeImg.style.cursor = "pointer";
    this.closeImg.style.display = "none";
    this.title.insertBefore(this.closeImg, this.title.firstChild);
    mxEvent.addListener(this.closeImg, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (a) {
        this.fireEvent(new mxEventObject(mxEvent.CLOSE,
            "event", a));
        this.destroyOnClose ? this.destroy() : this.setVisible(false);
        mxEvent.consume(a)
    }))
};
mxWindow.prototype.setImage = function (a) {
    this.image = document.createElement("img");
    this.image.setAttribute("src", a);
    this.image.setAttribute("align", "left");
    this.image.style.marginRight = "4px";
    this.image.style.marginLeft = "0px";
    this.image.style.marginTop = "-2px";
    this.title.insertBefore(this.image, this.title.firstChild)
};
mxWindow.prototype.setClosable = function (a) {
    this.closeImg.style.display = a ? "" : "none"
};
mxWindow.prototype.isVisible = function () {
    return this.div != null ? this.div.style.visibility != "hidden" : false
};
mxWindow.prototype.setVisible = function (a) {
    this.div != null && this.isVisible() != a && (a ? this.show() : this.hide())
};
mxWindow.prototype.show = function () {
    this.div.style.visibility = "";
    this.activate();
    var a = mxUtils.getCurrentStyle(this.contentWrapper);
    if (!mxClient.IS_IE && (a.overflow == "auto" || this.resize != null))this.contentWrapper.style.height = this.div.offsetHeight - this.title.offsetHeight - 2 + "px";
    this.fireEvent(new mxEventObject(mxEvent.SHOW))
};
mxWindow.prototype.hide = function () {
    this.div.style.visibility = "hidden";
    this.fireEvent(new mxEventObject(mxEvent.HIDE))
};
mxWindow.prototype.destroy = function () {
    this.fireEvent(new mxEventObject(mxEvent.DESTROY));
    if (this.div != null) {
        mxEvent.release(this.div);
        this.div.parentNode.removeChild(this.div);
        this.div = null
    }
    this.contentWrapper = this.content = this.title = null
};
function mxForm(a) {
    this.table = document.createElement("table");
    this.table.className = a;
    this.body = document.createElement("tbody");
    this.table.appendChild(this.body)
}
mxForm.prototype.table = null;
mxForm.prototype.body = !1;
mxForm.prototype.getTable = function () {
    return this.table
};
mxForm.prototype.addButtons = function (a, b) {
    var c = document.createElement("tr"), d = document.createElement("td");
    c.appendChild(d);
    var d = document.createElement("td"), e = document.createElement("button");
    mxUtils.write(e, mxResources.get("ok") || "OK");
    d.appendChild(e);
    mxEvent.addListener(e, "click", function () {
        a()
    });
    e = document.createElement("button");
    mxUtils.write(e, mxResources.get("cancel") || "Cancel");
    d.appendChild(e);
    mxEvent.addListener(e, "click", function () {
        b()
    });
    c.appendChild(d);
    this.body.appendChild(c)
};
mxForm.prototype.addText = function (a, b) {
    var c = document.createElement("input");
    c.setAttribute("type", "text");
    c.value = b;
    return this.addField(a, c)
};
mxForm.prototype.addCheckbox = function (a, b) {
    var c = document.createElement("input");
    c.setAttribute("type", "checkbox");
    this.addField(a, c);
    if (b)c.checked = true;
    return c
};
mxForm.prototype.addTextarea = function (a, b, c) {
    var d = document.createElement("textarea");
    mxClient.IS_NS && c--;
    d.setAttribute("rows", c || 2);
    d.value = b;
    return this.addField(a, d)
};
mxForm.prototype.addCombo = function (a, b, c) {
    var d = document.createElement("select");
    c != null && d.setAttribute("size", c);
    b && d.setAttribute("multiple", "true");
    return this.addField(a, d)
};
mxForm.prototype.addOption = function (a, b, c, d) {
    var e = document.createElement("option");
    mxUtils.writeln(e, b);
    e.setAttribute("value", c);
    d && e.setAttribute("selected", d);
    a.appendChild(e)
};
mxForm.prototype.addField = function (a, b) {
    var c = document.createElement("tr"), d = document.createElement("td");
    mxUtils.write(d, a);
    c.appendChild(d);
    d = document.createElement("td");
    d.appendChild(b);
    c.appendChild(d);
    this.body.appendChild(c);
    return b
};
function mxImage(a, b, c) {
    this.src = a;
    this.width = b;
    this.height = c
}
mxImage.prototype.src = null;
mxImage.prototype.width = null;
mxImage.prototype.height = null;
function mxDivResizer(a, b) {
    if (a.nodeName.toLowerCase() == "div") {
        b == null && (b = window);
        this.div = a;
        var c = mxUtils.getCurrentStyle(a);
        if (c != null) {
            this.resizeWidth = c.width == "auto";
            this.resizeHeight = c.height == "auto"
        }
        mxEvent.addListener(b, "resize", mxUtils.bind(this, function () {
            if (!this.handlingResize) {
                this.handlingResize = true;
                this.resize();
                this.handlingResize = false
            }
        }));
        this.resize()
    }
}
mxDivResizer.prototype.resizeWidth = !0;
mxDivResizer.prototype.resizeHeight = !0;
mxDivResizer.prototype.handlingResize = !1;
mxDivResizer.prototype.resize = function () {
    var a = this.getDocumentWidth(), b = this.getDocumentHeight(), c = parseInt(this.div.style.left), d = parseInt(this.div.style.right), e = parseInt(this.div.style.top), f = parseInt(this.div.style.bottom);
    if (this.resizeWidth && !isNaN(c) && !isNaN(d) && c >= 0 && d >= 0 && a - d - c > 0)this.div.style.width = a - d - c + "px";
    if (this.resizeHeight && !isNaN(e) && !isNaN(f) && e >= 0 && f >= 0 && b - e - f > 0)this.div.style.height = b - e - f + "px"
};
mxDivResizer.prototype.getDocumentWidth = function () {
    return document.body.clientWidth
};
mxDivResizer.prototype.getDocumentHeight = function () {
    return document.body.clientHeight
};
function mxDragSource(a, b) {
    this.element = a;
    this.dropHandler = b;
    mxEvent.addListener(a, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, this.mouseDown))
}
mxDragSource.prototype.element = null;
mxDragSource.prototype.dropHandler = null;
mxDragSource.prototype.dragOffset = null;
mxDragSource.prototype.dragElement = null;
mxDragSource.prototype.previewElement = null;
mxDragSource.prototype.enabled = !0;
mxDragSource.prototype.currentGraph = null;
mxDragSource.prototype.currentDropTarget = null;
mxDragSource.prototype.currentPoint = null;
mxDragSource.prototype.currentGuide = null;
mxDragSource.prototype.currentHighlight = null;
mxDragSource.prototype.autoscroll = !0;
mxDragSource.prototype.guidesEnabled = !0;
mxDragSource.prototype.gridEnabled = !0;
mxDragSource.prototype.highlightDropTargets = !0;
mxDragSource.prototype.isEnabled = function () {
    return this.enabled
};
mxDragSource.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxDragSource.prototype.isGuidesEnabled = function () {
    return this.guidesEnabled
};
mxDragSource.prototype.setGuidesEnabled = function (a) {
    this.guidesEnabled = a
};
mxDragSource.prototype.isGridEnabled = function () {
    return this.gridEnabled
};
mxDragSource.prototype.setGridEnabled = function (a) {
    this.gridEnabled = a
};
mxDragSource.prototype.getGraphForEvent = function () {
    return null
};
mxDragSource.prototype.getDropTarget = function (a, b, c) {
    return a.getCellAt(b, c)
};
mxDragSource.prototype.createDragElement = function () {
    return this.element.cloneNode(true)
};
mxDragSource.prototype.createPreviewElement = function () {
    return null
};
mxDragSource.prototype.mouseDown = function (a) {
    if (this.enabled && !mxEvent.isConsumed(a) && this.mouseMoveHandler == null) {
        this.startDrag(a);
        var b = mxClient.IS_TOUCH ? "touchmove" : "mousemove", c = mxClient.IS_TOUCH ? "touchend" : "mouseup";
        this.mouseMoveHandler = mxUtils.bind(this, this.mouseMove);
        mxEvent.addListener(document, b, this.mouseMoveHandler);
        this.mouseUpHandler = mxUtils.bind(this, this.mouseUp);
        mxEvent.addListener(document, c, this.mouseUpHandler);
        mxEvent.consume(a, true, false)
    }
};
mxDragSource.prototype.startDrag = function (a) {
    this.dragElement = this.createDragElement(a);
    this.dragElement.style.position = "absolute";
    this.dragElement.style.zIndex = "3";
    mxUtils.setOpacity(this.dragElement, 70)
};
mxDragSource.prototype.stopDrag = function () {
    if (this.dragElement != null) {
        this.dragElement.parentNode != null && this.dragElement.parentNode.removeChild(this.dragElement);
        this.dragElement = null
    }
};
mxDragSource.prototype.graphContainsEvent = function (a, b) {
    var c = mxEvent.getClientX(b), d = mxEvent.getClientY(b), e = mxUtils.getOffset(a.container), f = mxUtils.getScrollOrigin();
    return c >= e.x - f.x && d >= e.y - f.y && c <= e.x - f.x + a.container.offsetWidth && d <= e.y - f.y + a.container.offsetHeight
};
mxDragSource.prototype.mouseMove = function (a) {
    var b = this.getGraphForEvent(a);
    b != null && !this.graphContainsEvent(b, a) && (b = null);
    if (b != this.currentGraph) {
        this.currentGraph != null && this.dragExit(this.currentGraph);
        this.currentGraph = b;
        this.currentGraph != null && this.dragEnter(this.currentGraph)
    }
    this.currentGraph != null && this.dragOver(this.currentGraph, a);
    if (this.dragElement != null && (this.previewElement == null || this.previewElement.style.visibility != "visible")) {
        var b = mxEvent.getClientX(a), c = mxEvent.getClientY(a);
        this.dragElement.parentNode == null && document.body.appendChild(this.dragElement);
        this.dragElement.style.visibility = "visible";
        if (this.dragOffset != null) {
            b = b + this.dragOffset.x;
            c = c + this.dragOffset.y
        }
        b = b + (document.body.scrollLeft || document.documentElement.scrollLeft);
        c = c + (document.body.scrollTop || document.documentElement.scrollTop);
        this.dragElement.style.left = b + "px";
        this.dragElement.style.top = c + "px"
    } else if (this.dragElement != null)this.dragElement.style.visibility = "hidden";
    mxEvent.consume(a)
};
mxDragSource.prototype.mouseUp = function (a) {
    if (this.currentGraph != null) {
        if (this.currentPoint != null && (this.previewElement == null || this.previewElement.style.visibility != "hidden")) {
            var b = this.currentGraph.view.scale, c = this.currentGraph.view.translate;
            this.drop(this.currentGraph, a, this.currentDropTarget, this.currentPoint.x / b - c.x, this.currentPoint.y / b - c.y)
        }
        this.dragExit(this.currentGraph)
    }
    this.stopDrag(a);
    this.currentGraph = null;
    if (this.mouseMoveHandler != null) {
        mxEvent.removeListener(document, mxClient.IS_TOUCH ?
            "touchmove" : "mousemove", this.mouseMoveHandler);
        this.mouseMoveHandler = null
    }
    if (this.mouseUpHandler != null) {
        mxEvent.removeListener(document, mxClient.IS_TOUCH ? "touchend" : "mouseup", this.mouseUpHandler);
        this.mouseUpHandler = null
    }
    mxEvent.consume(a)
};
mxDragSource.prototype.dragEnter = function (a) {
    a.isMouseDown = true;
    this.previewElement = this.createPreviewElement(a);
    if (this.isGuidesEnabled() && this.previewElement != null)this.currentGuide = new mxGuide(a, a.graphHandler.getGuideStates());
    if (this.highlightDropTargets)this.currentHighlight = new mxCellHighlight(a, mxConstants.DROP_TARGET_COLOR)
};
mxDragSource.prototype.dragExit = function (a) {
    this.currentPoint = this.currentDropTarget = null;
    a.isMouseDown = false;
    if (this.previewElement != null) {
        this.previewElement.parentNode != null && this.previewElement.parentNode.removeChild(this.previewElement);
        this.previewElement = null
    }
    if (this.currentGuide != null) {
        this.currentGuide.destroy();
        this.currentGuide = null
    }
    if (this.currentHighlight != null) {
        this.currentHighlight.destroy();
        this.currentHighlight = null
    }
};
mxDragSource.prototype.dragOver = function (a, b) {
    var c = mxUtils.getOffset(a.container), d = mxUtils.getScrollOrigin(a.container), e = mxEvent.getClientX(b) - c.x + d.x, c = mxEvent.getClientY(b) - c.y + d.y;
    a.autoScroll && (this.autoscroll == null || this.autoscroll) && a.scrollPointToVisible(e, c, a.autoExtend);
    if (this.currentHighlight != null && a.isDropEnabled()) {
        this.currentDropTarget = this.getDropTarget(a, e, c);
        this.currentHighlight.highlight(a.getView().getState(this.currentDropTarget))
    }
    if (this.previewElement != null) {
        if (this.previewElement.parentNode ==
            null) {
            a.container.appendChild(this.previewElement);
            this.previewElement.style.zIndex = "3";
            this.previewElement.style.position = "absolute"
        }
        var d = this.isGridEnabled() && a.isGridEnabledEvent(b), f = true;
        if (this.currentGuide != null && this.currentGuide.isEnabledForEvent(b))var f = parseInt(this.previewElement.style.width), g = parseInt(this.previewElement.style.height), f = new mxRectangle(0, 0, f, g), c = new mxPoint(e, c), c = this.currentGuide.move(f, c, d), f = false, e = c.x, c = c.y; else if (d)var d = a.view.scale, g = a.view.translate, h =
            a.gridSize / 2, e = (a.snap(e / d - g.x - h) + g.x) * d, c = (a.snap(c / d - g.y - h) + g.y) * d;
        this.currentGuide != null && f && this.currentGuide.hide();
        if (this.previewOffset != null) {
            e = e + this.previewOffset.x;
            c = c + this.previewOffset.y
        }
        this.previewElement.style.left = Math.round(e) + "px";
        this.previewElement.style.top = Math.round(c) + "px";
        this.previewElement.style.visibility = "visible"
    }
    this.currentPoint = new mxPoint(e, c)
};
mxDragSource.prototype.drop = function (a, b, c, d, e) {
    this.dropHandler(a, b, c, d, e);
    a.container.focus()
};
function mxToolbar(a) {
    this.container = a
}
mxToolbar.prototype = new mxEventSource;
mxToolbar.prototype.constructor = mxToolbar;
mxToolbar.prototype.container = null;
mxToolbar.prototype.enabled = !0;
mxToolbar.prototype.noReset = !1;
mxToolbar.prototype.updateDefaultMode = !0;
mxToolbar.prototype.addItem = function (a, b, c, d, e, f) {
    var g = document.createElement(b != null ? "img" : "button"), h = e || (f != null ? "mxToolbarMode" : "mxToolbarItem");
    g.className = h;
    g.setAttribute("src", b);
    a != null && (b != null ? g.setAttribute("title", a) : mxUtils.write(g, a));
    this.container.appendChild(g);
    c != null && mxEvent.addListener(g, mxClient.IS_TOUCH ? "touchend" : "click", c);
    a = mxClient.IS_TOUCH ? "touchend" : "mouseup";
    mxEvent.addListener(g, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (a) {
        d != null ? g.setAttribute("src",
            d) : g.style.backgroundColor = "gray";
        if (f != null) {
            if (this.menu == null) {
                this.menu = new mxPopupMenu;
                this.menu.init()
            }
            var b = this.currentImg;
            this.menu.isMenuShowing() && this.menu.hideMenu();
            if (b != g) {
                this.currentImg = g;
                this.menu.factoryMethod = f;
                b = new mxPoint(g.offsetLeft, g.offsetTop + g.offsetHeight);
                this.menu.popup(b.x, b.y, null, a);
                if (this.menu.isMenuShowing()) {
                    g.className = h + "Selected";
                    this.menu.hideMenu = function () {
                        mxPopupMenu.prototype.hideMenu.apply(this);
                        g.className = h;
                        this.currentImg = null
                    }
                }
            }
        }
    }));
    c = mxUtils.bind(this,
        function () {
            d != null ? g.setAttribute("src", b) : g.style.backgroundColor = ""
        });
    mxEvent.addListener(g, a, c);
    mxEvent.addListener(g, "mouseout", c);
    return g
};
mxToolbar.prototype.addCombo = function (a) {
    var b = document.createElement("div");
    b.style.display = "inline";
    b.className = "mxToolbarComboContainer";
    var c = document.createElement("select");
    c.className = a || "mxToolbarCombo";
    b.appendChild(c);
    this.container.appendChild(b);
    return c
};
mxToolbar.prototype.addActionCombo = function (a, b) {
    var c = document.createElement("select");
    c.className = b || "mxToolbarCombo";
    this.addOption(c, a, null);
    mxEvent.addListener(c, "change", function (a) {
        var b = c.options[c.selectedIndex];
        c.selectedIndex = 0;
        b.funct != null && b.funct(a)
    });
    this.container.appendChild(c);
    return c
};
mxToolbar.prototype.addOption = function (a, b, c) {
    var d = document.createElement("option");
    mxUtils.writeln(d, b);
    typeof c == "function" ? d.funct = c : d.setAttribute("value", c);
    a.appendChild(d);
    return d
};
mxToolbar.prototype.addSwitchMode = function (a, b, c, d, e) {
    var f = document.createElement("img");
    f.initialClassName = e || "mxToolbarMode";
    f.className = f.initialClassName;
    f.setAttribute("src", b);
    f.altIcon = d;
    a != null && f.setAttribute("title", a);
    mxEvent.addListener(f, "click", mxUtils.bind(this, function () {
        var a = this.selectedMode.altIcon;
        if (a != null) {
            this.selectedMode.altIcon = this.selectedMode.getAttribute("src");
            this.selectedMode.setAttribute("src", a)
        } else this.selectedMode.className = this.selectedMode.initialClassName;
        if (this.updateDefaultMode)this.defaultMode = f;
        this.selectedMode = f;
        a = f.altIcon;
        if (a != null) {
            f.altIcon = f.getAttribute("src");
            f.setAttribute("src", a)
        } else f.className = f.initialClassName + "Selected";
        this.fireEvent(new mxEventObject(mxEvent.SELECT));
        c()
    }));
    this.container.appendChild(f);
    if (this.defaultMode == null) {
        this.defaultMode = f;
        this.selectMode(f);
        c()
    }
    return f
};
mxToolbar.prototype.addMode = function (a, b, c, d, e, f) {
    var f = f != null ? f : true, g = document.createElement(b != null ? "img" : "button");
    g.initialClassName = e || "mxToolbarMode";
    g.className = g.initialClassName;
    g.setAttribute("src", b);
    g.altIcon = d;
    a != null && g.setAttribute("title", a);
    if (this.enabled && f) {
        mxEvent.addListener(g, "click", mxUtils.bind(this, function () {
            this.selectMode(g, c);
            this.noReset = false
        }));
        mxEvent.addListener(g, "dblclick", mxUtils.bind(this, function () {
            this.selectMode(g, c);
            this.noReset = true
        }));
        if (this.defaultMode ==
            null) {
            this.defaultMode = g;
            this.defaultFunction = c;
            this.selectMode(g, c)
        }
    }
    this.container.appendChild(g);
    return g
};
mxToolbar.prototype.selectMode = function (a, b) {
    if (this.selectedMode != a) {
        if (this.selectedMode != null) {
            var c = this.selectedMode.altIcon;
            if (c != null) {
                this.selectedMode.altIcon = this.selectedMode.getAttribute("src");
                this.selectedMode.setAttribute("src", c)
            } else this.selectedMode.className = this.selectedMode.initialClassName
        }
        this.selectedMode = a;
        c = this.selectedMode.altIcon;
        if (c != null) {
            this.selectedMode.altIcon = this.selectedMode.getAttribute("src");
            this.selectedMode.setAttribute("src", c)
        } else this.selectedMode.className =
            this.selectedMode.initialClassName + "Selected";
        this.fireEvent(new mxEventObject(mxEvent.SELECT, "function", b))
    }
};
mxToolbar.prototype.resetMode = function (a) {
    (a || !this.noReset) && this.selectedMode != this.defaultMode && this.selectMode(this.defaultMode, this.defaultFunction)
};
mxToolbar.prototype.addSeparator = function (a) {
    return this.addItem(null, a, null)
};
mxToolbar.prototype.addBreak = function () {
    mxUtils.br(this.container)
};
mxToolbar.prototype.addLine = function () {
    var a = document.createElement("hr");
    a.style.marginRight = "6px";
    a.setAttribute("size", "1");
    this.container.appendChild(a)
};
mxToolbar.prototype.destroy = function () {
    mxEvent.release(this.container);
    this.selectedMode = this.defaultFunction = this.defaultMode = this.container = null;
    this.menu != null && this.menu.destroy()
};
function mxSession(a, b, c, d) {
    this.model = a;
    this.urlInit = b;
    this.urlPoll = c;
    this.urlNotify = d;
    if (a != null) {
        this.codec = new mxCodec;
        this.codec.lookup = function (b) {
            return a.getCell(b)
        }
    }
    a.addListener(mxEvent.NOTIFY, mxUtils.bind(this, function (a, b) {
        var c = b.getProperty("edit");
        (c != null && this.debug || this.connected && !this.suspended) && this.notify("<edit>" + this.encodeChanges(c.changes, c.undone) + "</edit>")
    }))
}
mxSession.prototype = new mxEventSource;
mxSession.prototype.constructor = mxSession;
mxSession.prototype.model = null;
mxSession.prototype.urlInit = null;
mxSession.prototype.urlPoll = null;
mxSession.prototype.urlNotify = null;
mxSession.prototype.codec = null;
mxSession.prototype.linefeed = "&#xa;";
mxSession.prototype.escapePostData = !0;
mxSession.prototype.significantRemoteChanges = !0;
mxSession.prototype.sent = 0;
mxSession.prototype.received = 0;
mxSession.prototype.debug = !1;
mxSession.prototype.connected = !1;
mxSession.prototype.suspended = !1;
mxSession.prototype.polling = !1;
mxSession.prototype.start = function () {
    if (this.debug) {
        this.connected = true;
        this.fireEvent(new mxEventObject(mxEvent.CONNECT))
    } else this.connected || this.get(this.urlInit, mxUtils.bind(this, function () {
        this.connected = true;
        this.fireEvent(new mxEventObject(mxEvent.CONNECT));
        this.poll()
    }))
};
mxSession.prototype.suspend = function () {
    if (this.connected && !this.suspended) {
        this.suspended = true;
        this.fireEvent(new mxEventObject(mxEvent.SUSPEND))
    }
};
mxSession.prototype.resume = function () {
    if (this.connected && this.suspended) {
        this.suspended = false;
        this.fireEvent(new mxEventObject(mxEvent.RESUME));
        this.polling || this.poll()
    }
};
mxSession.prototype.stop = function (a) {
    if (this.connected)this.connected = false;
    this.fireEvent(new mxEventObject(mxEvent.DISCONNECT, "reason", a))
};
mxSession.prototype.poll = function () {
    if (this.connected && !this.suspended && this.urlPoll != null) {
        this.polling = true;
        this.get(this.urlPoll, mxUtils.bind(this, function () {
            this.poll()
        }))
    } else this.polling = false
};
mxSession.prototype.notify = function (a, b, c) {
    if (a != null && a.length > 0) {
        if (this.urlNotify != null)if (this.debug) {
            mxLog.show();
            mxLog.debug("mxSession.notify: " + this.urlNotify + " xml=" + a)
        } else {
            a = "<message><delta>" + a + "</delta></message>";
            this.escapePostData && (a = encodeURIComponent(a));
            mxUtils.post(this.urlNotify, "xml=" + a, b, c)
        }
        this.sent = this.sent + a.length;
        this.fireEvent(new mxEventObject(mxEvent.NOTIFY, "url", this.urlNotify, "xml", a))
    }
};
mxSession.prototype.get = function (a, b, c) {
    if (typeof mxUtils != "undefined") {
        var d = mxUtils.bind(this, function (a) {
            c != null ? c(a) : this.stop(a)
        });
        mxUtils.get(a, mxUtils.bind(this, function (c) {
            if (typeof mxUtils != "undefined")if (c.isReady() && c.getStatus() != 404) {
                this.received = this.received + c.getText().length;
                this.fireEvent(new mxEventObject(mxEvent.GET, "url", a, "request", c));
                if (this.isValidResponse(c)) {
                    if (c.getText().length > 0) {
                        var f = c.getDocumentElement();
                        f == null ? d("Invalid response: " + c.getText()) : this.receive(f)
                    }
                    b !=
                        null && b(c)
                }
            } else d("Response not ready")
        }), function () {
            d("Transmission error")
        })
    }
};
mxSession.prototype.isValidResponse = function (a) {
    return a.getText().indexOf("<?php") < 0
};
mxSession.prototype.encodeChanges = function (a, b) {
    for (var c = "", d = b ? -1 : 1, e = b ? a.length - 1 : 0; e >= 0 && e < a.length; e = e + d)var f = this.codec.encode(a[e]), c = c + mxUtils.getXml(f, this.linefeed);
    return c
};
mxSession.prototype.receive = function (a) {
    if (a != null && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        var b = a.getAttribute("namespace");
        if (b != null)this.model.prefix = b + "-";
        for (b = a.firstChild; b != null;) {
            var c = b.nodeName.toLowerCase();
            c == "state" ? this.processState(b) : c == "delta" && this.processDelta(b);
            b = b.nextSibling
        }
        this.fireEvent(new mxEventObject(mxEvent.RECEIVE, "node", a))
    }
};
mxSession.prototype.processState = function (a) {
    (new mxCodec(a.ownerDocument)).decode(a.firstChild, this.model)
};
mxSession.prototype.processDelta = function (a) {
    for (a = a.firstChild; a != null;) {
        a.nodeName == "edit" && this.processEdit(a);
        a = a.nextSibling
    }
};
mxSession.prototype.processEdit = function (a) {
    a = this.decodeChanges(a);
    if (a.length > 0) {
        var b = this.createUndoableEdit(a);
        this.model.fireEvent(new mxEventObject(mxEvent.CHANGE, "edit", b, "changes", a));
        this.model.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", b));
        this.fireEvent(new mxEventObject(mxEvent.FIRED, "edit", b))
    }
};
mxSession.prototype.createUndoableEdit = function (a) {
    var b = new mxUndoableEdit(this.model, this.significantRemoteChanges);
    b.changes = a;
    b.notify = function () {
        b.source.fireEvent(new mxEventObject(mxEvent.CHANGE, "edit", b, "changes", b.changes));
        b.source.fireEvent(new mxEventObject(mxEvent.NOTIFY, "edit", b, "changes", b.changes))
    };
    return b
};
mxSession.prototype.decodeChanges = function (a) {
    this.codec.document = a.ownerDocument;
    for (var b = [], a = a.firstChild; a != null;) {
        if (a.nodeType == mxConstants.NODETYPE_ELEMENT) {
            var c = null, c = a.nodeName == "mxRootChange" ? (new mxCodec(a.ownerDocument)).decode(a) : this.codec.decode(a);
            if (c != null) {
                c.model = this.model;
                c.execute();
                a.nodeName == "mxChildChange" && c.parent == null && this.cellRemoved(c.child);
                b.push(c)
            }
        }
        a = a.nextSibling
    }
    return b
};
mxSession.prototype.cellRemoved = function (a) {
    this.codec.putObject(a.getId(), a);
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++)this.cellRemoved(this.model.getChildAt(a, c))
};
function mxUndoableEdit(a, b) {
    this.source = a;
    this.changes = [];
    this.significant = b != null ? b : true
}
mxUndoableEdit.prototype.source = null;
mxUndoableEdit.prototype.changes = null;
mxUndoableEdit.prototype.significant = null;
mxUndoableEdit.prototype.undone = !1;
mxUndoableEdit.prototype.redone = !1;
mxUndoableEdit.prototype.isEmpty = function () {
    return this.changes.length == 0
};
mxUndoableEdit.prototype.isSignificant = function () {
    return this.significant
};
mxUndoableEdit.prototype.add = function (a) {
    this.changes.push(a)
};
mxUndoableEdit.prototype.notify = function () {
};
mxUndoableEdit.prototype.die = function () {
};
mxUndoableEdit.prototype.undo = function () {
    if (!this.undone) {
        for (var a = this.changes.length - 1; a >= 0; a--) {
            var b = this.changes[a];
            b.execute != null ? b.execute() : b.undo != null && b.undo()
        }
        this.undone = true;
        this.redone = false
    }
    this.notify()
};
mxUndoableEdit.prototype.redo = function () {
    if (!this.redone) {
        for (var a = this.changes.length, b = 0; b < a; b++) {
            var c = this.changes[b];
            c.execute != null ? c.execute() : c.redo != null && c.redo()
        }
        this.undone = false;
        this.redone = true
    }
    this.notify()
};
function mxUndoManager(a) {
    this.size = a != null ? a : 100;
    this.clear()
}
mxUndoManager.prototype = new mxEventSource;
mxUndoManager.prototype.constructor = mxUndoManager;
mxUndoManager.prototype.size = null;
mxUndoManager.prototype.history = null;
mxUndoManager.prototype.indexOfNextAdd = 0;
mxUndoManager.prototype.isEmpty = function () {
    return this.history.length == 0
};
mxUndoManager.prototype.clear = function () {
    this.history = [];
    this.indexOfNextAdd = 0;
    this.fireEvent(new mxEventObject(mxEvent.CLEAR))
};
mxUndoManager.prototype.canUndo = function () {
    return this.indexOfNextAdd > 0
};
mxUndoManager.prototype.undo = function () {
    for (; this.indexOfNextAdd > 0;) {
        var a = this.history[--this.indexOfNextAdd];
        a.undo();
        if (a.isSignificant()) {
            this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", a));
            break
        }
    }
};
mxUndoManager.prototype.canRedo = function () {
    return this.indexOfNextAdd < this.history.length
};
mxUndoManager.prototype.redo = function () {
    for (var a = this.history.length; this.indexOfNextAdd < a;) {
        var b = this.history[this.indexOfNextAdd++];
        b.redo();
        if (b.isSignificant()) {
            this.fireEvent(new mxEventObject(mxEvent.REDO, "edit", b));
            break
        }
    }
};
mxUndoManager.prototype.undoableEditHappened = function (a) {
    this.trim();
    this.size > 0 && this.size == this.history.length && this.history.shift();
    this.history.push(a);
    this.indexOfNextAdd = this.history.length;
    this.fireEvent(new mxEventObject(mxEvent.ADD, "edit", a))
};
mxUndoManager.prototype.trim = function () {
    if (this.history.length > this.indexOfNextAdd)for (var a = this.history.splice(this.indexOfNextAdd, this.history.length - this.indexOfNextAdd), b = 0; b < a.length; b++)a[b].die()
};
var mxUrlConverter = function () {
    var a = true, b = null;
    return{isEnabled:function () {
        return a
    }, setEnabled:function (b) {
        a = b
    }, getBaseUrl:function () {
        return b
    }, setBaseUrl:function (a) {
        b = a
    }, convert:function (c) {
        if (a && c.indexOf("http://") != 0 && c.indexOf("https://") != 0 && c.indexOf("data:image") != 0) {
            if (b == null) {
                b = document.URL;
                var d = b.lastIndexOf("/");
                d > 0 && (b = b.substring(0, d + 1))
            }
            c = b + c
        }
        return c
    }}
};
function mxPanningManager(a) {
    this.thread = null;
    this.active = false;
    this.dy = this.dx = this.t0y = this.t0x = this.tdy = this.tdx = 0;
    this.scrollbars = false;
    this.scrollTop = this.scrollLeft = 0;
    this.mouseListener = {mouseDown:function () {
    }, mouseMove:function () {
    }, mouseUp:mxUtils.bind(this, function () {
        this.active && this.stop()
    })};
    a.addMouseListener(this.mouseListener);
    mxEvent.addListener(document, "mouseup", mxUtils.bind(this, function () {
        this.active && this.stop()
    }));
    var b = mxUtils.bind(this, function () {
        this.scrollbars = mxUtils.hasScrollbars(a.container);
        this.scrollLeft = a.container.scrollLeft;
        this.scrollTop = a.container.scrollTop;
        return window.setInterval(mxUtils.bind(this, function () {
            this.tdx = this.tdx - this.dx;
            this.tdy = this.tdy - this.dy;
            if (this.scrollbars) {
                var b = -a.container.scrollLeft - Math.ceil(this.dx), d = -a.container.scrollTop - Math.ceil(this.dy);
                a.panGraph(b, d);
                a.panDx = this.scrollLeft - a.container.scrollLeft;
                a.panDy = this.scrollTop - a.container.scrollTop;
                a.fireEvent(new mxEventObject(mxEvent.PAN))
            } else a.panGraph(this.getDx(), this.getDy())
        }), this.delay)
    });
    this.isActive = function () {
        return active
    };
    this.getDx = function () {
        return Math.round(this.tdx)
    };
    this.getDy = function () {
        return Math.round(this.tdy)
    };
    this.start = function () {
        this.t0x = a.view.translate.x;
        this.t0y = a.view.translate.y;
        this.active = true
    };
    this.panTo = function (c, d, e, f) {
        this.active || this.start();
        this.scrollLeft = a.container.scrollLeft;
        this.scrollTop = a.container.scrollTop;
        var f = f != null ? f : 0, g = a.container;
        this.dx = c + (e != null ? e : 0) - g.scrollLeft - g.clientWidth;
        this.dx = this.dx < 0 && Math.abs(this.dx) < this.border ?
            this.border + this.dx : this.handleMouseOut ? Math.max(this.dx, 0) : 0;
        if (this.dx == 0) {
            this.dx = c - g.scrollLeft;
            this.dx = this.dx > 0 && this.dx < this.border ? this.dx - this.border : this.handleMouseOut ? Math.min(0, this.dx) : 0
        }
        this.dy = d + f - g.scrollTop - g.clientHeight;
        this.dy = this.dy < 0 && Math.abs(this.dy) < this.border ? this.border + this.dy : this.handleMouseOut ? Math.max(this.dy, 0) : 0;
        if (this.dy == 0) {
            this.dy = d - g.scrollTop;
            this.dy = this.dy > 0 && this.dy < this.border ? this.dy - this.border : this.handleMouseOut ? Math.min(0, this.dy) : 0
        }
        if (this.dx !=
            0 || this.dy != 0) {
            this.dx = this.dx * this.damper;
            this.dy = this.dy * this.damper;
            if (this.thread == null)this.thread = b()
        } else if (this.thread != null) {
            window.clearInterval(this.thread);
            this.thread = null
        }
    };
    this.stop = function () {
        if (this.active) {
            this.active = false;
            if (this.thread != null) {
                window.clearInterval(this.thread);
                this.thread = null
            }
            this.tdy = this.tdx = 0;
            if (this.scrollbars) {
                a.panDx = 0;
                a.panDy = 0;
                a.fireEvent(new mxEventObject(mxEvent.PAN))
            } else {
                var b = a.panDx, d = a.panDy;
                if (b != 0 || d != 0) {
                    a.panGraph(0, 0);
                    a.view.setTranslate(this.t0x +
                        b / a.view.scale, this.t0y + d / a.view.scale)
                }
            }
        }
    };
    this.destroy = function () {
        a.removeMouseListener(this.mouseListener)
    }
}
mxPanningManager.prototype.damper = 1 / 6;
mxPanningManager.prototype.delay = 10;
mxPanningManager.prototype.handleMouseOut = !0;
mxPanningManager.prototype.border = 0;
function mxPath(a) {
    this.format = a;
    this.path = [];
    this.translate = new mxPoint(0, 0)
}
mxPath.prototype.format = null;
mxPath.prototype.translate = null;
mxPath.prototype.scale = 1;
mxPath.prototype.path = null;
mxPath.prototype.isVml = function () {
    return this.format == "vml"
};
mxPath.prototype.getPath = function () {
    return this.path.join("")
};
mxPath.prototype.setTranslate = function (a, b) {
    this.translate = new mxPoint(a, b)
};
mxPath.prototype.moveTo = function (a, b) {
    a = a + this.translate.x;
    b = b + this.translate.y;
    a = a * this.scale;
    b = b * this.scale;
    this.isVml() ? this.path.push("m ", Math.round(a), " ", Math.round(b), " ") : this.path.push("M ", a, " ", b, " ")
};
mxPath.prototype.lineTo = function (a, b) {
    a = a + this.translate.x;
    b = b + this.translate.y;
    a = a * this.scale;
    b = b * this.scale;
    this.isVml() ? this.path.push("l ", Math.round(a), " ", Math.round(b), " ") : this.path.push("L ", a, " ", b, " ")
};
mxPath.prototype.quadTo = function (a, b, c, d) {
    a = a + this.translate.x;
    b = b + this.translate.y;
    a = a * this.scale;
    b = b * this.scale;
    c = c + this.translate.x;
    d = d + this.translate.y;
    c = c * this.scale;
    d = d * this.scale;
    this.isVml() ? this.path.push("c ", Math.round(a), " ", Math.round(b), " ", Math.round(c), " ", Math.round(d), " ", Math.round(c), " ", Math.round(d), " ") : this.path.push("Q ", a, " ", b, " ", c, " ", d, " ")
};
mxPath.prototype.curveTo = function (a, b, c, d, e, f) {
    a = a + this.translate.x;
    b = b + this.translate.y;
    a = a * this.scale;
    b = b * this.scale;
    c = c + this.translate.x;
    d = d + this.translate.y;
    c = c * this.scale;
    d = d * this.scale;
    e = e + this.translate.x;
    f = f + this.translate.y;
    e = e * this.scale;
    f = f * this.scale;
    this.isVml() ? this.path.push("c ", Math.round(a), " ", Math.round(b), " ", Math.round(c), " ", Math.round(d), " ", Math.round(e), " ", Math.round(f), " ") : this.path.push("C ", a, " ", b, " ", c, " ", d, " ", e, " ", f, " ")
};
mxPath.prototype.ellipse = function (a, b, c, d) {
    a = a + this.translate.x;
    b = b + this.translate.y;
    a = a * this.scale;
    b = b * this.scale;
    if (this.isVml())this.path.push("at ", Math.round(a), " ", Math.round(b), " ", Math.round(a + c), " ", Math.round(b + d), " ", Math.round(a), " ", Math.round(b + d / 2), " ", Math.round(a), " ", Math.round(b + d / 2)); else {
        var e = a, f = b + d / 2, a = a + c, b = b + d / 2, c = c / 2, d = d / 2;
        this.path.push("M ", e, " ", f, " ");
        this.path.push("A ", c, " ", d, " 0 1 0 ", a, " ", b, " ");
        this.path.push("A ", c, " ", d, " 0 1 0 ", e, " ", f)
    }
};
mxPath.prototype.addPath = function (a) {
    this.path = this.path.concat(a.path)
};
mxPath.prototype.write = function (a) {
    this.path.push(a, " ")
};
mxPath.prototype.end = function () {
    this.format == "vml" && this.path.push("e")
};
mxPath.prototype.close = function () {
    this.format == "vml" ? this.path.push("x e") : this.path.push("Z")
};
function mxPopupMenu(a) {
    this.factoryMethod = a;
    a != null && this.init()
}
mxPopupMenu.prototype = new mxEventSource;
mxPopupMenu.prototype.constructor = mxPopupMenu;
mxPopupMenu.prototype.submenuImage = mxClient.imageBasePath + "/submenu.gif";
mxPopupMenu.prototype.zIndex = 10006;
mxPopupMenu.prototype.factoryMethod = null;
mxPopupMenu.prototype.useLeftButtonForPopup = !1;
mxPopupMenu.prototype.enabled = !0;
mxPopupMenu.prototype.itemCount = 0;
mxPopupMenu.prototype.autoExpand = !1;
mxPopupMenu.prototype.smartSeparators = !1;
mxPopupMenu.prototype.labels = !0;
mxPopupMenu.prototype.init = function () {
    this.table = document.createElement("table");
    this.table.className = "mxPopupMenu";
    this.tbody = document.createElement("tbody");
    this.table.appendChild(this.tbody);
    this.div = document.createElement("div");
    this.div.className = "mxPopupMenu";
    this.div.style.display = "inline";
    this.div.style.zIndex = this.zIndex;
    this.div.appendChild(this.table);
    mxEvent.disableContextMenu(this.div)
};
mxPopupMenu.prototype.isEnabled = function () {
    return this.enabled
};
mxPopupMenu.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxPopupMenu.prototype.isPopupTrigger = function (a) {
    return a.isPopupTrigger() || this.useLeftButtonForPopup && mxEvent.isLeftMouseButton(a.getEvent())
};
mxPopupMenu.prototype.addItem = function (a, b, c, d, e, f) {
    d = d || this;
    this.itemCount++;
    if (d.willAddSeparator) {
        d.containsItems && this.addSeparator(d, true);
        d.willAddSeparator = false
    }
    d.containsItems = true;
    var g = document.createElement("tr");
    g.className = "mxPopupMenuItem";
    var h = document.createElement("td");
    h.className = "mxPopupMenuIcon";
    if (b != null) {
        e = document.createElement("img");
        e.src = b;
        h.appendChild(e)
    } else if (e != null) {
        b = document.createElement("div");
        b.className = e;
        h.appendChild(b)
    }
    g.appendChild(h);
    if (this.labels) {
        h =
            document.createElement("td");
        h.className = "mxPopupMenuItem" + (f != null && !f ? " disabled" : "");
        mxUtils.write(h, a);
        h.align = "left";
        g.appendChild(h);
        a = document.createElement("td");
        a.className = "mxPopupMenuItem" + (f != null && !f ? " disabled" : "");
        a.style.paddingRight = "6px";
        a.style.textAlign = "right";
        g.appendChild(a);
        d.div == null && this.createSubmenu(d)
    }
    d.tbody.appendChild(g);
    if (f == null || f) {
        f = mxClient.IS_TOUCH ? "touchmove" : "mousemove";
        a = mxClient.IS_TOUCH ? "touchend" : "mouseup";
        mxEvent.addListener(g, mxClient.IS_TOUCH ? "touchstart" :
            "mousedown", mxUtils.bind(this, function (a) {
            this.eventReceiver = g;
            if (d.activeRow != g && d.activeRow != d) {
                d.activeRow != null && d.activeRow.div.parentNode != null && this.hideSubmenu(d);
                if (g.div != null) {
                    this.showSubmenu(d, g);
                    d.activeRow = g
                }
            }
            mxEvent.consume(a)
        }));
        mxEvent.addListener(g, f, mxUtils.bind(this, function () {
            if (d.activeRow != g && d.activeRow != d) {
                d.activeRow != null && d.activeRow.div.parentNode != null && this.hideSubmenu(d);
                if (this.autoExpand && g.div != null) {
                    this.showSubmenu(d, g);
                    d.activeRow = g
                }
            }
            g.className = "mxPopupMenuItemHover"
        }));
        mxEvent.addListener(g, a, mxUtils.bind(this, function (a) {
            if (this.eventReceiver == g) {
                d.activeRow != g && this.hideMenu();
                c != null && c(a)
            }
            this.eventReceiver = null;
            mxEvent.consume(a)
        }));
        mxEvent.addListener(g, "mouseout", mxUtils.bind(this, function () {
            g.className = "mxPopupMenuItem"
        }))
    }
    return g
};
mxPopupMenu.prototype.createSubmenu = function (a) {
    a.table = document.createElement("table");
    a.table.className = "mxPopupMenu";
    a.tbody = document.createElement("tbody");
    a.table.appendChild(a.tbody);
    a.div = document.createElement("div");
    a.div.className = "mxPopupMenu";
    a.div.style.position = "absolute";
    a.div.style.display = "inline";
    a.div.style.zIndex = this.zIndex;
    a.div.appendChild(a.table);
    var b = document.createElement("img");
    b.setAttribute("src", this.submenuImage);
    td = a.firstChild.nextSibling.nextSibling;
    td.appendChild(b)
};
mxPopupMenu.prototype.showSubmenu = function (a, b) {
    if (b.div != null) {
        b.div.style.left = a.div.offsetLeft + b.offsetLeft + b.offsetWidth - 1 + "px";
        b.div.style.top = a.div.offsetTop + b.offsetTop + "px";
        document.body.appendChild(b.div);
        var c = parseInt(b.div.offsetLeft), d = parseInt(b.div.offsetWidth), e = document.body, f = document.documentElement;
        if (c + d > (e.scrollLeft || f.scrollLeft) + (e.clientWidth || f.clientWidth))b.div.style.left = a.div.offsetLeft - d + (mxClient.IS_IE ? 6 : -6) + "px";
        mxUtils.fit(b.div)
    }
};
mxPopupMenu.prototype.addSeparator = function (a, b) {
    a = a || this;
    if (this.smartSeparators && !b)a.willAddSeparator = true; else if (a.tbody != null) {
        a.willAddSeparator = false;
        var c = document.createElement("tr"), d = document.createElement("td");
        d.className = "mxPopupMenuIcon";
        d.style.padding = "0 0 0 0px";
        c.appendChild(d);
        d = document.createElement("td");
        d.style.padding = "0 0 0 0px";
        d.setAttribute("colSpan", "2");
        var e = document.createElement("hr");
        e.setAttribute("size", "1");
        d.appendChild(e);
        c.appendChild(d);
        a.tbody.appendChild(c)
    }
};
mxPopupMenu.prototype.popup = function (a, b, c, d) {
    if (this.div != null && this.tbody != null && this.factoryMethod != null) {
        this.div.style.left = a + "px";
        for (this.div.style.top = b + "px"; this.tbody.firstChild != null;) {
            mxEvent.release(this.tbody.firstChild);
            this.tbody.removeChild(this.tbody.firstChild)
        }
        this.itemCount = 0;
        this.factoryMethod(this, c, d);
        if (this.itemCount > 0) {
            this.showMenu();
            this.fireEvent(new mxEventObject(mxEvent.SHOW))
        }
    }
};
mxPopupMenu.prototype.isMenuShowing = function () {
    return this.div != null && this.div.parentNode == document.body
};
mxPopupMenu.prototype.showMenu = function () {
    if (document.documentMode >= 9)this.div.style.filter = "none";
    document.body.appendChild(this.div);
    mxUtils.fit(this.div)
};
mxPopupMenu.prototype.hideMenu = function () {
    if (this.div != null) {
        this.div.parentNode != null && this.div.parentNode.removeChild(this.div);
        this.hideSubmenu(this);
        this.containsItems = false
    }
};
mxPopupMenu.prototype.hideSubmenu = function (a) {
    if (a.activeRow != null) {
        this.hideSubmenu(a.activeRow);
        a.activeRow.div.parentNode != null && a.activeRow.div.parentNode.removeChild(a.activeRow.div);
        a.activeRow = null
    }
};
mxPopupMenu.prototype.destroy = function () {
    if (this.div != null) {
        mxEvent.release(this.div);
        this.div.parentNode != null && this.div.parentNode.removeChild(this.div);
        this.div = null
    }
};
function mxAutoSaveManager(a) {
    this.changeHandler = mxUtils.bind(this, function (a, c) {
        this.isEnabled() && this.graphModelChanged(c.getProperty("edit").changes)
    });
    this.setGraph(a)
}
mxAutoSaveManager.prototype = new mxEventSource;
mxAutoSaveManager.prototype.constructor = mxAutoSaveManager;
mxAutoSaveManager.prototype.graph = null;
mxAutoSaveManager.prototype.autoSaveDelay = 10;
mxAutoSaveManager.prototype.autoSaveThrottle = 2;
mxAutoSaveManager.prototype.autoSaveThreshold = 5;
mxAutoSaveManager.prototype.ignoredChanges = 0;
mxAutoSaveManager.prototype.lastSnapshot = 0;
mxAutoSaveManager.prototype.enabled = !0;
mxAutoSaveManager.prototype.changeHandler = null;
mxAutoSaveManager.prototype.isEnabled = function () {
    return this.enabled
};
mxAutoSaveManager.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxAutoSaveManager.prototype.setGraph = function (a) {
    this.graph != null && this.graph.getModel().removeListener(this.changeHandler);
    this.graph = a;
    this.graph != null && this.graph.getModel().addListener(mxEvent.CHANGE, this.changeHandler)
};
mxAutoSaveManager.prototype.save = function () {
};
mxAutoSaveManager.prototype.graphModelChanged = function () {
    var a = ((new Date).getTime() - this.lastSnapshot) / 1E3;
    if (a > this.autoSaveDelay || this.ignoredChanges >= this.autoSaveThreshold && a > this.autoSaveThrottle) {
        this.save();
        this.reset()
    } else this.ignoredChanges++
};
mxAutoSaveManager.prototype.reset = function () {
    this.lastSnapshot = (new Date).getTime();
    this.ignoredChanges = 0
};
mxAutoSaveManager.prototype.destroy = function () {
    this.setGraph(null)
};
function mxAnimation(a) {
    this.delay = a != null ? a : 20
}
mxAnimation.prototype = new mxEventSource;
mxAnimation.prototype.constructor = mxAnimation;
mxAnimation.prototype.delay = null;
mxAnimation.prototype.thread = null;
mxAnimation.prototype.startAnimation = function () {
    if (this.thread == null)this.thread = window.setInterval(mxUtils.bind(this, this.updateAnimation), this.delay)
};
mxAnimation.prototype.updateAnimation = function () {
    this.fireEvent(new mxEventObject(mxEvent.EXECUTE))
};
mxAnimation.prototype.stopAnimation = function () {
    if (this.thread != null) {
        window.clearInterval(this.thread);
        this.thread = null;
        this.fireEvent(new mxEventObject(mxEvent.DONE))
    }
};
function mxMorphing(a, b, c, d) {
    mxAnimation.call(this, d);
    this.graph = a;
    this.steps = b != null ? b : 6;
    this.ease = c != null ? c : 1.5
}
mxMorphing.prototype = new mxAnimation;
mxMorphing.prototype.constructor = mxMorphing;
mxMorphing.prototype.graph = null;
mxMorphing.prototype.steps = null;
mxMorphing.prototype.step = 0;
mxMorphing.prototype.ease = null;
mxMorphing.prototype.cells = null;
mxMorphing.prototype.updateAnimation = function () {
    var a = new mxCellStatePreview(this.graph);
    if (this.cells != null)for (var b = 0; b < this.cells.length; b++)this.animateCell(cells[b], a, false); else this.animateCell(this.graph.getModel().getRoot(), a, true);
    this.show(a);
    (a.isEmpty() || this.step++ >= this.steps) && this.stopAnimation()
};
mxMorphing.prototype.show = function (a) {
    a.show()
};
mxMorphing.prototype.animateCell = function (a, b, c) {
    var d = this.graph.getView().getState(a), e = null;
    if (d != null) {
        e = this.getDelta(d);
        if (this.graph.getModel().isVertex(a) && (e.x != 0 || e.y != 0)) {
            var f = this.graph.view.getTranslate(), g = this.graph.view.getScale();
            e.x = e.x + f.x * g;
            e.y = e.y + f.y * g;
            b.moveState(d, -e.x / this.ease, -e.y / this.ease)
        }
    }
    if (c && !this.stopRecursion(d, e)) {
        d = this.graph.getModel().getChildCount(a);
        for (e = 0; e < d; e++)this.animateCell(this.graph.getModel().getChildAt(a, e), b, c)
    }
};
mxMorphing.prototype.stopRecursion = function (a, b) {
    return b != null && (b.x != 0 || b.y != 0)
};
mxMorphing.prototype.getDelta = function (a) {
    var b = this.getOriginForCell(a.cell), c = this.graph.getView().getTranslate(), d = this.graph.getView().getScale(), a = new mxPoint(a.x / d - c.x, a.y / d - c.y);
    return new mxPoint((b.x - a.x) * d, (b.y - a.y) * d)
};
mxMorphing.prototype.getOriginForCell = function (a) {
    var b = null;
    if (a != null) {
        b = this.getOriginForCell(this.graph.getModel().getParent(a));
        a = this.graph.getCellGeometry(a);
        if (a != null) {
            b.x = b.x + a.x;
            b.y = b.y + a.y
        }
    }
    if (b == null) {
        b = this.graph.view.getTranslate();
        b = new mxPoint(-b.x, -b.y)
    }
    return b
};
function mxImageBundle(a) {
    this.images = [];
    this.alt = a != null ? a : false
}
mxImageBundle.prototype.images = null;
mxImageBundle.prototype.images = null;
mxImageBundle.prototype.putImage = function (a, b, c) {
    this.images[a] = {value:b, fallback:c}
};
mxImageBundle.prototype.getImage = function (a) {
    var b = null;
    if (a != null) {
        a = this.images[a];
        a != null && (b = this.alt ? a.fallback : a.value)
    }
    return b
};
function mxImageExport() {
    this.initShapes();
    this.initMarkers()
}
mxImageExport.prototype.includeOverlays = !1;
mxImageExport.prototype.glassSize = 0.4;
mxImageExport.prototype.shapes = null;
mxImageExport.prototype.markers = null;
mxImageExport.prototype.drawState = function (a, b) {
    if (a != null) {
        if (a.shape != null) {
            var c = a.shape.stencil != null ? a.shape.stencil : this.shapes[a.style[mxConstants.STYLE_SHAPE]];
            c == null && (typeof a.shape.redrawPath == "function" ? c = this.createShape(a, b) : a.view.graph.getModel().isVertex(a.cell) && (c = this.shapes.rectangle));
            if (c != null) {
                this.drawShape(a, b, c);
                this.includeOverlays && this.drawOverlays(a, b)
            }
        }
        for (var c = a.view.graph, d = c.model.getChildCount(a.cell), e = 0; e < d; e++)this.drawState(c.view.getState(c.model.getChildAt(a.cell,
            e)), b)
    }
};
mxImageExport.prototype.createShape = function () {
    return{drawShape:function (a, b, c, d) {
        var e = {translate:new mxPoint(c.x, c.y), moveTo:function (b, c) {
            a.moveTo(this.translate.x + b, this.translate.y + c)
        }, lineTo:function (b, c) {
            a.lineTo(this.translate.x + b, this.translate.y + c)
        }, quadTo:function (b, c, d, e) {
            a.quadTo(this.translate.x + b, this.translate.y + c, this.translate.x + d, this.translate.y + e)
        }, curveTo:function (b, c, d, e, i, l) {
            a.curveTo(this.translate.x + b, this.translate.y + c, this.translate.x + d, this.translate.y + e, this.translate.x + i,
                this.translate.y + l)
        }, end:function () {
        }, close:function () {
            a.close()
        }};
        d || a.fillAndStroke();
        a.begin();
        b.shape.redrawPath.call(b.shape, e, c.x, c.y, c.width, c.height, !d);
        d || a.fillAndStroke();
        return true
    }}
};
mxImageExport.prototype.drawOverlays = function (a, b) {
    if (a.overlays != null)for (var c = 0; c < a.overlays.length; c++)if (a.overlays[c].bounds != null) {
        var d = a.overlays[c].bounds;
        b.image(d.x, d.y, d.width, d.height, a.overlays[c].image)
    }
};
mxImageExport.prototype.drawShape = function (a, b, c) {
    var d = mxUtils.getNumber(a.style, mxConstants.STYLE_ROTATION, 0), e = mxUtils.getValue(a.style, mxConstants.STYLE_DIRECTION, null), f = a.style[mxConstants.STYLE_STENCIL_FLIPH], g = a.style[mxConstants.STYLE_STENCIL_FLIPV];
    if (f ? !g : g)d = d * -1;
    e != null && (e == "north" ? d = d + 270 : e == "west" ? d = d + 180 : e == "south" && (d = d + 90));
    if (f && g) {
        d = d + 180;
        g = f = false
    }
    b.save();
    d = d % 360;
    (d != 0 || f || g) && b.rotate(d, f, g, a.getCenterX(), a.getCenterY());
    var h = a.view.scale, k = mxUtils.getNumber(a.style, mxConstants.STYLE_STROKEWIDTH,
        1) * h;
    b.setStrokeWidth(k);
    var i = k / 2, h = this.getBackgroundBounds(a);
    if (a.shape.stencil == null && (e == "south" || e == "north")) {
        var l = (h.width - h.height) / 2;
        h.x = h.x + l;
        h.y = h.y + -l;
        l = h.width;
        h.width = h.height;
        h.height = l
    }
    var l = new mxRectangle(h.x - i, h.y - i, h.width + k, h.height + k), m = mxUtils.getValue(a.style, mxConstants.STYLE_OPACITY, 100) / 100, k = a.style[mxConstants.STYLE_SHAPE], n = (i = k == mxConstants.SHAPE_IMAGE) ? null : mxUtils.getValue(a.style, mxConstants.STYLE_GRADIENTCOLOR);
    n == mxConstants.NONE && (n = null);
    var o = mxUtils.getValue(a.style,
        i ? mxConstants.STYLE_IMAGE_BACKGROUND : mxConstants.STYLE_FILLCOLOR, null);
    o == mxConstants.NONE && (o = null);
    var p = mxUtils.getValue(a.style, i ? mxConstants.STYLE_IMAGE_BORDER : mxConstants.STYLE_STROKECOLOR, null);
    p == mxConstants.NONE && (p = null);
    var q = o != null && (k == mxConstants.SHAPE_LABEL || k == mxConstants.SHAPE_RECTANGLE);
    mxUtils.getValue(a.style, mxConstants.STYLE_SHADOW, false) && this.drawShadow(b, a, c, d, f, g, h, m, o != null);
    b.setAlpha(m);
    if (mxUtils.getValue(a.style, mxConstants.STYLE_DASHED, "0") == "1") {
        b.setDashed(true);
        d = a.style.dashPattern;
        d != null && b.setDashPattern(d)
    }
    if (p != null || o != null) {
        p != null && b.setStrokeColor(p);
        o != null && (n != null && n != "transparent" ? b.setGradient(o, n, h.x, h.y, h.width, h.height, e) : b.setFillColor(o));
        q = c.drawShape(b, a, h, true, false) && q;
        c.drawShape(b, a, h, false, false)
    }
    q && mxUtils.getValue(a.style, mxConstants.STYLE_GLASS, 0) == 1 && this.drawGlass(a, b, l, c, this.glassSize);
    if (i || k == mxConstants.SHAPE_LABEL) {
        c = a.view.graph.getImage(a);
        if (c != null) {
            e = this.getImageBounds(a);
            e != null && this.drawImage(a, b, e, c)
        }
    }
    b.restore();
    f = a.text;
    c = a.view.graph.getLabel(a.cell);
    if (f != null && c != null && c.length > 0) {
        b.save();
        b.setAlpha(mxUtils.getValue(a.style, mxConstants.STYLE_TEXT_OPACITY, 100) / 100);
        e = new mxRectangle(f.boundingBox.x, f.boundingBox.y, f.boundingBox.width, f.boundingBox.height);
        d = mxUtils.getValue(a.style, mxConstants.STYLE_HORIZONTAL, 1) == 0;
        e.y = e.y + 2;
        if (d)if (f.dialect != mxConstants.DIALECT_SVG) {
            g = e.x + e.width / 2;
            f = e.y + e.height / 2;
            l = e.width;
            e.width = e.height;
            e.height = l;
            e.x = g - e.width / 2;
            e.y = f - e.height / 2
        } else if (f.dialect == mxConstants.DIALECT_SVG) {
            h =
                a.y + a.height;
            g = e.getCenterX() - a.x;
            f = e.getCenterY() - a.y;
            g = h - g - e.height / 2;
            e.x = a.x + f - e.width / 2;
            e.y = g
        }
        this.drawLabelBackground(a, b, e, d);
        this.drawLabel(a, b, e, d, c);
        b.restore()
    }
};
mxImageExport.prototype.drawShadow = function (a, b, c, d, e, f, g, h, k) {
    var i = d * Math.PI / 180, d = Math.cos(-i), i = Math.sin(-i), d = mxUtils.getRotatedPoint(new mxPoint(mxConstants.SHADOW_OFFSET_X, mxConstants.SHADOW_OFFSET_Y), d, i);
    if (e)d.x = d.x * -1;
    if (f)d.y = d.y * -1;
    a.translate(d.x, d.y);
    if (c.drawShape(a, b, g, true, true)) {
        a.setAlpha(mxConstants.SHADOW_OPACITY * h);
        a.shadow(mxConstants.SHADOWCOLOR, k)
    }
    a.translate(-d.x, -d.y)
};
mxImageExport.prototype.drawGlass = function (a, b, c, d, e) {
    if (d.drawShape(b, a, c, true, false)) {
        b.save();
        b.clip();
        b.setGlassGradient(c.x, c.y, c.width, c.height);
        b.begin();
        b.moveTo(c.x, c.y);
        b.lineTo(c.x, c.y + c.height * e);
        b.quadTo(c.x + c.width * 0.5, c.y + c.height * 0.7, c.x + c.width, c.y + c.height * e);
        b.lineTo(c.x + c.width, c.y);
        b.close();
        b.fill();
        b.restore()
    }
};
mxImageExport.prototype.drawImage = function (a, b, c, d) {
    var e = mxUtils.getValue(a.style, mxConstants.STYLE_IMAGE_ASPECT, 1) == 1, f = mxUtils.getValue(a.style, mxConstants.STYLE_IMAGE_FLIPH, 0) == 1, a = mxUtils.getValue(a.style, mxConstants.STYLE_IMAGE_FLIPV, 0) == 1;
    b.image(c.x, c.y, c.width, c.height, d, e, f, a)
};
mxImageExport.prototype.drawLabelBackground = function (a, b, c, d) {
    var e = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_BORDERCOLOR), f = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_BACKGROUNDCOLOR);
    e == mxConstants.NONE && (e = null);
    f == mxConstants.NONE && (f = null);
    if (e != null || f != null) {
        var g = c.x, a = c.y - mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_PADDING, 0), h = c.width, c = c.height;
        if (d) {
            g = g + (h - c) / 2;
            a = a + (c - h) / 2;
            d = h;
            h = c;
            c = d
        }
        f != null && b.setFillColor(f);
        if (e != null) {
            b.setStrokeColor(e);
            b.setStrokeWidth(1);
            b.setDashed(false)
        }
        b.rect(g,
            a, h, c);
        f != null && e != null ? b.fillAndStroke() : f != null ? b.fill() : e != null && b.stroke()
    }
};
mxImageExport.prototype.drawLabel = function (a, b, c, d, e) {
    var f = a.view.scale;
    b.setFontColor(mxUtils.getValue(a.style, mxConstants.STYLE_FONTCOLOR, "#000000"));
    b.setFontFamily(mxUtils.getValue(a.style, mxConstants.STYLE_FONTFAMILY, mxConstants.DEFAULT_FONTFAMILY));
    b.setFontStyle(mxUtils.getValue(a.style, mxConstants.STYLE_FONTSTYLE, 0));
    b.setFontSize(mxUtils.getValue(a.style, mxConstants.STYLE_FONTSIZE, mxConstants.DEFAULT_FONTSIZE) * f);
    f = mxUtils.getValue(a.style, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_LEFT);
    f == "left" && (f = null);
    var g = c.y - mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_PADDING, 0), h = a.view.graph.isWrapping(a.cell);
    (a = a.view.graph.isHtmlLabel(a.cell)) && mxText.prototype.replaceLinefeeds && (e = e.replace(/\n/g, "<br/>"));
    b.text(c.x, g, c.width, c.height, e, f, null, d, h, a ? "html" : "")
};
mxImageExport.prototype.getBackgroundBounds = function (a) {
    if (a.style[mxConstants.STYLE_SHAPE] == mxConstants.SHAPE_SWIMLANE) {
        var b = a.view.scale, b = mxUtils.getValue(a.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE) * b, c = a.width, d = a.height;
        mxUtils.getValue(a.style, mxConstants.STYLE_HORIZONTAL, true) ? d = b : c = b;
        return new mxRectangle(a.x, a.y, Math.min(a.width, c), Math.min(a.height, d))
    }
    return new mxRectangle(a.x, a.y, a.width, a.height)
};
mxImageExport.prototype.getImageBounds = function (a) {
    var b = new mxRectangle(a.x, a.y, a.width, a.height), c = a.style;
    if (mxUtils.getValue(c, mxConstants.STYLE_SHAPE) != mxConstants.SHAPE_IMAGE) {
        var a = mxUtils.getValue(c, mxConstants.STYLE_IMAGE_ALIGN, mxConstants.ALIGN_LEFT), d = mxUtils.getValue(c, mxConstants.STYLE_IMAGE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE), e = mxUtils.getValue(c, mxConstants.STYLE_IMAGE_WIDTH, mxConstants.DEFAULT_IMAGESIZE), f = mxUtils.getValue(c, mxConstants.STYLE_IMAGE_HEIGHT, mxConstants.DEFAULT_IMAGESIZE),
            c = mxUtils.getValue(c, mxConstants.STYLE_SPACING, 2);
        b.x = a == mxConstants.ALIGN_CENTER ? b.x + (b.width - e) / 2 : a == mxConstants.ALIGN_RIGHT ? b.x + (b.width - e - c - 2) : b.x + (c + 4);
        b.y = d == mxConstants.ALIGN_TOP ? b.y + c : d == mxConstants.ALIGN_BOTTOM ? b.y + (b.height - f - c) : b.y + (b.height - f) / 2;
        b.width = e;
        b.height = f
    }
    return b
};
mxImageExport.prototype.drawMarker = function (a, b, c) {
    var d = null, e = b.absolutePoints, f = e.length, g = c ? e[1] : e[f - 2], e = c ? e[0] : e[f - 1], f = e.x - g.x, h = e.y - g.y, k = Math.max(1, Math.sqrt(f * f + h * h)), g = f / k, f = h / k, h = mxUtils.getValue(b.style, c ? mxConstants.STYLE_STARTSIZE : mxConstants.STYLE_ENDSIZE, mxConstants.DEFAULT_MARKERSIZE), k = mxUtils.getValue(b.style, mxConstants.STYLE_STROKEWIDTH, 1), e = e.clone(), i = mxUtils.getValue(b.style, c ? mxConstants.STYLE_STARTARROW : mxConstants.STYLE_ENDARROW), l = this.markers[i];
    l != null && (d = l(a, b, i, e,
        g, f, h, c, k));
    return d
};
mxImageExport.prototype.initShapes = function () {
    this.shapes = [];
    this.shapes.rectangle = {drawShape:function (a, c, d, e) {
        if (e) {
            if (mxUtils.getValue(c.style, mxConstants.STYLE_ROUNDED, false)) {
                c = mxUtils.getValue(c.style, mxConstants.STYLE_ARCSIZE, mxConstants.RECTANGLE_ROUNDING_FACTOR * 100) / 100;
                c = Math.min(d.width * c, d.height * c);
                a.roundrect(d.x, d.y, d.width, d.height, c, c)
            } else a.rect(d.x, d.y, d.width, d.height);
            return true
        }
        a.fillAndStroke()
    }};
    this.shapes.swimlane = {drawShape:function (a, c, d, e) {
        if (e) {
            if (mxUtils.getValue(c.style, mxConstants.STYLE_ROUNDED,
                false)) {
                c = Math.min(d.width * mxConstants.RECTANGLE_ROUNDING_FACTOR, d.height * mxConstants.RECTANGLE_ROUNDING_FACTOR);
                a.roundrect(d.x, d.y, d.width, d.height, c, c)
            } else a.rect(d.x, d.y, d.width, d.height);
            return true
        }
        a.fillAndStroke();
        var e = c.x, f = c.y, g = c.width, h = c.height;
        if (mxUtils.getValue(c.style, mxConstants.STYLE_HORIZONTAL, 1) == 0) {
            e = e + d.width;
            g = g - d.width
        } else {
            f = f + d.height;
            h = h - d.height
        }
        a.begin();
        a.moveTo(e, f);
        a.lineTo(e, f + h);
        a.lineTo(e + g, f + h);
        a.lineTo(e + g, f);
        a.stroke()
    }};
    this.shapes.image = this.shapes.rectangle;
    this.shapes.label = this.shapes.rectangle;
    var a = this;
    this.shapes.connector = {translatePoint:function (a, c, d) {
        if (d != null) {
            var e = a[c].clone();
            e.x = e.x + d.x;
            e.y = e.y + d.y;
            a[c] = e
        }
    }, drawShape:function (b, c, d, e, f) {
        if (e) {
            d = mxUtils.getValue(c.style, mxConstants.STYLE_ROUNDED, false);
            e = mxConstants.LINE_ARCSIZE / 2;
            b.setFillColor(f ? mxConstants.NONE : mxUtils.getValue(c.style, mxConstants.STYLE_STROKECOLOR, "#000000"));
            b.setDashed(false);
            f = c.absolutePoints.slice();
            this.translatePoint(f, 0, a.drawMarker(b, c, true));
            this.translatePoint(f,
                f.length - 1, a.drawMarker(b, c, false));
            b.setDashed(mxUtils.getValue(c.style, mxConstants.STYLE_DASHED, "0") == "1");
            var g = f[0], c = f[f.length - 1];
            b.begin();
            b.moveTo(g.x, g.y);
            for (var h = 1; h < f.length - 1; h++) {
                var k = f[h], i = g.x - k.x, g = g.y - k.y;
                if (d && h < f.length - 1 && (i != 0 || g != 0)) {
                    var l = Math.sqrt(i * i + g * g), i = i * Math.min(e, l / 2) / l, g = g * Math.min(e, l / 2) / l;
                    b.lineTo(k.x + i, k.y + g);
                    g = f[h + 1];
                    i = g.x - k.x;
                    g = g.y - k.y;
                    l = Math.max(1, Math.sqrt(i * i + g * g));
                    i = i * Math.min(e, l / 2) / l;
                    g = g * Math.min(e, l / 2) / l;
                    i = k.x + i;
                    g = k.y + g;
                    b.curveTo(k.x, k.y, k.x, k.y, i, g);
                    k = new mxPoint(i, g)
                } else b.lineTo(k.x, k.y);
                g = k
            }
            b.lineTo(c.x, c.y);
            b.stroke();
            return true
        }
    }};
    this.shapes.arrow = {drawShape:function (a, c, d, e) {
        if (e) {
            var d = mxConstants.ARROW_SPACING, f = mxConstants.ARROW_WIDTH, e = mxConstants.ARROW_SIZE, c = c.absolutePoints, g = c[0], c = c[c.length - 1], h = c.x - g.x, k = c.y - g.y, i = Math.sqrt(h * h + k * k), l = i - 2 * d - e, e = h / i, k = k / i, i = f * k / 3, f = -f * e / 3, h = g.x - i / 2 + d * e, g = g.y - f / 2 + d * k, m = h + i, n = g + f, o = m + l * e, l = n + l * k, p = o + i, q = l + f, t = p - 3 * i, u = q - 3 * f;
            a.begin();
            a.moveTo(h, g);
            a.lineTo(m, n);
            a.lineTo(o, l);
            a.lineTo(p, q);
            a.lineTo(c.x -
                d * e, c.y - d * k);
            a.lineTo(t, u);
            a.lineTo(t + i, u + f);
            a.close();
            return true
        }
        a.fillAndStroke()
    }};
    this.shapes.cylinder = {drawShape:function (a, c, d, e) {
        if (e)return false;
        var c = d.x, e = d.y, f = d.width, d = d.height, g = Math.min(mxCylinder.prototype.maxHeight, Math.floor(d / 5));
        a.begin();
        a.moveTo(c, e + g);
        a.curveTo(c, e - g / 3, c + f, e - g / 3, c + f, e + g);
        a.lineTo(c + f, e + d - g);
        a.curveTo(c + f, e + d + g / 3, c, e + d + g / 3, c, e + d - g);
        a.close();
        a.fillAndStroke();
        a.begin();
        a.moveTo(c, e + g);
        a.curveTo(c, e + 2 * g, c + f, e + 2 * g, c + f, e + g);
        a.stroke()
    }};
    this.shapes.line = {drawShape:function (a, c, d, e) {
        if (e)return false;
        a.begin();
        c = c.getCenterY();
        a.moveTo(d.x, c);
        a.lineTo(d.x + d.width, c);
        a.stroke()
    }};
    this.shapes.ellipse = {drawShape:function (a, c, d, e) {
        if (e) {
            a.ellipse(d.x, d.y, d.width, d.height);
            return true
        }
        a.fillAndStroke()
    }};
    this.shapes.doubleEllipse = {drawShape:function (a, c, d, e) {
        var c = d.x, f = d.y, g = d.width, d = d.height;
        if (e) {
            a.ellipse(c, f, g, d);
            return true
        }
        a.fillAndStroke();
        e = Math.min(4, Math.min(g / 5, d / 5));
        g = g - 2 * e;
        d = d - 2 * e;
        g > 0 && d > 0 && a.ellipse(c + e, f + e, g, d);
        a.stroke()
    }};
    this.shapes.triangle = {drawShape:function (a, c, d, e) {
        if (e) {
            var c = d.x, e = d.y, f = d.width, d = d.height;
            a.begin();
            a.moveTo(c, e);
            a.lineTo(c + f, e + d / 2);
            a.lineTo(c, e + d);
            a.close();
            return true
        }
        a.fillAndStroke()
    }};
    this.shapes.rhombus = {drawShape:function (a, c, d, e) {
        if (e) {
            var c = d.x, e = d.y, f = d.width, d = d.height, g = f / 2, h = d / 2;
            a.begin();
            a.moveTo(c + g, e);
            a.lineTo(c + f, e + h);
            a.lineTo(c + g, e + d);
            a.lineTo(c, e + h);
            a.close();
            return true
        }
        a.fillAndStroke()
    }};
    this.shapes.hexagon = {drawShape:function (a, c, d, e) {
        if (e) {
            var c = d.x, e = d.y, f = d.width, d = d.height;
            a.begin();
            a.moveTo(c + 0.25 * f, e);
            a.lineTo(c +
                0.75 * f, e);
            a.lineTo(c + f, e + 0.5 * d);
            a.lineTo(c + 0.75 * f, e + d);
            a.lineTo(c + 0.25 * f, e + d);
            a.lineTo(c, e + 0.5 * d);
            a.close();
            return true
        }
        a.fillAndStroke()
    }};
    this.shapes.actor = {drawShape:function (a, c, d, e) {
        if (e) {
            var c = d.x, e = d.y, f = d.width, d = d.height, g = f * 2 / 6;
            a.begin();
            a.moveTo(c, e + d);
            a.curveTo(c, e + 3 * d / 5, c, e + 2 * d / 5, c + f / 2, e + 2 * d / 5);
            a.curveTo(c + f / 2 - g, e + 2 * d / 5, c + f / 2 - g, e, c + f / 2, e);
            a.curveTo(c + f / 2 + g, e, c + f / 2 + g, e + 2 * d / 5, c + f / 2, e + 2 * d / 5);
            a.curveTo(c + f, e + 2 * d / 5, c + f, e + 3 * d / 5, c + f, e + d);
            a.close();
            return true
        }
        a.fillAndStroke()
    }};
    this.shapes.cloud =
    {drawShape:function (a, c, d, e) {
        if (e) {
            var c = d.x, e = d.y, f = d.width, d = d.height;
            a.begin();
            a.moveTo(c + 0.25 * f, e + 0.25 * d);
            a.curveTo(c + 0.05 * f, e + 0.25 * d, c, e + 0.5 * d, c + 0.16 * f, e + 0.55 * d);
            a.curveTo(c, e + 0.66 * d, c + 0.18 * f, e + 0.9 * d, c + 0.31 * f, e + 0.8 * d);
            a.curveTo(c + 0.4 * f, e + d, c + 0.7 * f, e + d, c + 0.8 * f, e + 0.8 * d);
            a.curveTo(c + f, e + 0.8 * d, c + f, e + 0.6 * d, c + 0.875 * f, e + 0.5 * d);
            a.curveTo(c + f, e + 0.3 * d, c + 0.8 * f, e + 0.1 * d, c + 0.625 * f, e + 0.2 * d);
            a.curveTo(c + 0.5 * f, e + 0.05 * d, c + 0.3 * f, e + 0.05 * d, c + 0.25 * f, e + 0.25 * d);
            a.close();
            return true
        }
        a.fillAndStroke()
    }}
};
mxImageExport.prototype.initMarkers = function () {
    this.markers = [];
    var a = function (a, c, d, e, f, g, h, k, i) {
        var l = f * i * 1.118, m = g * i * 1.118;
        e.x = e.x - l;
        e.y = e.y - m;
        f = f * (h + i);
        g = g * (h + i);
        a.begin();
        a.moveTo(e.x, e.y);
        a.lineTo(e.x - f - g / 2, e.y - g + f / 2);
        d == mxConstants.ARROW_CLASSIC && a.lineTo(e.x - f * 3 / 4, e.y - g * 3 / 4);
        a.lineTo(e.x + g / 2 - f, e.y - g - f / 2);
        a.close();
        c.style[k ? mxConstants.STYLE_STARTFILL : mxConstants.STYLE_ENDFILL] == 0 ? a.stroke() : a.fillAndStroke();
        a = d != mxConstants.ARROW_CLASSIC ? 1 : 0.75;
        return new mxPoint(-f * a - l, -g * a - m)
    };
    this.markers.classic =
        a;
    this.markers.block = a;
    this.markers.open = function (a, c, d, e, f, g, h, k, i) {
        c = f * i * 1.118;
        d = g * i * 1.118;
        e.x = e.x - c;
        e.y = e.y - d;
        f = f * (h + i);
        g = g * (h + i);
        a.begin();
        a.moveTo(e.x - f - g / 2, e.y - g + f / 2);
        a.lineTo(e.x, e.y);
        a.lineTo(e.x + g / 2 - f, e.y - g - f / 2);
        a.stroke();
        return new mxPoint(-c * 2, -d * 2)
    };
    this.markers.oval = function (a, c, d, e, f, g, h, k) {
        d = h / 2;
        a.ellipse(e.x - d, e.y - d, h, h);
        c.style[k ? mxConstants.STYLE_STARTFILL : mxConstants.STYLE_ENDFILL] == 0 ? a.stroke() : a.fillAndStroke();
        return new mxPoint(-f / 2, -g / 2)
    };
    a = function (a, c, d, e, f, g, h, k, i) {
        var l =
            d == mxConstants.ARROW_DIAMOND ? 0.7071 : 0.9862, m = f * i * l, l = g * i * l, f = f * (h + i), g = g * (h + i);
        e.x = e.x - m;
        e.y = e.y - l;
        d = d == mxConstants.ARROW_DIAMOND ? 2 : 3.4;
        a.begin();
        a.moveTo(e.x, e.y);
        a.lineTo(e.x - f / 2 - g / d, e.y + f / d - g / 2);
        a.lineTo(e.x - f, e.y - g);
        a.lineTo(e.x - f / 2 + g / d, e.y - g / 2 - f / d);
        a.close();
        c.style[k ? mxConstants.STYLE_STARTFILL : mxConstants.STYLE_ENDFILL] == 0 ? a.stroke() : a.fillAndStroke();
        return new mxPoint(-m - f, -l - g)
    };
    this.markers.diamond = a;
    this.markers.diamondThin = a
};
var mxXmlCanvas2D = function (a) {
        var b = new mxUrlConverter, c = true, d = true, e = a.ownerDocument, f = [], g = {alpha:1, dashed:false, strokewidth:1, fontsize:mxConstants.DEFAULT_FONTSIZE, fontfamily:mxConstants.DEFAULT_FONTFAMILY, fontcolor:"#000000"}, h = function (a) {
            return Math.round(parseFloat(a) * 100) / 100
        };
        return{getConverter:function () {
            return b
        }, isCompressed:function () {
            return c
        }, setCompressed:function (a) {
            c = a
        }, isTextEnabled:function () {
            return d
        }, setTextEnabled:function (a) {
            d = a
        }, getDocument:function () {
            return e
        }, save:function () {
            if (c) {
                f.push(g);
                g = mxUtils.clone(g)
            }
            a.appendChild(e.createElement("save"))
        }, restore:function () {
            c && (g = f.pop());
            a.appendChild(e.createElement("restore"))
        }, scale:function (b) {
            var c = e.createElement("scale");
            c.setAttribute("scale", b);
            a.appendChild(c)
        }, translate:function (b, c) {
            var d = e.createElement("translate");
            d.setAttribute("dx", h(b));
            d.setAttribute("dy", h(c));
            a.appendChild(d)
        }, rotate:function (b, c, d, f, g) {
            var o = e.createElement("rotate");
            o.setAttribute("theta", h(b));
            o.setAttribute("flipH", c ? "1" : "0");
            o.setAttribute("flipV",
                d ? "1" : "0");
            o.setAttribute("cx", h(f));
            o.setAttribute("cy", h(g));
            a.appendChild(o)
        }, setStrokeWidth:function (b) {
            if (c) {
                if (g.strokewidth == b)return;
                g.strokewidth = b
            }
            var d = e.createElement("strokewidth");
            d.setAttribute("width", h(b));
            a.appendChild(d)
        }, setStrokeColor:function (b) {
            var c = e.createElement("strokecolor");
            c.setAttribute("color", b);
            a.appendChild(c)
        }, setDashed:function (b) {
            if (c) {
                if (g.dashed == b)return;
                g.dashed = b
            }
            var d = e.createElement("dashed");
            d.setAttribute("dashed", b ? "1" : "0");
            a.appendChild(d)
        }, setDashPattern:function (b) {
            var c =
                e.createElement("dashpattern");
            c.setAttribute("pattern", b);
            a.appendChild(c)
        }, setLineCap:function (b) {
            var c = e.createElement("linecap");
            c.setAttribute("cap", b);
            a.appendChild(c)
        }, setLineJoin:function (b) {
            var c = e.createElement("linejoin");
            c.setAttribute("join", b);
            a.appendChild(c)
        }, setMiterLimit:function (b) {
            var c = e.createElement("miterlimit");
            c.setAttribute("limit", b);
            a.appendChild(c)
        }, setFontSize:function (b) {
            if (d) {
                if (c) {
                    if (g.fontsize == b)return;
                    g.fontsize = b
                }
                var f = e.createElement("fontsize");
                f.setAttribute("size",
                    b);
                a.appendChild(f)
            }
        }, setFontColor:function (b) {
            if (d) {
                if (c) {
                    if (g.fontcolor == b)return;
                    g.fontcolor = b
                }
                var f = e.createElement("fontcolor");
                f.setAttribute("color", b);
                a.appendChild(f)
            }
        }, setFontFamily:function (b) {
            if (d) {
                if (c) {
                    if (g.fontfamily == b)return;
                    g.fontfamily = b
                }
                var f = e.createElement("fontfamily");
                f.setAttribute("family", b);
                a.appendChild(f)
            }
        }, setFontStyle:function (b) {
            if (d) {
                var c = e.createElement("fontstyle");
                c.setAttribute("style", b);
                a.appendChild(c)
            }
        }, setAlpha:function (b) {
            if (c) {
                if (g.alpha == b)return;
                g.alpha =
                    b
            }
            var d = e.createElement("alpha");
            d.setAttribute("alpha", h(b));
            a.appendChild(d)
        }, setFillColor:function (b) {
            var c = e.createElement("fillcolor");
            c.setAttribute("color", b);
            a.appendChild(c)
        }, setGradient:function (b, c, d, f, g, o, p) {
            var q = e.createElement("gradient");
            q.setAttribute("c1", b);
            q.setAttribute("c2", c);
            q.setAttribute("x", h(d));
            q.setAttribute("y", h(f));
            q.setAttribute("w", h(g));
            q.setAttribute("h", h(o));
            p != null && q.setAttribute("direction", p);
            a.appendChild(q)
        }, setGlassGradient:function (b, c, d, f) {
            var g = e.createElement("glass");
            g.setAttribute("x", h(b));
            g.setAttribute("y", h(c));
            g.setAttribute("w", h(d));
            g.setAttribute("h", h(f));
            a.appendChild(g)
        }, rect:function (b, c, d, f) {
            var g = e.createElement("rect");
            g.setAttribute("x", h(b));
            g.setAttribute("y", h(c));
            g.setAttribute("w", h(d));
            g.setAttribute("h", h(f));
            a.appendChild(g)
        }, roundrect:function (b, c, d, f, g, o) {
            var p = e.createElement("roundrect");
            p.setAttribute("x", h(b));
            p.setAttribute("y", h(c));
            p.setAttribute("w", h(d));
            p.setAttribute("h", h(f));
            p.setAttribute("dx", h(g));
            p.setAttribute("dy",
                h(o));
            a.appendChild(p)
        }, ellipse:function (b, c, d, f) {
            var g = e.createElement("ellipse");
            g.setAttribute("x", h(b));
            g.setAttribute("y", h(c));
            g.setAttribute("w", h(d));
            g.setAttribute("h", h(f));
            a.appendChild(g)
        }, image:function (c, d, f, g, n, o, p, q) {
            var n = b.convert(n), t = e.createElement("image");
            t.setAttribute("x", h(c));
            t.setAttribute("y", h(d));
            t.setAttribute("w", h(f));
            t.setAttribute("h", h(g));
            t.setAttribute("src", n);
            t.setAttribute("aspect", o ? "1" : "0");
            t.setAttribute("flipH", p ? "1" : "0");
            t.setAttribute("flipV", q ? "1" :
                "0");
            a.appendChild(t)
        }, text:function (b, c, f, g, n, o, p, q, t, u) {
            if (d) {
                var v = e.createElement("text");
                v.setAttribute("x", h(b));
                v.setAttribute("y", h(c));
                v.setAttribute("w", h(f));
                v.setAttribute("h", h(g));
                v.setAttribute("str", n);
                o != null && v.setAttribute("align", o);
                p != null && v.setAttribute("valign", p);
                v.setAttribute("vertical", q ? "1" : "0");
                v.setAttribute("wrap", t ? "1" : "0");
                v.setAttribute("format", u);
                a.appendChild(v)
            }
        }, begin:function () {
            a.appendChild(e.createElement("begin"))
        }, moveTo:function (b, c) {
            var d = e.createElement("move");
            d.setAttribute("x", h(b));
            d.setAttribute("y", h(c));
            a.appendChild(d)
        }, lineTo:function (b, c) {
            var d = e.createElement("line");
            d.setAttribute("x", h(b));
            d.setAttribute("y", h(c));
            a.appendChild(d)
        }, quadTo:function (b, c, d, f) {
            var g = e.createElement("quad");
            g.setAttribute("x1", h(b));
            g.setAttribute("y1", h(c));
            g.setAttribute("x2", h(d));
            g.setAttribute("y2", h(f));
            a.appendChild(g)
        }, curveTo:function (b, c, d, f, g, o) {
            var p = e.createElement("curve");
            p.setAttribute("x1", h(b));
            p.setAttribute("y1", h(c));
            p.setAttribute("x2", h(d));
            p.setAttribute("y2", h(f));
            p.setAttribute("x3", h(g));
            p.setAttribute("y3", h(o));
            a.appendChild(p)
        }, close:function () {
            a.appendChild(e.createElement("close"))
        }, stroke:function () {
            a.appendChild(e.createElement("stroke"))
        }, fill:function () {
            a.appendChild(e.createElement("fill"))
        }, fillAndStroke:function () {
            a.appendChild(e.createElement("fillstroke"))
        }, shadow:function (b, c) {
            var d = e.createElement("shadow");
            d.setAttribute("value", b);
            c != null && d.setAttribute("filled", c ? "1" : "0");
            a.appendChild(d)
        }, clip:function () {
            a.appendChild(e.createElement("clip"))
        }}
    },
    mxSvgCanvas2D = function (a, b) {
        var b = b != null ? b : false, c = new mxUrlConverter, d = true, e = true, f = true, g = function (b, c) {
            if (a.ownerDocument.createElementNS != null)return a.ownerDocument.createElementNS(c || mxConstants.NS_SVG, b);
            var d = a.ownerDocument.createElement(b);
            c != null && d.setAttribute("xmlns", c);
            return d
        }, h = g("defs");
        if (b) {
            var k = g("style");
            k.setAttribute("type", "text/css");
            mxUtils.write(k, "svg{font-family:" + mxConstants.DEFAULT_FONTFAMILY + ";font-size:" + mxConstants.DEFAULT_FONTSIZE + ";fill:none;stroke-miterlimit:10}");
            d && mxUtils.write(k, "rect{shape-rendering:crispEdges}");
            h.appendChild(k)
        }
        a.appendChild(h);
        var i = {dx:0, dy:0, scale:1, transform:"", fill:null, gradient:null, stroke:null, strokeWidth:1, dashed:false, dashpattern:"3 3", alpha:1, linecap:"flat", linejoin:"miter", miterlimit:10, fontColor:"#000000", fontSize:mxConstants.DEFAULT_FONTSIZE, fontFamily:mxConstants.DEFAULT_FONTFAMILY, fontStyle:0}, l = true, m = null, n = null, o = null, p = null, q = [], t = 0, u = [], v = function (a, b) {
            var c = "margin:0px;font-size:" + Math.floor(i.fontSize) + "px;font-family:" +
                i.fontFamily + ";color:" + i.fontColor + ";";
            (i.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && (c = c + "font-weight:bold;");
            (i.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && (c = c + "font-style:italic;");
            (i.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && (c = c + "font-decoration:underline;");
            b == mxConstants.ALIGN_CENTER ? c = c + "text-align:center;" : b == mxConstants.ALIGN_RIGHT && (c = c + "text-align:right;");
            var d = g("body", "http://www.w3.org/1999/xhtml");
            d.setAttribute("style", c);
            a = a.replace(/&nbsp;/g, "&#160;");
            c = mxUtils.parseXml('<div xmlns="http://www.w3.org/1999/xhtml">' + a + "</div>").documentElement;
            d.ownerDocument.importNode != null && (c = d.ownerDocument.importNode(c, true));
            d.appendChild(c);
            return d
        }, w = function (c, e, f, g) {
            if (c != null) {
                if (e.clip != null) {
                    c.setAttribute("clip-path", "url(#" + e.clip + ")");
                    e.clip = null
                }
                if (o != null) {
                    c.setAttribute("d", o.join(" "));
                    o = null;
                    if (d && l) {
                        c.setAttribute("shape-rendering", "crispEdges");
                        e.strokeWidth = Math.max(1, e.strokeWidth)
                    }
                }
                e.alpha < 1 && c.setAttribute("opacity",
                    e.alpha);
                f && (e.fill != null || e.gradient != null) ? e.gradient != null ? c.setAttribute("fill", "url(#" + e.gradient + ")") : c.setAttribute("fill", e.fill.toLowerCase()) : b || c.setAttribute("fill", "none");
                if (g && e.stroke != null) {
                    c.setAttribute("stroke", e.stroke.toLowerCase());
                    if (e.strokeWidth != 1) {
                        if (c.nodeName == "rect" && d)e.strokeWidth = Math.max(1, e.strokeWidth);
                        c.setAttribute("stroke-width", e.strokeWidth)
                    }
                    if (c.nodeName == "path") {
                        e.linejoin != null && e.linejoin != "miter" && c.setAttribute("stroke-linejoin", e.linejoin);
                        if (e.linecap !=
                            null) {
                            f = e.linecap;
                            f == "flat" && (f = "butt");
                            f != "butt" && c.setAttribute("stroke-linecap", f)
                        }
                        e.miterlimit != null && (!b || e.miterlimit != 10) && c.setAttribute("stroke-miterlimit", e.miterlimit)
                    }
                    if (e.dashed) {
                        f = e.dashpattern.split(" ");
                        if (f.length > 0) {
                            for (var g = [], h = 0; h < f.length; h++)g[h] = Number(f[h]) * i.strokeWidth;
                            c.setAttribute("stroke-dasharray", g.join(" "))
                        }
                    }
                }
                e.transform.length > 0 && c.setAttribute("transform", e.transform);
                a.appendChild(c)
            }
        }, r = function (a) {
            return Math.round(parseFloat(a) * 100) / 100
        };
        return{getConverter:function () {
            return c
        },
            isAutoAntiAlias:function () {
                return d
            }, setAutoAntiAlias:function (a) {
                d = a
            }, isTextEnabled:function () {
                return e
            }, setTextEnabled:function (a) {
                e = a
            }, isFoEnabled:function () {
                return f
            }, setFoEnabled:function (a) {
                f = a
            }, save:function () {
                u.push(i);
                i = mxUtils.clone(i)
            }, restore:function () {
                i = u.pop()
            }, scale:function (a) {
                i.scale = i.scale * a;
                i.strokeWidth = i.strokeWidth * a
            }, translate:function (a, b) {
                i.dx = i.dx + a;
                i.dy = i.dy + b
            }, rotate:function (a, b, c, d, e) {
                d = d + i.dx;
                e = e + i.dy;
                d = d * i.scale;
                e = e * i.scale;
                if (b ^ c) {
                    var f = b ? d : 0, b = b ? -1 : 1, g = c ? e : 0, c =
                        c ? -1 : 1;
                    i.transform = i.transform + ("translate(" + r(f) + "," + r(g) + ")");
                    i.transform = i.transform + ("scale(" + r(b) + "," + r(c) + ")");
                    i.transform = i.transform + ("translate(" + r(-f) + " " + r(-g) + ")")
                }
                i.transform = i.transform + ("rotate(" + r(a) + "," + r(d) + "," + r(e) + ")")
            }, setStrokeWidth:function (a) {
                i.strokeWidth = a * i.scale
            }, setStrokeColor:function (a) {
                i.stroke = a
            }, setDashed:function (a) {
                i.dashed = a
            }, setDashPattern:function (a) {
                i.dashpattern = a
            }, setLineCap:function (a) {
                i.linecap = a
            }, setLineJoin:function (a) {
                i.linejoin = a
            }, setMiterLimit:function (a) {
                i.miterlimit =
                    a
            }, setFontSize:function (a) {
                i.fontSize = a
            }, setFontColor:function (a) {
                i.fontColor = a
            }, setFontFamily:function (a) {
                i.fontFamily = a
            }, setFontStyle:function (a) {
                i.fontStyle = a
            }, setAlpha:function (a) {
                i.alpha = a
            }, setFillColor:function (a) {
                i.fill = a;
                i.gradient = null
            }, setGradient:function (a, b, c, d, e, f, k) {
                if (a != null && b != null) {
                    c = i;
                    d = a;
                    e = b;
                    d.charAt(0) == "#" && (d = d.substring(1));
                    e.charAt(0) == "#" && (e = e.substring(1));
                    d = d.toLowerCase();
                    e = e.toLowerCase();
                    f = null;
                    if (k == null || k == mxConstants.DIRECTION_SOUTH)f = "s"; else if (k == mxConstants.DIRECTION_EAST)f =
                        "e"; else {
                        var l = d, d = e, e = l;
                        k == mxConstants.DIRECTION_NORTH ? f = "s" : k == mxConstants.DIRECTION_WEST && (f = "e")
                    }
                    d = d + "-" + e + "-" + f;
                    e = q[d];
                    if (e == null) {
                        e = g("linearGradient");
                        e.setAttribute("id", ++t);
                        e.setAttribute("x1", "0%");
                        e.setAttribute("y1", "0%");
                        e.setAttribute("x2", "0%");
                        e.setAttribute("y2", "0%");
                        k == null || k == mxConstants.DIRECTION_SOUTH ? e.setAttribute("y2", "100%") : k == mxConstants.DIRECTION_EAST ? e.setAttribute("x2", "100%") : k == mxConstants.DIRECTION_NORTH ? e.setAttribute("y1", "100%") : k == mxConstants.DIRECTION_WEST &&
                            e.setAttribute("x1", "100%");
                        k = g("stop");
                        k.setAttribute("offset", "0%");
                        k.setAttribute("style", "stop-color:" + a);
                        e.appendChild(k);
                        k = g("stop");
                        k.setAttribute("offset", "100%");
                        k.setAttribute("style", "stop-color:" + b);
                        e.appendChild(k);
                        h.appendChild(e);
                        q[d] = e
                    }
                    b = e.getAttribute("id");
                    c.gradient = b;
                    i.fill = a
                }
            }, setGlassGradient:function () {
                if (m == null) {
                    m = g("linearGradient");
                    m.setAttribute("id", "0");
                    m.setAttribute("x1", "0%");
                    m.setAttribute("y1", "0%");
                    m.setAttribute("x2", "0%");
                    m.setAttribute("y2", "100%");
                    var a = g("stop");
                    a.setAttribute("offset", "0%");
                    a.setAttribute("style", "stop-color:#ffffff;stop-opacity:0.9");
                    m.appendChild(a);
                    a = g("stop");
                    a.setAttribute("offset", "100%");
                    a.setAttribute("style", "stop-color:#ffffff;stop-opacity:0.1");
                    m.appendChild(a);
                    h.firstChild.nextSibling != null ? h.insertBefore(m, h.firstChild.nextSibling) : h.appendChild(m)
                }
                i.gradient = "0"
            }, rect:function (a, c, e, f) {
                a = a + i.dx;
                c = c + i.dy;
                n = g("rect");
                n.setAttribute("x", r(a * i.scale));
                n.setAttribute("y", r(c * i.scale));
                n.setAttribute("width", r(e * i.scale));
                n.setAttribute("height",
                    r(f * i.scale));
                !b && d && n.setAttribute("shape-rendering", "crispEdges")
            }, roundrect:function (a, c, e, f, h, k) {
                a = a + i.dx;
                c = c + i.dy;
                n = g("rect");
                n.setAttribute("x", r(a * i.scale));
                n.setAttribute("y", r(c * i.scale));
                n.setAttribute("width", r(e * i.scale));
                n.setAttribute("height", r(f * i.scale));
                h > 0 && n.setAttribute("rx", r(h * i.scale));
                k > 0 && n.setAttribute("ry", r(k * i.scale));
                !b && d && n.setAttribute("shape-rendering", "crispEdges")
            }, ellipse:function (a, b, c, d) {
                a = a + i.dx;
                b = b + i.dy;
                n = g("ellipse");
                n.setAttribute("cx", r((a + c / 2) * i.scale));
                n.setAttribute("cy", r((b + d / 2) * i.scale));
                n.setAttribute("rx", r(c / 2 * i.scale));
                n.setAttribute("ry", r(d / 2 * i.scale))
            }, image:function (b, d, e, f, h, k, l, m) {
                var h = c.convert(h), k = k != null ? k : true, l = l != null ? l : false, m = m != null ? m : false, b = b + i.dx, d = d + i.dy, n = g("image");
                n.setAttribute("x", r(b * i.scale));
                n.setAttribute("y", r(d * i.scale));
                n.setAttribute("width", r(e * i.scale));
                n.setAttribute("height", r(f * i.scale));
                mxClient.IS_VML ? n.setAttribute("xlink:href", h) : n.setAttributeNS(mxConstants.NS_XLINK, "xlink:href", h);
                k || n.setAttribute("preserveAspectRatio",
                    "none");
                i.alpha < 1 && n.setAttribute("opacity", i.alpha);
                h = i.transform;
                if (l || m) {
                    var o = k = 1, p = 0, q = 0;
                    if (l) {
                        k = -1;
                        p = -e - 2 * b
                    }
                    if (m) {
                        o = -1;
                        q = -f - 2 * d
                    }
                    h = h + ("scale(" + k + "," + o + ")translate(" + p + "," + q + ")")
                }
                h.length > 0 && n.setAttribute("transform", h);
                a.appendChild(n)
            }, text:function (c, d, h, k, l, m, n, o, p, q) {
                if (e) {
                    c = c + i.dx;
                    d = d + i.dy;
                    if (f && q == "html") {
                        p = g("g");
                        p.setAttribute("transform", i.transform + "scale(" + i.scale + "," + i.scale + ")");
                        i.alpha < 1 && p.setAttribute("opacity", i.alpha);
                        q = g("foreignObject");
                        q.setAttribute("x", Math.round(c));
                        q.setAttribute("y", Math.round(d));
                        q.setAttribute("width", Math.round(h));
                        q.setAttribute("height", Math.round(k));
                        q.appendChild(v(l, m, n));
                        p.appendChild(q)
                    } else {
                        var q = Math.floor(i.fontSize), p = g("g"), t = i.transform;
                        if (o) {
                            o = d + k / 2;
                            t = t + ("rotate(-90," + r((c + h / 2) * i.scale) + "," + r(o * i.scale) + ")")
                        }
                        t.length > 0 && p.setAttribute("transform", t);
                        i.alpha < 1 && p.setAttribute("opacity", i.alpha);
                        m = m == mxConstants.ALIGN_RIGHT ? "end" : m == mxConstants.ALIGN_CENTER ? "middle" : "start";
                        c = m == "end" ? c + Math.max(0, h - 2) : m == "middle" ? c + h / 2 : c + (h >
                            0 ? 2 : 0);
                        (i.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && p.setAttribute("font-weight", "bold");
                        (i.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && p.setAttribute("font-style", "italic");
                        (i.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && p.setAttribute("text-decoration", "underline");
                        m != "start" && p.setAttribute("text-anchor", m);
                        (!b || q != mxConstants.DEFAULT_FONTSIZE) && p.setAttribute("font-size", Math.floor(q * i.scale) + "px");
                        (!b || i.fontFamily != mxConstants.DEFAULT_FONTFAMILY) &&
                        p.setAttribute("font-family", i.fontFamily);
                        p.setAttribute("fill", i.fontColor);
                        h = l.split("\n");
                        l = q * 1.25;
                        m = k - (k > 0 ? q + (h.length - 1) * l : h.length * l - 1);
                        n == null || n == mxConstants.ALIGN_TOP ? d = Math.max(d - 3 * i.scale, d + m / 2 + (k > 0 ? l / 2 - 8 : 0)) : n == mxConstants.ALIGN_MIDDLE ? d = d + m / 2 : n == mxConstants.ALIGN_BOTTOM && (d = Math.min(d, d + m + 2 * i.scale));
                        d = d + q;
                        for (k = 0; k < h.length; k++) {
                            n = g("text");
                            n.setAttribute("x", r(c * i.scale));
                            n.setAttribute("y", r(d * i.scale));
                            mxUtils.write(n, h[k]);
                            p.appendChild(n);
                            d = d + q * 1.3
                        }
                    }
                    a.appendChild(p)
                }
            }, begin:function () {
                n =
                    g("path");
                o = [];
                p = null;
                l = true
            }, moveTo:function (a, b) {
                if (o != null) {
                    a = a + i.dx;
                    b = b + i.dy;
                    o.push("M " + r(a * i.scale) + " " + r(b * i.scale));
                    d && (p = new mxPoint(a, b))
                }
            }, lineTo:function (a, b) {
                if (o != null) {
                    a = a + i.dx;
                    b = b + i.dy;
                    o.push("L " + r(a * i.scale) + " " + r(b * i.scale));
                    if (d) {
                        p != null && (l && a != p.x && b != p.y) && (l = false);
                        p = new mxPoint(a, b)
                    }
                }
            }, quadTo:function (a, b, c, d) {
                if (o != null) {
                    a = a + i.dx;
                    b = b + i.dy;
                    c = c + i.dx;
                    d = d + i.dy;
                    o.push("Q " + r(a * i.scale) + " " + r(b * i.scale) + " " + r(c * i.scale) + " " + r(d * i.scale));
                    l = false
                }
            }, curveTo:function (a, b, c, d, e, f) {
                if (o !=
                    null) {
                    a = a + i.dx;
                    b = b + i.dy;
                    c = c + i.dx;
                    d = d + i.dy;
                    e = e + i.dx;
                    f = f + i.dy;
                    o.push("C " + r(a * i.scale) + " " + r(b * i.scale) + " " + r(c * i.scale) + " " + r(d * i.scale) + " " + r(e * i.scale) + " " + r(f * i.scale));
                    l = false
                }
            }, close:function () {
                o != null && o.push("Z")
            }, stroke:function () {
                w(n, i, false, true)
            }, fill:function () {
                w(n, i, true, false)
            }, fillAndStroke:function () {
                w(n, i, true, true)
            }, shadow:function (a, b) {
                this.save();
                this.setStrokeColor(a);
                if (b) {
                    this.setFillColor(a);
                    this.fillAndStroke()
                } else this.stroke();
                this.restore()
            }, clip:function () {
                if (n != null) {
                    if (o !=
                        null) {
                        n.setAttribute("d", o.join(" "));
                        o = null
                    }
                    var a = ++t, b = g("clipPath");
                    b.setAttribute("id", a);
                    b.appendChild(n);
                    h.appendChild(b);
                    i.clip = a
                }
            }}
    };
function mxGuide(a, b) {
    this.graph = a;
    this.setStates(b)
}
mxGuide.prototype.graph = null;
mxGuide.prototype.states = null;
mxGuide.prototype.horizontal = !0;
mxGuide.prototype.vertical = !0;
mxGuide.prototype.guideX = null;
mxGuide.prototype.guideY = null;
mxGuide.prototype.crisp = !0;
mxGuide.prototype.setStates = function (a) {
    this.states = a
};
mxGuide.prototype.isEnabledForEvent = function () {
    return true
};
mxGuide.prototype.getGuideTolerance = function () {
    return this.graph.gridSize * this.graph.view.scale / 2
};
mxGuide.prototype.createGuideShape = function () {
    var a = new mxPolyline([], mxConstants.GUIDE_COLOR, mxConstants.GUIDE_STROKEWIDTH);
    a.crisp = this.crisp;
    a.isDashed = true;
    return a
};
mxGuide.prototype.move = function (a, b, c) {
    if (this.states != null && (this.horizontal || this.vertical) && a != null && b != null) {
        var d = this.graph.getView().translate, e = this.graph.getView().scale, f = b.x, g = b.y, h = false, k = false, i = this.getGuideTolerance(), l = i, m = i, i = a.clone();
        i.x = i.x + b.x;
        i.y = i.y + b.y;
        for (var n = i.x, o = i.x + i.width, p = i.getCenterX(), q = i.y, t = i.y + i.height, u = i.getCenterY(), b = function (b) {
            var b = b + this.graph.panDx, c = false;
            if (Math.abs(b - p) < l) {
                f = b - a.getCenterX();
                l = Math.abs(b - p);
                c = true
            } else if (Math.abs(b - n) < l) {
                f = b - a.x;
                l = Math.abs(b - n);
                c = true
            } else if (Math.abs(b - o) < l) {
                f = b - a.x - a.width;
                l = Math.abs(b - o);
                c = true
            }
            if (c) {
                if (this.guideX == null) {
                    this.guideX = this.createGuideShape(true);
                    this.guideX.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
                    this.guideX.init(this.graph.getView().getOverlayPane());
                    if (this.graph.dialect == mxConstants.DIALECT_SVG) {
                        this.guideX.node.setAttribute("pointer-events", "none");
                        this.guideX.pipe.setAttribute("pointer-events", "none")
                    }
                }
                var d = this.graph.container,
                    b = b - this.graph.panDx;
                this.guideX.points = [new mxPoint(b, -this.graph.panDy), new mxPoint(b, d.scrollHeight - 3 - this.graph.panDy)]
            }
            h = h || c
        }, i = function (b) {
            var b = b + this.graph.panDy, c = false;
            if (Math.abs(b - u) < m) {
                g = b - a.getCenterY();
                m = Math.abs(b - u);
                c = true
            } else if (Math.abs(b - q) < m) {
                g = b - a.y;
                m = Math.abs(b - q);
                c = true
            } else if (Math.abs(b - t) < m) {
                g = b - a.y - a.height;
                m = Math.abs(b - t);
                c = true
            }
            if (c) {
                if (this.guideY == null) {
                    this.guideY = this.createGuideShape(false);
                    this.guideY.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML :
                        mxConstants.DIALECT_SVG;
                    this.guideY.init(this.graph.getView().getOverlayPane());
                    if (this.graph.dialect == mxConstants.DIALECT_SVG) {
                        this.guideY.node.setAttribute("pointer-events", "none");
                        this.guideY.pipe.setAttribute("pointer-events", "none")
                    }
                }
                var d = this.graph.container, b = b - this.graph.panDy;
                this.guideY.points = [new mxPoint(-this.graph.panDx, b), new mxPoint(d.scrollWidth - 3 - this.graph.panDx, b)]
            }
            k = k || c
        }, v = 0; v < this.states.length; v++) {
            var w = this.states[v];
            if (w != null) {
                if (this.horizontal) {
                    b.call(this, w.getCenterX());
                    b.call(this, w.x);
                    b.call(this, w.x + w.width)
                }
                if (this.vertical) {
                    i.call(this, w.getCenterY());
                    i.call(this, w.y);
                    i.call(this, w.y + w.height)
                }
            }
        }
        if (!h && this.guideX != null)this.guideX.node.style.visibility = "hidden"; else if (this.guideX != null) {
            this.guideX.node.style.visibility = "visible";
            this.guideX.redraw()
        }
        if (!k && this.guideY != null)this.guideY.node.style.visibility = "hidden"; else if (this.guideY != null) {
            this.guideY.node.style.visibility = "visible";
            this.guideY.redraw()
        }
        if (c) {
            if (!h) {
                c = a.x - (this.graph.snap(a.x / e - d.x) + d.x) *
                    e;
                f = this.graph.snap(f / e) * e - c
            }
            if (!k) {
                d = a.y - (this.graph.snap(a.y / e - d.y) + d.y) * e;
                g = this.graph.snap(g / e) * e - d
            }
        }
        b = new mxPoint(f, g)
    }
    return b
};
mxGuide.prototype.hide = function () {
    if (this.guideX != null)this.guideX.node.style.visibility = "hidden";
    if (this.guideY != null)this.guideY.node.style.visibility = "hidden"
};
mxGuide.prototype.destroy = function () {
    if (this.guideX != null) {
        this.guideX.destroy();
        this.guideX = null
    }
    if (this.guideY != null) {
        this.guideY.destroy();
        this.guideY = null
    }
};
function mxShape() {
}
mxShape.prototype.SVG_STROKE_TOLERANCE = 8;
mxShape.prototype.scale = 1;
mxShape.prototype.dialect = null;
mxShape.prototype.crisp = !1;
mxShape.prototype.roundedCrispSvg = !0;
mxShape.prototype.mixedModeHtml = !0;
mxShape.prototype.preferModeHtml = !0;
mxShape.prototype.bounds = null;
mxShape.prototype.points = null;
mxShape.prototype.node = null;
mxShape.prototype.label = null;
mxShape.prototype.innerNode = null;
mxShape.prototype.style = null;
mxShape.prototype.startOffset = null;
mxShape.prototype.endOffset = null;
mxShape.prototype.boundingBox = null;
mxShape.prototype.vmlNodes = ["node", "strokeNode", "fillNode", "shadowNode"];
mxShape.prototype.vmlScale = 1;
mxShape.prototype.strokewidth = 1;
mxShape.prototype.setCursor = function (a) {
    a == null && (a = "");
    this.cursor = a;
    if (this.innerNode != null)this.innerNode.style.cursor = a;
    if (this.node != null)this.node.style.cursor = a;
    if (this.pipe != null)this.pipe.style.cursor = a
};
mxShape.prototype.getCursor = function () {
    return this.cursor
};
mxShape.prototype.init = function (a) {
    if (this.node == null) {
        this.node = this.create(a);
        if (a != null) {
            a.appendChild(this.node);
            document.documentMode == 8 && mxUtils.isVml(this.node) && this.reparseVml()
        }
    }
    if (this.insertGradientNode != null) {
        this.insertGradient(this.insertGradientNode);
        this.insertGradientNode = null
    }
};
mxShape.prototype.reparseVml = function () {
    for (var a = 0; a < this.vmlNodes.length; a++)this[this.vmlNodes[a]] != null && this[this.vmlNodes[a]].setAttribute("id", "mxTemporaryReference-" + this.vmlNodes[a]);
    this.node.outerHTML = this.node.outerHTML;
    for (a = 0; a < this.vmlNodes.length; a++)if (this[this.vmlNodes[a]] != null) {
        this[this.vmlNodes[a]] = this.node.ownerDocument.getElementById("mxTemporaryReference-" + this.vmlNodes[a]);
        this[this.vmlNodes[a]].removeAttribute("id")
    }
};
mxShape.prototype.insertGradient = function (a) {
    if (a != null) {
        for (var b = 0, c = a.getAttribute("id"), d = document.getElementById(c); d != null && d.ownerSVGElement != this.node.ownerSVGElement;) {
            b++;
            c = a.getAttribute("id") + "-" + b;
            d = document.getElementById(c)
        }
        if (d == null) {
            a.setAttribute("id", c);
            this.node.ownerSVGElement.appendChild(a);
            d = a
        }
        if (d != null) {
            a = "url(#" + c + ")";
            b = this.innerNode != null ? this.innerNode : this.node;
            b != null && b.getAttribute("fill") != a && b.setAttribute("fill", a)
        }
    }
};
mxShape.prototype.isMixedModeHtml = function () {
    return this.mixedModeHtml && !this.isRounded && !this.isShadow && this.gradient == null && mxUtils.getValue(this.style, mxConstants.STYLE_GLASS, 0) == 0 && mxUtils.getValue(this.style, mxConstants.STYLE_ROTATION, 0) == 0
};
mxShape.prototype.create = function () {
    var a = null;
    return a = this.dialect == mxConstants.DIALECT_SVG ? this.createSvg() : this.dialect == mxConstants.DIALECT_STRICTHTML || this.preferModeHtml && this.dialect == mxConstants.DIALECT_PREFERHTML || this.isMixedModeHtml() && this.dialect == mxConstants.DIALECT_MIXEDHTML ? this.createHtml() : this.createVml()
};
mxShape.prototype.createHtml = function () {
    var a = document.createElement("DIV");
    this.configureHtmlShape(a);
    return a
};
mxShape.prototype.destroy = function () {
    if (this.node != null) {
        mxEvent.release(this.node);
        this.node.parentNode != null && this.node.parentNode.removeChild(this.node);
        if (this.node.glassOverlay) {
            this.node.glassOverlay.parentNode.removeChild(this.node.glassOverlay);
            this.node.glassOverlay = null
        }
        this.node = null
    }
};
mxShape.prototype.apply = function (a) {
    this.style = a = a.style;
    if (a != null) {
        this.fill = mxUtils.getValue(a, mxConstants.STYLE_FILLCOLOR, this.fill);
        this.gradient = mxUtils.getValue(a, mxConstants.STYLE_GRADIENTCOLOR, this.gradient);
        this.gradientDirection = mxUtils.getValue(a, mxConstants.STYLE_GRADIENT_DIRECTION, this.gradientDirection);
        this.opacity = mxUtils.getValue(a, mxConstants.STYLE_OPACITY, this.opacity);
        this.stroke = mxUtils.getValue(a, mxConstants.STYLE_STROKECOLOR, this.stroke);
        this.strokewidth = mxUtils.getNumber(a,
            mxConstants.STYLE_STROKEWIDTH, this.strokewidth);
        this.isShadow = mxUtils.getValue(a, mxConstants.STYLE_SHADOW, this.isShadow);
        this.isDashed = mxUtils.getValue(a, mxConstants.STYLE_DASHED, this.isDashed);
        this.spacing = mxUtils.getValue(a, mxConstants.STYLE_SPACING, this.spacing);
        this.startSize = mxUtils.getNumber(a, mxConstants.STYLE_STARTSIZE, this.startSize);
        this.endSize = mxUtils.getNumber(a, mxConstants.STYLE_ENDSIZE, this.endSize);
        this.isRounded = mxUtils.getValue(a, mxConstants.STYLE_ROUNDED, this.isRounded);
        this.startArrow =
            mxUtils.getValue(a, mxConstants.STYLE_STARTARROW, this.startArrow);
        this.endArrow = mxUtils.getValue(a, mxConstants.STYLE_ENDARROW, this.endArrow);
        this.rotation = mxUtils.getValue(a, mxConstants.STYLE_ROTATION, this.rotation);
        this.direction = mxUtils.getValue(a, mxConstants.STYLE_DIRECTION, this.direction);
        if (this.fill == "none")this.fill = null;
        if (this.gradient == "none")this.gradient = null;
        if (this.stroke == "none")this.stroke = null
    }
};
mxShape.prototype.createSvgGroup = function (a) {
    var b = document.createElementNS(mxConstants.NS_SVG, "g");
    this.innerNode = document.createElementNS(mxConstants.NS_SVG, a);
    this.configureSvgShape(this.innerNode);
    a == "rect" && (this.strokewidth * this.scale >= 1 && !this.isRounded) && this.innerNode.setAttribute("shape-rendering", "optimizeSpeed");
    this.shadowNode = this.createSvgShadow(this.innerNode);
    this.shadowNode != null && b.appendChild(this.shadowNode);
    b.appendChild(this.innerNode);
    return b
};
mxShape.prototype.createSvgShadow = function (a) {
    if (this.isShadow) {
        a = a.cloneNode(true);
        a.setAttribute("opacity", mxConstants.SHADOW_OPACITY);
        this.fill != null && this.fill != mxConstants.NONE && a.setAttribute("fill", mxConstants.SHADOWCOLOR);
        this.stroke != null && this.stroke != mxConstants.NONE && a.setAttribute("stroke", mxConstants.SHADOWCOLOR);
        return a
    }
    return null
};
mxShape.prototype.configureHtmlShape = function (a) {
    if (mxUtils.isVml(a))this.configureVmlShape(a); else {
        a.style.position = "absolute";
        a.style.overflow = "hidden";
        var b = this.stroke;
        if (b != null && b != mxConstants.NONE) {
            a.style.borderColor = b;
            if (this.isDashed)a.style.borderStyle = "dashed"; else if (this.strokewidth > 0)a.style.borderStyle = "solid";
            a.style.borderWidth = Math.ceil(this.strokewidth * this.scale) + "px"
        } else a.style.borderWidth = "0px";
        b = this.fill;
        a.style.background = "";
        b != null && b != mxConstants.NONE ? a.style.backgroundColor =
            b : this.points == null && this.configureTransparentBackground(a);
        this.opacity != null && mxUtils.setOpacity(a, this.opacity)
    }
};
mxShape.prototype.updateVmlFill = function (a, b, c, d, e) {
    a.color = b;
    if (e != null && e != 100) {
        a.opacity = e + "%";
        c != null && a.setAttribute("o:opacity2", e + "%")
    }
    if (c != null) {
        a.type = "gradient";
        a.color2 = c;
        b = "180";
        this.gradientDirection == mxConstants.DIRECTION_EAST ? b = "270" : this.gradientDirection == mxConstants.DIRECTION_WEST ? b = "90" : this.gradientDirection == mxConstants.DIRECTION_NORTH && (b = "0");
        a.angle = b
    }
};
mxShape.prototype.updateVmlStrokeNode = function (a) {
    if (this.strokeNode == null) {
        this.strokeNode = document.createElement("v:stroke");
        this.strokeNode.joinstyle = "miter";
        this.strokeNode.miterlimit = 4;
        a.appendChild(this.strokeNode)
    }
    if (this.opacity != null)this.strokeNode.opacity = this.opacity + "%";
    this.updateVmlDashStyle()
};
mxShape.prototype.updateVmlStrokeColor = function (a) {
    var b = this.stroke;
    if (b != null && b != mxConstants.NONE) {
        a.stroked = "true";
        a.strokecolor = b
    } else a.stroked = "false"
};
mxShape.prototype.configureVmlShape = function (a) {
    a.style.position = "absolute";
    this.updateVmlStrokeColor(a);
    a.style.background = "";
    var b = this.fill;
    if (b != null && b != mxConstants.NONE) {
        if (this.fillNode == null) {
            this.fillNode = document.createElement("v:fill");
            a.appendChild(this.fillNode)
        }
        this.updateVmlFill(this.fillNode, b, this.gradient, this.gradientDirection, this.opacity)
    } else {
        a.filled = "false";
        this.points == null && this.configureTransparentBackground(a)
    }
    this.updateVmlStrokeNode(a);
    this.isShadow && this.createVmlShadow(a);
    if (a.nodeName == "roundrect")try {
        var c = mxConstants.RECTANGLE_ROUNDING_FACTOR * 100;
        this.style != null && (c = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, c));
        a.setAttribute("arcsize", "" + c + "%")
    } catch (d) {
    }
};
mxShape.prototype.createVmlShadow = function (a) {
    if (this.shadowNode == null) {
        this.shadowNode = document.createElement("v:shadow");
        this.shadowNode.on = "true";
        this.shadowNode.color = mxConstants.SHADOWCOLOR;
        this.shadowNode.opacity = mxConstants.SHADOW_OPACITY * 100 + "%";
        this.shadowStrokeNode = document.createElement("v:stroke");
        this.shadowNode.appendChild(this.shadowStrokeNode);
        a.appendChild(this.shadowNode)
    }
};
mxShape.prototype.configureTransparentBackground = function (a) {
    a.style.background = "url('" + mxClient.imageBasePath + "/transparent.gif')"
};
mxShape.prototype.configureSvgShape = function (a) {
    var b = this.stroke;
    b != null && b != mxConstants.NONE ? a.setAttribute("stroke", b) : a.setAttribute("stroke", "none");
    b = this.fill;
    if (b != null && b != mxConstants.NONE)if (this.gradient != null) {
        var c = this.getGradientId(b, this.gradient);
        if (this.gradientNode != null && this.gradientNode.getAttribute("id") != c) {
            this.gradientNode = null;
            a.setAttribute("fill", "")
        }
        if (this.gradientNode == null) {
            this.gradientNode = this.createSvgGradient(c, b, this.gradient, a);
            a.setAttribute("fill", "url(#" +
                c + ")")
        }
    } else {
        this.gradientNode = null;
        a.setAttribute("fill", b)
    } else a.setAttribute("fill", "none");
    if (this.opacity != null) {
        a.setAttribute("fill-opacity", this.opacity / 100);
        a.setAttribute("stroke-opacity", this.opacity / 100)
    }
};
mxShape.prototype.getGradientId = function (a, b) {
    a.charAt(0) == "#" && (a = a.substring(1));
    b.charAt(0) == "#" && (b = b.substring(1));
    var a = a.toLowerCase(), b = b.toLowerCase(), c = null;
    if (this.gradientDirection == null || this.gradientDirection == mxConstants.DIRECTION_SOUTH)c = "south"; else if (this.gradientDirection == mxConstants.DIRECTION_EAST)c = "east"; else {
        var d = a, a = b, b = d;
        this.gradientDirection == mxConstants.DIRECTION_NORTH ? c = "south" : this.gradientDirection == mxConstants.DIRECTION_WEST && (c = "east")
    }
    return"mx-gradient-" + a + "-" +
        b + "-" + c
};
mxShape.prototype.createSvgPipe = function () {
    var a = document.createElementNS(mxConstants.NS_SVG, "path");
    a.setAttribute("pointer-events", "stroke");
    a.setAttribute("fill", "none");
    a.setAttribute("visibility", "hidden");
    a.setAttribute("stroke", mxClient.IS_OP ? "none" : "white");
    return a
};
mxShape.prototype.createSvgGradient = function (a, b, c) {
    var d = this.insertGradientNode;
    if (d == null) {
        d = document.createElementNS(mxConstants.NS_SVG, "linearGradient");
        d.setAttribute("id", a);
        d.setAttribute("x1", "0%");
        d.setAttribute("y1", "0%");
        d.setAttribute("x2", "0%");
        d.setAttribute("y2", "0%");
        this.gradientDirection == null || this.gradientDirection == mxConstants.DIRECTION_SOUTH ? d.setAttribute("y2", "100%") : this.gradientDirection == mxConstants.DIRECTION_EAST ? d.setAttribute("x2", "100%") : this.gradientDirection == mxConstants.DIRECTION_NORTH ?
            d.setAttribute("y1", "100%") : this.gradientDirection == mxConstants.DIRECTION_WEST && d.setAttribute("x1", "100%");
        a = document.createElementNS(mxConstants.NS_SVG, "stop");
        a.setAttribute("offset", "0%");
        a.setAttribute("style", "stop-color:" + b);
        d.appendChild(a);
        a = document.createElementNS(mxConstants.NS_SVG, "stop");
        a.setAttribute("offset", "100%");
        a.setAttribute("style", "stop-color:" + c);
        d.appendChild(a)
    }
    return this.insertGradientNode = d
};
mxShape.prototype.createPoints = function (a, b, c, d) {
    var e = d ? this.bounds.x : 0, d = d ? this.bounds.y : 0, f = this.crisp && this.dialect == mxConstants.DIALECT_SVG && mxClient.IS_IE ? 0.5 : 0;
    if (isNaN(this.points[0].x) || isNaN(this.points[0].y))return null;
    var g = mxConstants.LINE_ARCSIZE * this.scale, h = this.points[0];
    if (this.startOffset != null) {
        h = h.clone();
        h.x = h.x + this.startOffset.x;
        h.y = h.y + this.startOffset.y
    }
    for (var a = a + " " + (Math.round(h.x - e) + f) + " " + (Math.round(h.y - d) + f) + " ", k = 1; k < this.points.length; k++) {
        var h = this.points[k -
            1], i = this.points[k];
        if (isNaN(i.x) || isNaN(i.y))return null;
        if (k == this.points.length - 1 && this.endOffset != null) {
            i = i.clone();
            i.x = i.x + this.endOffset.x;
            i.y = i.y + this.endOffset.y
        }
        var l = h.x - i.x, h = h.y - i.y;
        if (this.isRounded && k < this.points.length - 1 && (l != 0 || h != 0) && this.scale > 0.3) {
            var m = Math.sqrt(l * l + h * h), l = l * Math.min(g, m / 2) / m, h = h * Math.min(g, m / 2) / m, a = a + (b + " " + (Math.round(i.x + l - e) + f) + " " + (Math.round(i.y + h - d) + f) + " "), h = this.points[k + 1], l = h.x - i.x, h = h.y - i.y, m = Math.max(1, Math.sqrt(l * l + h * h));
            if (m != 0) {
                l = l * Math.min(g, m /
                    2) / m;
                h = h * Math.min(g, m / 2) / m;
                a = a + (c + " " + Math.round(i.x - e) + " " + Math.round(i.y - d) + " " + Math.round(i.x - e) + "," + Math.round(i.y - d) + " " + (Math.round(i.x + l - e) + f) + " " + (Math.round(i.y + h - d) + f) + " ")
            }
        } else a = a + (b + " " + (Math.round(i.x - e) + f) + " " + (Math.round(i.y - d) + f) + " ")
    }
    return a
};
mxShape.prototype.updateHtmlShape = function (a) {
    if (a != null) {
        if (mxUtils.isVml(a))this.updateVmlShape(a); else {
            var b = Math.ceil(this.strokewidth * this.scale);
            a.style.borderWidth = Math.max(1, b) + "px";
            if (this.bounds != null && !isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height)) {
                a.style.left = Math.round(this.bounds.x - b / 2) + "px";
                a.style.top = Math.round(this.bounds.y - b / 2) + "px";
                document.compatMode == "CSS1Compat" && (b = -b);
                a.style.width = Math.round(Math.max(0, this.bounds.width +
                    b)) + "px";
                a.style.height = Math.round(Math.max(0, this.bounds.height + b)) + "px";
                a.style.visibility = this.bounds.width == 0 || this.bounds.height == 0 ? "hidden" : "visible"
            }
        }
        if (this.points != null && this.bounds != null && !mxUtils.isVml(a)) {
            if (this.divContainer == null)this.divContainer = a;
            for (; this.divContainer.firstChild != null;) {
                mxEvent.release(this.divContainer.firstChild);
                this.divContainer.removeChild(this.divContainer.firstChild)
            }
            a.style.borderStyle = "";
            a.style.background = "";
            if (this.points.length == 2) {
                var c = this.points[0],
                    b = this.points[1], d = b.x - c.x, e = b.y - c.y;
                if (d == 0 || e == 0)a.style.borderStyle = "solid"; else {
                    a.style.width = Math.round(this.bounds.width + 1) + "px";
                    a.style.height = Math.round(this.bounds.height + 1) + "px";
                    for (var b = 1 + Math.sqrt(d * d + e * e) / (8 * this.scale), f = d / b, g = e / b, a = c.x - this.bounds.x, c = c.y - this.bounds.y, d = 0; d < b; d++) {
                        e = document.createElement("DIV");
                        e.style.position = "absolute";
                        e.style.overflow = "hidden";
                        e.style.left = Math.round(a) + "px";
                        e.style.top = Math.round(c) + "px";
                        e.style.width = Math.max(1, 2 * this.scale) + "px";
                        e.style.height =
                            Math.max(1, 2 * this.scale) + "px";
                        e.style.backgroundColor = this.stroke;
                        this.divContainer.appendChild(e);
                        a = a + f;
                        c = c + g
                    }
                }
            } else if (this.points.length == 3) {
                c = this.points[1];
                d = "0";
                e = "1";
                b = "0";
                f = "1";
                if (c.x == this.bounds.x) {
                    f = "0";
                    b = "1"
                }
                if (c.y == this.bounds.y) {
                    d = "1";
                    e = "0"
                }
                a.style.borderStyle = "solid";
                a.style.borderWidth = d + " " + f + " " + e + " " + b + "px"
            } else {
                a.style.width = Math.round(this.bounds.width + 1) + "px";
                a.style.height = Math.round(this.bounds.height + 1) + "px";
                g = this.points[0];
                for (d = 1; d < this.points.length; d++) {
                    f = this.points[d];
                    e = document.createElement("DIV");
                    e.style.position = "absolute";
                    e.style.overflow = "hidden";
                    e.style.borderColor = this.stroke;
                    e.style.borderStyle = "solid";
                    e.style.borderWidth = "1 0 0 1px";
                    a = Math.min(f.x, g.x) - this.bounds.x;
                    c = Math.min(f.y, g.y) - this.bounds.y;
                    b = Math.max(1, Math.abs(f.x - g.x));
                    g = Math.max(1, Math.abs(f.y - g.y));
                    e.style.left = a + "px";
                    e.style.top = c + "px";
                    e.style.width = b + "px";
                    e.style.height = g + "px";
                    this.divContainer.appendChild(e);
                    g = f
                }
            }
        }
    }
};
mxShape.prototype.updateVmlDashStyle = function () {
    if (this.isDashed) {
        if (this.strokeNode.dashstyle != "dash")this.strokeNode.dashstyle = "dash"
    } else if (this.strokeNode.dashstyle != "solid")this.strokeNode.dashstyle = "solid"
};
mxShape.prototype.updateVmlShape = function (a) {
    a.strokeweight = this.strokewidth * this.scale + "px";
    this.strokeNode != null && this.updateVmlDashStyle();
    if (this.shadowNode != null) {
        var b = Math.round(mxConstants.SHADOW_OFFSET_X * this.scale), c = Math.round(mxConstants.SHADOW_OFFSET_Y * this.scale);
        this.shadowNode.offset = b + "px," + c + "px"
    }
    if (this.bounds != null && !isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height)) {
        var b = 1, c = Math.max(0, Math.round(this.bounds.width)), d = Math.max(0,
            Math.round(this.bounds.height));
        if (this.points != null || a.nodeName == "shape" || a.nodeName == "group") {
            var e = a.parentNode.nodeName == "group" ? 1 : this.vmlScale;
            a.coordsize = c * e + "," + d * e
        } else if (a.parentNode.nodeName == "group")b = this.vmlScale;
        if (a.parentNode != this.node) {
            a.style.left = Math.round(this.bounds.x * b) + "px";
            a.style.top = Math.round(this.bounds.y * b) + "px";
            if (this.points == null)if (this.rotation != null && this.rotation != 0)a.style.rotation = this.rotation; else if (a.style.rotation != null)a.style.rotation = ""
        }
        a.style.width =
            c * b + "px";
        a.style.height = d * b + "px"
    }
    if (this.points != null && a.nodeName != "group")if (a.nodeName == "polyline" && a.points != null) {
        b = "";
        for (c = 0; c < this.points.length; c++)b = b + (this.points[c].x + "," + this.points[c].y + " ");
        a.points.value = b;
        a.style.left = null;
        a.style.top = null;
        a.style.width = null;
        a.style.height = null
    } else if (this.bounds != null) {
        b = this.createPoints("m", "l", "c", true);
        if (this.style != null && this.style[mxConstants.STYLE_SMOOTH]) {
            d = this.points;
            e = d.length;
            if (e > 3) {
                for (var f = this.bounds.x, g = this.bounds.y, b = "m " + Math.round(d[0].x -
                    f) + " " + Math.round(d[0].y - g) + " qb", c = 1; c < e - 1; c++)b = b + (" " + Math.round(d[c].x - f) + " " + Math.round(d[c].y - g));
                b = b + (" nf l " + Math.round(d[e - 1].x - f) + " " + Math.round(d[e - 1].y - g))
            }
        }
        a.path = b + " e"
    }
};
mxShape.prototype.updateSvgBounds = function (a) {
    var b = this.bounds.width, c = this.bounds.height;
    if (this.isRounded && (!this.crisp || !mxClient.IS_IE)) {
        a.setAttribute("x", this.bounds.x);
        a.setAttribute("y", this.bounds.y)
    } else {
        var d = this.crisp && mxClient.IS_IE ? 0.5 : 0;
        a.setAttribute("x", Math.round(this.bounds.x) + d);
        a.setAttribute("y", Math.round(this.bounds.y) + d);
        b = Math.round(b);
        c = Math.round(c)
    }
    a.setAttribute("width", b);
    a.setAttribute("height", c);
    if (this.isRounded) {
        d = mxConstants.RECTANGLE_ROUNDING_FACTOR * 100;
        this.style !=
            null && (d = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, d) / 100);
        b = Math.min(b * d, c * d);
        a.setAttribute("rx", b);
        a.setAttribute("ry", b)
    }
    this.updateSvgTransform(a, a == this.shadowNode)
};
mxShape.prototype.updateSvgPath = function (a) {
    var b = this.createPoints("M", "L", "C", false);
    if (b != null) {
        a.setAttribute("d", b);
        if (this.style != null && this.style[mxConstants.STYLE_SMOOTH]) {
            var b = this.points, c = b.length;
            if (c > 3) {
                for (var d = "M " + b[0].x + " " + b[0].y + " ", d = d + (" Q " + b[1].x + " " + b[1].y + "  " + b[2].x + " " + b[2].y), e = 3; e < c; e++)d = d + (" T " + b[e].x + " " + b[e].y);
                a.setAttribute("d", d)
            }
        }
        a.removeAttribute("x");
        a.removeAttribute("y");
        a.removeAttribute("width");
        a.removeAttribute("height")
    }
};
mxShape.prototype.updateSvgScale = function (a) {
    a.setAttribute("stroke-width", Math.round(Math.max(1, this.strokewidth * this.scale)));
    if (this.isDashed) {
        var b = Math.max(1, Math.round(3 * this.scale * this.strokewidth));
        a.setAttribute("stroke-dasharray", b + " " + b)
    }
    this.crisp && (this.roundedCrispSvg || this.isRounded != true) && (this.rotation == null || this.rotation == 0) ? a.setAttribute("shape-rendering", "crispEdges") : a.removeAttribute("shape-rendering")
};
mxShape.prototype.updateSvgShape = function (a) {
    this.points != null && this.points[0] != null ? this.updateSvgPath(a) : this.bounds != null && this.updateSvgBounds(a);
    this.updateSvgScale(a)
};
mxShape.prototype.getSvgShadowTransform = function () {
    return"translate(" + mxConstants.SHADOW_OFFSET_X * this.scale + " " + mxConstants.SHADOW_OFFSET_Y * this.scale + ")"
};
mxShape.prototype.updateSvgTransform = function (a, b) {
    var c = b ? this.getSvgShadowTransform() : "";
    this.rotation != null && this.rotation != 0 ? a.setAttribute("transform", "rotate(" + this.rotation + "," + (this.bounds.x + this.bounds.width / 2) + "," + (this.bounds.y + this.bounds.height / 2) + ") " + c) : b ? a.setAttribute("transform", c) : a.removeAttribute("transform")
};
mxShape.prototype.reconfigure = function () {
    if (this.dialect == mxConstants.DIALECT_SVG) {
        this.innerNode != null ? this.configureSvgShape(this.innerNode) : this.configureSvgShape(this.node);
        if (this.insertGradientNode != null) {
            this.insertGradient(this.insertGradientNode);
            this.insertGradientNode = null
        }
    } else {
        if (mxUtils.isVml(this.node)) {
            this.node.style.visibility = "hidden";
            this.configureVmlShape(this.node)
        } else {
            this.node.style.visibility = "hidden";
            this.configureHtmlShape(this.node)
        }
        this.node.style.visibility = "visible"
    }
};
mxShape.prototype.redraw = function () {
    this.updateBoundingBox();
    if (this.dialect == mxConstants.DIALECT_SVG)this.redrawSvg(); else if (mxUtils.isVml(this.node)) {
        this.node.style.visibility = "hidden";
        this.redrawVml();
        this.node.style.visibility = "visible"
    } else this.redrawHtml()
};
mxShape.prototype.updateBoundingBox = function () {
    if (this.bounds != null) {
        var a = this.createBoundingBox();
        this.augmentBoundingBox(a);
        var b = Number(mxUtils.getValue(this.style, mxConstants.STYLE_ROTATION, 0));
        b != 0 && (a = mxUtils.getBoundingBox(a, b));
        a.x = Math.floor(a.x);
        a.y = Math.floor(a.y);
        a.width = Math.ceil(a.width);
        a.height = Math.ceil(a.height);
        this.boundingBox = a
    }
};
mxShape.prototype.createBoundingBox = function () {
    return this.bounds.clone()
};
mxShape.prototype.augmentBoundingBox = function (a) {
    if (this.isShadow) {
        a.width = a.width + Math.ceil(mxConstants.SHADOW_OFFSET_X * this.scale);
        a.height = a.height + Math.ceil(mxConstants.SHADOW_OFFSET_Y * this.scale)
    }
    var b = Math.ceil(this.strokewidth * this.scale);
    a.grow(Math.ceil(b / 2))
};
mxShape.prototype.redrawSvg = function () {
    if (this.innerNode != null) {
        this.updateSvgShape(this.innerNode);
        this.shadowNode != null && this.updateSvgShape(this.shadowNode)
    } else {
        this.updateSvgShape(this.node);
        this.shadowNode != null && this.shadowNode.setAttribute("transform", this.getSvgShadowTransform())
    }
    this.updateSvgGlassPane()
};
mxShape.prototype.updateVmlGlassPane = function () {
    if (this.bounds != null && this.node.nodeName == "group" && this.style != null && mxUtils.getValue(this.style, mxConstants.STYLE_GLASS, 0) == 1) {
        if (this.node.glassOverlay == null) {
            this.node.glassOverlay = document.createElement("v:shape");
            this.node.glassOverlay.setAttribute("filled", "true");
            this.node.glassOverlay.setAttribute("fillcolor", "white");
            this.node.glassOverlay.setAttribute("stroked", "false");
            var a = document.createElement("v:fill");
            a.setAttribute("type", "gradient");
            a.setAttribute("color", "white");
            a.setAttribute("color2", "white");
            a.setAttribute("opacity", "90%");
            a.setAttribute("o:opacity2", "15%");
            a.setAttribute("angle", "180");
            this.node.glassOverlay.appendChild(a);
            this.node.appendChild(this.node.glassOverlay)
        }
        var a = this.bounds, b = Math.ceil(this.strokewidth * this.scale / 2 + 1), b = "m " + -b + " " + -b + " l " + -b + " " + Math.round(a.height * 0.4) + " c " + Math.round(a.width * 0.3) + " " + Math.round(a.height * 0.6) + " " + Math.round(a.width * 0.7) + " " + Math.round(a.height * 0.6) + " " + Math.round(a.width +
            b) + " " + Math.round(a.height * 0.4) + " l " + Math.round(a.width + b) + " " + -b + " x e";
        this.node.glassOverlay.style.position = "absolute";
        this.node.glassOverlay.style.width = a.width + "px";
        this.node.glassOverlay.style.height = a.height + "px";
        this.node.glassOverlay.setAttribute("coordsize", Math.round(this.bounds.width) + "," + Math.round(this.bounds.height));
        this.node.glassOverlay.setAttribute("path", b)
    } else if (this.node.glassOverlay != null) {
        this.node.glassOverlay.parentNode.removeChild(this.node.glassOverlay);
        this.node.glassOverlay =
            null
    }
};
mxShape.prototype.updateSvgGlassPane = function () {
    if (this.node.nodeName == "g" && this.style != null && mxUtils.getValue(this.style, mxConstants.STYLE_GLASS, 0) == 1) {
        if (this.node.glassOverlay == null) {
            if (this.node.ownerSVGElement.glassGradient == null) {
                var a = document.createElementNS(mxConstants.NS_SVG, "linearGradient");
                a.setAttribute("x1", "0%");
                a.setAttribute("y1", "0%");
                a.setAttribute("x2", "0%");
                a.setAttribute("y2", "100%");
                var b = document.createElementNS(mxConstants.NS_SVG, "stop");
                b.setAttribute("offset", "0%");
                b.setAttribute("style",
                    "stop-color:#ffffff;stop-opacity:0.9");
                a.appendChild(b);
                b = document.createElementNS(mxConstants.NS_SVG, "stop");
                b.setAttribute("offset", "100%");
                b.setAttribute("style", "stop-color:#ffffff;stop-opacity:0.1");
                a.appendChild(b);
                for (b = 0; document.getElementById("mx-glass-gradient-" + b) != null;)b++;
                a.setAttribute("id", "mx-glass-gradient-" + b);
                this.node.ownerSVGElement.appendChild(a);
                this.node.ownerSVGElement.glassGradient = a
            }
            this.node.glassOverlay = document.createElementNS(mxConstants.NS_SVG, "path");
            this.node.glassOverlay.setAttribute("style",
                "fill:url(#" + this.node.ownerSVGElement.glassGradient.getAttribute("id") + ");");
            this.node.appendChild(this.node.glassOverlay)
        }
        a = this.bounds;
        b = Math.ceil(this.strokewidth * this.scale / 2);
        this.node.glassOverlay.setAttribute("d", "m " + (a.x - b) + "," + (a.y - b) + " L " + (a.x - b) + "," + (a.y + a.height * 0.4) + " Q " + (a.x + a.width * 0.5) + "," + (a.y + a.height * 0.7) + " " + (a.x + a.width + b) + "," + (a.y + a.height * 0.4) + " L " + (a.x + a.width + b) + "," + (a.y - b) + " z")
    } else if (this.node.glassOverlay != null) {
        this.node.glassOverlay.parentNode.removeChild(this.node.glassOverlay);
        this.node.glassOverlay = null
    }
};
mxShape.prototype.redrawVml = function () {
    this.node.style.visibility = "hidden";
    this.updateVmlShape(this.node);
    this.updateVmlGlassPane();
    this.node.style.visibility = "visible"
};
mxShape.prototype.redrawHtml = function () {
    this.updateHtmlShape(this.node)
};
mxShape.prototype.getRotation = function () {
    var a = this.rotation || 0;
    this.direction != null && (this.direction == "north" ? a = a + 270 : this.direction == "west" ? a = a + 180 : this.direction == "south" && (a = a + 90));
    return a
};
mxShape.prototype.createPath = function (a) {
    var b = this.bounds.x, c = this.bounds.y, d = this.bounds.width, e = this.bounds.height, f = 0;
    if (this.direction == "north" || this.direction == "south")var f = (d - e) / 2, b = b + f, c = c + (e - d) / 2, g = d, d = e, e = g;
    var h = this.getRotation(), g = null;
    if (this.dialect == mxConstants.DIALECT_SVG) {
        g = new mxPath("svg");
        g.setTranslate(b, c);
        if (h != 0) {
            var f = this.bounds.getCenterX(), k = this.bounds.getCenterY(), h = "rotate(" + h + " " + f + " " + k + ")";
            this.innerNode != null && this.innerNode.setAttribute("transform", h);
            this.foreground !=
                null && this.foreground.setAttribute("transform", h);
            this.shadowNode != null && this.shadowNode.setAttribute("transform", this.getSvgShadowTransform() + " " + h)
        }
    } else {
        g = new mxPath("vml");
        g.setTranslate(f, -f);
        g.scale = this.vmlScale;
        if (h != 0)this.node.style.rotation = h
    }
    this.redrawPath(g, b, c, d, e, a);
    return g.getPath()
};
mxShape.prototype.redrawPath = function () {
};
function mxStencil(a) {
    this.desc = a;
    this.parseDescription();
    this.parseConstraints()
}
mxStencil.prototype.desc = null;
mxStencil.prototype.constraints = null;
mxStencil.prototype.aspect = null;
mxStencil.prototype.w0 = null;
mxStencil.prototype.h0 = null;
mxStencil.prototype.bgNode = null;
mxStencil.prototype.fgNode = null;
mxStencil.prototype.strokewidth = null;
mxStencil.prototype.parseDescription = function () {
    this.fgNode = this.desc.getElementsByTagName("foreground")[0];
    this.bgNode = this.desc.getElementsByTagName("background")[0];
    this.w0 = Number(this.desc.getAttribute("w") || 100);
    this.h0 = Number(this.desc.getAttribute("h") || 100);
    var a = this.desc.getAttribute("aspect");
    this.aspect = a != null ? a : "variable";
    a = this.desc.getAttribute("strokewidth");
    this.strokewidth = a != null ? a : "1"
};
mxStencil.prototype.parseConstraints = function () {
    var a = this.desc.getElementsByTagName("connections")[0];
    if (a != null) {
        a = mxUtils.getChildNodes(a);
        if (a != null && a.length > 0) {
            this.constraints = [];
            for (var b = 0; b < a.length; b++)this.constraints.push(this.parseConstraint(a[b]))
        }
    }
};
mxStencil.prototype.parseConstraint = function (a) {
    var b = Number(a.getAttribute("x")), c = Number(a.getAttribute("y")), a = a.getAttribute("perimeter") == "1";
    return new mxConnectionConstraint(new mxPoint(b, c), a)
};
mxStencil.prototype.evaluateAttribute = function (a, b, c) {
    b = a.getAttribute(b);
    if (b == null) {
        a = mxUtils.getTextContent(a);
        if (a != null) {
            a = mxUtils.eval(a);
            typeof a == "function" && (b = a(c))
        }
    }
    return b
};
mxStencil.prototype.renderDom = function (a, b, c, d) {
    var e = a.dialect != mxConstants.DIALECT_SVG, f = document.documentMode == 8 ? 1 : a.vmlScale, g = a.rotation || 0, h = false, k = a.style[mxConstants.STYLE_STENCIL_FLIPH], i = a.style[mxConstants.STYLE_STENCIL_FLIPV];
    if (k ? !i : i)g = g * -1;
    if (a.direction != null) {
        a.direction == "north" ? g = g + 270 : a.direction == "west" ? g = g + 180 : a.direction == "south" && (g = g + 90);
        h = a.direction == "north" || a.direction == "south"
    }
    if (k && i) {
        g = g + 180;
        i = k = false
    }
    var l = "";
    if (e) {
        if (k)c.style.flip = "x"; else if (i)c.style.flip = "y";
        if (g != 0)c.style.rotation = g
    } else {
        if (k || i) {
            var m = 1, n = 1, o = 0, p = 0;
            if (k) {
                m = -1;
                o = -b.width - 2 * b.x
            }
            if (i) {
                n = -1;
                p = -b.height - 2 * b.y
            }
            l = "scale(" + m + " " + n + ") translate(" + o + " " + p + ")"
        }
        if (g != 0) {
            k = b.getCenterX();
            i = b.getCenterY();
            l = l + (" rotate(" + g + " " + k + " " + i + ")")
        }
    }
    var q = d == null;
    if (this.bgNode != null || this.fgNode != null) {
        var t = e && d == null ? 0 : b.x, u = e && d == null ? 0 : b.y, m = b.width / this.w0, n = b.height / this.h0;
        this.lastMoveY = this.lastMoveX = 0;
        if (h) {
            n = b.width / this.h0;
            m = b.height / this.w0;
            g = (b.width - b.height) / 2;
            t = t + g;
            u = u - g
        }
        if (this.aspect ==
            "fixed") {
            m = n = Math.min(m, n);
            if (h) {
                t = t + (b.height - this.w0 * m) / 2;
                u = u + (b.width - this.h0 * n) / 2
            } else {
                t = t + (b.width - this.w0 * m) / 2;
                u = u + (b.height - this.h0 * n) / 2
            }
        }
        if (e) {
            m = m * f;
            n = n * f;
            t = t * f;
            u = u * f
        }
        var v = Math.min(m, n), w = [], r = d != null ? d : {fillColorAssigned:false, fill:a.fill, stroke:a.stroke, strokeWidth:this.strokewidth == "inherit" ? Number(a.strokewidth) * a.scale : Number(this.strokewidth) * v / (e ? f : 1), dashed:a.isDashed, dashpattern:[3, 3], alpha:a.opacity, linejoin:"miter", fontColor:"#000000", fontSize:mxConstants.DEFAULT_FONTSIZE, fontFamily:mxConstants.DEFAULT_FONTFAMILY,
            fontStyle:0}, s = null, y = null, B = function (b, c) {
            var d = Math.max(1, c.strokeWidth);
            if (e) {
                b.strokeweight = Math.round(d) + "px";
                if (c.fill != null) {
                    var d = !c.fillColorAssigned ? a.gradient : null, f = document.createElement("v:fill");
                    a.updateVmlFill(f, c.fill, d, a.gradientDirection, c.alpha);
                    b.appendChild(f)
                } else b.filled = "false";
                if (c.stroke != null) {
                    b.stroked = "true";
                    b.strokecolor = c.stroke
                } else b.stroked = "false";
                b.style.position = "absolute"
            } else {
                b.setAttribute("stroke-width", d);
                c.fill != null && c.fillColorAssigned && b.setAttribute("fill",
                    c.fill);
                c.stroke != null && b.setAttribute("stroke", c.stroke)
            }
        }, z = function (a) {
            s != null && y != null && y.push(a)
        }, x = function (a) {
            return e ? Math.round(a) : a
        }, C = function (d) {
            var g = d.nodeName, h = g == "fill", i = g == "stroke", k = g == "fillstroke";
            if (g == "save") {
                w.push(r);
                r = mxUtils.clone(r)
            } else if (g == "restore")r = w.pop(); else if (g == "path") {
                y = [];
                if (e) {
                    s = document.createElement("v:shape");
                    B.call(this, s, r);
                    k = Math.round(b.width) * f;
                    g = Math.round(b.height) * f;
                    s.style.width = k + "px";
                    s.style.height = g + "px";
                    s.coordsize = k + "," + g
                } else {
                    s = document.createElementNS(mxConstants.NS_SVG,
                        "path");
                    B.call(this, s, r);
                    l.length > 0 && s.setAttribute("transform", l);
                    d.getAttribute("crisp") == "1" && s.setAttribute("shape-rendering", "crispEdges")
                }
                for (d = d.firstChild; d != null;) {
                    d.nodeType == mxConstants.NODETYPE_ELEMENT && C.call(this, d);
                    d = d.nextSibling
                }
                if (e) {
                    z("e");
                    s.path = y.join("")
                } else s.setAttribute("d", y.join(""))
            } else if (g == "move") {
                h = e ? "m" : "M";
                this.lastMoveX = x(t + Number(d.getAttribute("x")) * m);
                this.lastMoveY = x(u + Number(d.getAttribute("y")) * n);
                z(h + " " + this.lastMoveX + " " + this.lastMoveY)
            } else if (g == "line") {
                h =
                    e ? "l" : "L";
                this.lastMoveX = x(t + Number(d.getAttribute("x")) * m);
                this.lastMoveY = x(u + Number(d.getAttribute("y")) * n);
                z(h + " " + this.lastMoveX + " " + this.lastMoveY)
            } else if (g == "quad")if (e) {
                var h = this.lastMoveX, o = this.lastMoveY, i = t + Number(d.getAttribute("x1")) * m, g = u + Number(d.getAttribute("y1")) * n, k = t + Number(d.getAttribute("x2")) * m, d = u + Number(d.getAttribute("y2")) * n, o = o + 2 / 3 * (g - o), p = k + 2 / 3 * (i - k), g = d + 2 / 3 * (g - d);
                z("c " + Math.round(h + 2 / 3 * (i - h)) + " " + Math.round(o) + " " + Math.round(p) + " " + Math.round(g) + " " + Math.round(k) + " " +
                    Math.round(d));
                this.lastMoveX = k;
                this.lastMoveY = d
            } else {
                this.lastMoveX = t + Number(d.getAttribute("x2")) * m;
                this.lastMoveY = u + Number(d.getAttribute("y2")) * n;
                z("Q " + (t + Number(d.getAttribute("x1")) * m) + " " + (u + Number(d.getAttribute("y1")) * n) + " " + this.lastMoveX + " " + this.lastMoveY)
            } else if (g == "curve") {
                h = e ? "c" : "C";
                this.lastMoveX = x(t + Number(d.getAttribute("x3")) * m);
                this.lastMoveY = x(u + Number(d.getAttribute("y3")) * n);
                z(h + " " + x(t + Number(d.getAttribute("x1")) * m) + " " + x(u + Number(d.getAttribute("y1")) * n) + " " + x(t + Number(d.getAttribute("x2")) *
                    m) + " " + x(u + Number(d.getAttribute("y2")) * n) + " " + this.lastMoveX + " " + this.lastMoveY)
            } else if (g == "close")z(e ? "x" : "Z"); else if (g == "rect" || g == "roundrect") {
                o = g == "roundrect";
                i = x(t + Number(d.getAttribute("x")) * m);
                h = x(u + Number(d.getAttribute("y")) * n);
                k = x(Number(d.getAttribute("w")) * m);
                g = x(Number(d.getAttribute("h")) * n);
                p = d.getAttribute("arcsize");
                p == 0 && (p = mxConstants.RECTANGLE_ROUNDING_FACTOR * 100);
                if (e) {
                    s = document.createElement(o ? "v:roundrect" : "v:rect");
                    s.style.left = i + "px";
                    s.style.top = h + "px";
                    s.style.width = k +
                        "px";
                    s.style.height = g + "px";
                    o && s.setAttribute("arcsize", "" + p + "%")
                } else {
                    s = document.createElementNS(mxConstants.NS_SVG, "rect");
                    s.setAttribute("x", i);
                    s.setAttribute("y", h);
                    s.setAttribute("width", k);
                    s.setAttribute("height", g);
                    if (o) {
                        h = Number(p) / 100;
                        h = Math.min(k * h, g * h);
                        s.setAttribute("rx", h);
                        s.setAttribute("ry", h)
                    }
                    l.length > 0 && s.setAttribute("transform", l);
                    d.getAttribute("crisp") == "1" && s.setAttribute("shape-rendering", "crispEdges")
                }
                B.call(this, s, r)
            } else if (g == "ellipse") {
                i = x(t + Number(d.getAttribute("x")) *
                    m);
                h = x(u + Number(d.getAttribute("y")) * n);
                k = x(Number(d.getAttribute("w")) * m);
                g = x(Number(d.getAttribute("h")) * n);
                if (e) {
                    s = document.createElement("v:arc");
                    s.startangle = "0";
                    s.endangle = "360";
                    s.style.left = i + "px";
                    s.style.top = h + "px";
                    s.style.width = k + "px";
                    s.style.height = g + "px"
                } else {
                    s = document.createElementNS(mxConstants.NS_SVG, "ellipse");
                    s.setAttribute("cx", i + k / 2);
                    s.setAttribute("cy", h + g / 2);
                    s.setAttribute("rx", k / 2);
                    s.setAttribute("ry", g / 2);
                    l.length > 0 && s.setAttribute("transform", l)
                }
                B.call(this, s, r)
            } else if (g ==
                "arc") {
                var k = Number(d.getAttribute("rx")) * m, g = Number(d.getAttribute("ry")) * n, o = Number(d.getAttribute("x-axis-rotation")), p = Number(d.getAttribute("large-arc-flag")), A = Number(d.getAttribute("sweep-flag")), i = t + Number(d.getAttribute("x")) * m, h = u + Number(d.getAttribute("y")) * n;
                if (e) {
                    h = mxUtils.arcToCurves(this.lastMoveX, this.lastMoveY, k, g, o, p, A, i, h);
                    for (d = 0; d < h.length; d = d + 6) {
                        z("c " + Math.round(h[d]) + " " + Math.round(h[d + 1]) + " " + Math.round(h[d + 2]) + " " + Math.round(h[d + 3]) + " " + Math.round(h[d + 4]) + " " + Math.round(h[d +
                            5]));
                        this.lastMoveX = h[d + 4];
                        this.lastMoveY = h[d + 5]
                    }
                } else {
                    z("A " + k + "," + g + " " + o + " " + p + "," + A + " " + i + "," + h);
                    this.lastMoveX = t + i;
                    this.lastMoveY = u + h
                }
            } else if (g == "image") {
                o = this.evaluateAttribute(d, "src", a.state);
                if (o != null) {
                    i = x(t + Number(d.getAttribute("x")) * m);
                    h = x(u + Number(d.getAttribute("y")) * n);
                    k = x(Number(d.getAttribute("w")) * m);
                    g = x(Number(d.getAttribute("h")) * n);
                    p = d.getAttribute("flipH") == "1";
                    A = d.getAttribute("flipV") == "1";
                    if (e) {
                        s = document.createElement("v:image");
                        s.style.filter = "alpha(opacity=" + r.alpha +
                            ")";
                        s.style.left = i + "px";
                        s.style.top = h + "px";
                        s.style.width = k + "px";
                        s.style.height = g + "px";
                        s.src = o;
                        if (p && A)s.style.rotation = "180"; else if (p)s.style.flip = "x"; else if (A)s.style.flip = "y"
                    } else {
                        s = document.createElementNS(mxConstants.NS_SVG, "image");
                        s.setAttributeNS(mxConstants.NS_XLINK, "xlink:href", o);
                        s.setAttribute("opacity", r.alpha / 100);
                        s.setAttribute("x", i);
                        s.setAttribute("y", h);
                        s.setAttribute("width", k);
                        s.setAttribute("height", g);
                        s.setAttribute("preserveAspectRatio", "none");
                        if (p || A) {
                            var D = 1, E = 1, o = d = 0;
                            if (p) {
                                D =
                                    -1;
                                d = -k - 2 * i
                            }
                            if (A) {
                                E = -1;
                                o = -g - 2 * h
                            }
                            s.setAttribute("transform", l + "scale(" + D + " " + E + ") translate(" + d + " " + o + ") ")
                        } else s.setAttribute("transform", l)
                    }
                    c.appendChild(s)
                }
            } else if (g == "include-shape") {
                o = mxStencilRegistry.getStencil(d.getAttribute("name"));
                if (o != null) {
                    i = t + Number(d.getAttribute("x")) * m;
                    h = u + Number(d.getAttribute("y")) * n;
                    k = Number(d.getAttribute("w")) * m;
                    g = Number(d.getAttribute("h")) * n;
                    o.renderDom(a, new mxRectangle(i, h, k, g), c, r)
                }
            } else if (g == "text") {
                k = this.evaluateAttribute(d, "str", a.state);
                if (k != null) {
                    i =
                        x(t + Number(d.getAttribute("x")) * m);
                    h = x(u + Number(d.getAttribute("y")) * n);
                    g = d.getAttribute("align") || "left";
                    o = d.getAttribute("valign") || "top";
                    if (e) {
                        s = document.createElement("v:shape");
                        s.style.position = "absolute";
                        s.style.width = "1px";
                        s.style.height = "1px";
                        s.style.left = i + "px";
                        s.style.top = h + "px";
                        d = document.createElement("v:fill");
                        d.color = r.fontColor;
                        d.on = "true";
                        s.appendChild(d);
                        d = document.createElement("v:stroke");
                        d.on = "false";
                        s.appendChild(d);
                        d = document.createElement("v:path");
                        d.textpathok = "true";
                        d.v = "m " +
                            i + " " + h + " l " + (i + 1) + " " + h;
                        s.appendChild(d);
                        d = document.createElement("v:textpath");
                        d.style.cssText = "v-text-align:" + g;
                        d.style.fontSize = Math.round(r.fontSize / f) + "px";
                        d.style.fontFamily = r.fontFamily;
                        d.string = k;
                        d.on = "true";
                        if ((r.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD)d.style.fontWeight = "bold";
                        if ((r.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC)d.style.fontStyle = "italic";
                        if ((r.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE)d.style.textDecoration = "underline";
                        if (o == "top")s.style.top = h + r.fontSize / 2 + "px"; else if (o == "bottom")s.style.top = h - r.fontSize / 3 + "px";
                        s.appendChild(d)
                    } else {
                        s = document.createElementNS(mxConstants.NS_SVG, "text");
                        s.setAttribute("fill", r.fontColor);
                        s.setAttribute("font-family", r.fontFamily);
                        s.setAttribute("font-size", r.fontSize);
                        s.setAttribute("stroke", "none");
                        s.setAttribute("x", i);
                        s.appendChild(document.createTextNode(k));
                        (r.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && s.setAttribute("font-weight", "bold");
                        (r.fontStyle & mxConstants.FONT_ITALIC) ==
                            mxConstants.FONT_ITALIC && s.setAttribute("font-style", "italic");
                        (r.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && s.setAttribute("text-decoration", uline);
                        g == "left" ? g = "start" : g == "center" ? g = "middle" : g == "right" && (g = "end");
                        s.setAttribute("text-anchor", g);
                        if (o == "top") {
                            s.setAttribute("y", h + r.fontSize / 5);
                            s.setAttribute("dy", "1ex")
                        } else if (o == "middle") {
                            s.setAttribute("y", h + r.fontSize / 8);
                            s.setAttribute("dy", "0.5ex")
                        } else s.setAttribute("y", h);
                        l.length > 0 && s.setAttribute("transform", l)
                    }
                    c.appendChild(s)
                }
            } else if (h ||
                i || k) {
                if (s != null) {
                    g = null;
                    if (r.dashed) {
                        g = e ? v : Number(s.getAttribute("stroke-width"));
                        o = [];
                        for (d = 0; d < r.dashpattern.length; d++)o.push(Math.max(1, Math.round(Number(r.dashpattern[d]) * g)));
                        g = o.join(" ")
                    }
                    if (i || k)if (e) {
                        d = document.createElement("v:stroke");
                        d.endcap = r.linecap || "flat";
                        d.joinstyle = r.linejoin || "miter";
                        d.miterlimit = r.miterlimit || "10";
                        s.appendChild(d);
                        if (g != null)d.dashstyle = g
                    } else {
                        r.linejoin != null && s.setAttribute("stroke-linejoin", r.linejoin);
                        if (r.linecap != null) {
                            d = r.linecap;
                            d == "flat" && (d = "butt");
                            s.setAttribute("stroke-linecap", d)
                        }
                        r.miterlimit != null && s.setAttribute("stroke-miterlimit", r.miterlimit);
                        g != null && s.setAttribute("stroke-dasharray", g)
                    }
                    if (q && a.isShadow) {
                        d = mxConstants.SHADOW_OFFSET_X * a.scale;
                        o = mxConstants.SHADOW_OFFSET_Y * a.scale;
                        if (e) {
                            p = document.createElement("v:shadow");
                            p.setAttribute("on", "true");
                            p.setAttribute("color", mxConstants.SHADOWCOLOR);
                            p.setAttribute("offset", Math.round(d) + "px," + Math.round(o) + "px");
                            p.setAttribute("opacity", mxConstants.SHADOW_OPACITY * 100 + "%");
                            d = document.createElement("v:stroke");
                            d.endcap = r.linecap || "flat";
                            d.joinstyle = r.linejoin || "miter";
                            d.miterlimit = r.miterlimit || "10";
                            if (g != null)d.dashstyle = g;
                            p.appendChild(d);
                            s.appendChild(p)
                        } else {
                            p = s.cloneNode(true);
                            p.setAttribute("stroke", mxConstants.SHADOWCOLOR);
                            r.fill != null && (h || k) ? p.setAttribute("fill", mxConstants.SHADOWCOLOR) : p.setAttribute("fill", "none");
                            p.setAttribute("transform", "translate(" + d + " " + o + ") " + (p.getAttribute("transform") || ""));
                            p.setAttribute("opacity", mxConstants.SHADOW_OPACITY);
                            c.appendChild(p)
                        }
                    }
                    if (h)e ? s.stroked = "false" :
                        s.setAttribute("stroke", "none"); else if (i)e ? s.filled = "false" : s.setAttribute("fill", "none");
                    c.appendChild(s)
                }
                q && (q = false)
            } else if (g == "linecap")r.linecap = d.getAttribute("cap"); else if (g == "linejoin")r.linejoin = d.getAttribute("join"); else if (g == "miterlimit")r.miterlimit = d.getAttribute("limit"); else if (g == "dashed")r.dashed = d.getAttribute("dashed") == "1"; else if (g == "dashpattern") {
                d = d.getAttribute("pattern");
                if (d != null && d.length > 0)r.dashpattern = d.split(" ")
            } else if (g == "strokewidth") {
                r.strokeWidth = d.getAttribute("width") *
                    v;
                if (e)r.strokeWidth = r.strokeWidth / f
            } else if (g == "strokecolor")r.stroke = d.getAttribute("color"); else if (g == "fillcolor") {
                r.fill = d.getAttribute("color");
                r.fillColorAssigned = true
            } else if (g == "alpha")r.alpha = Number(d.getAttribute("alpha")); else if (g == "fontcolor")r.fontColor = d.getAttribute("color"); else if (g == "fontsize")r.fontSize = Number(d.getAttribute("size")) * v; else if (g == "fontfamily")r.fontFamily = d.getAttribute("family"); else if (g == "fontstyle")r.fontStyle = Number(d.getAttribute("style"))
        };
        if (!e) {
            d = document.createElementNS(mxConstants.NS_SVG,
                "rect");
            d.setAttribute("x", b.x);
            d.setAttribute("y", b.y);
            d.setAttribute("width", b.width);
            d.setAttribute("height", b.height);
            d.setAttribute("fill", "none");
            d.setAttribute("stroke", "none");
            c.appendChild(d)
        }
        if (this.bgNode != null)for (d = this.bgNode.firstChild; d != null;) {
            d.nodeType == mxConstants.NODETYPE_ELEMENT && C.call(this, d);
            d = d.nextSibling
        } else q = false;
        if (this.fgNode != null)for (d = this.fgNode.firstChild; d != null;) {
            d.nodeType == mxConstants.NODETYPE_ELEMENT && C.call(this, d);
            d = d.nextSibling
        }
    }
};
mxStencil.prototype.drawShape = function (a, b, c, d) {
    d = d ? this.bgNode : this.fgNode;
    if (d != null) {
        var e = mxUtils.getValue(b.style, mxConstants.STYLE_DIRECTION, null), c = this.computeAspect(b, c, e), e = Math.min(c.width, c.height), e = this.strokewidth == "inherit" ? Number(mxUtils.getNumber(b.style, mxConstants.STYLE_STROKEWIDTH, 1)) * b.view.scale : Number(this.strokewidth) * e;
        this.lastMoveY = this.lastMoveX = 0;
        a.setStrokeWidth(e);
        for (d = d.firstChild; d != null;) {
            d.nodeType == mxConstants.NODETYPE_ELEMENT && this.drawNode(a, b, d, c);
            d = d.nextSibling
        }
        return true
    }
    return false
};
mxStencil.prototype.computeAspect = function (a, b, c) {
    var a = b.x, d = b.y, e = b.width / this.w0, f = b.height / this.h0;
    if (c = c == "north" || c == "south")var f = b.width / this.h0, e = b.height / this.w0, g = (b.width - b.height) / 2, a = a + g, d = d - g;
    if (this.aspect == "fixed") {
        e = f = Math.min(e, f);
        if (c) {
            a = a + (b.height - this.w0 * e) / 2;
            d = d + (b.width - this.h0 * f) / 2
        } else {
            a = a + (b.width - this.w0 * e) / 2;
            d = d + (b.height - this.h0 * f) / 2
        }
    }
    return new mxRectangle(a, d, e, f)
};
mxStencil.prototype.drawNode = function (a, b, c, d) {
    var e = c.nodeName, f = d.x, g = d.y, h = d.width, k = d.height, i = Math.min(h, k);
    if (e == "save")a.save(); else if (e == "restore")a.restore(); else if (e == "path") {
        a.begin();
        for (c = c.firstChild; c != null;) {
            c.nodeType == mxConstants.NODETYPE_ELEMENT && this.drawNode(a, b, c, d);
            c = c.nextSibling
        }
    } else if (e == "close")a.close(); else if (e == "move") {
        this.lastMoveX = f + Number(c.getAttribute("x")) * h;
        this.lastMoveY = g + Number(c.getAttribute("y")) * k;
        a.moveTo(this.lastMoveX, this.lastMoveY)
    } else if (e ==
        "line") {
        this.lastMoveX = f + Number(c.getAttribute("x")) * h;
        this.lastMoveY = g + Number(c.getAttribute("y")) * k;
        a.lineTo(this.lastMoveX, this.lastMoveY)
    } else if (e == "quad") {
        this.lastMoveX = f + Number(c.getAttribute("x2")) * h;
        this.lastMoveY = g + Number(c.getAttribute("y2")) * k;
        a.quadTo(f + Number(c.getAttribute("x1")) * h, g + Number(c.getAttribute("y1")) * k, this.lastMoveX, this.lastMoveY)
    } else if (e == "curve") {
        this.lastMoveX = f + Number(c.getAttribute("x3")) * h;
        this.lastMoveY = g + Number(c.getAttribute("y3")) * k;
        a.curveTo(f + Number(c.getAttribute("x1")) *
            h, g + Number(c.getAttribute("y1")) * k, f + Number(c.getAttribute("x2")) * h, g + Number(c.getAttribute("y2")) * k, this.lastMoveX, this.lastMoveY)
    } else if (e == "arc")for (var b = Number(c.getAttribute("rx")) * h, i = Number(c.getAttribute("ry")) * k, d = Number(c.getAttribute("x-axis-rotation")), e = Number(c.getAttribute("large-arc-flag")), l = Number(c.getAttribute("sweep-flag")), f = f + Number(c.getAttribute("x")) * h, g = g + Number(c.getAttribute("y")) * k, c = mxUtils.arcToCurves(this.lastMoveX, this.lastMoveY, b, i, d, e, l, f, g), h = 0; h < c.length; h =
        h + 6) {
        a.curveTo(c[h], c[h + 1], c[h + 2], c[h + 3], c[h + 4], c[h + 5]);
        this.lastMoveX = c[h + 4];
        this.lastMoveY = c[h + 5]
    } else if (e == "rect")a.rect(f + Number(c.getAttribute("x")) * h, g + Number(c.getAttribute("y")) * k, Number(c.getAttribute("w")) * h, Number(c.getAttribute("h")) * k); else if (e == "roundrect") {
        b = c.getAttribute("arcsize");
        b == 0 && (b = mxConstants.RECTANGLE_ROUNDING_FACTOR * 100);
        i = Number(c.getAttribute("w")) * h;
        d = Number(c.getAttribute("h")) * k;
        b = Number(b) / 100;
        b = Math.min(i * b, d * b);
        a.roundrect(f + Number(c.getAttribute("x")) * h, g + Number(c.getAttribute("y")) *
            k, i, d, b, b)
    } else if (e == "ellipse")a.ellipse(f + Number(c.getAttribute("x")) * h, g + Number(c.getAttribute("y")) * k, Number(c.getAttribute("w")) * h, Number(c.getAttribute("h")) * k); else if (e == "image") {
        b = this.evaluateAttribute(c, "src", b);
        a.image(f + Number(c.getAttribute("x")) * h, g + Number(c.getAttribute("y")) * k, Number(c.getAttribute("w")) * h, Number(c.getAttribute("h")) * k, b, false, c.getAttribute("flipH") == "1", c.getAttribute("flipV") == "1")
    } else if (e == "text") {
        b = this.evaluateAttribute(c, "str", b);
        a.text(f + Number(c.getAttribute("x")) *
            h, g + Number(c.getAttribute("y")) * k, 0, 0, b, c.getAttribute("align"), c.getAttribute("valign"), c.getAttribute("vertical"))
    } else if (e == "include-shape") {
        e = mxStencilRegistry.getStencil(c.getAttribute("name"));
        if (e != null) {
            f = f + Number(c.getAttribute("x")) * h;
            g = g + Number(c.getAttribute("y")) * k;
            i = Number(c.getAttribute("w")) * h;
            d = Number(c.getAttribute("h")) * k;
            c = new mxRectangle(f, g, i, d);
            e.drawShape(a, b, c, true);
            e.drawShape(a, b, c, false)
        }
    } else if (e == "fillstroke")a.fillAndStroke(); else if (e == "fill")a.fill(); else if (e ==
        "stroke")a.stroke(); else if (e == "strokewidth")a.setStrokeWidth(Number(c.getAttribute("width")) * i); else if (e == "dashed")a.setDashed(c.getAttribute("dashed") == "1"); else if (e == "dashpattern") {
        c = c.getAttribute("pattern");
        if (c != null) {
            c = c.split(" ");
            k = [];
            for (h = 0; h < c.length; h++)c[h].length > 0 && k.push(Number(c[h]) * i);
            c = k.join(" ");
            a.setDashPattern(c)
        }
    } else e == "strokecolor" ? a.setStrokeColor(c.getAttribute("color")) : e == "linecap" ? a.setLineCap(c.getAttribute("cap")) : e == "linejoin" ? a.setLineJoin(c.getAttribute("join")) :
        e == "miterlimit" ? a.setMiterLimit(Number(c.getAttribute("limit"))) : e == "fillcolor" ? a.setFillColor(c.getAttribute("color")) : e == "fontcolor" ? a.setFontColor(c.getAttribute("color")) : e == "fontstyle" ? a.setFontStyle(c.getAttribute("style")) : e == "fontfamily" ? a.setFontFamily(c.getAttribute("family")) : e == "fontsize" && a.setFontSize(Number(c.getAttribute("size")) * i)
};
var mxStencilRegistry = {stencils:[], addStencil:function (a, b) {
    mxStencilRegistry.stencils[a] = b
}, getStencil:function (a) {
    return mxStencilRegistry.stencils[a]
}};
function mxStencilShape(a) {
    this.stencil = a
}
mxStencilShape.prototype = new mxShape;
mxStencilShape.prototype.constructor = mxStencilShape;
mxStencilShape.prototype.mixedModeHtml = !1;
mxStencilShape.prototype.preferModeHtml = !1;
mxStencilShape.prototype.stencil = null;
mxStencilShape.prototype.state = null;
mxStencilShape.prototype.vmlScale = 4;
mxStencilShape.prototype.apply = function (a) {
    this.state = a;
    mxShape.prototype.apply.apply(this, arguments)
};
mxStencilShape.prototype.createSvg = function () {
    var a = document.createElementNS(mxConstants.NS_SVG, "g");
    this.configureSvgShape(a);
    return a
};
mxStencilShape.prototype.configureHtmlShape = function (a) {
    mxShape.prototype.configureHtmlShape.apply(this, arguments);
    if (!mxUtils.isVml(a))a.style.overflow = "visible"
};
mxStencilShape.prototype.createVml = function () {
    var a = document.createElement(document.documentMode == 8 ? "div" : "v:group");
    this.configureTransparentBackground(a);
    a.style.position = "absolute";
    return a
};
mxStencilShape.prototype.configureVmlShape = function () {
};
mxStencilShape.prototype.redraw = function () {
    this.updateBoundingBox();
    if (this.dialect == mxConstants.DIALECT_SVG)this.redrawShape(); else {
        this.node.style.visibility = "hidden";
        this.redrawShape();
        this.node.style.visibility = "visible"
    }
};
mxStencilShape.prototype.redrawShape = function () {
    if (this.dialect != mxConstants.DIALECT_SVG) {
        this.node.style.left = Math.round(this.bounds.x) + "px";
        this.node.style.top = Math.round(this.bounds.y) + "px";
        var a = Math.round(this.bounds.width), b = Math.round(this.bounds.height);
        this.node.style.width = a + "px";
        this.node.style.height = b + "px";
        var c = this.node;
        if (this.node.nodeName == "DIV") {
            c = document.createElement("v:group");
            c.style.position = "absolute";
            c.style.left = "0px";
            c.style.top = "0px";
            c.style.width = a + "px";
            c.style.height =
                b + "px"
        } else c.innerHTML = "";
        if (mxUtils.isVml(c)) {
            var d = document.documentMode != 8 ? this.vmlScale : 1;
            c.coordsize = a * d + "," + b * d
        }
        this.stencil.renderDom(this, this.bounds, c);
        if (this.node != c)this.node.innerHTML = c.outerHTML
    } else {
        for (; this.node.firstChild != null;)this.node.removeChild(this.node.firstChild);
        this.stencil.renderDom(this, this.bounds, this.node)
    }
};
var mxMarker = {markers:[], paintMarker:function (a, b, c, d, e, f, g, h, k, i, l, m) {
    var n = mxMarker.markers[b], o = null;
    if (n != null) {
        var o = mxUtils.isVml(a), p = d.x - c.x, c = d.y - c.y;
        if (isNaN(p) || isNaN(c))return;
        var q = Math.max(1, Math.sqrt(p * p + c * c)), p = p * h / q, c = c * h / q, d = d.clone();
        if (o) {
            d.x = d.x - k;
            d.y = d.y - i
        }
        k = true;
        if (m[l ? mxConstants.STYLE_STARTFILL : mxConstants.STYLE_ENDFILL] == 0)k = false;
        if (o) {
            a.strokecolor = e;
            k ? a.fillcolor = e : a.filled = "false"
        } else {
            a.setAttribute("stroke", e);
            l = m.opacity != null ? m.opacity / 100 : 1;
            a.setAttribute("stroke-opacity",
                l);
            if (k) {
                a.setAttribute("fill", e);
                a.setAttribute("fill-opacity", l)
            } else a.setAttribute("fill", "none")
        }
        o = n.call(this, a, b, d, p, c, f, g, h, o)
    }
    return o
}};
(function () {
    var a = function (a, c, d, e, f, g, h, k, i) {
        var l = e * g * 1.118, m = f * g * 1.118;
        d.x = d.x - l;
        d.y = d.y - m;
        e = e * (h + g);
        f = f * (h + g);
        if (i) {
            a.path = "m" + Math.round(d.x) + "," + Math.round(d.y) + " l" + Math.round(d.x - e - f / 2) + " " + Math.round(d.y - f + e / 2) + (c != mxConstants.ARROW_CLASSIC ? "" : " " + Math.round(d.x - e * 3 / 4) + " " + Math.round(d.y - f * 3 / 4)) + " " + Math.round(d.x + f / 2 - e) + " " + Math.round(d.y - f - e / 2) + " x e";
            a.setAttribute("strokeweight", g * k + "px")
        } else {
            a.setAttribute("d", "M " + d.x + " " + d.y + " L " + (d.x - e - f / 2) + " " + (d.y - f + e / 2) + (c != mxConstants.ARROW_CLASSIC ?
                "" : " L " + (d.x - e * 3 / 4) + " " + (d.y - f * 3 / 4)) + " L " + (d.x + f / 2 - e) + " " + (d.y - f - e / 2) + " z");
            a.setAttribute("stroke-width", g * k)
        }
        a = c != mxConstants.ARROW_CLASSIC ? 1 : 0.75;
        return new mxPoint(-e * a - l, -f * a - m)
    };
    mxMarker.markers[mxConstants.ARROW_CLASSIC] = a;
    mxMarker.markers[mxConstants.ARROW_BLOCK] = a
})();
mxMarker.markers[mxConstants.ARROW_OPEN] = function (a, b, c, d, e, f, g, h, k) {
    var b = d * f * 1.118, i = e * f * 1.118;
    c.x = c.x - b;
    c.y = c.y - i;
    d = d * (g + f);
    e = e * (g + f);
    if (k) {
        a.path = "m" + Math.round(c.x - d - e / 2) + " " + Math.round(c.y - e + d / 2) + " l" + Math.round(c.x) + " " + Math.round(c.y) + " " + Math.round(c.x + e / 2 - d) + " " + Math.round(c.y - e - d / 2) + " e nf";
        a.setAttribute("strokeweight", f * h + "px")
    } else {
        a.setAttribute("d", "M " + (c.x - d - e / 2) + " " + (c.y - e + d / 2) + " L " + c.x + " " + c.y + " L " + (c.x + e / 2 - d) + " " + (c.y - e - d / 2));
        a.setAttribute("stroke-width", f * h);
        a.setAttribute("fill",
            "none")
    }
    return new mxPoint(-b * 2, -i * 2)
};
mxMarker.markers[mxConstants.ARROW_OVAL] = function (a, b, c, d, e, f, g, h, k) {
    d = d * g * (0.5 + f / 2);
    e = e * g * (0.5 + f / 2);
    b = g * h;
    g = b / 2;
    if (k) {
        a.path = "m" + Math.round(c.x + g) + " " + Math.round(c.y) + " at " + Math.round(c.x - g) + " " + Math.round(c.y - g) + " " + Math.round(c.x + g) + " " + Math.round(c.y + g) + " " + Math.round(c.x + g) + " " + Math.round(c.y) + " " + Math.round(c.x + g) + " " + Math.round(c.y) + " x e";
        a.setAttribute("strokeweight", f * h + "px")
    } else {
        a.setAttribute("d", "M " + (c.x - g) + " " + c.y + " a " + g + " " + g + " 0  1,1 " + b + " 0 a " + g + " " + g + " 0  1,1 " + -b + " 0 z");
        a.setAttribute("stroke-width",
            f * h)
    }
    return new mxPoint(-d / (2 + f), -e / (2 + f))
};
(function () {
    var a = function (a, c, d, e, f, g, h, k, i) {
        var l = c == mxConstants.ARROW_DIAMOND ? 0.7071 : 0.9862, m = e * g * l, l = f * g * l, e = e * (h + g), f = f * (h + g);
        d.x = d.x - (m + e / 2);
        d.y = d.y - (l + f / 2);
        c = c == mxConstants.ARROW_DIAMOND ? 2 : 3.4;
        if (i) {
            a.path = "m" + Math.round(d.x + e / 2) + " " + Math.round(d.y + f / 2) + " l" + Math.round(d.x - f / c) + " " + Math.round(d.y + e / c) + " " + Math.round(d.x - e / 2) + " " + Math.round(d.y - f / 2) + " " + Math.round(d.x + f / c) + " " + Math.round(d.y - e / c) + " x e";
            a.setAttribute("strokeweight", g * k + "px")
        } else {
            a.setAttribute("d", "M " + (d.x + e / 2) + " " + (d.y +
                f / 2) + " L " + (d.x - f / c) + " " + (d.y + e / c) + " L " + (d.x - e / 2) + " " + (d.y - f / 2) + " L " + (d.x + f / c) + " " + (d.y - e / c) + " z");
            a.setAttribute("stroke-width", g * k)
        }
        return new mxPoint(-m - e, -l - f)
    };
    mxMarker.markers[mxConstants.ARROW_DIAMOND] = a;
    mxMarker.markers[mxConstants.ARROW_DIAMOND_THIN] = a
})();
function mxActor(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxActor.prototype = new mxShape;
mxActor.prototype.constructor = mxActor;
mxActor.prototype.mixedModeHtml = !1;
mxActor.prototype.preferModeHtml = !1;
mxActor.prototype.vmlScale = 2;
mxActor.prototype.createVml = function () {
    var a = document.createElement("v:shape");
    a.style.position = "absolute";
    this.configureVmlShape(a);
    return a
};
mxActor.prototype.redrawVml = function () {
    this.updateVmlShape(this.node);
    this.node.path = this.createPath()
};
mxActor.prototype.createSvg = function () {
    return this.createSvgGroup("path")
};
mxActor.prototype.redrawSvg = function () {
    var a = Math.round(Math.max(1, this.strokewidth * this.scale));
    this.innerNode.setAttribute("stroke-width", a);
    this.innerNode.setAttribute("stroke-linejoin", "round");
    this.crisp && (this.rotation == null || this.rotation == 0) ? this.innerNode.setAttribute("shape-rendering", "crispEdges") : this.innerNode.removeAttribute("shape-rendering");
    var b = this.createPath();
    if (b.length > 0) {
        this.innerNode.setAttribute("d", b);
        if (this.shadowNode != null) {
            this.shadowNode.setAttribute("transform",
                this.getSvgShadowTransform() + (this.innerNode.getAttribute("transform") || ""));
            this.shadowNode.setAttribute("stroke-width", a);
            this.shadowNode.setAttribute("d", b)
        }
    } else {
        this.innerNode.removeAttribute("d");
        this.shadowNode != null && this.shadowNode.removeAttribute("d")
    }
    if (this.isDashed) {
        a = Math.max(1, Math.round(3 * this.scale * this.strokewidth));
        this.innerNode.setAttribute("stroke-dasharray", a + " " + a)
    }
};
mxActor.prototype.redrawPath = function (a, b, c, d, e) {
    b = d / 3;
    a.moveTo(0, e);
    a.curveTo(0, 3 * e / 5, 0, 2 * e / 5, d / 2, 2 * e / 5);
    a.curveTo(d / 2 - b, 2 * e / 5, d / 2 - b, 0, d / 2, 0);
    a.curveTo(d / 2 + b, 0, d / 2 + b, 2 * e / 5, d / 2, 2 * e / 5);
    a.curveTo(d, 2 * e / 5, d, 3 * e / 5, d, e);
    a.close()
};
function mxCloud(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxCloud.prototype = new mxActor;
mxCloud.prototype.constructor = mxActor;
mxCloud.prototype.redrawPath = function (a, b, c, d, e) {
    a.moveTo(0.25 * d, 0.25 * e);
    a.curveTo(0.05 * d, 0.25 * e, 0, 0.5 * e, 0.16 * d, 0.55 * e);
    a.curveTo(0, 0.66 * e, 0.18 * d, 0.9 * e, 0.31 * d, 0.8 * e);
    a.curveTo(0.4 * d, e, 0.7 * d, e, 0.8 * d, 0.8 * e);
    a.curveTo(d, 0.8 * e, d, 0.6 * e, 0.875 * d, 0.5 * e);
    a.curveTo(d, 0.3 * e, 0.8 * d, 0.1 * e, 0.625 * d, 0.2 * e);
    a.curveTo(0.5 * d, 0.05 * e, 0.3 * d, 0.05 * e, 0.25 * d, 0.25 * e);
    a.close()
};
function mxRectangleShape(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxRectangleShape.prototype = new mxShape;
mxRectangleShape.prototype.constructor = mxRectangleShape;
mxRectangleShape.prototype.createHtml = function () {
    var a = document.createElement("DIV");
    this.configureHtmlShape(a);
    return a
};
mxRectangleShape.prototype.createVml = function () {
    var a = document.createElement(this.isRounded ? "v:roundrect" : "v:rect");
    this.configureVmlShape(a);
    return a
};
mxRectangleShape.prototype.createSvg = function () {
    return this.createSvgGroup("rect")
};
function mxEllipse(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxEllipse.prototype = new mxShape;
mxEllipse.prototype.constructor = mxEllipse;
mxEllipse.prototype.mixedModeHtml = !1;
mxEllipse.prototype.preferModeHtml = !1;
mxEllipse.prototype.createVml = function () {
    var a = document.createElement("v:arc");
    a.startangle = "0";
    a.endangle = "360";
    this.configureVmlShape(a);
    return a
};
mxEllipse.prototype.createSvg = function () {
    return this.createSvgGroup("ellipse")
};
mxEllipse.prototype.redrawSvg = function () {
    this.crisp ? this.innerNode.setAttribute("shape-rendering", "crispEdges") : this.innerNode.removeAttribute("shape-rendering");
    this.updateSvgNode(this.innerNode);
    this.updateSvgNode(this.shadowNode)
};
mxEllipse.prototype.updateSvgNode = function (a) {
    if (a != null) {
        var b = Math.round(Math.max(1, this.strokewidth * this.scale));
        a.setAttribute("stroke-width", b);
        a.setAttribute("cx", this.bounds.x + this.bounds.width / 2);
        a.setAttribute("cy", this.bounds.y + this.bounds.height / 2);
        a.setAttribute("rx", this.bounds.width / 2);
        a.setAttribute("ry", this.bounds.height / 2);
        this.shadowNode != null && this.shadowNode.setAttribute("transform", this.getSvgShadowTransform());
        if (this.isDashed) {
            b = Math.max(1, Math.round(3 * this.scale * this.strokewidth));
            a.setAttribute("stroke-dasharray", b + " " + b)
        }
    }
};
function mxDoubleEllipse(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxDoubleEllipse.prototype = new mxShape;
mxDoubleEllipse.prototype.constructor = mxDoubleEllipse;
mxDoubleEllipse.prototype.vmlNodes = mxDoubleEllipse.prototype.vmlNodes.concat(["background", "foreground"]);
mxDoubleEllipse.prototype.mixedModeHtml = !1;
mxDoubleEllipse.prototype.preferModeHtml = !1;
mxDoubleEllipse.prototype.vmlScale = 2;
mxDoubleEllipse.prototype.createVml = function () {
    var a = document.createElement("v:group");
    this.background = document.createElement("v:arc");
    this.background.startangle = "0";
    this.background.endangle = "360";
    this.configureVmlShape(this.background);
    a.appendChild(this.background);
    this.label = this.background;
    this.isShadow = false;
    this.fill = null;
    this.foreground = document.createElement("v:oval");
    this.configureVmlShape(this.foreground);
    a.appendChild(this.foreground);
    this.stroke = null;
    this.configureVmlShape(a);
    return a
};
mxDoubleEllipse.prototype.redrawVml = function () {
    this.updateVmlShape(this.node);
    this.updateVmlShape(this.background);
    this.updateVmlShape(this.foreground);
    var a = Math.round((this.strokewidth + 3) * this.scale) * this.vmlScale, b = Math.round(this.bounds.width * this.vmlScale), c = Math.round(this.bounds.height * this.vmlScale);
    this.foreground.style.top = a + "px";
    this.foreground.style.left = a + "px";
    this.foreground.style.width = Math.max(0, b - 2 * a) + "px";
    this.foreground.style.height = Math.max(0, c - 2 * a) + "px"
};
mxDoubleEllipse.prototype.createSvg = function () {
    var a = this.createSvgGroup("ellipse");
    this.foreground = document.createElementNS(mxConstants.NS_SVG, "ellipse");
    this.stroke != null ? this.foreground.setAttribute("stroke", this.stroke) : this.foreground.setAttribute("stroke", "none");
    this.foreground.setAttribute("fill", "none");
    a.appendChild(this.foreground);
    return a
};
mxDoubleEllipse.prototype.redrawSvg = function () {
    if (this.crisp) {
        this.innerNode.setAttribute("shape-rendering", "crispEdges");
        this.foreground.setAttribute("shape-rendering", "crispEdges")
    } else {
        this.innerNode.removeAttribute("shape-rendering");
        this.foreground.removeAttribute("shape-rendering")
    }
    this.updateSvgNode(this.innerNode);
    this.updateSvgNode(this.shadowNode);
    this.updateSvgNode(this.foreground, (this.strokewidth + 3) * this.scale);
    if (this.isDashed) {
        var a = Math.max(1, Math.round(3 * this.scale * this.strokewidth));
        this.innerNode.setAttribute("stroke-dasharray", a + " " + a)
    }
};
mxDoubleEllipse.prototype.updateSvgNode = function (a, b) {
    b = b != null ? b : 0;
    if (a != null) {
        var c = Math.round(Math.max(1, this.strokewidth * this.scale));
        a.setAttribute("stroke-width", c);
        a.setAttribute("cx", this.bounds.x + this.bounds.width / 2);
        a.setAttribute("cy", this.bounds.y + this.bounds.height / 2);
        a.setAttribute("rx", Math.max(0, this.bounds.width / 2 - b));
        a.setAttribute("ry", Math.max(0, this.bounds.height / 2 - b));
        this.shadowNode != null && this.shadowNode.setAttribute("transform", this.getSvgShadowTransform())
    }
};
function mxRhombus(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxRhombus.prototype = new mxShape;
mxRhombus.prototype.constructor = mxRhombus;
mxRhombus.prototype.mixedModeHtml = !1;
mxRhombus.prototype.preferModeHtml = !1;
mxRhombus.prototype.createHtml = function () {
    var a = document.createElement("DIV");
    this.configureHtmlShape(a);
    return a
};
mxRhombus.prototype.createVml = function () {
    var a = document.createElement("v:shape");
    this.configureVmlShape(a);
    return a
};
mxRhombus.prototype.createSvg = function () {
    return this.createSvgGroup("path")
};
mxRhombus.prototype.redrawVml = function () {
    this.updateVmlShape(this.node);
    var a = Math.round(this.bounds.width), b = Math.round(this.bounds.height);
    this.node.path = "m " + Math.round(0 + a / 2) + " 0 l " + (0 + a) + " " + Math.round(0 + b / 2) + " l " + Math.round(0 + a / 2) + " " + (0 + b) + " l 0 " + Math.round(0 + b / 2) + " x e"
};
mxRhombus.prototype.redrawHtml = function () {
    this.updateHtmlShape(this.node)
};
mxRhombus.prototype.redrawSvg = function () {
    this.updateSvgNode(this.innerNode);
    this.shadowNode != null && this.updateSvgNode(this.shadowNode)
};
mxRhombus.prototype.updateSvgNode = function (a) {
    var b = Math.round(Math.max(1, this.strokewidth * this.scale));
    a.setAttribute("stroke-width", b);
    var b = this.bounds.x, c = this.bounds.y, d = this.bounds.width, e = this.bounds.height, b = "M " + Math.round(b + d / 2) + " " + Math.round(c) + " L " + Math.round(b + d) + " " + Math.round(c + e / 2) + " L " + Math.round(b + d / 2) + " " + Math.round(c + e) + " L " + Math.round(b) + " " + Math.round(c + e / 2) + " Z ";
    a.setAttribute("d", b);
    this.updateSvgTransform(a, a == this.shadowNode);
    if (this.isDashed) {
        b = Math.max(1, Math.round(3 *
            this.scale * this.strokewidth));
        a.setAttribute("stroke-dasharray", b + " " + b)
    }
};
function mxPolyline(a, b, c) {
    this.points = a;
    this.stroke = b;
    this.strokewidth = c != null ? c : 1
}
mxPolyline.prototype = new mxShape;
mxPolyline.prototype.constructor = mxPolyline;
mxPolyline.prototype.addPipe = !0;
mxPolyline.prototype.create = function () {
    var a = null;
    if (this.dialect == mxConstants.DIALECT_SVG)a = this.createSvg(); else if (this.dialect == mxConstants.DIALECT_STRICTHTML || this.dialect == mxConstants.DIALECT_PREFERHTML && this.points != null && this.points.length > 0) {
        a = document.createElement("DIV");
        this.configureHtmlShape(a);
        a.style.borderStyle = "";
        a.style.background = ""
    } else {
        a = document.createElement("v:shape");
        this.configureVmlShape(a);
        var b = document.createElement("v:stroke");
        if (this.opacity != null)b.opacity = this.opacity +
            "%";
        a.appendChild(b)
    }
    return a
};
mxPolyline.prototype.redrawVml = function () {
    if (this.points != null && this.points.length > 0 && this.points[0] != null) {
        this.bounds = new mxRectangle(this.points[0].x, this.points[0].y, 0, 0);
        for (var a = 1; a < this.points.length; a++)this.bounds.add(new mxRectangle(this.points[a].x, this.points[a].y, 0, 0))
    }
    mxShape.prototype.redrawVml.apply(this, arguments)
};
mxPolyline.prototype.createSvg = function () {
    var a = this.createSvgGroup("path");
    if (this.addPipe) {
        this.pipe = this.createSvgPipe();
        a.appendChild(this.pipe)
    }
    return a
};
mxPolyline.prototype.redrawSvg = function () {
    this.updateSvgShape(this.innerNode);
    var a = this.innerNode.getAttribute("d");
    if (a != null && this.pipe != null) {
        this.pipe.setAttribute("d", a);
        this.pipe.setAttribute("stroke-width", Math.round(Math.max(1, this.strokewidth * this.scale)) + mxShape.prototype.SVG_STROKE_TOLERANCE)
    }
};
function mxArrow(a, b, c, d, e, f, g) {
    this.points = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1;
    this.arrowWidth = e != null ? e : mxConstants.ARROW_WIDTH;
    this.spacing = f != null ? f : mxConstants.ARROW_SPACING;
    this.endSize = g != null ? g : mxConstants.ARROW_SIZE
}
mxArrow.prototype = new mxActor;
mxArrow.prototype.constructor = mxArrow;
mxArrow.prototype.addPipe = !1;
mxArrow.prototype.enableFill = !0;
mxArrow.prototype.configureTransparentBackground = function () {
};
mxArrow.prototype.augmentBoundingBox = function (a) {
    a.grow(Math.max(this.arrowWidth / 2, this.endSize / 2) * this.scale);
    mxShape.prototype.augmentBoundingBox.apply(this, arguments)
};
mxArrow.prototype.createVml = function () {
    if (!this.enableFill)this.fill = null;
    return mxActor.prototype.createVml.apply(this, arguments)
};
mxArrow.prototype.createSvg = function () {
    if (!this.enableFill)this.fill = null;
    var a = mxActor.prototype.createSvg.apply(this, arguments);
    if (this.addPipe) {
        this.pipe = this.createSvgPipe();
        a.appendChild(this.pipe)
    }
    return a
};
mxArrow.prototype.reconfigure = function () {
    if (!this.enableFill)this.fill = null;
    mxActor.prototype.reconfigure.apply(this, arguments)
};
mxArrow.prototype.redrawSvg = function () {
    mxActor.prototype.redrawSvg.apply(this, arguments);
    if (this.pipe != null && this.innerNode.getAttribute("d") != null) {
        this.pipe.setAttribute("d", this.innerNode.getAttribute("d"));
        this.pipe.setAttribute("stroke-width", Math.round(this.strokewidth * this.scale) + mxShape.prototype.SVG_STROKE_TOLERANCE)
    }
};
mxArrow.prototype.redrawPath = function (a, b, c) {
    a.translate.x = a.translate.x - b;
    a.translate.y = a.translate.y - c;
    var b = this.spacing * this.scale, d = this.arrowWidth * this.scale, e = this.endSize * this.scale, f = this.points[0], c = this.points[this.points.length - 1], g = c.x - f.x, h = c.y - f.y, k = Math.sqrt(g * g + h * h), i = k - 2 * b - e, g = g / k, h = h / k, k = d * h / 3, d = -d * g / 3, e = f.x - k / 2 + b * g, f = f.y - d / 2 + b * h, l = e + k, m = f + d, n = l + i * g, i = m + i * h, o = n + k, p = i + d, q = o - 3 * k, t = p - 3 * d;
    a.moveTo(e, f);
    a.lineTo(l, m);
    a.lineTo(n, i);
    a.lineTo(o, p);
    a.lineTo(c.x - b * g, c.y - b * h);
    a.lineTo(q, t);
    a.lineTo(q + k, t + d);
    a.lineTo(e, f);
    a.close()
};
function mxText(a, b, c, d, e, f, g, h, k, i, l, m, n, o, p, q, t, u, v, w) {
    this.value = a;
    this.bounds = b;
    this.color = e != null ? e : "black";
    this.align = c != null ? c : "";
    this.valign = d != null ? d : "";
    this.family = f != null ? f : mxConstants.DEFAULT_FONTFAMILY;
    this.size = g != null ? g : mxConstants.DEFAULT_FONTSIZE;
    this.fontStyle = h != null ? h : 0;
    this.spacing = parseInt(k || 2);
    this.spacingTop = this.spacing + parseInt(i || 0);
    this.spacingRight = this.spacing + parseInt(l || 0);
    this.spacingBottom = this.spacing + parseInt(m || 0);
    this.spacingLeft = this.spacing + parseInt(n || 0);
    this.horizontal = o != null ? o : true;
    this.background = p;
    this.border = q;
    this.wrap = t != null ? t : false;
    this.clipped = u != null ? u : false;
    this.overflow = v != null ? v : "visible";
    this.labelPadding = w != null ? w : 0
}
mxText.prototype = new mxShape;
mxText.prototype.constructor = mxText;
mxText.prototype.replaceLinefeeds = !0;
mxText.prototype.ieVerticalFilter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
mxText.prototype.verticalTextDegree = -90;
mxText.prototype.forceIgnoreStringSize = !1;
mxText.prototype.isStyleSet = function (a) {
    return(this.fontStyle & a) == a
};
mxText.prototype.create = function (a) {
    var b = null;
    return b = this.dialect == mxConstants.DIALECT_SVG ? this.createSvg() : this.dialect == mxConstants.DIALECT_STRICTHTML || this.dialect == mxConstants.DIALECT_PREFERHTML || !mxUtils.isVml(a) ? mxClient.IS_SVG && !mxClient.NO_FO ? this.createForeignObject() : this.createHtml() : this.createVml()
};
mxText.prototype.updateBoundingBox = function () {
};
mxText.prototype.createForeignObject = function () {
    var a = document.createElementNS(mxConstants.NS_SVG, "g"), b = document.createElementNS(mxConstants.NS_SVG, "foreignObject");
    b.setAttribute("pointer-events", "fill");
    b.style.overflow = this.overflow == "hidden" ? "hidden" : "visible";
    var c = document.createElementNS(mxConstants.NS_XHTML, "body");
    c.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    c.style.margin = "0px";
    c.style.height = "100%";
    b.appendChild(c);
    a.appendChild(b);
    return a
};
mxText.prototype.createHtml = function () {
    var a = this.createHtmlTable();
    a.style.position = "absolute";
    return a
};
mxText.prototype.createVml = function () {
    return document.createElement("v:textbox")
};
mxText.prototype.redrawHtml = function () {
    this.redrawVml()
};
mxText.prototype.getOffset = function (a, b, c, d, e) {
    var f = (e = e != null ? e : this.horizontal) ? this.align : this.valign, g = e ? this.valign : this.align, h = c - a, k = d - b;
    f == mxConstants.ALIGN_CENTER || f == mxConstants.ALIGN_MIDDLE ? h = Math.round(h / 2) : f == mxConstants.ALIGN_LEFT || f === mxConstants.ALIGN_TOP ? h = e ? 0 : (c - d) / 2 : e || (h = (c + d) / 2 - a);
    g == mxConstants.ALIGN_MIDDLE || g == mxConstants.ALIGN_CENTER ? k = Math.round(k / 2) : g == mxConstants.ALIGN_TOP || g == mxConstants.ALIGN_LEFT ? k = e ? 0 : (d + c) / 2 - b : e || (k = (d - c) / 2);
    return new mxPoint(h, k)
};
mxText.prototype.getSpacing = function (a) {
    var a = a != null ? a : this.horizontal, b = 0, c = 0, b = this.align == mxConstants.ALIGN_CENTER ? (this.spacingLeft - this.spacingRight) / 2 : this.align == mxConstants.ALIGN_RIGHT ? -this.spacingRight : this.spacingLeft, c = this.valign == mxConstants.ALIGN_MIDDLE ? (this.spacingTop - this.spacingBottom) / 2 : this.valign == mxConstants.ALIGN_BOTTOM ? -this.spacingBottom : this.spacingTop;
    return a ? new mxPoint(b, c) : new mxPoint(c, b)
};
mxText.prototype.createHtmlTable = function () {
    var a = document.createElement("table");
    a.style.borderCollapse = "collapse";
    var b = document.createElement("tbody"), c = document.createElement("tr"), d = document.createElement("td");
    if (document.documentMode >= 9)d.style.height = "100%";
    c.appendChild(d);
    b.appendChild(c);
    a.appendChild(b);
    return a
};
mxText.prototype.updateHtmlTable = function (a, b) {
    var b = b != null ? b : 1, c = a.firstChild.firstChild.firstChild;
    if (this.wrap)a.style.width = "";
    if (mxUtils.isNode(this.value)) {
        if (c.firstChild != this.value) {
            c.firstChild != null && c.removeChild(c.firstChild);
            c.appendChild(this.value)
        }
    } else if (this.lastValue != this.value) {
        c.innerHTML = this.replaceLinefeeds ? this.value.replace(/\n/g, "<br/>") : this.value;
        this.lastValue = this.value
    }
    var d = Math.round(this.size * b);
    a.style.visibility = d <= 0 ? "hidden" : "";
    a.style.fontSize = d + "px";
    a.style.color =
        this.color;
    a.style.fontFamily = this.family;
    a.style.fontWeight = this.isStyleSet(mxConstants.FONT_BOLD) ? "bold" : "normal";
    a.style.fontStyle = this.isStyleSet(mxConstants.FONT_ITALIC) ? "italic" : "";
    a.style.textDecoration = this.isStyleSet(mxConstants.FONT_UNDERLINE) ? "underline" : "";
    if (mxClient.IS_IE)this.isStyleSet(mxConstants.FONT_SHADOW) ? c.style.filter = "Shadow(Color=#666666,Direction=135,Strength=%)" : c.style.removeAttribute("filter");
    c.style.textAlign = this.align == mxConstants.ALIGN_RIGHT ? "right" : this.align == mxConstants.ALIGN_CENTER ?
        "center" : "left";
    c.style.verticalAlign = this.valign == mxConstants.ALIGN_BOTTOM ? "bottom" : this.valign == mxConstants.ALIGN_MIDDLE ? "middle" : "top";
    c.style.background = this.value.length > 0 && this.background != null ? this.background : "";
    c.style.padding = this.labelPadding + "px";
    if (this.value.length > 0 && this.border != null) {
        a.style.borderColor = this.border;
        a.style.borderWidth = "1px";
        a.style.borderStyle = "solid"
    } else a.style.borderStyle = "none"
};
mxText.prototype.getTableSize = function (a) {
    return new mxRectangle(0, 0, a.offsetWidth, a.offsetHeight)
};
mxText.prototype.updateTableWidth = function (a) {
    var b = a.firstChild.firstChild.firstChild;
    if (this.wrap && this.bounds.width > 0 && this.dialect != mxConstants.DIALECT_SVG) {
        b.style.whiteSpace = "nowrap";
        var c = this.getTableSize(a), c = Math.min(c.width, (this.horizontal || mxUtils.isVml(this.node) ? this.bounds.width : this.bounds.height) / this.scale);
        mxClient.IS_OP && (c = c * this.scale);
        a.style.width = Math.round(c) + "px";
        b.style.whiteSpace = "normal"
    } else a.style.width = "";
    b.style.whiteSpace = this.wrap ? "normal" : "nowrap"
};
mxText.prototype.redrawVml = function () {
    this.node.nodeName == "g" ? this.redrawForeignObject() : mxUtils.isVml(this.node) ? this.redrawTextbox() : this.redrawHtmlTable()
};
mxText.prototype.redrawTextbox = function () {
    var a = this.node;
    a.firstChild == null && a.appendChild(this.createHtmlTable());
    var b = a.firstChild;
    this.updateHtmlTable(b);
    this.updateTableWidth(b);
    this.opacity != null && mxUtils.setOpacity(b, this.opacity);
    b.style.filter = "";
    a.inset = "0px,0px,0px,0px";
    if (this.overflow != "fill") {
        var c = this.getTableSize(b), d = c.width * this.scale, c = c.height * this.scale, e = this.getOffset(this.bounds.width, this.bounds.height, d, c);
        if (!this.horizontal)b.style.filter = this.ieVerticalFilter;
        var f =
            this.getSpacing(), b = this.bounds.x - e.x + f.x * this.scale, e = this.bounds.y - e.y + f.y * this.scale, g = this.bounds.x, f = this.bounds.y, h = this.bounds.width, k = this.bounds.height;
        if (this.horizontal) {
            var i = Math.round(b - g), l = Math.round(e - f), m = Math.min(0, Math.round(g + h - b - d - 1)), n = Math.min(0, Math.round(f + k - e - c - 1));
            a.inset = i + "px," + l + "px," + m + "px," + n + "px"
        } else {
            n = m = l = i = 0;
            if (this.align == mxConstants.ALIGN_CENTER)n = i = (k - d) / 2; else this.align == mxConstants.ALIGN_LEFT ? i = k - d : n = k - d;
            if (this.valign == mxConstants.ALIGN_MIDDLE)m = l = (h - c) /
                2; else this.valign == mxConstants.ALIGN_BOTTOM ? l = h - c : m = h - c;
            a.inset = l + "px," + i + "px," + m + "px," + n + "px"
        }
        a.style.zoom = this.scale;
        if (this.clipped && this.bounds.width > 0 && this.bounds.height > 0) {
            this.boundingBox = this.bounds.clone();
            d = Math.round(g - b);
            c = Math.round(f - e);
            a.style.clip = "rect(" + c / this.scale + " " + (d + this.bounds.width) / this.scale + " " + (c + this.bounds.height) / this.scale + " " + d / this.scale + ")"
        } else this.boundingBox = new mxRectangle(b, e, d, c)
    } else this.boundingBox = this.bounds.clone()
};
mxText.prototype.redrawHtmlTable = function () {
    if (!isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height)) {
        var a = this.node, b = a.firstChild.firstChild.firstChild, c = false, d = 1;
        if (mxClient.IS_IE)a.style.removeAttribute("filter"); else if (mxClient.IS_SF || mxClient.IS_GC)a.style.WebkitTransform = ""; else if (mxClient.IS_MT) {
            a.style.MozTransform = "";
            b.style.MozTransform = ""
        } else {
            if (mxClient.IS_OT)a.style.OTransform = "";
            d = this.scale;
            c = true
        }
        b.style.zoom = "";
        this.updateHtmlTable(a,
            d);
        this.updateTableWidth(a);
        this.opacity != null && mxUtils.setOpacity(a, this.opacity);
        a.style.left = "";
        a.style.top = "";
        a.style.height = "";
        var e = parseFloat(b.style.zoom) || 1, d = this.bounds.width, f = this.bounds.height;
        if (!this.forceIgnoreStringSize && !(this.overflow == "fill" || this.align == mxConstants.ALIGN_LEFT && this.background == null && this.border == null)) {
            f = this.getTableSize(a);
            d = f.width / e;
            f = f.height / e
        }
        var e = this.getOffset(this.bounds.width / this.scale, this.bounds.height / this.scale, d, f, c || this.horizontal), g = this.getSpacing(c ||
            this.horizontal), h = this.bounds.x / this.scale - e.x + g.x, k = this.bounds.y / this.scale - e.y + g.y, i = this.scale, g = 1, l = 0, m = 0;
        if (!this.horizontal)if (mxClient.IS_IE && mxClient.IS_SVG)a.style.msTransform = "rotate(" + this.verticalTextDegree + "deg)"; else if (mxClient.IS_IE) {
            a.style.filter = this.ieVerticalFilter;
            l = (d - f) / 2;
            m = -l
        } else if (mxClient.IS_SF || mxClient.IS_GC)a.style.WebkitTransform = "rotate(" + this.verticalTextDegree + "deg)"; else if (mxClient.IS_OT)a.style.OTransform = "rotate(" + this.verticalTextDegree + "deg)"; else if (mxClient.IS_MT) {
            a.style.MozTransform =
                "rotate(" + this.verticalTextDegree + "deg)";
            b.style.MozTransform = "rotate(0deg)";
            g = 1 / this.scale;
            i = 1
        }
        var n = true;
        if (mxClient.IS_MT || c)if (mxClient.IS_MT) {
            a.style.MozTransform = a.style.MozTransform + (" scale(" + this.scale + ")");
            g = 1 / this.scale
        } else {
            if (mxClient.IS_OT) {
                b.style.OTransform = "scale(" + this.scale + ")";
                a.style.borderWidth = Math.round(this.scale * parseInt(a.style.borderWidth)) + "px"
            }
        } else if (!c)if (document.documentMode >= 9)b.style.msTransform = "scale(" + this.scale + ")"; else if (mxClient.IS_SF || mxClient.IS_GC)b.style.WebkitTransform =
            "scale(" + this.scale + ")"; else {
            b.style.zoom = this.scale;
            if (a.style.borderWidth != "" && document.documentMode != 8)a.style.borderWidth = Math.round(this.scale * parseInt(a.style.borderWidth)) + "px";
            if (document.documentMode == 8 || !mxClient.IS_IE)i = 1;
            n = false
        }
        if (n) {
            l = (this.scale - 1) * d / (2 * this.scale);
            m = (this.scale - 1) * f / (2 * this.scale);
            i = 1
        }
        if (this.overflow != "fill") {
            h = new mxRectangle(Math.round((h + l) * this.scale), Math.round((k + m) * this.scale), Math.round(d * i), Math.round(f * i));
            a.style.left = h.x + "px";
            a.style.top = h.y + "px";
            a.style.width =
                h.width + "px";
            a.style.height = h.height + "px";
            if ((this.background != null || this.border != null) && document.documentMode >= 8) {
                k = this.replaceLinefeeds ? this.value.replace(/\n/g, "<br/>") : this.value;
                b.innerHTML = '<div style="padding:' + this.labelPadding + "px;background:" + b.style.background + ";border:" + a.style.border + '">' + k + "</div>";
                b.style.padding = "0px";
                b.style.background = "";
                a.style.border = ""
            }
            if (this.clipped && this.bounds.width > 0 && this.bounds.height > 0) {
                this.boundingBox = this.bounds.clone();
                if (this.horizontal || c && !mxClient.IS_OT) {
                    b =
                        Math.max(0, e.x * i);
                    c = Math.max(0, e.y * i);
                    a.style.clip = "rect(" + c + "px " + (b + this.bounds.width * g) + "px " + (c + this.bounds.height * g) + "px " + b + "px)"
                } else if (mxClient.IS_IE) {
                    e = this.bounds.width;
                    g = this.bounds.height;
                    c = b = 0;
                    this.align == mxConstants.ALIGN_LEFT ? b = Math.max(0, d - g / this.scale) * this.scale : this.align == mxConstants.ALIGN_CENTER && (b = Math.max(0, d - g / this.scale) * this.scale / 2);
                    this.valign == mxConstants.ALIGN_BOTTOM ? c = Math.max(0, f - e / this.scale) * this.scale : this.valign == mxConstants.ALIGN_MIDDLE && (c = Math.max(0, f - e / this.scale) *
                        this.scale / 2);
                    a.style.clip = "rect(" + b + "px " + (c + e - 1) + "px " + (b + g - 1) + "px " + c + "px)"
                } else {
                    e = this.bounds.width / this.scale;
                    g = this.bounds.height / this.scale;
                    if (mxClient.IS_OT) {
                        e = this.bounds.width;
                        g = this.bounds.height
                    }
                    c = b = 0;
                    this.align == mxConstants.ALIGN_RIGHT ? b = Math.max(0, d - g) : this.align == mxConstants.ALIGN_CENTER && (b = Math.max(0, d - g) / 2);
                    this.valign == mxConstants.ALIGN_BOTTOM ? c = Math.max(0, f - e) : this.valign == mxConstants.ALIGN_MIDDLE && (c = Math.max(0, f - e) / 2);
                    if (mxClient.IS_GC || mxClient.IS_SF) {
                        b = b * this.scale;
                        c = c * this.scale;
                        e = e * this.scale;
                        g = g * this.scale
                    }
                    a.style.clip = "rect(" + c + " " + (b + g) + " " + (c + e) + " " + b + ")"
                }
            } else this.boundingBox = h
        } else {
            this.boundingBox = this.bounds.clone();
            if (document.documentMode >= 9 || mxClient.IS_SVG) {
                a.style.left = Math.round(this.bounds.x + this.scale / 2 + l) + "px";
                a.style.top = Math.round(this.bounds.y + this.scale / 2 + m) + "px";
                a.style.width = Math.round((this.bounds.width - this.scale) / this.scale) + "px";
                a.style.height = Math.round((this.bounds.height - this.scale) / this.scale) + "px"
            } else {
                i = document.documentMode == 8 ? this.scale :
                    1;
                a.style.left = Math.round(this.bounds.x + this.scale / 2) + "px";
                a.style.top = Math.round(this.bounds.y + this.scale / 2) + "px";
                a.style.width = Math.round((this.bounds.width - this.scale) / i) + "px";
                a.style.height = Math.round((this.bounds.height - this.scale) / i) + "px"
            }
        }
    }
};
mxText.prototype.getVerticalOffset = function (a) {
    return new mxPoint(a.y, -a.x)
};
mxText.prototype.redrawForeignObject = function () {
    for (var a = this.node, b = a.firstChild; b == this.backgroundNode;)b = b.nextSibling;
    var c = b.firstChild;
    c.firstChild == null && c.appendChild(this.createHtmlTable());
    var d = c.firstChild;
    this.updateHtmlTable(d);
    this.opacity != null && b.setAttribute("opacity", this.opacity / 100);
    if (mxClient.IS_SF) {
        d.style.borderStyle = "none";
        d.firstChild.firstChild.firstChild.style.background = "";
        if (this.backgroundNode == null && (this.background != null || this.border != null)) {
            this.backgroundNode =
                document.createElementNS(mxConstants.NS_SVG, "rect");
            a.insertBefore(this.backgroundNode, a.firstChild)
        } else if (this.backgroundNode != null && this.background == null && this.border == null) {
            this.backgroundNode.parentNode.removeChild(this.backgroundNode);
            this.backgroundNode = null
        }
        if (this.backgroundNode != null) {
            this.background != null ? this.backgroundNode.setAttribute("fill", this.background) : this.backgroundNode.setAttribute("fill", "none");
            this.border != null ? this.backgroundNode.setAttribute("stroke", this.border) : this.backgroundNode.setAttribute("stroke",
                "none")
        }
    }
    var e = "";
    if (this.overflow != "fill") {
        b.removeAttribute("width");
        b.removeAttribute("height");
        b.style.width = "";
        b.style.height = "";
        b.style.clip = "";
        (this.wrap || !mxClient.IS_GC && !mxClient.IS_SF) && document.body.appendChild(d);
        this.updateTableWidth(d);
        var f = this.getTableSize(d), g = f.width, f = f.height;
        d.parentNode != c && c.appendChild(d);
        var e = this.getSpacing(), h = this.bounds.x / this.scale + e.x, k = this.bounds.y / this.scale + e.y, d = this.bounds.width / this.scale, c = this.bounds.height / this.scale, i = this.getOffset(d,
            c, g, f);
        if (this.horizontal) {
            h = h - i.x;
            k = k - i.y;
            e = "scale(" + this.scale + ")"
        } else var e = "scale(" + this.scale + ") rotate(" + this.verticalTextDegree + " " + (h + g / 2) + " " + (k + f / 2) + ")", l = this.getVerticalOffset(i), h = h + l.x, k = k + l.y;
        e = e + (" translate(" + h + " " + k + ")");
        if (this.backgroundNode != null) {
            this.backgroundNode.setAttribute("width", g);
            this.backgroundNode.setAttribute("height", f)
        }
        b.setAttribute("width", g);
        b.setAttribute("height", f);
        if (this.clipped && this.bounds.width > 0 && this.bounds.height > 0) {
            this.boundingBox = this.bounds.clone();
            h = Math.max(0, i.x);
            i = Math.max(0, i.y);
            if (this.horizontal)b.style.clip = "rect(" + i + "px," + (h + d) + "px," + (i + c) + "px," + h + "px)"; else {
                i = h = 0;
                this.align == mxConstants.ALIGN_RIGHT ? h = Math.max(0, g - c) : this.align == mxConstants.ALIGN_CENTER && (h = Math.max(0, g - c) / 2);
                this.valign == mxConstants.ALIGN_BOTTOM ? i = Math.max(0, f - d) : this.valign == mxConstants.ALIGN_MIDDLE && (i = Math.max(0, f - d) / 2);
                b.style.clip = "rect(" + i + "px," + (h + c) + "px," + (i + d) + "px," + h + "px)"
            }
            if (this.backgroundNode != null) {
                h = this.bounds.x / this.scale;
                k = this.bounds.y / this.scale;
                if (!this.horizontal) {
                    h = h + ((f + g) / 2 - c);
                    k = k + (f - g) / 2;
                    l = d;
                    d = c;
                    c = l
                }
                if (!mxClient.IS_GC) {
                    b = this.getSvgClip(this.node.ownerSVGElement, h, k, d, c);
                    if (b != this.clip) {
                        this.releaseSvgClip();
                        this.clip = b;
                        b.refCount++
                    }
                    this.backgroundNode.setAttribute("clip-path", "url(#" + b.getAttribute("id") + ")")
                }
            }
        } else {
            this.releaseSvgClip();
            this.backgroundNode != null && this.backgroundNode.removeAttribute("clip-path");
            this.boundingBox = this.horizontal ? new mxRectangle(h * this.scale, k * this.scale, g * this.scale, f * this.scale) : new mxRectangle(h *
                this.scale, k * this.scale, f * this.scale, g * this.scale)
        }
    } else {
        this.boundingBox = this.bounds.clone();
        e = this.scale;
        g = this.bounds.width / e;
        f = this.bounds.height / e;
        b.setAttribute("width", g);
        b.setAttribute("height", f);
        d.style.width = g + "px";
        d.style.height = f + "px";
        if (this.backgroundNode != null) {
            this.backgroundNode.setAttribute("width", d.clientWidth);
            this.backgroundNode.setAttribute("height", d.offsetHeight)
        }
        e = "scale(" + e + ") translate(" + this.bounds.x / e + " " + this.bounds.y / e + ")";
        if (!this.wrap)d.firstChild.firstChild.firstChild.style.whiteSpace =
            "nowrap"
    }
    a.setAttribute("transform", e)
};
mxText.prototype.createSvg = function () {
    var a = document.createElementNS(mxConstants.NS_SVG, "g"), b = this.isStyleSet(mxConstants.FONT_UNDERLINE) ? "underline" : "none", c = this.isStyleSet(mxConstants.FONT_BOLD) ? "bold" : "normal", d = this.isStyleSet(mxConstants.FONT_ITALIC) ? "italic" : null;
    a.setAttribute("text-decoration", b);
    a.setAttribute("font-family", this.family);
    a.setAttribute("font-weight", c);
    a.setAttribute("font-size", Math.round(this.size * this.scale) + "px");
    a.setAttribute("fill", this.color);
    a.setAttribute("text-anchor",
        this.align == mxConstants.ALIGN_RIGHT ? "end" : this.align == mxConstants.ALIGN_CENTER ? "middle" : "start");
    d != null && a.setAttribute("font-style", d);
    if (this.background != null || this.border != null) {
        this.backgroundNode = document.createElementNS(mxConstants.NS_SVG, "rect");
        this.backgroundNode.setAttribute("shape-rendering", "crispEdges");
        this.background != null ? this.backgroundNode.setAttribute("fill", this.background) : this.backgroundNode.setAttribute("fill", "none");
        this.border != null ? this.backgroundNode.setAttribute("stroke",
            this.border) : this.backgroundNode.setAttribute("stroke", "none")
    }
    this.updateSvgValue(a);
    return a
};
mxText.prototype.updateSvgValue = function (a) {
    if (this.currentValue != this.value) {
        for (; a.firstChild != null;)a.removeChild(a.firstChild);
        if (this.value != null) {
            var b = this.isStyleSet(mxConstants.FONT_UNDERLINE) ? "underline" : "none", c = this.value.split("\n");
            this.textNodes = Array(c.length);
            for (var d = 0; d < c.length; d++)if (this.isEmptyString(c[d]))this.textNodes[d] = null; else {
                var e = this.createSvgSpan(c[d]);
                a.appendChild(e);
                this.textNodes[d] = e;
                e.setAttribute("text-decoration", b)
            }
        }
        this.currentValue = this.value
    }
};
mxText.prototype.redrawSvg = function () {
    if (this.node.nodeName == "foreignObject")this.redrawHtml(); else {
        var a = Math.round(this.size * this.scale);
        a <= 0 ? this.node.setAttribute("visibility", "hidden") : this.node.removeAttribute("visibility");
        this.updateSvgValue(this.node);
        this.node.setAttribute("font-size", a + "px");
        if (this.opacity != null) {
            this.node.setAttribute("fill-opacity", this.opacity / 100);
            this.node.setAttribute("stroke-opacity", this.opacity / 100)
        }
        var b = this.value, c = this.createHtmlTable();
        this.lastValue = null;
        this.value = mxUtils.htmlEntities(this.value, false);
        this.updateHtmlTable(c);
        document.body.appendChild(c);
        var d = c.offsetWidth * this.scale, e = c.offsetHeight * this.scale;
        c.parentNode.removeChild(c);
        this.value = b;
        b = 2 * this.scale;
        this.align == mxConstants.ALIGN_CENTER ? b = b + d / 2 : this.align == mxConstants.ALIGN_RIGHT && (b = b + d);
        var c = Math.round(a * 1.3), f = this.textNodes != null ? this.textNodes.length : 0, g = this.bounds.x, h = this.bounds.y, g = g + (this.align == mxConstants.ALIGN_RIGHT ? (this.horizontal ? this.bounds.width : this.bounds.height) -
            this.spacingRight * this.scale : this.align == mxConstants.ALIGN_CENTER ? this.spacingLeft * this.scale + ((this.horizontal ? this.bounds.width : this.bounds.height) - this.spacingLeft * this.scale - this.spacingRight * this.scale) / 2 : this.spacingLeft * this.scale + 1), h = h + (this.valign == mxConstants.ALIGN_BOTTOM ? (this.horizontal ? this.bounds.height : this.bounds.width) - (f - 1) * c - this.spacingBottom * this.scale - 4 : this.valign == mxConstants.ALIGN_MIDDLE ? (this.spacingTop * this.scale + (this.horizontal ? this.bounds.height : this.bounds.width) - this.spacingBottom *
            this.scale - (f - 1.5) * c) / 2 : this.spacingTop * this.scale + c);
        if (this.overflow == "fill") {
            this.align == mxConstants.ALIGN_CENTER && (g = Math.max(this.bounds.x + d / 2, g));
            h = Math.max(this.bounds.y + a, h);
            this.boundingBox = new mxRectangle(g - b, h - c, d + 4 * this.scale, e + 1 * this.scale);
            this.boundingBox.x = Math.min(this.bounds.x, this.boundingBox.x);
            this.boundingBox.y = Math.min(this.bounds.y, this.boundingBox.y);
            this.boundingBox.width = Math.max(this.bounds.width, this.boundingBox.width);
            this.boundingBox.height = Math.max(this.bounds.height,
                this.boundingBox.height)
        } else this.boundingBox = new mxRectangle(g - b, h - c, d + 4 * this.scale, e + 1 * this.scale);
        this.horizontal || this.node.setAttribute("transform", "rotate(" + this.verticalTextDegree + " " + (this.bounds.x + this.bounds.width / 2) + " " + (this.bounds.y + this.bounds.height / 2) + ") translate(" + -((this.bounds.height - this.bounds.width) / 2) + " " + -((this.bounds.width - this.bounds.height) / 2) + ")");
        this.redrawSvgTextNodes(g, h, c);
        if (this.value.length > 0 && this.backgroundNode != null && this.node.firstChild != null) {
            this.node.firstChild !=
                this.backgroundNode && this.node.insertBefore(this.backgroundNode, this.node.firstChild);
            this.backgroundNode.setAttribute("x", this.boundingBox.x + this.scale / 2 + 1 * this.scale);
            this.backgroundNode.setAttribute("y", this.boundingBox.y + this.scale / 2 + 2 * this.scale - this.labelPadding);
            this.backgroundNode.setAttribute("width", this.boundingBox.width - this.scale - 2 * this.scale);
            this.backgroundNode.setAttribute("height", this.boundingBox.height - this.scale);
            this.backgroundNode.setAttribute("stroke-width", Math.round(Math.max(1,
                this.scale)))
        }
        if (!mxClient.IS_GC)if (this.clipped && this.bounds.width > 0 && this.bounds.height > 0) {
            this.boundingBox = this.bounds.clone();
            if (!this.horizontal) {
                this.boundingBox.width = this.bounds.height;
                this.boundingBox.height = this.bounds.width
            }
            g = this.bounds.x;
            h = this.bounds.y;
            if (this.horizontal) {
                d = this.bounds.width;
                e = this.bounds.height
            } else {
                d = this.bounds.height;
                e = this.bounds.width
            }
            a = this.getSvgClip(this.node.ownerSVGElement, g, h, d, e);
            if (a != this.clip) {
                this.releaseSvgClip();
                this.clip = a;
                a.refCount++
            }
            this.node.setAttribute("clip-path",
                "url(#" + a.getAttribute("id") + ")")
        } else {
            this.releaseSvgClip();
            this.node.removeAttribute("clip-path")
        }
    }
};
mxText.prototype.redrawSvgTextNodes = function (a, b, c) {
    if (this.textNodes != null)for (var d = 0; d < this.textNodes.length; d++) {
        var e = this.textNodes[d];
        if (e != null) {
            e.setAttribute("x", a);
            e.setAttribute("y", b);
            e.setAttribute("style", "pointer-events: all")
        }
        b = b + c
    }
};
mxText.prototype.releaseSvgClip = function () {
    if (this.clip != null) {
        this.clip.refCount--;
        this.clip.refCount == 0 && this.clip.parentNode.removeChild(this.clip);
        this.clip = null
    }
};
mxText.prototype.getSvgClip = function (a, b, c, d, e) {
    var b = Math.round(b), c = Math.round(c), d = Math.round(d), e = Math.round(e), f = "mx-clip-" + b + "-" + c + "-" + d + "-" + e;
    if (this.clip != null && this.clip.ident == f)return this.clip;
    var g = 0, h;
    for (h = document.getElementById(f + "-" + g); h != null;) {
        if (h.ownerSVGElement == a)return h;
        g++;
        h = f + "-" + g;
        h = document.getElementById(h)
    }
    if (h != null) {
        h = h.cloneNode(true);
        g++
    } else {
        h = document.createElementNS(mxConstants.NS_SVG, "clipPath");
        var k = document.createElementNS(mxConstants.NS_SVG, "rect");
        k.setAttribute("x",
            b);
        k.setAttribute("y", c);
        k.setAttribute("width", d);
        k.setAttribute("height", e);
        h.appendChild(k)
    }
    h.setAttribute("id", f + "-" + g);
    h.ident = f;
    a.appendChild(h);
    h.refCount = 0;
    return h
};
mxText.prototype.isEmptyString = function (a) {
    return a.replace(/ /g, "").length == 0
};
mxText.prototype.createSvgSpan = function (a) {
    var b = document.createElementNS(mxConstants.NS_SVG, "text");
    mxUtils.write(b, a);
    return b
};
mxText.prototype.destroy = function () {
    this.releaseSvgClip();
    mxShape.prototype.destroy.apply(this, arguments)
};
function mxTriangle() {
}
mxTriangle.prototype = new mxActor;
mxTriangle.prototype.constructor = mxTriangle;
mxTriangle.prototype.redrawPath = function (a, b, c, d, e) {
    a.moveTo(0, 0);
    a.lineTo(d, 0.5 * e);
    a.lineTo(0, e);
    a.close()
};
function mxHexagon() {
}
mxHexagon.prototype = new mxActor;
mxHexagon.prototype.constructor = mxHexagon;
mxHexagon.prototype.redrawPath = function (a, b, c, d, e) {
    a.moveTo(0.25 * d, 0);
    a.lineTo(0.75 * d, 0);
    a.lineTo(d, 0.5 * e);
    a.lineTo(0.75 * d, e);
    a.lineTo(0.25 * d, e);
    a.lineTo(0, 0.5 * e);
    a.close()
};
function mxLine(a, b, c) {
    this.bounds = a;
    this.stroke = b;
    this.strokewidth = c != null ? c : 1
}
mxLine.prototype = new mxShape;
mxLine.prototype.constructor = mxLine;
mxLine.prototype.vmlNodes = mxLine.prototype.vmlNodes.concat(["label", "innerNode"]);
mxLine.prototype.mixedModeHtml = !1;
mxLine.prototype.preferModeHtml = !1;
mxLine.prototype.clone = function () {
    var a = new mxLine(this.bounds, this.stroke, this.strokewidth);
    a.isDashed = this.isDashed;
    return a
};
mxLine.prototype.createVml = function () {
    var a = document.createElement("v:group");
    a.style.position = "absolute";
    this.label = document.createElement("v:rect");
    this.label.style.position = "absolute";
    this.label.stroked = "false";
    this.label.filled = "false";
    a.appendChild(this.label);
    this.innerNode = document.createElement("v:shape");
    this.configureVmlShape(this.innerNode);
    a.appendChild(this.innerNode);
    return a
};
mxLine.prototype.reconfigure = function () {
    mxUtils.isVml(this.node) ? this.configureVmlShape(this.innerNode) : mxShape.prototype.reconfigure.apply(this, arguments)
};
mxLine.prototype.redrawVml = function () {
    this.updateVmlShape(this.node);
    this.updateVmlShape(this.label);
    this.innerNode.coordsize = this.node.coordsize;
    this.innerNode.strokeweight = this.strokewidth * this.scale + "px";
    this.innerNode.style.width = this.node.style.width;
    this.innerNode.style.height = this.node.style.height;
    var a = this.bounds.width, b = this.bounds.height;
    this.innerNode.path = this.direction == mxConstants.DIRECTION_NORTH || this.direction == mxConstants.DIRECTION_SOUTH ? "m " + Math.round(a / 2) + " 0 l " + Math.round(a /
        2) + " " + Math.round(b) + " e" : "m 0 " + Math.round(b / 2) + " l " + Math.round(a) + " " + Math.round(b / 2) + " e"
};
mxLine.prototype.createSvg = function () {
    var a = this.createSvgGroup("path");
    this.pipe = this.createSvgPipe();
    a.appendChild(this.pipe);
    return a
};
mxLine.prototype.redrawSvg = function () {
    this.innerNode.setAttribute("stroke-width", Math.round(Math.max(1, this.strokewidth * this.scale)));
    if (this.bounds != null) {
        var a = this.bounds.x, b = this.bounds.y, c = this.bounds.width, d = this.bounds.height, e = null, e = this.direction == mxConstants.DIRECTION_NORTH || this.direction == mxConstants.DIRECTION_SOUTH ? "M " + Math.round(a + c / 2) + " " + Math.round(b) + " L " + Math.round(a + c / 2) + " " + Math.round(b + d) : "M " + Math.round(a) + " " + Math.round(b + d / 2) + " L " + Math.round(a + c) + " " + Math.round(b + d / 2);
        this.innerNode.setAttribute("d", e);
        this.pipe.setAttribute("d", e);
        this.pipe.setAttribute("stroke-width", this.strokewidth + mxShape.prototype.SVG_STROKE_TOLERANCE);
        this.updateSvgTransform(this.innerNode, false);
        this.updateSvgTransform(this.pipe, false);
        this.crisp ? this.innerNode.setAttribute("shape-rendering", "crispEdges") : this.innerNode.removeAttribute("shape-rendering");
        if (this.isDashed) {
            a = Math.max(1, Math.round(3 * this.scale * this.strokewidth));
            this.innerNode.setAttribute("stroke-dasharray", a + " " + a)
        }
    }
};
function mxImageShape(a, b, c, d, e) {
    this.bounds = a;
    this.image = b != null ? b : "";
    this.fill = c;
    this.stroke = d;
    this.strokewidth = e != null ? e : 1;
    this.isShadow = false
}
mxImageShape.prototype = new mxShape;
mxImageShape.prototype.constructor = mxImageShape;
mxImageShape.prototype.crisp = !1;
mxImageShape.prototype.preserveImageAspect = !0;
mxImageShape.prototype.apply = function (a) {
    mxShape.prototype.apply.apply(this, arguments);
    this.stroke = this.fill = null;
    if (this.style != null) {
        this.fill = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BACKGROUND);
        this.stroke = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BORDER);
        this.preserveImageAspect = mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_ASPECT, 1) == 1;
        this.gradient = null
    }
};
mxImageShape.prototype.create = function () {
    var a = null;
    if (this.dialect == mxConstants.DIALECT_SVG) {
        a = this.createSvgGroup("rect");
        this.innerNode.setAttribute("visibility", "hidden");
        this.innerNode.setAttribute("pointer-events", "fill");
        this.imageNode = document.createElementNS(mxConstants.NS_SVG, "image");
        this.imageNode.setAttributeNS(mxConstants.NS_XLINK, "xlink:href", this.image);
        this.imageNode.setAttribute("style", "pointer-events:none");
        this.configureSvgShape(this.imageNode);
        this.imageNode.removeAttribute("stroke");
        this.imageNode.removeAttribute("fill");
        a.insertBefore(this.imageNode, this.innerNode);
        if (this.fill != null && this.fill != mxConstants.NONE || this.stroke != null && this.stroke != mxConstants.NONE) {
            this.bg = document.createElementNS(mxConstants.NS_SVG, "rect");
            a.insertBefore(this.bg, a.firstChild)
        }
        this.preserveImageAspect || this.imageNode.setAttribute("preserveAspectRatio", "none")
    } else {
        var a = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_FLIPH, 0) == 1, b = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_FLIPV, 0) ==
            1, c = this.image.toUpperCase();
        if (mxClient.IS_IE && !a && !b && c.substring(0, 6) == "MHTML:") {
            this.imageNode = document.createElement("DIV");
            this.imageNode.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader (src='" + this.image + "', sizingMethod='scale')";
            a = document.createElement("DIV");
            this.configureHtmlShape(a)
        } else if (!mxClient.IS_IE || c.substring(0, 5) == "DATA:" || document.documentMode >= 9) {
            this.imageNode = document.createElement("img");
            this.imageNode.setAttribute("src", this.image);
            this.imageNode.setAttribute("border",
                "0");
            this.imageNode.style.position = "absolute";
            this.imageNode.style.width = "100%";
            this.imageNode.style.height = "100%";
            a = document.createElement("DIV");
            this.configureHtmlShape(a)
        } else {
            this.imageNode = document.createElement("v:image");
            this.imageNode.style.position = "absolute";
            this.imageNode.src = this.image;
            a = document.createElement("DIV");
            this.configureHtmlShape(a);
            a.style.overflow = "visible"
        }
        a.appendChild(this.imageNode)
    }
    return a
};
mxImageShape.prototype.updateAspect = function (a, b) {
    var c = Math.min(this.bounds.width / a, this.bounds.height / b), a = Math.max(0, Math.round(a * c)), b = Math.max(0, Math.round(b * c)), c = Math.max(0, Math.round((this.bounds.width - a) / 2)), d = Math.max(0, Math.round((this.bounds.height - b) / 2)), e = this.imageNode.style;
    if (this.imageNode.parentNode == this.node) {
        this.node.style.paddingLeft = c + "px";
        this.node.style.paddingTop = d + "px"
    } else {
        e.left = Math.round(this.bounds.x) + c + "px";
        e.top = Math.round(this.bounds.y) + d + "px"
    }
    e.width = a + "px";
    e.height =
        b + "px"
};
mxImageShape.prototype.scheduleUpdateAspect = function () {
    var a = new Image;
    a.onload = mxUtils.bind(this, function () {
        mxImageShape.prototype.updateAspect.call(this, a.width, a.height)
    });
    a.src = this.image
};
mxImageShape.prototype.redraw = function () {
    mxShape.prototype.redraw.apply(this, arguments);
    if (this.imageNode != null && this.bounds != null) {
        var a = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_FLIPH, 0) == 1, b = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_FLIPV, 0) == 1;
        if (this.dialect == mxConstants.DIALECT_SVG) {
            var c = 1, d = 1, e = 0, f = 0;
            if (a) {
                c = -1;
                e = -this.bounds.width - 2 * this.bounds.x
            }
            if (b) {
                d = -1;
                f = -this.bounds.height - 2 * this.bounds.y
            }
            this.imageNode.setAttribute("transform", (this.imageNode.getAttribute("transform") ||
                "") + " scale(" + c + " " + d + ") translate(" + e + " " + f + ")")
        } else {
            if (this.imageNode.nodeName != "DIV") {
                this.imageNode.style.width = Math.max(0, Math.round(this.bounds.width)) + "px";
                this.imageNode.style.height = Math.max(0, Math.round(this.bounds.height)) + "px"
            }
            this.preserveImageAspect && this.scheduleUpdateAspect();
            if (a || b)if (mxUtils.isVml(this.imageNode))a && b ? this.imageNode.style.rotation = "180" : this.imageNode.style.flip = a ? "x" : "y"; else {
                c = this.imageNode.nodeName == "DIV" ? "progid:DXImageTransform.Microsoft.AlphaImageLoader (src='" +
                    this.image + "', sizingMethod='scale')" : "";
                c = a && b ? c + "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)" : a ? c + "progid:DXImageTransform.Microsoft.BasicImage(mirror=1)" : c + "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
                if (this.imageNode.style.filter != c)this.imageNode.style.filter = c
            }
        }
    }
};
mxImageShape.prototype.configureTransparentBackground = function () {
};
mxImageShape.prototype.redrawSvg = function () {
    this.updateSvgShape(this.innerNode);
    this.updateSvgShape(this.imageNode);
    if (this.bg != null) {
        this.updateSvgShape(this.bg);
        this.fill != null ? this.bg.setAttribute("fill", this.fill) : this.bg.setAttribute("fill", "none");
        this.stroke != null ? this.bg.setAttribute("stroke", this.stroke) : this.bg.setAttribute("stroke", "none");
        this.bg.setAttribute("shape-rendering", "crispEdges")
    }
};
mxImageShape.prototype.configureSvgShape = function (a) {
    mxShape.prototype.configureSvgShape.apply(this, arguments);
    this.imageNode != null && (this.opacity != null ? this.imageNode.setAttribute("opacity", this.opacity / 100) : this.imageNode.removeAttribute("opacity"))
};
function mxLabel(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxLabel.prototype = new mxShape;
mxLabel.prototype.constructor = mxLabel;
mxLabel.prototype.vmlNodes = mxLabel.prototype.vmlNodes.concat(["label", "imageNode", "indicatorImageNode", "rectNode"]);
mxLabel.prototype.imageSize = mxConstants.DEFAULT_IMAGESIZE;
mxLabel.prototype.spacing = 2;
mxLabel.prototype.indicatorSize = 10;
mxLabel.prototype.indicatorSpacing = 2;
mxLabel.prototype.opaqueVmlImages = !1;
mxLabel.prototype.init = function (a) {
    mxShape.prototype.init.apply(this, arguments);
    if (this.indicatorColor != null && this.indicatorShape != null) {
        this.indicator = new this.indicatorShape;
        this.indicator.dialect = this.dialect;
        this.indicator.bounds = this.bounds;
        this.indicator.fill = this.indicatorColor;
        this.indicator.stroke = this.indicatorColor;
        this.indicator.gradient = this.indicatorGradientColor;
        this.indicator.direction = this.indicatorDirection;
        this.indicator.init(this.node);
        this.indicatorShape = null
    }
};
mxLabel.prototype.reconfigure = function () {
    mxShape.prototype.reconfigure.apply(this);
    if (this.indicator != null) {
        this.indicator.fill = this.indicatorColor;
        this.indicator.stroke = this.indicatorColor;
        this.indicator.gradient = this.indicatorGradientColor;
        this.indicator.direction = this.indicatorDirection;
        this.indicator.reconfigure()
    }
};
mxLabel.prototype.createHtml = function () {
    var a = document.createElement("DIV");
    this.configureHtmlShape(a);
    if (this.indicatorImage != null) {
        this.indicatorImageNode = mxUtils.createImage(this.indicatorImage);
        this.indicatorImageNode.style.position = "absolute";
        a.appendChild(this.indicatorImageNode)
    }
    if (this.image != null) {
        this.imageNode = mxUtils.createImage(this.image);
        this.stroke = null;
        this.configureHtmlShape(this.imageNode);
        mxUtils.setOpacity(this.imageNode, "100");
        a.appendChild(this.imageNode)
    }
    return a
};
mxLabel.prototype.createVml = function () {
    var a = document.createElement("v:group");
    this.rectNode = document.createElement(this.isRounded ? "v:roundrect" : "v:rect");
    this.configureVmlShape(this.rectNode);
    this.isShadow = false;
    this.configureVmlShape(a);
    a.coordorigin = "0,0";
    a.appendChild(this.rectNode);
    if (this.indicatorImage != null) {
        this.indicatorImageNode = this.createVmlImage(this.indicatorImage, this.opaqueVmlImages ? null : this.opacity);
        a.appendChild(this.indicatorImageNode)
    }
    if (this.image != null) {
        this.imageNode = this.createVmlImage(this.image,
            this.opaqueVmlImages ? null : this.opacity);
        a.appendChild(this.imageNode)
    }
    this.label = document.createElement("v:rect");
    this.label.style.top = "0px";
    this.label.style.left = "0px";
    this.label.filled = "false";
    this.label.stroked = "false";
    a.appendChild(this.label);
    return a
};
mxLabel.prototype.createVmlImage = function (a, b) {
    var c = null;
    if (a.substring(0, 5) == "data:" || b != null) {
        c = document.createElement("img");
        mxUtils.setOpacity(c, b);
        c.setAttribute("border", "0");
        c.style.position = "absolute";
        c.setAttribute("src", a)
    } else {
        c = document.createElement("v:image");
        c.src = a
    }
    return c
};
mxLabel.prototype.createSvg = function () {
    var a = this.createSvgGroup("rect");
    if (this.indicatorImage != null) {
        this.indicatorImageNode = document.createElementNS(mxConstants.NS_SVG, "image");
        this.indicatorImageNode.setAttributeNS(mxConstants.NS_XLINK, "href", this.indicatorImage);
        a.appendChild(this.indicatorImageNode);
        this.opacity != null && this.indicatorImageNode.setAttribute("opacity", this.opacity / 100)
    }
    if (this.image != null) {
        this.imageNode = document.createElementNS(mxConstants.NS_SVG, "image");
        this.imageNode.setAttributeNS(mxConstants.NS_XLINK,
            "href", this.image);
        this.opacity != null && this.imageNode.setAttribute("opacity", this.opacity / 100);
        this.imageNode.setAttribute("style", "pointer-events:none");
        this.configureSvgShape(this.imageNode);
        a.appendChild(this.imageNode)
    }
    return a
};
mxLabel.prototype.redraw = function () {
    this.updateBoundingBox();
    var a = this.dialect == mxConstants.DIALECT_SVG, b = mxUtils.isVml(this.node);
    if (a) {
        this.updateSvgShape(this.innerNode);
        this.shadowNode != null && this.updateSvgShape(this.shadowNode);
        this.updateSvgGlassPane()
    } else if (b) {
        this.updateVmlShape(this.node);
        this.updateVmlShape(this.rectNode);
        this.label.style.width = this.node.style.width;
        this.label.style.height = this.node.style.height;
        this.updateVmlGlassPane()
    } else this.updateHtmlShape(this.node);
    var c = b = 0;
    if (this.imageNode != null) {
        b = (this.style[mxConstants.STYLE_IMAGE_WIDTH] || this.imageSize) * this.scale;
        c = (this.style[mxConstants.STYLE_IMAGE_HEIGHT] || this.imageSize) * this.scale
    }
    var d = 0, e = 0, f = 0;
    if (this.indicator != null || this.indicatorImageNode != null) {
        d = (this.style[mxConstants.STYLE_INDICATOR_SPACING] || this.indicatorSpacing) * this.scale;
        e = (this.style[mxConstants.STYLE_INDICATOR_WIDTH] || this.indicatorSize) * this.scale;
        f = (this.style[mxConstants.STYLE_INDICATOR_HEIGHT] || this.indicatorSize) * this.scale
    }
    var g = this.style[mxConstants.STYLE_IMAGE_ALIGN],
        h = this.style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN], k = this.spacing * this.scale + 5, i = Math.max(b, e), l = c + d + f, m = a ? this.bounds.x : 0, m = g == mxConstants.ALIGN_RIGHT ? m + (this.bounds.width - i - k) : g == mxConstants.ALIGN_CENTER ? m + (this.bounds.width - i) / 2 : m + k, g = a ? this.bounds.y : 0, g = h == mxConstants.ALIGN_BOTTOM ? g + (this.bounds.height - l - k) : h == mxConstants.ALIGN_TOP ? g + k : g + (this.bounds.height - l) / 2;
    if (this.imageNode != null)if (a) {
        this.imageNode.setAttribute("x", m + (i - b) / 2 + "px");
        this.imageNode.setAttribute("y", g + "px");
        this.imageNode.setAttribute("width",
            b + "px");
        this.imageNode.setAttribute("height", c + "px")
    } else {
        this.imageNode.style.left = m + i - b + "px";
        this.imageNode.style.top = g + "px";
        this.imageNode.style.width = b + "px";
        this.imageNode.style.height = c + "px";
        this.imageNode.stroked = "false"
    }
    if (this.indicator != null) {
        this.indicator.bounds = new mxRectangle(m + (i - e) / 2, g + c + d, e, f);
        this.indicator.redraw()
    } else if (this.indicatorImageNode != null)if (a) {
        this.indicatorImageNode.setAttribute("x", m + (i - e) / 2 + "px");
        this.indicatorImageNode.setAttribute("y", g + c + d + "px");
        this.indicatorImageNode.setAttribute("width",
            e + "px");
        this.indicatorImageNode.setAttribute("height", f + "px")
    } else {
        this.indicatorImageNode.style.left = m + (i - e) / 2 + "px";
        this.indicatorImageNode.style.top = g + c + d + "px";
        this.indicatorImageNode.style.width = e + "px";
        this.indicatorImageNode.style.height = f + "px"
    }
};
function mxCylinder(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxCylinder.prototype = new mxShape;
mxCylinder.prototype.constructor = mxCylinder;
mxCylinder.prototype.vmlNodes = mxCylinder.prototype.vmlNodes.concat(["background", "foreground"]);
mxCylinder.prototype.mixedModeHtml = !1;
mxCylinder.prototype.preferModeHtml = !1;
mxCylinder.prototype.addPipe = !1;
mxCylinder.prototype.strokedBackground = !0;
mxCylinder.prototype.maxHeight = 40;
mxCylinder.prototype.vmlScale = 2;
mxCylinder.prototype.create = function (a) {
    if (this.stroke == null)this.stroke = this.fill;
    return mxShape.prototype.create.apply(this, arguments)
};
mxCylinder.prototype.reconfigure = function () {
    if (this.dialect == mxConstants.DIALECT_SVG) {
        this.configureSvgShape(this.foreground);
        this.foreground.setAttribute("fill", "none")
    } else if (mxUtils.isVml(this.node)) {
        this.configureVmlShape(this.background);
        this.configureVmlShape(this.foreground)
    }
    mxShape.prototype.reconfigure.apply(this)
};
mxCylinder.prototype.createVml = function () {
    var a = document.createElement("v:group");
    this.label = this.background = document.createElement("v:shape");
    this.configureVmlShape(this.background);
    a.appendChild(this.background);
    this.fill = null;
    this.isShadow = false;
    this.configureVmlShape(a);
    this.foreground = document.createElement("v:shape");
    this.configureVmlShape(this.foreground);
    this.fgStrokeNode = document.createElement("v:stroke");
    this.fgStrokeNode.joinstyle = "miter";
    this.fgStrokeNode.miterlimit = 4;
    this.foreground.appendChild(this.fgStrokeNode);
    a.appendChild(this.foreground);
    return a
};
mxCylinder.prototype.redrawVml = function () {
    this.updateVmlShape(this.node);
    this.updateVmlShape(this.background);
    this.updateVmlShape(this.foreground);
    this.background.path = this.createPath(false);
    this.foreground.path = this.createPath(true);
    this.fgStrokeNode.dashstyle = this.strokeNode.dashstyle
};
mxCylinder.prototype.createSvg = function () {
    var a = this.createSvgGroup("path");
    this.foreground = document.createElementNS(mxConstants.NS_SVG, "path");
    this.stroke != null && this.stroke != mxConstants.NONE ? this.foreground.setAttribute("stroke", this.stroke) : this.foreground.setAttribute("stroke", "none");
    this.foreground.setAttribute("fill", "none");
    a.appendChild(this.foreground);
    if (this.addPipe) {
        this.pipe = this.createSvgPipe();
        a.appendChild(this.pipe)
    }
    return a
};
mxCylinder.prototype.redrawSvg = function () {
    var a = Math.round(Math.max(1, this.strokewidth * this.scale));
    this.innerNode.setAttribute("stroke-width", a);
    if (this.crisp && (this.rotation == null || this.rotation == 0)) {
        this.innerNode.setAttribute("shape-rendering", "crispEdges");
        this.foreground.setAttribute("shape-rendering", "crispEdges")
    } else {
        this.innerNode.removeAttribute("shape-rendering");
        this.foreground.removeAttribute("shape-rendering")
    }
    var b = this.createPath(false);
    if (b.length > 0) {
        this.innerNode.setAttribute("d",
            b);
        if (this.pipe != null) {
            this.pipe.setAttribute("d", b);
            this.pipe.setAttribute("stroke-width", a + mxShape.prototype.SVG_STROKE_TOLERANCE);
            this.pipe.setAttribute("transform", this.innerNode.getAttribute("transform") || "")
        }
    } else {
        this.innerNode.removeAttribute("d");
        this.pipe != null && this.pipe.removeAttribute("d")
    }
    this.strokedBackground || this.innerNode.setAttribute("stroke", "none");
    if (this.shadowNode != null) {
        this.shadowNode.setAttribute("stroke-width", a);
        this.shadowNode.setAttribute("d", b);
        this.shadowNode.setAttribute("transform",
            this.getSvgShadowTransform())
    }
    b = this.createPath(true);
    if (b.length > 0) {
        this.foreground.setAttribute("stroke-width", a);
        this.foreground.setAttribute("d", b)
    } else this.foreground.removeAttribute("d");
    if (this.isDashed) {
        a = Math.max(1, Math.round(3 * this.scale * this.strokewidth));
        this.innerNode.setAttribute("stroke-dasharray", a + " " + a);
        this.foreground.setAttribute("stroke-dasharray", a + " " + a)
    }
};
mxCylinder.prototype.redrawPath = function (a, b, c, d, e, f) {
    b = Math.min(this.maxHeight, Math.round(e / 5));
    if (f) {
        a.moveTo(0, b);
        a.curveTo(0, 2 * b, d, 2 * b, d, b)
    } else {
        a.moveTo(0, b);
        a.curveTo(0, -b / 3, d, -b / 3, d, b);
        a.lineTo(d, e - b);
        a.curveTo(d, e + b / 3, 0, e + b / 3, 0, e - b);
        a.close()
    }
};
function mxConnector(a, b, c) {
    this.points = a;
    this.stroke = b;
    this.strokewidth = c != null ? c : 1
}
mxConnector.prototype = new mxShape;
mxConnector.prototype.constructor = mxConnector;
mxConnector.prototype.vmlNodes = mxConnector.prototype.vmlNodes.concat("shapeNode start end startStroke endStroke startFill endFill".split(" "));
mxConnector.prototype.mixedModeHtml = !1;
mxConnector.prototype.preferModeHtml = !1;
mxConnector.prototype.allowCrispMarkers = !1;
mxConnector.prototype.addPipe = !0;
mxConnector.prototype.configureHtmlShape = function (a) {
    mxShape.prototype.configureHtmlShape.apply(this, arguments);
    a.style.borderStyle = "";
    a.style.background = ""
};
mxConnector.prototype.createVml = function () {
    var a = document.createElement("v:group");
    a.style.position = "absolute";
    this.shapeNode = document.createElement("v:shape");
    this.updateVmlStrokeColor(this.shapeNode);
    this.updateVmlStrokeNode(this.shapeNode);
    a.appendChild(this.shapeNode);
    this.shapeNode.filled = "false";
    this.isShadow && this.createVmlShadow(this.shapeNode);
    if (this.startArrow != null) {
        this.start = document.createElement("v:shape");
        this.start.style.position = "absolute";
        this.startStroke = document.createElement("v:stroke");
        this.startStroke.joinstyle = "miter";
        this.start.appendChild(this.startStroke);
        this.startFill = document.createElement("v:fill");
        this.start.appendChild(this.startFill);
        a.appendChild(this.start)
    }
    if (this.endArrow != null) {
        this.end = document.createElement("v:shape");
        this.end.style.position = "absolute";
        this.endStroke = document.createElement("v:stroke");
        this.endStroke.joinstyle = "miter";
        this.end.appendChild(this.endStroke);
        this.endFill = document.createElement("v:fill");
        this.end.appendChild(this.endFill);
        a.appendChild(this.end)
    }
    this.updateVmlMarkerOpacity();
    return a
};
mxConnector.prototype.updateVmlMarkerOpacity = function () {
    var a = this.opacity != null ? this.opacity + "%" : "100%";
    if (this.start != null) {
        this.startFill.opacity = a;
        this.startStroke.opacity = a
    }
    if (this.end != null) {
        this.endFill.opacity = a;
        this.endStroke.opacity = a
    }
};
mxConnector.prototype.reconfigure = function () {
    this.fill = null;
    if (mxUtils.isVml(this.node)) {
        this.node.style.visibility = "hidden";
        this.configureVmlShape(this.shapeNode);
        this.updateVmlMarkerOpacity();
        this.node.style.visibility = "visible"
    } else mxShape.prototype.reconfigure.apply(this, arguments)
};
mxConnector.prototype.redrawVml = function () {
    if (this.node != null && this.points != null && this.bounds != null && !isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height)) {
        var a = Math.max(0, Math.round(this.bounds.width)), b = Math.max(0, Math.round(this.bounds.height)), c = a + "," + b, a = a + "px", b = b + "px";
        if (this.start != null) {
            this.start.style.width = a;
            this.start.style.height = b;
            this.start.coordsize = c;
            var d = this.points[1], e = this.points[0], f = mxUtils.getNumber(this.style, mxConstants.STYLE_STARTSIZE,
                mxConstants.DEFAULT_MARKERSIZE);
            this.startOffset = this.redrawMarker(this.start, this.startArrow, d, e, this.stroke, f)
        }
        if (this.end != null) {
            this.end.style.width = a;
            this.end.style.height = b;
            this.end.coordsize = c;
            a = this.points.length;
            d = this.points[a - 2];
            e = this.points[a - 1];
            f = mxUtils.getNumber(this.style, mxConstants.STYLE_ENDSIZE, mxConstants.DEFAULT_MARKERSIZE);
            this.endOffset = this.redrawMarker(this.end, this.endArrow, d, e, this.stroke, f)
        }
        this.updateVmlShape(this.node);
        this.updateVmlShape(this.shapeNode);
        this.shapeNode.filled =
            "false";
        if (this.isDashed) {
            d = mxUtils.getValue(this.style, "dashStyle", null);
            if (d != null)this.strokeNode.dashstyle = d;
            if (this.shadowStrokeNode != null)this.shadowStrokeNode.dashstyle = this.strokeNode.dashstyle
        }
    }
};
mxConnector.prototype.createSvg = function () {
    this.fill = null;
    var a = this.createSvgGroup("path");
    if (this.startArrow != null) {
        this.start = document.createElementNS(mxConstants.NS_SVG, "path");
        a.appendChild(this.start)
    }
    if (this.endArrow != null) {
        this.end = document.createElementNS(mxConstants.NS_SVG, "path");
        a.appendChild(this.end)
    }
    if (this.addPipe) {
        this.pipe = this.createSvgPipe();
        a.appendChild(this.pipe)
    }
    return a
};
mxConnector.prototype.redrawSvg = function () {
    if (this.points != null && this.points[0] != null) {
        var a = this.innerNode.getAttribute("stroke");
        if (this.start != null) {
            var b = this.points[1], c = this.points[0], d = mxUtils.getNumber(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_MARKERSIZE);
            this.startOffset = this.redrawMarker(this.start, this.startArrow, b, c, a, d);
            this.allowCrispMarkers && this.crisp ? this.start.setAttribute("shape-rendering", "crispEdges") : this.start.removeAttribute("shape-rendering")
        }
        if (this.end !=
            null) {
            c = this.points.length;
            b = this.points[c - 2];
            c = this.points[c - 1];
            d = mxUtils.getNumber(this.style, mxConstants.STYLE_ENDSIZE, mxConstants.DEFAULT_MARKERSIZE);
            this.endOffset = this.redrawMarker(this.end, this.endArrow, b, c, a, d);
            this.allowCrispMarkers && this.crisp ? this.end.setAttribute("shape-rendering", "crispEdges") : this.end.removeAttribute("shape-rendering")
        }
    }
    this.updateSvgShape(this.innerNode);
    a = this.innerNode.getAttribute("d");
    if (a != null) {
        b = Math.round(this.strokewidth * this.scale);
        if (this.pipe != null) {
            this.pipe.setAttribute("d",
                this.innerNode.getAttribute("d"));
            this.pipe.setAttribute("stroke-width", b + mxShape.prototype.SVG_STROKE_TOLERANCE)
        }
        if (this.shadowNode != null) {
            this.shadowNode.setAttribute("transform", this.getSvgShadowTransform());
            this.shadowNode.setAttribute("d", a);
            this.shadowNode.setAttribute("stroke-width", b)
        }
    }
    if (this.isDashed) {
        a = this.createDashPattern(this.scale * this.strokewidth);
        a != null && this.innerNode.setAttribute("stroke-dasharray", a)
    }
    if (this.shadowNode != null) {
        a = this.innerNode.getAttribute("stroke-dasharray");
        a != null && this.shadowNode.setAttribute("stroke-dasharray", a)
    }
};
mxConnector.prototype.createDashPattern = function (a) {
    var b = mxUtils.getValue(this.style, "dashPattern", null);
    if (b != null) {
        for (var b = b.split(" "), c = [], d = 0; d < b.length; d++)b[d].length > 0 && c.push(Math.round(Number(b[d]) * a));
        return c.join(" ")
    }
    return null
};
mxConnector.prototype.redrawMarker = function (a, b, c, d, e, f) {
    return mxMarker.paintMarker(a, b, c, d, e, this.strokewidth, f, this.scale, this.bounds.x, this.bounds.y, this.start == a, this.style)
};
function mxSwimlane(a, b, c, d) {
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxSwimlane.prototype = new mxShape;
mxSwimlane.prototype.constructor = mxSwimlane;
mxSwimlane.prototype.vmlNodes = mxSwimlane.prototype.vmlNodes.concat(["label", "content", "imageNode", "separator"]);
mxSwimlane.prototype.imageSize = 16;
mxSwimlane.prototype.mixedModeHtml = !1;
mxRhombus.prototype.preferModeHtml = !1;
mxSwimlane.prototype.createHtml = function () {
    var a = document.createElement("DIV");
    this.configureHtmlShape(a);
    a.style.background = "";
    a.style.backgroundColor = "";
    a.style.borderStyle = "none";
    this.label = document.createElement("DIV");
    this.configureHtmlShape(this.label);
    a.appendChild(this.label);
    this.content = document.createElement("DIV");
    this.configureHtmlShape(this.content);
    this.content.style.backgroundColor = "";
    mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, true) ? this.content.style.borderTopStyle =
        "none" : this.content.style.borderLeftStyle = "none";
    this.content.style.cursor = "default";
    a.appendChild(this.content);
    var b = this.style[mxConstants.STYLE_SEPARATORCOLOR];
    if (b != null) {
        this.separator = document.createElement("DIV");
        this.separator.style.borderColor = b;
        this.separator.style.borderLeftStyle = "dashed";
        a.appendChild(this.separator)
    }
    if (this.image != null) {
        this.imageNode = mxUtils.createImage(this.image);
        this.configureHtmlShape(this.imageNode);
        this.imageNode.style.borderStyle = "none";
        a.appendChild(this.imageNode)
    }
    return a
};
mxSwimlane.prototype.reconfigure = function (a) {
    mxShape.prototype.reconfigure.apply(this, arguments);
    if (this.dialect == mxConstants.DIALECT_SVG) {
        if (this.shadowNode != null) {
            this.updateSvgShape(this.shadowNode);
            mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, true) ? this.shadowNode.setAttribute("height", this.startSize * this.scale) : this.shadowNode.setAttribute("width", this.startSize * this.scale)
        }
    } else if (!mxUtils.isVml(this.node)) {
        this.node.style.background = "";
        this.node.style.backgroundColor = ""
    }
};
mxSwimlane.prototype.redrawHtml = function () {
    this.updateHtmlShape(this.node);
    this.node.style.background = "";
    this.node.style.backgroundColor = "";
    this.startSize = parseInt(mxUtils.getValue(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE));
    this.updateHtmlShape(this.label);
    this.label.style.top = "0px";
    this.label.style.left = "0px";
    if (mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, true)) {
        this.startSize = Math.min(this.startSize, this.bounds.height);
        this.label.style.height = this.startSize *
            this.scale + "px";
        this.updateHtmlShape(this.content);
        this.content.style.background = "";
        this.content.style.backgroundColor = "";
        var a = this.startSize * this.scale;
        this.content.style.top = a + "px";
        this.content.style.left = "0px";
        this.content.style.height = Math.max(1, this.bounds.height - a) + "px";
        if (this.separator != null) {
            this.separator.style.left = Math.round(this.bounds.width) + "px";
            this.separator.style.top = Math.round(this.startSize * this.scale) + "px";
            this.separator.style.width = "1px";
            this.separator.style.height = Math.round(this.bounds.height) +
                "px";
            this.separator.style.borderWidth = Math.round(this.scale) + "px"
        }
        if (this.imageNode != null) {
            this.imageNode.style.left = this.bounds.width - this.imageSize - 4 + "px";
            this.imageNode.style.top = "0px";
            this.imageNode.style.width = Math.round(this.imageSize * this.scale) + "px";
            this.imageNode.style.height = Math.round(this.imageSize * this.scale) + "px"
        }
    } else {
        this.startSize = Math.min(this.startSize, this.bounds.width);
        this.label.style.width = this.startSize * this.scale + "px";
        this.updateHtmlShape(this.content);
        this.content.style.background =
            "";
        this.content.style.backgroundColor = "";
        a = this.startSize * this.scale;
        this.content.style.top = "0px";
        this.content.style.left = a + "px";
        this.content.style.width = Math.max(0, this.bounds.width - a) + "px";
        if (this.separator != null) {
            this.separator.style.left = Math.round(this.startSize * this.scale) + "px";
            this.separator.style.top = Math.round(this.bounds.height) + "px";
            this.separator.style.width = Math.round(this.bounds.width) + "px";
            this.separator.style.height = "1px"
        }
        if (this.imageNode != null) {
            this.imageNode.style.left = this.bounds.width -
                this.imageSize - 4 + "px";
            this.imageNode.style.top = "0px";
            this.imageNode.style.width = this.imageSize * this.scale + "px";
            this.imageNode.style.height = this.imageSize * this.scale + "px"
        }
    }
};
mxSwimlane.prototype.createVml = function () {
    var a = document.createElement("v:group"), b = this.isRounded ? "v:roundrect" : "v:rect";
    this.label = document.createElement(b);
    this.configureVmlShape(this.label);
    this.isRounded && this.label.setAttribute("arcsize", "20%");
    this.isShadow = false;
    this.configureVmlShape(a);
    a.coordorigin = "0,0";
    a.appendChild(this.label);
    this.content = document.createElement(b);
    b = this.fill;
    this.fill = null;
    this.configureVmlShape(this.content);
    a.style.background = "";
    this.isRounded && this.content.setAttribute("arcsize",
        "4%");
    this.fill = b;
    this.content.style.borderBottom = "0px";
    a.appendChild(this.content);
    b = this.style[mxConstants.STYLE_SEPARATORCOLOR];
    if (b != null) {
        this.separator = document.createElement("v:shape");
        this.separator.style.position = "absolute";
        this.separator.strokecolor = b;
        b = document.createElement("v:stroke");
        b.dashstyle = "2 2";
        this.separator.appendChild(b);
        a.appendChild(this.separator)
    }
    if (this.image != null) {
        this.imageNode = document.createElement("v:image");
        this.imageNode.src = this.image;
        this.configureVmlShape(this.imageNode);
        this.imageNode.stroked = "false";
        a.appendChild(this.imageNode)
    }
    return a
};
mxSwimlane.prototype.redrawVml = function () {
    var a = Math.round(this.bounds.x), b = Math.round(this.bounds.y), c = Math.round(this.bounds.width), d = Math.round(this.bounds.height);
    this.updateVmlShape(this.node);
    this.node.coordsize = c + "," + d;
    this.updateVmlShape(this.label);
    this.label.style.top = "0px";
    this.label.style.left = "0px";
    this.label.style.rotation = null;
    this.startSize = parseInt(mxUtils.getValue(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE));
    var e = Math.round(this.startSize * this.scale);
    if (this.separator !=
        null) {
        this.separator.coordsize = c + "," + d;
        this.separator.style.left = a + "px";
        this.separator.style.top = b + "px";
        this.separator.style.width = c + "px";
        this.separator.style.height = d + "px"
    }
    if (mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, true)) {
        e = Math.min(e, this.bounds.height);
        this.label.style.height = e + "px";
        this.updateVmlShape(this.content);
        this.content.style.background = "";
        this.content.style.top = e + "px";
        this.content.style.left = "0px";
        this.content.style.height = Math.max(0, d - e) + "px";
        if (this.separator != null)this.separator.path =
            "m " + (c - a) + " " + (e - b) + " l " + (c - a) + " " + (d - b) + " e"
    } else {
        e = Math.min(e, this.bounds.width);
        this.label.style.width = e + "px";
        this.updateVmlShape(this.content);
        this.content.style.background = "";
        this.content.style.top = "0px";
        this.content.style.left = e + "px";
        this.content.style.width = Math.max(0, c - e) + "px";
        if (this.separator != null)this.separator.path = "m " + (e - a) + " " + (d - b) + " l " + (c - a) + " " + (d - b) + " e"
    }
    if (this.imageNode != null) {
        a = Math.round(this.imageSize * this.scale);
        this.imageNode.style.left = c - a - 4 + "px";
        this.imageNode.style.top =
            "0px";
        this.imageNode.style.width = a + "px";
        this.imageNode.style.height = a + "px"
    }
    this.content.style.rotation = null
};
mxSwimlane.prototype.createSvg = function () {
    var a = this.createSvgGroup("rect");
    if (this.isRounded) {
        this.innerNode.setAttribute("rx", 10);
        this.innerNode.setAttribute("ry", 10)
    }
    this.content = document.createElementNS(mxConstants.NS_SVG, "path");
    this.configureSvgShape(this.content);
    this.content.setAttribute("fill", "none");
    if (this.isRounded) {
        this.content.setAttribute("rx", 10);
        this.content.setAttribute("ry", 10)
    }
    a.appendChild(this.content);
    var b = this.style[mxConstants.STYLE_SEPARATORCOLOR];
    if (b != null) {
        this.separator =
            document.createElementNS(mxConstants.NS_SVG, "line");
        this.separator.setAttribute("stroke", b);
        this.separator.setAttribute("fill", "none");
        this.separator.setAttribute("stroke-dasharray", "2, 2");
        a.appendChild(this.separator)
    }
    if (this.image != null) {
        this.imageNode = document.createElementNS(mxConstants.NS_SVG, "image");
        this.imageNode.setAttributeNS(mxConstants.NS_XLINK, "href", this.image);
        this.configureSvgShape(this.imageNode);
        a.appendChild(this.imageNode)
    }
    return a
};
mxSwimlane.prototype.redrawSvg = function () {
    var a = this.isRounded;
    this.isRounded = false;
    this.updateSvgShape(this.innerNode);
    this.updateSvgShape(this.content);
    var b = mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, true);
    this.startSize = parseInt(mxUtils.getValue(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE));
    var c = this.startSize * this.scale;
    if (this.shadowNode != null) {
        this.updateSvgShape(this.shadowNode);
        b ? this.shadowNode.setAttribute("height", c) : this.shadowNode.setAttribute("width",
            c)
    }
    this.isRounded = a;
    this.content.removeAttribute("x");
    this.content.removeAttribute("y");
    this.content.removeAttribute("width");
    this.content.removeAttribute("height");
    var d = this.crisp && mxClient.IS_IE ? 0.5 : 0, a = Math.round(this.bounds.x) + d, d = Math.round(this.bounds.y) + d, e = Math.round(this.bounds.width), f = Math.round(this.bounds.height);
    if (b) {
        c = Math.min(c, f);
        this.innerNode.setAttribute("height", c);
        this.content.setAttribute("d", "M " + a + " " + (d + c) + " l 0 " + (f - c) + " l " + e + " 0 l 0 " + (c - f));
        if (this.separator != null) {
            this.separator.setAttribute("x1",
                a + e);
            this.separator.setAttribute("y1", d + c);
            this.separator.setAttribute("x2", a + e);
            this.separator.setAttribute("y2", d + f)
        }
    } else {
        c = Math.min(c, e);
        this.innerNode.setAttribute("width", c);
        this.content.setAttribute("d", "M " + (a + c) + " " + d + " l " + (e - c) + " 0 l 0 " + f + " l " + (c - e) + " 0");
        if (this.separator != null) {
            this.separator.setAttribute("x1", a + c);
            this.separator.setAttribute("y1", d + f);
            this.separator.setAttribute("x2", a + e);
            this.separator.setAttribute("y2", d + f)
        }
    }
    if (this.imageNode != null) {
        this.imageNode.setAttribute("x",
            a + e - this.imageSize - 4);
        this.imageNode.setAttribute("y", d);
        this.imageNode.setAttribute("width", this.imageSize * this.scale + "px");
        this.imageNode.setAttribute("height", this.imageSize * this.scale + "px")
    }
};
function mxGraphLayout(a) {
    this.graph = a
}
mxGraphLayout.prototype.graph = null;
mxGraphLayout.prototype.useBoundingBox = !0;
mxGraphLayout.prototype.parent = null;
mxGraphLayout.prototype.moveCell = function () {
};
mxGraphLayout.prototype.execute = function () {
};
mxGraphLayout.prototype.getGraph = function () {
    return this.graph
};
mxGraphLayout.prototype.getConstraint = function (a, b) {
    var c = this.graph.view.getState(b), c = c != null ? c.style : this.graph.getCellStyle(b);
    return c != null ? c[a] : null
};
mxGraphLayout.traverse = function (a, b, c, d, e) {
    if (c != null && a != null) {
        var b = b != null ? b : true, e = e || [], f = mxCellPath.create(a);
        if (e[f] == null) {
            e[f] = a;
            d = c(a, d);
            if (d == null || d) {
                d = this.graph.model.getEdgeCount(a);
                if (d > 0)for (f = 0; f < d; f++) {
                    var g = this.graph.model.getEdgeAt(a, f), h = this.graph.model.getTerminal(g, true) == a;
                    (!b || h) && this.traverse(this.graph.view.getVisibleTerminal(g, !h), b, c, g, e)
                }
            }
        }
    }
};
mxGraphLayout.prototype.isVertexMovable = function (a) {
    return this.graph.isCellMovable(a)
};
mxGraphLayout.prototype.isVertexIgnored = function (a) {
    return!this.graph.getModel().isVertex(a) || !this.graph.isCellVisible(a)
};
mxGraphLayout.prototype.isEdgeIgnored = function (a) {
    var b = this.graph.getModel();
    return!b.isEdge(a) || !this.graph.isCellVisible(a) || b.getTerminal(a, true) == null || b.getTerminal(a, false) == null
};
mxGraphLayout.prototype.setEdgeStyleEnabled = function (a, b) {
    this.graph.setCellStyles(mxConstants.STYLE_NOEDGESTYLE, b ? "0" : "1", [a])
};
mxGraphLayout.prototype.setOrthogonalEdge = function (a, b) {
    this.graph.setCellStyles(mxConstants.STYLE_ORTHOGONAL, b ? "1" : "0", [a])
};
mxGraphLayout.prototype.getParentOffset = function (a) {
    var b = new mxPoint;
    if (a != null && a != this.parent) {
        var c = this.graph.getModel();
        if (c.isAncestor(this.parent, a))for (var d = c.getGeometry(a); a != this.parent;) {
            b.x = b.x + d.x;
            b.y = b.y + d.y;
            a = c.getParent(a);
            d = c.getGeometry(a)
        }
    }
    return b
};
mxGraphLayout.prototype.setEdgePoints = function (a, b) {
    if (a != null) {
        var c = this.graph.model, d = c.getGeometry(a);
        if (d == null) {
            d = new mxGeometry;
            d.setRelative(true)
        } else d = d.clone();
        if (this.parent != null && b != null)for (var e = this.getParentOffset(c.getParent(a)), f = 0; f < b.length; f++) {
            b[f].x = b[f].x - e.x;
            b[f].y = b[f].y - e.y
        }
        d.points = b;
        c.setGeometry(a, d)
    }
};
mxGraphLayout.prototype.setVertexLocation = function (a, b, c) {
    var d = this.graph.getModel(), e = d.getGeometry(a), f = null;
    if (e != null) {
        f = new mxRectangle(b, c, e.width, e.height);
        if (this.useBoundingBox) {
            var g = this.graph.getView().getState(a);
            if (g != null && g.text != null && g.text.boundingBox != null) {
                var h = this.graph.getView().scale, k = g.text.boundingBox;
                if (g.text.boundingBox.x < g.x) {
                    b = b + (g.x - k.x) / h;
                    f.width = k.width
                }
                if (g.text.boundingBox.y < g.y) {
                    c = c + (g.y - k.y) / h;
                    f.height = k.height
                }
            }
        }
        if (this.parent != null) {
            g = d.getParent(a);
            if (g !=
                null && g != this.parent) {
                g = this.getParentOffset(g);
                b = b - g.x;
                c = c - g.y
            }
        }
        if (e.x != b || e.y != c) {
            e = e.clone();
            e.x = b;
            e.y = c;
            d.setGeometry(a, e)
        }
    }
    return f
};
mxGraphLayout.prototype.getVertexBounds = function (a) {
    var b = this.graph.getModel().getGeometry(a);
    if (this.useBoundingBox) {
        var c = this.graph.getView().getState(a);
        if (c != null && c.text != null && c.text.boundingBox != null)var d = this.graph.getView().scale, e = c.text.boundingBox, f = Math.max(c.x - e.x, 0) / d, g = Math.max(c.y - e.y, 0) / d, h = Math.max(e.x + e.width - (c.x + c.width), 0) / d, c = Math.max(e.y + e.height - (c.y + c.height), 0) / d, b = new mxRectangle(b.x - f, b.y - g, b.width + f + h, b.height + g + c)
    }
    if (this.parent != null) {
        a = this.graph.getModel().getParent(a);
        b = b.clone();
        if (a != null && a != this.parent) {
            a = this.getParentOffset(a);
            b.x = b.x + a.x;
            b.y = b.y + a.y
        }
    }
    return new mxRectangle(b.x, b.y, b.width, b.height)
};
mxGraphLayout.prototype.arrangeGroups = function (a, b) {
    this.graph.getModel().beginUpdate();
    try {
        for (var c = a.length - 1; c >= 0; c--) {
            var d = a[c], e = this.graph.getChildVertices(d), f = this.graph.getBoundingBoxFromGeometry(e), g = this.graph.getCellGeometry(d), h = 0, k = 0;
            if (this.graph.isSwimlane(d))var i = this.graph.getStartSize(d), h = i.width, k = i.height;
            if (f != null && g != null) {
                g = g.clone();
                g.x = g.x + f.x - b - h;
                g.y = g.y + f.y - b - k;
                g.width = f.width + 2 * b + h;
                g.height = f.height + 2 * b + k;
                this.graph.getModel().setGeometry(d, g);
                this.graph.moveCells(e,
                    b + h - f.x, b + k - f.y)
            }
        }
    } finally {
        this.graph.getModel().endUpdate()
    }
};
function mxStackLayout(a, b, c, d, e, f) {
    mxGraphLayout.call(this, a);
    this.horizontal = b != null ? b : true;
    this.spacing = c != null ? c : 0;
    this.x0 = d != null ? d : 0;
    this.y0 = e != null ? e : 0;
    this.border = f != null ? f : 0
}
mxStackLayout.prototype = new mxGraphLayout;
mxStackLayout.prototype.constructor = mxStackLayout;
mxStackLayout.prototype.horizontal = null;
mxStackLayout.prototype.spacing = null;
mxStackLayout.prototype.x0 = null;
mxStackLayout.prototype.y0 = null;
mxStackLayout.prototype.border = 0;
mxStackLayout.prototype.keepFirstLocation = !1;
mxStackLayout.prototype.fill = !1;
mxStackLayout.prototype.resizeParent = !1;
mxStackLayout.prototype.resizeLast = !1;
mxStackLayout.prototype.wrap = null;
mxStackLayout.prototype.isHorizontal = function () {
    return this.horizontal
};
mxStackLayout.prototype.moveCell = function (a, b, c) {
    var d = this.graph.getModel(), e = d.getParent(a), f = this.isHorizontal();
    if (a != null && e != null) {
        var g = 0, h = 0, k = d.getChildCount(e), b = f ? b : c, g = this.graph.getView().getState(e);
        g != null && (b = b - (f ? g.x : g.y));
        for (g = 0; g < k; g++) {
            c = d.getChildAt(e, g);
            if (c != a) {
                c = d.getGeometry(c);
                if (c != null) {
                    c = f ? c.x + c.width / 2 : c.y + c.height / 2;
                    if (h < b && c > b)break;
                    h = c
                }
            }
        }
        f = e.getIndex(a);
        f = Math.max(0, g - (g > f ? 1 : 0));
        d.add(e, a, f)
    }
};
mxStackLayout.prototype.getParentSize = function (a) {
    var b = this.graph.getModel(), c = b.getGeometry(a);
    if (this.graph.container != null && (c == null && b.isLayer(a) || a == this.graph.getView().currentRoot))c = new mxRectangle(0, 0, this.graph.container.offsetWidth - 1, this.graph.container.offsetHeight - 1);
    return c
};
mxStackLayout.prototype.execute = function (a) {
    if (a != null) {
        var b = this.isHorizontal(), c = this.graph.getModel(), d = this.getParentSize(a), e = 0;
        d != null && (e = b ? d.height : d.width);
        var e = e - (2 * this.spacing + 2 * this.border), f = this.graph.isSwimlane(a) ? this.graph.getStartSize(a) : new mxRectangle, e = e - (b ? f.height : f.width), g = this.x0 + f.width + this.border, f = this.y0 + f.height + this.border;
        c.beginUpdate();
        try {
            for (var h = 0, k = null, i = c.getChildCount(a), l = 0; l < i; l++) {
                var m = c.getChildAt(a, l);
                if (!this.isVertexIgnored(m) && this.isVertexMovable(m)) {
                    var n =
                        c.getGeometry(m);
                    if (n != null) {
                        n = n.clone();
                        if (this.wrap != null && k != null && (b && k.x + k.width + n.width + 2 * this.spacing > this.wrap || !b && k.y + k.height + n.height + 2 * this.spacing > this.wrap)) {
                            k = null;
                            b ? f = f + (h + this.spacing) : g = g + (h + this.spacing);
                            h = 0
                        }
                        h = Math.max(h, b ? n.height : n.width);
                        if (k != null)b ? n.x = k.x + k.width + this.spacing : n.y = k.y + k.height + this.spacing; else if (!this.keepFirstLocation)b ? n.x = g : n.y = f;
                        b ? n.y = f : n.x = g;
                        if (this.fill && e > 0)b ? n.height = e : n.width = e;
                        c.setGeometry(m, n);
                        k = n
                    }
                }
            }
            if (this.resizeParent && d != null && k != null && !this.graph.isCellCollapsed(a)) {
                d =
                    d.clone();
                b ? d.width = k.x + k.width + this.spacing : d.height = k.y + k.height + this.spacing;
                c.setGeometry(a, d)
            } else if (this.resizeLast && d != null && k != null)b ? k.width = d.width - k.x - this.spacing : k.height = d.height - k.y - this.spacing
        } finally {
            c.endUpdate()
        }
    }
};
function mxPartitionLayout(a, b, c, d) {
    mxGraphLayout.call(this, a);
    this.horizontal = b != null ? b : true;
    this.spacing = c || 0;
    this.border = d || 0
}
mxPartitionLayout.prototype = new mxGraphLayout;
mxPartitionLayout.prototype.constructor = mxPartitionLayout;
mxPartitionLayout.prototype.horizontal = null;
mxPartitionLayout.prototype.spacing = null;
mxPartitionLayout.prototype.border = null;
mxPartitionLayout.prototype.resizeVertices = !0;
mxPartitionLayout.prototype.isHorizontal = function () {
    return this.horizontal
};
mxPartitionLayout.prototype.moveCell = function (a, b) {
    var c = this.graph.getModel(), d = c.getParent(a);
    if (a != null && d != null) {
        for (var e = 0, f = 0, g = c.getChildCount(d), e = 0; e < g; e++) {
            var h = this.getVertexBounds(c.getChildAt(d, e));
            if (h != null) {
                h = h.x + h.width / 2;
                if (f < b && h > b)break;
                f = h
            }
        }
        f = d.getIndex(a);
        f = Math.max(0, e - (e > f ? 1 : 0));
        c.add(d, a, f)
    }
};
mxPartitionLayout.prototype.execute = function (a) {
    var b = this.isHorizontal(), c = this.graph.getModel(), d = c.getGeometry(a);
    if (this.graph.container != null && (d == null && c.isLayer(a) || a == this.graph.getView().currentRoot))d = new mxRectangle(0, 0, this.graph.container.offsetWidth - 1, this.graph.container.offsetHeight - 1);
    if (d != null) {
        for (var e = [], f = c.getChildCount(a), g = 0; g < f; g++) {
            var h = c.getChildAt(a, g);
            !this.isVertexIgnored(h) && this.isVertexMovable(h) && e.push(h)
        }
        f = e.length;
        if (f > 0) {
            var k = this.border, i = this.border, l = b ?
                d.height : d.width, l = l - 2 * this.border, a = this.graph.isSwimlane(a) ? this.graph.getStartSize(a) : new mxRectangle, l = l - (b ? a.height : a.width), k = k + a.width, i = i + a.height, a = this.border + (f - 1) * this.spacing, d = b ? (d.width - k - a) / f : (d.height - i - a) / f;
            if (d > 0) {
                c.beginUpdate();
                try {
                    for (g = 0; g < f; g++) {
                        var h = e[g], m = c.getGeometry(h);
                        if (m != null) {
                            m = m.clone();
                            m.x = k;
                            m.y = i;
                            if (b) {
                                if (this.resizeVertices) {
                                    m.width = d;
                                    m.height = l
                                }
                                k = k + (d + this.spacing)
                            } else {
                                if (this.resizeVertices) {
                                    m.height = d;
                                    m.width = l
                                }
                                i = i + (d + this.spacing)
                            }
                            c.setGeometry(h, m)
                        }
                    }
                } finally {
                    c.endUpdate()
                }
            }
        }
    }
};
function mxCompactTreeLayout(a, b, c) {
    mxGraphLayout.call(this, a);
    this.horizontal = b != null ? b : true;
    this.invert = c != null ? c : false
}
mxCompactTreeLayout.prototype = new mxGraphLayout;
mxCompactTreeLayout.prototype.constructor = mxCompactTreeLayout;
mxCompactTreeLayout.prototype.horizontal = null;
mxCompactTreeLayout.prototype.invert = null;
mxCompactTreeLayout.prototype.resizeParent = !0;
mxCompactTreeLayout.prototype.groupPadding = 10;
mxCompactTreeLayout.prototype.parentsChanged = null;
mxCompactTreeLayout.prototype.moveTree = !1;
mxCompactTreeLayout.prototype.levelDistance = 10;
mxCompactTreeLayout.prototype.nodeDistance = 20;
mxCompactTreeLayout.prototype.resetEdges = !0;
mxCompactTreeLayout.prototype.prefHozEdgeSep = 5;
mxCompactTreeLayout.prototype.prefVertEdgeOff = 4;
mxCompactTreeLayout.prototype.minEdgeJetty = 8;
mxCompactTreeLayout.prototype.channelBuffer = 4;
mxCompactTreeLayout.prototype.edgeRouting = !0;
mxCompactTreeLayout.prototype.isVertexIgnored = function (a) {
    return mxGraphLayout.prototype.isVertexIgnored.apply(this, arguments) || this.graph.getConnections(a).length == 0
};
mxCompactTreeLayout.prototype.isHorizontal = function () {
    return this.horizontal
};
mxCompactTreeLayout.prototype.execute = function (a, b) {
    this.parent = a;
    var c = this.graph.getModel();
    if (b == null)if (this.graph.getEdges(a, c.getParent(a), this.invert, !this.invert, false).length > 0)b = a; else {
        var d = this.graph.findTreeRoots(a, true, this.invert);
        if (d.length > 0)for (var e = 0; e < d.length; e++)if (!this.isVertexIgnored(d[e]) && this.graph.getEdges(d[e], null, this.invert, !this.invert, false).length > 0) {
            b = d[e];
            break
        }
    }
    if (b != null) {
        this.parentsChanged = this.resizeParent ? {} : null;
        c.beginUpdate();
        try {
            var f = this.dfs(b, a);
            if (f != null) {
                this.layout(f);
                var g = this.graph.gridSize, d = g;
                if (!this.moveTree) {
                    var h = this.getVertexBounds(b);
                    if (h != null) {
                        g = h.x;
                        d = h.y
                    }
                }
                h = null;
                h = this.isHorizontal() ? this.horizontalLayout(f, g, d) : this.verticalLayout(f, null, g, d);
                if (h != null) {
                    var k = e = 0;
                    h.x < 0 && (e = Math.abs(g - h.x));
                    h.y < 0 && (k = Math.abs(d - h.y));
                    (e != 0 || k != 0) && this.moveNode(f, e, k);
                    this.resizeParent && this.adjustParents();
                    this.edgeRouting && this.localEdgeProcessing(f)
                }
            }
        } finally {
            c.endUpdate()
        }
    }
};
mxCompactTreeLayout.prototype.moveNode = function (a, b, c) {
    a.x = a.x + b;
    a.y = a.y + c;
    this.apply(a);
    for (a = a.child; a != null;) {
        this.moveNode(a, b, c);
        a = a.next
    }
};
mxCompactTreeLayout.prototype.dfs = function (a, b, c) {
    var c = c != null ? c : [], d = mxCellPath.create(a), e = null;
    if (a != null && c[d] == null && !this.isVertexIgnored(a)) {
        c[d] = a;
        for (var e = this.createNode(a), d = this.graph.getModel(), f = null, a = this.graph.getEdges(a, b, this.invert, !this.invert, false, true), g = this.graph.getView(), h = 0; h < a.length; h++) {
            var k = a[h];
            if (!this.isEdgeIgnored(k)) {
                this.resetEdges && this.setEdgePoints(k, null);
                if (this.edgeRouting) {
                    this.setEdgeStyleEnabled(k, false);
                    this.setEdgePoints(k, null)
                }
                var i = g.getState(k),
                    k = i != null ? i.getVisibleTerminal(this.invert) : g.getVisibleTerminal(k, this.invert), i = this.dfs(k, b, c);
                if (i != null && d.getGeometry(k) != null) {
                    f == null ? e.child = i : f.next = i;
                    f = i
                }
            }
        }
    }
    return e
};
mxCompactTreeLayout.prototype.layout = function (a) {
    if (a != null) {
        for (var b = a.child; b != null;) {
            this.layout(b);
            b = b.next
        }
        a.child != null ? this.attachParent(a, this.join(a)) : this.layoutLeaf(a)
    }
};
mxCompactTreeLayout.prototype.horizontalLayout = function (a, b, c, d) {
    a.x = a.x + (b + a.offsetX);
    a.y = a.y + (c + a.offsetY);
    d = this.apply(a, d);
    b = a.child;
    if (b != null)for (var d = this.horizontalLayout(b, a.x, a.y, d), c = a.y + b.offsetY, e = b.next; e != null;) {
        d = this.horizontalLayout(e, a.x + b.offsetX, c, d);
        c = c + e.offsetY;
        e = e.next
    }
    return d
};
mxCompactTreeLayout.prototype.verticalLayout = function (a, b, c, d, e) {
    a.x = a.x + (c + a.offsetY);
    a.y = a.y + (d + a.offsetX);
    e = this.apply(a, e);
    b = a.child;
    if (b != null) {
        e = this.verticalLayout(b, a, a.x, a.y, e);
        c = a.x + b.offsetY;
        for (d = b.next; d != null;) {
            e = this.verticalLayout(d, a, c, a.y + b.offsetX, e);
            c = c + d.offsetY;
            d = d.next
        }
    }
    return e
};
mxCompactTreeLayout.prototype.attachParent = function (a, b) {
    var c = this.nodeDistance + this.levelDistance, d = (b - a.width) / 2 - this.nodeDistance, e = d + a.width + 2 * this.nodeDistance - b;
    a.child.offsetX = c + a.height;
    a.child.offsetY = e;
    a.contour.upperHead = this.createLine(a.height, 0, this.createLine(c, e, a.contour.upperHead));
    a.contour.lowerHead = this.createLine(a.height, 0, this.createLine(c, d, a.contour.lowerHead))
};
mxCompactTreeLayout.prototype.layoutLeaf = function (a) {
    var b = 2 * this.nodeDistance;
    a.contour.upperTail = this.createLine(a.height + b, 0);
    a.contour.upperHead = a.contour.upperTail;
    a.contour.lowerTail = this.createLine(0, -a.width - b);
    a.contour.lowerHead = this.createLine(a.height + b, 0, a.contour.lowerTail)
};
mxCompactTreeLayout.prototype.join = function (a) {
    var b = 2 * this.nodeDistance, c = a.child;
    a.contour = c.contour;
    for (var d = c.width + b, e = d, c = c.next; c != null;) {
        var f = this.merge(a.contour, c.contour);
        c.offsetY = f + d;
        c.offsetX = 0;
        d = c.width + b;
        e = e + (f + d);
        c = c.next
    }
    return e
};
mxCompactTreeLayout.prototype.merge = function (a, b) {
    for (var c = 0, d = 0, e = 0, f = a.lowerHead, g = b.upperHead; g != null && f != null;) {
        var h = this.offset(c, d, g.dx, g.dy, f.dx, f.dy), d = d + h, e = e + h;
        if (c + g.dx <= f.dx) {
            c = c + g.dx;
            d = d + g.dy;
            g = g.next
        } else {
            c = c - f.dx;
            d = d - f.dy;
            f = f.next
        }
    }
    if (g != null) {
        c = this.bridge(a.upperTail, 0, 0, g, c, d);
        a.upperTail = c.next != null ? b.upperTail : c;
        a.lowerTail = b.lowerTail
    } else {
        c = this.bridge(b.lowerTail, c, d, f, 0, 0);
        if (c.next == null)a.lowerTail = c
    }
    a.lowerHead = b.lowerHead;
    return e
};
mxCompactTreeLayout.prototype.offset = function (a, b, c, d, e, f) {
    var g = 0;
    if (e <= a || a + c <= 0)return 0;
    g = e * d - c * f > 0 ? a < 0 ? a * d / c - b : a > 0 ? a * f / e - b : -b : e < a + c ? f - (b + (e - a) * d / c) : e > a + c ? (c + a) * f / e - (b + d) : f - (b + d);
    return g > 0 ? g : 0
};
mxCompactTreeLayout.prototype.bridge = function (a, b, c, d, e, f) {
    b = e + d.dx - b;
    e = e = 0;
    if (d.dx == 0)e = d.dy; else {
        e = b * d.dy;
        e = e / d.dx
    }
    b = this.createLine(b, e, d.next);
    a.next = this.createLine(0, f + d.dy - e - c, b);
    return b
};
mxCompactTreeLayout.prototype.createNode = function (a) {
    var b = {};
    b.cell = a;
    b.x = 0;
    b.y = 0;
    b.width = 0;
    b.height = 0;
    a = this.getVertexBounds(a);
    if (a != null)if (this.isHorizontal()) {
        b.width = a.height;
        b.height = a.width
    } else {
        b.width = a.width;
        b.height = a.height
    }
    b.offsetX = 0;
    b.offsetY = 0;
    b.contour = {};
    return b
};
mxCompactTreeLayout.prototype.apply = function (a, b) {
    var c = this.graph.getModel(), d = a.cell, e = c.getGeometry(d);
    if (d != null && e != null) {
        if (this.isVertexMovable(d)) {
            e = this.setVertexLocation(d, a.x, a.y);
            if (this.resizeParent) {
                c = c.getParent(d);
                d = mxCellPath.create(c);
                this.parentsChanged[d] == null && (this.parentsChanged[d] = c)
            }
        }
        b = b == null ? new mxRectangle(e.x, e.y, e.width, e.height) : new mxRectangle(Math.min(b.x, e.x), Math.min(b.y, e.y), Math.max(b.x + b.width, e.x + e.width), Math.max(b.y + b.height, e.y + e.height))
    }
    return b
};
mxCompactTreeLayout.prototype.createLine = function (a, b, c) {
    var d = {};
    d.dx = a;
    d.dy = b;
    d.next = c;
    return d
};
mxCompactTreeLayout.prototype.adjustParents = function () {
    var a = [], b;
    for (b in this.parentsChanged)a.push(this.parentsChanged[b]);
    this.arrangeGroups(mxUtils.sortCells(a, true), this.groupPadding)
};
mxCompactTreeLayout.prototype.localEdgeProcessing = function (a) {
    this.processNodeOutgoing(a);
    for (a = a.child; a != null;) {
        this.localEdgeProcessing(a);
        a = a.next
    }
};
mxCompactTreeLayout.prototype.processNodeOutgoing = function (a) {
    for (var b = a.child, c = a.cell, d = 0, e = []; b != null;) {
        d++;
        var f = b.x;
        if (this.horizontal)f = b.y;
        e.push(new WeightedCellSorter(b, f));
        b = b.next
    }
    e.sort(WeightedCellSorter.prototype.compare);
    var f = a.width, g = (d + 1) * this.prefHozEdgeSep;
    f > g + 2 * this.prefHozEdgeSep && (f = f - 2 * this.prefHozEdgeSep);
    a = f / d;
    b = a / 2;
    f > g + 2 * this.prefHozEdgeSep && (b = b + this.prefHozEdgeSep);
    for (var f = this.minEdgeJetty - this.prefVertEdgeOff, g = 0, h = this.getVertexBounds(c), k = 0; k < e.length; k++) {
        for (var i =
            e[k].cell.cell, l = this.getVertexBounds(i), i = this.graph.getEdgesBetween(c, i, false), m = [], n = 0, o = 0, p = 0; p < i.length; p++) {
            if (this.horizontal) {
                n = h.x + h.width;
                o = h.y + b;
                m.push(new mxPoint(n, o));
                n = h.x + h.width + f;
                m.push(new mxPoint(n, o));
                o = l.y + l.height / 2
            } else {
                n = h.x + b;
                o = h.y + h.height;
                m.push(new mxPoint(n, o));
                o = h.y + h.height + f;
                m.push(new mxPoint(n, o));
                n = l.x + l.width / 2
            }
            m.push(new mxPoint(n, o));
            this.setEdgePoints(i[p], m)
        }
        k < d / 2 ? f = f + this.prefVertEdgeOff : k > d / 2 && (f = f - this.prefVertEdgeOff);
        b = b + a;
        g = Math.max(g, f)
    }
};
function WeightedCellSorter(a, b) {
    this.cell = a;
    this.weightedValue = b
}
WeightedCellSorter.prototype.weightedValue = 0;
WeightedCellSorter.prototype.nudge = !1;
WeightedCellSorter.prototype.visited = !1;
WeightedCellSorter.prototype.rankIndex = null;
WeightedCellSorter.prototype.cell = null;
WeightedCellSorter.prototype.compare = function (a, b) {
    return a != null && b != null ? b.weightedValue > a.weightedValue ? 1 : b.weightedValue < a.weightedValue ? -1 : b.nudge ? 1 : -1 : 0
};
function mxFastOrganicLayout(a) {
    mxGraphLayout.call(this, a)
}
mxFastOrganicLayout.prototype = new mxGraphLayout;
mxFastOrganicLayout.prototype.constructor = mxFastOrganicLayout;
mxFastOrganicLayout.prototype.useInputOrigin = !0;
mxFastOrganicLayout.prototype.resetEdges = !0;
mxFastOrganicLayout.prototype.disableEdgeStyle = !0;
mxFastOrganicLayout.prototype.forceConstant = 50;
mxFastOrganicLayout.prototype.forceConstantSquared = 0;
mxFastOrganicLayout.prototype.minDistanceLimit = 2;
mxFastOrganicLayout.prototype.maxDistanceLimit = 500;
mxFastOrganicLayout.prototype.minDistanceLimitSquared = 4;
mxFastOrganicLayout.prototype.initialTemp = 200;
mxFastOrganicLayout.prototype.temperature = 0;
mxFastOrganicLayout.prototype.maxIterations = 0;
mxFastOrganicLayout.prototype.iteration = 0;
mxFastOrganicLayout.prototype.allowedToRun = !0;
mxFastOrganicLayout.prototype.isVertexIgnored = function (a) {
    return mxGraphLayout.prototype.isVertexIgnored.apply(this, arguments) || this.graph.getConnections(a).length == 0
};
mxFastOrganicLayout.prototype.execute = function (a) {
    var b = this.graph.getModel();
    this.vertexArray = [];
    for (var c = this.graph.getChildVertices(a), d = 0; d < c.length; d++)this.isVertexIgnored(c[d]) || this.vertexArray.push(c[d]);
    var e = this.useInputOrigin ? this.graph.view.getBounds(this.vertexArray) : null, f = this.vertexArray.length;
    this.indices = [];
    this.dispX = [];
    this.dispY = [];
    this.cellLocation = [];
    this.isMoveable = [];
    this.neighbours = [];
    this.radius = [];
    this.radiusSquared = [];
    if (this.forceConstant < 0.0010)this.forceConstant =
        0.0010;
    this.forceConstantSquared = this.forceConstant * this.forceConstant;
    for (d = 0; d < this.vertexArray.length; d++) {
        var g = this.vertexArray[d];
        this.cellLocation[d] = [];
        var h = mxCellPath.create(g);
        this.indices[h] = d;
        var k = this.getVertexBounds(g), i = k.width, l = k.height, m = k.x, n = k.y;
        this.cellLocation[d][0] = m + i / 2;
        this.cellLocation[d][1] = n + l / 2;
        this.radius[d] = Math.min(i, l);
        this.radiusSquared[d] = this.radius[d] * this.radius[d]
    }
    b.beginUpdate();
    try {
        for (d = 0; d < f; d++) {
            this.dispX[d] = 0;
            this.dispY[d] = 0;
            this.isMoveable[d] = this.isVertexMovable(this.vertexArray[d]);
            var o = this.graph.getConnections(this.vertexArray[d], a), c = this.graph.getOpposites(o, this.vertexArray[d]);
            this.neighbours[d] = [];
            for (i = 0; i < c.length; i++) {
                this.resetEdges && this.graph.resetEdge(o[i]);
                this.disableEdgeStyle && this.setEdgeStyleEnabled(o[i], false);
                var h = mxCellPath.create(c[i]), p = this.indices[h];
                this.neighbours[d][i] = p != null ? p : d
            }
        }
        this.temperature = this.initialTemp;
        if (this.maxIterations == 0)this.maxIterations = 20 * Math.sqrt(f);
        for (this.iteration = 0; this.iteration < this.maxIterations; this.iteration++) {
            if (!this.allowedToRun)return;
            this.calcRepulsion();
            this.calcAttraction();
            this.calcPositions();
            this.reduceTemperature()
        }
        a = c = null;
        for (d = 0; d < this.vertexArray.length; d++) {
            g = this.vertexArray[d];
            if (this.isVertexMovable(g)) {
                k = this.getVertexBounds(g);
                if (k != null) {
                    this.cellLocation[d][0] = this.cellLocation[d][0] - k.width / 2;
                    this.cellLocation[d][1] = this.cellLocation[d][1] - k.height / 2;
                    m = this.graph.snap(this.cellLocation[d][0]);
                    n = this.graph.snap(this.cellLocation[d][1]);
                    this.setVertexLocation(g, m, n);
                    c = c == null ? m : Math.min(c, m);
                    a = a == null ? n : Math.min(a,
                        n)
                }
            }
        }
        d = -(c || 0) + 1;
        g = -(a || 0) + 1;
        if (e != null) {
            d = d + e.x;
            g = g + e.y
        }
        this.graph.moveCells(this.vertexArray, d, g)
    } finally {
        b.endUpdate()
    }
};
mxFastOrganicLayout.prototype.calcPositions = function () {
    for (var a = 0; a < this.vertexArray.length; a++)if (this.isMoveable[a]) {
        var b = Math.sqrt(this.dispX[a] * this.dispX[a] + this.dispY[a] * this.dispY[a]);
        b < 0.0010 && (b = 0.0010);
        var c = this.dispX[a] / b * Math.min(b, this.temperature), b = this.dispY[a] / b * Math.min(b, this.temperature);
        this.dispX[a] = 0;
        this.dispY[a] = 0;
        this.cellLocation[a][0] = this.cellLocation[a][0] + c;
        this.cellLocation[a][1] = this.cellLocation[a][1] + b
    }
};
mxFastOrganicLayout.prototype.calcAttraction = function () {
    for (var a = 0; a < this.vertexArray.length; a++)for (var b = 0; b < this.neighbours[a].length; b++) {
        var c = this.neighbours[a][b];
        if (a != c && this.isMoveable[a] && this.isMoveable[c]) {
            var d = this.cellLocation[a][0] - this.cellLocation[c][0], e = this.cellLocation[a][1] - this.cellLocation[c][1], f = d * d + e * e - this.radiusSquared[a] - this.radiusSquared[c];
            if (f < this.minDistanceLimitSquared)f = this.minDistanceLimitSquared;
            var g = Math.sqrt(f), f = f / this.forceConstant, d = d / g * f, e = e / g * f;
            this.dispX[a] = this.dispX[a] - d;
            this.dispY[a] = this.dispY[a] - e;
            this.dispX[c] = this.dispX[c] + d;
            this.dispY[c] = this.dispY[c] + e
        }
    }
};
mxFastOrganicLayout.prototype.calcRepulsion = function () {
    for (var a = this.vertexArray.length, b = 0; b < a; b++)for (var c = b; c < a; c++) {
        if (!this.allowedToRun)return;
        if (c != b && this.isMoveable[b] && this.isMoveable[c]) {
            var d = this.cellLocation[b][0] - this.cellLocation[c][0], e = this.cellLocation[b][1] - this.cellLocation[c][1];
            d == 0 && (d = 0.01 + Math.random());
            e == 0 && (e = 0.01 + Math.random());
            var f = Math.sqrt(d * d + e * e), g = f - this.radius[b] - this.radius[c];
            if (!(g > this.maxDistanceLimit)) {
                if (g < this.minDistanceLimit)g = this.minDistanceLimit;
                g = this.forceConstantSquared / g;
                d = d / f * g;
                e = e / f * g;
                this.dispX[b] = this.dispX[b] + d;
                this.dispY[b] = this.dispY[b] + e;
                this.dispX[c] = this.dispX[c] - d;
                this.dispY[c] = this.dispY[c] - e
            }
        }
    }
};
mxFastOrganicLayout.prototype.reduceTemperature = function () {
    this.temperature = this.initialTemp * (1 - this.iteration / this.maxIterations)
};
function mxCircleLayout(a, b) {
    mxGraphLayout.call(this, a);
    this.radius = b != null ? b : 100
}
mxCircleLayout.prototype = new mxGraphLayout;
mxCircleLayout.prototype.constructor = mxCircleLayout;
mxCircleLayout.prototype.radius = null;
mxCircleLayout.prototype.moveCircle = !1;
mxCircleLayout.prototype.x0 = 0;
mxCircleLayout.prototype.y0 = 0;
mxCircleLayout.prototype.resetEdges = !0;
mxCircleLayout.prototype.disableEdgeStyle = !0;
mxCircleLayout.prototype.execute = function (a) {
    var b = this.graph.getModel();
    b.beginUpdate();
    try {
        for (var c = 0, d = null, e = null, f = [], g = b.getChildCount(a), h = 0; h < g; h++) {
            var k = b.getChildAt(a, h);
            if (this.isVertexIgnored(k)) {
                if (!this.isEdgeIgnored(k)) {
                    this.resetEdges && this.graph.resetEdge(k);
                    this.disableEdgeStyle && this.setEdgeStyleEnabled(k, false)
                }
            } else {
                f.push(k);
                var i = this.getVertexBounds(k), d = d == null ? i.y : Math.min(d, i.y), e = e == null ? i.x : Math.min(e, i.x), c = Math.max(c, Math.max(i.width, i.height))
            }
        }
        var l = Math.max(f.length *
            c / Math.PI, this.radius);
        if (this.moveCircle) {
            e = this.x0;
            d = this.y0
        }
        this.circle(f, l, e, d)
    } finally {
        b.endUpdate()
    }
};
mxCircleLayout.prototype.circle = function (a, b, c, d) {
    for (var e = a.length, f = 2 * Math.PI / e, g = 0; g < e; g++)this.isVertexMovable(a[g]) && this.setVertexLocation(a[g], c + b + b * Math.sin(g * f), d + b + b * Math.cos(g * f))
};
function mxParallelEdgeLayout(a) {
    mxGraphLayout.call(this, a)
}
mxParallelEdgeLayout.prototype = new mxGraphLayout;
mxParallelEdgeLayout.prototype.constructor = mxParallelEdgeLayout;
mxParallelEdgeLayout.prototype.spacing = 20;
mxParallelEdgeLayout.prototype.execute = function (a) {
    a = this.findParallels(a);
    this.graph.model.beginUpdate();
    try {
        for (var b in a) {
            var c = a[b];
            c.length > 1 && this.layout(c)
        }
    } finally {
        this.graph.model.endUpdate()
    }
};
mxParallelEdgeLayout.prototype.findParallels = function (a) {
    for (var b = this.graph.getModel(), c = [], d = b.getChildCount(a), e = 0; e < d; e++) {
        var f = b.getChildAt(a, e);
        if (!this.isEdgeIgnored(f)) {
            var g = this.getEdgeId(f);
            if (g != null) {
                c[g] == null && (c[g] = []);
                c[g].push(f)
            }
        }
    }
    return c
};
mxParallelEdgeLayout.prototype.getEdgeId = function (a) {
    var b = this.graph.getView(), c = b.getState(a), d = c != null ? c.getVisibleTerminal(true) : b.getVisibleTerminal(a, true), a = c != null ? c.getVisibleTerminal(false) : b.getVisibleTerminal(a, false);
    if (d != null && a != null) {
        d = mxCellPath.create(d);
        a = mxCellPath.create(a);
        return d > a ? a + "-" + d : d + "-" + a
    }
    return null
};
mxParallelEdgeLayout.prototype.layout = function (a) {
    var b = a[0], c = this.graph.getModel(), d = c.getGeometry(c.getTerminal(b, true)), e = c.getGeometry(c.getTerminal(b, false));
    if (d == e)for (var b = d.x + d.width + this.spacing, c = d.y + d.height / 2, f = 0; f < a.length; f++) {
        this.route(a[f], b, c);
        b = b + this.spacing
    } else if (d != null && e != null)for (var b = d.x + d.width / 2, c = d.y + d.height / 2, f = e.x + e.width / 2 - b, g = e.y + e.height / 2 - c, e = Math.sqrt(f * f + g * g), d = g * this.spacing / e, e = f * this.spacing / e, b = b + f / 2 + d * (a.length - 1) / 2, c = c + g / 2 - e * (a.length - 1) / 2, f = 0; f < a.length; f++) {
        this.route(a[f],
            b, c);
        b = b - d;
        c = c + e
    }
};
mxParallelEdgeLayout.prototype.route = function (a, b, c) {
    this.graph.isCellMovable(a) && this.setEdgePoints(a, [new mxPoint(b, c)])
};
function mxCompositeLayout(a, b, c) {
    mxGraphLayout.call(this, a);
    this.layouts = b;
    this.master = c
}
mxCompositeLayout.prototype = new mxGraphLayout;
mxCompositeLayout.prototype.constructor = mxCompositeLayout;
mxCompositeLayout.prototype.layouts = null;
mxCompositeLayout.prototype.master = null;
mxCompositeLayout.prototype.moveCell = function (a, b, c) {
    this.master != null ? this.master.move.apply(this.master, arguments) : this.layouts[0].move.apply(this.layouts[0], arguments)
};
mxCompositeLayout.prototype.execute = function (a) {
    var b = this.graph.getModel();
    b.beginUpdate();
    try {
        for (var c = 0; c < this.layouts.length; c++)this.layouts[c].execute.apply(this.layouts[c], arguments)
    } finally {
        b.endUpdate()
    }
};
function mxEdgeLabelLayout(a) {
    mxGraphLayout.call(this, a)
}
mxEdgeLabelLayout.prototype = new mxGraphLayout;
mxEdgeLabelLayout.prototype.constructor = mxEdgeLabelLayout;
mxEdgeLabelLayout.prototype.execute = function (a) {
    for (var b = this.graph.view, c = this.graph.getModel(), d = [], e = [], f = c.getChildCount(a), g = 0; g < f; g++) {
        var h = c.getChildAt(a, g), k = b.getState(h);
        k != null && (this.isVertexIgnored(h) ? this.isEdgeIgnored(h) || d.push(k) : e.push(k))
    }
    this.placeLabels(e, d)
};
mxEdgeLabelLayout.prototype.placeLabels = function (a, b) {
    var c = this.graph.getModel();
    c.beginUpdate();
    try {
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (e != null && e.text != null && e.text.boundingBox != null)for (var f = 0; f < a.length; f++) {
                var g = a[f];
                g != null && this.avoid(e, g)
            }
        }
    } finally {
        c.endUpdate()
    }
};
mxEdgeLabelLayout.prototype.avoid = function (a, b) {
    var c = this.graph.getModel(), d = a.text.boundingBox;
    if (mxUtils.intersects(d, b)) {
        var e = -d.y - d.height + b.y, f = -d.y + b.y + b.height, e = Math.abs(e) < Math.abs(f) ? e : f, f = -d.x - d.width + b.x, d = -d.x + b.x + b.width, d = Math.abs(f) < Math.abs(d) ? f : d;
        Math.abs(d) < Math.abs(e) ? e = 0 : d = 0;
        f = c.getGeometry(a.cell);
        if (f != null) {
            f = f.clone();
            if (f.offset != null) {
                f.offset.x = f.offset.x + d;
                f.offset.y = f.offset.y + e
            } else f.offset = new mxPoint(d, e);
            c.setGeometry(a.cell, f)
        }
    }
};
function mxGraphAbstractHierarchyCell() {
    this.x = [];
    this.y = [];
    this.temp = []
}
mxGraphAbstractHierarchyCell.prototype.maxRank = -1;
mxGraphAbstractHierarchyCell.prototype.minRank = -1;
mxGraphAbstractHierarchyCell.prototype.x = null;
mxGraphAbstractHierarchyCell.prototype.y = null;
mxGraphAbstractHierarchyCell.prototype.width = 0;
mxGraphAbstractHierarchyCell.prototype.height = 0;
mxGraphAbstractHierarchyCell.prototype.nextLayerConnectedCells = null;
mxGraphAbstractHierarchyCell.prototype.previousLayerConnectedCells = null;
mxGraphAbstractHierarchyCell.prototype.temp = null;
mxGraphAbstractHierarchyCell.prototype.getNextLayerConnectedCells = function () {
    return null
};
mxGraphAbstractHierarchyCell.prototype.getPreviousLayerConnectedCells = function () {
    return null
};
mxGraphAbstractHierarchyCell.prototype.isEdge = function () {
    return false
};
mxGraphAbstractHierarchyCell.prototype.isVertex = function () {
    return false
};
mxGraphAbstractHierarchyCell.prototype.getGeneralPurposeVariable = function () {
    return null
};
mxGraphAbstractHierarchyCell.prototype.setGeneralPurposeVariable = function () {
    return null
};
mxGraphAbstractHierarchyCell.prototype.setX = function (a, b) {
    this.isVertex() ? this.x[0] = b : this.isEdge() && (this.x[a - this.minRank - 1] = b)
};
mxGraphAbstractHierarchyCell.prototype.getX = function (a) {
    return this.isVertex() ? this.x[0] : this.isEdge() ? this.x[a - this.minRank - 1] : 0
};
mxGraphAbstractHierarchyCell.prototype.setY = function (a, b) {
    this.isVertex() ? this.y[0] = b : this.isEdge() && (this.y[a - this.minRank - 1] = b)
};
function mxGraphHierarchyNode(a) {
    mxGraphAbstractHierarchyCell.apply(this, arguments);
    this.cell = a
}
mxGraphHierarchyNode.prototype = new mxGraphAbstractHierarchyCell;
mxGraphHierarchyNode.prototype.constructor = mxGraphHierarchyNode;
mxGraphHierarchyNode.prototype.cell = null;
mxGraphHierarchyNode.prototype.connectsAsTarget = [];
mxGraphHierarchyNode.prototype.connectsAsSource = [];
mxGraphHierarchyNode.prototype.hashCode = !1;
mxGraphHierarchyNode.prototype.getRankValue = function () {
    return this.maxRank
};
mxGraphHierarchyNode.prototype.getNextLayerConnectedCells = function (a) {
    if (this.nextLayerConnectedCells == null) {
        this.nextLayerConnectedCells = [];
        this.nextLayerConnectedCells[0] = [];
        for (var b = 0; b < this.connectsAsTarget.length; b++) {
            var c = this.connectsAsTarget[b];
            c.maxRank == -1 || c.maxRank == a + 1 ? this.nextLayerConnectedCells[0].push(c.source) : this.nextLayerConnectedCells[0].push(c)
        }
    }
    return this.nextLayerConnectedCells[0]
};
mxGraphHierarchyNode.prototype.getPreviousLayerConnectedCells = function (a) {
    if (this.previousLayerConnectedCells == null) {
        this.previousLayerConnectedCells = [];
        this.previousLayerConnectedCells[0] = [];
        for (var b = 0; b < this.connectsAsSource.length; b++) {
            var c = this.connectsAsSource[b];
            c.minRank == -1 || c.minRank == a - 1 ? this.previousLayerConnectedCells[0].push(c.target) : this.previousLayerConnectedCells[0].push(c)
        }
    }
    return this.previousLayerConnectedCells[0]
};
mxGraphHierarchyNode.prototype.isVertex = function () {
    return true
};
mxGraphHierarchyNode.prototype.getGeneralPurposeVariable = function () {
    return this.temp[0]
};
mxGraphHierarchyNode.prototype.setGeneralPurposeVariable = function (a, b) {
    this.temp[0] = b
};
mxGraphHierarchyNode.prototype.isAncestor = function (a) {
    if (a != null && this.hashCode != null && a.hashCode != null && this.hashCode.length < a.hashCode.length) {
        if (this.hashCode == a.hashCode)return true;
        if (this.hashCode == null || this.hashCode == null)return false;
        for (var b = 0; b < this.hashCode.length; b++)if (this.hashCode[b] != a.hashCode[b])return false;
        return true
    }
    return false
};
mxGraphHierarchyNode.prototype.getCoreCell = function () {
    return this.cell
};
function mxGraphHierarchyEdge(a) {
    mxGraphAbstractHierarchyCell.apply(this, arguments);
    this.edges = a
}
mxGraphHierarchyEdge.prototype = new mxGraphAbstractHierarchyCell;
mxGraphHierarchyEdge.prototype.constructor = mxGraphHierarchyEdge;
mxGraphHierarchyEdge.prototype.edges = null;
mxGraphHierarchyEdge.prototype.source = null;
mxGraphHierarchyEdge.prototype.target = null;
mxGraphHierarchyEdge.prototype.isReversed = !1;
mxGraphHierarchyEdge.prototype.invert = function () {
    var a = this.source;
    this.source = this.target;
    this.target = a;
    this.isReversed = !this.isReversed
};
mxGraphHierarchyEdge.prototype.getNextLayerConnectedCells = function (a) {
    if (this.nextLayerConnectedCells == null) {
        this.nextLayerConnectedCells = [];
        for (var b = 0; b < this.temp.length; b++) {
            this.nextLayerConnectedCells[b] = [];
            b == this.temp.length - 1 ? this.nextLayerConnectedCells[b].push(this.source) : this.nextLayerConnectedCells[b].push(this)
        }
    }
    return this.nextLayerConnectedCells[a - this.minRank - 1]
};
mxGraphHierarchyEdge.prototype.getPreviousLayerConnectedCells = function (a) {
    if (this.previousLayerConnectedCells == null) {
        this.previousLayerConnectedCells = [];
        for (var b = 0; b < this.temp.length; b++) {
            this.previousLayerConnectedCells[b] = [];
            b == 0 ? this.previousLayerConnectedCells[b].push(this.target) : this.previousLayerConnectedCells[b].push(this)
        }
    }
    return this.previousLayerConnectedCells[a - this.minRank - 1]
};
mxGraphHierarchyEdge.prototype.isEdge = function () {
    return true
};
mxGraphHierarchyEdge.prototype.getGeneralPurposeVariable = function (a) {
    return this.temp[a - this.minRank - 1]
};
mxGraphHierarchyEdge.prototype.setGeneralPurposeVariable = function (a, b) {
    this.temp[a - this.minRank - 1] = b
};
mxGraphHierarchyEdge.prototype.getCoreCell = function () {
    return this.edges != null && this.edges.length > 0 ? this.edges[0] : null
};
function mxGraphHierarchyModel(a, b, c, d, e, f, g) {
    var h = a.getGraph();
    this.deterministic = e;
    this.tightenToSource = f;
    this.scanRanksFromSinks = g;
    this.roots = c;
    this.parent = d;
    this.vertexMapper = {};
    this.edgeMapper = {};
    this.maxRank = 0;
    c = [];
    b == null && (b = this.graph.getChildVertices(d));
    this.maxRank = this.scanRanksFromSinks ? 0 : this.SOURCESCANSTARTRANK;
    this.createInternalCells(a, b, c);
    for (a = 0; a < b.length; a++) {
        d = c[a].connectsAsSource;
        for (e = 0; e < d.length; e++) {
            f = d[e];
            g = f.edges;
            if (g != null && g.length > 0) {
                var g = g[0], k = h.getView().getVisibleTerminal(g,
                    false), k = mxCellPath.create(k), k = this.vertexMapper[k];
                if (c[a] == k) {
                    k = h.getView().getVisibleTerminal(g, true);
                    k = mxCellPath.create(k);
                    k = this.vertexMapper[k]
                }
                if (k != null && c[a] != k) {
                    f.target = k;
                    if (k.connectsAsTarget.length == 0)k.connectsAsTarget = [];
                    mxUtils.indexOf(k.connectsAsTarget, f) < 0 && k.connectsAsTarget.push(f)
                }
            }
        }
        c[a].temp[0] = 1
    }
}
mxGraphHierarchyModel.prototype.scanRanksFromSinks = !0;
mxGraphHierarchyModel.prototype.maxRank = null;
mxGraphHierarchyModel.prototype.vertexMapper = null;
mxGraphHierarchyModel.prototype.edgeMapper = null;
mxGraphHierarchyModel.prototype.ranks = null;
mxGraphHierarchyModel.prototype.roots = null;
mxGraphHierarchyModel.prototype.parent = null;
mxGraphHierarchyModel.prototype.dfsCount = 0;
mxGraphHierarchyModel.prototype.SOURCESCANSTARTRANK = 1E8;
mxGraphHierarchyModel.prototype.tightenToSource = !1;
mxGraphHierarchyModel.prototype.createInternalCells = function (a, b, c) {
    for (var d = a.getGraph(), e = 0; e < b.length; e++) {
        c[e] = new mxGraphHierarchyNode(b[e]);
        this.vertexMapper[mxCellPath.create(b[e])] = c[e];
        var f = a.getEdges(b[e]), f = d.getOpposites(f, b[e]);
        c[e].connectsAsSource = [];
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            if (h != b[e] && a.graph.model.isVertex(h) && !a.isVertexIgnored(h)) {
                var k = d.getEdgesBetween(b[e], h, false), i = d.getEdgesBetween(b[e], h, true), h = mxCellPath.create(k[0]);
                if (k != null && k.length > 0 && this.edgeMapper[h] ==
                    null && i.length * 2 >= k.length) {
                    for (var i = new mxGraphHierarchyEdge(k), l = 0; l < k.length; l++) {
                        var m = k[l], h = mxCellPath.create(m);
                        this.edgeMapper[h] = i;
                        d.resetEdge(m);
                        if (a.disableEdgeStyle) {
                            a.setEdgeStyleEnabled(m, false);
                            a.setOrthogonalEdge(m, true)
                        }
                    }
                    i.source = c[e];
                    mxUtils.indexOf(c[e].connectsAsSource, i) < 0 && c[e].connectsAsSource.push(i)
                }
            }
        }
        c[e].temp[0] = 0
    }
};
mxGraphHierarchyModel.prototype.initialRank = function () {
    var a = [];
    if (!this.scanRanksFromSinks && this.roots != null)for (var b = 0; b < this.roots.length; b++) {
        var c = this.vertexMapper[mxCellPath.create(this.roots[b])];
        c != null && a.push(c)
    }
    if (this.scanRanksFromSinks)for (var d in this.vertexMapper) {
        c = this.vertexMapper[d];
        (c.connectsAsSource == null || c.connectsAsSource.length == 0) && a.push(c)
    }
    if (a.length == 0)for (d in this.vertexMapper) {
        c = this.vertexMapper[d];
        if (c.connectsAsTarget == null || c.connectsAsTarget.length == 0) {
            a.push(c);
            this.scanRanksFromSinks = false;
            this.maxRank = this.SOURCESCANSTARTRANK
        }
    }
    for (d in this.vertexMapper) {
        c = this.vertexMapper[d];
        c.temp[0] = -1
    }
    for (var e = a.slice(); a.length > 0;) {
        var c = a[0], f, g;
        if (this.scanRanksFromSinks) {
            f = c.connectsAsSource;
            g = c.connectsAsTarget
        } else {
            f = c.connectsAsTarget;
            g = c.connectsAsSource
        }
        var h = true, k = 0;
        if (!this.scanRanksFromSinks)k = this.SOURCESCANSTARTRANK;
        for (b = 0; b < f.length; b++) {
            var i = f[b];
            if (i.temp[0] == 5270620) {
                i = this.scanRanksFromSinks ? i.target : i.source;
                k = this.scanRanksFromSinks ? Math.max(k,
                    i.temp[0] + 1) : Math.min(k, i.temp[0] - 1)
            } else {
                h = false;
                break
            }
        }
        if (h) {
            c.temp[0] = k;
            this.maxRank = this.scanRanksFromSinks ? Math.max(this.maxRank, k) : Math.min(this.maxRank, k);
            if (g != null)for (b = 0; b < g.length; b++) {
                i = g[b];
                i.temp[0] = 5270620;
                i = this.scanRanksFromSinks ? i.source : i.target;
                if (i.temp[0] == -1) {
                    a.push(i);
                    i.temp[0] = -2
                }
            }
            a.shift()
        } else {
            b = a.shift();
            a.push(c);
            if (b == c && a.length == 1)break
        }
    }
    if (this.scanRanksFromSinks) {
        if (this.tightenToSource)for (b = 0; b < e.length; b++) {
            c = e[b];
            a = 1E6;
            for (d = 0; d < c.connectsAsTarget.length; d++) {
                i =
                    c.connectsAsTarget[d];
                i = i.source;
                c.temp[0] = Math.min(a, i.temp[0] - 1);
                a = c.temp[0]
            }
        }
    } else {
        for (d in this.vertexMapper) {
            c = this.vertexMapper[d];
            c.temp[0] = c.temp[0] - this.maxRank
        }
        this.maxRank = this.SOURCESCANSTARTRANK - this.maxRank
    }
};
mxGraphHierarchyModel.prototype.fixRanks = function () {
    var a = [];
    this.ranks = [];
    for (var b = 0; b < this.maxRank + 1; b++) {
        a[b] = [];
        this.ranks[b] = a[b]
    }
    var c = null;
    if (this.roots != null)for (var d = this.roots, c = [], b = 0; b < d.length; b++) {
        var e = this.vertexMapper[mxCellPath.create(d[b])];
        c[b] = e
    }
    this.visit(function (b, c, d, e, i) {
        if (i == 0 && c.maxRank < 0 && c.minRank < 0) {
            a[c.temp[0]].push(c);
            c.maxRank = c.temp[0];
            c.minRank = c.temp[0];
            c.temp[0] = a[c.maxRank].length - 1
        }
        if (b != null && d != null && b.maxRank - c.maxRank > 1) {
            d.maxRank = b.maxRank;
            d.minRank =
                c.maxRank;
            d.temp = [];
            d.x = [];
            d.y = [];
            for (b = d.minRank + 1; b < d.maxRank; b++) {
                a[b].push(d);
                d.setGeneralPurposeVariable(b, a[b].length - 1)
            }
        }
    }, c, false, null)
};
mxGraphHierarchyModel.prototype.visit = function (a, b, c, d) {
    if (b != null) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            if (f != null) {
                d == null && (d = {});
                if (c) {
                    f.hashCode = [];
                    f.hashCode[0] = this.dfsCount;
                    f.hashCode[1] = e;
                    this.extendedDfs(null, f, null, a, d, f.hashCode, e, 0)
                } else this.dfs(null, f, null, a, d, 0)
            }
        }
        this.dfsCount++
    }
};
mxGraphHierarchyModel.prototype.dfs = function (a, b, c, d, e, f) {
    if (b != null) {
        var g = mxCellPath.create(b.cell);
        if (e[g] == null) {
            e[g] = b;
            d(a, b, c, f, 0);
            a = b.connectsAsSource.slice();
            for (c = 0; c < a.length; c++) {
                g = a[c];
                this.dfs(b, g.target, g, d, e, f + 1)
            }
        } else d(a, b, c, f, 1)
    }
};
mxGraphHierarchyModel.prototype.extendedDfs = function (a, b, c, d, e, f, g, h) {
    if (b != null) {
        if (a != null && (b.hashCode == null || b.hashCode[0] != a.hashCode[0])) {
            f = a.hashCode.length + 1;
            b.hashCode = a.hashCode.slice();
            b.hashCode[f - 1] = g
        }
        g = mxCellPath.create(b.cell);
        if (e[g] == null) {
            e[g] = b;
            d(a, b, c, h, 0);
            a = b.connectsAsSource.slice();
            for (c = 0; c < a.length; c++) {
                g = a[c];
                this.extendedDfs(b, g.target, g, d, e, b.hashCode, c, h + 1)
            }
        } else d(a, b, c, h, 1)
    }
};
function mxHierarchicalLayoutStage() {
}
mxHierarchicalLayoutStage.prototype.execute = function () {
};
function mxMedianHybridCrossingReduction(a) {
    this.layout = a
}
mxMedianHybridCrossingReduction.prototype = new mxHierarchicalLayoutStage;
mxMedianHybridCrossingReduction.prototype.constructor = mxMedianHybridCrossingReduction;
mxMedianHybridCrossingReduction.prototype.layout = null;
mxMedianHybridCrossingReduction.prototype.maxIterations = 24;
mxMedianHybridCrossingReduction.prototype.nestedBestRanks = null;
mxMedianHybridCrossingReduction.prototype.currentBestCrossings = 0;
mxMedianHybridCrossingReduction.prototype.iterationsWithoutImprovement = 0;
mxMedianHybridCrossingReduction.prototype.maxNoImprovementIterations = 2;
mxMedianHybridCrossingReduction.prototype.execute = function () {
    var a = this.layout.getModel();
    this.nestedBestRanks = [];
    for (var b = 0; b < a.ranks.length; b++)this.nestedBestRanks[b] = a.ranks[b].slice();
    for (var c = 0, d = this.calculateCrossings(a), b = 0; b < this.maxIterations && c < this.maxNoImprovementIterations; b++) {
        this.weightedMedian(b, a);
        this.transpose(b, a);
        var e = this.calculateCrossings(a);
        if (e < d) {
            d = e;
            for (e = c = 0; e < this.nestedBestRanks.length; e++)for (var f = a.ranks[e], g = 0; g < f.length; g++) {
                var h = f[g];
                this.nestedBestRanks[e][h.getGeneralPurposeVariable(e)] =
                    h
            }
        } else {
            c++;
            for (e = 0; e < this.nestedBestRanks.length; e++) {
                f = a.ranks[e];
                for (g = 0; g < f.length; g++) {
                    h = f[g];
                    h.setGeneralPurposeVariable(e, g)
                }
            }
        }
        if (d == 0)break
    }
    c = [];
    d = [];
    for (b = 0; b < a.maxRank + 1; b++) {
        d[b] = [];
        c[b] = d[b]
    }
    for (b = 0; b < this.nestedBestRanks.length; b++)for (e = 0; e < this.nestedBestRanks[b].length; e++)d[b].push(this.nestedBestRanks[b][e]);
    a.ranks = c
};
mxMedianHybridCrossingReduction.prototype.calculateCrossings = function (a) {
    for (var b = a.ranks.length, c = 0, d = 1; d < b; d++)c = c + this.calculateRankCrossing(d, a);
    return c
};
mxMedianHybridCrossingReduction.prototype.calculateRankCrossing = function (a, b) {
    for (var c = 0, d = b.ranks[a], e = d.length, f = b.ranks[a - 1].length, g = [], h = 0; h < e; h++)g[h] = [];
    for (h = 0; h < d.length; h++)for (var k = d[h], i = k.getGeneralPurposeVariable(a), l = k.getPreviousLayerConnectedCells(a), k = 0; k < l.length; k++) {
        var m = l[k].getGeneralPurposeVariable(a - 1);
        g[i][m] = 201207
    }
    for (h = 0; h < e; h++)for (k = 0; k < f; k++)if (g[h][k] == 201207) {
        for (d = h + 1; d < e; d++)for (i = 0; i < k; i++)g[d][i] == 201207 && c++;
        for (d = 0; d < h; d++)for (i = k + 1; i < f; i++)g[d][i] == 201207 &&
        c++
    }
    return c / 2
};
mxMedianHybridCrossingReduction.prototype.transpose = function (a, b) {
    for (var c = true, d = 0; c && d++ < 10;)for (var e = a % 2 == 1 && d % 2 == 1, c = false, f = 0; f < b.ranks.length; f++) {
        for (var g = b.ranks[f], h = [], k = 0; k < g.length; k++) {
            var i = g[k], l = i.getGeneralPurposeVariable(f);
            l < 0 && (l = k);
            h[l] = i
        }
        for (var m = l = i = null, n = null, o = null, p = null, q = null, t = null, u = null, v = null, k = 0; k < g.length - 1; k++) {
            if (k == 0) {
                for (var u = h[k], i = u.getNextLayerConnectedCells(f), l = u.getPreviousLayerConnectedCells(f), o = [], p = [], w = 0; w < i.length; w++)o[w] = i[w].getGeneralPurposeVariable(f + 1);
                for (w = 0; w < l.length; w++)p[w] = l[w].getGeneralPurposeVariable(f - 1)
            } else {
                i = m;
                l = n;
                o = q;
                p = t;
                u = v
            }
            v = h[k + 1];
            m = v.getNextLayerConnectedCells(f);
            n = v.getPreviousLayerConnectedCells(f);
            q = [];
            t = [];
            for (w = 0; w < m.length; w++)q[w] = m[w].getGeneralPurposeVariable(f + 1);
            for (w = 0; w < n.length; w++)t[w] = n[w].getGeneralPurposeVariable(f - 1);
            for (var r = 0, s = 0, w = 0; w < o.length; w++)for (var y = 0; y < q.length; y++) {
                o[w] > q[y] && r++;
                o[w] < q[y] && s++
            }
            for (w = 0; w < p.length; w++)for (y = 0; y < t.length; y++) {
                p[w] > t[y] && r++;
                p[w] < t[y] && s++
            }
            if (s < r || s == r && e) {
                m = u.getGeneralPurposeVariable(f);
                u.setGeneralPurposeVariable(f, v.getGeneralPurposeVariable(f));
                v.setGeneralPurposeVariable(f, m);
                m = i;
                n = l;
                q = o;
                t = p;
                v = u;
                e || (c = true)
            }
        }
    }
};
mxMedianHybridCrossingReduction.prototype.weightedMedian = function (a, b) {
    var c = a % 2 == 0;
    if (c)for (var d = b.maxRank - 1; d >= 0; d--)this.medianRank(d, c); else for (d = 1; d < b.maxRank; d++)this.medianRank(d, c)
};
mxMedianHybridCrossingReduction.prototype.medianRank = function (a, b) {
    for (var c = this.nestedBestRanks[a].length, d = [], e = [], f = 0; f < c; f++) {
        var g = this.nestedBestRanks[a][f], h = new MedianCellSorter;
        h.cell = g;
        var k;
        k = b ? g.getNextLayerConnectedCells(a) : g.getPreviousLayerConnectedCells(a);
        var i;
        i = b ? a + 1 : a - 1;
        if (k != null && k.length != 0) {
            h.medianValue = this.medianValue(k, i);
            d.push(h)
        } else e[g.getGeneralPurposeVariable(a)] = true
    }
    d.sort(MedianCellSorter.prototype.compare);
    for (f = 0; f < c; f++)if (e[f] == null) {
        g = d.shift().cell;
        g.setGeneralPurposeVariable(a,
            f)
    }
};
mxMedianHybridCrossingReduction.prototype.medianValue = function (a, b) {
    for (var c = [], d = 0, e = 0; e < a.length; e++) {
        var f = a[e];
        c[d++] = f.getGeneralPurposeVariable(b)
    }
    c.sort(function (a, b) {
        return a - b
    });
    if (d % 2 == 1)return c[Math.floor(d / 2)];
    if (d == 2)return(c[0] + c[1]) / 2;
    e = d / 2;
    f = c[e - 1] - c[0];
    d = c[d - 1] - c[e];
    return(c[e - 1] * d + c[e] * f) / (f + d)
};
function MedianCellSorter() {
}
MedianCellSorter.prototype.medianValue = 0;
MedianCellSorter.prototype.cell = !1;
MedianCellSorter.prototype.compare = function (a, b) {
    return a != null && b != null ? b.medianValue > a.medianValue ? -1 : b.medianValue < a.medianValue ? 1 : 0 : 0
};
function mxMinimumCycleRemover(a) {
    this.layout = a
}
mxMinimumCycleRemover.prototype = new mxHierarchicalLayoutStage;
mxMinimumCycleRemover.prototype.constructor = mxMinimumCycleRemover;
mxMinimumCycleRemover.prototype.layout = null;
mxMinimumCycleRemover.prototype.execute = function () {
    var a = this.layout.getModel(), b = {}, c = mxUtils.clone(a.vertexMapper, null, true), d = null;
    if (a.roots != null)for (var e = a.roots, d = [], f = 0; f < e.length; f++) {
        var g = mxCellPath.create(e[f]);
        d[f] = a.vertexMapper[g]
    }
    a.visit(function (a, d, e) {
        if (d.isAncestor(a)) {
            e.invert();
            mxUtils.remove(e, a.connectsAsSource);
            a.connectsAsTarget.push(e);
            mxUtils.remove(e, d.connectsAsTarget);
            d.connectsAsSource.push(e)
        }
        a = mxCellPath.create(d.cell);
        b[a] = d;
        delete c[a]
    }, d, true, null);
    d = null;
    c.lenth >
        0 && (d = mxUtils.clone(c, null, true));
    f = mxUtils.clone(b, null, true);
    a.visit(function (a, d, e) {
        if (d.isAncestor(a)) {
            e.invert();
            mxUtils.remove(e, a.connectsAsSource);
            d.connectsAsSource.push(e);
            a.connectsAsTarget.push(e);
            mxUtils.remove(e, d.connectsAsTarget)
        }
        a = mxCellPath.create(d.cell);
        b[a] = d;
        delete c[a]
    }, c, true, f);
    e = this.layout.getGraph();
    if (d != null && d.length > 0) {
        a = a.roots;
        for (f = 0; f < d.length; f++) {
            g = d[f].cell;
            e.getIncomingEdges(g).length == 0 && a.push(g)
        }
    }
};
function mxCoordinateAssignment(a, b, c, d, e, f) {
    this.layout = a;
    this.intraCellSpacing = b;
    this.interRankCellSpacing = c;
    this.orientation = d;
    this.initialX = e;
    this.parallelEdgeSpacing = f
}
var mxHierarchicalEdgeStyle = {ORTHOGONAL:1, POLYLINE:2, STRAIGHT:3};
mxCoordinateAssignment.prototype = new mxHierarchicalLayoutStage;
mxCoordinateAssignment.prototype.constructor = mxCoordinateAssignment;
mxCoordinateAssignment.prototype.layout = null;
mxCoordinateAssignment.prototype.intraCellSpacing = 30;
mxCoordinateAssignment.prototype.interRankCellSpacing = 10;
mxCoordinateAssignment.prototype.parallelEdgeSpacing = 10;
mxCoordinateAssignment.prototype.maxIterations = 8;
mxCoordinateAssignment.prototype.prefHozEdgeSep = 5;
mxCoordinateAssignment.prototype.prefVertEdgeOff = 2;
mxCoordinateAssignment.prototype.minEdgeJetty = 12;
mxCoordinateAssignment.prototype.channelBuffer = 4;
mxCoordinateAssignment.prototype.jettyPositions = null;
mxCoordinateAssignment.prototype.orientation = mxConstants.DIRECTION_NORTH;
mxCoordinateAssignment.prototype.initialX = null;
mxCoordinateAssignment.prototype.limitX = null;
mxCoordinateAssignment.prototype.currentXDelta = null;
mxCoordinateAssignment.prototype.widestRank = null;
mxCoordinateAssignment.prototype.rankTopY = null;
mxCoordinateAssignment.prototype.rankBottomY = null;
mxCoordinateAssignment.prototype.widestRankValue = null;
mxCoordinateAssignment.prototype.rankWidths = null;
mxCoordinateAssignment.prototype.rankY = null;
mxCoordinateAssignment.prototype.fineTuning = !0;
mxCoordinateAssignment.prototype.edgeStyle = mxHierarchicalEdgeStyle.POLYLINE;
mxCoordinateAssignment.prototype.nextLayerConnectedCache = null;
mxCoordinateAssignment.prototype.previousLayerConnectedCache = null;
mxCoordinateAssignment.prototype.groupPadding = 10;
mxCoordinateAssignment.prototype.printStatus = function () {
    var a = this.layout.getModel();
    mxLog.show();
    mxLog.writeln("======Coord assignment debug=======");
    for (var b = 0; b < a.ranks.length; b++) {
        mxLog.write("Rank ", b, " : ");
        for (var c = a.ranks[b], d = 0; d < c.length; d++)mxLog.write(c[d].getGeneralPurposeVariable(b), "  ");
        mxLog.writeln()
    }
    mxLog.writeln("====================================")
};
mxCoordinateAssignment.prototype.execute = function () {
    this.jettyPositions = [];
    var a = this.layout.getModel();
    this.currentXDelta = 0;
    this.initialCoords(this.layout.getGraph(), a);
    this.fineTuning && this.minNode(a);
    var b = 1E8;
    if (this.fineTuning)for (var c = 0; c < this.maxIterations; c++) {
        if (c != 0) {
            this.medianPos(c, a);
            this.minNode(a)
        }
        if (this.currentXDelta < b) {
            for (var d = 0; d < a.ranks.length; d++)for (var e = a.ranks[d], f = 0; f < e.length; f++) {
                var g = e[f];
                g.setX(d, g.getGeneralPurposeVariable(d))
            }
            b = this.currentXDelta
        } else for (d = 0; d <
            a.ranks.length; d++) {
            e = a.ranks[d];
            for (f = 0; f < e.length; f++) {
                g = e[f];
                g.setGeneralPurposeVariable(d, g.getX(d))
            }
        }
        this.minPath(this.layout.getGraph(), a);
        this.currentXDelta = 0
    }
    this.setCellLocations(this.layout.getGraph(), a)
};
mxCoordinateAssignment.prototype.minNode = function (a) {
    for (var b = [], c = [], d = [], e = 0; e <= a.maxRank; e++) {
        d[e] = a.ranks[e];
        for (var f = 0; f < d[e].length; f++) {
            var g = d[e][f], h = new WeightedCellSorter(g, e);
            h.rankIndex = f;
            h.visited = true;
            b.push(h);
            g = mxCellPath.create(g.getCoreCell());
            c[g] = h
        }
    }
    a = b.length * 10;
    for (f = 0; b.length > 0 && f <= a;) {
        var h = b.shift(), e = h.cell, k = h.weightedValue, i = parseInt(h.rankIndex), g = e.getNextLayerConnectedCells(k), l = e.getPreviousLayerConnectedCells(k), m = g.length, n = l.length, o = this.medianXValue(g, k + 1),
            p = this.medianXValue(l, k - 1), q = m + n, t = e.getGeneralPurposeVariable(k), u = t;
        q > 0 && (u = (o * m + p * n) / q);
        m = false;
        if (u < t - 1)if (i == 0) {
            e.setGeneralPurposeVariable(k, u);
            m = true
        } else {
            i = d[k][i - 1];
            t = i.getGeneralPurposeVariable(k);
            t = t + i.width / 2 + this.intraCellSpacing + e.width / 2;
            if (t < u) {
                e.setGeneralPurposeVariable(k, u);
                m = true
            } else if (t < e.getGeneralPurposeVariable(k) - 1) {
                e.setGeneralPurposeVariable(k, t);
                m = true
            }
        } else if (u > t + 1)if (i == d[k].length - 1) {
            e.setGeneralPurposeVariable(k, u);
            m = true
        } else {
            i = d[k][i + 1];
            t = i.getGeneralPurposeVariable(k);
            t = t - i.width / 2 - this.intraCellSpacing - e.width / 2;
            if (t > u) {
                e.setGeneralPurposeVariable(k, u);
                m = true
            } else if (t > e.getGeneralPurposeVariable(k) + 1) {
                e.setGeneralPurposeVariable(k, t);
                m = true
            }
        }
        if (m) {
            for (e = 0; e < g.length; e++) {
                k = g[e];
                k = mxCellPath.create(k.getCoreCell());
                k = c[k];
                if (k != null && k.visited == false) {
                    k.visited = true;
                    b.push(k)
                }
            }
            for (e = 0; e < l.length; e++) {
                k = l[e];
                k = mxCellPath.create(k.getCoreCell());
                k = c[k];
                if (k != null && k.visited == false) {
                    k.visited = true;
                    b.push(k)
                }
            }
        }
        h.visited = false;
        f++
    }
};
mxCoordinateAssignment.prototype.medianPos = function (a, b) {
    if (a % 2 == 0)for (var c = b.maxRank; c > 0; c--)this.rankMedianPosition(c - 1, b, c); else for (c = 0; c < b.maxRank - 1; c++)this.rankMedianPosition(c + 1, b, c)
};
mxCoordinateAssignment.prototype.rankMedianPosition = function (a, b, c) {
    for (var b = b.ranks[a], d = [], e = [], f = 0; f < b.length; f++) {
        var g = b[f];
        d[f] = new WeightedCellSorter;
        d[f].cell = g;
        d[f].rankIndex = f;
        var h = mxCellPath.create(g.getCoreCell());
        e[h] = d[f];
        var k = null, k = c < a ? g.getPreviousLayerConnectedCells(a) : g.getNextLayerConnectedCells(a);
        d[f].weightedValue = this.calculatedWeightedValue(g, k)
    }
    d.sort(WeightedCellSorter.prototype.compare);
    for (f = 0; f < d.length; f++) {
        h = 0;
        g = d[f].cell;
        h = 0;
        k = c < a ? g.getPreviousLayerConnectedCells(a).slice() :
            g.getNextLayerConnectedCells(a).slice();
        if (k != null) {
            h = k.length;
            h = h > 0 ? this.medianXValue(k, c) : g.getGeneralPurposeVariable(a)
        }
        for (var i = 0, k = -1E8, l = d[f].rankIndex - 1; l >= 0;) {
            var m = mxCellPath.create(b[l].getCoreCell()), m = e[m];
            if (m != null) {
                var n = m.cell;
                if (m.visited) {
                    k = n.getGeneralPurposeVariable(a) + n.width / 2 + this.intraCellSpacing + i + g.width / 2;
                    l = -1
                } else {
                    i = i + (n.width + this.intraCellSpacing);
                    l--
                }
            }
        }
        i = 0;
        n = 1E8;
        for (l = d[f].rankIndex + 1; l < d.length;) {
            m = mxCellPath.create(b[l].getCoreCell());
            m = e[m];
            if (m != null) {
                var o = m.cell;
                if (m.visited) {
                    n = o.getGeneralPurposeVariable(a) - o.width / 2 - this.intraCellSpacing - i - g.width / 2;
                    l = d.length
                } else {
                    i = i + (o.width + this.intraCellSpacing);
                    l++
                }
            }
        }
        if (h >= k && h <= n)g.setGeneralPurposeVariable(a, h); else if (h < k) {
            g.setGeneralPurposeVariable(a, k);
            this.currentXDelta = this.currentXDelta + (k - h)
        } else if (h > n) {
            g.setGeneralPurposeVariable(a, n);
            this.currentXDelta = this.currentXDelta + (h - n)
        }
        d[f].visited = true
    }
};
mxCoordinateAssignment.prototype.calculatedWeightedValue = function (a, b) {
    for (var c = 0, d = 0; d < b.length; d++) {
        var e = b[d];
        a.isVertex() && e.isVertex() ? c++ : c = a.isEdge() && e.isEdge() ? c + 8 : c + 2
    }
    return c
};
mxCoordinateAssignment.prototype.medianXValue = function (a, b) {
    if (a.length == 0)return 0;
    for (var c = [], d = 0; d < a.length; d++)c[d] = a[d].getGeneralPurposeVariable(b);
    c.sort(function (a, b) {
        return a - b
    });
    if (a.length % 2 == 1)return c[Math.floor(a.length / 2)];
    d = a.length / 2;
    return(c[d - 1] + c[d]) / 2
};
mxCoordinateAssignment.prototype.initialCoords = function (a, b) {
    this.calculateWidestRank(a, b);
    for (var c = this.widestRank; c >= 0; c--)c < b.maxRank && this.rankCoordinates(c, a, b);
    for (c = this.widestRank + 1; c <= b.maxRank; c++)c > 0 && this.rankCoordinates(c, a, b)
};
mxCoordinateAssignment.prototype.rankCoordinates = function (a, b, c) {
    for (var b = c.ranks[a], c = 0, d = this.initialX + (this.widestRankValue - this.rankWidths[a]) / 2, e = false, f = 0; f < b.length; f++) {
        var g = b[f];
        if (g.isVertex()) {
            var h = this.layout.getVertexBounds(g.cell);
            if (h != null)if (this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH) {
                g.width = h.width;
                g.height = h.height
            } else {
                g.width = h.height;
                g.height = h.width
            } else e = true;
            c = Math.max(c, g.height)
        } else if (g.isEdge()) {
            h = 1;
            g.edges != null ?
                h = g.edges.length : mxLog.warn("edge.edges is null");
            g.width = (h - 1) * this.parallelEdgeSpacing
        }
        d = d + g.width / 2;
        g.setX(a, d);
        g.setGeneralPurposeVariable(a, d);
        d = d + g.width / 2;
        d = d + this.intraCellSpacing
    }
    e == true && mxLog.warn("At least one cell has no bounds")
};
mxCoordinateAssignment.prototype.calculateWidestRank = function (a, b) {
    var c = -this.interRankCellSpacing, d = 0;
    this.rankWidths = [];
    this.rankY = [];
    for (var e = b.maxRank; e >= 0; e--) {
        for (var f = 0, g = b.ranks[e], h = this.initialX, k = false, i = 0; i < g.length; i++) {
            var l = g[i];
            if (l.isVertex()) {
                var m = this.layout.getVertexBounds(l.cell);
                if (m != null)if (this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH) {
                    l.width = m.width;
                    l.height = m.height
                } else {
                    l.width = m.height;
                    l.height = m.width
                } else k = true;
                f =
                    Math.max(f, l.height)
            } else if (l.isEdge()) {
                m = 1;
                l.edges != null ? m = l.edges.length : mxLog.warn("edge.edges is null");
                l.width = (m - 1) * this.parallelEdgeSpacing
            }
            h = h + l.width / 2;
            l.setX(e, h);
            l.setGeneralPurposeVariable(e, h);
            h = h + l.width / 2;
            h = h + this.intraCellSpacing;
            if (h > this.widestRankValue) {
                this.widestRankValue = h;
                this.widestRank = e
            }
            this.rankWidths[e] = h
        }
        k == true && mxLog.warn("At least one cell has no bounds");
        this.rankY[e] = c;
        h = f / 2 + d / 2 + this.interRankCellSpacing;
        d = f;
        c = this.orientation == mxConstants.DIRECTION_NORTH || this.orientation ==
            mxConstants.DIRECTION_WEST ? c + h : c - h;
        for (i = 0; i < g.length; i++)g[i].setY(e, c)
    }
};
mxCoordinateAssignment.prototype.minPath = function (a, b) {
    var c = b.edgeMapper, d;
    for (d in c) {
        var e = c[d];
        if (!(e.maxRank - e.minRank - 1 < 1)) {
            for (var f = e.getGeneralPurposeVariable(e.minRank + 1), g = true, h = 0, k = e.minRank + 2; k < e.maxRank; k++) {
                var i = e.getGeneralPurposeVariable(k);
                if (f != i) {
                    g = false;
                    f = i
                } else h++
            }
            if (!g) {
                for (var g = f = 0, i = [], l = [], m = e.getGeneralPurposeVariable(e.minRank + 1), k = e.minRank + 1; k < e.maxRank - 1; k++) {
                    var n = e.getX(k + 1);
                    if (m == n) {
                        i[k - e.minRank - 1] = m;
                        f++
                    } else if (this.repositionValid(b, e, k + 1, m)) {
                        i[k - e.minRank -
                            1] = m;
                        f++
                    } else m = i[k - e.minRank - 1] = n
                }
                m = e.getX(k);
                for (k = e.maxRank - 1; k > e.minRank + 1; k--) {
                    n = e.getX(k - 1);
                    if (m == n) {
                        l[k - e.minRank - 2] = m;
                        g++
                    } else if (this.repositionValid(b, e, k - 1, m)) {
                        l[k - e.minRank - 2] = m;
                        g++
                    } else {
                        l[k - e.minRank - 2] = e.getX(k - 1);
                        m = n
                    }
                }
                if (g > h || f > h)if (g >= f)for (k = e.maxRank - 2; k > e.minRank; k--)e.setX(k, l[k - e.minRank - 1]); else if (f > g)for (k = e.minRank + 2; k < e.maxRank; k++)e.setX(k, i[k - e.minRank - 2])
            }
        }
    }
};
mxCoordinateAssignment.prototype.repositionValid = function (a, b, c, d) {
    for (var a = a.ranks[c], e = -1, f = 0; f < a.length; f++)if (b == a[f]) {
        e = f;
        break
    }
    if (e < 0)return false;
    f = b.getGeneralPurposeVariable(c);
    if (d < f) {
        if (e == 0)return true;
        a = a[e - 1];
        c = a.getGeneralPurposeVariable(c);
        c = c + a.width / 2 + this.intraCellSpacing + b.width / 2;
        if (!(c <= d))return false
    } else if (d > f) {
        if (e == a.length - 1)return true;
        a = a[e + 1];
        c = a.getGeneralPurposeVariable(c);
        c = c - a.width / 2 - this.intraCellSpacing - b.width / 2;
        if (!(c >= d))return false
    }
    return true
};
mxCoordinateAssignment.prototype.setCellLocations = function (a, b) {
    this.rankTopY = [];
    this.rankBottomY = [];
    for (var c = 0; c < b.ranks.length; c++) {
        this.rankTopY[c] = Number.MAX_VALUE;
        this.rankBottomY[c] = 0
    }
    c = null;
    this.layout.resizeParent && (c = {});
    var d = b.edgeMapper, e = b.vertexMapper, f;
    for (f in e) {
        var g = e[f];
        this.setVertexLocation(g);
        if (this.layout.resizeParent) {
            var g = a.model.getParent(g.cell), h = mxCellPath.create(g);
            c[h] == null && (c[h] = g)
        }
    }
    this.layout.resizeParent && c != null && this.adjustParents(c);
    (this.edgeStyle == mxHierarchicalEdgeStyle.ORTHOGONAL ||
        this.edgeStyle == mxHierarchicalEdgeStyle.POLYLINE) && this.localEdgeProcessing(b);
    for (f in d)this.setEdgePosition(d[f])
};
mxCoordinateAssignment.prototype.adjustParents = function (a) {
    var b = [], c;
    for (c in a)b.push(a[c]);
    this.layout.arrangeGroups(mxUtils.sortCells(b, true), this.groupPadding)
};
mxCoordinateAssignment.prototype.localEdgeProcessing = function (a) {
    for (var b = 0; b < a.ranks.length; b++)for (var c = a.ranks[b], d = 0; d < c.length; d++) {
        var e = c[d];
        if (e.isVertex())for (var f = e.getPreviousLayerConnectedCells(b), g = b - 1, h = 0; h < 2; h++) {
            if (g > -1 && g < a.ranks.length && f != null && f.length > 0) {
                for (var k = [], i = 0; i < f.length; i++) {
                    var l = new WeightedCellSorter(f[i], f[i].getX(g));
                    k.push(l)
                }
                k.sort(WeightedCellSorter.prototype.compare);
                for (var l = e.x[0] - e.width / 2, m = l + e.width, n = f = 0, g = [], i = 0; i < k.length; i++) {
                    var o = k[i].cell,
                        p;
                    if (o.isVertex()) {
                        p = h == 0 ? e.connectsAsSource : e.connectsAsTarget;
                        for (var q = 0; q < p.length; q++)if (p[q].source == o || p[q].target == o) {
                            f = f + p[q].edges.length;
                            n++;
                            g.push(p[q])
                        }
                    } else {
                        f = f + o.edges.length;
                        n++;
                        g.push(o)
                    }
                }
                if (e.width > (f + 1) * this.prefHozEdgeSep + 2 * this.prefHozEdgeSep) {
                    l = l + this.prefHozEdgeSep;
                    m = m - this.prefHozEdgeSep
                }
                k = (m - l) / f;
                l = l + k / 2;
                m = this.minEdgeJetty - this.prefVertEdgeOff;
                for (i = n = 0; i < g.length; i++) {
                    o = g[i].edges.length;
                    q = mxCellPath.create(g[i].edges[0]);
                    p = this.jettyPositions[q];
                    if (p == null) {
                        p = [];
                        this.jettyPositions[q] =
                            p
                    }
                    i < f / 2 ? m = m + this.prefVertEdgeOff : i > f / 2 && (m = m - this.prefVertEdgeOff);
                    for (q = 0; q < o; q++) {
                        p[q * 4 + h * 2] = l;
                        l = l + k;
                        p[q * 4 + h * 2 + 1] = m
                    }
                    n = Math.max(n, m)
                }
            }
            f = e.getNextLayerConnectedCells(b);
            g = b + 1
        }
    }
};
mxCoordinateAssignment.prototype.setEdgePosition = function (a) {
    var b = 0;
    if (a.temp[0] != 101207) {
        var c = a.maxRank, d = a.minRank;
        if (c == d) {
            c = a.source.maxRank;
            d = a.target.minRank
        }
        for (var e = 0, f = this.jettyPositions[mxCellPath.create(a.edges[0])], g = a.isReversed ? a.target.cell : a.source.cell, h = 0; h < a.edges.length; h++) {
            var k = a.edges[h], i = this.layout.graph.view.getVisibleTerminal(k, true), l = [], m = a.isReversed;
            i != g && (m = !m);
            if (f != null) {
                var i = m ? 2 : 0, n = m ? this.rankTopY[d] : this.rankBottomY[c], o = f[e * 4 + 1 + i];
                m && (o = -o);
                n = n + o;
                i = f[e *
                    4 + i];
                this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? l.push(new mxPoint(i, n)) : l.push(new mxPoint(n, i))
            }
            var p = a.x.length - 1, n = i = -1, o = a.maxRank - 1;
            if (m) {
                p = 0;
                i = a.x.length;
                n = 1;
                o = a.minRank + 1
            }
            for (; a.maxRank != a.minRank && p != i; p = p + n) {
                var q = a.x[p] + b, t = (this.rankTopY[o] + this.rankBottomY[o + 1]) / 2, u = (this.rankTopY[o - 1] + this.rankBottomY[o]) / 2;
                if (m)var v = t, t = u, u = v;
                if (this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH) {
                    l.push(new mxPoint(q,
                        t));
                    l.push(new mxPoint(q, u))
                } else {
                    l.push(new mxPoint(t, q));
                    l.push(new mxPoint(u, q))
                }
                this.limitX = Math.max(this.limitX, q);
                o = o + n
            }
            if (f != null) {
                i = m ? 2 : 0;
                n = m ? this.rankBottomY[c] : this.rankTopY[d];
                o = f[e * 4 + 3 - i];
                m && (o = -o);
                n = n - o;
                i = f[e * 4 + 2 - i];
                this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? l.push(new mxPoint(i, n)) : l.push(new mxPoint(n, i))
            }
            a.isReversed && this.processReversedEdge(a, k);
            this.layout.setEdgePoints(k, l);
            b = b == 0 ? this.parallelEdgeSpacing : b > 0 ? -b : -b + this.parallelEdgeSpacing;
            e++
        }
        a.temp[0] = 101207
    }
};
mxCoordinateAssignment.prototype.setVertexLocation = function (a) {
    var b = a.cell, c = a.x[0] - a.width / 2, d = a.y[0] - a.height / 2;
    this.rankTopY[a.minRank] = Math.min(this.rankTopY[a.minRank], d);
    this.rankBottomY[a.minRank] = Math.max(this.rankBottomY[a.minRank], d + a.height);
    this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? this.layout.setVertexLocation(b, c, d) : this.layout.setVertexLocation(b, d, c);
    this.limitX = Math.max(this.limitX, c + a.width)
};
mxCoordinateAssignment.prototype.processReversedEdge = function () {
};
function WeightedCellSorter(a, b) {
    this.cell = a;
    this.weightedValue = b
}
WeightedCellSorter.prototype.weightedValue = 0;
WeightedCellSorter.prototype.nudge = !1;
WeightedCellSorter.prototype.visited = !1;
WeightedCellSorter.prototype.rankIndex = null;
WeightedCellSorter.prototype.cell = null;
WeightedCellSorter.prototype.compare = function (a, b) {
    return a != null && b != null ? b.weightedValue > a.weightedValue ? -1 : b.weightedValue < a.weightedValue ? 1 : b.nudge ? -1 : 1 : 0
};
function mxHierarchicalLayout(a, b, c) {
    mxGraphLayout.call(this, a);
    this.orientation = b != null ? b : mxConstants.DIRECTION_NORTH;
    this.deterministic = c != null ? c : true
}
mxHierarchicalLayout.prototype = new mxGraphLayout;
mxHierarchicalLayout.prototype.constructor = mxHierarchicalLayout;
mxHierarchicalLayout.prototype.roots = null;
mxHierarchicalLayout.prototype.resizeParent = !1;
mxHierarchicalLayout.prototype.moveParent = !1;
mxHierarchicalLayout.prototype.parentBorder = 0;
mxHierarchicalLayout.prototype.intraCellSpacing = 30;
mxHierarchicalLayout.prototype.interRankCellSpacing = 50;
mxHierarchicalLayout.prototype.interHierarchySpacing = 60;
mxHierarchicalLayout.prototype.parallelEdgeSpacing = 10;
mxHierarchicalLayout.prototype.orientation = mxConstants.DIRECTION_NORTH;
mxHierarchicalLayout.prototype.fineTuning = !0;
mxHierarchicalLayout.prototype.fixRoots = !1;
mxHierarchicalLayout.prototype.layoutFromSinks = !0;
mxHierarchicalLayout.prototype.tightenToSource = !0;
mxHierarchicalLayout.prototype.disableEdgeStyle = !0;
mxHierarchicalLayout.prototype.promoteEdges = !0;
mxHierarchicalLayout.prototype.traverseAncestors = !0;
mxHierarchicalLayout.prototype.model = null;
mxHierarchicalLayout.prototype.getModel = function () {
    return this.model
};
mxHierarchicalLayout.prototype.execute = function (a, b) {
    this.parent = a;
    var c = this.graph.model;
    if (!(b == null && a == null)) {
        if (b != null && a != null) {
            for (var d = [], e = 0; e < b.length; e++)c.isAncestor(a, b[e]) && d.push(b[e]);
            this.roots = d
        } else this.roots = b == null ? this.findTreeRoots(a) : b;
        if (this.roots != null) {
            c = this.graph.getModel();
            c.beginUpdate();
            try {
                this.run(a);
                this.resizeParent && !this.graph.isCellCollapsed(a) && this.graph.updateGroupBounds([a], this.parentBorder, this.moveParent)
            } finally {
                c.endUpdate()
            }
        }
    }
};
mxHierarchicalLayout.prototype.findTreeRoots = function (a) {
    var b = [];
    if (a != null) {
        for (var c = this.graph.model, d = c.getChildCount(a), e = null, f = 0, g = 0; g < d; g++) {
            var h = c.getChildAt(a, g), k = [];
            this.traverseAncestors ? k = c.getDescendants(h) : k.push(h);
            for (var i = 0; i < k.length; i++) {
                h = k[i];
                if (c.isVertex(h) && this.graph.isCellVisible(h)) {
                    for (var l = this.getEdges(h), m = 0, n = 0, o = 0; o < l.length; o++)this.graph.view.getVisibleTerminal(l[o], true) == h ? m++ : n++;
                    n == 0 && m > 0 && b.push(h);
                    l = n - m;
                    if (l > f) {
                        f = l;
                        e = h
                    }
                }
            }
        }
        b.length == 0 && e != null && b.push(e)
    }
    return b
};
mxHierarchicalLayout.prototype.getEdges = function (a) {
    for (var b = this.graph.model, c = [], d = this.graph.isCellCollapsed(a), e = b.getChildCount(a), f = 0; f < e; f++) {
        var g = b.getChildAt(a, f);
        if (d || !this.graph.isCellVisible(g))c = c.concat(b.getEdges(g, true, true))
    }
    c = c.concat(b.getEdges(a, true, true));
    b = [];
    for (f = 0; f < c.length; f++) {
        e = this.graph.view.getState(c[f]);
        d = e != null ? e.getVisibleTerminal(true) : this.graph.view.getVisibleTerminal(c[f], true);
        e = e != null ? e.getVisibleTerminal(false) : this.graph.view.getVisibleTerminal(c[f],
            false);
        (d == e || d != e && (e == a && (this.parent == null || this.graph.isValidAncestor(d, this.parent, this.traverseAncestors)) || d == a && (this.parent == null || this.graph.isValidAncestor(e, this.parent, this.traverseAncestors)))) && b.push(c[f])
    }
    return b
};
mxHierarchicalLayout.prototype.run = function (a) {
    var b = [], c = null, d = null, e = null;
    if (this.fixRoots) {
        c = [];
        d = [];
        e = []
    }
    for (var f = 0; f < this.roots.length; f++) {
        for (var g = true, h = 0; g && h < b.length; h++) {
            var k = mxCellPath.create(this.roots[f]);
            b[h][k] != null && (g = false)
        }
        if (g) {
            h = [];
            h.push(this.roots[f]);
            k = null;
            if (this.fixRoots) {
                c.push(this.roots[f]);
                g = this.getVertexBounds(this.roots[f]).getPoint();
                d.push(g);
                k = []
            }
            for (g = {}; h.length > 0;) {
                var i = h.shift(), l = mxCellPath.create(i);
                if (g[l] == null) {
                    g[l] = i;
                    if (this.fixRoots)for (var m =
                        this.graph.getIncomingEdges(i, a), l = 0; l < m.length; l++)k.push(m[l]);
                    i = this.graph.getOpposites(this.getEdges(i), i);
                    for (l = 0; l < i.length; l++) {
                        m = mxCellPath.create(i[l]);
                        g[m] == null && h.push(i[l])
                    }
                }
            }
            b.push(g);
            this.fixRoots && e.push(k)
        }
    }
    for (f = h = 0; f < b.length; f++) {
        var g = b[f], m = [], n;
        for (n in g)m.push(g[n]);
        this.model = new mxGraphHierarchyModel(this, m, this.roots, a, this.deterministic, this.tightenToSource, this.layoutFromSinks);
        this.cycleStage(a);
        this.layeringStage();
        this.crossingStage(a);
        h = this.placementStage(h, a);
        if (this.fixRoots) {
            l =
                d[f];
            i = this.getVertexBounds(c[f]).getPoint();
            k = l.x - i.x;
            l = l.y - i.y;
            this.graph.moveCells(g, k, l);
            this.graph.moveCells(e[f + 1], k, l)
        }
    }
};
mxHierarchicalLayout.prototype.cycleStage = function (a) {
    (new mxMinimumCycleRemover(this)).execute(a)
};
mxHierarchicalLayout.prototype.layeringStage = function () {
    this.model.initialRank();
    this.model.fixRanks()
};
mxHierarchicalLayout.prototype.crossingStage = function (a) {
    (new mxMedianHybridCrossingReduction(this)).execute(a)
};
mxHierarchicalLayout.prototype.placementStage = function (a, b) {
    var c = new mxCoordinateAssignment(this, this.intraCellSpacing, this.interRankCellSpacing, this.orientation, a, this.parallelEdgeSpacing);
    c.fineTuning = this.fineTuning;
    c.execute(b);
    return c.limitX + this.interHierarchySpacing
};
function mxGraphModel(a) {
    this.currentEdit = this.createUndoableEdit();
    a != null ? this.setRoot(a) : this.clear()
}
mxGraphModel.prototype = new mxEventSource;
mxGraphModel.prototype.constructor = mxGraphModel;
mxGraphModel.prototype.root = null;
mxGraphModel.prototype.cells = null;
mxGraphModel.prototype.maintainEdgeParent = !0;
mxGraphModel.prototype.createIds = !0;
mxGraphModel.prototype.prefix = "";
mxGraphModel.prototype.postfix = "";
mxGraphModel.prototype.nextId = 0;
mxGraphModel.prototype.currentEdit = null;
mxGraphModel.prototype.updateLevel = 0;
mxGraphModel.prototype.endingUpdate = !1;
mxGraphModel.prototype.clear = function () {
    this.setRoot(this.createRoot())
};
mxGraphModel.prototype.isCreateIds = function () {
    return this.createIds
};
mxGraphModel.prototype.setCreateIds = function (a) {
    this.createIds = a
};
mxGraphModel.prototype.createRoot = function () {
    var a = new mxCell;
    a.insert(new mxCell);
    return a
};
mxGraphModel.prototype.getCell = function (a) {
    return this.cells != null ? this.cells[a] : null
};
mxGraphModel.prototype.filterCells = function (a, b) {
    var c = null;
    if (a != null)for (var c = [], d = 0; d < a.length; d++)b(a[d]) && c.push(a[d]);
    return c
};
mxGraphModel.prototype.getDescendants = function (a) {
    return this.filterDescendants(null, a)
};
mxGraphModel.prototype.filterDescendants = function (a, b) {
    var c = [], b = b || this.getRoot();
    (a == null || a(b)) && c.push(b);
    for (var d = this.getChildCount(b), e = 0; e < d; e++)var f = this.getChildAt(b, e), c = c.concat(this.filterDescendants(a, f));
    return c
};
mxGraphModel.prototype.getRoot = function (a) {
    var b = a || this.root;
    if (a != null)for (; a != null;) {
        b = a;
        a = this.getParent(a)
    }
    return b
};
mxGraphModel.prototype.setRoot = function (a) {
    this.execute(new mxRootChange(this, a));
    return a
};
mxGraphModel.prototype.rootChanged = function (a) {
    var b = this.root;
    this.root = a;
    this.nextId = 0;
    this.cells = null;
    this.cellAdded(a);
    return b
};
mxGraphModel.prototype.isRoot = function (a) {
    return a != null && this.root == a
};
mxGraphModel.prototype.isLayer = function (a) {
    return this.isRoot(this.getParent(a))
};
mxGraphModel.prototype.isAncestor = function (a, b) {
    for (; b != null && b != a;)b = this.getParent(b);
    return b == a
};
mxGraphModel.prototype.contains = function (a) {
    return this.isAncestor(this.root, a)
};
mxGraphModel.prototype.getParent = function (a) {
    return a != null ? a.getParent() : null
};
mxGraphModel.prototype.add = function (a, b, c) {
    if (b != a && a != null && b != null) {
        c == null && (c = this.getChildCount(a));
        var d = a != this.getParent(b);
        this.execute(new mxChildChange(this, a, b, c));
        this.maintainEdgeParent && d && this.updateEdgeParents(b)
    }
    return b
};
mxGraphModel.prototype.cellAdded = function (a) {
    if (a != null) {
        a.getId() == null && this.createIds && a.setId(this.createId(a));
        if (a.getId() != null) {
            var b = this.getCell(a.getId());
            if (b != a) {
                for (; b != null;) {
                    a.setId(this.createId(a));
                    b = this.getCell(a.getId())
                }
                if (this.cells == null)this.cells = {};
                this.cells[a.getId()] = a
            }
        }
        if (mxUtils.isNumeric(a.getId()))this.nextId = Math.max(this.nextId, a.getId());
        for (var b = this.getChildCount(a), c = 0; c < b; c++)this.cellAdded(this.getChildAt(a, c))
    }
};
mxGraphModel.prototype.createId = function () {
    var a = this.nextId;
    this.nextId++;
    return this.prefix + a + this.postfix
};
mxGraphModel.prototype.updateEdgeParents = function (a, b) {
    for (var b = b || this.getRoot(a), c = this.getChildCount(a), d = 0; d < c; d++)this.updateEdgeParents(this.getChildAt(a, d), b);
    for (var e = this.getEdgeCount(a), c = [], d = 0; d < e; d++)c.push(this.getEdgeAt(a, d));
    for (d = 0; d < c.length; d++) {
        e = c[d];
        this.isAncestor(b, e) && this.updateEdgeParent(e, b)
    }
};
mxGraphModel.prototype.updateEdgeParent = function (a, b) {
    for (var c = this.getTerminal(a, true), d = this.getTerminal(a, false), e = null; c != null && !this.isEdge(c) && c.geometry != null && c.geometry.relative;)c = this.getParent(c);
    for (; d != null && !this.isEdge(d) && d.geometry != null && d.geometry.relative;)d = this.getParent(d);
    if (this.isAncestor(b, c) && this.isAncestor(b, d)) {
        e = c == d ? this.getParent(c) : this.getNearestCommonAncestor(c, d);
        if (e != null && (this.getParent(e) != this.root || this.isAncestor(e, a)) && this.getParent(a) != e) {
            c = this.getGeometry(a);
            if (c != null) {
                var f = this.getOrigin(this.getParent(a)), g = this.getOrigin(e), d = g.x - f.x, f = g.y - f.y, c = c.clone();
                c.translate(-d, -f);
                this.setGeometry(a, c)
            }
            this.add(e, a, this.getChildCount(e))
        }
    }
};
mxGraphModel.prototype.getOrigin = function (a) {
    var b = null;
    if (a != null) {
        b = this.getOrigin(this.getParent(a));
        if (!this.isEdge(a)) {
            a = this.getGeometry(a);
            if (a != null) {
                b.x = b.x + a.x;
                b.y = b.y + a.y
            }
        }
    } else b = new mxPoint;
    return b
};
mxGraphModel.prototype.getNearestCommonAncestor = function (a, b) {
    if (a != null && b != null) {
        var c = mxCellPath.create(b);
        if (c != null && c.length > 0) {
            var d = a, e = mxCellPath.create(d);
            if (c.length < e.length)var d = b, f = e, e = c, c = f;
            for (; d != null;) {
                f = this.getParent(d);
                if (c.indexOf(e + mxCellPath.PATH_SEPARATOR) == 0 && f != null)return d;
                e = mxCellPath.getParentPath(e);
                d = f
            }
        }
    }
    return null
};
mxGraphModel.prototype.remove = function (a) {
    a == this.root ? this.setRoot(null) : this.getParent(a) != null && this.execute(new mxChildChange(this, null, a));
    return a
};
mxGraphModel.prototype.cellRemoved = function (a) {
    if (a != null && this.cells != null) {
        for (var b = this.getChildCount(a) - 1; b >= 0; b--)this.cellRemoved(this.getChildAt(a, b));
        this.cells != null && a.getId() != null && delete this.cells[a.getId()]
    }
};
mxGraphModel.prototype.parentForCellChanged = function (a, b, c) {
    var d = this.getParent(a);
    if (b != null)(b != d || d.getIndex(a) != c) && b.insert(a, c); else if (d != null) {
        c = d.getIndex(a);
        d.remove(c)
    }
    !this.contains(d) && b != null ? this.cellAdded(a) : b == null && this.cellRemoved(a);
    return d
};
mxGraphModel.prototype.getChildCount = function (a) {
    return a != null ? a.getChildCount() : 0
};
mxGraphModel.prototype.getChildAt = function (a, b) {
    return a != null ? a.getChildAt(b) : null
};
mxGraphModel.prototype.getChildren = function (a) {
    return a != null ? a.children : null
};
mxGraphModel.prototype.getChildVertices = function (a) {
    return this.getChildCells(a, true, false)
};
mxGraphModel.prototype.getChildEdges = function (a) {
    return this.getChildCells(a, false, true)
};
mxGraphModel.prototype.getChildCells = function (a, b, c) {
    for (var b = b != null ? b : false, c = c != null ? c : false, d = this.getChildCount(a), e = [], f = 0; f < d; f++) {
        var g = this.getChildAt(a, f);
        (!c && !b || c && this.isEdge(g) || b && this.isVertex(g)) && e.push(g)
    }
    return e
};
mxGraphModel.prototype.getTerminal = function (a, b) {
    return a != null ? a.getTerminal(b) : null
};
mxGraphModel.prototype.setTerminal = function (a, b, c) {
    var d = b != this.getTerminal(a, c);
    this.execute(new mxTerminalChange(this, a, b, c));
    this.maintainEdgeParent && d && this.updateEdgeParent(a, this.getRoot());
    return b
};
mxGraphModel.prototype.setTerminals = function (a, b, c) {
    this.beginUpdate();
    try {
        this.setTerminal(a, b, true);
        this.setTerminal(a, c, false)
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.terminalForCellChanged = function (a, b, c) {
    var d = this.getTerminal(a, c);
    b != null ? b.insertEdge(a, c) : d != null && d.removeEdge(a, c);
    return d
};
mxGraphModel.prototype.getEdgeCount = function (a) {
    return a != null ? a.getEdgeCount() : 0
};
mxGraphModel.prototype.getEdgeAt = function (a, b) {
    return a != null ? a.getEdgeAt(b) : null
};
mxGraphModel.prototype.getDirectedEdgeCount = function (a, b, c) {
    for (var d = 0, e = this.getEdgeCount(a), f = 0; f < e; f++) {
        var g = this.getEdgeAt(a, f);
        g != c && this.getTerminal(g, b) == a && d++
    }
    return d
};
mxGraphModel.prototype.getConnections = function (a) {
    return this.getEdges(a, true, true, false)
};
mxGraphModel.prototype.getIncomingEdges = function (a) {
    return this.getEdges(a, true, false, false)
};
mxGraphModel.prototype.getOutgoingEdges = function (a) {
    return this.getEdges(a, false, true, false)
};
mxGraphModel.prototype.getEdges = function (a, b, c, d) {
    for (var b = b != null ? b : true, c = c != null ? c : true, d = d != null ? d : true, e = this.getEdgeCount(a), f = [], g = 0; g < e; g++) {
        var h = this.getEdgeAt(a, g), k = this.getTerminal(h, true), i = this.getTerminal(h, false);
        (d && k == i || k != i && (b && i == a || c && k == a)) && f.push(h)
    }
    return f
};
mxGraphModel.prototype.getEdgesBetween = function (a, b, c) {
    var c = c != null ? c : false, d = this.getEdgeCount(a), e = this.getEdgeCount(b), f = a, g = d;
    if (e < d) {
        g = e;
        f = b
    }
    d = [];
    for (e = 0; e < g; e++) {
        var h = this.getEdgeAt(f, e), k = this.getTerminal(h, true), i = this.getTerminal(h, false), l = i == a && k == b;
        (k == a && i == b || !c && l) && d.push(h)
    }
    return d
};
mxGraphModel.prototype.getOpposites = function (a, b, c, d) {
    var c = c != null ? c : true, d = d != null ? d : true, e = [];
    if (a != null)for (var f = 0; f < a.length; f++) {
        var g = this.getTerminal(a[f], true), h = this.getTerminal(a[f], false);
        g == b && h != null && h != b && d ? e.push(h) : h == b && (g != null && g != b && c) && e.push(g)
    }
    return e
};
mxGraphModel.prototype.getTopmostCells = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        for (var d = a[c], e = true, f = this.getParent(d); f != null;) {
            if (mxUtils.indexOf(a, f) >= 0) {
                e = false;
                break
            }
            f = this.getParent(f)
        }
        e && b.push(d)
    }
    return b
};
mxGraphModel.prototype.isVertex = function (a) {
    return a != null ? a.isVertex() : false
};
mxGraphModel.prototype.isEdge = function (a) {
    return a != null ? a.isEdge() : false
};
mxGraphModel.prototype.isConnectable = function (a) {
    return a != null ? a.isConnectable() : false
};
mxGraphModel.prototype.getValue = function (a) {
    return a != null ? a.getValue() : null
};
mxGraphModel.prototype.setValue = function (a, b) {
    this.execute(new mxValueChange(this, a, b));
    return b
};
mxGraphModel.prototype.valueForCellChanged = function (a, b) {
    return a.valueChanged(b)
};
mxGraphModel.prototype.getGeometry = function (a) {
    return a != null ? a.getGeometry() : null
};
mxGraphModel.prototype.setGeometry = function (a, b) {
    b != this.getGeometry(a) && this.execute(new mxGeometryChange(this, a, b));
    return b
};
mxGraphModel.prototype.geometryForCellChanged = function (a, b) {
    var c = this.getGeometry(a);
    a.setGeometry(b);
    return c
};
mxGraphModel.prototype.getStyle = function (a) {
    return a != null ? a.getStyle() : null
};
mxGraphModel.prototype.setStyle = function (a, b) {
    b != this.getStyle(a) && this.execute(new mxStyleChange(this, a, b));
    return b
};
mxGraphModel.prototype.styleForCellChanged = function (a, b) {
    var c = this.getStyle(a);
    a.setStyle(b);
    return c
};
mxGraphModel.prototype.isCollapsed = function (a) {
    return a != null ? a.isCollapsed() : false
};
mxGraphModel.prototype.setCollapsed = function (a, b) {
    b != this.isCollapsed(a) && this.execute(new mxCollapseChange(this, a, b));
    return b
};
mxGraphModel.prototype.collapsedStateForCellChanged = function (a, b) {
    var c = this.isCollapsed(a);
    a.setCollapsed(b);
    return c
};
mxGraphModel.prototype.isVisible = function (a) {
    return a != null ? a.isVisible() : false
};
mxGraphModel.prototype.setVisible = function (a, b) {
    b != this.isVisible(a) && this.execute(new mxVisibleChange(this, a, b));
    return b
};
mxGraphModel.prototype.visibleStateForCellChanged = function (a, b) {
    var c = this.isVisible(a);
    a.setVisible(b);
    return c
};
mxGraphModel.prototype.execute = function (a) {
    a.execute();
    this.beginUpdate();
    this.currentEdit.add(a);
    this.fireEvent(new mxEventObject(mxEvent.EXECUTE, "change", a));
    this.endUpdate()
};
mxGraphModel.prototype.beginUpdate = function () {
    this.updateLevel++;
    this.fireEvent(new mxEventObject(mxEvent.BEGIN_UPDATE))
};
mxGraphModel.prototype.endUpdate = function () {
    this.updateLevel--;
    if (!this.endingUpdate) {
        this.endingUpdate = this.updateLevel == 0;
        this.fireEvent(new mxEventObject(mxEvent.END_UPDATE, "edit", this.currentEdit));
        try {
            if (this.endingUpdate && !this.currentEdit.isEmpty()) {
                this.fireEvent(new mxEventObject(mxEvent.BEFORE_UNDO, "edit", this.currentEdit));
                var a = this.currentEdit;
                this.currentEdit = this.createUndoableEdit();
                a.notify();
                this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", a))
            }
        } finally {
            this.endingUpdate = false
        }
    }
};
mxGraphModel.prototype.createUndoableEdit = function () {
    var a = new mxUndoableEdit(this, true);
    a.notify = function () {
        a.source.fireEvent(new mxEventObject(mxEvent.CHANGE, "edit", a, "changes", a.changes));
        a.source.fireEvent(new mxEventObject(mxEvent.NOTIFY, "edit", a, "changes", a.changes))
    };
    return a
};
mxGraphModel.prototype.mergeChildren = function (a, b, c) {
    c = c != null ? c : true;
    this.beginUpdate();
    try {
        var d = {};
        this.mergeChildrenImpl(a, b, c, d);
        for (var e in d) {
            var f = d[e], g = this.getTerminal(f, true);
            if (g != null) {
                g = d[mxCellPath.create(g)];
                this.setTerminal(f, g, true)
            }
            g = this.getTerminal(f, false);
            if (g != null) {
                g = d[mxCellPath.create(g)];
                this.setTerminal(f, g, false)
            }
        }
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.mergeChildrenImpl = function (a, b, c, d) {
    this.beginUpdate();
    try {
        for (var e = a.getChildCount(), f = 0; f < e; f++) {
            var g = a.getChildAt(f);
            if (typeof g.getId == "function") {
                var h = g.getId(), k = h != null && (!this.isEdge(g) || !c) ? this.getCell(h) : null;
                if (k == null) {
                    var i = g.clone();
                    i.setId(h);
                    i.setTerminal(g.getTerminal(true), true);
                    i.setTerminal(g.getTerminal(false), false);
                    k = b.insert(i);
                    this.cellAdded(k)
                }
                d[mxCellPath.create(g)] = k;
                this.mergeChildrenImpl(g, k, c, d)
            }
        }
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.getParents = function (a) {
    var b = [];
    if (a != null)for (var c = {}, d = 0; d < a.length; d++) {
        var e = this.getParent(a[d]);
        if (e != null) {
            var f = mxCellPath.create(e);
            if (c[f] == null) {
                c[f] = e;
                b.push(e)
            }
        }
    }
    return b
};
mxGraphModel.prototype.cloneCell = function (a) {
    return a != null ? this.cloneCells([a], true)[0] : null
};
mxGraphModel.prototype.cloneCells = function (a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)a[e] != null ? d.push(this.cloneCellImpl(a[e], c, b)) : d.push(null);
    for (e = 0; e < d.length; e++)d[e] != null && this.restoreClone(d[e], a[e], c);
    return d
};
mxGraphModel.prototype.cloneCellImpl = function (a, b, c) {
    var d = this.cellCloned(a);
    b[mxObjectIdentity.get(a)] = d;
    if (c)for (var c = this.getChildCount(a), e = 0; e < c; e++) {
        var f = this.cloneCellImpl(this.getChildAt(a, e), b, true);
        d.insert(f)
    }
    return d
};
mxGraphModel.prototype.cellCloned = function (a) {
    return a.clone()
};
mxGraphModel.prototype.restoreClone = function (a, b, c) {
    var d = this.getTerminal(b, true);
    if (d != null) {
        d = c[mxObjectIdentity.get(d)];
        d != null && d.insertEdge(a, true)
    }
    d = this.getTerminal(b, false);
    if (d != null) {
        d = c[mxObjectIdentity.get(d)];
        d != null && d.insertEdge(a, false)
    }
    for (var d = this.getChildCount(a), e = 0; e < d; e++)this.restoreClone(this.getChildAt(a, e), this.getChildAt(b, e), c)
};
function mxRootChange(a, b) {
    this.model = a;
    this.previous = this.root = b
}
mxRootChange.prototype.execute = function () {
    this.root = this.previous;
    this.previous = this.model.rootChanged(this.previous)
};
function mxChildChange(a, b, c, d) {
    this.model = a;
    this.previous = this.parent = b;
    this.child = c;
    this.previousIndex = this.index = d
}
mxChildChange.prototype.execute = function () {
    var a = this.model.getParent(this.child), b = a != null ? a.getIndex(this.child) : 0;
    this.previous == null && this.connect(this.child, false);
    a = this.model.parentForCellChanged(this.child, this.previous, this.previousIndex);
    this.previous != null && this.connect(this.child, true);
    this.parent = this.previous;
    this.previous = a;
    this.index = this.previousIndex;
    this.previousIndex = b
};
mxChildChange.prototype.connect = function (a, b) {
    var b = b != null ? b : true, c = a.getTerminal(true), d = a.getTerminal(false);
    c != null && (b ? this.model.terminalForCellChanged(a, c, true) : this.model.terminalForCellChanged(a, null, true));
    d != null && (b ? this.model.terminalForCellChanged(a, d, false) : this.model.terminalForCellChanged(a, null, false));
    a.setTerminal(c, true);
    a.setTerminal(d, false);
    c = this.model.getChildCount(a);
    for (d = 0; d < c; d++)this.connect(this.model.getChildAt(a, d), b)
};
function mxTerminalChange(a, b, c, d) {
    this.model = a;
    this.cell = b;
    this.previous = this.terminal = c;
    this.source = d
}
mxTerminalChange.prototype.execute = function () {
    this.terminal = this.previous;
    this.previous = this.model.terminalForCellChanged(this.cell, this.previous, this.source)
};
function mxValueChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.value = c
}
mxValueChange.prototype.execute = function () {
    this.value = this.previous;
    this.previous = this.model.valueForCellChanged(this.cell, this.previous)
};
function mxStyleChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.style = c
}
mxStyleChange.prototype.execute = function () {
    this.style = this.previous;
    this.previous = this.model.styleForCellChanged(this.cell, this.previous)
};
function mxGeometryChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.geometry = c
}
mxGeometryChange.prototype.execute = function () {
    this.geometry = this.previous;
    this.previous = this.model.geometryForCellChanged(this.cell, this.previous)
};
function mxCollapseChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.collapsed = c
}
mxCollapseChange.prototype.execute = function () {
    this.collapsed = this.previous;
    this.previous = this.model.collapsedStateForCellChanged(this.cell, this.previous)
};
function mxVisibleChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.visible = c
}
mxVisibleChange.prototype.execute = function () {
    this.visible = this.previous;
    this.previous = this.model.visibleStateForCellChanged(this.cell, this.previous)
};
function mxCellAttributeChange(a, b, c) {
    this.cell = a;
    this.attribute = b;
    this.previous = this.value = c
}
mxCellAttributeChange.prototype.execute = function () {
    var a = this.cell.getAttribute(this.attribute);
    this.previous == null ? this.cell.value.removeAttribute(this.attribute) : this.cell.setAttribute(this.attribute, this.previous);
    this.previous = a
};
function mxCell(a, b, c) {
    this.value = a;
    this.setGeometry(b);
    this.setStyle(c);
    if (this.onInit != null)this.onInit()
}
mxCell.prototype.id = null;
mxCell.prototype.value = null;
mxCell.prototype.geometry = null;
mxCell.prototype.style = null;
mxCell.prototype.vertex = !1;
mxCell.prototype.edge = !1;
mxCell.prototype.connectable = !0;
mxCell.prototype.visible = !0;
mxCell.prototype.collapsed = !1;
mxCell.prototype.parent = null;
mxCell.prototype.source = null;
mxCell.prototype.target = null;
mxCell.prototype.children = null;
mxCell.prototype.edges = null;
mxCell.prototype.mxTransient = "id value parent source target children edges".split(" ");
mxCell.prototype.getId = function () {
    return this.id
};
mxCell.prototype.setId = function (a) {
    this.id = a
};
mxCell.prototype.getValue = function () {
    return this.value
};
mxCell.prototype.setValue = function (a) {
    this.value = a
};
mxCell.prototype.valueChanged = function (a) {
    var b = this.getValue();
    this.setValue(a);
    return b
};
mxCell.prototype.getGeometry = function () {
    return this.geometry
};
mxCell.prototype.setGeometry = function (a) {
    this.geometry = a
};
mxCell.prototype.getStyle = function () {
    return this.style
};
mxCell.prototype.setStyle = function (a) {
    this.style = a
};
mxCell.prototype.isVertex = function () {
    return this.vertex
};
mxCell.prototype.setVertex = function (a) {
    this.vertex = a
};
mxCell.prototype.isEdge = function () {
    return this.edge
};
mxCell.prototype.setEdge = function (a) {
    this.edge = a
};
mxCell.prototype.isConnectable = function () {
    return this.connectable
};
mxCell.prototype.setConnectable = function (a) {
    this.connectable = a
};
mxCell.prototype.isVisible = function () {
    return this.visible
};
mxCell.prototype.setVisible = function (a) {
    this.visible = a
};
mxCell.prototype.isCollapsed = function () {
    return this.collapsed
};
mxCell.prototype.setCollapsed = function (a) {
    this.collapsed = a
};
mxCell.prototype.getParent = function () {
    return this.parent
};
mxCell.prototype.setParent = function (a) {
    this.parent = a
};
mxCell.prototype.getTerminal = function (a) {
    return a ? this.source : this.target
};
mxCell.prototype.setTerminal = function (a, b) {
    b ? this.source = a : this.target = a;
    return a
};
mxCell.prototype.getChildCount = function () {
    return this.children == null ? 0 : this.children.length
};
mxCell.prototype.getIndex = function (a) {
    return mxUtils.indexOf(this.children, a)
};
mxCell.prototype.getChildAt = function (a) {
    return this.children == null ? null : this.children[a]
};
mxCell.prototype.insert = function (a, b) {
    if (a != null) {
        if (b == null) {
            b = this.getChildCount();
            a.getParent() == this && b--
        }
        a.removeFromParent();
        a.setParent(this);
        if (this.children == null) {
            this.children = [];
            this.children.push(a)
        } else this.children.splice(b, 0, a)
    }
    return a
};
mxCell.prototype.remove = function (a) {
    var b = null;
    if (this.children != null && a >= 0) {
        b = this.getChildAt(a);
        if (b != null) {
            this.children.splice(a, 1);
            b.setParent(null)
        }
    }
    return b
};
mxCell.prototype.removeFromParent = function () {
    this.parent != null && this.parent.remove(this.parent.getIndex(this))
};
mxCell.prototype.getEdgeCount = function () {
    return this.edges == null ? 0 : this.edges.length
};
mxCell.prototype.getEdgeIndex = function (a) {
    return mxUtils.indexOf(this.edges, a)
};
mxCell.prototype.getEdgeAt = function (a) {
    return this.edges == null ? null : this.edges[a]
};
mxCell.prototype.insertEdge = function (a, b) {
    if (a != null) {
        a.removeFromTerminal(b);
        a.setTerminal(this, b);
        if (this.edges == null || a.getTerminal(!b) != this || mxUtils.indexOf(this.edges, a) < 0) {
            if (this.edges == null)this.edges = [];
            this.edges.push(a)
        }
    }
    return a
};
mxCell.prototype.removeEdge = function (a, b) {
    if (a != null) {
        if (a.getTerminal(!b) != this && this.edges != null) {
            var c = this.getEdgeIndex(a);
            c >= 0 && this.edges.splice(c, 1)
        }
        a.setTerminal(null, b)
    }
    return a
};
mxCell.prototype.removeFromTerminal = function (a) {
    var b = this.getTerminal(a);
    b != null && b.removeEdge(this, a)
};
mxCell.prototype.getAttribute = function (a, b) {
    var c = this.getValue();
    return(c != null && c.nodeType == mxConstants.NODETYPE_ELEMENT ? c.getAttribute(a) : null) || b
};
mxCell.prototype.setAttribute = function (a, b) {
    var c = this.getValue();
    c != null && c.nodeType == mxConstants.NODETYPE_ELEMENT && c.setAttribute(a, b)
};
mxCell.prototype.clone = function () {
    var a = mxUtils.clone(this, this.mxTransient);
    a.setValue(this.cloneValue());
    return a
};
mxCell.prototype.cloneValue = function () {
    var a = this.getValue();
    a != null && (typeof a.clone == "function" ? a = a.clone() : isNaN(a.nodeType) || (a = a.cloneNode(true)));
    return a
};
function mxGeometry(a, b, c, d) {
    mxRectangle.call(this, a, b, c, d)
}
mxGeometry.prototype = new mxRectangle;
mxGeometry.prototype.constructor = mxGeometry;
mxGeometry.prototype.TRANSLATE_CONTROL_POINTS = !0;
mxGeometry.prototype.alternateBounds = null;
mxGeometry.prototype.sourcePoint = null;
mxGeometry.prototype.targetPoint = null;
mxGeometry.prototype.points = null;
mxGeometry.prototype.offset = null;
mxGeometry.prototype.relative = !1;
mxGeometry.prototype.swap = function () {
    if (this.alternateBounds != null) {
        var a = new mxRectangle(this.x, this.y, this.width, this.height);
        this.x = this.alternateBounds.x;
        this.y = this.alternateBounds.y;
        this.width = this.alternateBounds.width;
        this.height = this.alternateBounds.height;
        this.alternateBounds = a
    }
};
mxGeometry.prototype.getTerminalPoint = function (a) {
    return a ? this.sourcePoint : this.targetPoint
};
mxGeometry.prototype.setTerminalPoint = function (a, b) {
    b ? this.sourcePoint = a : this.targetPoint = a;
    return a
};
mxGeometry.prototype.translate = function (a, b) {
    this.clone();
    if (!this.relative) {
        this.x = this.x + a;
        this.y = this.y + b
    }
    if (this.sourcePoint != null) {
        this.sourcePoint.x = this.sourcePoint.x + a;
        this.sourcePoint.y = this.sourcePoint.y + b
    }
    if (this.targetPoint != null) {
        this.targetPoint.x = this.targetPoint.x + a;
        this.targetPoint.y = this.targetPoint.y + b
    }
    if (this.TRANSLATE_CONTROL_POINTS && this.points != null)for (var c = this.points.length, d = 0; d < c; d++) {
        var e = this.points[d];
        if (e != null) {
            e.x = e.x + a;
            e.y = e.y + b
        }
    }
};
var mxCellPath = {PATH_SEPARATOR:".", create:function (a) {
    var b = "";
    if (a != null)for (var c = a.getParent(); c != null;) {
        b = c.getIndex(a) + mxCellPath.PATH_SEPARATOR + b;
        a = c;
        c = a.getParent()
    }
    a = b.length;
    a > 1 && (b = b.substring(0, a - 1));
    return b
}, getParentPath:function (a) {
    if (a != null) {
        var b = a.lastIndexOf(mxCellPath.PATH_SEPARATOR);
        if (b >= 0)return a.substring(0, b);
        if (a.length > 0)return""
    }
    return null
}, resolve:function (a, b) {
    var c = a;
    if (b != null)for (var d = b.split(mxCellPath.PATH_SEPARATOR), e = 0; e < d.length; e++)c = c.getChildAt(parseInt(d[e]));
    return c
}, compare:function (a, b) {
    for (var c = Math.min(a.length, b.length), d = 0, e = 0; e < c; e++)if (a[e] != b[e]) {
        if (a[e].length == 0 || b[e].length == 0)d = a[e] == b[e] ? 0 : a[e] > b[e] ? 1 : -1; else {
            c = parseInt(a[e]);
            e = parseInt(b[e]);
            d = c == e ? 0 : c > e ? 1 : -1
        }
        break
    }
    if (d == 0) {
        c = a.length;
        e = b.length;
        c != e && (d = c > e ? 1 : -1)
    }
    return d
}}, mxPerimeter = {RectanglePerimeter:function (a, b, c, d) {
    var b = a.getCenterX(), e = a.getCenterY(), f = Math.atan2(c.y - e, c.x - b), g = new mxPoint(0, 0), h = Math.PI, k = Math.PI / 2 - f, i = Math.atan2(a.height, a.width);
    if (f < -h + i || f > h - i) {
        g.x = a.x;
        g.y = e - a.width * Math.tan(f) / 2
    } else if (f < -i) {
        g.y = a.y;
        g.x = b - a.height * Math.tan(k) / 2
    } else if (f < i) {
        g.x = a.x + a.width;
        g.y = e + a.width * Math.tan(f) / 2
    } else {
        g.y = a.y + a.height;
        g.x = b + a.height * Math.tan(k) / 2
    }
    if (d) {
        if (c.x >= a.x && c.x <= a.x + a.width)g.x = c.x; else if (c.y >= a.y && c.y <= a.y + a.height)g.y = c.y;
        if (c.x < a.x)g.x = a.x; else if (c.x > a.x + a.width)g.x = a.x + a.width;
        if (c.y < a.y)g.y = a.y; else if (c.y > a.y + a.height)g.y = a.y + a.height
    }
    return g
}, EllipsePerimeter:function (a, b, c, d) {
    var e = a.x, f = a.y, g = a.width / 2, h = a.height / 2, k = e + g, i = f + h, b = c.x, c =
        c.y, l = parseInt(b - k), m = parseInt(c - i);
    if (l == 0 && m != 0)return new mxPoint(k, i + h * m / Math.abs(m));
    if (l == 0 && m == 0)return new mxPoint(b, c);
    if (d) {
        if (c >= f && c <= f + a.height) {
            a = c - i;
            a = Math.sqrt(g * g * (1 - a * a / (h * h))) || 0;
            b <= e && (a = -a);
            return new mxPoint(k + a, c)
        }
        if (b >= e && b <= e + a.width) {
            a = b - k;
            a = Math.sqrt(h * h * (1 - a * a / (g * g))) || 0;
            c <= f && (a = -a);
            return new mxPoint(b, i + a)
        }
    }
    e = m / l;
    i = i - e * k;
    f = g * g * e * e + h * h;
    a = -2 * k * f;
    h = Math.sqrt(a * a - 4 * f * (g * g * e * e * k * k + h * h * k * k - g * g * h * h));
    g = (-a + h) / (2 * f);
    h = (-a - h) / (2 * f);
    k = e * g + i;
    i = e * h + i;
    e = Math.sqrt(Math.pow(g - b, 2) +
        Math.pow(k - c, 2));
    b = Math.sqrt(Math.pow(h - b, 2) + Math.pow(i - c, 2));
    f = c = 0;
    if (e < b) {
        c = g;
        f = k
    } else {
        c = h;
        f = i
    }
    return new mxPoint(c, f)
}, RhombusPerimeter:function (a, b, c, d) {
    var b = a.x, e = a.y, f = a.width, a = a.height, g = b + f / 2, h = e + a / 2, k = c.x, c = c.y;
    if (g == k)return h > c ? new mxPoint(g, e) : new mxPoint(g, e + a);
    if (h == c)return g > k ? new mxPoint(b, h) : new mxPoint(b + f, h);
    var i = g, l = h;
    d && (k >= b && k <= b + f ? i = k : c >= e && c <= e + a && (l = c));
    return k < g ? c < h ? mxUtils.intersection(k, c, i, l, g, e, b, h) : mxUtils.intersection(k, c, i, l, g, e + a, b, h) : c < h ? mxUtils.intersection(k,
        c, i, l, g, e, b + f, h) : mxUtils.intersection(k, c, i, l, g, e + a, b + f, h)
}, TrianglePerimeter:function (a, b, c, d) {
    var b = b != null ? b.style[mxConstants.STYLE_DIRECTION] : null, e = b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_SOUTH, f = a.x, g = a.y, h = a.width, a = a.height, k = f + h / 2, i = g + a / 2, l = new mxPoint(f, g), m = new mxPoint(f + h, i), n = new mxPoint(f, g + a);
    if (b == mxConstants.DIRECTION_NORTH) {
        l = n;
        m = new mxPoint(k, g);
        n = new mxPoint(f + h, g + a)
    } else if (b == mxConstants.DIRECTION_SOUTH) {
        m = new mxPoint(k, g + a);
        n = new mxPoint(f + h, g)
    } else if (b ==
        mxConstants.DIRECTION_WEST) {
        l = new mxPoint(f + h, g);
        m = new mxPoint(f, i);
        n = new mxPoint(f + h, g + a)
    }
    var o = c.x - k, p = c.y - i, o = e ? Math.atan2(o, p) : Math.atan2(p, o), q = e ? Math.atan2(h, a) : Math.atan2(a, h), p = false, p = b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_WEST ? o > -q && o < q : o < -Math.PI + q || o > Math.PI - q, q = null;
    if (p)q = d && (e && c.x >= l.x && c.x <= n.x || !e && c.y >= l.y && c.y <= n.y) ? e ? new mxPoint(c.x, l.y) : new mxPoint(l.x, c.y) : b == mxConstants.DIRECTION_NORTH ? new mxPoint(f + h / 2 + a * Math.tan(o) / 2, g + a) : b == mxConstants.DIRECTION_SOUTH ?
        new mxPoint(f + h / 2 - a * Math.tan(o) / 2, g) : b == mxConstants.DIRECTION_WEST ? new mxPoint(f + h, g + a / 2 + h * Math.tan(o) / 2) : new mxPoint(f, g + a / 2 - h * Math.tan(o) / 2); else {
        if (d) {
            d = new mxPoint(k, i);
            if (c.y >= g && c.y <= g + a) {
                d.x = e ? k : b == mxConstants.DIRECTION_WEST ? f + h : f;
                d.y = c.y
            } else if (c.x >= f && c.x <= f + h) {
                d.x = c.x;
                d.y = !e ? i : b == mxConstants.DIRECTION_NORTH ? g + a : g
            }
            k = d.x;
            i = d.y
        }
        q = e && c.x <= f + h / 2 || !e && c.y <= g + a / 2 ? mxUtils.intersection(c.x, c.y, k, i, l.x, l.y, m.x, m.y) : mxUtils.intersection(c.x, c.y, k, i, m.x, m.y, n.x, n.y)
    }
    q == null && (q = new mxPoint(k, i));
    return q
}};
function mxPrintPreview(a, b, c, d, e, f, g, h, k) {
    this.graph = a;
    this.scale = b != null ? b : 1 / a.pageScale;
    this.border = d != null ? d : 0;
    this.pageFormat = c != null ? c : a.pageFormat;
    this.title = h != null ? h : "Printer-friendly version";
    this.x0 = e != null ? e : 0;
    this.y0 = f != null ? f : 0;
    this.borderColor = g;
    this.pageSelector = k != null ? k : true
}
mxPrintPreview.prototype.graph = null;
mxPrintPreview.prototype.pageFormat = null;
mxPrintPreview.prototype.scale = null;
mxPrintPreview.prototype.border = 0;
mxPrintPreview.prototype.x0 = 0;
mxPrintPreview.prototype.y0 = 0;
mxPrintPreview.prototype.autoOrigin = !0;
mxPrintPreview.prototype.printOverlays = !1;
mxPrintPreview.prototype.borderColor = null;
mxPrintPreview.prototype.title = null;
mxPrintPreview.prototype.pageSelector = null;
mxPrintPreview.prototype.wnd = null;
mxPrintPreview.prototype.pageCount = 0;
mxPrintPreview.prototype.getWindow = function () {
    return this.wnd
};
mxPrintPreview.prototype.getDoctype = function () {
    return""
};
mxPrintPreview.prototype.open = function (a) {
    var b = this.graph.cellRenderer.initializeOverlay, c = null;
    try {
        if (this.printOverlays)this.graph.cellRenderer.initializeOverlay = function (a, b) {
            b.init(a.view.getDrawPane())
        };
        if (this.wnd == null) {
            this.wnd = window.open();
            var d = this.wnd.document, e = this.getDoctype();
            e != null && e.length > 0 && d.writeln(e);
            d.writeln("<html>");
            d.writeln("<head>");
            this.writeHead(d, a);
            d.writeln("</head>");
            d.writeln('<body class="mxPage">');
            mxClient.link("stylesheet", mxClient.basePath + "/css/mxgraph.css",
                d);
            if (mxClient.IS_IE && document.documentMode != 9) {
                d.namespaces.add("v", "urn:schemas-microsoft-com:vml");
                d.namespaces.add("o", "urn:schemas-microsoft-com:office:office");
                d.createStyleSheet().cssText = "v\\:*{behavior:url(#default#VML)}o\\:*{behavior:url(#default#VML)}";
                mxClient.link("stylesheet", mxClient.basePath + "/css/explorer.css", d)
            }
            var f = this.graph.getGraphBounds().clone(), g = this.graph.getView().getScale(), h = g / this.scale, k = this.graph.getView().getTranslate();
            if (!this.autoOrigin) {
                this.x0 = -k.x * this.scale;
                this.y0 = -k.y * this.scale;
                f.width = f.width + f.x;
                f.height = f.height + f.y;
                f.x = 0;
                this.border = f.y = 0
            }
            f.width = f.width / h;
            f.height = f.height / h;
            var i = this.pageFormat.width - this.border * 2, l = this.pageFormat.height - this.border * 2, m = Math.max(1, Math.ceil((f.width + this.x0) / i)), n = Math.max(1, Math.ceil((f.height + this.y0) / l));
            this.pageCount = m * n;
            var o = mxUtils.bind(this, function () {
                if (this.pageSelector && (n > 1 || m > 1)) {
                    var a = this.createPageSelector(n, m);
                    d.body.appendChild(a);
                    if (mxClient.IS_IE) {
                        a.style.position = "absolute";
                        var b = function () {
                            a.style.top =
                                d.body.scrollTop + 10 + "px"
                        };
                        mxEvent.addListener(this.wnd, "scroll", function () {
                            b()
                        });
                        mxEvent.addListener(this.wnd, "resize", function () {
                            b()
                        })
                    }
                }
            }), p = null;
            if (mxClient.IS_IE && document.documentMode != 9) {
                var p = [], q = 0, t = false, u = mxImageShape.prototype.scheduleUpdateAspect, v = mxImageShape.prototype.updateAspect, w = function () {
                    if (t && q == 0) {
                        mxImageShape.prototype.scheduleUpdateAspect = u;
                        mxImageShape.prototype.updateAspect = v;
                        for (var a = "", b = 0; b < p.length; b++) {
                            a = a + p[b].outerHTML;
                            p[b].parentNode.removeChild(p[b]);
                            b < p.length -
                                1 && (a = a + "<hr/>")
                        }
                        d.body.innerHTML = a;
                        o()
                    }
                };
                mxImageShape.prototype.scheduleUpdateAspect = function () {
                    q++;
                    u.apply(this, arguments)
                };
                mxImageShape.prototype.updateAspect = function () {
                    v.apply(this, arguments);
                    q--;
                    w()
                }
            }
            for (a = 0; a < n; a++)for (var r = a * l / this.scale - this.y0 / this.scale + (f.y - k.y * g) / g, e = 0; e < m; e++) {
                if (this.wnd == null)return null;
                h = a * m + e + 1;
                c = this.renderPage(this.pageFormat.width, this.pageFormat.height, -(e * i / this.scale - this.x0 / this.scale + (f.x - k.x * g) / g), -r, this.scale, h);
                c.setAttribute("id", "mxPage-" + h);
                if (this.borderColor !=
                    null) {
                    c.style.borderColor = this.borderColor;
                    c.style.borderStyle = "solid";
                    c.style.borderWidth = "1px"
                }
                c.style.background = "white";
                if (a < n - 1 || e < m - 1)c.style.pageBreakAfter = "always";
                if (mxClient.IS_IE) {
                    d.writeln(c.outerHTML);
                    p != null ? p.push(c) : c.parentNode.removeChild(c)
                } else {
                    c.parentNode.removeChild(c);
                    d.body.appendChild(c)
                }
                if (a < n - 1 || e < m - 1) {
                    var s = d.createElement("hr");
                    s.className = "mxPageBreak";
                    d.body.appendChild(s)
                }
            }
            d.writeln("</body>");
            d.writeln("</html>");
            d.close();
            if (p != null) {
                t = true;
                w()
            } else o();
            mxEvent.release(d.body)
        }
        this.wnd.focus()
    } catch (y) {
        c !=
            null && c.parentNode != null && c.parentNode.removeChild(c)
    } finally {
        this.graph.cellRenderer.initializeOverlay = b
    }
    return this.wnd
};
mxPrintPreview.prototype.writeHead = function (a, b) {
    this.title != null && a.writeln("<title>" + this.title + "</title>");
    a.writeln('<style type="text/css">');
    a.writeln("@media print {");
    a.writeln("  table.mxPageSelector { display: none; }");
    a.writeln("  hr.mxPageBreak { display: none; }");
    a.writeln("}");
    a.writeln("@media screen {");
    a.writeln("  table.mxPageSelector { position: fixed; right: 10px; top: 10px;font-family: Arial; font-size:10pt; border: solid 1px darkgray;background: white; border-collapse:collapse; }");
    a.writeln("  table.mxPageSelector td { border: solid 1px gray; padding:4px; }");
    a.writeln("  body.mxPage { background: gray; }");
    a.writeln("}");
    b != null && a.writeln(b);
    a.writeln("</style>")
};
mxPrintPreview.prototype.createPageSelector = function (a, b) {
    var c = this.wnd.document, d = c.createElement("table");
    d.className = "mxPageSelector";
    d.setAttribute("border", "0");
    for (var e = c.createElement("tbody"), f = 0; f < a; f++) {
        for (var g = c.createElement("tr"), h = 0; h < b; h++) {
            var k = f * b + h + 1, i = c.createElement("td");
            if (!mxClient.IS_NS || mxClient.IS_SF || mxClient.IS_GC) {
                var l = c.createElement("a");
                l.setAttribute("href", "#mxPage-" + k);
                mxUtils.write(l, k, c);
                i.appendChild(l)
            } else mxUtils.write(i, k, c);
            g.appendChild(i)
        }
        e.appendChild(g)
    }
    d.appendChild(e);
    return d
};
mxPrintPreview.prototype.renderPage = function (a, b, c, d, e) {
    var f = document.createElement("div");
    try {
        f.style.width = a + "px";
        f.style.height = b + "px";
        f.style.overflow = "hidden";
        f.style.pageBreakInside = "avoid";
        var g = document.createElement("div");
        g.style.top = this.border + "px";
        g.style.left = this.border + "px";
        g.style.width = a - 2 * this.border + "px";
        g.style.height = b - 2 * this.border + "px";
        g.style.overflow = "hidden";
        if (this.graph.dialect == mxConstants.DIALECT_VML)g.style.position = "absolute";
        f.appendChild(g);
        document.body.appendChild(f);
        var h =
            this.graph.getView(), k = this.graph.container;
        this.graph.container = g;

        var i = h.getCanvas(), l = h.getBackgroundPane(), m = h.getDrawPane(), n = h.getOverlayPane();
        this.graph.dialect == mxConstants.DIALECT_SVG ? h.createSvg() : this.graph.dialect == mxConstants.DIALECT_VML ? h.createVml() : h.createHtml();
        var o = h.isEventsEnabled();
        h.setEventsEnabled(false);
        var p = this.graph.isEnabled();
        this.graph.setEnabled(false);
        var q = h.getTranslate();
        h.translate = new mxPoint(c, d);
        a = null;
        try {
            var t = [this.graph.getModel().getRoot()], a = new mxTemporaryCellStates(h,
                e, t)
        } finally {
            if (mxClient.IS_IE)h.overlayPane.innerHTML = ""; else for (var u = g.firstChild; u != null;) {
                var v = u.nextSibling, w = u.nodeName.toLowerCase();
                if (w == "svg") {
                    u.setAttribute("width", parseInt(g.style.width));
                    u.setAttribute("height", parseInt(g.style.height))
                } else u.style.cursor != "default" && w != "table" && u.parentNode.removeChild(u);
                u = v
            }
            h.overlayPane.parentNode.removeChild(h.overlayPane);
            this.graph.setEnabled(p);
            this.graph.container = k;
            h.canvas = i;
            h.backgroundPane = l;
            h.drawPane = m;
            h.overlayPane = n;
            h.translate =
                q;
            a.destroy();
            h.setEventsEnabled(o)
        }
    } catch (r) {
        f.parentNode.removeChild(f);
        throw r;
    }
    return f
};
mxPrintPreview.prototype.print = function () {
    var a = this.open();
    a != null && a.print()
};
mxPrintPreview.prototype.close = function () {
    if (this.wnd != null) {
        this.wnd.close();
        this.wnd = null
    }
};
function mxStylesheet() {
    this.styles = {};
    this.putDefaultVertexStyle(this.createDefaultVertexStyle());
    this.putDefaultEdgeStyle(this.createDefaultEdgeStyle())
}
mxStylesheet.prototype.createDefaultVertexStyle = function () {
    var a = {};
    a[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
    a[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
    a[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    a[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    a[mxConstants.STYLE_FILLCOLOR] = "#C3D9FF";
    a[mxConstants.STYLE_STROKECOLOR] = "#6482B9";
    a[mxConstants.STYLE_FONTCOLOR] = "#774400";
    return a
};
mxStylesheet.prototype.createDefaultEdgeStyle = function () {
    var a = {};
    a[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_CONNECTOR;
    a[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC;
    a[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    a[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    a[mxConstants.STYLE_STROKECOLOR] = "#6482B9";
    a[mxConstants.STYLE_FONTCOLOR] = "#446299";
    return a
};
mxStylesheet.prototype.putDefaultVertexStyle = function (a) {
    this.putCellStyle("defaultVertex", a)
};
mxStylesheet.prototype.putDefaultEdgeStyle = function (a) {
    this.putCellStyle("defaultEdge", a)
};
mxStylesheet.prototype.getDefaultVertexStyle = function () {
    return this.styles.defaultVertex
};
mxStylesheet.prototype.getDefaultEdgeStyle = function () {
    return this.styles.defaultEdge
};
mxStylesheet.prototype.putCellStyle = function (a, b) {
    this.styles[a] = b
};
mxStylesheet.prototype.getCellStyle = function (a, b) {
    var c = b;
    if (a != null && a.length > 0)for (var d = a.split(";"), c = c != null && a.charAt(0) != ";" ? mxUtils.clone(c) : {}, e = 0; e < d.length; e++) {
        var f = d[e], g = f.indexOf("=");
        if (g >= 0) {
            var h = f.substring(0, g), f = f.substring(g + 1);
            f == mxConstants.NONE ? delete c[h] : c[h] = mxUtils.isNumeric(f) ? parseFloat(f) : f
        } else {
            f = this.styles[f];
            if (f != null)for (h in f)c[h] = f[h]
        }
    }
    return c
};
function mxCellState(a, b, c) {
    this.view = a;
    this.cell = b;
    this.style = c;
    this.origin = new mxPoint;
    this.absoluteOffset = new mxPoint
}
mxCellState.prototype = new mxRectangle;
mxCellState.prototype.constructor = mxCellState;
mxCellState.prototype.view = null;
mxCellState.prototype.cell = null;
mxCellState.prototype.style = null;
mxCellState.prototype.invalid = !0;
mxCellState.prototype.invalidOrder = !1;
mxCellState.prototype.orderChanged = !1;
mxCellState.prototype.origin = null;
mxCellState.prototype.absolutePoints = null;
mxCellState.prototype.absoluteOffset = null;
mxCellState.prototype.visibleSourceState = null;
mxCellState.prototype.visibleTargetState = null;
mxCellState.prototype.terminalDistance = 0;
mxCellState.prototype.length = 0;
mxCellState.prototype.segments = null;
mxCellState.prototype.shape = null;
mxCellState.prototype.text = null;
mxCellState.prototype.getPerimeterBounds = function (a, b) {
    a = a || 0;
    b = b != null ? b : new mxRectangle(this.x, this.y, this.width, this.height);
    if (this.shape != null && this.shape.stencil != null) {
        var c = this.shape.stencil.computeAspect(this, b, null);
        b.x = c.x;
        b.y = c.y;
        b.width = this.shape.stencil.w0 * c.width;
        b.height = this.shape.stencil.h0 * c.height
    }
    a != 0 && b.grow(a);
    return b
};
mxCellState.prototype.setAbsoluteTerminalPoint = function (a, b) {
    if (b) {
        if (this.absolutePoints == null)this.absolutePoints = [];
        this.absolutePoints.length == 0 ? this.absolutePoints.push(a) : this.absolutePoints[0] = a
    } else if (this.absolutePoints == null) {
        this.absolutePoints = [];
        this.absolutePoints.push(null);
        this.absolutePoints.push(a)
    } else this.absolutePoints.length == 1 ? this.absolutePoints.push(a) : this.absolutePoints[this.absolutePoints.length - 1] = a
};
mxCellState.prototype.setCursor = function (a) {
    this.shape != null && this.shape.setCursor(a);
    this.text != null && this.text.setCursor(a)
};
mxCellState.prototype.getVisibleTerminal = function (a) {
    a = this.getVisibleTerminalState(a);
    return a != null ? a.cell : null
};
mxCellState.prototype.getVisibleTerminalState = function (a) {
    return a ? this.visibleSourceState : this.visibleTargetState
};
mxCellState.prototype.setVisibleTerminalState = function (a, b) {
    b ? this.visibleSourceState = a : this.visibleTargetState = a
};
mxCellState.prototype.destroy = function () {
    this.view.graph.cellRenderer.destroy(this)
};
mxCellState.prototype.clone = function () {
    var a = new mxCellState(this.view, this.cell, this.style);
    if (this.absolutePoints != null) {
        a.absolutePoints = [];
        for (var b = 0; b < this.absolutePoints.length; b++)a.absolutePoints[b] = this.absolutePoints[b].clone()
    }
    if (this.origin != null)a.origin = this.origin.clone();
    if (this.absoluteOffset != null)a.absoluteOffset = this.absoluteOffset.clone();
    if (this.boundingBox != null)a.boundingBox = this.boundingBox.clone();
    a.terminalDistance = this.terminalDistance;
    a.segments = this.segments;
    a.length =
        this.length;
    a.x = this.x;
    a.y = this.y;
    a.width = this.width;
    a.height = this.height;
    return a
};
function mxGraphSelectionModel(a) {
    this.graph = a;
    this.cells = []
}
mxGraphSelectionModel.prototype = new mxEventSource;
mxGraphSelectionModel.prototype.constructor = mxGraphSelectionModel;
mxGraphSelectionModel.prototype.doneResource = "none" != mxClient.language ? "done" : "";
mxGraphSelectionModel.prototype.updatingSelectionResource = "none" != mxClient.language ? "updatingSelection" : "";
mxGraphSelectionModel.prototype.graph = null;
mxGraphSelectionModel.prototype.singleSelection = !1;
mxGraphSelectionModel.prototype.isSingleSelection = function () {
    return this.singleSelection
};
mxGraphSelectionModel.prototype.setSingleSelection = function (a) {
    this.singleSelection = a
};
mxGraphSelectionModel.prototype.isSelected = function (a) {
    return a != null ? mxUtils.indexOf(this.cells, a) >= 0 : false
};
mxGraphSelectionModel.prototype.isEmpty = function () {
    return this.cells.length == 0
};
mxGraphSelectionModel.prototype.clear = function () {
    this.changeSelection(null, this.cells)
};
mxGraphSelectionModel.prototype.setCell = function (a) {
    a != null && this.setCells([a])
};
mxGraphSelectionModel.prototype.setCells = function (a) {
    if (a != null) {
        this.singleSelection && (a = [this.getFirstSelectableCell(a)]);
        for (var b = [], c = 0; c < a.length; c++)this.graph.isCellSelectable(a[c]) && b.push(a[c]);
        this.changeSelection(b, this.cells)
    }
};
mxGraphSelectionModel.prototype.getFirstSelectableCell = function (a) {
    if (a != null)for (var b = 0; b < a.length; b++)if (this.graph.isCellSelectable(a[b]))return a[b];
    return null
};
mxGraphSelectionModel.prototype.addCell = function (a) {
    a != null && this.addCells([a])
};
mxGraphSelectionModel.prototype.addCells = function (a) {
    if (a != null) {
        var b = null;
        if (this.singleSelection) {
            b = this.cells;
            a = [this.getFirstSelectableCell(a)]
        }
        for (var c = [], d = 0; d < a.length; d++)!this.isSelected(a[d]) && this.graph.isCellSelectable(a[d]) && c.push(a[d]);
        this.changeSelection(c, b)
    }
};
mxGraphSelectionModel.prototype.removeCell = function (a) {
    a != null && this.removeCells([a])
};
mxGraphSelectionModel.prototype.removeCells = function (a) {
    if (a != null) {
        for (var b = [], c = 0; c < a.length; c++)this.isSelected(a[c]) && b.push(a[c]);
        this.changeSelection(null, b)
    }
};
mxGraphSelectionModel.prototype.changeSelection = function (a, b) {
    if (a != null && a.length > 0 && a[0] != null || b != null && b.length > 0 && b[0] != null) {
        var c = new mxSelectionChange(this, a, b);
        c.execute();
        var d = new mxUndoableEdit(this, false);
        d.add(c);
        this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", d))
    }
};
mxGraphSelectionModel.prototype.cellAdded = function (a) {
    a != null && !this.isSelected(a) && this.cells.push(a)
};
mxGraphSelectionModel.prototype.cellRemoved = function (a) {
    if (a != null) {
        a = mxUtils.indexOf(this.cells, a);
        a >= 0 && this.cells.splice(a, 1)
    }
};
function mxSelectionChange(a, b, c) {
    this.selectionModel = a;
    this.added = b != null ? b.slice() : null;
    this.removed = c != null ? c.slice() : null
}
mxSelectionChange.prototype.execute = function () {
    var a = mxLog.enter("mxSelectionChange.execute");
    window.status = mxResources.get(this.selectionModel.updatingSelectionResource) || this.selectionModel.updatingSelectionResource;
    if (this.removed != null)for (var b = 0; b < this.removed.length; b++)this.selectionModel.cellRemoved(this.removed[b]);
    if (this.added != null)for (b = 0; b < this.added.length; b++)this.selectionModel.cellAdded(this.added[b]);
    b = this.added;
    this.added = this.removed;
    this.removed = b;
    window.status = mxResources.get(this.selectionModel.doneResource) ||
        this.selectionModel.doneResource;
    mxLog.leave("mxSelectionChange.execute", a);
    this.selectionModel.fireEvent(new mxEventObject(mxEvent.CHANGE, "added", this.added, "removed", this.removed))
};
function mxCellEditor(a) {
    this.graph = a
}
mxCellEditor.prototype.graph = null;
mxCellEditor.prototype.textarea = null;
mxCellEditor.prototype.editingCell = null;
mxCellEditor.prototype.trigger = null;
mxCellEditor.prototype.modified = !1;
mxCellEditor.prototype.emptyLabelText = "";
mxCellEditor.prototype.textNode = "";
mxCellEditor.prototype.init = function () {
    this.textarea = document.createElement("textarea");
    this.textarea.className = "mxCellEditor";
    this.textarea.style.position = "absolute";
    this.textarea.style.overflow = "visible";
    this.textarea.setAttribute("cols", "20");
    this.textarea.setAttribute("rows", "4");
    if (mxClient.IS_GC)this.textarea.style.resize = "none";
    mxEvent.addListener(this.textarea, "blur", mxUtils.bind(this, function () {
        this.focusLost()
    }));
    mxEvent.addListener(this.textarea, "keydown", mxUtils.bind(this, function (a) {
        if (!mxEvent.isConsumed(a))if (a.keyCode ==
            113 || this.graph.isEnterStopsCellEditing() && a.keyCode == 13 && !mxEvent.isControlDown(a) && !mxEvent.isShiftDown(a)) {
            this.graph.stopEditing(false);
            mxEvent.consume(a)
        } else if (a.keyCode == 27) {
            this.graph.stopEditing(true);
            mxEvent.consume(a)
        } else {
            if (this.clearOnChange) {
                this.clearOnChange = false;
                this.textarea.value = ""
            }
            this.setModified(true)
        }
    }))
};
mxCellEditor.prototype.isModified = function () {
    return this.modified
};
mxCellEditor.prototype.setModified = function (a) {
    this.modified = a
};
mxCellEditor.prototype.focusLost = function () {
    this.stopEditing(!this.graph.isInvokesStopCellEditing())
};
mxCellEditor.prototype.startEditing = function (a, b) {
    this.textarea == null && this.init();
    this.stopEditing(true);
    var c = this.graph.getView().getState(a);
    if (c != null) {
        this.editingCell = a;
        this.trigger = b;
        this.textNode = null;
        if (c.text != null && this.isHideLabel(c)) {
            this.textNode = c.text.node;
            this.textNode.style.visibility = "hidden"
        }
        var d = this.graph.getView().scale, d = mxUtils.getValue(c.style, mxConstants.STYLE_FONTSIZE, mxConstants.DEFAULT_FONTSIZE) * d, e = mxUtils.getValue(c.style, mxConstants.STYLE_FONTFAMILY, mxConstants.DEFAULT_FONTFAMILY),
            f = mxUtils.getValue(c.style, mxConstants.STYLE_FONTCOLOR, "black"), g = this.graph.model.isEdge(c.cell) ? mxConstants.ALIGN_LEFT : mxUtils.getValue(c.style, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_LEFT), h = (mxUtils.getValue(c.style, mxConstants.STYLE_FONTSTYLE, 0) & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD;
        this.textarea.style.fontSize = d + "px";
        this.textarea.style.fontFamily = e;
        this.textarea.style.textAlign = g;
        this.textarea.style.color = f;
        this.textarea.style.fontWeight = h ? "bold" : "normal";
        d = this.getEditorBounds(c);
        this.textarea.style.left = d.x + "px";
        this.textarea.style.top = d.y + "px";
        this.textarea.style.width = d.width + "px";
        this.textarea.style.height = d.height + "px";
        this.textarea.style.zIndex = 5;
        c = this.getInitialValue(c, b);
        if (c == null || c.length == 0) {
            c = this.getEmptyLabelText();
            this.clearOnChange = true
        } else this.clearOnChange = false;
        this.setModified(false);
        this.textarea.value = c;
        this.graph.container.appendChild(this.textarea);
        if (this.textarea.style.display != "none") {
            this.textarea.focus();
            this.textarea.select()
        }
    }
};
mxCellEditor.prototype.stopEditing = function (a) {
    if (this.editingCell != null) {
        if (this.textNode != null) {
            this.textNode.style.visibility = "visible";
            this.textNode = null
        }
        !a && this.isModified() && this.graph.labelChanged(this.editingCell, this.getCurrentValue(), this.trigger);
        this.trigger = this.editingCell = null;
        this.textarea.blur();
        this.textarea.parentNode.removeChild(this.textarea)
    }
};
mxCellEditor.prototype.getInitialValue = function (a, b) {
    return this.graph.getEditingValue(a.cell, b)
};
mxCellEditor.prototype.getCurrentValue = function () {
    return this.textarea.value.replace(/\r/g, "")
};
mxCellEditor.prototype.isHideLabel = function () {
    return true
};
mxCellEditor.prototype.getMinimumSize = function (a) {
    var b = this.graph.getView().scale;
    return new mxRectangle(0, 0, a.text == null ? 30 : a.text.size * b + 20, this.textarea.style.textAlign == "left" ? 120 : 40)
};
mxCellEditor.prototype.getEditorBounds = function (a) {
    var b = this.graph.getModel().isEdge(a.cell), c = this.graph.getView().scale, d = this.getMinimumSize(a), e = d.width, d = d.height, f = parseInt(a.style[mxConstants.STYLE_SPACING] || 2) * c, g = parseInt(a.style[mxConstants.STYLE_SPACING_TOP] || 0) * c + f, h = parseInt(a.style[mxConstants.STYLE_SPACING_RIGHT] || 0) * c + f, k = parseInt(a.style[mxConstants.STYLE_SPACING_BOTTOM] || 0) * c + f, c = parseInt(a.style[mxConstants.STYLE_SPACING_LEFT] || 0) * c + f, h = new mxRectangle(a.x, a.y, Math.max(e, a.width -
        c - h), Math.max(d, a.height - g - k));
    if (b) {
        h.x = a.absoluteOffset.x;
        h.y = a.absoluteOffset.y;
        if (a.text != null && a.text.boundingBox != null) {
            if (a.text.boundingBox.x > 0)h.x = a.text.boundingBox.x;
            if (a.text.boundingBox.y > 0)h.y = a.text.boundingBox.y
        }
    } else if (a.text != null && a.text.boundingBox != null) {
        h.x = Math.min(h.x, a.text.boundingBox.x);
        h.y = Math.min(h.y, a.text.boundingBox.y)
    }
    h.x = h.x + c;
    h.y = h.y + g;
    if (a.text != null && a.text.boundingBox != null)if (b) {
        h.width = Math.max(e, a.text.boundingBox.width);
        h.height = Math.max(d, a.text.boundingBox.height)
    } else {
        h.width =
            Math.max(h.width, a.text.boundingBox.width);
        h.height = Math.max(h.height, a.text.boundingBox.height)
    }
    if (this.graph.getModel().isVertex(a.cell)) {
        b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
        if (b == mxConstants.ALIGN_LEFT)h.x = h.x - a.width; else if (b == mxConstants.ALIGN_RIGHT)h.x = h.x + a.width;
        b = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE);
        if (b == mxConstants.ALIGN_TOP)h.y = h.y - a.height; else if (b == mxConstants.ALIGN_BOTTOM)h.y =
            h.y + a.height
    }
    return h
};
mxCellEditor.prototype.getEmptyLabelText = function () {
    return this.emptyLabelText
};
mxCellEditor.prototype.getEditingCell = function () {
    return this.editingCell
};
mxCellEditor.prototype.destroy = function () {
    if (this.textarea != null) {
        mxEvent.release(this.textarea);
        this.textarea.parentNode != null && this.textarea.parentNode.removeChild(this.textarea);
        this.textarea = null
    }
};
function mxCellRenderer() {
    this.shapes = mxUtils.clone(this.defaultShapes)
}
mxCellRenderer.prototype.shapes = null;
mxCellRenderer.prototype.defaultEdgeShape = mxConnector;
mxCellRenderer.prototype.defaultVertexShape = mxRectangleShape;
mxCellRenderer.prototype.defaultShapes = {};
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_ARROW] = mxArrow;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_RECTANGLE] = mxRectangleShape;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_ELLIPSE] = mxEllipse;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_DOUBLE_ELLIPSE] = mxDoubleEllipse;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_RHOMBUS] = mxRhombus;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_IMAGE] = mxImageShape;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_LINE] = mxLine;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_LABEL] = mxLabel;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_CYLINDER] = mxCylinder;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_SWIMLANE] = mxSwimlane;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_CONNECTOR] = mxConnector;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_ACTOR] = mxActor;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_CLOUD] = mxCloud;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_TRIANGLE] = mxTriangle;
mxCellRenderer.prototype.defaultShapes[mxConstants.SHAPE_HEXAGON] = mxHexagon;
mxCellRenderer.prototype.registerShape = function (a, b) {
    this.shapes[a] = b
};
mxCellRenderer.prototype.initialize = function (a, b) {
    var c = a.view.graph.getModel();
    if (a.view.graph.container != null && a.shape == null && a.cell != a.view.currentRoot && (c.isVertex(a.cell) || c.isEdge(a.cell))) {
        this.createShape(a);
        if (a.shape != null && (b == null || b)) {
            this.initializeShape(a);
            if (a.view.graph.ordered || c.isEdge(a.cell))a.invalidOrder = true; else if (a.view.graph.keepEdgesInForeground && this.firstEdge != null)this.firstEdge.parentNode == a.shape.node.parentNode ? this.insertState(a, this.firstEdge) : this.firstEdge = null;
            a.shape.scale = a.view.scale;
            this.createCellOverlays(a);
            this.installListeners(a)
        }
    }
};
mxCellRenderer.prototype.initializeShape = function (a) {
    a.shape.init(a.view.getDrawPane())
};
mxCellRenderer.prototype.getPreviousStateInContainer = function (a, b) {
    for (var c = null, d = a.view.graph, e = d.getModel(), f = a.cell, g = e.getParent(f); g != null && c == null;) {
        c = this.findPreviousStateInContainer(d, g, f, b);
        f = g;
        g = e.getParent(f)
    }
    return c
};
mxCellRenderer.prototype.findPreviousStateInContainer = function (a, b, c, d) {
    for (var e = null, f = a.getModel(), c = c != null ? b.getIndex(c) - 1 : f.getChildCount(b) - 1; c >= 0 && e == null; c--)e = this.findPreviousStateInContainer(a, f.getChildAt(b, c), null, d);
    if (e == null) {
        e = a.view.getState(b);
        if (e != null && (e.shape == null || e.shape.node == null || e.shape.node.parentNode != d))e = null
    }
    return e
};
mxCellRenderer.prototype.order = function (a) {
    var b = a.shape.node.parentNode, c = this.getPreviousStateInContainer(a, b), d = b.firstChild;
    if (c != null) {
        d = c.shape.node;
        if (c.text != null && c.text.node != null && c.text.node.parentNode == b)d = c.text.node;
        d = d.nextSibling
    }
    this.insertState(a, d)
};
mxCellRenderer.prototype.orderEdge = function (a) {
    var b = a.view, c = b.graph.getModel();
    if (b.graph.keepEdgesInForeground) {
        if (this.firstEdge == null || this.firstEdge.parentNode == null || this.firstEdge.parentNode != a.shape.node.parentNode)this.firstEdge = a.shape.node
    } else if (b.graph.keepEdgesInBackground) {
        var d = a.shape.node, e = d.parentNode, c = c.getParent(a.cell), b = b.getState(c), e = b != null && b.shape != null && b.shape.node != null ? b.shape.node.nextSibling : e.firstChild;
        e != null && e != d && this.insertState(a, e)
    }
};
mxCellRenderer.prototype.insertState = function (a, b) {
    a.shape.node.parentNode.insertBefore(a.shape.node, b);
    a.text != null && (a.text.node != null && a.text.node.parentNode == a.shape.node.parentNode) && a.shape.node.parentNode.insertBefore(a.text.node, a.shape.node.nextSibling)
};
mxCellRenderer.prototype.createShape = function (a) {
    if (a.style != null) {
        var b = mxStencilRegistry.getStencil(a.style[mxConstants.STYLE_SHAPE]);
        if (b != null)a.shape = new mxStencilShape(b); else {
            b = this.getShapeConstructor(a);
            a.shape = new b
        }
        a.shape.points = a.absolutePoints;
        a.shape.bounds = new mxRectangle(a.x, a.y, a.width, a.height);
        a.shape.dialect = a.view.graph.dialect;
        this.configureShape(a)
    }
};
mxCellRenderer.prototype.getShapeConstructor = function (a) {
    var b = a.style[mxConstants.STYLE_SHAPE], b = b != null ? this.shapes[b] : null;
    b == null && (b = a.view.graph.getModel().isEdge(a.cell) ? this.defaultEdgeShape : this.defaultVertexShape);
    return b
};
mxCellRenderer.prototype.configureShape = function (a) {
    a.shape.apply(a);
    var b = a.view.graph.getImage(a);
    if (b != null)a.shape.image = b;
    var b = a.view.graph.getIndicatorColor(a), c = a.view.graph.getIndicatorShape(a), c = c != null ? this.shapes[c] : null;
    if (b != null) {
        a.shape.indicatorShape = c;
        a.shape.indicatorColor = b;
        a.shape.indicatorGradientColor = a.view.graph.getIndicatorGradientColor(a);
        a.shape.indicatorDirection = a.style[mxConstants.STYLE_INDICATOR_DIRECTION]
    } else {
        b = a.view.graph.getIndicatorImage(a);
        if (b != null)a.shape.indicatorImage =
            b
    }
    this.postConfigureShape(a)
};
mxCellRenderer.prototype.postConfigureShape = function (a) {
    if (a.shape != null) {
        this.resolveColor(a, "indicatorColor", mxConstants.STYLE_FILLCOLOR);
        this.resolveColor(a, "indicatorGradientColor", mxConstants.STYLE_GRADIENTCOLOR);
        this.resolveColor(a, "fill", mxConstants.STYLE_FILLCOLOR);
        this.resolveColor(a, "stroke", mxConstants.STYLE_STROKECOLOR);
        this.resolveColor(a, "gradient", mxConstants.STYLE_GRADIENTCOLOR)
    }
};
mxCellRenderer.prototype.resolveColor = function (a, b, c) {
    var d = a.shape[b], e = a.view.graph, f = null;
    if (d == "inherit")f = e.model.getParent(a.cell); else if (d == "swimlane") {
        f = e.model.getTerminal(a.cell, false) != null ? e.model.getTerminal(a.cell, false) : a.cell;
        f = e.getSwimlane(f);
        c = e.swimlaneIndicatorColorAttribute
    } else if (d == "indicated")a.shape[b] = a.shape.indicatorColor;
    if (f != null) {
        d = e.getView().getState(f);
        a.shape[b] = null;
        d != null && (a.shape[b] = d.shape != null && b != "indicatorColor" ? d.shape[b] : d.style[c])
    }
};
mxCellRenderer.prototype.getLabelValue = function (a) {
    var b = a.view.graph, c = b.getLabel(a.cell);
    !b.isHtmlLabel(a.cell) && (!mxUtils.isNode(c) && b.dialect != mxConstants.DIALECT_SVG && c != null) && (c = mxUtils.htmlEntities(c, false));
    return c
};
mxCellRenderer.prototype.createLabel = function (a, b) {
    var c = a.view.graph;
    c.getModel().isEdge(a.cell);
    if (a.style[mxConstants.STYLE_FONTSIZE] > 0 || a.style[mxConstants.STYLE_FONTSIZE] == null) {
        var d = (c.isHtmlLabel(a.cell) || b != null && mxUtils.isNode(b)) && c.dialect == mxConstants.DIALECT_SVG;
        a.text = new mxText(b, new mxRectangle, a.style[mxConstants.STYLE_ALIGN] || mxConstants.ALIGN_CENTER, c.getVerticalAlign(a), a.style[mxConstants.STYLE_FONTCOLOR], a.style[mxConstants.STYLE_FONTFAMILY], a.style[mxConstants.STYLE_FONTSIZE],
            a.style[mxConstants.STYLE_FONTSTYLE], a.style[mxConstants.STYLE_SPACING], a.style[mxConstants.STYLE_SPACING_TOP], a.style[mxConstants.STYLE_SPACING_RIGHT], a.style[mxConstants.STYLE_SPACING_BOTTOM], a.style[mxConstants.STYLE_SPACING_LEFT], a.style[mxConstants.STYLE_HORIZONTAL], a.style[mxConstants.STYLE_LABEL_BACKGROUNDCOLOR], a.style[mxConstants.STYLE_LABEL_BORDERCOLOR], c.isWrapping(a.cell) && c.isHtmlLabel(a.cell), c.isLabelClipped(a.cell), a.style[mxConstants.STYLE_OVERFLOW], a.style[mxConstants.STYLE_LABEL_PADDING]);
        a.text.opacity = a.style[mxConstants.STYLE_TEXT_OPACITY];
        a.text.dialect = d ? mxConstants.DIALECT_STRICTHTML : a.view.graph.dialect;
        this.initializeLabel(a);
        var e = false, f = function (b) {
            var d = a;
            if (mxClient.IS_TOUCH || e) {
                d = mxEvent.getClientX(b);
                b = mxEvent.getClientY(b);
                b = mxUtils.convertPoint(c.container, d, b);
                d = c.view.getState(c.getCellAt(b.x, b.y))
            }
            return d
        }, d = mxClient.IS_TOUCH ? "touchmove" : "mousemove", g = mxClient.IS_TOUCH ? "touchend" : "mouseup";
        mxEvent.addListener(a.text.node, mxClient.IS_TOUCH ? "touchstart" : "mousedown",
            mxUtils.bind(this, function (b) {
                if (this.isLabelEvent(a, b)) {
                    c.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(b, a));
                    e = c.dialect != mxConstants.DIALECT_SVG && mxEvent.getSource(b).nodeName == "IMG"
                }
            }));
        mxEvent.addListener(a.text.node, d, mxUtils.bind(this, function (b) {
            this.isLabelEvent(a, b) && c.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, f(b)))
        }));
        mxEvent.addListener(a.text.node, g, mxUtils.bind(this, function (b) {
            if (this.isLabelEvent(a, b)) {
                c.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b, f(b)));
                e =
                    false
            }
        }));
        mxEvent.addListener(a.text.node, "dblclick", mxUtils.bind(this, function (b) {
            if (this.isLabelEvent(a, b)) {
                c.dblClick(b, a.cell);
                mxEvent.consume(b)
            }
        }))
    }
};
mxCellRenderer.prototype.initializeLabel = function (a) {
    var b = a.view.graph;
    a.text.dialect != mxConstants.DIALECT_SVG && (mxClient.IS_SVG && mxClient.NO_FO ? a.text.init(b.container) : mxUtils.isVml(a.view.getDrawPane()) && (a.shape.label != null ? a.text.init(a.shape.label) : a.text.init(a.shape.node)));
    if (a.text.node == null) {
        a.text.init(a.view.getDrawPane());
        a.shape != null && a.text != null && a.shape.node.parentNode.insertBefore(a.text.node, a.shape.node.nextSibling)
    }
};
mxCellRenderer.prototype.createCellOverlays = function (a) {
    var b = a.view.graph.getCellOverlays(a.cell);
    if (b != null) {
        if (a.overlays == null)a.overlays = [];
        for (var c = 0; c < b.length; c++)if (a.overlays[c] == null) {
            var d = new mxImageShape(new mxRectangle, b[c].image.src);
            d.dialect = a.view.graph.dialect;
            d.overlay = b[c];
            this.initializeOverlay(a, d);
            this.installCellOverlayListeners(a, b[c], d);
            if (b[c].cursor != null)d.node.style.cursor = b[c].cursor;
            a.overlays[c] = d
        }
    }
};
mxCellRenderer.prototype.initializeOverlay = function (a, b) {
    b.init(a.view.getOverlayPane())
};
mxCellRenderer.prototype.installCellOverlayListeners = function (a, b, c) {
    var d = a.view.graph;
    mxEvent.addListener(c.node, "click", function (c) {
        d.isEditing() && d.stopEditing(!d.isInvokesStopCellEditing());
        b.fireEvent(new mxEventObject(mxEvent.CLICK, "event", c, "cell", a.cell))
    });
    var e = mxClient.IS_TOUCH ? "touchmove" : "mousemove";
    mxEvent.addListener(c.node, mxClient.IS_TOUCH ? "touchstart" : "mousedown", function (a) {
        mxEvent.consume(a)
    });
    mxEvent.addListener(c.node, e, function (b) {
        d.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b,
            a))
    });
    mxClient.IS_TOUCH && mxEvent.addListener(c.node, "touchend", function (c) {
        b.fireEvent(new mxEventObject(mxEvent.CLICK, "event", c, "cell", a.cell))
    })
};
mxCellRenderer.prototype.createControl = function (a) {
    var b = a.view.graph, c = b.getFoldingImage(a);
    if (b.foldingEnabled && c != null) {
        if (a.control == null) {
            var d = new mxRectangle(0, 0, c.width, c.height);
            a.control = new mxImageShape(d, c.src);
            a.control.dialect = b.dialect;
            a.control.preserveImageAspect = false;
            this.initControl(a, a.control, true, function (c) {
                if (b.isEnabled()) {
                    var d = !b.isCellCollapsed(a.cell);
                    b.foldCells(d, false, [a.cell]);
                    mxEvent.consume(c)
                }
            })
        }
    } else if (a.control != null) {
        a.control.destroy();
        a.control = null
    }
};
mxCellRenderer.prototype.initControl = function (a, b, c, d) {
    var e = a.view.graph;
    if (e.isHtmlLabel(a.cell) && mxClient.NO_FO && e.dialect == mxConstants.DIALECT_SVG) {
        b.dialect = mxConstants.DIALECT_PREFERHTML;
        b.init(e.container);
        b.node.style.zIndex = 1
    } else b.init(a.view.getOverlayPane());
    b = b.innerNode || b.node;
    if (d) {
        if (e.isEnabled())b.style.cursor = "pointer";
        mxEvent.addListener(b, "click", d)
    }
    if (c) {
        c = mxClient.IS_TOUCH ? "touchmove" : "mousemove";
        mxEvent.addListener(b, mxClient.IS_TOUCH ? "touchstart" : "mousedown", function (b) {
            e.fireMouseEvent(mxEvent.MOUSE_DOWN,
                new mxMouseEvent(b, a));
            mxEvent.consume(b)
        });
        mxEvent.addListener(b, c, function (b) {
            e.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, a))
        })
    }
    return b
};
mxCellRenderer.prototype.isShapeEvent = function () {
    return true
};
mxCellRenderer.prototype.isLabelEvent = function () {
    return true
};
mxCellRenderer.prototype.installListeners = function (a) {
    var b = a.view.graph;
    if (b.dialect == mxConstants.DIALECT_SVG) {
        var c = "all";
        if (b.getModel().isEdge(a.cell) && a.shape.stroke != null && (a.shape.fill == null || a.shape.fill == mxConstants.NONE))c = "visibleStroke";
        a.shape.innerNode != null ? a.shape.innerNode.setAttribute("pointer-events", c) : a.shape.node.setAttribute("pointer-events", c)
    }
    var d = function (c) {
        var d = a;
        if (b.dialect != mxConstants.DIALECT_SVG && mxEvent.getSource(c).nodeName == "IMG" || mxClient.IS_TOUCH) {
            d = mxEvent.getClientX(c);
            c = mxEvent.getClientY(c);
            c = mxUtils.convertPoint(b.container, d, c);
            d = b.view.getState(b.getCellAt(c.x, c.y))
        }
        return d
    }, e = false;
    mxEvent.addListener(a.shape.node, "gesturestart", mxUtils.bind(this, function (a) {
        b.lastTouchTime = 0;
        e = true;
        mxEvent.consume(a)
    }));
    var c = mxClient.IS_TOUCH ? "touchmove" : "mousemove", f = mxClient.IS_TOUCH ? "touchend" : "mouseup";
    mxEvent.addListener(a.shape.node, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (c) {
        this.isShapeEvent(a, c) && !e ? b.fireMouseEvent(mxEvent.MOUSE_DOWN,
            new mxMouseEvent(c, a.shape != null && mxEvent.getSource(c) == a.shape.content ? null : a)) : e && mxEvent.consume(c)
    }));
    mxEvent.addListener(a.shape.node, c, mxUtils.bind(this, function (c) {
        this.isShapeEvent(a, c) && !e ? b.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(c, a.shape != null && mxEvent.getSource(c) == a.shape.content ? null : d(c))) : e && mxEvent.consume(c)
    }));
    mxEvent.addListener(a.shape.node, f, mxUtils.bind(this, function (c) {
        this.isShapeEvent(a, c) && !e ? b.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(c, a.shape != null &&
            mxEvent.getSource(c) == a.shape.content ? null : d(c))) : e && mxEvent.consume(c)
    }));
    var g = mxClient.IS_TOUCH ? "gestureend" : "dblclick";
    mxEvent.addListener(a.shape.node, g, mxUtils.bind(this, function (c) {
        e = false;
        if (g == "gestureend") {
            b.lastTouchTime = 0;
            if (b.gestureEnabled) {
                b.handleGesture(a, c);
                mxEvent.consume(c)
            }
        } else if (this.isShapeEvent(a, c)) {
            b.dblClick(c, a.shape != null && mxEvent.getSource(c) == a.shape.content ? null : a.cell);
            mxEvent.consume(c)
        }
    }))
};
mxCellRenderer.prototype.redrawLabel = function (a) {
    var b = this.getLabelValue(a);
    if (a.text == null && b != null && (mxUtils.isNode(b) || b.length > 0))this.createLabel(a, b); else if (a.text != null && (b == null || b.length == 0)) {
        a.text.destroy();
        a.text = null
    }
    if (a.text != null) {
        var c = a.view.graph, d = c.isWrapping(a.cell), c = c.isLabelClipped(a.cell), e = this.getLabelBounds(a);
        if (a.text.value != b || a.text.isWrapping != d || a.text.isClipping != c || a.text.scale != a.view.scale || !a.text.bounds.equals(e)) {
            a.text.value = b;
            a.text.bounds = e;
            a.text.scale =
                this.getTextScale(a);
            a.text.isWrapping = d;
            a.text.isClipping = c;
            a.text.redraw()
        }
    }
};
mxCellRenderer.prototype.getTextScale = function (a) {
    return a.view.scale
};
mxCellRenderer.prototype.getLabelBounds = function (a) {
    var b = a.view.graph, c = b.getModel().isEdge(a.cell), d = new mxRectangle(a.absoluteOffset.x, a.absoluteOffset.y);
    if (!c) {
        d.x = d.x + a.x;
        d.y = d.y + a.y;
        d.width = Math.max(1, a.width);
        d.height = Math.max(1, a.height);
        if (b.isSwimlane(a.cell)) {
            c = b.view.scale;
            a = b.getStartSize(a.cell);
            if (a.width > 0)d.width = a.width * c; else if (a.height > 0)d.height = a.height * c
        }
    }
    return d
};
mxCellRenderer.prototype.redrawCellOverlays = function (a) {
    var b = a.view.graph.getCellOverlays(a.cell), c = a.overlays != null ? a.overlays.length : 0, d = b != null ? b.length : 0;
    if (c != d) {
        if (c > 0) {
            for (var e = [], c = 0; c < a.overlays.length; c++) {
                var f = mxUtils.indexOf(b, a.overlays[c].overlay);
                f >= 0 ? e[f] = a.overlays[c] : a.overlays[c].destroy()
            }
            a.overlays = e
        }
        d > 0 ? this.createCellOverlays(a) : a.overlays = null
    }
    if (a.overlays != null)for (c = 0; c < b.length; c++) {
        d = b[c].getBounds(a);
        if (a.overlays[c].bounds == null || a.overlays[c].scale != a.view.scale ||
            !a.overlays[c].bounds.equals(d)) {
            a.overlays[c].bounds = d;
            a.overlays[c].scale = a.view.scale;
            a.overlays[c].redraw()
        }
    }
};
mxCellRenderer.prototype.redrawControl = function (a) {
    if (a.control != null) {
        var b = this.getControlBounds(a), c = a.view.scale;
        if (a.control.scale != c || !a.control.bounds.equals(b)) {
            a.control.bounds = b;
            a.control.scale = c;
            a.control.redraw()
        }
    }
};
mxCellRenderer.prototype.getControlBounds = function (a) {
    if (a.control != null) {
        var b = a.control.scale, c = a.control.bounds.width / b, b = a.control.bounds.height / b, d = a.view.scale;
        return a.view.graph.getModel().isEdge(a.cell) ? new mxRectangle(a.x + a.width / 2 - c / 2 * d, a.y + a.height / 2 - b / 2 * d, c * d, b * d) : new mxRectangle(a.x + c / 2 * d, a.y + b / 2 * d, c * d, b * d)
    }
    return null
};
mxCellRenderer.prototype.redraw = function (a, b, c) {
    if (a.shape != null) {
        a.view.graph.getModel().isEdge(a.cell);
        reconfigure = b != null ? b : false;
        this.createControl(a);
        if (a.orderChanged || a.invalidOrder) {
            a.view.graph.ordered ? this.order(a) : this.orderEdge(a);
            reconfigure = a.orderChanged
        }
        delete a.invalidOrder;
        delete a.orderChanged;
        !reconfigure && !mxUtils.equalEntries(a.shape.style, a.style) && (reconfigure = true);
        if (reconfigure) {
            this.configureShape(a);
            a.shape.reconfigure()
        }
        if (b || a.shape.bounds == null || a.shape.scale != a.view.scale ||
            !a.shape.bounds.equals(a) || !mxUtils.equalPoints(a.shape.points, a.absolutePoints)) {
            a.shape.points = a.absolutePoints != null ? a.absolutePoints.slice() : null;
            a.shape.bounds = new mxRectangle(a.x, a.y, a.width, a.height);
            a.shape.scale = a.view.scale;
            c == null || c ? a.shape.redraw() : a.shape.updateBoundingBox()
        }
        if (c == null || c) {
            this.redrawLabel(a);
            this.redrawCellOverlays(a);
            this.redrawControl(a)
        }
    }
};
mxCellRenderer.prototype.destroy = function (a) {
    if (a.shape != null) {
        if (a.text != null) {
            a.text.destroy();
            a.text = null
        }
        if (a.overlays != null) {
            for (var b = 0; b < a.overlays.length; b++)a.overlays[b].destroy();
            a.overlays = null
        }
        if (a.control != null) {
            a.control.destroy();
            a.control = null
        }
        a.shape.destroy();
        a.shape = null
    }
};
var mxEdgeStyle = {EntityRelation:function (a, b, c, d, e) {
    var f = a.view, g = f.graph, d = mxUtils.getValue(a.style, mxConstants.STYLE_SEGMENT, mxConstants.ENTITY_SEGMENT) * f.scale, h = a.absolutePoints, k = h[0], i = h[h.length - 1], h = false;
    if (k != null) {
        b = new mxCellState;
        b.x = k.x;
        b.y = k.y
    } else if (b != null) {
        var l = mxUtils.getPortConstraints(b, a, true, mxConstants.DIRECTION_MASK_NONE);
        if (l != mxConstants.DIRECTION_MASK_NONE)h = l == mxConstants.DIRECTION_MASK_WEST; else {
            k = g.getCellGeometry(b.cell);
            k.relative ? h = k.x <= 0.5 : c != null && (h = c.x + c.width <
                b.x)
        }
    } else return;
    k = true;
    if (i != null) {
        c = new mxCellState;
        c.x = i.x;
        c.y = i.y
    } else if (c != null) {
        l = mxUtils.getPortConstraints(c, a, false, mxConstants.DIRECTION_MASK_NONE);
        if (l != mxConstants.DIRECTION_MASK_NONE)k = l == mxConstants.DIRECTION_MASK_WEST; else {
            a = g.getCellGeometry(c.cell);
            a.relative ? k = a.x <= 0.5 : b != null && (k = b.x + b.width < c.x)
        }
    }
    if (b != null && c != null) {
        a = h ? b.x : b.x + b.width;
        b = f.getRoutingCenterY(b);
        g = k ? c.x : c.x + c.width;
        c = f.getRoutingCenterY(c);
        f = new mxPoint(a + (h ? -d : d), b);
        i = new mxPoint(g + (k ? -d : d), c);
        if (h == k) {
            d = h ? Math.min(a,
                g) - d : Math.max(a, g) + d;
            e.push(new mxPoint(d, b));
            e.push(new mxPoint(d, c))
        } else {
            if (f.x < i.x == h) {
                d = b + (c - b) / 2;
                e.push(f);
                e.push(new mxPoint(f.x, d));
                e.push(new mxPoint(i.x, d))
            } else e.push(f);
            e.push(i)
        }
    }
}, Loop:function (a, b, c, d, e) {
    if (b != null) {
        var c = a.view, f = c.graph, d = d != null && d.length > 0 ? d[0] : null;
        if (d != null) {
            d = c.transformControlPoint(a, d);
            mxUtils.contains(b, d.x, d.y) && (d = null)
        }
        var g = 0, h = 0, k = 0, i = 0, f = mxUtils.getValue(a.style, mxConstants.STYLE_SEGMENT, f.gridSize) * c.scale, a = mxUtils.getValue(a.style, mxConstants.STYLE_DIRECTION,
            mxConstants.DIRECTION_WEST);
        if (a == mxConstants.DIRECTION_NORTH || a == mxConstants.DIRECTION_SOUTH) {
            g = c.getRoutingCenterX(b);
            h = f
        } else {
            k = c.getRoutingCenterY(b);
            i = f
        }
        if (d == null || d.x < b.x || d.x > b.x + b.width)if (d != null) {
            g = d.x;
            i = Math.max(Math.abs(k - d.y), i)
        } else a == mxConstants.DIRECTION_NORTH ? k = b.y - 2 * h : a == mxConstants.DIRECTION_SOUTH ? k = b.y + b.height + 2 * h : g = a == mxConstants.DIRECTION_EAST ? b.x - 2 * i : b.x + b.width + 2 * i; else if (d != null) {
            g = c.getRoutingCenterX(b);
            h = Math.max(Math.abs(g - d.x), i);
            k = d.y;
            i = 0
        }
        e.push(new mxPoint(g - h, k -
            i));
        e.push(new mxPoint(g + h, k + i))
    }
}, ElbowConnector:function (a, b, c, d, e) {
    var f = d != null && d.length > 0 ? d[0] : null, g = false, h = false;
    if (b != null && c != null)if (f != null)var k = Math.min(b.x, c.x), i = Math.max(b.x + b.width, c.x + c.width), h = Math.min(b.y, c.y), l = Math.max(b.y + b.height, c.y + c.height), f = a.view.transformControlPoint(a, f), g = f.y < h || f.y > l, h = f.x < k || f.x > i; else {
        k = Math.max(b.x, c.x);
        i = Math.min(b.x + b.width, c.x + c.width);
        g = k == i;
        if (!g) {
            h = Math.max(b.y, c.y);
            l = Math.min(b.y + b.height, c.y + c.height);
            h = h == l
        }
    }
    !h && (g || a.style[mxConstants.STYLE_ELBOW] ==
        mxConstants.ELBOW_VERTICAL) ? mxEdgeStyle.TopToBottom(a, b, c, d, e) : mxEdgeStyle.SideToSide(a, b, c, d, e)
}, SideToSide:function (a, b, c, d, e) {
    var f = a.view, d = d != null && d.length > 0 ? d[0] : null, g = a.absolutePoints, h = g[0], g = g[g.length - 1];
    d != null && (d = f.transformControlPoint(a, d));
    if (h != null) {
        b = new mxCellState;
        b.x = h.x;
        b.y = h.y
    }
    if (g != null) {
        c = new mxCellState;
        c.x = g.x;
        c.y = g.y
    }
    if (b != null && c != null) {
        var a = Math.max(b.x, c.x), k = Math.min(b.x + b.width, c.x + c.width), a = d != null ? d.x : k + (a - k) / 2, k = f.getRoutingCenterY(b), f = f.getRoutingCenterY(c);
        if (d != null) {
            if (h != null && d.y >= b.y && d.y <= b.y + b.height)k = d.y;
            if (g != null && d.y >= c.y && d.y <= c.y + c.height)f = d.y
        }
        !mxUtils.contains(c, a, k) && !mxUtils.contains(b, a, k) && e.push(new mxPoint(a, k));
        !mxUtils.contains(c, a, f) && !mxUtils.contains(b, a, f) && e.push(new mxPoint(a, f));
        if (e.length == 1)if (d != null)!mxUtils.contains(c, a, d.y) && !mxUtils.contains(b, a, d.y) && e.push(new mxPoint(a, d.y)); else {
            f = Math.max(b.y, c.y);
            b = Math.min(b.y + b.height, c.y + c.height);
            e.push(new mxPoint(a, f + (b - f) / 2))
        }
    }
}, TopToBottom:function (a, b, c, d, e) {
    var f =
        a.view, d = d != null && d.length > 0 ? d[0] : null, g = a.absolutePoints, h = g[0], g = g[g.length - 1];
    d != null && (d = f.transformControlPoint(a, d));
    if (h != null) {
        b = new mxCellState;
        b.x = h.x;
        b.y = h.y
    }
    if (g != null) {
        c = new mxCellState;
        c.x = g.x;
        c.y = g.y
    }
    if (b != null && c != null) {
        h = Math.max(b.y, c.y);
        g = Math.min(b.y + b.height, c.y + c.height);
        a = f.getRoutingCenterX(b);
        if (d != null && d.x >= b.x && d.x <= b.x + b.width)a = d.x;
        h = d != null ? d.y : g + (h - g) / 2;
        !mxUtils.contains(c, a, h) && !mxUtils.contains(b, a, h) && e.push(new mxPoint(a, h));
        a = d != null && d.x >= c.x && d.x <= c.x + c.width ?
            d.x : f.getRoutingCenterX(c);
        !mxUtils.contains(c, a, h) && !mxUtils.contains(b, a, h) && e.push(new mxPoint(a, h));
        if (e.length == 1)if (d != null && e.length == 1)!mxUtils.contains(c, d.x, h) && !mxUtils.contains(b, d.x, h) && e.push(new mxPoint(d.x, h)); else {
            f = Math.max(b.x, c.x);
            b = Math.min(b.x + b.width, c.x + c.width);
            e.push(new mxPoint(f + (b - f) / 2, h))
        }
    }
}, SegmentConnector:function (a, b, c, d, e) {
    var f = a.absolutePoints, g = true, h = null, k = f[0];
    k == null && b != null ? k = new mxPoint(a.view.getRoutingCenterX(b), a.view.getRoutingCenterY(b)) : k != null &&
        (k = k.clone());
    var i = f.length - 1;
    if (d != null && d.length > 0) {
        for (var h = a.view.transformControlPoint(a, d[0]), l = b, m = f[0], n = false, o = false, n = h, p = d.length, q = 0; q < 2; q++) {
            var t = m != null && m.x == n.x, u = m != null && m.y == n.y, v = l != null && n.y >= l.y && n.y <= l.y + l.height, l = l != null && n.x >= l.x && n.x <= l.x + l.width, n = u || m == null && v, o = t || m == null && l;
            if (m != null && !u && !t && (v || l)) {
                g = v ? false : true;
                break
            }
            if (o || n) {
                g = n;
                q == 1 && (g = d.length % 2 == 0 ? n : o);
                break
            }
            l = c;
            m = f[i];
            n = a.view.transformControlPoint(a, d[p - 1])
        }
        g && (f[0] != null && f[0].y != h.y || f[0] == null && b !=
            null && (h.y < b.y || h.y > b.y + b.height)) ? e.push(new mxPoint(k.x, h.y)) : !g && (f[0] != null && f[0].x != h.x || f[0] == null && b != null && (h.x < b.x || h.x > b.x + b.width)) && e.push(new mxPoint(h.x, k.y));
        g ? k.y = h.y : k.x = h.x;
        for (q = 0; q < d.length; q++) {
            g = !g;
            h = a.view.transformControlPoint(a, d[q]);
            g ? k.y = h.y : k.x = h.x;
            e.push(k.clone())
        }
    } else {
        h = k;
        g = true
    }
    k = f[i];
    k == null && c != null && (k = new mxPoint(a.view.getRoutingCenterX(c), a.view.getRoutingCenterY(c)));
    g && (f[i] != null && f[i].y != h.y || f[i] == null && c != null && (h.y < c.y || h.y > c.y + c.height)) ? e.push(new mxPoint(k.x,
        h.y)) : !g && (f[i] != null && f[i].x != h.x || f[i] == null && c != null && (h.x < c.x || h.x > c.x + c.width)) && e.push(new mxPoint(h.x, k.y));
    if (f[0] == null && b != null)for (; e.length > 1 && mxUtils.contains(b, e[1].x, e[1].y);)e = e.splice(1, 1);
    if (f[i] == null && c != null)for (; e.length > 1 && mxUtils.contains(c, e[e.length - 1].x, e[e.length - 1].y);)e = e.splice(e.length - 1, 1)
}, orthBuffer:10, dirVectors:[
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0]
], wayPoints1:[
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
], routePatterns:[
    [
        [513,
            2308, 2081, 2562],
        [513, 1090, 514, 2184, 2114, 2561],
        [513, 1090, 514, 2564, 2184, 2562],
        [513, 2308, 2561, 1090, 514, 2568, 2308]
    ],
    [
        [514, 1057, 513, 2308, 2081, 2562],
        [514, 2184, 2114, 2561],
        [514, 2184, 2562, 1057, 513, 2564, 2184],
        [514, 1057, 513, 2568, 2308, 2561]
    ],
    [
        [1090, 514, 1057, 513, 2308, 2081, 2562],
        [2114, 2561],
        [1090, 2562, 1057, 513, 2564, 2184],
        [1090, 514, 1057, 513, 2308, 2561, 2568]
    ],
    [
        [2081, 2562],
        [1057, 513, 1090, 514, 2184, 2114, 2561],
        [1057, 513, 1090, 514, 2184, 2562, 2564],
        [1057, 2561, 1090, 514, 2568, 2308]
    ]
], inlineRoutePatterns:[
    [null, [2114, 2568], null,
        null],
    [null, [514, 2081, 2114, 2568], null, null],
    [null, [2114, 2561], null, null],
    [
        [2081, 2562],
        [1057, 2114, 2568],
        [2184, 2562],
        null
    ]
], vertexSeperations:[], limits:[
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
], LEFT_MASK:32, TOP_MASK:64, RIGHT_MASK:128, BOTTOM_MASK:256, LEFT:1, TOP:2, RIGHT:4, BOTTOM:8, SIDE_MASK:480, CENTER_MASK:512, SOURCE_MASK:1024, TARGET_MASK:2048, VERTEX_MASK:3072, OrthConnector:function (a, b, c, d, e) {
    var f = a.view.graph, g = b == null ? false : f.getModel().isEdge(b.cell), f = c == null ? false : f.getModel().isEdge(c.cell);
    if (d !=
        null && d.length > 0 || g || f)mxEdgeStyle.SegmentConnector(a, b, c, d, e); else {
        var d = a.absolutePoints, h = d[0], k = d[d.length - 1], d = b != null ? b.x : h.x, g = b != null ? b.y : h.y, i = b != null ? b.width : 1, l = b != null ? b.height : 1, m = c != null ? c.x : k.x, n = c != null ? c.y : k.y, o = c != null ? c.width : 1, p = c != null ? c.height : 1, f = a.view.scale * mxEdgeStyle.orthBuffer, q = [mxConstants.DIRECTION_MASK_ALL, mxConstants.DIRECTION_MASK_ALL];
        b != null && (q[0] = mxUtils.getPortConstraints(b, a, true, mxConstants.DIRECTION_MASK_ALL));
        c != null && (q[1] = mxUtils.getPortConstraints(c, a,
            false, mxConstants.DIRECTION_MASK_ALL));
        a = [0, 0];
        d = [
            [d, g, i, l],
            [m, n, o, p]
        ];
        for (i = 0; i < 2; i++) {
            mxEdgeStyle.limits[i][1] = d[i][0] - f;
            mxEdgeStyle.limits[i][2] = d[i][1] - f;
            mxEdgeStyle.limits[i][4] = d[i][0] + d[i][2] + f;
            mxEdgeStyle.limits[i][8] = d[i][1] + d[i][3] + f
        }
        i = d[0][0] + d[0][2] / 2 - (d[1][0] + d[1][2] / 2);
        l = d[0][1] + d[0][3] / 2 - (d[1][1] + d[1][3] / 2);
        g = 0;
        if (i < 0)g = l < 0 ? 2 : 1; else if (l <= 0) {
            g = 3;
            i == 0 && (g = 2)
        }
        l = null;
        b != null && (l = h);
        b = [
            [0.5, 0.5],
            [0.5, 0.5]
        ];
        for (i = 0; i < 2; i++) {
            if (l != null) {
                b[i][0] = (l.x - d[i][0]) / d[i][2];
                if (b[i][0] < 0.01)a[i] =
                    mxConstants.DIRECTION_MASK_WEST; else if (b[i][0] > 0.99)a[i] = mxConstants.DIRECTION_MASK_EAST;
                b[i][1] = (l.y - d[i][1]) / d[i][3];
                if (b[i][1] < 0.01)a[i] = mxConstants.DIRECTION_MASK_NORTH; else if (b[i][1] > 0.99)a[i] = mxConstants.DIRECTION_MASK_SOUTH
            }
            l = null;
            c != null && (l = k)
        }
        i = d[0][1] - (d[1][1] + d[1][3]);
        l = d[0][0] - (d[1][0] + d[1][2]);
        m = d[1][1] - (d[0][1] + d[0][3]);
        n = d[1][0] - (d[0][0] + d[0][2]);
        mxEdgeStyle.vertexSeperations[1] = Math.max(l - 2 * f, 0);
        mxEdgeStyle.vertexSeperations[2] = Math.max(i - 2 * f, 0);
        mxEdgeStyle.vertexSeperations[4] =
            Math.max(m - 2 * f, 0);
        mxEdgeStyle.vertexSeperations[3] = Math.max(n - 2 * f, 0);
        c = [];
        h = [];
        k = [];
        h[0] = l >= n ? mxConstants.DIRECTION_MASK_WEST : mxConstants.DIRECTION_MASK_EAST;
        k[0] = i >= m ? mxConstants.DIRECTION_MASK_NORTH : mxConstants.DIRECTION_MASK_SOUTH;
        h[1] = mxUtils.reversePortConstraints(h[0]);
        k[1] = mxUtils.reversePortConstraints(k[0]);
        l = l >= n ? l : n;
        m = i >= m ? i : m;
        n = [
            [0, 0],
            [0, 0]
        ];
        o = false;
        for (i = 0; i < 2; i++)if (a[i] == 0) {
            (h[i] & q[i]) == 0 && (h[i] = mxUtils.reversePortConstraints(h[i]));
            (k[i] & q[i]) == 0 && (k[i] = mxUtils.reversePortConstraints(k[i]));
            n[i][0] = k[i];
            n[i][1] = h[i]
        }
        if (m > f * 2 && l > f * 2)if ((h[0] & q[0]) > 0 && (k[1] & q[1]) > 0) {
            n[0][0] = h[0];
            n[0][1] = k[0];
            n[1][0] = k[1];
            n[1][1] = h[1];
            o = true
        } else if ((k[0] & q[0]) > 0 && (h[1] & q[1]) > 0) {
            n[0][0] = k[0];
            n[0][1] = h[0];
            n[1][0] = h[1];
            n[1][1] = k[1];
            o = true
        }
        if (m > f * 2 && !o) {
            n[0][0] = k[0];
            n[0][1] = h[0];
            n[1][0] = k[1];
            n[1][1] = h[1];
            o = true
        }
        if (l > f * 2 && !o) {
            n[0][0] = h[0];
            n[0][1] = k[0];
            n[1][0] = h[1];
            n[1][1] = k[1]
        }
        for (i = 0; i < 2; i++)if (a[i] == 0) {
            (n[i][0] & q[i]) == 0 && (n[i][0] = n[i][1]);
            c[i] = n[i][0] & q[i];
            c[i] = c[i] | (n[i][1] & q[i]) << 8;
            c[i] = c[i] | (n[1 - i][i] &
                q[i]) << 16;
            c[i] = c[i] | (n[1 - i][1 - i] & q[i]) << 24;
            (c[i] & 15) == 0 && (c[i] = c[i] << 8);
            (c[i] & 3840) == 0 && (c[i] = c[i] & 15 | c[i] >> 8);
            (c[i] & 983040) == 0 && (c[i] = c[i] & 65535 | (c[i] & 251658240) >> 8);
            a[i] = c[i] & 15;
            if (q[i] == mxConstants.DIRECTION_MASK_WEST || q[i] == mxConstants.DIRECTION_MASK_NORTH || q[i] == mxConstants.DIRECTION_MASK_EAST || q[i] == mxConstants.DIRECTION_MASK_SOUTH)a[i] = q[i]
        }
        i = a[0] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[0];
        q = a[1] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[1];
        i = i - g;
        q = q - g;
        i < 1 && (i = i + 4);
        q < 1 && (q = q + 4);
        q = mxEdgeStyle.routePatterns[i -
            1][q - 1];
        mxEdgeStyle.wayPoints1[0][0] = d[0][0];
        mxEdgeStyle.wayPoints1[0][1] = d[0][1];
        switch (a[0]) {
            case mxConstants.DIRECTION_MASK_WEST:
                mxEdgeStyle.wayPoints1[0][0] = mxEdgeStyle.wayPoints1[0][0] - f;
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] + b[0][1] * d[0][3];
                break;
            case mxConstants.DIRECTION_MASK_SOUTH:
                mxEdgeStyle.wayPoints1[0][0] = mxEdgeStyle.wayPoints1[0][0] + b[0][0] * d[0][2];
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] + (d[0][3] + f);
                break;
            case mxConstants.DIRECTION_MASK_EAST:
                mxEdgeStyle.wayPoints1[0][0] =
                    mxEdgeStyle.wayPoints1[0][0] + (d[0][2] + f);
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] + b[0][1] * d[0][3];
                break;
            case mxConstants.DIRECTION_MASK_NORTH:
                mxEdgeStyle.wayPoints1[0][0] = mxEdgeStyle.wayPoints1[0][0] + b[0][0] * d[0][2];
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] - f
        }
        f = 0;
        h = c = (a[0] & (mxConstants.DIRECTION_MASK_EAST | mxConstants.DIRECTION_MASK_WEST)) > 0 ? 0 : 1;
        for (i = k = 0; i < q.length; i++) {
            k = q[i] & 15;
            p = k == mxConstants.DIRECTION_MASK_EAST ? 3 : k;
            p = p + g;
            p > 4 && (p = p - 4);
            l = mxEdgeStyle.dirVectors[p -
                1];
            k = p % 2 > 0 ? 0 : 1;
            if (k != c) {
                f++;
                mxEdgeStyle.wayPoints1[f][0] = mxEdgeStyle.wayPoints1[f - 1][0];
                mxEdgeStyle.wayPoints1[f][1] = mxEdgeStyle.wayPoints1[f - 1][1]
            }
            var t = (q[i] & mxEdgeStyle.TARGET_MASK) > 0, o = (q[i] & mxEdgeStyle.SOURCE_MASK) > 0, m = (q[i] & mxEdgeStyle.SIDE_MASK) >> 5, m = m << g;
            m > 15 && (m = m >> 4);
            n = (q[i] & mxEdgeStyle.CENTER_MASK) > 0;
            if ((o || t) && m < 9) {
                p = 0;
                o = o ? 0 : 1;
                p = n && k == 0 ? d[o][0] + b[o][0] * d[o][2] : n ? d[o][1] + b[o][1] * d[o][3] : mxEdgeStyle.limits[o][m];
                if (k == 0) {
                    m = (p - mxEdgeStyle.wayPoints1[f][0]) * l[0];
                    m > 0 && (mxEdgeStyle.wayPoints1[f][0] =
                        mxEdgeStyle.wayPoints1[f][0] + l[0] * m)
                } else {
                    m = (p - mxEdgeStyle.wayPoints1[f][1]) * l[1];
                    m > 0 && (mxEdgeStyle.wayPoints1[f][1] = mxEdgeStyle.wayPoints1[f][1] + l[1] * m)
                }
            } else if (n) {
                mxEdgeStyle.wayPoints1[f][0] = mxEdgeStyle.wayPoints1[f][0] + l[0] * Math.abs(mxEdgeStyle.vertexSeperations[p] / 2);
                mxEdgeStyle.wayPoints1[f][1] = mxEdgeStyle.wayPoints1[f][1] + l[1] * Math.abs(mxEdgeStyle.vertexSeperations[p] / 2)
            }
            f > 0 && mxEdgeStyle.wayPoints1[f][k] == mxEdgeStyle.wayPoints1[f - 1][k] ? f-- : c = k
        }
        for (i = 0; i <= f; i++) {
            if (i == f && (((a[1] & (mxConstants.DIRECTION_MASK_EAST |
                mxConstants.DIRECTION_MASK_WEST)) > 0 ? 0 : 1) == h ? 0 : 1) != (f + 1) % 2)break;
            e.push(new mxPoint(mxEdgeStyle.wayPoints1[i][0], mxEdgeStyle.wayPoints1[i][1]))
        }
    }
}, getRoutePattern:function (a, b, c, d) {
    var e = a[0] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[0], a = a[1] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[1], e = e - b, a = a - b;
    e < 1 && (e = e + 4);
    a < 1 && (a = a + 4);
    b = routePatterns[e - 1][a - 1];
    if (c == 0 || d == 0)inlineRoutePatterns[e - 1][a - 1] != null && (b = inlineRoutePatterns[e - 1][a - 1]);
    return b
}}, mxStyleRegistry = {values:[], putValue:function (a, b) {
    mxStyleRegistry.values[a] =
        b
}, getValue:function (a) {
    return mxStyleRegistry.values[a]
}, getName:function (a) {
    for (var b in mxStyleRegistry.values)if (mxStyleRegistry.values[b] == a)return b;
    return null
}};
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ELBOW, mxEdgeStyle.ElbowConnector);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ENTITY_RELATION, mxEdgeStyle.EntityRelation);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_LOOP, mxEdgeStyle.Loop);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_SIDETOSIDE, mxEdgeStyle.SideToSide);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_TOPTOBOTTOM, mxEdgeStyle.TopToBottom);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ORTHOGONAL, mxEdgeStyle.OrthConnector);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_SEGMENT, mxEdgeStyle.SegmentConnector);
mxStyleRegistry.putValue(mxConstants.PERIMETER_ELLIPSE, mxPerimeter.EllipsePerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_RECTANGLE, mxPerimeter.RectanglePerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_RHOMBUS, mxPerimeter.RhombusPerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_TRIANGLE, mxPerimeter.TrianglePerimeter);
function mxGraphView(a) {
    this.graph = a;
    this.translate = new mxPoint;
    this.graphBounds = new mxRectangle;
    this.states = new mxDictionary
}
mxGraphView.prototype = new mxEventSource;
mxGraphView.prototype.constructor = mxGraphView;
mxGraphView.prototype.EMPTY_POINT = new mxPoint;
mxGraphView.prototype.doneResource = "none" != mxClient.language ? "done" : "";
mxGraphView.prototype.updatingDocumentResource = "none" != mxClient.language ? "updatingDocument" : "";
mxGraphView.prototype.allowEval = !1;
mxGraphView.prototype.captureDocumentGesture = !0;
mxGraphView.prototype.rendering = !0;
mxGraphView.prototype.graph = null;
mxGraphView.prototype.currentRoot = null;
mxGraphView.prototype.graphBounds = null;
mxGraphView.prototype.scale = 1;
mxGraphView.prototype.translate = null;
mxGraphView.prototype.updateStyle = !1;
mxGraphView.prototype.getGraphBounds = function () {
    return this.graphBounds
};
mxGraphView.prototype.setGraphBounds = function (a) {
    this.graphBounds = a
};
mxGraphView.prototype.getBounds = function (a) {
    var b = null;
    if (a != null && a.length > 0)for (var c = this.graph.getModel(), d = 0; d < a.length; d++)if (c.isVertex(a[d]) || c.isEdge(a[d])) {
        var e = this.getState(a[d]);
        e != null && (b == null ? b = new mxRectangle(e.x, e.y, e.width, e.height) : b.add(e))
    }
    return b
};
mxGraphView.prototype.setCurrentRoot = function (a) {
    if (this.currentRoot != a) {
        var b = new mxCurrentRootChange(this, a);
        b.execute();
        var c = new mxUndoableEdit(this, false);
        c.add(b);
        this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", c));
        this.graph.sizeDidChange()
    }
    return a
};
mxGraphView.prototype.scaleAndTranslate = function (a, b, c) {
    var d = this.scale, e = new mxPoint(this.translate.x, this.translate.y);
    if (this.scale != a || this.translate.x != b || this.translate.y != c) {
        this.scale = a;
        this.translate.x = b;
        this.translate.y = c;
        if (this.isEventsEnabled()) {
            this.revalidate();
            this.graph.sizeDidChange()
        }
    }
    this.fireEvent(new mxEventObject(mxEvent.SCALE_AND_TRANSLATE, "scale", a, "previousScale", d, "translate", this.translate, "previousTranslate", e))
};
mxGraphView.prototype.getScale = function () {
    return this.scale
};
mxGraphView.prototype.setScale = function (a) {
    var b = this.scale;
    if (this.scale != a) {
        this.scale = a;
        if (this.isEventsEnabled()) {
            this.revalidate();
            this.graph.sizeDidChange()
        }
    }
    this.fireEvent(new mxEventObject(mxEvent.SCALE, "scale", a, "previousScale", b))
};
mxGraphView.prototype.getTranslate = function () {
    return this.translate
};
mxGraphView.prototype.setTranslate = function (a, b) {
    var c = new mxPoint(this.translate.x, this.translate.y);
    if (this.translate.x != a || this.translate.y != b) {
        this.translate.x = a;
        this.translate.y = b;
        if (this.isEventsEnabled()) {
            this.revalidate();
            this.graph.sizeDidChange()
        }
    }
    this.fireEvent(new mxEventObject(mxEvent.TRANSLATE, "translate", this.translate, "previousTranslate", c))
};
mxGraphView.prototype.refresh = function () {
    this.currentRoot != null && this.clear();
    this.revalidate()
};
mxGraphView.prototype.revalidate = function () {
    this.invalidate();
    this.validate()
};
mxGraphView.prototype.clear = function (a, b, c) {
    var d = this.graph.getModel(), a = a || d.getRoot(), b = b != null ? b : false, c = c != null ? c : true;
    this.removeState(a);
    if (c && (b || a != this.currentRoot))for (var c = d.getChildCount(a), e = 0; e < c; e++)this.clear(d.getChildAt(a, e), b); else this.invalidate(a)
};
mxGraphView.prototype.invalidate = function (a, b, c, d) {
    var e = this.graph.getModel(), a = a || e.getRoot(), b = b != null ? b : true, c = c != null ? c : true, d = d != null ? d : false, f = this.getState(a);
    if (f != null) {
        f.invalid = true;
        if (d)f.orderChanged = true
    }
    if (b)for (var g = e.getChildCount(a), f = 0; f < g; f++)this.invalidate(e.getChildAt(a, f), b, c, d);
    if (c) {
        d = e.getEdgeCount(a);
        for (f = 0; f < d; f++)this.invalidate(e.getEdgeAt(a, f), b, c)
    }
};
mxGraphView.prototype.validate = function (a) {
    var b = mxLog.enter("mxGraphView.validate");
    window.status = mxResources.get(this.updatingDocumentResource) || this.updatingDocumentResource;
    a = a || (this.currentRoot != null ? this.currentRoot : this.graph.getModel().getRoot());
    this.validateBounds(null, a);
    a = this.validatePoints(null, a);
    a == null && (a = new mxRectangle);
    this.setGraphBounds(a);
    this.validateBackground();
    window.status = mxResources.get(this.doneResource) || this.doneResource;
    mxLog.leave("mxGraphView.validate", b)
};
mxGraphView.prototype.createBackgroundPageShape = function (a) {
    return new mxRectangleShape(a, "white", "black")
};
mxGraphView.prototype.validateBackground = function () {
    var a = this.graph.getBackgroundImage();
    if (a != null) {
        if (this.backgroundImage == null || this.backgroundImage.image != a.src) {
            this.backgroundImage != null && this.backgroundImage.destroy();
            var b = new mxRectangle(0, 0, 1, 1);
            this.backgroundImage = new mxImageShape(b, a.src);
            this.backgroundImage.dialect = this.graph.dialect;
            this.backgroundImage.init(this.backgroundPane);
            this.backgroundImage.redraw()
        }
        this.redrawBackgroundImage(this.backgroundImage, a)
    } else if (this.backgroundImage !=
        null) {
        this.backgroundImage.destroy();
        this.backgroundImage = null
    }
    if (this.graph.pageVisible) {
        b = this.getBackgroundPageBounds();
        if (this.backgroundPageShape == null) {
            this.backgroundPageShape = this.createBackgroundPageShape(b);
            this.backgroundPageShape.scale = this.scale;
            this.backgroundPageShape.isShadow = true;
            this.backgroundPageShape.dialect = this.graph.dialect;
            this.backgroundPageShape.init(this.backgroundPane);
            this.backgroundPageShape.redraw();
            mxEvent.addListener(this.backgroundPageShape.node, "dblclick", mxUtils.bind(this,
                function (a) {
                    this.graph.dblClick(a)
                }));
            a = mxClient.IS_TOUCH ? "touchmove" : "mousemove";
            b = mxClient.IS_TOUCH ? "touchend" : "mouseup";
            mxEvent.addListener(this.backgroundPageShape.node, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (a) {
                this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a))
            }));
            mxEvent.addListener(this.backgroundPageShape.node, a, mxUtils.bind(this, function (a) {
                this.graph.tooltipHandler != null && this.graph.tooltipHandler.isHideOnHover() && this.graph.tooltipHandler.hide();
                this.graph.isMouseDown && !mxEvent.isConsumed(a) && this.graph.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a))
            }));
            mxEvent.addListener(this.backgroundPageShape.node, b, mxUtils.bind(this, function (a) {
                this.graph.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a))
            }))
        } else {
            this.backgroundPageShape.scale = this.scale;
            this.backgroundPageShape.bounds = b;
            this.backgroundPageShape.redraw()
        }
    } else if (this.backgroundPageShape != null) {
        this.backgroundPageShape.destroy();
        this.backgroundPageShape = null
    }
};
mxGraphView.prototype.getBackgroundPageBounds = function () {
    var a = this.graph.pageFormat, b = this.scale * this.graph.pageScale;
    return new mxRectangle(this.scale * this.translate.x, this.scale * this.translate.y, a.width * b, a.height * b)
};
mxGraphView.prototype.redrawBackgroundImage = function (a, b) {
    a.scale = this.scale;
    a.bounds.x = this.scale * this.translate.x;
    a.bounds.y = this.scale * this.translate.y;
    a.bounds.width = this.scale * b.width;
    a.bounds.height = this.scale * b.height;
    a.redraw()
};
mxGraphView.prototype.validateBounds = function (a, b) {
    var c = this.graph.getModel(), d = this.getState(b, true);
    if (d != null && d.invalid) {
        if (this.graph.isCellVisible(b)) {
            if (b != this.currentRoot && a != null) {
                d.absoluteOffset.x = 0;
                d.absoluteOffset.y = 0;
                d.origin.x = a.origin.x;
                d.origin.y = a.origin.y;
                var e = this.graph.getCellGeometry(b);
                if (e != null) {
                    if (!c.isEdge(b)) {
                        var f = e.offset || this.EMPTY_POINT;
                        if (e.relative) {
                            d.origin.x = d.origin.x + (e.x * a.width / this.scale + f.x);
                            d.origin.y = d.origin.y + (e.y * a.height / this.scale + f.y)
                        } else {
                            d.absoluteOffset.x =
                                this.scale * f.x;
                            d.absoluteOffset.y = this.scale * f.y;
                            d.origin.x = d.origin.x + e.x;
                            d.origin.y = d.origin.y + e.y
                        }
                    }
                    d.x = this.scale * (this.translate.x + d.origin.x);
                    d.y = this.scale * (this.translate.y + d.origin.y);
                    d.width = this.scale * e.width;
                    d.height = this.scale * e.height;
                    c.isVertex(b) && this.updateVertexLabelOffset(d)
                }
            }
        } else this.removeState(b);
        f = this.graph.getChildOffsetForCell(b);
        if (f != null) {
            d.origin.x = d.origin.x + f.x;
            d.origin.y = d.origin.y + f.y
        }
    }
    if (d != null && (!this.graph.isCellCollapsed(b) || b == this.currentRoot)) {
        e = c.getChildCount(b);
        for (f = 0; f < e; f++) {
            var g = c.getChildAt(b, f);
            this.validateBounds(d, g)
        }
    }
};
mxGraphView.prototype.updateVertexLabelOffset = function (a) {
    var b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
    if (b == mxConstants.ALIGN_LEFT)a.absoluteOffset.x = a.absoluteOffset.x - a.width; else if (b == mxConstants.ALIGN_RIGHT)a.absoluteOffset.x = a.absoluteOffset.x + a.width;
    b = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE);
    if (b == mxConstants.ALIGN_TOP)a.absoluteOffset.y = a.absoluteOffset.y - a.height; else if (b == mxConstants.ALIGN_BOTTOM)a.absoluteOffset.y =
        a.absoluteOffset.y + a.height
};
mxGraphView.prototype.validatePoints = function (a, b) {
    var c = this.graph.getModel(), d = this.getState(b), e = null;
    if (d != null) {
        if (d.invalid) {
            var f = this.graph.getCellGeometry(b);
            if (f != null && c.isEdge(b)) {
                var g = this.getState(this.getVisibleTerminal(b, true));
                d.setVisibleTerminalState(g, true);
                if (g != null && c.isEdge(g.cell) && !c.isAncestor(g.cell, b)) {
                    var h = this.getState(c.getParent(g.cell));
                    this.validatePoints(h, g.cell)
                }
                var k = this.getState(this.getVisibleTerminal(b, false));
                d.setVisibleTerminalState(k, false);
                if (k != null &&
                    c.isEdge(k.cell) && !c.isAncestor(k.cell, b)) {
                    h = this.getState(c.getParent(k.cell));
                    this.validatePoints(h, k.cell)
                }
                this.updateFixedTerminalPoints(d, g, k);
                this.updatePoints(d, f.points, g, k);
                this.updateFloatingTerminalPoints(d, g, k);
                this.updateEdgeBounds(d);
                this.updateEdgeLabelOffset(d)
            } else if (f != null && f.relative && a != null && c.isEdge(a.cell)) {
                f = this.getPoint(a, f);
                if (f != null) {
                    d.x = f.x;
                    d.y = f.y;
                    f.x = f.x / this.scale - this.translate.x;
                    f.y = f.y / this.scale - this.translate.y;
                    d.origin = f;
                    this.childMoved(a, d)
                }
            }
            d.invalid = false;
            b != this.currentRoot && this.graph.cellRenderer.redraw(d, false, this.isRendering())
        }
        if (c.isEdge(b) || c.isVertex(b)) {
            d.shape != null && d.shape.boundingBox != null && (e = d.shape.boundingBox.clone());
            d.text != null && !this.graph.isLabelClipped(d.cell) && d.text.boundingBox != null && (e != null ? e.add(d.text.boundingBox) : e = d.text.boundingBox.clone())
        }
    }
    if (d != null && (!this.graph.isCellCollapsed(b) || b == this.currentRoot)) {
        f = c.getChildCount(b);
        for (g = 0; g < f; g++) {
            h = c.getChildAt(b, g);
            h = this.validatePoints(d, h);
            h != null && (e == null ? e = h :
                e.add(h))
        }
    }
    return e
};
mxGraphView.prototype.childMoved = function (a, b) {
    var c = b.cell;
    if (!this.graph.isCellCollapsed(c) || c == this.currentRoot)for (var d = this.graph.getModel(), e = d.getChildCount(c), f = 0; f < e; f++)this.validateBounds(b, d.getChildAt(c, f))
};
mxGraphView.prototype.updateFixedTerminalPoints = function (a, b, c) {
    this.updateFixedTerminalPoint(a, b, true, this.graph.getConnectionConstraint(a, b, true));
    this.updateFixedTerminalPoint(a, c, false, this.graph.getConnectionConstraint(a, c, false))
};
mxGraphView.prototype.updateFixedTerminalPoint = function (a, b, c, d) {
    var e = null;
    d != null && (e = this.graph.getConnectionPoint(b, d));
    if (e == null && b == null) {
        var b = this.scale, d = this.translate, f = a.origin, e = this.graph.getCellGeometry(a.cell).getTerminalPoint(c);
        e != null && (e = new mxPoint(b * (d.x + e.x + f.x), b * (d.y + e.y + f.y)))
    }
    a.setAbsoluteTerminalPoint(e, c)
};
mxGraphView.prototype.updatePoints = function (a, b, c, d) {
    if (a != null) {
        var e = [];
        e.push(a.absolutePoints[0]);
        var f = this.getEdgeStyle(a, b, c, d);
        if (f != null) {
            c = this.getTerminalPort(a, c, true);
            d = this.getTerminalPort(a, d, false);
            f(a, c, d, b, e)
        } else if (b != null)for (f = 0; f < b.length; f++)if (b[f] != null) {
            d = mxUtils.clone(b[f]);
            e.push(this.transformControlPoint(a, d))
        }
        b = a.absolutePoints;
        e.push(b[b.length - 1]);
        a.absolutePoints = e
    }
};
mxGraphView.prototype.transformControlPoint = function (a, b) {
    var c = a.origin;
    return new mxPoint(this.scale * (b.x + this.translate.x + c.x), this.scale * (b.y + this.translate.y + c.y))
};
mxGraphView.prototype.getEdgeStyle = function (a, b, c, d) {
    a = c != null && c == d ? mxUtils.getValue(a.style, mxConstants.STYLE_LOOP, this.graph.defaultLoopStyle) : !mxUtils.getValue(a.style, mxConstants.STYLE_NOEDGESTYLE, false) ? a.style[mxConstants.STYLE_EDGE] : null;
    if (typeof a == "string") {
        b = mxStyleRegistry.getValue(a);
        b == null && this.isAllowEval() && (b = mxUtils.eval(a));
        a = b
    }
    return typeof a == "function" ? a : null
};
mxGraphView.prototype.updateFloatingTerminalPoints = function (a, b, c) {
    var d = a.absolutePoints, e = d[0];
    d[d.length - 1] == null && c != null && this.updateFloatingTerminalPoint(a, c, b, false);
    e == null && b != null && this.updateFloatingTerminalPoint(a, b, c, true)
};
mxGraphView.prototype.updateFloatingTerminalPoint = function (a, b, c, d) {
    var b = this.getTerminalPort(a, b, d), e = this.getNextPoint(a, c, d), c = mxUtils.toRadians(Number(b.style[mxConstants.STYLE_ROTATION] || "0")), f = new mxPoint(b.getCenterX(), b.getCenterY());
    if (c != 0)var g = Math.cos(-c), h = Math.sin(-c), e = mxUtils.getRotatedPoint(e, g, h, f);
    g = parseFloat(a.style[mxConstants.STYLE_PERIMETER_SPACING] || 0);
    g = g + parseFloat(a.style[d ? mxConstants.STYLE_SOURCE_PERIMETER_SPACING : mxConstants.STYLE_TARGET_PERIMETER_SPACING] || 0);
    b =
        this.getPerimeterPoint(b, e, this.graph.isOrthogonal(a), g);
    if (c != 0) {
        g = Math.cos(c);
        h = Math.sin(c);
        b = mxUtils.getRotatedPoint(b, g, h, f)
    }
    a.setAbsoluteTerminalPoint(b, d)
};
mxGraphView.prototype.getTerminalPort = function (a, b, c) {
    a = mxUtils.getValue(a.style, c ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT);
    if (a != null) {
        a = this.getState(this.graph.getModel().getCell(a));
        a != null && (b = a)
    }
    return b
};
mxGraphView.prototype.getPerimeterPoint = function (a, b, c, d) {
    var e = null;
    if (a != null) {
        var f = this.getPerimeterFunction(a);
        if (f != null && b != null) {
            d = this.getPerimeterBounds(a, d);
            if (d.width > 0 || d.height > 0)e = f(d, a, b, c)
        }
        e == null && (e = this.getPoint(a))
    }
    return e
};
mxGraphView.prototype.getRoutingCenterX = function (a) {
    var b = a.style != null ? parseFloat(a.style[mxConstants.STYLE_ROUTING_CENTER_X]) || 0 : 0;
    return a.getCenterX() + b * a.width
};
mxGraphView.prototype.getRoutingCenterY = function (a) {
    var b = a.style != null ? parseFloat(a.style[mxConstants.STYLE_ROUTING_CENTER_Y]) || 0 : 0;
    return a.getCenterY() + b * a.height
};
mxGraphView.prototype.getPerimeterBounds = function (a, b) {
    b = b != null ? b : 0;
    a != null && (b = b + parseFloat(a.style[mxConstants.STYLE_PERIMETER_SPACING] || 0));
    return a.getPerimeterBounds(b * this.scale)
};
mxGraphView.prototype.getPerimeterFunction = function (a) {
    a = a.style[mxConstants.STYLE_PERIMETER];
    if (typeof a == "string") {
        var b = mxStyleRegistry.getValue(a);
        b == null && this.isAllowEval() && (b = mxUtils.eval(a));
        a = b
    }
    return typeof a == "function" ? a : null
};
mxGraphView.prototype.getNextPoint = function (a, b, c) {
    var a = a.absolutePoints, d = null;
    if (a != null && (c || a.length > 2 || b == null)) {
        d = a.length;
        d = a[c ? Math.min(1, d - 1) : Math.max(0, d - 2)]
    }
    d == null && b != null && (d = new mxPoint(b.getCenterX(), b.getCenterY()));
    return d
};
mxGraphView.prototype.getVisibleTerminal = function (a, b) {
    for (var c = this.graph.getModel(), d = c.getTerminal(a, b), e = d; d != null && d != this.currentRoot;) {
        if (!this.graph.isCellVisible(e) || this.graph.isCellCollapsed(d))e = d;
        d = c.getParent(d)
    }
    c.getParent(e) == c.getRoot() && (e = null);
    return e
};
mxGraphView.prototype.updateEdgeBounds = function (a) {
    var b = a.absolutePoints;
    a.length = 0;
    if (b != null && b.length > 0) {
        var c = b[0], d = b[b.length - 1];
        if (c == null || d == null)a.cell != this.currentRoot && this.clear(a.cell, true); else {
            if (c.x != d.x || c.y != d.y) {
                var e = d.x - c.x, f = d.y - c.y;
                a.terminalDistance = Math.sqrt(e * e + f * f)
            } else a.terminalDistance = 0;
            var d = 0, g = [], f = c;
            if (f != null) {
                for (var c = f.x, h = f.y, k = c, i = h, l = 1; l < b.length; l++) {
                    var m = b[l];
                    if (m != null) {
                        e = f.x - m.x;
                        f = f.y - m.y;
                        e = Math.sqrt(e * e + f * f);
                        g.push(e);
                        d = d + e;
                        f = m;
                        c = Math.min(f.x, c);
                        h = Math.min(f.y, h);
                        k = Math.max(f.x, k);
                        i = Math.max(f.y, i)
                    }
                }
                a.length = d;
                a.segments = g;
                a.x = c;
                a.y = h;
                a.width = Math.max(1, k - c);
                a.height = Math.max(1, i - h)
            }
        }
    }
};
mxGraphView.prototype.getPoint = function (a, b) {
    var c = a.getCenterX(), d = a.getCenterY();
    if (a.segments != null && (b == null || b.relative)) {
        for (var e = a.absolutePoints.length, f = ((b != null ? b.x / 2 : 0) + 0.5) * a.length, g = a.segments[0], h = 0, k = 1; f > h + g && k < e - 1;) {
            h = h + g;
            g = a.segments[k++]
        }
        e = g == 0 ? 0 : (f - h) / g;
        f = a.absolutePoints[k - 1];
        k = a.absolutePoints[k];
        if (f != null && k != null) {
            h = c = d = 0;
            if (b != null) {
                var d = b.y, i = b.offset;
                if (i != null) {
                    c = i.x;
                    h = i.y
                }
            }
            i = k.x - f.x;
            k = k.y - f.y;
            c = f.x + i * e + ((g == 0 ? 0 : k / g) * d + c) * this.scale;
            d = f.y + k * e - ((g == 0 ? 0 : i / g) * d - h) * this.scale
        }
    } else if (b !=
        null) {
        i = b.offset;
        if (i != null) {
            c = c + i.x;
            d = d + i.y
        }
    }
    return new mxPoint(c, d)
};
mxGraphView.prototype.getRelativePoint = function (a, b, c) {
    var d = this.graph.getModel().getGeometry(a.cell);
    if (d != null) {
        var e = a.absolutePoints.length;
        if (d.relative && e > 1) {
            for (var d = a.length, f = a.segments, g = a.absolutePoints[0], h = a.absolutePoints[1], k = mxUtils.ptSegDistSq(g.x, g.y, h.x, h.y, b, c), i = 0, l = 0, m = 0, n = 2; n < e; n++) {
                l = l + f[n - 2];
                h = a.absolutePoints[n];
                g = mxUtils.ptSegDistSq(g.x, g.y, h.x, h.y, b, c);
                if (g <= k) {
                    k = g;
                    i = n - 1;
                    m = l
                }
                g = h
            }
            e = f[i];
            g = a.absolutePoints[i];
            h = a.absolutePoints[i + 1];
            f = h.x;
            k = h.y;
            a = g.x - f;
            i = g.y - k;
            f = (a - (b -
                f)) * a + (i - (c - k)) * i;
            a = Math.sqrt(f <= 0 ? 0 : f * f / (a * a + i * i));
            a > e && (a = e);
            e = Math.sqrt(mxUtils.ptSegDistSq(g.x, g.y, h.x, h.y, b, c));
            mxUtils.relativeCcw(g.x, g.y, h.x, h.y, b, c) == -1 && (e = -e);
            return new mxPoint((d / 2 - m - a) / d * -2, e / this.scale)
        }
    }
    return new mxPoint
};
mxGraphView.prototype.updateEdgeLabelOffset = function (a) {
    var b = a.absolutePoints;
    a.absoluteOffset.x = a.getCenterX();
    a.absoluteOffset.y = a.getCenterY();
    if (b != null && b.length > 0 && a.segments != null) {
        var c = this.graph.getCellGeometry(a.cell);
        if (c.relative) {
            var d = this.getPoint(a, c);
            if (d != null)a.absoluteOffset = d
        } else {
            var d = b[0], e = b[b.length - 1];
            if (d != null && e != null) {
                var b = e.x - d.x, f = e.y - d.y, g = e = 0, c = c.offset;
                if (c != null) {
                    e = c.x;
                    g = c.y
                }
                c = d.y + f / 2 + g * this.scale;
                a.absoluteOffset.x = d.x + b / 2 + e * this.scale;
                a.absoluteOffset.y = c
            }
        }
    }
};
mxGraphView.prototype.getState = function (a, b) {
    var b = b || false, c = null;
    if (a != null) {
        c = this.states.get(a);
        if (this.graph.isCellVisible(a))if (c == null && b && this.graph.isCellVisible(a)) {
            c = this.createState(a);
            this.states.put(a, c)
        } else if (b && c != null && this.updateStyle)c.style = this.graph.getCellStyle(a)
    }
    return c
};
mxGraphView.prototype.isRendering = function () {
    return this.rendering
};
mxGraphView.prototype.setRendering = function (a) {
    this.rendering = a
};
mxGraphView.prototype.isAllowEval = function () {
    return this.allowEval
};
mxGraphView.prototype.setAllowEval = function (a) {
    this.allowEval = a
};
mxGraphView.prototype.getStates = function () {
    return this.states
};
mxGraphView.prototype.setStates = function (a) {
    this.states = a
};
mxGraphView.prototype.getCellStates = function (a) {
    if (a == null)return this.states;
    for (var b = [], c = 0; c < a.length; c++) {
        var d = this.getState(a[c]);
        d != null && b.push(d)
    }
    return b
};
mxGraphView.prototype.removeState = function (a) {
    var b = null;
    if (a != null) {
        b = this.states.remove(a);
        if (b != null) {
            this.graph.cellRenderer.destroy(b);
            b.destroy()
        }
    }
    return b
};
mxGraphView.prototype.createState = function (a) {
    var b = this.graph.getCellStyle(a), a = new mxCellState(this, a, b);
    this.graph.cellRenderer.initialize(a, this.isRendering());
    return a
};
mxGraphView.prototype.getCanvas = function () {
    return this.canvas
};
mxGraphView.prototype.getBackgroundPane = function () {
    return this.backgroundPane
};
mxGraphView.prototype.getDrawPane = function () {
    return this.drawPane
};
mxGraphView.prototype.getOverlayPane = function () {
    return this.overlayPane
};
mxGraphView.prototype.isContainerEvent = function (a) {
    a = mxEvent.getSource(a);
    return a == this.graph.container || a.parentNode == this.backgroundPane || a.parentNode != null && a.parentNode.parentNode == this.backgroundPane || a == this.canvas.parentNode || a == this.canvas || a == this.backgroundPane || a == this.drawPane || a == this.overlayPane
};
mxGraphView.prototype.isScrollEvent = function (a) {
    var b = mxUtils.getOffset(this.graph.container), a = new mxPoint(a.clientX - b.x, a.clientY - b.y), b = this.graph.container.offsetWidth, c = this.graph.container.clientWidth;
    if (b > c && a.x > c + 2 && a.x <= b)return true;
    b = this.graph.container.offsetHeight;
    c = this.graph.container.clientHeight;
    return b > c && a.y > c + 2 && a.y <= b ? true : false
};
mxGraphView.prototype.init = function () {
    this.installListeners();
    var a = this.graph;
    a.dialect == mxConstants.DIALECT_SVG ? this.createSvg() : a.dialect == mxConstants.DIALECT_VML ? this.createVml() : this.createHtml()
};
mxGraphView.prototype.installListeners = function () {
    var a = this.graph, b = a.container;
    if (b != null) {
        var c = mxClient.IS_TOUCH ? "touchmove" : "mousemove", d = mxClient.IS_TOUCH ? "touchend" : "mouseup";
        mxEvent.addListener(b, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (b) {
            mxClient.IS_TOUCH && a.isEditing() && a.stopEditing(!a.isInvokesStopCellEditing());
            this.isContainerEvent(b) && (!mxClient.IS_IE && !mxClient.IS_GC && !mxClient.IS_OP && !mxClient.IS_SF || !this.isScrollEvent(b)) && a.fireMouseEvent(mxEvent.MOUSE_DOWN,
                new mxMouseEvent(b))
        }));
        mxEvent.addListener(b, c, mxUtils.bind(this, function (b) {
            this.isContainerEvent(b) && a.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b))
        }));
        mxEvent.addListener(b, d, mxUtils.bind(this, function (b) {
            this.isContainerEvent(b) && a.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b))
        }));
        mxEvent.addListener(b, "dblclick", mxUtils.bind(this, function (b) {
            a.dblClick(b)
        }));
        var e = function (c) {
            var d = null;
            if (mxClient.IS_TOUCH) {
                d = mxEvent.getClientX(c);
                c = mxEvent.getClientY(c);
                c = mxUtils.convertPoint(b,
                    d, c);
                d = a.view.getState(a.getCellAt(c.x, c.y))
            }
            return d
        };
        a.addMouseListener({mouseDown:function () {
            a.panningHandler.hideMenu()
        }, mouseMove:function () {
        }, mouseUp:function () {
        }});
        mxEvent.addListener(document, c, mxUtils.bind(this, function (b) {
            a.tooltipHandler != null && a.tooltipHandler.isHideOnHover() && a.tooltipHandler.hide();
            this.captureDocumentGesture && (a.isMouseDown && !mxEvent.isConsumed(b)) && a.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, e(b)))
        }));
        mxEvent.addListener(document, d, mxUtils.bind(this, function (b) {
            this.captureDocumentGesture &&
            a.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b))
        }))
    }
};
mxGraphView.prototype.createHtml = function () {
    var a = this.graph.container;
    if (a != null) {
        this.canvas = this.createHtmlPane("100%", "100%");
        this.backgroundPane = this.createHtmlPane("1px", "1px");
        this.drawPane = this.createHtmlPane("1px", "1px");
        this.overlayPane = this.createHtmlPane("1px", "1px");
        this.canvas.appendChild(this.backgroundPane);
        this.canvas.appendChild(this.drawPane);
        this.canvas.appendChild(this.overlayPane);
        a.appendChild(this.canvas);
        if (mxClient.IS_QUIRKS) {
            a = mxUtils.bind(this, function () {
                var a = this.getGraphBounds();
                this.updateHtmlCanvasSize(a.x + a.width + this.graph.border, a.y + a.height + this.graph.border)
            });
            mxEvent.addListener(window, "resize", a)
        }
    }
};
mxGraphView.prototype.updateHtmlCanvasSize = function (a, b) {
    if (this.graph.container != null) {
        var c = this.graph.container.offsetHeight;
        this.canvas.style.width = this.graph.container.offsetWidth < a ? a + "px" : "100%";
        this.canvas.style.height = c < b ? b + "px" : "100%"
    }
};
mxGraphView.prototype.createHtmlPane = function (a, b) {
    var c = document.createElement("DIV");
    if (a != null && b != null) {
        c.style.position = "absolute";
        c.style.left = "0px";
        c.style.top = "0px";
        c.style.width = a;
        c.style.height = b
    } else c.style.position = "relative";
    return c
};
mxGraphView.prototype.createVml = function () {
    var a = this.graph.container;
    if (a != null) {
        var b = a.offsetWidth, c = a.offsetHeight;
        this.canvas = this.createVmlPane(b, c);
        this.backgroundPane = this.createVmlPane(b, c);
        this.drawPane = this.createVmlPane(b, c);
        this.overlayPane = this.createVmlPane(b, c);
        this.canvas.appendChild(this.backgroundPane);
        this.canvas.appendChild(this.drawPane);
        this.canvas.appendChild(this.overlayPane);
        a.appendChild(this.canvas)
    }
};
mxGraphView.prototype.createVmlPane = function (a, b) {
    var c = document.createElement("v:group");
    c.style.position = "absolute";
    c.style.left = "0px";
    c.style.top = "0px";
    c.style.width = a + "px";
    c.style.height = b + "px";
    c.setAttribute("coordsize", a + "," + b);
    c.setAttribute("coordorigin", "0,0");
    return c
};
mxGraphView.prototype.createSvg = function () {
    var a = this.graph.container;
    this.canvas = document.createElementNS(mxConstants.NS_SVG, "g");
    this.backgroundPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.backgroundPane);
    this.drawPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.drawPane);
    this.overlayPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.overlayPane);
    var b = document.createElementNS(mxConstants.NS_SVG,
        "svg");
    b.style.width = "100%";
    b.style.height = "100%";
    if (mxClient.IS_IE)b.style.marginBottom = "-4px";
    b.appendChild(this.canvas);
    if (a != null) {
        a.appendChild(b);
        if (mxUtils.getCurrentStyle(a).position == "static")a.style.position = "relative"
    }
};
mxGraphView.prototype.destroy = function () {
    var a = this.canvas != null ? this.canvas.ownerSVGElement : null;
    if (a == null)a = this.canvas;
    if (a != null && a.parentNode != null) {
        this.clear(this.currentRoot, true);
        mxEvent.removeAllListeners(document);
        mxEvent.release(this.graph.container);
        a.parentNode.removeChild(a);
        this.overlayPane = this.drawPane = this.backgroundPane = this.canvas = null
    }
};
function mxCurrentRootChange(a, b) {
    this.view = a;
    this.previous = this.root = b;
    this.isUp = b == null;
    if (!this.isUp)for (var c = this.view.currentRoot, d = this.view.graph.getModel(); c != null;) {
        if (c == b) {
            this.isUp = true;
            break
        }
        c = d.getParent(c)
    }
}
mxCurrentRootChange.prototype.execute = function () {
    var a = this.view.currentRoot;
    this.view.currentRoot = this.previous;
    this.previous = a;
    a = this.view.graph.getTranslateForRoot(this.view.currentRoot);
    if (a != null)this.view.translate = new mxPoint(-a.x, -a.y);
    this.view.fireEvent(new mxEventObject(this.isUp ? mxEvent.UP : mxEvent.DOWN, "root", this.view.currentRoot, "previous", this.previous));
    if (this.isUp) {
        this.view.clear(this.view.currentRoot, true);
        this.view.validate()
    } else this.view.refresh();
    this.isUp = !this.isUp
};
function mxGraph(a, b, c, d) {
    this.mouseListeners = null;
    this.renderHint = c;
    this.dialect = mxClient.IS_SVG ? mxConstants.DIALECT_SVG : c == mxConstants.RENDERING_HINT_EXACT && mxClient.IS_VML ? mxConstants.DIALECT_VML : c == mxConstants.RENDERING_HINT_FASTEST ? mxConstants.DIALECT_STRICTHTML : c == mxConstants.RENDERING_HINT_FASTER ? mxConstants.DIALECT_PREFERHTML : mxConstants.DIALECT_MIXEDHTML;
    this.model = b != null ? b : new mxGraphModel;
    this.multiplicities = [];
    this.imageBundles = [];
    this.cellRenderer = this.createCellRenderer();
    this.setSelectionModel(this.createSelectionModel());
    this.setStylesheet(d != null ? d : this.createStylesheet());
    this.view = this.createGraphView();
    this.graphModelChangeListener = mxUtils.bind(this, function (a, b) {
        this.graphModelChanged(b.getProperty("edit").changes)
    });
    this.model.addListener(mxEvent.CHANGE, this.graphModelChangeListener);
    this.createHandlers();
    a != null && this.init(a);
    this.view.revalidate()
}
mxLoadResources && mxResources.add(mxClient.basePath + "/resources/graph");
mxGraph.prototype = new mxEventSource;
mxGraph.prototype.constructor = mxGraph;
mxGraph.prototype.EMPTY_ARRAY = [];
mxGraph.prototype.mouseListeners = null;
mxGraph.prototype.isMouseDown = !1;
mxGraph.prototype.model = null;
mxGraph.prototype.view = null;
mxGraph.prototype.stylesheet = null;
mxGraph.prototype.selectionModel = null;
mxGraph.prototype.cellEditor = null;
mxGraph.prototype.cellRenderer = null;
mxGraph.prototype.multiplicities = null;
mxGraph.prototype.renderHint = null;
mxGraph.prototype.dialect = null;
mxGraph.prototype.gridSize = 10;
mxGraph.prototype.gridEnabled = !0;
mxGraph.prototype.portsEnabled = !0;
mxGraph.prototype.doubleTapEnabled = !0;
mxGraph.prototype.doubleTapTimeout = 700;
mxGraph.prototype.doubleTapTolerance = 25;
mxGraph.prototype.lastTouchY = 0;
mxGraph.prototype.lastTouchY = 0;
mxGraph.prototype.lastTouchTime = 0;
mxGraph.prototype.gestureEnabled = !0;
mxGraph.prototype.tolerance = 4;
mxGraph.prototype.defaultOverlap = 0.5;
mxGraph.prototype.defaultParent = null;
mxGraph.prototype.alternateEdgeStyle = null;
mxGraph.prototype.backgroundImage = null;
mxGraph.prototype.pageVisible = !1;
mxGraph.prototype.pageBreaksVisible = !1;
mxGraph.prototype.pageBreakColor = "gray";
mxGraph.prototype.pageBreakDashed = !0;
mxGraph.prototype.minPageBreakDist = 20;
mxGraph.prototype.preferPageSize = !1;
mxGraph.prototype.pageFormat = mxConstants.PAGE_FORMAT_A4_PORTRAIT;
mxGraph.prototype.pageScale = 1.5;
mxGraph.prototype.enabled = !0;
mxGraph.prototype.escapeEnabled = !0;
mxGraph.prototype.invokesStopCellEditing = !0;
mxGraph.prototype.enterStopsCellEditing = !1;
mxGraph.prototype.useScrollbarsForPanning = !0;
mxGraph.prototype.exportEnabled = !0;
mxGraph.prototype.importEnabled = !0;
mxGraph.prototype.cellsLocked = !1;
mxGraph.prototype.cellsCloneable = !0;
mxGraph.prototype.foldingEnabled = !0;
mxGraph.prototype.cellsEditable = !0;
mxGraph.prototype.cellsDeletable = !0;
mxGraph.prototype.cellsMovable = !0;
mxGraph.prototype.edgeLabelsMovable = !0;
mxGraph.prototype.vertexLabelsMovable = !1;
mxGraph.prototype.dropEnabled = !1;
mxGraph.prototype.splitEnabled = !0;
mxGraph.prototype.cellsResizable = !0;
mxGraph.prototype.cellsBendable = !0;
mxGraph.prototype.cellsSelectable = !0;
mxGraph.prototype.cellsDisconnectable = !0;
mxGraph.prototype.autoSizeCells = !1;
mxGraph.prototype.autoScroll = !0;
mxGraph.prototype.timerAutoScroll = !1;
mxGraph.prototype.allowAutoPanning = !1;
mxGraph.prototype.ignoreScrollbars = !1;
mxGraph.prototype.autoExtend = !0;
mxGraph.prototype.maximumGraphBounds = null;
mxGraph.prototype.minimumGraphSize = null;
mxGraph.prototype.minimumContainerSize = null;
mxGraph.prototype.maximumContainerSize = null;
mxGraph.prototype.resizeContainer = !1;
mxGraph.prototype.border = 0;
mxGraph.prototype.ordered = !0;
mxGraph.prototype.keepEdgesInForeground = !1;
mxGraph.prototype.keepEdgesInBackground = !0;
mxGraph.prototype.allowNegativeCoordinates = !0;
mxGraph.prototype.constrainChildren = !0;
mxGraph.prototype.extendParents = !0;
mxGraph.prototype.extendParentsOnAdd = !0;
mxGraph.prototype.collapseToPreferredSize = !0;
mxGraph.prototype.zoomFactor = 1.2;
mxGraph.prototype.keepSelectionVisibleOnZoom = !1;
mxGraph.prototype.centerZoom = !0;
mxGraph.prototype.resetViewOnRootChange = !0;
mxGraph.prototype.resetEdgesOnResize = !1;
mxGraph.prototype.resetEdgesOnMove = !1;
mxGraph.prototype.resetEdgesOnConnect = !0;
mxGraph.prototype.allowLoops = !1;
mxGraph.prototype.defaultLoopStyle = mxEdgeStyle.Loop;
mxGraph.prototype.multigraph = !0;
mxGraph.prototype.connectableEdges = !1;
mxGraph.prototype.allowDanglingEdges = !0;
mxGraph.prototype.cloneInvalidEdges = !1;
mxGraph.prototype.disconnectOnMove = !0;
mxGraph.prototype.labelsVisible = !0;
mxGraph.prototype.htmlLabels = !1;
mxGraph.prototype.swimlaneSelectionEnabled = !0;
mxGraph.prototype.swimlaneNesting = !0;
mxGraph.prototype.swimlaneIndicatorColorAttribute = mxConstants.STYLE_FILLCOLOR;
mxGraph.prototype.imageBundles = null;
mxGraph.prototype.minFitScale = 0.1;
mxGraph.prototype.maxFitScale = 8;
mxGraph.prototype.panDx = 0;
mxGraph.prototype.panDy = 0;
mxGraph.prototype.collapsedImage = new mxImage(mxClient.imageBasePath + "/toggle_expand.png", 48, 48);
mxGraph.prototype.expandedImage = new mxImage(mxClient.imageBasePath + "/toggle_collapse.png", 48, 48);
mxGraph.prototype.warningImage = new mxImage(mxClient.imageBasePath + "/warning" + (mxClient.IS_MAC ? ".png" : ".gif"), 16, 16);
mxGraph.prototype.alreadyConnectedResource = "none" != mxClient.language ? "alreadyConnected" : "";
mxGraph.prototype.containsValidationErrorsResource = "none" != mxClient.language ? "containsValidationErrors" : "";
mxGraph.prototype.collapseExpandResource = "none" != mxClient.language ? "collapse-expand" : "";
mxGraph.prototype.init = function (a) {
    this.container = a;
    this.cellEditor = this.createCellEditor();
    this.view.init();
    this.sizeDidChange();
    if (mxClient.IS_IE) {
        mxEvent.addListener(window, "unload", mxUtils.bind(this, function () {
            this.destroy()
        }));
        mxEvent.addListener(a, "selectstart", mxUtils.bind(this, function () {
            return this.isEditing()
        }))
    }
};
mxGraph.prototype.createHandlers = function () {
    this.tooltipHandler = new mxTooltipHandler(this);
    this.tooltipHandler.setEnabled(false);
    this.panningHandler = new mxPanningHandler(this);
    this.panningHandler.panningEnabled = false;
    this.selectionCellsHandler = new mxSelectionCellsHandler(this);
    this.connectionHandler = new mxConnectionHandler(this);
    this.connectionHandler.setEnabled(false);
    this.graphHandler = new mxGraphHandler(this)
};
mxGraph.prototype.createSelectionModel = function () {
    return new mxGraphSelectionModel(this)
};
mxGraph.prototype.createStylesheet = function () {
    return new mxStylesheet
};
mxGraph.prototype.createGraphView = function () {
    return new mxGraphView(this)
};
mxGraph.prototype.createCellRenderer = function () {
    return new mxCellRenderer
};
mxGraph.prototype.createCellEditor = function () {
    return new mxCellEditor(this)
};
mxGraph.prototype.getModel = function () {
    return this.model
};
mxGraph.prototype.getView = function () {
    return this.view
};
mxGraph.prototype.getStylesheet = function () {
    return this.stylesheet
};
mxGraph.prototype.setStylesheet = function (a) {
    this.stylesheet = a
};
mxGraph.prototype.getSelectionModel = function () {
    return this.selectionModel
};
mxGraph.prototype.setSelectionModel = function (a) {
    this.selectionModel = a
};
mxGraph.prototype.getSelectionCellsForChanges = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        if (d.constructor != mxRootChange) {
            var e = null;
            if (d instanceof mxChildChange && d.previous == null)e = d.child; else if (d.cell != null && d.cell instanceof mxCell)e = d.cell;
            e != null && mxUtils.indexOf(b, e) < 0 && b.push(e)
        }
    }
    return this.getModel().getTopmostCells(b)
};
mxGraph.prototype.graphModelChanged = function (a) {
    for (var b = 0; b < a.length; b++)this.processChange(a[b]);
    this.removeSelectionCells(this.getRemovedCellsForChanges(a));
    this.view.validate();
    this.sizeDidChange()
};
mxGraph.prototype.getRemovedCellsForChanges = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        if (d instanceof mxRootChange)break; else d instanceof mxChildChange ? d.previous != null && d.parent == null && (b = b.concat(this.model.getDescendants(d.child))) : d instanceof mxVisibleChange && (b = b.concat(this.model.getDescendants(d.cell)))
    }
    return b
};
mxGraph.prototype.processChange = function (a) {
    if (a instanceof mxRootChange) {
        this.clearSelection();
        this.removeStateForCell(a.previous);
        if (this.resetViewOnRootChange) {
            this.view.scale = 1;
            this.view.translate.x = 0;
            this.view.translate.y = 0
        }
        this.fireEvent(new mxEventObject(mxEvent.ROOT))
    } else if (a instanceof mxChildChange) {
        var b = this.model.getParent(a.child);
        if (b != null)this.view.invalidate(a.child, true, false, a.previous != null); else {
            this.removeStateForCell(a.child);
            this.view.currentRoot == a.child && this.home()
        }
        if (b !=
            a.previous) {
            b != null && this.view.invalidate(b, false, false);
            a.previous != null && this.view.invalidate(a.previous, false, false)
        }
    } else if (a instanceof mxTerminalChange || a instanceof mxGeometryChange)this.view.invalidate(a.cell); else if (a instanceof mxValueChange)this.view.invalidate(a.cell, false, false); else if (a instanceof mxStyleChange) {
        this.view.invalidate(a.cell, true, true, false);
        this.view.removeState(a.cell)
    } else a.cell != null && a.cell instanceof mxCell && this.removeStateForCell(a.cell)
};
mxGraph.prototype.removeStateForCell = function (a) {
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++)this.removeStateForCell(this.model.getChildAt(a, c));
    this.view.removeState(a)
};
mxGraph.prototype.addCellOverlay = function (a, b) {
    if (a.overlays == null)a.overlays = [];
    a.overlays.push(b);
    var c = this.view.getState(a);
    c != null && this.cellRenderer.redraw(c);
    this.fireEvent(new mxEventObject(mxEvent.ADD_OVERLAY, "cell", a, "overlay", b));
    return b
};
mxGraph.prototype.getCellOverlays = function (a) {
    return a.overlays
};
mxGraph.prototype.removeCellOverlay = function (a, b) {
    if (b == null)this.removeCellOverlays(a); else {
        var c = mxUtils.indexOf(a.overlays, b);
        if (c >= 0) {
            a.overlays.splice(c, 1);
            if (a.overlays.length == 0)a.overlays = null;
            c = this.view.getState(a);
            c != null && this.cellRenderer.redraw(c);
            this.fireEvent(new mxEventObject(mxEvent.REMOVE_OVERLAY, "cell", a, "overlay", b))
        } else b = null
    }
    return b
};
mxGraph.prototype.removeCellOverlays = function (a) {
    var b = a.overlays;
    if (b != null) {
        a.overlays = null;
        var c = this.view.getState(a);
        c != null && this.cellRenderer.redraw(c);
        for (c = 0; c < b.length; c++)this.fireEvent(new mxEventObject(mxEvent.REMOVE_OVERLAY, "cell", a, "overlay", b[c]))
    }
    return b
};
mxGraph.prototype.clearCellOverlays = function (a) {
    a = a != null ? a : this.model.getRoot();
    this.removeCellOverlays(a);
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++)this.clearCellOverlays(this.model.getChildAt(a, c))
};
mxGraph.prototype.setCellWarning = function (a, b, c, d) {
    if (b != null && b.length > 0) {
        c = c != null ? c : this.warningImage;
        b = new mxCellOverlay(c, "<font color=red>" + b + "</font>");
        d && b.addListener(mxEvent.CLICK, mxUtils.bind(this, function () {
            this.isEnabled() && this.setSelectionCell(a)
        }));
        return this.addCellOverlay(a, b)
    }
    this.removeCellOverlays(a);
    return null
};
mxGraph.prototype.startEditing = function (a) {
    this.startEditingAtCell(null, a)
};
mxGraph.prototype.startEditingAtCell = function (a, b) {
    if (a == null) {
        a = this.getSelectionCell();
        a != null && !this.isCellEditable(a) && (a = null)
    }
    if (a != null) {
        this.fireEvent(new mxEventObject(mxEvent.START_EDITING, "cell", a, "event", b));
        this.cellEditor.startEditing(a, b)
    }
};
mxGraph.prototype.getEditingValue = function (a) {
    return this.convertValueToString(a)
};
mxGraph.prototype.stopEditing = function (a) {
    this.cellEditor.stopEditing(a)
};
mxGraph.prototype.labelChanged = function (a, b, c) {
    this.model.beginUpdate();
    try {
        this.cellLabelChanged(a, b, this.isAutoSizeCell(a));
        this.fireEvent(new mxEventObject(mxEvent.LABEL_CHANGED, "cell", a, "value", b, "event", c))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellLabelChanged = function (a, b, c) {
    this.model.beginUpdate();
    try {
        this.model.setValue(a, b);
        c && this.cellSizeUpdated(a, false)
    } finally {
        this.model.endUpdate()
    }
};
mxGraph.prototype.escape = function () {
    this.stopEditing(true);
    this.connectionHandler.reset();
    this.graphHandler.reset();
    for (var a = this.getSelectionCells(), b = 0; b < a.length; b++) {
        var c = this.view.getState(a[b]);
        c != null && c.handler != null && c.handler.reset()
    }
};
mxGraph.prototype.click = function (a) {
    var b = a.getEvent(), c = a.getCell(), d = new mxEventObject(mxEvent.CLICK, "event", b, "cell", c);
    a.isConsumed() && d.consume();
    this.fireEvent(d);
    if (this.isEnabled() && !mxEvent.isConsumed(b) && !d.isConsumed())if (c != null)this.selectCellForEvent(c, b); else {
        c = null;
        this.isSwimlaneSelectionEnabled() && (c = this.getSwimlaneAt(a.getGraphX(), a.getGraphY()));
        c != null ? this.selectCellForEvent(c, b) : this.isToggleEvent(b) || this.clearSelection()
    }
};
mxGraph.prototype.dblClick = function (a, b) {
    var c = new mxEventObject(mxEvent.DOUBLE_CLICK, "event", a, "cell", b);
    this.fireEvent(c);
    this.isEnabled() && (!mxEvent.isConsumed(a) && !c.isConsumed() && b != null && this.isCellEditable(b)) && this.startEditingAtCell(b, a)
};
mxGraph.prototype.scrollPointToVisible = function (a, b, c, d) {
    if (!this.timerAutoScroll && (this.ignoreScrollbars || mxUtils.hasScrollbars(this.container))) {
        var e = this.container, d = d != null ? d : 20;
        if (a >= e.scrollLeft && b >= e.scrollTop && a <= e.scrollLeft + e.clientWidth && b <= e.scrollTop + e.clientHeight) {
            var f = e.scrollLeft + e.clientWidth - a;
            if (f < d) {
                a = e.scrollLeft;
                e.scrollLeft = e.scrollLeft + (d - f);
                if (c && a == e.scrollLeft) {
                    if (this.dialect == mxConstants.DIALECT_SVG) {
                        var a = this.view.getDrawPane().ownerSVGElement, g = this.container.scrollWidth +
                            d - f;
                        a.setAttribute("width", g)
                    } else {
                        g = Math.max(e.clientWidth, e.scrollWidth) + d - f;
                        a = this.view.getCanvas();
                        a.style.width = g + "px"
                    }
                    e.scrollLeft = e.scrollLeft + (d - f)
                }
            } else {
                f = a - e.scrollLeft;
                if (f < d)e.scrollLeft = e.scrollLeft - (d - f)
            }
            f = e.scrollTop + e.clientHeight - b;
            if (f < d) {
                a = e.scrollTop;
                e.scrollTop = e.scrollTop + (d - f);
                if (a == e.scrollTop && c) {
                    if (this.dialect == mxConstants.DIALECT_SVG) {
                        a = this.view.getDrawPane().ownerSVGElement;
                        b = this.container.scrollHeight + d - f;
                        a.setAttribute("height", b)
                    } else {
                        b = Math.max(e.clientHeight, e.scrollHeight) +
                            d - f;
                        a = this.view.getCanvas();
                        a.style.height = b + "px"
                    }
                    e.scrollTop = e.scrollTop + (d - f)
                }
            } else {
                f = b - e.scrollTop;
                if (f < d)e.scrollTop = e.scrollTop - (d - f)
            }
        }
    } else if (this.allowAutoPanning && !this.panningHandler.active) {
        if (this.panningManager == null)this.panningManager = this.createPanningManager();
        this.panningManager.panTo(a + this.panDx, b + this.panDy)
    }
};
mxGraph.prototype.createPanningManager = function () {
    return new mxPanningManager(this)
};
mxGraph.prototype.getBorderSizes = function () {
    function a(a) {
        var b = 0, b = a == "thin" ? 2 : a == "medium" ? 4 : a == "thick" ? 6 : parseInt(a);
        isNaN(b) && (b = 0);
        return b
    }

    var b = mxUtils.getCurrentStyle(this.container), c = new mxRectangle;
    c.x = a(b.borderLeftWidth) + parseInt(b.paddingLeft || 0);
    c.y = a(b.borderTopWidth) + parseInt(b.paddingTop || 0);
    c.width = a(b.borderRightWidth) + parseInt(b.paddingRight || 0);
    c.height = a(b.borderBottomWidth) + parseInt(b.paddingBottom || 0);
    return c
};
mxGraph.prototype.getPreferredPageSize = function (a, b, c) {
    var a = this.view.scale, d = this.view.translate, e = this.pageFormat, f = a * this.pageScale, e = new mxRectangle(0, 0, e.width * f, e.height * f), b = this.pageBreaksVisible ? Math.ceil(b / e.width) : 1, c = this.pageBreaksVisible ? Math.ceil(c / e.height) : 1;
    return new mxRectangle(0, 0, b * e.width + 2 + d.x / a, c * e.height + 2 + d.y / a)
};
mxGraph.prototype.sizeDidChange = function () {
    var a = this.getGraphBounds();
    if (this.container != null) {
        var b = this.getBorder(), c = Math.max(0, a.x + a.width + 1 + b), b = Math.max(0, a.y + a.height + 1 + b);
        if (this.minimumContainerSize != null) {
            c = Math.max(c, this.minimumContainerSize.width);
            b = Math.max(b, this.minimumContainerSize.height)
        }
        this.resizeContainer && this.doResizeContainer(c, b);
        if (this.preferPageSize || !mxClient.IS_IE && this.pageVisible) {
            var d = this.getPreferredPageSize(a, c, b);
            if (d != null) {
                c = d.width;
                b = d.height
            }
        }
        if (this.minimumGraphSize !=
            null) {
            c = Math.max(c, this.minimumGraphSize.width * this.view.scale);
            b = Math.max(b, this.minimumGraphSize.height * this.view.scale)
        }
        c = Math.ceil(c - 1);
        b = Math.ceil(b - 1);
        if (this.dialect == mxConstants.DIALECT_SVG) {
            d = this.view.getDrawPane().ownerSVGElement;
            d.style.minWidth = Math.max(1, c) + "px";
            d.style.minHeight = Math.max(1, b) + "px"
        } else if (mxClient.IS_QUIRKS)this.view.updateHtmlCanvasSize(Math.max(1, c), Math.max(1, b)); else {
            this.view.canvas.style.minWidth = Math.max(1, c) + "px";
            this.view.canvas.style.minHeight = Math.max(1,
                b) + "px"
        }
        this.updatePageBreaks(this.pageBreaksVisible, c - 1, b - 1)
    }
    this.fireEvent(new mxEventObject(mxEvent.SIZE, "bounds", a))
};
mxGraph.prototype.doResizeContainer = function (a, b) {
    if (mxClient.IS_IE)if (mxClient.IS_QUIRKS)var c = this.getBorderSizes(), a = a + Math.max(2, c.x + c.width + 1), b = b + Math.max(2, c.y + c.height + 1); else if (document.documentMode >= 9) {
        a = a + 3;
        b = b + 5
    } else {
        a = a + 1;
        b = b + 1
    } else b = b + 1;
    if (this.maximumContainerSize != null) {
        a = Math.min(this.maximumContainerSize.width, a);
        b = Math.min(this.maximumContainerSize.height, b)
    }
    this.container.style.width = Math.ceil(a) + "px";
    this.container.style.height = Math.ceil(b) + "px"
};
mxGraph.prototype.updatePageBreaks = function (a, b, c) {
    var d = this.view.scale, e = this.view.translate, f = this.pageFormat, g = d * this.pageScale, e = new mxRectangle(d * e.x, d * e.y, f.width * g, f.height * g), a = a && Math.min(e.width, e.height) > this.minPageBreakDist;
    e.x = mxUtils.mod(e.x, e.width);
    e.y = mxUtils.mod(e.y, e.height);
    f = a ? Math.ceil((b - e.x) / e.width) : 0;
    a = a ? Math.ceil((c - e.y) / e.height) : 0;
    if (this.horizontalPageBreaks == null && f > 0)this.horizontalPageBreaks = [];
    if (this.horizontalPageBreaks != null) {
        for (g = 0; g <= f; g++) {
            var h = [new mxPoint(e.x +
                g * e.width, 1), new mxPoint(e.x + g * e.width, c)];
            if (this.horizontalPageBreaks[g] != null) {
                this.horizontalPageBreaks[g].scale = 1;
                this.horizontalPageBreaks[g].points = h;
                this.horizontalPageBreaks[g].redraw()
            } else {
                h = new mxPolyline(h, this.pageBreakColor, this.scale);
                h.dialect = this.dialect;
                h.isDashed = this.pageBreakDashed;
                h.scale = d;
                h.crisp = true;
                h.init(this.view.backgroundPane);
                h.redraw();
                this.horizontalPageBreaks[g] = h
            }
        }
        for (g = f; g < this.horizontalPageBreaks.length; g++)this.horizontalPageBreaks[g].destroy();
        this.horizontalPageBreaks.splice(f,
            this.horizontalPageBreaks.length - f)
    }
    if (this.verticalPageBreaks == null && a > 0)this.verticalPageBreaks = [];
    if (this.verticalPageBreaks != null) {
        for (g = 0; g <= a; g++) {
            h = [new mxPoint(1, e.y + g * e.height), new mxPoint(b, e.y + g * e.height)];
            if (this.verticalPageBreaks[g] != null) {
                this.verticalPageBreaks[g].scale = 1;
                this.verticalPageBreaks[g].points = h;
                this.verticalPageBreaks[g].redraw()
            } else {
                h = new mxPolyline(h, this.pageBreakColor, d);
                h.dialect = this.dialect;
                h.isDashed = this.pageBreakDashed;
                h.scale = d;
                h.crisp = true;
                h.init(this.view.backgroundPane);
                h.redraw();
                this.verticalPageBreaks[g] = h
            }
        }
        for (g = a; g < this.verticalPageBreaks.length; g++)this.verticalPageBreaks[g].destroy();
        this.verticalPageBreaks.splice(a, this.verticalPageBreaks.length - a)
    }
};
mxGraph.prototype.getCellStyle = function (a) {
    var b = this.model.getStyle(a), c = null, c = this.model.isEdge(a) ? this.stylesheet.getDefaultEdgeStyle() : this.stylesheet.getDefaultVertexStyle();
    b != null && (c = this.postProcessCellStyle(this.stylesheet.getCellStyle(b, c)));
    if (c == null)c = mxGraph.prototype.EMPTY_ARRAY;
    return c
};
mxGraph.prototype.postProcessCellStyle = function (a) {
    if (a != null) {
        var b = a[mxConstants.STYLE_IMAGE], c = this.getImageFromBundles(b);
        c != null ? a[mxConstants.STYLE_IMAGE] = c : c = b;
        if (c != null && c.substring(0, 11) == "data:image/") {
            b = c.indexOf(",");
            b > 0 && (c = c.substring(0, b) + ";base64," + c.substring(b + 1));
            a[mxConstants.STYLE_IMAGE] = c
        }
    }
    return a
};
mxGraph.prototype.setCellStyle = function (a, b) {
    b = b || this.getSelectionCells();
    if (b != null) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < b.length; c++)this.model.setStyle(b[c], a)
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.toggleCellStyle = function (a, b, c) {
    c = c || this.getSelectionCell();
    this.toggleCellStyles(a, b, [c])
};
mxGraph.prototype.toggleCellStyles = function (a, b, c) {
    b = b != null ? b : false;
    c = c || this.getSelectionCells();
    if (c != null && c.length > 0) {
        var d = this.view.getState(c[0]), d = d != null ? d.style : this.getCellStyle(c[0]);
        if (d != null) {
            b = mxUtils.getValue(d, a, b) ? 0 : 1;
            this.setCellStyles(a, b, c)
        }
    }
};
mxGraph.prototype.setCellStyles = function (a, b, c) {
    c = c || this.getSelectionCells();
    mxUtils.setCellStyles(this.model, c, a, b)
};
mxGraph.prototype.toggleCellStyleFlags = function (a, b, c) {
    this.setCellStyleFlags(a, b, null, c)
};
mxGraph.prototype.setCellStyleFlags = function (a, b, c, d) {
    d = d || this.getSelectionCells();
    if (d != null && d.length > 0) {
        if (c == null) {
            var e = this.view.getState(d[0]), e = e != null ? e.style : this.getCellStyle(d[0]);
            e != null && (c = (parseInt(e[a] || 0) & b) != b)
        }
        mxUtils.setCellStyleFlags(this.model, d, a, b, c)
    }
};
mxGraph.prototype.alignCells = function (a, b, c) {
    b == null && (b = this.getSelectionCells());
    if (b != null && b.length > 1) {
        if (c == null)for (var d = 0; d < b.length; d++) {
            var e = this.getCellGeometry(b[d]);
            if (e != null && !this.model.isEdge(b[d]))if (c == null)if (a == mxConstants.ALIGN_CENTER) {
                c = e.x + e.width / 2;
                break
            } else if (a == mxConstants.ALIGN_RIGHT)c = e.x + e.width; else if (a == mxConstants.ALIGN_TOP)c = e.y; else if (a == mxConstants.ALIGN_MIDDLE) {
                c = e.y + e.height / 2;
                break
            } else c = a == mxConstants.ALIGN_BOTTOM ? e.y + e.height : e.x; else c = a == mxConstants.ALIGN_RIGHT ?
                Math.max(c, e.x + e.width) : a == mxConstants.ALIGN_TOP ? Math.min(c, e.y) : a == mxConstants.ALIGN_BOTTOM ? Math.max(c, e.y + e.height) : Math.min(c, e.x)
        }
        if (c != null) {
            this.model.beginUpdate();
            try {
                for (d = 0; d < b.length; d++) {
                    e = this.getCellGeometry(b[d]);
                    if (e != null && !this.model.isEdge(b[d])) {
                        e = e.clone();
                        a == mxConstants.ALIGN_CENTER ? e.x = c - e.width / 2 : a == mxConstants.ALIGN_RIGHT ? e.x = c - e.width : a == mxConstants.ALIGN_TOP ? e.y = c : a == mxConstants.ALIGN_MIDDLE ? e.y = c - e.height / 2 : a == mxConstants.ALIGN_BOTTOM ? e.y = c - e.height : e.x = c;
                        this.model.setGeometry(b[d],
                            e)
                    }
                }
                this.fireEvent(new mxEventObject(mxEvent.ALIGN_CELLS, "align", a, "cells", b))
            } finally {
                this.model.endUpdate()
            }
        }
    }
    return b
};
mxGraph.prototype.flipEdge = function (a) {
    if (a != null && this.alternateEdgeStyle != null) {
        this.model.beginUpdate();
        try {
            var b = this.model.getStyle(a);
            b == null || b.length == 0 ? this.model.setStyle(a, this.alternateEdgeStyle) : this.model.setStyle(a, null);
            this.resetEdge(a);
            this.fireEvent(new mxEventObject(mxEvent.FLIP_EDGE, "edge", a))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.addImageBundle = function (a) {
    this.imageBundles.push(a)
};
mxGraph.prototype.removeImageBundle = function (a) {
    for (var b = [], c = 0; c < this.imageBundles.length; c++)this.imageBundles[c] != a && b.push(this.imageBundles[c]);
    this.imageBundles = b
};
mxGraph.prototype.getImageFromBundles = function (a) {
    if (a != null)for (var b = 0; b < this.imageBundles.length; b++) {
        var c = this.imageBundles[b].getImage(a);
        if (c != null)return c
    }
    return null
};
mxGraph.prototype.orderCells = function (a, b) {
    b == null && (b = mxUtils.sortCells(this.getSelectionCells(), true));
    this.model.beginUpdate();
    try {
        this.cellsOrdered(b, a);
        this.fireEvent(new mxEventObject(mxEvent.ORDER_CELLS, "back", a, "cells", b))
    } finally {
        this.model.endUpdate()
    }
    return b
};
mxGraph.prototype.cellsOrdered = function (a, b) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++) {
                var d = this.model.getParent(a[c]);
                b ? this.model.add(d, a[c], c) : this.model.add(d, a[c], this.model.getChildCount(d) - 1)
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_ORDERED, "back", b, "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.groupCells = function (a, b, c) {
    c == null && (c = mxUtils.sortCells(this.getSelectionCells(), true));
    c = this.getCellsForGroup(c);
    a == null && (a = this.createGroupCell(c));
    var d = this.getBoundsForGroup(a, c, b);
    if (c.length > 0 && d != null) {
        var e = this.model.getParent(a);
        e == null && (e = this.model.getParent(c[0]));
        this.model.beginUpdate();
        try {
            this.getCellGeometry(a) == null && this.model.setGeometry(a, new mxGeometry);
            var f = this.model.getChildCount(a);
            this.cellsAdded(c, a, f, null, null, false, false);
            this.cellsMoved(c, -d.x,
                -d.y, false, true);
            f = this.model.getChildCount(e);
            this.cellsAdded([a], e, f, null, null, false);
            this.cellsResized([a], [d]);
            this.fireEvent(new mxEventObject(mxEvent.GROUP_CELLS, "group", a, "border", b, "cells", c))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.getCellsForGroup = function (a) {
    var b = [];
    if (a != null && a.length > 0) {
        var c = this.model.getParent(a[0]);
        b.push(a[0]);
        for (var d = 1; d < a.length; d++)this.model.getParent(a[d]) == c && b.push(a[d])
    }
    return b
};
mxGraph.prototype.getBoundsForGroup = function (a, b, c) {
    b = this.getBoundingBoxFromGeometry(b);
    if (b != null) {
        if (this.isSwimlane(a)) {
            a = this.getStartSize(a);
            b.x = b.x - a.width;
            b.y = b.y - a.height;
            b.width = b.width + a.width;
            b.height = b.height + a.height
        }
        b.x = b.x - c;
        b.y = b.y - c;
        b.width = b.width + 2 * c;
        b.height = b.height + 2 * c
    }
    return b
};
mxGraph.prototype.createGroupCell = function () {
    var a = new mxCell("");
    a.setVertex(true);
    a.setConnectable(false);
    return a
};
mxGraph.prototype.ungroupCells = function (a) {
    var b = [];
    if (a == null) {
        for (var a = this.getSelectionCells(), c = [], d = 0; d < a.length; d++)this.model.getChildCount(a[d]) > 0 && c.push(a[d]);
        a = c
    }
    if (a != null && a.length > 0) {
        this.model.beginUpdate();
        try {
            for (d = 0; d < a.length; d++) {
                var e = this.model.getChildren(a[d]);
                if (e != null && e.length > 0) {
                    var e = e.slice(), f = this.model.getParent(a[d]), g = this.model.getChildCount(f);
                    this.cellsAdded(e, f, g, null, null, true);
                    b = b.concat(e)
                }
            }
            this.cellsRemoved(this.addAllEdges(a));
            this.fireEvent(new mxEventObject(mxEvent.UNGROUP_CELLS,
                "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
    return b
};
mxGraph.prototype.removeCellsFromParent = function (a) {
    a == null && (a = this.getSelectionCells());
    this.model.beginUpdate();
    try {
        var b = this.getDefaultParent(), c = this.model.getChildCount(b);
        this.cellsAdded(a, b, c, null, null, true);
        this.fireEvent(new mxEventObject(mxEvent.REMOVE_CELLS_FROM_PARENT, "cells", a))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.updateGroupBounds = function (a, b, c) {
    a == null && (a = this.getSelectionCells());
    b = b != null ? b : 0;
    c = c != null ? c : false;
    this.model.beginUpdate();
    try {
        for (var d = 0; d < a.length; d++) {
            var e = this.getCellGeometry(a[d]);
            if (e != null) {
                var f = this.getChildCells(a[d]);
                if (f != null && f.length > 0) {
                    var g = this.getBoundingBoxFromGeometry(f);
                    if (g.width > 0 && g.height > 0) {
                        var h = this.isSwimlane(a[d]) ? this.getStartSize(a[d]) : new mxRectangle, e = e.clone();
                        if (c) {
                            e.x = e.x + (g.x - h.width - b);
                            e.y = e.y + (g.y - h.height - b)
                        }
                        e.width = g.width + h.width +
                            2 * b;
                        e.height = g.height + h.height + 2 * b;
                        this.model.setGeometry(a[d], e);
                        this.moveCells(f, -g.x + h.width + b, -g.y + h.height + b)
                    }
                }
            }
        }
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cloneCells = function (a, b) {
    var b = b != null ? b : true, c = null;
    if (a != null) {
        for (var d = {}, c = [], e = 0; e < a.length; e++) {
            var f = mxCellPath.create(a[e]);
            d[f] = a[e];
            c.push(a[e])
        }
        if (c.length > 0)for (var f = this.view.scale, g = this.view.translate, c = this.model.cloneCells(a, true), e = 0; e < a.length; e++)if (!b && this.model.isEdge(c[e]) && this.getEdgeValidationError(c[e], this.model.getTerminal(c[e], true), this.model.getTerminal(c[e], false)) != null)c[e] = null; else {
            var h = this.model.getGeometry(c[e]);
            if (h != null) {
                var k = this.view.getState(a[e]),
                    i = this.view.getState(this.model.getParent(a[e]));
                if (k != null && i != null) {
                    var l = i.origin.x, i = i.origin.y;
                    if (this.model.isEdge(c[e])) {
                        for (var k = k.absolutePoints, m = this.model.getTerminal(a[e], true), n = mxCellPath.create(m); m != null && d[n] == null;) {
                            m = this.model.getParent(m);
                            n = mxCellPath.create(m)
                        }
                        m == null && h.setTerminalPoint(new mxPoint(k[0].x / f - g.x, k[0].y / f - g.y), true);
                        m = this.model.getTerminal(a[e], false);
                        for (n = mxCellPath.create(m); m != null && d[n] == null;) {
                            m = this.model.getParent(m);
                            n = mxCellPath.create(m)
                        }
                        if (m == null) {
                            m =
                                k.length - 1;
                            h.setTerminalPoint(new mxPoint(k[m].x / f - g.x, k[m].y / f - g.y), false)
                        }
                        h = h.points;
                        if (h != null)for (k = 0; k < h.length; k++) {
                            h[k].x = h[k].x + l;
                            h[k].y = h[k].y + i
                        }
                    } else {
                        h.x = h.x + l;
                        h.y = h.y + i
                    }
                }
            }
        } else c = []
    }
    return c
};
mxGraph.prototype.insertVertex = function (a, b, c, d, e, f, g, h, k) {
    return this.addCell(this.createVertex(a, b, c, d, e, f, g, h, k), a)
};
mxGraph.prototype.createVertex = function (a, b, c, d, e, f, g, h, k) {
    a = new mxGeometry(d, e, f, g);
    a.relative = k != null ? k : false;
    c = new mxCell(c, a, h);
    c.setId(b);
    c.setVertex(true);
    c.setConnectable(true);
    return c
};
mxGraph.prototype.insertEdge = function (a, b, c, d, e, f) {
    return this.addEdge(this.createEdge(a, b, c, d, e, f), a, d, e)
};
mxGraph.prototype.createEdge = function (a, b, c, d, e, f) {
    a = new mxCell(c, new mxGeometry, f);
    a.setId(b);
    a.setEdge(true);
    a.geometry.relative = true;
    return a
};
mxGraph.prototype.addEdge = function (a, b, c, d, e) {
    return this.addCell(a, b, e, c, d)
};
mxGraph.prototype.addCell = function (a, b, c, d, e) {
    return this.addCells([a], b, c, d, e)[0]
};
mxGraph.prototype.addCells = function (a, b, c, d, e) {
    b == null && (b = this.getDefaultParent());
    c == null && (c = this.model.getChildCount(b));
    this.model.beginUpdate();
    try {
        this.cellsAdded(a, b, c, d, e, false, true);
        this.fireEvent(new mxEventObject(mxEvent.ADD_CELLS, "cells", a, "parent", b, "index", c, "source", d, "target", e))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsAdded = function (a, b, c, d, e, f, g) {
    if (a != null && b != null && c != null) {
        this.model.beginUpdate();
        try {
            for (var h = f ? this.view.getState(b) : null, k = h != null ? h.origin : null, i = new mxPoint(0, 0), h = 0; h < a.length; h++)if (a[h] == null)c--; else {
                var l = this.model.getParent(a[h]);
                if (k != null && a[h] != b && b != l) {
                    var m = this.view.getState(l), n = m != null ? m.origin : i, o = this.model.getGeometry(a[h]);
                    if (o != null) {
                        var p = n.x - k.x, q = n.y - k.y, o = o.clone();
                        o.translate(p, q);
                        if (!o.relative && this.model.isVertex(a[h]) && !this.isAllowNegativeCoordinates()) {
                            o.x =
                                Math.max(0, o.x);
                            o.y = Math.max(0, o.y)
                        }
                        this.model.setGeometry(a[h], o)
                    }
                }
                b == l && c--;
                this.model.add(b, a[h], c + h);
                this.isExtendParentsOnAdd() && this.isExtendParent(a[h]) && this.extendParent(a[h]);
                (g == null || g) && this.constrainChild(a[h]);
                d != null && this.cellConnected(a[h], d, true);
                e != null && this.cellConnected(a[h], e, false)
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_ADDED, "cells", a, "parent", b, "index", c, "source", d, "target", e, "absolute", f))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.removeCells = function (a, b) {
    b = b != null ? b : true;
    a == null && (a = this.getDeletableCells(this.getSelectionCells()));
    b && (a = this.getDeletableCells(this.addAllEdges(a)));
    this.model.beginUpdate();
    try {
        this.cellsRemoved(a);
        this.fireEvent(new mxEventObject(mxEvent.REMOVE_CELLS, "cells", a, "includeEdges", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsRemoved = function (a) {
    if (a != null && a.length > 0) {
        var b = this.view.scale, c = this.view.translate;
        this.model.beginUpdate();
        try {
            for (var d = {}, e = 0; e < a.length; e++) {
                var f = mxCellPath.create(a[e]);
                d[f] = a[e]
            }
            for (e = 0; e < a.length; e++) {
                for (var g = this.getConnections(a[e]), h = 0; h < g.length; h++) {
                    f = mxCellPath.create(g[h]);
                    if (d[f] == null) {
                        var k = this.model.getGeometry(g[h]);
                        if (k != null) {
                            var i = this.view.getState(g[h]);
                            if (i != null) {
                                var k = k.clone(), l = i.getVisibleTerminal(true) == a[e], m = i.absolutePoints, n = l ? 0 : m.length -
                                    1;
                                k.setTerminalPoint(new mxPoint(m[n].x / b - c.x, m[n].y / b - c.y), l);
                                this.model.setTerminal(g[h], null, l);
                                this.model.setGeometry(g[h], k)
                            }
                        }
                    }
                }
                this.model.remove(a[e])
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_REMOVED, "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.splitEdge = function (a, b, c, d, e) {
    d = d || 0;
    e = e || 0;
    c == null && (c = this.cloneCells([a])[0]);
    var f = this.model.getParent(a), g = this.model.getTerminal(a, true);
    this.model.beginUpdate();
    try {
        this.cellsMoved(b, d, e, false, false);
        this.cellsAdded(b, f, this.model.getChildCount(f), null, null, true);
        this.cellsAdded([c], f, this.model.getChildCount(f), g, b[0], false);
        this.cellConnected(a, b[0], true);
        this.fireEvent(new mxEventObject(mxEvent.SPLIT_EDGE, "edge", a, "cells", b, "newEdge", c, "dx", d, "dy", e))
    } finally {
        this.model.endUpdate()
    }
    return c
};
mxGraph.prototype.toggleCells = function (a, b, c) {
    b == null && (b = this.getSelectionCells());
    c && (b = this.addAllEdges(b));
    this.model.beginUpdate();
    try {
        this.cellsToggled(b, a);
        this.fireEvent(new mxEventObject(mxEvent.TOGGLE_CELLS, "show", a, "cells", b, "includeEdges", c))
    } finally {
        this.model.endUpdate()
    }
    return b
};
mxGraph.prototype.cellsToggled = function (a, b) {
    if (a != null && a.length > 0) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++)this.model.setVisible(a[c], b)
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.foldCells = function (a, b, c, d) {
    b = b != null ? b : false;
    c == null && (c = this.getFoldableCells(this.getSelectionCells(), a));
    this.stopEditing(false);
    this.model.beginUpdate();
    try {
        this.cellsFolded(c, a, b, d);
        this.fireEvent(new mxEventObject(mxEvent.FOLD_CELLS, "collapse", a, "recurse", b, "cells", c))
    } finally {
        this.model.endUpdate()
    }
    return c
};
mxGraph.prototype.cellsFolded = function (a, b, c, d) {
    if (a != null && a.length > 0) {
        this.model.beginUpdate();
        try {
            for (var e = 0; e < a.length; e++)if ((!d || this.isCellFoldable(a[e], b)) && b != this.isCellCollapsed(a[e])) {
                this.model.setCollapsed(a[e], b);
                this.swapBounds(a[e], b);
                this.isExtendParent(a[e]) && this.extendParent(a[e]);
                c && this.foldCells(this.model.getChildren(a[e]), b, c)
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_FOLDED, "cells", a, "collapse", b, "recurse", c))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.swapBounds = function (a, b) {
    if (a != null) {
        var c = this.model.getGeometry(a);
        if (c != null) {
            c = c.clone();
            this.updateAlternateBounds(a, c, b);
            c.swap();
            this.model.setGeometry(a, c)
        }
    }
};
mxGraph.prototype.updateAlternateBounds = function (a, b) {
    if (a != null && b != null)if (b.alternateBounds == null) {
        var c = b;
        if (this.collapseToPreferredSize) {
            var d = this.getPreferredSizeForCell(a);
            if (d != null) {
                c = d;
                d = this.view.getState(a);
                d = d != null ? d.style : this.getCellStyle(a);
                d = mxUtils.getValue(d, mxConstants.STYLE_STARTSIZE);
                if (d > 0)c.height = Math.max(c.height, d)
            }
        }
        b.alternateBounds = new mxRectangle(b.x, b.y, c.width, c.height)
    } else {
        b.alternateBounds.x = b.x;
        b.alternateBounds.y = b.y
    }
};
mxGraph.prototype.addAllEdges = function (a) {
    var b = a.slice();
    return b = b.concat(this.getAllEdges(a))
};
mxGraph.prototype.getAllEdges = function (a) {
    var b = [];
    if (a != null)for (var c = 0; c < a.length; c++) {
        for (var d = this.model.getEdgeCount(a[c]), e = 0; e < d; e++)b.push(this.model.getEdgeAt(a[c], e));
        d = this.model.getChildren(a[c]);
        b = b.concat(this.getAllEdges(d))
    }
    return b
};
mxGraph.prototype.updateCellSize = function (a, b) {
    b = b != null ? b : false;
    this.model.beginUpdate();
    try {
        this.cellSizeUpdated(a, b);
        this.fireEvent(new mxEventObject(mxEvent.UPDATE_CELL_SIZE, "cell", a, "ignoreChildren", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellSizeUpdated = function (a, b) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            var c = this.getPreferredSizeForCell(a), d = this.model.getGeometry(a);
            if (c != null && d != null) {
                var e = this.isCellCollapsed(a), d = d.clone();
                if (this.isSwimlane(a)) {
                    var f = this.view.getState(a), g = f != null ? f.style : this.getCellStyle(a), h = this.model.getStyle(a);
                    h == null && (h = "");
                    if (mxUtils.getValue(g, mxConstants.STYLE_HORIZONTAL, true)) {
                        h = mxUtils.setStyle(h, mxConstants.STYLE_STARTSIZE, c.height + 8);
                        if (e)d.height = c.height + 8;
                        d.width =
                            c.width
                    } else {
                        h = mxUtils.setStyle(h, mxConstants.STYLE_STARTSIZE, c.width + 8);
                        if (e)d.width = c.width + 8;
                        d.height = c.height
                    }
                    this.model.setStyle(a, h)
                } else {
                    d.width = c.width;
                    d.height = c.height
                }
                if (!b && !e) {
                    var k = this.view.getBounds(this.model.getChildren(a));
                    if (k != null) {
                        var i = this.view.translate, l = this.view.scale, m = (k.y + k.height) / l - d.y - i.y;
                        d.width = Math.max(d.width, (k.x + k.width) / l - d.x - i.x);
                        d.height = Math.max(d.height, m)
                    }
                }
                this.cellsResized([a], [d])
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getPreferredSizeForCell = function (a) {
    var b = null;
    if (a != null) {
        var c = this.view.getState(a), d = c != null ? c.style : this.getCellStyle(a);
        if (d != null && !this.model.isEdge(a)) {
            var e = d[mxConstants.STYLE_FONTSIZE] || mxConstants.DEFAULT_FONTSIZE, f = 0, b = 0;
            if ((this.getImage(c) != null || d[mxConstants.STYLE_IMAGE] != null) && d[mxConstants.STYLE_SHAPE] == mxConstants.SHAPE_LABEL) {
                d[mxConstants.STYLE_VERTICAL_ALIGN] == mxConstants.ALIGN_MIDDLE && (f = f + (parseFloat(d[mxConstants.STYLE_IMAGE_WIDTH]) || mxLabel.prototype.imageSize));
                d[mxConstants.STYLE_ALIGN] != mxConstants.ALIGN_CENTER && (b = b + (parseFloat(d[mxConstants.STYLE_IMAGE_HEIGHT]) || mxLabel.prototype.imageSize))
            }
            f = f + 2 * (d[mxConstants.STYLE_SPACING] || 0);
            f = f + (d[mxConstants.STYLE_SPACING_LEFT] || 0);
            f = f + (d[mxConstants.STYLE_SPACING_RIGHT] || 0);
            b = b + 2 * (d[mxConstants.STYLE_SPACING] || 0);
            b = b + (d[mxConstants.STYLE_SPACING_TOP] || 0);
            b = b + (d[mxConstants.STYLE_SPACING_BOTTOM] || 0);
            c = this.getFoldingImage(c);
            c != null && (f = f + (c.width + 8));
            c = this.getLabel(a);
            if (c != null && c.length > 0) {
                this.isHtmlLabel(a) ||
                (c = c.replace(/\n/g, "<br>"));
                e = mxUtils.getSizeForString(c, e, d[mxConstants.STYLE_FONTFAMILY]);
                a = e.width + f;
                b = e.height + b;
                if (!mxUtils.getValue(d, mxConstants.STYLE_HORIZONTAL, true)) {
                    d = b;
                    b = a;
                    a = d
                }
                if (this.gridEnabled) {
                    a = this.snap(a + this.gridSize / 2);
                    b = this.snap(b + this.gridSize / 2)
                }
                b = new mxRectangle(0, 0, a, b)
            } else {
                d = 4 * this.gridSize;
                b = new mxRectangle(0, 0, d, d)
            }
        }
    }
    return b
};
mxGraph.prototype.handleGesture = function (a, b) {
    if (Math.abs(1 - b.scale) > 0.2) {
        var c = this.view.scale, d = this.view.translate, e = a.width * b.scale, f = a.height * b.scale, g = a.y - (f - a.height) / 2, c = new mxRectangle(this.snap((a.x - (e - a.width) / 2) / c) - d.x, this.snap(g / c) - d.y, this.snap(e / c), this.snap(f / c));
        this.resizeCell(a.cell, c)
    }
};
mxGraph.prototype.resizeCell = function (a, b) {
    return this.resizeCells([a], [b])[0]
};
mxGraph.prototype.resizeCells = function (a, b) {
    this.model.beginUpdate();
    try {
        this.cellsResized(a, b);
        this.fireEvent(new mxEventObject(mxEvent.RESIZE_CELLS, "cells", a, "bounds", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsResized = function (a, b) {
    if (a != null && b != null && a.length == b.length) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++) {
                var d = b[c], e = this.model.getGeometry(a[c]);
                if (e != null && (e.x != d.x || e.y != d.y || e.width != d.width || e.height != d.height)) {
                    e = e.clone();
                    if (e.relative) {
                        var f = e.offset;
                        if (f != null) {
                            f.x = f.x + (d.x - e.x);
                            f.y = f.y + (d.y - e.y)
                        }
                    } else {
                        e.x = d.x;
                        e.y = d.y
                    }
                    e.width = d.width;
                    e.height = d.height;
                    if (!e.relative && this.model.isVertex(a[c]) && !this.isAllowNegativeCoordinates()) {
                        e.x = Math.max(0, e.x);
                        e.y = Math.max(0, e.y)
                    }
                    this.model.setGeometry(a[c], e);
                    this.isExtendParent(a[c]) && this.extendParent(a[c])
                }
            }
            this.resetEdgesOnResize && this.resetEdges(a);
            this.fireEvent(new mxEventObject(mxEvent.CELLS_RESIZED, "cells", a, "bounds", b))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.extendParent = function (a) {
    if (a != null) {
        var b = this.model.getParent(a), c = this.model.getGeometry(b);
        if (b != null && c != null && !this.isCellCollapsed(b)) {
            a = this.model.getGeometry(a);
            if (a != null && (c.width < a.x + a.width || c.height < a.y + a.height)) {
                c = c.clone();
                c.width = Math.max(c.width, a.x + a.width);
                c.height = Math.max(c.height, a.y + a.height);
                this.cellsResized([b], [c])
            }
        }
    }
};
mxGraph.prototype.importCells = function (a, b, c, d, e) {
    return this.moveCells(a, b, c, true, d, e)
};
mxGraph.prototype.moveCells = function (a, b, c, d, e, f) {
    b = b != null ? b : 0;
    c = c != null ? c : 0;
    d = d != null ? d : false;
    if (a != null && (b != 0 || c != 0 || d || e != null)) {
        this.model.beginUpdate();
        try {
            if (d) {
                a = this.cloneCells(a, this.isCloneInvalidEdges());
                e == null && (e = this.getDefaultParent())
            }
            var g = this.isAllowNegativeCoordinates();
            e != null && this.setAllowNegativeCoordinates(true);
            this.cellsMoved(a, b, c, !d && this.isDisconnectOnMove() && this.isAllowDanglingEdges(), e == null);
            this.setAllowNegativeCoordinates(g);
            if (e != null) {
                var h = this.model.getChildCount(e);
                this.cellsAdded(a, e, h, null, null, true)
            }
            this.fireEvent(new mxEventObject(mxEvent.MOVE_CELLS, "cells", a, "dx", b, "dy", c, "clone", d, "target", e, "event", f))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.cellsMoved = function (a, b, c, d, e) {
    if (a != null && (b != 0 || c != 0)) {
        this.model.beginUpdate();
        try {
            d && this.disconnectGraph(a);
            for (var f = 0; f < a.length; f++) {
                this.translateCell(a[f], b, c);
                e && this.constrainChild(a[f])
            }
            this.resetEdgesOnMove && this.resetEdges(a);
            this.fireEvent(new mxEventObject(mxEvent.CELLS_MOVED, "cells", a, "dx", c, "dy", c, "disconnect", d))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.translateCell = function (a, b, c) {
    var d = this.model.getGeometry(a);
    if (d != null) {
        d = d.clone();
        d.translate(b, c);
        if (!d.relative && this.model.isVertex(a) && !this.isAllowNegativeCoordinates()) {
            d.x = Math.max(0, d.x);
            d.y = Math.max(0, d.y)
        }
        if (d.relative && !this.model.isEdge(a))if (d.offset == null)d.offset = new mxPoint(b, c); else {
            d.offset.x = d.offset.x + b;
            d.offset.y = d.offset.y + c
        }
        this.model.setGeometry(a, d)
    }
};
mxGraph.prototype.getCellContainmentArea = function (a) {
    if (a != null && !this.model.isEdge(a)) {
        var b = this.model.getParent(a);
        if (b == this.getDefaultParent() || b == this.getCurrentRoot())return this.getMaximumGraphBounds();
        if (b != null && b != this.getDefaultParent()) {
            var c = this.model.getGeometry(b);
            if (c != null) {
                var d = a = 0, e = c.width, c = c.height;
                if (this.isSwimlane(b)) {
                    b = this.getStartSize(b);
                    a = b.width;
                    e = e - b.width;
                    d = b.height;
                    c = c - b.height
                }
                return new mxRectangle(a, d, e, c)
            }
        }
    }
    return null
};
mxGraph.prototype.getMaximumGraphBounds = function () {
    return this.maximumGraphBounds
};
mxGraph.prototype.constrainChild = function (a) {
    if (a != null) {
        var b = this.model.getGeometry(a), c = this.isConstrainChild(a) ? this.getCellContainmentArea(a) : this.getMaximumGraphBounds();
        if (b != null && c != null && !b.relative && (b.x < c.x || b.y < c.y || c.width < b.x + b.width || c.height < b.y + b.height)) {
            a = this.getOverlap(a);
            if (c.width > 0)b.x = Math.min(b.x, c.x + c.width - (1 - a) * b.width);
            if (c.height > 0)b.y = Math.min(b.y, c.y + c.height - (1 - a) * b.height);
            b.x = Math.max(b.x, c.x - b.width * a);
            b.y = Math.max(b.y, c.y - b.height * a)
        }
    }
};
mxGraph.prototype.resetEdges = function (a) {
    if (a != null) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = mxCellPath.create(a[c]);
            b[d] = a[c]
        }
        this.model.beginUpdate();
        try {
            for (c = 0; c < a.length; c++) {
                var e = this.model.getEdges(a[c]);
                if (e != null)for (d = 0; d < e.length; d++) {
                    var f = this.view.getState(e[d]), g = f != null ? f.getVisibleTerminal(true) : this.view.getVisibleTerminal(e[d], true), h = f != null ? f.getVisibleTerminal(false) : this.view.getVisibleTerminal(e[d], false), k = mxCellPath.create(g), i = mxCellPath.create(h);
                    (b[k] == null || b[i] == null) &&
                    this.resetEdge(e[d])
                }
                this.resetEdges(this.model.getChildren(a[c]))
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.resetEdge = function (a) {
    var b = this.model.getGeometry(a);
    if (b != null && b.points != null && b.points.length > 0) {
        b = b.clone();
        b.points = [];
        this.model.setGeometry(a, b)
    }
    return a
};
mxGraph.prototype.getAllConnectionConstraints = function (a) {
    return a != null && (a.shape != null && a.shape instanceof mxStencilShape) && a.shape.stencil != null ? a.shape.stencil.constraints : null
};
mxGraph.prototype.getConnectionConstraint = function (a, b, c) {
    var b = null, d = a.style[c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X];
    if (d != null) {
        var e = a.style[c ? mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y];
        e != null && (b = new mxPoint(parseFloat(d), parseFloat(e)))
    }
    d = false;
    b != null && (d = mxUtils.getValue(a.style, c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, true));
    return new mxConnectionConstraint(b, d)
};
mxGraph.prototype.setConnectionConstraint = function (a, b, c, d) {
    if (d != null) {
        this.model.beginUpdate();
        try {
            if (d == null || d.point == null) {
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X, null, [a]);
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y, null, [a]);
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, null, [a])
            } else if (d.point != null) {
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X, d.point.x, [a]);
                this.setCellStyles(c ?
                    mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y, d.point.y, [a]);
                d.perimeter ? this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, null, [a]) : this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, "0", [a])
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getConnectionPoint = function (a, b) {
    var c = null;
    if (a != null) {
        var d = this.view.getPerimeterBounds(a), e = new mxPoint(d.getCenterX(), d.getCenterY()), f = a.style[mxConstants.STYLE_DIRECTION], g = 0;
        if (f != null) {
            f == "north" ? g = g + 270 : f == "west" ? g = g + 180 : f == "south" && (g = g + 90);
            if (f == "north" || f == "south") {
                d.x = d.x + (d.width / 2 - d.height / 2);
                d.y = d.y + (d.height / 2 - d.width / 2);
                var h = d.width;
                d.width = d.height;
                d.height = h
            }
        }
        if (b.point != null) {
            var k = c = 1, i = 0, l = 0;
            if (a.shape instanceof mxStencilShape) {
                var m = a.style[mxConstants.STYLE_STENCIL_FLIPH],
                    n = a.style[mxConstants.STYLE_STENCIL_FLIPV];
                if (f == "north" || f == "south") {
                    h = m;
                    m = n;
                    n = h
                }
                if (m) {
                    c = -1;
                    i = -d.width
                }
                if (n) {
                    k = -1;
                    l = -d.height
                }
            }
            c = new mxPoint(d.x + b.point.x * d.width * c - i, d.y + b.point.y * d.height * k - l)
        }
        f = a.style[mxConstants.STYLE_ROTATION] || 0;
        if (b.perimeter) {
            if (g != 0 && c != null) {
                h = d = 0;
                g == 90 ? h = 1 : g == 180 ? d = -1 : f == 270 && (h = -1);
                c = mxUtils.getRotatedPoint(c, d, h, e)
            }
            c != null && b.perimeter && (c = this.view.getPerimeterPoint(a, c, false))
        } else f = f + g;
        if (f != 0 && c != null) {
            g = mxUtils.toRadians(f);
            d = Math.cos(g);
            h = Math.sin(g);
            c = mxUtils.getRotatedPoint(c,
                d, h, e)
        }
    }
    return c
};
mxGraph.prototype.connectCell = function (a, b, c, d) {
    this.model.beginUpdate();
    try {
        var e = this.model.getTerminal(a, c);
        this.cellConnected(a, b, c, d);
        this.fireEvent(new mxEventObject(mxEvent.CONNECT_CELL, "edge", a, "terminal", b, "source", c, "previous", e))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellConnected = function (a, b, c, d) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            var e = this.model.getTerminal(a, c);
            this.setConnectionConstraint(a, b, c, d);
            if (this.isPortsEnabled()) {
                d = null;
                if (this.isPort(b)) {
                    d = b.getId();
                    b = this.getTerminalForPort(b, c)
                }
                this.setCellStyles(c ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT, d, [a])
            }
            this.model.setTerminal(a, b, c);
            this.resetEdgesOnConnect && this.resetEdge(a);
            this.fireEvent(new mxEventObject(mxEvent.CELL_CONNECTED, "edge", a, "terminal", b, "source",
                c, "previous", e))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.disconnectGraph = function (a) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            for (var b = this.view.scale, c = this.view.translate, d = {}, e = 0; e < a.length; e++) {
                var f = mxCellPath.create(a[e]);
                d[f] = a[e]
            }
            for (e = 0; e < a.length; e++)if (this.model.isEdge(a[e])) {
                var g = this.model.getGeometry(a[e]);
                if (g != null) {
                    var h = this.view.getState(a[e]), k = this.view.getState(this.model.getParent(a[e]));
                    if (h != null && k != null) {
                        var g = g.clone(), i = -k.origin.x, l = -k.origin.y, m = h.absolutePoints, n = this.model.getTerminal(a[e], true);
                        if (n !=
                            null && this.isCellDisconnectable(a[e], n, true)) {
                            for (var o = mxCellPath.create(n); n != null && d[o] == null;) {
                                n = this.model.getParent(n);
                                o = mxCellPath.create(n)
                            }
                            if (n == null) {
                                g.setTerminalPoint(new mxPoint(m[0].x / b - c.x + i, m[0].y / b - c.y + l), true);
                                this.model.setTerminal(a[e], null, true)
                            }
                        }
                        var p = this.model.getTerminal(a[e], false);
                        if (p != null && this.isCellDisconnectable(a[e], p, false)) {
                            for (var q = mxCellPath.create(p); p != null && d[q] == null;) {
                                p = this.model.getParent(p);
                                q = mxCellPath.create(p)
                            }
                            if (p == null) {
                                var t = m.length - 1;
                                g.setTerminalPoint(new mxPoint(m[t].x /
                                    b - c.x + i, m[t].y / b - c.y + l), false);
                                this.model.setTerminal(a[e], null, false)
                            }
                        }
                        this.model.setGeometry(a[e], g)
                    }
                }
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getCurrentRoot = function () {
    return this.view.currentRoot
};
mxGraph.prototype.getTranslateForRoot = function () {
    return null
};
mxGraph.prototype.isPort = function () {
    return false
};
mxGraph.prototype.getTerminalForPort = function (a) {
    return this.model.getParent(a)
};
mxGraph.prototype.getChildOffsetForCell = function () {
    return null
};
mxGraph.prototype.enterGroup = function (a) {
    a = a || this.getSelectionCell();
    if (a != null && this.isValidRoot(a)) {
        this.view.setCurrentRoot(a);
        this.clearSelection()
    }
};
mxGraph.prototype.exitGroup = function () {
    var a = this.model.getRoot(), b = this.getCurrentRoot();
    if (b != null) {
        for (var c = this.model.getParent(b); c != a && !this.isValidRoot(c) && this.model.getParent(c) != a;)c = this.model.getParent(c);
        c == a || this.model.getParent(c) == a ? this.view.setCurrentRoot(null) : this.view.setCurrentRoot(c);
        this.view.getState(b) != null && this.setSelectionCell(b)
    }
};
mxGraph.prototype.home = function () {
    var a = this.getCurrentRoot();
    if (a != null) {
        this.view.setCurrentRoot(null);
        this.view.getState(a) != null && this.setSelectionCell(a)
    }
};
mxGraph.prototype.isValidRoot = function (a) {
    return a != null
};
mxGraph.prototype.getGraphBounds = function () {
    return this.view.getGraphBounds()
};
mxGraph.prototype.getCellBounds = function (a, b, c) {
    var d = [a];
    b && (d = d.concat(this.model.getEdges(a)));
    d = this.view.getBounds(d);
    if (c)for (var c = this.model.getChildCount(a), e = 0; e < c; e++) {
        var f = this.getCellBounds(this.model.getChildAt(a, e), b, true);
        d != null ? d.add(f) : d = f
    }
    return d
};
mxGraph.prototype.getBoundingBoxFromGeometry = function (a, b) {
    var b = b != null ? b : false, c = null;
    if (a != null)for (var d = 0; d < a.length; d++)if (b || this.model.isVertex(a[d])) {
        var e = this.getCellGeometry(a[d]);
        if (e != null) {
            var f = e.points;
            if (f != null && f.length > 0) {
                for (var g = new mxRectangle(f[0].x, f[0].y, 0, 0), h = function (a) {
                    a != null && g.add(new mxRectangle(a.x, a.y, 0, 0))
                }, k = 1; k < f.length; k++)h(f[k]);
                h(e.getTerminalPoint(true));
                h(e.getTerminalPoint(false))
            }
            c == null ? c = new mxRectangle(e.x, e.y, e.width, e.height) : c.add(e)
        }
    }
    return c
};
mxGraph.prototype.refresh = function (a) {
    this.view.clear(a, a == null);
    this.view.validate();
    this.sizeDidChange();
    this.fireEvent(new mxEventObject(mxEvent.REFRESH))
};
mxGraph.prototype.snap = function (a) {
    this.gridEnabled && (a = Math.round(a / this.gridSize) * this.gridSize);
    return a
};
mxGraph.prototype.panGraph = function (a, b) {
    if (this.useScrollbarsForPanning && mxUtils.hasScrollbars(this.container)) {
        this.container.scrollLeft = -a;
        this.container.scrollTop = -b
    } else {
        var c = this.view.getCanvas();
        if (this.dialect == mxConstants.DIALECT_SVG)if (a == 0 && b == 0) {
            mxClient.IS_IE ? c.setAttribute("transform", "translate(" + a + "," + b + ")") : c.removeAttribute("transform");
            if (this.shiftPreview1 != null) {
                for (var d = this.shiftPreview1.firstChild; d != null;) {
                    var e = d.nextSibling;
                    this.container.appendChild(d);
                    d = e
                }
                this.shiftPreview1.parentNode.removeChild(this.shiftPreview1);
                this.shiftPreview1 = null;
                this.container.appendChild(c.parentNode);
                for (d = this.shiftPreview2.firstChild; d != null;) {
                    e = d.nextSibling;
                    this.container.appendChild(d);
                    d = e
                }
                this.shiftPreview2.parentNode.removeChild(this.shiftPreview2);
                this.shiftPreview2 = null
            }
        } else {
            c.setAttribute("transform", "translate(" + a + "," + b + ")");
            if (this.shiftPreview1 == null) {
                this.shiftPreview1 = document.createElement("div");
                this.shiftPreview1.style.position = "absolute";
                this.shiftPreview1.style.overflow = "visible";
                this.shiftPreview2 = document.createElement("div");
                this.shiftPreview2.style.position = "absolute";
                this.shiftPreview2.style.overflow = "visible";
                for (var f = this.shiftPreview1, d = this.container.firstChild; d != null;) {
                    e = d.nextSibling;
                    d != c.parentNode ? f.appendChild(d) : f = this.shiftPreview2;
                    d = e
                }
                this.container.insertBefore(this.shiftPreview1, c.parentNode);
                this.container.appendChild(this.shiftPreview2)
            }
            this.shiftPreview1.style.left = a + "px";
            this.shiftPreview1.style.top = b + "px";
            this.shiftPreview2.style.left = a + "px";
            this.shiftPreview2.style.top = b + "px"
        } else {
            c.style.left =
                a + "px";
            c.style.top = b + "px"
        }
        this.panDx = a;
        this.panDy = b;
        this.fireEvent(new mxEventObject(mxEvent.PAN))
    }
};
mxGraph.prototype.zoomIn = function () {
    this.zoom(this.zoomFactor)
};
mxGraph.prototype.zoomOut = function () {
    this.zoom(1 / this.zoomFactor)
};
mxGraph.prototype.zoomActual = function () {
    if (this.view.scale == 1)this.view.setTranslate(0, 0); else {
        this.view.translate.x = 0;
        this.view.translate.y = 0;
        this.view.setScale(1)
    }
};
mxGraph.prototype.zoomTo = function (a, b) {
    this.zoom(a / this.view.scale, b)
};
mxGraph.prototype.zoom = function (a, b) {
    var b = b != null ? b : this.centerZoom, c = this.view.scale * a, d = this.view.getState(this.getSelectionCell());
    if (this.keepSelectionVisibleOnZoom && d != null) {
        d = new mxRectangle(d.x * a, d.y * a, d.width * a, d.height * a);
        this.view.scale = c;
        if (!this.scrollRectToVisible(d)) {
            this.view.revalidate();
            this.view.setScale(c)
        }
    } else if (b && !mxUtils.hasScrollbars(this.container)) {
        var d = this.container.offsetWidth, e = this.container.offsetHeight;
        if (a > 1)var f = (a - 1) / (c * 2), d = d * -f, e = e * -f; else {
            f = (1 / a - 1) / (this.view.scale *
                2);
            d = d * f;
            e = e * f
        }
        this.view.scaleAndTranslate(c, this.view.translate.x + d, this.view.translate.y + e)
    } else {
        this.view.setScale(c);
        if (mxUtils.hasScrollbars(this.container)) {
            e = d = 0;
            if (b) {
                d = this.container.offsetWidth * (a - 1) / 2;
                e = this.container.offsetHeight * (a - 1) / 2
            }
            this.container.scrollLeft = Math.round(this.container.scrollLeft * a + d);
            this.container.scrollTop = Math.round(this.container.scrollTop * a + e)
        }
    }
};
mxGraph.prototype.fit = function (a, b) {
    if (this.container != null) {
        var a = a != null ? a : 0, b = b != null ? b : false, c = this.container.clientWidth, d = this.container.clientHeight, e = this.view.getGraphBounds();
        if (b && e.x != null && e.y != null) {
            e.width = e.width + e.x;
            e.height = e.height + e.y;
            e.x = 0;
            e.y = 0
        }
        var f = this.view.scale, g = e.width / f, h = e.height / f;
        if (this.backgroundImage != null) {
            g = Math.max(g, this.backgroundImage.width - e.x / f);
            h = Math.max(h, this.backgroundImage.height - e.y / f)
        }
        var k = b ? a : 2 * a, c = Math.floor(Math.min(c / (g + k), d / (h + k)) * 100) / 100;
        if ((this.minFitScale == null || c > this.minFitScale) && (this.maxFitScale == null || c < this.maxFitScale))if (b)this.view.setScale(c); else if (mxUtils.hasScrollbars(this.container)) {
            this.view.setScale(c);
            if (e.x != null)this.container.scrollLeft = Math.round(e.x / f) * c - a - Math.max(0, (this.container.clientWidth - g * c) / 2);
            if (e.y != null)this.container.scrollTop = Math.round(e.y / f) * c - a - Math.max(0, (this.container.clientHeight - h * c) / 2)
        } else this.view.scaleAndTranslate(c, e.x != null ? Math.floor(this.view.translate.x - e.x / f + a + 1) : a, e.y !=
            null ? Math.floor(this.view.translate.y - e.y / f + a + 1) : a)
    }
    return this.view.scale
};
mxGraph.prototype.scrollCellToVisible = function (a, b) {
    var c = -this.view.translate.x, d = -this.view.translate.y, e = this.view.getState(a);
    if (e != null) {
        c = new mxRectangle(c + e.x, d + e.y, e.width, e.height);
        if (b && this.container != null) {
            d = this.container.clientWidth;
            e = this.container.clientHeight;
            c.x = c.getCenterX() - d / 2;
            c.width = d;
            c.y = c.getCenterY() - e / 2;
            c.height = e
        }
        this.scrollRectToVisible(c) && this.view.setTranslate(this.view.translate.x, this.view.translate.y)
    }
};
mxGraph.prototype.scrollRectToVisible = function (a) {
    var b = false;
    if (a != null) {
        var c = this.container.offsetWidth, d = this.container.offsetHeight, e = Math.min(c, a.width), f = Math.min(d, a.height);
        if (mxUtils.hasScrollbars(this.container)) {
            c = this.container;
            a.x = a.x + this.view.translate.x;
            a.y = a.y + this.view.translate.y;
            var g = c.scrollLeft - a.x, d = Math.max(g - c.scrollLeft, 0);
            if (g > 0)c.scrollLeft = c.scrollLeft - (g + 2); else {
                g = a.x + e - c.scrollLeft - c.clientWidth;
                if (g > 0)c.scrollLeft = c.scrollLeft + (g + 2)
            }
            e = c.scrollTop - a.y;
            g = Math.max(0,
                e - c.scrollTop);
            if (e > 0)c.scrollTop = c.scrollTop - (e + 2); else {
                e = a.y + f - c.scrollTop - c.clientHeight;
                if (e > 0)c.scrollTop = c.scrollTop + (e + 2)
            }
            !this.useScrollbarsForPanning && (d != 0 || g != 0) && this.view.setTranslate(d, g)
        } else {
            var g = -this.view.translate.x, h = -this.view.translate.y, k = this.view.scale;
            if (a.x + e > g + c) {
                this.view.translate.x = this.view.translate.x - (a.x + e - c - g) / k;
                b = true
            }
            if (a.y + f > h + d) {
                this.view.translate.y = this.view.translate.y - (a.y + f - d - h) / k;
                b = true
            }
            if (a.x < g) {
                this.view.translate.x = this.view.translate.x + (g - a.x) / k;
                b = true
            }
            if (a.y < h) {
                this.view.translate.y = this.view.translate.y + (h - a.y) / k;
                b = true
            }
            if (b) {
                this.view.refresh();
                this.selectionCellsHandler != null && this.selectionCellsHandler.refresh()
            }
        }
    }
    return b
};
mxGraph.prototype.getCellGeometry = function (a) {
    return this.model.getGeometry(a)
};
mxGraph.prototype.isCellVisible = function (a) {
    return this.model.isVisible(a)
};
mxGraph.prototype.isCellCollapsed = function (a) {
    return this.model.isCollapsed(a)
};
mxGraph.prototype.isCellConnectable = function (a) {
    return this.model.isConnectable(a)
};
mxGraph.prototype.isOrthogonal = function (a) {
    var b = a.style[mxConstants.STYLE_ORTHOGONAL];
    if (b != null)return b;
    a = this.view.getEdgeStyle(a);
    return a == mxEdgeStyle.SegmentConnector || a == mxEdgeStyle.ElbowConnector || a == mxEdgeStyle.SideToSide || a == mxEdgeStyle.TopToBottom || a == mxEdgeStyle.EntityRelation || a == mxEdgeStyle.OrthConnector
};
mxGraph.prototype.isLoop = function (a) {
    var b = a.getVisibleTerminalState(true), a = a.getVisibleTerminalState(false);
    return b != null && b == a
};
mxGraph.prototype.isCloneEvent = function (a) {
    return mxEvent.isControlDown(a)
};
mxGraph.prototype.isToggleEvent = function (a) {
    return mxClient.IS_MAC ? mxEvent.isMetaDown(a) : mxEvent.isControlDown(a)
};
mxGraph.prototype.isGridEnabledEvent = function (a) {
    return a != null && !mxEvent.isAltDown(a)
};
mxGraph.prototype.isConstrainedEvent = function (a) {
    return mxEvent.isShiftDown(a)
};
mxGraph.prototype.isForceMarqueeEvent = function (a) {
    return mxEvent.isAltDown(a)
};
mxGraph.prototype.validationAlert = function (a) {
    mxUtils.alert(a)
};
mxGraph.prototype.isEdgeValid = function (a, b, c) {
    return this.getEdgeValidationError(a, b, c) == null
};
mxGraph.prototype.getEdgeValidationError = function (a, b, c) {
    if (a != null && !this.isAllowDanglingEdges() && (b == null || c == null))return"";
    if (a != null && this.model.getTerminal(a, true) == null && this.model.getTerminal(a, false) == null)return null;
    if (!this.allowLoops && b == c && b != null || !this.isValidConnection(b, c))return"";
    if (b != null && c != null) {
        var d = "";
        if (!this.multigraph) {
            var e = this.model.getEdgesBetween(b, c, true);
            if (e.length > 1 || e.length == 1 && e[0] != a)d = d + ((mxResources.get(this.alreadyConnectedResource) || this.alreadyConnectedResource) +
                "\n")
        }
        var e = this.model.getDirectedEdgeCount(b, true, a), f = this.model.getDirectedEdgeCount(c, false, a);
        if (this.multiplicities != null)for (var g = 0; g < this.multiplicities.length; g++) {
            var h = this.multiplicities[g].check(this, a, b, c, e, f);
            h != null && (d = d + h)
        }
        h = this.validateEdge(a, b, c);
        h != null && (d = d + h);
        return d.length > 0 ? d : null
    }
    return this.allowDanglingEdges ? null : ""
};
mxGraph.prototype.validateEdge = function () {
    return null
};
mxGraph.prototype.validateGraph = function (a, b) {
    for (var a = a != null ? a : this.model.getRoot(), b = b != null ? b : {}, c = true, d = this.model.getChildCount(a), e = 0; e < d; e++) {
        var f = this.model.getChildAt(a, e), g = b;
        this.isValidRoot(f) && (g = {});
        g = this.validateGraph(f, g);
        g != null ? this.setCellWarning(f, g.replace(/\n/g, "<br>")) : this.setCellWarning(f, null);
        c = c && g == null
    }
    d = "";
    this.isCellCollapsed(a) && !c && (d = d + ((mxResources.get(this.containsValidationErrorsResource) || this.containsValidationErrorsResource) + "\n"));
    d = this.model.isEdge(a) ?
        d + (this.getEdgeValidationError(a, this.model.getTerminal(a, true), this.model.getTerminal(a, false)) || "") : d + (this.getCellValidationError(a) || "");
    e = this.validateCell(a, b);
    e != null && (d = d + e);
    this.model.getParent(a) == null && this.view.validate();
    return d.length > 0 || !c ? d : null
};
mxGraph.prototype.getCellValidationError = function (a) {
    var b = this.model.getDirectedEdgeCount(a, true), c = this.model.getDirectedEdgeCount(a, false), a = this.model.getValue(a), d = "";
    if (this.multiplicities != null)for (var e = 0; e < this.multiplicities.length; e++) {
        var f = this.multiplicities[e];
        if (f.source && mxUtils.isNode(a, f.type, f.attr, f.value) && (f.max == 0 && b > 0 || f.min == 1 && b == 0 || f.max == 1 && b > 1))d = d + (f.countError + "\n"); else if (!f.source && mxUtils.isNode(a, f.type, f.attr, f.value) && (f.max == 0 && c > 0 || f.min == 1 && c == 0 || f.max == 1 &&
            c > 1))d = d + (f.countError + "\n")
    }
    return d.length > 0 ? d : null
};
mxGraph.prototype.validateCell = function () {
    return null
};
mxGraph.prototype.getBackgroundImage = function () {
    return this.backgroundImage
};
mxGraph.prototype.setBackgroundImage = function (a) {
    this.backgroundImage = a
};
mxGraph.prototype.getFoldingImage = function (a) {
    if (a != null && this.foldingEnabled && !this.getModel().isEdge(a.cell)) {
        var b = this.isCellCollapsed(a.cell);
        if (this.isCellFoldable(a.cell, !b))return b ? this.collapsedImage : this.expandedImage
    }
    return null
};
mxGraph.prototype.convertValueToString = function (a) {
    a = this.model.getValue(a);
    if (a != null) {
        if (mxUtils.isNode(a))return a.nodeName;
        if (typeof a.toString == "function")return a.toString()
    }
    return""
};
mxGraph.prototype.getLabel = function (a) {
    var b = "";
    if (this.labelsVisible && a != null) {
        var c = this.view.getState(a), c = c != null ? c.style : this.getCellStyle(a);
        mxUtils.getValue(c, mxConstants.STYLE_NOLABEL, false) || (b = this.convertValueToString(a))
    }
    return b
};
mxGraph.prototype.isHtmlLabel = function () {
    return this.isHtmlLabels()
};
mxGraph.prototype.isHtmlLabels = function () {
    return this.htmlLabels
};
mxGraph.prototype.setHtmlLabels = function (a) {
    this.htmlLabels = a
};
mxGraph.prototype.isWrapping = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return a != null ? a[mxConstants.STYLE_WHITE_SPACE] == "wrap" : false
};
mxGraph.prototype.isLabelClipped = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return a != null ? a[mxConstants.STYLE_OVERFLOW] == "hidden" : false
};
mxGraph.prototype.getTooltip = function (a, b) {
    var c = null;
    if (a != null) {
        if (a.control != null && (b == a.control.node || b.parentNode == a.control.node)) {
            c = this.collapseExpandResource;
            c = mxResources.get(c) || c
        }
        if (c == null && a.overlays != null)for (var d = 0; d < a.overlays.length; d++)if (b == a.overlays[d].node || b.parentNode == a.overlays[d].node) {
            c = this.getCellOverlays(a.cell)[d].toString();
            break
        }
        if (c == null) {
            d = this.selectionCellsHandler.getHandler(a.cell);
            d != null && typeof d.getTooltipForNode == "function" && (c = d.getTooltipForNode(b))
        }
        c ==
            null && (c = this.getTooltipForCell(a.cell))
    }
    return c
};
mxGraph.prototype.getTooltipForCell = function (a) {
    var b = null;
    return b = a != null && a.getTooltip != null ? a.getTooltip() : this.convertValueToString(a)
};
mxGraph.prototype.getCursorForCell = function () {
    return null
};
mxGraph.prototype.getStartSize = function (a) {
    var b = new mxRectangle, c = this.view.getState(a), a = c != null ? c.style : this.getCellStyle(a);
    if (a != null) {
        c = parseInt(mxUtils.getValue(a, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE));
        mxUtils.getValue(a, mxConstants.STYLE_HORIZONTAL, true) ? b.height = c : b.width = c
    }
    return b
};
mxGraph.prototype.getImage = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_IMAGE] : null
};
mxGraph.prototype.getVerticalAlign = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_VERTICAL_ALIGN] || mxConstants.ALIGN_MIDDLE : null
};
mxGraph.prototype.getIndicatorColor = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_COLOR] : null
};
mxGraph.prototype.getIndicatorGradientColor = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_GRADIENTCOLOR] : null
};
mxGraph.prototype.getIndicatorShape = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_SHAPE] : null
};
mxGraph.prototype.getIndicatorImage = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_IMAGE] : null
};
mxGraph.prototype.getBorder = function () {
    return this.border
};
mxGraph.prototype.setBorder = function (a) {
    this.border = a
};
mxGraph.prototype.isSwimlane = function (a) {
    if (a != null && this.model.getParent(a) != this.model.getRoot()) {
        var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
        if (b != null && !this.model.isEdge(a))return b[mxConstants.STYLE_SHAPE] == mxConstants.SHAPE_SWIMLANE
    }
    return false
};
mxGraph.prototype.isResizeContainer = function () {
    return this.resizeContainer
};
mxGraph.prototype.setResizeContainer = function (a) {
    this.resizeContainer = a
};
mxGraph.prototype.isEnabled = function () {
    return this.enabled
};
mxGraph.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxGraph.prototype.isEscapeEnabled = function () {
    return this.escapeEnabled
};
mxGraph.prototype.setEscapeEnabled = function (a) {
    this.escapeEnabled = a
};
mxGraph.prototype.isInvokesStopCellEditing = function () {
    return this.invokesStopCellEditing
};
mxGraph.prototype.setInvokesStopCellEditing = function (a) {
    this.invokesStopCellEditing = a
};
mxGraph.prototype.isEnterStopsCellEditing = function () {
    return this.enterStopsCellEditing
};
mxGraph.prototype.setEnterStopsCellEditing = function (a) {
    this.enterStopsCellEditing = a
};
mxGraph.prototype.isCellLocked = function (a) {
    var b = this.model.getGeometry(a);
    return this.isCellsLocked() || b != null && this.model.isVertex(a) && b.relative
};
mxGraph.prototype.isCellsLocked = function () {
    return this.cellsLocked
};
mxGraph.prototype.setCellsLocked = function (a) {
    this.cellsLocked = a
};
mxGraph.prototype.getCloneableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellCloneable(a)
    }))
};
mxGraph.prototype.isCellCloneable = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsCloneable() && a[mxConstants.STYLE_CLONEABLE] != 0
};
mxGraph.prototype.isCellsCloneable = function () {
    return this.cellsCloneable
};
mxGraph.prototype.setCellsCloneable = function (a) {
    this.cellsCloneable = a
};
mxGraph.prototype.getExportableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.canExportCell(a)
    }))
};
mxGraph.prototype.canExportCell = function () {
    return this.exportEnabled
};
mxGraph.prototype.getImportableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.canImportCell(a)
    }))
};
mxGraph.prototype.canImportCell = function () {
    return this.importEnabled
};
mxGraph.prototype.isCellSelectable = function () {
    return this.isCellsSelectable()
};
mxGraph.prototype.isCellsSelectable = function () {
    return this.cellsSelectable
};
mxGraph.prototype.setCellsSelectable = function (a) {
    this.cellsSelectable = a
};
mxGraph.prototype.getDeletableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellDeletable(a)
    }))
};
mxGraph.prototype.isCellDeletable = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsDeletable() && a[mxConstants.STYLE_DELETABLE] != 0
};
mxGraph.prototype.isCellsDeletable = function () {
    return this.cellsDeletable
};
mxGraph.prototype.setCellsDeletable = function (a) {
    this.cellsDeletable = a
};
mxGraph.prototype.isLabelMovable = function (a) {
    return!this.isCellLocked(a) && (this.model.isEdge(a) && this.edgeLabelsMovable || this.model.isVertex(a) && this.vertexLabelsMovable)
};
mxGraph.prototype.getMovableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellMovable(a)
    }))
};
mxGraph.prototype.isCellMovable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsMovable() && !this.isCellLocked(a) && b[mxConstants.STYLE_MOVABLE] != 0
};
mxGraph.prototype.isCellsMovable = function () {
    return this.cellsMovable
};
mxGraph.prototype.setCellsMovable = function (a) {
    this.cellsMovable = a
};
mxGraph.prototype.isGridEnabled = function () {
    return this.gridEnabled
};
mxGraph.prototype.setGridEnabled = function (a) {
    this.gridEnabled = a
};
mxGraph.prototype.isPortsEnabled = function () {
    return this.portsEnabled
};
mxGraph.prototype.setPortsEnabled = function (a) {
    this.portsEnabled = a
};
mxGraph.prototype.getGridSize = function () {
    return this.gridSize
};
mxGraph.prototype.setGridSize = function (a) {
    this.gridSize = a
};
mxGraph.prototype.getTolerance = function () {
    return this.tolerance
};
mxGraph.prototype.setTolerance = function (a) {
    this.tolerance = a
};
mxGraph.prototype.isVertexLabelsMovable = function () {
    return this.vertexLabelsMovable
};
mxGraph.prototype.setVertexLabelsMovable = function (a) {
    this.vertexLabelsMovable = a
};
mxGraph.prototype.isEdgeLabelsMovable = function () {
    return this.edgeLabelsMovable
};
mxGraph.prototype.setEdgeLabelsMovable = function (a) {
    this.edgeLabelsMovable = a
};
mxGraph.prototype.isSwimlaneNesting = function () {
    return this.swimlaneNesting
};
mxGraph.prototype.setSwimlaneNesting = function (a) {
    this.swimlaneNesting = a
};
mxGraph.prototype.isSwimlaneSelectionEnabled = function () {
    return this.swimlaneSelectionEnabled
};
mxGraph.prototype.setSwimlaneSelectionEnabled = function (a) {
    this.swimlaneSelectionEnabled = a
};
mxGraph.prototype.isMultigraph = function () {
    return this.multigraph
};
mxGraph.prototype.setMultigraph = function (a) {
    this.multigraph = a
};
mxGraph.prototype.isAllowLoops = function () {
    return this.allowLoops
};
mxGraph.prototype.setAllowDanglingEdges = function (a) {
    this.allowDanglingEdges = a
};
mxGraph.prototype.isAllowDanglingEdges = function () {
    return this.allowDanglingEdges
};
mxGraph.prototype.setConnectableEdges = function (a) {
    this.connectableEdges = a
};
mxGraph.prototype.isConnectableEdges = function () {
    return this.connectableEdges
};
mxGraph.prototype.setCloneInvalidEdges = function (a) {
    this.cloneInvalidEdges = a
};
mxGraph.prototype.isCloneInvalidEdges = function () {
    return this.cloneInvalidEdges
};
mxGraph.prototype.setAllowLoops = function (a) {
    this.allowLoops = a
};
mxGraph.prototype.isDisconnectOnMove = function () {
    return this.disconnectOnMove
};
mxGraph.prototype.setDisconnectOnMove = function (a) {
    this.disconnectOnMove = a
};
mxGraph.prototype.isDropEnabled = function () {
    return this.dropEnabled
};
mxGraph.prototype.setDropEnabled = function (a) {
    this.dropEnabled = a
};
mxGraph.prototype.isSplitEnabled = function () {
    return this.splitEnabled
};
mxGraph.prototype.setSplitEnabled = function (a) {
    this.splitEnabled = a
};
mxGraph.prototype.isCellResizable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsResizable() && !this.isCellLocked(a) && b[mxConstants.STYLE_RESIZABLE] != 0
};
mxGraph.prototype.isCellsResizable = function () {
    return this.cellsResizable
};
mxGraph.prototype.setCellsResizable = function (a) {
    this.cellsResizable = a
};
mxGraph.prototype.isTerminalPointMovable = function () {
    return true
};
mxGraph.prototype.isCellBendable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsBendable() && !this.isCellLocked(a) && b[mxConstants.STYLE_BENDABLE] != 0
};
mxGraph.prototype.isCellsBendable = function () {
    return this.cellsBendable
};
mxGraph.prototype.setCellsBendable = function (a) {
    this.cellsBendable = a
};
mxGraph.prototype.isCellEditable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsEditable() && !this.isCellLocked(a) && b[mxConstants.STYLE_EDITABLE] != 0
};
mxGraph.prototype.isCellsEditable = function () {
    return this.cellsEditable
};
mxGraph.prototype.setCellsEditable = function (a) {
    this.cellsEditable = a
};
mxGraph.prototype.isCellDisconnectable = function (a) {
    return this.isCellsDisconnectable() && !this.isCellLocked(a)
};
mxGraph.prototype.isCellsDisconnectable = function () {
    return this.cellsDisconnectable
};
mxGraph.prototype.setCellsDisconnectable = function (a) {
    this.cellsDisconnectable = a
};
mxGraph.prototype.isValidSource = function (a) {
    return a == null && this.allowDanglingEdges || a != null && (!this.model.isEdge(a) || this.connectableEdges) && this.isCellConnectable(a)
};
mxGraph.prototype.isValidTarget = function (a) {
    return this.isValidSource(a)
};
mxGraph.prototype.isValidConnection = function (a, b) {
    return this.isValidSource(a) && this.isValidTarget(b)
};
mxGraph.prototype.setConnectable = function (a) {
    this.connectionHandler.setEnabled(a)
};
mxGraph.prototype.isConnectable = function () {
    return this.connectionHandler.isEnabled()
};
mxGraph.prototype.setTooltips = function (a) {
    this.tooltipHandler.setEnabled(a)
};
mxGraph.prototype.setPanning = function (a) {
    this.panningHandler.panningEnabled = a
};
mxGraph.prototype.isEditing = function (a) {
    if (this.cellEditor != null) {
        var b = this.cellEditor.getEditingCell();
        return a == null ? b != null : a == b
    }
    return false
};
mxGraph.prototype.isAutoSizeCell = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return this.isAutoSizeCells() || a[mxConstants.STYLE_AUTOSIZE] == 1
};
mxGraph.prototype.isAutoSizeCells = function () {
    return this.autoSizeCells
};
mxGraph.prototype.setAutoSizeCells = function (a) {
    this.autoSizeCells = a
};
mxGraph.prototype.isExtendParent = function (a) {
    return!this.getModel().isEdge(a) && this.isExtendParents()
};
mxGraph.prototype.isExtendParents = function () {
    return this.extendParents
};
mxGraph.prototype.setExtendParents = function (a) {
    this.extendParents = a
};
mxGraph.prototype.isExtendParentsOnAdd = function () {
    return this.extendParentsOnAdd
};
mxGraph.prototype.setExtendParentsOnAdd = function (a) {
    this.extendParentsOnAdd = a
};
mxGraph.prototype.isConstrainChild = function (a) {
    return this.isConstrainChildren() && !this.getModel().isEdge(this.getModel().getParent(a))
};
mxGraph.prototype.isConstrainChildren = function () {
    return this.constrainChildren
};
mxGraph.prototype.setConstrainChildren = function (a) {
    this.constrainChildren = a
};
mxGraph.prototype.isAllowNegativeCoordinates = function () {
    return this.allowNegativeCoordinates
};
mxGraph.prototype.setAllowNegativeCoordinates = function (a) {
    this.allowNegativeCoordinates = a
};
mxGraph.prototype.getOverlap = function (a) {
    return this.isAllowOverlapParent(a) ? this.defaultOverlap : 0
};
mxGraph.prototype.isAllowOverlapParent = function () {
    return false
};
mxGraph.prototype.getFoldableCells = function (a, b) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellFoldable(a, b)
    }))
};
mxGraph.prototype.isCellFoldable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.model.getChildCount(a) > 0 && b[mxConstants.STYLE_FOLDABLE] != 0
};
mxGraph.prototype.isValidDropTarget = function (a, b, c) {
    return a != null && (this.isSplitEnabled() && this.isSplitTarget(a, b, c) || !this.model.isEdge(a) && (this.isSwimlane(a) || this.model.getChildCount(a) > 0 && !this.isCellCollapsed(a)))
};
mxGraph.prototype.isSplitTarget = function (a, b) {
    if (this.model.isEdge(a) && b != null && b.length == 1 && this.isCellConnectable(b[0]) && this.getEdgeValidationError(a, this.model.getTerminal(a, true), b[0]) == null) {
        var c = this.model.getTerminal(a, true), d = this.model.getTerminal(a, false);
        return!this.model.isAncestor(b[0], c) && !this.model.isAncestor(b[0], d)
    }
    return false
};
mxGraph.prototype.getDropTarget = function (a, b, c) {
    if (!this.isSwimlaneNesting())for (var d = 0; d < a.length; d++)if (this.isSwimlane(a[d]))return null;
    d = mxUtils.convertPoint(this.container, mxEvent.getClientX(b), mxEvent.getClientY(b));
    d.x = d.x - this.panDx;
    d.y = d.y - this.panDy;
    d = this.getSwimlaneAt(d.x, d.y);
    if (c == null)c = d; else if (d != null) {
        for (var e = this.model.getParent(d); e != null && this.isSwimlane(e) && e != c;)e = this.model.getParent(e);
        e == c && (c = d)
    }
    for (; c != null && !this.isValidDropTarget(c, a, b) && !this.model.isLayer(c);)c =
        this.model.getParent(c);
    return!this.model.isLayer(c) && mxUtils.indexOf(a, c) < 0 ? c : null
};
mxGraph.prototype.getDefaultParent = function () {
    var a = this.defaultParent;
    if (a == null) {
        a = this.getCurrentRoot();
        a == null && (a = this.model.getChildAt(this.model.getRoot(), 0))
    }
    return a
};
mxGraph.prototype.setDefaultParent = function (a) {
    this.defaultParent = a
};
mxGraph.prototype.getSwimlane = function (a) {
    for (; a != null && !this.isSwimlane(a);)a = this.model.getParent(a);
    return a
};
mxGraph.prototype.getSwimlaneAt = function (a, b, c) {
    c = c || this.getDefaultParent();
    if (c != null)for (var d = this.model.getChildCount(c), e = 0; e < d; e++) {
        var f = this.model.getChildAt(c, e), g = this.getSwimlaneAt(a, b, f);
        if (g != null)return g;
        if (this.isSwimlane(f) && this.intersects(this.view.getState(f), a, b))return f
    }
    return null
};
mxGraph.prototype.getCellAt = function (a, b, c, d, e) {
    d = d != null ? d : true;
    e = e != null ? e : true;
    c = c != null ? c : this.getDefaultParent();
    if (c != null)for (var f = this.model.getChildCount(c) - 1; f >= 0; f--) {
        var g = this.model.getChildAt(c, f), h = this.getCellAt(a, b, g, d, e);
        if (h != null)return h;
        if (this.isCellVisible(g) && (e && this.model.isEdge(g) || d && this.model.isVertex(g)) && this.intersects(this.view.getState(g), a, b))return g
    }
    return null
};
mxGraph.prototype.intersects = function (a, b, c) {
    if (a != null) {
        var d = a.absolutePoints;
        if (d != null)for (var a = this.tolerance * this.tolerance, e = d[0], f = 1; f < d.length; f++) {
            var g = d[f];
            if (mxUtils.ptSegDistSq(e.x, e.y, g.x, g.y, b, c) <= a)return true;
            e = g
        } else if (mxUtils.contains(a, b, c))return true
    }
    return false
};
mxGraph.prototype.hitsSwimlaneContent = function (a, b, c) {
    var d = this.getView().getState(a), a = this.getStartSize(a);
    if (d != null) {
        var e = this.getView().getScale(), b = b - d.x, c = c - d.y;
        if (a.width > 0 && b > 0 && b > a.width * e || a.height > 0 && c > 0 && c > a.height * e)return true
    }
    return false
};
mxGraph.prototype.getChildVertices = function (a) {
    return this.getChildCells(a, true, false)
};
mxGraph.prototype.getChildEdges = function (a) {
    return this.getChildCells(a, false, true)
};
mxGraph.prototype.getChildCells = function (a, b, c) {
    a = a != null ? a : this.getDefaultParent();
    a = this.model.getChildCells(a, b != null ? b : false, c != null ? c : false);
    b = [];
    for (c = 0; c < a.length; c++)this.isCellVisible(a[c]) && b.push(a[c]);
    return b
};
mxGraph.prototype.getConnections = function (a, b) {
    return this.getEdges(a, b, true, true, false)
};
mxGraph.prototype.getIncomingEdges = function (a, b) {
    return this.getEdges(a, b, true, false, false)
};
mxGraph.prototype.getOutgoingEdges = function (a, b) {
    return this.getEdges(a, b, false, true, false)
};
mxGraph.prototype.getEdges = function (a, b, c, d, e, f) {
    for (var c = c != null ? c : true, d = d != null ? d : true, e = e != null ? e : true, f = f != null ? f : false, g = [], h = this.isCellCollapsed(a), k = this.model.getChildCount(a), i = 0; i < k; i++) {
        var l = this.model.getChildAt(a, i);
        if (h || !this.isCellVisible(l))g = g.concat(this.model.getEdges(l, c, d))
    }
    g = g.concat(this.model.getEdges(a, c, d));
    h = [];
    for (i = 0; i < g.length; i++) {
        l = this.view.getState(g[i]);
        k = l != null ? l.getVisibleTerminal(true) : this.view.getVisibleTerminal(g[i], true);
        l = l != null ? l.getVisibleTerminal(false) :
            this.view.getVisibleTerminal(g[i], false);
        (e && k == l || k != l && (c && l == a && (b == null || this.isValidAncestor(k, b, f)) || d && k == a && (b == null || this.isValidAncestor(l, b, f)))) && h.push(g[i])
    }
    return h
};
mxGraph.prototype.isValidAncestor = function (a, b, c) {
    return c ? this.model.isAncestor(b, a) : this.model.getParent(a) == b
};
mxGraph.prototype.getOpposites = function (a, b, c, d) {
    var c = c != null ? c : true, d = d != null ? d : true, e = [], f = {};
    if (a != null)for (var g = 0; g < a.length; g++) {
        var h = this.view.getState(a[g]), k = h != null ? h.getVisibleTerminal(true) : this.view.getVisibleTerminal(a[g], true), h = h != null ? h.getVisibleTerminal(false) : this.view.getVisibleTerminal(a[g], false);
        if (k == b && h != null && h != b && d) {
            var i = mxCellPath.create(h);
            if (f[i] == null) {
                f[i] = h;
                e.push(h)
            }
        } else if (h == b && k != null && k != b && c) {
            i = mxCellPath.create(k);
            if (f[i] == null) {
                f[i] = k;
                e.push(k)
            }
        }
    }
    return e
};
mxGraph.prototype.getEdgesBetween = function (a, b, c) {
    for (var c = c != null ? c : false, d = this.getEdges(a), e = [], f = 0; f < d.length; f++) {
        var g = this.view.getState(d[f]), h = g != null ? g.getVisibleTerminal(true) : this.view.getVisibleTerminal(d[f], true), g = g != null ? g.getVisibleTerminal(false) : this.view.getVisibleTerminal(d[f], false);
        (h == a && g == b || !c && h == b && g == a) && e.push(d[f])
    }
    return e
};
mxGraph.prototype.getPointForEvent = function (a, b) {
    var c = mxUtils.convertPoint(this.container, mxEvent.getClientX(a), mxEvent.getClientY(a)), d = this.view.scale, e = this.view.translate, f = b != false ? this.gridSize / 2 : 0;
    c.x = this.snap(c.x / d - e.x - f);
    c.y = this.snap(c.y / d - e.y - f);
    return c
};
mxGraph.prototype.getCells = function (a, b, c, d, e, f) {
    f = f != null ? f : [];
    if (c > 0 || d > 0) {
        var g = a + c, h = b + d, e = e || this.getDefaultParent();
        if (e != null)for (var k = this.model.getChildCount(e), i = 0; i < k; i++) {
            var l = this.model.getChildAt(e, i), m = this.view.getState(l);
            this.isCellVisible(l) && m != null && (m.x >= a && m.y >= b && m.x + m.width <= g && m.y + m.height <= h ? f.push(l) : this.getCells(a, b, c, d, l, f))
        }
    }
    return f
};
mxGraph.prototype.getCellsBeyond = function (a, b, c, d, e) {
    var f = [];
    if (d || e) {
        c == null && (c = this.getDefaultParent());
        if (c != null)for (var g = this.model.getChildCount(c), h = 0; h < g; h++) {
            var k = this.model.getChildAt(c, h), i = this.view.getState(k);
            this.isCellVisible(k) && i != null && (!d || i.x >= a) && (!e || i.y >= b) && f.push(k)
        }
    }
    return f
};
mxGraph.prototype.findTreeRoots = function (a, b, c) {
    var b = b != null ? b : false, c = c != null ? c : false, d = [];
    if (a != null) {
        for (var e = this.getModel(), f = e.getChildCount(a), g = null, h = 0, k = 0; k < f; k++) {
            var i = e.getChildAt(a, k);
            if (this.model.isVertex(i) && this.isCellVisible(i)) {
                for (var l = this.getConnections(i, b ? a : null), m = 0, n = 0, o = 0; o < l.length; o++)this.view.getVisibleTerminal(l[o], true) == i ? m++ : n++;
                (c && m == 0 && n > 0 || !c && n == 0 && m > 0) && d.push(i);
                l = c ? n - m : m - n;
                if (l > h) {
                    h = l;
                    g = i
                }
            }
        }
        d.length == 0 && g != null && d.push(g)
    }
    return d
};
mxGraph.prototype.traverse = function (a, b, c, d, e) {
    if (c != null && a != null) {
        var b = b != null ? b : true, e = e || [], f = mxCellPath.create(a);
        if (e[f] == null) {
            e[f] = a;
            d = c(a, d);
            if (d == null || d) {
                d = this.model.getEdgeCount(a);
                if (d > 0)for (f = 0; f < d; f++) {
                    var g = this.model.getEdgeAt(a, f), h = this.model.getTerminal(g, true) == a;
                    (!b || h) && this.traverse(this.model.getTerminal(g, !h), b, c, g, e)
                }
            }
        }
    }
};
mxGraph.prototype.isCellSelected = function (a) {
    return this.getSelectionModel().isSelected(a)
};
mxGraph.prototype.isSelectionEmpty = function () {
    return this.getSelectionModel().isEmpty()
};
mxGraph.prototype.clearSelection = function () {
    return this.getSelectionModel().clear()
};
mxGraph.prototype.getSelectionCount = function () {
    return this.getSelectionModel().cells.length
};
mxGraph.prototype.getSelectionCell = function () {
    return this.getSelectionModel().cells[0]
};
mxGraph.prototype.getSelectionCells = function () {
    return this.getSelectionModel().cells.slice()
};
mxGraph.prototype.setSelectionCell = function (a) {
    this.getSelectionModel().setCell(a)
};
mxGraph.prototype.setSelectionCells = function (a) {
    this.getSelectionModel().setCells(a)
};
mxGraph.prototype.addSelectionCell = function (a) {
    this.getSelectionModel().addCell(a)
};
mxGraph.prototype.addSelectionCells = function (a) {
    this.getSelectionModel().addCells(a)
};
mxGraph.prototype.removeSelectionCell = function (a) {
    this.getSelectionModel().removeCell(a)
};
mxGraph.prototype.removeSelectionCells = function (a) {
    this.getSelectionModel().removeCells(a)
};
mxGraph.prototype.selectRegion = function (a, b) {
    var c = this.getCells(a.x, a.y, a.width, a.height);
    this.selectCellsForEvent(c, b);
    return c
};
mxGraph.prototype.selectNextCell = function () {
    this.selectCell(true)
};
mxGraph.prototype.selectPreviousCell = function () {
    this.selectCell()
};
mxGraph.prototype.selectParentCell = function () {
    this.selectCell(false, true)
};
mxGraph.prototype.selectChildCell = function () {
    this.selectCell(false, false, true)
};
mxGraph.prototype.selectCell = function (a, b, c) {
    var d = this.selectionModel, e = d.cells.length > 0 ? d.cells[0] : null;
    d.cells.length > 1 && d.clear();
    var d = e != null ? this.model.getParent(e) : this.getDefaultParent(), f = this.model.getChildCount(d);
    if (e == null && f > 0) {
        a = this.model.getChildAt(d, 0);
        this.setSelectionCell(a)
    } else if ((e == null || b) && this.view.getState(d) != null && this.model.getGeometry(d) != null)this.getCurrentRoot() != d && this.setSelectionCell(d); else if (e != null && c) {
        if (this.model.getChildCount(e) > 0) {
            a = this.model.getChildAt(e,
                0);
            this.setSelectionCell(a)
        }
    } else if (f > 0) {
        b = d.getIndex(e);
        if (a) {
            b++;
            a = this.model.getChildAt(d, b % f)
        } else {
            b--;
            a = this.model.getChildAt(d, b < 0 ? f - 1 : b)
        }
        this.setSelectionCell(a)
    }
};
mxGraph.prototype.selectAll = function (a) {
    a = a || this.getDefaultParent();
    a = this.model.getChildren(a);
    a != null && this.setSelectionCells(a)
};
mxGraph.prototype.selectVertices = function (a) {
    this.selectCells(true, false, a)
};
mxGraph.prototype.selectEdges = function (a) {
    this.selectCells(false, true, a)
};
mxGraph.prototype.selectCells = function (a, b, c) {
    c = c || this.getDefaultParent();
    this.setSelectionCells(this.model.filterDescendants(mxUtils.bind(this, function (c) {
        return this.view.getState(c) != null && this.model.getChildCount(c) == 0 && (this.model.isVertex(c) && a || this.model.isEdge(c) && b)
    }), c))
};
mxGraph.prototype.selectCellForEvent = function (a, b) {
    var c = this.isCellSelected(a);
    this.isToggleEvent(b) ? c ? this.removeSelectionCell(a) : this.addSelectionCell(a) : (!c || this.getSelectionCount() != 1) && this.setSelectionCell(a)
};
mxGraph.prototype.selectCellsForEvent = function (a, b) {
    this.isToggleEvent(b) ? this.addSelectionCells(a) : this.setSelectionCells(a)
};
mxGraph.prototype.createHandler = function (a) {
    var b = null;
    if (a != null)if (this.model.isEdge(a.cell)) {
        b = this.view.getEdgeStyle(a);
        b = this.isLoop(a) || b == mxEdgeStyle.ElbowConnector || b == mxEdgeStyle.SideToSide || b == mxEdgeStyle.TopToBottom ? new mxElbowEdgeHandler(a) : b == mxEdgeStyle.SegmentConnector || b == mxEdgeStyle.OrthConnector ? new mxEdgeSegmentHandler(a) : new mxEdgeHandler(a)
    } else b = new mxVertexHandler(a);
    return b
};
mxGraph.prototype.addMouseListener = function (a) {
    if (this.mouseListeners == null)this.mouseListeners = [];
    this.mouseListeners.push(a)
};
mxGraph.prototype.removeMouseListener = function (a) {
    if (this.mouseListeners != null)for (var b = 0; b < this.mouseListeners.length; b++)if (this.mouseListeners[b] == a) {
        this.mouseListeners.splice(b, 1);
        break
    }
};
mxGraph.prototype.updateMouseEvent = function (a) {
    if (a.graphX == null || a.graphY == null) {
        var b = mxUtils.convertPoint(this.container, a.getX(), a.getY());
        a.graphX = b.x - this.panDx;
        a.graphY = b.y - this.panDy
    }
};
mxGraph.prototype.fireMouseEvent = function (a, b, c) {
    c == null && (c = this);
    this.updateMouseEvent(b);
    if (a == mxEvent.MOUSE_DOWN)this.isMouseDown = true;
    if (mxClient.IS_TOUCH && this.doubleTapEnabled && a == mxEvent.MOUSE_DOWN) {
        var d = (new Date).getTime();
        if (d - this.lastTouchTime < this.doubleTapTimeout && Math.abs(this.lastTouchX - b.getX()) < this.doubleTapTolerance && Math.abs(this.lastTouchY - b.getY()) < this.doubleTapTolerance) {
            this.lastTouchTime = 0;
            this.dblClick(b.getEvent(), b.getCell());
            b.getEvent().cancelBubble = true
        } else {
            this.lastTouchX =
                b.getX();
            this.lastTouchY = b.getY();
            this.lastTouchTime = d
        }
    }
    d = b.getEvent().detail != 2;
    if (mxClient.IS_IE && document.compatMode == "CSS1Compat") {
        if (this.lastMouseX != null && Math.abs(this.lastMouseX - b.getX()) > this.doubleTapTolerance || this.lastMouseY != null && Math.abs(this.lastMouseY - b.getY()) > this.doubleTapTolerance)d = true;
        if (a == mxEvent.MOUSE_UP) {
            this.lastMouseX = b.getX();
            this.lastMouseY = b.getY()
        }
    }
    if ((a != mxEvent.MOUSE_UP || this.isMouseDown) && d) {
        if (a == mxEvent.MOUSE_UP)this.isMouseDown = false;
        if (!this.isEditing() && (mxClient.IS_OP ||
            mxClient.IS_SF || mxClient.IS_GC || mxClient.IS_IE && mxClient.IS_SVG || b.getEvent().target != this.container)) {
            a == mxEvent.MOUSE_MOVE && (this.isMouseDown && this.autoScroll) && this.scrollPointToVisible(b.getGraphX(), b.getGraphY(), this.autoExtend);
            if (this.mouseListeners != null) {
                c = [c, b];
                b.getEvent().returnValue = true;
                for (d = 0; d < this.mouseListeners.length; d++) {
                    var e = this.mouseListeners[d];
                    a == mxEvent.MOUSE_DOWN ? e.mouseDown.apply(e, c) : a == mxEvent.MOUSE_MOVE ? e.mouseMove.apply(e, c) : a == mxEvent.MOUSE_UP && e.mouseUp.apply(e,
                        c)
                }
            }
            a == mxEvent.MOUSE_UP && this.click(b)
        }
    } else if (a == mxEvent.MOUSE_UP)this.isMouseDown = false
};
mxGraph.prototype.destroy = function () {
    if (!this.destroyed) {
        this.destroyed = true;
        this.tooltipHandler != null && this.tooltipHandler.destroy();
        this.selectionCellsHandler != null && this.selectionCellsHandler.destroy();
        this.panningHandler != null && this.panningHandler.destroy();
        this.connectionHandler != null && this.connectionHandler.destroy();
        this.graphHandler != null && this.graphHandler.destroy();
        this.cellEditor != null && this.cellEditor.destroy();
        this.view != null && this.view.destroy();
        if (this.model != null && this.graphModelChangeListener !=
            null) {
            this.model.removeListener(this.graphModelChangeListener);
            this.graphModelChangeListener = null
        }
        this.container = null
    }
};
function mxCellOverlay(a, b, c, d, e, f) {
    this.image = a;
    this.tooltip = b;
    this.align = c != null ? c : this.align;
    this.verticalAlign = d != null ? d : this.verticalAlign;
    this.offset = e != null ? e : new mxPoint;
    this.cursor = f != null ? f : "help"
}
mxCellOverlay.prototype = new mxEventSource;
mxCellOverlay.prototype.constructor = mxCellOverlay;
mxCellOverlay.prototype.image = null;
mxCellOverlay.prototype.tooltip = null;
mxCellOverlay.prototype.align = mxConstants.ALIGN_RIGHT;
mxCellOverlay.prototype.verticalAlign = mxConstants.ALIGN_BOTTOM;
mxCellOverlay.prototype.offset = null;
mxCellOverlay.prototype.cursor = null;
mxCellOverlay.prototype.defaultOverlap = 0.5;
mxCellOverlay.prototype.getBounds = function (a) {
    var b = a.view.graph.getModel().isEdge(a.cell), c = a.view.scale, d = null, e = this.image.width, f = this.image.height;
    if (b) {
        b = a.absolutePoints;
        if (b.length % 2 == 1)d = b[Math.floor(b.length / 2)]; else {
            d = b.length / 2;
            a = b[d - 1];
            b = b[d];
            d = new mxPoint(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2)
        }
    } else {
        d = new mxPoint;
        d.x = this.align == mxConstants.ALIGN_LEFT ? a.x : this.align == mxConstants.ALIGN_CENTER ? a.x + a.width / 2 : a.x + a.width;
        d.y = this.verticalAlign == mxConstants.ALIGN_TOP ? a.y : this.verticalAlign == mxConstants.ALIGN_MIDDLE ?
            a.y + a.height / 2 : a.y + a.height
    }
    return new mxRectangle(d.x - (e * this.defaultOverlap - this.offset.x) * c, d.y - (f * this.defaultOverlap - this.offset.y) * c, e * c, f * c)
};
mxCellOverlay.prototype.toString = function () {
    return this.tooltip
};
function mxOutline(a, b) {
    this.source = a;
    b != null && this.init(b)
}
mxOutline.prototype.source = null;
mxOutline.prototype.outline = null;
mxOutline.prototype.graphRenderHint = mxConstants.RENDERING_HINT_FASTER;
mxOutline.prototype.enabled = !0;
mxOutline.prototype.showViewport = !0;
mxOutline.prototype.border = 10;
mxOutline.prototype.sizerSize = 8;
mxOutline.prototype.updateOnPan = !1;
mxOutline.prototype.sizerImage = null;
mxOutline.prototype.suspended = !1;
mxOutline.prototype.init = function (a) {
    this.outline = new mxGraph(a, this.source.getModel(), this.graphRenderHint, this.source.getStylesheet());
    this.outline.foldingEnabled = false;
    this.outline.autoScroll = false;
    var b = this.outline.graphModelChanged;
    this.outline.graphModelChanged = mxUtils.bind(this, function (a) {
        !this.suspended && this.outline != null && b.apply(this.outline, arguments)
    });
    if (mxClient.IS_SVG) {
        a = this.outline.getView().getCanvas().parentNode;
        a.setAttribute("shape-rendering", "optimizeSpeed");
        a.setAttribute("image-rendering",
            "optimizeSpeed")
    }
    this.outline.labelsVisible = false;
    this.outline.setEnabled(false);
    this.updateHandler = mxUtils.bind(this, function () {
        !this.suspended && !this.active && this.update()
    });
    this.source.getModel().addListener(mxEvent.CHANGE, this.updateHandler);
    this.outline.addMouseListener(this);
    a = this.source.getView();
    a.addListener(mxEvent.SCALE, this.updateHandler);
    a.addListener(mxEvent.TRANSLATE, this.updateHandler);
    a.addListener(mxEvent.SCALE_AND_TRANSLATE, this.updateHandler);
    a.addListener(mxEvent.DOWN, this.updateHandler);
    a.addListener(mxEvent.UP, this.updateHandler);
    mxEvent.addListener(this.source.container, "scroll", this.updateHandler);
    this.panHandler = mxUtils.bind(this, function (a) {
        this.updateOnPan && this.updateHandler.apply(this, arguments)
    });
    this.source.addListener(mxEvent.PAN, this.panHandler);
    this.refreshHandler = mxUtils.bind(this, function () {
        this.outline.setStylesheet(this.source.getStylesheet());
        this.outline.refresh()
    });
    this.source.addListener(mxEvent.REFRESH, this.refreshHandler);
    this.bounds = new mxRectangle(0, 0, 0,
        0);
    this.selectionBorder = new mxRectangleShape(this.bounds, null, mxConstants.OUTLINE_COLOR, mxConstants.OUTLINE_STROKEWIDTH);
    this.selectionBorder.dialect = this.outline.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    this.selectionBorder.crisp = true;
    this.selectionBorder.init(this.outline.getView().getOverlayPane());
    mxEvent.redirectMouseEvents(this.selectionBorder.node, this.outline);
    this.selectionBorder.node.style.background = "";
    this.sizer = this.createSizer();
    this.sizer.init(this.outline.getView().getOverlayPane());
    if (this.enabled)this.sizer.node.style.cursor = "pointer";
    mxEvent.addListener(this.sizer.node, mxClient.IS_TOUCH ? "touchstart" : "mousedown", mxUtils.bind(this, function (a) {
        this.outline.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a))
    }));
    this.selectionBorder.node.style.display = this.showViewport ? "" : "none";
    this.sizer.node.style.display = this.selectionBorder.node.style.display;
    this.selectionBorder.node.style.cursor = "move";
    this.update(false)
};
mxOutline.prototype.isEnabled = function () {
    return this.enabled
};
mxOutline.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxOutline.prototype.setZoomEnabled = function (a) {
    this.sizer.node.style.visibility = a ? "visible" : "hidden"
};
mxOutline.prototype.refresh = function () {
    this.update(true)
};
mxOutline.prototype.createSizer = function () {
    if (this.sizerImage != null) {
        var a = new mxImageShape(new mxRectangle(0, 0, this.sizerImage.width, this.sizerImage.height), this.sizerImage.src);
        a.dialect = this.outline.dialect
    } else {
        a = new mxRectangleShape(new mxRectangle(0, 0, this.sizerSize, this.sizerSize), mxConstants.OUTLINE_HANDLE_FILLCOLOR, mxConstants.OUTLINE_HANDLE_STROKECOLOR);
        a.dialect = this.outline.dialect;
        a.crisp = true
    }
    return a
};
mxOutline.prototype.getSourceContainerSize = function () {
    return new mxRectangle(0, 0, this.source.container.scrollWidth, this.source.container.scrollHeight)
};
mxOutline.prototype.getOutlineOffset = function () {
    return null
};
mxOutline.prototype.update = function (a) {
    if (this.source != null) {
        var b = this.source.view.scale, c = this.source.getGraphBounds(), c = new mxRectangle(c.x / b + this.source.panDx, c.y / b + this.source.panDy, c.width / b, c.height / b), d = new mxRectangle(0, 0, this.source.container.clientWidth / b, this.source.container.clientHeight / b), e = c.clone();
        e.add(d);
        var f = this.getSourceContainerSize(), d = Math.max(f.width / b, e.width), b = Math.max(f.height / b, e.height), e = Math.max(0, this.outline.container.clientWidth - this.border), f = Math.max(0, this.outline.container.clientHeight -
            this.border), e = Math.min(e / d, f / b);
        if (e > 0) {
            if (this.outline.getView().scale != e) {
                this.outline.getView().scale = e;
                a = true
            }
            d = this.outline.getView();
            d.currentRoot != this.source.getView().currentRoot && d.setCurrentRoot(this.source.getView().currentRoot);
            var b = this.source.view.translate, f = b.x + this.source.panDx, g = b.y + this.source.panDy, e = this.getOutlineOffset(e);
            if (e != null) {
                f = f + e.x;
                g = g + e.y
            }
            c.x < 0 && (f = f - c.x);
            c.y < 0 && (g = g - c.y);
            if (d.translate.x != f || d.translate.y != g) {
                d.translate.x = f;
                d.translate.y = g;
                a = true
            }
            var c = d.translate,
                e = this.source.getView().scale, f = e / d.scale, g = 1 / d.scale, h = this.source.container;
            this.bounds = new mxRectangle((c.x - b.x - this.source.panDx) / g, (c.y - b.y - this.source.panDy) / g, h.clientWidth / f, h.clientHeight / f);
            this.bounds.x = this.bounds.x + this.source.container.scrollLeft * d.scale / e;
            this.bounds.y = this.bounds.y + this.source.container.scrollTop * d.scale / e;
            c = this.selectionBorder.bounds;
            if (c.x != this.bounds.x || c.y != this.bounds.y || c.width != this.bounds.width || c.height != this.bounds.height) {
                this.selectionBorder.bounds = this.bounds;
                this.selectionBorder.redraw()
            }
            c = this.sizer.bounds;
            d = new mxRectangle(this.bounds.x + this.bounds.width - c.width / 2, this.bounds.y + this.bounds.height - c.height / 2, c.width, c.height);
            if (c.x != d.x || c.y != d.y || c.width != d.width || c.height != d.height) {
                this.sizer.bounds = d;
                this.sizer.node.style.visibility != "hidden" && this.sizer.redraw()
            }
            a && this.outline.view.revalidate()
        }
    }
};
mxOutline.prototype.mouseDown = function (a, b) {
    if (this.enabled && this.showViewport) {
        this.zoom = b.isSource(this.sizer);
        this.startX = b.getX();
        this.startY = b.getY();
        this.active = true;
        if (this.source.useScrollbarsForPanning && mxUtils.hasScrollbars(this.source.container)) {
            this.dx0 = this.source.container.scrollLeft;
            this.dy0 = this.source.container.scrollTop
        } else this.dy0 = this.dx0 = 0
    }
    b.consume()
};
mxOutline.prototype.mouseMove = function (a, b) {
    if (this.active) {
        this.selectionBorder.node.style.display = this.showViewport ? "" : "none";
        this.sizer.node.style.display = this.selectionBorder.node.style.display;
        var c = b.getX() - this.startX, d = b.getY() - this.startY, e = null;
        if (this.zoom) {
            e = this.source.container;
            d = c / (e.clientWidth / e.clientHeight);
            e = new mxRectangle(this.bounds.x, this.bounds.y, Math.max(1, this.bounds.width + c), Math.max(1, this.bounds.height + d));
            this.selectionBorder.bounds = e;
            this.selectionBorder.redraw()
        } else {
            var f =
                this.outline.getView().scale, e = new mxRectangle(this.bounds.x + c, this.bounds.y + d, this.bounds.width, this.bounds.height);
            this.selectionBorder.bounds = e;
            this.selectionBorder.redraw();
            c = c / f * this.source.getView().scale;
            d = d / f * this.source.getView().scale;
            this.source.panGraph(-c - this.dx0, -d - this.dy0)
        }
        c = this.sizer.bounds;
        this.sizer.bounds = new mxRectangle(e.x + e.width - c.width / 2, e.y + e.height - c.height / 2, c.width, c.height);
        this.sizer.node.style.visibility != "hidden" && this.sizer.redraw();
        b.consume()
    }
};
mxOutline.prototype.mouseUp = function (a, b) {
    if (this.active) {
        var c = b.getX() - this.startX, d = b.getY() - this.startY;
        if (Math.abs(c) > 0 || Math.abs(d) > 0) {
            if (this.zoom) {
                var d = this.selectionBorder.bounds.width, e = this.source.getView().scale;
                this.source.zoomTo(e - c * e / d, false)
            } else if (!this.source.useScrollbarsForPanning || !mxUtils.hasScrollbars(this.source.container)) {
                this.source.panGraph(0, 0);
                c = c / this.outline.getView().scale;
                d = d / this.outline.getView().scale;
                e = this.source.getView().translate;
                this.source.getView().setTranslate(e.x -
                    c, e.y - d)
            }
            this.update();
            b.consume()
        }
        this.index = null;
        this.active = false
    }
};
mxOutline.prototype.destroy = function () {
    if (this.source != null) {
        this.source.removeListener(this.panHandler);
        this.source.removeListener(this.refreshHandler);
        this.source.getModel().removeListener(this.updateHandler);
        this.source.getView().removeListener(this.updateHandler);
        mxEvent.addListener(this.source.container, "scroll", this.updateHandler);
        this.source = null
    }
    if (this.outline != null) {
        this.outline.removeMouseListener(this);
        this.outline.destroy();
        this.outline = null
    }
    if (this.selectionBorder != null) {
        this.selectionBorder.destroy();
        this.selectionBorder = null
    }
    if (this.sizer != null) {
        this.sizer.destroy();
        this.sizer = null
    }
};
function mxMultiplicity(a, b, c, d, e, f, g, h, k, i) {
    this.source = a;
    this.type = b;
    this.attr = c;
    this.value = d;
    this.min = e != null ? e : 0;
    this.max = f != null ? f : "n";
    this.validNeighbors = g;
    this.countError = mxResources.get(h) || h;
    this.typeError = mxResources.get(k) || k;
    this.validNeighborsAllowed = i != null ? i : true
}
mxMultiplicity.prototype.type = null;
mxMultiplicity.prototype.attr = null;
mxMultiplicity.prototype.value = null;
mxMultiplicity.prototype.source = null;
mxMultiplicity.prototype.min = null;
mxMultiplicity.prototype.max = null;
mxMultiplicity.prototype.validNeighbors = null;
mxMultiplicity.prototype.validNeighborsAllowed = !0;
mxMultiplicity.prototype.countError = null;
mxMultiplicity.prototype.typeError = null;
mxMultiplicity.prototype.check = function (a, b, c, d, e, f) {
    var g = "";
    if (this.source && this.checkTerminal(a, c, b) || !this.source && this.checkTerminal(a, d, b)) {
        if (this.countError != null && (this.source && (this.max == 0 || e >= this.max) || !this.source && (this.max == 0 || f >= this.max)))g = g + (this.countError + "\n");
        this.validNeighbors != null && (this.typeError != null && this.validNeighbors.length > 0) && (this.checkNeighbors(a, b, c, d) || (g = g + (this.typeError + "\n")))
    }
    return g.length > 0 ? g : null
};
mxMultiplicity.prototype.checkNeighbors = function (a, b, c, d) {
    for (var b = a.model.getValue(c), d = a.model.getValue(d), c = !this.validNeighborsAllowed, e = this.validNeighbors, f = 0; f < e.length; f++)if (this.source && this.checkType(a, d, e[f])) {
        c = this.validNeighborsAllowed;
        break
    } else if (!this.source && this.checkType(a, b, e[f])) {
        c = this.validNeighborsAllowed;
        break
    }
    return c
};
mxMultiplicity.prototype.checkTerminal = function (a, b) {
    var c = a.model.getValue(b);
    return this.checkType(a, c, this.type, this.attr, this.value)
};
mxMultiplicity.prototype.checkType = function (a, b, c, d, e) {
    return b != null ? isNaN(b.nodeType) ? b == c : mxUtils.isNode(b, c, d, e) : false
};
function mxLayoutManager(a) {
    this.undoHandler = mxUtils.bind(this, function (a, c) {
        this.isEnabled() && this.beforeUndo(c.getProperty("edit"))
    });
    this.moveHandler = mxUtils.bind(this, function (a, c) {
        this.isEnabled() && this.cellsMoved(c.getProperty("cells"), c.getProperty("event"))
    });
    this.setGraph(a)
}
mxLayoutManager.prototype = new mxEventSource;
mxLayoutManager.prototype.constructor = mxLayoutManager;
mxLayoutManager.prototype.graph = null;
mxLayoutManager.prototype.bubbling = !0;
mxLayoutManager.prototype.enabled = !0;
mxLayoutManager.prototype.updateHandler = null;
mxLayoutManager.prototype.moveHandler = null;
mxLayoutManager.prototype.isEnabled = function () {
    return this.enabled
};
mxLayoutManager.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxLayoutManager.prototype.isBubbling = function () {
    return this.bubbling
};
mxLayoutManager.prototype.setBubbling = function (a) {
    this.bubbling = a
};
mxLayoutManager.prototype.getGraph = function () {
    return this.graph
};
mxLayoutManager.prototype.setGraph = function (a) {
    if (this.graph != null) {
        var b = this.graph.getModel();
        b.removeListener(this.undoHandler);
        this.graph.removeListener(this.moveHandler)
    }
    this.graph = a;
    if (this.graph != null) {
        b = this.graph.getModel();
        b.addListener(mxEvent.BEFORE_UNDO, this.undoHandler);
        this.graph.addListener(mxEvent.MOVE_CELLS, this.moveHandler)
    }
};
mxLayoutManager.prototype.getLayout = function () {
    return null
};
mxLayoutManager.prototype.beforeUndo = function (a) {
    var a = this.getCellsForChanges(a.changes), b = this.getGraph().getModel();
    if (this.isBubbling())for (var c = b.getParents(a); c.length > 0;) {
        a = a.concat(c);
        c = b.getParents(c)
    }
    this.layoutCells(mxUtils.sortCells(a, false))
};
mxLayoutManager.prototype.cellsMoved = function (a, b) {
    if (a != null && b != null)for (var c = mxUtils.convertPoint(this.getGraph().container, mxEvent.getClientX(b), mxEvent.getClientY(b)), d = this.getGraph().getModel(), e = 0; e < a.length; e++) {
        var f = this.getLayout(d.getParent(a[e]));
        f != null && f.moveCell(a[e], c.x, c.y)
    }
};
mxLayoutManager.prototype.getCellsForChanges = function (a) {
    for (var b = [], c = {}, d = 0; d < a.length; d++) {
        var e = a[d];
        if (e instanceof mxRootChange)return[];
        for (var e = this.getCellsForChange(e), f = 0; f < e.length; f++)if (e[f] != null) {
            var g = mxCellPath.create(e[f]);
            if (c[g] == null) {
                c[g] = e[f];
                b.push(e[f])
            }
        }
    }
    return b
};
mxLayoutManager.prototype.getCellsForChange = function (a) {
    var b = this.getGraph().getModel();
    return a instanceof mxChildChange ? [a.child, a.previous, b.getParent(a.child)] : a instanceof mxTerminalChange || a instanceof mxGeometryChange ? [a.cell, b.getParent(a.cell)] : []
};
mxLayoutManager.prototype.layoutCells = function (a) {
    if (a.length > 0) {
        var b = this.getGraph().getModel();
        b.beginUpdate();
        try {
            for (var c = null, d = 0; d < a.length; d++)if (a[d] != b.getRoot() && a[d] != c) {
                c = a[d];
                this.executeLayout(this.getLayout(c), c)
            }
            this.fireEvent(new mxEventObject(mxEvent.LAYOUT_CELLS, "cells", a))
        } finally {
            b.endUpdate()
        }
    }
};
mxLayoutManager.prototype.executeLayout = function (a, b) {
    a != null && b != null && a.execute(b)
};
mxLayoutManager.prototype.destroy = function () {
    this.setGraph(null)
};
function mxSpaceManager(a, b, c, d) {
    this.resizeHandler = mxUtils.bind(this, function (a, b) {
        this.isEnabled() && this.cellsResized(b.getProperty("cells"))
    });
    this.foldHandler = mxUtils.bind(this, function (a, b) {
        this.isEnabled() && this.cellsResized(b.getProperty("cells"))
    });
    this.shiftRightwards = b != null ? b : true;
    this.shiftDownwards = c != null ? c : true;
    this.extendParents = d != null ? d : true;
    this.setGraph(a)
}
mxSpaceManager.prototype = new mxEventSource;
mxSpaceManager.prototype.constructor = mxSpaceManager;
mxSpaceManager.prototype.graph = null;
mxSpaceManager.prototype.enabled = !0;
mxSpaceManager.prototype.shiftRightwards = !0;
mxSpaceManager.prototype.shiftDownwards = !0;
mxSpaceManager.prototype.extendParents = !0;
mxSpaceManager.prototype.resizeHandler = null;
mxSpaceManager.prototype.foldHandler = null;
mxSpaceManager.prototype.isCellIgnored = function (a) {
    return!this.getGraph().getModel().isVertex(a)
};
mxSpaceManager.prototype.isCellShiftable = function (a) {
    return this.getGraph().getModel().isVertex(a) && this.getGraph().isCellMovable(a)
};
mxSpaceManager.prototype.isEnabled = function () {
    return this.enabled
};
mxSpaceManager.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxSpaceManager.prototype.isShiftRightwards = function () {
    return this.shiftRightwards
};
mxSpaceManager.prototype.setShiftRightwards = function (a) {
    this.shiftRightwards = a
};
mxSpaceManager.prototype.isShiftDownwards = function () {
    return this.shiftDownwards
};
mxSpaceManager.prototype.setShiftDownwards = function (a) {
    this.shiftDownwards = a
};
mxSpaceManager.prototype.isExtendParents = function () {
    return this.extendParents
};
mxSpaceManager.prototype.setExtendParents = function (a) {
    this.extendParents = a
};
mxSpaceManager.prototype.getGraph = function () {
    return this.graph
};
mxSpaceManager.prototype.setGraph = function (a) {
    if (this.graph != null) {
        this.graph.removeListener(this.resizeHandler);
        this.graph.removeListener(this.foldHandler)
    }
    this.graph = a;
    if (this.graph != null) {
        this.graph.addListener(mxEvent.RESIZE_CELLS, this.resizeHandler);
        this.graph.addListener(mxEvent.FOLD_CELLS, this.foldHandler)
    }
};
mxSpaceManager.prototype.cellsResized = function (a) {
    if (a != null) {
        var b = this.graph.getModel();
        b.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++)if (!this.isCellIgnored(a[c])) {
                this.cellResized(a[c]);
                break
            }
        } finally {
            b.endUpdate()
        }
    }
};
mxSpaceManager.prototype.cellResized = function (a) {
    var b = this.getGraph(), c = b.getView(), d = b.getModel(), e = c.getState(a), f = c.getState(d.getParent(a));
    if (e != null && f != null) {
        var g = this.getCellsToShift(e), h = d.getGeometry(a);
        if (g != null && h != null) {
            var k = c.translate, i = c.scale, c = e.x - f.origin.x - k.x * i, f = e.y - f.origin.y - k.y * i, k = e.x + e.width, l = e.y + e.height, m = e.width - h.width * i + c - h.x * i, n = e.height - h.height * i + f - h.y * i, o = 1 - h.width * i / e.width, e = 1 - h.height * i / e.height;
            d.beginUpdate();
            try {
                for (h = 0; h < g.length; h++)g[h] != a && this.isCellShiftable(g[h]) &&
                this.shiftCell(g[h], m, n, c, f, k, l, o, e, this.isExtendParents() && b.isExtendParent(g[h]))
            } finally {
                d.endUpdate()
            }
        }
    }
};
mxSpaceManager.prototype.shiftCell = function (a, b, c, d, e, f, g, h, k, i) {
    var d = this.getGraph(), l = d.getView().getState(a);
    if (l != null) {
        var m = d.getModel(), n = m.getGeometry(a);
        if (n != null) {
            m.beginUpdate();
            try {
                if (this.isShiftRightwards())if (l.x >= f) {
                    n = n.clone();
                    n.translate(-b, 0)
                } else {
                    var o = Math.max(0, l.x - x0), n = n.clone();
                    n.translate(-h * o, 0)
                }
                if (this.isShiftDownwards())if (l.y >= g) {
                    n = n.clone();
                    n.translate(0, -c)
                } else {
                    var p = Math.max(0, l.y - e), n = n.clone();
                    n.translate(0, -k * p)
                }
                if (n != m.getGeometry(a)) {
                    m.setGeometry(a, n);
                    i &&
                    d.extendParent(a)
                }
            } finally {
                m.endUpdate()
            }
        }
    }
};
mxSpaceManager.prototype.getCellsToShift = function (a) {
    var b = this.getGraph(), c = b.getModel().getParent(a.cell), d = this.isShiftDownwards(), e = this.isShiftRightwards();
    return b.getCellsBeyond(a.x + (d ? 0 : a.width), a.y + (d && e ? 0 : a.height), c, e, d)
};
mxSpaceManager.prototype.destroy = function () {
    this.setGraph(null)
};
function mxSwimlaneManager(a, b, c, d) {
    this.horizontal = b != null ? b : true;
    this.addEnabled = c != null ? c : true;
    this.resizeEnabled = d != null ? d : true;
    this.addHandler = mxUtils.bind(this, function (a, b) {
        this.isEnabled() && this.isAddEnabled() && this.cellsAdded(b.getProperty("cells"))
    });
    this.resizeHandler = mxUtils.bind(this, function (a, b) {
        this.isEnabled() && this.isResizeEnabled() && this.cellsResized(b.getProperty("cells"))
    });
    this.setGraph(a)
}
mxSwimlaneManager.prototype = new mxEventSource;
mxSwimlaneManager.prototype.constructor = mxSwimlaneManager;
mxSwimlaneManager.prototype.graph = null;
mxSwimlaneManager.prototype.enabled = !0;
mxSwimlaneManager.prototype.horizontal = !0;
mxSwimlaneManager.prototype.addEnabled = !0;
mxSwimlaneManager.prototype.resizeEnabled = !0;
mxSwimlaneManager.prototype.addHandler = null;
mxSwimlaneManager.prototype.resizeHandler = null;
mxSwimlaneManager.prototype.isEnabled = function () {
    return this.enabled
};
mxSwimlaneManager.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxSwimlaneManager.prototype.isHorizontal = function () {
    return this.horizontal
};
mxSwimlaneManager.prototype.setHorizontal = function (a) {
    this.horizontal = a
};
mxSwimlaneManager.prototype.isAddEnabled = function () {
    return this.addEnabled
};
mxSwimlaneManager.prototype.setAddEnabled = function (a) {
    this.addEnabled = a
};
mxSwimlaneManager.prototype.isResizeEnabled = function () {
    return this.resizeEnabled
};
mxSwimlaneManager.prototype.setResizeEnabled = function (a) {
    this.resizeEnabled = a
};
mxSwimlaneManager.prototype.getGraph = function () {
    return this.graph
};
mxSwimlaneManager.prototype.setGraph = function (a) {
    if (this.graph != null) {
        this.graph.removeListener(this.addHandler);
        this.graph.removeListener(this.resizeHandler)
    }
    this.graph = a;
    if (this.graph != null) {
        this.graph.addListener(mxEvent.ADD_CELLS, this.addHandler);
        this.graph.addListener(mxEvent.CELLS_RESIZED, this.resizeHandler)
    }
};
mxSwimlaneManager.prototype.isSwimlaneIgnored = function (a) {
    return!this.getGraph().isSwimlane(a)
};
mxSwimlaneManager.prototype.isCellHorizontal = function (a) {
    if (this.graph.isSwimlane(a)) {
        var b = this.graph.view.getState(a), a = b != null ? b.style : this.graph.getCellStyle(a);
        return mxUtils.getValue(a, mxConstants.STYLE_HORIZONTAL, 1) == 1
    }
    return!this.isHorizontal()
};
mxSwimlaneManager.prototype.cellsAdded = function (a) {
    if (a != null) {
        var b = this.getGraph().getModel();
        b.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++)this.isSwimlaneIgnored(a[c]) || this.swimlaneAdded(a[c])
        } finally {
            b.endUpdate()
        }
    }
};
mxSwimlaneManager.prototype.swimlaneAdded = function (a) {
    for (var b = this.getGraph().getModel(), c = b.getParent(a), d = b.getChildCount(c), e = null, f = 0; f < d; f++) {
        var g = b.getChildAt(c, f);
        if (g != a && !this.isSwimlaneIgnored(g)) {
            e = b.getGeometry(g);
            if (e != null)break
        }
    }
    e != null && this.resizeSwimlane(a, e.width, e.height)
};
mxSwimlaneManager.prototype.cellsResized = function (a) {
    if (a != null) {
        var b = this.getGraph().getModel();
        b.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++)if (!this.isSwimlaneIgnored(a[c])) {
                var d = b.getGeometry(a[c]);
                if (d != null) {
                    for (var e = new mxRectangle(0, 0, d.width, d.height), f = a[c], g = f; g != null;) {
                        var f = g, g = b.getParent(g), h = this.graph.isSwimlane(g) ? this.graph.getStartSize(g) : new mxRectangle;
                        e.width = e.width + h.width;
                        e.height = e.height + h.height
                    }
                    this.resizeSwimlane(f, e.width, e.height)
                }
            }
        } finally {
            b.endUpdate()
        }
    }
};
mxSwimlaneManager.prototype.resizeSwimlane = function (a, b, c) {
    var d = this.getGraph().getModel();
    d.beginUpdate();
    try {
        if (!this.isSwimlaneIgnored(a)) {
            var e = d.getGeometry(a);
            if (e != null) {
                var f = this.isCellHorizontal(a);
                if (f && e.height != c || !f && e.width != b) {
                    e = e.clone();
                    f ? e.height = c : e.width = b;
                    d.setGeometry(a, e)
                }
            }
        }
        for (var g = this.graph.isSwimlane(a) ? this.graph.getStartSize(a) : new mxRectangle, b = b - g.width, c = c - g.height, h = d.getChildCount(a), e = 0; e < h; e++)this.resizeSwimlane(d.getChildAt(a, e), b, c)
    } finally {
        d.endUpdate()
    }
};
mxSwimlaneManager.prototype.destroy = function () {
    this.setGraph(null)
};
function mxTemporaryCellStates(a, b, c) {
    this.view = a;
    b = b != null ? b : 1;
    this.oldBounds = a.getGraphBounds();
    this.oldStates = a.getStates();
    this.oldScale = a.getScale();
    a.setStates(new mxDictionary);
    a.setScale(b);
    if (c != null) {
        for (var b = a.createState(new mxCell), d = 0; d < c.length; d++)a.validateBounds(b, c[d]);
        for (var e = null, d = 0; d < c.length; d++) {
            var f = a.validatePoints(b, c[d]);
            e == null ? e = f : e.add(f)
        }
        e == null && (e = new mxRectangle);
        a.setGraphBounds(e)
    }
}
mxTemporaryCellStates.prototype.view = null;
mxTemporaryCellStates.prototype.oldStates = null;
mxTemporaryCellStates.prototype.oldBounds = null;
mxTemporaryCellStates.prototype.oldScale = null;
mxTemporaryCellStates.prototype.destroy = function () {
    this.view.setScale(this.oldScale);
    this.view.setStates(this.oldStates);
    this.view.setGraphBounds(this.oldBounds)
};
function mxCellStatePreview(a) {
    this.graph = a;
    this.deltas = {}
}
mxCellStatePreview.prototype.graph = null;
mxCellStatePreview.prototype.deltas = null;
mxCellStatePreview.prototype.count = 0;
mxCellStatePreview.prototype.isEmpty = function () {
    return this.count == 0
};
mxCellStatePreview.prototype.moveState = function (a, b, c, d, e) {
    var d = d != null ? d : true, e = e != null ? e : true, f = mxCellPath.create(a.cell), g = this.deltas[f];
    if (g == null) {
        g = new mxPoint(b, c);
        this.deltas[f] = g;
        this.count++
    } else if (d) {
        g.X = g.X + b;
        g.Y = g.Y + c
    } else {
        g.X = b;
        g.Y = c
    }
    e && this.addEdges(a);
    return g
};
mxCellStatePreview.prototype.show = function (a) {
    var b = this.graph.getModel(), c = b.getRoot(), d;
    for (d in this.deltas) {
        var e = mxCellPath.resolve(c, d), f = this.graph.view.getState(e), g = this.deltas[d], e = this.graph.view.getState(b.getParent(e));
        this.translateState(e, f, g.x, g.y)
    }
    for (d in this.deltas) {
        e = mxCellPath.resolve(c, d);
        f = this.graph.view.getState(e);
        g = this.deltas[d];
        e = this.graph.view.getState(b.getParent(e));
        this.revalidateState(e, f, g.x, g.y, a)
    }
};
mxCellStatePreview.prototype.translateState = function (a, b, c, d) {
    if (b != null) {
        var e = this.graph.getModel();
        if (e.isVertex(b.cell)) {
            b.invalid = true;
            this.graph.view.validateBounds(a, b.cell);
            var a = e.getGeometry(b.cell), f = mxCellPath.create(b.cell);
            if ((c != 0 || d != 0) && a != null && (!a.relative || this.deltas[f] != null)) {
                b.x = b.x + c;
                b.y = b.y + d
            }
        }
        a = e.getChildCount(b.cell);
        for (f = 0; f < a; f++)this.translateState(b, this.graph.view.getState(e.getChildAt(b.cell, f)), c, d)
    }
};
mxCellStatePreview.prototype.revalidateState = function (a, b, c, d, e) {
    if (b != null) {
        b.invalid = true;
        this.graph.view.validatePoints(a, b.cell);
        var f = mxCellPath.create(b.cell), g = this.graph.getModel(), h = this.graph.getCellGeometry(b.cell);
        if ((c != 0 || d != 0) && h != null && h.relative && g.isVertex(b.cell) && (a == null || g.isVertex(a.cell) || this.deltas[f] != null)) {
            b.x = b.x + c;
            b.y = b.y + d;
            this.graph.view.updateLabelBounds(b);
            this.graph.cellRenderer.redraw(b)
        }
        e != null && e(b);
        a = g.getChildCount(b.cell);
        for (f = 0; f < a; f++)this.revalidateState(b,
            this.graph.view.getState(g.getChildAt(b.cell, f)), c, d, e)
    }
};
mxCellStatePreview.prototype.addEdges = function (a) {
    for (var b = this.graph.getModel(), c = b.getEdgeCount(a.cell), d = 0; d < c; d++) {
        var e = this.graph.view.getState(b.getEdgeAt(a.cell, d));
        e != null && this.moveState(e, 0, 0)
    }
};
function mxConnectionConstraint(a, b) {
    this.point = a;
    this.perimeter = b != null ? b : true
}
mxConnectionConstraint.prototype.point = null;
mxConnectionConstraint.prototype.perimeter = null;
function mxGraphHandler(a) {
    this.graph = a;
    this.graph.addMouseListener(this);
    this.panHandler = mxUtils.bind(this, function () {
        this.updatePreviewShape()
    });
    this.graph.addListener(mxEvent.PAN, this.panHandler)
}
mxGraphHandler.prototype.graph = null;
mxGraphHandler.prototype.maxCells = mxClient.IS_IE ? 20 : 50;
mxGraphHandler.prototype.enabled = !0;
mxGraphHandler.prototype.highlightEnabled = !0;
mxGraphHandler.prototype.cloneEnabled = !0;
mxGraphHandler.prototype.moveEnabled = !0;
mxGraphHandler.prototype.guidesEnabled = !1;
mxGraphHandler.prototype.guide = null;
mxGraphHandler.prototype.currentDx = null;
mxGraphHandler.prototype.currentDy = null;
mxGraphHandler.prototype.updateCursor = !0;
mxGraphHandler.prototype.selectEnabled = !0;
mxGraphHandler.prototype.removeCellsFromParent = !0;
mxGraphHandler.prototype.connectOnDrop = !1;
mxGraphHandler.prototype.scrollOnMove = !0;
mxGraphHandler.prototype.minimumSize = 6;
mxGraphHandler.prototype.previewColor = "black";
mxGraphHandler.prototype.htmlPreview = !1;
mxGraphHandler.prototype.shape = null;
mxGraphHandler.prototype.scaleGrid = !1;
mxGraphHandler.prototype.crisp = !0;
mxGraphHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxGraphHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxGraphHandler.prototype.isCloneEnabled = function () {
    return this.cloneEnabled
};
mxGraphHandler.prototype.setCloneEnabled = function (a) {
    this.cloneEnabled = a
};
mxGraphHandler.prototype.isMoveEnabled = function () {
    return this.moveEnabled
};
mxGraphHandler.prototype.setMoveEnabled = function (a) {
    this.moveEnabled = a
};
mxGraphHandler.prototype.isSelectEnabled = function () {
    return this.selectEnabled
};
mxGraphHandler.prototype.setSelectEnabled = function (a) {
    this.selectEnabled = a
};
mxGraphHandler.prototype.isRemoveCellsFromParent = function () {
    return this.removeCellsFromParent
};
mxGraphHandler.prototype.setRemoveCellsFromParent = function (a) {
    this.removeCellsFromParent = a
};
mxGraphHandler.prototype.getInitialCellForEvent = function (a) {
    return a.getCell()
};
mxGraphHandler.prototype.isDelayedSelection = function (a) {
    return this.graph.isCellSelected(a)
};
mxGraphHandler.prototype.mouseDown = function (a, b) {
    if (!b.isConsumed() && this.isEnabled() && this.graph.isEnabled() && !this.graph.isForceMarqueeEvent(b.getEvent()) && b.getState() != null) {
        var c = this.getInitialCellForEvent(b);
        this.cell = null;
        this.delayedSelection = this.isDelayedSelection(c);
        this.isSelectEnabled() && !this.delayedSelection && this.graph.selectCellForEvent(c, b.getEvent());
        if (this.isMoveEnabled()) {
            var d = this.graph.model, e = d.getGeometry(c);
            this.graph.isCellMovable(c) && (!d.isEdge(c) || this.graph.getSelectionCount() >
                1 || e.points != null && e.points.length > 0 || d.getTerminal(c, true) == null || d.getTerminal(c, false) == null || this.graph.allowDanglingEdges || this.graph.isCloneEvent(b.getEvent()) && this.graph.isCellsCloneable()) && this.start(c, b.getX(), b.getY());
            this.cellWasClicked = true;
            if (!mxClient.IS_SF && !mxClient.IS_GC || b.getSource().nodeName != "SELECT")b.consume(); else if (mxClient.IS_SF && b.getSource().nodeName == "SELECT") {
                this.cellWasClicked = false;
                this.first = null
            }
        }
    }
};
mxGraphHandler.prototype.getGuideStates = function () {
    var a = this.graph.getDefaultParent(), b = this.graph.getModel(), c = mxUtils.bind(this, function (a) {
        return this.graph.view.getState(a) != null && b.isVertex(a) && b.getGeometry(a) != null && !b.getGeometry(a).relative
    });
    return this.graph.view.getCellStates(b.filterDescendants(c, a))
};
mxGraphHandler.prototype.getCells = function (a) {
    return!this.delayedSelection && this.graph.isCellMovable(a) ? [a] : this.graph.getMovableCells(this.graph.getSelectionCells())
};
mxGraphHandler.prototype.getPreviewBounds = function (a) {
    a = this.graph.getView().getBounds(a);
    if (a != null) {
        if (a.width < this.minimumSize) {
            a.x = a.x - (this.minimumSize - a.width) / 2;
            a.width = this.minimumSize
        }
        if (a.height < this.minimumSize) {
            a.y = a.y - (this.minimumSize - a.height) / 2;
            a.height = this.minimumSize
        }
    }
    return a
};
mxGraphHandler.prototype.createPreviewShape = function (a) {
    a = new mxRectangleShape(a, null, this.previewColor);
    a.isDashed = true;
    a.crisp = this.crisp;
    if (this.htmlPreview) {
        a.dialect = mxConstants.DIALECT_STRICTHTML;
        a.init(this.graph.container)
    } else {
        a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
        a.init(this.graph.getView().getOverlayPane());
        a.dialect == mxConstants.DIALECT_SVG ? a.node.setAttribute("style", "pointer-events:none;") : a.node.style.background = ""
    }
    return a
};
mxGraphHandler.prototype.start = function (a, b, c) {
    this.cell = a;
    this.first = mxUtils.convertPoint(this.graph.container, b, c);
    this.cells = this.getCells(this.cell);
    this.bounds = this.getPreviewBounds(this.cells);
    if (this.guidesEnabled)this.guide = new mxGuide(this.graph, this.getGuideStates())
};
mxGraphHandler.prototype.useGuidesForEvent = function (a) {
    return this.guide != null ? this.guide.isEnabledForEvent(a.getEvent()) : true
};
mxGraphHandler.prototype.snap = function (a) {
    var b = this.scaleGrid ? this.graph.view.scale : 1;
    a.x = this.graph.snap(a.x / b) * b;
    a.y = this.graph.snap(a.y / b) * b;
    return a
};
mxGraphHandler.prototype.mouseMove = function (a, b) {
    var c = this.graph;
    if (!b.isConsumed() && c.isMouseDown && this.cell != null && this.first != null && this.bounds != null) {
        var d = mxUtils.convertPoint(c.container, b.getX(), b.getY()), e = d.x - this.first.x, f = d.y - this.first.y, d = c.tolerance;
        if (this.shape != null || Math.abs(e) > d || Math.abs(f) > d) {
            if (this.highlight == null)this.highlight = new mxCellHighlight(this.graph, mxConstants.DROP_TARGET_COLOR, 3);
            if (this.shape == null)this.shape = this.createPreviewShape(this.bounds);
            var g = c.isGridEnabledEvent(b.getEvent()),
                d = true;
            if (this.guide != null && this.useGuidesForEvent(b)) {
                f = this.guide.move(this.bounds, new mxPoint(e, f), g);
                d = false;
                e = f.x;
                f = f.y
            } else if (g)var h = c.getView().translate, k = c.getView().scale, g = this.bounds.x - (c.snap(this.bounds.x / k - h.x) + h.x) * k, h = this.bounds.y - (c.snap(this.bounds.y / k - h.y) + h.y) * k, f = this.snap(new mxPoint(e, f)), e = f.x - g, f = f.y - h;
            this.guide != null && d && this.guide.hide();
            c.isConstrainedEvent(b.getEvent()) && (Math.abs(e) > Math.abs(f) ? f = 0 : e = 0);
            this.currentDx = e;
            this.currentDy = f;
            this.updatePreviewShape();
            e = null;
            d = b.getCell();
            c.isDropEnabled() && this.highlightEnabled && (e = c.getDropTarget(this.cells, b.getEvent(), d));
            f = e;
            for (g = c.getModel(); f != null && f != this.cells[0];)f = g.getParent(f);
            var h = c.isCloneEvent(b.getEvent()) && c.isCellsCloneable() && this.isCloneEnabled(), k = c.getView().getState(e), i = false;
            if (k != null && f == null && (g.getParent(this.cell) != e || h)) {
                if (this.target != e) {
                    this.target = e;
                    this.setHighlightColor(mxConstants.DROP_TARGET_COLOR)
                }
                i = true
            } else {
                this.target = null;
                if (this.connectOnDrop && d != null && this.cells.length ==
                    1 && c.getModel().isVertex(d) && c.isCellConnectable(d)) {
                    k = c.getView().getState(d);
                    if (k != null) {
                        this.setHighlightColor(c.getEdgeValidationError(null, this.cell, d) == null ? mxConstants.VALID_COLOR : mxConstants.INVALID_CONNECT_TARGET_COLOR);
                        i = true
                    }
                }
            }
            k != null && i ? this.highlight.highlight(k) : this.highlight.hide()
        }
        b.consume();
        mxEvent.consume(b.getEvent())
    } else if ((this.isMoveEnabled() || this.isCloneEnabled()) && this.updateCursor && !b.isConsumed() && b.getState() != null && !c.isMouseDown) {
        e = c.getCursorForCell(b.getCell());
        e == null && (c.isEnabled() && c.isCellMovable(b.getCell())) && (e = c.getModel().isEdge(b.getCell()) ? mxConstants.CURSOR_MOVABLE_EDGE : mxConstants.CURSOR_MOVABLE_VERTEX);
        b.getState().setCursor(e);
        b.consume()
    }
};
mxGraphHandler.prototype.updatePreviewShape = function () {
    if (this.shape != null) {
        this.shape.bounds = new mxRectangle(this.bounds.x + this.currentDx - this.graph.panDx, this.bounds.y + this.currentDy - this.graph.panDy, this.bounds.width, this.bounds.height);
        this.shape.redraw()
    }
};
mxGraphHandler.prototype.setHighlightColor = function (a) {
    this.highlight != null && this.highlight.setHighlightColor(a)
};
mxGraphHandler.prototype.mouseUp = function (a, b) {
    if (!b.isConsumed()) {
        var c = this.graph;
        if (this.cell != null && this.first != null && this.shape != null && this.currentDx != null && this.currentDy != null) {
            var d = c.getView().scale, e = c.isCloneEvent(b.getEvent()) && c.isCellsCloneable() && this.isCloneEnabled(), f = this.currentDx / d, d = this.currentDy / d, g = b.getCell();
            if (this.connectOnDrop && this.target == null && g != null && c.getModel().isVertex(g) && c.isCellConnectable(g) && c.isEdgeValid(null, this.cell, g))c.connectionHandler.connect(this.cell,
                g, b.getEvent()); else {
                g = this.target;
                c.isSplitEnabled() && c.isSplitTarget(g, this.cells, b.getEvent()) ? c.splitEdge(g, this.cells, null, f, d) : this.moveCells(this.cells, f, d, e, this.target, b.getEvent())
            }
        } else this.isSelectEnabled() && (this.delayedSelection && this.cell != null) && this.selectDelayed(b)
    }
    this.cellWasClicked && b.consume();
    this.reset()
};
mxGraphHandler.prototype.selectDelayed = function (a) {
    this.graph.selectCellForEvent(this.cell, a.getEvent())
};
mxGraphHandler.prototype.reset = function () {
    this.destroyShapes();
    this.delayedSelection = this.cellWasClicked = false;
    this.target = this.cell = this.first = this.guides = this.currentDy = this.currentDx = null
};
mxGraphHandler.prototype.shouldRemoveCellsFromParent = function (a, b, c) {
    if (this.graph.getModel().isVertex(a)) {
        a = this.graph.getView().getState(a);
        c = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(c), mxEvent.getClientY(c));
        return a != null && !mxUtils.contains(a, c.x, c.y)
    }
    return false
};
mxGraphHandler.prototype.moveCells = function (a, b, c, d, e, f) {
    d && (a = this.graph.getCloneableCells(a));
    e == null && (this.isRemoveCellsFromParent() && this.shouldRemoveCellsFromParent(this.graph.getModel().getParent(this.cell), a, f)) && (e = this.graph.getDefaultParent());
    a = this.graph.moveCells(a, b - this.graph.panDx / this.graph.view.scale, c - this.graph.panDy / this.graph.view.scale, d, e, f);
    this.isSelectEnabled() && this.scrollOnMove && this.graph.scrollCellToVisible(a[0]);
    d && this.graph.setSelectionCells(a)
};
mxGraphHandler.prototype.destroyShapes = function () {
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
    if (this.guide != null) {
        this.guide.destroy();
        this.guide = null
    }
    if (this.highlight != null) {
        this.highlight.destroy();
        this.highlight = null
    }
};
mxGraphHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    this.graph.removeListener(this.panHandler);
    this.destroyShapes()
};
function mxPanningHandler(a, b) {
    if (a != null) {
        this.graph = a;
        this.factoryMethod = b;
        this.graph.addMouseListener(this);
        this.init()
    }
}
mxPanningHandler.prototype = new mxPopupMenu;
mxPanningHandler.prototype.constructor = mxPanningHandler;
mxPanningHandler.prototype.graph = null;
mxPanningHandler.prototype.usePopupTrigger = !0;
mxPanningHandler.prototype.useLeftButtonForPanning = !1;
mxPanningHandler.prototype.selectOnPopup = !0;
mxPanningHandler.prototype.clearSelectionOnBackground = !0;
mxPanningHandler.prototype.ignoreCell = !1;
mxPanningHandler.prototype.previewEnabled = !0;
mxPanningHandler.prototype.useGrid = !1;
mxPanningHandler.prototype.panningEnabled = !0;
mxPanningHandler.prototype.isPanningEnabled = function () {
    return this.panningEnabled
};
mxPanningHandler.prototype.setPanningEnabled = function (a) {
    this.panningEnabled = a
};
mxPanningHandler.prototype.init = function () {
    mxPopupMenu.prototype.init.apply(this);
    mxEvent.addListener(this.div, mxClient.IS_TOUCH ? "touchmove" : "mousemove", mxUtils.bind(this, function () {
        this.graph.tooltipHandler.hide()
    }))
};
mxPanningHandler.prototype.isPanningTrigger = function (a) {
    var b = a.getEvent();
    return this.useLeftButtonForPanning && (this.ignoreCell || a.getState() == null) && mxEvent.isLeftMouseButton(b) || mxEvent.isControlDown(b) && mxEvent.isShiftDown(b) || this.usePopupTrigger && mxEvent.isPopupTrigger(b)
};
mxPanningHandler.prototype.mouseDown = function (a, b) {
    if (!b.isConsumed() && this.isEnabled()) {
        this.hideMenu();
        this.dx0 = -this.graph.container.scrollLeft;
        this.dy0 = -this.graph.container.scrollTop;
        this.popupTrigger = this.isPopupTrigger(b);
        this.panningTrigger = this.isPanningEnabled() && this.isPanningTrigger(b);
        this.startX = b.getX();
        this.startY = b.getY();
        this.panningTrigger && this.consumePanningTrigger(b)
    }
};
mxPanningHandler.prototype.consumePanningTrigger = function (a) {
    a.consume()
};
mxPanningHandler.prototype.mouseMove = function (a, b) {
    var c = b.getX() - this.startX, d = b.getY() - this.startY;
    if (this.active) {
        if (this.previewEnabled) {
            if (this.useGrid) {
                c = this.graph.snap(c);
                d = this.graph.snap(d)
            }
            this.graph.panGraph(c + this.dx0, d + this.dy0)
        }
        this.fireEvent(new mxEventObject(mxEvent.PAN, "event", b));
        b.consume()
    } else if (this.panningTrigger) {
        var e = this.active;
        this.active = Math.abs(c) > this.graph.tolerance || Math.abs(d) > this.graph.tolerance;
        !e && this.active && this.fireEvent(new mxEventObject(mxEvent.PAN_START,
            "event", b))
    }
};
mxPanningHandler.prototype.mouseUp = function (a, b) {
    var c = Math.abs(b.getX() - this.startX), d = Math.abs(b.getY() - this.startY);
    if (this.active) {
        if (!this.graph.useScrollbarsForPanning || !mxUtils.hasScrollbars(this.graph.container)) {
            c = b.getX() - this.startX;
            d = b.getY() - this.startY;
            if (this.useGrid) {
                c = this.graph.snap(c);
                d = this.graph.snap(d)
            }
            var e = this.graph.getView().scale, f = this.graph.getView().translate;
            this.graph.panGraph(0, 0);
            this.panGraph(f.x + c / e, f.y + d / e)
        }
        this.active = false;
        this.fireEvent(new mxEventObject(mxEvent.PAN_END, "event",
            b));
        b.consume()
    } else if (this.popupTrigger && c < this.graph.tolerance && d < this.graph.tolerance) {
        c = this.getCellForPopupEvent(b);
        this.graph.isEnabled() && this.selectOnPopup && c != null && !this.graph.isCellSelected(c) ? this.graph.setSelectionCell(c) : this.clearSelectionOnBackground && c == null && this.graph.clearSelection();
        this.graph.tooltipHandler.hide();
        d = mxUtils.getScrollOrigin();
        d = new mxPoint(b.getX() + d.x, b.getY() + d.y);
        this.popup(d.x + 1, d.y + 1, c, b.getEvent());
        b.consume()
    }
    this.popupTrigger = this.panningTrigger = false
};
mxPanningHandler.prototype.getCellForPopupEvent = function (a) {
    return a.getCell()
};
mxPanningHandler.prototype.panGraph = function (a, b) {
    this.graph.getView().setTranslate(a, b)
};
mxPanningHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    mxPopupMenu.prototype.destroy.apply(this)
};
function mxCellMarker(a, b, c, d) {
    if (a != null) {
        this.graph = a;
        this.validColor = b != null ? b : mxConstants.DEFAULT_VALID_COLOR;
        this.invalidColor = b != null ? c : mxConstants.DEFAULT_INVALID_COLOR;
        this.hotspot = d != null ? d : mxConstants.DEFAULT_HOTSPOT;
        this.highlight = new mxCellHighlight(a)
    }
}
mxCellMarker.prototype = new mxEventSource;
mxCellMarker.prototype.constructor = mxCellMarker;
mxCellMarker.prototype.graph = null;
mxCellMarker.prototype.enabled = !0;
mxCellMarker.prototype.hotspot = mxConstants.DEFAULT_HOTSPOT;
mxCellMarker.prototype.hotspotEnabled = !1;
mxCellMarker.prototype.validColor = null;
mxCellMarker.prototype.invalidColor = null;
mxCellMarker.prototype.currentColor = null;
mxCellMarker.prototype.validState = null;
mxCellMarker.prototype.markedState = null;
mxCellMarker.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxCellMarker.prototype.isEnabled = function () {
    return this.enabled
};
mxCellMarker.prototype.setHotspot = function (a) {
    this.hotspot = a
};
mxCellMarker.prototype.getHotspot = function () {
    return this.hotspot
};
mxCellMarker.prototype.setHotspotEnabled = function (a) {
    this.hotspotEnabled = a
};
mxCellMarker.prototype.isHotspotEnabled = function () {
    return this.hotspotEnabled
};
mxCellMarker.prototype.hasValidState = function () {
    return this.validState != null
};
mxCellMarker.prototype.getValidState = function () {
    return this.validState
};
mxCellMarker.prototype.getMarkedState = function () {
    return this.markedState
};
mxCellMarker.prototype.reset = function () {
    this.validState = null;
    if (this.markedState != null) {
        this.markedState = null;
        this.unmark()
    }
};
mxCellMarker.prototype.process = function (a) {
    var b = null;
    if (this.isEnabled()) {
        var b = this.getState(a), c = b != null ? this.isValidState(b) : false, a = this.getMarkerColor(a.getEvent(), b, c);
        this.validState = c ? b : null;
        if (b != this.markedState || a != this.currentColor) {
            this.currentColor = a;
            if (b != null && this.currentColor != null) {
                this.markedState = b;
                this.mark()
            } else if (this.markedState != null) {
                this.markedState = null;
                this.unmark()
            }
        }
    }
    return b
};
mxCellMarker.prototype.markCell = function (a, b) {
    var c = this.graph.getView().getState(a);
    if (c != null) {
        this.currentColor = b != null ? b : this.validColor;
        this.markedState = c;
        this.mark()
    }
};
mxCellMarker.prototype.mark = function () {
    this.highlight.setHighlightColor(this.currentColor);
    this.highlight.highlight(this.markedState);
    this.fireEvent(new mxEventObject(mxEvent.MARK, "state", this.markedState))
};
mxCellMarker.prototype.unmark = function () {
    this.mark()
};
mxCellMarker.prototype.isValidState = function () {
    return true
};
mxCellMarker.prototype.getMarkerColor = function (a, b, c) {
    return c ? this.validColor : this.invalidColor
};
mxCellMarker.prototype.getState = function (a) {
    var b = this.graph.getView();
    cell = this.getCell(a);
    b = this.getStateToMark(b.getState(cell));
    return b != null && this.intersects(b, a) ? b : null
};
mxCellMarker.prototype.getCell = function (a) {
    return a.getCell()
};
mxCellMarker.prototype.getStateToMark = function (a) {
    return a
};
mxCellMarker.prototype.intersects = function (a, b) {
    return this.hotspotEnabled ? mxUtils.intersectsHotspot(a, b.getGraphX(), b.getGraphY(), this.hotspot, mxConstants.MIN_HOTSPOT_SIZE, mxConstants.MAX_HOTSPOT_SIZE) : true
};
mxCellMarker.prototype.destroy = function () {
    this.graph.getView().removeListener(this.resetHandler);
    this.graph.getModel().removeListener(this.resetHandler);
    this.highlight.destroy()
};
function mxSelectionCellsHandler(a) {
    this.graph = a;
    this.handlers = new mxDictionary;
    this.graph.addMouseListener(this);
    this.refreshHandler = mxUtils.bind(this, function () {
        this.isEnabled() && this.refresh()
    });
    this.graph.getSelectionModel().addListener(mxEvent.CHANGE, this.refreshHandler);
    this.graph.getModel().addListener(mxEvent.CHANGE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.SCALE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.TRANSLATE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE,
        this.refreshHandler);
    this.graph.getView().addListener(mxEvent.DOWN, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.UP, this.refreshHandler)
}
mxSelectionCellsHandler.prototype.graph = null;
mxSelectionCellsHandler.prototype.enabled = !0;
mxSelectionCellsHandler.prototype.refreshHandler = null;
mxSelectionCellsHandler.prototype.maxHandlers = 100;
mxSelectionCellsHandler.prototype.handlers = null;
mxSelectionCellsHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxSelectionCellsHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxSelectionCellsHandler.prototype.getHandler = function (a) {
    return this.handlers.get(a)
};
mxSelectionCellsHandler.prototype.reset = function () {
    this.handlers.visit(function (a, b) {
        b.reset.apply(b)
    })
};
mxSelectionCellsHandler.prototype.refresh = function () {
    var a = this.handlers;
    this.handlers = new mxDictionary;
    for (var b = this.graph.getSelectionCells(), c = 0; c < b.length; c++) {
        var d = this.graph.view.getState(b[c]);
        if (d != null) {
            var e = a.remove(b[c]);
            if (e != null)if (e.state != d) {
                e.destroy();
                e = null
            } else e.redraw();
            e == null && (e = this.graph.createHandler(d));
            e != null && this.handlers.put(b[c], e)
        }
    }
    a.visit(function (a, b) {
        b.destroy()
    })
};
mxSelectionCellsHandler.prototype.mouseDown = function (a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function (a, b) {
            b.mouseDown.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.mouseMove = function (a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function (a, b) {
            b.mouseMove.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.mouseUp = function (a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function (a, b) {
            b.mouseUp.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    if (this.refreshHandler != null) {
        this.graph.getSelectionModel().removeListener(this.refreshHandler);
        this.graph.getModel().removeListener(this.refreshHandler);
        this.graph.getView().removeListener(this.refreshHandler);
        this.refreshHandler = null
    }
};
function mxConnectionHandler(a, b) {
    if (a != null) {
        this.graph = a;
        this.factoryMethod = b;
        this.init()
    }
}
mxConnectionHandler.prototype = new mxEventSource;
mxConnectionHandler.prototype.constructor = mxConnectionHandler;
mxConnectionHandler.prototype.graph = null;
mxConnectionHandler.prototype.factoryMethod = !0;
mxConnectionHandler.prototype.moveIconFront = !1;
mxConnectionHandler.prototype.moveIconBack = !1;
mxConnectionHandler.prototype.connectImage = null;
mxConnectionHandler.prototype.targetConnectImage = !1;
mxConnectionHandler.prototype.enabled = !0;
mxConnectionHandler.prototype.select = !0;
mxConnectionHandler.prototype.createTarget = !1;
mxConnectionHandler.prototype.marker = null;
mxConnectionHandler.prototype.constraintHandler = null;
mxConnectionHandler.prototype.error = null;
mxConnectionHandler.prototype.waypointsEnabled = !1;
mxConnectionHandler.prototype.tapAndHoldEnabled = !0;
mxConnectionHandler.prototype.tapAndHoldDelay = 500;
mxConnectionHandler.prototype.tapAndHoldInProgress = !1;
mxConnectionHandler.prototype.tapAndHoldValid = !1;
mxConnectionHandler.prototype.tapAndHoldTolerance = 4;
mxConnectionHandler.prototype.initialTouchX = 0;
mxConnectionHandler.prototype.initialTouchY = 0;
mxConnectionHandler.prototype.ignoreMouseDown = !1;
mxConnectionHandler.prototype.first = null;
mxConnectionHandler.prototype.connectIconOffset = new mxPoint(0, mxConstants.TOOLTIP_VERTICAL_OFFSET);
mxConnectionHandler.prototype.edgeState = null;
mxConnectionHandler.prototype.changeHandler = null;
mxConnectionHandler.prototype.drillHandler = null;
mxConnectionHandler.prototype.mouseDownCounter = 0;
mxConnectionHandler.prototype.movePreviewAway = mxClient.IS_IE;
mxConnectionHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxConnectionHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxConnectionHandler.prototype.isCreateTarget = function () {
    return this.createTarget
};
mxConnectionHandler.prototype.setCreateTarget = function (a) {
    this.createTarget = a
};
mxConnectionHandler.prototype.createShape = function () {
    var a = new mxPolyline([], mxConstants.INVALID_COLOR);
    a.isDashed = true;
    a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    a.init(this.graph.getView().getOverlayPane());
    if (this.graph.dialect == mxConstants.DIALECT_SVG) {
        a.pipe.setAttribute("style", "pointer-events:none;");
        a.innerNode.setAttribute("style", "pointer-events:none;")
    } else {
        var b = mxUtils.bind(this, function (a) {
            a = mxUtils.convertPoint(this.graph.container,
                mxEvent.getClientX(a), mxEvent.getClientY(a));
            return this.graph.view.getState(this.graph.getCellAt(a.x, a.y))
        });
        mxEvent.redirectMouseEvents(a.node, this.graph, b)
    }
    return a
};
mxConnectionHandler.prototype.init = function () {
    this.graph.addMouseListener(this);
    this.marker = this.createMarker();
    this.constraintHandler = new mxConstraintHandler(this.graph);
    this.changeHandler = mxUtils.bind(this, function () {
        if (this.iconState != null)this.iconState = this.graph.getView().getState(this.iconState.cell);
        if (this.iconState != null)this.redrawIcons(this.icons, this.iconState); else {
            this.destroyIcons(this.icons);
            this.previous = null
        }
        this.constraintHandler.reset()
    });
    this.graph.getModel().addListener(mxEvent.CHANGE,
        this.changeHandler);
    this.graph.getView().addListener(mxEvent.SCALE, this.changeHandler);
    this.graph.getView().addListener(mxEvent.TRANSLATE, this.changeHandler);
    this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.changeHandler);
    this.drillHandler = mxUtils.bind(this, function () {
        this.destroyIcons(this.icons)
    });
    this.graph.addListener(mxEvent.START_EDITING, this.drillHandler);
    this.graph.getView().addListener(mxEvent.DOWN, this.drillHandler);
    this.graph.getView().addListener(mxEvent.UP, this.drillHandler)
};
mxConnectionHandler.prototype.isConnectableCell = function () {
    return true
};
mxConnectionHandler.prototype.createMarker = function () {
    var a = new mxCellMarker(this.graph);
    a.hotspotEnabled = true;
    a.getCell = mxUtils.bind(this, function (b, c) {
        c = mxCellMarker.prototype.getCell.apply(a, arguments);
        this.error = null;
        if (!this.isConnectableCell(c))return null;
        if (c != null)if (this.isConnecting()) {
            if (this.previous != null) {
                this.error = this.validateConnection(this.previous.cell, c);
                if (this.error != null && this.error.length == 0) {
                    c = null;
                    if (this.isCreateTarget())this.error = null
                }
            }
        } else this.isValidSource(c) || (c =
            null); else if (this.isConnecting() && !this.isCreateTarget() && !this.graph.allowDanglingEdges)this.error = "";
        return c
    });
    a.isValidState = mxUtils.bind(this, function (b) {
        return this.isConnecting() ? this.error == null : mxCellMarker.prototype.isValidState.apply(a, arguments)
    });
    a.getMarkerColor = mxUtils.bind(this, function (b, c, d) {
        return this.connectImage == null || this.isConnecting() ? mxCellMarker.prototype.getMarkerColor.apply(a, arguments) : null
    });
    a.intersects = mxUtils.bind(this, function (b, c) {
        return this.connectImage != null ||
            this.isConnecting() ? true : mxCellMarker.prototype.intersects.apply(a, arguments)
    });
    return a
};
mxConnectionHandler.prototype.start = function (a, b, c, d) {
    this.previous = a;
    this.first = new mxPoint(b, c);
    this.edgeState = d != null ? d : this.createEdgeState(null);
    this.marker.currentColor = this.marker.validColor;
    this.marker.markedState = a;
    this.marker.mark()
};
mxConnectionHandler.prototype.isConnecting = function () {
    return this.first != null && this.shape != null
};
mxConnectionHandler.prototype.isValidSource = function (a) {
    return this.graph.isValidSource(a)
};
mxConnectionHandler.prototype.isValidTarget = function () {
    return true
};
mxConnectionHandler.prototype.validateConnection = function (a, b) {
    return!this.isValidTarget(b) ? "" : this.graph.getEdgeValidationError(null, a, b)
};
mxConnectionHandler.prototype.getConnectImage = function () {
    return this.connectImage
};
mxConnectionHandler.prototype.isMoveIconToFrontForState = function (a) {
    return a.text != null && a.text.node.parentNode == this.graph.container ? true : this.moveIconFront
};
mxConnectionHandler.prototype.createIcons = function (a) {
    var b = this.getConnectImage(a);
    if (b != null && a != null) {
        this.iconState = a;
        var c = [], d = new mxRectangle(0, 0, b.width, b.height), e = new mxImageShape(d, b.src, null, null, 0);
        e.preserveImageAspect = false;
        if (this.isMoveIconToFrontForState(a)) {
            e.dialect = mxConstants.DIALECT_STRICTHTML;
            e.init(this.graph.container)
        } else {
            e.dialect = this.graph.dialect == mxConstants.DIALECT_SVG ? mxConstants.DIALECT_SVG : mxConstants.DIALECT_VML;
            e.init(this.graph.getView().getOverlayPane());
            this.moveIconBack &&
                e.node.previousSibling != null && e.node.parentNode.insertBefore(e.node, e.node.parentNode.firstChild)
        }
        e.node.style.cursor = mxConstants.CURSOR_CONNECT;
        var f = mxUtils.bind(this, function () {
            return this.currentState != null ? this.currentState : a
        }), b = mxUtils.bind(this, function (a) {
            if (!mxEvent.isConsumed(a)) {
                this.icon = e;
                this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a, f()))
            }
        });
        mxEvent.redirectMouseEvents(e.node, this.graph, f, b);
        c.push(e);
        this.redrawIcons(c, this.iconState);
        return c
    }
    return null
};
mxConnectionHandler.prototype.redrawIcons = function (a, b) {
    if (a != null && a[0] != null && b != null) {
        var c = this.getIconPosition(a[0], b);
        a[0].bounds.x = c.x;
        a[0].bounds.y = c.y;
        a[0].redraw()
    }
};
mxConnectionHandler.prototype.getIconPosition = function (a, b) {
    var c = this.graph.getView().scale, d = b.getCenterX(), e = b.getCenterY();
    if (this.graph.isSwimlane(b.cell))var f = this.graph.getStartSize(b.cell), d = f.width != 0 ? b.x + f.width * c / 2 : d, e = f.height != 0 ? b.y + f.height * c / 2 : e;
    return new mxPoint(d - a.bounds.width / 2, e - a.bounds.height / 2)
};
mxConnectionHandler.prototype.destroyIcons = function (a) {
    if (a != null) {
        this.iconState = null;
        for (var b = 0; b < a.length; b++)a[b].destroy()
    }
};
mxConnectionHandler.prototype.isStartEvent = function (a) {
    return!this.graph.isForceMarqueeEvent(a.getEvent()) && (this.constraintHandler.currentFocus != null && this.constraintHandler.currentConstraint != null || this.previous != null && this.error == null && (this.icons == null || this.icons != null && this.icon != null))
};
mxConnectionHandler.prototype.mouseDown = function (a, b) {
    this.mouseDownCounter++;
    if (this.isEnabled() && this.graph.isEnabled() && !b.isConsumed() && !this.isConnecting() && this.isStartEvent(b)) {
        if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null && this.constraintHandler.currentPoint != null) {
            this.sourceConstraint = this.constraintHandler.currentConstraint;
            this.previous = this.constraintHandler.currentFocus;
            this.first = this.constraintHandler.currentPoint.clone()
        } else this.first =
            new mxPoint(b.getGraphX(), b.getGraphY());
        this.edgeState = this.createEdgeState(b);
        this.mouseDownCounter = 1;
        if (this.waypointsEnabled && this.shape == null) {
            this.waypoints = null;
            this.shape = this.createShape()
        }
        this.previous == null && this.edgeState != null && this.edgeState.cell.geometry.setTerminalPoint(this.graph.getPointForEvent(b.getEvent()), true);
        b.consume()
    } else if (mxClient.IS_TOUCH && this.tapAndHoldEnabled && !this.tapAndHoldInProgress && this.isEnabled() && this.graph.isEnabled() && !this.isConnecting()) {
        this.tapAndHoldInProgress =
            true;
        this.initialTouchX = b.getX();
        this.initialTouchY = b.getY();
        var c = this.graph.view.getState(this.marker.getCell(b));
        this.tapAndHoldThread && window.clearTimeout(this.tapAndHoldThread);
        this.tapAndHoldThread = window.setTimeout(mxUtils.bind(this, function () {
            this.tapAndHoldValid && this.tapAndHold(b, c);
            this.tapAndHoldValid = this.tapAndHoldInProgress = false
        }), this.tapAndHoldDelay);
        this.tapAndHoldValid = true
    }
    this.selectedIcon = this.icon;
    this.icon = null
};
mxConnectionHandler.prototype.tapAndHold = function (a, b) {
    if (b != null) {
        this.marker.currentColor = this.marker.validColor;
        this.marker.markedState = b;
        this.marker.mark();
        this.first = new mxPoint(a.getGraphX(), a.getGraphY());
        this.edgeState = this.createEdgeState(a);
        this.previous = b
    }
};
mxConnectionHandler.prototype.isImmediateConnectSource = function (a) {
    return!this.graph.isCellMovable(a.cell)
};
mxConnectionHandler.prototype.createEdgeState = function () {
    return null
};
mxConnectionHandler.prototype.updateCurrentState = function (a) {
    var b = this.marker.process(a);
    this.constraintHandler.update(a, this.first == null);
    this.currentState = b
};
mxConnectionHandler.prototype.convertWaypoint = function (a) {
    var b = this.graph.getView().getScale(), c = this.graph.getView().getTranslate();
    a.x = a.x / b - c.x;
    a.y = a.y / b - c.y
};
mxConnectionHandler.prototype.mouseMove = function (a, b) {
    if (this.tapAndHoldValid)this.tapAndHoldValid = Math.abs(this.initialTouchX - b.getX()) < this.tapAndHoldTolerance && Math.abs(this.initialTouchY - b.getY()) < this.tapAndHoldTolerance;
    if (!b.isConsumed() && (this.ignoreMouseDown || this.first != null || !this.graph.isMouseDown)) {
        if (!this.isEnabled() && this.currentState != null) {
            this.destroyIcons(this.icons);
            this.currentState = null
        }
        (this.first != null || this.isEnabled() && this.graph.isEnabled()) && this.updateCurrentState(b);
        if (this.first != null) {
            var c = this.graph.getView().scale, c = new mxPoint(this.graph.snap(b.getGraphX() / c) * c, this.graph.snap(b.getGraphY() / c) * c), d = null, e = c;
            if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null && this.constraintHandler.currentPoint != null) {
                d = this.constraintHandler.currentConstraint;
                e = this.constraintHandler.currentPoint.clone()
            }
            var f = this.first;
            if (this.selectedIcon != null) {
                var g = this.selectedIcon.bounds.width, h = this.selectedIcon.bounds.height;
                if (this.currentState !=
                    null && this.targetConnectImage) {
                    g = this.getIconPosition(this.selectedIcon, this.currentState);
                    this.selectedIcon.bounds.x = g.x;
                    this.selectedIcon.bounds.y = g.y
                } else this.selectedIcon.bounds = new mxRectangle(b.getGraphX() + this.connectIconOffset.x, b.getGraphY() + this.connectIconOffset.y, g, h);
                this.selectedIcon.redraw()
            }
            if (this.edgeState != null) {
                this.edgeState.absolutePoints = [null, this.currentState != null ? null : e];
                this.graph.view.updateFixedTerminalPoint(this.edgeState, this.previous, true, this.sourceConstraint);
                if (this.currentState !=
                    null) {
                    d == null && (d = this.graph.getConnectionConstraint(this.edgeState, this.previous, false));
                    this.edgeState.setAbsoluteTerminalPoint(null, false);
                    this.graph.view.updateFixedTerminalPoint(this.edgeState, this.currentState, false, d)
                }
                f = null;
                if (this.waypoints != null) {
                    f = [];
                    for (e = 0; e < this.waypoints.length; e++) {
                        d = this.waypoints[e].clone();
                        this.convertWaypoint(d);
                        f[e] = d
                    }
                }
                this.graph.view.updatePoints(this.edgeState, f, this.previous, this.currentState);
                this.graph.view.updateFloatingTerminalPoints(this.edgeState, this.previous,
                    this.currentState);
                e = this.edgeState.absolutePoints[this.edgeState.absolutePoints.length - 1];
                f = this.edgeState.absolutePoints[0]
            } else {
                if (this.currentState != null && this.constraintHandler.currentConstraint == null) {
                    d = this.getTargetPerimeterPoint(this.currentState, b);
                    d != null && (e = d)
                }
                if (this.sourceConstraint == null && this.previous != null) {
                    d = this.getSourcePerimeterPoint(this.previous, this.waypoints != null && this.waypoints.length > 0 ? this.waypoints[0] : e, b);
                    d != null && (f = d)
                }
            }
            if (this.currentState == null && this.movePreviewAway) {
                d =
                    e.x - f.x;
                g = e.y - f.y;
                h = Math.sqrt(d * d + g * g);
                e.x = e.x - d * 4 / h;
                e.y = e.y - g * 4 / h
            }
            if (this.shape == null) {
                d = Math.abs(c.x - this.first.x);
                g = Math.abs(c.y - this.first.y);
                if (d > this.graph.tolerance || g > this.graph.tolerance) {
                    this.shape = this.createShape();
                    this.updateCurrentState(b)
                }
            }
            if (this.shape != null) {
                if (this.edgeState != null)this.shape.points = this.edgeState.absolutePoints; else {
                    c = [f];
                    this.waypoints != null && (c = c.concat(this.waypoints));
                    c.push(e);
                    this.shape.points = c
                }
                this.drawPreview()
            }
            mxEvent.consume(b.getEvent());
            b.consume()
        } else if (!this.isEnabled() ||
            !this.graph.isEnabled())this.constraintHandler.reset(); else if (this.previous != this.currentState && this.edgeState == null) {
            this.destroyIcons(this.icons);
            this.icons = null;
            if (this.currentState != null && this.error == null) {
                this.icons = this.createIcons(this.currentState);
                if (this.icons == null) {
                    this.currentState.setCursor(mxConstants.CURSOR_CONNECT);
                    b.consume()
                }
            }
            this.previous = this.currentState
        } else this.previous == this.currentState && (this.currentState != null && this.icons == null && !this.graph.isMouseDown) && b.consume();
        this.constraintHandler.currentConstraint != null && this.marker.reset();
        if (!this.graph.isMouseDown && this.currentState != null && this.icons != null) {
            c = false;
            f = b.getSource();
            for (e = 0; e < this.icons.length && !c; e++)c = f == this.icons[e].node || f.parentNode == this.icons[e].node;
            c || this.updateIcons(this.currentState, this.icons, b)
        }
    } else this.constraintHandler.reset()
};
mxConnectionHandler.prototype.getTargetPerimeterPoint = function (a) {
    var b = null, c = a.view, d = c.getPerimeterFunction(a);
    if (d != null) {
        var e = this.waypoints != null && this.waypoints.length > 0 ? this.waypoints[this.waypoints.length - 1] : new mxPoint(this.previous.getCenterX(), this.previous.getCenterY()), a = d(c.getPerimeterBounds(a), this.edgeState, e, false);
        a != null && (b = a)
    } else b = new mxPoint(a.getCenterX(), a.getCenterY());
    return b
};
mxConnectionHandler.prototype.getSourcePerimeterPoint = function (a, b) {
    var c = null, d = a.view, e = d.getPerimeterFunction(a);
    if (e != null) {
        d = e(d.getPerimeterBounds(a), a, b, false);
        d != null && (c = d)
    } else c = new mxPoint(a.getCenterX(), a.getCenterY());
    return c
};
mxConnectionHandler.prototype.updateIcons = function () {
};
mxConnectionHandler.prototype.isStopEvent = function (a) {
    return a.getState() != null
};
mxConnectionHandler.prototype.addWaypointForEvent = function (a) {
    var b = mxUtils.convertPoint(this.graph.container, a.getX(), a.getY()), c = Math.abs(b.x - this.first.x), b = Math.abs(b.y - this.first.y);
    if (this.waypoints != null || this.mouseDownCounter > 1 && (c > this.graph.tolerance || b > this.graph.tolerance)) {
        if (this.waypoints == null)this.waypoints = [];
        c = this.graph.view.scale;
        b = new mxPoint(this.graph.snap(a.getGraphX() / c) * c, this.graph.snap(a.getGraphY() / c) * c);
        this.waypoints.push(b)
    }
};
mxConnectionHandler.prototype.mouseUp = function (a, b) {
    if (!b.isConsumed() && this.isConnecting()) {
        if (this.waypointsEnabled && !this.isStopEvent(b)) {
            this.addWaypointForEvent(b);
            b.consume();
            return
        }
        if (this.error == null) {
            var c = this.previous != null ? this.previous.cell : null, d = null;
            if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null)d = this.constraintHandler.currentFocus.cell;
            if (d == null && this.marker.hasValidState())d = this.marker.validState.cell;
            this.connect(c, d, b.getEvent(),
                b.getCell())
        } else {
            this.previous != null && (this.marker.validState != null && this.previous.cell == this.marker.validState.cell) && this.graph.selectCellForEvent(this.marker.source, evt);
            this.error.length > 0 && this.graph.validationAlert(this.error)
        }
        this.destroyIcons(this.icons);
        b.consume()
    }
    this.first != null && this.reset();
    this.tapAndHoldValid = this.tapAndHoldInProgress = false
};
mxConnectionHandler.prototype.reset = function () {
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
    this.destroyIcons(this.icons);
    this.icons = null;
    this.marker.reset();
    this.constraintHandler.reset();
    this.sourceConstraint = this.error = this.previous = this.edgeState = this.selectedIcon = null;
    this.mouseDownCounter = 0;
    this.icon = this.first = null
};
mxConnectionHandler.prototype.drawPreview = function () {
    var a = this.error == null, b = this.getEdgeColor(a);
    this.shape.dialect == mxConstants.DIALECT_SVG ? this.shape.innerNode.setAttribute("stroke", b) : this.shape.node.strokecolor = b;
    this.shape.strokewidth = this.getEdgeWidth(a);
    this.shape.redraw();
    mxUtils.repaintGraph(this.graph, this.shape.points[1])
};
mxConnectionHandler.prototype.getEdgeColor = function (a) {
    return a ? mxConstants.VALID_COLOR : mxConstants.INVALID_COLOR
};
mxConnectionHandler.prototype.getEdgeWidth = function (a) {
    return a ? 3 : 1
};
mxConnectionHandler.prototype.connect = function (a, b, c, d) {
    if (b != null || this.isCreateTarget() || this.graph.allowDanglingEdges) {
        var e = this.graph.getModel(), f = null;
        e.beginUpdate();
        try {
            if (a != null && b == null && this.isCreateTarget()) {
                b = this.createTargetVertex(c, a);
                if (b != null) {
                    d = this.graph.getDropTarget([b], c, d);
                    if (d == null || !this.graph.getModel().isEdge(d)) {
                        var g = this.graph.getView().getState(d);
                        if (g != null) {
                            var h = e.getGeometry(b);
                            h.x = h.x - g.origin.x;
                            h.y = h.y - g.origin.y
                        }
                    } else d = this.graph.getDefaultParent();
                    this.graph.addCell(b,
                        d)
                }
            }
            var k = this.graph.getDefaultParent();
            if (a != null && b != null && e.getParent(a) == e.getParent(b) && e.getParent(e.getParent(a)) != e.getRoot()) {
                k = e.getParent(a);
                a.geometry != null && a.geometry.relative && (b.geometry != null && b.geometry.relative) && (k = e.getParent(k))
            }
            h = g = null;
            if (this.edgeState != null) {
                g = this.edgeState.cell.value;
                h = this.edgeState.cell.style
            }
            f = this.insertEdge(k, null, g, a, b, h);
            if (f != null) {
                this.graph.setConnectionConstraint(f, a, true, this.sourceConstraint);
                this.graph.setConnectionConstraint(f, b, false, this.constraintHandler.currentConstraint);
                this.edgeState != null && e.setGeometry(f, this.edgeState.cell.geometry);
                var i = e.getGeometry(f);
                if (i == null) {
                    i = new mxGeometry;
                    i.relative = true;
                    e.setGeometry(f, i)
                }
                if (this.waypoints != null && this.waypoints.length > 0) {
                    var l = this.graph.view.scale, m = this.graph.view.translate;
                    i.points = [];
                    for (a = 0; a < this.waypoints.length; a++) {
                        var n = this.waypoints[a];
                        i.points.push(new mxPoint(n.x / l - m.x, n.y / l - m.y))
                    }
                }
                if (b == null) {
                    n = this.graph.getPointForEvent(c, false);
                    n.x = n.x - this.graph.panDx / this.graph.view.scale;
                    n.y = n.y - this.graph.panDy /
                        this.graph.view.scale;
                    i.setTerminalPoint(n, false)
                }
                this.fireEvent(new mxEventObject(mxEvent.CONNECT, "cell", f, "event", c, "target", d))
            }
        } catch (o) {
            mxLog.show();
            mxLog.debug(o.message)
        } finally {
            e.endUpdate()
        }
        this.select && this.selectCells(f, b)
    }
};
mxConnectionHandler.prototype.selectCells = function (a) {
    this.graph.setSelectionCell(a)
};
mxConnectionHandler.prototype.insertEdge = function (a, b, c, d, e, f) {
    if (this.factoryMethod == null)return this.graph.insertEdge(a, b, c, d, e, f);
    b = this.createEdge(c, d, e, f);
    return b = this.graph.addEdge(b, a, d, e)
};
mxConnectionHandler.prototype.createTargetVertex = function (a, b) {
    for (var c = this.graph.getCellGeometry(b); c != null && c.relative;) {
        b = this.graph.getModel().getParent(b);
        c = this.graph.getCellGeometry(b)
    }
    var d = this.graph.cloneCells([b])[0], c = this.graph.getModel().getGeometry(d);
    if (c != null) {
        var e = this.graph.getPointForEvent(a);
        c.x = this.graph.snap(e.x - c.width / 2) - this.graph.panDx / this.graph.view.scale;
        c.y = this.graph.snap(e.y - c.height / 2) - this.graph.panDy / this.graph.view.scale;
        if (this.first != null) {
            var f = this.graph.view.getState(b);
            if (f != null) {
                var g = this.getAlignmentTolerance();
                if (Math.abs(this.graph.snap(this.first.x) - this.graph.snap(e.x)) <= g)c.x = f.x; else if (Math.abs(this.graph.snap(this.first.y) - this.graph.snap(e.y)) <= g)c.y = f.y
            }
        }
    }
    return d
};
mxConnectionHandler.prototype.getAlignmentTolerance = function () {
    return this.graph.isGridEnabled() ? this.graph.gridSize : this.graph.tolerance
};
mxConnectionHandler.prototype.createEdge = function (a, b, c, d) {
    var e = null;
    this.factoryMethod != null && (e = this.factoryMethod(b, c, d));
    if (e == null) {
        e = new mxCell(a || "");
        e.setEdge(true);
        e.setStyle(d);
        a = new mxGeometry;
        a.relative = true;
        e.setGeometry(a)
    }
    return e
};
mxConnectionHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
    if (this.marker != null) {
        this.marker.destroy();
        this.marker = null
    }
    if (this.constraintHandler != null) {
        this.constraintHandler.destroy();
        this.constraintHandler = null
    }
    if (this.changeHandler != null) {
        this.graph.getModel().removeListener(this.changeHandler);
        this.graph.getView().removeListener(this.changeHandler);
        this.changeHandler = null
    }
    if (this.drillHandler != null) {
        this.graph.removeListener(this.drillHandler);
        this.graph.getView().removeListener(this.drillHandler);
        this.drillHandler = null
    }
};
function mxConstraintHandler(a) {
    this.graph = a
}
mxConstraintHandler.prototype.pointImage = new mxImage(mxClient.imageBasePath + "/point.gif", 5, 5);
mxConstraintHandler.prototype.graph = null;
mxConstraintHandler.prototype.enabled = !0;
mxConstraintHandler.prototype.highlightColor = mxConstants.DEFAULT_VALID_COLOR;
mxConstraintHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxConstraintHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxConstraintHandler.prototype.reset = function () {
    if (this.focusIcons != null) {
        for (var a = 0; a < this.focusIcons.length; a++)this.focusIcons[a].destroy();
        this.focusIcons = null
    }
    if (this.focusHighlight != null) {
        this.focusHighlight.destroy();
        this.focusHighlight = null
    }
    this.focusPoints = this.currentFocus = this.currentPoint = this.currentFocusArea = this.currentConstraint = null
};
mxConstraintHandler.prototype.getTolerance = function () {
    return this.graph.getTolerance()
};
mxConstraintHandler.prototype.getImageForConstraint = function () {
    return this.pointImage
};
mxConstraintHandler.prototype.update = function (a, b) {
    if (this.isEnabled()) {
        var c = this.getTolerance(), d = new mxRectangle(a.getGraphX() - c, a.getGraphY() - c, 2 * c, 2 * c), e = a.getCell() != null ? this.graph.isCellConnectable(a.getCell()) : false;
        if (this.currentFocusArea == null || !mxUtils.intersects(this.currentFocusArea, d) || a.getState() != null && this.currentFocus != null && e && this.graph.getModel().getParent(a.getCell()) == this.currentFocus.cell) {
            this.currentFocusArea = null;
            if (a.getState() != this.currentFocus) {
                this.currentFocus =
                    null;
                this.constraints = a.getState() != null && e ? this.graph.getAllConnectionConstraints(a.getState(), b) : null;
                if (this.constraints != null) {
                    this.currentFocus = a.getState();
                    this.currentFocusArea = new mxRectangle(a.getState().x, a.getState().y, a.getState().width, a.getState().height);
                    if (this.focusIcons != null) {
                        for (e = 0; e < this.focusIcons.length; e++)this.focusIcons[e].destroy();
                        this.focusPoints = this.focusIcons = null
                    }
                    this.focusIcons = [];
                    this.focusPoints = [];
                    for (e = 0; e < this.constraints.length; e++) {
                        var f = this.graph.getConnectionPoint(a.getState(),
                            this.constraints[e]), g = this.getImageForConstraint(a.getState(), this.constraints[e], f), h = g.src, g = new mxRectangle(f.x - g.width / 2, f.y - g.height / 2, g.width, g.height), g = new mxImageShape(g, h);
                        g.dialect = this.graph.dialect == mxConstants.DIALECT_SVG ? mxConstants.DIALECT_SVG : mxConstants.DIALECT_VML;
                        g.init(this.graph.getView().getOverlayPane());
                        g.node.previousSibling != null && g.node.parentNode.insertBefore(g.node, g.node.parentNode.firstChild);
                        h = mxUtils.bind(this, function () {
                            return this.currentFocus != null ? this.currentFocus :
                                a.getState()
                        });
                        g.redraw();
                        mxEvent.redirectMouseEvents(g.node, this.graph, h);
                        this.currentFocusArea.add(g.bounds);
                        this.focusIcons.push(g);
                        this.focusPoints.push(f)
                    }
                    this.currentFocusArea.grow(c)
                } else if (this.focusIcons != null) {
                    if (this.focusHighlight != null) {
                        this.focusHighlight.destroy();
                        this.focusHighlight = null
                    }
                    for (e = 0; e < this.focusIcons.length; e++)this.focusIcons[e].destroy();
                    this.focusPoints = this.focusIcons = null
                }
            }
        }
        this.currentPoint = this.currentConstraint = null;
        if (this.focusIcons != null && this.constraints !=
            null && (a.getState() == null || this.currentFocus == a.getState()))for (e = 0; e < this.focusIcons.length; e++)if (mxUtils.intersects(this.focusIcons[e].bounds, d)) {
            this.currentConstraint = this.constraints[e];
            this.currentPoint = this.focusPoints[e];
            c = this.focusIcons[e].bounds.clone();
            c.grow(mxClient.IS_IE ? 3 : 2);
            if (mxClient.IS_IE) {
                c.width = c.width - 1;
                c.height = c.height - 1
            }
            if (this.focusHighlight == null) {
                c = new mxRectangleShape(c, null, this.highlightColor, 3);
                c.dialect = this.graph.dialect == mxConstants.DIALECT_SVG ? mxConstants.DIALECT_SVG :
                    mxConstants.DIALECT_VML;
                c.init(this.graph.getView().getOverlayPane());
                this.focusHighlight = c;
                h = mxUtils.bind(this, function () {
                    return this.currentFocus != null ? this.currentFocus : a.getState()
                });
                mxEvent.redirectMouseEvents(c.node, this.graph, h)
            } else {
                this.focusHighlight.bounds = c;
                this.focusHighlight.redraw()
            }
            break
        }
        if (this.currentConstraint == null && this.focusHighlight != null) {
            this.focusHighlight.destroy();
            this.focusHighlight = null
        }
    }
};
mxConstraintHandler.prototype.destroy = function () {
    this.reset()
};
function mxRubberband(a) {
    if (a != null) {
        this.graph = a;
        this.graph.addMouseListener(this);
        this.panHandler = mxUtils.bind(this, function () {
            this.repaint()
        });
        this.graph.addListener(mxEvent.PAN, this.panHandler);
        mxClient.IS_IE && mxEvent.addListener(window, "unload", mxUtils.bind(this, function () {
            this.destroy()
        }))
    }
}
mxRubberband.prototype.defaultOpacity = 20;
mxRubberband.prototype.enabled = !0;
mxRubberband.prototype.div = null;
mxRubberband.prototype.sharedDiv = null;
mxRubberband.prototype.currentX = 0;
mxRubberband.prototype.currentY = 0;
mxRubberband.prototype.isEnabled = function () {
    return this.enabled
};
mxRubberband.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxRubberband.prototype.mouseDown = function (a, b) {
    if (!b.isConsumed() && this.isEnabled() && this.graph.isEnabled() && (this.graph.isForceMarqueeEvent(b.getEvent()) || b.getState() == null)) {
        var c = mxUtils.getOffset(this.graph.container), d = mxUtils.getScrollOrigin(this.graph.container);
        d.x = d.x - c.x;
        d.y = d.y - c.y;
        this.start(b.getX() + d.x, b.getY() + d.y);
        if (mxClient.IS_NS && !mxClient.IS_SF && !mxClient.IS_GC) {
            var e = this.graph.container, f = function (a) {
                var a = new mxMouseEvent(a), b = mxUtils.convertPoint(e, a.getX(), a.getY());
                a.graphX =
                    b.x;
                a.graphY = b.y;
                return a
            };
            this.dragHandler = mxUtils.bind(this, function (a) {
                this.mouseMove(this.graph, f(a))
            });
            this.dropHandler = mxUtils.bind(this, function (a) {
                this.mouseUp(this.graph, f(a))
            });
            mxEvent.addListener(document, "mousemove", this.dragHandler);
            mxEvent.addListener(document, "mouseup", this.dropHandler)
        }
        b.consume(false)
    }
};
mxRubberband.prototype.start = function (a, b) {
    this.first = new mxPoint(a, b)
};
mxRubberband.prototype.mouseMove = function (a, b) {
    if (!b.isConsumed() && this.first != null) {
        var c = mxUtils.getScrollOrigin(this.graph.container), d = mxUtils.getOffset(this.graph.container);
        c.x = c.x - d.x;
        c.y = c.y - d.y;
        var d = b.getX() + c.x, c = b.getY() + c.y, e = this.first.x - d, f = this.first.y - c, g = this.graph.tolerance;
        if (this.div != null || Math.abs(e) > g || Math.abs(f) > g) {
            if (this.div == null)this.div = this.createShape();
            mxUtils.clearSelection();
            this.update(d, c);
            b.consume()
        }
    }
};
mxRubberband.prototype.createShape = function () {
    if (this.sharedDiv == null) {
        this.sharedDiv = document.createElement("div");
        this.sharedDiv.className = "mxRubberband";
        mxUtils.setOpacity(this.sharedDiv, this.defaultOpacity)
    }
    this.graph.container.appendChild(this.sharedDiv);
    return this.sharedDiv
};
mxRubberband.prototype.mouseUp = function (a, b) {
    var c = this.div != null;
    this.reset();
    if (c) {
        this.graph.selectRegion(new mxRectangle(this.x, this.y, this.width, this.height), b.getEvent());
        b.consume()
    }
};
mxRubberband.prototype.reset = function () {
    this.div != null && this.div.parentNode.removeChild(this.div);
    if (this.dragHandler != null) {
        mxEvent.removeListener(document, "mousemove", this.dragHandler);
        this.dragHandler = null
    }
    if (this.dropHandler != null) {
        mxEvent.removeListener(document, "mouseup", this.dropHandler);
        this.dropHandler = null
    }
    this.currentY = this.currentX = 0;
    this.div = this.first = null
};
mxRubberband.prototype.update = function (a, b) {
    this.currentX = a;
    this.currentY = b;
    this.repaint()
};
mxRubberband.prototype.repaint = function () {
    if (this.div != null) {
        var a = this.currentX - this.graph.panDx, b = this.currentY - this.graph.panDy;
        this.x = Math.min(this.first.x, a);
        this.y = Math.min(this.first.y, b);
        this.width = Math.max(this.first.x, a) - this.x;
        this.height = Math.max(this.first.y, b) - this.y;
        a = mxClient.IS_VML ? this.graph.panDy : 0;
        this.div.style.left = this.x + (mxClient.IS_VML ? this.graph.panDx : 0) + "px";
        this.div.style.top = this.y + a + "px";
        this.div.style.width = Math.max(1, this.width) + "px";
        this.div.style.height = Math.max(1,
            this.height) + "px"
    }
};
mxRubberband.prototype.destroy = function () {
    if (!this.destroyed) {
        this.destroyed = true;
        this.graph.removeMouseListener(this);
        this.graph.removeListener(this.panHandler);
        this.reset();
        if (this.sharedDiv != null)this.sharedDiv = null
    }
};
function mxVertexHandler(a) {
    if (a != null) {
        this.state = a;
        this.init()
    }
}
mxVertexHandler.prototype.graph = null;
mxVertexHandler.prototype.state = null;
mxVertexHandler.prototype.singleSizer = !1;
mxVertexHandler.prototype.index = null;
mxVertexHandler.prototype.allowHandleBoundsCheck = !0;
mxVertexHandler.prototype.crisp = !0;
mxVertexHandler.prototype.handleImage = null;
mxVertexHandler.prototype.tolerance = 0;
mxVertexHandler.prototype.init = function () {
    this.graph = this.state.view.graph;
    this.bounds = this.getSelectionBounds(this.state);
    this.selectionBorder = this.createSelectionShape(this.bounds);
    this.selectionBorder.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    this.selectionBorder.init(this.graph.getView().getOverlayPane());
    this.selectionBorder.dialect == mxConstants.DIALECT_SVG ? this.selectionBorder.node.setAttribute("pointer-events", "none") : this.selectionBorder.node.style.background =
        "";
    if (this.graph.isCellMovable(this.state.cell))this.selectionBorder.node.style.cursor = mxConstants.CURSOR_MOVABLE_VERTEX;
    mxEvent.redirectMouseEvents(this.selectionBorder.node, this.graph, this.state);
    if (mxGraphHandler.prototype.maxCells <= 0 || this.graph.getSelectionCount() < mxGraphHandler.prototype.maxCells) {
        var a = this.graph.isCellResizable(this.state.cell);
        this.sizers = [];
        if (a || this.graph.isLabelMovable(this.state.cell) && this.state.width >= 2 && this.state.height >= 2) {
            var b = 0;
            if (a) {
                if (!this.singleSizer) {
                    this.sizers.push(this.createSizer("nw-resize",
                        b++));
                    this.sizers.push(this.createSizer("n-resize", b++));
                    this.sizers.push(this.createSizer("ne-resize", b++));
                    this.sizers.push(this.createSizer("w-resize", b++));
                    this.sizers.push(this.createSizer("e-resize", b++));
                    this.sizers.push(this.createSizer("sw-resize", b++));
                    this.sizers.push(this.createSizer("s-resize", b++))
                }
                this.sizers.push(this.createSizer("se-resize", b++))
            }
            a = this.graph.model.getGeometry(this.state.cell);
            if (a != null && !a.relative && !this.graph.isSwimlane(this.state.cell) && this.graph.isLabelMovable(this.state.cell)) {
                this.labelShape =
                    this.createSizer(mxConstants.CURSOR_LABEL_HANDLE, mxEvent.LABEL_HANDLE, mxConstants.LABEL_HANDLE_SIZE, mxConstants.LABEL_HANDLE_FILLCOLOR);
                this.sizers.push(this.labelShape)
            }
        } else if (this.graph.isCellMovable(this.state.cell) && !this.graph.isCellResizable(this.state.cell) && this.state.width < 2 && this.state.height < 2) {
            this.labelShape = this.createSizer(mxConstants.CURSOR_MOVABLE_VERTEX, null, null, mxConstants.LABEL_HANDLE_FILLCOLOR);
            this.sizers.push(this.labelShape)
        }
    }
    this.redraw()
};
mxVertexHandler.prototype.getSelectionBounds = function (a) {
    return new mxRectangle(a.x, a.y, a.width, a.height)
};
mxVertexHandler.prototype.createSelectionShape = function (a) {
    a = new mxRectangleShape(a, null, this.getSelectionColor());
    a.strokewidth = this.getSelectionStrokeWidth();
    a.isDashed = this.isSelectionDashed();
    a.crisp = this.crisp;
    return a
};
mxVertexHandler.prototype.getSelectionColor = function () {
    return mxConstants.VERTEX_SELECTION_COLOR
};
mxVertexHandler.prototype.getSelectionStrokeWidth = function () {
    return mxConstants.VERTEX_SELECTION_STROKEWIDTH
};
mxVertexHandler.prototype.isSelectionDashed = function () {
    return mxConstants.VERTEX_SELECTION_DASHED
};
mxVertexHandler.prototype.createSizer = function (a, b, c, d) {
    c = c || mxConstants.HANDLE_SIZE;
    c = this.createSizerShape(new mxRectangle(0, 0, c, c), b, d);
    if (this.state.text != null && this.state.text.node.parentNode == this.graph.container) {
        c.bounds.height = c.bounds.height - 1;
        c.bounds.width = c.bounds.width - 1;
        c.dialect = mxConstants.DIALECT_STRICTHTML;
        c.init(this.graph.container)
    } else {
        c.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
        c.init(this.graph.getView().getOverlayPane())
    }
    mxEvent.redirectMouseEvents(c.node,
        this.graph, this.state);
    if (this.graph.isEnabled())c.node.style.cursor = a;
    if (!this.isSizerVisible(b))c.node.style.visibility = "hidden";
    return c
};
mxVertexHandler.prototype.isSizerVisible = function () {
    return true
};
mxVertexHandler.prototype.createSizerShape = function (a, b, c) {
    if (this.handleImage != null) {
        a.width = this.handleImage.width;
        a.height = this.handleImage.height;
        return new mxImageShape(a, this.handleImage.src)
    }
    a = new mxRectangleShape(a, c || mxConstants.HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR);
    a.crisp = this.crisp;
    return a
};
mxVertexHandler.prototype.moveSizerTo = function (a, b, c) {
    if (a != null) {
        a.bounds.x = b - a.bounds.width / 2;
        a.bounds.y = c - a.bounds.height / 2;
        a.redraw()
    }
};
mxVertexHandler.prototype.getHandleForEvent = function (a) {
    if (a.isSource(this.labelShape))return mxEvent.LABEL_HANDLE;
    if (this.sizers != null)for (var b = this.tolerance, b = this.allowHandleBoundsCheck && (mxClient.IS_IE || b > 0) ? new mxRectangle(a.getGraphX() - b, a.getGraphY() - b, 2 * b, 2 * b) : null, c = 0; c < this.sizers.length; c++)if (a.isSource(this.sizers[c]) || b != null && this.sizers[c].node.style.visibility != "hidden" && mxUtils.intersects(this.sizers[c].bounds, b))return c;
    return null
};
mxVertexHandler.prototype.mouseDown = function (a, b) {
    if (!b.isConsumed() && this.graph.isEnabled() && !this.graph.isForceMarqueeEvent(b.getEvent()) && (this.tolerance > 0 || b.getState() == this.state)) {
        var c = this.getHandleForEvent(b);
        if (c != null) {
            this.start(b.getX(), b.getY(), c);
            b.consume()
        }
    }
};
mxVertexHandler.prototype.start = function (a, b, c) {
    a = mxUtils.convertPoint(this.graph.container, a, b);
    this.startX = a.x;
    this.startY = a.y;
    this.index = c;
    this.selectionBorder.node.style.visibility = "hidden";
    this.preview = this.createSelectionShape(this.bounds);
    if (this.state.text != null && this.state.text.node.parentNode == this.graph.container) {
        this.preview.dialect = mxConstants.DIALECT_STRICTHTML;
        this.preview.init(this.graph.container)
    } else {
        this.preview.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML :
            mxConstants.DIALECT_SVG;
        this.preview.init(this.graph.view.getOverlayPane())
    }
};
mxVertexHandler.prototype.mouseMove = function (a, b) {
    if (!b.isConsumed() && this.index != null) {
        var c = new mxPoint(b.getGraphX(), b.getGraphY()), d = this.graph.isGridEnabledEvent(b.getEvent()), e = this.graph.getView().scale;
        if (this.index == mxEvent.LABEL_HANDLE) {
            if (d) {
                c.x = this.graph.snap(c.x / e) * e;
                c.y = this.graph.snap(c.y / e) * e
            }
            this.moveSizerTo(this.sizers[this.sizers.length - 1], c.x, c.y);
            b.consume()
        } else if (this.index != null) {
            this.bounds = this.union(this.state, c.x - this.startX, c.y - this.startY, this.index, d, e, this.graph.view.translate);
            this.drawPreview();
            b.consume()
        }
    } else this.getHandleForEvent(b) != null && b.consume(false)
};
mxVertexHandler.prototype.mouseUp = function (a, b) {
    if (!b.isConsumed() && this.index != null && this.state != null) {
        var c = new mxPoint(b.getGraphX(), b.getGraphY()), d = this.graph.getView().scale, e = this.graph.isGridEnabledEvent(b.getEvent());
        this.resizeCell(this.state.cell, (c.x - this.startX) / d, (c.y - this.startY) / d, this.index, e);
        this.reset();
        b.consume()
    }
};
mxVertexHandler.prototype.reset = function () {
    this.index = null;
    if (this.preview != null) {
        this.preview.destroy();
        this.preview = null
    }
    if (this.selectionBorder != null) {
        this.selectionBorder.node.style.visibility = "visible";
        this.bounds = new mxRectangle(this.state.x, this.state.y, this.state.width, this.state.height);
        this.drawPreview()
    }
};
mxVertexHandler.prototype.resizeCell = function (a, b, c, d, e) {
    var f = this.graph.model.getGeometry(a);
    if (d == mxEvent.LABEL_HANDLE) {
        c = this.graph.view.scale;
        b = (this.labelShape.bounds.getCenterX() - this.startX) / c;
        c = (this.labelShape.bounds.getCenterY() - this.startY) / c;
        f = f.clone();
        if (f.offset == null)f.offset = new mxPoint(b, c); else {
            f.offset.x = f.offset.x + b;
            f.offset.y = f.offset.y + c
        }
        this.graph.model.setGeometry(a, f)
    } else {
        b = this.union(f, b, c, d, e, 1, new mxPoint(0, 0));
        this.graph.resizeCell(a, b)
    }
};
mxVertexHandler.prototype.union = function (a, b, c, d, e, f, g) {
    if (this.singleSizer) {
        var g = a.x + a.width + b, h = a.y + a.height + c;
        if (e) {
            g = this.graph.snap(g / f) * f;
            h = this.graph.snap(h / f) * f
        }
        f = new mxRectangle(a.x, a.y, 0, 0);
        f.add(new mxRectangle(g, h, 0, 0));
        return f
    }
    var h = a.x - g.x * f, k = h + a.width, i = a.y - g.y * f, a = i + a.height;
    if (d > 4) {
        a = a + c;
        e && (a = this.graph.snap(a / f) * f)
    } else if (d < 3) {
        i = i + c;
        e && (i = this.graph.snap(i / f) * f)
    }
    if (d == 0 || d == 3 || d == 5) {
        h = h + b;
        e && (h = this.graph.snap(h / f) * f)
    } else if (d == 2 || d == 4 || d == 7) {
        k = k + b;
        e && (k = this.graph.snap(k /
            f) * f)
    }
    e = k - h;
    a = a - i;
    if (e < 0) {
        h = h + e;
        e = Math.abs(e)
    }
    if (a < 0) {
        i = i + a;
        a = Math.abs(a)
    }
    return new mxRectangle(h + g.x * f, i + g.y * f, e, a)
};
mxVertexHandler.prototype.redraw = function () {
    this.bounds = new mxRectangle(this.state.x, this.state.y, this.state.width, this.state.height);
    if (this.sizers != null) {
        var a = this.state, b = a.x + a.width, c = a.y + a.height;
        if (this.singleSizer)this.moveSizerTo(this.sizers[0], b, c); else {
            var d = a.x + a.width / 2, e = a.y + a.height / 2;
            if (this.sizers.length > 1) {
                this.moveSizerTo(this.sizers[0], a.x, a.y);
                this.moveSizerTo(this.sizers[1], d, a.y);
                this.moveSizerTo(this.sizers[2], b, a.y);
                this.moveSizerTo(this.sizers[3], a.x, e);
                this.moveSizerTo(this.sizers[4],
                    b, e);
                this.moveSizerTo(this.sizers[5], a.x, c);
                this.moveSizerTo(this.sizers[6], d, c);
                this.moveSizerTo(this.sizers[7], b, c);
                this.moveSizerTo(this.sizers[8], d + a.absoluteOffset.x, e + a.absoluteOffset.y)
            } else this.state.width >= 2 && this.state.height >= 2 ? this.moveSizerTo(this.sizers[0], d + a.absoluteOffset.x, e + a.absoluteOffset.y) : this.moveSizerTo(this.sizers[0], a.x, a.y)
        }
    }
    this.drawPreview()
};
mxVertexHandler.prototype.drawPreview = function () {
    if (this.preview != null) {
        this.preview.bounds = this.bounds;
        if (this.preview.node.parentNode == this.graph.container) {
            this.preview.bounds.width = Math.max(0, this.preview.bounds.width - 1);
            this.preview.bounds.height = Math.max(0, this.preview.bounds.height - 1)
        }
        this.preview.redraw()
    }
    this.selectionBorder.bounds = this.bounds;
    this.selectionBorder.redraw()
};
mxVertexHandler.prototype.destroy = function () {
    if (this.preview != null) {
        this.preview.destroy();
        this.preview = null
    }
    this.selectionBorder.destroy();
    this.labelShape = this.selectionBorder = null;
    if (this.sizers != null)for (var a = 0; a < this.sizers.length; a++) {
        this.sizers[a].destroy();
        this.sizers[a] = null
    }
};
function mxEdgeHandler(a) {
    if (a != null) {
        this.state = a;
        this.init()
    }
}
mxEdgeHandler.prototype.graph = null;
mxEdgeHandler.prototype.state = null;
mxEdgeHandler.prototype.marker = null;
mxEdgeHandler.prototype.constraintHandler = null;
mxEdgeHandler.prototype.error = null;
mxEdgeHandler.prototype.shape = null;
mxEdgeHandler.prototype.bends = null;
mxEdgeHandler.prototype.labelShape = null;
mxEdgeHandler.prototype.cloneEnabled = !0;
mxEdgeHandler.prototype.addEnabled = !1;
mxEdgeHandler.prototype.removeEnabled = !1;
mxEdgeHandler.prototype.preferHtml = !1;
mxEdgeHandler.prototype.allowHandleBoundsCheck = !0;
mxEdgeHandler.prototype.snapToTerminals = !1;
mxEdgeHandler.prototype.crisp = !0;
mxEdgeHandler.prototype.handleImage = null;
mxEdgeHandler.prototype.tolerance = 0;
mxEdgeHandler.prototype.init = function () {
    this.graph = this.state.view.graph;
    this.marker = this.createMarker();
    this.constraintHandler = new mxConstraintHandler(this.graph);
    this.points = [];
    this.abspoints = this.getSelectionPoints(this.state);
    this.shape = this.createSelectionShape(this.abspoints);
    this.shape.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    this.shape.init(this.graph.getView().getOverlayPane());
    this.shape.node.style.cursor = mxConstants.CURSOR_MOVABLE_EDGE;
    var a = mxClient.IS_TOUCH ? "touchstart" : "mousedown", b = mxClient.IS_TOUCH ? "touchmove" : "mousemove", c = mxClient.IS_TOUCH ? "touchend" : "mouseup";
    mxEvent.addListener(this.shape.node, "dblclick", mxUtils.bind(this, function (a) {
        this.graph.dblClick(a, this.state.cell)
    }));
    mxEvent.addListener(this.shape.node, a, mxUtils.bind(this, function (a) {
        this.addEnabled && this.isAddPointEvent(a) ? this.addPoint(this.state, a) : this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a, this.state))
    }));
    mxEvent.addListener(this.shape.node,
        b, mxUtils.bind(this, function (a) {
            var b = this.state.cell;
            if (this.index != null) {
                var c = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(a), mxEvent.getClientY(a)), b = this.graph.getCellAt(c.x, c.y);
                this.graph.isSwimlane(b) && this.graph.hitsSwimlaneContent(b, c.x, c.y) && (b = null)
            }
            this.graph.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a, this.graph.getView().getState(b)))
        }));
    mxEvent.addListener(this.shape.node, c, mxUtils.bind(this, function (a) {
        this.graph.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a,
            this.state))
    }));
    this.preferHtml = this.state.text != null && this.state.text.node.parentNode == this.graph.container;
    if (!this.preferHtml) {
        a = this.state.getVisibleTerminalState(true);
        if (a != null)this.preferHtml = a.text != null && a.text.node.parentNode == this.graph.container;
        if (!this.preferHtml) {
            a = this.state.getVisibleTerminalState(false);
            if (a != null)this.preferHtml = a.text != null && a.text.node.parentNode == this.graph.container
        }
    }
    if (this.graph.getSelectionCount() < mxGraphHandler.prototype.maxCells || mxGraphHandler.prototype.maxCells <=
        0)this.bends = this.createBends();
    this.label = new mxPoint(this.state.absoluteOffset.x, this.state.absoluteOffset.y);
    this.labelShape = new mxRectangleShape(new mxRectangle, mxConstants.LABEL_HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR);
    this.initBend(this.labelShape);
    this.labelShape.node.style.cursor = mxConstants.CURSOR_LABEL_HANDLE;
    mxEvent.redirectMouseEvents(this.labelShape.node, this.graph, this.state);
    this.redraw()
};
mxEdgeHandler.prototype.isAddPointEvent = function (a) {
    return mxEvent.isShiftDown(a)
};
mxEdgeHandler.prototype.isRemovePointEvent = function (a) {
    return mxEvent.isShiftDown(a)
};
mxEdgeHandler.prototype.getSelectionPoints = function (a) {
    return a.absolutePoints
};
mxEdgeHandler.prototype.createSelectionShape = function (a) {
    a = new mxPolyline(a, this.getSelectionColor());
    a.strokewidth = this.getSelectionStrokeWidth();
    a.isDashed = this.isSelectionDashed();
    return a
};
mxEdgeHandler.prototype.getSelectionColor = function () {
    return mxConstants.EDGE_SELECTION_COLOR
};
mxEdgeHandler.prototype.getSelectionStrokeWidth = function () {
    return mxConstants.EDGE_SELECTION_STROKEWIDTH
};
mxEdgeHandler.prototype.isSelectionDashed = function () {
    return mxConstants.EDGE_SELECTION_DASHED
};
mxEdgeHandler.prototype.isConnectableCell = function () {
    return true
};
mxEdgeHandler.prototype.createMarker = function () {
    var a = new mxCellMarker(this.graph), b = this;
    a.getCell = function (a) {
        var d = mxCellMarker.prototype.getCell.apply(this, arguments);
        if (!b.isConnectableCell(d))return null;
        var e = b.graph.getModel();
        if (d == b.state.cell || d != null && !b.graph.connectableEdges && e.isEdge(d))d = null;
        return d
    };
    a.isValidState = function (a) {
        var d = b.graph.getModel(), d = b.graph.view.getTerminalPort(a, b.graph.view.getState(d.getTerminal(b.state.cell, !b.isSource)), !b.isSource), d = d != null ? d.cell : null;
        b.error = b.validateConnection(b.isSource ? a.cell : d, b.isSource ? d : a.cell);
        return b.error == null
    };
    return a
};
mxEdgeHandler.prototype.validateConnection = function (a, b) {
    return this.graph.getEdgeValidationError(this.state.cell, a, b)
};
mxEdgeHandler.prototype.createBends = function () {
    for (var a = this.state.cell, b = [], c = 0; c < this.abspoints.length; c++)if (this.isHandleVisible(c)) {
        var d = c == this.abspoints.length - 1;
        if ((d = c == 0 || d) || this.graph.isCellBendable(a)) {
            var e = this.createHandleShape(c);
            this.initBend(e);
            mxClient.IS_TOUCH && e.node.setAttribute("pointer-events", "none");
            if (this.isHandleEnabled(c))if (mxClient.IS_TOUCH) {
                var f = mxUtils.bind(this, function (a) {
                    a = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(a), mxEvent.getClientY(a));
                    return this.graph.view.getState(this.graph.getCellAt(a.x, a.y))
                });
                mxEvent.redirectMouseEvents(e.node, this.graph, f)
            } else {
                e.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
                mxEvent.redirectMouseEvents(e.node, this.graph, this.state)
            }
            b.push(e);
            if (!d) {
                this.points.push(new mxPoint(0, 0));
                e.node.style.visibility = "hidden"
            }
        }
    }
    return b
};
mxEdgeHandler.prototype.isHandleEnabled = function () {
    return true
};
mxEdgeHandler.prototype.isHandleVisible = function () {
    return true
};
mxEdgeHandler.prototype.createHandleShape = function () {
    if (this.handleImage != null)return new mxImageShape(new mxRectangle(0, 0, this.handleImage.width, this.handleImage.height), this.handleImage.src);
    var a = mxConstants.HANDLE_SIZE;
    this.preferHtml && (a = a - 1);
    return new mxRectangleShape(new mxRectangle(0, 0, a, a), mxConstants.HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR)
};
mxEdgeHandler.prototype.initBend = function (a) {
    a.crisp = this.crisp;
    if (this.preferHtml) {
        a.dialect = mxConstants.DIALECT_STRICTHTML;
        a.init(this.graph.container)
    } else {
        a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
        a.init(this.graph.getView().getOverlayPane())
    }
};
mxEdgeHandler.prototype.getHandleForEvent = function (a) {
    if (this.bends != null)for (var b = this.tolerance, b = this.allowHandleBoundsCheck && (mxClient.IS_IE || b > 0) ? new mxRectangle(a.getGraphX() - b, a.getGraphY() - b, 2 * b, 2 * b) : null, c = 0; c < this.bends.length; c++)if (a.isSource(this.bends[c]) || b != null && this.bends[c].node.style.visibility != "hidden" && mxUtils.intersects(this.bends[c].bounds, b))return c;
    if (a.isSource(this.labelShape) || a.isSource(this.state.text))if (!mxClient.IS_SF && !mxClient.IS_GC || a.getSource().nodeName !=
        "SELECT")return mxEvent.LABEL_HANDLE;
    return null
};
mxEdgeHandler.prototype.mouseDown = function (a, b) {
    var c = null, c = this.getHandleForEvent(b);
    if (c != null && !b.isConsumed() && this.graph.isEnabled() && !this.graph.isForceMarqueeEvent(b.getEvent())) {
        this.removeEnabled && this.isRemovePointEvent(b.getEvent()) ? this.removePoint(this.state, c) : (c != mxEvent.LABEL_HANDLE || this.graph.isLabelMovable(b.getCell())) && this.start(b.getX(), b.getY(), c);
        b.consume()
    }
};
mxEdgeHandler.prototype.start = function (a, b, c) {
    this.startX = a;
    this.startY = b;
    this.isSource = this.bends == null ? false : c == 0;
    this.isTarget = this.bends == null ? false : c == this.bends.length - 1;
    this.isLabel = c == mxEvent.LABEL_HANDLE;
    if (this.isSource || this.isTarget) {
        a = this.state.cell;
        b = this.graph.model.getTerminal(a, this.isSource);
        if (b == null && this.graph.isTerminalPointMovable(a, this.isSource) || b != null && this.graph.isCellDisconnectable(a, b, this.isSource))this.index = c
    } else this.index = c
};
mxEdgeHandler.prototype.clonePreviewState = function () {
    return this.state.clone()
};
mxEdgeHandler.prototype.getSnapToTerminalTolerance = function () {
    return this.graph.gridSize * this.graph.view.scale / 2
};
mxEdgeHandler.prototype.getPointForEvent = function (a) {
    var b = new mxPoint(a.getGraphX(), a.getGraphY()), c = this.getSnapToTerminalTolerance(), d = this.graph.getView(), e = false, f = false;
    if (this.snapToTerminals && c > 0) {
        var g = function (a) {
            if (a != null) {
                var d = a.x;
                if (Math.abs(b.x - d) < c) {
                    b.x = d;
                    e = true
                }
                a = a.y;
                if (Math.abs(b.y - a) < c) {
                    b.y = a;
                    f = true
                }
            }
        }, h = function (a) {
            a != null && g.call(this, new mxPoint(d.getRoutingCenterX(a), d.getRoutingCenterY(a)))
        };
        h.call(this, this.state.getVisibleTerminalState(true));
        h.call(this, this.state.getVisibleTerminalState(false));
        if (this.bends != null)for (h = 0; h < this.bends.length; h++)if (h != this.index) {
            var k = new mxPoint(this.bends[h].bounds.getCenterX(), this.bends[h].bounds.getCenterY());
            g.call(this, k)
        }
    }
    if (this.graph.isGridEnabledEvent(a.getEvent())) {
        a = d.scale;
        h = d.translate;
        if (!e)b.x = (this.graph.snap(b.x / a - h.x) + h.x) * a;
        if (!f)b.y = (this.graph.snap(b.y / a - h.y) + h.y) * a
    }
    return b
};
mxEdgeHandler.prototype.getPreviewTerminalState = function (a) {
    this.constraintHandler.update(a, this.isSource);
    this.marker.process(a);
    var a = this.marker.getValidState(), b = null;
    this.constraintHandler.currentFocus != null && this.constraintHandler.currentConstraint != null && this.marker.reset();
    if (a != null)b = a; else if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null)b = this.constraintHandler.currentFocus;
    return b
};
mxEdgeHandler.prototype.getPreviewPoints = function (a) {
    var b = this.graph.getCellGeometry(this.state.cell), b = b.points != null ? b.points.slice() : null;
    if (!this.isSource && !this.isTarget) {
        this.convertPoint(a, false);
        b == null ? b = [a] : b[this.index - 1] = a
    } else this.graph.resetEdgesOnConnect && (b = null);
    return b
};
mxEdgeHandler.prototype.updatePreviewState = function (a, b, c) {
    var d = this.isSource ? c : this.state.getVisibleTerminalState(true), e = this.isTarget ? c : this.state.getVisibleTerminalState(false), f = this.graph.getConnectionConstraint(a, d, true), g = this.graph.getConnectionConstraint(a, e, false), h = this.constraintHandler.currentConstraint;
    h == null && (h = new mxConnectionConstraint);
    this.isSource ? f = h : this.isTarget && (g = h);
    (!this.isSource || d != null) && a.view.updateFixedTerminalPoint(a, d, true, f);
    (!this.isTarget || e != null) && a.view.updateFixedTerminalPoint(a,
        e, false, g);
    if ((this.isSource || this.isTarget) && c == null) {
        a.setAbsoluteTerminalPoint(b, this.isSource);
        if (this.marker.getMarkedState() == null)this.error = this.graph.allowDanglingEdges ? null : ""
    }
    a.view.updatePoints(a, this.points, d, e);
    a.view.updateFloatingTerminalPoints(a, d, e)
};
mxEdgeHandler.prototype.mouseMove = function (a, b) {
    if (this.index != null && this.marker != null) {
        var c = this.getPointForEvent(b);
        if (this.isLabel) {
            this.label.x = c.x;
            this.label.y = c.y
        } else {
            this.points = this.getPreviewPoints(c);
            var d = this.isSource || this.isTarget ? this.getPreviewTerminalState(b) : null, e = this.clonePreviewState(c, d != null ? d.cell : null);
            this.updatePreviewState(e, c, d);
            this.setPreviewColor(this.error == null ? this.marker.validColor : this.marker.invalidColor);
            this.abspoints = e.absolutePoints;
            this.active = true
        }
        this.drawPreview();
        mxEvent.consume(b.getEvent());
        b.consume()
    } else mxClient.IS_IE && this.getHandleForEvent(b) != null && b.consume(false)
};
mxEdgeHandler.prototype.mouseUp = function (a, b) {
    if (this.index != null && this.marker != null) {
        var c = this.state.cell;
        if (b.getX() != this.startX || b.getY() != this.startY)if (this.error != null)this.error.length > 0 && this.graph.validationAlert(this.error); else if (this.isLabel)this.moveLabel(this.state, this.label.x, this.label.y); else if (this.isSource || this.isTarget) {
            var d = null;
            if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null)d = this.constraintHandler.currentFocus.cell;
            if (d ==
                null && this.marker.hasValidState())d = this.marker.validState.cell;
            if (d != null)c = this.connect(c, d, this.isSource, this.graph.isCloneEvent(b.getEvent()) && this.cloneEnabled && this.graph.isCellsCloneable(), b); else if (this.graph.isAllowDanglingEdges()) {
                var d = this.graph.getPointForEvent(b.getEvent(), false), e = this.graph.getView().getState(this.graph.getModel().getParent(c));
                if (e != null) {
                    d.x = d.x - e.origin.x;
                    d.y = d.y - e.origin.y
                }
                d.x = d.x - this.graph.panDx / this.graph.view.scale;
                d.y = d.y - this.graph.panDy / this.graph.view.scale;
                this.changeTerminalPoint(c, d, this.isSource)
            }
        } else if (this.active)this.changePoints(c, this.points); else {
            this.graph.getView().invalidate(this.state.cell);
            this.graph.getView().revalidate(this.state.cell)
        }
        if (this.marker != null) {
            this.reset();
            c != this.state.cell && this.graph.setSelectionCell(c)
        }
        b.consume()
    }
};
mxEdgeHandler.prototype.reset = function () {
    this.points = this.label = this.index = this.error = null;
    this.isTarget = this.isSource = this.isLabel = this.active = false;
    this.marker.reset();
    this.constraintHandler.reset();
    this.setPreviewColor(mxConstants.EDGE_SELECTION_COLOR);
    this.redraw()
};
mxEdgeHandler.prototype.setPreviewColor = function (a) {
    if (this.shape != null && this.shape.node != null)this.shape.dialect == mxConstants.DIALECT_SVG ? this.shape.innerNode.setAttribute("stroke", a) : this.shape.node.strokecolor = a
};
mxEdgeHandler.prototype.convertPoint = function (a, b) {
    var c = this.graph.getView().getScale(), d = this.graph.getView().getTranslate();
    if (b) {
        a.x = this.graph.snap(a.x);
        a.y = this.graph.snap(a.y)
    }
    a.x = Math.round(a.x / c - d.x);
    a.y = Math.round(a.y / c - d.y);
    c = this.graph.getView().getState(this.graph.getModel().getParent(this.state.cell));
    if (c != null) {
        a.x = a.x - c.origin.x;
        a.y = a.y - c.origin.y
    }
    return a
};
mxEdgeHandler.prototype.moveLabel = function (a, b, c) {
    var d = this.graph.getModel(), e = d.getGeometry(a.cell);
    if (e != null) {
        var e = e.clone(), f = this.graph.getView().getRelativePoint(a, b, c);
        e.x = f.x;
        e.y = f.y;
        var g = this.graph.getView().scale;
        e.offset = new mxPoint(0, 0);
        f = this.graph.view.getPoint(a, e);
        e.offset = new mxPoint((b - f.x) / g, (c - f.y) / g);
        d.setGeometry(a.cell, e)
    }
};
mxEdgeHandler.prototype.connect = function (a, b, c, d) {
    var e = this.graph.getModel(), f = e.getParent(a);
    e.beginUpdate();
    try {
        if (d) {
            var g = a.clone();
            e.add(f, g, e.getChildCount(f));
            var h = e.getTerminal(a, !c);
            this.graph.connectCell(g, h, !c);
            a = g
        }
        var k = this.constraintHandler.currentConstraint;
        k == null && (k = new mxConnectionConstraint);
        this.graph.connectCell(a, b, c, k)
    } finally {
        e.endUpdate()
    }
    return a
};
mxEdgeHandler.prototype.changeTerminalPoint = function (a, b, c) {
    var d = this.graph.getModel(), e = d.getGeometry(a);
    if (e != null) {
        d.beginUpdate();
        try {
            e = e.clone();
            e.setTerminalPoint(b, c);
            d.setGeometry(a, e);
            this.graph.connectCell(a, null, c, new mxConnectionConstraint)
        } finally {
            d.endUpdate()
        }
    }
};
mxEdgeHandler.prototype.changePoints = function (a, b) {
    var c = this.graph.getModel(), d = c.getGeometry(a);
    if (d != null) {
        d = d.clone();
        d.points = b;
        c.setGeometry(a, d)
    }
};
mxEdgeHandler.prototype.addPoint = function (a, b) {
    var c = this.graph.getCellGeometry(a.cell);
    if (c != null) {
        var c = c.clone(), d = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(b), mxEvent.getClientY(b)), e = mxUtils.findNearestSegment(a, d.x, d.y), f = this.graph.isGridEnabledEvent(b);
        this.convertPoint(d, f);
        c.points == null ? c.points = [d] : c.points.splice(e, 0, d);
        this.graph.getModel().setGeometry(a.cell, c);
        this.destroy();
        this.init();
        mxEvent.consume(b)
    }
};
mxEdgeHandler.prototype.removePoint = function (a, b) {
    if (b > 0 && b < this.abspoints.length - 1) {
        var c = this.graph.getCellGeometry(this.state.cell);
        if (c != null && c.points != null) {
            c = c.clone();
            c.points.splice(b - 1, 1);
            this.graph.getModel().setGeometry(a.cell, c);
            this.destroy();
            this.init()
        }
    }
};
mxEdgeHandler.prototype.getHandleFillColor = function (a) {
    var a = a == 0, b = this.state.cell, c = this.graph.getModel().getTerminal(b, a), d = mxConstants.HANDLE_FILLCOLOR;
    if (c != null && !this.graph.isCellDisconnectable(b, c, a) || c == null && !this.graph.isTerminalPointMovable(b, a))d = mxConstants.LOCKED_HANDLE_FILLCOLOR; else if (c != null && this.graph.isCellDisconnectable(b, c, a))d = mxConstants.CONNECT_HANDLE_FILLCOLOR;
    return d
};
mxEdgeHandler.prototype.redraw = function () {
    this.abspoints = this.state.absolutePoints.slice();
    var a = this.state.cell, b = mxConstants.LABEL_HANDLE_SIZE;
    this.label = new mxPoint(this.state.absoluteOffset.x, this.state.absoluteOffset.y);
    this.labelShape.bounds = new mxRectangle(this.label.x - b / 2, this.label.y - b / 2, b, b);
    this.labelShape.redraw();
    b = this.graph.getLabel(a);
    this.labelShape.node.style.visibility = b != null && b.length > 0 && this.graph.isLabelMovable(a) ? "visible" : "hidden";
    if (this.bends != null && this.bends.length > 0) {
        var c =
            this.abspoints.length - 1, a = this.abspoints[0], b = this.bends[0].bounds;
        this.bends[0].bounds = new mxRectangle(this.abspoints[0].x - b.width / 2, this.abspoints[0].y - b.height / 2, b.width, b.height);
        this.bends[0].fill = this.getHandleFillColor(0);
        this.bends[0].reconfigure();
        this.bends[0].redraw();
        var d = this.abspoints[c], e = this.abspoints[c].x, c = this.abspoints[c].y, f = this.bends.length - 1, b = this.bends[f].bounds;
        this.bends[f].bounds = new mxRectangle(e - b.width / 2, c - b.height / 2, b.width, b.height);
        this.bends[f].fill = this.getHandleFillColor(f);
        this.bends[f].reconfigure();
        this.bends[f].redraw();
        this.redrawInnerBends(a, d)
    }
    this.drawPreview()
};
mxEdgeHandler.prototype.redrawInnerBends = function () {
    var a = this.graph.getModel().getGeometry(this.state.cell).points;
    if (a != null) {
        if (this.points == null)this.points = [];
        for (var b = 1; b < this.bends.length - 1; b++)if (this.bends[b] != null)if (this.abspoints[b] != null) {
            var c = this.abspoints[b].x, d = this.abspoints[b].y, e = this.bends[b].bounds;
            this.bends[b].node.style.visibility = "visible";
            this.bends[b].bounds = new mxRectangle(c - e.width / 2, d - e.height / 2, e.width, e.height);
            this.bends[b].redraw();
            this.points[b - 1] = a[b - 1]
        } else {
            this.bends[b].destroy();
            this.bends[b] = null
        }
    }
};
mxEdgeHandler.prototype.drawPreview = function () {
    if (this.isLabel) {
        var a = mxConstants.LABEL_HANDLE_SIZE;
        this.labelShape.bounds = new mxRectangle(this.label.x - a / 2, this.label.y - a / 2, a, a);
        this.labelShape.redraw()
    } else {
        this.shape.points = this.abspoints;
        this.shape.redraw()
    }
    mxUtils.repaintGraph(this.graph, this.shape.points[this.shape.points.length - 1])
};
mxEdgeHandler.prototype.destroy = function () {
    if (this.marker != null) {
        this.marker.destroy();
        this.marker = null
    }
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
    if (this.labelShape != null) {
        this.labelShape.destroy();
        this.labelShape = null
    }
    if (this.constraintHandler != null) {
        this.constraintHandler.destroy();
        this.constraintHandler = null
    }
    if (this.bends != null)for (var a = 0; a < this.bends.length; a++)if (this.bends[a] != null) {
        this.bends[a].destroy();
        this.bends[a] = null
    }
};
function mxElbowEdgeHandler(a) {
    if (a != null) {
        this.state = a;
        this.init()
    }
}
mxElbowEdgeHandler.prototype = new mxEdgeHandler;
mxElbowEdgeHandler.prototype.constructor = mxElbowEdgeHandler;
mxElbowEdgeHandler.prototype.flipEnabled = !0;
mxElbowEdgeHandler.prototype.doubleClickOrientationResource = "none" != mxClient.language ? "doubleClickOrientation" : "";
mxElbowEdgeHandler.prototype.createBends = function () {
    var a = [], b = this.createHandleShape(0);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    a.push(this.createVirtualBend());
    this.points.push(new mxPoint(0, 0));
    b = this.createHandleShape(2);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    return a
};
mxElbowEdgeHandler.prototype.createVirtualBend = function () {
    var a = this.createHandleShape();
    this.initBend(a);
    var b = this.getCursorForBend();
    a.node.style.cursor = b;
    b = mxUtils.bind(this, function (a) {
        if (!mxEvent.isConsumed(a) && this.flipEnabled) {
            this.graph.flipEdge(this.state.cell, a);
            mxEvent.consume(a)
        }
    });
    mxEvent.redirectMouseEvents(a.node, this.graph, this.state, null, null, null, b);
    if (!this.graph.isCellBendable(this.state.cell))a.node.style.visibility = "hidden";
    return a
};
mxElbowEdgeHandler.prototype.getCursorForBend = function () {
    return this.state.style[mxConstants.STYLE_EDGE] == mxEdgeStyle.TopToBottom || this.state.style[mxConstants.STYLE_EDGE] == mxConstants.EDGESTYLE_TOPTOBOTTOM || (this.state.style[mxConstants.STYLE_EDGE] == mxEdgeStyle.ElbowConnector || this.state.style[mxConstants.STYLE_EDGE] == mxConstants.EDGESTYLE_ELBOW) && this.state.style[mxConstants.STYLE_ELBOW] == mxConstants.ELBOW_VERTICAL ? "row-resize" : "col-resize"
};
mxElbowEdgeHandler.prototype.getTooltipForNode = function (a) {
    var b = null;
    if (this.bends != null && this.bends[1] != null && (a == this.bends[1].node || a.parentNode == this.bends[1].node)) {
        b = this.doubleClickOrientationResource;
        b = mxResources.get(b) || b
    }
    return b
};
mxElbowEdgeHandler.prototype.convertPoint = function (a, b) {
    var c = this.graph.getView().getScale(), d = this.graph.getView().getTranslate(), e = this.state.origin;
    if (b) {
        a.x = this.graph.snap(a.x);
        a.y = this.graph.snap(a.y)
    }
    a.x = Math.round(a.x / c - d.x - e.x);
    a.y = Math.round(a.y / c - d.y - e.y)
};
mxElbowEdgeHandler.prototype.redrawInnerBends = function (a, b) {
    var c = this.graph.getModel().getGeometry(this.state.cell).points, c = c != null ? c[0] : null, c = c == null ? new mxPoint(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2) : new mxPoint(this.graph.getView().scale * (c.x + this.graph.getView().translate.x + this.state.origin.x), this.graph.getView().scale * (c.y + this.graph.getView().translate.y + this.state.origin.y)), d = this.bends[1].bounds, e = d.width, d = d.height;
    if (this.handleImage == null)d = e = mxConstants.HANDLE_SIZE;
    var f = new mxRectangle(c.x -
        e / 2, c.y - d / 2, e, d);
    if (this.handleImage == null && this.labelShape.node.style.visibility != "hidden" && mxUtils.intersects(f, this.labelShape.bounds)) {
        e = e + 3;
        d = d + 3;
        f = new mxRectangle(c.x - e / 2, c.y - d / 2, e, d)
    }
    this.bends[1].bounds = f;
    this.bends[1].reconfigure();
    this.bends[1].redraw()
};
function mxEdgeSegmentHandler(a) {
    if (a != null) {
        this.state = a;
        this.init()
    }
}
mxEdgeSegmentHandler.prototype = new mxElbowEdgeHandler;
mxEdgeSegmentHandler.prototype.constructor = mxEdgeSegmentHandler;
mxEdgeSegmentHandler.prototype.getPreviewPoints = function (a) {
    if (this.isSource || this.isTarget)return mxElbowEdgeHandler.prototype.getPreviewPoints.apply(this, arguments);
    this.convertPoint(a, false);
    var b = this.state.absolutePoints, c = b[0].clone();
    this.convertPoint(c, false);
    for (var d = [], e = 1; e < b.length; e++) {
        var f = b[e].clone();
        this.convertPoint(f, false);
        if (e == this.index)if (c.x == f.x) {
            c.x = a.x;
            f.x = a.x
        } else {
            c.y = a.y;
            f.y = a.y
        }
        e < b.length - 1 && d.push(f);
        c = f
    }
    if (d.length == 1) {
        c = this.state.view;
        e = this.state.getVisibleTerminalState(true);
        f = this.state.getVisibleTerminalState(false);
        if (f != null & e != null)if (mxUtils.contains(f, d[0].x, d[0].y))b[1].y == b[2].y ? d[0].y = c.getRoutingCenterY(e) : d[0].x = c.getRoutingCenterX(e); else if (mxUtils.contains(e, d[0].x, d[0].y))b[1].y == b[0].y ? d[0].y = c.getRoutingCenterY(f) : d[0].x = c.getRoutingCenterX(f)
    } else d.length == 0 && (d = [a]);
    return d
};
mxEdgeSegmentHandler.prototype.createBends = function () {
    var a = [], b = this.createHandleShape(0);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    var c = this.state.absolutePoints;
    if (this.graph.isCellBendable(this.state.cell)) {
        if (this.points == null)this.points = [];
        for (var d = 0; d < c.length - 1; d++) {
            b = this.createVirtualBend();
            a.push(b);
            b.node.style.cursor = c[d].x - c[d +
                1].x == 0 ? "col-resize" : "row-resize";
            this.points.push(new mxPoint(0, 0));
            mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none")
        }
    }
    b = this.createHandleShape(c.length);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    return a
};
mxEdgeSegmentHandler.prototype.redrawInnerBends = function (a, b) {
    if (this.graph.isCellBendable(this.state.cell)) {
        var c = mxConstants.HANDLE_SIZE, d = this.state.absolutePoints;
        if (d != null && d.length > 1)for (var e = 0; e < this.state.absolutePoints.length - 1; e++)if (this.bends[e + 1] != null) {
            var a = d[e], b = d[e + 1], f = new mxPoint(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2);
            this.bends[e + 1].bounds = new mxRectangle(f.x - c / 2, f.y - c / 2, c, c);
            this.bends[e + 1].reconfigure();
            this.bends[e + 1].redraw()
        }
    }
};
mxEdgeSegmentHandler.prototype.connect = function (a, b, c, d, e) {
    mxEdgeHandler.prototype.connect.apply(this, arguments);
    this.refresh()
};
mxEdgeSegmentHandler.prototype.changeTerminalPoint = function (a, b, c) {
    mxEdgeHandler.prototype.changeTerminalPoint.apply(this, arguments);
    this.refresh()
};
mxEdgeSegmentHandler.prototype.changePoints = function (a, b) {
    var b = [], c = this.abspoints;
    if (c.length > 1)for (var d = c[0], e = c[1], f = 2; f < c.length; f++) {
        var g = c[f];
        if ((Math.round(d.x) != Math.round(e.x) || Math.round(e.x) != Math.round(g.x)) && (Math.round(d.y) != Math.round(e.y) || Math.round(e.y) != Math.round(g.y))) {
            d = e;
            e = e.clone();
            this.convertPoint(e, false);
            b.push(e)
        }
        e = g
    }
    mxElbowEdgeHandler.prototype.changePoints.apply(this, arguments);
    this.refresh()
};
mxEdgeSegmentHandler.prototype.refresh = function () {
    if (this.bends != null) {
        for (var a = 0; a < this.bends.length; a++)if (this.bends[a] != null) {
            this.bends[a].destroy();
            this.bends[a] = null
        }
        this.bends = this.createBends()
    }
};
function mxKeyHandler(a, b) {
    if (a != null) {
        this.graph = a;
        this.target = b || document.documentElement;
        this.normalKeys = [];
        this.shiftKeys = [];
        this.controlKeys = [];
        this.controlShiftKeys = [];
        mxEvent.addListener(this.target, "keydown", mxUtils.bind(this, function (a) {
            this.keyDown(a)
        }));
        mxClient.IS_IE && mxEvent.addListener(window, "unload", mxUtils.bind(this, function () {
            this.destroy()
        }))
    }
}
mxKeyHandler.prototype.graph = null;
mxKeyHandler.prototype.target = null;
mxKeyHandler.prototype.normalKeys = null;
mxKeyHandler.prototype.shiftKeys = null;
mxKeyHandler.prototype.controlKeys = null;
mxKeyHandler.prototype.controlShiftKeys = null;
mxKeyHandler.prototype.enabled = !0;
mxKeyHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxKeyHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxKeyHandler.prototype.bindKey = function (a, b) {
    this.normalKeys[a] = b
};
mxKeyHandler.prototype.bindShiftKey = function (a, b) {
    this.shiftKeys[a] = b
};
mxKeyHandler.prototype.bindControlKey = function (a, b) {
    this.controlKeys[a] = b
};
mxKeyHandler.prototype.bindControlShiftKey = function (a, b) {
    this.controlShiftKeys[a] = b
};
mxKeyHandler.prototype.isControlDown = function (a) {
    return mxEvent.isControlDown(a)
};
mxKeyHandler.prototype.getFunction = function (a) {
    return a != null ? this.isControlDown(a) ? mxEvent.isShiftDown(a) ? this.controlShiftKeys[a.keyCode] : this.controlKeys[a.keyCode] : mxEvent.isShiftDown(a) ? this.shiftKeys[a.keyCode] : this.normalKeys[a.keyCode] : null
};
mxKeyHandler.prototype.isGraphEvent = function (a) {
    a = mxEvent.getSource(a);
    if (a == this.target || a.parentNode == this.target || this.graph.cellEditor != null && a == this.graph.cellEditor.textarea)return true;
    for (; a != null;) {
        if (a == this.graph.container)return true;
        a = a.parentNode
    }
    return false
};
mxKeyHandler.prototype.keyDown = function (a) {
    if (this.graph.isEnabled() && !mxEvent.isConsumed(a) && this.isGraphEvent(a) && this.isEnabled())if (a.keyCode == 27)this.escape(a); else if (!this.graph.isEditing()) {
        var b = this.getFunction(a);
        if (b != null) {
            b(a);
            mxEvent.consume(a)
        }
    }
};
mxKeyHandler.prototype.escape = function (a) {
    this.graph.isEscapeEnabled() && this.graph.escape(a)
};
mxKeyHandler.prototype.destroy = function () {
    this.target = null
};
function mxTooltipHandler(a, b) {
    if (a != null) {
        this.graph = a;
        this.delay = b || 500;
        this.graph.addMouseListener(this)
    }
}
mxTooltipHandler.prototype.zIndex = 10005;
mxTooltipHandler.prototype.graph = null;
mxTooltipHandler.prototype.delay = null;
mxTooltipHandler.prototype.hideOnHover = !1;
mxTooltipHandler.prototype.enabled = !0;
mxTooltipHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxTooltipHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxTooltipHandler.prototype.isHideOnHover = function () {
    return this.hideOnHover
};
mxTooltipHandler.prototype.setHideOnHover = function (a) {
    this.hideOnHover = a
};
mxTooltipHandler.prototype.init = function () {
    if (document.body != null) {
        this.div = document.createElement("div");
        this.div.className = "mxTooltip";
        this.div.style.visibility = "hidden";
        this.div.style.zIndex = this.zIndex;
        document.body.appendChild(this.div);
        mxEvent.addListener(this.div, "mousedown", mxUtils.bind(this, function () {
            this.hideTooltip()
        }))
    }
};
mxTooltipHandler.prototype.mouseDown = function (a, b) {
    this.reset(b, false);
    this.hideTooltip()
};
mxTooltipHandler.prototype.mouseMove = function (a, b) {
    if (b.getX() != this.lastX || b.getY() != this.lastY) {
        this.reset(b, true);
        (this.isHideOnHover() || b.getState() != this.state || b.getSource() != this.node && (!this.stateSource || b.getState() != null && this.stateSource == (b.isSource(b.getState().shape) || !b.isSource(b.getState().text)))) && this.hideTooltip()
    }
    this.lastX = b.getX();
    this.lastY = b.getY()
};
mxTooltipHandler.prototype.mouseUp = function (a, b) {
    this.reset(b, true);
    this.hideTooltip()
};
mxTooltipHandler.prototype.resetTimer = function () {
    if (this.thread != null) {
        window.clearTimeout(this.thread);
        this.thread = null
    }
};
mxTooltipHandler.prototype.reset = function (a, b) {
    this.resetTimer();
    if (b && this.isEnabled() && a.getState() != null && (this.div == null || this.div.style.visibility == "hidden")) {
        var c = a.getState(), d = a.getSource(), e = a.getX(), f = a.getY(), g = a.isSource(c.shape) || a.isSource(c.text);
        this.thread = window.setTimeout(mxUtils.bind(this, function () {
            if (!this.graph.isEditing() && !this.graph.panningHandler.isMenuShowing()) {
                this.show(this.graph.getTooltip(c, d, e, f), e, f);
                this.state = c;
                this.node = d;
                this.stateSource = g
            }
        }), this.delay)
    }
};
mxTooltipHandler.prototype.hide = function () {
    this.resetTimer();
    this.hideTooltip()
};
mxTooltipHandler.prototype.hideTooltip = function () {
    if (this.div != null)this.div.style.visibility = "hidden"
};
mxTooltipHandler.prototype.show = function (a, b, c) {
    if (a != null && a.length > 0) {
        this.div == null && this.init();
        var d = mxUtils.getScrollOrigin();
        this.div.style.left = b + d.x + "px";
        this.div.style.top = c + mxConstants.TOOLTIP_VERTICAL_OFFSET + d.y + "px";
        if (mxUtils.isNode(a)) {
            this.div.innerHTML = "";
            this.div.appendChild(a)
        } else this.div.innerHTML = a.replace(/\n/g, "<br>");
        this.div.style.visibility = "";
        mxUtils.fit(this.div)
    }
};
mxTooltipHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    mxEvent.release(this.div);
    this.div != null && this.div.parentNode != null && this.div.parentNode.removeChild(this.div);
    this.div = null
};
function mxCellTracker(a, b, c) {
    mxCellMarker.call(this, a, b);
    this.graph.addMouseListener(this);
    if (c != null)this.getCell = c;
    mxClient.IS_IE && mxEvent.addListener(window, "unload", mxUtils.bind(this, function () {
        this.destroy()
    }))
}
mxCellTracker.prototype = new mxCellMarker;
mxCellTracker.prototype.constructor = mxCellTracker;
mxCellTracker.prototype.mouseDown = function () {
};
mxCellTracker.prototype.mouseMove = function (a, b) {
    this.isEnabled() && this.process(b)
};
mxCellTracker.prototype.mouseUp = function () {
    this.reset()
};
mxCellTracker.prototype.destroy = function () {
    if (!this.destroyed) {
        this.destroyed = true;
        this.graph.removeMouseListener(this);
        mxCellMarker.prototype.destroy.apply(this)
    }
};
function mxCellHighlight(a, b, c) {
    if (a != null) {
        this.graph = a;
        this.highlightColor = b != null ? b : mxConstants.DEFAULT_VALID_COLOR;
        this.strokeWidth = c != null ? c : mxConstants.HIGHLIGHT_STROKEWIDTH;
        this.repaintHandler = mxUtils.bind(this, function () {
            this.repaint()
        });
        this.graph.getView().addListener(mxEvent.SCALE, this.repaintHandler);
        this.graph.getView().addListener(mxEvent.TRANSLATE, this.repaintHandler);
        this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.repaintHandler);
        this.graph.getModel().addListener(mxEvent.CHANGE,
            this.repaintHandler);
        this.resetHandler = mxUtils.bind(this, function () {
            this.hide()
        });
        this.graph.getView().addListener(mxEvent.DOWN, this.resetHandler);
        this.graph.getView().addListener(mxEvent.UP, this.resetHandler)
    }
}
mxCellHighlight.prototype.keepOnTop = !1;
mxCellHighlight.prototype.graph = !0;
mxCellHighlight.prototype.state = null;
mxCellHighlight.prototype.spacing = 2;
mxCellHighlight.prototype.resetHandler = null;
mxCellHighlight.prototype.setHighlightColor = function (a) {
    this.highlightColor = a;
    if (this.shape != null)if (this.shape.dialect == mxConstants.DIALECT_SVG)this.shape.innerNode.setAttribute("stroke", a); else if (this.shape.dialect == mxConstants.DIALECT_VML)this.shape.node.strokecolor = a
};
mxCellHighlight.prototype.drawHighlight = function () {
    this.shape = this.createShape();
    this.repaint();
    !this.keepOnTop && this.shape.node.parentNode.firstChild != this.shape.node && this.shape.node.parentNode.insertBefore(this.shape.node, this.shape.node.parentNode.firstChild);
    this.graph.model.isEdge(this.state.cell) && mxUtils.repaintGraph(this.graph, this.shape.points[0])
};
mxCellHighlight.prototype.createShape = function () {
    var a = null, a = this.graph.model.isEdge(this.state.cell) ? new mxPolyline(this.state.absolutePoints, this.highlightColor, this.strokeWidth) : new mxRectangleShape(new mxRectangle, null, this.highlightColor, this.strokeWidth);
    a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    a.init(this.graph.getView().getOverlayPane());
    mxEvent.redirectMouseEvents(a.node, this.graph, this.state);
    return a
};
mxCellHighlight.prototype.repaint = function () {
    if (this.state != null && this.shape != null) {
        this.graph.model.isEdge(this.state.cell) ? this.shape.points = this.state.absolutePoints : this.shape.bounds = new mxRectangle(this.state.x - this.spacing, this.state.y - this.spacing, this.state.width + 2 * this.spacing, this.state.height + 2 * this.spacing);
        this.shape.redraw();
        this.state.shape != null && this.shape.setCursor(this.state.shape.getCursor());
        var a = !this.graph.model.isEdge(this.state.cell) ? Number(this.state.style[mxConstants.STYLE_ROTATION] ||
            "0") : 0;
        if (this.shape.dialect == mxConstants.DIALECT_SVG) {
            this.shape.node.setAttribute("style", "pointer-events:none;");
            if (a != 0) {
                var b = state.getCenterX(), c = state.getCenterY();
                this.shape.node.setAttribute("transform", "rotate(" + a + " " + b + " " + c + ")")
            }
        } else {
            this.shape.node.style.background = "";
            if (a != 0)this.shape.node.rotation = a
        }
    }
};
mxCellHighlight.prototype.hide = function () {
    this.highlight(null)
};
mxCellHighlight.prototype.highlight = function (a) {
    if (this.state != a) {
        if (this.shape != null) {
            this.shape.destroy();
            this.shape = null
        }
        this.state = a;
        this.state != null && this.drawHighlight()
    }
};
mxCellHighlight.prototype.destroy = function () {
    this.graph.getView().removeListener(this.repaintHandler);
    this.graph.getModel().removeListener(this.repaintHandler);
    this.graph.getView().removeListener(this.resetHandler);
    this.graph.getModel().removeListener(this.resetHandler);
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
};
function mxDefaultKeyHandler(a) {
    if (a != null) {
        this.editor = a;
        this.handler = new mxKeyHandler(a.graph);
        var b = this.handler.escape;
        this.handler.escape = function (c) {
            b.apply(this, arguments);
            a.hideProperties();
            a.fireEvent(new mxEventObject(mxEvent.ESCAPE, "event", c))
        }
    }
}
mxDefaultKeyHandler.prototype.editor = null;
mxDefaultKeyHandler.prototype.handler = null;
mxDefaultKeyHandler.prototype.bindAction = function (a, b, c) {
    var d = mxUtils.bind(this, function () {
        this.editor.execute(b)
    });
    c ? this.handler.bindControlKey(a, d) : this.handler.bindKey(a, d)
};
mxDefaultKeyHandler.prototype.destroy = function () {
    this.handler.destroy();
    this.handler = null
};
function mxDefaultPopupMenu(a) {
    this.config = a
}
mxDefaultPopupMenu.prototype.imageBasePath = null;
mxDefaultPopupMenu.prototype.config = null;
mxDefaultPopupMenu.prototype.createMenu = function (a, b, c, d) {
    if (this.config != null) {
        var e = this.createConditions(a, c, d);
        this.addItems(a, b, c, d, e, this.config.firstChild, null)
    }
};
mxDefaultPopupMenu.prototype.addItems = function (a, b, c, d, e, f, g) {
    for (var h = false; f != null;) {
        if (f.nodeName == "add") {
            var k = f.getAttribute("if");
            if (k == null || e[k]) {
                var k = f.getAttribute("as"), k = mxResources.get(k) || k, i = mxUtils.eval(mxUtils.getTextContent(f)), l = f.getAttribute("action"), m = f.getAttribute("icon"), n = f.getAttribute("iconCls");
                if (h) {
                    b.addSeparator(g);
                    h = false
                }
                m != null && this.imageBasePath && (m = this.imageBasePath + m);
                k = this.addAction(b, a, k, m, i, l, c, g, n);
                this.addItems(a, b, c, d, e, f.firstChild, k)
            }
        } else f.nodeName ==
            "separator" && (h = true);
        f = f.nextSibling
    }
};
mxDefaultPopupMenu.prototype.addAction = function (a, b, c, d, e, f, g, h, k) {
    return a.addItem(c, d, function (a) {
        typeof e == "function" && e.call(b, b, g, a);
        f != null && b.execute(f, g, a)
    }, h, k)
};
mxDefaultPopupMenu.prototype.createConditions = function (a, b, c) {
    var d = a.graph.getModel(), e = d.getChildCount(b), f = [];
    f.nocell = b == null;
    f.ncells = a.graph.getSelectionCount() > 1;
    f.notRoot = d.getRoot() != d.getParent(a.graph.getDefaultParent());
    f.cell = b != null;
    d = b != null && a.graph.getSelectionCount() == 1;
    f.nonEmpty = d && e > 0;
    f.expandable = d && a.graph.isCellFoldable(b, false);
    f.collapsable = d && a.graph.isCellFoldable(b, true);
    f.validRoot = d && a.graph.isValidRoot(b);
    f.emptyValidRoot = f.validRoot && e == 0;
    f.swimlane = d && a.graph.isSwimlane(b);
    e = this.config.getElementsByTagName("condition");
    for (d = 0; d < e.length; d++) {
        var g = mxUtils.eval(mxUtils.getTextContent(e[d])), h = e[d].getAttribute("name");
        h != null && typeof g == "function" && (f[h] = g(a, b, c))
    }
    return f
};
function mxDefaultToolbar(a, b) {
    this.editor = b;
    a != null && b != null && this.init(a)
}
mxDefaultToolbar.prototype.editor = null;
mxDefaultToolbar.prototype.toolbar = null;
mxDefaultToolbar.prototype.resetHandler = null;
mxDefaultToolbar.prototype.spacing = 4;
mxDefaultToolbar.prototype.connectOnDrop = !1;
mxDefaultToolbar.prototype.init = function (a) {
    if (a != null) {
        this.toolbar = new mxToolbar(a);
        this.toolbar.addListener(mxEvent.SELECT, mxUtils.bind(this, function (a, c) {
            var d = c.getProperty("function");
            this.editor.insertFunction = d != null ? mxUtils.bind(this, function () {
                d.apply(this, arguments);
                this.toolbar.resetMode()
            }) : null
        }));
        this.resetHandler = mxUtils.bind(this, function () {
            this.toolbar != null && this.toolbar.resetMode(true)
        });
        this.editor.graph.addListener(mxEvent.DOUBLE_CLICK, this.resetHandler);
        this.editor.addListener(mxEvent.ESCAPE,
            this.resetHandler)
    }
};
mxDefaultToolbar.prototype.addItem = function (a, b, c, d) {
    var e = mxUtils.bind(this, function () {
        c != null && c.length > 0 && this.editor.execute(c)
    });
    return this.toolbar.addItem(a, b, e, d)
};
mxDefaultToolbar.prototype.addSeparator = function (a) {
    a = a || mxClient.imageBasePath + "/separator.gif";
    this.toolbar.addSeparator(a)
};
mxDefaultToolbar.prototype.addCombo = function () {
    return this.toolbar.addCombo()
};
mxDefaultToolbar.prototype.addActionCombo = function (a) {
    return this.toolbar.addActionCombo(a)
};
mxDefaultToolbar.prototype.addActionOption = function (a, b, c) {
    var d = mxUtils.bind(this, function () {
        this.editor.execute(c)
    });
    this.addOption(a, b, d)
};
mxDefaultToolbar.prototype.addOption = function (a, b, c) {
    return this.toolbar.addOption(a, b, c)
};
mxDefaultToolbar.prototype.addMode = function (a, b, c, d, e) {
    var f = mxUtils.bind(this, function () {
        this.editor.setMode(c);
        e != null && e(this.editor)
    });
    return this.toolbar.addSwitchMode(a, b, f, d)
};
mxDefaultToolbar.prototype.addPrototype = function (a, b, c, d, e, f) {
    var g = function () {
        return typeof c == "function" ? c() : c != null ? c.clone() : null
    }, h = mxUtils.bind(this, function (a, b) {
        typeof e == "function" ? e(this.editor, g(), a, b) : this.drop(g(), a, b);
        this.toolbar.resetMode();
        mxEvent.consume(a)
    }), a = this.toolbar.addMode(a, b, h, d, null, f);
    this.installDropHandler(a, function (a, b, c) {
        h(b, c)
    });
    return a
};
mxDefaultToolbar.prototype.drop = function (a, b, c) {
    var d = this.editor.graph, e = d.getModel();
    if (c == null || e.isEdge(c) || !this.connectOnDrop || !d.isCellConnectable(c)) {
        for (; c != null && !d.isValidDropTarget(c, [a], b);)c = e.getParent(c);
        this.insert(a, b, c)
    } else this.connect(a, b, c)
};
mxDefaultToolbar.prototype.insert = function (a, b, c) {
    var d = this.editor.graph;
    if (d.canImportCell(a)) {
        var e = mxEvent.getClientX(b), f = mxEvent.getClientY(b), e = mxUtils.convertPoint(d.container, e, f);
        return d.isSplitEnabled() && d.isSplitTarget(c, [a], b) ? d.splitEdge(c, [a], null, e.x, e.y) : this.editor.addVertex(c, a, e.x, e.y)
    }
    return null
};
mxDefaultToolbar.prototype.connect = function (a, b, c) {
    var b = this.editor.graph, d = b.getModel();
    if (c != null && b.isCellConnectable(a) && b.isEdgeValid(null, c, a)) {
        var e = null;
        d.beginUpdate();
        try {
            var f = d.getGeometry(c), g = d.getGeometry(a).clone();
            g.x = f.x + (f.width - g.width) / 2;
            g.y = f.y + (f.height - g.height) / 2;
            var h = this.spacing * b.gridSize, k = d.getDirectedEdgeCount(c, true) * 20;
            this.editor.horizontalFlow ? g.x = g.x + ((g.width + f.width) / 2 + h + k) : g.y = g.y + ((g.height + f.height) / 2 + h + k);
            a.setGeometry(g);
            var i = d.getParent(c);
            b.addCell(a,
                i);
            b.constrainChild(a);
            e = this.editor.createEdge(c, a);
            if (d.getGeometry(e) == null) {
                var l = new mxGeometry;
                l.relative = true;
                d.setGeometry(e, l)
            }
            b.addEdge(e, i, c, a)
        } finally {
            d.endUpdate()
        }
        b.setSelectionCells([a, e]);
        b.scrollCellToVisible(a)
    }
};
mxDefaultToolbar.prototype.installDropHandler = function (a, b) {
    var c = document.createElement("img");
    c.setAttribute("src", a.getAttribute("src"));
    var d = mxUtils.bind(this, function () {
        c.style.width = 2 * a.offsetWidth + "px";
        c.style.height = 2 * a.offsetHeight + "px";
        mxUtils.makeDraggable(a, this.editor.graph, b, c);
        mxEvent.removeListener(c, "load", d)
    });
    mxClient.IS_IE ? d() : mxEvent.addListener(c, "load", d)
};
mxDefaultToolbar.prototype.destroy = function () {
    if (this.resetHandler != null) {
        this.editor.graph.removeListener("dblclick", this.resetHandler);
        this.editor.removeListener("escape", this.resetHandler);
        this.resetHandler = null
    }
    if (this.toolbar != null) {
        this.toolbar.destroy();
        this.toolbar = null
    }
};
function mxEditor(a) {
    this.actions = [];
    this.addActions();
    if (document.body != null) {
        this.cycleAttributeValues = [];
        this.popupHandler = new mxDefaultPopupMenu;
        this.undoManager = new mxUndoManager;
        this.graph = this.createGraph();
        this.toolbar = this.createToolbar();
        this.keyHandler = new mxDefaultKeyHandler(this);
        this.configure(a);
        this.graph.swimlaneIndicatorColorAttribute = this.cycleAttributeName;
        !mxClient.IS_LOCAL && this.urlInit != null && this.createSession();
        if (this.onInit != null)this.onInit();
        mxClient.IS_IE && mxEvent.addListener(window,
            "unload", mxUtils.bind(this, function () {
                this.destroy()
            }))
    }
}
mxLoadResources && mxResources.add(mxClient.basePath + "/resources/editor");
mxEditor.prototype = new mxEventSource;
mxEditor.prototype.constructor = mxEditor;
mxEditor.prototype.askZoomResource = "none" != mxClient.language ? "askZoom" : "";
mxEditor.prototype.lastSavedResource = "none" != mxClient.language ? "lastSaved" : "";
mxEditor.prototype.currentFileResource = "none" != mxClient.language ? "currentFile" : "";
mxEditor.prototype.propertiesResource = "none" != mxClient.language ? "properties" : "";
mxEditor.prototype.tasksResource = "none" != mxClient.language ? "tasks" : "";
mxEditor.prototype.helpResource = "none" != mxClient.language ? "help" : "";
mxEditor.prototype.outlineResource = "none" != mxClient.language ? "outline" : "";
mxEditor.prototype.outline = null;
mxEditor.prototype.graph = null;
mxEditor.prototype.graphRenderHint = null;
mxEditor.prototype.toolbar = null;
mxEditor.prototype.status = null;
mxEditor.prototype.popupHandler = null;
mxEditor.prototype.undoManager = null;
mxEditor.prototype.keyHandler = null;
mxEditor.prototype.actions = null;
mxEditor.prototype.dblClickAction = "edit";
mxEditor.prototype.swimlaneRequired = !1;
mxEditor.prototype.disableContextMenu = !0;
mxEditor.prototype.insertFunction = null;
mxEditor.prototype.forcedInserting = !1;
mxEditor.prototype.templates = null;
mxEditor.prototype.defaultEdge = null;
mxEditor.prototype.defaultEdgeStyle = null;
mxEditor.prototype.defaultGroup = null;
mxEditor.prototype.groupBorderSize = null;
mxEditor.prototype.filename = null;
mxEditor.prototype.linefeed = "&#xa;";
mxEditor.prototype.postParameterName = "xml";
mxEditor.prototype.escapePostData = !0;
mxEditor.prototype.urlPost = null;
mxEditor.prototype.urlImage = null;
mxEditor.prototype.urlInit = null;
mxEditor.prototype.urlNotify = null;
mxEditor.prototype.urlPoll = null;
mxEditor.prototype.horizontalFlow = !1;
mxEditor.prototype.layoutDiagram = !1;
mxEditor.prototype.swimlaneSpacing = 0;
mxEditor.prototype.maintainSwimlanes = !1;
mxEditor.prototype.layoutSwimlanes = !1;
mxEditor.prototype.cycleAttributeValues = null;
mxEditor.prototype.cycleAttributeIndex = 0;
mxEditor.prototype.cycleAttributeName = "fillColor";
mxEditor.prototype.tasks = null;
mxEditor.prototype.tasksWindowImage = null;
mxEditor.prototype.tasksTop = 20;
mxEditor.prototype.help = null;
mxEditor.prototype.helpWindowImage = null;
mxEditor.prototype.urlHelp = null;
mxEditor.prototype.helpWidth = 300;
mxEditor.prototype.helpHeight = 260;
mxEditor.prototype.propertiesWidth = 240;
mxEditor.prototype.propertiesHeight = null;
mxEditor.prototype.movePropertiesDialog = !1;
mxEditor.prototype.validating = !1;
mxEditor.prototype.modified = !1;
mxEditor.prototype.isModified = function () {
    return this.modified
};
mxEditor.prototype.setModified = function (a) {
    this.modified = a
};
mxEditor.prototype.addActions = function () {
    this.addAction("save", function (a) {
        a.save()
    });
    this.addAction("print", function (a) {
        (new mxPrintPreview(a.graph, 1)).open()
    });
    this.addAction("show", function (a) {
        mxUtils.show(a.graph, null, 10, 10)
    });
    this.addAction("exportImage", function (a) {
        var b = a.getUrlImage();
        if (b == null || mxClient.IS_LOCAL)a.execute("show"); else {
            var c = mxUtils.getViewXml(a.graph, 1), c = mxUtils.getXml(c, "\n");
            mxUtils.submit(b, a.postParameterName + "=" + encodeURIComponent(c), document, "_blank")
        }
    });
    this.addAction("layout",
        function (a) {
            a.graph.refresh()
        });
    this.addAction("cut", function (a) {
        a.graph.isEnabled() && mxClipboard.cut(a.graph)
    });
    this.addAction("copy", function (a) {
        a.graph.isEnabled() && mxClipboard.copy(a.graph)
    });
    this.addAction("paste", function (a) {
        a.graph.isEnabled() && mxClipboard.paste(a.graph)
    });
    this.addAction("delete", function (a) {
        a.graph.isEnabled() && a.graph.removeCells()
    });
    this.addAction("group", function (a) {
        a.graph.isEnabled() && a.graph.setSelectionCell(a.groupCells())
    });
    this.addAction("ungroup", function (a) {
        a.graph.isEnabled() &&
        a.graph.setSelectionCells(a.graph.ungroupCells())
    });
    this.addAction("removeFromParent", function (a) {
        a.graph.isEnabled() && a.graph.removeCellsFromParent()
    });
    this.addAction("undo", function (a) {
        a.graph.isEnabled() && a.undo()
    });
    this.addAction("redo", function (a) {
        a.graph.isEnabled() && a.redo()
    });
    this.addAction("zoomIn", function (a) {
        a.graph.zoomIn()
    });
    this.addAction("zoomOut", function (a) {
        a.graph.zoomOut()
    });
    this.addAction("actualSize", function (a) {
        a.graph.zoomActual()
    });
    this.addAction("fit", function (a) {
        a.graph.fit()
    });
    this.addAction("showProperties", function (a, b) {
        a.showProperties(b)
    });
    this.addAction("selectAll", function (a) {
        a.graph.isEnabled() && a.graph.selectAll()
    });
    this.addAction("selectNone", function (a) {
        a.graph.isEnabled() && a.graph.clearSelection()
    });
    this.addAction("selectVertices", function (a) {
        a.graph.isEnabled() && a.graph.selectVertices()
    });
    this.addAction("selectEdges", function (a) {
        a.graph.isEnabled() && a.graph.selectEdges()
    });
    this.addAction("edit", function (a, b) {
        a.graph.isEnabled() && a.graph.isCellEditable(b) && a.graph.startEditingAtCell(b)
    });
    this.addAction("toBack", function (a) {
        a.graph.isEnabled() && a.graph.orderCells(true)
    });
    this.addAction("toFront", function (a) {
        a.graph.isEnabled() && a.graph.orderCells(false)
    });
    this.addAction("enterGroup", function (a, b) {
        a.graph.enterGroup(b)
    });
    this.addAction("exitGroup", function (a) {
        a.graph.exitGroup()
    });
    this.addAction("home", function (a) {
        a.graph.home()
    });
    this.addAction("selectPrevious", function (a) {
        a.graph.isEnabled() && a.graph.selectPreviousCell()
    });
    this.addAction("selectNext", function (a) {
        a.graph.isEnabled() &&
        a.graph.selectNextCell()
    });
    this.addAction("selectParent", function (a) {
        a.graph.isEnabled() && a.graph.selectParentCell()
    });
    this.addAction("selectChild", function (a) {
        a.graph.isEnabled() && a.graph.selectChildCell()
    });
    this.addAction("collapse", function (a) {
        a.graph.isEnabled() && a.graph.foldCells(true)
    });
    this.addAction("collapseAll", function (a) {
        if (a.graph.isEnabled()) {
            var b = a.graph.getChildVertices();
            a.graph.foldCells(true, false, b)
        }
    });
    this.addAction("expand", function (a) {
        a.graph.isEnabled() && a.graph.foldCells(false)
    });
    this.addAction("expandAll", function (a) {
        if (a.graph.isEnabled()) {
            var b = a.graph.getChildVertices();
            a.graph.foldCells(false, false, b)
        }
    });
    this.addAction("bold", function (a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE, mxConstants.FONT_BOLD)
    });
    this.addAction("italic", function (a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE, mxConstants.FONT_ITALIC)
    });
    this.addAction("underline", function (a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE,
            mxConstants.FONT_UNDERLINE)
    });
    this.addAction("shadow", function (a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE, mxConstants.FONT_SHADOW)
    });
    this.addAction("alignCellsLeft", function (a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_LEFT)
    });
    this.addAction("alignCellsCenter", function (a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_CENTER)
    });
    this.addAction("alignCellsRight", function (a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_RIGHT)
    });
    this.addAction("alignCellsTop", function (a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_TOP)
    });
    this.addAction("alignCellsMiddle", function (a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_MIDDLE)
    });
    this.addAction("alignCellsBottom", function (a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_BOTTOM)
    });
    this.addAction("alignFontLeft", function (a) {
        a.graph.setCellStyles(mxConstants.STYLE_ALIGN, mxConstants.ALIGN_LEFT)
    });
    this.addAction("alignFontCenter", function (a) {
        a.graph.isEnabled() &&
        a.graph.setCellStyles(mxConstants.STYLE_ALIGN, mxConstants.ALIGN_CENTER)
    });
    this.addAction("alignFontRight", function (a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_ALIGN, mxConstants.ALIGN_RIGHT)
    });
    this.addAction("alignFontTop", function (a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_TOP)
    });
    this.addAction("alignFontMiddle", function (a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE)
    });
    this.addAction("alignFontBottom", function (a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_BOTTOM)
    });
    this.addAction("zoom", function (a) {
        var b = a.graph.getView().scale * 100, b = parseFloat(mxUtils.prompt(mxResources.get(a.askZoomResource) || a.askZoomResource, b)) / 100;
        isNaN(b) || a.graph.getView().setScale(b)
    });
    this.addAction("toggleTasks", function (a) {
        a.tasks != null ? a.tasks.setVisible(!a.tasks.isVisible()) : a.showTasks()
    });
    this.addAction("toggleHelp", function (a) {
        a.help !=
            null ? a.help.setVisible(!a.help.isVisible()) : a.showHelp()
    });
    this.addAction("toggleOutline", function (a) {
        a.outline == null ? a.showOutline() : a.outline.setVisible(!a.outline.isVisible())
    });
    this.addAction("toggleConsole", function () {
        mxLog.setVisible(!mxLog.isVisible())
    })
};
mxEditor.prototype.createSession = function () {
    this.connect(this.urlInit, this.urlPoll, this.urlNotify, mxUtils.bind(this, function (a) {
        this.fireEvent(new mxEventObject(mxEvent.SESSION, "session", a))
    }))
};
mxEditor.prototype.configure = function (a) {
    if (a != null) {
        (new mxCodec(a.ownerDocument)).decode(a, this);
        this.resetHistory()
    }
};
mxEditor.prototype.resetFirstTime = function () {
    document.cookie = "mxgraph=seen; expires=Fri, 27 Jul 2001 02:47:11 UTC; path=/"
};
mxEditor.prototype.resetHistory = function () {
    this.lastSnapshot = (new Date).getTime();
    this.undoManager.clear();
    this.ignoredChanges = 0;
    this.setModified(false)
};
mxEditor.prototype.addAction = function (a, b) {
    this.actions[a] = b
};
mxEditor.prototype.execute = function (a, b, c) {
    var d = this.actions[a];
    if (d != null)try {
        var e = arguments;
        e[0] = this;
        d.apply(this, e)
    } catch (f) {
        mxUtils.error("Cannot execute " + a + ": " + f.message, 280, true);
        throw f;
    } else mxUtils.error("Cannot find action " + a, 280, true)
};
mxEditor.prototype.addTemplate = function (a, b) {
    this.templates[a] = b
};
mxEditor.prototype.getTemplate = function (a) {
    return this.templates[a]
};
mxEditor.prototype.createGraph = function () {
    var a = new mxGraph(null, null, this.graphRenderHint);
    a.setTooltips(true);
    a.setPanning(true);
    this.installDblClickHandler(a);
    this.installUndoHandler(a);
    this.installDrillHandler(a);
    this.installChangeHandler(a);
    this.installInsertHandler(a);
    a.panningHandler.factoryMethod = mxUtils.bind(this, function (a, c, d) {
        return this.createPopupMenu(a, c, d)
    });
    a.connectionHandler.factoryMethod = mxUtils.bind(this, function (a, c) {
        return this.createEdge(a, c)
    });
    this.createSwimlaneManager(a);
    this.createLayoutManager(a);
    return a
};
mxEditor.prototype.createSwimlaneManager = function (a) {
    a = new mxSwimlaneManager(a, false);
    a.isHorizontal = mxUtils.bind(this, function () {
        return this.horizontalFlow
    });
    a.isEnabled = mxUtils.bind(this, function () {
        return this.maintainSwimlanes
    });
    return a
};
mxEditor.prototype.createLayoutManager = function (a) {
    var b = new mxLayoutManager(a), c = this;
    b.getLayout = function (b) {
        var e = null, f = c.graph.getModel();
        if (f.getParent(b) != null)if (c.layoutSwimlanes && a.isSwimlane(b)) {
            if (c.swimlaneLayout == null)c.swimlaneLayout = c.createSwimlaneLayout();
            e = c.swimlaneLayout
        } else if (c.layoutDiagram && (a.isValidRoot(b) || f.getParent(f.getParent(b)) == null)) {
            if (c.diagramLayout == null)c.diagramLayout = c.createDiagramLayout();
            e = c.diagramLayout
        }
        return e
    };
    return b
};
mxEditor.prototype.setGraphContainer = function (a) {
    if (this.graph.container == null) {
        this.graph.init(a);
        this.rubberband = new mxRubberband(this.graph);
        this.disableContextMenu && mxEvent.disableContextMenu(a);
        mxClient.IS_IE && new mxDivResizer(a)
    }
};
mxEditor.prototype.installDblClickHandler = function (a) {
    a.addListener(mxEvent.DOUBLE_CLICK, mxUtils.bind(this, function (b, c) {
        var d = c.getProperty("cell");
        if (d != null && a.isEnabled() && this.dblClickAction != null) {
            this.execute(this.dblClickAction, d);
            c.consume()
        }
    }))
};
mxEditor.prototype.installUndoHandler = function (a) {
    var b = mxUtils.bind(this, function (a, b) {
        this.undoManager.undoableEditHappened(b.getProperty("edit"))
    });
    a.getModel().addListener(mxEvent.UNDO, b);
    a.getView().addListener(mxEvent.UNDO, b);
    b = function (b, d) {
        var e = d.getProperty("edit").changes;
        a.setSelectionCells(a.getSelectionCellsForChanges(e))
    };
    this.undoManager.addListener(mxEvent.UNDO, b);
    this.undoManager.addListener(mxEvent.REDO, b)
};
mxEditor.prototype.installDrillHandler = function (a) {
    var b = mxUtils.bind(this, function () {
        this.fireEvent(new mxEventObject(mxEvent.ROOT))
    });
    a.getView().addListener(mxEvent.DOWN, b);
    a.getView().addListener(mxEvent.UP, b)
};
mxEditor.prototype.installChangeHandler = function (a) {
    var b = mxUtils.bind(this, function (b, d) {
        this.setModified(true);
        this.validating == true && a.validateGraph();
        for (var e = d.getProperty("edit").changes, f = 0; f < e.length; f++) {
            var g = e[f];
            if (g instanceof mxRootChange || g instanceof mxValueChange && g.cell == this.graph.model.root || g instanceof mxCellAttributeChange && g.cell == this.graph.model.root) {
                this.fireEvent(new mxEventObject(mxEvent.ROOT));
                break
            }
        }
    });
    a.getModel().addListener(mxEvent.CHANGE, b)
};
mxEditor.prototype.installInsertHandler = function (a) {
    var b = this;
    a.addMouseListener({mouseDown:function (a, d) {
        if (b.insertFunction != null && !d.isPopupTrigger() && (b.forcedInserting || d.getState() == null)) {
            b.graph.clearSelection();
            b.insertFunction(d.getEvent(), d.getCell());
            this.isActive = true;
            d.consume()
        }
    }, mouseMove:function (a, b) {
        this.isActive && b.consume()
    }, mouseUp:function (a, b) {
        if (this.isActive) {
            this.isActive = false;
            b.consume()
        }
    }})
};
mxEditor.prototype.createDiagramLayout = function () {
    var a = this.graph.gridSize, b = new mxStackLayout(this.graph, !this.horizontalFlow, this.swimlaneSpacing, 2 * a, 2 * a);
    b.isVertexIgnored = function (a) {
        return!b.graph.isSwimlane(a)
    };
    return b
};
mxEditor.prototype.createSwimlaneLayout = function () {
    return new mxCompactTreeLayout(this.graph, this.horizontalFlow)
};
mxEditor.prototype.createToolbar = function () {
    return new mxDefaultToolbar(null, this)
};
mxEditor.prototype.setToolbarContainer = function (a) {
    this.toolbar.init(a);
    mxClient.IS_IE && new mxDivResizer(a)
};
mxEditor.prototype.setStatusContainer = function (a) {
    if (this.status == null) {
        this.status = a;
        this.addListener(mxEvent.SAVE, mxUtils.bind(this, function () {
            var a = (new Date).toLocaleString();
            this.setStatus((mxResources.get(this.lastSavedResource) || this.lastSavedResource) + ": " + a)
        }));
        this.addListener(mxEvent.OPEN, mxUtils.bind(this, function () {
            this.setStatus((mxResources.get(this.currentFileResource) || this.currentFileResource) + ": " + this.filename)
        }));
        mxClient.IS_IE && new mxDivResizer(a)
    }
};
mxEditor.prototype.setStatus = function (a) {
    if (this.status != null && a != null)this.status.innerHTML = a
};
mxEditor.prototype.setTitleContainer = function (a) {
    this.addListener(mxEvent.ROOT, mxUtils.bind(this, function () {
        a.innerHTML = this.getTitle()
    }));
    mxClient.IS_IE && new mxDivResizer(a)
};
mxEditor.prototype.treeLayout = function (a, b) {
    a != null && (new mxCompactTreeLayout(this.graph, b)).execute(a)
};
mxEditor.prototype.getTitle = function () {
    for (var a = "", b = this.graph, c = b.getCurrentRoot(); c != null && b.getModel().getParent(b.getModel().getParent(c)) != null;) {
        b.isValidRoot(c) && (a = " > " + b.convertValueToString(c) + a);
        c = b.getModel().getParent(c)
    }
    return this.getRootTitle() + a
};
mxEditor.prototype.getRootTitle = function () {
    return this.graph.convertValueToString(this.graph.getModel().getRoot())
};
mxEditor.prototype.undo = function () {
    this.undoManager.undo()
};
mxEditor.prototype.redo = function () {
    this.undoManager.redo()
};
mxEditor.prototype.groupCells = function () {
    var a = this.groupBorderSize != null ? this.groupBorderSize : this.graph.gridSize;
    return this.graph.groupCells(this.createGroup(), a)
};
mxEditor.prototype.createGroup = function () {
    return this.graph.getModel().cloneCell(this.defaultGroup)
};
mxEditor.prototype.open = function (a) {
    if (a != null) {
        this.readGraphModel(mxUtils.load(a).getXml().documentElement);
        this.filename = a;
        this.fireEvent(new mxEventObject(mxEvent.OPEN, "filename", a))
    }
};
mxEditor.prototype.readGraphModel = function (a) {
    (new mxCodec(a.ownerDocument)).decode(a, this.graph.getModel());
    this.resetHistory()
};
mxEditor.prototype.save = function (a, b) {
    a = a || this.getUrlPost();
    if (a != null && a.length > 0) {
        var c = this.writeGraphModel(b);
        this.postDiagram(a, c);
        this.setModified(false)
    }
    this.fireEvent(new mxEventObject(mxEvent.SAVE, "url", a))
};
mxEditor.prototype.postDiagram = function (a, b) {
    this.escapePostData && (b = encodeURIComponent(b));
    mxUtils.post(a, this.postParameterName + "=" + b, mxUtils.bind(this, function (c) {
        this.fireEvent(new mxEventObject(mxEvent.POST, "request", c, "url", a, "data", b))
    }))
};
mxEditor.prototype.writeGraphModel = function (a) {
    var a = a != null ? a : this.linefeed, b = (new mxCodec).encode(this.graph.getModel());
    return mxUtils.getXml(b, a)
};
mxEditor.prototype.getUrlPost = function () {
    return this.urlPost
};
mxEditor.prototype.getUrlImage = function () {
    return this.urlImage
};
mxEditor.prototype.connect = function (a, b, c, d) {
    var e = null;
    if (!mxClient.IS_LOCAL) {
        e = new mxSession(this.graph.getModel(), a, b, c);
        e.addListener(mxEvent.RECEIVE, mxUtils.bind(this, function (a, b) {
            b.getProperty("node").getAttribute("namespace") != null && this.resetHistory()
        }));
        e.addListener(mxEvent.DISCONNECT, d);
        e.addListener(mxEvent.CONNECT, d);
        e.addListener(mxEvent.NOTIFY, d);
        e.addListener(mxEvent.GET, d);
        e.start()
    }
    return e
};
mxEditor.prototype.swapStyles = function (a, b) {
    var c = this.graph.getStylesheet().styles[b];
    this.graph.getView().getStylesheet().putCellStyle(b, this.graph.getStylesheet().styles[a]);
    this.graph.getStylesheet().putCellStyle(a, c);
    this.graph.refresh()
};
mxEditor.prototype.showProperties = function (a) {
    a = a || this.graph.getSelectionCell();
    if (a == null) {
        a = this.graph.getCurrentRoot();
        a == null && (a = this.graph.getModel().getRoot())
    }
    if (a != null) {
        this.graph.stopEditing(true);
        var b = mxUtils.getOffset(this.graph.container), c = b.x + 10, b = b.y;
        if (this.properties != null && !this.movePropertiesDialog) {
            c = this.properties.getX();
            b = this.properties.getY()
        } else {
            var d = this.graph.getCellBounds(a);
            if (d != null) {
                c = c + (d.x + Math.min(200, d.width));
                b = b + d.y
            }
        }
        this.hideProperties();
        a = this.createProperties(a);
        if (a != null) {
            this.properties = new mxWindow(mxResources.get(this.propertiesResource) || this.propertiesResource, a, c, b, this.propertiesWidth, this.propertiesHeight, false);
            this.properties.setVisible(true)
        }
    }
};
mxEditor.prototype.isPropertiesVisible = function () {
    return this.properties != null
};
mxEditor.prototype.createProperties = function (a) {
    var b = this.graph.getModel(), c = b.getValue(a);
    if (mxUtils.isNode(c)) {
        var d = new mxForm("properties");
        d.addText("ID", a.getId()).setAttribute("readonly", "true");
        var e = null, f = null, g = null, h = null, k = null;
        if (b.isVertex(a)) {
            e = b.getGeometry(a);
            if (e != null) {
                f = d.addText("top", e.y);
                g = d.addText("left", e.x);
                h = d.addText("width", e.width);
                k = d.addText("height", e.height)
            }
        }
        for (var i = b.getStyle(a), l = d.addText("Style", i || ""), m = c.attributes, n = [], c = 0; c < m.length; c++)n[c] = d.addTextarea(m[c].nodeName,
            m[c].nodeValue, m[c].nodeName == "label" ? 4 : 2);
        c = mxUtils.bind(this, function () {
            this.hideProperties();
            b.beginUpdate();
            try {
                if (e != null) {
                    e = e.clone();
                    e.x = parseFloat(g.value);
                    e.y = parseFloat(f.value);
                    e.width = parseFloat(h.value);
                    e.height = parseFloat(k.value);
                    b.setGeometry(a, e)
                }
                l.value.length > 0 ? b.setStyle(a, l.value) : b.setStyle(a, null);
                for (var c = 0; c < m.length; c++) {
                    var d = new mxCellAttributeChange(a, m[c].nodeName, n[c].value);
                    b.execute(d)
                }
                this.graph.isAutoSizeCell(a) && this.graph.updateCellSize(a)
            } finally {
                b.endUpdate()
            }
        });
        i = mxUtils.bind(this, function () {
            this.hideProperties()
        });
        d.addButtons(c, i);
        return d.table
    }
    return null
};
mxEditor.prototype.hideProperties = function () {
    if (this.properties != null) {
        this.properties.destroy();
        this.properties = null
    }
};
mxEditor.prototype.showTasks = function () {
    if (this.tasks == null) {
        var a = document.createElement("div");
        a.style.padding = "4px";
        a.style.paddingLeft = "20px";
        var b = document.body.clientWidth, b = new mxWindow(mxResources.get(this.tasksResource) || this.tasksResource, a, b - 220, this.tasksTop, 200);
        b.setClosable(true);
        b.destroyOnClose = false;
        var c = mxUtils.bind(this, function () {
            mxEvent.release(a);
            a.innerHTML = "";
            this.createTasks(a)
        });
        this.graph.getModel().addListener(mxEvent.CHANGE, c);
        this.graph.getSelectionModel().addListener(mxEvent.CHANGE,
            c);
        this.graph.addListener(mxEvent.ROOT, c);
        this.tasksWindowImage != null && b.setImage(this.tasksWindowImage);
        this.tasks = b;
        this.createTasks(a)
    }
    this.tasks.setVisible(true)
};
mxEditor.prototype.refreshTasks = function (a) {
    if (this.tasks != null) {
        a = this.tasks.content;
        mxEvent.release(a);
        a.innerHTML = "";
        this.createTasks(a)
    }
};
mxEditor.prototype.createTasks = function () {
};
mxEditor.prototype.showHelp = function () {
    if (this.help == null) {
        var a = document.createElement("iframe");
        a.setAttribute("src", mxResources.get("urlHelp") || this.urlHelp);
        a.setAttribute("height", "100%");
        a.setAttribute("width", "100%");
        a.setAttribute("frameBorder", "0");
        a.style.backgroundColor = "white";
        var b = document.body.clientWidth, c = document.body.clientHeight || document.documentElement.clientHeight, d = new mxWindow(mxResources.get(this.helpResource) || this.helpResource, a, (b - this.helpWidth) / 2, (c - this.helpHeight) /
            3, this.helpWidth, this.helpHeight);
        d.setMaximizable(true);
        d.setClosable(true);
        d.destroyOnClose = false;
        d.setResizable(true);
        this.helpWindowImage != null && d.setImage(this.helpWindowImage);
        if (mxClient.IS_NS) {
            b = function () {
                a.setAttribute("height", d.div.offsetHeight - 26 + "px")
            };
            d.addListener(mxEvent.RESIZE_END, b);
            d.addListener(mxEvent.MAXIMIZE, b);
            d.addListener(mxEvent.NORMALIZE, b);
            d.addListener(mxEvent.SHOW, b)
        }
        this.help = d
    }
    this.help.setVisible(true)
};
mxEditor.prototype.showOutline = function () {
    if (this.outline == null) {
        var a = document.createElement("div");
        a.style.overflow = "hidden";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.background = "white";
        a.style.cursor = "move";
        var b = new mxWindow(mxResources.get(this.outlineResource) || this.outlineResource, a, 600, 480, 200, 200, false), c = new mxOutline(this.graph, a);
        b.setClosable(true);
        b.setResizable(true);
        b.destroyOnClose = false;
        b.addListener(mxEvent.RESIZE_END, function () {
            c.update()
        });
        this.outline = b;
        this.outline.outline =
            c
    }
    this.outline.setVisible(true);
    this.outline.outline.update(true)
};
mxEditor.prototype.setMode = function (a) {
    if (a == "select") {
        this.graph.panningHandler.useLeftButtonForPanning = false;
        this.graph.setConnectable(false)
    } else if (a == "connect") {
        this.graph.panningHandler.useLeftButtonForPanning = false;
        this.graph.setConnectable(true)
    } else if (a == "pan") {
        this.graph.panningHandler.useLeftButtonForPanning = true;
        this.graph.setConnectable(false)
    }
};
mxEditor.prototype.createPopupMenu = function (a, b, c) {
    this.popupHandler.createMenu(this, a, b, c)
};
mxEditor.prototype.createEdge = function () {
    var a = null;
    if (this.defaultEdge != null)a = this.graph.getModel().cloneCell(this.defaultEdge); else {
        a = new mxCell("");
        a.setEdge(true);
        var b = new mxGeometry;
        b.relative = true;
        a.setGeometry(b)
    }
    b = this.getEdgeStyle();
    b != null && a.setStyle(b);
    return a
};
mxEditor.prototype.getEdgeStyle = function () {
    return this.defaultEdgeStyle
};
mxEditor.prototype.consumeCycleAttribute = function (a) {
    return this.cycleAttributeValues != null && this.cycleAttributeValues.length > 0 && this.graph.isSwimlane(a) ? this.cycleAttributeValues[this.cycleAttributeIndex++ % this.cycleAttributeValues.length] : null
};
mxEditor.prototype.cycleAttribute = function (a) {
    if (this.cycleAttributeName != null) {
        var b = this.consumeCycleAttribute(a);
        b != null && a.setStyle(a.getStyle() + ";" + this.cycleAttributeName + "=" + b)
    }
};
mxEditor.prototype.addVertex = function (a, b, c, d) {
    for (var e = this.graph.getModel(); a != null && !this.graph.isValidDropTarget(a);)a = e.getParent(a);
    var a = a != null ? a : this.graph.getSwimlaneAt(c, d), f = this.graph.getView().scale, g = e.getGeometry(b), h = e.getGeometry(a);
    if (this.graph.isSwimlane(b) && !this.graph.swimlaneNesting)a = null; else {
        if (a == null && this.swimlaneRequired)return null;
        if (a != null && h != null) {
            var k = this.graph.getView().getState(a);
            if (k != null) {
                c = c - k.origin.x * f;
                d = d - k.origin.y * f;
                if (this.graph.isConstrainedMoving) {
                    var h =
                        g.width, i = g.height, l = k.x + k.width;
                    c + h > l && (c = c - (c + h - l));
                    l = k.y + k.height;
                    d + i > l && (d = d - (d + i - l))
                }
            } else if (h != null) {
                c = c - h.x * f;
                d = d - h.y * f
            }
        }
    }
    g = g.clone();
    g.x = this.graph.snap(c / f - this.graph.getView().translate.x - this.graph.gridSize / 2);
    g.y = this.graph.snap(d / f - this.graph.getView().translate.y - this.graph.gridSize / 2);
    b.setGeometry(g);
    a == null && (a = this.graph.getDefaultParent());
    this.cycleAttribute(b);
    this.fireEvent(new mxEventObject(mxEvent.BEFORE_ADD_VERTEX, "vertex", b, "parent", a));
    e.beginUpdate();
    try {
        b = this.graph.addCell(b,
            a);
        if (b != null) {
            this.graph.constrainChild(b);
            this.fireEvent(new mxEventObject(mxEvent.ADD_VERTEX, "vertex", b))
        }
    } finally {
        e.endUpdate()
    }
    if (b != null) {
        this.graph.setSelectionCell(b);
        this.graph.scrollCellToVisible(b);
        this.fireEvent(new mxEventObject(mxEvent.AFTER_ADD_VERTEX, "vertex", b))
    }
    return b
};
mxEditor.prototype.destroy = function () {
    if (!this.destroyed) {
        this.destroyed = true;
        this.tasks != null && this.tasks.destroy();
        this.outline != null && this.outline.destroy();
        this.properties != null && this.properties.destroy();
        this.keyHandler != null && this.keyHandler.destroy();
        this.rubberband != null && this.rubberband.destroy();
        this.toolbar != null && this.toolbar.destroy();
        this.graph != null && this.graph.destroy();
        this.templates = this.status = null
    }
};
var mxCodecRegistry = {codecs:[], aliases:[], register:function (a) {
    if (a != null) {
        var b = a.getName();
        mxCodecRegistry.codecs[b] = a;
        var c = mxUtils.getFunctionName(a.template.constructor);
        c != b && mxCodecRegistry.addAlias(c, b)
    }
    return a
}, addAlias:function (a, b) {
    mxCodecRegistry.aliases[a] = b
}, getCodec:function (a) {
    var b = null;
    if (a != null) {
        var b = mxUtils.getFunctionName(a), c = mxCodecRegistry.aliases[b];
        c != null && (b = c);
        b = mxCodecRegistry.codecs[b];
        if (b == null)try {
            b = new mxObjectCodec(new a);
            mxCodecRegistry.register(b)
        } catch (d) {
        }
    }
    return b
}};
function mxCodec(a) {
    this.document = a || mxUtils.createXmlDocument();
    this.objects = []
}
mxCodec.prototype.document = null;
mxCodec.prototype.objects = null;
mxCodec.prototype.encodeDefaults = !1;
mxCodec.prototype.putObject = function (a, b) {
    return this.objects[a] = b
};
mxCodec.prototype.getObject = function (a) {
    var b = null;
    if (a != null) {
        b = this.objects[a];
        if (b == null) {
            b = this.lookup(a);
            if (b == null) {
                a = this.getElementById(a);
                a != null && (b = this.decode(a))
            }
        }
    }
    return b
};
mxCodec.prototype.lookup = function () {
    return null
};
mxCodec.prototype.getElementById = function (a, b) {
    return mxUtils.findNodeByAttribute(this.document.documentElement, b != null ? b : "id", a)
};
mxCodec.prototype.getId = function (a) {
    var b = null;
    if (a != null) {
        b = this.reference(a);
        if (b == null && a instanceof mxCell) {
            b = a.getId();
            if (b == null) {
                b = mxCellPath.create(a);
                b.length == 0 && (b = "root")
            }
        }
    }
    return b
};
mxCodec.prototype.reference = function () {
    return null
};
mxCodec.prototype.encode = function (a) {
    var b = null;
    if (a != null && a.constructor != null) {
        var c = mxCodecRegistry.getCodec(a.constructor);
        c != null ? b = c.encode(this, a) : mxUtils.isNode(a) ? b = mxClient.IS_IE ? a.cloneNode(true) : this.document.importNode(a, true) : mxLog.warn("mxCodec.encode: No codec for " + mxUtils.getFunctionName(a.constructor))
    }
    return b
};
mxCodec.prototype.decode = function (a, b) {
    var c = null;
    if (a != null && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        var d = null;
        try {
            d = eval(a.nodeName)
        } catch (e) {
        }
        try {
            var f = mxCodecRegistry.getCodec(d);
            if (f != null)c = f.decode(this, a, b); else {
                c = a.cloneNode(true);
                c.removeAttribute("as")
            }
        } catch (g) {
            mxLog.debug("Cannot decode " + a.nodeName + ": " + g.message)
        }
    }
    return c
};
mxCodec.prototype.encodeCell = function (a, b, c) {
    b.appendChild(this.encode(a));
    if (c == null || c)for (var c = a.getChildCount(), d = 0; d < c; d++)this.encodeCell(a.getChildAt(d), b)
};
mxCodec.prototype.isCellCodec = function (a) {
    return a != null && typeof a.isCellCodec == "function" ? a.isCellCodec() : false
};
mxCodec.prototype.decodeCell = function (a, b) {
    var b = b != null ? b : true, c = null;
    if (a != null && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        c = mxCodecRegistry.getCodec(a.nodeName);
        if (!this.isCellCodec(c))for (var d = a.firstChild; d != null && !this.isCellCodec(c);) {
            c = mxCodecRegistry.getCodec(d.nodeName);
            d = d.nextSibling
        }
        this.isCellCodec(c) || (c = mxCodecRegistry.getCodec(mxCell));
        c = c.decode(this, a);
        b && this.insertIntoGraph(c)
    }
    return c
};
mxCodec.prototype.insertIntoGraph = function (a) {
    var b = a.parent, c = a.getTerminal(true), d = a.getTerminal(false);
    a.setTerminal(null, false);
    a.setTerminal(null, true);
    a.parent = null;
    b != null && b.insert(a);
    c != null && c.insertEdge(a, true);
    d != null && d.insertEdge(a, false)
};
mxCodec.prototype.setAttribute = function (a, b, c) {
    b != null && c != null && a.setAttribute(b, c)
};
function mxObjectCodec(a, b, c, d) {
    this.template = a;
    this.exclude = b != null ? b : [];
    this.idrefs = c != null ? c : [];
    this.mapping = d != null ? d : [];
    this.reverse = {};
    for (var e in this.mapping)this.reverse[this.mapping[e]] = e
}
mxObjectCodec.prototype.template = null;
mxObjectCodec.prototype.exclude = null;
mxObjectCodec.prototype.idrefs = null;
mxObjectCodec.prototype.mapping = null;
mxObjectCodec.prototype.reverse = null;
mxObjectCodec.prototype.getName = function () {
    return mxUtils.getFunctionName(this.template.constructor)
};
mxObjectCodec.prototype.cloneTemplate = function () {
    return new this.template.constructor
};
mxObjectCodec.prototype.getFieldName = function (a) {
    if (a != null) {
        var b = this.reverse[a];
        b != null && (a = b)
    }
    return a
};
mxObjectCodec.prototype.getAttributeName = function (a) {
    if (a != null) {
        var b = this.mapping[a];
        b != null && (a = b)
    }
    return a
};
mxObjectCodec.prototype.isExcluded = function (a, b) {
    return b == mxObjectIdentity.FIELD_NAME || mxUtils.indexOf(this.exclude, b) >= 0
};
mxObjectCodec.prototype.isReference = function (a, b) {
    return mxUtils.indexOf(this.idrefs, b) >= 0
};
mxObjectCodec.prototype.encode = function (a, b) {
    var c = a.document.createElement(this.getName()), b = this.beforeEncode(a, b, c);
    this.encodeObject(a, b, c);
    return this.afterEncode(a, b, c)
};
mxObjectCodec.prototype.encodeObject = function (a, b, c) {
    a.setAttribute(c, "id", a.getId(b));
    for (var d in b) {
        var e = d, f = b[e];
        if (f != null && !this.isExcluded(b, e, f, true)) {
            mxUtils.isNumeric(e) && (e = null);
            this.encodeValue(a, b, e, f, c)
        }
    }
};
mxObjectCodec.prototype.encodeValue = function (a, b, c, d, e) {
    if (d != null) {
        if (this.isReference(b, c, d, true)) {
            var f = a.getId(d);
            if (f == null) {
                mxLog.warn("mxObjectCodec.encode: No ID for " + this.getName() + "." + c + "=" + d);
                return
            }
            d = f
        }
        f = this.template[c];
        if (c == null || a.encodeDefaults || f != d) {
            c = this.getAttributeName(c);
            this.writeAttribute(a, b, c, d, e)
        }
    }
};
mxObjectCodec.prototype.writeAttribute = function (a, b, c, d, e) {
    typeof d != "object" ? this.writePrimitiveAttribute(a, b, c, d, e) : this.writeComplexAttribute(a, b, c, d, e)
};
mxObjectCodec.prototype.writePrimitiveAttribute = function (a, b, c, d, e) {
    d = this.convertValueToXml(d);
    if (c == null) {
        b = a.document.createElement("add");
        typeof d == "function" ? b.appendChild(a.document.createTextNode(d)) : a.setAttribute(b, "value", d);
        e.appendChild(b)
    } else typeof d != "function" && a.setAttribute(e, c, d)
};
mxObjectCodec.prototype.writeComplexAttribute = function (a, b, c, d, e) {
    a = a.encode(d);
    if (a != null) {
        c != null && a.setAttribute("as", c);
        e.appendChild(a)
    } else mxLog.warn("mxObjectCodec.encode: No node for " + this.getName() + "." + c + ": " + d)
};
mxObjectCodec.prototype.convertValueToXml = function (a) {
    if (typeof a.length == "undefined" && (a == true || a == false))a = a == true ? "1" : "0";
    return a
};
mxObjectCodec.prototype.convertValueFromXml = function (a) {
    mxUtils.isNumeric(a) && (a = parseFloat(a));
    return a
};
mxObjectCodec.prototype.beforeEncode = function (a, b) {
    return b
};
mxObjectCodec.prototype.afterEncode = function (a, b, c) {
    return c
};
mxObjectCodec.prototype.decode = function (a, b, c) {
    var d = b.getAttribute("id"), e = a.objects[d];
    if (e == null) {
        e = c || this.cloneTemplate();
        d != null && a.putObject(d, e)
    }
    b = this.beforeDecode(a, b, e);
    this.decodeNode(a, b, e);
    return this.afterDecode(a, b, e)
};
mxObjectCodec.prototype.decodeNode = function (a, b, c) {
    if (b != null) {
        this.decodeAttributes(a, b, c);
        this.decodeChildren(a, b, c)
    }
};
mxObjectCodec.prototype.decodeAttributes = function (a, b, c) {
    b = b.attributes;
    if (b != null)for (var d = 0; d < b.length; d++)this.decodeAttribute(a, b[d], c)
};
mxObjectCodec.prototype.decodeAttribute = function (a, b, c) {
    var d = b.nodeName;
    if (d != "as" && d != "id") {
        var b = this.convertValueFromXml(b.nodeValue), e = this.getFieldName(d);
        if (this.isReference(c, e, b, false)) {
            a = a.getObject(b);
            if (a == null) {
                mxLog.warn("mxObjectCodec.decode: No object for " + this.getName() + "." + d + "=" + b);
                return
            }
            b = a
        }
        this.isExcluded(c, d, b, false) || (c[d] = b)
    }
};
mxObjectCodec.prototype.decodeChildren = function (a, b, c) {
    for (b = b.firstChild; b != null;) {
        var d = b.nextSibling;
        b.nodeType == mxConstants.NODETYPE_ELEMENT && !this.processInclude(a, b, c) && this.decodeChild(a, b, c);
        b = d
    }
};
mxObjectCodec.prototype.decodeChild = function (a, b, c) {
    var d = this.getFieldName(b.getAttribute("as"));
    if (d == null || !this.isExcluded(c, d, b, false)) {
        var e = this.getFieldTemplate(c, d, b), f = null;
        if (b.nodeName == "add") {
            f = b.getAttribute("value");
            f == null && (f = mxUtils.eval(mxUtils.getTextContent(b)))
        } else f = a.decode(b, e);
        this.addObjectValue(c, d, f, e)
    }
};
mxObjectCodec.prototype.getFieldTemplate = function (a, b) {
    var c = a[b];
    c instanceof Array && c.length > 0 && (c = null);
    return c
};
mxObjectCodec.prototype.addObjectValue = function (a, b, c, d) {
    c != null && c != d && (b != null && b.length > 0 ? a[b] = c : a.push(c))
};
mxObjectCodec.prototype.processInclude = function (a, b, c) {
    if (b.nodeName == "include") {
        b = b.getAttribute("name");
        if (b != null)try {
            var d = mxUtils.load(b).getDocumentElement();
            d != null && a.decode(d, c)
        } catch (e) {
        }
        return true
    }
    return false
};
mxObjectCodec.prototype.beforeDecode = function (a, b) {
    return b
};
mxObjectCodec.prototype.afterDecode = function (a, b, c) {
    return c
};
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxCell, ["children", "edges", "overlays", "mxTransient"], ["parent", "source", "target"]);
    a.isCellCodec = function () {
        return true
    };
    a.isExcluded = function (a, c, d, e) {
        return mxObjectCodec.prototype.isExcluded.apply(this, arguments) || e && c == "value" && d.nodeType == mxConstants.NODETYPE_ELEMENT
    };
    a.afterEncode = function (a, c, d) {
        if (c.value != null && c.value.nodeType == mxConstants.NODETYPE_ELEMENT) {
            var e = d, d = mxClient.IS_IE ? c.value.cloneNode(true) : a.document.importNode(c.value,
                true);
            d.appendChild(e);
            a = e.getAttribute("id");
            d.setAttribute("id", a);
            e.removeAttribute("id")
        }
        return d
    };
    a.beforeDecode = function (a, c, d) {
        var e = c, f = this.getName();
        if (c.nodeName != f) {
            e = c.getElementsByTagName(f)[0];
            if (e != null && e.parentNode == c) {
                mxUtils.removeWhitespace(e, true);
                mxUtils.removeWhitespace(e, false);
                e.parentNode.removeChild(e)
            } else e = null;
            d.value = c.cloneNode(true);
            c = d.value.getAttribute("id");
            if (c != null) {
                d.setId(c);
                d.value.removeAttribute("id")
            }
        } else d.setId(c.getAttribute("id"));
        if (e != null)for (c =
                               0; c < this.idrefs.length; c++) {
            var f = this.idrefs[c], g = e.getAttribute(f);
            if (g != null) {
                e.removeAttribute(f);
                var h = a.objects[g] || a.lookup(g);
                if (h == null) {
                    g = a.getElementById(g);
                    g != null && (h = (mxCodecRegistry.codecs[g.nodeName] || this).decode(a, g))
                }
                d[f] = h
            }
        }
        return e
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxGraphModel);
    a.encodeObject = function (a, c, d) {
        var e = a.document.createElement("root");
        a.encodeCell(c.getRoot(), e);
        d.appendChild(e)
    };
    a.decodeChild = function (a, c, d) {
        c.nodeName == "root" ? this.decodeRoot(a, c, d) : mxObjectCodec.prototype.decodeChild.apply(this, arguments)
    };
    a.decodeRoot = function (a, c, d) {
        for (var e = null, c = c.firstChild; c != null;) {
            var f = a.decodeCell(c);
            f != null && f.getParent() == null && (e = f);
            c = c.nextSibling
        }
        e != null && d.setRoot(e)
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxRootChange, ["model", "previous", "root"]);
    a.afterEncode = function (a, c, d) {
        a.encodeCell(c.root, d);
        return d
    };
    a.beforeDecode = function (a, c, d) {
        if (c.firstChild != null && c.firstChild.nodeType == mxConstants.NODETYPE_ELEMENT) {
            var c = c.cloneNode(true), e = c.firstChild;
            d.root = a.decodeCell(e, false);
            d = e.nextSibling;
            e.parentNode.removeChild(e);
            for (e = d; e != null;) {
                d = e.nextSibling;
                a.decodeCell(e);
                e.parentNode.removeChild(e);
                e = d
            }
        }
        return c
    };
    a.afterDecode = function (a, c, d) {
        d.previous = d.root;
        return d
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxChildChange, ["model", "child", "previousIndex"], ["parent", "previous"]);
    a.isReference = function (a, c, d, e) {
        return c == "child" && (a.previous != null || !e) ? true : mxUtils.indexOf(this.idrefs, c) >= 0
    };
    a.afterEncode = function (a, c, d) {
        this.isReference(c, "child", c.child, true) ? d.setAttribute("child", a.getId(c.child)) : a.encodeCell(c.child, d);
        return d
    };
    a.beforeDecode = function (a, c, d) {
        if (c.firstChild != null && c.firstChild.nodeType == mxConstants.NODETYPE_ELEMENT) {
            var c =
                c.cloneNode(true), e = c.firstChild;
            d.child = a.decodeCell(e, false);
            d = e.nextSibling;
            e.parentNode.removeChild(e);
            for (e = d; e != null;) {
                d = e.nextSibling;
                if (e.nodeType == mxConstants.NODETYPE_ELEMENT) {
                    var f = e.getAttribute("id");
                    a.lookup(f) == null && a.decodeCell(e)
                }
                e.parentNode.removeChild(e);
                e = d
            }
        } else {
            e = c.getAttribute("child");
            d.child = a.getObject(e)
        }
        return c
    };
    a.afterDecode = function (a, c, d) {
        d.child.parent = d.previous;
        d.previous = d.parent;
        d.previousIndex = d.index;
        return d
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxTerminalChange, ["model", "previous"], ["cell", "terminal"]);
    a.afterDecode = function (a, c, d) {
        d.previous = d.terminal;
        return d
    };
    return a
}());
var mxGenericChangeCodec = function (a, b) {
    var c = new mxObjectCodec(a, ["model", "previous"], ["cell"]);
    c.afterDecode = function (a, c, f) {
        if (mxUtils.isNode(f.cell))f.cell = a.decodeCell(f.cell, false);
        f.previous = f[b];
        return f
    };
    return c
};
mxCodecRegistry.register(mxGenericChangeCodec(new mxValueChange, "value"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxStyleChange, "style"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxGeometryChange, "geometry"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxCollapseChange, "collapsed"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxVisibleChange, "visible"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxCellAttributeChange, "value"));
mxCodecRegistry.register(function () {
    return new mxObjectCodec(new mxGraph, ["graphListeners", "eventListeners", "view", "container", "cellRenderer", "editor", "selection"])
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxGraphView);
    a.encode = function (a, c) {
        return this.encodeCell(a, c, c.graph.getModel().getRoot())
    };
    a.encodeCell = function (a, c, d) {
        var e = c.graph.getModel(), f = c.getState(d), g = e.getParent(d);
        if (g == null || f != null) {
            var h = e.getChildCount(d), k = c.graph.getCellGeometry(d), i = null;
            g == e.getRoot() ? i = "layer" : g == null ? i = "graph" : e.isEdge(d) ? i = "edge" : h > 0 && k != null ? i = "group" : e.isVertex(d) && (i = "vertex");
            if (i != null) {
                var l = a.document.createElement(i);
                if (c.graph.getLabel(d) !=
                    null) {
                    l.setAttribute("label", c.graph.getLabel(d));
                    c.graph.isHtmlLabel(d) && l.setAttribute("html", true)
                }
                if (g == null) {
                    var m = c.getGraphBounds();
                    if (m != null) {
                        l.setAttribute("x", Math.round(m.x));
                        l.setAttribute("y", Math.round(m.y));
                        l.setAttribute("width", Math.round(m.width));
                        l.setAttribute("height", Math.round(m.height))
                    }
                    l.setAttribute("scale", c.scale)
                } else if (f != null && k != null) {
                    for (m in f.style) {
                        g = f.style[m];
                        typeof g == "function" && typeof g == "object" && (g = mxStyleRegistry.getName(g));
                        g != null && (typeof g != "function" &&
                            typeof g != "object") && l.setAttribute(m, g)
                    }
                    g = f.absolutePoints;
                    if (g != null && g.length > 0) {
                        k = Math.round(g[0].x) + "," + Math.round(g[0].y);
                        for (m = 1; m < g.length; m++)k = k + (" " + Math.round(g[m].x) + "," + Math.round(g[m].y));
                        l.setAttribute("points", k)
                    } else {
                        l.setAttribute("x", Math.round(f.x));
                        l.setAttribute("y", Math.round(f.y));
                        l.setAttribute("width", Math.round(f.width));
                        l.setAttribute("height", Math.round(f.height))
                    }
                    m = f.absoluteOffset;
                    if (m != null) {
                        m.x != 0 && l.setAttribute("dx", Math.round(m.x));
                        m.y != 0 && l.setAttribute("dy",
                            Math.round(m.y))
                    }
                }
                for (m = 0; m < h; m++) {
                    f = this.encodeCell(a, c, e.getChildAt(d, m));
                    f != null && l.appendChild(f)
                }
            }
        }
        return l
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxStylesheet);
    a.encode = function (a, c) {
        var d = a.document.createElement(this.getName()), e;
        for (e in c.styles) {
            var f = c.styles[e], g = a.document.createElement("add");
            if (e != null) {
                g.setAttribute("as", e);
                for (var h in f) {
                    var k = this.getStringValue(h, f[h]);
                    if (k != null) {
                        var i = a.document.createElement("add");
                        i.setAttribute("value", k);
                        i.setAttribute("as", h);
                        g.appendChild(i)
                    }
                }
                g.childNodes.length > 0 && d.appendChild(g)
            }
        }
        return d
    };
    a.getStringValue = function (a, c) {
        var d = typeof c;
        d == "function" ? c = mxStyleRegistry.getName(style[j]) : d == "object" && (c = null);
        return c
    };
    a.decode = function (a, c, d) {
        var d = d || new this.template.constructor, e = c.getAttribute("id");
        e != null && (a.objects[e] = d);
        for (c = c.firstChild; c != null;) {
            if (!this.processInclude(a, c, d) && c.nodeName == "add") {
                e = c.getAttribute("as");
                if (e != null) {
                    var f = c.getAttribute("extend"), g = f != null ? mxUtils.clone(d.styles[f]) : null;
                    if (g == null) {
                        f != null && mxLog.warn("mxStylesheetCodec.decode: stylesheet " + f + " not found to extend");
                        g =
                        {}
                    }
                    for (f = c.firstChild; f != null;) {
                        if (f.nodeType == mxConstants.NODETYPE_ELEMENT) {
                            var h = f.getAttribute("as");
                            if (f.nodeName == "add") {
                                var k = mxUtils.getTextContent(f), i = null;
                                if (k != null && k.length > 0)i = mxUtils.eval(k); else {
                                    i = f.getAttribute("value");
                                    mxUtils.isNumeric(i) && (i = parseFloat(i))
                                }
                                i != null && (g[h] = i)
                            } else f.nodeName == "remove" && delete g[h]
                        }
                        f = f.nextSibling
                    }
                    d.putCellStyle(e, g)
                }
            }
            c = c.nextSibling
        }
        return d
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxDefaultKeyHandler);
    a.encode = function () {
        return null
    };
    a.decode = function (a, c, d) {
        if (d != null)for (c = c.firstChild; c != null;) {
            if (!this.processInclude(a, c, d) && c.nodeName == "add") {
                var e = c.getAttribute("as"), f = c.getAttribute("action"), g = c.getAttribute("control");
                d.bindAction(e, f, g)
            }
            c = c.nextSibling
        }
        return d
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxDefaultToolbar);
    a.encode = function () {
        return null
    };
    a.decode = function (a, c, d) {
        if (d != null)for (var e = d.editor, c = c.firstChild; c != null;) {
            if (c.nodeType == mxConstants.NODETYPE_ELEMENT && !this.processInclude(a, c, d))if (c.nodeName == "separator")d.addSeparator(); else if (c.nodeName == "br")d.toolbar.addBreak(); else if (c.nodeName == "hr")d.toolbar.addLine(); else if (c.nodeName == "add") {
                var f = c.getAttribute("as"), f = mxResources.get(f) || f, g = c.getAttribute("icon"),
                    h = c.getAttribute("pressedIcon"), k = c.getAttribute("action"), i = c.getAttribute("mode"), l = c.getAttribute("template"), m = c.getAttribute("toggle") != "0", n = mxUtils.getTextContent(c), o = null;
                if (k != null)o = d.addItem(f, g, k, h); else if (i != null)var p = mxUtils.eval(n), o = d.addMode(f, g, i, h, p); else if (l != null || n != null && n.length > 0) {
                    o = e.templates[l];
                    l = c.getAttribute("style");
                    if (o != null && l != null) {
                        o = o.clone();
                        o.setStyle(l)
                    }
                    l = null;
                    n != null && n.length > 0 && (l = mxUtils.eval(n));
                    o = d.addPrototype(f, g, o, h, l, m)
                } else {
                    h = mxUtils.getChildNodes(c);
                    if (h.length > 0)if (g == null) {
                        l = d.addActionCombo(f);
                        for (f = 0; f < h.length; f++) {
                            m = h[f];
                            if (m.nodeName == "separator")d.addOption(l, "---"); else if (m.nodeName == "add") {
                                g = m.getAttribute("as");
                                m = m.getAttribute("action");
                                d.addActionOption(l, g, m)
                            }
                        }
                    } else {
                        var q = null, t = d.addPrototype(f, g, function () {
                            var a = e.templates[q.value];
                            if (a != null) {
                                var a = a.clone(), b = q.options[q.selectedIndex].cellStyle;
                                b != null && a.setStyle(b);
                                return a
                            }
                            mxLog.warn("Template " + a + " not found");
                            return null
                        }, null, null, m), q = d.addCombo();
                        mxEvent.addListener(q,
                            "change", function () {
                                d.toolbar.selectMode(t, function (a) {
                                    a = mxUtils.convertPoint(e.graph.container, mxEvent.getClientX(a), mxEvent.getClientY(a));
                                    return e.addVertex(null, p(), a.x, a.y)
                                });
                                d.toolbar.noReset = false
                            });
                        for (f = 0; f < h.length; f++) {
                            m = h[f];
                            if (m.nodeName == "separator")d.addOption(q, "---"); else if (m.nodeName == "add") {
                                g = m.getAttribute("as");
                                n = m.getAttribute("template");
                                d.addOption(q, g, n || l).cellStyle = m.getAttribute("style")
                            }
                        }
                    }
                }
                if (o != null) {
                    l = c.getAttribute("id");
                    l != null && l.length > 0 && o.setAttribute("id", l)
                }
            }
            c =
                c.nextSibling
        }
        return d
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxDefaultPopupMenu);
    a.encode = function () {
        return null
    };
    a.decode = function (a, c, d) {
        var e = c.getElementsByTagName("include")[0];
        if (e != null)this.processInclude(a, e, d); else if (d != null)d.config = c;
        return d
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxEditor, ["modified", "lastSnapshot", "ignoredChanges", "undoManager", "graphContainer", "toolbarContainer"]);
    a.afterDecode = function (a, c, d) {
        a = c.getAttribute("defaultEdge");
        if (a != null) {
            c.removeAttribute("defaultEdge");
            d.defaultEdge = d.templates[a]
        }
        a = c.getAttribute("defaultGroup");
        if (a != null) {
            c.removeAttribute("defaultGroup");
            d.defaultGroup = d.templates[a]
        }
        return d
    };
    a.decodeChild = function (a, c, d) {
        if (c.nodeName == "Array") {
            if (c.getAttribute("as") ==
                "templates") {
                this.decodeTemplates(a, c, d);
                return
            }
        } else if (c.nodeName == "ui") {
            this.decodeUi(a, c, d);
            return
        }
        mxObjectCodec.prototype.decodeChild.apply(this, arguments)
    };
    a.decodeUi = function (a, c, d) {
        for (a = c.firstChild; a != null;) {
            if (a.nodeName == "add") {
                var c = a.getAttribute("as"), e = a.getAttribute("element"), f = a.getAttribute("style"), g = null;
                if (e != null) {
                    g = document.getElementById(e);
                    if (g != null && f != null)g.style.cssText = g.style.cssText + (";" + f)
                } else {
                    var e = parseInt(a.getAttribute("x")), h = parseInt(a.getAttribute("y")),
                        k = a.getAttribute("width"), i = a.getAttribute("height"), g = document.createElement("div");
                    g.style.cssText = f;
                    (new mxWindow(mxResources.get(c) || c, g, e, h, k, i, false, true)).setVisible(true)
                }
                c == "graph" ? d.setGraphContainer(g) : c == "toolbar" ? d.setToolbarContainer(g) : c == "title" ? d.setTitleContainer(g) : c == "status" ? d.setStatusContainer(g) : c == "map" && d.setMapContainer(g)
            } else a.nodeName == "resource" ? mxResources.add(a.getAttribute("basename")) : a.nodeName == "stylesheet" && mxClient.link("stylesheet", a.getAttribute("name"));
            a = a.nextSibling
        }
    };
    a.decodeTemplates = function (a, c, d) {
        if (d.templates == null)d.templates = [];
        for (var c = mxUtils.getChildNodes(c), e = 0; e < c.length; e++) {
            for (var f = c[e].getAttribute("as"), g = c[e].firstChild; g != null && g.nodeType != 1;)g = g.nextSibling;
            g != null && (d.templates[f] = a.decodeCell(g))
        }
    };
    return a
}());
