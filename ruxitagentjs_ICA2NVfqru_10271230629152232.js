/*
 Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/ */
(function () {
    function Ha() { document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax"); var ya = -1 !== document.cookie.indexOf("__dTCookie"); document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT"); return ya; } function bb() { return void 0 === ab.dialogArguments ? navigator.cookieEnabled || Ha() : Ha(); } function nb() {
        var ya; if (bb()) {
            var Ca = ab.dT_, Ia = null === Ca || void 0 === Ca ? void 0 : Ca.platformPrefix; if (!Ca || Ia) {
                var na = null === Ca || void 0 === Ca ? void 0 : Ca.minAgentVersion;
                na && "10271230629152232" < na + "" ? window.console.log("[CookiePrefix/initConfig] Min agent version detected, and javascript agent is older - the javascript agent will not be initialized!") : (na = (ya = {}, ya.cfg = "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#", ya.iCE = bb, ya.platformCookieOffset = null === Ca || void 0 === Ca ? void 0 : Ca.platformCookieOffset, ya), Ia && (na.platformPrefix = Ia), ab.dT_ = na);
            }
        }
    } this.dT_ && dT_.prm && dT_.prm(); var ab = "undefined" !== typeof window ? window : self, Ra; ab.dT_ &&
        !ab.dT_.platformPrefix ? ab.dT_.gCP || (null === (Ra = ab.console) || void 0 === Ra ? void 0 : Ra.log("Duplicate agent injection detected, turning off redundant initConfig."), ab.dT_.di = 1) : nb();
})();
(function () {
    function Ha(f, r, v) { if (v || 2 === arguments.length) for (var T = 0, G = r.length, ua; T < G; T++)!ua && T in r || (ua || (ua = Array.prototype.slice.call(r, 0, T)), ua[T] = r[T]); return f.concat(ua || Array.prototype.slice.call(r)); } function bb(f) { var r; return function () { var v, T; if (r) return r; var G = null === (T = null === (v = w.dT_) || void 0 === v ? void 0 : v.gCP) || void 0 === T ? void 0 : T.call(v); return r = v = G ? "".concat(G, "_").concat(f) : f; }; } function nb() {
        var f = 0; try { f = Math.round(fa.performance.timeOrigin); } catch (r) { } if (0 >= f || isNaN(f) || !isFinite(f)) {
            xa(ue,
                { severity: "Warning", type: "ptoi", text: "performance.timeOrigin is invalid, with a value of [".concat(f, "]. Falling back to performance.timing.navigationStart") }); f = 0; try { f = fa.performance.timing.navigationStart; } catch (r) { } f = 0 >= f || isNaN(f) || !isFinite(f) ? $d : f;
        } kb = f; lb = ab; return kb;
    } function ab() { return kb; } function Ra() { return lb(); } function ya() {
        var f, r = 0; if (null === (f = null === fa || void 0 === fa ? void 0 : fa.performance) || void 0 === f ? 0 : f.now) try { r = Math.round(fa.performance.now()); } catch (v) { } return 0 >= r || isNaN(r) || !isFinite(r) ?
            (new Date).getTime() - lb() : r;
    } function Ca(f, r, v) { void 0 === v && (v = 0); var T = -1; r && (null === f || void 0 === f ? 0 : f.indexOf) && (T = f.indexOf(r, v)); return T; } function Ia() { var f; return !(null === (f = fa.console) || void 0 === f || !f.log); } function na(f, r) { if (!r) return ""; var v = f + "="; f = Ca(r, v); if (0 > f) return ""; for (; 0 <= f;) { if (0 === f || " " === r.charAt(f - 1) || ";" === r.charAt(f - 1)) return v = f + v.length, f = Ca(r, ";", f), 0 <= f ? r.substring(v, f) : r.substring(v); f = Ca(r, v, f + v.length); } return ""; } function Pa(f) { return na(f, document.cookie); } function fb() { }
    function ra(f, r) { void 0 === r && (r = document.cookie); return na(f, r); } function ka() { } function Na(f, r) { return function () { f.apply(r, arguments); }; } function sa(f) { if (!(this instanceof sa)) throw new TypeError("Promises must be constructed via new"); if ("function" !== typeof f) throw new TypeError("not a function"); this.ka = 0; this.ic = !1; this.qa = void 0; this.Fa = []; Xa(f, this); } function Sa(f, r) {
        for (; 3 === f.ka;)f = f.qa; 0 === f.ka ? f.Fa.push(r) : (f.ic = !0, sa.Eb(function () {
            var v = 1 === f.ka ? r.Ae : r.Be; if (null === v) (1 === f.ka ? Ga : L)(r.promise,
                f.qa); else { try { var T = v(f.qa); } catch (G) { L(r.promise, G); return; } Ga(r.promise, T); }
        }));
    } function Ga(f, r) { try { if (r === f) throw new TypeError("A promise cannot be resolved with itself."); if (r && ("object" === typeof r || "function" === typeof r)) { var v = r.then; if (r instanceof sa) { f.ka = 3; f.qa = r; ma(f); return; } if ("function" === typeof v) { Xa(Na(v, r), f); return; } } f.ka = 1; f.qa = r; ma(f); } catch (T) { L(f, T); } } function L(f, r) { f.ka = 2; f.qa = r; ma(f); } function ma(f) {
        2 === f.ka && 0 === f.Fa.length && sa.Eb(function () { f.ic || sa.pc(f.qa); }); for (var r = 0, v =
            f.Fa.length; r < v; r++)Sa(f, f.Fa[r]); f.Fa = null;
    } function va(f, r, v) { this.Ae = "function" === typeof f ? f : null; this.Be = "function" === typeof r ? r : null; this.promise = v; } function Xa(f, r) { var v = !1; try { f(function (T) { v || (v = !0, Ga(r, T)); }, function (T) { v || (v = !0, L(r, T)); }); } catch (T) { v || (v = !0, L(r, T)); } } function cb() { Lb.Eb = function (f) { if ("string" === typeof f) throw Error("Promise polyfill called _immediateFn with string"); f(); }; Lb.pc = function () { }; return Lb; } function ba(f, r) { return parseInt(f, r || 10); } function Ka(f) { return document.getElementsByTagName(f); }
    function Da(f) { return f.length; } function xa(f) { for (var r = [], v = 1; v < arguments.length; v++)r[v - 1] = arguments[v]; f.push.apply(f, r); } function N(f) { f = encodeURIComponent(f); var r = []; if (f) for (var v = 0; v < f.length; v++) { var T = f.charAt(v); xa(r, Lc[T] || T); } return r.join(""); } function P(f) {
        -1 < Ca(f, "^") && (f = f.split("^^").join("^"), f = f.split("^dq").join('"'), f = f.split("^rb").join(">"), f = f.split("^lb").join("<"), f = f.split("^p").join("|"), f = f.split("^e").join("="), f = f.split("^s").join(";"), f = f.split("^c").join(","), f = f.split("^bs").join("\\"));
        return f;
    } function Ua(f, r) { if (!f || !f.length) return -1; if (f.indexOf) return f.indexOf(r); for (var v = f.length; v--;)if (f[v] === r) return v; return -1; } function O(f, r) {
        var v; void 0 === r && (r = []); if (!f || "object" !== typeof f && "function" !== typeof f) return !1; var T = "number" !== typeof r ? r : [], G = null, ua = []; switch ("number" === typeof r ? r : 5) {
            case 1: G = "Boolean"; break; case 2: G = "Number"; break; case 3: G = "String"; break; case 4: G = "Function"; break; case 5: G = "Object"; break; case 6: G = "Date"; ua.push("getTime"); break; case 7: G = "Error"; ua.push("name",
                "message"); break; case 8: G = "Element"; break; case 9: G = "HTMLElement"; break; case 10: G = "HTMLImageElement"; ua.push("complete"); break; case 11: G = "PerformanceEntry"; break; case 12: G = "PerformanceTiming"; break; case 13: G = "PerformanceResourceTiming"; break; case 14: G = "PerformanceNavigationTiming"; break; case 15: G = "CSSRule"; ua.push("cssText", "parentStyleSheet"); break; case 16: G = "CSSStyleSheet"; ua.push("cssRules", "insertRule"); break; case 17: G = "Request"; ua.push("url"); break; case 18: G = "Response"; ua.push("ok", "status", "statusText");
                break; case 19: G = "Set"; ua.push("add", "entries", "forEach"); break; case 20: G = "Map"; ua.push("set", "entries", "forEach"); break; case 21: G = "Worker"; ua.push("addEventListener", "postMessage", "terminate"); break; case 22: G = "XMLHttpRequest"; ua.push("open", "send", "setRequestHeader"); break; case 23: G = "SVGScriptElement"; ua.push("ownerSVGElement", "type"); break; case 24: G = "HTMLMetaElement"; ua.push("httpEquiv", "content", "name"); break; case 25: G = "HTMLHeadElement"; break; case 26: G = "ArrayBuffer"; break; case 27: G = "ShadowRoot",
                    ua.push("host", "mode");
        }r = G; if (!r) return !1; ua = ua.length ? ua : T; if (!T.length) try { if (fa[r] && f instanceof fa[r] || Object.prototype.toString.call(f) === "[object " + r + "]") return !0; if (f && f.nodeType && 1 === f.nodeType) { var Fb = null === (v = f.ownerDocument.defaultView) || void 0 === v ? void 0 : v[r]; if ("function" === typeof Fb && f instanceof Fb) return !0; } } catch (Ob) { } for (v = 0; v < ua.length; v++)if (T = ua[v], "string" !== typeof T && "number" !== typeof T && "symbol" !== typeof T || !(T in f)) return !1; return !!ua.length;
    } function X(f, r, v, T) {
        "undefined" ===
            typeof T && (T = oa(r, !0)); "boolean" === typeof T && (T = oa(r, T)); f === fa ? Ec && Ec(r, v, T) : Ed && O(f, 21) ? Qc.call(f, r, v, T) : f.addEventListener && (f === fa.document || f === fa.document.documentElement ? ed.call(f, r, v, T) : Ec.call(f, r, v, T)); T = !1; for (var G = Vc.length; 0 <= --G;) { var ua = Vc[G]; if (ua.object === f && ua.event === r && ua.H === v) { T = !0; break; } } T || xa(Vc, { object: f, event: r, H: v });
    } function U(f, r, v, T) {
        for (var G = Vc.length; 0 <= --G;) { var ua = Vc[G]; if (ua.object === f && ua.event === r && ua.H === v) { Vc.splice(G, 1); break; } } "undefined" === typeof T && (T = oa(r,
            !0)); "boolean" === typeof T && (T = oa(r, T)); f === fa ? gc && gc(r, v, T) : f.removeEventListener && (f === fa.document || f === fa.document.documentElement ? zf.call(f, r, v, T) : gc.call(f, r, v, T));
    } function oa(f, r) { var v = !1; try { if (Ec && -1 < Ua(Wf, f)) { var T = Object.defineProperty({}, "passive", { get: function () { v = !0; } }); Ec("test", fb, T); } } catch (G) { } return v ? { passive: !0, capture: r } : r; } function ea() { for (var f = Vc, r = f.length; 0 <= --r;) { var v = f[r]; U(v.object, v.event, v.H); } Vc = []; } function R(f) { return "function" === typeof f && /{\s+\[native code]/.test(Function.prototype.toString.call(f)); }
    function Ea(f, r) { for (var v, T = [], G = 2; G < arguments.length; G++)T[G - 2] = arguments[G]; return void 0 !== Function.prototype.bind && R(Function.prototype.bind) ? (v = Function.prototype.bind).call.apply(v, Ha([f, r], T, !1)) : function () { for (var ua = 0; ua < arguments.length; ua++); return f.apply(r, (T || []).concat(Array.prototype.slice.call(arguments) || [])); }; } function eb() { if (ae) { var f = new ae; if (ge) for (var r = 0, v = rd; r < v.length; r++) { var T = v[r]; void 0 !== ge[T] && (f[T] = Ea(ge[T], f)); } return f; } return new fa.XMLHttpRequest; } function gb() {
        document.cookie =
            "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax"); var f = -1 !== document.cookie.indexOf("__dTCookie"); document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT"); return f;
    } function Yb() { return void 0 === fa.dialogArguments ? navigator.cookieEnabled || gb() : gb(); } function Hb() { return fa.dT_; } function Ib() { return fd; } function yc(f) { fd = f; } function Wb(f) { var r = Gb("rid"), v = Gb("rpid"); r && (f.rid = r); v && (f.rpid = v); } function hb(f) {
        if (f = f.xb) { f = P(f); try { fd = new RegExp(f, "i"); } catch (r) { } } else fd =
            void 0;
    } function jc(f) { return "n" === f || "s" === f || "l" === f ? ";SameSite=".concat(he[f]) : ""; } function pb(f, r, v) { var T = 1, G = 0; do document.cookie = f + '=""' + (r ? ";domain=" + r : "") + ";path=" + v.substring(0, T) + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;", T = v.indexOf("/", T), G++; while (-1 !== T && 5 > G); } function wc() { var f = (document.domain || location.hostname || "").split("."); return 1 >= f.length ? [] : f; } function wb(f, r) {
        r = "dTValidationCookieValue;path=/;domain=".concat(f).concat(jc(r)); document.cookie = "".concat(La(), "=").concat(r); return ra(La()) ?
            (pb(La(), f, "/"), !0) : !1;
    } function Eb() { if (fa.MobileAgent || fa.dynatraceMobile) { var f = Pa("dtAdkSettings"); return Pb(f).privacyState || null; } return null; } function lc(f, r) { return !oc() || Hb().overloadPrevention && !ja() ? null : f.apply(this, r || []); } function oc() { var f = Eb(); return 2 === f || 1 === f ? !1 : !jb("coo") || jb("cooO") || ja(); } function ub(f, r) { try { fa.sessionStorage.setItem(f, r); } catch (v) { } } function qc(f, r) { lc(ub, [f, r]); } function $b(f) { try { return fa.sessionStorage.getItem(f); } catch (r) { } return null; } function hc(f) { try { fa.sessionStorage.removeItem(f); } catch (r) { } }
    function sb(f) { document.cookie = f + '="";path=/' + (Gb("domain") ? ";domain=" + Gb("domain") : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"; } function F(f, r, v, T) { r || 0 === r ? (r = (r + "").replace(/[;\n\r]/g, "_"), f = f + "=" + r + ";path=/" + (Gb("domain") ? ";domain=" + Gb("domain") : ""), v && (f += ";expires=" + v.toUTCString()), f += jc(Gb("cssm")), T && "https:" === location.protocol && (f += ";Secure"), document.cookie = f) : sb(f); } function q(f, r, v, T) { lc(F, [f, r, v, T]); } function A(f) { return -1 === Ca(f, "v_4") ? !1 : !0; } function C(f) {
        f = ra(z(), f); f || ((f = $b(z())) &&
            A(f) ? K(f) : f = ""); return A(f) ? f : "";
    } function K(f) { q(z(), f, void 0, jb("ssc")); } function E(f) { return (f = f || C()) ? Pb(f) : { sessionId: "", serverId: "", overloadState: 0, appState: {} }; } function ca(f) { return E(f).serverId; } function Q(f) { return E(f).sessionId; } function ja() { return 0 <= Ca(navigator.userAgent, "RuxitSynthetic"); } function ha(f) { var r = {}, v = 0; for (f = f.split("|"); v < f.length; v++) { var T = f[v].split("="); 2 === T.length && (r[T[0]] = decodeURIComponent(T[1].replace(/\+/g, " "))); } return r; } function za() {
        var f = Gb("csu"); return (f.indexOf("dbg") ===
            f.length - 3 ? f.substring(0, f.length - 3) : f) + "_" + Gb("app") + "_Store";
    } function $a(f, r, v) { void 0 === r && (r = {}); var T = 0; for (f = f.split("|"); T < f.length; T++) { var G = f[T], ua = G, Fb = Ca(G, "="); -1 === Fb ? r[ua] = "1" : (ua = G.substring(0, Fb), r[ua] = G.substring(Fb + 1, G.length)); } !v && (v = r, T = v.spc) && (f = document.createElement("textarea"), f.innerHTML = T, v.spc = f.value); return r; } function zb(f) { var r; return null !== (r = kc[f]) && void 0 !== r ? r : Sd[f]; } function jb(f) { f = zb(f); return "false" === f || "0" === f ? !1 : !!f; } function rc(f) {
        var r = zb(f); r = ba(r); isNaN(r) &&
            (r = Sd[f]); return r;
    } function Gb(f) { return (zb(f) || "") + ""; } function ic(f, r) { kc[f] = r + ""; } function Zb(f) { return kc = f; } function bc(f) { kc[f] = 0 > Ca(kc[f], "#" + f.toUpperCase()) ? kc[f] : ""; } function xc(f) { var r = f.agentUri; r && -1 < Ca(r, "_") && (r = /([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(r)) && r.length && 2 < r.length && (f.csu = r[1], f.featureHash = r[2]); } function Rb(f) {
        var r = Hb().platformCookieOffset; if ("number" === typeof r) {
            a: {
                var v = Gb("cssm"); var T = wc(); if (T.length) for (r = T.slice(r); r.length;) {
                    if (wb(r.join("."), v)) {
                        v =
                            r.join("."); break a;
                    } r.shift();
                } v = "";
            } v && (f.domain = v);
        } else if (v = f.domain || "", r = (r = location.hostname) && v ? r === v || -1 !== r.indexOf("." + v, r.length - ("." + v).length) : !0, !v || !r) {
            f.domainOverride || (f.domainOriginal = f.domain || "", f.domainOverride = "".concat(location.hostname, ",").concat(v), delete f.domain); a: { T = Gb("cssm"); var G = wc().reverse(); if (G.length) for (var ua = G[0], Fb = 1; Fb <= G.length; Fb++) { if (wb(ua, T)) { T = ua; break a; } var Ob = G[Fb]; Ob && (ua = "".concat(Ob, ".").concat(ua)); } T = ""; } T && (f.domain = T); r || xa(ue, {
                type: "dpi", severity: "Warning",
                text: 'Configured domain "'.concat(v, '" is invalid for current location "').concat(location.hostname, '". Agent will use "').concat(f.domain, '" instead.')
            });
        }
    } function Mb(f, r) { Rb(f); var v = kc.pVO; v && (f.pVO = v); r || (f.bp = (f.bp || Sd.bp) + ""); } function Sb() { return kc; } function tb(f) { return Sd[f] === zb(f); } function Pb(f) {
        var r, v = {}, T = { sessionId: "", serverId: "", overloadState: 0, appState: v }, G = f.split("_"); if (2 < G.length && 0 === G.length % 2) {
            f = +G[1]; if (isNaN(f) || 3 > f) return T; f = {}; for (var ua = 2; ua < G.length; ua++) {
                var Fb = G[ua];
                0 === Ca(Fb, bh) ? v[Fb.substring(6).toLowerCase()] = +G[ua + 1] : f[Fb] = G[ua + 1]; ua++;
            } f.sn ? (G = f.sn, G = G.length === ie || 12 >= G.length ? G : "") : G = "hybrid"; T.sessionId = G; if (f.srv) { a: { G = f.srv.replace("-2D", "-"); if (!isNaN(+G) && (ua = ba(G), -99 <= ua && 99 >= ua)) break a; G = ""; } T.serverId = G; } G = +f.ol; 1 === G && Zc(ja()); 0 <= G && 2 >= G && (T.overloadState = G); f = +f.prv; isNaN(f) || (T.privacyState = 1 > f || 4 < f ? 1 : f); f = null === (r = Gb("app")) || void 0 === r ? void 0 : r.toLowerCase(); r = v[f]; isNaN(r) || 0 !== r || Zc(ja());
        } return T;
    } function Zc(f) {
        var r = Hb(); f || (r.disabled =
            !0, r.overloadPrevention = !0);
    } function Fd() { return Rc(); } function vc(f, r) { function v() { delete Ne[ua]; f.apply(this, arguments); } for (var T = [], G = 2; G < arguments.length; G++)T[G - 2] = arguments[G]; if ("apply" in Oe) { T.unshift(v, r); var ua = Oe.apply(fa, T); } else ua = Oe(v, r); Ne[ua] = !0; return ua; } function cd(f) { delete Ne[f]; "apply" in je ? je.call(fa, f) : je(f); } function sd(f) { xa(Td, f); } function Ba(f) { for (var r = Td.length; r--;)if (Td[r] === f) { Td.splice(r, 1); break; } } function I() { return Td; } function la(f, r) { return ve(f, r); } function ta(f) { Pe(f); }
    function wa(f, r) { if (!ke || !we) return ""; f = new ke([f], { type: r }); return we(f); } function Fa(f, r) { return Xf ? new Xf(f, r) : void 0; } function Oa(f) { "function" === typeof f && xa(pg, f); } function pa() { return pg; } function Ja() { return $d; } function db(f) { return function () { for (var r = [], v = 0; v < arguments.length; v++)r[v] = arguments[v]; if ("number" !== typeof r[0] || !Ne[r[0]]) try { return f.apply(this, r); } catch (T) { return f(r[0]); } }; } function Za() { return ue; } function mb() {
        lb = nb; fa.performance && (Rc = function () { return Math.round(lb() + ya()); });
        if (!Rc || isNaN(Rc()) || 0 >= Rc() || !isFinite(Rc())) Rc = function () { return (new Date).getTime(); };
    } function mc() { Gd && (fa.clearTimeout = je, fa.clearInterval = Pe, Gd = !1); } function Tb(f, r) { try { fa.localStorage.setItem(f, r); } catch (v) { } } function yb(f) { try { fa.localStorage.removeItem(f); } catch (r) { } } function Ub(f) { try { return fa.localStorage.getItem(f); } catch (r) { } return null; } function Ic(f) { oc() ? f() : (Qe || (Qe = []), xa(Qe, f)); } function Fc(f) { return lc(f); } function Bc() {
        if (jb("coo") && !oc()) {
            for (var f = 0, r = Qe; f < r.length; f++)vc(r[f], 0);
            Qe = []; ic("cooO", !0);
        }
    } function od() { if (jb("coo") && oc()) { ic("cooO", !1); sb(z()); sb(u()); sb("dtSa"); sb("dtAdk"); sb(Z()); sb(S()); try { hc(xe()), hc(S()), yb(xe()), yb(S()), hc(Z()), hc(z()), yb(za()), yb("dtAdk"); } catch (f) { } } } function Fe(f, r) { void 0 === r && (r = document.cookie || ""); return r.split(f + "=").length - 1; } function Ud(f, r) {
        var v = Fe(f, r); if (1 < v) {
            r = Gb("domain") || fa.location.hostname; var T = fa.location.hostname, G = fa.location.pathname, ua = 0, Fb = 0; Ld.push(f); do {
                var Ob = T.substring(ua); if (Ob !== r || "/" !== G) {
                    pb(f, Ob === r ? "" :
                        Ob, G); var pc = Fe(f); pc < v && (Ld.push(Ob), v = pc);
                } ua = T.indexOf(".", ua) + 1; Fb++;
            } while (0 !== ua && 10 > Fb && 1 < v); Gb("domain") && 1 < v && pb(f, "", G);
        }
    } function td() { var f = document.cookie; Ud(u(), f); Ud(z(), f); Ud(S(), f); 0 < Ld.length && xa(ue, { severity: "Error", type: "dcn", text: "Duplicate cookie name".concat(1 !== Ld.length ? "s" : "", " detected: ").concat(Ld.join(", ")) }); } function Md() { td(); sd(function (f, r, v, T) { 0 < Ld.length && !r && (f.av(T, "dCN", Ld.join(",")), Ld = []); 0 < qg.length && !r && (f.av(T, "eCC", qg.join(",")), qg = []); }); } function Nc(f) {
        var r =
            f, v = Math.pow(2, 32); return function () { r = (1664525 * r + 1013904223) % v; return r / v; };
    } function gd(f, r) { return isNaN(f) || isNaN(r) ? Math.floor(33 * gf()) : Math.floor(gf() * (r - f + 1)) + f; } function zc(f) { if (!f) return ""; var r = fa.crypto || fa.msCrypto; if (r && -1 === Ca(navigator.userAgent, "Googlebot")) r = r.getRandomValues(new Uint8Array(f)); else { r = []; for (var v = 0; v < f; v++)r.push(gd(0, 32)); } f = []; for (v = 0; v < r.length; v++) { var T = Math.abs(r[v] % 32); f.push(String.fromCharCode(T + (9 >= T ? 48 : 55))); } return f.join(""); } function kd() { return Ge; } function Hd(f) {
        void 0 ===
            f && (f = !0); rg = f;
    } function Vd(f, r, v) { var T = rc("pcl"); T = f.length - T; 0 < T && f.splice(0, T); T = ca(ra(z(), v)); for (var G = [], ua = T ? "".concat(T, "$") : "", Fb = 0; Fb < f.length; Fb++) { var Ob = f[Fb]; "-" !== Ob.D && G.push("".concat(ua).concat(Ob.frameId, "h").concat(Ob.D)); } f = G.join("p"); f || (rg && (y(!0, "a", v), Hd(!1)), f += "".concat(T, "$").concat(Ge, "h-")); f += "v".concat(r || ye(v)); r = f + "e0"; q(u(), r, void 0, jb("ssc")); } function ud(f, r) {
        void 0 === r && (r = document.cookie); var v = ra(u(), r); r = []; if (v && "-" !== v) {
            var T = ""; var G = 0; for (v = v.split("p"); G <
                v.length; G++) { var ua = v[G], Fb = T, Ob = f; void 0 === Fb && (Fb = ""); T = Ca(ua, "$"); var pc = Ca(ua, "h"); var Mc = Ca(ua, "v"), Nd = Ca(ua, "e"); T = ua.substring(T + 1, pc); pc = -1 !== Mc ? ua.substring(pc + 1, Mc) : ua.substring(pc + 1); Fb || -1 === Mc || (Fb = -1 !== Nd ? ua.substring(Mc + 1, Nd) : ua.substring(Mc + 1)); ua = null; Ob || (Ob = ba(T.split("_")[0]), Mc = Rc() % Re, Mc < Ob && (Mc += Re), Ob = Ob + 9E5 > Mc); Ob && (ua = { frameId: T, D: "-" === pc ? "-" : ba(pc), visitId: "" }); T = Fb; (pc = ua) && r.push(pc); } for (f = 0; f < r.length; f++)r[f].visitId = T;
        } return r;
    } function ze(f, r) {
        var v = document.cookie;
        r = ud(r, v); for (var T = !1, G = 0; G < r.length; G++) { var ua = r[G]; ua.frameId === Ge && (ua.D = f, T = !0); } T || xa(r, { frameId: Ge, D: f, visitId: "" }); Vd(r, void 0, v);
    } function ye(f) { return zd(f) || y(!0, "c", f); } function zd(f) { if (Cb(f) <= Rc()) return y(!0, "t", f); var r = pd(f); if (!r) return y(!0, "c", f); var v = ch.exec(r); if (!v || 3 !== v.length || 32 !== v[1].length || isNaN(ba(v[2]))) return y(!0, "i", f); qc(xe(), r); return r; } function Oc(f, r) { var v = Rc(); r = qb(r).Dc; f && (r = v); qa(v + sg + "|" + r); Y(); } function be(f) {
        var r = "t" + (Rc() - Cb(f)), v = pd(f), T = Ad(); n(T, f);
        J(T, r, v);
    } function pd(f) { var r, v; return null !== (v = null === (r = ud(!0, f)[0]) || void 0 === r ? void 0 : r.visitId) && void 0 !== v ? v : $b(xe()); } function Ad() { var f = zc(ie); try { f = f.replace(/[0-9]/g, function (r) { r = .1 * ba(r); return String.fromCharCode(Math.floor(25 * r + 65)); }); } catch (r) { throw O(r, 7), r; } return f + "-0"; } function n(f, r) { var v = ud(!1, r); Vd(v, f, r); qc(xe(), f); Oc(!0); } function x(f, r, v) { return y(f, r, v); } function y(f, r, v) { f && (hf = !0); f = pd(v); v = Ad(); n(v); J(v, r, f); return v; } function J(f, r, v) {
        if (pd(document.cookie)) for (var T = 0,
            G = Jh; T < G.length; T++)(0, G[T])(f, hf, r, v);
    } function M(f) { Jh.push(f); } function Y(f) { gg && cd(gg); gg = vc(da, Cb(f) - Rc()); } function da() { var f = document.cookie; if (Cb(f) <= Rc()) return lc(be, [f]), !0; Ic(Y); return !1; } function qa(f) { var r = Ea(q, null, S(), f, void 0, jb("ssc")); r(); var v = ra(S()); "" !== v && f !== v && (td(), r(), f !== ra(S()) && xa(ue, { severity: "Error", type: "dcn", text: "Could not sanitize cookies" })); qc(S(), f); } function Ma(f, r) { (r = ra(f, r)) || (r = $b(f) || ""); return r; } function Ta() {
        var f = zd() || ""; qc(xe(), f); f = Ma(S()); qa(f); yb(xe());
        yb(S());
    } function qb(f) { var r = { Kd: 0, Dc: 0 }; if (f = Ma(S(), f)) try { var v = f.split("|"); 2 === v.length && (r.Kd = parseInt(v[0]), r.Dc = parseInt(v[1])); } catch (T) { } return r; } function Cb(f) { f = qb(f); return Math.min(f.Kd, f.Dc + tg); } function tc(f) { sg = f; } function fc() { var f = hf; hf = !1; return f; } function Jc() { da() || Oc(!1); } function $c() { var f = ra(Z()); f && 45 === (null === f || void 0 === f ? void 0 : f.length) || (f = Ub(Z()) || $b(Z()), 45 !== (null === f || void 0 === f ? void 0 : f.length) && (vh = !0, f = Rc() + "", f += zc(45 - f.length))); vd(f); return f; } function vd(f) {
        if (jb("dpvc") ||
            jb("pVO")) qc(Z(), f); else { var r = new Date; var v = r.getMonth() + Math.min(24, Math.max(1, rc("rvcl"))); r.setMonth(v); v = Z(); lc(Tb, [v, f]); } q(Z(), f, r, jb("ssc"));
    } function qd() { return vh; } function ad(f) { var r = ra(Z()); sb(Z()); hc(Z()); yb(Z()); ic("pVO", !0); vd(r); f && lc(Tb, ["dt-pVO", "1"]); Ta(); } function jf() { yb("dt-pVO"); jb("pVO") && (ic("pVO", !1), $c()); hc(Z()); Ta(); } function Se(f, r, v, T, G) {
        var ua = document.createElement("script"); ua.setAttribute("src", f); r && ua.setAttribute("defer", "defer"); v && (ua.onload = v); T && (ua.onerror =
            T); G && ua.setAttribute("id", G); ua.setAttribute("crossorigin", "anonymous"); f = document.getElementsByTagName("script")[0]; f.parentElement.insertBefore(ua, f);
    } function Te(f, r) { return Mg + "/" + (r || Ue) + "_" + f + "_" + (rc("buildNumber") || Hb().version) + ".js"; } function Yf() { var f, r; try { null === (r = null === (f = fa.MobileAgent) || void 0 === f ? void 0 : f.incrementActionCount) || void 0 === r ? void 0 : r.call(f); } catch (v) { } } function Ve() {
        var f, r = fa.dT_; fa.dT_ = (f = {}, f.di = 0, f.version = "10271230629152232", f.cfg = r ? r.cfg : "", f.iCE = r ? Yb : function () { return navigator.cookieEnabled; },
            f.ica = 1, f.disabled = !1, f.overloadPrevention = !1, f.gAST = Ja, f.ww = Fa, f.stu = wa, f.nw = Fd, f.apush = xa, f.st = vc, f.si = la, f.aBPSL = sd, f.rBPSL = Ba, f.gBPSL = I, f.aBPSCC = Oa, f.gBPSCC = pa, f.buildType = "dynatrace", f.gSSV = $b, f.sSSV = qc, f.rSSV = hc, f.rvl = yb, f.pn = ba, f.iVSC = A, f.p3SC = Pb, f.io = Ca, f.dC = sb, f.sC = q, f.esc = N, f.gSId = ca, f.gDtc = Q, f.gSC = C, f.sSC = K, f.gC = Pa, f.cRN = gd, f.cRS = zc, f.gEL = Da, f.gEBTN = Ka, f.cfgO = Sb, f.pCfg = ha, f.pCSAA = $a, f.cFHFAU = xc, f.sCD = Mb, f.bcv = jb, f.ncv = rc, f.scv = Gb, f.stcv = ic, f.rplC = Zb, f.cLSCK = za, f.gFId = kd, f.gBAU = Te, f.iS =
            Se, f.eWE = Ic, f.oEIE = Fc, f.oEIEWA = lc, f.eA = Bc, f.dA = od, f.iNV = qd, f.gVID = $c, f.dPV = ad, f.ePV = jf, f.sVIdUP = Hd, f.sVTT = tc, f.sVID = n, f.rVID = zd, f.gVI = ye, f.gNVIdN = x, f.gARnVF = fc, f.cAUV = Jc, f.uVT = Oc, f.aNVL = M, f.gPC = ud, f.cPC = ze, f.sPC = Vd, f.clB = mc, f.ct = cd, f.aRI = Wb, f.iXB = hb, f.gXBR = Ib, f.sXBR = yc, f.de = P, f.cCL = Ia, f.iEC = Yf, f.rnw = ya, f.gto = Ra, f.ael = X, f.rel = U, f.sup = oa, f.cuel = ea, f.iAEPOO = oc, f.iSM = ja, f.aIOf = Ua, f.gxwp = eb, f.iIO = O, f.prm = cb, f.cI = ta, f.gidi = Za, f.iDCV = tb, f.gCF = ra, f.gPSMB = Eb, f.lvl = Ub, f.gCP = (null === r || void 0 === r ? 0 : r.platformPrefix) ?
                function () { return r.platformPrefix || ""; } : void 0, f.platformCookieOffset = null === r || void 0 === r ? void 0 : r.platformCookieOffset, f);
    } function dh() { if (jb("nsfnv")) { var f = ra(z()); if (-1 === Ca(f, "".concat(Af, "-"))) { var r = Pb(f).serverId; f = f.replace("".concat(Af).concat(r), "".concat(Af).concat("".concat(-1 * gd(2, 99)).replace("-", "-2D"))); K(f); } } } function Zf() { Ic(function () { if (!Q()) { var f = -1 * gd(2, 99), r = zc(ie); K("v_4".concat(Af).concat("".concat(f).replace("-", "-2D"), "_sn_").concat(r)); } }); M(dh); } function kf() {
        for (var f =
            [], r = 0; r < arguments.length; r++)f[r] = arguments[r]; fa.console.log.apply(fa.console, f);
    } this.dT_ && dT_.prm && dT_.prm(); var eh; (function (f) { f[f.ENABLED = 0] = "ENABLED"; f[f.DISABLED = 1] = "DISABLED"; f[f.DELAYED = 2] = "DELAYED"; })(eh || (eh = {})); var fh; (function (f) { f[f.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE"; f[f.ENABLED = 1] = "ENABLED"; f[f.BLOCKED = 2] = "BLOCKED"; })(fh || (fh = {})); var We; (function (f) { f[f.NONE = 1] = "NONE"; f[f.OFF = 2] = "OFF"; f[f.PERFORMANCE = 3] = "PERFORMANCE"; f[f.BEHAVIOR = 4] = "BEHAVIOR"; })(We || (We = {})); var ug; (function (f) {
        f.OVERLOAD_PREVENTION =
            "ol"; f.PRIVACY_STATE = "prv"; f.SERVER_ID = "srv"; f.SESSION_ID = "sn";
    })(ug || (ug = {})); var Ng; (function (f) { f.DYNATRACE_MOBILE = "dynatraceMobile"; f.MOBILE_AGENT = "MobileAgent"; })(Ng || (Ng = {})); var Ae; (function (f) {
        f[f.ARRAY = 0] = "ARRAY"; f[f.BOOLEAN = 1] = "BOOLEAN"; f[f.NUMBER = 2] = "NUMBER"; f[f.STRING = 3] = "STRING"; f[f.FUNCTION = 4] = "FUNCTION"; f[f.OBJECT = 5] = "OBJECT"; f[f.DATE = 6] = "DATE"; f[f.ERROR = 7] = "ERROR"; f[f.ELEMENT = 8] = "ELEMENT"; f[f.HTML_ELEMENT = 9] = "HTML_ELEMENT"; f[f.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT"; f[f.PERFORMANCE_ENTRY =
            11] = "PERFORMANCE_ENTRY"; f[f.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING"; f[f.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING"; f[f.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING"; f[f.CSS_RULE = 15] = "CSS_RULE"; f[f.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET"; f[f.REQUEST = 17] = "REQUEST"; f[f.RESPONSE = 18] = "RESPONSE"; f[f.SET = 19] = "SET"; f[f.MAP = 20] = "MAP"; f[f.WORKER = 21] = "WORKER"; f[f.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST"; f[f.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT"; f[f.HTML_META_ELEMENT =
                24] = "HTML_META_ELEMENT"; f[f.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT"; f[f.ARRAY_BUFFER = 26] = "ARRAY_BUFFER"; f[f.SHADOW_ROOT = 27] = "SHADOW_ROOT";
    })(Ae || (Ae = {})); var w = window, u = bb("dtPC"), z = bb("dtCookie"), S = bb("rxvt"), Z = bb("rxVisitor"), La = bb("dTValidationCookie"), fa = "undefined" !== typeof window ? window : self, kb, lb, rb = setTimeout; sa.prototype["catch"] = function (f) { return this.then(null, f); }; sa.prototype.then = function (f, r) { var v = new this.constructor(ka); Sa(this, new va(f, r, v)); return v; }; sa.prototype["finally"] = function (f) {
        var r =
            this.constructor; return this.then(function (v) { return r.resolve(f()).then(function () { return v; }); }, function (v) { return r.resolve(f()).then(function () { return r.reject(v); }); });
    }; sa.all = function (f) {
        return new sa(function (r, v) {
            function T(Ob, pc) { try { if (pc && ("object" === typeof pc || "function" === typeof pc)) { var Mc = pc.then; if ("function" === typeof Mc) { Mc.call(pc, function (Nd) { T(Ob, Nd); }, v); return; } } G[Ob] = pc; 0 === --ua && r(G); } catch (Nd) { v(Nd); } } if (!f || "undefined" === typeof f.length) return v(new TypeError("Promise.all accepts an array"));
            var G = Array.prototype.slice.call(f); if (0 === G.length) return r([]); for (var ua = G.length, Fb = 0; Fb < G.length; Fb++)T(Fb, G[Fb]);
        });
    }; sa.allSettled = function (f) {
        return new this(function (r, v) {
            function T(Fb, Ob) { if (Ob && ("object" === typeof Ob || "function" === typeof Ob)) { var pc = Ob.then; if ("function" === typeof pc) { pc.call(Ob, function (Mc) { T(Fb, Mc); }, function (Mc) { G[Fb] = { status: "rejected", reason: Mc }; 0 === --ua && r(G); }); return; } } G[Fb] = { status: "fulfilled", value: Ob }; 0 === --ua && r(G); } if (!f || "undefined" === typeof f.length) return v(new TypeError(typeof f +
                " " + f + " is not iterable(cannot read property Symbol(Symbol.iterator))")); var G = Array.prototype.slice.call(f); if (0 === G.length) return r([]); var ua = G.length; for (v = 0; v < G.length; v++)T(v, G[v]);
        });
    }; sa.resolve = function (f) { return f && "object" === typeof f && f.constructor === sa ? f : new sa(function (r) { r(f); }); }; sa.reject = function (f) { return new sa(function (r, v) { v(f); }); }; sa.race = function (f) {
        return new sa(function (r, v) {
            if (!f || "undefined" === typeof f.length) return v(new TypeError("Promise.race accepts an array")); for (var T =
                0, G = f.length; T < G; T++)sa.resolve(f[T]).then(r, v);
        });
    }; sa.Eb = "function" === typeof setImmediate && function (f) { setImmediate(f); } || function (f) { rb(f, 0); }; sa.pc = function (f) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", f); }; var Lb = sa, Lc = { "!": "%21", "~": "%7E", "*": "%2A", "(": "%28", ")": "%29", "'": "%27", $: "%24", ";": "%3B", ",": "%2C" }, Sc; (function (f) {
        f.ANCHOR = "A"; f.BUTTON = "BUTTON"; f.FORM = "FORM"; f.I_FRAME = "IFRAME"; f.IMAGE = "IMG"; f.INPUT = "INPUT"; f.LABEL = "LABEL"; f.LINK = "LINK"; f.OPTION =
            "OPTION"; f.SCRIPT = "SCRIPT"; f.SELECT = "SELECT"; f.STYLE = "STYLE"; f.TEXT_AREA = "TEXTAREA";
    })(Sc || (Sc = {})); var Ec, gc, ed, zf, Ed = fa.Worker, Qc = Ed && Ed.prototype.addEventListener, Vc = [], Wf = ["touchstart", "touchend", "scroll"], ae, rd = "abort getAllResponseHeaders getResponseHeader open overrideMimeType send setRequestHeader".split(" "), ge, fd, le, he = (le = {}, le.l = "Lax", le.s = "Strict", le.n = "None", le), Sd, ie = 32, hg; (function (f) { f.LAX = "l"; f.NONE = "n"; f.NOT_SET = "0"; f.STRICT = "s"; })(hg || (hg = {})); var xe = bb("rxvisitid"), kc = {}, bh = "app-3A",
        Xf = fa.Worker, ke = fa.Blob, we = fa.URL && fa.URL.createObjectURL, je, Pe, Oe, ve, Gd = !1, Td, pg = [], ue = [], $d, vg, Ne = {}, Rc, Qe = [], Ld = [], qg = [], gf, wg, Ge, Re = 6E8, rg = !1, ch = /([A-Z]+)-([0-9]+)/, Jh = [], sg, tg, hf = !1, gg, vh = !1, Bf, Mg, Ue, Af = "".concat("_", "srv").concat("_"); (function () {
            var f, r, v; if (!(11 > document.documentMode)) {
                var T = 0 > (null === (r = navigator.userAgent) || void 0 === r ? void 0 : r.indexOf("RuxitSynthetic")); if (!fa.dT_ || !fa.dT_.cfg || "string" !== typeof fa.dT_.cfg || "initialized" in fa.dT_ && fa.dT_.initialized) (null === (v = fa.dT_) ||
                    void 0 === v ? 0 : v.gCP) ? kf("[CookiePrefix/initCode] initCode with cookie prefix already initialized, not initializing initCode!") : kf("InitConfig not found or agent already initialized! This is an injection issue."), fa.dT_ && (fa.dT_.di = 3); else if (T) try {
                        Ve(); var G; Sd = (G = {}, G.ade = "", G.aew = !0, G.apn = "", G.agentLocation = "", G.agentUri = "", G.app = "", G.async = !1, G.ase = !1, G.auto = !1, G.bp = 3, G.bs = !1, G.buildNumber = 0, G.csprv = !0, G.cepl = 16E3, G.cls = !0, G.ccNcss = !1, G.coo = !1, G.cooO = !1, G.cssm = "0", G.cwt = "", G.cwtUrl = "27pd8x1igg",
                            G.cors = !1, G.csu = "", G.cuc = "", G.cce = !1, G.cux = !1, G.dataDtConfig = "", G.debugName = "", G.dvl = 500, G.dASXH = !1, G.disableCookieManager = !1, G.dKAH = !1, G.disableLogging = !1, G.dmo = !1, G.doel = !1, G.dpch = !1, G.dpvc = !1, G.disableXhrFailures = !1, G.domain = "", G.domainOverride = "", G.domainOriginal = "", G.doNotDetect = "", G.ds = !0, G.dsndb = !1, G.dsa = !1, G.dsss = !1, G.dssv = !0, G.earxa = !0, G.exp = !1, G.eni = !0, G.expw = !1, G.instr = "", G.evl = "", G.fa = !1, G.fvdi = !1, G.featureHash = "", G.hvt = 216E5, G.imm = !1, G.ign = "", G.iub = "", G.iqvn = !1, G.initializedModules = "",
                            G.lastModification = 0, G.lupr = !0, G.lab = !1, G.legacy = !1, G.lt = !0, G.mb = "", G.md = "", G.mdp = "", G.mdl = "", G.mcepsl = 100, G.mdn = 5E3, G.mhl = 4E3, G.mpl = 1024, G.mmds = 2E4, G.msl = 3E4, G.bismepl = 2E3, G.mel = 200, G.mepp = 10, G.moa = 30, G.mrt = 3, G.ntd = !1, G.nsfnv = !1, G.ncw = !1, G.oat = 180, G.ote = !1, G.owasp = !1, G.pcl = 20, G.pt = !0, G.perfbv = 1, G.prfSmpl = 0, G.pVO = !1, G.peti = !1, G.raxeh = !0, G.rdnt = 0, G.nosr = !0, G.reportUrl = "dynaTraceMonitor", G.rid = "", G.ridPath = "", G.rpid = "", G.rcdec = 12096E5, G.rtl = 0, G.rtp = 2, G.rtt = 1E3, G.rtu = 200, G.rvcl = 24, G.sl = 100, G.ssc = !1,
                            G.svNB = !1, G.srad = !0, G.srbbv = 1, G.srbw = !0, G.srdinitrec = !0, G.srmr = 100, G.srms = "1,1,,,", G.srsr = 1E5, G.srtbv = 3, G.srtd = 1, G.srtr = 500, G.srvr = "", G.srvi = 0, G.srwo = !1, G.srre = "", G.srxcss = !0, G.srxicss = !0, G.srif = !1, G.srmrc = !1, G.srsdom = !0, G.srcss = !0, G.srmcrl = 1, G.srmcrv = 10, G.st = 3E3, G.spc = "", G.syntheticConfig = !1, G.tal = 0, G.tt = 100, G.tvc = 3E3, G.uxdce = !1, G.uxdcw = 1500, G.uxrgce = !0, G.uxrgcm = "100,25,300,3;100,25,300,3", G.uam = !1, G.uana = "data-dtname,data-dtName", G.uanpi = 0, G.pui = !1, G.usrvd = !0, G.vrt = !1, G.vcfi = !0, G.vcsb = !1, G.vcit =
                            1E3, G.vct = 50, G.vcx = 50, G.vscl = 0, G.vncm = 1, G.xb = "", G.chw = "", G.xt = 0, G.xhb = "", G); var ua; cb(); var Fb; ae = fa.XMLHttpRequest; var Ob = null === (Fb = fa.XMLHttpRequest) || void 0 === Fb ? void 0 : Fb.prototype; if (Ob) for (ge = {}, r = 0, v = rd; r < v.length; r++) { var pc = v[r]; void 0 !== Ob[pc] && (ge[pc] = Ob[pc]); } Ec = fa.addEventListener; gc = fa.removeEventListener; ed = fa.document.addEventListener; zf = fa.document.removeEventListener; Oe = fa.setTimeout; ve = fa.setInterval; Gd || (je = fa.clearTimeout, Pe = fa.clearInterval); var Mc = Yb ? Yb() : navigator.cookieEnabled,
                                Nd = 1 === Pb(ra("dtAdkSettings") || (null === (ua = vg) || void 0 === ua ? void 0 : ua.getItem("dtAdkSettings")) || "").overloadState; Ia(); if (!(!Mc || Nd ? 0 : "complete" !== document.readyState || fa.performance && fa.performance.timing)) throw Error("Error during initCode initialization"); try { vg = fa.localStorage; } catch (wh) { } ue = []; mb(); $d = Rc(); Td = []; Ne = {}; Gd || (fa.clearTimeout = db(je), fa.clearInterval = db(Pe), Gd = !0); var lf = Math.random(), He = Math.random(); wg = 0 !== lf && 0 !== He && lf !== He; if (-1 !== Ca(navigator.userAgent, "Googlebot")) {
                                    var wd =
                                        performance.getEntriesByType("navigation")[0]; ua = 1; if (wd) { for (var Be in wd) { var Wd = wd[Be]; "number" === typeof Wd && Wd && (ua = 1 === ua ? Wd : ua + Wd); } var Xd = Math.floor(1E4 * ua); } else Xd = ua; gf = Nc(Xd);
                                } else wg ? gf = Math.random : gf = Nc(Rc()); Ge = $d % Re + "_" + ba(gd(0, 1E3) + ""); a: {
                                    var Od, Ie, Bd = Hb().cfg; kc = { reportUrl: "dynaTraceMonitor", initializedModules: "", csu: "dtagent", dataDtConfig: "string" === typeof Bd ? Bd : "" }; Hb().cfg = kc; kc.csu = "ruxitagentjs"; var Xe = kc.dataDtConfig; Xe && -1 === Ca(Xe, "#CONFIGSTRING") && ($a(Xe, kc), bc("domain"), bc("auto"),
                                        bc("app"), xc(kc)); var ce = Ka("script"), gh = ce.length, Je = -1 === Ca(kc.dataDtConfig || "", "#CONFIGSTRING") ? kc : null; if (0 < gh) for (Xd = 0; Xd < gh; Xd++)b: {
                                            wd = void 0; var hh = ce[Xd]; Be = Je; if (hh.attributes) {
                                                Wd = Be; var Kh = hh.src, Lh = hh.attributes.getNamedItem("data-dtconfig"); if (Lh) {
                                                    Bd = void 0; Xe = Kh; var Mh = Lh.value; ua = {}; kc.legacy = "1"; Ob = /([a-zA-Z]*)_([a-zA-Z_0-9]*)_([0-9]+)/g; Xe && (Bd = Ob.exec(Xe), null === Bd || void 0 === Bd ? 0 : Bd.length) && (ua.csu = Bd[1], ua.featureHash = Bd[2], ua.agentLocation = Xe.substring(0, Ca(Xe, Bd[1]) - 1), ua.buildNumber =
                                                        Bd[3]); if (Mh) { $a(Mh, ua, !0); var Pd = ua.agentUri; !Xe && Pd && (Bd = Ob.exec(Pd), null === Bd || void 0 === Bd ? 0 : Bd.length) && (ua.csu = Bd[1]); } Rb(ua); wd = ua; if (!Be) Wd = wd; else if (!wd.syntheticConfig) { Je = wd; break b; }
                                                } Je = Wd;
                                            } else Je = Be;
                                        } if (Je) for (var Ye in Je) Object.prototype.hasOwnProperty.call(Je, Ye) && (ce = Ye, kc[ce] = Je[ce]); var mf = za(); try {
                                            var de = (Je = vg) && Je.getItem(mf); if (de) {
                                                var nf = ha(de), Ze = $a(nf.config || ""), Og = kc.lastModification || "0", $e = ba((Ze.lastModification || nf.lastModification || "0").substring(0, 13)), xh = "string" ===
                                                    typeof Og ? ba(Og.substring(0, 13)) : Og; if (!Og || $e >= xh) if (Ze.csu = nf.name || Gb("csu"), Ze.featureHash = nf.featureHash || Gb("featureHash"), Ze.agentUri && xc(Ze), Mb(Ze, !0), hb(Ze), Wb(Ze), $e > (+kc.lastModification || 0)) { var ih = jb("auto"), Yd = jb("legacy"); kc = Zb(Ze); kc.auto = ih ? "1" : "0"; kc.legacy = Yd ? "1" : "0"; }
                                            }
                                        } catch (wh) { } Mb(kc); try { var Pg = kc.ign; if (Pg && (new RegExp(Pg)).test(fa.location.href)) { document.dT_ = fa.dT_ = void 0; var oe = !1; break a; } } catch (wh) { } if (ja()) {
                                            var ig = navigator.userAgent, $f = ig.lastIndexOf("RuxitSynthetic");
                                            if (-1 === $f) var jg = {}; else { var of = ig.substring($f + 14); if (-1 === Ca(of, " c")) jg = {}; else { mf = {}; de = 0; for (var Qg = of.split(" "); de < Qg.length; de++) { var Nh = Qg[de]; if ("c" === Nh.charAt(0)) { var xg = Nh.substring(1), Rg = xg.indexOf("="), yh = xg.substring(0, Rg), Oh = xg.substring(Rg + 1); yh && Oh && (mf[yh] = Oh); } } jg = mf; } } of = void 0; for (of in jg) Object.prototype.hasOwnProperty.call(jg, of) && jg[of] && (kc[of] = jg[of]); Zb(kc);
                                        } var Cf = null === (Ie = (Od = Hb()).gCP) || void 0 === Ie ? void 0 : Ie.call(Od), zh = Gb("cuc"); if (Cf && Cf !== zh) throw Error("platformPrefix and cuc do not match!");
                                    oe = !0;
                                } if (!oe) throw Error("Error during config initialization"); Md(); Bf = Hb().disabled; var Cd; if (!(Cd = Gb("agentLocation"))) a: { var kg = Gb("agentUri"); if (kg || document.currentScript) { var af = kg || document.currentScript.src; if (af) { oe = af; var Ph = -1 === Ca(oe, "_bs") && -1 === Ca(oe, "_bootstrap") && -1 === Ca(oe, "_complete") ? 1 : 2, ag = af.lastIndexOf("/"); for (oe = 0; oe < Ph && -1 !== ag; oe++)af = af.substring(0, ag), ag = af.lastIndexOf("/"); Cd = af; break a; } } var Df = location.pathname; Cd = Df.substring(0, Df.lastIndexOf("/")); } Mg = Cd; Ue = Gb("csu") ||
                                    "ruxitagentjs"; "true" === ra("dtUseDebugAgent") && 0 > Ue.indexOf("dbg") && (Ue = Gb("debugName") || Ue + "dbg"); if (!jb("auto") && !jb("legacy") && !Bf) { var Ce = Gb("agentUri") || Te(Gb("featureHash")); if (jb("async") || "complete" === document.readyState) Se(Ce, jb("async"), void 0, void 0, "dtjsagent"); else { var Ah = "".concat("dtjsagent", "dw"); document.write('<script id="'.concat(Ah, '" type="text/javascript" src="').concat(Ce, '">\x3c/script>')); document.getElementById(Ah) || Se(Ce, jb("async"), void 0, void 0, "dtjsagent"); } } ra(z()) &&
                                        ic("cooO", !0); Zf(); ic("pVO", !!Ub("dt-pVO")); Ic($c); sg = 18E5; tg = rc("hvt") || 216E5; lc(ze, [1]);
                    } catch (wh) { "platformPrefix and cuc do not match!" === wh.message ? (Cd = fa.dT_, fa.dT_ = (f = {}, f.minAgentVersion = Cd.minAgentVersion, f.platformPrefix = Cd.platformPrefix, f.platformCookieOffset = Cd.platformCookieOffset, f), kf("[CookiePrefix/initCode] cuc and platformPrefix do not match, disabling agent!")) : (delete fa.dT_, kf("JsAgent initCode initialization failed!", wh)); }
            }
        })();
})();
(function () {
    function Ha() { Ha = Object.assign || function (a) { for (var b, g = 1, k = arguments.length; g < k; g++) { b = arguments[g]; for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (a[p] = b[p]); } return a; }; return Ha.apply(this, arguments); } function bb() { return "10271230629152232"; } function nb(a, b, g) { if (g || 2 === arguments.length) for (var k = 0, p = b.length, B; k < p; k++)!B && k in b || (B || (B = Array.prototype.slice.call(b, 0, k)), B[k] = b[k]); return a.concat(B || Array.prototype.slice.call(b)); } function ab(a) {
        var b; return function () {
            var g, k; if (b) return b;
            var p = null === (k = null === (g = Cl.dT_) || void 0 === g ? void 0 : g.gCP) || void 0 === k ? void 0 : k.call(g); return b = g = p ? "".concat(p, "_").concat(a) : a;
        };
    } function Ra() { document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax"); var a = -1 !== document.cookie.indexOf("__dTCookie"); document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT"); return a; } function ya(a) {
        for (var b = [], g = 1; g < arguments.length; g++)b[g - 1] = arguments[g]; return ii ? ii(a, b) : ji ? ji(function () {
            return a.apply(this,
                b);
        }) : a.apply(this, b);
    } function Ca(a, b, g) { return a.splice(b, (g || b) - b + 1 || a.length); } function Ia() { return Yc; } function na() { return ib.dT_; } function Pa() { return dd; } function fb() { var a = document.location; return a ? 0 !== a.href.indexOf("http") : !0; } function ra() {
        var a = navigator.userAgent || navigator.vendor || ib.opera && ib.opera.version() || ""; return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substring(0,
                4));
    } function ka() { return "1" === navigator.doNotTrack || "yes" === navigator.doNotTrack || "1" === navigator.msDoNotTrack || "1" === ib.doNotTrack; } function Na() { return /(gomezagent|googlebot|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|ia_archiver)/i.test(navigator.userAgent); } function sa() { return Ef; } function Sa() { return Ff; } function Ga(a) { return a ? Qh ? Qh.call(a) : a.replace(/^\s+|\s+$/g, "") : ""; } function L(a) {
        try {
            var b = a.tagUrn; return b && -1 !==
                vb(b, "schemas-microsoft-com:vml");
        } catch (g) { return !0; }
    } function ma(a) { if (!a || -1 === a.indexOf("://")) return ""; a = a.split("/")[2].split(":")[0].toLowerCase(); a: { var b = 0; for (var g = pk; b < g.length; b++)if (0 <= a.indexOf(g[b])) { b = !0; break a; } b = !1; } return b ? "" : a; } function va(a) { var b = 0; if (a) for (var g = a.length, k = 0; k < g; k++)b = 31 * b + a.charCodeAt(k), b &= b; return b; } function Xa(a, b, g) { ii(cb, [a, b, g]); } function cb(a, b, g) { try { ib.sessionStorage.setItem(a, b + ""); } catch (k) { g || Id(a, b + "", void 0, Bb("ssc")); } } function ba(a, b, g) {
        void 0 ===
            g && (g = !0); var k = !0; try { ib.localStorage[a] = b; } catch (p) { k = !1, g && Id(a, b, void 0, Bb("ssc")); } return k;
    } function Ka(a, b) { try { return ib.sessionStorage[a] || ""; } catch (g) { } return b ? "" : yg(a); } function Da(a) { var b = []; if (a) for (var g = 0; g < a.length; g++) { var k = a.charAt(g), p = Qd[k]; p ? Jb(b, p) : Jb(b, k); } return b.join(""); } function xa(a) { if (!a) return ""; for (var b = "", g = 0; g < a.length; g++) { var k = Rh[a.charAt(g) + a.charAt(g + 1)]; k ? (b += k, g++) : b += a.charAt(g); } return b; } function N(a) {
        return a ? xa(a).replace(/_5F/g, "_").replace(/_25/g, "%").replace(/_7C/g,
            "|") : "";
    } function P(a) { if (!a) return ""; a = a.replace(/_/g, "_5F").replace(/%/g, "_25").replace(/\|/g, "_7C"); return Da(a); } function Ua(a) { var b = [], g = ""; "string" === typeof a ? g = a : "object" === typeof a && a && (g = a.toString()); a = Pc("spc") + "\t\n\r"; for (var k = 0; k < g.length; k++) { var p = g.charAt(k); -1 === vb(a, p) && Jb(b, p); } return b.join(""); } function O() { var a = ib.location; return a ? X(a.href) : "-"; } function X(a) { var b = vb(a, "#"); return 0 <= b ? a.substring(0, b) : a; } function U(a, b, g, k, p) { return oa(a, b, g, k, !1, p); } function oa(a, b, g, k, p, B) {
        void 0 ===
            B && (B = "win"); try { var H = zg[B] || {}; H[b] = a[b]; zg[B] = H; Object.defineProperty(a, b, { get: g || function () { return H[b]; }, set: function (V) { H[b] = V; k && (V || p) && k.apply(a, [V]); }, configurable: !0 }); return !0; } catch (V) { } return !1;
    } function ea(a, b, g, k) { if (k = k || a[b]) { var p = g || "win"; try { delete a[b] && (a[b] = k, zg[p] && (zg[p][b] = null)); } catch (B) { try { Object.defineProperty(a, b, { get: function () { return zg[p] && zg[p][b]; }, configurable: !0 }); } catch (H) { } } } } function R(a) { Id("dtUseDebugAgent", a, void 0, Bb("ssc")); } function Ea(a) {
        Id("dt_dbg_console",
            a, void 0, Bb("ssc"));
    } function eb(a) { void 0 === a && (a = "TRACE"); Id("dt_dbg_logfilter", "level=".concat(a, "|featureHash=|fileName="), void 0, Bb("ssc")); } function gb(a) { var b = a.match(/:(\d+)/); return b ? b[1] : 0 === vb(a, "https") ? "443" : "80"; } function Yb(a) {
        if (!a) return !1; a = Ga(a).toLowerCase(); 0 === a.indexOf("//") && (a = location.protocol + a); var b = 0 === vb(location.href, "http"); if (0 !== vb(a, "http") || !b) return !1; if (vb(location.href, location.host) !== vb(a, location.host.toLowerCase())) return !0; b = location.port || gb(location.href);
        return gb(a) !== b;
    } function Hb(a) { try { var b = document.createElement("a"); b.href = a; return b.href; } catch (g) { return a; } } function Ib() { try { return dd.ie || dd.edge ? encodeURI(ib.location.href) : ib.location.href; } catch (a) { } return ""; } function yc(a) {
        if (!a) return ""; try { var b = void 0, g = Hb(a); if (!ib.location) return g; var k = ib.location, p = k.origin; if (!p) { if (!k.protocol || !k.host) return g; p = k.protocol + "//" + k.host; } var B = b = g.substring(0, p.length + 1).toLowerCase() === (p + "/").toLowerCase() ? g.substring(p.length) : g; } catch (H) {
            B = a, 0 ===
                vb(a, "?") && (B = ib.location.pathname + a);
        } return Wb(B, 500);
    } function Wb(a, b, g, k) { void 0 === b && (b = 100); void 0 === g && (g = !1); void 0 === k && (k = "..."); return !a || a.length <= b ? a : g ? k + a.substring(Math.max(0, a.length - b + k.length)) : a.substring(0, Math.max(0, b - k.length)) + k; } function hb(a) { var b = Xb("sl"); return Wb(a, b); } function jc(a, b, g, k) { if (g) if (g = Wb(g, Xb("mhl")), a[k].set) { var p = a[k].set(b, g); p && p.get && p.get(b) === g && (a[k] = p); } else a[k][b] = g; } function pb(a) { return a ? a.split("?")[0] : ""; } function wc() {
        var a = Ag(); if (a) {
            var b = vb(a,
                "-"); a = -1 === b ? "" : a.substring(0, b); if (a) { b = ""; for (var g = 0; g + 1 < a.length; g += 2)b += a.charCodeAt(g) + a.charCodeAt(g + 1) + ""; a = Math.floor(Math.abs(1E7 * Math.sin(parseInt(b)))); } else a = 0;
        } else a = !1; return a;
    } function wb() { var a = Bh(); return 3 === a ? !0 : 4 === a ? !1 : !!Xb("rdnt") && ka(); } function Eb(a, b, g) {
        if (!a || !b) return []; for (var k = [], p = 0; p < a.length; p += b) {
            if (p + b <= a.length) {
                var B = a.slice(p, p + b); "%" === B.charAt(B.length - 1) && a.length >= p + b + 1 && (B += a.charAt(p + b), B += a.charAt(p + b + 1), p += 2); "%" === B.charAt(B.length - 2) && a.length >= p +
                    b + 2 && (B += a.charAt(p + b), p += 1);
            } else B = a.slice(p); k.push(B);
        } if (g) for (a = k.length, b = 0; b < a; b++)k[b] = g.replace(/#index#/, b + 1 + "").replace(/#total#/, a + "") + k[b]; return k;
    } function lc(a) { return !1 === a ? 0 : "number" === typeof a ? 2 : 1; } function oc(a, b) {
        void 0 === b && (b = Xb("rtu")); if (!a) return ""; var g = Xb("rtp"); if (!g || a.length > b && 2 === g) a = pb(a); var k = P(a); if (k.length > b) {
            g = P(ma(a)); a = a.split("/"); a = a[a.length - 1]; var p = P(a); if (p !== g) {
                if (k = g + "/../" + p, b = k.length - b, 0 < b) if (p.length > b) {
                    b = Math.max(p.length - (b + 2), 0); k = Math.max(a.length -
                        b, 0); for (p = P(a.substring(k, a.length)); p.length > b;)k += Math.ceil((p.length - b) / 3), p = P(a.substring(k, a.length)); k = g + "/../.." + p;
                } else k = Wb(g, b, !1, ".../") + p;
            } else k = Wb(k, b, !0);
        } return k;
    } function ub(a, b) { return Object.prototype.hasOwnProperty.call(a, b); } function qc(a, b) { var g = 1E3 * Xb("oat"); return (null !== b && void 0 !== b ? b : pe()) + g >= a ? a : -2; } function $b() { return na().disabled && !na().syn; } function hc() { na().syn || (Xa("dtDisabled", !0), na().disabled = !0); } function sb(a, b) { return yg(a, b) || jh(a) || ""; } function F(a) {
        if (Object.keys) return Object.keys(a);
        var b = []; if (a === Object(a)) for (var g in a) ub(a, g) && b.push(g); return b;
    } function q(a, b) { a = dc[a]; -1 < Ke(a, b) || Jb(a, b); } function A(a, b) { a = dc[a]; b = Ke(a, b); -1 !== b && Ca(a, b); } function C(a) { for (var b = [], g = 0, k = dc[a.kind].slice(); g < k.length; g++) { var p = (0, k[g])(a); p && (Array.isArray(p) ? b = b.concat(p) : Jb(b, p)); } return b; } function K() {
        var a = Yc, b = bb(); a !== b && q("DEBUG_INFO_REQUESTED", function () {
            return {
                type: "miav", severity: "Warning", text: "Snippet version(".concat(a, ") does not match the version of the monitoring code(").concat(b,
                    "). Consider updating your code snippet for best compatibility.")
            };
        }); q("DEBUG_INFO_REQUESTED", function () { return { type: "v", severity: "Info", text: "Snippet version: ".concat(a, " ; Monitoring code:").concat(bb()) }; });
    } function E(a, b) { void 0 === b && (b = []); var g = ib.dT_; g = (null === g || void 0 === g ? 0 : g.iIO) ? g.iIO : null; return !(null === g || void 0 === g || !g(a, b)); } function ca() { } function Q(a) { return (E(a, 9) || ja(a)) && ("string" === typeof a.textContent || "string" === typeof a.innerText); } function ja(a) { return a && a.nodeType && 1 === a.nodeType; }
    function ha(a) { return a && "INPUT" === a.nodeName; } function za(a) { return a && "SCRIPT" === a.nodeName; } function $a(a) { return "function" === typeof a && /{\s+\[native code]/.test(Function.prototype.toString.call(a)); } function zb() { return Le; } function jb() { return Jd; } function rc() { return Dc; } function Gb() { return Rd; } function ic(a, b) { a ? a.id === a.Ha() && (ki = a) : ki = b ? null : ki; } function Zb() { for (var a = me.za.length - 1; 0 <= a; a--) { var b = me.za[a]; if (b.Hc() && !b.Ja || b.Ja && b.lg()) return b; } return null; } function bc(a) { return me.actions[a]; }
    function xc(a, b, g, k, p, B) { void 0 === p && (p = !1); void 0 === B && (B = !1); if (p) Mb(a, b, g, k, B); else { try { for (p = 0; p < a.length; p++)b.call(g, a[p], p, a, function () { }); } catch (V) { var H = V; } if (k) H ? k.call(g, a, H) : k.call(g, a); else if (H) throw H; } } function Rb(a, b, g, k, p) { void 0 === k && (k = !1); void 0 === p && (p = !1); return new Sh(function (B, H) { xc(a, b, g, function (V, ia) { ia ? H(ia) : B(V); }, k, p); }); } function Mb(a, b, g, k, p) {
        function B(Db) { ob = Db; Sb(function () { H(Db, ia); }); } function H(Db, Qb) {
            if (!Wa) {
                try {
                    4 > b.length && Va++; var nc = b.call(g, Qb[Db], Db, Qb, function () {
                        function hd(Dd) {
                            ob =
                                Dd; Sb(function () { H(Dd, ia); });
                        } Va++; Va === Qb.length && V(); for (var qe = ob + 1; qe < Qb.length; qe++)hd(qe);
                    });
                } catch (hd) { var Tc = hd; nc = !1; } Db = function (hd) { ob = hd; Sb(function () { H(hd, ia); }); }; for (var Uc = ob + 1; Uc < Qb.length; Uc++)Db(Uc); (!1 === nc || Tc) && V(Tc); Va !== Qb.length || Wa || V();
            }
        } function V(Db) { k && !Wa && (k.apply(g, Db ? [ia, Db] : [ia]), Wa = !0); } void 0 === p && (p = !1); var ia = p ? a : Array.prototype.slice.call(a), Va = 0, Wa = !1, ob = 0; for (a = 0; a < ia.length; a++)B(a); Va === ia.length && Sb(V);
    } function Sb(a) {
        pf || (pf = !0, Kb(function () {
            pf = !1; var b = li; li = [];
            for (var g = ac(), k = 0; k < b.length && 35 > ac() - g;)b[k](), k++; for (g = k; g < b.length; g++)Sb(b[g]);
        }, 0)); li.push(a);
    } function tb(a, b) { if ($a(Array.prototype.filter)) return Array.prototype.filter.call(a, b); for (var g = [], k = 0; k < a.length; k++) { var p = a[k]; b(p, k, a) && g.push(p); } return g; } function Pb(a, b, g, k) { void 0 === k && (k = !1); return g ? new Sh(function (p, B) { var H = []; xc(a, function (V, ia) { b(V, ia, a) && H.push(V); }, null, function (V, ia) { ia ? B(H) : p(H); }, g, k); }) : Sh.resolve(tb(a, b)); } function Zc() { return Bg; } function Fd(a) {
        a = Da(a); -1 === Ke(mi,
            a) && Jb(mi, a);
    } function vc(a) { return -1 !== Ke(mi, a); } function cd() { var a = na(); try { for (var b = Gf; b && b !== ib;) { var g = b.dT_; if (g && "ea" in g && g.version === bb()) return g.tdto(); g && "ea" in g && (Hf[g.version] = 1); b = b !== b.parent ? b.parent : void 0; } } catch (k) { } return a; } function sd() { return !lg; } function Ba(a, b, g, k) { b = tb(F(Hf), I); If.push.apply(If, b); 0 < b.length && (b.unshift(bb()), a.av(k, "afv", b.join(","))); Hf = {}; } function I(a) { return 0 > Ke(If, a); } function la() {
        Hf = {}; try {
            if (Gf && Gf !== ib) {
                var a = Gf.dT_; if (a) {
                    var b = a.version; b === bb() ?
                        (bf = a, lg = bf.tdto()) : Hf[b] = 1;
                }
            }
        } catch (g) { } cf(Ba); a = na(); lg ? (Bg = lg.pageId, a.Fe = lg.Fe, kh = bf.gFId(), bf.pi++) : (Bg = Me(), a.Fe = document.title); a.pageId = Bg; q("DEBUG_INFO_REQUESTED", function () { cd(); var g = F(Hf); return 0 === g.length ? null : { severity: "Error", text: "Version of current agent ".concat(bb(), " mismatches with version").concat(1 < g.length ? "s" : "", " ").concat(g.join(", "), " of parent frames. Make sure to use the same version on all frames to secure compatibility!"), type: "mpv" }; });
    } function ta() {
        var a = cd(); if (a ===
            na() || !a.gITAID) return Jf++; a = a.gITAID(); Jf = a + 1; return a;
    } function wa(a) { return (a = bc(a)) && a.$a ? a : null; } function Fa(a) { return (a = "number" === typeof a ? wa(a) : a) ? a.Ya() : ""; } function Oa(a, b, g) { var k = Rd; g && (k = bc(g)); if (!k) return !1; k.Af(a, b); return !0; } function pa() { var a = Sg(!0); if (0 < a.length) { for (var b = [], g = 0; g < a.length; g++) { var k = a[g]; k.frameId !== Me() && Jb(b, k); } xj(b); } } function Ja(a) {
        if (!a) return ""; var b = Me() + "h" + a, g = document.cookie, k = yg(yj(), g); return Bb("dASXH") && k && 0 <= vb(k, b) && !fb() ? "" : ni() + "$" + Me() + "h" + a + "v" +
            Ag(g) + "e0";
    } function db(a) { for (var b = Tg.length - 1; 0 <= b; b--)if (Tg[b] === a) { Ca(Tg, b); break; } } function Za(a) { if (0 < Cg || a && 0 < Tg.length) if (a = Tg.length, 0 < a) return Tg[a - 1]; return 0; } function mb(a) { return a && 1 === a.length ? -1 !== vb(Pc("featureHash"), a) : !1; } function mc(a, b, g, k) { void 0 === k && (k = Tb(a)); var p = ib.dT_, B = !!na().syn; b = b || !B; a = B && -1 === vb(p.iMod(), a); return b && g && (k || a); } function Tb(a) {
        var b = ib.dT_; if (b.ism(a) && -1 === vb(b.iMod(), a)) return b.iMod(a), !0; b.ism(a) && (a = 'Module "' + a + '" already enabled!', na().gCP || ib.console.log("WARNING: " +
            a)); return !1;
    } function yb(a) { var b = qf.initializedModules || ""; a && (b += a); return qf.initializedModules = b; } function Ub(a, b) { void 0 === b && (b = bb()); var g = Pc("agentUri"); g = g.substring(0, g.lastIndexOf("/")); var k = Pc("csu"); "true" === df("dtUseDebugAgent") && ib.dT_debugger && 0 > k.indexOf("dbg") && (k = Pc("debugName") || k + "dbg"); return "".concat(g, "/").concat(k, "_").concat(a, "_").concat(b, ".js"); } function Ic(a) { return qf[a]; } function Fc(a, b) { qf[a] = b + ""; } function Bc(a, b, g, k) {
        function p() { } function B() { } var H = a.path, V = a.lb,
            ia = a.async, Va = ac(); k && (B = function () {
                return function (Wa) {
                    if (Kf) for (var ob = 0, Db = Kf(); ob < Db.length; ob++)(0, Db[ob])(b, "success", Wa); ac(); ob = Wa && Wa.split("|"); for (Db = 1; Db < ob.length; Db++) {
                        var Qb = ob[Db].split("="); if (Qb[0] === xb() || "sn" === Qb[0]) { if (Qb = decodeURIComponent(Qb[1]), Th(Qb)) { lh(Qb); Qb = xb(); try { ib.sessionStorage.removeItem(Qb); } catch (qk) { } } } else if ("name" === Qb[0]) {
                            Qb = void 0; var nc = Wa; if (ib.localStorage) try {
                                var Tc = Oi(), Uc = ib.localStorage.getItem(Tc), hd = Pc("cuc"), qe = 0; if (Uc) {
                                    var Dd = oi(Uc), mh = Pi(Dd.config ||
                                        "", Dd); Dd.name && (mh.csu = Dd.name); qe = Cc(mh.lastModification || "0");
                                } var Qi = oi(nc), Lf = Pi(Qi.config || ""); if (!hd || !Lf.cuc || hd === Lf.cuc) { Lf.csu = Qi.name || Pc("csu"); var zj = Cc(Lf.lastModification || "0"); zj > qe && (ib.localStorage.setItem(Tc, nc), Aj(Lf), sc(Lf, !0), Ri(Lf), nh(Lf), zj > +(qf.lastModification || 0) && (qf = ee(Lf), C((Qb = {}, Qb.kind = "CONFIG_UPDATE", Qb.detail = qf, Qb)))); }
                            } catch (qk) { }
                        } else "enabled" === Qb[0] && "false" === Qb[1] && hc();
                    }
                };
            }(Va), p = function (Wa) {
                if (Kf) for (var ob = 0, Db = Kf(); ob < Db.length; ob++)(0, Db[ob])(b, "fail",
                    Wa); Uh++; if (dd.sf || dd.msf || dd.ff) { if (oh.length) for (Wa = ac(), ob = 0; ob < oh.length; ob++)oh[ob].time < Wa && oh.splice(ob--); Jb(oh, { path: H, data: V, time: ac() }); } if (!bg) try { if (ib.localStorage) { var Qb = Oi(); ib.localStorage.removeItem(Qb); } } catch (nc) { }
            }); g.onreadystatechange = od(b, B, p, a); ia && "timeout" in g && "ontimeout" in g && (a = Xb("xt")) && (g.timeout = a, g.ontimeout = Fe(a));
    } function od(a, b, g, k) {
        return function () {
            var p = k.Fd, B = k.Gd; if (4 === this.readyState) try {
                if (200 === this.status) b(this.responseText); else if (429 === this.status) {
                    for (var H =
                        0, V = Dc; H < V.length; H++)V[H].Oc(); hc(); g(this.status, this.responseText);
                } else g(this.status, this.responseText);
            } catch (ia) { g(0); } if (a) try { a.Zg(this.readyState, this.status, p, B); } catch (ia) { }
        };
    } function Fe() { return function () { try { this.abort(); } catch (a) { } }; } function Ud(a, b) {
        void 0 === b && (b = !0); for (var g = a.path, k = a.lb, p = a.cb, B = a.async, H = a.beacon, V = a.Gg, ia = 3, Va = !1; 0 < ia;)try {
            var Wa = void 0, ob = Bb("cors"); if (ob) { var Db = Vh(); var Qb = "withCredentials" in Db ? Db : null; } else Qb = Vh(); Wa = Qb; if (!Wa) return !1; Wa.open("POST", g, B); Wa.setRequestHeader("Content-Type",
                V ? "application/octet-stream" : "text/plain;charset=UTF-8"); p && p !== Ib() && !ob && Wa.setRequestHeader("x-dtreferer", Wb(p, Xb("mhl"))); H && Bc(a, H, Wa, b); Wa.send(k); ia = 0; Va = !0;
        } catch (nc) { ia--; } return Va;
    } function td(a) { return Ha({ path: "", cb: "", lb: "", Fd: 0, Gd: 1, async: !1 }, a); } function Md(a, b) { var g = !1; a.Id && (g = !Nc(a.path, a.lb)); if (!a.Id || g) a = Ud(a, !0), b = b && a; return b; } function Nc(a, b) { try { var g = navigator.sendBeacon(a, b || ""); } catch (k) { g = "Error sending signal via sendBeacon: " + k + ": " + a; } g || ++Uh; return g; } function gd(a, b) {
        void 0 ===
            b && (b = !1); var g = ["i".concat(a.id), "k".concat(a.kind), "h".concat(+a.hydrated)]; b && g.push("t".concat(+a.trigger)); return g.join(";");
    } function zc(a) { if (a) for (var b = Dg("LABEL"), g = Eg(b), k = 0; k < g; k++) { var p = b[k]; if (p && "LABEL" === p.nodeName && p.htmlFor === a) return kd(p.innerText, p.textContent); } return ""; } function kd() { for (var a = [], b = 0; b < arguments.length; b++)a[b] = arguments[b]; for (b = 0; b < a.length; b++) { var g = a[b]; if ("string" === typeof g && (g = Ga(g))) return g; } return ""; } function Hd(a) {
        if (a) {
            if (0 === vb(a, "data:")) return "";
            a = a.split("/"); if (0 < a.length) return a[a.length - 1].split(".")[0];
        } return "";
    } function Vd(a) { if (a && a.split) { var b = a.split("/"); if (0 < b.length && (b = Ga(b[b.length - 1]), null !== b)) return b; } return a || ""; } function ud(a) { return Q(a) ? a.innerText || a.textContent : a.textContent; } function ze(a, b) {
        var g = b.nodeName ? b.nodeName.toUpperCase() : "unknown", k = ja(b) ? b.getAttribute("type") : ""; k = "string" === typeof k ? k.toUpperCase() : ""; var p = ""; switch (a) {
            case 0: ja(b) ? (g = "", ha(b) && "HIDDEN" !== k && (g = !k || "BUTTON" !== k && "SUBMIT" !== k && "RESET" !==
                k && "IMAGE" !== k ? null : b.value, a = zc(b.id), g = !k || "BUTTON" !== k && "SUBMIT" !== k && "RESET" !== k ? kd(a, g) : kd(g, a)), g || (g = kd(ud(b))), p = g) : p = ""; break; case 1: g = ""; if (ha(b) && "HIDDEN" !== k || b && "BUTTON" === b.nodeName) k = "IMAGE" === k ? b.getAttribute("alt") : null, g = kd(b.name, b.title, k); p = g; break; case 3: ja(b) ? (b = b.className, p = E(b, ["baseVal", "animVal"]) ? b.baseVal || b.animVal || "" : b) : p = ""; break; case 4: b = ""; "INPUT" === g && "HIDDEN" !== k ? b = "INPUT: " + k : "A" === g ? b = "LINK" : "-" === ph && (ph = b = g); p = b; break; case 2: g = "", ha(b) && "IMAGE" === k ? g = Hd(b.src) :
                    b && "A" === b.nodeName ? g = kd(b.title, Vd(b.href)) : b && "IMG" === b.nodeName ? g = kd(b.name, b.title, b.alt, Hd(b.src)) : b && "FORM" === b.nodeName && (g = kd(b.name, b.id, b.action)), g || (g = kd(b.title, b.data, b.wholeText, b.id)), p = g;
        }return p;
    } function ye(a) { if (!a) return ""; try { if (dd.ie && L(a)) return "VML Node"; var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown"; if ("HTML" === b || "BODY" === b || "HEAD" === b || "#DOCUMENT" === b) return ph; for (b = 0; 4 >= b; b++) { var g = ze(b, a); if (g && g !== ph) return g; } return ye(a.parentNode); } catch (k) { } return ""; } function zd(a,
        b) { if (!b) return ""; var g = Eg(b); if (0 >= g || 20 < Ug) return ""; for (var k = 0; k < g; k++) { var p = b[k]; if (dd.ie && L(p)) return "VML Node"; var B; Ug++; if (B = zd(a, p.childNodes)) return B; Ug--; if (B = ze(a, p)) return B; } return ""; } function Oc(a) {
            try {
                var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown"; if ("HTML" === b || "BODY" === b || "HEAD" === b || "#DOCUMENT" === b) return "Page: " + Kd; if (a && "SELECT" === a.nodeName) {
                    var g = a.nodeName ? a.nodeName.toUpperCase() : null, k = zc(a.id), p = kd(k, a.name, g), B = null; if (!a.multiple) {
                        var H = a.options && -1 < a.selectedIndex ?
                            a.options[a.selectedIndex] : null; H && (B = kd(H.label, H.innerText, H.textContent));
                    } return B ? "[" + p + "] to value [" + B + "]" : p;
                } if (a && "TEXTAREA" === a.nodeName) { var V = a.nodeName ? a.nodeName.toUpperCase() : null, ia = zc(a.id); return kd(ia, a.name, V) || a.nodeName; } var Va = kd(ud(a)); if (Va) return Va; Ug = 0; if (a.childNodes && 0 < Eg(a.childNodes)) { a: { for (p = 0; 4 >= p; p++) { var Wa = zd(p, [a]); if (Wa) { B = Wa; break a; } } B = ""; } return B; }
            } catch (ob) { } return ye(a);
        } function be() { Bj = Pc("uana").split(","); pi = Xb("uanpi") || 0; } function pd() { return t; } function Ad(a) {
            3 ===
                a && (m = []); t = a;
        } function n() { return d; } function x(a) { var b = tb(W, function (g) { return g.timestamp <= a; }); return b[b.length - 1] || null; } function y(a) { Array.isArray(a) ? m.push.apply(m, a) : m.push(a); } function J(a) { var b = Qa; try { for (; b;) { var g; if (g = a.target && "string" !== typeof a.target && a.target !== b.target && "string" !== typeof b.target) a: { try { for (var k = a.target.parentNode; k;) { if (k === b.target) { g = !0; break a; } k = k.parentNode; } } catch (p) { } g = !1; } g && (a = b); b = b.next; } } catch (p) { } Qa = a; } function M(a) {
            var b, g = a.ah, k = a.url, p = a.title, B = a.view;
            return b = { id: a.id, target: a.target, name: "", type: a.type, next: void 0, Ab: void 0, info: a.zf || "-", start: ac(), $b: !1, af: ac() + (g || 30), url: k || Ib(), title: p || document.title, Y: "" }, b.view = B, b.Mb = function () {
                if (!this.name) {
                    if (Bb("uam")) var H = { Y: "dTMasked_" + (Q(this.target) ? this.target.nodeName : "") }; else {
                        var V = this.target || ""; ph = "-"; if (dd.ie && L(V)) H = { Y: "VML Node" }; else if ("string" === typeof V) H = { Y: V }; else if (ja(V)) {
                            H = Oc(V) || ph; a: {
                                try {
                                    for (var ia = 0; ia <= pi; ia++) {
                                        for (var Va = 0, Wa = Bj; Va < Wa.length; Va++) {
                                            var ob = V.getAttribute(Wa[Va]);
                                            if (ob) { var Db = ob; break a; }
                                        } if (V.parentElement) V = V.parentElement; else break;
                                    }
                                } catch (Qb) { } Db = "";
                            } H = { Y: H, Kb: Db };
                        } else H = { Y: ph };
                    } H.Y = hb(Ua(H.Y)); H.Kb = hb(Ua(H.Kb)); this.name = H.Kb || H.Y; H.Kb && (this.Y = H.Y);
                } return this.name;
            }, b.Mi = function () { return this.$b; }, b.Kg = function () { var H = this; do H.$b = !0, H = H.next; while (H); }, b;
        } function Y(a, b, g, k, p, B, H) {
            void 0 === H && (H = d); if (vd(xd)) return xd.bi(a, b, g, k, p, B, H); var V = M({ id: Ab++, target: a, type: b, zf: g, ah: k, url: p, title: B, view: H }); try {
                return Wc && (V.next = Qa, V.next && (V.next.Ab = V), J(V)),
                    V;
            } finally { Kb(function () { tc(V); }, V.af - ac()); }
        } function da() { return vd(xd) ? xd.gci() : Qa; } function qa() { return vd(xd) ? xd.gpi() : Ya; } function Ma(a, b) { if (vd(xd)) return xd.cii(a, b); b = b ? qa() : da(); if (!b) return aa[a]; switch (a) { case "name": return b.Mb(); case "type": return b.type; case "validUntil": return b.af; case "start": return b.start; case "target": return b.target; case "url": return b.url; case "title": return b.title; default: return null; } } function Ta(a) { return Ma(a, !0); } function qb(a, b) {
            return {
                timeout: a, url: Ma("url",
                    b), name: Ma("name", b), startTime: Ma("start", b), type: Ma("type", b) || "-", title: Ma("title", b)
            };
        } function Cb() { for (var a = Qa; a;)a.target = void 0, a = a.next; Qa = void 0; } function tc(a) { if (vd(xd)) xd.ei(a); else if (Qa) { for (var b = Qa; b.next && b !== a;)b = b.next; b === a && (Ma("name") && (Ya = Qa), b.target = void 0, b.Ab && (b.Ab.next = b.next), b.next && (b.next.Ab = b.Ab), b === Qa && (Qa = b.next)); } } function fc(a) { void 0 === a && (a = ""); return a ? -1 !== Ke(Pc("doNotDetect") ? Pc("doNotDetect").split(",") : [], a) : !1; } function Jc(a, b, g) {
            if (!fc(g)) {
                var k = b ? b : a;
                rf[a] = function (p) {
                    var B, H; C((B = {}, B.kind = "GLOBAL_EVENT_FIRED", B.detail = (H = {}, H.t = a, H.e = p, H), B)); B = Bb("ote"); H = Bb("ase"); var V = "boolean" !== typeof p.isTrusted || p.isTrusted, ia = p.isRuxitSynthetic; if (H ? ia : !B || V) {
                        (B = p.target || p.currentTarget || p.srcElement || null) && B.shadowRoot && p.composed && p.bubbles && "function" === typeof p.composedPath && (H = p.composedPath()) && H.length && (B = H[0]); a: {
                            H = B; if (("KD" === k || "KU" === k) && ha(H) && "password" !== H.type) if (p = p.keyCode || p.charCode || p.code, H = +p, Bb("uam") && !isNaN(H)) {
                                if (H = String.fromCharCode(H),
                                    !("a" <= H && "z" >= H || "A" <= H && "Z" >= H || "0" <= H && "9" >= H)) { p += ""; break a; }
                            } else { p += ""; break a; } p = "";
                        } Y(B, k + p, void 0, 30);
                    }
                }; Mf(document, a, rf[a]);
            }
        } function $c(a) { (Wc = a) || Cb(); } function vd(a) { return !!a && a !== na(); } function qd(a) { Nf = a; } function ad(a, b) { var g; if (b <= Nf) return !1; b = null === (g = Rd) || void 0 === g ? void 0 : g.Ob(); g = !!b && a === b.name; b = ki; if (!b) return !g; a = a === b.name && (!b.B || 3E3 >= ac() - b.start); return !g && !a; } function jf(a, b) {
            if (!Bb("dsa") || 0 !== vb(a, "false")) {
                var g = Bb("dssv"), k = Bb("dsss"), p = k && !g, B = g && !k, H = !g && !k, V = b ? a +
                    "|" + b : a; k && g && Xa("dtSa", V); p && (Xa("dtSa", a), Id("dtSa", Vg(b || "-"), void 0, Bb("ssc"))); B && (Xa("dtSa", b || "-"), Id("dtSa", Vg(a), void 0, Bb("ssc"))); H && Id("dtSa", Vg(V), void 0, Bb("ssc"));
            }
        } function Se() { var a = null, b = id[0]; if (b) { b.Ba(0); b.Xd(); a = b; for (var g = 0; g < b.subActions.length; g++)a = b.subActions[g], a.Ba(0), a.Xd(); } return a; } function Te(a, b, g, k, p, B) {
            void 0 === a && (a = ac()); var H = Za(!0), V = Rd || Se(), ia = []; if (!H && b && g && a) ia = [!p + "", Da(g), p || "-1", Da(b), Da(k || "-"), a, Me(), P(O()), "", "", Da(location.hash.substring(1)), Da(B ||
                "")]; else if (V) { V.Ib(); var Va = V.status; V.status = 2; Kb(function () { V.status = Va; }, 0); ia = ["false", Da(V.type), V.id, Da(V.name), Da(V.info || "-"), V.start, Me(), P(O()), "", "", Da(location.hash.substring(1)), Da(V.Y || "")]; } return ia;
        } function Yf(a, b, g) {
            void 0 === b && (b = null); if (!na().gCP) {
                var k = !1, p = cd(); try { k = p.iSAC(); } catch (H) { } if (!k || p === na()) {
                    a && (jf("-"), Of = []); k = da(); if (!k) { var B = qa(); B && ad(Ta("name"), Ta("start")) && 3E3 >= ac() - Ta("validUntil") && (k = B); } B = []; k && !k.$b ? (k.Kg(), B = Te(k.start, k.Mb(), k.type, k.info, k.D, k.Y)) :
                        b ? B = Te(b.start, b.name, b.type, b.info, b.id, b.Y) : a && (B = Te(g)); a = B; g = Of; 1 < g.length && 1 < a.length && g[3] === a[3] && (g[2] = a[2], g[0] = a[0], a = g); a.length && (g = d, b = g.timestamp, k = g.group, g = [P(g.name), b, P(k || ""), Da(gd(g, !0))], jf(a.join("|"), g.join("|")), Of = a.concat(g), (p = p.sSAC) && p(!0, !0));
                }
            }
        } function Ve(a, b) { return Cj("mcepsl") ? oc(b) : oc(b, Xb("mcepsl")); } function dh(a, b, g, k) {
            var p; void 0 === g && (g = !1); return "tvn" === a || "svn" === a || "tvg" === a || "svg" === a ? b : b && b.length > k ? (g && (null === (p = ib.console) || void 0 === p ? void 0 : p.log("Truncating agent event because the size for property [".concat(a,
                "] exceeds size limit of ").concat(k, " characters: [").concat(b.length, "]"))), Wb(b, k, "lcpSel" === a)) : b;
        } function Zf(a, b) { for (var g = Xb("mcepsl"), k = [], p = 0; p < b.length; p++) { var B = b[p], H = B[0], V = B[1]; B = H; if (0 !== t) { var ia = d, Va = ia.name, Wa = ia.group; ia = ia.timestamp; V = Va && V === Va && "tvn" === B || Wa && V === Wa && ("tvg" === B || "svg" === B) || ia && V === ia + "" && "tvt" === B ? "" : V; } B = dh; Va = im[a]; "function" === typeof Va && (B = Va); "object" === typeof Va && Va[H] && (B = Va[H]); Va = Wb(H, g); (H = B(H, V, !1, Xb("mcepsl"))) && Va && k.push([Va, H]); } return k; } function kf(a,
            b) { void 0 === b && (b = 1); var g = [b + "", a.id + "", "_event_", a.timestamp + "", a.kind + ""]; a = Zf(a.kind, a.Wb); xc(a, function (k) { var p = k[1]; Jb(g, Da(k[0])); Jb(g, Da(p)); }); return g.join("|"); } function eh(a, b, g) {
                for (var k, p, B = "", H = "", V = 0; V < a.length; V++) {
                    var ia = a[V]; ia.ye(); var Va = ia.xc(); ia.Pc(g); B || (B = ia.Ya()); H = ia.Ya(); if ("_load_" === ia.type && (Le = !0, k = re)) {
                        H = [k.id, k.name, k.type, k.info, k.frameId, k.startTime]; k.isDelayed ? (p = "", k.anchor && (p = "#" + k.anchor), H.unshift("d"), Jb(H, k.ya + p, "")) : H.unshift("s"); Jb(H, k.Y || ""); if (k.ta) {
                            p =
                                k.ta; var Wa = p.timestamp, ob = p.group; Jb(H, p.name); Jb(H, Wa); ob && Jb(H, ob);
                        } k = k.ya; p = H.join("|"); H = k; Jb(b, p); re = null;
                    } ia.parentFrameActionName && (k = Jb, p = ia.He, ia = [0, ia.Ge, Da(ia.parentFrameActionName), p].join("|"), k(b, ia)); Jb(b, Va);
                } return { cb: B, ya: H };
            } function fh(a, b) {
                var g, k, p = tb(id, function (ia) { return (ia.he() || a || b) && !ia.Og(); }), B = Dc; if (b) {
                    B = []; Dc = []; for (var H = 0; H < p.length; H++) {
                        var V = p[H]; C((g = {}, g.kind = 2 <= V.status ? "ACTION_BEACON_FORCED" : "ACTION_CLOSED", g.detail = (k = {}, k.a = V.start, k.s = V.stop, k.r = V.Ha(), k.i =
                            V.id, k.f = !0, k.t = V.type, k.x = V.xhrUrl, k.rt = void 0, k.xm = V.hb, k.xe = V.Sa, k.cs = V.Da, k.ce = V.Na, k["in"] = V.info, k), g));
                    } me.za = []; ic(Rd && null !== Rd ? Rd.Ob() : null); Rd = null;
                } return { Dg: p, Of: B };
            } function We(a, b) { void 0 === a && (a = !1); void 0 === b && (b = !1); var g = [], k = fh(b, a); b = k.Of; k = eh(k.Dg, g, a); a = k.cb; k = k.ya; xc(Dj, function (p) { Jb(g, kf(p)); }); id = nb([], b, !0); Dj = []; return { qc: g.join(","), referer: a, sourceUrl: k }; } function ug(a, b, g, k) { for (var p = 0, B = Ch().slice(); p < B.length; p++) { var H = B[p]; try { H(a, b, g, k); } catch (V) { } } } function Ng() { return mg; }
    function Ae(a, b, g, k, p, B, H) {
        Wg = !1; a = p || mg.Je(a, b, g); if (a.beacon) {
            g = !!g; k = !!k; b = H; var V; void 0 === B && (B = !1); void 0 === b && (b = (V = {}, V.contentType = "", V)); if ($b() || !a.beacon) a = 0; else {
                V = a.referrer || Ib(); u(b, "rf", Eb(encodeURIComponent(V || ""), Xb("mhl"))[0]); Bb("owasp") && (H = encodeURIComponent(V || ""), mg.av(a.beacon, "rf", H)); H = ac(); mg.av(a.beacon, "time", H); H = B; p = dd; var ia = 13 >= p.sf, Va = !0; H = g && rk && !Bb("dsndb") && !ia && !H || Bb("svNB"); !H && (k || g && (p.sf || p.msf || Bb("lab") || (p.ie || p.edge) && ng)) && (Va = !1); g = Va; k = b; b = a.beacon;
                p = document.cookie; ia = Pf(p); Va = Pc("cuc"); u(k, "sn", encodeURIComponent(ia)); u(k, "latency", "0"); u(k, "flavor", Bb("cors") ? "cors" : "post"); if (void 0 === k.crc) {
                    ia = b.ge ? b.bd : b.$e(); if ("string" === typeof ia) b: {
                        try { if (Si.TextEncoder) { var Wa = (new Si.TextEncoder).encode(ia); break b; } } catch (Qb) { } Wa = []; for (var ob = 0; ob < ia.length; ob++) {
                            var Db = ia.charCodeAt(ob); 128 > Db ? Wa.push(Db) : 2048 > Db ? (Wa.push(Db >> 6 | 192), Wa.push(Db & 63 | 128)) : 55296 === (Db & 64512) && ob + 1 < ia.length && 56320 === (ia.charCodeAt(ob + 1) & 64512) ? (Db = 65536 + ((Db & 1023) <<
                                10) + (ia.charCodeAt(++ob) & 1023), Wa.push(Db >> 18 | 240), Wa.push(Db >> 12 & 63 | 128), Wa.push(Db >> 6 & 63 | 128), Wa.push(Db & 63 | 128)) : (Wa.push(Db >> 12 | 224), Wa.push(Db >> 6 & 63 | 128), Wa.push(Db & 63 | 128));
                        }
                    } else Wa = ia; ia = -1; for (ob = 0; ob < Wa.length;)ia = ia >>> 8 ^ Tl[(ia ^ Wa[ob++]) & 255]; Wa = (ia ^ -1) >>> 0; -1 !== Wa && (k.crc = Wa);
                } u(k, "vi", encodeURIComponent(b.Nb("vi") || Ag())); u(k, "bp", 3); u(k, "v", Dl); u(k, "app", encodeURIComponent(Pc("app"))); u(k, "type", "js3"); u(k, "dtAdk", encodeURIComponent(sb("dtAdk", p))); u(k, "contentType", ""); u(k, "modifiedSince",
                    Xb("lastModification")); u(k, "svrid", ni()); Va && (k.en = Va); k.contentType && "srRs" === k.contentType && u(k, "msl", Xb("msl")); k.end = 1; b = Bb("cors"); Wa = ["type", "sn", "svrid", "flavor", "vi"]; Jb(Wa, "contentType", "modifiedSince"); Bb("owasp") || Jb(Wa, "rf"); b && Jb(Wa, "dtAdk"); Jb(Wa, "bp"); Pc("app") && Jb(Wa, "app"); k.contentType && Jb(Wa, "v"); -1 !== k.crc && Jb(Wa, "crc"); Pc("cuc") && Jb(Wa, "en"); "srRs" === k.contentType && Jb(Wa, "msl"); Jb(Wa, "end"); b = Pc("reportUrl"); p = []; for (Va = 0; Va < Wa.length; Va++)ia = Wa[Va], k[ia] && Jb(p, ia + "=" + k[ia]);
                (Wa = p.join("&")) && (b += "?" + Wa); Wa = z(a.beacon); k = !0; for (p = 0; p < Wa.length; p++)k = !!ya(Md, td({ Id: H, path: b, async: g, cb: V, beacon: a.beacon, lb: Wa[p], Fd: p, Gd: Wa.length, Gg: B }), k); a = 0; Wa.length && (a = k ? 2 : 1);
            }
        } else a = 0; return a;
    } function w(a, b, g, k, p, B, H) { var V = qh(sb("dtAdkSettings")).Ee; qi = V; if (1 === V) return 0; if (2 === V) { if (g) return 0; Kb(function () { w(a, b, g, k, p, B, H); }, 5E3); } else return Ae(a, b, g, k, p, B, H); return 0; } function u(a, b, g) { void 0 === a[b] && (a[b] = g); } function z(a) {
        if (a.bd) return [a.bd]; a = a.$e(); var b = na().syn ? 145E3 : Xb("msl") -
            40; b = 0 === a.length % b ? Math.floor(a.length / b) : Math.floor(a.length / b) + 1; if (!(1 < b)) return [a]; if (1 > b || 20 < b) return []; b = na().syn ? 145E3 : Xb("msl") - 40; var g = "sid=" + ac() + "&p#index#_#total#="; return Eb(a, b, g);
    } function S(a) { Z(a); } function Z(a) { if (Wg) { var b = !1; "number" === typeof a ? ac() + a < Dh && (b = !0) : b = !0; b && (Xg(El), Wg = !1); } Wg || (Dh = ac() + (a || 0), "number" === typeof a ? (El = Kb(w, a), Wg = !0) : w()); } function La(a, b, g) { return w(b, g, !1, a); } function fa(a) { Jb(Ch(), function (b, g, k, p) { a(p, g, k, p.Jb); }); } function kb() {
        var a = Uh; return 0 === a ?
            null : { severity: "Error", type: "be", text: "Beacon sending failed for ".concat(a, " attempt").concat(1 < a ? "s" : "", "! Look in the browser DevTools for more information.") };
    } function lb() { Dl = Cc(bb()); mg = new Ul; Vl = 0; ri && ri(function (a, b, g) { g && (10 > se.length ? se.push(g) : (a = se[10]) ? se[10] = +a + 1 + "" : se.push("1")); }); qi = qh(sb("dtAdkSettings")).Ee; q("DEBUG_INFO_REQUESTED", kb); } function rb() {
        for (var a = !1, b = [], g = 0, k = Dc; g < k.length; g++) { var p = k[g]; p.$c && 0 < p.$c && (p.eb && ac() > p.eb && (p.eb += 6E4, Jb(b, p)), a = !0); } 0 < b.length && w(!0, !0);
        for (g = 0; g < b.length; g++)b[g].$c--; a && Kb(rb, 1E3);
    } function Lb(a, b, g) { var k = Rd; k !== a && (k && !g && ic(k), (Rd = a) ? ya(Fg, a.id, b) : pa()); } function Lc(a) { Eh = null; if (bf && bf.gca) { var b = bf.gca(); if (Eh = b[b.length - 1]) a.Ge = Eh.id, a.parentFrameActionName = Eh.name, Eh.childFrameActions ? Eh.childFrameActions++ : Eh.childFrameActions = 1; } } function Sc() { var a = qh(sb("dtAdkSettings")).Ee; if (qi !== a && (qi = a, 0 !== a)) { a = 0; for (var b = Dc; a < b.length; a++)b[a].Oc(); } } function Ec() {
        var a = []; for (var b = me.za.length - 1; 0 <= b; b--)if (me.za[b].he()) {
            var g =
                Ca(me.za, b); a = a.concat(g);
        } b = !1; Sc(); g = Dc; for (var k = g.length - 1; 0 <= k; k--) { var p = g[k]; if (p.Pg) Ca(g, k); else { var B = 0 <= Ke(a, p), H = Eh; B ? (Ca(g, k), b = !0) : H && (B = bf.gca(), p.He = Gf && B[B.length - 1] === H ? "S" : "A", Eh = null); } } b && Z();
    } function gc() { "hidden" === document.visibilityState ? (Ti = "1", ed()) : Ti = "0"; } function ed() { var a; C((a = {}, a.kind = "VISIBILITY_CHANGED", a.detail = Ti, a)); } function zf(a, b, g, k) { var p = pe() + Math.round(g.startTime), B = p - a; p >= a && p <= b && 0 <= B && (null == k.nb || B < k.Uc) && (k.nb = g, k.Uc = B); } function Ed(a, b, g) {
        return a.reduce(function (k,
            p) { zf(b, g, p, k); return k; }, { nb: null, Uc: Number.MAX_VALUE }).nb;
    } function Qc(a, b) { return tb(a, function (g) { return g.initiatorType === b; }); } function Vc(a) { return Ui && E(a, 13) && "navigation" !== a.entryType || E(a, ["_dtCl"]); } function Wf(a) { return jm && E(a, 14) || E(a, ["entryType", "requestStart"]) && "navigation" === a.entryType; } function ae(a) { D++; (a = bc(a.detail.i)) && !a.ta && (a.ta = d); } function rd(a) { D--; if (a = bc(a.detail.i)) a.Tg = x(a.stop) || d; 1 > D && (W = []); } function ge(a, b, g) {
        var k = b[Vi[a]]; b = b.startTime; if (k) if (0 <= vb("yK", a)) g.push(a,
            k); else if ("T" === a) "number" === typeof k && 0 > k && 0 === k % 1 && g.push(a, k); else { var p = +k >= b; "j" === a && Wh(k, 2) && Math.abs(k - b) < km && (p = !1); var B = k; 0 <= vb("uvwxACDEFNOPQRSTUX", a) ? p = 0 <= +k : "number" === typeof k ? B = Math.round(k - b) : B = k; p && g.push(a, B); }
    } function fd(a, b, g) { if (b = b[Wi[a]]) { var k = 0 <= b; "j" === a && 0 === b && (k = !1); k && g.push(a, Math.round(b)); } } function le(a, b, g) { (b = b[sf[a]]) && g.push(a, b); } function he(a, b) {
        a = a.serverTiming; for (var g = {}, k = 0, p = Wl; k < p.length; k++) { var B = p[k]; g[B] = ""; } if (a) {
            for (k = 0; k < a.length; k++)p = a[k], p.description &&
                !isNaN(+p.description) && (B = p.name, B in g && !g[B] && (g[B] = p.description)); g.dtRequestID && (b.push("C"), b.push(g.dtRequestID)); g.dtRpid && (b.push("M"), b.push(g.dtRpid)); g.dtSInfo && (b.push("V"), b.push(g.dtSInfo)); g.dtTao && (b.push("W"), b.push(g.dtTao));
        }
    } function Sd(a, b, g, k) { var p = 0; for (a = F(a); p < a.length; p++)g(a[p], b, k); } function ie() {
        if (!window.performance) return []; var a = null, b = -1, g = pe(); "getEntriesByType" in performance && (a = performance.getEntriesByType("navigation")[0]) && a.type && (b = lm[a.type]); a && "responseEnd" in
            a || (a = performance.timing); -1 === b && (b = performance.navigation.type); return (!na().googleBot || na().syn) && 0 < g ? (b = ["a", b, "b", Math.round(g)], hg(a, b, g), b) : [];
    } function hg(a, b, g) {
        if (mm && E(a, 12) || E(a, ["navigationStart"]) && !("entryType" in a)) for (var k in si) { if (ub(si, k)) { var p = k, B = a[si[p]]; if (B) { var H = B >= g; "j" === k && B === g && (H = !1); H && b.push(p, Math.round(B - g)); } } } else if (g = na(), g = g.gFU ? g.gFU() : {}, Vc(a)) {
            Sd(Vi, a, ge, b); k = Jb; B = k.apply; H = []; if (Vc(a)) {
                if ("xmlhttprequest" === a.initiatorType || "fetch" === a.initiatorType) {
                    var V =
                        "1"; Xi[a.name] && (V = "11", delete Xi[a.name]); H.push("z", V);
                } else Xi[a.name] && (H.push("z", "01"), delete Xi[a.name]); V = ""; "frame" === a.initiatorType ? V = "f" : "iframe" === a.initiatorType || "subdocument" === a.initiatorType ? V = isNaN(g[a.name]) ? "i" : "i" + g[a.name] : 0 <= (a.frameId || -1) && (V = "r" + a.frameId); V && H.push("B", V);
            } else Xi[a.name] && (H.push("z", "01"), delete Xi[a.name]); B.call(k, void 0, nb([b], H, !1)); b.push("I", null !== (p = Fl[a.initiatorType]) && void 0 !== p ? p : 0); he(a, b);
        } else Wf(a) ? (Sd(Wi, a, fd, b), he(a, b)) : Sd(sf, a, le, b);
    } function xe() {
        Bb("ntd") ||
            cf(function (a, b, g, k) { b || Xl || !a.hla(k) || (Xl = !0, b = Gl || ie(), a.av(k, "nt", b.join("") || "0", !0), Gl = void 0); });
    } function kc(a) { var b; if (!a) return null; var g = null === (b = a.getEntriesByType) || void 0 === b ? void 0 : b.call(a, "navigation")[0]; Wf(g) || (g = a.timing); return g; } function bh(a, b) { void 0 === b && (b = !1); if (!a) return null; for (var g, k = ke(a), p = 0, B = nm; p < B.length; p++)if (g = Xf(a, B[p], b) || -1, 0 < g && g !== k) return Math.round(g); return null; } function Xf(a, b, g) {
        void 0 === g && (g = !1); var k = kc(a); if (!k) return null; b = k[b]; if ("number" !==
            typeof b || 0 === b) return null; a = ke(a); Wf(k) ? g && (b += a) : g || (b -= a); return Math.round(b);
    } function ke(a) { var b; return Math.round(a.timeOrigin || (null === (b = a.timing) || void 0 === b ? void 0 : b.navigationStart) || -1); } function we() { var a; C((a = {}, a.kind = "INSTRUMENTATION_TRIGGERED", a.detail = void 0, a)); } function je(a) { var b = Dc; Lc(a); Jb(b, a); b = Rd; b !== a && (ic(b), Rd = a); Jb(id, a); Kb(rb, 5E3); } function Pe(a) {
        var b = a.start, g = a.xhrUrl, k = a.nd, p = a.ya, B = a.pb; B = void 0 === B ? !1 : B; var H = a.isCustomAction; H = void 0 === H ? !1 : H; var V = a.$a; V = void 0 ===
            V ? !1 : V; var ia = a.Xe; ia = void 0 === ia ? -1 : ia; var Va = a.Y; Va = void 0 === Va ? "" : Va; var Wa = a.ta, ob = a.Kc; a = new rh(b, a.stop || b, a.type, a.name, a.info || "", a.domNodes || -1, Oe(void 0 === p ? "" : p), document.title, g || "", H, V, B, k, ia, Va, Wa, ob); Sc(); a.Hc() && Jb(me.za, a); me.actions[a.id] = a; ya(Ej); return a;
    } function Oe(a) { if (a) { var b = document.createElement("a"); b.href = a; if ("file:" === b.protocol || "about:" === b.protocol || b.hostname) return b.href; var g = function (k, p, B, H) { k.av(H, "rfi", 1, !1); Yi(g); }; cf(g); } return location.href; } function ve(a) {
        var b,
            g, k; a.start || (a.start = ac()); var p = Pe(a); p.oa = Kb(function () { if (p && (3 !== p.status || p.Jc())) { var H = p.start + 1E3 * Xb("oat"); Gd(p.id, H, void 0, !0); } }, 1E3 * Xb("oat")); var B = null; switch (lc(a.xa)) { case 1: B = Rd; break; case 2: if (B = bc(a.xa), !B && "_load_" === a.type) return p; }C((b = {}, b.kind = "ACTION_ENTERED", b.detail = (g = {}, g.i = p.id, g.a = a.start, g.s = 0, g.x = a.xhrUrl, g.r = B ? B.Ha() : p.id, g.t = p.type, g.e = null === (k = da()) || void 0 === k ? void 0 : k.target, g.rt = void 0, g.xm = p.hb, g.xe = p.Sa, g.cs = p.Da, g.ce = p.Na, g["in"] = p.info, g), b)); "undefined" ===
                typeof a.Xe && Lb(p, !1, !!B); if (B) for (B = B.Ob(), B.zd(p), a = 0, b = Dc; a < b.length; a++)g = b[a], g.eb > p.start + 1E4 && (g.eb = p.start + 1E4); else je(p.dg()), Qf(); return p;
    } function Gd(a, b, g, k) {
        var p, B; void 0 === k && (k = !1); a = bc(a); var H = na(); !b && a && "_load_" === a.name && "_load_" === a.type && H.gLVD && ((k = Xf(ib.performance, "loadEventEnd")) ? (b = H.gVCP(), b = Math.max(b, k) + pe()) : b = ac(), k = !0); H = "number" === typeof b && (null === a || void 0 === a ? void 0 : a.isCustomAction); b = b || ac(); a && (C((p = {}, p.kind = "ACTION_LEFT", p.detail = (B = {}, B.i = a.id, B.a = a.start,
            B.s = b, B.r = a.Ha(), B), p)), a.vc(b, g, H, k), Ec()); Lb(Zb(), !0);
    } function Td(a, b, g) { var k = Rd; "undefined" !== typeof b && null !== b && (k = bc(b)); if (k) return k.zd(a, g), !1; Lc(a); Jb(id, a); return !0; } function pg(a, b, g, k, p, B, H, V) { "undefined" === typeof k ? k = !0 : null === k && (k = !1); a = { name: hb(a), type: b, start: g, xa: k, info: p || "", xhrUrl: B || "", isCustomAction: !!H }; V && (a.ya = V); return ve(a).id; } function ue(a, b, g) { we(); Gd(a, b, g); } function $d(a, b, g, k) { a = Pe({ type: a, name: Wb(b + "=" + g, Xb("mpl")), start: ac(), pb: !0 }); Td(a, k); Z(); } function vg(a) {
        for (var b =
            me.za.slice(), g = 0; g < b.length; g++)Gd(b[g].id, a); return b.length;
    } function Ne(a) { for (var b = 0, g = Yg; b < g.length; b++)if (g[b].D === a) return !0; return !1; } function Rc(a) { var b = sk(); return !!(b && b.exec && a && (b.exec(a) || b.exec(Hb(a)))); } function Qe(a, b, g, k, p, B, H) {
        void 0 === b && (b = 3); void 0 === g && (g = ""); void 0 === k && (k = !1); void 0 === p && (p = void 0); void 0 === B && (B = !1); void 0 === H && (H = !1); if (g && Rc(g)) return 0; var V = yc(g), ia = da(), Va = a || "-", Wa = Za(!1); if (bg) { if (Wa && !bc(Wa)) return 0; ng = !0; } ia && (ia.info = "-" === ia.info ? Va : ia.info + ", " +
            Va); !Wa && ia && ia.D && (Wa = ia.D); g = Hb(g); Xi[g] = !0; a = { name: a, type: "xhr", start: ac(), info: Va, xhrUrl: V, isCustomAction: k, nd: p, Kc: H }; Wa ? (ia = 0, B || (a.xa = Wa, ia = qg(a))) : ia ? (Wa = 0, 3 <= b && (Wa = Ld(Ha(Ha({}, a), { name: ia.Mb(), type: ia.type, start: ia.start, info: ia.info, ya: ia.url, xa: !1, Y: ia.Y || "", ta: ia.view })), ia.D = Wa, ia.$b && Yf(!0, bc(Wa))), ia = Wa) : (ia = Rd) ? (Wa = 0, 1 <= b && !B && (Wa = qg(Ha(Ha({}, a), { xa: ia.id }))), ia = Wa) : ia = Bb("cux") ? Ld(Ha(Ha({}, a), { name: "Unlinked XHR", type: "xhr", xa: !1 })) : 0; return ia;
    } function Ld(a) {
        a: {
            var b = a.info; var g =
                a.xhrUrl; if (a.nd && Yg.length) for (var k = Yg.length - 1; 0 <= k; k--) { var p = Yg[k], B = p.D, H = wa(B); if (H && b && b[0] !== p.Sf && pb(H.xhrUrl || "") === p.xhrUrl && p.xhrUrl === pb(g || "")) { b = B; break a; } } b = 0;
        } if (b) return b; a.$a = !0; return ve(a).id;
    } function qg(a) { var b = a.xa, g = null; "number" === typeof b && (g = wa(b)); a.xa = g ? g.id : !0; return Ld(a); } function gf(a, b, g, k) { void 0 === b && (b = ac()); void 0 === k && (k = ca); var p = wa(a); if (!p) return -1; p.oe(); return Kb(function () { wg(a, b, g); k(); }, 0); } function wg(a, b, g) {
        void 0 === b && (b = ac()); var k = wa(a); !k || g && 0 >
            vb(k.info, g) && k.name !== g || (k.oe(), Kb(function () { if (!ng) { var p = b; wa(a) && Gd(a, p); } }, Fj), we());
    } function Ge(a, b) { if (a) { var g = wa(a); g && (g.Xc++, g.Da || b && 4 !== b || g.Mg(ac()), Jb(Tg, a), Cg++); } } function Re(a) { if (a) { var b = wa(a); b && (b.Lg(ac()), b.Xc--, Cg--, Kb(function () { db(a); }, 0)); } } function rg(a, b, g) { if ("number" !== typeof a || isNaN(a) || 0 > a) return !1; 0 === a && (a = 971, b = "XHR Canceled"); b && (b += ""); g = bc(g) || Rd; if (!g || -1 !== g.Sa || !g.$a) return !1; g.Sa = a; b && 0 < b.length && (g.hb = b); return !0; } function ch() { return !Bb("disableXhrFailures"); }
    function Jh(a) { return (a = bc(a)) && a.$a ? [a.Da, a.Na] : [0, 0]; } function sg(a, b) { var g = wa(a); if (g) { var k = g.xhrUrl; g.Re(b); g = 0; for (var p = Yg; g < p.length; g++) { var B = p[g]; B.D === a && B.xhrUrl === pb(k) && (B.xhrUrl = pb(b)); } } } function tg(a) { return (a = wa(a)) ? a.xhrUrl : ""; } function hf(a, b, g, k) {
        void 0 === k && (k = "headers"); a = a || {}; b = b || a.url; a[k] = a[k] || {}; var p = g || a.actionId; (g = !a[k] || !Xh()) || (g = !(!Gj || !b || !Gj.test(b) && !Gj.test(Hb(b)))); if (g) return a; var B = !(!ti || !b || !ti.test(b) && !ti.test(Hb(b))); var H = ""; g = Fa(p); if (B) {
            H = Ja(p);
            B = a; var V = H, ia = k, Va = [], Wa = Pf(), ob = ni(Wa).replace("-", "-2D"); Jb(Va, 'sn="v_4_srv_'.concat(ob, "_sn_").concat(ui(Wa), '"')); V && Jb(Va, 'pc="'.concat(V, '"')); Jb(Va, 'v="'.concat(Yh(), '"')); Jb(Va, 'app="'.concat(Pc("app"), '"')); (V = sb("dtAdk")) && Jb(Va, 'adk="'.concat(V, '"')); Jb(Va, 'r="'.concat(X(g), '"')); jc(B, "x-dtc", Va.join(", "), ia);
        } if (Yb(b)) return a; B = Bb("dpch"); p && (B || (ia = a, p = H || Ja(p), H = k, p && (jc(ia, "x-dtpc", p, H), fb() && (jc(ia, "x-dtreferer", X(Ib()), H), jc(ia, "x-host", ma(b), H)))), g && g !== Ib() && jc(a, "x-dtreferer",
            X(g), k)); Rc(b) && !B && jc(a, "x-dtpc", "ignore", k); return a;
    } function gg(a) { a = Hj(a); if (!a) return null; try { return new RegExp(a, "i"); } catch (b) { } return null; } function vh() { ti = gg(Pc("chw")); Gj = gg(Pc("xhb")); q("CONFIG_UPDATE", function () { ti = gg(Pc("chw")); Gj = gg(Pc("xhb")); }); } function Bf() { var a = Rd; return a ? a.name : ""; } function Mg(a) { for (var b = 0, g = me.za; b < g.length; b++)g[b].bf = a.detail; } function Ue(a) { var b; return null === (b = bc(a)) || void 0 === b ? void 0 : b.Cf(); } function Af() {
        var a = document, b = a.documentElement, g = 0, k = 0, p = a.body;
        "number" === typeof self.innerWidth ? (g = self.innerWidth, k = self.innerHeight) : a && (b.clientWidth || b.clientHeight) ? (g = b.clientWidth, k = b.clientHeight) : p && (p.clientWidth || p.clientHeight) && (g = p.clientWidth, k = p.clientHeight); if (0 > g || 0 > k) a = 0, dd.ie ? a = 140 : a = 10, g = Math.max(g, a), k = Math.max(k, 10); na().bwsW = g; na().bwsH = k;
    } function f() {
        var a = na(); q("LOAD_END", Af); var b = !1; cf(function (g, k, p, B) {
            if (!k && !b && (Le || p)) {
                b = !0; k = function (Va) { return 0 > Va || 2147483647 <= Va || isNaN(Va) ? 0 : Va; }; var H = cd(); p = H.bwsW || a.bwsW; H = H.bwsH || a.bwsH;
                0 >= p && (Af(), p = a.bwsW, H = a.bwsH); p = k(p); var V = k(H), ia = H = 0; g.av(B, "w", p, !0); g.av(B, "h", V, !0); if (p = ib.screen) H = k(p.width), ia = k(p.height), g.av(B, "sw", H, !0), g.av(B, "sh", ia, !0);
            }
        });
    } function r() {
        var a = 0, b = 0, g = 0, k = "Info", p = []; Bb("coo") && Bb("cooO") ? (a++, Jb(p, { severity: "Info", text: "Opt-in mode is active, but dtrum.enable() has been called.", type: "cooeaoa" })) : Bb("coo") && (k = "Warning", b++, Jb(p, { severity: "Warning", text: "Opt-in mode is active. Call dtrum.enable() to start collecting data.", type: "cooe" })); $b() && (b++,
            k = "Warning", Jb(p, { severity: "Warning", text: "Agent is currently disabled. This can be caused by Cost Control, Overload Prevention, missing RUM License or a disabled application", type: "jsad" })); Bb("dsss") && (b++, k = "Warning", Jb(p, { severity: "Warning", text: "DISABLE_SUBDOMAIN_SOURCEACTION_SUPPORT is set.", type: "sssd" })); a: { var B = Pc("featureHash"); for (var H = 0, V = "7degijmovx".split(""); H < V.length; H++)if (-1 !== B.indexOf(V[H])) { B = !1; break a; } B = !0; } B && (b++, k = "Warning", Jb(p, {
                severity: "Warning", text: "No module(that could detect a XHR) is active!",
                type: "nxma"
            })); wb() && (b++, k = "Warning", Jb(p, { severity: "Warning", text: "Should not track is set on this browser and respected by the RUM monitoring code!", type: "snt" })); Bb("ssc") && "https:" !== location.protocol && (g++, k = "Error", Jb(p, { severity: "Error", text: "Secure cookies are enabled, but can't be set as the page isn't using https.", type: "scbip" })); return 0 < p.length ? (a = [v(g, "Error"), v(b, "Warning"), v(a, "Info")], { severity: k, text: "".concat(a.join(""), "regarding agent configuration."), type: "ci", children: p }) :
                null;
    } function v(a, b) { return a ? "".concat(a, " ").concat(b).concat(1 < a ? "s" : "", " ") : ""; } function T() { q("DEBUG_INFO_REQUESTED", r); cf(function (a, b, g, k) { Bb("ssc") && "https:" !== location.protocol && a.av(k, "sconsp", 1); }); } function G() { return Pc("rpid") ? "automatically" : "manually"; } function ua() {
        tk = void 0; za(document.currentScript) && (vi = document.currentScript); q("DEBUG_INFO_REQUESTED", function () {
            tk || (tk = vi ? vi.src ? vi.dataset.dtconfig ? "OneAgent JavaScripTag ".concat(G(), " injected") : vi.src.includes("_complete") ? "JavaScriptTag ".concat(G(),
                " injected") : vi.getAttribute("defer") ? "CodeSnippetDeferred ".concat(G(), " injected") : "CodeSnippetSync ".concat(G(), " injected") : vi.dataset.dtconfig ? "InlineCode ".concat(G(), " injected") : "Couldn't detect injection mode." : "Couldn't detect injection mode."); return { severity: "Info", text: tk, type: "im" };
        });
    } function Fb(a) {
        switch (a) {
            case 1: if ((a = document.currentScript) && za(a)) {
                a: {
                    var b, g; if (document.documentElement && (a = document.documentElement.outerHTML.split(a.outerHTML), 2 === a.length)) {
                        a = (null === (g = null ===
                            (b = a[0]) || void 0 === b ? void 0 : b.split("\n")) || void 0 === g ? void 0 : g.length) + 1; break a;
                    } a = void 0;
                } return "Agent is double injected! Is it manually and automatic injected? Current used agent is near: ".concat(document.location, ":").concat(a);
            } return "Agent is double injected! Is it manually and automatic injected?"; case 2: return "Problem detected while agent initialization! Snippet couldn't initialize so can't initialize monitoring code"; case 3: return "Problem detected while agent initialization! Snippet couldn't initialize as initConfig didn't initialize.";
            default: return "";
        }
    } function Ob() { q("DEBUG_INFO_REQUESTED", function () { return 0 !== na().di ? { severity: "Error", text: Fb(na().di), type: "di" } : null; }); cf(function (a, b, g, k) { 0 === na().di || b || a.av(k, "di", na().di); }); } function pc() { var a; return C((a = {}, a.kind = "DEBUG_INFO_REQUESTED", a.detail = void 0, a)); } function Mc() {
        cf(function () {
            if (!qf.disableCookieManager) {
                var a = Pf(); if (!a || -1 === vb(a, "_srv_-")) try {
                    if (ib.sessionStorage) {
                        var b = a, g = Ij(xb()) || ""; Th(g) || (g = ""); if (g && "null" !== g && b !== g) {
                            var k = qh(g).sessionId || ""; if ("undefined" !==
                                typeof b && "" !== b) { if ((g = b) && k) { var p = g, B = vb(p, "_sn_"); if (-1 !== B) { var H = p.indexOf("_", B + 4), V = -1 !== H ? p.substring(B, H) : p.substring(B); V && (p = p.replace(V, "_sn_" + k)); } g = p; } var ia = g; } else ia = g; b = ia;
                        } if (a = b) lh(a), Rf(xb(), a);
                    }
                } catch (Va) { }
            }
        });
    } function Nd(a) { q("ACTION_ENTERED", function k(g) { a.dtWF = k; g = g.detail; var p = g.i; a(p, g.a, g.r === p, g.e); }); } function lf(a) { q("ACTION_LEFT", function k(g) { a.dtWF = k; g = g.detail; var p = g.i; a(p, g.s, g.r === p); }); } function He(a, b) { Dj.push(a); 0 === b ? Z() : Z(2E3); } function wd(a, b, g, k, p) {
        void 0 === g &&
            (g = !1); void 0 === k && (k = ac()); void 0 === p && (p = 0); var B = b; if (1 === p && "_csprv_" === a) { if (0 !== t) { B = d; var H = B.timestamp, V = B.group, ia = B.trigger; b.push(["tvn", B.name]); b.push(["tvt", H + ""]); b.push(["tvtrg", ia + ""]); b.push(["tvm", gd(B)]); V && b.push(["tvg", V]); } B = b; } a = { id: ta(), timestamp: k, kind: a, Wb: B }; switch (lc(g)) { case 1: (g = Rd) ? g.yd(a) : He(a, p); break; case 2: (g = bc(g)) ? g.yd(a) : He(a, p); break; case 0: He(a, p); }
    } function Be(a, b) { return a ? { oldView: a, newView: b } : { newView: b }; } function Wd(a, b) {
        void 0 === b && (b = Xb("vncm")); var g = document.createElement("a");
        g.href = a; a = g.hash; g = g.pathname; "/" !== g.charAt(0) && (g = "/" + g); 0 === b ? b = g + a : 2 === b ? (b = a || "/", "#" === b.charAt(0) && (b = b.replace("#", "")), "/" !== b.charAt(0) && (b = "/" + b)) : b = g; return b;
    } function Xd(a, b) { a.name = b.name; b.group && (a.group = b.group); a.hydrated = !0; } function Od(a) {
        var b = [], g = a.oldView, k = a.newView; if (g) { var p = g.name, B = g.timestamp, H = g.group, V = g.trigger; p && B && (b.push(["svn", p]), b.push(["svt", B + ""]), b.push(["svtrg", V + ""]), b.push(["svm", gd(g)])); H && b.push(["svg", H]); } g = k.name; H = k.group; V = k.trigger; b.push(["tvn",
            g]); b.push(["tvtrg", V + ""]); b.push(["tvm", gd(k)]); H && b.push(["tvg", H]); b.length && wd("_view_", b, !1, a.newView.timestamp || void 0, 1);
    } function Ie(a) { Le ? Od(a.detail) : y(a.detail); } function Bd(a) { a.detail.i === Ff && (a = m, a.length && (xc(a, Od), m = []), A("ACTION_SENT", Bd)); } function Xe(a, b) { void 0 === b && (b = Xb("dvl")); var g; return function () { for (var k = this, p = [], B = 0; B < arguments.length; B++)p[B] = arguments[B]; void 0 !== g && Xg(g); g = Kb(function () { a.apply(k, p); }, b); }; } function ce() {
        if (1 === t) {
            var a = d, b = Wd(Ib()); a = a.name; if (a + "/" ===
                b) a = !1; else { var g = document.createElement("a"), k = document.createElement("a"); g.href = a; k.href = b; a = g.pathname !== k.pathname || !document.getElementById(k.hash.substring(1)) && g.hash !== k.hash; } a && Je({ name: b });
        }
    } function gh() { var a, b = d, g = h; b.id !== g.id && (C((a = {}, a.kind = "VIEW_STABLE", a.detail = Be(g, b), a)), h = b); } function Je(a) {
        var b, g = d, k = Ha, p = Ha, B = Xb("rtu"), H = Ha({}, a); H.name = Wb(a.name, B, !0); a.group && (H.group = Wb(a.group, B, !0)); d = a = k(p({}, H), { timestamp: ac(), id: ++Zg, kind: 1, trigger: t, hydrated: !1 }); 0 < D && W.push(a); C((b =
            {}, b.kind = "VIEW_CHANGE", b.detail = Be(g, d), b)); Jj();
    } function hh(a) { var b = History.prototype[a]; b && (History.prototype[a] = function () { for (var g = [], k = 0; k < arguments.length; k++)g[k] = arguments[k]; k = Yl.dtAWF(b, this, g); var p, B; C((p = {}, p.kind = "HISTORY_API_EVENT", p.detail = (B = {}, B.t = a, B.p = g, B), p)); return k; }); } function Kh(a, b, g, k) {
        if (!b) {
            b = d; g = b.timestamp; var p = b.group, B = b.trigger; a.av(k, "tvn", encodeURIComponent(Da(b.name))); a.av(k, "tvt", g + ""); a.av(k, "tvm", encodeURIComponent(gd(b))); a.av(k, "tvtrg", B + ""); p && a.av(k,
                "tvg", encodeURIComponent(Da(p)));
        }
    } function Lh() { Kj || (Kj = document.createElement("doc:rdy")); if (Kj.doScroll) { var a = function () { try { Kj.doScroll("left"), Kj = void 0, Zi = ac(), we(); } catch (b) { Kb(a, 0); } }; a(); } else document.addEventListener("DOMContentLoaded", function () { Zi = ac(); we(); }, !1); } function Mh() { return Lj; } function Pd() {
        var a = cg, b = kc(ib.performance); if (!b) return Math.round(a); var g = Wf(b) ? 6E4 >= b.domContentLoadedEventStart : 6E4 >= Math.abs(b.domLoading - a); if (!na().syn && !g) return a; g = pe(); var k = b.redirectStart, p =
            b.fetchStart; b = (Wf(b) ? 0 : g) + 6E4; b = k ? b > k ? g : k : p ? b > p ? g : p : g; isFinite(b) && (a = b); return Math.round(a);
    } function Ye() { var a = Xf(ib.performance, "loadEventEnd", !0), b = ac(); return Math.round(a || b); } function mf(a, b) {
        var g; Mj--; if (Sf && b) { var k = (Sf.get(b) || 1) - 1; k ? Sf.set(b, k) : Sf.delete(b); } if (!Mj && Fh) try { C((g = {}, g.kind = "LOAD_END", g.detail = void 0, g)); } catch (p) { } 0 >= Mj && (Fh && (b = Fh.id, Gl = ie(), a = a ? Math.max(Ye(), a) : Ye(), g = Xf(ib.performance, "loadEventStart", !0) || pe(), g = g < Ef ? 0 : Math.round(g), a && g && a >= g ? (k = ac() - a, 5E3 < Math.abs(k) &&
            (a += k), Gd(b, a, g)) : Gd(b), Fh = null), Gg || Ze()); b = cd(); b !== na() && b.sole();
    } function de(a) { if (Sf && Sf.has(a)) try { a.parent && Kb(function () { de(a); }, 100); } catch (b) { mf(void 0, a); } } function nf(a) { Mj++; if (Sf && a) { var b = Sf.get(a) || 0; Sf.set(a, b + 1); } dd.edge && a && Kb(function () { de(a); }, 100); } function Ze(a, b) { var g = bc(Ff); if (g) { var k = 0; ib.performance && !a && (k = b || Ye()); k || (k = ac()); Gd(g.id, k); Lj = g.stop; we(); } } function Og() { Ze(1); } function $e() { Gg = !0; } function xh() {
        var a = bc(Ff); a && !Fh && (Fh = ve({
            name: "_onload_", type: "_load_", start: ac(),
            xa: a.id
        }));
    } function ih() { if (!Zh || 0 < Mj) Zh = !0, we(), mf(); } function Yd() { we(); if (!$i) { var a = cd(); a !== na() && a.iolm(ib); xh(); $i = !0; q("PAGE_LEAVING", function g() { Fh && a !== na() && a.sole(void 0, ib); A("PAGE_LEAVING", g); }); Kb(ih, 0); } } function Pg() { "loaded" === document.readyState && we(); "complete" === document.readyState && Yd(); } function oe() { we(); $i || ("complete" === document.readyState ? uk ? w(!1, !0) : (uk = !0, Kb(oe, 3E3)) : Kb(oe, 3E3)); } function ig() {
        Rg(!1); if (oh.length) for (var a = rk && !Bb("dsndb"), b = ac() - 1E3, g = 0, k = oh; g < k.length; g++) {
            var p =
                k[g]; try { p.time >= b && (a ? Nc(p.path, p.data) : Ud(td({ path: p.path, lb: p.data }), !1)); } catch (B) { }
        } if (!Uk) try { Cb(), tf(), uf.dT_.clB(), Sf = void 0, Uk = !0, Fh = null; } catch (B) { } wi || (wi = !0, pa());
    } function $f() { Rg(!0); wi || (wi = !0, pa()); } function jg() { var a, b = !1; try { return (a = da()) && a.target && !Hl && (b = of(a.target)) && (Hl = !0, Kb(function () { Hl = !1; }, 1)), b; } catch (g) { return b; } } function of(a) {
        var b; if (b = a) {
            if (b = a.href) if (b = a.href.replace(" ", "").toLowerCase(), -1 === vb("javascript:", b)) b = !1; else {
                b: {
                    var g = ["mailto:"]; for (var k = 0; k < g.length; k++)if (-1 <
                        vb(b, g[k])) { g = !0; break b; } g = !1;
                } g ? b = !0 : (b = b.split("://"), b = !("http" === b[0] || "https" === b[0] || "file" === b[0]));
            } b = b || of(a.parentNode);
        } return b || !1;
    } function Qg() { jg() || Rg(!1, !0); } function Nh() { Nj = bg = !1; Cf(!1); w(!1, !0, !0); ng = !1; } function xg() { if (dd.sf && ib.frames) for (var a = 0; a < ib.frames.length; a++)try { var b = ib.frames[a]; b.dT_ && b.dT_.obc(); } catch (g) { } } function Rg(a, b) {
        var g; if (!bg || ng) {
            var k = ac(); a || (bg = !0, Kb(function () { Kb(Nh, 2E3); }, 1)); C((g = {}, g.kind = "PAGE_LEAVING", g.detail = bg, g)); Oj && Nj || Yf(b, Rd, k); a = mg.Je(!1,
                !0, !0); xg(); a.beacon && (w(!1, !0, !0, !1, a), Nj = !0); ng = !1;
        }
    } function yh(a, b) { if (Le || isNaN(a) || 100 > a || 1E3 < a) return !1; aj = { responseCode: a, message: b + "" }; return !0; } function Oh() { return Oj; } function Cf(a, b) { Oj = a; Xg(Zl); b && (Zl = Kb(function () { Oj = !1; }, 2E3)); } function zh() { function a(b) { Ff === b.detail.i && A("ACTION_CLOSED", a); } ib.doNotCreateLoadAction || (Ff = ve({ name: "_load_", type: "_load_", start: Ef }).id, we(), Pg()); q("ACTION_CLOSED", a); } function Cd(a, b, g, k) {
        var p; void 0 === g && (g = !1); var B = (p = {}, p.msg = "", p.file = "", p.line = -1, p.column =
            -1, p.error = a, p.stackContainsWrapper = g, p); "number" === typeof b && (B.parentActionId = b); k && (B.source = k); af(B);
    } function kg(a, b, g, k) { a[b] && Df(g, "" + a[b], k); } function af(a) {
        var b, g = a.error, k = a.msg; if (!(!k && !g || Hg + 1 > Xb("mepp"))) {
            Hg++; "string" === typeof g ? k = a.msg || g : g = g || ib.event || { message: "", name: "" }; var p = Ha(Ha({}, a), (b = {}, b.msg = k, b.error = g, b)), B; b = da(); var H; b && (H = { name: b.Mb(), type: b.type }); g = p.error; "string" === typeof g && (g = {}); k = g.columnNumber || 0; var V = p.msg, ia = p.file, Va = p.column, Wa = p.line, ob = p.source; b = (B =
                {}, B.message = g.message || g.name || g.Vi || g.description || V || g.errorMessage || g.Ih || g.data || g.Sh || "Indeterminable error name", B.file = g.fileName || g.filename || g.sourceURL || g.ki || g.file || ia || "", B.line = g.lineNumber || g.lineno || g.line || g.mi || Wa || -1, B.column = (g.columnNumber ? k + 1 : void 0) || g.li || g.colno || g.column || Va || -1, B.stack = ag(g) || Ph(), B.userInput = H, B.code = g.Xi || g.code || g.errorCode || g.status, B.timestamp = ac() - cg, B.debugInfo = "", B.type = g.name || "Error", B.source = ob || "1", B); "Indeterminable error name" === b.message &&
                    (B = Ce("msg", p.msg), B += Ce("file", p.file), B += Ce("line", p.line), B += Ce("column", p.column), B += Ce("error", p.error), b.debugInfo = B); b.stack && p.stackContainsWrapper && (b.stack = "<wrapper>" + b.stack); if (b.stack) { if (1200 < b.stack.length) { p = ""; B = 0; for (H = b.stack.split(/(\r\n|\n|\r)/gm); B < H.length && !(g = H[B].trim(), k = g.length, 0 < k && (p = 250 < k ? p + (g.substring(0, 150) + "[...]" + g.substring(k - 100) + "\n") : p + (g + "\n")), 1200 < p.length); B++); b.stack = p; } b.stack = b.stack.replace(RegExp("\\|", "g"), "^p").replace(/(\r\n|\n|\r)/gm, "|"); } 500 <
                        b.message.length && (b.message = b.message.substring(0, 500)); p = b.file; B = b.stack; H = Pc("csu"); p && B && -1 === vb(B, H) && -1 !== vb(p, H) && (b.incompleteStack = 1200 < B.length ? "stringLength" : "numLines"); 5011 !== b.code && (p = a.parentActionId, a = ac(), a = Pe({ type: "_error_", name: Ua(b.message), start: a, pb: !0 }), p = Td(a, p), a && (kg(b, "type", "_type_", a), b.file && (B = b.file, 0 <= b.line && (B += "|" + b.line), 0 <= b.column && (B += "|" + b.column), Df("_location_", B, a)), (B = b.incompleteStack) && Df("_istack_", B, a), kg(b, "stack", "_stack_", a), kg(b, "code", "_code_",
                            a), kg(b, "timestamp", "_ts_", a), kg(b, "debugInfo", "_debug_", a), b.userInput && Df("_useraction_", b.userInput.type + "|" + b.userInput.name, a), kg(b, "source", "_source_", a), p && Z()));
        }
    } function Ph() { try { throw Error(""); } catch (p) { var a = ag(p); if (a && 4 < a.split(/\r\n|\r|\n/).length) return "<generated>\n" + a; } if (9 > dd.ie) { a = []; var b = 0; try { for (var g = arguments.callee.caller.caller; g && 10 > a.length;) { var k = om.exec(g.toString()); a.push(k ? k[1] || "[a]" : "[a]"); g = g.caller; b++; } } catch (p) { } if (3 < b) return "<generated-ie>\n" + a.join("\n"); } return ""; }
    function ag(a) { return a ? a.stack || a.Rh || a.nj || a.error && a.error.stack || "" : ""; } function Df(a, b, g) { var k = ac(); a = Pe({ type: a, name: Ua(b), start: k, pb: !0 }); Td(a, g.id, !0); } function Ce(a, b) { a = a + "|" + (typeof b + "|"); if (null === b) a += "null|"; else if ("object" === typeof b) for (var g in b) { if (ub(b, g) && "stack" !== g && "error" !== g) { var k = g; a += g + "|"; var p = typeof b[k]; a += p + "|"; "object" !== p && "function" !== p && (a += b[k] + "|"); } } else a += b + "|"; return a; } function Ah(a, b, g) {
        var k = ac(); a = Ua(a); b = Pe({ type: b, name: a, start: k, stop: k, pb: !0, domNodes: -1 });
        g = Td(b, g); ya(Ej); g && Z(); return g;
    } function wh() { na().syn || (Ah("visit end", "_endVisit_", -1) ? Pj(!1, "a") : xi()); } function Il(a, b) { Hg > Xb("mepp") || (Hg++, Ah(a, "_error_", b)); } function Jl(a, b) { Ah(a, "_warning_", b); } function Vk(a, b) { Ah(a, "_log_", b); } function vk(a, b, g) { var k = ac(); a = Pe({ type: "_rs_", name: hb(a + "=" + b), start: k, pb: !0 }); Td(a, g); Z(); } function wk(a, b) {
        switch (a) {
            case "_uaps_": if ("string" !== typeof b) { a = "value [".concat(b, "] is not a valid short string, because it is of type ").concat(typeof b, "."); break; } else a =
                "value is not of type 'string'. Make sure to pass in a string."; (b = b.length) || (a = "value is not a valid short string because it is empty."); var g = Xb("mpl"); b > g && (a = "value is ".concat(b, " characters long, which is longer than the maximum of ").concat(g, " characters")); break; case "_uapl_": a = "value [".concat(b, "] is not a valid java long."); break; case "_uapdt_": a = "value [".concat(b, "] is not a valid date."); break; case "_uapdbl_": a = "value [".concat(b, "] is not a valid java double."); break; default: a = "value [".concat(b,
                    "] is not of a supported type. Has type of ").concat(typeof b, ".");
        }return a;
    } function Wk(a, b) { return { failedProperties: a.Bc(), sentProperties: a.Zd(), info: "Number of total failed properties: ".concat(b) }; } function Kl(a) { return !("number" !== typeof a || isNaN(a) || 0 !== a % 1 || 0x7fffffffffffffff < a || -0x7fffffffffffffff > a); } function Ll(a) { return !("number" !== typeof a || isNaN(a) || 1.7976931348623157E308 < a || -1.7976931348623157E308 > a); } function Qj(a) { return "string" === typeof a && 0 !== Ga(a).length && a.length <= Xb("mpl"); } function Rj(a) {
        return !!a &&
            "[object Date]" === Object.prototype.toString.call(a);
    } function $h(a, b, g, k, p) { b && "object" === typeof b && ai({ data: b, type: "_uapl_" }, Kl, a); g && "object" === typeof g && ai({ data: g, type: "_uapdt_" }, Rj, a); k && "object" === typeof k && ai({ data: k, type: "_uaps_" }, Qj, a); p && "object" === typeof p && ai({ data: p, type: "_uapdbl_" }, Ll, a); } function ai(a, b, g) {
        var k = a.data, p = wb(), B; for (B in k) if (ub(k, B)) {
            var H = p, V = k[B]; null !== V && "object" === typeof V && ub(V, "value") && (H = H && !V["public"], V = V.value); b(V) ? (H ? V = "dT_pv" : "_uapdt_" === a.type && Rj(V) &&
                (V = V.getTime()), g.Te(a.type, B, V)) : g.Td(a.type, B, V);
        }
    } function Sj(a) { a = a ? F(a) : []; if (0 === a.length) return !1; for (var b = 0; b < a.length; b++)if (0 > Ke(Xk, a[b])) return !1; return !0; } function Hc(a, b, g, k, p) { a = new sh(a); Sj(b) ? $h(a, b.ng, b.Pf, b.Ng, b.mg) : $h(a, b, g, k, p); return a.Wf(); } function Kc(a) { th[a] ? th[a]++ : th[a] = 1; } function bj() { Bb("ds") && (th = {}, cf(function (a, b, g, k) { if (Bb("ds")) { g = ""; for (p in th) ub(th, p) && (g += "".concat(g ? "|" : "").concat(p, "-").concat(th[p])); var p = g; !b && Le && p && (a.av(k, "ds", p, !1), th = {}); } })); } function cj(a,
        b, g) { (a = xk.bg(a)) && Jb(g, b + "=" + a); } function yk(a, b, g, k) { $g && (b = $g.ag(), g = [], cj($g.ke, "spL", g), cj($g.Ld, "spD", g), cj($g.Se, "spSS", g), cj($g.je, "spDb", g), b && a.av(k, "fsp", encodeURIComponent(b.join(",")), !0), g.length && a.av(k, "sp", encodeURIComponent(g.join(";")), !0), $g = null); } function bi(a, b, g, k) {
            $g = Sj(a) ? new xk(a.ng, a.Pf, a.Ng, a.mg) : new xk(a, b, g, k); a = Wk($g, xk.Db); b = $g.Bc(); if (b.length && vf()) for (g = 0; g < b.length; g++)k = b[g], zk = "Property key [" + k.key + "] was not accepted because: " + k.reason, ib.console.log(zk); ($g.cg() ||
                b.length) && Z(); return a;
        } function dj() { return zk ? { severity: "Info", text: zk + "(Note: only last errorMessage gets reported!)", type: "wsp" } : null; } function yi(a, b) { if (t !== b) return -2; if (3 === b && !Le) { var g; Xd(d, a); Xd(h, a); a = Be(null === (g = re) || void 0 === g ? void 0 : g.ta, d); y(a); return 2; } g = d; if (1 === a.id && 1 === g.id && 1 === m.length) return Xd(m[0].newView, a), Xd(d, a), Xd(h, a), 2; if (g.name === a.name) return -1; Je(a); return 1; } function ec(a) { var b = +a; return a && !isNaN(b) && 11359836E5 < b && 41338908E5 > b ? b : ac(); } function jd(a) {
            return "function" ===
                typeof a;
        } function Gc(a, b) { return typeof a === b; } function ld(a, b) { return Gc(a, b) || "undefined" === typeof a || null === a; } function wf(a) { ib.console.log(a); } function Xc(a, b, g) { wf("".concat(a, ' "').concat(b, '" is deprecated! ').concat(g)); } function Vb() { wf("Wrong argument types in method. Please check the documentation to fix that"); } function Ac() { wf("Too many arguments. Please check the documentation to fix that"); } function uh() { wf("No action was found with provided action id argument."); } function ej() { return mg.wc(); }
    function Yk(a, b, g, k, p) { void 0 === b && (b = !1); void 0 === g && (g = !1); void 0 === k && (k = !1); Tf(a, (null === p || void 0 === p ? void 0 : p.contentType) || ""); return w(!1, !0, b, g, { referrer: Ib(), beacon: a }, k, p); } function Ml(a) { Ak.push(a); } function Tf(a, b) { xc(Ak, function (g) { g(a, b); }); } function Ig(a, b) { Tj && (Tj && !Jg && (fj.observe(document, Bk), Jg = !0), Kg[a] || (Kg[a] = [], Uj = Object.keys(Kg), Vj[a] = b)); } function Nb(a) { Tj && (Kg[a] && (delete Kg[a], delete Vj[a]), Uj = Object.keys(Kg), 0 === Uj.length && fj && Jg && (fj.disconnect(), Jg = !1)); } function uc(a, b) {
        if (!ci) return null;
        gj[a] || (gj[a] = new ci(b)); return gj[a];
    } function Ck(a) { Tj && gj[a] && (gj[a].disconnect(), delete gj[a]); } function Zk(a) { return Kg[a] ? Kg[a] : []; } function $k(a, b) { Kg[a] = b; } function al() { Bk = { childList: !0, subtree: !0 }; ci && (fj = new ci(function (a) { for (var b = ac(), g = [], k = 0; k < a.length; k++) { var p = a[k]; "childList" === p.type && g.push.apply(g, p.addedNodes); } if (g.length) for (a = { time: b, nodes: g }, b = 0, g = Uj; b < g.length; b++)k = g[b], p = Vj[k], "function" === typeof p && p(k, a), Kg[k].push(a); })); } function bl(a, b) {
        var g = Rd; return g && g.bc < Xb("tal") &&
            g.fb + a <= Xb("tt") ? (g = Za(!1), a = { name: b ? "".concat("setImmediate(...)") : "".concat("setTimeout(..., ").concat(a, ")"), type: "_t_", start: ac(), Xe: a, xa: g || !0 }, ve(a).id) : 0;
    } function cl(a) { if (a = bc(a)) a.vc(), Kb(function () { Ec(); Lb(Zb(), !0); }, 0); } function dl(a) { var b = bc(a); b && (b.Sg(), Cg++, Jb(Tg, a), Lb(b)); } function md(a) { var b = bc(a); b && (Cg--, Kb(function () { db(a); b.Qf(); Lb(Zb(), !0); }, 0)); } function el(a, b) { return rg(970, a || "XHR Error", b); } function Wj(a) { return rg(971, "XHR Canceled", a); } function Dk(a) {
        return rg(972, "XHR Timeout",
            a);
    } function Ek(a, b) { var g = 0 === a.time ? 0 : b - a.time; a.total += g; a.time = b; return a.me = g; } function fl(a, b) { void 0 === b && (b = ac()); var g = Fk[a]; void 0 === g && (g = Fk[a] = { time: b, total: 0, me: 0 }); return Ek(g, b); } function gl(a, b) { void 0 === b && (b = ac()); a = Fk[a]; if (void 0 === a) return 0; Ek(a, b); a.time = 0; return a.me; } function hl(a) { a = Fk[a]; return void 0 === a ? 0 : a.total; } function il(a, b, g) { if (!a || !b) return -1; if (a.findIndex) return a.findIndex(b, g); for (var k = 0; k < a.length; k++)if (b.call(g, a[k], k, a)) return k; return -1; } function jl(a, b) {
        if ($a(Array.prototype.map)) return Array.prototype.map.call(a,
            b); for (var g = [], k = 0; k < a.length; k++)Jb(g, b(a[k], k, a)); return g;
    } function kl(a) { var b = a.getAttribute("class"), g = 100 - a.tagName.length; if (!b) return ""; b = b.trim().replace(/ +/g, "."); if (b.length <= g) return b; a = tb(b.split("."), function (k) { return k.length < g; }); for (b = a.join("."); b.length > g && a.length;)a.pop(), b = a.join("."); return b; } function dg(a, b) {
        if (a.id && 100 >= a.id.length) return b.unshift("#".concat(a.id)), !0; var g = a.nodeName.toLowerCase(); b.unshift(g); var k = kl(a); if (k && (g += ".".concat(k), b[0] = g, ef(b))) return !0;
        k = a; for (var p = 1; k;)k = k.previousElementSibling, (null === k || void 0 === k ? void 0 : k.nodeName) === a.nodeName && p++; g += ":nth-of-type(".concat(p, ")"); b[0] = g; if (ef(b)) return !0; k = a.previousElementSibling; for (p = 1; k;)k = k.previousElementSibling, ++p; g = g.replace(/:nth-of-type\(\d+\)/, 1 < p ? ":nth-child(".concat(p, ")") : ":first-child"); b[0] = g; return ef(b);
    } function ef(a) { return 1 === document.querySelectorAll(a.join(">") || "").length; } function hj(a) {
        if (!a || !Wh(a, 8) || !document.querySelectorAll) return ""; try {
            for (var b = a, g = []; b &&
                100 >= g.join(">").length && !dg(b, g);)b = b.parentElement; var k = g.join(">"); if (100 < k.length) { var p = a.getAttribute("class"), B = a.tagName.toLowerCase(); if (p) var H = "..." + Wb("".concat(B, ".").concat(p), 100 - B.length - 3, !1, ""); else { var V = a.id; H = V ? "..." + Wb("#".concat(V), 97, !1, "") : ""; } var ia = H || Wb(k, 100, !0); } else ia = k; return ia;
        } catch (Va) { } return "";
    } function ll(a, b) {
        try {
            if (3 !== t && ("__vue__" === b || "__vue_app__" === b) && Bb("usrvd") && 2 !== t) {
                var g, k, p, B; var H = (null === (p = null === (k = null === (g = a.__vue_app__) || void 0 === g ? void 0 :
                    g.config) || void 0 === k ? void 0 : k.globalProperties) || void 0 === p ? void 0 : p.$router) || (null === (B = a.__vue__) || void 0 === B ? void 0 : B.$router); if (H) { var V = "function" === typeof H.afterEach; var ia = H.currentRoute && V ? !0 : !1; } else ia = !1; if (ia) {
                        var Va, Wa; if (Va = (null === (Wa = H.matcher) || void 0 === Wa ? void 0 : Wa.match) || H.resolve) {
                            var ob, Db, Qb, nc = null !== (Qb = null !== (ob = H.options.base) && void 0 !== ob ? ob : null === (Db = H.options.history) || void 0 === Db ? void 0 : Db.base) && void 0 !== Qb ? Qb : "", Tc = H.options.mode; nc || "hash" !== Tc || (nc = "#"); var Uc =
                                nc; a = m; for (b = 0; b < a.length; b++) { var hd = a[b]; hd.oldView && Xd(hd.oldView, eg(hd.oldView, Va, Uc)); Xd(hd.newView, eg(hd.newView, Va, Uc)); } hd = d; a = h; Xd(hd, eg(hd, Va, Uc)); Xd(a, eg(a, Va, Uc));
                        } H.afterEach(ij); Ad(2);
                    }
            }
        } catch (qe) { Ad(1); }
    } function ij(a) { 2 === t && yi(di(a), 2); } function di(a) { var b = a.matched; a = a.path; return b.length ? { group: b[b.length - 1].path, name: a } : { name: a }; } function eg(a, b, g) { var k = vb(a.name, g), p = a.name; p === g ? p = "/" : -1 !== k && (p = p.substring(k + g.length)); a = Ha(Ha({}, a), { name: p }); return Ha(Ha({}, a), di(b(a.name))); }
    function Gk(a) { void 0 === jj && (jj = Xb("prfSmpl") > Math.floor(1E4 * Math.random())); jj && (0 > Uf && (Uf = Xb("msl"), uf.dT_.si(function () { Hk(); }, 3E4), Mf(ib, "beforeunload", function () { Hk(!0); })), ml.push(a)); } function kj(a) { var b = ""; xc(a.d, function (g) { b += "".concat(g[0]).concat("=").concat(g[1]).concat("|"); }); return "".concat(a.i).concat("|").concat(a.t).concat("|").concat(b.slice(0, -1)); } function zi(a, b) {
        var g = ""; xc(F(b[1]), function (k) { g += "".concat(k).concat("=").concat(b[1][k]).concat("|"); }); return "".concat(a).concat("|").concat(b[0]).concat("|").concat(g.slice(0,
            -1));
    } function Hk(a) { void 0 === a && (a = !1); xc(ml.splice(0), function (b) { if (0 === b.t) { var g = !1; for (var k = b.d, p = k.length; !g && p;)g = 0 === k[--p][1]; } else g = !1; g || (b.a ? Nl(b) : Xj.push(kj(b))); }); Ik(a); } function Nl(a) { var b = a.i, g = ah[b]; g ? (g[0] += a.t, xc(a.d, function (k) { g[1][k[0]] = void 0 !== g[1][k[0]] ? g[1][k[0]] + k[1] : k[1]; })) : (ah[b] = [a.t, {}], xc(a.d, function (k) { ah[b][1][k[0]] = k[1]; })); } function Ik(a) {
        void 0 === a && (a = !1); xc(F(ah), function (g) { Xj.push(zi(g, ah[g])); }); var b = ""; xc(Xj, function (g, k, p) {
            if (b.length + 1 + g.length >= Uf) {
                Jk(b,
                    a); b = ""; if (k === p.length - 1) { Jk("".concat(Ai).concat(g), a); return; } b = "".concat(Ai).concat(g);
            } else b ? b = b + "," + g : b = "".concat(Ai).concat(g); b.length && k === p.length - 1 && Jk(b, a);
        }); Xj = []; ah = {};
    } function Jk(a, b) { var g; void 0 === b && (b = !1); var k = ej(); mg.ar(k, a); Yk(k, b, !1, !1, (g = {}, g.contentType = "perf", g)); } function lj(a) { if (Object.values) return Object.values(a); var b = []; if (a === Object(a)) for (var g in a) ub(a, g) && b.push(a[g]); return b; } function cc() {
        ei = Yj.connection; Bb("eni") && ei && cf(function (a, b, g, k) {
            !b && Le && ei && (b = "".concat(ei.effectiveType ||
                "-", "|").concat(ei.downlink || -1), ei.type && (b = "".concat(b, "|").concat(ei.type)), a.av(k, "ni", b, !1));
        });
    } function Ol(a) { return "longtask" === (null === a || void 0 === a ? void 0 : a.entryType) && 50 < a.duration; } function Bi(a) { uf.dT_.apush(Ci, { startTime: a.startTime, duration: a.duration }); } function Di() { try { Zj = new PerformanceObserver(function (a) { xc(tb(a.getEntries(), Ol), Bi); }), Zj.observe({ type: "longtask", buffered: !0 }); } catch (a) { } } function Ei() {
        Gh = Hh = 0; Fi = Gi = -5E3; ak = []; if (Bb("cls") && De.cls) try {
            (new PerformanceObserver(function (a) {
                a =
                    a.getEntries(); for (var b = 0; b < a.length; b++) { var g = a[b]; if ("layout-shift" === (null === g || void 0 === g ? void 0 : g.entryType) && !g.hadRecentInput) { var k = g.startTime; if (0 === Lg) { if (5E3 < k - Gi || 1E3 < k - Fi) Gi = k, Gh = 0; Fi = k; Gh += g.value; Hh = Math.max(Hh, Gh); } else 1 === Lg && ak.push({ startTime: k, Jf: g.value }); } }
            })).observe({ type: "layout-shift", buffered: !0 });
        } catch (a) { }
    } function mj() {
        bk = new ib.PerformanceObserver(function (a) {
            a = a.getEntries(); for (var b = 0; b < a.length; b++) {
                var g = a[b], k = g.name; g = Math.round(g.startTime); "first-paint" ===
                    k && (ck = g); "first-contentful-paint" === k && (Kk = g);
            }
        }); try { bk.observe({ type: "paint", buffered: !0 }); } catch (a) { bk.observe({ entryTypes: ["paint"] }); }
    } function nj() {
        dk = new ib.PerformanceObserver(function (a) {
            a = a.getEntries(); a = a[a.length - 1]; if (a.size > Hi) switch (Hi = a.size, Lg) {
                case 0: $l = fi(a); break; case 1: Ih.push(fi(a)); break; case 2: Lj - Ef > a.startTime && (Hi = a.size, a = fi(a), wd("_wv_", [["AAI", Ff + ""], ["lcpE", a.zc || "-"], ["lcpSel", a.gd || "-"], ["lcpS", a.size + ""], ["lcpT", a.Ka + ""], ["lcpU", a.url || "-"], ["lcpLT", a.loadTime + ""]],
                    !1, void 0, 1));
            }
        }); try { dk.observe({ type: "largest-contentful-paint", buffered: !0 }); } catch (a) { dk.observe({ entryTypes: ["largest-contentful-paint"] }); }
    } function fi(a) { var b, g = a.startTime; g && (g = qc(g)); return { Ka: Math.round(g), loadTime: Math.round(a.loadTime), size: a.size, gd: hj(a.element) || "-", zc: (null === (b = a.element) || void 0 === b ? void 0 : b.tagName) || "-", url: a.url || "-" }; } function nl(a) {
        var b = 0; for (a = a.getEntries(); b < a.length; b++) {
            var g = a[b]; "first-input" === g.entryType && g.processingStart && g.startTime && (e = Math.round(g.startTime),
                l = Math.round(g.processingStart - g.startTime));
        } ol();
    } function ol() { 2 === Lg && ac() < Lj + 2E4 && wd("_wv_", [["AAI", Ff + ""], ["fIS", e + ""], ["fID", l + ""]], !1, void 0, 1); } function pl() { var a, b = null === (a = ib.PerformanceObserver) || void 0 === a ? void 0 : a.supportedEntryTypes; return !!b && -1 !== Ke(b, "first-input"); } function Ii() {
        if (pl()) try { (new PerformanceObserver(nl)).observe({ type: "first-input", buffered: !0 }); } catch (a) { } else q("GLOBAL_EVENT_FIRED", function g(b) {
            var k = b.detail; b = k.e.timeStamp; if (e || -1 === Ke(c, k.t) || !b) b = !1; else {
                k =
                    pe(); var p = 1E12 < b; p && b < k ? b = !1 : (e = Math.round(p ? b - k : b), l = Math.max(0, Math.round(oj() - e)), ol(), b = !0);
            } b && A("GLOBAL_EVENT_FIRED", g);
        });
    } function Ji(a) { a.detail.i === Ff && (A("ACTION_CLOSED", Ji), Lg = 1); } function ql(a) {
        var b = a.detail, g = b.a; a = b.s; if (b.i === Ff) {
            A("ACTION_BEFORE_SEND", ql); Lg = 2; b = []; g = a - g; if (Bb("pt")) {
                if (De.lcpT) {
                    var k = $l; for (var p = Ih.length - 1; 0 <= p; p--)if (Ih[p].Ka < g) { k = Ih[p]; break; } k && 0 !== k.Ka ? k.Ka > g ? k = { Ka: -6 } : Hi = k.size || 0 : k = { Ka: -5 }; k.zc && k.gd && k.url ? b.push(["lcpE", k.zc], ["lcpSel", k.gd], ["lcpS", k.size +
                        ""], ["lcpT", k.Ka + ""], ["lcpU", k.url], ["lcpLT", k.loadTime + ""]) : b.push(["lcpT", k.Ka + ""]);
                } else b.push(["lcpT", "-3"]); De.fcp ? b.push(["fcp", (Kk ? Kk > g ? -6 : qc(Kk) : -5) + ""]) : b.push(["fcp", "-3"]); De.fp ? b.push(["fp", (ck ? ck > g ? -6 : qc(ck) : -5) + ""]) : b.push(["fp", "-3"]);
            } if (Bb("cls")) if (De.cls) { k = b.push; p = 0; for (var B = ak; p < B.length; p++) { var H = B[p], V = H.startTime; if (V < g) { if (5E3 < V - Gi || 1E3 < V - Fi) Gi = V, Gh = 0; Fi = V; Gh += H.Jf; Hh = Math.max(Hh, Gh); } } ak = []; k.call(b, ["cls", +Hh.toFixed(4) + ""]); } else b.push(["cls", "-3"]); if (Bb("lt")) if (De.lt) {
                k =
                    b.push; p = 0; B = pe(); H = 0; for (V = Ci; H < V.length; H++) { var ia = V[H], Va = p + ia.duration > g; B + ia.startTime + ia.duration <= a && !Va && (p += ia.duration); } null === Zj || void 0 === Zj ? void 0 : Zj.disconnect(); k.call(b, ["lt", Math.round(p) + ""]);
            } else b.push(["lt", "-3"]); 0 === e && 0 === l || b.push(["fIS", e + ""], ["fID", l + ""]); 0 < b.length && wd("_wv_", b, Ff, Ef, 1);
        }
    } function ek() {
        try {
            var a = ib.dT_; if (!a || !(void 0 === ib.dialogArguments ? navigator.cookieEnabled || Ra() : Ra())) return !1; var b = ib.dT_; b.initialized = !1; b.pageId = ""; b.pageTitle = ""; b.frameCount =
                0; b.bwsW = 0; b.bwsH = 0; b.syn = !1; b.googleBot = !1; b.tp = sd; b.tdto = cd; b.gicv = Ia; b.aFU = Fd; b.gPId = Zc; b.iRO = vc; b.gBI = Pa; b.iMD = ra; b.cfg = Ic; b.acfgP = Fc; b.smbi = Tb; b.ism = mb; b.iMod = yb; b.gMu = Ub; b.tau = Hb; b.icr = Yb; b.lv = Ka; b.sv = Xa; b.svl = ba; b.gh = ma; b.aesc = Da; b.puesc = xa; b.rsc = Ua; b.tpesc = P; b.afpl = U; b.apl = oa; b.rpl = ea; b.dbg = R; b.dbc = Ea; b.dlf = eb; b.loc = Ib; b.sch = hf; b.gNTO = ke; b.vAT = qc; b.cVIn = wc; b.sNT = wb; b.gPAH = Ja; b.id = $b; b.ss = La; b.ssP = bi; b.asl = fa; b.sMPS = S; b.gBP = Ng; b.cB = ej; b.sB = Yk; b.ea = pg; b.la = ue; b.lx = wg; b.dlx = gf; b.ex = Qe; b.ec = Ge;
            b.lc = Re; b.eV = wh; b.pe = Il; b.pw = Jl; b.pl = Vk; b.rs = vk; b.pcn = Ah; b.ca = Gb; b.can = Bf; b.isci = ad; b.ti = we; b.las = zb; b.gca = rc; b.gAR = Fa; b.gAA = wa; b.sxbe = Rc; b.aWF = Lk.dtAWF; b.mx = ch; b.mxf = rg; b.mxg = el; b.mxc = Wj; b.mxt = Dk; b.gITAID = ta; b.re = af; b.rex = Cd; b.bi = Y; b.ei = tc; b.gci = da; b.gpi = qa; b.cii = Ma; b.pii = Ta; b.gcv = n; b.aad = $c; b.sole = mf; b.iolm = nf; b.solb = xh; b.slem = $e; b.lst = sa; b.sle = Og; b.obc = Qg; b.gLEELF = bh; b.gNNTV = Xf; b.gLAet = Mh; b.iSAC = Oh; b.sSAC = Cf; b.lAID = Sa; b.maep = yh; b.snt = hg; b.aO = uc; b.rO = Ck; b.aMO = Ig; b.rMO = Nb; b.gMN = Zk; b.sMN = $k; b.eta =
                bl; b.lta = cl; b.etc = dl; b.ltc = md; b.cia = vg; b.wst = fl; b.wsp = gl; b.wtt = hl; b.rpm = Gk; b.sasl = Ml; b.dnrui = qd; b.aFr = tb; b.fE = xc; b.aM = jl; b.aAP = Hc; b.aAPY = $d; b.iBt = Na; b.cAE = wd; b.addE = q; b.remE = A; b.disE = C; b.cUIRO = qb; b.aAWC = Ue; b.gXACT = Jh; b.uaxu = sg; b.gaxu = tg; b.last = jb; b.aFI = il; b.aur = oc; b.oK = F; b.oHOP = ub; b.oV = lj; b.gdi = pc; b.ssmbi = mc; b.gecsss = hj; b.fEP = Rb; b.iVRA = ll; b.sNV = yi; b.sVDM = Ad; b.gVDM = pd; b.fP = Pb; b.iNF = $a; b.aAPy = Oa; b.asyncCoreVersion = "10271230629152232"; a.version = "10271230629152232"; var g = na(); Kb = g.st; ac = g.nw; Cc = g.pn; vb = g.io; Jb = g.apush;
            Id = g.sC; df = g.gC; Vg = g.esc; Oi = g.cLSCK; Sg = g.gPC; xj = g.sPC; Th = g.iVSC; qh = g.p3SC; Pf = g.gSC; lh = g.sSC; Ag = g.gVI; Fg = g.cPC; Ij = g.gSSV; Rf = g.sSSV; Dg = g.gEBTN; Eg = g.gEL; ni = g.gSId; oi = g.pCfg; Pi = g.pCSAA; Aj = g.cFHFAU; sc = g.sCD; Bb = g.bcv; Xb = g.ncv; Pc = g.scv; fk = g.stcv; ee = g.rplC; cf = g.aBPSL; Ch = g.gBPSL; Kf = g.gBPSCC; Me = g.gFId; ji = g.oEIE; ii = g.oEIEWA; ff = g.iNV; Yh = g.gVID; gk = g.gARnVF; Ej = g.cAUV; xi = g.sVIdUP; ui = g.gDtc; gi = g.cfgO; Yc = g.version; Yi = g.rBPSL; ri = g.aNVL; pj = g.dPV; qj = g.ePV; fg = g.eA; xf = g.dA; Ri = g.iXB; Hj = g.de; nh = g.aRI; sk = g.gXBR; vf = g.cCL;
            oj = g.rnw; pe = g.gto; Qf = g.iEC; Xg = g.ct; Mf = g.ael; tf = g.cuel; Pj = g.gNVIdN; Vh = g.gxwp; Ke = g.aIOf; og = g.prm; rj = g.gidi; Cj = g.iDCV; yg = g.gCF; Wh = g.iIO; Bh = g.gPSMB; Xh = g.iAEPOO; jh = g.lvl; Sh = og(); var k = navigator.userAgent; a = { ie: NaN, edge: NaN, ec: NaN, ff: NaN, ch: NaN, sf: NaN, msf: NaN, ab: NaN, op: NaN }; try {
                b = /Firefox[\/\s](\d+\.\d+)/; g = /(iPod|iPhone|iPad)/; var p = /AppleWebKit/; if (0 <= k.indexOf("MSIE")) { var B = k.lastIndexOf("MSIE") + 5; a.ie = parseInt(k.substring(B, B + 3)); } else if (0 <= k.indexOf("Trident")) {
                    if (0 <= k.indexOf("rv:")) {
                        var H = k.lastIndexOf("rv:") +
                            3; var V = parseInt(k.substring(H, H + 2));
                    } else 0 <= k.indexOf("rv ") ? (H = k.lastIndexOf("rv ") + 3, V = parseInt(k.substring(H, H + 2))) : V = NaN; a.ie = V;
                } else if (0 <= k.indexOf("Edge")) { var ia = k.lastIndexOf("Edge") + 5; a.edge = parseInt(k.substring(ia, ia + 2)); } else if (0 <= k.indexOf("Edg/")) { var Va = k.lastIndexOf("Edg/") + 4; a.ec = parseInt(k.substring(Va, Va + 2)); } else if (0 <= k.indexOf("Android")) { var Wa = k.indexOf("Android") + 8; a.ab = parseFloat(k.substring(Wa, Wa + 3)); } else if (k.match(g) && k.match(p)) a.msf = parseFloat((k.match(/(?:OS |Version\/)([0-9]+)(?:[_.][0-9])*/) ||
                    [])[1]); else if (("Safari" === navigator.appName || -1 < k.indexOf("Safari")) && -1 === k.indexOf("Chrom")) { var ob = k.substring(k.lastIndexOf("Version/")).match(/Version\/([0-9]+(\.[0-9]*)?)/); a.sf = ob ? parseInt(ob[1]) : NaN; } else if (ib.opera) a.op = parseInt(ib.opera.version().split(".")[0]); else if (0 <= k.indexOf("OPR/")) a.op = parseInt((k.match(/OPR\/([0-9]*\.[0-9]*)/) || [])[1]); else if (b.test(k)) { var Db = parseInt((k.match(b) || [])[1]); a.ff = -1 === Db ? 0 : Db; } else {
                        var Qb; var nc = +(null === (Qb = /Chrome\/([0-9]{1,4})/.exec(k)) || void 0 ===
                            Qb ? NaN : Qb[1]) || NaN; a.ch = nc;
                    }
            } catch (pm) { } dd = a; na().syn = 0 < k.indexOf("RuxitSynthetic"); na().googleBot = 0 <= k.indexOf("Googlebot"); var Tc, Uc = ib.dT_, hd = bb(); hd !== Uc.version && (null === (Tc = ib.console) || void 0 === Tc ? void 0 : Tc.log("WARNING: Snippet version [" + Uc.version + "] and monitoring code [" + hd + "] versions do not match! Please update your code snippet to ensure compatibility.")); Uc.version = "10271230629152232"; cg = Uc.agentStartTime || Uc.gAST(); if (!Uc || Uc.initialized) return !1; k = 0; for (var qe = F(dc); k < qe.length; k++)dc[qe[k]] =
                []; K(); la(); qf = gi ? gi() : na().cfg; qf.initializedModules = ""; Ri(qf); lb(); qe = 0; dd.sf ? qe = 100 : dd.msf && (qe = 1E3); Fj = qe; me = { actions: {}, za: [] }; Jf = 1; am = 0; Dc = []; id = []; Rd = null; ic(null, !0); Yg = []; vh(); Jd = 0; q("VISIBILITY_CHANGED", Mg); Kd = Vd(Ib()); be(); q("CONFIG_UPDATE", be); rf = {}; xd = cd(); Ya = Qa = void 0; Ab = 0; Wc = !0; Bb("imm") && ra() || (Jc("click", "C", "clk"), Jc("mousedown", "D", "mdw"), Jc("mouseup", "U", "mup")); Jc("dblclick", "CC", "dcl"); Jc("keydown", "KD", "kyd"); Jc("keyup", "KU", "kyu"); Jc("scroll", "S", "scr"); Jc("touchstart", "TS",
                    "tcs"); Jc("touchend", "TE", "tce"); Jc("change", "H", "chg"); if (Pc("ade")) { var Dd = Pc("ade").split(","); if (Dd && 0 < Dd.length) for (qe = 0; qe < Dd.length; qe++)Jc(Dd[qe]); } Lj = 0; a: { var mh = Dg("meta"), Qi = Xb("mrt"); for (Dd = 0; Dd < mh.length; Dd++) { var Lf = mh[Dd], zj = Lf.getAttribute("http-equiv"); if (zj && "refresh" === zj.toLowerCase()) { var qk = Lf.getAttribute("content"); if (Cc((qk && qk.split(";") || [])[0]) <= Qi) { var Ki = !0; break a; } } } Ki = !1; } Ki && nf(); "undefined" !== typeof WeakMap && (Sf = new WeakMap); var bm = document.location; bm && cd().aFU(bm.href);
            var sj = Pc("rid"); if (!sj || "RID_" === sj) { mh = fk; var tj = Pc("ridPath"), hk = tj ? tj : ib.location.pathname, fe = ib.location.search; fe && fe.length && "?" === fe.charAt(0) && (fe = fe.substring(1)); tj = fe; var hi = 31 + va(hk); hi = 31 * hi + va(tj); mh("rid", "RID_" + (hi & hi)); } Mf(ib, "beforeunload", Qg); Mf(ib, "unload", ig); Mf(ib, "pagehide", $f); Mf(document, "readystatechange", Pg); Kb(oe, 3E3); Mf(ib, "load", Yd); Ef = Pd(); Ki = !Ki; if (!na().gCP) {
                var uj = cd().sSAC; uj && uj(!1); var ne = (Bb("dsss") ? Ka("dtSa") : decodeURIComponent(yg("dtSa"))).split("|"); if (12 ===
                    ne.length) { var ik = Bb("dsss"), cm = Bb("dssv"); uj = ""; !ik && cm ? uj = Ka("dtSa", !0) : ik && !cm && (uj = decodeURIComponent(yg("dtSa"))); var Mk = uj.split("|"); if (4 === Mk.length) { var rl = Mk[1], Ee = Mk[2], Pl = Mk[3]; ne.push(Mk[0]); ne.push(rl); ne.push(Ee || ""); ne.push(Pl); } } var Nk = ne.join("|"); Ki && jf("-"); if (Nk && "-" !== Nk) {
                        var te = Nk.split("|"); if (16 === te.length || 12 === te.length) {
                            var jk = Cc(te[5]); ne = Ef; if (jk <= ne && 6E4 >= ne - jk) {
                                ne = { id: -1, kind: -1, hydrated: !1, trigger: -1 }; ik = 0; for (var kk = xa(te[15]).split(";"); ik < kk.length; ik++) {
                                    var sl =
                                        kk[ik], tl = sl.substring(1); switch (sl.charAt(0)) { case "i": ne.id = +tl; break; case "k": ne.kind = +tl; break; case "h": ne.hydrated = !!+tl; break; case "t": ne.trigger = +tl; }
                                } var Ok = { isDelayed: "true" == te[0], type: te[1], id: Cc(te[2]), name: te[3], info: te[4], startTime: jk, frameId: te[6], ya: N(te[7]), anchor: te[10], Y: te[11], ta: void 0 }; 16 === te.length && (Ok.ta = { name: N(te[12]), timestamp: Cc(te[13]), group: N(te[14]), trigger: ne.trigger, kind: ne.kind, hydrated: ne.hydrated, id: ne.id }); te = !1; na() !== cd() && (te = cd().iRO(Ok.ya)); !document.referrer ||
                                    Ok.ya === document.referrer || Ok.ya === document.location.href || te ? re = Ok : jf(Nk);
                            } else jf("-");
                        }
                    }
            } try { Ad(1); h = d = { id: ++Zg, name: Wd(Ib()), timestamp: Ef, kind: 0, trigger: t, hydrated: !1 }; var ul, Pk = null === (ul = re) || void 0 === ul ? void 0 : ul.ta, dm = Be(Pk, d); y(dm); q("VIEW_STABLE", Ie); q("ACTION_ENTERED", ae); q("ACTION_BEFORE_SEND", rd); q("ACTION_SENT", Bd); Jj = Xe(gh); q("HISTORY_API_EVENT", ce); Mf(ib, "popstate", ce); Mf(ib, "hashchange", ce); try { hh("pushState"), hh("replaceState"); } catch (pm) { } cf(Kh); } catch (pm) { } Lh(); zh(); f(); Mc(); xe();
            cc(); Ti = "0"; var vl = document.visibilityState; vl ? ("hidden" === vl && (Ti = "1"), Mf(document, "visibilitychange", gc)) : Ti = "2"; ed(); Lg = 0; var vj = !!ib.PerformanceObserver; De.cls = !(!vj || !ib.LayoutShift); De.fcp = !(!vj || !ib.PerformancePaintTiming); De.fp = !(!vj || !ib.PerformancePaintTiming); De.lcpT = !(!vj || !ib.LargestContentfulPaint); De.lt = !(!vj || !ib.PerformanceLongTaskTiming); Bb("pt") && (De.fp && mj(), De.lcpT && nj()); Ei(); Ci = []; Bb("lt") && De.lt && Di(); Ii(); q("ACTION_CLOSED", Ji); q("ACTION_BEFORE_SEND", ql); bj(); al(); cf(yk); q("DEBUG_INFO_REQUESTED",
                dj); ua(); T(); q("DEBUG_INFO_REQUESTED", rj); Ob(); if ("undefined" === typeof ib.dT_) var rm = !1; else "undefined" === typeof ib.dtrum && (ib.dtrum = new wl), rm = !0; if (!rm) return !1; var qm = na(); qm.initialized = !0; "function" === typeof qm.initCallback && qm.initCallback();
        } catch (pm) { return !1; } return !0;
    } var Sh = this.dT_ && dT_.prm && dT_.prm() || window.Promise, uf = "undefined" !== typeof window ? window : self, Yj = navigator, Si = self, Li = {
        u: "transferSize", v: "encodedBodySize", w: "decodedBodySize", L: "workerStart", M: "dtRpid", V: "dtSInfo", W: "dtTao",
        X: "responseStatus"
    }, sf = { x: "statuscode", y: "ip", A: "failedResource", C: "requestId", E: "relevance", F: "relevantArea", K: "isCritical", N: "vcIrrelevanceReason", O: "imageWidth", P: "imageHeight", Q: "imageNaturalWidth", R: "imageNaturalHeight", S: "onloadTime", T: "rtRequestId", U: "certExpDate" }, yf = { o: "domInteractive", p: "domContentLoadedEventStart", q: "domContentLoadedEventEnd", r: "domComplete", s: "loadEventStart", t: "loadEventEnd" }, Mi = {
        c: "redirectStart", d: "redirectEnd", e: "fetchStart", f: "domainLookupStart", g: "domainLookupEnd",
        h: "connectStart", i: "connectEnd", j: "secureConnectionStart", k: "requestStart", l: "responseStart", m: "responseEnd"
    }, si = Ha(Ha(Ha({}, Mi), { n: "domLoading" }), yf), Wi = Ha(Ha(Ha({}, Mi), yf), Li), Vi = Ha(Ha(Ha({}, Mi), Li), sf); Ha(Ha(Ha({}, Vi), si), Wi); var wj; (function (a) { a[a.ENABLED = 0] = "ENABLED"; a[a.DISABLED = 1] = "DISABLED"; a[a.DELAYED = 2] = "DELAYED"; })(wj || (wj = {})); var lk; (function (a) { a[a.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE"; a[a.ENABLED = 1] = "ENABLED"; a[a.BLOCKED = 2] = "BLOCKED"; })(lk || (lk = {})); var mk; (function (a) {
        a[a.NONE =
            1] = "NONE"; a[a.OFF = 2] = "OFF"; a[a.PERFORMANCE = 3] = "PERFORMANCE"; a[a.BEHAVIOR = 4] = "BEHAVIOR";
    })(mk || (mk = {})); var nk; (function (a) { a.OVERLOAD_PREVENTION = "ol"; a.PRIVACY_STATE = "prv"; a.SERVER_ID = "srv"; a.SESSION_ID = "sn"; })(nk || (nk = {})); var Qk; (function (a) { a.DYNATRACE_MOBILE = "dynatraceMobile"; a.MOBILE_AGENT = "MobileAgent"; })(Qk || (Qk = {})); var xl; (function (a) {
        a[a.ARRAY = 0] = "ARRAY"; a[a.BOOLEAN = 1] = "BOOLEAN"; a[a.NUMBER = 2] = "NUMBER"; a[a.STRING = 3] = "STRING"; a[a.FUNCTION = 4] = "FUNCTION"; a[a.OBJECT = 5] = "OBJECT"; a[a.DATE = 6] = "DATE";
        a[a.ERROR = 7] = "ERROR"; a[a.ELEMENT = 8] = "ELEMENT"; a[a.HTML_ELEMENT = 9] = "HTML_ELEMENT"; a[a.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT"; a[a.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY"; a[a.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING"; a[a.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING"; a[a.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING"; a[a.CSS_RULE = 15] = "CSS_RULE"; a[a.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET"; a[a.REQUEST = 17] = "REQUEST"; a[a.RESPONSE = 18] = "RESPONSE"; a[a.SET = 19] = "SET";
        a[a.MAP = 20] = "MAP"; a[a.WORKER = 21] = "WORKER"; a[a.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST"; a[a.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT"; a[a.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT"; a[a.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT"; a[a.ARRAY_BUFFER = 26] = "ARRAY_BUFFER"; a[a.SHADOW_ROOT = 27] = "SHADOW_ROOT";
    })(xl || (xl = {})); var Cl = window, yj = ab("dtPC"), xb = ab("dtCookie"); ab("rxvt"); ab("rxVisitor"); ab("dTValidationCookie"); var ib = "undefined" !== typeof window ? window : self, Kb, ac, Cc, vb, Jb, Id, df, Vg, Oi, Sg, xj, Th, qh, Pf, lh,
        Ag, Fg, Ij, Rf, Dg, Eg, ni, oi, Pi, Aj, sc, Bb, Xb, Pc, fk, ee, cf, Ch, Kf, Me, ji, ii, ff, Yh, gk, Ej, xi, ui, gi, Yi, ri, pj, qj, fg, xf, Ri, Hj, nh, sk, vf, oj, pe, Qf, Xg, Mf, tf, Pj, Vh, Ke, og, rj, Cj, yg, Wh, Bh, Xh, jh, Yc, cg, Gf = ib.parent, dd, ng = !1, Ef = -1, Ff, se = [], bg = !1, Zi, aj, qi, pk = "^><%/\\(){}[]".split(""), Qh = String.prototype.trim, Qd = { "^": "^^", "|": "^p", ",": "^c", ";": "^s" }, Rh = function (a) { var b = {}, g; for (g in a) ub(a, g) && (b[a[g]] = g); return b; }(Qd), zg = {}, bd, dc = (bd = {}, bd.CONFIG_UPDATE = [], bd.ACTION_CLOSED = [], bd.ACTION_BEACON_FORCED = [], bd.ACTION_BEFORE_SEND =
            [], bd.ACTION_SENT = [], bd.ACTION_ENTERED = [], bd.ACTION_LEFT = [], bd.VIEW_CHANGE = [], bd.VIEW_STABLE = [], bd.DEBUG_INFO_REQUESTED = [], bd.CSS_TRANSMISSION_STARTED = [], bd.VISUALLY_COMPLETE = [], bd.GLOBAL_EVENT_FIRED = [], bd.HISTORY_API_EVENT = [], bd.VISIBILITY_CHANGED = [], bd.LOAD_END = [], bd.INSTRUMENTATION_TRIGGERED = [], bd.PAGE_LEAVING = [], bd.HTTP_RESPONSE = [], bd), Vf; (function (a) {
                a.ANCHOR = "A"; a.BUTTON = "BUTTON"; a.FORM = "FORM"; a.I_FRAME = "IFRAME"; a.IMAGE = "IMG"; a.INPUT = "INPUT"; a.LABEL = "LABEL"; a.LINK = "LINK"; a.OPTION = "OPTION"; a.SCRIPT =
                    "SCRIPT"; a.SELECT = "SELECT"; a.STYLE = "STYLE"; a.TEXT_AREA = "TEXTAREA";
            })(Vf || (Vf = {})); var Le = !1, Jd = 0, Dc = [], id = [], Rd, ki, me, li = [], pf = !1, lg, kh, bf, mi = [], If = [], Hf, Bg = "", Jf = 1, Cg = 0, Tg = [], qf, oh = [], Uh = 0, rk = navigator && "sendBeacon" in navigator, Dj = [], Kd, Bj = [], pi = 0, ph = "-", Zd; (function (a) { a[a.LABEL = 0] = "LABEL"; a[a.NAME = 1] = "NAME"; a[a.OTHER = 2] = "OTHER"; a[a.CLASS = 3] = "CLASS"; a[a.TAG = 4] = "TAG"; })(Zd || (Zd = {})); var Ug = 0, Zg = 0, d, h, m = [], t = 0, D = 0, W = [], Aa, aa = (Aa = {}, Aa.name = "", Aa.type = "", Aa.validUntil = 0, Aa.start = 0, Aa.target = void 0, Aa.url =
                "", Aa.title = "", Aa.view = void 0, Aa), Qa, Ya, Ab, Wc, xd, rf, Nf = -1, re = null, Of = [], yd, nd, yl, zl, im = (yd = {}, yd._csprv_ = (nd = {}, nd.blockedURL = Ve, nd.documentURL = Ve, nd.referrer = Ve, nd.sourceFile = Ve, nd), yd._customerror_ = function (a, b) { return "name" === a ? dh(a, b, !0, 1E3) : dh(a, b, !0, Xb("mcepsl")); }, yd._vc_ = (yl = {}, yl.VE = function (a, b) { return b; }, yl), yd._dj_ = function (a, b) { return b; }, yd._wv_ = (zl = {}, zl.lcpU = Ve, zl), yd), em = !0, Vl, Rk = function () {
                    function a() { this.id = ++Vl; this.Cb = []; this.ge = this.Jb = !1; this.fc = []; } a.prototype.yf = function (b) { this.Cb.push(b); };
                    a.prototype.Ag = function (b) { for (var g = 0; g < this.Cb.length; g++)if (this.Cb[g] === b) { Ca(this.Cb, g); break; } }; a.prototype.Zg = function (b, g, k, p) { for (var B = 0, H = this.Cb; B < H.length; B++)(0, H[B])(b, g, k, p); }; a.prototype.Bf = function (b) { this.bd = b; "string" !== typeof b && (this.ge = !0); }; a.prototype.J = function (b, g, k) { void 0 === k && (k = !1); this.Jb = this.Jb || k; Jb(this.fc, [b, g]); }; a.prototype.Va = function (b, g, k) { g && this.J(b, g, k); }; a.prototype.Nb = function (b) { for (var g = 0, k = this.fc; g < k.length; g++) { var p = k[g]; if (p[0] === b) return p[1]; } return ""; };
                    a.prototype.$e = function () { for (var b = [], g = 0, k = this.fc; g < k.length; g++) { var p = k[g]; Jb(b, "$", p[0], "=", p[1]); } return b.join(""); }; a.prototype.raw = function () { return this.fc; }; return a;
                }(), Ul = function () {
                    function a() { } a.prototype.wc = function () { return new Rk; }; a.prototype.ug = function (b, g) { if (em) return null; var k = this.wc(); Bb("bs") && k.J("bs", "1", !1); ya(ug, this, b, g, k); return k.Jb ? k : null; }; a.prototype.wf = function (b, g, k, p) {
                        k.Va("isUnload", p ? "1" : "", !1); k.Va("latC", "0", !1); k.Va("app", Pc("app"), !1); k.J("vi", Ag(), !1); k.Va("dnt",
                            ka() ? "1" : "", !1); k.J("fId", Me(), !1); p = bb(); var B = Yc; k.J("v", p, !1); B !== p && k.J("iv", B, !1); b || (p = Yh(), this.av(k, "vID", p), this.ha(k) && ff() && this.av(k, "nV", "1")); !b && g && gk() && k.J("nVAT", "1", !1); b = k.Va; g = encodeURIComponent; p = se; se = []; b.call(k, "vcr", g(p.join(",")));
                    }; a.prototype.Ef = function (b) { var g = aj; g && Le && (b.J("responseCode", g.responseCode, !1), b.Va("responseMessage", Vg(g.message), !1), aj = void 0); }; a.prototype.Je = function (b, g, k) {
                        void 0 === b && (b = !1); void 0 === g && (g = !1); void 0 === k && (k = !1); if (b) {
                            var p = []; for (var B =
                                "", H = "", V = { wb: 0 }, ia = 0, Va = Dc; ia < Va.length; ia++) { var Wa = Va[ia]; var ob = Wa; var Db = V; if (ob.Qd(Db.wb)) var Qb = ob = !0; else Db.wb++, Qb = ob.Qd(Db.wb + ob.yb), Qb || (Db.wb += ob.yb), ob = !1; ob || (B || (B = Wa.Ya()), H = Wa.Ya(), Wa.parentFrameActionName && (ob = Jb, Db = Wa.He, Db = [0, Wa.Ge, Da(Wa.parentFrameActionName), Db].join("|"), ob(p, Db)), Jb(p, Wa.xc(Qb))); } p = { qc: p.join(","), referer: B, sourceUrl: H };
                        } else p = We(g, k); if (B = 0 < p.qc.length) {
                            H = this.wc(); H.J("a", Vg(p.qc), !0); Pc("domainOverride") && (H.J("dO", Pc("domainOverride"), !1), fk("domainOverride",
                                "")); Bb("bs") && H.J("bs", "1", !1); b && H.J("PV", "1", !1); na().pageId !== Me() && H.J("pId", na().pageId, !1); kh && H.J("pFId", kh, !1); H.J("rId", Pc("rid"), !1); H.J("rpId", Pc("rpid"), !1); if (!b) { a: { V = (ia = ib.performance) ? ia.timing : !1; if (ia && V && (ia = V.domComplete, V = V.domContentLoadedEventEnd, ia || V)) { V = ia ? ia : V; break a; } V = Zi; } V && H.J("domR", V, !1); this.Ef(H); } Za(k) && H.J("unload", "xhr", !1); ya(ug, this, b, g, H); em = !1;
                        } else H = this.ug(b, g); H && (this.Ff(p.sourceUrl, H), this.wf(b, B, H, k)); return { beacon: H, referrer: p.referer };
                    }; a.prototype.Ff =
                        function (b, g) { var k = Ib(); g.J("url", encodeURIComponent(k), !1); g.J("title", Vg(Ua(document.title).substring(0, 100)), !1); var p = g.Nb("a"); p = p && ("s" === p.charAt(0) || "d" === p.charAt(0)); b && b !== k && !p && g.J("sUrl", encodeURIComponent(b), !1); }; a.prototype.av = function (b, g, k, p, B) { k = "function" === typeof k ? k() : k; "undefined" !== typeof k && null !== k && "" !== k && b.J(g + (B ? B : ""), k, p); }; a.prototype.ha = function (b) { return !!b.Nb("a"); }; a.prototype.hla = function (b) { return 0 <= vb(b.Nb("a"), "_load_"); }; a.prototype.ar = function (b, g) { b.Bf(g); };
                    a.prototype.aBRL = function (b, g) { b.yf(g); }; a.prototype.rBRL = function (b, g) { b.Ag(g); }; return a;
                }(), Tl = function () { for (var a, b = [], g = 0; 256 > g; g++) { a = g; for (var k = 0; 8 > k; k++)a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1; b[g] = a; } return b; }(), Wg = !1, El, Dh, mg, Dl, Eh, Ti, am = 0, fm; (function (a) { a.INITIATOR_TYPE = "initiatorType"; a.START_TIME = "startTime"; })(fm || (fm = {})); var Ui = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming, jm = "function" === typeof PerformanceNavigationTiming || "object" === typeof PerformanceNavigationTiming,
                    mm = "function" === typeof PerformanceTiming || "object" === typeof PerformanceTiming, Xi = {}, km = Math.pow(2, -52), Wl = ["dtRpid", "dtSInfo", "dtTao", "dtRequestID"], Fl = { unknown: 0, xmlhttprequest: 1, fetch: 2, beacon: 3, iframe: 4, frame: 5, subdocument: 6, img: 7, image: 8, css: 9, svg: 10, link: 11, script: 12, input: 13, body: 14, object: 15, embed: 16, source: 17, audio: 18, video: 19, track: 20, eventsource: 21, other: 22, icon: 23 }, lm = { navigate: 0, reload: 1, back_forward: 2, prerender: 3 }, Xl = !1, Gl, Ql = ["_warning_", "_error_", "_log_", "_rs_"], rh = function () {
                        function a(b,
                            g, k, p, B, H, V, ia, Va, Wa, ob, Db, Qb, nc, Tc, Uc, hd) {
                            void 0 === Qb && (Qb = { readyState: -1, status: -1 }); void 0 === nc && (nc = -1); this.start = b; this.stop = g; this.type = k; this.name = p; this.info = B; this.domNodes = H; this.cb = V; this.title = ia; this.isCustomAction = Wa; this.$a = ob; this.nd = Qb; this.Y = Tc; this.Kc = hd; this.depth = 1; this.fb = this.bc = 0; this.oa = -1; this.Xc = this.yb = 0; this.Sa = -1; this.hb = ""; this.subActions = []; this.Bd = []; this.Wb = []; this.errors = []; this.status = 0; this.hc = []; this.childFrameActions = 0; this.Lc = !1; this.Na = this.Da = 0; this.B = !1;
                            this.Vb = 0; this.xhrUrl = ""; this.Yd = !1; this.Re(Va); this.id = ta(); this.bf = Ti; this.Ba(g); this.status = Db ? 3 : 0; this.Ja = 0 <= nc; this.fb = Math.max(nc, 0); Uc && (this.ta = Uc);
                        } a.prototype.Ya = function () { return this.parent ? this.parent.Ya() : this.cb; }; a.prototype.Ha = function () { return this.parent ? this.parent.Ha() : this.id; }; a.prototype.Ba = function (b) { this.Yd || (this.stop = b, Jd = Math.max(Jd, this.stop)); }; a.prototype.Xd = function () { this.Yd = !0; }; a.prototype.zd = function (b, g) {
                            void 0 === g && (g = !1); (3 !== this.status || g) && b && b.name && (b.depth =
                                this.depth + 1, Jb(this.subActions, b), b.Hc() && (this.Vb++, this.ee(1)), b.parent = this, b.Ja || this.Ib(), b.fb += this.fb, b.bc = this.bc + +b.Ja);
                        }; a.prototype.he = function () { return 3 === this.status && !this.Jc(); }; a.prototype.close = function (b, g, k, p) {
                            var B, H; void 0 === p && (p = !1); this.domNodes = Eg(Dg("*")); this.start = g || this.start; g = !1; var V = this.start, ia = this.stop, Va = this.id, Wa = this.Vb; b && (this.Ba(Math.max(b, V, ia)), k && (g = !0)); if (Wa) return this.status = 1, !1; if (3 === this.status) return !1; this.status = 3; C((B = {}, B.kind = "ACTION_CLOSED",
                                B.detail = (H = {}, H.s = ia, H.a = V, H.r = this.Ha(), H.i = Va, H.f = p, H.t = this.type, H.x = this.xhrUrl, H.dne = g, H.rt = void 0, H.cs = this.Da, H.ce = this.Na, H.xe = this.Sa, H.xm = this.hb, H["in"] = this.info, H), B)); return !0;
                        }; a.prototype.Md = function () { this.yb--; this.parent && this.parent.Md(); }; a.prototype.vc = function (b, g, k, p) { var B = this; void 0 === p && (p = !1); if (this.close(b, g, k, p)) { var H = this.parent; if (H) { H.Vb--; this.Ic() || H.Md(); var V = H.stop; H.Ba(Math.max(this.stop, V)); Kb(function () { B.If(H, V); }, 0); 1 === H.status && H.vc(b); } } }; a.prototype.If =
                            function (b, g) { this.Ja && (Xg(this.oa), b.stop === this.stop && (b.stop = g), b.Bg(this), delete me.actions[this.id]); }; a.prototype.Qd = function (b) { return b + 1 > Xb("moa") && !this.Ic(); }; a.prototype.Tf = function () {
                                a: {
                                    var b = this.xhrUrl, g = "fetch" === this.info ? "fetch" : "xmlhttprequest", k = this.start, p = 3 === this.status ? this.stop : 0; try {
                                        if (b && performance && performance.getEntriesByName) {
                                            var B = Hb(b); 0 === vb(B, "/") ? B = location.protocol + "//" + location.host + B : 0 !== vb(B, "http") && (B = location.href.substring(0, location.href.lastIndexOf("/") +
                                                1) + B); var H = performance.getEntriesByName(B); g && (H = Qc(H, g)); if (H.length) var V = k ? Ed(H, k, p || Number.MAX_VALUE) : H[H.length - 1]; else { H = performance.getEntriesByType("resource"); g && (H = Qc(H, g)); -1 === B.indexOf("?") && (B += "?"); for (var ia = { nb: null, Uc: Number.MAX_VALUE }, Va = H.length - 1; 0 <= Va; Va--) { var Wa = H[Va]; if (0 === Wa.name.lastIndexOf(B, 0)) if (k) zf(k, p || Number.MAX_VALUE, Wa, ia); else { V = Wa; break a; } } V = ia.nb; }
                                        } else V = null;
                                    } catch (ob) { V = null; }
                                } return Vc(V) ? V : null;
                            }; a.prototype.Hg = function () {
                                var b = this.Tf(); if (!b || 0 >= b.startTime) return [];
                                Vc(b) && (b.rtRequestId = --am, this.ed = b); var g = ["b", pe() + Math.round(b.startTime)]; hg(b, g, b.startTime); return g;
                            }; a.prototype.ye = function () { for (var b, g, k = this.start, p = this.stop, B = this.id, H = 0, V = this.subActions; H < V.length; H++)V[H].ye(); C((b = {}, b.kind = "ACTION_BEFORE_SEND", b.detail = (g = {}, g.s = p, g.a = k, g.i = B, g.r = this.Ha(), g), b)); }; a.prototype.Pc = function (b) {
                                for (var g, k, p = this.start, B = this.stop, H = this.id, V = this.type, ia = this.xhrUrl, Va = this.Da, Wa = this.Na, ob = this.hb, Db = this.Sa, Qb = this.ed, nc = 0, Tc = this.subActions; nc <
                                    Tc.length; nc++)Tc[nc].Pc(b); C((g = {}, g.kind = "ACTION_SENT", g.detail = (k = {}, k.s = B, k.a = p, k.r = this.Ha(), k.i = H, k.f = b, k.t = V, k.x = ia, k.rt = Qb, k.cs = Va, k.ce = Wa, k.xm = ob, k.xe = Db, k["in"] = this.info, k), g)); Xg(this.oa); delete me.actions[this.id]; this.B = !0;
                            }; a.prototype.Oc = function () { this.Pg = !0; xc(this.subActions, function (b) { b.Oc(); }); }; a.prototype.Jc = function () { return !!this.hc.length; }; a.prototype.dg = function () { this.eb = this.start + 1E4; this.$c = 100; return this; }; a.prototype.Sg = function () { this.Vg = ac(); }; a.prototype.Qf = function () {
                                this.Ye =
                                    ac();
                            }; a.prototype.lg = function () { return !!this.Vg && !this.Ye; }; a.prototype.Hc = function () { return 1 === this.status || 0 === this.status; }; a.prototype.Ob = function () { return (this.Ja && 3 === this.status || this.$a && !(0 < this.Xc)) && this.parent ? this.parent.Ob() : this; }; a.prototype.xc = function (b) { var g = this.depth, k = this.Bd, p = this.subActions; this.domNodes || (this.domNodes = Eg(Dg("*"))); var B = []; xc(k, function (H) { Jb(B, kf(H, g + 1)); }); for (k = 0; k < p.length && !b; k++)Jb(B, p[k].xc()); B.unshift(this.Ea()); return B.join(","); }; a.prototype.Ea =
                                function () { var b = this.stop, g = this.start, k = this.id, p = this.type, B = this.info, H = this.status, V = this.name, ia = []; ia[0] = this.depth + ""; ia[1] = k + ""; ia[2] = Da(V); ia[3] = Da(p); ia[4] = Da(B) || "-"; ia[5] = g + ""; ia[6] = (3 === H ? b : 0) + ""; b = 0; for (g = this.Zf(); b < g.length; b++)if (k = g[b], p = k[1]) p = "string" === typeof p ? Da(p) : "boolean" === typeof p ? +p + "" : p + "", ia.push(k[0] + "", p); return ia.join("|"); }; a.prototype.Zf = function () {
                                    var b = this.xhrUrl, g = this.Na, k = this.Da, p = this.start, B = this.name, H = this.Sa, V = this.hb, ia = this.ta, Va = this.Tg, Wa = this.bf,
                                        ob = this.Wb.slice(); ob.push(["dn", this.domNodes], ["cfa", this.childFrameActions], ["xu", b], ["ica", this.isCustomAction], ["gn", this.Y]); var Db = ob.push, Qb = Db.apply; var nc = []; if (0 !== t) {
                                            var Tc = d, Uc = Tc.name, hd = Tc.timestamp; Tc = Tc.group; ia && (ia.name !== Uc && nc.push(["svn", ia.name]), ia.timestamp !== hd && nc.push(["svt", ia.timestamp]), ia.group && ia.group !== Tc && nc.push(["svg", ia.group]), nc.push(["svtrg", ia.trigger]), nc.push(["svm", gd(ia)])); Va && (Va.name !== Uc && nc.push(["tvn", Va.name]), Va.timestamp !== hd && nc.push(["tvt",
                                                Va.timestamp]), Va.group && Va.group !== Tc && nc.push(["tvg", Va.group]), nc.push(["tvtrg", Va.trigger]), nc.push(["tvm", gd(Va)]));
                                        } Qb.call(Db, ob, nc); b && !Bb("ntd") && ob.push(["xrt", this.Hg().join("")]); "_load_" === B && "undefined" !== typeof document && ob.push(["lr", document.referrer]); "0" !== Wa && ob.push(["bg", Wa]); k && g && (0 < k ? ob.push(["xcs", k - p]) : ob.push(["xcs", k]), 0 < g ? ob.push(["xce", g - p]) : ob.push(["xce", g])); -1 !== H && ob.push(["rc", H]); V && ob.push(["rm", V]); this.ed && this.stop < this.ed.responseEnd && this.Kc && ob.push(["sd",
                                            1]); return ob;
                                }; a.prototype.Og = function () { return 3600001 <= ac() - this.start ? (this.Pc(!1), !0) : !1; }; a.prototype.Re = function (b) { this.xhrUrl = Ga(b); }; a.prototype.Ib = function () { this.Ja && (this.Ja = !1, this.Ba(this.Ye || this.stop), this.fb = this.bc = 0, this.parent && this.parent.Ib()); }; a.prototype.yd = function (b) { this.Ib(); this.Ba(Math.max(b.timestamp, this.stop)); for (var g = this.parent; g;)g.Ba(Math.max(g.stop, this.stop)), g = g.parent; Jb(this.Bd, b); }; a.prototype.Cf = function () {
                                    function b(k) {
                                        void 0 === k && (k = -1); Ca(g.hc, Ke(g.hc,
                                            b)); g.Ba(Math.max(k, g.stop)); g.Jc() || Ec();
                                    } var g = this; this.hc.push(b); return b;
                                }; a.prototype.Af = function (b, g) { this.Wb.push([b, g]); }; a.prototype.oe = function () { this.Lc = !0; }; a.prototype.Mg = function (b) { this.Lc || (b > this.stop && 3 === this.status ? this.Da = -6 : this.Da = b); }; a.prototype.Lg = function (b) { this.Lc || (b > this.stop && 3 === this.status ? this.Na = -6 : this.Na = b); }; a.prototype.ee = function (b) { this.yb += b; var g = 3 === this.status; g && (this.status = 1); this.parent && (g && (this.Ic() || b++, this.parent.Vb++), this.parent.ee(b)); }; a.prototype.Ic =
                                    function () { return -1 !== Ke(Ql, this.type); }; a.prototype.Bg = function (b) { for (var g = this.subActions, k = g.length - 1; 0 <= k; k--)if (g[k] === b) { Ca(g, k); b.parent = void 0; break; } }; return a;
                    }(), nm = "loadEventEnd loadEventStart domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive responseEnd".split(" "), Al, Yg = [], Lk = (Al = {}, Al.dtAWF = function (a, b, g, k, p, B) {
                        k && !Ne(k) ? (Yg.push({ xhrUrl: yc(pb(p || "")), D: k, Sf: B || "" }), a = a.apply(b, g || []), "g" === B ? Kb(function () {
                            for (var H = 0; H < Yg.length; H++)if (Yg[H].D === k) {
                                Ca(Yg,
                                    H); break;
                            }
                        }, 0) : Yg.pop()) : a = a.apply(b, g || []); return a;
                    }, Al), Fj, Ni; (function (a) { a[a.ERROR = 970] = "ERROR"; a[a.CANCELED = 971] = "CANCELED"; a[a.TIMEOUT = 972] = "TIMEOUT"; })(Ni || (Ni = {})); var ti = null, Gj = null, vi = void 0, tk = void 0, Bl; (function (a) { a[a.BOTH = 0] = "BOTH"; a[a.PATH = 1] = "PATH"; a[a.HASH = 2] = "HASH"; })(Bl || (Bl = {})); var gm; (function (a) { a.HASHCHANGE = "hashchange"; a.POPSTATE = "popstate"; })(gm || (gm = {})); var Jj, Sk, Yl = (Sk = {}, Sk.dtAWF = function (a, b, g) { return a.apply(b, g || []); }, Sk), Kj, $i = !1, Zh = !1, uk = !1, Mj = 1, Fh = null, wi = !1, Uk = !1,
                        Nj = !1, Lj, Gg = !1, Oj = !1, Zl = -1, Sf, Hl = !1, om = /function\s*([\w\-$]+)?\s*\(/i, Hg = 0; setInterval(function () { 0 < Hg && Hg--; }, 3E4); var Xk = ["javaLong", "date", "shortString", "javaDouble"], sh = function () {
                            function a(b) { this.D = b; this.Ue = []; this.Sd = []; } a.prototype.Te = function (b, g, k) { $d(b, g, k, this.D); Jb(this.Ue, { key: g, value: k }); }; a.prototype.Td = function (b, g, k) { b = wk(b, k); Jb(this.Sd, { key: g, reason: b }); a.Db++; }; a.prototype.Zd = function () { return this.Ue; }; a.prototype.Bc = function () { return this.Sd; }; a.prototype.Wf = function () {
                                return Wk(this,
                                    a.Db);
                            }; a.Db = 0; return a;
                        }(), th = {}, xk = function () {
                            function a(b, g, k, p) { this.Ac = []; this.Ve = []; this.ke = {}; this.Ld = {}; this.Se = {}; this.je = {}; this.wd = 0; $h(this, b, g, k, p); } a.prototype.Te = function (b, g, k) { var p = {}; switch (b) { case "_uapl_": p = this.ke; break; case "_uapdbl_": p = this.je; break; case "_uaps_": p = this.Se; break; case "_uapdt_": p = this.Ld; }p[g] = k; this.wd++; Jb(this.Ve, { key: g, value: k }); }; a.prototype.Td = function (b, g, k) { b = wk(b, k); Jb(this.Ac, { key: g, reason: b }); a.Db++; }; a.prototype.cg = function () { return 0 < this.wd; }; a.prototype.Zd =
                                function () { return this.Ve; }; a.prototype.Bc = function () { return this.Ac; }; a.prototype.ag = function () { for (var b = [], g = 0, k = this.Ac; g < k.length; g++)Jb(b, k[g].key); return b; }; a.bg = function (b) { var g = [], k; for (k in b) if (ub(b, k) && b[k]) { var p = b[k]; Jb(g, k + "," + ("string" === typeof p ? Da(p) : p)); } return g.join(";"); }; a.Db = 0; return a;
                        }(), $g = null, zk = void 0, hm; (function (a) { a[a.BEGIN = 11359836E5] = "BEGIN"; a[a.END = 41338908E5] = "END"; })(hm || (hm = {})); var Rl; (function (a) { a.METHOD = "method"; a.PARAMETER = "parameter"; })(Rl || (Rl = {})); var Sl = [0,
                            1, 2, 3], wl = function () {
                                function a() { } a.prototype.setAutomaticActionDetection = function (b) { Gc(b, "boolean") ? (1 < arguments.length && Ac(), Kc("saad"), $c(b)) : Vb(); }; a.prototype.setLoadEndManually = function () { 0 < arguments.length && Ac(); Kc("slem"); Gg = !0; }; a.prototype.signalLoadEnd = function () { 0 < arguments.length && Ac(); Kc("sle"); Og(); }; a.prototype.markAsErrorPage = function (b, g) { if (!Gc(b, "number") || !Gc(g, "string")) return Vb(), !1; 2 < arguments.length && Ac(); Kc("maep"); return yh(b, g); }; a.prototype.markXHRFailed = function (b, g, k) {
                                    if (!Gc(b,
                                        "number") || !Gc(g, "string") || !ld(k, "number")) return Vb(), !1; 3 < arguments.length && Ac(); Kc("mxf"); return rg(b, g, +k || -1);
                                }; a.prototype.sendSignal = function () { Xc("method", "sendSignal", 'This method is deprecated and has no functionality. Use "sendBeacon" instead.'); }; a.prototype.sendBeacon = function (b, g, k) { Gc(b, "boolean") && Gc(g, "boolean") && Gc(k, "boolean") ? (3 < arguments.length && Ac(), Kc("ss"), La(b, g, k)) : Vb(); }; a.prototype.enterAction = function (b, g, k, p) {
                                    if (!Gc(b, "string") || !ld(p, "string")) return Vb(), 0; g && Xc("parameter",
                                        "actionType", "This parameter is deprecated and has no effect anymore."); 5 < arguments.length && Ac(); Kc("ea"); var B = k; if (B) { if (!+B) return Vb(), 0; B = ec(B); } return pg(b, "", +B, !1, void 0, void 0, !0, p);
                                }; a.prototype.addEnterActionListener = function (b) { jd(b) ? (1 < arguments.length && Ac(), Kc("aeal"), Nd(b)) : Vb(); }; a.prototype.removeEnterActionListener = function (b) { if (jd(b)) { 1 < arguments.length && Ac(); Kc("real"); var g = b.dtWF; g && A("ACTION_ENTERED", g); } else Vb(); }; a.prototype.leaveAction = function (b, g, k) {
                                    if (Gc(b, "number") && ld(g,
                                        "number") && ld(k, "number")) { 3 < arguments.length && Ac(); Kc("la"); var p = bc(b); if (p) if (p.isCustomAction) { (p = k) && (p = ec(p)); var B = g; B && (B = ec(B)); ue(b, B, p); } else wf('"dtrum.leaveAction" can only be called for actions created by dtrum, and action with id of "'.concat(b, '" is not a custom action!')); else uh(); } else Vb();
                                }; a.prototype.addLeaveActionListener = function (b) { jd(b) ? (1 < arguments.length && Ac(), Kc("alal"), lf(b)) : Vb(); }; a.prototype.removeLeaveActionListener = function (b) {
                                    if (jd(b)) {
                                        1 < arguments.length && Ac(); Kc("rlal");
                                        var g = b.dtWF; g && A("ACTION_LEFT", g);
                                    } else Vb();
                                }; a.prototype.addActionProperties = function (b, g, k, p, B) { Gc(b, "number") && ld(g, "object") && ld(k, "object") && ld(p, "object") && ld(B, "object") ? (5 < arguments.length && Ac(), bc(b) ? (Kc("aap"), Hc(b, g, k, p, B)) : uh()) : Vb(); }; a.prototype.reportError = function (b, g) { ("object" !== typeof b && "string" !== typeof b || null === b ? 0 : "object" === typeof b && "message" in b || "string" === typeof b) && ld(g, "number") ? (2 < arguments.length && Ac(), Kc("re"), Cd(b, g, !1, "0")) : Vb(); }; a.prototype.identifyUser = function (b) {
                                    Gc(b,
                                        "string") ? (1 < arguments.length && Ac(), Kc("iu"), wb() ? vf() && wf("navigator.doNotTrack is enabled on the browser") : vk("rx_visittag", b, -1)) : Vb();
                                }; a.prototype.startThirdParty = function () { Xc("method", "startThirdParty", "This method is deprecated and has no functionality."); }; a.prototype.stopThirdParty = function () { Xc("method", "stopThirdParty", "This method is deprecated and has no functionality."); }; a.prototype.addPageLeavingListener = function (b) {
                                    jd(b) ? (1 < arguments.length && Ac(), Kc("apll"), q("PAGE_LEAVING", function (g) { b(g.detail); })) :
                                        Vb();
                                }; a.prototype.beginUserInput = function (b, g, k, p) { if (!Q(b) && !Gc(b, "string") || !Gc(g, "string") || !ld(k, "string") || !ld(p, "number")) return Vb(), {}; 4 < arguments.length && Ac(); Kc("bui"); return Y(b, g, k, p); }; a.prototype.endUserInput = function (b) { ("object" !== typeof b || null === b ? 0 : "object" === typeof b && "name" in b && "info" in b && "title" in b) ? (1 < arguments.length && Ac(), Kc("eui"), tc(b)) : Vb(); }; a.prototype.enterXhrAction = function (b, g, k) {
                                    var p; if (!(p = !Gc(b, "string"))) {
                                        a: { for (var B in Sl) if (Sl[B] === g) { p = !0; break a; } p = !1; } p =
                                            !p && !ld(k, "string");
                                    } if (p) return Vb(), -1; p = g; 2 === g && (Xc("parameter", "xmode 2", "xmode 2 is deprecated and will fallback to value of 1."), p = 1); 3 < arguments.length && Ac(); k || wf("No XHR URL was provided, which will result in the request being marked as `/undefined` in the waterfall! In the future, this argument will be required!"); Kc("exa"); return Qe(b, p, k + "", !0);
                                }; a.prototype.leaveXhrAction = function (b, g) {
                                    if (Gc(b, "number") && ld(g, "number")) {
                                        2 < arguments.length && Ac(); Kc("lxa"); var k = wa(b); k ? k.isCustomAction ?
                                            ((k = g) && (k = ec(g)), wg(b, k)) : wf('"dtrum.leaveXhrAction" can only be called for actions created by dtrum, and action with id of "'.concat(b, '" is not a custom action!')) : uh();
                                    } else Vb();
                                }; a.prototype.enterXhrCallback = function (b) { Gc(b, "number") ? (1 < arguments.length && Ac(), wa(b) ? (Kc("exc"), Ge(b)) : uh()) : Vb(); }; a.prototype.leaveXhrCallback = function (b) { Gc(b, "number") ? (1 < arguments.length && Ac(), wa(b) ? (Kc("lxc"), Re(b)) : uh()) : Vb(); }; a.prototype.signalOnLoadStart = function () { 0 < arguments.length && Ac(); Kc("sols"); xh(); };
                                a.prototype.incrementOnLoadEndMarkers = function () { 0 < arguments.length && Ac(); Kc("iolem"); nf(); }; a.prototype.signalOnLoadEnd = function () { 0 < arguments.length && Ac(); Kc("sole"); mf(); }; a.prototype.actionName = function (b, g) { if (!Gc(b, "string")) return Vb(), 2; if (!ld(g, "number")) return Vb(), 3; 2 < arguments.length && Ac(); Kc("an"); return Oa("an", hb(b), +g) ? 0 : 1; }; a.prototype.endSession = function () { 0 < arguments.length && Ac(); Kc("es"); wh(); }; a.prototype.now = function () { 0 < arguments.length && Ac(); Kc("n"); return ac(); }; a.prototype.enable =
                                    function () { 0 < arguments.length && Ac(); Kc("e"); fg(); }; a.prototype.disable = function () { 0 < arguments.length && Ac(); Kc("d"); xf(); }; a.prototype.addVisitTimeoutListener = function (b) { jd(b) ? (1 < arguments.length && Ac(), Kc("avtl"), ri(b)) : Vb(); }; a.prototype.enableSessionReplay = function (b) { if (Gc(b, "boolean")) { 1 < arguments.length && Ac(); Kc("esr"); var g = ib.dT_; g && g.srel && g.srel(b); } else Vb(); }; a.prototype.disableSessionReplay = function () { 0 < arguments.length && Ac(); Kc("dsr"); var b = ib.dT_; b && b.srel && b.srdl(); }; a.prototype.getAndEvaluateMetaData =
                                        function () { 0 < arguments.length && Ac(); Kc("gaemd"); var b = ib.dT_; return b && b.gEMD && b.iRHCA ? b.gEMD() : []; }; a.prototype.enablePersistentValues = function () { 0 < arguments.length && Ac(); Kc("epv"); qj(); }; a.prototype.disablePersistentValues = function (b) { Gc(b, "boolean") ? (1 < arguments.length && Ac(), Kc("dpv"), pj(b)) : Vb(); }; a.prototype.registerPreDiffMethod = function (b) { if (jd(b)) { 1 < arguments.length && Ac(); Kc("rpdm"); var g = ib.dT_; g && g.srel && Array.isArray(g.srpdm) && g.srpdm.push(b); } else Vb(); }; a.prototype.sendSessionProperties =
                                            function (b, g, k, p) { if (ld(b, "object") && ld(g, "object") && ld(k, "object") && ld(p, "object")) return 4 < arguments.length && Ac(), Kc("ssp"), bi(b, g, k, p); Vb(); }; a.prototype.reportCustomError = function (b, g, k, p) { if (Gc(b, "string") && Gc(g, "string") && ld(k, "string") && (ld(p, "number") || ld(p, "boolean"))) if (4 < arguments.length && Ac(), Kc("rce"), b && g) { var B = [["type", b], ["name", g]]; k && B.push(["hint", k + ""]); wd("_customerror_", B, p); } else vf() && wf("Key or value is missing but mandatory for 'reportCustomError' method!"); else Vb(); }; a.prototype.enableManualPageDetection =
                                                function () { 0 < arguments.length && Ac(); Kc("emvd"); Ad(3); }; a.prototype.setPage = function (b) { if (!("object" !== typeof b || null === b ? 0 : "object" === typeof b && "name" in b && "group" in b)) return Vb(), -1; 1 < arguments.length && Ac(); Kc("sp"); return yi(b, 3); }; return a;
                            }(), Ak = [], Bk, fj, Jg = !1, Tj = !!ib.MutationObserver, ci = ib.MutationObserver ? ib.MutationObserver : void 0, Kg = {}, Vj = {}, gj = {}, Uj = [], Fk = {}, Tk; (function (a) { a.CONFIG = "config"; a.GLOBAL_PROPERTIES = "globalProperties"; a.ROUTER = "$router"; })(Tk || (Tk = {})); var Ai = "".concat(1).concat(","),
                                ml = [], Xj = [], ah = {}, Uf, jj, ei, De = {}, Zj = null, Ci = [], Lg, ok; (function (a) { a[a.BEFORE_LOAD_ACTION_CLOSED = 0] = "BEFORE_LOAD_ACTION_CLOSED"; a[a.BEFORE_LOAD_ACTION_SENT = 1] = "BEFORE_LOAD_ACTION_SENT"; a[a.AFTER_LOAD_ACTION_SENT = 2] = "AFTER_LOAD_ACTION_SENT"; })(ok || (ok = {})); var Hh = 0, Gh = 0, Gi, Fi, ak = [], ck, Kk, bk, dk, $l, Ih = [], Hi = 0, c = ["click", "mousedown", "keydown", "touchstart"], e = 0, l = 0; (function () {
                                    var a, b; if (11 > document.documentMode) null === (a = window.console) || void 0 === a ? void 0 : a.log("Unsupported Internet Explorer version detected. Only version 11 (without Compatibility View) is supported!");
                                    else if (a = 0 > (null === (b = navigator.userAgent) || void 0 === b ? void 0 : b.indexOf("RuxitSynthetic")), !ib.dT_ || !ib.dT_.ica) ib.console.log("No initCode available, turning off asyncCore."), ib.dT_ && (ib.dT_.di = 2); else if ("initialized" in ib.dT_ && ib.dT_.initialized) ib.dT_.gCP || ib.console.log("Duplicate agent injection detected, turning off redundant asyncCore."), ib.dT_.di = 1; else if (a) {
                                        if (a = (b = ib.dT_) && b.gCP) b = b.gCP(), a = +(uf.dT_.ncv("buildNumber") || na().version), a = !(b && !isNaN(a) && +bb() === a); a || ek() || (delete ib.dT_,
                                            ib.console.log("JsAgent asyncCore initialization failed!"));
                                    }
                                })();
})();

(function () {
    function Ha() { Ha = Object.assign || function (ra) { for (var ka, Na = 1, sa = arguments.length; Na < sa; Na++) { ka = arguments[Na]; for (var Sa in ka) Object.prototype.hasOwnProperty.call(ka, Sa) && (ra[Sa] = ka[Sa]); } return ra; }; return Ha.apply(this, arguments); } function bb(ra) { var ka; null === (ka = fb.console) || void 0 === ka ? void 0 : ka.log("".concat("[dynatrace]", " ").concat(ra)); } function nb(ra) { return null === ra || "object" !== typeof ra ? !1 : "[object Object]" === Object.prototype.toString.call(ra); } function ab(ra) {
        var ka = !1; JSON.stringify(ra,
            function (Na, sa) { (nb(sa) || Array.isArray(sa) || "number" !== typeof sa || isFinite(sa)) && "function" !== typeof sa || (bb((Array.isArray(this) ? "array" : 'key "'.concat(Na, '"')) + " contains an invalid value: [".concat(sa, "] and has been changed to null!")), ka = !0); return sa; }); return ka;
    } function Ra(ra, ka) {
        var Na, sa, Sa = {}, Ga; for (Ga in ka) if (Pa.dT_.oHOP(ka, Ga)) if ("dt" === Ga) bb('"'.concat("dt", '" is a reserved property and will be discarded!')); else {
            var L = void 0; void 0 === L && (L = 0); var ma = -1; (null === Ga || void 0 === Ga ? 0 : Ga.indexOf) &&
                (ma = Ga.indexOf("dt.", L)); 0 === ma ? bb('"dt.*" is a reserved keyword as a property name. Key "'.concat(Ga, '" will be discarded!')) : Sa[Ga] = ka[Ga];
        } var va; ka = (null === (va = fb.performance) || void 0 === va ? 0 : va.now) ? Math.round(1E6 * ((performance.timeOrigin || performance.timing.navigationStart) + fb.performance.now())) : 1E6 * Date.now(); va = Ha(Ha(Ha((Na = {}, Na.timestamp = ka, Na["event.kind"] = "RUM_EVENT", Na["event.provider"] = fb.location.hostname, Na), Sa), ra), (sa = {}, sa["dt.rum.application.id"] = Pa.dT_.scv("app"), sa["dt.rum.sid"] =
            Pa.dT_.gVI(), sa["dt.rum.instance.id"] = Pa.dT_.gVID(), sa["dt.rum.schema_version"] = "1.2", sa)); ab(va) && (va["dt.rum.has_nfn_values"] = !0); return va;
    } function ya(ra) { var ka, Na = Pa.dT_.cB(); Pa.dT_.gBP().ar(Na, JSON.stringify(ra)); Pa.dT_.sB(Na, !1, !1, !1, (ka = {}, ka.contentType = "event", ka)); } function Ca(ra) { return nb(ra) ? !0 : (bb("Provided attributes must be a JSON like object!"), !1); } function Ia(ra, ka) {
        if (!ra || "string" !== typeof ra) bb("Provided event type must be a non-empty string!"); else if (Ca(ka)) {
            var Na = {}; Na["event.type"] =
                ra; Na["event.kind"] = "BIZ_EVENT"; var sa, Sa = JSON.stringify(Ha((sa = {}, sa["event.type"] = ra, sa), ka)); try { var Ga = (new fb.TextEncoder).encode(Sa).length; } catch (L) { Ga = Sa.length; } ra = Ra((Na["dt.rum.custom_attributes_size"] = Ga, Na), ka); ya(ra);
        }
    } function na(ra, ka) { var Na; if (!ra || "string" !== typeof ra) bb("Provided event name must be a non-empty string!"); else if (Ca(ka)) { var sa = Ra((Na = {}, Na["event.type"] = ra, Na), ka); ya(sa); } } this.dT_ && dT_.prm && dT_.prm(); var Pa = "undefined" !== typeof window ? window : self, fb = "undefined" !==
        typeof window ? window : self; (function () { var ra, ka; fb.JSON && fb.JSON.stringify && fb.dT_ && (null === (ka = (ra = Pa.dT_).smbi) || void 0 === ka ? 0 : ka.call(ra, "N")) && ((ra = fb.dynatrace) ? (ra.sendEvent = na, ra.sendBizEvent = Ia) : fb.dynatrace = { sendEvent: na, sendBizEvent: Ia }); })();
})();
(function () {
    function Ha() { Ha = Object.assign || function (n) { for (var x, y = 1, J = arguments.length; y < J; y++) { x = arguments[y]; for (var M in x) Object.prototype.hasOwnProperty.call(x, M) && (n[M] = x[M]); } return n; }; return Ha.apply(this, arguments); } function bb(n, x, y, J) {
        function M(Y) { return Y instanceof y ? Y : new y(function (da) { da(Y); }); } return new (y || (y = sd))(function (Y, da) {
            function qa(qb) { try { Ta(J.next(qb)); } catch (Cb) { da(Cb); } } function Ma(qb) { try { Ta(J["throw"](qb)); } catch (Cb) { da(Cb); } } function Ta(qb) {
                qb.done ? Y(qb.value) : M(qb.value).then(qa,
                    Ma);
            } Ta((J = J.apply(n, x || [])).next());
        });
    } function nb(n, x) {
        function y(Ta) { return function (qb) { return J([Ta, qb]); }; } function J(Ta) {
            if (Y) throw new TypeError("Generator is already executing."); for (; Ma && (Ma = 0, Ta[0] && (M = 0)), M;)try {
                if (Y = 1, da && (qa = Ta[0] & 2 ? da["return"] : Ta[0] ? da["throw"] || ((qa = da["return"]) && qa.call(da), 0) : da.next) && !(qa = qa.call(da, Ta[1])).done) return qa; if (da = 0, qa) Ta = [Ta[0] & 2, qa.value]; switch (Ta[0]) {
                    case 0: case 1: qa = Ta; break; case 4: return M.label++, { value: Ta[1], done: !1 }; case 5: M.label++; da = Ta[1];
                        Ta = [0]; continue; case 7: Ta = M.sa.pop(); M.Z.pop(); continue; default: if (!(qa = M.Z, qa = 0 < qa.length && qa[qa.length - 1]) && (6 === Ta[0] || 2 === Ta[0])) { M = 0; continue; } if (3 === Ta[0] && (!qa || Ta[1] > qa[0] && Ta[1] < qa[3])) M.label = Ta[1]; else if (6 === Ta[0] && M.label < qa[1]) M.label = qa[1], qa = Ta; else if (qa && M.label < qa[2]) M.label = qa[2], M.sa.push(Ta); else { qa[2] && M.sa.pop(); M.Z.pop(); continue; }
                }Ta = x.call(n, M);
            } catch (qb) { Ta = [6, qb], da = 0; } finally { Y = qa = 0; } if (Ta[0] & 5) throw Ta[1]; return { value: Ta[0] ? Ta[1] : void 0, done: !0 };
        } var M = {
            label: 0, B: function () {
                if (qa[0] &
                    1) throw qa[1]; return qa[1];
            }, Z: [], sa: []
        }, Y, da, qa, Ma; return Ma = { next: y(0), "throw": y(1), "return": y(2) }, "function" === typeof Symbol && (Ma[Symbol.iterator] = function () { return this; }), Ma;
    } function ab(n, x) { void 0 === x && (x = []); var y = I.dT_; y = (null === y || void 0 === y ? 0 : y.iIO) ? y.iIO : null; return !(null === y || void 0 === y || !y(n, x)); } function Ra(n) { return n && "IFRAME" === n.nodeName; } function ya(n) { return n && "IMG" === n.nodeName; } function Ca() { return Ud; } function Ia(n, x, y) {
        if (!Md[y]) {
            var J = new Image; x = {
                url: y, time: Ba.dT_.nw(), element: J,
                Zi: x
            }; ra(J, x, n); J.src = y; Md[y] = J;
        } return Md[y];
    } function na(n, x, y) { var J = Nc[x][y] || []; if (n.element) { var M = Ba.dT_.aFI(J, function (Y) { return Y.element === n.element; }); 0 <= M && J.splice(M, 1); } Pa(n, x, y); } function Pa(n, x, y) { Nc[x][y] || (Nc[x][y] = []); Nc[x][y].push(n); } function fb(n, x, y) { x = Nc[x][y] || []; n = Ba.dT_.aIOf(x, n); 0 <= n && x.splice(n, 1); } function ra(n, x, y) {
        function J() { fb(x, 2, y); na(x, 1, y); var Y = J; n.removeEventListener("load", M); n.removeEventListener("error", Y); } function M() {
            fb(x, 2, y); var Y = J; n.removeEventListener("load",
                M); n.removeEventListener("error", Y);
        } Pa(x, 2, y); n.addEventListener("load", M); n.addEventListener("error", J);
    } function ka(n) { return gd && ab(n, 13) && "navigation" !== n.entryType || ab(n, ["_dtCl"]); } function Na() { } function sa(n) { return 0 < n.left + n.width && n.left < L() && 0 < n.top + n.height && n.top < Ga(); } function Sa(n) { return n && 0 < n.width && 0 < n.height && sa(n); } function Ga() { Hd || (Hd = I.innerHeight || kd.clientHeight); return od.bwsH || Hd; } function L() { Vd || (Vd = I.innerWidth || kd.clientWidth); return od.bwsW || Vd; } function ma(n) {
        var x = L(),
            y = Ga(); return { top: 0, left: 0, width: Math.max(0, Math.min(n.left + n.width, x)) - Math.max(0, Math.min(n.left, x)), height: Math.max(0, Math.min(n.top + n.height, y)) - Math.max(0, Math.min(n.top, y)) };
    } function va(n, x, y) {
        if (!y && Xa(n)) return !0; n = y || ea(x); (x = "hidden" === n.visibility || "none" === n.display || "0" === n.opacity || "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)" === n.clipPath) || (x = n.transform || "", n = !1, y = x.indexOf("("), 0 < y && (x = x.substring(y + 1, x.length - 1).split(", "), n = "0" === x[0], 6 === x.length ? n = n || "0" === x[3] : 16 === x.length &&
            (n = n || "0" === x[5] || "0" === x[10])), x = n); return x;
    } function Xa(n) { if (0 < yb && n.Vc >= yb) return n.Wc++, !0; n.Vc++; return !1; } function cb(n) { return Math.ceil(n.width * n.height); } function ba(n, x, y, J, M, Y) { var da; void 0 === Y && (Y = ""); try { if (!J && (J = Ka(x, n.Aa, M), !Sa(J))) return null; M = J; var qa = (da = {}, da.url = Y, da.time = 0, da.node = x, da.v = !va(n, x, y), da.area = cb(ma(M)), da.offset = { top: M.top, left: M.left, width: M.width, height: M.height }, da.is = 0, da), Ma = Ba.dT_.tau(Y); (n = wa) && n.test(Ma) && (qa.is = 2); return qa; } catch (Ta) { } return null; } function Ka(n,
        x, y) {
        void 0 === x && (x = new WeakMap); var J = Ba.dT_.gFId(); var M = x; x = M.get(n); x || (x = {}, M.set(n, x)); if (x[J]) J = x[J]; else { M = I.pageYOffset; var Y = n.clientTop, da = I.pageXOffset, qa = n.clientLeft, Ma = 0, Ta = 0; R(n) && (Ma = n.offsetWidth, Ta = n.offsetHeight); Ma = { top: 0, left: 0, offsetWidth: Ma, offsetHeight: Ta, clientWidth: n.clientWidth, clientHeight: n.clientHeight }; if ("function" === typeof n.getBoundingClientRect) try { var qb = n.getBoundingClientRect(), Cb = qb.left; Ma.top = qb.top + M - Y; Ma.left = Cb + da - qa; } catch (tc) { } J = x[J] = Ma; } qb = J.top; Cb = J.left;
        y && (qb += y.top, Cb += y.left); y = { top: qb, left: Cb, width: J.clientWidth, height: J.clientHeight }; R(n) && (y.width = J.offsetWidth, y.height = J.offsetHeight); return y;
    } function Da(n) { return n.area > ta && n.v && 0 === n.is && 0 < n.time; } function xa(n, x) { for (var y = 0; y < x.length; y++) { var J = x[y], M = 0, Y = J === n ? 2 : 0; Da(J) && (Y = Math.max(Y, 1)); 0 === Y && (M = 0, J.v || (M += 1), J.area > ta || (M += 2), 0 !== J.is && (M += 4)); J.relevance = Y; J.ireason = M; } } function N(n) { if (n.length) return n.reduce(function (x, y) { return Da(y) && (!x || x.time <= y.time) ? y : x; }, void 0); } function P() {
        var n =
            Ba.dT_.bcv, x = Ba.dT_.scv, y = Ba.dT_.ncv, J = Ba.dT_.de(x("iub")); try { J && (wa = new RegExp(J, "i")); } catch (M) { } Fa = n("vcfi"); Oa = y("vcx"); pa = y("tvc"); Ja = x("uana"); db = Ba.dT_.puesc(x("mb")); Za = y("vcit"); mb = 1E3 * y("oat"); mc = n("fvdi"); yb = y("vscl"); ta = y("vct"); Tb = n("ccNcss"); Ub = n("vrt"); Ic = n("vcsb");
    } function Ua(n) { for (var x = 0; x < zc.length; x++)if (zc[x] === n) { zc.splice(x, 1); break; } } function O(n, x) { void 0 === x && (x = !1); for (var y = zc.slice(), J = zc.length = 0; J < y.length; J++)(0, y[J])(n, x); } function X(n) {
        return !!n && "about:blank" !== n &&
            n !== location.href && n !== location.href.substring(0, location.href.lastIndexOf("/") + 1) && n !== document.baseURI;
    } function U(n) { try { return !!n.contentWindow && !Ba.dT_.gNNTV(n.contentWindow.performance, "loadEventEnd"); } catch (x) { return !1; } } function oa(n) { return !!n.area; } function ea(n, x) { void 0 === x && (x = I); return x.getComputedStyle(n); } function R(n) { var x = ud.get(n); if (x) return x; x = (ab(n, 9) || n && n.nodeType && 1 === n.nodeType) && ("string" === typeof n.textContent || "string" === typeof n.innerText); ud.set(n, x); return x; } function Ea() {
        var n =
            Ba.dT_.gto(); return function (x, y) { var J = y.duration, M = n + y.startTime + J; !J && ka(y) && (M = n + y.responseEnd); return Math.max(x, M); };
    } function eb(n, x, y) { if (n) { var J; var M = (J = {}, J.time = n.time, J.offset = n.offset, J.area = n.area, J.url = n.url, J.v = n.v, J.node = n.node, J.is = 0, J); M.v && (M.v = x); y.push(M); } } function gb(n, x, y, J, M, Y, da) {
        return bb(this, void 0, void 0, function () {
            var qa, Ma; return nb(this, function (Ta) {
                switch (Ta.label) {
                    case 0: return (qa = ba(n, x, y, J)) && x.contentWindow ? [4, oc(n, x.contentWindow, qa.offset, void 0, M)] : [3, 2]; case 1: Ma =
                        Ta.B(), Ba.dT_.fE(Ma, function (qb) { qb.v = qb.v && Y; da.push(qb); }), Ta.label = 2; case 2: return [2];
                }
            });
        });
    } function Yb(n, x, y) { var J = n.gLVD(); return J ? (eb(J.k, x, y), sd.resolve()) : new sd(function (M) { n.addE("VISUALLY_COMPLETE", function (Y) { eb(Y.detail.k, x, y); M(); }); }); } function Hb(n, x, y, J, M, Y, da) {
        void 0 === da && (da = !1); return new sd(function (qa, Ma) {
            var Ta = !1, qb; Xa(n) || (qb = ea(x, y)); var Cb = qb && qb.backgroundImage; if (Cb && "none" !== Cb) {
                var tc = 0; for (Cb = Cb.split(",").map(qc).filter(wb); tc < Cb.length; tc++) {
                    var fc = Cb[tc]; (fc = ba(n,
                        x, qb, Y, J, Ba.dT_.tau(fc))) && M.push(fc);
                }
            } if (Ra(x)) { var Jc = x.contentWindow; Ta = function () { var $c = qb, vd = da, qd; try { if (Jc && Jc.dT_) { var ad = Jc.dT_; ad && "ea" in ad && (qd = ad); } } catch (jf) { } ad = !va(n, x) && sa(Y); (qd && qd.gLVD ? Yb(qd, ad, M) : gb(n, x, $c, Y, vd, ad, M)).then(qa).catch(Ma); }; !da && U(x) ? (x.addEventListener("load", Ta), x.addEventListener("error", Ta)) : Ta(); Ta = !0; } ya(x) && (fc = lc(x)) && (tc = ba(n, x, qb, Y, J, fc)) && M.push(tc); Ta || qa();
        });
    } function Ib(n, x, y, J, M, Y) {
        void 0 === Y && (Y = !1); return bb(this, void 0, void 0, function () {
            var da, qa;
            return nb(this, function (Ma) { switch (Ma.label) { case 0: return Ma.Z.push([0, 6, , 7]), da = Ka(x, n.Aa), qa = y.getComputedStyle(x), (R(x) ? x.offsetWidth * x.offsetHeight > ta : x.clientWidth * x.clientHeight > ta) ? Sa(da) ? [4, Hb(n, x, y, J, M, da, Y)] : [3, 2] : [3, 3]; case 1: Ma.B(), Ma.label = 2; case 2: return [3, 5]; case 3: return Ba.dT_.iIO(x, 10) || qa.backgroundImage && "none" !== qa.backgroundImage ? [4, Hb(n, x, y, J, M, da, Y)] : [3, 5]; case 4: Ma.B(), Ma.label = 5; case 5: return [3, 7]; case 6: return Ma.B(), [3, 7]; case 7: return [2]; } });
        });
    } function yc(n) {
        return Fc ?
            hb(1, n).concat(hb(2, n)) : [];
    } function Wb(n) { return function (x) { var y = Ba.dT_.gto(), J = x.time - y; y = (x.endTime || x.time) - y; return { name: x.url, failedResource: n, startTime: J, responseEnd: y, duration: y - J, _dtCl: !0 }; }; } function hb(n, x) { var y = Ba.dT_.aM(Nc[n][x] || [], Wb(n)); x ? delete Nc[n][x] : Nc[n] = {}; return y; } function jc(n) { return !n.time; } function pb(n, x, y) { n = n.getEntriesByName(y.url, "resource")[0]; ka(n) ? y.time = Math.round(x + n.responseEnd) : y.time = 0; } function wc(n, x) {
        var y = null, J = 0; try { y = x.performance, J = Ba.dT_.gNTO(y); } catch (M) { } y &&
            n.filter(jc).forEach(pb.bind(null, y, J));
    } function wb(n) { return !(!n || 0 !== n.indexOf("http")); } function Eb(n, x) { return "loading" in HTMLImageElement.prototype && "lazy" === n.getAttribute("loading") && !sa(Ka(n, x)); } function lc(n) { try { if (n.srcset) return n.currentSrc; var x = n.parentElement; if (x && "PICTURE" === x.nodeName) for (var y = 0; y < x.children.length; y++)if ("SOURCE" === x.children[y].tagName) return n.currentSrc; return n.currentSrc || n.src; } catch (M) { try { var J = n.getAttribute("src"); return J ? Ba.dT_.tau(J) : ""; } catch (Y) { return ""; } } }
    function oc(n, x, y, J, M) { void 0 === M && (M = !1); return bb(this, void 0, void 0, function () { var Y, da; return nb(this, function (qa) { switch (qa.label) { case 0: Y = []; try { da = (J || x.document).getElementsByTagName("*"); } catch (Ma) { return [2, Y]; } return [4, Ba.dT_.fEP(da, function (Ma, Ta, qb, Cb) { Ib(n, Ma, x, y, Y, M).then(Cb).catch(Na); }, void 0, !(Bc.syn || M))]; case 1: return qa.B(), wc(Y, x), [2, Y]; } }); }); } function ub(n, x, y, J) {
        var M = { Ed: [], style: void 0 }; if (!y && !Tb || Xa(J)) return M; y = ea(n); if (!y) return M; M.style = y; (y = y.backgroundImage) && "none" !==
            y && (M.Ed = y.split(",").map(qc).filter(wb).filter(X).map(Ia.bind(null, x, n))); return M;
    } function qc(n) { void 0 === n && (n = ""); ze.lastIndex = 0; return (n = ze.exec(n)) && 1 < n.length ? n[1] || n[2] || n[3] : ""; } function $b(n, x, y, J) {
        if (Fa && !n.dT_vcInstr && !Eb(n, J.Aa)) if (ya(n)) {
            if (y = lc(n), X(y) && wb(y)) {
                y = { url: y, time: Ba.dT_.nw(), element: n }; n.dT_vcInstr = !0; a: if (!n.complete || n.naturalWidth || Ba.dT_.gBI().ie) J = n.complete ? "SUCCESSFUL" : "PENDING"; else {
                    if (Ba.dT_.gBI().ff) {
                        var M = J = lc(n), Y = J.indexOf("?"); 0 <= Y && (M = J.substring(0, Y)); if (M.lastIndexOf(".svg") ===
                            M.length - 4) { J = "UNKNOWN"; break a; }
                    } J = "FAILED";
                } switch (J) { case "FAILED": na(y, 1, x); break; case "PENDING": ra(n, y, x); }
            }
        } else R(n) && ub(n, x, y, J);
    } function hc(n, x, y, J) { var M = x.contentWindow; if (!M) return sd.resolve(); try { var Y = M.dT_; } catch (qa) { } var da = !va(n, x) && sa(J); return Y && Y.gLVD ? Yb(Y, da, n.ja) : oc(n, M, y).then(function (qa) { var Ma; (Ma = n.ja).push.apply(Ma, qa.map(function (Ta) { var qb; return Ha(Ha({}, Ta), (qb = {}, qb.v = Ta.v && da, qb)); })); }); } function sb() { O("f", !0); return Fe; } function F() {
        var n = Bc; n.gUI = yc; n.vWW = L; n.vWH = Ga;
        n.gVCP = sb; n.gLVD = Ca;
    } function q(n) { for (var x = 0, y = 0, J = 0, M = n.reduce(function (qa, Ma) { return qa + Ma.rc; }, 0), Y = 0; Y < n.length; Y++) { var da = n[Y]; y = da.time - y; 0 < y && 1 > J && (x += (1 - J) * y); J += da.rc / M; y = da.time; } return Math.round(x); } function A(n, x, y) { var J = [], M; for (M in n) if (Ba.dT_.oHOP(n, M)) { var Y = n[M].Wa; J.push({ time: +M - y, rc: Y / x, Wa: Y }); } J.sort(function (da, qa) { return da.time - qa.time; }); return J; } function C(n) { return n.v; } function K(n, x) {
        var y, J = x.time; x = x.area; null !== (y = n[J]) && void 0 !== y ? y : n[J] = { Wa: 0, rc: 0, time: 0 }; n[J].Wa +=
            x; return n;
    } function E(n) { n.Qa--; ha(n); } function ca(n, x) {
        var y = -1; if (x) {
            y = Math; var J = x.time; y = y.round.call(y, 0 > J ? -1 : J - n.Ua); y >= mb ? (n.trigger = "t", y = -2) : 0 > y && (y = -1); var M = x.node; if (M) {
                J = x.area; var Y = { left: NaN, top: NaN }; try { Y = M.getBoundingClientRect(); } catch (Ta) { } var da = Ja.split(","); J = { location: { x: Math.ceil(Y.left), y: Math.ceil(Y.top) }, size: Math.ceil(J), hi: M.getAttribute("class"), id: M.getAttribute("id"), name: M.getAttribute("name"), tagName: M.tagName, Nf: Ba.dT_.gecsss(M) }; for (Y = 0; Y < da.length; Y++) {
                    var qa = da[Y],
                        Ma = M.getAttribute(qa); if (Ma) { J.$g = { key: qa, value: Ma }; break; }
                } J ? (M = J.$g, qa = J.location, Ma = J.size, da = J.tagName, Y = J.Nf, J = Ba.dT_.aesc(J.name || ""), qa = [qa.x, qa.y, Ma], J && qa.push("n;".concat(J)), M && qa.push("u;".concat(Ba.dT_.aesc(M.key), ",").concat(Ba.dT_.aesc(M.value))), Y ? qa.push("s;".concat(Ba.dT_.aesc(Y))) : qa.push("t;".concat(Ba.dT_.aesc(da))), J = qa.join("|")) : J = ""; x.kd = J;
            } n.kg && (Fc = !0);
        } return y;
    } function Q(n, x, y) {
        var J = Ba.dT_.nw() - x.Hd, M = Ba.dT_.nw(), Y = x.ja.filter(oa); var da = x.Ua; Ba.dT_.nw(); for (var qa = Y.length -
            1; 0 < qa; qa--)for (var Ma = Y[qa], Ta = qa - 1; 0 <= Ta; Ta--) { var qb = Y[Ta], Cb = qb.area, tc = Ma.area; if (tc && Cb && 2500 < Cb) { var fc = Ma.offset, Jc = qb.offset, $c = Oc(fc.top, Jc.top), vd = Oc(fc.left, Jc.left), qd = zd(fc.left + fc.width, Jc.left + Jc.width); fc = zd(fc.top + fc.height, Jc.top + Jc.height); vd = Oc(0, qd - vd); $c = Oc(0, fc - $c); qb.area = Oc(0, Cb - zd(Math.round(vd * $c), tc)); } } Y = Y.filter(C).reduce(K, {}); da = A(Y, L() * Ga(), da); be = q(da); be > n && (be = n); Ba.dT_.nw(); da = be; M = Ba.dT_.nw() - M; n = [["V", n + "|" + x.trigger], ["VCD", J + ""], ["VCDS", M + ""], ["VCS", x.Hd - x.Ua +
                ""], ["VCO", x.ze - x.Ua + ""], ["VCI", x.Wc + ""]]; (y = (null === y || void 0 === y ? void 0 : y.kd) || "") && Ba.dT_.apush(n, ["VE", y]); Ba.dT_.apush(n, ["S", (0 <= da ? da : -1) + ""]); Ba.dT_.cAE("_vc_", n, x.D, x.Ua);
    } function ja(n) {
        var x, y, J; "n" === n.trigger && (n.trigger = n.Ia ? "f" : "c"); n.ja.sort(function (qa, Ma) { return qa.time - Ma.time; }); var M = N(n.ja), Y = ca(n, M); Q(Y, n, M); xa(M, n.ja); Fe = Y; var da = (x = {}, x.t = n.trigger, x.k = M, x.v = Y, x); Ud = da; Ba.dT_.disE((y = {}, y.kind = "VISUALLY_COMPLETE", y.detail = Ha(Ha({}, da), (J = {}, J.a = n.D, J.e = n.ja, J)), y)); M && (M.node =
            null); n.ja = []; Ua(n.Wd); n.$d = !0; n.Cg(-1 < Y ? n.Ua + Y : -1);
    } function ha(n) { var x = n.Rd === n.Ud, y = !n.Qa; x && y && n.oa && (Ba.dT_.ct(n.oa), n.oa = 0); !n.$d && y && (!n.sb.length && x || n.Ia) && ja(n); } function za() { var n = !1; Fa && Ba.dT_.addE("INSTRUMENTATION_TRIGGERED", function () { if (!n) { n = !0; for (var x = Ba.dT_.gEBTN("*"), y = { Vc: 0, Wc: 0, Aa: new WeakMap }, J = 0; J < x.length; J++)$b(x[J], Ba.dT_.lAID(), !0, y); } }); } function $a() {
        var n; ud = new WeakMap; za(); pd = !(null === (n = document.body) || void 0 === n || !n.childElementCount); Ba.dT_.las() || Ba.dT_.aMO(Ba.dT_.lAID());
        Ba.dT_.addE("ACTION_ENTERED", function (x) { Ba.dT_.aMO(x.detail.i); x.detail.i === x.detail.r && O("u"); }); Ba.dT_.addE("ACTION_CLOSED", function (x) { var y = x.detail, J = y.i, M = y.r; x = y.f; var Y = y.a; if (y.dne || M !== J) Ba.dT_.rMO(J); else { var da = function (Ta, qb) { Sb(Ta, J, qb) || (Ba.dT_.ct(qa), zb(J, !0, Y, da, Ma, Ta)); }; y = !("visible" === document.visibilityState || !Ic); zc.push(da); x = zb(J, x || y, Y, da, void 0, y ? "b" : void 0); var qa = x.oa, Ma = x.cf; } }); Ba.dT_.addE("ACTION_BEACON_FORCED", function () { O(Ba.dT_.las() ? "l" : "f"); }); Ba.dT_.addE("VISIBILITY_CHANGED",
            function (x) { "1" === x.detail && O("b"); });
    } function zb(n, x, y, J, M, Y) { var da = M || Ba.dT_.aAWC(n); if (!da) return Ad; if (!x) return { oa: Ba.dT_.st(function () { Mb(n, da, !1, y, J, Y); }, Oa), cf: da }; Mb(n, da, !0, y, J, Y); return Ad; } function jb(n, x) { return function (y) { y = x + y.time; return !n || n <= y; }; } function rc(n, x, y, J, M) {
        var Y = J.push; a: {
            var da; if ((y || !n.cc.has(M)) && M.nodeType !== Node.TEXT_NODE && R(M)) {
                var qa = ub(M, n.D, y, n), Ma = qa.Ed; ya(M) ? ($b(M, n.D, y, n), Ma.push(M)) : Ra(M) && Ma.push(M); if (y = M && M.nodeType && 1 === M.nodeType) try {
                    var Ta = db; y = !!Ta &&
                        M.matches(Ta);
                } catch (Cb) { y = !1; } if (Ma.length && !y) for (da = 0; da < Ma.length; da++)Fd(Ma[da], n, x, M, qa.style); else Ma = Ka(M, n.Aa), Ma = cb(ma(Ma)), Rb(n, (da = {}, da.time = Math.round(x), da.node = M, da.area = Ma, da.v = !va(n, M, qa.style), da.url = "", da.offset = { top: 0, left: 0, width: 0, height: 0 }, da.is = y ? 1 : 0, da)); try { if (M.hasChildNodes()) { var qb = M.childNodes; break a; } } catch (Cb) { }
            } qb = [];
        } Y.call(J, qb);
    } function Gb(n, x) {
        return bb(this, void 0, void 0, function () {
            var y, J, M; return nb(this, function (Y) {
                switch (Y.label) {
                    case 0: return y = !x.Ia, J = Ba.dT_.gXACT(x.D)[0],
                        M = n, J ? [4, Ba.dT_.fP(n, jb(J, Ba.dT_.gto()), y)] : [3, 2]; case 1: M = Y.B(), Y.label = 2; case 2: return [4, Ba.dT_.fEP(M, function (da, qa, Ma, Ta) { var qb = [], Cb = da.time; Ba.dT_.fEP(da.nodes, rc.bind(null, x, Cb, !0, qb), Cb, y).then(function () { return Ba.dT_.fEP(qb, function (tc, fc, Jc, $c) { Ba.dT_.fEP(tc, rc.bind(null, x, Cb, !1, qb), null, y, !0).then($c).catch(Na); }, null, y, !0); }).then(Ta).catch(Na); }, null, y, !0)]; case 3: return Y.B(), [2, x];
                }
            });
        });
    } function ic(n, x, y) {
        Ba.dT_.ct(n.Za); Ba.dT_.ct(n.rb); Ba.dT_.rMO("vc-timeout-".concat(x)); n.Za = -1; n.rb =
            -1; xc(x, y, !0);
    } function Zb(n, x) { var y = { rb: -1, Za: -1 }; y.rb = Ba.dT_.st(function () { ic(y, n, x); }, pa); bc(n, x, y); Ba.dT_.aMO("vc-timeout-".concat(n), function () { bc(n, x, y); }); return y; } function bc(n, x, y) { Ba.dT_.ct(y.Za); y.Za = Ba.dT_.st(function () { ic(y, n, x); }, Za); } function xc(n, x, y) {
        return bb(this, void 0, void 0, function () {
            var J, M; return nb(this, function (Y) {
                switch (Y.label) {
                    case 0: J = Ba.dT_.gMN(n); Ba.dT_.rMO(n); x.ze = Ba.dT_.nw(); x.Qa++; if (!y || !pd && !mc) return [3, 2]; x.Qa++; return [4, oc(x, I, void 0, void 0, x.Ia)]; case 1: return M =
                        Y.B(), M.forEach(Rb.bind(null, x)), E(x), [3, 3]; case 2: J.length || ha(x), Y.label = 3; case 3: return [4, Gb(J, x)]; case 4: return Y.B(), E(x), [2];
                }
            });
        });
    } function Rb(n, x) { var y = x.node; if (y) { if (n.cc.has(y)) { (y = n.cc.get(y)) && x.time > n.ja[y].time && (n.ja[y] = x); return; } n.cc.set(y, n.ja.length); } n.ja.push(x); } function Mb(n, x, y, J, M, Y) {
        void 0 === Y && (Y = "n"); Ua(M); M = Ba.dT_.lAID() === n; var da = {
            Ua: J, Rd: 0, Ud: 0, Qa: 0, $d: !1, Hd: Ba.dT_.nw(), ze: 0, oa: Ba.dT_.st(function () { da.Ia = !0; da.Qa = 0; ha(da); }, mb), sb: [], Lf: [], ja: [], cc: new WeakMap, kg: M, Cg: x,
            D: n, trigger: Y, Ia: y, Vc: 0, Wc: 0, Aa: new WeakMap, Wd: function (Ma, Ta) { Sb(Ma, n, Ta) || (da.Ia = !0, da.Qa = 0, da.trigger = Ma, 0 <= qa.Za && 0 <= qa.rb && ic(qa, n, da), ha(da)); }
        }; if ("b" === Y) ha(da); else { var qa = { Za: -1, rb: -1 }; zc.push(da.Wd); M && !y ? qa = Zb(n, da) : xc(n, da, M); }
    } function Sb(n, x, y) { return x !== Ba.dT_.lAID() && (y || "u" === n); } function tb(n, x, y, J, M, Y, da) {
        var qa, Ma = Ba.dT_.tau(n), Ta = wa; Ta = Ma && Ta && Ta.test(Ma); var qb = cb(ma(J)), Cb = (qa = {}, qa.url = Ma, qa.time = Math.round(x), qa.node = y, qa.v = !va(M, y, da), qa.area = qb, qa.offset = J, qa.is = Ta ? 2 : 0, qa);
        Rb(M, Cb); J = ya(y); da = Ra(y); n = J && !y.complete && !Ba.dT_.gBI().ie && "data:" !== n.substring(0, 5) || da && U(y); M.Rd++; Ba.dT_.apush(M.sb, { name: Cb.url, startTime: x }); if (!n || M.Ia || Ta) (J || da) && vc(y, M, Cb, Y, !0); else { var tc = function () { M.Aa.delete(y); vc(y, M, Cb, Y, !1); y.removeEventListener("load", tc); y.removeEventListener("error", tc); }; y.addEventListener("load", tc); y.addEventListener("error", tc); }
    } function Pb(n) { return n.currentSrc || n.getAttribute("src") || n.getAttribute("href") || ""; } function Zc(n, x, y, J, M) {
        var Y, da = wa; da = (n =
            Ba.dT_.tau(n)) && da && da.test(n); var qa = M === x; return Y = {}, Y.url = n, Y.time = Math.round(y), Y.node = x, Y.v = !1, Y.area = 0, Y.offset = J, Y.is = da ? 2 : 0, Y.w = qa ? x.width : M.clientWidth, Y.h = qa ? x.height : M.clientHeight, Y.nw = qa ? x.naturalWidth : x.width, Y.nh = qa ? x.naturalHeight : x.height, Y;
    } function Fd(n, x, y, J, M) { var Y = Pb(n); if (X(Y) && !Eb(n, x.Aa) && !x.sb.some(function (qa) { return qa.name === Y; })) { var da = Ka(J, x.Aa); ya(n) && !n.width || Sa(da) ? (sa(da) || ya(n)) && tb(Y, y, n, da, x, J, M) : ya(n) && x.ja.push(Zc(Y, n, y, da, J)); } } function vc(n, x, y, J, M) {
        var Y =
            I.performance, da = y.url, qa = Ba.dT_.nw(); (Y = !M && Ub ? qa : Y.getEntriesByName(da, "resource").reduce(Ea(), 0)) && (y.time = Math.max(Math.round(Y), y.time)); M || (y.o = qa); Y = ma(Ka(J || n, x.Aa)); y.area = cb(Y); y.node = J; if (ya(n)) { var Ma = J === n; y.w = Ma ? n.width : J.clientWidth; y.h = Ma ? n.height : J.clientHeight; y.nw = Ma ? n.naturalWidth : n.width; y.nh = Ma ? n.naturalHeight : n.height; } x.Ud++; J = Ba.dT_.aFI(x.sb, function (Ta) { return Ta.name === da; }); -1 !== J && (J = x.sb.splice(J, 1)[0], x.Lf.push(J.name), M && x.Ia && na({
                time: J.startTime, url: J.name, isVisible: Da(y),
                element: y.node, endTime: qa
            }, 2, x.D), Ra(n) && (x.Qa++, hc(x, n, y.offset, Y).then(E.bind(null, x)).catch(Na)), ha(x));
    } function cd(n) { n = n.detail; var x = n.i, y = n.a; n.r === x && Ba.dT_.cAE("_vc_", [["V", "-3"], ["S", "-3"]], x, y); } var sd = this.dT_ && dT_.prm && dT_.prm() || window.Promise, Ba = "undefined" !== typeof window ? window : self, I = "undefined" !== typeof window ? window : self, la; (function (n) {
        n.ANCHOR = "A"; n.BUTTON = "BUTTON"; n.FORM = "FORM"; n.I_FRAME = "IFRAME"; n.IMAGE = "IMG"; n.INPUT = "INPUT"; n.LABEL = "LABEL"; n.LINK = "LINK"; n.OPTION = "OPTION"; n.SCRIPT =
            "SCRIPT"; n.SELECT = "SELECT"; n.STYLE = "STYLE"; n.TEXT_AREA = "TEXTAREA";
    })(la || (la = {})); var ta = -1, wa = null, Fa = !1, Oa = -1, pa = -1, Ja = "", db = "", Za = -1, mb = -1, mc = !1, Tb = !1, yb = 0, Ub = !1, Ic = !1, Fc = !1, Bc, od, Fe, Ud, td, Md = {}, Nc = (td = {}, td[1] = {}, td[2] = {}, td), gd = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming, zc = [], kd = I.document.documentElement, Hd, Vd, ud, ze = /url\s*\(\s*(?:'(\S*?)'|"(\S*?)"|((?:\\\s|\\\)|\\"|\\'|\S)*?))\s*\)/gi, ye; (function (n) {
        n.FAILED = "FAILED"; n.PENDING = "PENDING"; n.SUCCESSFUL =
            "SUCCESSFUL"; n.UNKNOWN = "UNKNOWN";
    })(ye || (ye = {})); var zd = Math.min, Oc = Math.max, be = -1, pd, Ad = { oa: 0, cf: void 0 }; (function () {
        var n, x, y = I.dT_; if (y && y.smbi && y.io && y.iMod) {
            Bc = y; od = Ba.dT_.tdto(); y = Ba.dT_.iMod(); var J = void 0; void 0 === J && (J = 0); var M = -1; (null === y || void 0 === y ? 0 : y.indexOf) && (M = y.indexOf("V", J)); y = -1 !== M; J = Ba.dT_.smbi("V"); M = I.performance; var Y = Ba.dT_.bcv("dmo") && Ba.dT_.gBI().ie, da = od.syn; M = !!I.MutationObserver && !(null === M || void 0 === M || !M.getEntriesByType) && !Y || da; if (null === (x = (n = Ba.dT_).ssmbi) || void 0 ===
                x ? 0 : x.call(n, "V", !1, M, J)) return y || Ba.dT_.iMod("V"), P(), Ba.dT_.addE && Ba.dT_.addE("CONFIG_UPDATE", P), $a(), !0; !J || y || M || Ba.dT_.addE("ACTION_BEFORE_SEND", cd);
        } return !1;
    })() && F();
})();
(function () {
    function Ha(L) {
        function ma(ba) { return !(!ba || !ba[L]); } var va = 0; if (ma(document.body)) return document.body; if (ma(document.body.firstElementChild)) return document.body.firstElementChild; if ("function" === typeof document.createTreeWalker && "undefined" !== typeof NodeFilter) {
            var Xa = function (ba) { va++; return ma(ba) || 50 === va ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; }; try { var cb = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, { acceptNode: Xa }).nextNode(); } catch (ba) {
                cb = document.createTreeWalker(document.body,
                    NodeFilter.SHOW_ELEMENT, Xa, !1).nextNode();
            } return cb;
        }
    } function bb(L) { var ma; if (na.Vue && na.Vue.version) { var va = na.Vue.version; "2" === va.split(".")[0] && "__vue__" === L && (ma = va); "3" === va.split(".")[0] && "__vue_app__" === L && (ma = va); } (va = Ha(L)) && va[L] && (Ia.dT_.iVRA(va, L), ma || (ma = "")); return ma; } function nb(L) {
        for (var ma = na, va = 0; va < L.length; va++)if (ma = L[va], "function" === typeof ma) ma = ma.apply(this); else {
            var Xa = ma.split("."); ma = na; for (var cb = 0; cb < Xa.length && "undefined" !== typeof ma && null != ma; cb++)ma = -1 === Xa[cb].indexOf("()") ?
                ma[Xa[cb]] : ma[Xa[cb].replace("()", "")](); if ("undefined" !== typeof ma) break;
        } return ma;
    } function ab() {
        var L = [], ma = 0, va = Array.prototype, Xa = va.concat, cb = []; for (N in Ga) if (Ia.dT_.oHOP(Ga, N)) try { var ba = Ga[N]; "object" !== typeof ba && (ba = [], ba[0] = Ga[N]); var Ka = nb(ba); if ("string" === typeof Ka || Ia.dT_.iIO(Ka, 3)) cb.push(N + ("b" === N ? Ka : Ka.split(/-|_| /)[0])); else if ("object" === typeof Ka && Ka.length) for (var Da = Ka.length, xa = 0; xa < Da; xa++)cb.push(N + Ka[xa]); else void 0 !== Ka && cb.push(N + "x"); } catch (Ua) { } var N = []; for (var P in sa) if (Ia.dT_.oHOP(sa,
            P)) if (0 === sa[P].indexOf("url")) for (ba = sa[P].replace("url:", ""), Ka = document.getElementsByTagName("script"), Da = 0; Da < Ka.length; Da++)try { if (Ka[Da].src && -1 !== Ka[Da].src.indexOf(ba)) { N.push(P); break; } } catch (Ua) { } else "undefined" !== typeof na[sa[P]] && N.push(P); for (va = Xa.call(va, cb, N); ma < va.length; ma++)Xa = va[ma], ka[Xa] || (L.push(Xa), ka[Xa] = !0); return L;
    } function Ra(L, ma, va, Xa) { ma || 20 < ra || (Na.length || (Na = ab(), ra++), Na.length && (L.av(Xa, "fd", Ia.dT_.aesc(Na.join(";")), !1), Na = [])); } function ya(L) {
        L.detail.i === Ia.dT_.lAID() &&
            (Na = ab(), Ia.dT_.remE("ACTION_CLOSED", ya));
    } function Ca(L, ma, va) { var Xa = 0; try { if (3 >= va && !Ia.dT_.iIO(L, 8)) if ("object" === typeof L && -1 === Ia.dT_.aIOf(ma, L)) { Ia.dT_.apush(ma, L); for (var cb in L) Ia.dT_.oHOP(L, cb) && (Xa++, Xa += Ca(L[cb], ma, va + 1)); } else if (Array.isArray(L) && -1 === Ia.dT_.aIOf(ma, L)) { Ia.dT_.apush(ma, L); for (var ba = 0; ba < L.length; ba++)cb = L[ba], Xa += Ca(cb, ma, va + 1); } } catch (Ka) { } return Xa; } this.dT_ && dT_.prm && dT_.prm(); var Ia = "undefined" !== typeof window ? window : self, na = "undefined" !== typeof window ? window : self,
        Pa, fb, ra = 0, ka = [], Na = [], sa = { fueldeck: "FDUPA", soasta: "url:c.go-mpulse.net", monitis: "JSBenchmark", pingdom: "PRUM_EPISODES", newrelic: "NREUM", appdynamics: "ADRUM", appneta: "_tly", pendo: "pendo", heap: "heap", mixpanel: "mixpanel", amplitude: "amplitude", tealeaf: "TLT", datadog: "DD_RUM", elastic: "elasticApm", requestmetrics: "RM", instana: "ineum", plumbr: "PLUMBR", glassbox: "_detector", decibelinsight: "decibelInsight", contentsquare: "CS_CONF", hotjar: "hjBootstrap", quantummetric: "QuantumMetricAPI", fullstory: "FS" }, Sa; (function (L) {
            L.ANGULAR =
                "g"; L.DATA_LAYER = "b"; L.NEXT = "p"; L.NUXT = "n"; L.REACT = "r"; L.VUE = "v"; L.VUE3 = "k";
        })(Sa || (Sa = {})); var Ga = (Pa = {}, Pa.g = function () { if (document.querySelectorAll) { for (var L = Array.prototype.slice.call(document.querySelectorAll("[ng-version]")), ma = [], va = 0, Xa = L.length; va < Xa; va++)ma.push(L[va].getAttribute("ng-version")); return ma.length ? ma : void 0; } }, Pa.b = function () {
            var L = na.dataLayer, ma = []; if (L && L.length) {
                for (var va = 0, Xa = 0; Xa < L.length; Xa++) {
                    var cb = L[Xa]; if ("object" === typeof cb && -1 === Ia.dT_.aIOf(ma, cb)) {
                        Ia.dT_.apush(ma,
                            cb); for (var ba in cb) Ia.dT_.oHOP(cb, ba) && (va++, va += Ca(cb[ba], ma, 0));
                    }
                } va ? (L = "1-5", 500 < va ? L = "501+" : 100 < va ? L = "101-500" : 50 < va ? L = "51-100" : 10 < va ? L = "11-50" : 5 < va && (L = "6-10"), va = L) : va = void 0; return va;
            }
        }, Pa.v = function () { return bb("__vue__"); }, Pa.k = function () { return bb("__vue_app__"); }, Pa.r = function () { if (na.React && na.React.Component) return (na.React.version || "") + ""; var L = Ha("_reactRootContainer"); if (L && L._reactRootContainer) return ""; }, Pa.n = function () { var L; if ((null === (L = na.__NUXT__) || void 0 === L ? 0 : L.data) || na.$nuxt) return ""; },
            Pa.p = function () { var L; if (na.__NEXT_DATA__ && na.__NEXT_DATA__.buildId) return ((null === (L = na.next) || void 0 === L ? void 0 : L.version) || "") + ""; }, Pa); (function () { var L, ma; (fb = na.dT_) && (null === (ma = (L = Ia.dT_).smbi) || void 0 === ma ? 0 : ma.call(L, "f")) && (Ia.dT_.aBPSL(Ra), Ia.dT_.addE("ACTION_CLOSED", ya)); })();
})();
(function () {
    function Ha(N, P, Ua, O, X) { var U, oa = !1; if (!Xa && !va) { va = !0; try { try { ma && ma !== Ha && "function" === typeof ma && (oa = ma(N, P, Ua, O, X)); } catch (ea) { ka.dT_.rex(ea, void 0, !0, "1"); } oa || ka.dT_.re((U = {}, U.msg = "string" === typeof N ? N : "", U.file = P || "", U.line = Ua || -1, U.column = O || -1, U.error = X || "", U.stackContainsWrapper = !1, U.source = "1", U)); } catch (ea) { } va = !1; } return oa; } function bb(N, P, Ua) { N[P] = Ua(N[P]); } function nb(N) {
        try {
            if (!Ra(N)) return N; var P = N.dtwid; "number" === typeof P && ba[P] ? ba[P].dd++ : (ba[Ka] = { na: N, dd: 1 }, N.dtwid = Ka++);
            N.rxewrapper = N.rxewrapper || function (Ua) { if (cb) try { if (Ra(N)) return Da.errorCallback(N, this, arguments); } catch (O) { if (-2146823277 !== O.number) throw ka.dT_.rex(O, void 0, !0, "1"), ab(), O; } else try { if (Ra(N)) return Da.errorCallback(N, this, arguments); } catch (O) { if (-2146823277 !== O.number) throw O; } }; return N.rxewrapper.rxewrapper = N.rxewrapper;
        } catch (Ua) { return N; }
    } function ab() { Xa += 1; ka.dT_.st(function () { --Xa; }, 0); } function Ra(N) { return "[object Function]" === Object.prototype.toString.call(N); } function ya() {
        var N = document.getElementsByTagName("html");
        (0 === N.length || 0 < N.length && !N[0].hasAttribute || 0 < N.length && !N[0].hasAttribute("webdriver")) && "EventTarget Window ModalWindow".replace(/\w+/g, function (P) {
            (P = Sa[P] && Sa[P].prototype) && ka.dT_.oHOP(P, "addEventListener") && (bb(P, "addEventListener", function (Ua) { return function (O, X, U, oa) { X && X.handleEvent && (X.handleEvent = nb(X.handleEvent)); return Ua.call(this, O, nb(X), U, oa); }; }), bb(P, "removeEventListener", function (Ua) {
                return function (O, X, U, oa) {
                    try { return Ua.call(this, O, X && X.rxewrapper ? X.rxewrapper : X, U, oa); } finally {
                        X &&
                            (O = X.dtwid, "number" === typeof O && ba[O] && ba[O].na === X && (ba[O].dd--, ba[O].dd || (delete X.rxewrapper, delete X.dtwid, delete ba[O])));
                    }
                };
            })); return "";
        });
    } function Ca() {
        L = Sa.dT_; if (!ka.dT_.bcv("doel")) {
            Sa.onerror !== Ha && (L.rxehandler = Ha, Sa.onerror && (ma = Sa.onerror), Sa.onerror = L.rxehandler); try { ka.dT_.apl(Sa, "onerror", function () { return Ha; }, function (N) { ma = N; }); } catch (N) { } ka.dT_.ael(Sa, "unload", function () {
                ka.dT_.rpl(Sa, "onerror", "win"); Sa.onerror = null; for (var N in ba) ka.dT_.oHOP(ba, N) && (delete ba[N].na.rxewrapper, delete ba[N].na.dtwid);
                ba = {};
            }); if (!Sa.atob) cb = !1; else if (Sa.ErrorEvent) try { 0 === (new Sa.ErrorEvent("test")).colno && (cb = !1); } catch (N) { } cb && ya();
        }
    } function Ia() { for (var N = [], P = 0; P < arguments.length; P++)N[P] = arguments[P]; var Ua, O; for (P = 0; P < N.length; P++) { var X = N[P]; !Ua && ka.dT_.iIO(X, 7) && (Ua = X); !O && X && "string" === typeof X && (O = X); } (Ua || O) && ka.dT_.rex(Ua || O, void 0, !1, "2"); return xa.apply(this, N); } function na(N) {
        var P; if (P = "string" === typeof N.blockedURL && "string" === typeof N.documentURL && N.blockedURL && N.documentURL) {
            P = N.blockedURL; var Ua =
                ka.dT_.scv("reportUrl"), O = void 0; void 0 === O && (O = 0); var X = -1; Ua && (null === P || void 0 === P ? 0 : P.indexOf) && (X = P.indexOf(Ua, O)); P = -1 === X;
        } if (P) { P = []; for (var U in N) N[U] && "function" !== typeof N[U] && P.push([U, N[U] + ""]); P.length && ka.dT_.cAE("_csprv_", P, !0, void 0, 1); }
    } function Pa(N) {
        var P; "securitypolicyviolation" === N.type && na((P = {}, P.sourceFile = N.sourceFile, P.blockedURL = N.blockedURI, P.documentURL = N.documentURI, P.referrer = N.referrer, P.disposition = N.disposition, P.effectiveDirective = N.effectiveDirective || N.violatedDirective,
            P.originalPolicy = N.originalPolicy, P.statusCode = N.statusCode, P.lineNumber = N.lineNumber, P.columnNumber = N.columnNumber, P.sample = N.sample, P));
    } function fb(N) { for (var P = 0; P < N.length; P++) { var Ua = N[P]; "csp-violation" === Ua.type && (Ua = Ua.body) && na(Ua); } } function ra(N) { N.reason && ka.dT_.iIO(N.reason, 7) ? ka.dT_.rex(N.reason, void 0, !0, "4") : N.detail && ka.dT_.iIO(N.detail.reason, 7) && ka.dT_.rex(N.detail.reason, void 0, !0, "4"); } this.dT_ && dT_.prm && dT_.prm(); var ka = "undefined" !== typeof window ? window : self, Na; (Na || (Na = {})).ERROR_CALLBACK =
        "errorCallback"; var sa; (function (N) { N.ANGULAR = "5"; N.CONSOLE = "2"; N.CUSTOM = "0"; N.PROMISE_REJECTION = "4"; N.WINDOW_ONERROR = "1"; N.XHR = "3"; })(sa || (sa = {})); var Sa = "undefined" !== typeof window ? window : self, Ga, L, ma, va = !1, Xa = 0, cb = !0, ba = {}, Ka = 0, Da = (Ga = {}, Ga.errorCallback = function (N, P, Ua, O, X, U) { return L.aWF(N, P, Ua, O, X, U); }, Ga), xa; (function () {
            var N, P; if (Sa.dT_ && (null === (P = (N = ka.dT_).smbi) || void 0 === P ? 0 : P.call(N, "q")) && (Ca(), ka.dT_.bcv("lupr") && ka.dT_.ael(Sa, "unhandledrejection", ra), ka.dT_.bcv("csprv") && (Sa.ReportingObserver ?
                (new Sa.ReportingObserver(fb, { buffered: !0, types: ["csp-violation"] })).observe() : ka.dT_.gBI().ff && ka.dT_.ael(document, "securitypolicyviolation", Pa)), ka.dT_.bcv("cce"))) { var Ua; null !== (Ua = Sa.console) && void 0 !== Ua && Ua.error && (xa = Sa.console.error, Sa.console.error = Ia); }
        })();
})();
(function () {
    function Ha(I, la, ta, wa) { function Fa(Oa) { return Oa instanceof ta ? Oa : new ta(function (pa) { pa(Oa); }); } return new (ta || (ta = Wb))(function (Oa, pa) { function Ja(mb) { try { Za(wa.next(mb)); } catch (mc) { pa(mc); } } function db(mb) { try { Za(wa["throw"](mb)); } catch (mc) { pa(mc); } } function Za(mb) { mb.done ? Oa(mb.value) : Fa(mb.value).then(Ja, db); } Za((wa = wa.apply(I, la || [])).next()); }); } function bb(I, la) {
        function ta(Za) { return function (mb) { return wa([Za, mb]); }; } function wa(Za) {
            if (Oa) throw new TypeError("Generator is already executing.");
            for (; db && (db = 0, Za[0] && (Fa = 0)), Fa;)try {
                if (Oa = 1, pa && (Ja = Za[0] & 2 ? pa["return"] : Za[0] ? pa["throw"] || ((Ja = pa["return"]) && Ja.call(pa), 0) : pa.next) && !(Ja = Ja.call(pa, Za[1])).done) return Ja; if (pa = 0, Ja) Za = [Za[0] & 2, Ja.value]; switch (Za[0]) {
                    case 0: case 1: Ja = Za; break; case 4: return Fa.label++, { value: Za[1], done: !1 }; case 5: Fa.label++; pa = Za[1]; Za = [0]; continue; case 7: Za = Fa.sa.pop(); Fa.Z.pop(); continue; default: if (!(Ja = Fa.Z, Ja = 0 < Ja.length && Ja[Ja.length - 1]) && (6 === Za[0] || 2 === Za[0])) { Fa = 0; continue; } if (3 === Za[0] && (!Ja || Za[1] >
                        Ja[0] && Za[1] < Ja[3])) Fa.label = Za[1]; else if (6 === Za[0] && Fa.label < Ja[1]) Fa.label = Ja[1], Ja = Za; else if (Ja && Fa.label < Ja[2]) Fa.label = Ja[2], Fa.sa.push(Za); else { Ja[2] && Fa.sa.pop(); Fa.Z.pop(); continue; }
                }Za = la.call(I, Fa);
            } catch (mb) { Za = [6, mb], pa = 0; } finally { Oa = Ja = 0; } if (Za[0] & 5) throw Za[1]; return { value: Za[0] ? Za[1] : void 0, done: !0 };
        } var Fa = { label: 0, B: function () { if (Ja[0] & 1) throw Ja[1]; return Ja[1]; }, Z: [], sa: [] }, Oa, pa, Ja, db; return db = { next: ta(0), "throw": ta(1), "return": ta(2) }, "function" === typeof Symbol && (db[Symbol.iterator] =
            function () { return this; }), db;
    } function nb(I, la) { void 0 === la && (la = []); var ta = jc.dT_; ta = (null === ta || void 0 === ta ? 0 : ta.iIO) ? ta.iIO : null; return !(null === ta || void 0 === ta || !ta(I, la)); } function ab(I, la) { void 0 === la && (la = 0); return I.name + "_" + (I.startTime + la) + "_" + I.duration; } function Ra() { try { performance.getEntries()[0].dt_test = !0, wb = performance.getEntries()[0].dt_test, Eb = function () { return !!wb; }; } catch (I) { } } function ya() { wc = jc.dT_; Eb = hb.dT_.gBI().sf ? function () { return !1; } : function () { Ra(); return !!wb; }; } function Ca() {
        function I() { }
        if (!ub) return !1; $b = ub.getEntriesByType; hc = ub.getEntriesByName; qc = ub.setResourceTimingBufferSize; (sb = ub.clearResourceTimings) && (ub.clearResourceTimings = I); ub.webkitClearResourceTimings && (ub.webkitClearResourceTimings = I); return !!$b && !!hc && !!qc && !!sb;
    } function Ia(I) { "function" === typeof ub.addEventListener ? ub.addEventListener("resourcetimingbufferfull", I) : "undefined" !== typeof ub.onresourcetimingbufferfull && (F = ub.onresourcetimingbufferfull, ub.onresourcetimingbufferfull = I); } function na() {
        try {
            "function" ===
                typeof F && F.call(ub, new Event("resourcetimingbufferfull", { bubbles: !0, cancelable: !0 })), hb.dT_.st(function () { sb.call(ub); }, 0);
        } catch (I) { }
    } function Pa() { ub = jc.performance; var I = Ca(); I && qc.call(ub, 1E3); return I; } function fb(I) { var la = I.detail; I = la.a; if (la = la.e) for (var ta = 0; ta < la.length; ta++) { var wa = la[ta], Fa = wa.url; if (Fa) { var Oa = wa.relevance || 0; wa = { Wa: wa.area, imageWidth: wa.w, imageHeight: wa.h, Fc: wa.nw, Ec: wa.nh, Ce: wa.o, fd: Oa, fg: wa.ireason || 0, D: I || 0 }; if (!q[Fa] || Oa > q[Fa].fd) q[Fa] = wa; } } } function ra(I) {
        return !!I &&
            isFinite(I) && 0 < I;
    } function ka(I) { var la = q[I.name]; "undefined" !== typeof la ? (I.relevantArea = la.Wa, I.relevance = la.fd, I.vcIrrelevanceReason = la.fg, la.Ce && (I.onloadTime = la.Ce - Math.round(I.startTime) - hb.dT_.gto()), ra(la.imageWidth) && ra(la.imageHeight) && (I.imageWidth = la.imageWidth, I.imageHeight = la.imageHeight), ra(la.Fc) && la.Fc !== la.imageWidth && (I.imageNaturalWidth = la.Fc), ra(la.Ec) && la.Ec !== la.imageHeight && (I.imageNaturalHeight = la.Ec), delete q[I.name]) : I.relevance = 0; } function Na() { return C; } function sa(I) {
        E[ab(I)] =
            I;
    } function Sa(I) { Q[ab(I)] = I; } function Ga(I, la, ta) { return { get: function () { var wa = +I[ta]; return isNaN(wa) ? la : wa + la; } }; } function L(I, la) { function ta(Ja) { Ja in I && (Fa[Ja] = { get: function () { return I[Ja]; } }); } if (0 >= la) return I; var wa = E[ab(I, la)]; if (wa) return wa; for (var Fa = {}, Oa = 0, pa = ja; Oa < pa.length; Oa++)wa = pa[Oa], Fa[wa] = Ga(I, la, wa); la = 0; for (Oa = ha; la < Oa.length; la++)wa = Oa[la], ta(wa); wa = Object.create(I, Fa); wa._dtCl = !0; sa(wa); return wa; } function ma() {
        var I = [], la = document.getElementsByTagName("iframe"); if (!la.length) return I;
        for (var ta = 0; ta < la.length; ta++) {
            var wa = la[ta]; try {
                var Fa = I, Oa = Fa.concat; var pa = void 0, Ja = wa.contentWindow; b: { for (var db = 0; db < A.length; db++)if (wa === A[db]) { var Za = db; break b; } var mb = A.length; A.push(wa); "undefined" !== typeof wa.src && (C[wa.src] = mb); Za = mb; } if (Ja.dT_) var mc = []; else {
                    wa = []; var Tb = Ja.performance.getEntriesByType("resource"), yb = ub.timeOrigin; pa = yb ? Ja.performance.timeOrigin - yb : Ja.performance.timing.navigationStart - ub.timing.navigationStart; pa = Math.round(pa); for (db = 0; db < Tb.length; db++) {
                        var Ub = L(Tb[db],
                            pa); K[ab(Ub)] || (Ub.frameId = Za, wa.push(Ub));
                    } mc = wa;
                } I = Oa.call(Fa, mc);
            } catch (Ic) { }
        } return I;
    } function va() {
        var I = [], la = $b.call(ub, "resource"), ta = Eb(), wa; if (jc.frames && jc.frames.length) { for (var Fa = [], Oa = 0; Oa < jc.frames.length; Oa++)try { var pa = jc.frames[Oa]; pa.dT_ && (null === (wa = null === pa || void 0 === pa ? void 0 : pa.location) || void 0 === wa ? 0 : wa.href) && Fa.push(pa.location.href); } catch (Ja) { } wa = Fa; } else wa = []; for (Fa = 0; Fa < la.length; Fa++) {
            Oa = la[Fa]; ta || ((pa = Q[ab(Oa)]) ? Oa = pa : Sa(Oa)); if (!(pa = K[ab(Oa)])) a: {
                if (("iframe" === Oa.initiatorType ||
                    "subdocument" === Oa.initiatorType) && wa.length) for (pa = 0; pa < wa.length; pa++)if (wa[pa] === Oa.name) { pa = !0; break a; } pa = !1;
            } pa || I.push(Oa);
        } return I;
    } function Xa(I, la) { if ("text/css" === la.type) { var ta = la.href || ""; var wa = la.ownerNode; la = wa && wa.nodeType && 1 === wa.nodeType ? la.ownerNode : null; } else ta = la.src; ta && la && (I[ta] = la); return I; } function cb(I, la) { return la.D !== I && !la.We; } function ba(I, la, ta, wa, Fa, Oa) {
        return function (pa) {
            if (!K[ab(pa)]) try {
                var Ja = pa.name, db = (pa.workerNavigationStart || hb.dT_.gto()) + pa.startTime, Za =
                    pa.name, mb; if (!(mb = -1 < Za.indexOf(hb.dT_.scv("csu")) || -1 < Za.indexOf("dtagent_") || -1 < Za.indexOf("ampbf") && -1 < Za.indexOf("flavor=amp"))) { var mc = Za.indexOf, Tb = hb.dT_.scv("reportUrl"); lc && Tb === oc || (oc = Tb, lc = hb.dT_.tau(oc)); mb = -1 !== mc.call(Za, lc); } if (!(mb || pa.startTime > pa.responseEnd || 0 > pa.startTime) && -1 === Ja.indexOf("chrome-extension://") && -1 === Ja.indexOf("chrome://") && -1 === Ja.indexOf("data:") && -1 === Ja.indexOf("javascript:") && -1 === Ja.indexOf("about:") && -1 === Ja.indexOf("res://")) {
                        Ja = db - I; var yb = q[pa.name],
                            Ub = pa.vf || Infinity; Ub = Fa ? Infinity : Ub; Za = wc; if (I <= db && db <= la + (Za.syn ? 1E3 : hb.dT_.ncv("rtt")) && Ub >= Ja || yb && yb.D === +ta && 0 < yb.fd) { var Ic; if (Ic = wa) { var Fc = pa.name; db = void 0; void 0 === db && (db = 0); yb = -1; wa && (null === Fc || void 0 === Fc ? 0 : Fc.indexOf) && (yb = Fc.indexOf(wa, db)); Ic = -1 < yb; } Fc = 3; Fa ? Fc = 1 : Ic && (Fc = 2); pa.ne && 3 !== pa.ne || (pa.vf = Ja, pa.ne = Fc, pa.Ne = Oa, pa.actionId = ta); }
                    }
            } catch (Bc) { }
        };
    } function Ka(I, la, ta) {
        return Ha(this, void 0, void 0, function () {
            var wa, Fa, Oa; return bb(this, function (pa) {
                switch (pa.label) {
                    case 0: zb = hb.dT_.aFr(zb,
                        cb.bind(null, I)), wa = 0, Fa = zb, pa.label = 1; case 1: if (!(wa < Fa.length)) return [3, 4]; Oa = Fa[wa]; return [4, Da(Oa, Oa.start, la, !1, ta)]; case 2: pa.B(), Oa.We = !0, pa.label = 3; case 3: return wa++, [3, 1]; case 4: return [2];
                }
            });
        });
    } function Da(I, la, ta, wa, Fa) {
        var Oa = I.D, pa = I.Oe, Ja = I.xhrUrl, db = I.start; return Ha(this, void 0, void 0, function () {
            var Za, mb, mc, Tb; return bb(this, function (yb) {
                switch (yb.label) {
                    case 0: return Za = hb.dT_.lAID(), mb = Oa === Za, mc = ba(db, la, Oa, Ja, mb, pa), [4, hb.dT_.fEP(Fa, mc, void 0, !ta)]; case 1: yb.B(); if (!wa) return [2];
                        Tb = za[pa]; Tb.count--; !Tb.count && 0 <= Tb.Hb.indexOf(pa) && hb.dT_.sMPS(1); return [2];
                }
            });
        });
    } function xa() { for (var I = 0, la = hb.dT_.oK($a); I < la.length; I++) { var ta = $a[+la[I]]; hb.dT_.ct(ta.oa); ta.Ga(!0); } $a = {}; } function N(I, la, ta, wa) { var Fa = za[ta]; Fa || (Fa = { count: 0, Hb: [] }); Fa.count++; Fa.Hb.push(I); za[ta] = Fa; zb.push({ D: I, start: la, Oe: ta, xhrUrl: wa, We: !1 }); } function P() { za = {}; $a = {}; zb = []; var I = hb.dT_.lAID(); N(I, hb.dT_.lst(), I); hb.dT_.addE("ACTION_ENTERED", Ua); hb.dT_.addE("ACTION_SENT", O); } function Ua(I) {
        var la = I.detail;
        I = la.x; var ta = la.i, wa = la.a, Fa = la.r; -1 === hb.dT_.aIOf(jb, la.t) && (la = hb.dT_.lAID(), Fa === la && Fa !== ta || N(ta, wa, Fa, I));
    } function O(I) {
        return Ha(this, void 0, void 0, function () {
            function la(yb) { return Ha(this, void 0, void 0, function () { var Ub; return bb(this, function (Ic) { switch (Ic.label) { case 0: return Ub = Array.prototype.concat(ma(), va(), ca), [4, Ka(Oa, !0, Ub)]; case 1: return Ic.B(), [4, Da({ D: Oa, Oe: Za, xhrUrl: wa, start: pa }, Ja, yb, !0, Ub)]; case 2: return Ic.B(), [2]; } }); }); } var ta, wa, Fa, Oa, pa, Ja, db, Za, mb, mc, Tb; return bb(this,
                function (yb) { switch (yb.label) { case 0: ta = I.detail; wa = ta.x; Fa = ta.t; Oa = ta.i; pa = ta.a; Ja = ta.s; db = ta.f; Za = ta.r; (mb = ta.rt) && Sa(mb); if (-1 !== hb.dT_.aIOf(jb, Fa)) return [2]; mc = hb.dT_.lAID(); return Za === mc && Za !== Oa ? [2] : db ? [4, la(db)] : [3, 2]; case 1: return yb.B(), [3, 3]; case 2: Tb = hb.dT_.st(function () { delete $a[Oa]; la(db); }, 2E3), $a[Oa] = { oa: Tb, Ga: la }, yb.label = 3; case 3: return [2]; } });
        });
    } function X(I) { var la; if (la = "number" === typeof I.Ne) { var ta; la = 0 === (null === (ta = za[I.Ne]) || void 0 === ta ? void 0 : ta.count); } return la; } function U(I) {
        var la =
            [], ta = 0, wa = []; for (pa in za) { var Fa; if (Fa = hb.dT_.oHOP(za, pa)) { Fa = +pa; var Oa = za[Fa]; Fa = !$a[Fa] && (!Oa || !Oa.count && 0 <= Oa.Hb.indexOf(Fa)); } Fa && wa.push.apply(wa, za[pa].Hb); } for (; ta < wa.length; ta++) {
                var pa = +wa[ta]; Oa = Fa = I[pa] || []; var Ja = pa, db = wc; if (!db.syn && db.gLVD) { var Za = 0; for (Ja = db.gUI(Ja); Za < Ja.length; Za++) { db = Ja[Za]; for (var mb = !1, mc = 0, Tb = Oa; mc < Tb.length; mc++) { var yb = Tb[mc]; if (!yb.failedResource && yb.name === db.name) { yb.failedResource = db.failedResource; mb = !0; break; } } mb || (ka(db), hb.dT_.apush(Oa, db)); } } la.push({
                    resources: Fa,
                    actionId: pa
                }); delete za[pa];
            } return la;
    } function oa(I) {
        I && xa(); I = hb.dT_.aFr(Array.prototype.concat(ma(), va(), ca), X); var la = Array.prototype.concat(Array.prototype.slice.call(document.scripts), Array.prototype.slice.call(document.styleSheets)).reduce(Xa, {}); I = I.reduce(function (ta, wa) {
            var Fa = wa.actionId, Oa = ta[Fa]; Oa || (Oa = []); var pa = la[wa.name]; if (pa) {
                if (pa && "LINK" === pa.nodeName) { var Ja = pa.media || "all"; pa = "stylesheet" === pa.rel && window.matchMedia(Ja).matches && !pa.disabled; } else pa = !pa.hasAttribute("async") &&
                    !pa.hasAttribute("defer") && "module" !== pa.getAttribute("type"); wa.isCritical = +pa;
            } ka(wa); Oa.push(wa); ta[Fa] = Oa; K[ab(wa)] = !0; return ta;
        }, {}); I = U(I); 900 < $b.call(ub, "resource").length && (na(), K = {}, E = {}, Q = {}, ca = [], q = {}); return I;
    } function ea(I) { return sd && nb(I, 13) && "navigation" !== I.entryType || nb(I, ["_dtCl"]); } function R(I) {
        -1 < I.indexOf("ScriptResource.axd") ? I = "js" : (I = I.substring(1 + I.lastIndexOf("/")), 0 < I.indexOf("?") && (I = I.split("?")[0]), 0 < I.indexOf("#") && (I = I.split("#")[0]), I = 0 < I.indexOf(".") ? I.substring(I.lastIndexOf(".") +
            1) : "-"); switch (I) { case "js": return "s"; case "gif": case "png": case "jpg": case "jpeg": case "ico": case "tiff": case "bmp": case "xbm": case "svg": return "i"; case "css": return "c"; default: return "o"; }
    } function Ea(I) { I = Fd() + I.startTime; I -= Zb(); return Math.round(I); } function eb(I, la, ta, wa) {
        var Fa = I.resources; I = I.actionId; if (Sb().op) { for (var Oa = [], pa = {}, Ja = 0; Ja < Fa.length; Ja++) { var db = Fa[Ja]; pa[db.name] || (Oa.push(db), pa[db.name] = !0); } Fa = Oa; } Oa = []; pa = 0; for (Ja = Fa; pa < Ja.length; pa++) {
            db = Oa; var Za = db.push, mb = Ja[pa], mc = R(mb.name.toLowerCase()),
                Tb = mb, yb = Tb.duration; !yb && ea(Tb) && (yb = Tb.responseEnd - Tb.startTime); Tb = yb ? Math.round(yb) : 0; yb = Ea(mb); var Ub = mb; ea(Ub) && 0 < Ub.responseEnd ? (Ub = Fd() + Ub.responseEnd, Ub -= Zb(), Ub = Math.round(Ub)) : Ub = Math.round(xc() - Zb()); Tb = { duration: Tb, start: yb, stop: Ub }; yb = mb.name; Ub = Rb(mb.name); var Ic = Ea(mb) <= bc() ? "_load_" : "-", Fc = 0 === mb.responseEnd; var Bc = mb; Bc = Bc.failedResource ? !1 : Rb(Bc.name) === cd && Sb().ie ? 0 !== Bc.requestStart : 0 < Bc.responseEnd; mb = Sb().ch ? 0 !== mb.domainLookupStart && 0 === mb.requestStart : Rb(mb.name) !== cd && 0 ===
                    mb.requestStart && 2 > mb.duration ? !0 : 0 >= mb.responseEnd ? !1 : mb.requestStart === mb.fetchStart && mb.requestStart === mb.responseStart && mb.responseStart !== mb.responseEnd; Za.call(db, { type: mc, bj: Tb, url: yb, domain: Ub, Lh: Ic, Ji: Fc, rj: Bc, Vh: mb, Ei: !1 });
        } Yb(la, I, Oa, Fa, ta, wa);
    } function gb(I, la, ta, wa, Fa) {
        var Oa = Fa || Fd(); if (!I.length || 0 >= Oa) ta(""); else {
            var pa = []; ic(I, function (Ja) {
                if (vc && pa.length / 2 >= vc) Ja = !1; else {
                    var db = Ja.startTime, Za; if (Za = !(db < ("iframe" === Ja.initiatorType ? 1 : 0))) Za = Ja.actionId, Za = !Za || Za === la; Za && (db = db ?
                        ["b", Math.round(db)] : [], rc(Ja, db, Fd()), pa.push(Pb(Ja.name), db.join(""))); Ja = !0;
                } return Ja;
            }, void 0, function () { ta(Gb("".concat(la || tb(), "-").concat(Math.round(Oa), ";").concat(pa.join("|")))); }, !wa);
        }
    } function Yb(I, la, ta, wa, Fa, Oa) { gb(wa, la, function (pa) { pa && I.Me.push(pa); Fa(); }, Oa); } function Hb(I, la, ta, wa) {
        if (hb.dT_.las()) { var Fa = bc(); !ta && (0 >= Fa || 3E3 > xc() - Fa) ? (hb.dT_.sMPS(2E3), Fa = !1) : Fa = !0; } else Fa = !1; if (Fa && !la) {
            Ib(oa(ta), ta); !Ba.length || hb.dT_.last() + 3E4 <= xc() && hb.dT_.last() ? (Ba = [], la = void 0) : la = Ba.splice(0,
                1)[0]; if (la) for (la = la.Me, ta = 0; ta < la.length; ta++)I.av(wa, "rt", la[ta], !0, ta); Ba.length && hb.dT_.sMPS(100);
        }
    } function Ib(I, la) { for (var ta = { Me: [], resourceSummaries: [] }, wa = I.length, Fa = 0, Oa = 0; Oa < I.length; Oa++)eb(I[Oa], ta, function () { Fa++; Fa === wa && (Ba.push(ta), hb.dT_.sMPS(0)); }, la); } function yc(I) {
        rc = I.snt; Gb = I.esc; ic = I.fE; Zb = I.lst; xc = I.nw; bc = I.gLAet; Rb = I.gh; Mb = I.loc; Sb = I.gBI; tb = I.lAID; Pb = I.aur; Zc = I.stcv; Fd = I.gto; I = wc; vc = hb.dT_.ncv("rtl"); I.syn && (vc = 0, Zc("rtp", 1), Zc("rtu", 800)); cd = Rb(Mb()); I = jc.performance; 0 <
            ((null === I || void 0 === I ? void 0 : I.timeOrigin) || (null === I || void 0 === I ? void 0 : I.timing.navigationStart)) && hb.dT_.aBPSL(Hb);
    } var Wb = this.dT_ && dT_.prm && dT_.prm() || window.Promise, hb = "undefined" !== typeof window ? window : self, jc = "undefined" !== typeof window ? window : self, pb; (function (I) { I.ANCHOR = "A"; I.BUTTON = "BUTTON"; I.FORM = "FORM"; I.I_FRAME = "IFRAME"; I.IMAGE = "IMG"; I.INPUT = "INPUT"; I.LABEL = "LABEL"; I.LINK = "LINK"; I.OPTION = "OPTION"; I.SCRIPT = "SCRIPT"; I.SELECT = "SELECT"; I.STYLE = "STYLE"; I.TEXT_AREA = "TEXTAREA"; })(pb || (pb = {}));
    var wc, wb, Eb, lc, oc, ub, qc, $b, hc, sb, F, q = {}, A = [], C = {}, K = {}, E = {}, ca = [], Q = {}, ja = "connectEnd connectStart domainLookupEnd domainLookupStart fetchStart redirectEnd redirectStart requestStart responseEnd responseStart secureConnectionStart startTime workerStart".split(" "), ha = "name duration transferSize decodedBodySize encodedBodySize entryType initiatorType nextHopProtocol serverTiming transferSize responseStatus".split(" "), za = {}, $a = {}, zb = [], jb = "_error_ _ts_ _code_ _debug_ _emu_ _location_ _stack_ _useraction_ _type_ _log_ _rs_ _endVisit_ - _t_".split(" "),
        rc, Gb, ic, Zb, bc, xc, Rb, Mb, Sb, tb, Pb, Zc, Fd, vc, cd, sd = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming, Ba = []; (function () { var I, la, ta = jc.dT_; if (!ta || null === (la = (I = hb.dT_).ssmbi) || void 0 === la || !la.call(I, "r", !1, !0) || jc.Eh) return !1; ya(); if (!Pa()) return !1; yc(ta); P(); C = {}; A = []; q = {}; K = {}; E = {}; Q = {}; ca = []; Ia(function () { ca = va(); }); hb.dT_.addE("VISUALLY_COMPLETE", fb); return !0; })() && (wc.gFU = Na);
})();
(function () {
    function Ha(ea) { L.dT_.addE && L.dT_.addE("CONFIG_UPDATE", ea); } function bb() { (Xa = L.dT_.bcv("uxdce")) && (cb = L.dT_.ncv("uxdcw")); } function nb() { (Ka = L.dT_.aO("deadClickObserver", ya)) && Ka.observe(document.documentElement, { childList: !0, attributes: !0, characterData: !0, subtree: !0 }); Ka && (L.dT_.aBPSL(Ra), L.dT_.ael(document, "click", ab), xa = !0); } function ab() { var ea = L.dT_.nw(); L.dT_.st(function () { ba < ea && (Da.push({ time: Math.round(ea) }), L.dT_.sMPS(2E3)); }, cb); } function Ra(ea, R, Ea, eb) {
        if (0 !== Da.length) {
            R = ea.av;
            Ea = Da; for (var gb = [], Yb = 0; Yb < Ea.length; Yb++)gb.push(Ea[Yb].time.toFixed()); R.call(ea, eb, "dC", gb.join(","), !0); Da = [];
        }
    } function ya(ea) {
        for (var R = ea.length; R--;) {
            var Ea = ea[R].target, eb = Ea, gb = void 0, Yb = eb, Hb = 9; void 0 === Hb && (Hb = []); var Ib = ma.dT_; if (Ib = (!(null === (gb = (null === Ib || void 0 === Ib ? 0 : Ib.iIO) ? Ib.iIO : null) || void 0 === gb || !gb(Yb, Hb)) || eb && eb.nodeType && 1 === eb.nodeType) && ("string" === typeof eb.textContent || "string" === typeof eb.innerText)) Ea = Ea.getBoundingClientRect(), Ib = !(0 > Ea.right || Ea.left > (window.innerWidth ||
                document.documentElement.clientWidth) || 0 > Ea.bottom || Ea.top > (window.innerHeight || document.documentElement.clientHeight)); if (Ib) { ba = L.dT_.nw(); break; }
        }
    } function Ca() { bb(); Xa && !xa ? nb() : !Xa && xa && (L.dT_.rBPSL(Ra), L.dT_.rO("deadClickObserver"), L.dT_.rel(document, "click", ab, void 0), Da = [], xa = !1, ba = -1); } function Ia() { if (N = L.dT_.bcv("uxrgce")) { var ea = L.dT_.scv("uxrgcm").split(";"), R = ea[1]; P = na(ea[0]); na(R); } } function na(ea) { ea = ea.split(","); return { Yh: +ea[0] || 100, ji: +ea[1] || 25, Bh: +ea[2] || 300, xh: +ea[3] || 3 }; } function Pa(ea) {
        return {
            x: ea.x ||
                ea.clientX, y: ea.y || ea.clientY, timeStamp: L.dT_.nw()
        };
    } function fb() { L.dT_.iMD() || (L.dT_.aBPSL(Na), L.dT_.ael(document, "click", ka), L.dT_.ael(document, "mousedown", ra), Ua = !0); } function ra(ea) { X = Pa(ea); } function ka(ea) { ea = Pa(ea); if (0 === U.length) U.push(ea); else { var R = U[0], Ea = U[U.length - 1]; if (Ea = ea && Ea ? ea.timeStamp - Ea.timeStamp <= P.Bh : !1) Ea = P.ji, Ea = Math.abs(R.x - ea.x) <= Ea && Math.abs(R.y - ea.y) <= Ea; Ea && ea && X && ea.timeStamp - X.timeStamp <= P.Yh ? (U.push(ea), sa()) : (U.length >= P.xh && Sa(), U = [ea]); } } function Na(ea, R, Ea, eb) {
        if (0 !==
            oa.length) { R = ea.av; Ea = oa; for (var gb = [], Yb = 0; Yb < Ea.length; Yb++) { var Hb = Ea[Yb]; gb.push(Hb.Zh + "|" + Hb.zh.toFixed() + "|" + Hb.duration.toFixed()); } R.call(ea, eb, "rC", gb.join(","), !0); oa = []; }
    } function sa() { L.dT_.ct(O); O = L.dT_.st(function () { U.length >= P.xh && Sa(); }, P.Bh); } function Sa() { var ea = U[0]; ea = { Zh: U.length, zh: Math.round(ea.timeStamp), duration: Math.round(U[U.length - 1].timeStamp - ea.timeStamp) }; 0 < ea.zh && 0 < ea.duration && (oa.push(ea), L.dT_.sMPS(2E3)); U = []; } function Ga() {
        Ia(); N && !Ua ? fb() : !N && Ua && (L.dT_.rBPSL(Na), L.dT_.rel(document,
            "click", ka, void 0), L.dT_.rel(document, "mousedown", ra, void 0), U = [], oa = [], Ua = !1);
    } this.dT_ && dT_.prm && dT_.prm(); var L = "undefined" !== typeof window ? window : self, ma = "undefined" !== typeof window ? window : self, va; (function (ea) { ea.ANCHOR = "A"; ea.BUTTON = "BUTTON"; ea.FORM = "FORM"; ea.I_FRAME = "IFRAME"; ea.IMAGE = "IMG"; ea.INPUT = "INPUT"; ea.LABEL = "LABEL"; ea.LINK = "LINK"; ea.OPTION = "OPTION"; ea.SCRIPT = "SCRIPT"; ea.SELECT = "SELECT"; ea.STYLE = "STYLE"; ea.TEXT_AREA = "TEXTAREA"; })(va || (va = {})); var Xa, cb, ba = -1, Ka, Da = [], xa = !1, N, P, Ua = !1, O,
        X, U = [], oa = []; (function () { var ea, R; return ma.dT_ && (null === (R = (ea = L.dT_).smbi) || void 0 === R ? void 0 : R.call(ea, "u")); })() && (Ia(), N && fb(), Ha(Ga), bb(), Xa && nb(), Ha(Ca));
})();