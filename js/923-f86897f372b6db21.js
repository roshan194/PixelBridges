(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [923], {
       9008: function (t, e, i) {
          t.exports = i(5443)
       },
       5426: function (t, e, i) {
          "use strict";
          i.d(e, {
             E: function () {
                return Cs
             }
          });
          var n, r = i(7294);
          let s = (0, r.createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
             }),
             o = (0, r.createContext)({}),
             a = (0, r.createContext)(null),
             l = "undefined" != typeof document,
             u = l ? r.useLayoutEffect : r.useEffect,
             h = (0, r.createContext)({
                strict: !1
             });
 
          function c(t) {
             return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
          }
 
          function d(t) {
             return "string" == typeof t || Array.isArray(t)
          }
 
          function p(t) {
             return "object" == typeof t && "function" == typeof t.start
          }
          let m = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
             f = ["initial", ...m];
 
          function g(t) {
             return p(t.animate) || f.some((e => d(t[e])))
          }
 
          function y(t) {
             return Boolean(g(t) || t.variants)
          }
 
          function v(t) {
             return Array.isArray(t) ? t.join(" ") : t
          }
          let x = {
                animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                exit: ["exit"],
                drag: ["drag", "dragControls"],
                focus: ["whileFocus"],
                hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                layout: ["layout", "layoutId"]
             },
             P = {};
          for (let t in x) P[t] = {
             isEnabled: e => x[t].some((t => !!e[t]))
          };
 
          function b(t) {
             let e = (0, r.useRef)(null);
             return null === e.current && (e.current = t()), e.current
          }
          let T = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
             },
             w = 1,
             S = (0, r.createContext)({}),
             A = (0, r.createContext)({}),
             E = Symbol.for("motionComponentSymbol"),
             V = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
 
          function C(t) {
             if ("string" != typeof t || t.includes("-"));
             else if (V.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
             return !1
          }
          let M = {},
             D = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
             R = new Set(D);
 
          function k(t, {
             layout: e,
             layoutId: i
          }) {
             return R.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!M[t] || "opacity" === t)
          }
          let L = t => Boolean(t && t.getVelocity),
             B = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                transformPerspective: "perspective"
             },
             j = D.length,
             F = t => e => "string" == typeof e && e.startsWith(t),
             O = F("--"),
             I = F("var(--"),
             U = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
             N = (t, e, i) => Math.min(Math.max(i, t), e),
             $ = {
                test: t => "number" == typeof t,
                parse: parseFloat,
                transform: t => t
             },
             W = {
                ...$,
                transform: t => N(0, 1, t)
             },
             z = {
                ...$,
                default: 1
             },
             H = t => Math.round(1e5 * t) / 1e5,
             Y = /(-)?([\d]*\.?[\d])+/g,
             X = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
             G = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
 
          function q(t) {
             return "string" == typeof t
          }
          let Z = t => ({
                test: e => q(e) && e.endsWith(t) && 1 === e.split(" ").length,
                parse: parseFloat,
                transform: e => `${e}${t}`
             }),
             _ = Z("deg"),
             K = Z("%"),
             J = Z("px"),
             Q = Z("vh"),
             tt = Z("vw"),
             et = {
                ...K,
                parse: t => K.parse(t) / 100,
                transform: t => K.transform(100 * t)
             },
             it = {
                ...$,
                transform: Math.round
             },
             nt = {
                borderWidth: J,
                borderTopWidth: J,
                borderRightWidth: J,
                borderBottomWidth: J,
                borderLeftWidth: J,
                borderRadius: J,
                radius: J,
                borderTopLeftRadius: J,
                borderTopRightRadius: J,
                borderBottomRightRadius: J,
                borderBottomLeftRadius: J,
                width: J,
                maxWidth: J,
                height: J,
                maxHeight: J,
                size: J,
                top: J,
                right: J,
                bottom: J,
                left: J,
                padding: J,
                paddingTop: J,
                paddingRight: J,
                paddingBottom: J,
                paddingLeft: J,
                margin: J,
                marginTop: J,
                marginRight: J,
                marginBottom: J,
                marginLeft: J,
                rotate: _,
                rotateX: _,
                rotateY: _,
                rotateZ: _,
                scale: z,
                scaleX: z,
                scaleY: z,
                scaleZ: z,
                skew: _,
                skewX: _,
                skewY: _,
                distance: J,
                translateX: J,
                translateY: J,
                translateZ: J,
                x: J,
                y: J,
                z: J,
                perspective: J,
                transformPerspective: J,
                opacity: W,
                originX: et,
                originY: et,
                originZ: J,
                zIndex: it,
                fillOpacity: W,
                strokeOpacity: W,
                numOctaves: it
             };
 
          function rt(t, e, i, n) {
             let {
                style: r,
                vars: s,
                transform: o,
                transformOrigin: a
             } = t, l = !1, u = !1, h = !0;
             for (let t in e) {
                let i = e[t];
                if (O(t)) {
                   s[t] = i;
                   continue
                }
                let n = nt[t],
                   c = U(i, n);
                if (R.has(t)) {
                   if (l = !0, o[t] = c, !h) continue;
                   i !== (n.default || 0) && (h = !1)
                } else t.startsWith("origin") ? (u = !0, a[t] = c) : r[t] = c
             }
             if (!e.transform && (l || n ? r.transform = function (t, {
                   enableHardwareAcceleration: e = !0,
                   allowTransformNone: i = !0
                }, n, r) {
                   let s = "";
                   for (let e = 0; e < j; e++) {
                      let i = D[e];
                      if (void 0 !== t[i]) {
                         s += `${B[i]||i}(${t[i]}) `
                      }
                   }
                   return e && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, n ? "" : s) : i && n && (s = "none"), s
                }(t.transform, i, h, n) : r.transform && (r.transform = "none")), u) {
                let {
                   originX: t = "50%",
                   originY: e = "50%",
                   originZ: i = 0
                } = a;
                r.transformOrigin = `${t} ${e} ${i}`
             }
          }
          let st = () => ({
             style: {},
             transform: {},
             transformOrigin: {},
             vars: {}
          });
 
          function ot(t, e, i) {
             for (let n in e) L(e[n]) || k(n, i) || (t[n] = e[n])
          }
 
          function at(t, e, i) {
             let n = {},
                s = function (t, e, i) {
                   let n = {};
                   return ot(n, t.style || {}, t), Object.assign(n, function ({
                      transformTemplate: t
                   }, e, i) {
                      return (0, r.useMemo)((() => {
                         let n = {
                            style: {},
                            transform: {},
                            transformOrigin: {},
                            vars: {}
                         };
                         return rt(n, e, {
                            enableHardwareAcceleration: !i
                         }, t), Object.assign({}, n.vars, n.style)
                      }), [e])
                   }(t, e, i)), t.transformValues ? t.transformValues(n) : n
                }(t, e, i);
             return t.drag && !1 !== t.dragListener && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n
          }
          let lt = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
 
          function ut(t) {
             return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || lt.has(t)
          }
          let ht = t => !ut(t);
          try {
             (n = require("@emotion/is-prop-valid").default) && (ht = t => t.startsWith("on") ? !ut(t) : n(t))
          } catch (t) {}
 
          function ct(t, e, i) {
             return "string" == typeof t ? t : J.transform(e + i * t)
          }
          let dt = {
                offset: "stroke-dashoffset",
                array: "stroke-dasharray"
             },
             pt = {
                offset: "strokeDashoffset",
                array: "strokeDasharray"
             };
 
          function mt(t, {
             attrX: e,
             attrY: i,
             attrScale: n,
             originX: r,
             originY: s,
             pathLength: o,
             pathSpacing: a = 1,
             pathOffset: l = 0,
             ...u
          }, h, c, d) {
             if (rt(t, u, h, d), c) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
             t.attrs = t.style, t.style = {};
             let {
                attrs: p,
                style: m,
                dimensions: f
             } = t;
             p.transform && (f && (m.transform = p.transform), delete p.transform), f && (void 0 !== r || void 0 !== s || m.transform) && (m.transformOrigin = function (t, e, i) {
                return `${ct(e,t.x,t.width)} ${ct(i,t.y,t.height)}`
             }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== n && (p.scale = n), void 0 !== o && function (t, e, i = 1, n = 0, r = !0) {
                t.pathLength = 1;
                let s = r ? dt : pt;
                t[s.offset] = J.transform(-n);
                let o = J.transform(e),
                   a = J.transform(i);
                t[s.array] = `${o} ${a}`
             }(p, o, a, l, !1)
          }
          let ft = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {},
                attrs: {}
             }),
             gt = t => "string" == typeof t && "svg" === t.toLowerCase();
 
          function yt(t, e, i, n) {
             let s = (0, r.useMemo)((() => {
                let i = {
                   style: {},
                   transform: {},
                   transformOrigin: {},
                   vars: {},
                   attrs: {}
                };
                return mt(i, e, {
                   enableHardwareAcceleration: !1
                }, gt(n), t.transformTemplate), {
                   ...i.attrs,
                   style: {
                      ...i.style
                   }
                }
             }), [e]);
             if (t.style) {
                let e = {};
                ot(e, t.style, t), s.style = {
                   ...e,
                   ...s.style
                }
             }
             return s
          }
          let vt = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
 
          function xt(t, {
             style: e,
             vars: i
          }, n, r) {
             for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
          }
          let Pt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
 
          function bt(t, e, i, n) {
             for (let i in xt(t, e, void 0, n), e.attrs) t.setAttribute(Pt.has(i) ? i : vt(i), e.attrs[i])
          }
 
          function Tt(t, e) {
             let {
                style: i
             } = t, n = {};
             for (let r in i)(L(i[r]) || e.style && L(e.style[r]) || k(r, t)) && (n[r] = i[r]);
             return n
          }
 
          function wt(t, e) {
             let i = Tt(t, e);
             for (let n in t)
                if (L(t[n]) || L(e[n])) {
                   i[-1 !== D.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]
                } return i
          }
 
          function St(t, e, i, n = {}, r = {}) {
             return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), e
          }
          let At = t => Array.isArray(t),
             Et = t => At(t) ? t[t.length - 1] || 0 : t;
 
          function Vt(t) {
             let e = L(t) ? t.get() : t;
             return (t => Boolean(t && "object" == typeof t && t.mix && t.toValue))(e) ? e.toValue() : e
          }
          let Ct = t => (e, i) => {
             let n = (0, r.useContext)(o),
                s = (0, r.useContext)(a),
                l = () => function ({
                   scrapeMotionValuesFromProps: t,
                   createRenderState: e,
                   onMount: i
                }, n, r, s) {
                   let o = {
                      latestValues: Mt(n, r, s, t),
                      renderState: e()
                   };
                   return i && (o.mount = t => i(n, t, o)), o
                }(t, e, n, s);
             return i ? l() : b(l)
          };
 
          function Mt(t, e, i, n) {
             let r = {},
                s = n(t, {});
             for (let t in s) r[t] = Vt(s[t]);
             let {
                initial: o,
                animate: a
             } = t, l = g(t), u = y(t);
             e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
             let h = !!i && !1 === i.initial;
             h = h || !1 === o;
             let c = h ? a : o;
             if (c && "boolean" != typeof c && !p(c)) {
                (Array.isArray(c) ? c : [c]).forEach((e => {
                   let i = St(t, e);
                   if (!i) return;
                   let {
                      transitionEnd: n,
                      transition: s,
                      ...o
                   } = i;
                   for (let t in o) {
                      let e = o[t];
                      if (Array.isArray(e)) {
                         e = e[h ? e.length - 1 : 0]
                      }
                      null !== e && (r[t] = e)
                   }
                   for (let t in n) r[t] = n[t]
                }))
             }
             return r
          }
          let Dt = {
                useVisualState: Ct({
                   scrapeMotionValuesFromProps: wt,
                   createRenderState: ft,
                   onMount(t, e, {
                      renderState: i,
                      latestValues: n
                   }) {
                      try {
                         i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                      } catch (t) {
                         i.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                         }
                      }
                      mt(i, n, {
                         enableHardwareAcceleration: !1
                      }, gt(e.tagName), t.transformTemplate), bt(e, i)
                   }
                })
             },
             Rt = {
                useVisualState: Ct({
                   scrapeMotionValuesFromProps: Tt,
                   createRenderState: st
                })
             };
 
          function kt(t, e, i, n = {
             passive: !0
          }) {
             return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
          }
          let Lt = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
 
          function Bt(t, e = "page") {
             return {
                point: {
                   x: t[e + "X"],
                   y: t[e + "Y"]
                }
             }
          }
 
          function jt(t, e, i, n) {
             return kt(t, e, (t => e => Lt(e) && t(e, Bt(e)))(i), n)
          }
          let Ft = (t, e) => i => e(t(i)),
             Ot = (...t) => t.reduce(Ft);
 
          function It(t) {
             let e = null;
             return () => null === e && (e = t, () => {
                e = null
             })
          }
          let Ut = It("dragHorizontal"),
             Nt = It("dragVertical");
 
          function $t(t) {
             let e = !1;
             if ("y" === t) e = Nt();
             else if ("x" === t) e = Ut();
             else {
                let t = Ut(),
                   i = Nt();
                t && i ? e = () => {
                   t(), i()
                } : (t && t(), i && i())
             }
             return e
          }
 
          function Wt() {
             let t = $t(!0);
             return !t || (t(), !1)
          }
          class zt {
             constructor(t) {
                this.isMounted = !1, this.node = t
             }
             update() {}
          }
          let Ht = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
             },
             Yt = !0,
             Xt = !1,
             Gt = ["read", "update", "preRender", "render", "postRender"],
             qt = Gt.reduce(((t, e) => (t[e] = function (t) {
                let e = [],
                   i = [],
                   n = 0,
                   r = !1,
                   s = !1,
                   o = new WeakSet,
                   a = {
                      schedule(t, s = !1, a = !1) {
                         let l = a && r,
                            u = l ? e : i;
                         return s && o.add(t), -1 === u.indexOf(t) && (u.push(t), l && r && (n = e.length)), t
                      },
                      cancel(t) {
                         let e = i.indexOf(t); - 1 !== e && i.splice(e, 1), o.delete(t)
                      },
                      process(t) {
                         if (r) s = !0;
                         else {
                            if (r = !0, [e, i] = [i, e], i.length = 0, n = e.length)
                               for (let i = 0; i < n; i++) {
                                  let n = e[i];
                                  n(t), o.has(n) && (a.schedule(n), Xt = !0)
                               }
                            r = !1, s && (s = !1, a.process(t))
                         }
                      }
                   };
                return a
             }(), t)), {}),
             Zt = t => qt[t].process(Ht),
             _t = t => {
                Xt = !1, Ht.delta = Yt ? 1e3 / 60 : Math.max(Math.min(t - Ht.timestamp, 40), 1), Ht.timestamp = t, Ht.isProcessing = !0, Gt.forEach(Zt), Ht.isProcessing = !1, Xt && (Yt = !1, requestAnimationFrame(_t))
             },
             Kt = Gt.reduce(((t, e) => {
                let i = qt[e];
                return t[e] = (t, e = !1, n = !1) => (Xt || (Xt = !0, Yt = !0, Ht.isProcessing || requestAnimationFrame(_t)), i.schedule(t, e, n)), t
             }), {});
 
          function Jt(t) {
             Gt.forEach((e => qt[e].cancel(t)))
          }
 
          function Qt(t, e) {
             let i = "onHover" + (e ? "Start" : "End");
             return jt(t.current, "pointer" + (e ? "enter" : "leave"), ((n, r) => {
                if ("touch" === n.type || Wt()) return;
                let s = t.getProps();
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[i] && Kt.update((() => s[i](n, r)))
             }), {
                passive: !t.getProps()[i]
             })
          }
          let te = (t, e) => !!e && (t === e || te(t, e.parentElement)),
             ee = t => t;
 
          function ie(t, e) {
             if (!e) return;
             let i = new PointerEvent("pointer" + t);
             e(i, Bt(i))
          }
          let ne = new WeakMap,
             re = new WeakMap,
             se = t => {
                let e = ne.get(t.target);
                e && e(t)
             },
             oe = t => {
                t.forEach(se)
             },
             ae = {
                some: 0,
                all: 1
             },
             le = {
                inView: {
                   Feature: class extends zt {
                      constructor() {
                         super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                      }
                      startObserver() {
                         this.unmount();
                         let {
                            viewport: t = {}
                         } = this.node.getProps(), {
                            root: e,
                            margin: i,
                            amount: n = "some",
                            once: r
                         } = t, s = {
                            root: e ? e.current : void 0,
                            rootMargin: i,
                            threshold: "number" == typeof n ? n : ae[n]
                         };
                         return function (t, e, i) {
                            let n = function ({
                               root: t,
                               ...e
                            }) {
                               let i = t || document;
                               re.has(i) || re.set(i, {});
                               let n = re.get(i),
                                  r = JSON.stringify(e);
                               return n[r] || (n[r] = new IntersectionObserver(oe, {
                                  root: t,
                                  ...e
                               })), n[r]
                            }(e);
                            return ne.set(t, i), n.observe(t), () => {
                               ne.delete(t), n.unobserve(t)
                            }
                         }(this.node.current, s, (t => {
                            let {
                               isIntersecting: e
                            } = t;
                            if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                            let {
                               onViewportEnter: i,
                               onViewportLeave: n
                            } = this.node.getProps(), s = e ? i : n;
                            s && s(t)
                         }))
                      }
                      mount() {
                         this.startObserver()
                      }
                      update() {
                         if ("undefined" == typeof IntersectionObserver) return;
                         let {
                            props: t,
                            prevProps: e
                         } = this.node;
                         ["amount", "margin", "root"].some(function ({
                            viewport: t = {}
                         }, {
                            viewport: e = {}
                         } = {}) {
                            return i => t[i] !== e[i]
                         }(t, e)) && this.startObserver()
                      }
                      unmount() {}
                   }
                },
                tap: {
                   Feature: class extends zt {
                      constructor() {
                         super(...arguments), this.removeStartListeners = ee, this.removeEndListeners = ee, this.removeAccessibleListeners = ee, this.startPointerPress = (t, e) => {
                            if (this.removeEndListeners(), this.isPressing) return;
                            let i = this.node.getProps(),
                               n = jt(window, "pointerup", ((t, e) => {
                                  if (!this.checkPressEnd()) return;
                                  let {
                                     onTap: i,
                                     onTapCancel: n
                                  } = this.node.getProps();
                                  Kt.update((() => {
                                     te(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                  }))
                               }), {
                                  passive: !(i.onTap || i.onPointerUp)
                               }),
                               r = jt(window, "pointercancel", ((t, e) => this.cancelPress(t, e)), {
                                  passive: !(i.onTapCancel || i.onPointerCancel)
                               });
                            this.removeEndListeners = Ot(n, r), this.startPress(t, e)
                         }, this.startAccessiblePress = () => {
                            let t = kt(this.node.current, "keydown", (t => {
                                  if ("Enter" !== t.key || this.isPressing) return;
                                  this.removeEndListeners(), this.removeEndListeners = kt(this.node.current, "keyup", (t => {
                                     "Enter" === t.key && this.checkPressEnd() && ie("up", ((t, e) => {
                                        let {
                                           onTap: i
                                        } = this.node.getProps();
                                        i && Kt.update((() => i(t, e)))
                                     }))
                                  })), ie("down", ((t, e) => {
                                     this.startPress(t, e)
                                  }))
                               })),
                               e = kt(this.node.current, "blur", (() => {
                                  this.isPressing && ie("cancel", ((t, e) => this.cancelPress(t, e)))
                               }));
                            this.removeAccessibleListeners = Ot(t, e)
                         }
                      }
                      startPress(t, e) {
                         this.isPressing = !0;
                         let {
                            onTapStart: i,
                            whileTap: n
                         } = this.node.getProps();
                         n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && Kt.update((() => i(t, e)))
                      }
                      checkPressEnd() {
                         return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Wt()
                      }
                      cancelPress(t, e) {
                         if (!this.checkPressEnd()) return;
                         let {
                            onTapCancel: i
                         } = this.node.getProps();
                         i && Kt.update((() => i(t, e)))
                      }
                      mount() {
                         let t = this.node.getProps(),
                            e = jt(this.node.current, "pointerdown", this.startPointerPress, {
                               passive: !(t.onTapStart || t.onPointerStart)
                            }),
                            i = kt(this.node.current, "focus", this.startAccessiblePress);
                         this.removeStartListeners = Ot(e, i)
                      }
                      unmount() {
                         this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                      }
                   }
                },
                focus: {
                   Feature: class extends zt {
                      constructor() {
                         super(...arguments), this.isActive = !1
                      }
                      onFocus() {
                         let t = !1;
                         try {
                            t = this.node.current.matches(":focus-visible")
                         } catch (e) {
                            t = !0
                         }
                         t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                      }
                      onBlur() {
                         this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                      }
                      mount() {
                         this.unmount = Ot(kt(this.node.current, "focus", (() => this.onFocus())), kt(this.node.current, "blur", (() => this.onBlur())))
                      }
                      unmount() {}
                   }
                },
                hover: {
                   Feature: class extends zt {
                      mount() {
                         this.unmount = Ot(Qt(this.node, !0), Qt(this.node, !1))
                      }
                      unmount() {}
                   }
                }
             };
 
          function ue(t, e) {
             if (!Array.isArray(e)) return !1;
             let i = e.length;
             if (i !== t.length) return !1;
             for (let n = 0; n < i; n++)
                if (e[n] !== t[n]) return !1;
             return !0
          }
 
          function he(t, e, i) {
             let n = t.getProps();
             return St(n, e, void 0 !== i ? i : n.custom, function (t) {
                let e = {};
                return t.values.forEach(((t, i) => e[i] = t.get())), e
             }(t), function (t) {
                let e = {};
                return t.values.forEach(((t, i) => e[i] = t.getVelocity())), e
             }(t))
          }
          let ce = "data-" + vt("framerAppearId"),
             de = ee,
             pe = ee,
             me = t => 1e3 * t,
             fe = t => t / 1e3,
             ge = !1,
             ye = t => Array.isArray(t) && "number" == typeof t[0];
 
          function ve(t) {
             return Boolean(!t || "string" == typeof t && Pe[t] || ye(t) || Array.isArray(t) && t.every(ve))
          }
          let xe = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
             Pe = {
                linear: "linear",
                ease: "ease",
                easeIn: "ease-in",
                easeOut: "ease-out",
                easeInOut: "ease-in-out",
                circIn: xe([0, .65, .55, 1]),
                circOut: xe([.55, 0, 1, .45]),
                backIn: xe([.31, .01, .66, -.59]),
                backOut: xe([.33, 1.53, .69, .99])
             };
 
          function be(t) {
             if (t) return ye(t) ? xe(t) : Array.isArray(t) ? t.map(be) : Pe[t]
          }
          let Te = {
                waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
             },
             we = {},
             Se = {};
          for (let t in Te) Se[t] = () => (void 0 === we[t] && (we[t] = Te[t]()), we[t]);
          let Ae = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
 
          function Ee(t, e, i, n) {
             if (t === e && i === n) return ee;
             let r = e => function (t, e, i, n, r) {
                let s, o, a = 0;
                do {
                   (s = Ae(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o
                } while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
             }(e, 0, 1, t, i);
             return t => 0 === t || 1 === t ? t : Ae(r(t), e, n)
          }
          let Ve = Ee(.42, 0, 1, 1),
             Ce = Ee(0, 0, .58, 1),
             Me = Ee(.42, 0, .58, 1),
             De = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
             Re = t => e => 1 - t(1 - e),
             ke = t => 1 - Math.sin(Math.acos(t)),
             Le = Re(ke),
             Be = De(Le),
             je = Ee(.33, 1.53, .69, .99),
             Fe = Re(je),
             Oe = De(Fe),
             Ie = {
                linear: ee,
                easeIn: Ve,
                easeInOut: Me,
                easeOut: Ce,
                circIn: ke,
                circInOut: Be,
                circOut: Le,
                backIn: Fe,
                backInOut: Oe,
                backOut: je,
                anticipate: t => (t *= 2) < 1 ? .5 * Fe(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
             },
             Ue = t => {
                if (Array.isArray(t)) {
                   pe(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                   let [e, i, n, r] = t;
                   return Ee(e, i, n, r)
                }
                return "string" == typeof t ? (pe(void 0 !== Ie[t], `Invalid easing type '${t}'`), Ie[t]) : t
             },
             Ne = (t, e) => i => Boolean(q(i) && G.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
             $e = (t, e, i) => n => {
                if (!q(n)) return n;
                let [r, s, o, a] = n.match(Y);
                return {
                   [t]: parseFloat(r),
                   [e]: parseFloat(s),
                   [i]: parseFloat(o),
                   alpha: void 0 !== a ? parseFloat(a) : 1
                }
             },
             We = {
                ...$,
                transform: t => Math.round((t => N(0, 255, t))(t))
             },
             ze = {
                test: Ne("rgb", "red"),
                parse: $e("red", "green", "blue"),
                transform: ({
                   red: t,
                   green: e,
                   blue: i,
                   alpha: n = 1
                }) => "rgba(" + We.transform(t) + ", " + We.transform(e) + ", " + We.transform(i) + ", " + H(W.transform(n)) + ")"
             },
             He = {
                test: Ne("#"),
                parse: function (t) {
                   let e = "",
                      i = "",
                      n = "",
                      r = "";
                   return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                      red: parseInt(e, 16),
                      green: parseInt(i, 16),
                      blue: parseInt(n, 16),
                      alpha: r ? parseInt(r, 16) / 255 : 1
                   }
                },
                transform: ze.transform
             },
             Ye = {
                test: Ne("hsl", "hue"),
                parse: $e("hue", "saturation", "lightness"),
                transform: ({
                   hue: t,
                   saturation: e,
                   lightness: i,
                   alpha: n = 1
                }) => "hsla(" + Math.round(t) + ", " + K.transform(H(e)) + ", " + K.transform(H(i)) + ", " + H(W.transform(n)) + ")"
             },
             Xe = {
                test: t => ze.test(t) || He.test(t) || Ye.test(t),
                parse: t => ze.test(t) ? ze.parse(t) : Ye.test(t) ? Ye.parse(t) : He.parse(t),
                transform: t => q(t) ? t : t.hasOwnProperty("red") ? ze.transform(t) : Ye.transform(t)
             },
             Ge = (t, e, i) => -i * t + i * e + t;
 
          function qe(t, e, i) {
             return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
          }
          let Ze = (t, e, i) => {
                let n = t * t;
                return Math.sqrt(Math.max(0, i * (e * e - n) + n))
             },
             _e = [He, ze, Ye];
 
          function Ke(t) {
             let e = (t => _e.find((e => e.test(t))))(t);
             pe(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
             let i = e.parse(t);
             return e === Ye && (i = function ({
                hue: t,
                saturation: e,
                lightness: i,
                alpha: n
             }) {
                t /= 360, i /= 100;
                let r = 0,
                   s = 0,
                   o = 0;
                if (e /= 100) {
                   let n = i < .5 ? i * (1 + e) : i + e - i * e,
                      a = 2 * i - n;
                   r = qe(a, n, t + 1 / 3), s = qe(a, n, t), o = qe(a, n, t - 1 / 3)
                } else r = s = o = i;
                return {
                   red: Math.round(255 * r),
                   green: Math.round(255 * s),
                   blue: Math.round(255 * o),
                   alpha: n
                }
             }(i)), i
          }
          let Je = (t, e) => {
                let i = Ke(t),
                   n = Ke(e),
                   r = {
                      ...i
                   };
                return t => (r.red = Ze(i.red, n.red, t), r.green = Ze(i.green, n.green, t), r.blue = Ze(i.blue, n.blue, t), r.alpha = Ge(i.alpha, n.alpha, t), ze.transform(r))
             },
             Qe = "${c}",
             ti = "${n}";
 
          function ei(t) {
             "number" == typeof t && (t = `${t}`);
             let e = [],
                i = 0,
                n = 0,
                r = t.match(X);
             r && (i = r.length, t = t.replace(X, Qe), e.push(...r.map(Xe.parse)));
             let s = t.match(Y);
             return s && (n = s.length, t = t.replace(Y, ti), e.push(...s.map($.parse))), {
                values: e,
                numColors: i,
                numNumbers: n,
                tokenised: t
             }
          }
 
          function ii(t) {
             return ei(t).values
          }
 
          function ni(t) {
             let {
                values: e,
                numColors: i,
                tokenised: n
             } = ei(t), r = e.length;
             return t => {
                let e = n;
                for (let n = 0; n < r; n++) e = e.replace(n < i ? Qe : ti, n < i ? Xe.transform(t[n]) : H(t[n]));
                return e
             }
          }
          let ri = t => "number" == typeof t ? 0 : t,
             si = {
                test: function (t) {
                   var e, i;
                   return isNaN(t) && q(t) && ((null === (e = t.match(Y)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(X)) || void 0 === i ? void 0 : i.length) || 0) > 0
                },
                parse: ii,
                createTransformer: ni,
                getAnimatableNone: function (t) {
                   let e = ii(t);
                   return ni(t)(e.map(ri))
                }
             };
 
          function oi(t, e) {
             return "number" == typeof t ? i => Ge(t, e, i) : Xe.test(t) ? Je(t, e) : ui(t, e)
          }
          let ai = (t, e) => {
                let i = [...t],
                   n = i.length,
                   r = t.map(((t, i) => oi(t, e[i])));
                return t => {
                   for (let e = 0; e < n; e++) i[e] = r[e](t);
                   return i
                }
             },
             li = (t, e) => {
                let i = {
                      ...t,
                      ...e
                   },
                   n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = oi(t[r], e[r]));
                return t => {
                   for (let e in n) i[e] = n[e](t);
                   return i
                }
             },
             ui = (t, e) => {
                let i = si.createTransformer(e),
                   n = ei(t),
                   r = ei(e);
                return n.numColors === r.numColors && n.numNumbers >= r.numNumbers ? Ot(ai(n.values, r.values), i) : (de(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), i => `${i>0?e:t}`)
             },
             hi = (t, e, i) => {
                let n = e - t;
                return 0 === n ? 1 : (i - t) / n
             },
             ci = (t, e) => i => Ge(t, e, i);
 
          function di(t, e, {
             clamp: i = !0,
             ease: n,
             mixer: r
          } = {}) {
             let s = t.length;
             if (pe(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
             t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
             let o = function (t, e, i) {
                   let n = [],
                      r = i || function (t) {
                         if ("number" == typeof t);
                         else {
                            if ("string" == typeof t) return Xe.test(t) ? Je : ui;
                            if (Array.isArray(t)) return ai;
                            if ("object" == typeof t) return li
                         }
                         return ci
                      }(t[0]),
                      s = t.length - 1;
                   for (let i = 0; i < s; i++) {
                      let s = r(t[i], t[i + 1]);
                      if (e) {
                         let t = Array.isArray(e) ? e[i] || ee : e;
                         s = Ot(t, s)
                      }
                      n.push(s)
                   }
                   return n
                }(e, n, r),
                a = o.length,
                l = e => {
                   let i = 0;
                   if (a > 1)
                      for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                   let n = hi(t[i], t[i + 1], e);
                   return o[i](n)
                };
             return i ? e => l(N(t[0], t[s - 1], e)) : l
          }
 
          function pi({
             duration: t = 300,
             keyframes: e,
             times: i,
             ease: n = "easeInOut"
          }) {
             var r, s, o, a;
             let l = (t => Array.isArray(t) && "number" != typeof t[0])(n) ? n.map(Ue) : Ue(n),
                u = {
                   done: !1,
                   value: e[0]
                },
                h = di((r = i && i.length === e.length ? i : function (t) {
                   let e = [0];
                   return function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                         let r = hi(0, e, n);
                         t.push(Ge(i, 1, r))
                      }
                   }(e, t.length - 1), e
                }(e), s = t, r.map((t => t * s))), e, {
                   ease: Array.isArray(l) ? l : (o = e, a = l, o.map((() => a || Me)).splice(0, o.length - 1))
                });
             return {
                calculatedDuration: t,
                next: e => (u.value = h(e), u.done = e >= t, u)
             }
          }
 
          function mi(t, e) {
             return e ? t * (1e3 / e) : 0
          }
 
          function fi(t, e, i) {
             let n = Math.max(e - 5, 0);
             return mi(i - t(n), e - n)
          }
          let gi = .001;
 
          function yi(t, e) {
             return t * Math.sqrt(1 - e * e)
          }
          let vi = ["duration", "bounce"],
             xi = ["stiffness", "damping", "mass"];
 
          function Pi(t, e) {
             return e.some((e => void 0 !== t[e]))
          }
 
          function bi({
             keyframes: t,
             restDelta: e,
             restSpeed: i,
             ...n
          }) {
             let r, s = t[0],
                o = t[t.length - 1],
                a = {
                   done: !1,
                   value: s
                },
                {
                   stiffness: l,
                   damping: u,
                   mass: h,
                   velocity: c,
                   duration: d,
                   isResolvedFromDuration: p
                } = function (t) {
                   let e = {
                      velocity: 0,
                      stiffness: 100,
                      damping: 10,
                      mass: 1,
                      isResolvedFromDuration: !1,
                      ...t
                   };
                   if (!Pi(t, xi) && Pi(t, vi)) {
                      let i = function ({
                         duration: t = 800,
                         bounce: e = .25,
                         velocity: i = 0,
                         mass: n = 1
                      }) {
                         let r, s;
                         de(t <= me(10), "Spring duration must be 10 seconds or less");
                         let o = 1 - e;
                         o = N(.05, 1, o), t = N(.01, 10, fe(t)), o < 1 ? (r = e => {
                            let n = e * o,
                               r = n * t,
                               s = n - i,
                               a = yi(e, o),
                               l = Math.exp(-r);
                            return gi - s / a * l
                         }, s = e => {
                            let n = e * o * t,
                               s = n * i + i,
                               a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                               l = Math.exp(-n),
                               u = yi(Math.pow(e, 2), o);
                            return (-r(e) + gi > 0 ? -1 : 1) * ((s - a) * l) / u
                         }) : (r = e => Math.exp(-e * t) * ((e - i) * t + 1) - gi, s = e => Math.exp(-e * t) * (t * t * (i - e)));
                         let a = function (t, e, i) {
                            let n = i;
                            for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                            return n
                         }(r, s, 5 / t);
                         if (t = me(t), isNaN(a)) return {
                            stiffness: 100,
                            damping: 10,
                            duration: t
                         }; {
                            let e = Math.pow(a, 2) * n;
                            return {
                               stiffness: e,
                               damping: 2 * o * Math.sqrt(n * e),
                               duration: t
                            }
                         }
                      }(t);
                      (e = {
                         ...e,
                         ...i,
                         velocity: 0,
                         mass: 1
                      }).isResolvedFromDuration = !0
                   }
                   return e
                }(n),
                m = c ? -fe(c) : 0,
                f = u / (2 * Math.sqrt(l * h)),
                g = o - s,
                y = fe(Math.sqrt(l / h)),
                v = 5 > Math.abs(g);
             if (i || (i = v ? .01 : 2), e || (e = v ? .005 : .5), f < 1) {
                let t = yi(y, f);
                r = e => {
                   let i = Math.exp(-f * y * e);
                   return o - i * ((m + f * y * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                }
             } else if (1 === f) r = t => o - Math.exp(-y * t) * (g + (m + y * g) * t);
             else {
                let t = y * Math.sqrt(f * f - 1);
                r = e => {
                   let i = Math.exp(-f * y * e),
                      n = Math.min(t * e, 300);
                   return o - i * ((m + f * y * g) * Math.sinh(n) + t * g * Math.cosh(n)) / t
                }
             }
             return {
                calculatedDuration: p && d || null,
                next(t) {
                   let n = r(t);
                   if (p) a.done = t >= d;
                   else {
                      let s = m;
                      0 !== t && (s = f < 1 ? fi(r, t, n) : 0);
                      let l = Math.abs(s) <= i,
                         u = Math.abs(o - n) <= e;
                      a.done = l && u
                   }
                   return a.value = a.done ? o : n, a
                }
             }
          }
 
          function Ti({
             keyframes: t,
             velocity: e = 0,
             power: i = .8,
             timeConstant: n = 325,
             bounceDamping: r = 10,
             bounceStiffness: s = 500,
             modifyTarget: o,
             min: a,
             max: l,
             restDelta: u = .5,
             restSpeed: h
          }) {
             let c = t[0],
                d = {
                   done: !1,
                   value: c
                },
                p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l,
                m = i * e,
                f = c + m,
                g = void 0 === o ? f : o(f);
             g !== f && (m = g - c);
             let y, v, x = t => -m * Math.exp(-t / n),
                P = t => g + x(t),
                b = t => {
                   let e = x(t),
                      i = P(t);
                   d.done = Math.abs(e) <= u, d.value = d.done ? g : i
                },
                T = t => {
                   (t => void 0 !== a && t < a || void 0 !== l && t > l)(d.value) && (y = t, v = bi({
                      keyframes: [d.value, p(d.value)],
                      velocity: fi(P, t, d.value),
                      damping: r,
                      stiffness: s,
                      restDelta: u,
                      restSpeed: h
                   }))
                };
             return T(0), {
                calculatedDuration: null,
                next(t) {
                   let e = !1;
                   return v || void 0 !== y || (e = !0, b(t), T(t)), void 0 !== y && t > y ? v.next(t - y) : (e || b(t), d)
                }
             }
          }
          let wi = t => {
             let e = ({
                timestamp: e
             }) => t(e);
             return {
                start: () => Kt.update(e, !0),
                stop: () => Jt(e),
                now: () => Ht.isProcessing ? Ht.timestamp : performance.now()
             }
          };
 
          function Si(t) {
             let e = 0,
                i = t.next(e);
             for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
             return e >= 2e4 ? 1 / 0 : e
          }
          let Ai = {
             decay: Ti,
             inertia: Ti,
             tween: pi,
             keyframes: pi,
             spring: bi
          };
 
          function Ei({
             autoplay: t = !0,
             delay: e = 0,
             driver: i = wi,
             keyframes: n,
             type: r = "keyframes",
             repeat: s = 0,
             repeatDelay: o = 0,
             repeatType: a = "loop",
             onPlay: l,
             onStop: u,
             onComplete: h,
             onUpdate: c,
             ...d
          }) {
             let p, m, f = 1,
                g = !1,
                y = () => {
                   p && p(), m = new Promise((t => {
                      p = t
                   }))
                };
             y();
             let v, x, P = Ai[r] || pi;
             P !== pi && "number" != typeof n[0] && (x = di([0, 100], n, {
                clamp: !1
             }), n = [0, 100]);
             let b, T = P({
                ...d,
                keyframes: n
             });
             "mirror" === a && (b = P({
                ...d,
                keyframes: [...n].reverse(),
                velocity: -(d.velocity || 0)
             }));
             let w = "idle",
                S = null,
                A = null,
                E = null;
             null === T.calculatedDuration && s && (T.calculatedDuration = Si(T));
             let {
                calculatedDuration: V
             } = T, C = 1 / 0, M = 1 / 0;
             null !== V && (M = (C = V + o) * (s + 1) - o);
             let D = 0,
                R = t => {
                   if (null === A) return;
                   f > 0 && (A = Math.min(A, t)), D = null !== S ? S : (t - A) * f;
                   let i = D - e,
                      r = i < 0;
                   D = Math.max(i, 0), "finished" === w && null === S && (D = M);
                   let l = D,
                      u = T;
                   if (s) {
                      let t = D / C,
                         e = Math.floor(t),
                         i = t % 1;
                      !i && t >= 1 && (i = 1), 1 === i && e--, e = Math.min(e, s + 1);
                      let n = Boolean(e % 2);
                      n && ("reverse" === a ? (i = 1 - i, o && (i -= o / C)) : "mirror" === a && (u = b));
                      let r = N(0, 1, i);
                      D > M && (r = "reverse" === a && n ? 1 : 0), l = r * C
                   }
                   let h = r ? {
                      done: !1,
                      value: n[0]
                   } : u.next(l);
                   x && (h.value = x(h.value));
                   let {
                      done: d
                   } = h;
                   r || null === V || (d = D >= M);
                   let p = null === S && ("finished" === w || "running" === w && d || f < 0 && D <= 0);
                   return c && c(h.value), p && B(), h
                },
                k = () => {
                   v && v.stop(), v = void 0
                },
                L = () => {
                   w = "idle", k(), y(), A = E = null
                },
                B = () => {
                   w = "finished", h && h(), k(), y()
                },
                j = () => {
                   if (g) return;
                   v || (v = i(R));
                   let t = v.now();
                   l && l(), null !== S ? A = t - S : A && "finished" !== w || (A = t), E = A, S = null, w = "running", v.start()
                };
             t && j();
             let F = {
                then: (t, e) => m.then(t, e),
                get time() {
                   return fe(D)
                },
                set time(t) {
                   D = t = me(t), null === S && v && 0 !== f ? A = v.now() - t / f : S = t
                },
                get duration() {
                   let t = null === T.calculatedDuration ? Si(T) : T.calculatedDuration;
                   return fe(t)
                },
                get speed() {
                   return f
                },
                set speed(t) {
                   t !== f && v && (f = t, F.time = fe(D))
                },
                get state() {
                   return w
                },
                play: j,
                pause() {
                   w = "paused", S = D
                },
                stop() {
                   g = !0, "idle" !== w && (w = "idle", u && u(), L())
                },
                cancel() {
                   null !== E && R(E), L()
                },
                complete() {
                   w = "finished"
                },
                sample: t => (A = 0, R(t))
             };
             return F
          }
          let Vi = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
             Ci = {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
             },
             Mi = {
                type: "keyframes",
                duration: .8
             },
             Di = {
                type: "keyframes",
                ease: [.25, .1, .35, 1],
                duration: .3
             },
             Ri = (t, {
                keyframes: e
             }) => e.length > 2 ? Mi : R.has(t) ? t.startsWith("scale") ? (t => ({
                type: "spring",
                stiffness: 550,
                damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
             }))(e[1]) : Ci : Di,
             ki = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && si.test(e) && !e.startsWith("url(")),
             Li = new Set(["brightness", "contrast", "saturate", "opacity"]);
 
          function Bi(t) {
             let [e, i] = t.slice(0, -1).split("(");
             if ("drop-shadow" === e) return t;
             let [n] = i.match(Y) || [];
             if (!n) return t;
             let r = i.replace(n, ""),
                s = Li.has(e) ? 1 : 0;
             return n !== i && (s *= 100), e + "(" + s + r + ")"
          }
          let ji = /([a-z-]*)\(.*?\)/g,
             Fi = {
                ...si,
                getAnimatableNone(t) {
                   let e = t.match(ji);
                   return e ? e.map(Bi).join(" ") : t
                }
             },
             Oi = {
                ...nt,
                color: Xe,
                backgroundColor: Xe,
                outlineColor: Xe,
                fill: Xe,
                stroke: Xe,
                borderColor: Xe,
                borderTopColor: Xe,
                borderRightColor: Xe,
                borderBottomColor: Xe,
                borderLeftColor: Xe,
                filter: Fi,
                WebkitFilter: Fi
             },
             Ii = t => Oi[t];
 
          function Ui(t, e) {
             let i = Ii(t);
             return i !== Fi && (i = si), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
          }
 
          function Ni(t) {
             return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
          }
 
          function $i(t) {
             return "number" == typeof t ? 0 : Ui("", t)
          }
 
          function Wi(t, e) {
             return t[e] || t.default || t
          }
          let zi = (t, e, i, n = {}) => r => {
             let s = Wi(n, t) || {},
                o = s.delay || n.delay || 0,
                {
                   elapsed: a = 0
                } = n;
             a -= me(o);
             let l = function (t, e, i, n) {
                   let r = ki(e, i),
                      s = void 0 !== n.from ? n.from : t.get();
                   return "none" === s && r && "string" == typeof i ? s = Ui(e, i) : Ni(s) && "string" == typeof i ? s = $i(i) : !Array.isArray(i) && Ni(i) && "string" == typeof s && (i = $i(s)), Array.isArray(i) ? function (t, [...e]) {
                      for (let i = 0; i < e.length; i++) null === e[i] && (e[i] = 0 === i ? t : e[i - 1]);
                      return e
                   }(s, i) : [s, i]
                }(e, t, i, s),
                u = l[0],
                h = l[l.length - 1],
                c = ki(t, u),
                d = ki(t, h);
             de(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
             let p = {
                keyframes: l,
                velocity: e.getVelocity(),
                ease: "easeOut",
                ...s,
                delay: -a,
                onUpdate(t) {
                   e.set(t), s.onUpdate && s.onUpdate(t)
                },
                onComplete() {
                   r(), s.onComplete && s.onComplete()
                }
             };
             if (! function ({
                   when: t,
                   delay: e,
                   delayChildren: i,
                   staggerChildren: n,
                   staggerDirection: r,
                   repeat: s,
                   repeatType: o,
                   repeatDelay: a,
                   from: l,
                   elapsed: u,
                   ...h
                }) {
                   return !!Object.keys(h).length
                }(s) && (p = {
                   ...p,
                   ...Ri(t, p)
                }), p.duration && (p.duration = me(p.duration)), p.repeatDelay && (p.repeatDelay = me(p.repeatDelay)), !c || !d || ge || !1 === s.type) return function ({
                keyframes: t,
                delay: e,
                onUpdate: i,
                onComplete: n
             }) {
                let r = () => (i && i(t[t.length - 1]), n && n(), {
                   time: 0,
                   speed: 1,
                   duration: 0,
                   play: ee,
                   pause: ee,
                   stop: ee,
                   then: t => (t(), Promise.resolve()),
                   cancel: ee,
                   complete: ee
                });
                return e ? Ei({
                   keyframes: [0, 1],
                   duration: 0,
                   delay: e,
                   onComplete: r
                }) : r()
             }(p);
             if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                let i = function (t, e, {
                   onUpdate: i,
                   onComplete: n,
                   ...r
                }) {
                   if (!(Se.waapi() && Vi.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type)) return !1;
                   let s, o, a = !1,
                      l = () => {
                         o = new Promise((t => {
                            s = t
                         }))
                      };
                   l();
                   let {
                      keyframes: u,
                      duration: h = 300,
                      ease: c,
                      times: d
                   } = r;
                   if (((t, e) => "spring" === e.type || "backgroundColor" === t || !ve(e.ease))(e, r)) {
                      let t = Ei({
                            ...r,
                            repeat: 0,
                            delay: 0
                         }),
                         e = {
                            done: !1,
                            value: u[0]
                         },
                         i = [],
                         n = 0;
                      for (; !e.done && n < 2e4;) i.push((e = t.sample(n)).value), n += 10;
                      d = void 0, u = i, h = n - 10, c = "linear"
                   }
                   let p = function (t, e, i, {
                         delay: n = 0,
                         duration: r,
                         repeat: s = 0,
                         repeatType: o = "loop",
                         ease: a,
                         times: l
                      } = {}) {
                         let u = {
                            [e]: i
                         };
                         l && (u.offset = l);
                         let h = be(a);
                         return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                         })
                      }(t.owner.current, e, u, {
                         ...r,
                         duration: h,
                         ease: c,
                         times: d
                      }),
                      m = () => p.cancel(),
                      f = () => {
                         Kt.update(m), s(), l()
                      };
                   return p.onfinish = () => {
                      t.set(function (t, {
                         repeat: e,
                         repeatType: i = "loop"
                      }) {
                         return t[e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1]
                      }(u, r)), n && n(), f()
                   }, {
                      then: (t, e) => o.then(t, e),
                      get time() {
                         return fe(p.currentTime || 0)
                      },
                      set time(t) {
                         p.currentTime = me(t)
                      },
                      get speed() {
                         return p.playbackRate
                      },
                      set speed(t) {
                         p.playbackRate = t
                      },
                      get duration() {
                         return fe(h)
                      },
                      play() {
                         a || (p.play(), Jt(m))
                      },
                      pause: () => p.pause(),
                      stop() {
                         if (a = !0, "idle" === p.playState) return;
                         let {
                            currentTime: e
                         } = p;
                         if (e) {
                            let i = Ei({
                               ...r,
                               autoplay: !1
                            });
                            t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                         }
                         f()
                      },
                      complete: () => p.finish(),
                      cancel: f
                   }
                }(e, t, p);
                if (i) return i
             }
             return Ei(p)
          };
 
          function Hi(t) {
             return Boolean(L(t) && t.add)
          }
          let Yi = t => /^\-?\d*\.?\d+$/.test(t),
             Xi = t => /^0[^.\s]+$/.test(t);
 
          function Gi(t, e) {
             -1 === t.indexOf(e) && t.push(e)
          }
 
          function qi(t, e) {
             let i = t.indexOf(e);
             i > -1 && t.splice(i, 1)
          }
          class Zi {
             constructor() {
                this.subscriptions = []
             }
             add(t) {
                return Gi(this.subscriptions, t), () => qi(this.subscriptions, t)
             }
             notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n)
                   if (1 === n) this.subscriptions[0](t, e, i);
                   else
                      for (let r = 0; r < n; r++) {
                         let n = this.subscriptions[r];
                         n && n(t, e, i)
                      }
             }
             getSize() {
                return this.subscriptions.length
             }
             clear() {
                this.subscriptions.length = 0
             }
          }
          class _i {
             constructor(t, e = {}) {
                this.version = "10.12.2", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                   this.prev = this.current, this.current = t;
                   let {
                      delta: i,
                      timestamp: n
                   } = Ht;
                   this.lastUpdated !== n && (this.timeDelta = i, this.lastUpdated = n, Kt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }, this.scheduleVelocityCheck = () => Kt.postRender(this.velocityCheck), this.velocityCheck = ({
                   timestamp: t
                }) => {
                   t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = !isNaN(parseFloat(this.current)), this.owner = e.owner
             }
             onChange(t) {
                return this.on("change", t)
             }
             on(t, e) {
                this.events[t] || (this.events[t] = new Zi);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                   i(), Kt.read((() => {
                      this.events.change.getSize() || this.stop()
                   }))
                } : i
             }
             clearListeners() {
                for (let t in this.events) this.events[t].clear()
             }
             attach(t, e) {
                this.passiveEffect = t, this.stopPassiveEffect = e
             }
             set(t, e = !0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
             }
             setWithVelocity(t, e, i) {
                this.set(e), this.prev = t, this.timeDelta = i
             }
             jump(t) {
                this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
             }
             get() {
                return this.current
             }
             getPrevious() {
                return this.prev
             }
             getVelocity() {
                return this.canTrackVelocity ? mi(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
             }
             start(t) {
                return this.stop(), new Promise((e => {
                   this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                })).then((() => {
                   this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                }))
             }
             stop() {
                this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
             }
             isAnimating() {
                return !!this.animation
             }
             clearAnimation() {
                delete this.animation
             }
             destroy() {
                this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
             }
          }
 
          function Ki(t, e) {
             return new _i(t, e)
          }
          let Ji = t => e => e.test(t),
             Qi = [$, J, K, _, tt, Q, {
                test: t => "auto" === t,
                parse: t => t
             }],
             tn = t => Qi.find(Ji(t)),
             en = [...Qi, Xe, si],
             nn = t => en.find(Ji(t));
 
          function rn(t, e, i) {
             t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, Ki(i))
          }
 
          function sn(t, e) {
             if (!e) return;
             return (e[t] || e.default || e).from
          }
 
          function on({
             protectedKeys: t,
             needsAnimating: e
          }, i) {
             let n = t.hasOwnProperty(i) && !0 !== e[i];
             return e[i] = !1, n
          }
 
          function an(t, e, {
             delay: i = 0,
             transitionOverride: n,
             type: r
          } = {}) {
             let {
                transition: s = t.getDefaultTransition(),
                transitionEnd: o,
                ...a
             } = t.makeTargetAnimatable(e), l = t.getValue("willChange");
             n && (s = n);
             let u = [],
                h = r && t.animationState && t.animationState.getState()[r];
             for (let e in a) {
                let n = t.getValue(e),
                   r = a[e];
                if (!n || void 0 === r || h && on(h, e)) continue;
                let o = {
                   delay: i,
                   elapsed: 0,
                   ...s
                };
                if (window.HandoffAppearAnimations && !n.hasAnimated) {
                   let i = t.getProps()[ce];
                   i && (o.elapsed = window.HandoffAppearAnimations(i, e, n, Kt))
                }
                n.start(zi(e, n, r, t.shouldReduceMotion && R.has(e) ? {
                   type: !1
                } : o));
                let c = n.animation;
                Hi(l) && (l.add(e), c.then((() => l.remove(e)))), u.push(c)
             }
             return o && Promise.all(u).then((() => {
                o && function (t, e) {
                   let i = he(t, e),
                      {
                         transitionEnd: n = {},
                         transition: r = {},
                         ...s
                      } = i ? t.makeTargetAnimatable(i, !1) : {};
                   for (let e in s = {
                         ...s,
                         ...n
                      }) rn(t, e, Et(s[e]))
                }(t, o)
             })), u
          }
 
          function ln(t, e, i = {}) {
             let n = he(t, e, i.custom),
                {
                   transition: r = t.getDefaultTransition() || {}
                } = n || {};
             i.transitionOverride && (r = i.transitionOverride);
             let s = n ? () => Promise.all(an(t, n, i)) : () => Promise.resolve(),
                o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                   let {
                      delayChildren: s = 0,
                      staggerChildren: o,
                      staggerDirection: a
                   } = r;
                   return function (t, e, i = 0, n = 0, r = 1, s) {
                      let o = [],
                         a = (t.variantChildren.size - 1) * n,
                         l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                      return Array.from(t.variantChildren).sort(un).forEach(((t, n) => {
                         t.notify("AnimationStart", e), o.push(ln(t, e, {
                            ...s,
                            delay: i + l(n)
                         }).then((() => t.notify("AnimationComplete", e))))
                      })), Promise.all(o)
                   }(t, e, s + n, o, a, i)
                } : () => Promise.resolve(),
                {
                   when: a
                } = r;
             if (!a) return Promise.all([s(), o(i.delay)]); {
                let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
                return t().then((() => e()))
             }
          }
 
          function un(t, e) {
             return t.sortNodePosition(e)
          }
          let hn = [...m].reverse(),
             cn = m.length;
 
          function dn(t, e) {
             return "string" == typeof e ? e !== t : !!Array.isArray(e) && !ue(e, t)
          }
 
          function pn(t = !1) {
             return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
             }
          }
          let mn = 0,
             fn = {
                animation: {
                   Feature: class extends zt {
                      constructor(t) {
                         super(t), t.animationState || (t.animationState = function (t) {
                            var e;
                            let i = (e = t, t => Promise.all(t.map((({
                                  animation: t,
                                  options: i
                               }) => function (t, e, i = {}) {
                                  let n;
                                  if (t.notify("AnimationStart", e), Array.isArray(e)) {
                                     let r = e.map((e => ln(t, e, i)));
                                     n = Promise.all(r)
                                  } else if ("string" == typeof e) n = ln(t, e, i);
                                  else {
                                     let r = "function" == typeof e ? he(t, e, i.custom) : e;
                                     n = Promise.all(an(t, r, i))
                                  }
                                  return n.then((() => t.notify("AnimationComplete", e)))
                               }(e, t, i))))),
                               n = {
                                  animate: pn(!0),
                                  whileInView: pn(),
                                  whileHover: pn(),
                                  whileTap: pn(),
                                  whileDrag: pn(),
                                  whileFocus: pn(),
                                  exit: pn()
                               },
                               r = !0,
                               s = (e, i) => {
                                  let n = he(t, i);
                                  if (n) {
                                     let {
                                        transition: t,
                                        transitionEnd: i,
                                        ...r
                                     } = n;
                                     e = {
                                        ...e,
                                        ...r,
                                        ...i
                                     }
                                  }
                                  return e
                               };
 
                            function o(e, o) {
                               let a = t.getProps(),
                                  l = t.getVariantContext(!0) || {},
                                  u = [],
                                  h = new Set,
                                  c = {},
                                  m = 1 / 0;
                               for (let i = 0; i < cn; i++) {
                                  let f = hn[i],
                                     g = n[f],
                                     y = void 0 !== a[f] ? a[f] : l[f],
                                     v = d(y),
                                     x = f === o ? g.isActive : null;
                                  !1 === x && (m = i);
                                  let P = y === l[f] && y !== a[f] && v;
                                  if (P && r && t.manuallyAnimateOnMount && (P = !1), g.protectedKeys = {
                                        ...c
                                     }, !g.isActive && null === x || !y && !g.prevProp || p(y) || "boolean" == typeof y) continue;
                                  let b = dn(g.prevProp, y),
                                     T = b || f === o && g.isActive && !P && v || i > m && v,
                                     w = Array.isArray(y) ? y : [y],
                                     S = w.reduce(s, {});
                                  !1 === x && (S = {});
                                  let {
                                     prevResolvedValues: A = {}
                                  } = g, E = {
                                     ...A,
                                     ...S
                                  }, V = t => {
                                     T = !0, h.delete(t), g.needsAnimating[t] = !0
                                  };
                                  for (let t in E) {
                                     let e = S[t],
                                        i = A[t];
                                     c.hasOwnProperty(t) || (e !== i ? At(e) && At(i) ? !ue(e, i) || b ? V(t) : g.protectedKeys[t] = !0 : void 0 !== e ? V(t) : h.add(t) : void 0 !== e && h.has(t) ? V(t) : g.protectedKeys[t] = !0)
                                  }
                                  g.prevProp = y, g.prevResolvedValues = S, g.isActive && (c = {
                                     ...c,
                                     ...S
                                  }), r && t.blockInitialAnimation && (T = !1), T && !P && u.push(...w.map((t => ({
                                     animation: t,
                                     options: {
                                        type: f,
                                        ...e
                                     }
                                  }))))
                               }
                               if (h.size) {
                                  let e = {};
                                  h.forEach((i => {
                                     let n = t.getBaseTarget(i);
                                     void 0 !== n && (e[i] = n)
                                  })), u.push({
                                     animation: e
                                  })
                               }
                               let f = Boolean(u.length);
                               return r && !1 === a.initial && !t.manuallyAnimateOnMount && (f = !1), r = !1, f ? i(u) : Promise.resolve()
                            }
                            return {
                               animateChanges: o,
                               setActive: function (e, i, r) {
                                  var s;
                                  if (n[e].isActive === i) return Promise.resolve();
                                  null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
                                     var n;
                                     return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
                                  })), n[e].isActive = i;
                                  let a = o(r, e);
                                  for (let t in n) n[t].protectedKeys = {};
                                  return a
                               },
                               setAnimateFunction: function (e) {
                                  i = e(t)
                               },
                               getState: () => n
                            }
                         }(t))
                      }
                      updateAnimationControlsSubscription() {
                         let {
                            animate: t
                         } = this.node.getProps();
                         this.unmount(), p(t) && (this.unmount = t.subscribe(this.node))
                      }
                      mount() {
                         this.updateAnimationControlsSubscription()
                      }
                      update() {
                         let {
                            animate: t
                         } = this.node.getProps(), {
                            animate: e
                         } = this.node.prevProps || {};
                         t !== e && this.updateAnimationControlsSubscription()
                      }
                      unmount() {}
                   }
                },
                exit: {
                   Feature: class extends zt {
                      constructor() {
                         super(...arguments), this.id = mn++
                      }
                      update() {
                         if (!this.node.presenceContext) return;
                         let {
                            isPresent: t,
                            onExitComplete: e,
                            custom: i
                         } = this.node.presenceContext, {
                            isPresent: n
                         } = this.node.prevPresenceContext || {};
                         if (!this.node.animationState || t === n) return;
                         let r = this.node.animationState.setActive("exit", !t, {
                            custom: null != i ? i : this.node.getProps().custom
                         });
                         e && !t && r.then((() => e(this.id)))
                      }
                      mount() {
                         let {
                            register: t
                         } = this.node.presenceContext || {};
                         t && (this.unmount = t(this.id))
                      }
                      unmount() {}
                   }
                }
             },
             gn = (t, e) => Math.abs(t - e);
          class yn {
             constructor(t, e, {
                transformPagePoint: i
             } = {}) {
                if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                      if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                      let t = Pn(this.lastMoveEventInfo, this.history),
                         e = null !== this.startEvent,
                         i = function (t, e) {
                            let i = gn(t.x, e.x),
                               n = gn(t.y, e.y);
                            return Math.sqrt(i ** 2 + n ** 2)
                         }(t.offset, {
                            x: 0,
                            y: 0
                         }) >= 3;
                      if (!e && !i) return;
                      let {
                         point: n
                      } = t, {
                         timestamp: r
                      } = Ht;
                      this.history.push({
                         ...n,
                         timestamp: r
                      });
                      let {
                         onStart: s,
                         onMove: o
                      } = this.handlers;
                      e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                   }, this.handlePointerMove = (t, e) => {
                      this.lastMoveEvent = t, this.lastMoveEventInfo = vn(e, this.transformPagePoint), Kt.update(this.updatePoint, !0)
                   }, this.handlePointerUp = (t, e) => {
                      if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                      let {
                         onEnd: i,
                         onSessionEnd: n
                      } = this.handlers, r = Pn("pointercancel" === t.type ? this.lastMoveEventInfo : vn(e, this.transformPagePoint), this.history);
                      this.startEvent && i && i(t, r), n && n(t, r)
                   }, !Lt(t)) return;
                this.handlers = e, this.transformPagePoint = i;
                let n = vn(Bt(t), this.transformPagePoint),
                   {
                      point: r
                   } = n,
                   {
                      timestamp: s
                   } = Ht;
                this.history = [{
                   ...r,
                   timestamp: s
                }];
                let {
                   onSessionStart: o
                } = e;
                o && o(t, Pn(n, this.history)), this.removeListeners = Ot(jt(window, "pointermove", this.handlePointerMove), jt(window, "pointerup", this.handlePointerUp), jt(window, "pointercancel", this.handlePointerUp))
             }
             updateHandlers(t) {
                this.handlers = t
             }
             end() {
                this.removeListeners && this.removeListeners(), Jt(this.updatePoint)
             }
          }
 
          function vn(t, e) {
             return e ? {
                point: e(t.point)
             } : t
          }
 
          function xn(t, e) {
             return {
                x: t.x - e.x,
                y: t.y - e.y
             }
          }
 
          function Pn({
             point: t
          }, e) {
             return {
                point: t,
                delta: xn(t, Tn(e)),
                offset: xn(t, bn(e)),
                velocity: wn(e, .1)
             }
          }
 
          function bn(t) {
             return t[0]
          }
 
          function Tn(t) {
             return t[t.length - 1]
          }
 
          function wn(t, e) {
             if (t.length < 2) return {
                x: 0,
                y: 0
             };
             let i = t.length - 1,
                n = null,
                r = Tn(t);
             for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > me(e)));) i--;
             if (!n) return {
                x: 0,
                y: 0
             };
             let s = fe(r.timestamp - n.timestamp);
             if (0 === s) return {
                x: 0,
                y: 0
             };
             let o = {
                x: (r.x - n.x) / s,
                y: (r.y - n.y) / s
             };
             return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
          }
 
          function Sn(t) {
             return t.max - t.min
          }
 
          function An(t, e = 0, i = .01) {
             return Math.abs(t - e) <= i
          }
 
          function En(t, e, i, n = .5) {
             t.origin = n, t.originPoint = Ge(e.min, e.max, t.origin), t.scale = Sn(i) / Sn(e), (An(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = Ge(i.min, i.max, t.origin) - t.originPoint, (An(t.translate) || isNaN(t.translate)) && (t.translate = 0)
          }
 
          function Vn(t, e, i, n) {
             En(t.x, e.x, i.x, n ? n.originX : void 0), En(t.y, e.y, i.y, n ? n.originY : void 0)
          }
 
          function Cn(t, e, i) {
             t.min = i.min + e.min, t.max = t.min + Sn(e)
          }
 
          function Mn(t, e, i) {
             t.min = e.min - i.min, t.max = t.min + Sn(e)
          }
 
          function Dn(t, e, i) {
             Mn(t.x, e.x, i.x), Mn(t.y, e.y, i.y)
          }
 
          function Rn(t, e, i) {
             return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
             }
          }
 
          function kn(t, e) {
             let i = e.min - t.min,
                n = e.max - t.max;
             return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                min: i,
                max: n
             }
          }
 
          function Ln(t, e, i) {
             return {
                min: Bn(t, e),
                max: Bn(t, i)
             }
          }
 
          function Bn(t, e) {
             return "number" == typeof t ? t : t[e] || 0
          }
 
          function jn(t) {
             return [t("x"), t("y")]
          }
 
          function Fn({
             top: t,
             left: e,
             right: i,
             bottom: n
          }) {
             return {
                x: {
                   min: e,
                   max: i
                },
                y: {
                   min: t,
                   max: n
                }
             }
          }
 
          function On(t) {
             return void 0 === t || 1 === t
          }
 
          function In({
             scale: t,
             scaleX: e,
             scaleY: i
          }) {
             return !On(t) || !On(e) || !On(i)
          }
 
          function Un(t) {
             return In(t) || Nn(t) || t.z || t.rotate || t.rotateX || t.rotateY
          }
 
          function Nn(t) {
             return $n(t.x) || $n(t.y)
          }
 
          function $n(t) {
             return t && "0%" !== t
          }
 
          function Wn(t, e, i, n, r) {
             var s, o;
             return void 0 !== r && (t = (s = n) + r * (t - s)), (o = n) + i * (t - o) + e
          }
 
          function zn(t, e = 0, i = 1, n, r) {
             t.min = Wn(t.min, e, i, n, r), t.max = Wn(t.max, e, i, n, r)
          }
 
          function Hn(t, {
             x: e,
             y: i
          }) {
             zn(t.x, e.translate, e.scale, e.originPoint), zn(t.y, i.translate, i.scale, i.originPoint)
          }
 
          function Yn(t) {
             return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
          }
 
          function Xn(t, e) {
             t.min = t.min + e, t.max = t.max + e
          }
 
          function Gn(t, e, [i, n, r]) {
             let s = void 0 !== e[r] ? e[r] : .5,
                o = Ge(t.min, t.max, s);
             zn(t, e[i], e[n], o, e.scale)
          }
          let qn = ["x", "scaleX", "originX"],
             Zn = ["y", "scaleY", "originY"];
 
          function _n(t, e) {
             Gn(t.x, e, qn), Gn(t.y, e, Zn)
          }
 
          function Kn(t, e) {
             return Fn(function (t, e) {
                if (!e) return t;
                let i = e({
                      x: t.left,
                      y: t.top
                   }),
                   n = e({
                      x: t.right,
                      y: t.bottom
                   });
                return {
                   top: i.y,
                   left: i.x,
                   bottom: n.y,
                   right: n.x
                }
             }(t.getBoundingClientRect(), e))
          }
          let Jn = new WeakMap;
 
          function Qn(t, e, i) {
             return !(!0 !== e && e !== t || null !== i && i !== t)
          }
          let tr = t => (e, i) => {
             t && Kt.update((() => t(e, i)))
          };
 
          function er(t, e) {
             return e.max === e.min ? 0 : t / (e.max - e.min) * 100
          }
          let ir = {
                correct(t, e) {
                   if (!e.target) return t;
                   if ("string" == typeof t) {
                      if (!J.test(t)) return t;
                      t = parseFloat(t)
                   }
                   return `${er(t,e.target.x)}% ${er(t,e.target.y)}%`
                }
             },
             nr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
 
          function rr(t, e, i = 1) {
             pe(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
             let [n, r] = function (t) {
                let e = nr.exec(t);
                if (!e) return [, ];
                let [, i, n] = e;
                return [i, n]
             }(t);
             if (!n) return;
             let s = window.getComputedStyle(e).getPropertyValue(n);
             return s ? s.trim() : I(r) ? rr(r, e, i + 1) : r
          }
          let sr = "_$css",
             or = {
                correct(t, {
                   treeScale: e,
                   projectionDelta: i
                }) {
                   let n = t,
                      r = t.includes("var("),
                      s = [];
                   r && (t = t.replace(nr, (t => (s.push(t), sr))));
                   let o = si.parse(t);
                   if (o.length > 5) return n;
                   let a = si.createTransformer(t),
                      l = "number" != typeof o[0] ? 1 : 0,
                      u = i.x.scale * e.x,
                      h = i.y.scale * e.y;
                   o[0 + l] /= u, o[1 + l] /= h;
                   let c = Ge(u, h, .5);
                   "number" == typeof o[2 + l] && (o[2 + l] /= c), "number" == typeof o[3 + l] && (o[3 + l] /= c);
                   let d = a(o);
                   if (r) {
                      let t = 0;
                      d = d.replace(sr, (() => {
                         let e = s[t];
                         return t++, e
                      }))
                   }
                   return d
                }
             };
          class ar extends r.Component {
             componentDidMount() {
                let {
                   visualElement: t,
                   layoutGroup: e,
                   switchLayoutGroup: i,
                   layoutId: n
                } = this.props, {
                   projection: r
                } = t;
                Object.assign(M, ur), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", (() => {
                   this.safeToRemove()
                })), r.setOptions({
                   ...r.options,
                   onExitComplete: () => this.safeToRemove()
                })), T.hasEverUpdated = !0
             }
             getSnapshotBeforeUpdate(t) {
                let {
                   layoutDependency: e,
                   visualElement: i,
                   drag: n,
                   isPresent: r
                } = this.props, s = i.projection;
                return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || Kt.postRender((() => {
                   let t = s.getStack();
                   t && t.members.length || this.safeToRemove()
                })))), null
             }
             componentDidUpdate() {
                let {
                   projection: t
                } = this.props.visualElement;
                t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
             }
             componentWillUnmount() {
                let {
                   visualElement: t,
                   layoutGroup: e,
                   switchLayoutGroup: i
                } = this.props, {
                   projection: n
                } = t;
                n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
             }
             safeToRemove() {
                let {
                   safeToRemove: t
                } = this.props;
                t && t()
             }
             render() {
                return null
             }
          }
 
          function lr(t) {
             let [e, i] = function () {
                let t = (0, r.useContext)(a);
                if (null === t) return [!0, null];
                let {
                   isPresent: e,
                   onExitComplete: i,
                   register: n
                } = t, s = (0, r.useId)();
                (0, r.useEffect)((() => n(s)), []);
                return !e && i ? [!1, () => i && i(s)] : [!0]
             }(), n = (0, r.useContext)(S);
             return r.createElement(ar, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0, r.useContext)(A),
                isPresent: e,
                safeToRemove: i
             })
          }
          let ur = {
                borderRadius: {
                   ...ir,
                   applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: ir,
                borderTopRightRadius: ir,
                borderBottomLeftRadius: ir,
                borderBottomRightRadius: ir,
                boxShadow: or
             },
             hr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
             cr = hr.length,
             dr = t => "string" == typeof t ? parseFloat(t) : t,
             pr = t => "number" == typeof t || J.test(t);
 
          function mr(t, e) {
             return void 0 !== t[e] ? t[e] : t.borderRadius
          }
          let fr = yr(0, .5, Le),
             gr = yr(.5, .95, ee);
 
          function yr(t, e, i) {
             return n => n < t ? 0 : n > e ? 1 : i(hi(t, e, n))
          }
 
          function vr(t, e) {
             t.min = e.min, t.max = e.max
          }
 
          function xr(t, e) {
             vr(t.x, e.x), vr(t.y, e.y)
          }
 
          function Pr(t, e, i, n, r) {
             var s, o;
             return t = (s = n) + 1 / i * ((t -= e) - s), void 0 !== r && (t = (o = n) + 1 / r * (t - o)), t
          }
 
          function br(t, e, [i, n, r], s, o) {
             ! function (t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                if (K.test(e)) {
                   e = parseFloat(e), e = Ge(o.min, o.max, e / 100) - o.min
                }
                if ("number" != typeof e) return;
                let a = Ge(s.min, s.max, n);
                t === s && (a -= e), t.min = Pr(t.min, e, i, a, r), t.max = Pr(t.max, e, i, a, r)
             }(t, e[i], e[n], e[r], e.scale, s, o)
          }
          let Tr = ["x", "scaleX", "originX"],
             wr = ["y", "scaleY", "originY"];
 
          function Sr(t, e, i, n) {
             br(t.x, e, Tr, i ? i.x : void 0, n ? n.x : void 0), br(t.y, e, wr, i ? i.y : void 0, n ? n.y : void 0)
          }
 
          function Ar(t) {
             return 0 === t.translate && 1 === t.scale
          }
 
          function Er(t) {
             return Ar(t.x) && Ar(t.y)
          }
 
          function Vr(t, e) {
             return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
          }
 
          function Cr(t) {
             return Sn(t.x) / Sn(t.y)
          }
          class Mr {
             constructor() {
                this.members = []
             }
             add(t) {
                Gi(this.members, t), t.scheduleRender()
             }
             remove(t) {
                if (qi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                   let t = this.members[this.members.length - 1];
                   t && this.promote(t)
                }
             }
             relegate(t) {
                let e, i = this.members.findIndex((e => t === e));
                if (0 === i) return !1;
                for (let t = i; t >= 0; t--) {
                   let i = this.members[t];
                   if (!1 !== i.isPresent) {
                      e = i;
                      break
                   }
                }
                return !!e && (this.promote(e), !0)
             }
             promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                   i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                   let {
                      crossfade: n
                   } = t.options;
                   !1 === n && i.hide()
                }
             }
             exitAnimationComplete() {
                this.members.forEach((t => {
                   let {
                      options: e,
                      resumingFrom: i
                   } = t;
                   e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                }))
             }
             scheduleRender() {
                this.members.forEach((t => {
                   t.instance && t.scheduleRender(!1)
                }))
             }
             removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
             }
          }
 
          function Dr(t, e, i) {
             let n = "",
                r = t.x.translate / e.x,
                s = t.y.translate / e.y;
             if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                let {
                   rotate: t,
                   rotateX: e,
                   rotateY: r
                } = i;
                t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), r && (n += `rotateY(${r}deg) `)
             }
             let o = t.x.scale * e.x,
                a = t.y.scale * e.y;
             return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none"
          }
          let Rr = (t, e) => t.depth - e.depth;
          class kr {
             constructor() {
                this.children = [], this.isDirty = !1
             }
             add(t) {
                Gi(this.children, t), this.isDirty = !0
             }
             remove(t) {
                qi(this.children, t), this.isDirty = !0
             }
             forEach(t) {
                this.isDirty && this.children.sort(Rr), this.isDirty = !1, this.children.forEach(t)
             }
          }
          let Lr = ["", "X", "Y", "Z"],
             Br = 0,
             jr = {
                type: "projectionFrame",
                totalNodes: 0,
                resolvedTargetDeltas: 0,
                recalculatedProjection: 0
             };
 
          function Fr({
             attachResizeListener: t,
             defaultParent: e,
             measureScroll: i,
             checkIsScrollRoot: n,
             resetTransform: r
          }) {
             return class {
                constructor(t, i = {}, n = (null == e ? void 0 : e())) {
                   this.id = Br++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                      x: 1,
                      y: 1
                   }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                      this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                   }, this.updateProjection = () => {
                      var t;
                      jr.totalNodes = jr.resolvedTargetDeltas = jr.recalculatedProjection = 0, this.nodes.forEach(Ur), this.nodes.forEach(Yr), this.nodes.forEach(Xr), this.nodes.forEach(Nr), t = jr, window.MotionDebug && window.MotionDebug.record(t)
                   }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = i, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                   for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                   this.root === this && (this.nodes = new kr)
                }
                addEventListener(t, e) {
                   return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Zi), this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                   let i = this.eventHandlers.get(t);
                   i && i.notify(...e)
                }
                hasListeners(t) {
                   return this.eventHandlers.has(t)
                }
                registerPotentialNode(t, e) {
                   this.potentialNodes.set(t, e)
                }
                mount(e, i = !1) {
                   var n;
                   if (this.instance) return;
                   this.isSVG = (n = e) instanceof SVGElement && "svg" !== n.tagName, this.instance = e;
                   let {
                      layoutId: r,
                      layout: s,
                      visualElement: o
                   } = this.options;
                   if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), i && (s || r) && (this.isLayoutDirty = !0), t) {
                      let i, n = () => this.root.updateBlockedByResize = !1;
                      t(e, (() => {
                         this.root.updateBlockedByResize = !0, i && i(), i = function (t, e) {
                            let i = performance.now(),
                               n = ({
                                  timestamp: e
                               }) => {
                                  let r = e - i;
                                  r >= 250 && (Jt(n), t(r - 250))
                               };
                            return Kt.read(n, !0), () => Jt(n)
                         }(n), T.hasAnimatedSinceResize && (T.hasAnimatedSinceResize = !1, this.nodes.forEach(Hr))
                      }))
                   }
                   r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && o && (r || s) && this.addEventListener("didUpdate", (({
                      delta: t,
                      hasLayoutChanged: e,
                      hasRelativeTargetChanged: i,
                      layout: n
                   }) => {
                      if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                      let r = this.options.transition || o.getDefaultTransition() || Jr,
                         {
                            onLayoutAnimationStart: s,
                            onLayoutAnimationComplete: a
                         } = o.getProps(),
                         l = !this.targetLayout || !Vr(this.targetLayout, n) || i,
                         u = !e && i;
                      if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                         this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                         let e = {
                            ...Wi(r, "layout"),
                            onPlay: s,
                            onComplete: a
                         };
                         (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                      } else e || 0 !== this.animationProgress || Hr(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                      this.targetLayout = n
                   }))
                }
                unmount() {
                   this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                   let t = this.getStack();
                   t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Jt(this.updateProjection)
                }
                blockUpdate() {
                   this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                   this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                   return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                   return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                   !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(Gr), this.animationId++)
                }
                getTransformTemplate() {
                   let {
                      visualElement: t
                   } = this.options;
                   return t && t.getProps().transformTemplate
                }
                willUpdate(t = !0) {
                   if (this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
                   if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                   this.isLayoutDirty = !0;
                   for (let t = 0; t < this.path.length; t++) {
                      let e = this.path[t];
                      e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                   }
                   let {
                      layoutId: e,
                      layout: i
                   } = this.options;
                   if (void 0 === e && !i) return;
                   let n = this.getTransformTemplate();
                   this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                }
                didUpdate() {
                   if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Wr);
                   this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Qr), this.potentialNodes.clear()), this.nodes.forEach(zr), this.nodes.forEach(Or), this.nodes.forEach(Ir), this.clearAllSnapshots(), qt.update.process(Ht), qt.preRender.process(Ht), qt.render.process(Ht))
                }
                clearAllSnapshots() {
                   this.nodes.forEach($r), this.sharedNodes.forEach(qr)
                }
                scheduleUpdateProjection() {
                   Kt.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount() {
                   Kt.postRender((() => {
                      this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                   }))
                }
                updateSnapshot() {
                   !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                   if (!(this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))) return;
                   if (this.resumeFrom && !this.resumeFrom.instance)
                      for (let t = 0; t < this.path.length; t++) {
                         this.path[t].updateScroll()
                      }
                   let t = this.layout;
                   this.layout = this.measure(!1), this.layoutCorrected = {
                      x: {
                         min: 0,
                         max: 0
                      },
                      y: {
                         min: 0,
                         max: 0
                      }
                   }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                   let {
                      visualElement: e
                   } = this.options;
                   e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t = "measure") {
                   let e = Boolean(this.options.layoutScroll && this.instance);
                   this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                      animationId: this.root.animationId,
                      phase: t,
                      isRoot: n(this.instance),
                      offset: i(this.instance)
                   })
                }
                resetTransform() {
                   if (!r) return;
                   let t = this.isLayoutDirty || this.shouldResetTransform,
                      e = this.projectionDelta && !Er(this.projectionDelta),
                      i = this.getTransformTemplate(),
                      n = i ? i(this.latestValues, "") : void 0,
                      s = n !== this.prevTransformTemplateValue;
                   t && (e || Un(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                }
                measure(t = !0) {
                   let e = this.measurePageBox(),
                      i = this.removeElementScroll(e);
                   return t && (i = this.removeTransform(i)),
                      function (t) {
                         ts(t.x), ts(t.y)
                      }(i), {
                         animationId: this.root.animationId,
                         measuredBox: e,
                         layoutBox: i,
                         latestValues: {},
                         source: this.id
                      }
                }
                measurePageBox() {
                   let {
                      visualElement: t
                   } = this.options;
                   if (!t) return {
                      x: {
                         min: 0,
                         max: 0
                      },
                      y: {
                         min: 0,
                         max: 0
                      }
                   };
                   let e = t.measureViewportBox(),
                      {
                         scroll: i
                      } = this.root;
                   return i && (Xn(e.x, i.offset.x), Xn(e.y, i.offset.y)), e
                }
                removeElementScroll(t) {
                   let e = {
                      x: {
                         min: 0,
                         max: 0
                      },
                      y: {
                         min: 0,
                         max: 0
                      }
                   };
                   xr(e, t);
                   for (let i = 0; i < this.path.length; i++) {
                      let n = this.path[i],
                         {
                            scroll: r,
                            options: s
                         } = n;
                      if (n !== this.root && r && s.layoutScroll) {
                         if (r.isRoot) {
                            xr(e, t);
                            let {
                               scroll: i
                            } = this.root;
                            i && (Xn(e.x, -i.offset.x), Xn(e.y, -i.offset.y))
                         }
                         Xn(e.x, r.offset.x), Xn(e.y, r.offset.y)
                      }
                   }
                   return e
                }
                applyTransform(t, e = !1) {
                   let i = {
                      x: {
                         min: 0,
                         max: 0
                      },
                      y: {
                         min: 0,
                         max: 0
                      }
                   };
                   xr(i, t);
                   for (let t = 0; t < this.path.length; t++) {
                      let n = this.path[t];
                      !e && n.options.layoutScroll && n.scroll && n !== n.root && _n(i, {
                         x: -n.scroll.offset.x,
                         y: -n.scroll.offset.y
                      }), Un(n.latestValues) && _n(i, n.latestValues)
                   }
                   return Un(this.latestValues) && _n(i, this.latestValues), i
                }
                removeTransform(t) {
                   let e = {
                      x: {
                         min: 0,
                         max: 0
                      },
                      y: {
                         min: 0,
                         max: 0
                      }
                   };
                   xr(e, t);
                   for (let t = 0; t < this.path.length; t++) {
                      let i = this.path[t];
                      if (!i.instance || !Un(i.latestValues)) continue;
                      In(i.latestValues) && i.updateSnapshot();
                      let n = {
                         x: {
                            min: 0,
                            max: 0
                         },
                         y: {
                            min: 0,
                            max: 0
                         }
                      };
                      xr(n, i.measurePageBox()), Sr(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                   }
                   return Un(this.latestValues) && Sr(e, this.latestValues), e
                }
                setTargetDelta(t) {
                   this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                }
                setOptions(t) {
                   this.options = {
                      ...this.options,
                      ...t,
                      crossfade: void 0 === t.crossfade || t.crossfade
                   }
                }
                clearMeasurements() {
                   this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                   this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ht.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t = !1) {
                   var e, i, n, r;
                   let s = this.getLead();
                   this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                   let o = Boolean(this.resumingFrom) || this !== s;
                   if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                   let {
                      layout: a,
                      layoutId: l
                   } = this.options;
                   if (this.layout && (a || l)) {
                      if (this.resolvedRelativeTargetAt = Ht.timestamp, !this.targetDelta && !this.relativeTarget) {
                         let t = this.getClosestProjectingParent();
                         t && t.layout ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = {
                            x: {
                               min: 0,
                               max: 0
                            },
                            y: {
                               min: 0,
                               max: 0
                            }
                         }, this.relativeTargetOrigin = {
                            x: {
                               min: 0,
                               max: 0
                            },
                            y: {
                               min: 0,
                               max: 0
                            }
                         }, Dn(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), xr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                      }
                      if (this.relativeTarget || this.targetDelta) {
                         if (this.target || (this.target = {
                               x: {
                                  min: 0,
                                  max: 0
                               },
                               y: {
                                  min: 0,
                                  max: 0
                               }
                            }, this.targetWithTransforms = {
                               x: {
                                  min: 0,
                                  max: 0
                               },
                               y: {
                                  min: 0,
                                  max: 0
                               }
                            }), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, Cn(i.x, n.x, r.x), Cn(i.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : xr(this.target, this.layout.layoutBox), Hn(this.target, this.targetDelta)) : xr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                            this.attemptToResolveRelativeTarget = !1;
                            let t = this.getClosestProjectingParent();
                            t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = {
                               x: {
                                  min: 0,
                                  max: 0
                               },
                               y: {
                                  min: 0,
                                  max: 0
                               }
                            }, this.relativeTargetOrigin = {
                               x: {
                                  min: 0,
                                  max: 0
                               },
                               y: {
                                  min: 0,
                                  max: 0
                               }
                            }, Dn(this.relativeTargetOrigin, this.target, t.target), xr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                         }
                         jr.resolvedTargetDeltas++
                      }
                   }
                }
                getClosestProjectingParent() {
                   return !this.parent || In(this.parent.latestValues) || Nn(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                   return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                   var t;
                   let e = this.getLead(),
                      i = Boolean(this.resumingFrom) || this !== e,
                      n = !0;
                   if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === Ht.timestamp && (n = !1), n) return;
                   let {
                      layout: r,
                      layoutId: s
                   } = this.options;
                   if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !r && !s) return;
                   xr(this.layoutCorrected, this.layout.layoutBox),
                      function (t, e, i, n = !1) {
                         let r, s, o = i.length;
                         if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                               s = (r = i[a]).projectionDelta;
                               let o = r.instance;
                               (!o || !o.style || "contents" !== o.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && _n(t, {
                                  x: -r.scroll.offset.x,
                                  y: -r.scroll.offset.y
                               }), s && (e.x *= s.x.scale, e.y *= s.y.scale, Hn(t, s)), n && Un(r.latestValues) && _n(t, r.latestValues))
                            }
                            e.x = Yn(e.x), e.y = Yn(e.y)
                         }
                      }(this.layoutCorrected, this.treeScale, this.path, i);
                   let {
                      target: o
                   } = e;
                   if (!o) return;
                   this.projectionDelta || (this.projectionDelta = {
                      x: {
                         translate: 0,
                         scale: 1,
                         origin: 0,
                         originPoint: 0
                      },
                      y: {
                         translate: 0,
                         scale: 1,
                         origin: 0,
                         originPoint: 0
                      }
                   }, this.projectionDeltaWithTransform = {
                      x: {
                         translate: 0,
                         scale: 1,
                         origin: 0,
                         originPoint: 0
                      },
                      y: {
                         translate: 0,
                         scale: 1,
                         origin: 0,
                         originPoint: 0
                      }
                   });
                   let a = this.treeScale.x,
                      l = this.treeScale.y,
                      u = this.projectionTransform;
                   Vn(this.projectionDelta, this.layoutCorrected, o, this.latestValues), this.projectionTransform = Dr(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== l) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", o)), jr.recalculatedProjection++
                }
                hide() {
                   this.isVisible = !1
                }
                show() {
                   this.isVisible = !0
                }
                scheduleRender(t = !0) {
                   if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                      let t = this.getStack();
                      t && t.scheduleRender()
                   }
                   this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e = !1) {
                   let i = this.snapshot,
                      n = i ? i.latestValues : {},
                      r = {
                         ...this.latestValues
                      },
                      s = {
                         x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                         },
                         y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                         }
                      };
                   this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                   let o, a = {
                         x: {
                            min: 0,
                            max: 0
                         },
                         y: {
                            min: 0,
                            max: 0
                         }
                      },
                      l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
                      u = this.getStack(),
                      h = !u || u.members.length <= 1,
                      c = Boolean(l && !h && !0 === this.options.crossfade && !this.path.some(Kr));
                   this.animationProgress = 0, this.mixTargetDelta = e => {
                      let i = e / 1e3;
                      Zr(s.x, t.x, i), Zr(s.y, t.y, i), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Dn(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), function (t, e, i, n) {
                         _r(t.x, e.x, i.x, n), _r(t.y, e.y, i.y, n)
                      }(this.relativeTarget, this.relativeTargetOrigin, a, i), o && Vr(this.relativeTarget, o) && (this.isProjectionDirty = !1), o || (o = {
                         x: {
                            min: 0,
                            max: 0
                         },
                         y: {
                            min: 0,
                            max: 0
                         }
                      }), xr(o, this.relativeTarget)), l && (this.animationValues = r, function (t, e, i, n, r, s) {
                         r ? (t.opacity = Ge(0, void 0 !== i.opacity ? i.opacity : 1, fr(n)), t.opacityExit = Ge(void 0 !== e.opacity ? e.opacity : 1, 0, gr(n))) : s && (t.opacity = Ge(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                         for (let r = 0; r < cr; r++) {
                            let s = `border${hr[r]}Radius`,
                               o = mr(e, s),
                               a = mr(i, s);
                            void 0 === o && void 0 === a || (o || (o = 0), a || (a = 0), 0 === o || 0 === a || pr(o) === pr(a) ? (t[s] = Math.max(Ge(dr(o), dr(a), n), 0), (K.test(a) || K.test(o)) && (t[s] += "%")) : t[s] = a)
                         }(e.rotate || i.rotate) && (t.rotate = Ge(e.rotate || 0, i.rotate || 0, n))
                      }(r, n, this.latestValues, i, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                   }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                   this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Jt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Kt.update((() => {
                      T.hasAnimatedSinceResize = !0, this.currentAnimation = function (t, e, i) {
                         let n = L(0) ? 0 : Ki(0);
                         return n.start(zi("", n, 1e3, i)), n.animation
                      }(0, 0, {
                         ...t,
                         onUpdate: e => {
                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                         },
                         onComplete: () => {
                            t.onComplete && t.onComplete(), this.completeAnimation()
                         }
                      }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                   }))
                }
                completeAnimation() {
                   this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                   let t = this.getStack();
                   t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                   this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                }
                applyTransformsToTarget() {
                   let t = this.getLead(),
                      {
                         targetWithTransforms: e,
                         target: i,
                         layout: n,
                         latestValues: r
                      } = t;
                   if (e && i && n) {
                      if (this !== t && this.layout && n && es(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                         i = this.target || {
                            x: {
                               min: 0,
                               max: 0
                            },
                            y: {
                               min: 0,
                               max: 0
                            }
                         };
                         let e = Sn(this.layout.layoutBox.x);
                         i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                         let n = Sn(this.layout.layoutBox.y);
                         i.y.min = t.target.y.min, i.y.max = i.y.min + n
                      }
                      xr(e, i), _n(e, r), Vn(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                   }
                }
                registerSharedNode(t, e) {
                   this.sharedNodes.has(t) || this.sharedNodes.set(t, new Mr), this.sharedNodes.get(t).add(e);
                   let i = e.options.initialPromotionConfig;
                   e.promote({
                      transition: i ? i.transition : void 0,
                      preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                   })
                }
                isLead() {
                   let t = this.getStack();
                   return !t || t.lead === this
                }
                getLead() {
                   var t;
                   let {
                      layoutId: e
                   } = this.options;
                   return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                   var t;
                   let {
                      layoutId: e
                   } = this.options;
                   return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                   let {
                      layoutId: t
                   } = this.options;
                   if (t) return this.root.sharedNodes.get(t)
                }
                promote({
                   needsReset: t,
                   transition: e,
                   preserveFollowOpacity: i
                } = {}) {
                   let n = this.getStack();
                   n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                      transition: e
                   })
                }
                relegate() {
                   let t = this.getStack();
                   return !!t && t.relegate(this)
                }
                resetRotation() {
                   let {
                      visualElement: t
                   } = this.options;
                   if (!t) return;
                   let e = !1,
                      {
                         latestValues: i
                      } = t;
                   if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                   let n = {};
                   for (let e = 0; e < Lr.length; e++) {
                      let r = "rotate" + Lr[e];
                      i[r] && (n[r] = i[r], t.setStaticValue(r, 0))
                   }
                   for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                   t.scheduleRender()
                }
                getProjectionStyles(t = {}) {
                   var e, i;
                   let n = {};
                   if (!this.instance || this.isSVG) return n;
                   if (!this.isVisible) return {
                      visibility: "hidden"
                   };
                   n.visibility = "";
                   let r = this.getTransformTemplate();
                   if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = Vt(t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                   let s = this.getLead();
                   if (!this.projectionDelta || !this.layout || !s.target) {
                      let e = {};
                      return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = Vt(t.pointerEvents) || ""), this.hasProjected && !Un(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                   }
                   let o = s.animationValues || s.latestValues;
                   this.applyTransformsToTarget(), n.transform = Dr(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                   let {
                      x: a,
                      y: l
                   } = this.projectionDelta;
                   for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, M) {
                      if (void 0 === o[t]) continue;
                      let {
                         correct: e,
                         applyTo: i
                      } = M[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                      if (i) {
                         let t = i.length;
                         for (let e = 0; e < t; e++) n[i[e]] = r
                      } else n[t] = r
                   }
                   return this.options.layoutId && (n.pointerEvents = s === this ? Vt(t.pointerEvents) || "" : "none"), n
                }
                clearSnapshot() {
                   this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                   this.root.nodes.forEach((t => {
                      var e;
                      return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                   })), this.root.nodes.forEach(Wr), this.root.sharedNodes.clear()
                }
             }
          }
 
          function Or(t) {
             t.updateLayout()
          }
 
          function Ir(t) {
             var e;
             let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
             if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {
                   layoutBox: e,
                   measuredBox: n
                } = t.layout, {
                   animationType: r
                } = t.options, s = i.source !== t.layout.source;
                "size" === r ? jn((t => {
                   let n = s ? i.measuredBox[t] : i.layoutBox[t],
                      r = Sn(n);
                   n.min = e[t].min, n.max = n.min + r
                })) : es(r, i.layoutBox, e) && jn((n => {
                   let r = s ? i.measuredBox[n] : i.layoutBox[n],
                      o = Sn(e[n]);
                   r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }));
                let o = {
                   x: {
                      translate: 0,
                      scale: 1,
                      origin: 0,
                      originPoint: 0
                   },
                   y: {
                      translate: 0,
                      scale: 1,
                      origin: 0,
                      originPoint: 0
                   }
                };
                Vn(o, e, i.layoutBox);
                let a = {
                   x: {
                      translate: 0,
                      scale: 1,
                      origin: 0,
                      originPoint: 0
                   },
                   y: {
                      translate: 0,
                      scale: 1,
                      origin: 0,
                      originPoint: 0
                   }
                };
                s ? Vn(a, t.applyTransform(n, !0), i.measuredBox) : Vn(a, e, i.layoutBox);
                let l = !Er(o),
                   u = !1;
                if (!t.resumeFrom) {
                   let n = t.getClosestProjectingParent();
                   if (n && !n.resumeFrom) {
                      let {
                         snapshot: r,
                         layout: s
                      } = n;
                      if (r && s) {
                         let o = {
                            x: {
                               min: 0,
                               max: 0
                            },
                            y: {
                               min: 0,
                               max: 0
                            }
                         };
                         Dn(o, i.layoutBox, r.layoutBox);
                         let a = {
                            x: {
                               min: 0,
                               max: 0
                            },
                            y: {
                               min: 0,
                               max: 0
                            }
                         };
                         Dn(a, e, s.layoutBox), Vr(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                      }
                   }
                }
                t.notifyListeners("didUpdate", {
                   layout: e,
                   snapshot: i,
                   delta: a,
                   layoutDelta: o,
                   hasLayoutChanged: l,
                   hasRelativeTargetChanged: u
                })
             } else if (t.isLead()) {
                let {
                   onExitComplete: e
                } = t.options;
                e && e()
             }
             t.options.transition = void 0
          }
 
          function Ur(t) {
             jr.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
          }
 
          function Nr(t) {
             t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
          }
 
          function $r(t) {
             t.clearSnapshot()
          }
 
          function Wr(t) {
             t.clearMeasurements()
          }
 
          function zr(t) {
             let {
                visualElement: e
             } = t.options;
             e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
          }
 
          function Hr(t) {
             t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
          }
 
          function Yr(t) {
             t.resolveTargetDelta()
          }
 
          function Xr(t) {
             t.calcProjection()
          }
 
          function Gr(t) {
             t.resetRotation()
          }
 
          function qr(t) {
             t.removeLeadSnapshot()
          }
 
          function Zr(t, e, i) {
             t.translate = Ge(e.translate, 0, i), t.scale = Ge(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
          }
 
          function _r(t, e, i, n) {
             t.min = Ge(e.min, i.min, n), t.max = Ge(e.max, i.max, n)
          }
 
          function Kr(t) {
             return t.animationValues && void 0 !== t.animationValues.opacityExit
          }
          let Jr = {
             duration: .45,
             ease: [.4, 0, .1, 1]
          };
 
          function Qr(t, e) {
             let i = t.root;
             for (let e = t.path.length - 1; e >= 0; e--)
                if (Boolean(t.path[e].instance)) {
                   i = t.path[e];
                   break
                } let n = (i && i !== t.root ? i.instance : document).querySelector(`[data-projection-id="${e}"]`);
             n && t.mount(n, !0)
          }
 
          function ts(t) {
             t.min = Math.round(t.min), t.max = Math.round(t.max)
          }
 
          function es(t, e, i) {
             return "position" === t || "preserve-aspect" === t && !An(Cr(e), Cr(i), .2)
          }
          let is = Fr({
                attachResizeListener: (t, e) => kt(t, "resize", e),
                measureScroll: () => ({
                   x: document.documentElement.scrollLeft || document.body.scrollLeft,
                   y: document.documentElement.scrollTop || document.body.scrollTop
                }),
                checkIsScrollRoot: () => !0
             }),
             ns = {
                current: void 0
             },
             rs = Fr({
                measureScroll: t => ({
                   x: t.scrollLeft,
                   y: t.scrollTop
                }),
                defaultParent() {
                   if (!ns.current) {
                      let t = new is(0, {});
                      t.mount(window), t.setOptions({
                         layoutScroll: !0
                      }), ns.current = t
                   }
                   return ns.current
                },
                resetTransform(t, e) {
                   t.style.transform = void 0 !== e ? e : "none"
                },
                checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
             }),
             ss = {
                pan: {
                   Feature: class extends zt {
                      constructor() {
                         super(...arguments), this.removePointerDownListener = ee
                      }
                      onPointerDown(t) {
                         this.session = new yn(t, this.createPanHandlers(), {
                            transformPagePoint: this.node.getTransformPagePoint()
                         })
                      }
                      createPanHandlers() {
                         let {
                            onPanSessionStart: t,
                            onPanStart: e,
                            onPan: i,
                            onPanEnd: n
                         } = this.node.getProps();
                         return {
                            onSessionStart: tr(t),
                            onStart: tr(e),
                            onMove: i,
                            onEnd: (t, e) => {
                               delete this.session, n && Kt.update((() => n(t, e)))
                            }
                         }
                      }
                      mount() {
                         this.removePointerDownListener = jt(this.node.current, "pointerdown", (t => this.onPointerDown(t)))
                      }
                      update() {
                         this.session && this.session.updateHandlers(this.createPanHandlers())
                      }
                      unmount() {
                         this.removePointerDownListener(), this.session && this.session.end()
                      }
                   }
                },
                drag: {
                   Feature: class extends zt {
                      constructor(t) {
                         super(t), this.removeGroupControls = ee, this.removeListeners = ee, this.controls = new class {
                            constructor(t) {
                               this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                                  x: 0,
                                  y: 0
                               }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                                  x: {
                                     min: 0,
                                     max: 0
                                  },
                                  y: {
                                     min: 0,
                                     max: 0
                                  }
                               }, this.visualElement = t
                            }
                            start(t, {
                               snapToCursor: e = !1
                            } = {}) {
                               let {
                                  presenceContext: i
                               } = this.visualElement;
                               if (i && !1 === i.isPresent) return;
                               this.panSession = new yn(t, {
                                  onSessionStart: t => {
                                     this.stopAnimation(), e && this.snapToCursor(Bt(t, "page").point)
                                  },
                                  onStart: (t, e) => {
                                     let {
                                        drag: i,
                                        dragPropagation: n,
                                        onDragStart: r
                                     } = this.getProps();
                                     if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = $t(i), !this.openGlobalLock)) return;
                                     this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), jn((t => {
                                        let e = this.getAxisMotionValue(t).get() || 0;
                                        if (K.test(e)) {
                                           let {
                                              projection: i
                                           } = this.visualElement;
                                           if (i && i.layout) {
                                              let n = i.layout.layoutBox[t];
                                              if (n) {
                                                 e = Sn(n) * (parseFloat(e) / 100)
                                              }
                                           }
                                        }
                                        this.originPoint[t] = e
                                     })), r && Kt.update((() => r(t, e)), !1, !0);
                                     let {
                                        animationState: s
                                     } = this.visualElement;
                                     s && s.setActive("whileDrag", !0)
                                  },
                                  onMove: (t, e) => {
                                     let {
                                        dragPropagation: i,
                                        dragDirectionLock: n,
                                        onDirectionLock: r,
                                        onDrag: s
                                     } = this.getProps();
                                     if (!i && !this.openGlobalLock) return;
                                     let {
                                        offset: o
                                     } = e;
                                     if (n && null === this.currentDirection) return this.currentDirection = function (t, e = 10) {
                                        let i = null;
                                        return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                     }(o), void(null !== this.currentDirection && r && r(this.currentDirection));
                                     this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                                  },
                                  onSessionEnd: (t, e) => this.stop(t, e)
                               }, {
                                  transformPagePoint: this.visualElement.getTransformPagePoint()
                               })
                            }
                            stop(t, e) {
                               let i = this.isDragging;
                               if (this.cancel(), !i) return;
                               let {
                                  velocity: n
                               } = e;
                               this.startAnimation(n);
                               let {
                                  onDragEnd: r
                               } = this.getProps();
                               r && Kt.update((() => r(t, e)))
                            }
                            cancel() {
                               this.isDragging = !1;
                               let {
                                  projection: t,
                                  animationState: e
                               } = this.visualElement;
                               t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                               let {
                                  dragPropagation: i
                               } = this.getProps();
                               !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                            }
                            updateAxis(t, e, i) {
                               let {
                                  drag: n
                               } = this.getProps();
                               if (!i || !Qn(t, n, this.currentDirection)) return;
                               let r = this.getAxisMotionValue(t),
                                  s = this.originPoint[t] + i[t];
                               this.constraints && this.constraints[t] && (s = function (t, {
                                  min: e,
                                  max: i
                               }, n) {
                                  return void 0 !== e && t < e ? t = n ? Ge(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? Ge(i, t, n.max) : Math.min(t, i)), t
                               }(s, this.constraints[t], this.elastic[t])), r.set(s)
                            }
                            resolveConstraints() {
                               let {
                                  dragConstraints: t,
                                  dragElastic: e
                               } = this.getProps(), {
                                  layout: i
                               } = this.visualElement.projection || {}, n = this.constraints;
                               t && c(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !i) && function (t, {
                                  top: e,
                                  left: i,
                                  bottom: n,
                                  right: r
                               }) {
                                  return {
                                     x: Rn(t.x, i, r),
                                     y: Rn(t.y, e, n)
                                  }
                               }(i.layoutBox, t), this.elastic = function (t = .35) {
                                  return !1 === t ? t = 0 : !0 === t && (t = .35), {
                                     x: Ln(t, "left", "right"),
                                     y: Ln(t, "top", "bottom")
                                  }
                               }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && jn((t => {
                                  this.getAxisMotionValue(t) && (this.constraints[t] = function (t, e) {
                                     let i = {};
                                     return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                                  }(i.layoutBox[t], this.constraints[t]))
                               }))
                            }
                            resolveRefConstraints() {
                               var t, e;
                               let {
                                  dragConstraints: i,
                                  onMeasureDragConstraints: n
                               } = this.getProps();
                               if (!i || !c(i)) return !1;
                               let r = i.current;
                               pe(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                               let {
                                  projection: s
                               } = this.visualElement;
                               if (!s || !s.layout) return !1;
                               let o = (e = function (t, e, i) {
                                  let n = Kn(t, i),
                                     {
                                        scroll: r
                                     } = e;
                                  return r && (Xn(n.x, r.offset.x), Xn(n.y, r.offset.y)), n
                               }(r, s.root, this.visualElement.getTransformPagePoint()), {
                                  x: kn((t = s.layout.layoutBox).x, e.x),
                                  y: kn(t.y, e.y)
                               });
                               if (n) {
                                  let t = n(function ({
                                     x: t,
                                     y: e
                                  }) {
                                     return {
                                        top: e.min,
                                        right: t.max,
                                        bottom: e.max,
                                        left: t.min
                                     }
                                  }(o));
                                  this.hasMutatedConstraints = !!t, t && (o = Fn(t))
                               }
                               return o
                            }
                            startAnimation(t) {
                               let {
                                  drag: e,
                                  dragMomentum: i,
                                  dragElastic: n,
                                  dragTransition: r,
                                  dragSnapToOrigin: s,
                                  onDragTransitionEnd: o
                               } = this.getProps(), a = this.constraints || {}, l = jn((o => {
                                  if (!Qn(o, e, this.currentDirection)) return;
                                  let l = a && a[o] || {};
                                  s && (l = {
                                     min: 0,
                                     max: 0
                                  });
                                  let u = {
                                     type: "inertia",
                                     velocity: i ? t[o] : 0,
                                     bounceStiffness: n ? 200 : 1e6,
                                     bounceDamping: n ? 40 : 1e7,
                                     timeConstant: 750,
                                     restDelta: 1,
                                     restSpeed: 10,
                                     ...r,
                                     ...l
                                  };
                                  return this.startAxisValueAnimation(o, u)
                               }));
                               return Promise.all(l).then(o)
                            }
                            startAxisValueAnimation(t, e) {
                               let i = this.getAxisMotionValue(t);
                               return i.start(zi(t, i, 0, e))
                            }
                            stopAnimation() {
                               jn((t => this.getAxisMotionValue(t).stop()))
                            }
                            getAxisMotionValue(t) {
                               let e = "_drag" + t.toUpperCase(),
                                  i = this.visualElement.getProps();
                               return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                            }
                            snapToCursor(t) {
                               jn((e => {
                                  let {
                                     drag: i
                                  } = this.getProps();
                                  if (!Qn(e, i, this.currentDirection)) return;
                                  let {
                                     projection: n
                                  } = this.visualElement, r = this.getAxisMotionValue(e);
                                  if (n && n.layout) {
                                     let {
                                        min: i,
                                        max: s
                                     } = n.layout.layoutBox[e];
                                     r.set(t[e] - Ge(i, s, .5))
                                  }
                               }))
                            }
                            scalePositionWithinConstraints() {
                               if (!this.visualElement.current) return;
                               let {
                                  drag: t,
                                  dragConstraints: e
                               } = this.getProps(), {
                                  projection: i
                               } = this.visualElement;
                               if (!c(e) || !i || !this.constraints) return;
                               this.stopAnimation();
                               let n = {
                                  x: 0,
                                  y: 0
                               };
                               jn((t => {
                                  let e = this.getAxisMotionValue(t);
                                  if (e) {
                                     let i = e.get();
                                     n[t] = function (t, e) {
                                        let i = .5,
                                           n = Sn(t),
                                           r = Sn(e);
                                        return r > n ? i = hi(e.min, e.max - n, t.min) : n > r && (i = hi(t.min, t.max - r, e.min)), N(0, 1, i)
                                     }({
                                        min: i,
                                        max: i
                                     }, this.constraints[t])
                                  }
                               }));
                               let {
                                  transformTemplate: r
                               } = this.visualElement.getProps();
                               this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), jn((e => {
                                  if (!Qn(e, t, null)) return;
                                  let i = this.getAxisMotionValue(e),
                                     {
                                        min: r,
                                        max: s
                                     } = this.constraints[e];
                                  i.set(Ge(r, s, n[e]))
                               }))
                            }
                            addListeners() {
                               if (!this.visualElement.current) return;
                               Jn.set(this.visualElement, this);
                               let t = jt(this.visualElement.current, "pointerdown", (t => {
                                     let {
                                        drag: e,
                                        dragListener: i = !0
                                     } = this.getProps();
                                     e && i && this.start(t)
                                  })),
                                  e = () => {
                                     let {
                                        dragConstraints: t
                                     } = this.getProps();
                                     c(t) && (this.constraints = this.resolveRefConstraints())
                                  },
                                  {
                                     projection: i
                                  } = this.visualElement,
                                  n = i.addEventListener("measure", e);
                               i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), e();
                               let r = kt(window, "resize", (() => this.scalePositionWithinConstraints())),
                                  s = i.addEventListener("didUpdate", (({
                                     delta: t,
                                     hasLayoutChanged: e
                                  }) => {
                                     this.isDragging && e && (jn((e => {
                                        let i = this.getAxisMotionValue(e);
                                        i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                                     })), this.visualElement.render())
                                  }));
                               return () => {
                                  r(), t(), n(), s && s()
                               }
                            }
                            getProps() {
                               let t = this.visualElement.getProps(),
                                  {
                                     drag: e = !1,
                                     dragDirectionLock: i = !1,
                                     dragPropagation: n = !1,
                                     dragConstraints: r = !1,
                                     dragElastic: s = .35,
                                     dragMomentum: o = !0
                                  } = t;
                               return {
                                  ...t,
                                  drag: e,
                                  dragDirectionLock: i,
                                  dragPropagation: n,
                                  dragConstraints: r,
                                  dragElastic: s,
                                  dragMomentum: o
                               }
                            }
                         }(t)
                      }
                      mount() {
                         let {
                            dragControls: t
                         } = this.node.getProps();
                         t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ee
                      }
                      unmount() {
                         this.removeGroupControls(), this.removeListeners()
                      }
                   },
                   ProjectionNode: rs,
                   MeasureLayout: lr
                }
             },
             os = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
             as = t => os.has(t),
             ls = t => t === $ || t === J,
             us = (t, e) => parseFloat(t.split(", ")[e]),
             hs = (t, e) => (i, {
                transform: n
             }) => {
                if ("none" === n || !n) return 0;
                let r = n.match(/^matrix3d\((.+)\)$/);
                if (r) return us(r[1], e); {
                   let e = n.match(/^matrix\((.+)\)$/);
                   return e ? us(e[1], t) : 0
                }
             },
             cs = new Set(["x", "y", "z"]),
             ds = D.filter((t => !cs.has(t))),
             ps = {
                width: ({
                   x: t
                }, {
                   paddingLeft: e = "0",
                   paddingRight: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({
                   y: t
                }, {
                   paddingTop: e = "0",
                   paddingBottom: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {
                   top: e
                }) => parseFloat(e),
                left: (t, {
                   left: e
                }) => parseFloat(e),
                bottom: ({
                   y: t
                }, {
                   top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                   x: t
                }, {
                   left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: hs(4, 13),
                y: hs(5, 14)
             },
             ms = (t, e, i = {}, n = {}) => {
                e = {
                   ...e
                }, n = {
                   ...n
                };
                let r = Object.keys(e).filter(as),
                   s = [],
                   o = !1,
                   a = [];
                if (r.forEach((r => {
                      let l = t.getValue(r);
                      if (!t.hasValue(r)) return;
                      let u, h = i[r],
                         c = tn(h),
                         d = e[r];
                      if (At(d)) {
                         let t = d.length,
                            e = null === d[0] ? 1 : 0;
                         c = tn(h = d[e]);
                         for (let i = e; i < t && null !== d[i]; i++) u ? pe(tn(d[i]) === u, "All keyframes must be of the same type") : (u = tn(d[i]), pe(u === c || ls(c) && ls(u), "Keyframes must be of the same dimension as the current value"))
                      } else u = tn(d);
                      if (c !== u)
                         if (ls(c) && ls(u)) {
                            let t = l.get();
                            "string" == typeof t && l.set(parseFloat(t)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && u === J && (e[r] = d.map(parseFloat))
                         } else(null == c ? void 0 : c.transform) && (null == u ? void 0 : u.transform) && (0 === h || 0 === d) ? 0 === h ? l.set(u.transform(h)) : e[r] = c.transform(d) : (o || (s = function (t) {
                            let e = [];
                            return ds.forEach((i => {
                               let n = t.getValue(i);
                               void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                            })), e.length && t.render(), e
                         }(t), o = !0), a.push(r), n[r] = void 0 !== n[r] ? n[r] : e[r], l.jump(d))
                   })), !a.length) return {
                   target: e,
                   transitionEnd: n
                }; {
                   let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                      r = ((t, e, i) => {
                         let n = e.measureViewportBox(),
                            r = e.current,
                            s = getComputedStyle(r),
                            {
                               display: o
                            } = s,
                            a = {};
                         "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach((t => {
                            a[t] = ps[t](n, s)
                         })), e.render();
                         let l = e.measureViewportBox();
                         return i.forEach((i => {
                            let n = e.getValue(i);
                            n && n.jump(a[i]), t[i] = ps[i](l, s)
                         })), t
                      })(e, t, a);
                   return s.length && s.forEach((([e, i]) => {
                      t.getValue(e).set(i)
                   })), t.render(), l && null !== i && window.scrollTo({
                      top: i
                   }), {
                      target: r,
                      transitionEnd: n
                   }
                }
             },
             fs = (t, e, i, n) => {
                var r, s, o, a;
                let l = function (t, {
                   ...e
                }, i) {
                   let n = t.current;
                   if (!(n instanceof Element)) return {
                      target: e,
                      transitionEnd: i
                   };
                   for (let r in i && (i = {
                         ...i
                      }), t.values.forEach((t => {
                         let e = t.get();
                         if (!I(e)) return;
                         let i = rr(e, n);
                         i && t.set(i)
                      })), e) {
                      let t = e[r];
                      if (!I(t)) continue;
                      let s = rr(t, n);
                      s && (e[r] = s, i || (i = {}), void 0 === i[r] && (i[r] = t))
                   }
                   return {
                      target: e,
                      transitionEnd: i
                   }
                }(t, e, n);
                return e = l.target, r = t, o = i, a = n = l.transitionEnd, (t => Object.keys(t).some(as))(s = e) ? ms(r, s, o, a) : {
                   target: s,
                   transitionEnd: a
                }
             },
             gs = {
                current: null
             },
             ys = {
                current: !1
             },
             vs = new WeakMap,
             xs = Object.keys(P),
             Ps = xs.length,
             bs = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
             Ts = f.length;
          class ws extends class {
             constructor({
                parent: t,
                props: e,
                presenceContext: i,
                reducedMotionConfig: n,
                visualState: r
             }, s = {}) {
                this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                   this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }, this.scheduleRender = () => Kt.render(this.render, !1, !0);
                let {
                   latestValues: o,
                   renderState: a
                } = r;
                this.latestValues = o, this.baseTarget = {
                   ...o
                }, this.initialValues = e.initial ? {
                   ...o
                } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = g(e), this.isVariantNode = y(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
                let {
                   willChange: l,
                   ...u
                } = this.scrapeMotionValuesFromProps(e, {});
                for (let t in u) {
                   let e = u[t];
                   void 0 !== o[t] && L(e) && (e.set(o[t], !1), Hi(l) && l.add(t))
                }
             }
             scrapeMotionValuesFromProps(t, e) {
                return {}
             }
             mount(t) {
                this.current = t, vs.set(t, this), this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), ys.current || function () {
                   if (ys.current = !0, l)
                      if (window.matchMedia) {
                         let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => gs.current = t.matches;
                         t.addListener(e), e()
                      } else gs.current = !1
                }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || gs.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
             }
             unmount() {
                for (let t in vs.delete(this.current), this.projection && this.projection.unmount(), Jt(this.notifyUpdate), Jt(this.render), this.valueSubscriptions.forEach((t => t())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                for (let t in this.features) this.features[t].unmount();
                this.current = null
             }
             bindToMotionValue(t, e) {
                let i = R.has(t),
                   n = e.on("change", (e => {
                      this.latestValues[t] = e, this.props.onUpdate && Kt.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                   })),
                   r = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, (() => {
                   n(), r()
                }))
             }
             sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
             }
             loadFeatures({
                children: t,
                ...e
             }, i, n, r, s) {
                let o, a;
                for (let t = 0; t < Ps; t++) {
                   let i = xs[t],
                      {
                         isEnabled: n,
                         Feature: r,
                         ProjectionNode: s,
                         MeasureLayout: l
                      } = P[i];
                   s && (o = s), n(e) && (!this.features[i] && r && (this.features[i] = new r(this)), l && (a = l))
                }
                if (!this.projection && o) {
                   this.projection = new o(r, this.latestValues, this.parent && this.parent.projection);
                   let {
                      layoutId: t,
                      layout: i,
                      drag: n,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: u
                   } = e;
                   this.projection.setOptions({
                      layoutId: t,
                      layout: i,
                      alwaysMeasureLayout: Boolean(n) || a && c(a),
                      visualElement: this,
                      scheduleRender: () => this.scheduleRender(),
                      animationType: "string" == typeof i ? i : "both",
                      initialPromotionConfig: s,
                      layoutScroll: l,
                      layoutRoot: u
                   })
                }
                return a
             }
             updateFeatures() {
                for (let t in this.features) {
                   let e = this.features[t];
                   e.isMounted ? e.update(this.props, this.prevProps) : (e.mount(), e.isMounted = !0)
                }
             }
             triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
             }
             measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
                   x: {
                      min: 0,
                      max: 0
                   },
                   y: {
                      min: 0,
                      max: 0
                   }
                }
             }
             getStaticValue(t) {
                return this.latestValues[t]
             }
             setStaticValue(t, e) {
                this.latestValues[t] = e
             }
             makeTargetAnimatable(t, e = !0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
             }
             update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                for (let e = 0; e < bs.length; e++) {
                   let i = bs[e];
                   this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                   let n = t["on" + i];
                   n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function (t, e, i) {
                   let {
                      willChange: n
                   } = e;
                   for (let r in e) {
                      let s = e[r],
                         o = i[r];
                      if (L(s)) t.addValue(r, s), Hi(n) && n.add(r);
                      else if (L(o)) t.addValue(r, Ki(s, {
                         owner: t
                      })), Hi(n) && n.remove(r);
                      else if (o !== s)
                         if (t.hasValue(r)) {
                            let e = t.getValue(r);
                            e.hasAnimated || e.set(s)
                         } else {
                            let e = t.getStaticValue(r);
                            t.addValue(r, Ki(void 0 !== e ? e : s, {
                               owner: t
                            }))
                         }
                   }
                   for (let n in i) void 0 === e[n] && t.removeValue(n);
                   return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
             }
             getProps() {
                return this.props
             }
             getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
             }
             getDefaultTransition() {
                return this.props.transition
             }
             getTransformPagePoint() {
                return this.props.transformPagePoint
             }
             getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
             }
             getVariantContext(t = !1) {
                if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                   let t = this.parent && this.parent.getVariantContext() || {};
                   return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                }
                let e = {};
                for (let t = 0; t < Ts; t++) {
                   let i = f[t],
                      n = this.props[i];
                   (d(n) || !1 === n) && (e[i] = n)
                }
                return e
             }
             addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
             }
             addValue(t, e) {
                e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
             }
             removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
             }
             hasValue(t) {
                return this.values.has(t)
             }
             getValue(t, e) {
                if (this.props.values && this.props.values[t]) return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = Ki(e, {
                   owner: this
                }), this.addValue(t, i)), i
             }
             readValue(t) {
                return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
             }
             setBaseTarget(t, e) {
                this.baseTarget[t] = e
             }
             getBaseTarget(t) {
                var e;
                let {
                   initial: i
                } = this.props, n = "string" == typeof i || "object" == typeof i ? null === (e = St(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                if (i && void 0 !== n) return n;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || L(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
             }
             on(t, e) {
                return this.events[t] || (this.events[t] = new Zi), this.events[t].add(e)
             }
             notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
             }
          } {
             sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
             }
             getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
             }
             removeValueFromRenderState(t, {
                vars: e,
                style: i
             }) {
                delete e[t], delete i[t]
             }
             makeTargetAnimatableFromInstance({
                transition: t,
                transitionEnd: e,
                ...i
             }, {
                transformValues: n
             }, r) {
                let s = function (t, e, i) {
                   let n = {};
                   for (let r in t) {
                      let t = sn(r, e);
                      if (void 0 !== t) n[r] = t;
                      else {
                         let t = i.getValue(r);
                         t && (n[r] = t.get())
                      }
                   }
                   return n
                }(i, t || {}, this);
                if (n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r) {
                   ! function (t, e, i) {
                      var n, r;
                      let s = Object.keys(e).filter((e => !t.hasValue(e))),
                         o = s.length;
                      if (o)
                         for (let a = 0; a < o; a++) {
                            let o = s[a],
                               l = e[o],
                               u = null;
                            Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (n = i[o]) && void 0 !== n ? n : t.readValue(o)) && void 0 !== r ? r : e[o]), null != u && ("string" == typeof u && (Yi(u) || Xi(u)) ? u = parseFloat(u) : !nn(u) && si.test(l) && (u = Ui(o, l)), t.addValue(o, Ki(u, {
                               owner: t
                            })), void 0 === i[o] && (i[o] = u), null !== u && t.setBaseTarget(o, u))
                         }
                   }(this, i, s);
                   let t = fs(this, i, s, e);
                   e = t.transitionEnd, i = t.target
                }
                return {
                   transition: t,
                   transitionEnd: e,
                   ...i
                }
             }
          }
          class Ss extends ws {
             readValueFromInstance(t, e) {
                if (R.has(e)) {
                   let t = Ii(e);
                   return t && t.default || 0
                } {
                   var i;
                   let n = (i = t, window.getComputedStyle(i)),
                      r = (O(e) ? n.getPropertyValue(e) : n[e]) || 0;
                   return "string" == typeof r ? r.trim() : r
                }
             }
             measureInstanceViewportBox(t, {
                transformPagePoint: e
             }) {
                return Kn(t, e)
             }
             build(t, e, i, n) {
                rt(t, e, i, n.transformTemplate)
             }
             scrapeMotionValuesFromProps(t, e) {
                return Tt(t, e)
             }
             handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                let {
                   children: t
                } = this.props;
                L(t) && (this.childSubscription = t.on("change", (t => {
                   this.current && (this.current.textContent = `${t}`)
                })))
             }
             renderInstance(t, e, i, n) {
                xt(t, e, i, n)
             }
          }
          class As extends ws {
             constructor() {
                super(...arguments), this.isSVGTag = !1
             }
             getBaseTargetFromProps(t, e) {
                return t[e]
             }
             readValueFromInstance(t, e) {
                if (R.has(e)) {
                   let t = Ii(e);
                   return t && t.default || 0
                }
                return e = Pt.has(e) ? e : vt(e), t.getAttribute(e)
             }
             measureInstanceViewportBox() {
                return {
                   x: {
                      min: 0,
                      max: 0
                   },
                   y: {
                      min: 0,
                      max: 0
                   }
                }
             }
             scrapeMotionValuesFromProps(t, e) {
                return wt(t, e)
             }
             build(t, e, i, n) {
                mt(t, e, i, this.isSVGTag, n.transformTemplate)
             }
             renderInstance(t, e, i, n) {
                bt(t, e, 0, n)
             }
             mount(t) {
                this.isSVGTag = gt(t.tagName), super.mount(t)
             }
          }
          let Es = (t, e) => C(t) ? new As(e, {
                enableHardwareAcceleration: !1
             }) : new Ss(e, {
                enableHardwareAcceleration: !0
             }),
             Vs = {
                ...fn,
                ...le,
                ...ss,
                layout: {
                   ProjectionNode: rs,
                   MeasureLayout: lr
                }
             },
             Cs = function (t) {
                function e(t, e = {}) {
                   return function ({
                      preloadedFeatures: t,
                      createVisualElement: e,
                      useRender: i,
                      useVisualState: n,
                      Component: p
                   }) {
                      t && function (t) {
                         for (let e in t) P[e] = {
                            ...P[e],
                            ...t[e]
                         }
                      }(t);
                      let m = (0, r.forwardRef)((function (m, f) {
                         var y, x, P;
                         let E, V = {
                               ...(0, r.useContext)(s),
                               ...m,
                               layoutId: function ({
                                  layoutId: t
                               }) {
                                  let e = (0, r.useContext)(S).id;
                                  return e && void 0 !== t ? e + "-" + t : t
                               }(m)
                            },
                            {
                               isStatic: C
                            } = V,
                            M = function (t) {
                               let {
                                  initial: e,
                                  animate: i
                               } = function (t, e) {
                                  if (g(t)) {
                                     let {
                                        initial: e,
                                        animate: i
                                     } = t;
                                     return {
                                        initial: !1 === e || d(e) ? e : void 0,
                                        animate: d(i) ? i : void 0
                                     }
                                  }
                                  return !1 !== t.inherit ? e : {}
                               }(t, (0, r.useContext)(o));
                               return (0, r.useMemo)((() => ({
                                  initial: e,
                                  animate: i
                               })), [v(e), v(i)])
                            }(m),
                            D = C ? void 0 : b((() => {
                               if (T.hasEverUpdated) return w++
                            })),
                            R = n(m, C);
                         if (!C && l) {
                            M.visualElement = function (t, e, i, n) {
                               let {
                                  visualElement: l
                               } = (0, r.useContext)(o), c = (0, r.useContext)(h), d = (0, r.useContext)(a), p = (0, r.useContext)(s).reducedMotion, m = (0, r.useRef)();
                               n = n || c.renderer, !m.current && n && (m.current = n(t, {
                                  visualState: e,
                                  parent: l,
                                  props: i,
                                  presenceContext: d,
                                  blockInitialAnimation: !!d && !1 === d.initial,
                                  reducedMotionConfig: p
                               }));
                               let f = m.current;
                               return (0, r.useInsertionEffect)((() => {
                                  f && f.update(i, d)
                               })), u((() => {
                                  f && f.render()
                               })), (0, r.useEffect)((() => {
                                  f && f.updateFeatures()
                               })), (window.HandoffAppearAnimations ? u : r.useEffect)((() => {
                                  f && f.animationState && f.animationState.animateChanges()
                               })), f
                            }(p, R, V, e);
                            let i = (0, r.useContext)(A),
                               n = (0, r.useContext)(h).strict;
                            M.visualElement && (E = M.visualElement.loadFeatures(V, n, t, D, i))
                         }
                         return r.createElement(o.Provider, {
                            value: M
                         }, E && M.visualElement ? r.createElement(E, {
                            visualElement: M.visualElement,
                            ...V
                         }) : null, i(p, m, D, (y = R, x = M.visualElement, P = f, (0, r.useCallback)((t => {
                            t && y.mount && y.mount(t), x && (t ? x.mount(t) : x.unmount()), P && ("function" == typeof P ? P(t) : c(P) && (P.current = t))
                         }), [x])), R, C, M.visualElement))
                      }));
                      return m[E] = p, m
                   }(((t, e) => function (t, {
                      forwardMotionProps: e = !1
                   }, i, n) {
                      return {
                         ...C(t) ? Dt : Rt,
                         preloadedFeatures: i,
                         useRender: function (t = !1) {
                            return (e, i, n, s, {
                               latestValues: o
                            }, a) => {
                               let l = (C(e) ? yt : at)(i, o, a, e),
                                  u = {
                                     ... function (t, e, i) {
                                        let n = {};
                                        for (let r in t)("values" !== r || "object" != typeof t.values) && (ht(r) || !0 === i && ut(r) || !e && !ut(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                        return n
                                     }(i, "string" == typeof e, t),
                                     ...l,
                                     ref: s
                                  },
                                  {
                                     children: h
                                  } = i,
                                  c = (0, r.useMemo)((() => L(h) ? h.get() : h), [h]);
                               return n && (u["data-projection-id"] = n), (0, r.createElement)(e, {
                                  ...u,
                                  children: c
                               })
                            }
                         }(e),
                         createVisualElement: n,
                         Component: t
                      }
                   }(t, e, Vs, Es))(t, e))
                }
                if ("undefined" == typeof Proxy) return e;
                let i = new Map;
                return new Proxy(e, {
                   get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n))
                })
             }()
       }
    }
 ]);