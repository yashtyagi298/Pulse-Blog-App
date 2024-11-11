var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-g9VCox/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-g9VCox/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    __name(checkURL, "checkURL");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../../../node_modules/@prisma/client/runtime/index-browser.js
var require_index_browser = __commonJS({
  "../../../../node_modules/@prisma/client/runtime/index-browser.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var de = Object.defineProperty;
    var We = Object.getOwnPropertyDescriptor;
    var Ge = Object.getOwnPropertyNames;
    var Je = Object.prototype.hasOwnProperty;
    var Me = /* @__PURE__ */ __name((e, n) => {
      for (var i in n)
        de(e, i, { get: n[i], enumerable: true });
    }, "Me");
    var Xe = /* @__PURE__ */ __name((e, n, i, t) => {
      if (n && typeof n == "object" || typeof n == "function")
        for (let r of Ge(n))
          !Je.call(e, r) && r !== i && de(e, r, { get: () => n[r], enumerable: !(t = We(n, r)) || t.enumerable });
      return e;
    }, "Xe");
    var Ke = /* @__PURE__ */ __name((e) => Xe(de({}, "__esModule", { value: true }), e), "Ke");
    var Xn = {};
    Me(Xn, { Decimal: () => je, Public: () => he, getRuntime: () => be, makeStrictEnum: () => Pe, objectEnumValues: () => Oe });
    module.exports = Ke(Xn);
    var he = {};
    Me(he, { validator: () => Ce });
    function Ce(...e) {
      return (n) => n;
    }
    __name(Ce, "Ce");
    var ne = Symbol();
    var pe = /* @__PURE__ */ new WeakMap();
    var ge = /* @__PURE__ */ __name(class {
      constructor(n) {
        n === ne ? pe.set(this, "Prisma.".concat(this._getName())) : pe.set(this, "new Prisma.".concat(this._getNamespace(), ".").concat(this._getName(), "()"));
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return pe.get(this);
      }
    }, "ge");
    var G = /* @__PURE__ */ __name(class extends ge {
      _getNamespace() {
        return "NullTypes";
      }
    }, "G");
    var J = /* @__PURE__ */ __name(class extends G {
    }, "J");
    me(J, "DbNull");
    var X = /* @__PURE__ */ __name(class extends G {
    }, "X");
    me(X, "JsonNull");
    var K = /* @__PURE__ */ __name(class extends G {
    }, "K");
    me(K, "AnyNull");
    var Oe = { classes: { DbNull: J, JsonNull: X, AnyNull: K }, instances: { DbNull: new J(ne), JsonNull: new X(ne), AnyNull: new K(ne) } };
    function me(e, n) {
      Object.defineProperty(e, "name", { value: n, configurable: true });
    }
    __name(me, "me");
    var xe = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Pe(e) {
      return new Proxy(e, { get(n, i) {
        if (i in n)
          return n[i];
        if (!xe.has(i))
          throw new TypeError("Invalid enum value: ".concat(String(i)));
      } });
    }
    __name(Pe, "Pe");
    var Qe = "Cloudflare-Workers";
    var Ye = "node";
    function Re() {
      var e, n, i;
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Qe ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((i = (n = globalThis.process) == null ? void 0 : n.release) == null ? void 0 : i.name) === Ye ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    __name(Re, "Re");
    var ze = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function be() {
      let e = Re();
      return { id: e, prettyName: ze[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(be, "be");
    var H = 9e15;
    var $ = 1e9;
    var we = "0123456789abcdef";
    var te = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var re = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Ne = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -H, maxE: H, crypto: false };
    var Te;
    var Z;
    var w = true;
    var oe = "[DecimalError] ";
    var V = oe + "Invalid argument: ";
    var Le = oe + "Precision limit exceeded";
    var De = oe + "crypto unavailable";
    var Fe = "[object Decimal]";
    var b = Math.floor;
    var C = Math.pow;
    var ye = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var en = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var nn = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Ie = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var D = 1e7;
    var m = 7;
    var tn = 9007199254740991;
    var rn = te.length - 1;
    var ve = re.length - 1;
    var h = { toStringTag: Fe };
    h.absoluteValue = h.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), p(e);
    };
    h.ceil = function() {
      return p(new this.constructor(this), this.e + 1, 2);
    };
    h.clampedTo = h.clamp = function(e, n) {
      var i, t = this, r = t.constructor;
      if (e = new r(e), n = new r(n), !e.s || !n.s)
        return new r(NaN);
      if (e.gt(n))
        throw Error(V + n);
      return i = t.cmp(e), i < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
    };
    h.comparedTo = h.cmp = function(e) {
      var n, i, t, r, s = this, o = s.d, u = (e = new s.constructor(e)).d, l = s.s, f = e.s;
      if (!o || !u)
        return !l || !f ? NaN : l !== f ? l : o === u ? 0 : !o ^ l < 0 ? 1 : -1;
      if (!o[0] || !u[0])
        return o[0] ? l : u[0] ? -f : 0;
      if (l !== f)
        return l;
      if (s.e !== e.e)
        return s.e > e.e ^ l < 0 ? 1 : -1;
      for (t = o.length, r = u.length, n = 0, i = t < r ? t : r; n < i; ++n)
        if (o[n] !== u[n])
          return o[n] > u[n] ^ l < 0 ? 1 : -1;
      return t === r ? 0 : t > r ^ l < 0 ? 1 : -1;
    };
    h.cosine = h.cos = function() {
      var e, n, i = this, t = i.constructor;
      return i.d ? i.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(i.e, i.sd()) + m, t.rounding = 1, i = sn(t, $e(t, i)), t.precision = e, t.rounding = n, p(Z == 2 || Z == 3 ? i.neg() : i, e, n, true)) : new t(1) : new t(NaN);
    };
    h.cubeRoot = h.cbrt = function() {
      var e, n, i, t, r, s, o, u, l, f, c = this, a = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new a(c);
      for (w = false, s = c.s * C(c.s * c, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (i = O(c.d), e = c.e, (s = (e - i.length + 1) % 3) && (i += s == 1 || s == -2 ? "0" : "00"), s = C(i, 1 / 3), e = b((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? i = "5e" + e : (i = s.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + e), t = new a(i), t.s = c.s) : t = new a(s.toString()), o = (e = a.precision) + 3; ; )
        if (u = t, l = u.times(u).times(u), f = l.plus(c), t = S(f.plus(c).times(u), f.plus(l), o + 2, 1), O(u.d).slice(0, o) === (i = O(t.d)).slice(0, o))
          if (i = i.slice(o - 3, o + 1), i == "9999" || !r && i == "4999") {
            if (!r && (p(u, e + 1, 0), u.times(u).times(u).eq(c))) {
              t = u;
              break;
            }
            o += 4, r = 1;
          } else {
            (!+i || !+i.slice(1) && i.charAt(0) == "5") && (p(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
            break;
          }
      return w = true, p(t, e, a.rounding, n);
    };
    h.decimalPlaces = h.dp = function() {
      var e, n = this.d, i = NaN;
      if (n) {
        if (e = n.length - 1, i = (e - b(this.e / m)) * m, e = n[e], e)
          for (; e % 10 == 0; e /= 10)
            i--;
        i < 0 && (i = 0);
      }
      return i;
    };
    h.dividedBy = h.div = function(e) {
      return S(this, new this.constructor(e));
    };
    h.dividedToIntegerBy = h.divToInt = function(e) {
      var n = this, i = n.constructor;
      return p(S(n, new i(e), 0, 1, 1), i.precision, i.rounding);
    };
    h.equals = h.eq = function(e) {
      return this.cmp(e) === 0;
    };
    h.floor = function() {
      return p(new this.constructor(this), this.e + 1, 3);
    };
    h.greaterThan = h.gt = function(e) {
      return this.cmp(e) > 0;
    };
    h.greaterThanOrEqualTo = h.gte = function(e) {
      var n = this.cmp(e);
      return n == 1 || n === 0;
    };
    h.hyperbolicCosine = h.cosh = function() {
      var e, n, i, t, r, s = this, o = s.constructor, u = new o(1);
      if (!s.isFinite())
        return new o(s.s ? 1 / 0 : NaN);
      if (s.isZero())
        return u;
      i = o.precision, t = o.rounding, o.precision = i + Math.max(s.e, s.sd()) + 4, o.rounding = 1, r = s.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / fe(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), s = j(o, 1, s.times(n), new o(1), true);
      for (var l, f = e, c = new o(8); f--; )
        l = s.times(s), s = u.minus(l.times(c.minus(l.times(c))));
      return p(s, o.precision = i, o.rounding = t, true);
    };
    h.hyperbolicSine = h.sinh = function() {
      var e, n, i, t, r = this, s = r.constructor;
      if (!r.isFinite() || r.isZero())
        return new s(r);
      if (n = s.precision, i = s.rounding, s.precision = n + Math.max(r.e, r.sd()) + 4, s.rounding = 1, t = r.d.length, t < 3)
        r = j(s, 2, r, r, true);
      else {
        e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / fe(5, e)), r = j(s, 2, r, r, true);
        for (var o, u = new s(5), l = new s(16), f = new s(20); e--; )
          o = r.times(r), r = r.times(u.plus(o.times(l.times(o).plus(f))));
      }
      return s.precision = n, s.rounding = i, p(r, n, i, true);
    };
    h.hyperbolicTangent = h.tanh = function() {
      var e, n, i = this, t = i.constructor;
      return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, S(i.sinh(), i.cosh(), t.precision = e, t.rounding = n)) : new t(i.s);
    };
    h.inverseCosine = h.acos = function() {
      var e, n = this, i = n.constructor, t = n.abs().cmp(1), r = i.precision, s = i.rounding;
      return t !== -1 ? t === 0 ? n.isNeg() ? L(i, r, s) : new i(0) : new i(NaN) : n.isZero() ? L(i, r + 4, s).times(0.5) : (i.precision = r + 6, i.rounding = 1, n = n.asin(), e = L(i, r + 4, s).times(0.5), i.precision = r, i.rounding = s, e.minus(n));
    };
    h.inverseHyperbolicCosine = h.acosh = function() {
      var e, n, i = this, t = i.constructor;
      return i.lte(1) ? new t(i.eq(1) ? 0 : NaN) : i.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4, t.rounding = 1, w = false, i = i.times(i).minus(1).sqrt().plus(i), w = true, t.precision = e, t.rounding = n, i.ln()) : new t(i);
    };
    h.inverseHyperbolicSine = h.asinh = function() {
      var e, n, i = this, t = i.constructor;
      return !i.isFinite() || i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, t.rounding = 1, w = false, i = i.times(i).plus(1).sqrt().plus(i), w = true, t.precision = e, t.rounding = n, i.ln());
    };
    h.inverseHyperbolicTangent = h.atanh = function() {
      var e, n, i, t, r = this, s = r.constructor;
      return r.isFinite() ? r.e >= 0 ? new s(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = s.precision, n = s.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? p(new s(r), e, n, true) : (s.precision = i = t - r.e, r = S(r.plus(1), new s(1).minus(r), i + e, 1), s.precision = e + 4, s.rounding = 1, r = r.ln(), s.precision = e, s.rounding = n, r.times(0.5))) : new s(NaN);
    };
    h.inverseSine = h.asin = function() {
      var e, n, i, t, r = this, s = r.constructor;
      return r.isZero() ? new s(r) : (n = r.abs().cmp(1), i = s.precision, t = s.rounding, n !== -1 ? n === 0 ? (e = L(s, i + 4, t).times(0.5), e.s = r.s, e) : new s(NaN) : (s.precision = i + 6, s.rounding = 1, r = r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(), s.precision = i, s.rounding = t, r.times(2)));
    };
    h.inverseTangent = h.atan = function() {
      var e, n, i, t, r, s, o, u, l, f = this, c = f.constructor, a = c.precision, d = c.rounding;
      if (f.isFinite()) {
        if (f.isZero())
          return new c(f);
        if (f.abs().eq(1) && a + 4 <= ve)
          return o = L(c, a + 4, d).times(0.25), o.s = f.s, o;
      } else {
        if (!f.s)
          return new c(NaN);
        if (a + 4 <= ve)
          return o = L(c, a + 4, d).times(0.5), o.s = f.s, o;
      }
      for (c.precision = u = a + 10, c.rounding = 1, i = Math.min(28, u / m + 2 | 0), e = i; e; --e)
        f = f.div(f.times(f).plus(1).sqrt().plus(1));
      for (w = false, n = Math.ceil(u / m), t = 1, l = f.times(f), o = new c(f), r = f; e !== -1; )
        if (r = r.times(l), s = o.minus(r.div(t += 2)), r = r.times(l), o = s.plus(r.div(t += 2)), o.d[n] !== void 0)
          for (e = n; o.d[e] === s.d[e] && e--; )
            ;
      return i && (o = o.times(2 << i - 1)), w = true, p(o, c.precision = a, c.rounding = d, true);
    };
    h.isFinite = function() {
      return !!this.d;
    };
    h.isInteger = h.isInt = function() {
      return !!this.d && b(this.e / m) > this.d.length - 2;
    };
    h.isNaN = function() {
      return !this.s;
    };
    h.isNegative = h.isNeg = function() {
      return this.s < 0;
    };
    h.isPositive = h.isPos = function() {
      return this.s > 0;
    };
    h.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    h.lessThan = h.lt = function(e) {
      return this.cmp(e) < 0;
    };
    h.lessThanOrEqualTo = h.lte = function(e) {
      return this.cmp(e) < 1;
    };
    h.logarithm = h.log = function(e) {
      var n, i, t, r, s, o, u, l, f = this, c = f.constructor, a = c.precision, d = c.rounding, g = 5;
      if (e == null)
        e = new c(10), n = true;
      else {
        if (e = new c(e), i = e.d, e.s < 0 || !i || !i[0] || e.eq(1))
          return new c(NaN);
        n = e.eq(10);
      }
      if (i = f.d, f.s < 0 || !i || !i[0] || f.eq(1))
        return new c(i && !i[0] ? -1 / 0 : f.s != 1 ? NaN : i ? 0 : 1 / 0);
      if (n)
        if (i.length > 1)
          s = true;
        else {
          for (r = i[0]; r % 10 === 0; )
            r /= 10;
          s = r !== 1;
        }
      if (w = false, u = a + g, o = B(f, u), t = n ? se(c, u + 10) : B(e, u), l = S(o, t, u, 1), x(l.d, r = a, d))
        do
          if (u += 10, o = B(f, u), t = n ? se(c, u + 10) : B(e, u), l = S(o, t, u, 1), !s) {
            +O(l.d).slice(r + 1, r + 15) + 1 == 1e14 && (l = p(l, a + 1, 0));
            break;
          }
        while (x(l.d, r += 10, d));
      return w = true, p(l, a, d);
    };
    h.minus = h.sub = function(e) {
      var n, i, t, r, s, o, u, l, f, c, a, d, g = this, v = g.constructor;
      if (e = new v(e), !g.d || !e.d)
        return !g.s || !e.s ? e = new v(NaN) : g.d ? e.s = -e.s : e = new v(e.d || g.s !== e.s ? g : NaN), e;
      if (g.s != e.s)
        return e.s = -e.s, g.plus(e);
      if (f = g.d, d = e.d, u = v.precision, l = v.rounding, !f[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (f[0])
          e = new v(g);
        else
          return new v(l === 3 ? -0 : 0);
        return w ? p(e, u, l) : e;
      }
      if (i = b(e.e / m), c = b(g.e / m), f = f.slice(), s = c - i, s) {
        for (a = s < 0, a ? (n = f, s = -s, o = d.length) : (n = d, i = c, o = f.length), t = Math.max(Math.ceil(u / m), o) + 2, s > t && (s = t, n.length = 1), n.reverse(), t = s; t--; )
          n.push(0);
        n.reverse();
      } else {
        for (t = f.length, o = d.length, a = t < o, a && (o = t), t = 0; t < o; t++)
          if (f[t] != d[t]) {
            a = f[t] < d[t];
            break;
          }
        s = 0;
      }
      for (a && (n = f, f = d, d = n, e.s = -e.s), o = f.length, t = d.length - o; t > 0; --t)
        f[o++] = 0;
      for (t = d.length; t > s; ) {
        if (f[--t] < d[t]) {
          for (r = t; r && f[--r] === 0; )
            f[r] = D - 1;
          --f[r], f[t] += D;
        }
        f[t] -= d[t];
      }
      for (; f[--o] === 0; )
        f.pop();
      for (; f[0] === 0; f.shift())
        --i;
      return f[0] ? (e.d = f, e.e = ue(f, i), w ? p(e, u, l) : e) : new v(l === 3 ? -0 : 0);
    };
    h.modulo = h.mod = function(e) {
      var n, i = this, t = i.constructor;
      return e = new t(e), !i.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || i.d && !i.d[0] ? p(new t(i), t.precision, t.rounding) : (w = false, t.modulo == 9 ? (n = S(i, e.abs(), 0, 3, 1), n.s *= e.s) : n = S(i, e, 0, t.modulo, 1), n = n.times(e), w = true, i.minus(n));
    };
    h.naturalExponential = h.exp = function() {
      return Ee(this);
    };
    h.naturalLogarithm = h.ln = function() {
      return B(this);
    };
    h.negated = h.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, p(e);
    };
    h.plus = h.add = function(e) {
      var n, i, t, r, s, o, u, l, f, c, a = this, d = a.constructor;
      if (e = new d(e), !a.d || !e.d)
        return !a.s || !e.s ? e = new d(NaN) : a.d || (e = new d(e.d || a.s === e.s ? a : NaN)), e;
      if (a.s != e.s)
        return e.s = -e.s, a.minus(e);
      if (f = a.d, c = e.d, u = d.precision, l = d.rounding, !f[0] || !c[0])
        return c[0] || (e = new d(a)), w ? p(e, u, l) : e;
      if (s = b(a.e / m), t = b(e.e / m), f = f.slice(), r = s - t, r) {
        for (r < 0 ? (i = f, r = -r, o = c.length) : (i = c, t = s, o = f.length), s = Math.ceil(u / m), o = s > o ? s + 1 : o + 1, r > o && (r = o, i.length = 1), i.reverse(); r--; )
          i.push(0);
        i.reverse();
      }
      for (o = f.length, r = c.length, o - r < 0 && (r = o, i = c, c = f, f = i), n = 0; r; )
        n = (f[--r] = f[r] + c[r] + n) / D | 0, f[r] %= D;
      for (n && (f.unshift(n), ++t), o = f.length; f[--o] == 0; )
        f.pop();
      return e.d = f, e.e = ue(f, t), w ? p(e, u, l) : e;
    };
    h.precision = h.sd = function(e) {
      var n, i = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(V + e);
      return i.d ? (n = Ze(i.d), e && i.e + 1 > n && (n = i.e + 1)) : n = NaN, n;
    };
    h.round = function() {
      var e = this, n = e.constructor;
      return p(new n(e), e.e + 1, n.rounding);
    };
    h.sine = h.sin = function() {
      var e, n, i = this, t = i.constructor;
      return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(i.e, i.sd()) + m, t.rounding = 1, i = un(t, $e(t, i)), t.precision = e, t.rounding = n, p(Z > 2 ? i.neg() : i, e, n, true)) : new t(NaN);
    };
    h.squareRoot = h.sqrt = function() {
      var e, n, i, t, r, s, o = this, u = o.d, l = o.e, f = o.s, c = o.constructor;
      if (f !== 1 || !u || !u[0])
        return new c(!f || f < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
      for (w = false, f = Math.sqrt(+o), f == 0 || f == 1 / 0 ? (n = O(u), (n.length + l) % 2 == 0 && (n += "0"), f = Math.sqrt(n), l = b((l + 1) / 2) - (l < 0 || l % 2), f == 1 / 0 ? n = "5e" + l : (n = f.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + l), t = new c(n)) : t = new c(f.toString()), i = (l = c.precision) + 3; ; )
        if (s = t, t = s.plus(S(o, s, i + 2, 1)).times(0.5), O(s.d).slice(0, i) === (n = O(t.d)).slice(0, i))
          if (n = n.slice(i - 3, i + 1), n == "9999" || !r && n == "4999") {
            if (!r && (p(s, l + 1, 0), s.times(s).eq(o))) {
              t = s;
              break;
            }
            i += 4, r = 1;
          } else {
            (!+n || !+n.slice(1) && n.charAt(0) == "5") && (p(t, l + 1, 1), e = !t.times(t).eq(o));
            break;
          }
      return w = true, p(t, l, c.rounding, e);
    };
    h.tangent = h.tan = function() {
      var e, n, i = this, t = i.constructor;
      return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, i = i.sin(), i.s = 1, i = S(i, new t(1).minus(i.times(i)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, p(Z == 2 || Z == 4 ? i.neg() : i, e, n, true)) : new t(NaN);
    };
    h.times = h.mul = function(e) {
      var n, i, t, r, s, o, u, l, f, c = this, a = c.constructor, d = c.d, g = (e = new a(e)).d;
      if (e.s *= c.s, !d || !d[0] || !g || !g[0])
        return new a(!e.s || d && !d[0] && !g || g && !g[0] && !d ? NaN : !d || !g ? e.s / 0 : e.s * 0);
      for (i = b(c.e / m) + b(e.e / m), l = d.length, f = g.length, l < f && (s = d, d = g, g = s, o = l, l = f, f = o), s = [], o = l + f, t = o; t--; )
        s.push(0);
      for (t = f; --t >= 0; ) {
        for (n = 0, r = l + t; r > t; )
          u = s[r] + g[t] * d[r - t - 1] + n, s[r--] = u % D | 0, n = u / D | 0;
        s[r] = (s[r] + n) % D | 0;
      }
      for (; !s[--o]; )
        s.pop();
      return n ? ++i : s.shift(), e.d = s, e.e = ue(s, i), w ? p(e, a.precision, a.rounding) : e;
    };
    h.toBinary = function(e, n) {
      return ke(this, 2, e, n);
    };
    h.toDecimalPlaces = h.toDP = function(e, n) {
      var i = this, t = i.constructor;
      return i = new t(i), e === void 0 ? i : (_(e, 0, $), n === void 0 ? n = t.rounding : _(n, 0, 8), p(i, e + i.e + 1, n));
    };
    h.toExponential = function(e, n) {
      var i, t = this, r = t.constructor;
      return e === void 0 ? i = F(t, true) : (_(e, 0, $), n === void 0 ? n = r.rounding : _(n, 0, 8), t = p(new r(t), e + 1, n), i = F(t, true, e + 1)), t.isNeg() && !t.isZero() ? "-" + i : i;
    };
    h.toFixed = function(e, n) {
      var i, t, r = this, s = r.constructor;
      return e === void 0 ? i = F(r) : (_(e, 0, $), n === void 0 ? n = s.rounding : _(n, 0, 8), t = p(new s(r), e + r.e + 1, n), i = F(t, false, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + i : i;
    };
    h.toFraction = function(e) {
      var n, i, t, r, s, o, u, l, f, c, a, d, g = this, v = g.d, N = g.constructor;
      if (!v)
        return new N(g);
      if (f = i = new N(1), t = l = new N(0), n = new N(t), s = n.e = Ze(v) - g.e - 1, o = s % m, n.d[0] = C(10, o < 0 ? m + o : o), e == null)
        e = s > 0 ? n : f;
      else {
        if (u = new N(e), !u.isInt() || u.lt(f))
          throw Error(V + u);
        e = u.gt(n) ? s > 0 ? n : f : u;
      }
      for (w = false, u = new N(O(v)), c = N.precision, N.precision = s = v.length * m * 2; a = S(u, n, 0, 1, 1), r = i.plus(a.times(t)), r.cmp(e) != 1; )
        i = t, t = r, r = f, f = l.plus(a.times(r)), l = r, r = n, n = u.minus(a.times(r)), u = r;
      return r = S(e.minus(i), t, 0, 1, 1), l = l.plus(r.times(f)), i = i.plus(r.times(t)), l.s = f.s = g.s, d = S(f, t, s, 1).minus(g).abs().cmp(S(l, i, s, 1).minus(g).abs()) < 1 ? [f, t] : [l, i], N.precision = c, w = true, d;
    };
    h.toHexadecimal = h.toHex = function(e, n) {
      return ke(this, 16, e, n);
    };
    h.toNearest = function(e, n) {
      var i = this, t = i.constructor;
      if (i = new t(i), e == null) {
        if (!i.d)
          return i;
        e = new t(1), n = t.rounding;
      } else {
        if (e = new t(e), n === void 0 ? n = t.rounding : _(n, 0, 8), !i.d)
          return e.s ? i : e;
        if (!e.d)
          return e.s && (e.s = i.s), e;
      }
      return e.d[0] ? (w = false, i = S(i, e, 0, n, 1).times(e), w = true, p(i)) : (e.s = i.s, i = e), i;
    };
    h.toNumber = function() {
      return +this;
    };
    h.toOctal = function(e, n) {
      return ke(this, 8, e, n);
    };
    h.toPower = h.pow = function(e) {
      var n, i, t, r, s, o, u = this, l = u.constructor, f = +(e = new l(e));
      if (!u.d || !e.d || !u.d[0] || !e.d[0])
        return new l(C(+u, f));
      if (u = new l(u), u.eq(1))
        return u;
      if (t = l.precision, s = l.rounding, e.eq(1))
        return p(u, t, s);
      if (n = b(e.e / m), n >= e.d.length - 1 && (i = f < 0 ? -f : f) <= tn)
        return r = Ue(l, u, i, t), e.s < 0 ? new l(1).div(r) : p(r, t, s);
      if (o = u.s, o < 0) {
        if (n < e.d.length - 1)
          return new l(NaN);
        if (e.d[n] & 1 || (o = 1), u.e == 0 && u.d[0] == 1 && u.d.length == 1)
          return u.s = o, u;
      }
      return i = C(+u, f), n = i == 0 || !isFinite(i) ? b(f * (Math.log("0." + O(u.d)) / Math.LN10 + u.e + 1)) : new l(i + "").e, n > l.maxE + 1 || n < l.minE - 1 ? new l(n > 0 ? o / 0 : 0) : (w = false, l.rounding = u.s = 1, i = Math.min(12, (n + "").length), r = Ee(e.times(B(u, t + i)), t), r.d && (r = p(r, t + 5, 1), x(r.d, t, s) && (n = t + 10, r = p(Ee(e.times(B(u, n + i)), n), n + 5, 1), +O(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = p(r, t + 1, 0)))), r.s = o, w = true, l.rounding = s, p(r, t, s));
    };
    h.toPrecision = function(e, n) {
      var i, t = this, r = t.constructor;
      return e === void 0 ? i = F(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (_(e, 1, $), n === void 0 ? n = r.rounding : _(n, 0, 8), t = p(new r(t), e, n), i = F(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + i : i;
    };
    h.toSignificantDigits = h.toSD = function(e, n) {
      var i = this, t = i.constructor;
      return e === void 0 ? (e = t.precision, n = t.rounding) : (_(e, 1, $), n === void 0 ? n = t.rounding : _(n, 0, 8)), p(new t(i), e, n);
    };
    h.toString = function() {
      var e = this, n = e.constructor, i = F(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + i : i;
    };
    h.truncated = h.trunc = function() {
      return p(new this.constructor(this), this.e + 1, 1);
    };
    h.valueOf = h.toJSON = function() {
      var e = this, n = e.constructor, i = F(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
      return e.isNeg() ? "-" + i : i;
    };
    function O(e) {
      var n, i, t, r = e.length - 1, s = "", o = e[0];
      if (r > 0) {
        for (s += o, n = 1; n < r; n++)
          t = e[n] + "", i = m - t.length, i && (s += U(i)), s += t;
        o = e[n], t = o + "", i = m - t.length, i && (s += U(i));
      } else if (o === 0)
        return "0";
      for (; o % 10 === 0; )
        o /= 10;
      return s + o;
    }
    __name(O, "O");
    function _(e, n, i) {
      if (e !== ~~e || e < n || e > i)
        throw Error(V + e);
    }
    __name(_, "_");
    function x(e, n, i, t) {
      var r, s, o, u;
      for (s = e[0]; s >= 10; s /= 10)
        --n;
      return --n < 0 ? (n += m, r = 0) : (r = Math.ceil((n + 1) / m), n %= m), s = C(10, m - n), u = e[r] % s | 0, t == null ? n < 3 ? (n == 0 ? u = u / 100 | 0 : n == 1 && (u = u / 10 | 0), o = i < 4 && u == 99999 || i > 3 && u == 49999 || u == 5e4 || u == 0) : o = (i < 4 && u + 1 == s || i > 3 && u + 1 == s / 2) && (e[r + 1] / s / 100 | 0) == C(10, n - 2) - 1 || (u == s / 2 || u == 0) && (e[r + 1] / s / 100 | 0) == 0 : n < 4 ? (n == 0 ? u = u / 1e3 | 0 : n == 1 ? u = u / 100 | 0 : n == 2 && (u = u / 10 | 0), o = (t || i < 4) && u == 9999 || !t && i > 3 && u == 4999) : o = ((t || i < 4) && u + 1 == s || !t && i > 3 && u + 1 == s / 2) && (e[r + 1] / s / 1e3 | 0) == C(10, n - 3) - 1, o;
    }
    __name(x, "x");
    function ie(e, n, i) {
      for (var t, r = [0], s, o = 0, u = e.length; o < u; ) {
        for (s = r.length; s--; )
          r[s] *= n;
        for (r[0] += we.indexOf(e.charAt(o++)), t = 0; t < r.length; t++)
          r[t] > i - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / i | 0, r[t] %= i);
      }
      return r.reverse();
    }
    __name(ie, "ie");
    function sn(e, n) {
      var i, t, r;
      if (n.isZero())
        return n;
      t = n.d.length, t < 32 ? (i = Math.ceil(t / 3), r = (1 / fe(4, i)).toString()) : (i = 16, r = "2.3283064365386962890625e-10"), e.precision += i, n = j(e, 1, n.times(r), new e(1));
      for (var s = i; s--; ) {
        var o = n.times(n);
        n = o.times(o).minus(o).times(8).plus(1);
      }
      return e.precision -= i, n;
    }
    __name(sn, "sn");
    var S = function() {
      function e(t, r, s) {
        var o, u = 0, l = t.length;
        for (t = t.slice(); l--; )
          o = t[l] * r + u, t[l] = o % s | 0, u = o / s | 0;
        return u && t.unshift(u), t;
      }
      __name(e, "e");
      function n(t, r, s, o) {
        var u, l;
        if (s != o)
          l = s > o ? 1 : -1;
        else
          for (u = l = 0; u < s; u++)
            if (t[u] != r[u]) {
              l = t[u] > r[u] ? 1 : -1;
              break;
            }
        return l;
      }
      __name(n, "n");
      function i(t, r, s, o) {
        for (var u = 0; s--; )
          t[s] -= u, u = t[s] < r[s] ? 1 : 0, t[s] = u * o + t[s] - r[s];
        for (; !t[0] && t.length > 1; )
          t.shift();
      }
      __name(i, "i");
      return function(t, r, s, o, u, l) {
        var f, c, a, d, g, v, N, A, M, q, E, P, Y, I, le, z, W, ce, T, y, ee = t.constructor, ae = t.s == r.s ? 1 : -1, R = t.d, k = r.d;
        if (!R || !R[0] || !k || !k[0])
          return new ee(!t.s || !r.s || (R ? k && R[0] == k[0] : !k) ? NaN : R && R[0] == 0 || !k ? ae * 0 : ae / 0);
        for (l ? (g = 1, c = t.e - r.e) : (l = D, g = m, c = b(t.e / g) - b(r.e / g)), T = k.length, W = R.length, M = new ee(ae), q = M.d = [], a = 0; k[a] == (R[a] || 0); a++)
          ;
        if (k[a] > (R[a] || 0) && c--, s == null ? (I = s = ee.precision, o = ee.rounding) : u ? I = s + (t.e - r.e) + 1 : I = s, I < 0)
          q.push(1), v = true;
        else {
          if (I = I / g + 2 | 0, a = 0, T == 1) {
            for (d = 0, k = k[0], I++; (a < W || d) && I--; a++)
              le = d * l + (R[a] || 0), q[a] = le / k | 0, d = le % k | 0;
            v = d || a < W;
          } else {
            for (d = l / (k[0] + 1) | 0, d > 1 && (k = e(k, d, l), R = e(R, d, l), T = k.length, W = R.length), z = T, E = R.slice(0, T), P = E.length; P < T; )
              E[P++] = 0;
            y = k.slice(), y.unshift(0), ce = k[0], k[1] >= l / 2 && ++ce;
            do
              d = 0, f = n(k, E, T, P), f < 0 ? (Y = E[0], T != P && (Y = Y * l + (E[1] || 0)), d = Y / ce | 0, d > 1 ? (d >= l && (d = l - 1), N = e(k, d, l), A = N.length, P = E.length, f = n(N, E, A, P), f == 1 && (d--, i(N, T < A ? y : k, A, l))) : (d == 0 && (f = d = 1), N = k.slice()), A = N.length, A < P && N.unshift(0), i(E, N, P, l), f == -1 && (P = E.length, f = n(k, E, T, P), f < 1 && (d++, i(E, T < P ? y : k, P, l))), P = E.length) : f === 0 && (d++, E = [0]), q[a++] = d, f && E[0] ? E[P++] = R[z] || 0 : (E = [R[z]], P = 1);
            while ((z++ < W || E[0] !== void 0) && I--);
            v = E[0] !== void 0;
          }
          q[0] || q.shift();
        }
        if (g == 1)
          M.e = c, Te = v;
        else {
          for (a = 1, d = q[0]; d >= 10; d /= 10)
            a++;
          M.e = a + c * g - 1, p(M, u ? s + M.e + 1 : s, o, v);
        }
        return M;
      };
    }();
    function p(e, n, i, t) {
      var r, s, o, u, l, f, c, a, d, g = e.constructor;
      e:
        if (n != null) {
          if (a = e.d, !a)
            return e;
          for (r = 1, u = a[0]; u >= 10; u /= 10)
            r++;
          if (s = n - r, s < 0)
            s += m, o = n, c = a[d = 0], l = c / C(10, r - o - 1) % 10 | 0;
          else if (d = Math.ceil((s + 1) / m), u = a.length, d >= u)
            if (t) {
              for (; u++ <= d; )
                a.push(0);
              c = l = 0, r = 1, s %= m, o = s - m + 1;
            } else
              break e;
          else {
            for (c = u = a[d], r = 1; u >= 10; u /= 10)
              r++;
            s %= m, o = s - m + r, l = o < 0 ? 0 : c / C(10, r - o - 1) % 10 | 0;
          }
          if (t = t || n < 0 || a[d + 1] !== void 0 || (o < 0 ? c : c % C(10, r - o - 1)), f = i < 4 ? (l || t) && (i == 0 || i == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (i == 4 || t || i == 6 && (s > 0 ? o > 0 ? c / C(10, r - o) : 0 : a[d - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), n < 1 || !a[0])
            return a.length = 0, f ? (n -= e.e + 1, a[0] = C(10, (m - n % m) % m), e.e = -n || 0) : a[0] = e.e = 0, e;
          if (s == 0 ? (a.length = d, u = 1, d--) : (a.length = d + 1, u = C(10, m - s), a[d] = o > 0 ? (c / C(10, r - o) % C(10, o) | 0) * u : 0), f)
            for (; ; )
              if (d == 0) {
                for (s = 1, o = a[0]; o >= 10; o /= 10)
                  s++;
                for (o = a[0] += u, u = 1; o >= 10; o /= 10)
                  u++;
                s != u && (e.e++, a[0] == D && (a[0] = 1));
                break;
              } else {
                if (a[d] += u, a[d] != D)
                  break;
                a[d--] = 0, u = 1;
              }
          for (s = a.length; a[--s] === 0; )
            a.pop();
        }
      return w && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(p, "p");
    function F(e, n, i) {
      if (!e.isFinite())
        return Ve(e);
      var t, r = e.e, s = O(e.d), o = s.length;
      return n ? (i && (t = i - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + U(t) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (s = "0." + U(-r - 1) + s, i && (t = i - o) > 0 && (s += U(t))) : r >= o ? (s += U(r + 1 - o), i && (t = i - r - 1) > 0 && (s = s + "." + U(t))) : ((t = r + 1) < o && (s = s.slice(0, t) + "." + s.slice(t)), i && (t = i - o) > 0 && (r + 1 === o && (s += "."), s += U(t))), s;
    }
    __name(F, "F");
    function ue(e, n) {
      var i = e[0];
      for (n *= m; i >= 10; i /= 10)
        n++;
      return n;
    }
    __name(ue, "ue");
    function se(e, n, i) {
      if (n > rn)
        throw w = true, i && (e.precision = i), Error(Le);
      return p(new e(te), n, 1, true);
    }
    __name(se, "se");
    function L(e, n, i) {
      if (n > ve)
        throw Error(Le);
      return p(new e(re), n, i, true);
    }
    __name(L, "L");
    function Ze(e) {
      var n = e.length - 1, i = n * m + 1;
      if (n = e[n], n) {
        for (; n % 10 == 0; n /= 10)
          i--;
        for (n = e[0]; n >= 10; n /= 10)
          i++;
      }
      return i;
    }
    __name(Ze, "Ze");
    function U(e) {
      for (var n = ""; e--; )
        n += "0";
      return n;
    }
    __name(U, "U");
    function Ue(e, n, i, t) {
      var r, s = new e(1), o = Math.ceil(t / m + 4);
      for (w = false; ; ) {
        if (i % 2 && (s = s.times(n), _e(s.d, o) && (r = true)), i = b(i / 2), i === 0) {
          i = s.d.length - 1, r && s.d[i] === 0 && ++s.d[i];
          break;
        }
        n = n.times(n), _e(n.d, o);
      }
      return w = true, s;
    }
    __name(Ue, "Ue");
    function Ae(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(Ae, "Ae");
    function Be(e, n, i) {
      for (var t, r = new e(n[0]), s = 0; ++s < n.length; )
        if (t = new e(n[s]), t.s)
          r[i](t) && (r = t);
        else {
          r = t;
          break;
        }
      return r;
    }
    __name(Be, "Be");
    function Ee(e, n) {
      var i, t, r, s, o, u, l, f = 0, c = 0, a = 0, d = e.constructor, g = d.rounding, v = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (n == null ? (w = false, l = v) : l = n, u = new d(0.03125); e.e > -2; )
        e = e.times(u), a += 5;
      for (t = Math.log(C(2, a)) / Math.LN10 * 2 + 5 | 0, l += t, i = s = o = new d(1), d.precision = l; ; ) {
        if (s = p(s.times(e), l, 1), i = i.times(++c), u = o.plus(S(s, i, l, 1)), O(u.d).slice(0, l) === O(o.d).slice(0, l)) {
          for (r = a; r--; )
            o = p(o.times(o), l, 1);
          if (n == null)
            if (f < 3 && x(o.d, l - t, g, f))
              d.precision = l += 10, i = s = u = new d(1), c = 0, f++;
            else
              return p(o, d.precision = v, g, w = true);
          else
            return d.precision = v, o;
        }
        o = u;
      }
    }
    __name(Ee, "Ee");
    function B(e, n) {
      var i, t, r, s, o, u, l, f, c, a, d, g = 1, v = 10, N = e, A = N.d, M = N.constructor, q = M.rounding, E = M.precision;
      if (N.s < 0 || !A || !A[0] || !N.e && A[0] == 1 && A.length == 1)
        return new M(A && !A[0] ? -1 / 0 : N.s != 1 ? NaN : A ? 0 : N);
      if (n == null ? (w = false, c = E) : c = n, M.precision = c += v, i = O(A), t = i.charAt(0), Math.abs(s = N.e) < 15e14) {
        for (; t < 7 && t != 1 || t == 1 && i.charAt(1) > 3; )
          N = N.times(e), i = O(N.d), t = i.charAt(0), g++;
        s = N.e, t > 1 ? (N = new M("0." + i), s++) : N = new M(t + "." + i.slice(1));
      } else
        return f = se(M, c + 2, E).times(s + ""), N = B(new M(t + "." + i.slice(1)), c - v).plus(f), M.precision = E, n == null ? p(N, E, q, w = true) : N;
      for (a = N, l = o = N = S(N.minus(1), N.plus(1), c, 1), d = p(N.times(N), c, 1), r = 3; ; ) {
        if (o = p(o.times(d), c, 1), f = l.plus(S(o, new M(r), c, 1)), O(f.d).slice(0, c) === O(l.d).slice(0, c))
          if (l = l.times(2), s !== 0 && (l = l.plus(se(M, c + 2, E).times(s + ""))), l = S(l, new M(g), c, 1), n == null)
            if (x(l.d, c - v, q, u))
              M.precision = c += v, f = o = N = S(a.minus(1), a.plus(1), c, 1), d = p(N.times(N), c, 1), r = u = 1;
            else
              return p(l, M.precision = E, q, w = true);
          else
            return M.precision = E, l;
        l = f, r += 2;
      }
    }
    __name(B, "B");
    function Ve(e) {
      return String(e.s * e.s / 0);
    }
    __name(Ve, "Ve");
    function Se(e, n) {
      var i, t, r;
      for ((i = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (i < 0 && (i = t), i += +n.slice(t + 1), n = n.substring(0, t)) : i < 0 && (i = n.length), t = 0; n.charCodeAt(t) === 48; t++)
        ;
      for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
        ;
      if (n = n.slice(t, r), n) {
        if (r -= t, e.e = i = i - t - 1, e.d = [], t = (i + 1) % m, i < 0 && (t += m), t < r) {
          for (t && e.d.push(+n.slice(0, t)), r -= m; t < r; )
            e.d.push(+n.slice(t, t += m));
          n = n.slice(t), t = m - n.length;
        } else
          t -= r;
        for (; t--; )
          n += "0";
        e.d.push(+n), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    __name(Se, "Se");
    function on(e, n) {
      var i, t, r, s, o, u, l, f, c;
      if (n.indexOf("_") > -1) {
        if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Ie.test(n))
          return Se(e, n);
      } else if (n === "Infinity" || n === "NaN")
        return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (en.test(n))
        i = 16, n = n.toLowerCase();
      else if (ye.test(n))
        i = 2;
      else if (nn.test(n))
        i = 8;
      else
        throw Error(V + n);
      for (s = n.search(/p/i), s > 0 ? (l = +n.slice(s + 1), n = n.substring(2, s)) : n = n.slice(2), s = n.indexOf("."), o = s >= 0, t = e.constructor, o && (n = n.replace(".", ""), u = n.length, s = u - s, r = Ue(t, new t(i), s, s * 2)), f = ie(n, i, D), c = f.length - 1, s = c; f[s] === 0; --s)
        f.pop();
      return s < 0 ? new t(e.s * 0) : (e.e = ue(f, c), e.d = f, w = false, o && (e = S(e, r, u * 4)), l && (e = e.times(Math.abs(l) < 54 ? C(2, l) : Q.pow(2, l))), w = true, e);
    }
    __name(on, "on");
    function un(e, n) {
      var i, t = n.d.length;
      if (t < 3)
        return n.isZero() ? n : j(e, 2, n, n);
      i = 1.4 * Math.sqrt(t), i = i > 16 ? 16 : i | 0, n = n.times(1 / fe(5, i)), n = j(e, 2, n, n);
      for (var r, s = new e(5), o = new e(16), u = new e(20); i--; )
        r = n.times(n), n = n.times(s.plus(r.times(o.times(r).minus(u))));
      return n;
    }
    __name(un, "un");
    function j(e, n, i, t, r) {
      var s, o, u, l, f = 1, c = e.precision, a = Math.ceil(c / m);
      for (w = false, l = i.times(i), u = new e(t); ; ) {
        if (o = S(u.times(l), new e(n++ * n++), c, 1), u = r ? t.plus(o) : t.minus(o), t = S(o.times(l), new e(n++ * n++), c, 1), o = u.plus(t), o.d[a] !== void 0) {
          for (s = a; o.d[s] === u.d[s] && s--; )
            ;
          if (s == -1)
            break;
        }
        s = u, u = t, t = o, o = s, f++;
      }
      return w = true, o.d.length = a + 1, o;
    }
    __name(j, "j");
    function fe(e, n) {
      for (var i = e; --n; )
        i *= e;
      return i;
    }
    __name(fe, "fe");
    function $e(e, n) {
      var i, t = n.s < 0, r = L(e, e.precision, 1), s = r.times(0.5);
      if (n = n.abs(), n.lte(s))
        return Z = t ? 4 : 1, n;
      if (i = n.divToInt(r), i.isZero())
        Z = t ? 3 : 2;
      else {
        if (n = n.minus(i.times(r)), n.lte(s))
          return Z = Ae(i) ? t ? 2 : 3 : t ? 4 : 1, n;
        Z = Ae(i) ? t ? 1 : 4 : t ? 3 : 2;
      }
      return n.minus(r).abs();
    }
    __name($e, "$e");
    function ke(e, n, i, t) {
      var r, s, o, u, l, f, c, a, d, g = e.constructor, v = i !== void 0;
      if (v ? (_(i, 1, $), t === void 0 ? t = g.rounding : _(t, 0, 8)) : (i = g.precision, t = g.rounding), !e.isFinite())
        c = Ve(e);
      else {
        for (c = F(e), o = c.indexOf("."), v ? (r = 2, n == 16 ? i = i * 4 - 3 : n == 8 && (i = i * 3 - 2)) : r = n, o >= 0 && (c = c.replace(".", ""), d = new g(1), d.e = c.length - o, d.d = ie(F(d), 10, r), d.e = d.d.length), a = ie(c, 10, r), s = l = a.length; a[--l] == 0; )
          a.pop();
        if (!a[0])
          c = v ? "0p+0" : "0";
        else {
          if (o < 0 ? s-- : (e = new g(e), e.d = a, e.e = s, e = S(e, d, i, t, 0, r), a = e.d, s = e.e, f = Te), o = a[i], u = r / 2, f = f || a[i + 1] !== void 0, f = t < 4 ? (o !== void 0 || f) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : o > u || o === u && (t === 4 || f || t === 6 && a[i - 1] & 1 || t === (e.s < 0 ? 8 : 7)), a.length = i, f)
            for (; ++a[--i] > r - 1; )
              a[i] = 0, i || (++s, a.unshift(1));
          for (l = a.length; !a[l - 1]; --l)
            ;
          for (o = 0, c = ""; o < l; o++)
            c += we.charAt(a[o]);
          if (v) {
            if (l > 1)
              if (n == 16 || n == 8) {
                for (o = n == 16 ? 4 : 3, --l; l % o; l++)
                  c += "0";
                for (a = ie(c, r, n), l = a.length; !a[l - 1]; --l)
                  ;
                for (o = 1, c = "1."; o < l; o++)
                  c += we.charAt(a[o]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (s < 0 ? "p" : "p+") + s;
          } else if (s < 0) {
            for (; ++s; )
              c = "0" + c;
            c = "0." + c;
          } else if (++s > l)
            for (s -= l; s--; )
              c += "0";
          else
            s < l && (c = c.slice(0, s) + "." + c.slice(s));
        }
        c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    __name(ke, "ke");
    function _e(e, n) {
      if (e.length > n)
        return e.length = n, true;
    }
    __name(_e, "_e");
    function fn(e) {
      return new this(e).abs();
    }
    __name(fn, "fn");
    function ln(e) {
      return new this(e).acos();
    }
    __name(ln, "ln");
    function cn(e) {
      return new this(e).acosh();
    }
    __name(cn, "cn");
    function an(e, n) {
      return new this(e).plus(n);
    }
    __name(an, "an");
    function dn(e) {
      return new this(e).asin();
    }
    __name(dn, "dn");
    function hn(e) {
      return new this(e).asinh();
    }
    __name(hn, "hn");
    function pn(e) {
      return new this(e).atan();
    }
    __name(pn, "pn");
    function gn(e) {
      return new this(e).atanh();
    }
    __name(gn, "gn");
    function mn(e, n) {
      e = new this(e), n = new this(n);
      var i, t = this.precision, r = this.rounding, s = t + 4;
      return !e.s || !n.s ? i = new this(NaN) : !e.d && !n.d ? (i = L(this, s, 1).times(n.s > 0 ? 0.25 : 0.75), i.s = e.s) : !n.d || e.isZero() ? (i = n.s < 0 ? L(this, t, r) : new this(0), i.s = e.s) : !e.d || n.isZero() ? (i = L(this, s, 1).times(0.5), i.s = e.s) : n.s < 0 ? (this.precision = s, this.rounding = 1, i = this.atan(S(e, n, s, 1)), n = L(this, s, 1), this.precision = t, this.rounding = r, i = e.s < 0 ? i.minus(n) : i.plus(n)) : i = this.atan(S(e, n, s, 1)), i;
    }
    __name(mn, "mn");
    function wn(e) {
      return new this(e).cbrt();
    }
    __name(wn, "wn");
    function Nn(e) {
      return p(e = new this(e), e.e + 1, 2);
    }
    __name(Nn, "Nn");
    function vn(e, n, i) {
      return new this(e).clamp(n, i);
    }
    __name(vn, "vn");
    function En(e) {
      if (!e || typeof e != "object")
        throw Error(oe + "Object expected");
      var n, i, t, r = e.defaults === true, s = ["precision", 1, $, "rounding", 0, 8, "toExpNeg", -H, 0, "toExpPos", 0, H, "maxE", 0, H, "minE", -H, 0, "modulo", 0, 9];
      for (n = 0; n < s.length; n += 3)
        if (i = s[n], r && (this[i] = Ne[i]), (t = e[i]) !== void 0)
          if (b(t) === t && t >= s[n + 1] && t <= s[n + 2])
            this[i] = t;
          else
            throw Error(V + i + ": " + t);
      if (i = "crypto", r && (this[i] = Ne[i]), (t = e[i]) !== void 0)
        if (t === true || t === false || t === 0 || t === 1)
          if (t)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[i] = true;
            else
              throw Error(De);
          else
            this[i] = false;
        else
          throw Error(V + i + ": " + t);
      return this;
    }
    __name(En, "En");
    function Sn(e) {
      return new this(e).cos();
    }
    __name(Sn, "Sn");
    function kn(e) {
      return new this(e).cosh();
    }
    __name(kn, "kn");
    function He(e) {
      var n, i, t;
      function r(s) {
        var o, u, l, f = this;
        if (!(f instanceof r))
          return new r(s);
        if (f.constructor = r, qe(s)) {
          f.s = s.s, w ? !s.d || s.e > r.maxE ? (f.e = NaN, f.d = null) : s.e < r.minE ? (f.e = 0, f.d = [0]) : (f.e = s.e, f.d = s.d.slice()) : (f.e = s.e, f.d = s.d ? s.d.slice() : s.d);
          return;
        }
        if (l = typeof s, l === "number") {
          if (s === 0) {
            f.s = 1 / s < 0 ? -1 : 1, f.e = 0, f.d = [0];
            return;
          }
          if (s < 0 ? (s = -s, f.s = -1) : f.s = 1, s === ~~s && s < 1e7) {
            for (o = 0, u = s; u >= 10; u /= 10)
              o++;
            w ? o > r.maxE ? (f.e = NaN, f.d = null) : o < r.minE ? (f.e = 0, f.d = [0]) : (f.e = o, f.d = [s]) : (f.e = o, f.d = [s]);
            return;
          } else if (s * 0 !== 0) {
            s || (f.s = NaN), f.e = NaN, f.d = null;
            return;
          }
          return Se(f, s.toString());
        } else if (l !== "string")
          throw Error(V + s);
        return (u = s.charCodeAt(0)) === 45 ? (s = s.slice(1), f.s = -1) : (u === 43 && (s = s.slice(1)), f.s = 1), Ie.test(s) ? Se(f, s) : on(f, s);
      }
      __name(r, "r");
      if (r.prototype = h, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = En, r.clone = He, r.isDecimal = qe, r.abs = fn, r.acos = ln, r.acosh = cn, r.add = an, r.asin = dn, r.asinh = hn, r.atan = pn, r.atanh = gn, r.atan2 = mn, r.cbrt = wn, r.ceil = Nn, r.clamp = vn, r.cos = Sn, r.cosh = kn, r.div = Mn, r.exp = Cn, r.floor = On, r.hypot = Pn, r.ln = Rn, r.log = bn, r.log10 = _n, r.log2 = An, r.max = qn, r.min = Tn, r.mod = Ln, r.mul = Dn, r.pow = Fn, r.random = In, r.round = Zn, r.sign = Un, r.sin = Bn, r.sinh = Vn, r.sqrt = $n, r.sub = Hn, r.sum = jn, r.tan = Wn, r.tanh = Gn, r.trunc = Jn, e === void 0 && (e = {}), e && e.defaults !== true)
        for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; )
          e.hasOwnProperty(i = t[n++]) || (e[i] = this[i]);
      return r.config(e), r;
    }
    __name(He, "He");
    function Mn(e, n) {
      return new this(e).div(n);
    }
    __name(Mn, "Mn");
    function Cn(e) {
      return new this(e).exp();
    }
    __name(Cn, "Cn");
    function On(e) {
      return p(e = new this(e), e.e + 1, 3);
    }
    __name(On, "On");
    function Pn() {
      var e, n, i = new this(0);
      for (w = false, e = 0; e < arguments.length; )
        if (n = new this(arguments[e++]), n.d)
          i.d && (i = i.plus(n.times(n)));
        else {
          if (n.s)
            return w = true, new this(1 / 0);
          i = n;
        }
      return w = true, i.sqrt();
    }
    __name(Pn, "Pn");
    function qe(e) {
      return e instanceof Q || e && e.toStringTag === Fe || false;
    }
    __name(qe, "qe");
    function Rn(e) {
      return new this(e).ln();
    }
    __name(Rn, "Rn");
    function bn(e, n) {
      return new this(e).log(n);
    }
    __name(bn, "bn");
    function An(e) {
      return new this(e).log(2);
    }
    __name(An, "An");
    function _n(e) {
      return new this(e).log(10);
    }
    __name(_n, "_n");
    function qn() {
      return Be(this, arguments, "lt");
    }
    __name(qn, "qn");
    function Tn() {
      return Be(this, arguments, "gt");
    }
    __name(Tn, "Tn");
    function Ln(e, n) {
      return new this(e).mod(n);
    }
    __name(Ln, "Ln");
    function Dn(e, n) {
      return new this(e).mul(n);
    }
    __name(Dn, "Dn");
    function Fn(e, n) {
      return new this(e).pow(n);
    }
    __name(Fn, "Fn");
    function In(e) {
      var n, i, t, r, s = 0, o = new this(1), u = [];
      if (e === void 0 ? e = this.precision : _(e, 1, $), t = Math.ceil(e / m), this.crypto)
        if (crypto.getRandomValues)
          for (n = crypto.getRandomValues(new Uint32Array(t)); s < t; )
            r = n[s], r >= 429e7 ? n[s] = crypto.getRandomValues(new Uint32Array(1))[0] : u[s++] = r % 1e7;
        else if (crypto.randomBytes) {
          for (n = crypto.randomBytes(t *= 4); s < t; )
            r = n[s] + (n[s + 1] << 8) + (n[s + 2] << 16) + ((n[s + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, s) : (u.push(r % 1e7), s += 4);
          s = t / 4;
        } else
          throw Error(De);
      else
        for (; s < t; )
          u[s++] = Math.random() * 1e7 | 0;
      for (t = u[--s], e %= m, t && e && (r = C(10, m - e), u[s] = (t / r | 0) * r); u[s] === 0; s--)
        u.pop();
      if (s < 0)
        i = 0, u = [0];
      else {
        for (i = -1; u[0] === 0; i -= m)
          u.shift();
        for (t = 1, r = u[0]; r >= 10; r /= 10)
          t++;
        t < m && (i -= m - t);
      }
      return o.e = i, o.d = u, o;
    }
    __name(In, "In");
    function Zn(e) {
      return p(e = new this(e), e.e + 1, this.rounding);
    }
    __name(Zn, "Zn");
    function Un(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(Un, "Un");
    function Bn(e) {
      return new this(e).sin();
    }
    __name(Bn, "Bn");
    function Vn(e) {
      return new this(e).sinh();
    }
    __name(Vn, "Vn");
    function $n(e) {
      return new this(e).sqrt();
    }
    __name($n, "$n");
    function Hn(e, n) {
      return new this(e).sub(n);
    }
    __name(Hn, "Hn");
    function jn() {
      var e = 0, n = arguments, i = new this(n[e]);
      for (w = false; i.s && ++e < n.length; )
        i = i.plus(n[e]);
      return w = true, p(i, this.precision, this.rounding);
    }
    __name(jn, "jn");
    function Wn(e) {
      return new this(e).tan();
    }
    __name(Wn, "Wn");
    function Gn(e) {
      return new this(e).tanh();
    }
    __name(Gn, "Gn");
    function Jn(e) {
      return p(e = new this(e), e.e + 1, 1);
    }
    __name(Jn, "Jn");
    h[Symbol.for("nodejs.util.inspect.custom")] = h.toString;
    h[Symbol.toStringTag] = "Decimal";
    var Q = h.constructor = He(Ne);
    te = new Q(te);
    re = new Q(re);
    var je = Q;
  }
});

// ../../../../node_modules/.prisma/client/index-browser.js
var require_index_browser2 = __commonJS({
  "../../../../node_modules/.prisma/client/index-browser.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      Decimal: Decimal2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Public: Public2,
      getRuntime: getRuntime2,
      skip: skip2
    } = require_index_browser();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.22.0",
      engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
    };
    Prisma.PrismaClientKnownRequestError = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientUnknownRequestError = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientRustPanicError = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientInitializationError = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientValidationError = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.NotFoundError = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.Decimal = Decimal2;
    Prisma.sql = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.empty = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.join = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.raw = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.defineExtension = () => {
      const runtimeName = getRuntime2().prettyName;
      throw new Error(
        `Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      name: "name",
      password: "password"
    };
    exports.Prisma.PostScalarFieldEnum = {
      id: "id",
      title: "title",
      content: "content",
      published: "published",
      authorId: "authorId"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Post: "Post"
    };
    var PrismaClient3 = class {
      constructor() {
        return new Proxy(this, {
          get(target, prop) {
            let message;
            const runtime = getRuntime2();
            if (runtime.isEdge) {
              message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
            } else {
              message = "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" + runtime.prettyName + "`).";
            }
            message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;
            throw new Error(message);
          }
        });
      }
    };
    __name(PrismaClient3, "PrismaClient");
    exports.PrismaClient = PrismaClient3;
    Object.assign(exports, Prisma);
  }
});

// ../../../../node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "../../../../node_modules/.prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = { ...require_index_browser2() };
  }
});

// ../../../../node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "../../../../node_modules/@prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      ...require_default()
    };
  }
});

// ../../../../node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "../../../../node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var default_index_exports = {};
    __export(default_index_exports, {
      Prisma: () => Prisma,
      PrismaClient: () => PrismaClient3,
      default: () => default_index_default
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
    };
    var version = "5.22.0";
    var clientVersion = version;
    var PrismaClient3 = /* @__PURE__ */ __name(class {
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    }, "PrismaClient");
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    __name(defineExtension, "defineExtension");
    function getExtensionContext(that) {
      return that;
    }
    __name(getExtensionContext, "getExtensionContext");
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// ../../../../node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "../../../../node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var fa = Object.create;
    var cr = Object.defineProperty;
    var ga = Object.getOwnPropertyDescriptor;
    var ha = Object.getOwnPropertyNames;
    var ya = Object.getPrototypeOf;
    var wa = Object.prototype.hasOwnProperty;
    var Se = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "Se");
    var Le = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "Le");
    var pr = /* @__PURE__ */ __name((e, t) => {
      for (var r in t)
        cr(e, r, { get: t[r], enumerable: true });
    }, "pr");
    var oi = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of ha(t))
          !wa.call(e, i) && i !== r && cr(e, i, { get: () => t[i], enumerable: !(n = ga(t, i)) || n.enumerable });
      return e;
    }, "oi");
    var qe = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? fa(ya(e)) : {}, oi(t || !e || !e.__esModule ? cr(r, "default", { value: e, enumerable: true }) : r, e)), "qe");
    var Ea = /* @__PURE__ */ __name((e) => oi(cr({}, "__esModule", { value: true }), e), "Ea");
    var y;
    var c = Se(() => {
      "use strict";
      y = { nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
    });
    var b;
    var p = Se(() => {
      "use strict";
      b = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
    });
    var E;
    var d = Se(() => {
      "use strict";
      E = /* @__PURE__ */ __name(() => {
      }, "E");
      E.prototype = E;
    });
    var m = Se(() => {
      "use strict";
    });
    var Ti = Le((Ye) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      var ci = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "ci"), ba = ci((e) => {
        "use strict";
        e.byteLength = l, e.toByteArray = g, e.fromByteArray = S;
        var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o = 0, s = i.length; o < s; ++o)
          t[o] = i[o], r[i.charCodeAt(o)] = o;
        var o, s;
        r[45] = 62, r[95] = 63;
        function a(A) {
          var R = A.length;
          if (R % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var M = A.indexOf("=");
          M === -1 && (M = R);
          var F = M === R ? 0 : 4 - M % 4;
          return [M, F];
        }
        __name(a, "a");
        function l(A) {
          var R = a(A), M = R[0], F = R[1];
          return (M + F) * 3 / 4 - F;
        }
        __name(l, "l");
        function u(A, R, M) {
          return (R + M) * 3 / 4 - M;
        }
        __name(u, "u");
        function g(A) {
          var R, M = a(A), F = M[0], q = M[1], D = new n(u(A, F, q)), I = 0, ae = q > 0 ? F - 4 : F, J;
          for (J = 0; J < ae; J += 4)
            R = r[A.charCodeAt(J)] << 18 | r[A.charCodeAt(J + 1)] << 12 | r[A.charCodeAt(J + 2)] << 6 | r[A.charCodeAt(J + 3)], D[I++] = R >> 16 & 255, D[I++] = R >> 8 & 255, D[I++] = R & 255;
          return q === 2 && (R = r[A.charCodeAt(J)] << 2 | r[A.charCodeAt(J + 1)] >> 4, D[I++] = R & 255), q === 1 && (R = r[A.charCodeAt(J)] << 10 | r[A.charCodeAt(J + 1)] << 4 | r[A.charCodeAt(J + 2)] >> 2, D[I++] = R >> 8 & 255, D[I++] = R & 255), D;
        }
        __name(g, "g");
        function h(A) {
          return t[A >> 18 & 63] + t[A >> 12 & 63] + t[A >> 6 & 63] + t[A & 63];
        }
        __name(h, "h");
        function v(A, R, M) {
          for (var F, q = [], D = R; D < M; D += 3)
            F = (A[D] << 16 & 16711680) + (A[D + 1] << 8 & 65280) + (A[D + 2] & 255), q.push(h(F));
          return q.join("");
        }
        __name(v, "v");
        function S(A) {
          for (var R, M = A.length, F = M % 3, q = [], D = 16383, I = 0, ae = M - F; I < ae; I += D)
            q.push(v(A, I, I + D > ae ? ae : I + D));
          return F === 1 ? (R = A[M - 1], q.push(t[R >> 2] + t[R << 4 & 63] + "==")) : F === 2 && (R = (A[M - 2] << 8) + A[M - 1], q.push(t[R >> 10] + t[R >> 4 & 63] + t[R << 2 & 63] + "=")), q.join("");
        }
        __name(S, "S");
      }), xa = ci((e) => {
        e.read = function(t, r, n, i, o) {
          var s, a, l = o * 8 - i - 1, u = (1 << l) - 1, g = u >> 1, h = -7, v = n ? o - 1 : 0, S = n ? -1 : 1, A = t[r + v];
          for (v += S, s = A & (1 << -h) - 1, A >>= -h, h += l; h > 0; s = s * 256 + t[r + v], v += S, h -= 8)
            ;
          for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + t[r + v], v += S, h -= 8)
            ;
          if (s === 0)
            s = 1 - g;
          else {
            if (s === u)
              return a ? NaN : (A ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, i), s = s - g;
          }
          return (A ? -1 : 1) * a * Math.pow(2, s - i);
        }, e.write = function(t, r, n, i, o, s) {
          var a, l, u, g = s * 8 - o - 1, h = (1 << g) - 1, v = h >> 1, S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = i ? 0 : s - 1, R = i ? 1 : -1, M = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (l = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), a + v >= 1 ? r += S / u : r += S * Math.pow(2, 1 - v), r * u >= 2 && (a++, u /= 2), a + v >= h ? (l = 0, a = h) : a + v >= 1 ? (l = (r * u - 1) * Math.pow(2, o), a = a + v) : (l = r * Math.pow(2, v - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + A] = l & 255, A += R, l /= 256, o -= 8)
            ;
          for (a = a << o | l, g += o; g > 0; t[n + A] = a & 255, A += R, a /= 256, g -= 8)
            ;
          t[n + A - R] |= M * 128;
        };
      }), tn = ba(), Ke = xa(), si = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      Ye.Buffer = T;
      Ye.SlowBuffer = Ra;
      Ye.INSPECT_MAX_BYTES = 50;
      var dr = 2147483647;
      Ye.kMaxLength = dr;
      T.TYPED_ARRAY_SUPPORT = Pa();
      !T.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function Pa() {
        try {
          let e = new Uint8Array(1), t = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
        } catch {
          return false;
        }
      }
      __name(Pa, "Pa");
      Object.defineProperty(T.prototype, "parent", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.buffer;
      } });
      Object.defineProperty(T.prototype, "offset", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.byteOffset;
      } });
      function xe(e) {
        if (e > dr)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, T.prototype), t;
      }
      __name(xe, "xe");
      function T(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return on(e);
        }
        return pi(e, t, r);
      }
      __name(T, "T");
      T.poolSize = 8192;
      function pi(e, t, r) {
        if (typeof e == "string")
          return Ta(e, t);
        if (ArrayBuffer.isView(e))
          return Ca(e);
        if (e == null)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (de(e, ArrayBuffer) || e && de(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (de(e, SharedArrayBuffer) || e && de(e.buffer, SharedArrayBuffer)))
          return mi(e, t, r);
        if (typeof e == "number")
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (n != null && n !== e)
          return T.from(n, t, r);
        let i = Aa(e);
        if (i)
          return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
          return T.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      }
      __name(pi, "pi");
      T.from = function(e, t, r) {
        return pi(e, t, r);
      };
      Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(T, Uint8Array);
      function di(e) {
        if (typeof e != "number")
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
      }
      __name(di, "di");
      function va(e, t, r) {
        return di(e), e <= 0 ? xe(e) : t !== void 0 ? typeof r == "string" ? xe(e).fill(t, r) : xe(e).fill(t) : xe(e);
      }
      __name(va, "va");
      T.alloc = function(e, t, r) {
        return va(e, t, r);
      };
      function on(e) {
        return di(e), xe(e < 0 ? 0 : sn(e) | 0);
      }
      __name(on, "on");
      T.allocUnsafe = function(e) {
        return on(e);
      };
      T.allocUnsafeSlow = function(e) {
        return on(e);
      };
      function Ta(e, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t))
          throw new TypeError("Unknown encoding: " + t);
        let r = fi(e, t) | 0, n = xe(r), i = n.write(e, t);
        return i !== r && (n = n.slice(0, i)), n;
      }
      __name(Ta, "Ta");
      function rn(e) {
        let t = e.length < 0 ? 0 : sn(e.length) | 0, r = xe(t);
        for (let n = 0; n < t; n += 1)
          r[n] = e[n] & 255;
        return r;
      }
      __name(rn, "rn");
      function Ca(e) {
        if (de(e, Uint8Array)) {
          let t = new Uint8Array(e);
          return mi(t.buffer, t.byteOffset, t.byteLength);
        }
        return rn(e);
      }
      __name(Ca, "Ca");
      function mi(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T.prototype), n;
      }
      __name(mi, "mi");
      function Aa(e) {
        if (T.isBuffer(e)) {
          let t = sn(e.length) | 0, r = xe(t);
          return r.length === 0 || e.copy(r, 0, 0, t), r;
        }
        if (e.length !== void 0)
          return typeof e.length != "number" || ln(e.length) ? xe(0) : rn(e);
        if (e.type === "Buffer" && Array.isArray(e.data))
          return rn(e.data);
      }
      __name(Aa, "Aa");
      function sn(e) {
        if (e >= dr)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + dr.toString(16) + " bytes");
        return e | 0;
      }
      __name(sn, "sn");
      function Ra(e) {
        return +e != e && (e = 0), T.alloc(+e);
      }
      __name(Ra, "Ra");
      T.isBuffer = function(e) {
        return e != null && e._isBuffer === true && e !== T.prototype;
      };
      T.compare = function(e, t) {
        if (de(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), de(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)), !T.isBuffer(e) || !T.isBuffer(t))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t)
          return 0;
        let r = e.length, n = t.length;
        for (let i = 0, o = Math.min(r, n); i < o; ++i)
          if (e[i] !== t[i]) {
            r = e[i], n = t[i];
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      };
      T.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      T.concat = function(e, t) {
        if (!Array.isArray(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0)
          return T.alloc(0);
        let r;
        if (t === void 0)
          for (t = 0, r = 0; r < e.length; ++r)
            t += e[r].length;
        let n = T.allocUnsafe(t), i = 0;
        for (r = 0; r < e.length; ++r) {
          let o = e[r];
          if (de(o, Uint8Array))
            i + o.length > n.length ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
          else if (T.isBuffer(o))
            o.copy(n, i);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          i += o.length;
        }
        return n;
      };
      function fi(e, t) {
        if (T.isBuffer(e))
          return e.length;
        if (ArrayBuffer.isView(e) || de(e, ArrayBuffer))
          return e.byteLength;
        if (typeof e != "string")
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && r === 0)
          return 0;
        let i = false;
        for (; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return nn(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return r * 2;
            case "hex":
              return r >>> 1;
            case "base64":
              return vi(e).length;
            default:
              if (i)
                return n ? -1 : nn(e).length;
              t = ("" + t).toLowerCase(), i = true;
          }
      }
      __name(fi, "fi");
      T.byteLength = fi;
      function Sa(e, t, r) {
        let n = false;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return qa(this, t, r);
            case "utf8":
            case "utf-8":
              return hi(this, t, r);
            case "ascii":
              return _a(this, t, r);
            case "latin1":
            case "binary":
              return La(this, t, r);
            case "base64":
              return Na(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ba(this, t, r);
            default:
              if (n)
                throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = true;
          }
      }
      __name(Sa, "Sa");
      T.prototype._isBuffer = true;
      function Be(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
      }
      __name(Be, "Be");
      T.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2)
          Be(this, t, t + 1);
        return this;
      };
      T.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4)
          Be(this, t, t + 3), Be(this, t + 1, t + 2);
        return this;
      };
      T.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8)
          Be(this, t, t + 7), Be(this, t + 1, t + 6), Be(this, t + 2, t + 5), Be(this, t + 3, t + 4);
        return this;
      };
      T.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? hi(this, 0, e) : Sa.apply(this, arguments);
      };
      T.prototype.toLocaleString = T.prototype.toString;
      T.prototype.equals = function(e) {
        if (!T.isBuffer(e))
          throw new TypeError("Argument must be a Buffer");
        return this === e ? true : T.compare(this, e) === 0;
      };
      T.prototype.inspect = function() {
        let e = "", t = Ye.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      };
      si && (T.prototype[si] = T.prototype.inspect);
      T.prototype.compare = function(e, t, r, n, i) {
        if (de(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), !T.isBuffer(e))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), i === void 0 && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)
          throw new RangeError("out of range index");
        if (n >= i && t >= r)
          return 0;
        if (n >= i)
          return -1;
        if (t >= r)
          return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e)
          return 0;
        let o = i - n, s = r - t, a = Math.min(o, s), l = this.slice(n, i), u = e.slice(t, r);
        for (let g = 0; g < a; ++g)
          if (l[g] !== u[g]) {
            o = l[g], s = u[g];
            break;
          }
        return o < s ? -1 : s < o ? 1 : 0;
      };
      function gi(e, t, r, n, i) {
        if (e.length === 0)
          return -1;
        if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, ln(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (i)
            return -1;
          r = e.length - 1;
        } else if (r < 0)
          if (i)
            r = 0;
          else
            return -1;
        if (typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t))
          return t.length === 0 ? -1 : ai(e, t, r, n, i);
        if (typeof t == "number")
          return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : ai(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }
      __name(gi, "gi");
      function ai(e, t, r, n, i) {
        let o = 1, s = e.length, a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2)
            return -1;
          o = 2, s /= 2, a /= 2, r /= 2;
        }
        function l(g, h) {
          return o === 1 ? g[h] : g.readUInt16BE(h * o);
        }
        __name(l, "l");
        let u;
        if (i) {
          let g = -1;
          for (u = r; u < s; u++)
            if (l(e, u) === l(t, g === -1 ? 0 : u - g)) {
              if (g === -1 && (g = u), u - g + 1 === a)
                return g * o;
            } else
              g !== -1 && (u -= u - g), g = -1;
        } else
          for (r + a > s && (r = s - a), u = r; u >= 0; u--) {
            let g = true;
            for (let h = 0; h < a; h++)
              if (l(e, u + h) !== l(t, h)) {
                g = false;
                break;
              }
            if (g)
              return u;
          }
        return -1;
      }
      __name(ai, "ai");
      T.prototype.includes = function(e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      T.prototype.indexOf = function(e, t, r) {
        return gi(this, e, t, r, true);
      };
      T.prototype.lastIndexOf = function(e, t, r) {
        return gi(this, e, t, r, false);
      };
      function Ia(e, t, r, n) {
        r = Number(r) || 0;
        let i = e.length - r;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
          let a = parseInt(t.substr(s * 2, 2), 16);
          if (ln(a))
            return s;
          e[r + s] = a;
        }
        return s;
      }
      __name(Ia, "Ia");
      function Oa(e, t, r, n) {
        return mr(nn(t, e.length - r), e, r, n);
      }
      __name(Oa, "Oa");
      function ka(e, t, r, n) {
        return mr(ja(t), e, r, n);
      }
      __name(ka, "ka");
      function Da(e, t, r, n) {
        return mr(vi(t), e, r, n);
      }
      __name(Da, "Da");
      function Ma(e, t, r, n) {
        return mr(Ja(t, e.length - r), e, r, n);
      }
      __name(Ma, "Ma");
      T.prototype.write = function(e, t, r, n) {
        if (t === void 0)
          n = "utf8", r = this.length, t = 0;
        else if (r === void 0 && typeof t == "string")
          n = t, r = this.length, t = 0;
        else if (isFinite(t))
          t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
        else
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let i = this.length - t;
        if ((r === void 0 || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let o = false;
        for (; ; )
          switch (n) {
            case "hex":
              return Ia(this, e, t, r);
            case "utf8":
            case "utf-8":
              return Oa(this, e, t, r);
            case "ascii":
            case "latin1":
            case "binary":
              return ka(this, e, t, r);
            case "base64":
              return Da(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ma(this, e, t, r);
            default:
              if (o)
                throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), o = true;
          }
      };
      T.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function Na(e, t, r) {
        return t === 0 && r === e.length ? tn.fromByteArray(e) : tn.fromByteArray(e.slice(t, r));
      }
      __name(Na, "Na");
      function hi(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], i = t;
        for (; i < r; ) {
          let o = e[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
          if (i + a <= r) {
            let l, u, g, h;
            switch (a) {
              case 1:
                o < 128 && (s = o);
                break;
              case 2:
                l = e[i + 1], (l & 192) === 128 && (h = (o & 31) << 6 | l & 63, h > 127 && (s = h));
                break;
              case 3:
                l = e[i + 1], u = e[i + 2], (l & 192) === 128 && (u & 192) === 128 && (h = (o & 15) << 12 | (l & 63) << 6 | u & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h));
                break;
              case 4:
                l = e[i + 1], u = e[i + 2], g = e[i + 3], (l & 192) === 128 && (u & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (l & 63) << 12 | (u & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h));
            }
          }
          s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
        }
        return Fa(n);
      }
      __name(hi, "hi");
      var li = 4096;
      function Fa(e) {
        let t = e.length;
        if (t <= li)
          return String.fromCharCode.apply(String, e);
        let r = "", n = 0;
        for (; n < t; )
          r += String.fromCharCode.apply(String, e.slice(n, n += li));
        return r;
      }
      __name(Fa, "Fa");
      function _a(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i] & 127);
        return n;
      }
      __name(_a, "_a");
      function La(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i]);
        return n;
      }
      __name(La, "La");
      function qa(e, t, r) {
        let n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = t; o < r; ++o)
          i += Ga[e[o]];
        return i;
      }
      __name(qa, "qa");
      function Ba(e, t, r) {
        let n = e.slice(t, r), i = "";
        for (let o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i;
      }
      __name(Ba, "Ba");
      T.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, T.prototype), n;
      };
      function H(e, t, r) {
        if (e % 1 !== 0 || e < 0)
          throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      __name(H, "H");
      T.prototype.readUintLE = T.prototype.readUIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return n;
      };
      T.prototype.readUintBE = T.prototype.readUIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e + --t], i = 1;
        for (; t > 0 && (i *= 256); )
          n += this[e + --t] * i;
        return n;
      };
      T.prototype.readUint8 = T.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || H(e, 1, this.length), this[e];
      };
      T.prototype.readUint16LE = T.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || H(e, 2, this.length), this[e] | this[e + 1] << 8;
      };
      T.prototype.readUint16BE = T.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || H(e, 2, this.length), this[e] << 8 | this[e + 1];
      };
      T.prototype.readUint32LE = T.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      T.prototype.readUint32BE = T.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      T.prototype.readBigUInt64LE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      });
      T.prototype.readBigUInt64BE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      });
      T.prototype.readIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
      };
      T.prototype.readIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = t, i = 1, o = this[e + --n];
        for (; n > 0 && (i *= 256); )
          o += this[e + --n] * i;
        return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
      };
      T.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || H(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      };
      T.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || H(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || H(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      T.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      T.prototype.readBigInt64LE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      });
      T.prototype.readBigInt64BE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
      });
      T.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), Ke.read(this, e, true, 23, 4);
      };
      T.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), Ke.read(this, e, false, 23, 4);
      };
      T.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || H(e, 8, this.length), Ke.read(this, e, true, 52, 8);
      };
      T.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || H(e, 8, this.length), Ke.read(this, e, false, 52, 8);
      };
      function re(e, t, r, n, i, o) {
        if (!T.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length)
          throw new RangeError("Index out of range");
      }
      __name(re, "re");
      T.prototype.writeUintLE = T.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          re(this, e, t, r, s, 0);
        }
        let i = 1, o = 0;
        for (this[t] = e & 255; ++o < r && (i *= 256); )
          this[t + o] = e / i & 255;
        return t + r;
      };
      T.prototype.writeUintBE = T.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          re(this, e, t, r, s, 0);
        }
        let i = r - 1, o = 1;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          this[t + i] = e / o & 255;
        return t + r;
      };
      T.prototype.writeUint8 = T.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      };
      T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      };
      T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      function yi(e, t, r, n, i) {
        Pi(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
      }
      __name(yi, "yi");
      function wi(e, t, r, n, i) {
        Pi(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
      }
      __name(wi, "wi");
      T.prototype.writeBigUInt64LE = Ie(function(e, t = 0) {
        return yi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeBigUInt64BE = Ie(function(e, t = 0) {
        return wi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          re(this, e, t, r, a - 1, -a);
        }
        let i = 0, o = 1, s = 0;
        for (this[t] = e & 255; ++i < r && (o *= 256); )
          e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          re(this, e, t, r, a - 1, -a);
        }
        let i = r - 1, o = 1, s = 0;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      };
      T.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      };
      T.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      T.prototype.writeBigInt64LE = Ie(function(e, t = 0) {
        return yi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      T.prototype.writeBigInt64BE = Ie(function(e, t = 0) {
        return wi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Ei(e, t, r, n, i, o) {
        if (r + n > e.length)
          throw new RangeError("Index out of range");
        if (r < 0)
          throw new RangeError("Index out of range");
      }
      __name(Ei, "Ei");
      function bi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || Ei(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), Ke.write(e, t, r, n, 23, 4), r + 4;
      }
      __name(bi, "bi");
      T.prototype.writeFloatLE = function(e, t, r) {
        return bi(this, e, t, true, r);
      };
      T.prototype.writeFloatBE = function(e, t, r) {
        return bi(this, e, t, false, r);
      };
      function xi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || Ei(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), Ke.write(e, t, r, n, 52, 8), r + 8;
      }
      __name(xi, "xi");
      T.prototype.writeDoubleLE = function(e, t, r) {
        return xi(this, e, t, true, r);
      };
      T.prototype.writeDoubleBE = function(e, t, r) {
        return xi(this, e, t, false, r);
      };
      T.prototype.copy = function(e, t, r, n) {
        if (!T.isBuffer(e))
          throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0)
          return 0;
        if (t < 0)
          throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length)
          throw new RangeError("Index out of range");
        if (n < 0)
          throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let i = n - r;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
      };
      T.prototype.fill = function(e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== void 0 && typeof n != "string")
            throw new TypeError("encoding must be a string");
          if (typeof n == "string" && !T.isEncoding(n))
            throw new TypeError("Unknown encoding: " + n);
          if (e.length === 1) {
            let o = e.charCodeAt(0);
            (n === "utf8" && o < 128 || n === "latin1") && (e = o);
          }
        } else
          typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r)
          throw new RangeError("Out of range index");
        if (r <= t)
          return this;
        t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
        let i;
        if (typeof e == "number")
          for (i = t; i < r; ++i)
            this[i] = e;
        else {
          let o = T.isBuffer(e) ? e : T.from(e, n), s = o.length;
          if (s === 0)
            throw new TypeError('The value "' + e + '" is invalid for argument "value"');
          for (i = 0; i < r - t; ++i)
            this[i + t] = o[i % s];
        }
        return this;
      };
      var We = {};
      function an(e, t, r) {
        We[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(n) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      __name(an, "an");
      an("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      an("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
      }, TypeError);
      an("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, i = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = ui(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = ui(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
      }, RangeError);
      function ui(e) {
        let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3)
          t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      __name(ui, "ui");
      function Ua(e, t, r) {
        ze(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && Tt(t, e.length - (r + 1));
      }
      __name(Ua, "Ua");
      function Pi(e, t, r, n, i, o) {
        if (e > r || e < t) {
          let s = typeof t == "bigint" ? "n" : "", a;
          throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new We.ERR_OUT_OF_RANGE("value", a, e);
        }
        Ua(n, i, o);
      }
      __name(Pi, "Pi");
      function ze(e, t) {
        if (typeof e != "number")
          throw new We.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      __name(ze, "ze");
      function Tt(e, t, r) {
        throw Math.floor(e) !== e ? (ze(e, r), new We.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new We.ERR_BUFFER_OUT_OF_BOUNDS() : new We.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      __name(Tt, "Tt");
      var $a = /[^+/0-9A-Za-z-_]/g;
      function Va(e) {
        if (e = e.split("=")[0], e = e.trim().replace($a, ""), e.length < 2)
          return "";
        for (; e.length % 4 !== 0; )
          e = e + "=";
        return e;
      }
      __name(Va, "Va");
      function nn(e, t) {
        t = t || 1 / 0;
        let r, n = e.length, i = null, o = [];
        for (let s = 0; s < n; ++s) {
          if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              } else if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }
            r = (i - 55296 << 10 | r - 56320) + 65536;
          } else
            i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, r < 128) {
            if ((t -= 1) < 0)
              break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0)
              break;
            o.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0)
              break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0)
              break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          } else
            throw new Error("Invalid code point");
        }
        return o;
      }
      __name(nn, "nn");
      function ja(e) {
        let t = [];
        for (let r = 0; r < e.length; ++r)
          t.push(e.charCodeAt(r) & 255);
        return t;
      }
      __name(ja, "ja");
      function Ja(e, t) {
        let r, n, i, o = [];
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
          r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        return o;
      }
      __name(Ja, "Ja");
      function vi(e) {
        return tn.toByteArray(Va(e));
      }
      __name(vi, "vi");
      function mr(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      __name(mr, "mr");
      function de(e, t) {
        return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
      }
      __name(de, "de");
      function ln(e) {
        return e !== e;
      }
      __name(ln, "ln");
      var Ga = function() {
        let e = "0123456789abcdef", t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = r * 16;
          for (let i = 0; i < 16; ++i)
            t[n + i] = e[r] + e[i];
        }
        return t;
      }();
      function Ie(e) {
        return typeof BigInt > "u" ? Qa : e;
      }
      __name(Ie, "Ie");
      function Qa() {
        throw new Error("BigInt not supported");
      }
      __name(Qa, "Qa");
    });
    var w;
    var f = Se(() => {
      "use strict";
      w = qe(Ti());
    });
    function Ha() {
      return false;
    }
    __name(Ha, "Ha");
    var Wa;
    var Ka;
    var Si;
    var Ii = Se(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      Wa = {}, Ka = { existsSync: Ha, promises: Wa }, Si = Ka;
    });
    function tl(...e) {
      return e.join("/");
    }
    __name(tl, "tl");
    function rl(...e) {
      return e.join("/");
    }
    __name(rl, "rl");
    var ji;
    var nl;
    var il;
    var At;
    var Ji = Se(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      ji = "/", nl = { sep: ji }, il = { resolve: tl, posix: nl, join: rl, sep: ji }, At = il;
    });
    var yr;
    var Qi = Se(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      yr = /* @__PURE__ */ __name(class {
        constructor() {
          this.events = {};
        }
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      }, "yr");
    });
    var Wi = Le((hm, Hi) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      Hi.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Yi = Le((Sm, zi) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      zi.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Xi = Le((Nm, Zi) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      var cl = Yi();
      Zi.exports = (e) => typeof e == "string" ? e.replace(cl(), "") : e;
    });
    var Tn = Le((Ih, yo) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      yo.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, g, h, v, S, A, R, M, F, q, D, I = [];
          for (l = 0; l < i; l++)
            I.push(l + 1), I.push(t.charCodeAt(s + l));
          for (var ae = I.length - 1; a < o - 3; )
            for (M = r.charCodeAt(s + (u = a)), F = r.charCodeAt(s + (g = a + 1)), q = r.charCodeAt(s + (h = a + 2)), D = r.charCodeAt(s + (v = a + 3)), S = a += 4, l = 0; l < ae; l += 2)
              A = I[l], R = I[l + 1], u = e(A, u, g, M, R), g = e(u, g, h, F, R), h = e(g, h, v, q, R), S = e(h, v, S, D, R), I[l] = S, v = h, h = g, g = u, u = A;
          for (; a < o; )
            for (M = r.charCodeAt(s + (u = a)), S = ++a, l = 0; l < ae; l += 2)
              A = I[l], I[l] = S = e(A, u, S, M, I[l + 1]), u = A;
          return S;
        };
      }();
    });
    var Go = Le((Tb, Xu) => {
      Xu.exports = { name: "@prisma/engines-version", version: "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "605197351a3c8bdd595af2d2a9bc3025bca48ea2" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Qo = Le(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
    });
    var rp = {};
    pr(rp, { Debug: () => mn, Decimal: () => fe, Extensions: () => un, MetricsClient: () => ft, NotFoundError: () => ve, PrismaClientInitializationError: () => G, PrismaClientKnownRequestError: () => W, PrismaClientRustPanicError: () => Te, PrismaClientUnknownRequestError: () => ne, PrismaClientValidationError: () => K, Public: () => cn, Sql: () => oe, defineDmmfProperty: () => Vo, deserializeJsonResponse: () => rt, dmmfToRuntimeDataModel: () => $o, empty: () => Wo, getPrismaClient: () => pa, getRuntime: () => Gr, join: () => Ho, makeStrictEnum: () => da, makeTypedQueryFactory: () => jo, objectEnumValues: () => Dr, raw: () => _n, serializeJsonQuery: () => qr, skip: () => Lr, sqltag: () => Ln, warnEnvConflicts: () => void 0, warnOnce: () => Ot });
    module.exports = Ea(rp);
    f();
    c();
    p();
    d();
    m();
    var un = {};
    pr(un, { defineExtension: () => Ci, getExtensionContext: () => Ai });
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Ci(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(Ci, "Ci");
    f();
    c();
    p();
    d();
    m();
    function Ai(e) {
      return e;
    }
    __name(Ai, "Ai");
    var cn = {};
    pr(cn, { validator: () => Ri });
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Ri(...e) {
      return (t) => t;
    }
    __name(Ri, "Ri");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var pn;
    var Oi;
    var ki;
    var Di;
    var Mi = true;
    typeof y < "u" && ({ FORCE_COLOR: pn, NODE_DISABLE_COLORS: Oi, NO_COLOR: ki, TERM: Di } = y.env || {}, Mi = y.stdout && y.stdout.isTTY);
    var za = { enabled: !Oi && ki == null && Di !== "dumb" && (pn != null && pn !== "0" || Mi) };
    function V(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !za.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(V, "V");
    var Xp = V(0, 0);
    var fr = V(1, 22);
    var gr = V(2, 22);
    var ed = V(3, 23);
    var Ni = V(4, 24);
    var td = V(7, 27);
    var rd = V(8, 28);
    var nd = V(9, 29);
    var id = V(30, 39);
    var Ze = V(31, 39);
    var Fi = V(32, 39);
    var _i = V(33, 39);
    var Li = V(34, 39);
    var od = V(35, 39);
    var qi = V(36, 39);
    var sd = V(37, 39);
    var Bi = V(90, 39);
    var ad = V(90, 39);
    var ld = V(40, 49);
    var ud = V(41, 49);
    var cd = V(42, 49);
    var pd = V(43, 49);
    var dd = V(44, 49);
    var md = V(45, 49);
    var fd = V(46, 49);
    var gd = V(47, 49);
    f();
    c();
    p();
    d();
    m();
    var Ya = 100;
    var Ui = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var hr = [];
    var $i = Date.now();
    var Za = 0;
    var dn = typeof y < "u" ? y.env : {};
    globalThis.DEBUG ??= dn.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= dn.DEBUG_COLORS ? dn.DEBUG_COLORS === "true" : true;
    var Ct = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: (...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, formatters: {} };
    function Xa(e) {
      let t = { color: Ui[Za++ % Ui.length], enabled: Ct.enabled(e), namespace: e, log: Ct.log, extend: () => {
      } }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && hr.push([o, ...n]), hr.length > Ya && hr.shift(), Ct.enabled(o) || i) {
          let l = n.map((g) => typeof g == "string" ? g : el(g)), u = `+${Date.now() - $i}ms`;
          $i = Date.now(), a(o, ...l, u);
        }
      }, "r");
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    __name(Xa, "Xa");
    var mn = new Proxy(Xa, { get: (e, t) => Ct[t], set: (e, t, r) => Ct[t] = r });
    function el(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i))
            return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint")
          return i.toString();
        return i;
      }, t);
    }
    __name(el, "el");
    function Vi() {
      hr.length = 0;
    }
    __name(Vi, "Vi");
    var ee = mn;
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Gi = "library";
    function Rt(e) {
      let t = ol();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : Gi);
    }
    __name(Rt, "Rt");
    function ol() {
      let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    __name(ol, "ol");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Ue;
    ((t) => {
      let e;
      ((I) => (I.findUnique = "findUnique", I.findUniqueOrThrow = "findUniqueOrThrow", I.findFirst = "findFirst", I.findFirstOrThrow = "findFirstOrThrow", I.findMany = "findMany", I.create = "create", I.createMany = "createMany", I.createManyAndReturn = "createManyAndReturn", I.update = "update", I.updateMany = "updateMany", I.upsert = "upsert", I.delete = "delete", I.deleteMany = "deleteMany", I.groupBy = "groupBy", I.count = "count", I.aggregate = "aggregate", I.findRaw = "findRaw", I.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
    })(Ue ||= {});
    var It = {};
    pr(It, { error: () => ll, info: () => al, log: () => sl, query: () => ul, should: () => Ki, tags: () => St, warn: () => fn });
    f();
    c();
    p();
    d();
    m();
    var St = { error: Ze("prisma:error"), warn: _i("prisma:warn"), info: qi("prisma:info"), query: Li("prisma:query") };
    var Ki = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
    function sl(...e) {
      console.log(...e);
    }
    __name(sl, "sl");
    function fn(e, ...t) {
      Ki.warn() && console.warn(`${St.warn} ${e}`, ...t);
    }
    __name(fn, "fn");
    function al(e, ...t) {
      console.info(`${St.info} ${e}`, ...t);
    }
    __name(al, "al");
    function ll(e, ...t) {
      console.error(`${St.error} ${e}`, ...t);
    }
    __name(ll, "ll");
    function ul(e, ...t) {
      console.log(`${St.query} ${e}`, ...t);
    }
    __name(ul, "ul");
    f();
    c();
    p();
    d();
    m();
    function Pe(e, t) {
      throw new Error(t);
    }
    __name(Pe, "Pe");
    f();
    c();
    p();
    d();
    m();
    function gn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(gn, "gn");
    f();
    c();
    p();
    d();
    m();
    var hn = /* @__PURE__ */ __name((e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}), "hn");
    f();
    c();
    p();
    d();
    m();
    function Xe(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    __name(Xe, "Xe");
    f();
    c();
    p();
    d();
    m();
    function yn(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(yn, "yn");
    f();
    c();
    p();
    d();
    m();
    function N(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(N, "N");
    f();
    c();
    p();
    d();
    m();
    var eo = /* @__PURE__ */ new Set();
    var Ot = /* @__PURE__ */ __name((e, t, ...r) => {
      eo.has(e) || (eo.add(e), fn(t, ...r));
    }, "Ot");
    f();
    c();
    p();
    d();
    m();
    var W = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    }, "W");
    N(W, "PrismaClientKnownRequestError");
    var ve = /* @__PURE__ */ __name(class extends W {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    }, "ve");
    N(ve, "NotFoundError");
    f();
    c();
    p();
    d();
    m();
    var G = /* @__PURE__ */ __name(class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    }, "e");
    N(G, "PrismaClientInitializationError");
    f();
    c();
    p();
    d();
    m();
    var Te = /* @__PURE__ */ __name(class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    }, "Te");
    N(Te, "PrismaClientRustPanicError");
    f();
    c();
    p();
    d();
    m();
    var ne = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    }, "ne");
    N(ne, "PrismaClientUnknownRequestError");
    f();
    c();
    p();
    d();
    m();
    var K = /* @__PURE__ */ __name(class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    }, "K");
    N(K, "PrismaClientValidationError");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var et = 9e15;
    var Me = 1e9;
    var wn = "0123456789abcdef";
    var Er = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var br = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var En = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -et, maxE: et, crypto: false };
    var oo;
    var Ce;
    var _ = true;
    var Pr = "[DecimalError] ";
    var De = Pr + "Invalid argument: ";
    var so = Pr + "Precision limit exceeded";
    var ao = Pr + "crypto unavailable";
    var lo = "[object Decimal]";
    var X = Math.floor;
    var Q = Math.pow;
    var pl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var dl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var ml = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var uo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var pe = 1e7;
    var k = 7;
    var fl = 9007199254740991;
    var gl = Er.length - 1;
    var bn = br.length - 1;
    var C = { toStringTag: lo };
    C.absoluteValue = C.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), O(e);
    };
    C.ceil = function() {
      return O(new this.constructor(this), this.e + 1, 2);
    };
    C.clampedTo = C.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(De + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    C.comparedTo = C.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    C.cosine = C.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = hl(n, go(n, r)), n.precision = e, n.rounding = t, O(Ce == 2 || Ce == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    C.cubeRoot = C.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, g = this, h = g.constructor;
      if (!g.isFinite() || g.isZero())
        return new h(g);
      for (_ = false, o = g.s * Q(g.s * g, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Y(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Q(r, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(g), n = U(u.plus(g).times(a), u.plus(l), s + 2, 1), Y(a.d).slice(0, s) === (r = Y(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (O(a, e + 1, 0), a.times(a).times(a).eq(g))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (O(n, e + 1, 1), t = !n.times(n).times(n).eq(g));
            break;
          }
      return _ = true, O(n, e, h.rounding, t);
    };
    C.decimalPlaces = C.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - X(this.e / k)) * k, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    C.dividedBy = C.div = function(e) {
      return U(this, new this.constructor(e));
    };
    C.dividedToIntegerBy = C.divToInt = function(e) {
      var t = this, r = t.constructor;
      return O(U(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    C.equals = C.eq = function(e) {
      return this.cmp(e) === 0;
    };
    C.floor = function() {
      return O(new this.constructor(this), this.e + 1, 3);
    };
    C.greaterThan = C.gt = function(e) {
      return this.cmp(e) > 0;
    };
    C.greaterThanOrEqualTo = C.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    C.hyperbolicCosine = C.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Tr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = tt(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, g = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(g.minus(l.times(g))));
      return O(o, s.precision = r, s.rounding = n, true);
    };
    C.hyperbolicSine = C.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = tt(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Tr(5, e)), i = tt(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, O(i, t, r, true);
    };
    C.hyperbolicTangent = C.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, U(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    C.inverseCosine = C.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? ce(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ce(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = ce(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    C.inverseHyperbolicCosine = C.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, _ = false, r = r.times(r).minus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    C.inverseHyperbolicSine = C.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, _ = false, r = r.times(r).plus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln());
    };
    C.inverseHyperbolicTangent = C.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? O(new o(i), e, t, true) : (o.precision = r = n - i.e, i = U(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    C.inverseSine = C.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ce(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    C.inverseTangent = C.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, g = u.constructor, h = g.precision, v = g.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new g(u);
        if (u.abs().eq(1) && h + 4 <= bn)
          return s = ce(g, h + 4, v).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new g(NaN);
        if (h + 4 <= bn)
          return s = ce(g, h + 4, v).times(0.5), s.s = u.s, s;
      }
      for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / k + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (_ = false, t = Math.ceil(a / k), n = 1, l = u.times(u), s = new g(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), _ = true, O(s, g.precision = h, g.rounding = v, true);
    };
    C.isFinite = function() {
      return !!this.d;
    };
    C.isInteger = C.isInt = function() {
      return !!this.d && X(this.e / k) > this.d.length - 2;
    };
    C.isNaN = function() {
      return !this.s;
    };
    C.isNegative = C.isNeg = function() {
      return this.s < 0;
    };
    C.isPositive = C.isPos = function() {
      return this.s > 0;
    };
    C.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    C.lessThan = C.lt = function(e) {
      return this.cmp(e) < 0;
    };
    C.lessThanOrEqualTo = C.lte = function(e) {
      return this.cmp(e) < 1;
    };
    C.logarithm = C.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, g = u.constructor, h = g.precision, v = g.rounding, S = 5;
      if (e == null)
        e = new g(10), t = true;
      else {
        if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new g(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new g(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (_ = false, a = h + S, s = ke(u, a), n = t ? xr(g, a + 10) : ke(e, a), l = U(s, n, a, 1), kt(l.d, i = h, v))
        do
          if (a += 10, s = ke(u, a), n = t ? xr(g, a + 10) : ke(e, a), l = U(s, n, a, 1), !o) {
            +Y(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = O(l, h + 1, 0));
            break;
          }
        while (kt(l.d, i += 10, v));
      return _ = true, O(l, h, v);
    };
    C.minus = C.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, g, h, v, S = this, A = S.constructor;
      if (e = new A(e), !S.d || !e.d)
        return !S.s || !e.s ? e = new A(NaN) : S.d ? e.s = -e.s : e = new A(e.d || S.s !== e.s ? S : NaN), e;
      if (S.s != e.s)
        return e.s = -e.s, S.plus(e);
      if (u = S.d, v = e.d, a = A.precision, l = A.rounding, !u[0] || !v[0]) {
        if (v[0])
          e.s = -e.s;
        else if (u[0])
          e = new A(S);
        else
          return new A(l === 3 ? -0 : 0);
        return _ ? O(e, a, l) : e;
      }
      if (r = X(e.e / k), g = X(S.e / k), u = u.slice(), o = g - r, o) {
        for (h = o < 0, h ? (t = u, o = -o, s = v.length) : (t = v, r = g, s = u.length), n = Math.max(Math.ceil(a / k), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
          if (u[n] != v[n]) {
            h = u[n] < v[n];
            break;
          }
        o = 0;
      }
      for (h && (t = u, u = v, v = t, e.s = -e.s), s = u.length, n = v.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = v.length; n > o; ) {
        if (u[--n] < v[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = pe - 1;
          --u[i], u[n] += pe;
        }
        u[n] -= v[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = vr(u, r), _ ? O(e, a, l) : e) : new A(l === 3 ? -0 : 0);
    };
    C.modulo = C.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? O(new n(r), n.precision, n.rounding) : (_ = false, n.modulo == 9 ? (t = U(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = U(r, e, 0, n.modulo, 1), t = t.times(e), _ = true, r.minus(t));
    };
    C.naturalExponential = C.exp = function() {
      return xn(this);
    };
    C.naturalLogarithm = C.ln = function() {
      return ke(this);
    };
    C.negated = C.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, O(e);
    };
    C.plus = C.add = function(e) {
      var t, r, n, i, o, s, a, l, u, g, h = this, v = h.constructor;
      if (e = new v(e), !h.d || !e.d)
        return !h.s || !e.s ? e = new v(NaN) : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)), e;
      if (h.s != e.s)
        return e.s = -e.s, h.minus(e);
      if (u = h.d, g = e.d, a = v.precision, l = v.rounding, !u[0] || !g[0])
        return g[0] || (e = new v(h)), _ ? O(e, a, l) : e;
      if (o = X(h.e / k), n = X(e.e / k), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = g.length) : (r = g, n = o, s = u.length), o = Math.ceil(a / k), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = g.length, s - i < 0 && (i = s, r = g, g = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + g[i] + t) / pe | 0, u[i] %= pe;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = vr(u, n), _ ? O(e, a, l) : e;
    };
    C.precision = C.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(De + e);
      return r.d ? (t = co(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    C.round = function() {
      var e = this, t = e.constructor;
      return O(new t(e), e.e + 1, t.rounding);
    };
    C.sine = C.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = wl(n, go(n, r)), n.precision = e, n.rounding = t, O(Ce > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.squareRoot = C.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, g = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new g(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (_ = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = Y(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = X((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new g(t)) : n = new g(u.toString()), r = (l = g.precision) + 3; ; )
        if (o = n, n = o.plus(U(s, o, r + 2, 1)).times(0.5), Y(o.d).slice(0, r) === (t = Y(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (O(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (O(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return _ = true, O(n, l, g.rounding, e);
    };
    C.tangent = C.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = U(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, O(Ce == 2 || Ce == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.times = C.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, g = this, h = g.constructor, v = g.d, S = (e = new h(e)).d;
      if (e.s *= g.s, !v || !v[0] || !S || !S[0])
        return new h(!e.s || v && !v[0] && !S || S && !S[0] && !v ? NaN : !v || !S ? e.s / 0 : e.s * 0);
      for (r = X(g.e / k) + X(e.e / k), l = v.length, u = S.length, l < u && (o = v, v = S, S = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + S[n] * v[i - n - 1] + t, o[i--] = a % pe | 0, t = a / pe | 0;
        o[i] = (o[i] + t) % pe | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = vr(o, r), _ ? O(e, h.precision, h.rounding) : e;
    };
    C.toBinary = function(e, t) {
      return vn(this, 2, e, t);
    };
    C.toDecimalPlaces = C.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (ie(e, 0, Me), t === void 0 ? t = n.rounding : ie(t, 0, 8), O(r, e + r.e + 1, t));
    };
    C.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = me(n, true) : (ie(e, 0, Me), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = O(new i(n), e + 1, t), r = me(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = me(i) : (ie(e, 0, Me), t === void 0 ? t = o.rounding : ie(t, 0, 8), n = O(new o(i), e + i.e + 1, t), r = me(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    C.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, g, h, v, S = this, A = S.d, R = S.constructor;
      if (!A)
        return new R(S);
      if (u = r = new R(1), n = l = new R(0), t = new R(n), o = t.e = co(A) - S.e - 1, s = o % k, t.d[0] = Q(10, s < 0 ? k + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new R(e), !a.isInt() || a.lt(u))
          throw Error(De + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (_ = false, a = new R(Y(A)), g = R.precision, R.precision = o = A.length * k * 2; h = U(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(h.times(i)), l = i, i = t, t = a.minus(h.times(i)), a = i;
      return i = U(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = S.s, v = U(u, n, o, 1).minus(S).abs().cmp(U(l, r, o, 1).minus(S).abs()) < 1 ? [u, n] : [l, r], R.precision = g, _ = true, v;
    };
    C.toHexadecimal = C.toHex = function(e, t) {
      return vn(this, 16, e, t);
    };
    C.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : ie(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (_ = false, r = U(r, e, 0, t, 1).times(e), _ = true, O(r)) : (e.s = r.s, r = e), r;
    };
    C.toNumber = function() {
      return +this;
    };
    C.toOctal = function(e, t) {
      return vn(this, 8, e, t);
    };
    C.toPower = C.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l(Q(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return O(a, n, o);
      if (t = X(e.e / k), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= fl)
        return i = po(l, a, r, n), e.s < 0 ? new l(1).div(i) : O(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = Q(+a, u), t = r == 0 || !isFinite(r) ? X(u * (Math.log("0." + Y(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (_ = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = xn(e.times(ke(a, n + r)), n), i.d && (i = O(i, n + 5, 1), kt(i.d, n, o) && (t = n + 10, i = O(xn(e.times(ke(a, t + r)), t), t + 5, 1), +Y(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = O(i, n + 1, 0)))), i.s = s, _ = true, l.rounding = o, O(i, n, o));
    };
    C.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = me(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ie(e, 1, Me), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = O(new i(n), e, t), r = me(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toSignificantDigits = C.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (ie(e, 1, Me), t === void 0 ? t = n.rounding : ie(t, 0, 8)), O(new n(r), e, t);
    };
    C.toString = function() {
      var e = this, t = e.constructor, r = me(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    C.truncated = C.trunc = function() {
      return O(new this.constructor(this), this.e + 1, 1);
    };
    C.valueOf = C.toJSON = function() {
      var e = this, t = e.constructor, r = me(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function Y(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = k - n.length, r && (o += Oe(r)), o += n;
        s = e[t], n = s + "", r = k - n.length, r && (o += Oe(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    __name(Y, "Y");
    function ie(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(De + e);
    }
    __name(ie, "ie");
    function kt(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += k, i = 0) : (i = Math.ceil((t + 1) / k), t %= k), o = Q(10, k - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Q(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Q(10, t - 3) - 1, s;
    }
    __name(kt, "kt");
    function wr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += wn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    __name(wr, "wr");
    function hl(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Tr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = tt(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    __name(hl, "hl");
    var U = function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      __name(e, "e");
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      __name(t, "t");
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      __name(r, "r");
      return function(n, i, o, s, a, l) {
        var u, g, h, v, S, A, R, M, F, q, D, I, ae, J, Zr, ar, vt, Xr, ue, lr, ur = n.constructor, en = n.s == i.s ? 1 : -1, Z = n.d, $ = i.d;
        if (!Z || !Z[0] || !$ || !$[0])
          return new ur(!n.s || !i.s || (Z ? $ && Z[0] == $[0] : !$) ? NaN : Z && Z[0] == 0 || !$ ? en * 0 : en / 0);
        for (l ? (S = 1, g = n.e - i.e) : (l = pe, S = k, g = X(n.e / S) - X(i.e / S)), ue = $.length, vt = Z.length, F = new ur(en), q = F.d = [], h = 0; $[h] == (Z[h] || 0); h++)
          ;
        if ($[h] > (Z[h] || 0) && g--, o == null ? (J = o = ur.precision, s = ur.rounding) : a ? J = o + (n.e - i.e) + 1 : J = o, J < 0)
          q.push(1), A = true;
        else {
          if (J = J / S + 2 | 0, h = 0, ue == 1) {
            for (v = 0, $ = $[0], J++; (h < vt || v) && J--; h++)
              Zr = v * l + (Z[h] || 0), q[h] = Zr / $ | 0, v = Zr % $ | 0;
            A = v || h < vt;
          } else {
            for (v = l / ($[0] + 1) | 0, v > 1 && ($ = e($, v, l), Z = e(Z, v, l), ue = $.length, vt = Z.length), ar = ue, D = Z.slice(0, ue), I = D.length; I < ue; )
              D[I++] = 0;
            lr = $.slice(), lr.unshift(0), Xr = $[0], $[1] >= l / 2 && ++Xr;
            do
              v = 0, u = t($, D, ue, I), u < 0 ? (ae = D[0], ue != I && (ae = ae * l + (D[1] || 0)), v = ae / Xr | 0, v > 1 ? (v >= l && (v = l - 1), R = e($, v, l), M = R.length, I = D.length, u = t(R, D, M, I), u == 1 && (v--, r(R, ue < M ? lr : $, M, l))) : (v == 0 && (u = v = 1), R = $.slice()), M = R.length, M < I && R.unshift(0), r(D, R, I, l), u == -1 && (I = D.length, u = t($, D, ue, I), u < 1 && (v++, r(D, ue < I ? lr : $, I, l))), I = D.length) : u === 0 && (v++, D = [0]), q[h++] = v, u && D[0] ? D[I++] = Z[ar] || 0 : (D = [Z[ar]], I = 1);
            while ((ar++ < vt || D[0] !== void 0) && J--);
            A = D[0] !== void 0;
          }
          q[0] || q.shift();
        }
        if (S == 1)
          F.e = g, oo = A;
        else {
          for (h = 1, v = q[0]; v >= 10; v /= 10)
            h++;
          F.e = h + g * S - 1, O(F, a ? o + F.e + 1 : o, s, A);
        }
        return F;
      };
    }();
    function O(e, t, r, n) {
      var i, o, s, a, l, u, g, h, v, S = e.constructor;
      e:
        if (t != null) {
          if (h = e.d, !h)
            return e;
          for (i = 1, a = h[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += k, s = t, g = h[v = 0], l = g / Q(10, i - s - 1) % 10 | 0;
          else if (v = Math.ceil((o + 1) / k), a = h.length, v >= a)
            if (n) {
              for (; a++ <= v; )
                h.push(0);
              g = l = 0, i = 1, o %= k, s = o - k + 1;
            } else
              break e;
          else {
            for (g = a = h[v], i = 1; a >= 10; a /= 10)
              i++;
            o %= k, s = o - k + i, l = s < 0 ? 0 : g / Q(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || h[v + 1] !== void 0 || (s < 0 ? g : g % Q(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / Q(10, i - s) : 0 : h[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
            return h.length = 0, u ? (t -= e.e + 1, h[0] = Q(10, (k - t % k) % k), e.e = -t || 0) : h[0] = e.e = 0, e;
          if (o == 0 ? (h.length = v, a = 1, v--) : (h.length = v + 1, a = Q(10, k - o), h[v] = s > 0 ? (g / Q(10, i - s) % Q(10, s) | 0) * a : 0), u)
            for (; ; )
              if (v == 0) {
                for (o = 1, s = h[0]; s >= 10; s /= 10)
                  o++;
                for (s = h[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, h[0] == pe && (h[0] = 1));
                break;
              } else {
                if (h[v] += a, h[v] != pe)
                  break;
                h[v--] = 0, a = 1;
              }
          for (o = h.length; h[--o] === 0; )
            h.pop();
        }
      return _ && (e.e > S.maxE ? (e.d = null, e.e = NaN) : e.e < S.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(O, "O");
    function me(e, t, r) {
      if (!e.isFinite())
        return fo(e);
      var n, i = e.e, o = Y(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Oe(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Oe(-i - 1) + o, r && (n = r - s) > 0 && (o += Oe(n))) : i >= s ? (o += Oe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Oe(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Oe(n))), o;
    }
    __name(me, "me");
    function vr(e, t) {
      var r = e[0];
      for (t *= k; r >= 10; r /= 10)
        t++;
      return t;
    }
    __name(vr, "vr");
    function xr(e, t, r) {
      if (t > gl)
        throw _ = true, r && (e.precision = r), Error(so);
      return O(new e(Er), t, 1, true);
    }
    __name(xr, "xr");
    function ce(e, t, r) {
      if (t > bn)
        throw Error(so);
      return O(new e(br), t, r, true);
    }
    __name(ce, "ce");
    function co(e) {
      var t = e.length - 1, r = t * k + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    __name(co, "co");
    function Oe(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    __name(Oe, "Oe");
    function po(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / k + 4);
      for (_ = false; ; ) {
        if (r % 2 && (o = o.times(t), no(o.d, s) && (i = true)), r = X(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), no(t.d, s);
      }
      return _ = true, o;
    }
    __name(po, "po");
    function ro(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(ro, "ro");
    function mo(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    __name(mo, "mo");
    function xn(e, t) {
      var r, n, i, o, s, a, l, u = 0, g = 0, h = 0, v = e.constructor, S = v.rounding, A = v.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (_ = false, l = A) : l = t, a = new v(0.03125); e.e > -2; )
        e = e.times(a), h += 5;
      for (n = Math.log(Q(2, h)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new v(1), v.precision = l; ; ) {
        if (o = O(o.times(e), l, 1), r = r.times(++g), a = s.plus(U(o, r, l, 1)), Y(a.d).slice(0, l) === Y(s.d).slice(0, l)) {
          for (i = h; i--; )
            s = O(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && kt(s.d, l - n, S, u))
              v.precision = l += 10, r = o = a = new v(1), g = 0, u++;
            else
              return O(s, v.precision = A, S, _ = true);
          else
            return v.precision = A, s;
        }
        s = a;
      }
    }
    __name(xn, "xn");
    function ke(e, t) {
      var r, n, i, o, s, a, l, u, g, h, v, S = 1, A = 10, R = e, M = R.d, F = R.constructor, q = F.rounding, D = F.precision;
      if (R.s < 0 || !M || !M[0] || !R.e && M[0] == 1 && M.length == 1)
        return new F(M && !M[0] ? -1 / 0 : R.s != 1 ? NaN : M ? 0 : R);
      if (t == null ? (_ = false, g = D) : g = t, F.precision = g += A, r = Y(M), n = r.charAt(0), Math.abs(o = R.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          R = R.times(e), r = Y(R.d), n = r.charAt(0), S++;
        o = R.e, n > 1 ? (R = new F("0." + r), o++) : R = new F(n + "." + r.slice(1));
      } else
        return u = xr(F, g + 2, D).times(o + ""), R = ke(new F(n + "." + r.slice(1)), g - A).plus(u), F.precision = D, t == null ? O(R, D, q, _ = true) : R;
      for (h = R, l = s = R = U(R.minus(1), R.plus(1), g, 1), v = O(R.times(R), g, 1), i = 3; ; ) {
        if (s = O(s.times(v), g, 1), u = l.plus(U(s, new F(i), g, 1)), Y(u.d).slice(0, g) === Y(l.d).slice(0, g))
          if (l = l.times(2), o !== 0 && (l = l.plus(xr(F, g + 2, D).times(o + ""))), l = U(l, new F(S), g, 1), t == null)
            if (kt(l.d, g - A, q, a))
              F.precision = g += A, u = s = R = U(h.minus(1), h.plus(1), g, 1), v = O(R.times(R), g, 1), i = a = 1;
            else
              return O(l, F.precision = D, q, _ = true);
          else
            return F.precision = D, l;
        l = u, i += 2;
      }
    }
    __name(ke, "ke");
    function fo(e) {
      return String(e.s * e.s / 0);
    }
    __name(fo, "fo");
    function Pn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % k, r < 0 && (n += k), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= k; n < i; )
            e.d.push(+t.slice(n, n += k));
          t = t.slice(n), n = k - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), _ && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    __name(Pn, "Pn");
    function yl(e, t) {
      var r, n, i, o, s, a, l, u, g;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), uo.test(t))
          return Pn(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (dl.test(t))
        r = 16, t = t.toLowerCase();
      else if (pl.test(t))
        r = 2;
      else if (ml.test(t))
        r = 8;
      else
        throw Error(De + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = po(n, new n(r), o, o * 2)), u = wr(t, r, pe), g = u.length - 1, o = g; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = vr(u, g), e.d = u, _ = false, s && (e = U(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : $e.pow(2, l))), _ = true, e);
    }
    __name(yl, "yl");
    function wl(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : tt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Tr(5, r)), t = tt(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    __name(wl, "wl");
    function tt(e, t, r, n, i) {
      var o, s, a, l, u = 1, g = e.precision, h = Math.ceil(g / k);
      for (_ = false, l = r.times(r), a = new e(n); ; ) {
        if (s = U(a.times(l), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = U(s.times(l), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== void 0) {
          for (o = h; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return _ = true, s.d.length = h + 1, s;
    }
    __name(tt, "tt");
    function Tr(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    __name(Tr, "Tr");
    function go(e, t) {
      var r, n = t.s < 0, i = ce(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Ce = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Ce = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Ce = ro(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Ce = ro(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    __name(go, "go");
    function vn(e, t, r, n) {
      var i, o, s, a, l, u, g, h, v, S = e.constructor, A = r !== void 0;
      if (A ? (ie(r, 1, Me), n === void 0 ? n = S.rounding : ie(n, 0, 8)) : (r = S.precision, n = S.rounding), !e.isFinite())
        g = fo(e);
      else {
        for (g = me(e), s = g.indexOf("."), A ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace(".", ""), v = new S(1), v.e = g.length - s, v.d = wr(me(v), 10, i), v.e = v.d.length), h = wr(g, 10, i), o = l = h.length; h[--l] == 0; )
          h.pop();
        if (!h[0])
          g = A ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new S(e), e.d = h, e.e = o, e = U(e, v, r, n, 0, i), h = e.d, o = e.e, u = oo), s = h[r], a = i / 2, u = u || h[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, u)
            for (; ++h[--r] > i - 1; )
              h[r] = 0, r || (++o, h.unshift(1));
          for (l = h.length; !h[l - 1]; --l)
            ;
          for (s = 0, g = ""; s < l; s++)
            g += wn.charAt(h[s]);
          if (A) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  g += "0";
                for (h = wr(g, i, t), l = h.length; !h[l - 1]; --l)
                  ;
                for (s = 1, g = "1."; s < l; s++)
                  g += wn.charAt(h[s]);
              } else
                g = g.charAt(0) + "." + g.slice(1);
            g = g + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              g = "0" + g;
            g = "0." + g;
          } else if (++o > l)
            for (o -= l; o--; )
              g += "0";
          else
            o < l && (g = g.slice(0, o) + "." + g.slice(o));
        }
        g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
      }
      return e.s < 0 ? "-" + g : g;
    }
    __name(vn, "vn");
    function no(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    __name(no, "no");
    function El(e) {
      return new this(e).abs();
    }
    __name(El, "El");
    function bl(e) {
      return new this(e).acos();
    }
    __name(bl, "bl");
    function xl(e) {
      return new this(e).acosh();
    }
    __name(xl, "xl");
    function Pl(e, t) {
      return new this(e).plus(t);
    }
    __name(Pl, "Pl");
    function vl(e) {
      return new this(e).asin();
    }
    __name(vl, "vl");
    function Tl(e) {
      return new this(e).asinh();
    }
    __name(Tl, "Tl");
    function Cl(e) {
      return new this(e).atan();
    }
    __name(Cl, "Cl");
    function Al(e) {
      return new this(e).atanh();
    }
    __name(Al, "Al");
    function Rl(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ce(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ce(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ce(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(U(e, t, o, 1)), t = ce(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(U(e, t, o, 1)), r;
    }
    __name(Rl, "Rl");
    function Sl(e) {
      return new this(e).cbrt();
    }
    __name(Sl, "Sl");
    function Il(e) {
      return O(e = new this(e), e.e + 1, 2);
    }
    __name(Il, "Il");
    function Ol(e, t, r) {
      return new this(e).clamp(t, r);
    }
    __name(Ol, "Ol");
    function kl(e) {
      if (!e || typeof e != "object")
        throw Error(Pr + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, Me, "rounding", 0, 8, "toExpNeg", -et, 0, "toExpPos", 0, et, "maxE", 0, et, "minE", -et, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = En[r]), (n = e[r]) !== void 0)
          if (X(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(De + r + ": " + n);
      if (r = "crypto", i && (this[r] = En[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(ao);
          else
            this[r] = false;
        else
          throw Error(De + r + ": " + n);
      return this;
    }
    __name(kl, "kl");
    function Dl(e) {
      return new this(e).cos();
    }
    __name(Dl, "Dl");
    function Ml(e) {
      return new this(e).cosh();
    }
    __name(Ml, "Ml");
    function ho(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, io(o)) {
          u.s = o.s, _ ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            _ ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return Pn(u, o.toString());
        } else if (l !== "string")
          throw Error(De + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), uo.test(o) ? Pn(u, o) : yl(u, o);
      }
      __name(i, "i");
      if (i.prototype = C, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = kl, i.clone = ho, i.isDecimal = io, i.abs = El, i.acos = bl, i.acosh = xl, i.add = Pl, i.asin = vl, i.asinh = Tl, i.atan = Cl, i.atanh = Al, i.atan2 = Rl, i.cbrt = Sl, i.ceil = Il, i.clamp = Ol, i.cos = Dl, i.cosh = Ml, i.div = Nl, i.exp = Fl, i.floor = _l, i.hypot = Ll, i.ln = ql, i.log = Bl, i.log10 = $l, i.log2 = Ul, i.max = Vl, i.min = jl, i.mod = Jl, i.mul = Gl, i.pow = Ql, i.random = Hl, i.round = Wl, i.sign = Kl, i.sin = zl, i.sinh = Yl, i.sqrt = Zl, i.sub = Xl, i.sum = eu, i.tan = tu, i.tanh = ru, i.trunc = nu, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(ho, "ho");
    function Nl(e, t) {
      return new this(e).div(t);
    }
    __name(Nl, "Nl");
    function Fl(e) {
      return new this(e).exp();
    }
    __name(Fl, "Fl");
    function _l(e) {
      return O(e = new this(e), e.e + 1, 3);
    }
    __name(_l, "_l");
    function Ll() {
      var e, t, r = new this(0);
      for (_ = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return _ = true, new this(1 / 0);
          r = t;
        }
      return _ = true, r.sqrt();
    }
    __name(Ll, "Ll");
    function io(e) {
      return e instanceof $e || e && e.toStringTag === lo || false;
    }
    __name(io, "io");
    function ql(e) {
      return new this(e).ln();
    }
    __name(ql, "ql");
    function Bl(e, t) {
      return new this(e).log(t);
    }
    __name(Bl, "Bl");
    function Ul(e) {
      return new this(e).log(2);
    }
    __name(Ul, "Ul");
    function $l(e) {
      return new this(e).log(10);
    }
    __name($l, "$l");
    function Vl() {
      return mo(this, arguments, "lt");
    }
    __name(Vl, "Vl");
    function jl() {
      return mo(this, arguments, "gt");
    }
    __name(jl, "jl");
    function Jl(e, t) {
      return new this(e).mod(t);
    }
    __name(Jl, "Jl");
    function Gl(e, t) {
      return new this(e).mul(t);
    }
    __name(Gl, "Gl");
    function Ql(e, t) {
      return new this(e).pow(t);
    }
    __name(Ql, "Ql");
    function Hl(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ie(e, 1, Me), n = Math.ceil(e / k), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(ao);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= k, n && e && (i = Q(10, k - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= k)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < k && (r -= k - n);
      }
      return s.e = r, s.d = a, s;
    }
    __name(Hl, "Hl");
    function Wl(e) {
      return O(e = new this(e), e.e + 1, this.rounding);
    }
    __name(Wl, "Wl");
    function Kl(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(Kl, "Kl");
    function zl(e) {
      return new this(e).sin();
    }
    __name(zl, "zl");
    function Yl(e) {
      return new this(e).sinh();
    }
    __name(Yl, "Yl");
    function Zl(e) {
      return new this(e).sqrt();
    }
    __name(Zl, "Zl");
    function Xl(e, t) {
      return new this(e).sub(t);
    }
    __name(Xl, "Xl");
    function eu() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (_ = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return _ = true, O(r, this.precision, this.rounding);
    }
    __name(eu, "eu");
    function tu(e) {
      return new this(e).tan();
    }
    __name(tu, "tu");
    function ru(e) {
      return new this(e).tanh();
    }
    __name(ru, "ru");
    function nu(e) {
      return O(e = new this(e), e.e + 1, 1);
    }
    __name(nu, "nu");
    C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
    C[Symbol.toStringTag] = "Decimal";
    var $e = C.constructor = ho(En);
    Er = new $e(Er);
    br = new $e(br);
    var fe = $e;
    function rt(e) {
      return e === null ? e : Array.isArray(e) ? e.map(rt) : typeof e == "object" ? iu(e) ? ou(e) : Xe(e, rt) : e;
    }
    __name(rt, "rt");
    function iu(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(iu, "iu");
    function ou({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return w.Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new fe(t);
        case "Json":
          return JSON.parse(t);
        default:
          Pe(t, "Unknown tagged value");
      }
    }
    __name(ou, "ou");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function nt(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(nt, "nt");
    f();
    c();
    p();
    d();
    m();
    function it(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(it, "it");
    function Cr(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Cr, "Cr");
    f();
    c();
    p();
    d();
    m();
    function ot(e) {
      return $e.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(ot, "ot");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var su = qe(Wi());
    var au = { red: Ze, gray: Bi, dim: gr, bold: fr, underline: Ni, highlightSource: (e) => e.highlight() };
    var lu = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function uu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(uu, "uu");
    function cu({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(pu(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(cu, "cu");
    function pu(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(pu, "pu");
    function st(e) {
      let t = e.showColors ? au : lu, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = uu(e), cu(r, t);
    }
    __name(st, "st");
    f();
    c();
    p();
    d();
    m();
    var vo = qe(Tn());
    f();
    c();
    p();
    d();
    m();
    function bo(e, t, r) {
      let n = xo(e), i = du(n), o = fu(i);
      o ? Ar(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(bo, "bo");
    function xo(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? xo(t) : [t]);
    }
    __name(xo, "xo");
    function du(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: mu(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(du, "du");
    function mu(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(mu, "mu");
    function fu(e) {
      return yn(e, (t, r) => {
        let n = wo(t), i = wo(r);
        return n !== i ? n - i : Eo(t) - Eo(r);
      });
    }
    __name(fu, "fu");
    function wo(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(wo, "wo");
    function Eo(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(Eo, "Eo");
    f();
    c();
    p();
    d();
    m();
    var le = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    }, "le");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var at = /* @__PURE__ */ __name(class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++)
          n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    }, "at");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Rr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    }, "Rr");
    f();
    c();
    p();
    d();
    m();
    var Sr = /* @__PURE__ */ __name((e) => e, "Sr");
    var Ir = { bold: Sr, red: Sr, green: Sr, dim: Sr, enabled: false };
    var Po = { bold: fr, red: Ze, green: Fi, dim: gr, enabled: true };
    var lt = { write(e) {
      e.writeLine(",");
    } };
    f();
    c();
    p();
    d();
    m();
    var ge = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    }, "ge");
    f();
    c();
    p();
    d();
    m();
    var Ne = /* @__PURE__ */ __name(class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    }, "Ne");
    var ut = /* @__PURE__ */ __name(class extends Ne {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Rr(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new ge("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(lt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    }, "ut");
    var ct = /* @__PURE__ */ __name(class e extends Ne {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof ut && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r)
          return { kind: "select", value: r };
        let n = this.getField("include")?.value.asObject();
        if (n)
          return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new ge("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(lt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    }, "e");
    f();
    c();
    p();
    d();
    m();
    var z = /* @__PURE__ */ __name(class extends Ne {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new ge(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    }, "z");
    f();
    c();
    p();
    d();
    m();
    var Dt = /* @__PURE__ */ __name(class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(lt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    }, "Dt");
    function Ar(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          hu(e, t);
          break;
        case "IncludeOnScalar":
          yu(e, t);
          break;
        case "EmptySelection":
          wu(e, t, r);
          break;
        case "UnknownSelectionField":
          Pu(e, t);
          break;
        case "InvalidSelectionValue":
          vu(e, t);
          break;
        case "UnknownArgument":
          Tu(e, t);
          break;
        case "UnknownInputField":
          Cu(e, t);
          break;
        case "RequiredArgumentMissing":
          Au(e, t);
          break;
        case "InvalidArgumentType":
          Ru(e, t);
          break;
        case "InvalidArgumentValue":
          Su(e, t);
          break;
        case "ValueTooLarge":
          Iu(e, t);
          break;
        case "SomeFieldsMissing":
          Ou(e, t);
          break;
        case "TooManyFieldsGiven":
          ku(e, t);
          break;
        case "Union":
          bo(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(Ar, "Ar");
    function hu(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(hu, "hu");
    function yu(e, t) {
      let [r, n] = Mt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new le(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${Nt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(yu, "yu");
    function wu(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          Eu(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          bu(e, t);
          return;
        }
      }
      if (r?.[nt(e.outputType.name)]) {
        xu(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(wu, "wu");
    function Eu(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields)
        r.addSuggestion(new le(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Eu, "Eu");
    function bu(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Ao(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Nt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(bu, "bu");
    function xu(e, t) {
      let r = new Dt();
      for (let i of e.outputType.fields)
        i.isRelation || r.addField(i.name, "false");
      let n = new le("omit", r).makeRequired();
      if (e.selectionPath.length === 0)
        t.arguments.addSuggestion(n);
      else {
        let [i, o] = Mt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new ct();
          l.addSuggestion(n), a.value = l;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(xu, "xu");
    function Pu(e, t) {
      let r = Ro(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            Ao(n, e.outputType);
            break;
          case "include":
            Du(n, e.outputType);
            break;
          case "omit":
            Mu(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(Nt(n)), i.join(" ");
      });
    }
    __name(Pu, "Pu");
    function vu(e, t) {
      let r = Ro(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(vu, "vu");
    function Tu(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Nu(n, e.arguments)), t.addErrorMessage((i) => To(i, r, e.arguments.map((o) => o.name)));
    }
    __name(Tu, "Tu");
    function Cu(e, t) {
      let [r, n] = Mt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && So(o, e.inputType);
      }
      t.addErrorMessage((o) => To(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(Cu, "Cu");
    function To(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = _u(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Nt(e)), n.join(" ");
    }
    __name(To, "To");
    function Au(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof z && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n)
        return;
      let [i, o] = Mt(e.argumentPath), s = new Dt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new le(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(Co).join(" | ");
          a.addSuggestion(new le(o, l).makeRequired());
        }
    }
    __name(Au, "Au");
    function Co(e) {
      return e.kind === "list" ? `${Co(e.elementType)}[]` : e.name;
    }
    __name(Co, "Co");
    function Ru(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Or("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(Ru, "Ru");
    function Su(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Or("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(Su, "Su");
    function Iu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof z && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(Iu, "Iu");
    function Ou(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && So(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Or("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Nt(i)), o.join(" ");
      });
    }
    __name(Ou, "Ou");
    function ku(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Or("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(ku, "ku");
    function Ao(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
    }
    __name(Ao, "Ao");
    function Du(e, t) {
      for (let r of t.fields)
        r.isRelation && !e.hasField(r.name) && e.addSuggestion(new le(r.name, "true"));
    }
    __name(Du, "Du");
    function Mu(e, t) {
      for (let r of t.fields)
        !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new le(r.name, "true"));
    }
    __name(Mu, "Mu");
    function Nu(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Nu, "Nu");
    function Ro(e, t) {
      let [r, n] = Mt(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i)
        return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(Ro, "Ro");
    function So(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(So, "So");
    function Mt(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(Mt, "Mt");
    function Nt({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(Nt, "Nt");
    function Or(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Or, "Or");
    var Fu = 3;
    function _u(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, vo.default)(e, i);
        o > Fu || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(_u, "_u");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Io(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Io, "Io");
    f();
    c();
    p();
    d();
    m();
    var Ft = /* @__PURE__ */ __name(class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    }, "Ft");
    function pt(e) {
      return e instanceof Ft;
    }
    __name(pt, "pt");
    f();
    c();
    p();
    d();
    m();
    var kr = Symbol();
    var Cn = /* @__PURE__ */ new WeakMap();
    var Ae = /* @__PURE__ */ __name(class {
      constructor(t) {
        t === kr ? Cn.set(this, `Prisma.${this._getName()}`) : Cn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Cn.get(this);
      }
    }, "Ae");
    var _t = /* @__PURE__ */ __name(class extends Ae {
      _getNamespace() {
        return "NullTypes";
      }
    }, "_t");
    var Lt = /* @__PURE__ */ __name(class extends _t {
    }, "Lt");
    An(Lt, "DbNull");
    var qt = /* @__PURE__ */ __name(class extends _t {
    }, "qt");
    An(qt, "JsonNull");
    var Bt = /* @__PURE__ */ __name(class extends _t {
    }, "Bt");
    An(Bt, "AnyNull");
    var Dr = { classes: { DbNull: Lt, JsonNull: qt, AnyNull: Bt }, instances: { DbNull: new Lt(kr), JsonNull: new qt(kr), AnyNull: new Bt(kr) } };
    function An(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(An, "An");
    f();
    c();
    p();
    d();
    m();
    var Oo = ": ";
    var Mr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Oo.length;
      }
      write(t) {
        let r = new ge(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Oo).write(this.value);
      }
    }, "Mr");
    var Rn = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    }, "Rn");
    function dt(e) {
      return new Rn(ko(e));
    }
    __name(dt, "dt");
    function ko(e) {
      let t = new ct();
      for (let [r, n] of Object.entries(e)) {
        let i = new Mr(r, Do(n));
        t.addField(i);
      }
      return t;
    }
    __name(ko, "ko");
    function Do(e) {
      if (typeof e == "string")
        return new z(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new z(String(e));
      if (typeof e == "bigint")
        return new z(`${e}n`);
      if (e === null)
        return new z("null");
      if (e === void 0)
        return new z("undefined");
      if (ot(e))
        return new z(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return w.Buffer.isBuffer(e) ? new z(`Buffer.alloc(${e.byteLength})`) : new z(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Cr(e) ? e.toISOString() : "Invalid Date";
        return new z(`new Date("${t}")`);
      }
      return e instanceof Ae ? new z(`Prisma.${e._getName()}`) : pt(e) ? new z(`prisma.${Io(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Lu(e) : typeof e == "object" ? ko(e) : new z(Object.prototype.toString.call(e));
    }
    __name(Do, "Do");
    function Lu(e) {
      let t = new ut();
      for (let r of e)
        t.addItem(Do(r));
      return t;
    }
    __name(Lu, "Lu");
    function Nr(e, t) {
      let r = t === "pretty" ? Po : Ir, n = e.renderAllMessages(r), i = new at(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(Nr, "Nr");
    function Fr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = dt(e);
      for (let h of t)
        Ar(h, a, s);
      let { message: l, args: u } = Nr(a, r), g = st({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new K(g, { clientVersion: o });
    }
    __name(Fr, "Fr");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var he = /* @__PURE__ */ __name(class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    }, "he");
    f();
    c();
    p();
    d();
    m();
    function Ut(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(Ut, "Ut");
    f();
    c();
    p();
    d();
    m();
    function ye(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(ye, "ye");
    f();
    c();
    p();
    d();
    m();
    function No(e, t, r) {
      let n = ye(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : qu({ ...e, ...Mo(t.name, e, t.result.$allModels), ...Mo(t.name, e, t.result[n]) });
    }
    __name(No, "No");
    function qu(e) {
      let t = new he(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Xe(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(qu, "qu");
    function Mo(e, t, r) {
      return r ? Xe(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Bu(t, o, i) })) : {};
    }
    __name(Mo, "Mo");
    function Bu(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(Bu, "Bu");
    function Fo(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    __name(Fo, "Fo");
    function _o(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (!e[n.name])
          for (let i of n.needs)
            delete r[i];
      return r;
    }
    __name(_o, "_o");
    var _r = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new he();
        this.modelExtensionsCache = new he();
        this.queryCallbacksCache = new he();
        this.clientExtensions = Ut(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = Ut(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => No(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = ye(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    }, "_r");
    var mt = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new _r(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new _r(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    }, "e");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Lo = Symbol();
    var $t = /* @__PURE__ */ __name(class {
      constructor(t) {
        if (t !== Lo)
          throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Lr : t;
      }
    }, "$t");
    var Lr = new $t(Lo);
    function we(e) {
      return e instanceof $t;
    }
    __name(we, "we");
    var Uu = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var qo = "explicitly `undefined` values are not allowed";
    function qr({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = mt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: g }) {
      let h = new Sn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: g });
      return { modelName: e, action: Uu[t], query: Vt(r, h) };
    }
    __name(qr, "qr");
    function Vt({ select: e, include: t, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: Uo(r, n), selection: $u(e, t, i, n) };
    }
    __name(Vt, "Vt");
    function $u(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Gu(e, n)) : Vu(n, t, r);
    }
    __name($u, "$u");
    function Vu(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && ju(n, t, e), e.isPreviewFeatureOn("omitApi") && Ju(n, r, e), n;
    }
    __name(Vu, "Vu");
    function ju(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (we(i))
          continue;
        let o = r.nestSelection(n);
        if (In(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = Vt(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Vt(i, o);
      }
    }
    __name(ju, "ju");
    function Ju(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = _o(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (we(a))
          continue;
        In(a, r.nestSelection(s));
        let l = r.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    __name(Ju, "Ju");
    function Gu(e, t) {
      let r = {}, n = t.getComputedFields(), i = Fo(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (we(s))
          continue;
        let a = t.nestSelection(o);
        In(s, a);
        let l = t.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || we(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? r[o] = Vt({}, a) : r[o] = true;
            continue;
          }
          r[o] = Vt(s, a);
        }
      }
      return r;
    }
    __name(Gu, "Gu");
    function Bo(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (it(e)) {
        if (Cr(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (pt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Qu(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
      if (Hu(e))
        return e.values;
      if (ot(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ae) {
        if (e !== Dr.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Wu(e))
        return e.toJSON();
      if (typeof e == "object")
        return Uo(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(Bo, "Bo");
    function Uo(e, t) {
      if (e.$type)
        return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        we(i) || (i !== void 0 ? r[n] = Bo(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: qo }));
      }
      return r;
    }
    __name(Uo, "Uo");
    function Qu(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || we(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(Bo(o, i));
      }
      return r;
    }
    __name(Qu, "Qu");
    function Hu(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(Hu, "Hu");
    function Wu(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(Wu, "Wu");
    function In(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: qo });
    }
    __name(In, "In");
    var Sn = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t) {
        Fr({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType))
          return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[nt(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Pe(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    }, "e");
    f();
    c();
    p();
    d();
    m();
    var ft = /* @__PURE__ */ __name(class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    }, "ft");
    f();
    c();
    p();
    d();
    m();
    function $o(e) {
      return { models: On(e.models), enums: On(e.enums), types: On(e.types) };
    }
    __name($o, "$o");
    function On(e) {
      let t = {};
      for (let { name: r, ...n } of e)
        t[r] = n;
      return t;
    }
    __name(On, "On");
    function Vo(e, t) {
      let r = Ut(() => Ku(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    __name(Vo, "Vo");
    function Ku(e) {
      return { datamodel: { models: kn(e.models), enums: kn(e.enums), types: kn(e.types) } };
    }
    __name(Ku, "Ku");
    function kn(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    __name(kn, "kn");
    f();
    c();
    p();
    d();
    m();
    var Dn = /* @__PURE__ */ new WeakMap();
    var Br = "$$PrismaTypedSql";
    var Mn = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        Dn.set(this, { sql: t, values: r }), Object.defineProperty(this, Br, { value: Br });
      }
      get sql() {
        return Dn.get(this).sql;
      }
      get values() {
        return Dn.get(this).values;
      }
    }, "Mn");
    function jo(e) {
      return (...t) => new Mn(e, t);
    }
    __name(jo, "jo");
    function Jo(e) {
      return e != null && e[Br] === Br;
    }
    __name(Jo, "Jo");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function jt(e) {
      return { ok: false, error: e, map() {
        return jt(e);
      }, flatMap() {
        return jt(e);
      } };
    }
    __name(jt, "jt");
    var Nn = /* @__PURE__ */ __name(class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    }, "Nn");
    var Fn = /* @__PURE__ */ __name((e) => {
      let t = new Nn(), r = Ee(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: Ee(t, e.queryRaw.bind(e)), executeRaw: Ee(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => zu(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = Zu(t, e.getConnectionInfo.bind(e))), n;
    }, "Fn");
    var zu = /* @__PURE__ */ __name((e, t) => {
      let r = Ee(e, t.startTransaction.bind(t));
      return { adapterName: t.adapterName, provider: t.provider, queryRaw: Ee(e, t.queryRaw.bind(t)), executeRaw: Ee(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => Yu(e, o)) };
    }, "zu");
    var Yu = /* @__PURE__ */ __name((e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: Ee(e, t.queryRaw.bind(t)), executeRaw: Ee(e, t.executeRaw.bind(t)), commit: Ee(e, t.commit.bind(t)), rollback: Ee(e, t.rollback.bind(t)) }), "Yu");
    function Ee(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return jt({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(Ee, "Ee");
    function Zu(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return jt({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(Zu, "Zu");
    var ca = qe(Go());
    var iD = qe(Qo());
    Qi();
    Ii();
    Ji();
    f();
    c();
    p();
    d();
    m();
    var oe = /* @__PURE__ */ __name(class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    }, "e");
    function Ho(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([r, ...Array(e.length - 1).fill(t), n], e);
    }
    __name(Ho, "Ho");
    function _n(e) {
      return new oe([e], []);
    }
    __name(_n, "_n");
    var Wo = _n("");
    function Ln(e, ...t) {
      return new oe(e, t);
    }
    __name(Ln, "Ln");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Jt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(Jt, "Jt");
    f();
    c();
    p();
    d();
    m();
    function te(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(te, "te");
    f();
    c();
    p();
    d();
    m();
    function Ve(e) {
      let t = new he();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(Ve, "Ve");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Ur = { enumerable: true, configurable: true, writable: true };
    function $r(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => Ur, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    __name($r, "$r");
    var Ko = Symbol.for("nodejs.util.inspect.custom");
    function be(e, t) {
      let r = ec(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = zo(Reflect.ownKeys(o), r), a = zo(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...Ur, ...l?.getPropertyDescriptor(s) } : Ur : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[Ko] = function() {
        let o = { ...this };
        return delete o[Ko], o;
      }, i;
    }
    __name(be, "be");
    function ec(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    __name(ec, "ec");
    function zo(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(zo, "zo");
    f();
    c();
    p();
    d();
    m();
    function gt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(gt, "gt");
    f();
    c();
    p();
    d();
    m();
    function Vr(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(Vr, "Vr");
    f();
    c();
    p();
    d();
    m();
    function Yo(e) {
      if (e === void 0)
        return "";
      let t = dt(e);
      return new at(0, { colors: Ir }).write(t).toString();
    }
    __name(Yo, "Yo");
    f();
    c();
    p();
    d();
    m();
    var tc = "P2037";
    function Gt({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new W(rc(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new ne(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    __name(Gt, "Gt");
    function rc(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === tc && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(rc, "rc");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var qn = /* @__PURE__ */ __name(class {
      getLocation() {
        return null;
      }
    }, "qn");
    function Fe(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new qn();
    }
    __name(Fe, "Fe");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Zo = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function ht(e = {}) {
      let t = ic(e);
      return Object.entries(t).reduce((n, [i, o]) => (Zo[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(ht, "ht");
    function ic(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(ic, "ic");
    function jr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(jr, "jr");
    function Xo(e, t) {
      let r = jr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: ht })(e);
    }
    __name(Xo, "Xo");
    f();
    c();
    p();
    d();
    m();
    function oc(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? ht({ ...r, _count: t }) : ht({ ...r, _count: { _all: true } });
    }
    __name(oc, "oc");
    function sc(e = {}) {
      return typeof e.select == "object" ? (t) => jr(e)(t)._count : (t) => jr(e)(t)._count._all;
    }
    __name(sc, "sc");
    function es(e, t) {
      return t({ action: "count", unpacker: sc(e), argsMapper: oc })(e);
    }
    __name(es, "es");
    f();
    c();
    p();
    d();
    m();
    function ac(e = {}) {
      let t = ht(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(ac, "ac");
    function lc(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(lc, "lc");
    function ts(e, t) {
      return t({ action: "groupBy", unpacker: lc(e), argsMapper: ac })(e);
    }
    __name(ts, "ts");
    function rs(e, t, r) {
      if (t === "aggregate")
        return (n) => Xo(n, r);
      if (t === "count")
        return (n) => es(n, r);
      if (t === "groupBy")
        return (n) => ts(n, r);
    }
    __name(rs, "rs");
    f();
    c();
    p();
    d();
    m();
    function ns(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = hn(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new Ft(e, o, s.type, s.isList, s.kind === "enum");
      }, ...$r(Object.keys(n)) });
    }
    __name(ns, "ns");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var is = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "is");
    var Bn = /* @__PURE__ */ __name((e, t) => is(t).reduce((r, n) => r && r[n], e), "Bn");
    var os = /* @__PURE__ */ __name((e, t, r) => is(t).reduceRight((n, i, o, s) => Object.assign({}, Bn(e, s.slice(0, o)), { [i]: n }), r), "os");
    function uc(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(uc, "uc");
    function cc(e, t, r) {
      return t === void 0 ? e ?? {} : os(t, r, e || true);
    }
    __name(cc, "cc");
    function Un(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = Fe(e._errorFormat), g = uc(n, i), h = cc(l, o, g), v = r({ dataPath: g, callsite: u })(h), S = pc(e, t);
        return new Proxy(v, { get(A, R) {
          if (!S.includes(R))
            return A[R];
          let F = [a[R].type, r, R], q = [g, h];
          return Un(e, ...F, ...q);
        }, ...$r([...S, ...Object.getOwnPropertyNames(v)]) });
      };
    }
    __name(Un, "Un");
    function pc(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(pc, "pc");
    f();
    c();
    p();
    d();
    m();
    function ss(e, t, r, n) {
      return e === Ue.ModelAction.findFirstOrThrow || e === Ue.ModelAction.findUniqueOrThrow ? dc(t, r, n) : n;
    }
    __name(ss, "ss");
    function dc(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = st({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new K(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof W && o.code === "P2025" ? new ve(`No ${e} found`, t) : o;
        });
      };
    }
    __name(dc, "dc");
    var mc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var fc = ["aggregate", "count", "groupBy"];
    function $n(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [gc(e, t), yc(e, t), Jt(r), te("name", () => t), te("$name", () => t), te("$parent", () => e._appliedParent)];
      return be({}, n);
    }
    __name($n, "$n");
    function gc(e, t) {
      let r = ye(t), n = Object.keys(Ue.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((l) => e._request(l), "s");
        s = ss(o, t, e._clientVersion, s);
        let a = /* @__PURE__ */ __name((l) => (u) => {
          let g = Fe(e._errorFormat);
          return e._createPrismaPromise((h) => {
            let v = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: h, callsite: g };
            return s({ ...v, ...l });
          });
        }, "a");
        return mc.includes(o) ? Un(e, t, a) : hc(i) ? rs(e, i, a) : a({});
      } };
    }
    __name(gc, "gc");
    function hc(e) {
      return fc.includes(e);
    }
    __name(hc, "hc");
    function yc(e, t) {
      return Ve(te("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return ns(t, r);
      }));
    }
    __name(yc, "yc");
    f();
    c();
    p();
    d();
    m();
    function as(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(as, "as");
    var Vn = Symbol();
    function Qt(e) {
      let t = [wc(e), te(Vn, () => e), te("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Jt(r)), be(e, t);
    }
    __name(Qt, "Qt");
    function wc(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(ye), n = [...new Set(t.concat(r))];
      return Ve({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = as(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return $n(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return $n(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    __name(wc, "wc");
    function ls(e) {
      return e[Vn] ? e[Vn] : e;
    }
    __name(ls, "ls");
    function us(e) {
      if (typeof e == "function")
        return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Qt(t);
    }
    __name(us, "us");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function cs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o)
        return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name])
            continue;
          let u = l.needs.filter((g) => n[g]);
          u.length > 0 && a.push(gt(u));
        } else if (r) {
          if (!r[l.name])
            continue;
          let u = l.needs.filter((g) => !r[g]);
          u.length > 0 && a.push(gt(u));
        }
        Ec(e, l.needs) && s.push(bc(l, be(e, s)));
      }
      return s.length > 0 || a.length > 0 ? be(e, [...s, ...a]) : e;
    }
    __name(cs, "cs");
    function Ec(e, t) {
      return t.every((r) => gn(e, r));
    }
    __name(Ec, "Ec");
    function bc(e, t) {
      return Ve(te(e.name, () => e.compute(t)));
    }
    __name(bc, "bc");
    f();
    c();
    p();
    d();
    m();
    function Jr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = Jr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && ps({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ps({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(Jr, "Jr");
    function ps({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || we(s))
          continue;
        let l = n.models[r].fields.find((g) => g.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = Jr({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    __name(ps, "ps");
    function ds({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Jr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
        let g = ye(l);
        return cs({ result: a, modelName: g, select: u.select, omit: u.select ? void 0 : { ...o?.[g], ...u.omit }, extensions: n });
      } });
    }
    __name(ds, "ds");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function ms(e) {
      if (e instanceof oe)
        return xc(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Ht(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Ht(e[r]);
      return t;
    }
    __name(ms, "ms");
    function xc(e) {
      return new oe(e.strings, e.values);
    }
    __name(xc, "xc");
    function Ht(e) {
      if (typeof e != "object" || e == null || e instanceof Ae || pt(e))
        return e;
      if (ot(e))
        return new fe(e.toFixed());
      if (it(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Ht(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Ht(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Ht(e[r]);
        return t;
      }
      Pe(e, "Unknown value");
    }
    __name(Ht, "Ht");
    function gs(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: ms(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Es(o, l), a.args = s, gs(e, a, r, n + 1);
        } });
      });
    }
    __name(gs, "gs");
    function hs(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return gs(e, t, s);
    }
    __name(hs, "hs");
    function ys(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? ws(r, n, 0, e) : e(r);
      };
    }
    __name(ys, "ys");
    function ws(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Es(i, l), ws(a, t, r + 1, n);
      } });
    }
    __name(ws, "ws");
    var fs = /* @__PURE__ */ __name((e) => e, "fs");
    function Es(e = fs, t = fs) {
      return (r) => e(t(r));
    }
    __name(Es, "Es");
    f();
    c();
    p();
    d();
    m();
    var bs = ee("prisma:client");
    var xs = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Ps({ postinstall: e, ciName: t, clientVersion: r }) {
      if (bs("checkPlatformCaching:postinstall", e), bs("checkPlatformCaching:ciName", t), e === true && t && t in xs) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${xs[t]}-build`;
        throw console.error(n), new G(n, r);
      }
    }
    __name(Ps, "Ps");
    f();
    c();
    p();
    d();
    m();
    function vs(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(vs, "vs");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Pc = "Cloudflare-Workers";
    var vc = "node";
    function Ts() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Pc ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === vc ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    __name(Ts, "Ts");
    var Tc = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Gr() {
      let e = Ts();
      return { id: e, prettyName: Tc[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Gr, "Gr");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function yt({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
        throw Gr().id === "workerd" ? new G(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new G(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new G("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(yt, "yt");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Qr = /* @__PURE__ */ __name(class extends Error {
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    }, "Qr");
    var se = /* @__PURE__ */ __name(class extends Qr {
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    }, "se");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function L(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(L, "L");
    var wt = /* @__PURE__ */ __name(class extends se {
      constructor(r) {
        super("This request must be retried", L(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    }, "wt");
    N(wt, "ForcedRetryError");
    f();
    c();
    p();
    d();
    m();
    var je = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(r, L(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    }, "je");
    N(je, "InvalidDatasourceError");
    f();
    c();
    p();
    d();
    m();
    var Je = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(r, L(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    }, "Je");
    N(Je, "NotImplementedYetError");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var j = /* @__PURE__ */ __name(class extends se {
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    }, "j");
    var Ge = /* @__PURE__ */ __name(class extends j {
      constructor(r) {
        super("Schema needs to be uploaded", L(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    }, "Ge");
    N(Ge, "SchemaMissingError");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var jn = "This request could not be understood by the server";
    var Wt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n || jn, L(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    }, "Wt");
    N(Wt, "BadRequestError");
    f();
    c();
    p();
    d();
    m();
    var Kt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", L(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    }, "Kt");
    N(Kt, "HealthcheckTimeoutError");
    f();
    c();
    p();
    d();
    m();
    var zt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n, L(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    }, "zt");
    N(zt, "EngineStartupError");
    f();
    c();
    p();
    d();
    m();
    var Yt = /* @__PURE__ */ __name(class extends j {
      constructor(r) {
        super("Engine version is not supported", L(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    }, "Yt");
    N(Yt, "EngineVersionNotSupportedError");
    f();
    c();
    p();
    d();
    m();
    var Jn = "Request timed out";
    var Zt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Jn) {
        super(n, L(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    }, "Zt");
    N(Zt, "GatewayTimeoutError");
    f();
    c();
    p();
    d();
    m();
    var Cc = "Interactive transaction error";
    var Xt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Cc) {
        super(n, L(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    }, "Xt");
    N(Xt, "InteractiveTransactionError");
    f();
    c();
    p();
    d();
    m();
    var Ac = "Request parameters are invalid";
    var er = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Ac) {
        super(n, L(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    }, "er");
    N(er, "InvalidRequestError");
    f();
    c();
    p();
    d();
    m();
    var Gn = "Requested resource does not exist";
    var tr = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Gn) {
        super(n, L(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    }, "tr");
    N(tr, "NotFoundError");
    f();
    c();
    p();
    d();
    m();
    var Qn = "Unknown server error";
    var Et = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n || Qn, L(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    }, "Et");
    N(Et, "ServerError");
    f();
    c();
    p();
    d();
    m();
    var Hn = "Unauthorized, check your connection string";
    var rr = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Hn) {
        super(n, L(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    }, "rr");
    N(rr, "UnauthorizedError");
    f();
    c();
    p();
    d();
    m();
    var Wn = "Usage exceeded, retry again later";
    var nr = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Wn) {
        super(n, L(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    }, "nr");
    N(nr, "UsageExceededError");
    async function Rc(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string")
          switch (r) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r };
            default:
              return { type: "UnknownTextError", body: r };
          }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    __name(Rc, "Rc");
    async function ir(e, t) {
      if (e.ok)
        return;
      let r = { clientVersion: t, response: e }, n = await Rc(e);
      if (n.type === "QueryEngineError")
        throw new W(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError")
          throw new Et(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new Ge(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new Yt(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new zt(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new G(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Kt(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Xt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body)
          throw new er(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403)
        throw new rr(r, bt(Hn, n));
      if (e.status === 404)
        return new tr(r, bt(Gn, n));
      if (e.status === 429)
        throw new nr(r, bt(Wn, n));
      if (e.status === 504)
        throw new Zt(r, bt(Jn, n));
      if (e.status >= 500)
        throw new Et(r, bt(Qn, n));
      if (e.status >= 400)
        throw new Wt(r, bt(jn, n));
    }
    __name(ir, "ir");
    function bt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    __name(bt, "bt");
    f();
    c();
    p();
    d();
    m();
    function Cs(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    __name(Cs, "Cs");
    f();
    c();
    p();
    d();
    m();
    var Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function As(e) {
      let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, u, g;
      for (let h = 0; h < o; h = h + 3)
        g = t[h] << 16 | t[h + 1] << 8 | t[h + 2], s = (g & 16515072) >> 18, a = (g & 258048) >> 12, l = (g & 4032) >> 6, u = g & 63, r += Re[s] + Re[a] + Re[l] + Re[u];
      return i == 1 ? (g = t[o], s = (g & 252) >> 2, a = (g & 3) << 4, r += Re[s] + Re[a] + "==") : i == 2 && (g = t[o] << 8 | t[o + 1], s = (g & 64512) >> 10, a = (g & 1008) >> 4, l = (g & 15) << 2, r += Re[s] + Re[a] + Re[l] + "="), r;
    }
    __name(As, "As");
    f();
    c();
    p();
    d();
    m();
    function Rs(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
        throw new G("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    __name(Rs, "Rs");
    f();
    c();
    p();
    d();
    m();
    function Sc(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(Sc, "Sc");
    function Ss(e) {
      return new Date(Sc(e));
    }
    __name(Ss, "Ss");
    f();
    c();
    p();
    d();
    m();
    var Is = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var or = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, L(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    }, "or");
    N(or, "RequestError");
    async function Qe(e, t, r = (n) => n) {
      let n = t.clientVersion;
      try {
        return typeof fetch == "function" ? await r(fetch)(e, t) : await r(Kn)(e, t);
      } catch (i) {
        let o = i.message ?? "Unknown error";
        throw new or(o, { clientVersion: n });
      }
    }
    __name(Qe, "Qe");
    function Oc(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    __name(Oc, "Oc");
    function kc(e) {
      return { method: e.method, headers: Oc(e) };
    }
    __name(kc, "kc");
    function Dc(e, t) {
      return { text: () => Promise.resolve(w.Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new zn(t.headers) };
    }
    __name(Dc, "Dc");
    async function Kn(e, t = {}) {
      let r = Mc("https"), n = kc(t), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        let l = r.request(e, n, (u) => {
          let { statusCode: g, headers: { location: h } } = u;
          g >= 301 && g <= 399 && h && (h.startsWith("http") === false ? s(Kn(`${o}${h}`, t)) : s(Kn(h, t))), u.on("data", (v) => i.push(v)), u.on("end", () => s(Dc(i, u))), u.on("error", a);
        });
        l.on("error", a), l.end(t.body ?? "");
      });
    }
    __name(Kn, "Kn");
    var Mc = typeof __require < "u" ? __require : () => {
    };
    var zn = /* @__PURE__ */ __name(class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let i of n)
              this.headers.set(r, i);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        return this.headers.get(t) ?? null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, i] of this.headers)
          t.call(r, i, n, this);
      }
    }, "zn");
    var Nc = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var Os = ee("prisma:client:dataproxyEngine");
    async function Fc(e, t) {
      let r = Is["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
        return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && Nc.test(i))
        return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
          return "0.0.0";
        let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), g = _c(`<=${a}.${l}.${u}`), h = await Qe(g, { clientVersion: n });
        if (!h.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${await h.text() || "<empty body>"}`);
        let v = await h.text();
        Os("length of body fetched from unpkg.com", v.length);
        let S;
        try {
          S = JSON.parse(v);
        } catch (A) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", v), A;
        }
        return S.version;
      }
      throw new Je("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    __name(Fc, "Fc");
    async function ks(e, t) {
      let r = await Fc(e, t);
      return Os("version", r), r;
    }
    __name(ks, "ks");
    function _c(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    __name(_c, "_c");
    var Ds = 3;
    var Yn = ee("prisma:client:dataproxyEngine");
    var Zn = /* @__PURE__ */ __name(class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    }, "Zn");
    var sr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.name = "DataProxyEngine";
        Rs(t), this.config = t, this.env = { ...t.env, ...typeof y < "u" ? y.env : {} }, this.inlineSchema = As(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          this.host = t, this.headerBuilder = new Zn({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await ks(t, this.config), Yn("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        t?.logs?.length && t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [i] = n.split("/* traceparent");
                n = i;
              }
              this.logEmitter.emit("query", { query: n, timestamp: Ss(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
            }
          }
        }), t?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await Qe(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || Yn("schema response status", r.status);
          let n = await ir(r, this.clientVersion);
          if (n)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Vr(t, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
        return a.map((u) => "errors" in u && u.errors.length > 0 ? Gt(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await Qe(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || Yn("graphql response status", a.status), await this.handleError(await ir(a, this.clientVersion));
          let l = await a.json(), u = l.extensions;
          if (u && this.propagateResponseExtensions(u), l.errors)
            throw l.errors.length === 1 ? Gt(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new ne(l.errors, { clientVersion: this.config.clientVersion });
          return l;
        } });
      }
      async transaction(t, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await Qe(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await ir(l, this.clientVersion));
            let u = await l.json(), g = u.extensions;
            g && this.propagateResponseExtensions(g);
            let h = u.id, v = u["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: v } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await Qe(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await ir(a, this.clientVersion));
            let u = (await a.json()).extensions;
            u && this.propagateResponseExtensions(u);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = yt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new je(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:" && o !== "prisma+postgres:")
          throw new je(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        let l = a.get("api_key");
        if (l === null || l.length < 1)
          throw new je(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return [s, l];
      }
      metrics() {
        throw new Je("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        for (let r = 0; ; r++) {
          let n = /* @__PURE__ */ __name((i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }, "n");
          try {
            return await t.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable)
              throw i;
            if (r >= Ds)
              throw i instanceof wt ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Ds} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await Cs(r);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof Ge)
          throw await this.uploadSchema(), new wt({ clientVersion: this.clientVersion, cause: t });
        if (t)
          throw t;
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    }, "sr");
    function Ms({ copyEngine: e = true }, t) {
      let r;
      try {
        r = yt({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y.env }, clientVersion: t.clientVersion });
      } catch {
      }
      let n = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
      e && n && Ot("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = Rt(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary";
      if (o && s || s) {
        let u;
        throw u = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new K(u.join(`
`), { clientVersion: t.clientVersion });
      }
      if (o)
        return new sr(t);
      throw new K("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    __name(Ms, "Ms");
    f();
    c();
    p();
    d();
    m();
    function Hr({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(Hr, "Hr");
    f();
    c();
    p();
    d();
    m();
    var Ns = /* @__PURE__ */ __name((e) => ({ command: e }), "Ns");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Fs = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "Fs");
    f();
    c();
    p();
    d();
    m();
    function xt(e) {
      try {
        return _s(e, "fast");
      } catch {
        return _s(e, "slow");
      }
    }
    __name(xt, "xt");
    function _s(e, t) {
      return JSON.stringify(e.map((r) => qs(r, t)));
    }
    __name(_s, "_s");
    function qs(e, t) {
      return Array.isArray(e) ? e.map((r) => qs(r, t)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : it(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : fe.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : w.Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Lc(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: w.Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Bs(e) : e;
    }
    __name(qs, "qs");
    function Lc(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(Lc, "Lc");
    function Bs(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Ls);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Ls(e[r]);
      return t;
    }
    __name(Bs, "Bs");
    function Ls(e) {
      return typeof e == "bigint" ? e.toString() : Bs(e);
    }
    __name(Ls, "Ls");
    f();
    c();
    p();
    d();
    m();
    var qc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Us = qc;
    var Bc = /^(\s*alter\s)/i;
    var $s = ee("prisma:client");
    function Xn(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Bc.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(Xn, "Xn");
    var ei = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (Jo(r))
        n = r.sql, i = { values: xt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: xt(s || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: xt(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n = r.text, i = { values: xt(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = Fs(r), i = { values: xt(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return i?.values ? $s(`prisma.${e}(${n}, ${i.values})`) : $s(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "ei");
    var Vs = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new oe(t, r);
    } };
    var js = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    f();
    c();
    p();
    d();
    m();
    function ti(e) {
      return function(r) {
        let n, i = /* @__PURE__ */ __name((o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ??= Js(r(o)) : Js(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        }, "i");
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(ti, "ti");
    function Js(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(Js, "Js");
    f();
    c();
    p();
    d();
    m();
    var Gs = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var ri = /* @__PURE__ */ __name(class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Gs;
      }
    }, "ri");
    function Qs(e) {
      return e.includes("tracing") ? new ri() : Gs;
    }
    __name(Qs, "Qs");
    f();
    c();
    p();
    d();
    m();
    function Hs(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(Hs, "Hs");
    f();
    c();
    p();
    d();
    m();
    function Ws(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(Ws, "Ws");
    f();
    c();
    p();
    d();
    m();
    var Wr = /* @__PURE__ */ __name(class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    }, "Wr");
    f();
    c();
    p();
    d();
    m();
    var Ys = qe(Xi());
    f();
    c();
    p();
    d();
    m();
    function Kr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(Kr, "Kr");
    f();
    c();
    p();
    d();
    m();
    function Ks(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ni(e.query.arguments)), t.push(ni(e.query.selection)), t.join("");
    }
    __name(Ks, "Ks");
    function ni(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${ni(n)})` : r;
      }).join(" ")})`;
    }
    __name(ni, "ni");
    f();
    c();
    p();
    d();
    m();
    var Uc = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function ii(e) {
      return Uc[e];
    }
    __name(ii, "ii");
    f();
    c();
    p();
    d();
    m();
    var zr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    }, "zr");
    f();
    c();
    p();
    d();
    m();
    function He(e, t) {
      if (t === null)
        return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return w.Buffer.from(t, "base64");
        case "decimal":
          return new fe(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => He("bigint", r));
        case "bytes-array":
          return t.map((r) => He("bytes", r));
        case "decimal-array":
          return t.map((r) => He("decimal", r));
        case "datetime-array":
          return t.map((r) => He("datetime", r));
        case "date-array":
          return t.map((r) => He("date", r));
        case "time-array":
          return t.map((r) => He("time", r));
        default:
          return t;
      }
    }
    __name(He, "He");
    function zs(e) {
      let t = [], r = $c(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++)
          o[e.columns[s]] = He(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(zs, "zs");
    function $c(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++)
        t[e.columns[r]] = null;
      return t;
    }
    __name($c, "$c");
    var Vc = ee("prisma:client:request_handler");
    var Yr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new zr({ batchLoader: ys(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((h) => h.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((h) => ii(h.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: jc(o), containsWrite: u, customDataProxyFetch: i })).map((h, v) => {
            if (h instanceof Error)
              return h;
            try {
              return this.mapQueryEngineResult(n[v], h);
            } catch (S) {
              return S;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? Zs(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ii(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Ks(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
        return y.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Vc(t), Jc(t, i) || t instanceof ve)
          throw t;
        if (t instanceof W && Gc(t)) {
          let u = Xs(t.meta);
          Fr({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t.message;
        if (n && (l = st({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
          let u = s ? { modelName: s, ...t.meta } : t.meta;
          throw new W(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new Te(l, this.client._clientVersion);
          if (t instanceof ne)
            throw new ne(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof G)
            throw new G(l, this.client._clientVersion);
          if (t instanceof Te)
            throw new Te(l, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Ys.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = Bn(o, s), l = i === "queryRaw" ? zs(a) : rt(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    }, "Yr");
    function jc(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Zs(e) };
        Pe(e, "Unknown transaction kind");
      }
    }
    __name(jc, "jc");
    function Zs(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(Zs, "Zs");
    function Jc(e, t) {
      return Kr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(Jc, "Jc");
    function Gc(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(Gc, "Gc");
    function Xs(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Xs) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(Xs, "Xs");
    f();
    c();
    p();
    d();
    m();
    var ea = "5.22.0";
    var ta = ea;
    f();
    c();
    p();
    d();
    m();
    var sa = qe(Tn());
    f();
    c();
    p();
    d();
    m();
    var B = /* @__PURE__ */ __name(class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    }, "B");
    N(B, "PrismaClientConstructorValidationError");
    var ra = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var na = ["pretty", "colorless", "minimal"];
    var ia = ["info", "query", "warn", "error"];
    var Hc = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new B(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Pt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new B(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new B(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new B('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!Hr(t).includes("driverAdapters"))
        throw new B('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Rt() === "binary")
        throw new B('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new B(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new B(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!na.includes(e)) {
          let t = Pt(e, na);
          throw new B(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new B(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !ia.includes(r)) {
          let n = Pt(r, ia);
          throw new B(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Pt(i, o);
            throw new B(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new B(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e)
        return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new B(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new B(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, omit: (e, t) => {
      if (typeof e != "object")
        throw new B('"omit" option is expected to be an object.');
      if (e === null)
        throw new B('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Kc(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0)
        throw new B(zc(e, r));
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new B(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Pt(r, t);
          throw new B(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function aa(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!ra.includes(r)) {
          let i = Pt(r, ra);
          throw new B(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Hc[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new B('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(aa, "aa");
    function Pt(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Wc(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(Pt, "Pt");
    function Wc(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, sa.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(Wc, "Wc");
    function Kc(e, t) {
      return oa(t.models, e) ?? oa(t.types, e);
    }
    __name(Kc, "Kc");
    function oa(e, t) {
      let r = Object.keys(e).find((n) => nt(n) === t);
      if (r)
        return e[r];
    }
    __name(oa, "oa");
    function zc(e, t) {
      let r = dt(e);
      for (let o of t)
        switch (o.kind) {
          case "UnknownModel":
            r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
            break;
          case "UnknownField":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
            break;
          case "RelationInOmit":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
            break;
          case "InvalidFieldValue":
            r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
            break;
        }
      let { message: n, args: i } = Nr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(zc, "zc");
    f();
    c();
    p();
    d();
    m();
    function la(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), l = /* @__PURE__ */ __name((u) => {
          o || (o = true, r(u));
        }, "l");
        for (let u = 0; u < e.length; u++)
          e[u].then((g) => {
            n[u] = g, a();
          }, (g) => {
            if (!Kr(g)) {
              l(g);
              return;
            }
            g.batchRequestIdx === u ? l(g) : (i || (i = g), a());
          });
      });
    }
    __name(la, "la");
    var _e = ee("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Yc = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Zc = Symbol.for("prisma.client.transaction.id");
    var Xc = { id: 0, nextId() {
      return ++this.id;
    } };
    function pa(e) {
      class t {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new Wr();
          this._createPrismaPromise = ti();
          this.$extends = us;
          e = n?.__internal?.configOverride?.(e) ?? e, Ps(e), n && aa(n, e);
          let i = new yr().on("error", () => {
          });
          this._extensions = mt.empty(), this._previewFeatures = Hr(e), this._clientVersion = e.clientVersion ?? ta, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Qs(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && At.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && At.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = Fn(n.adapter);
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l)
              throw new G(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0)
              throw new G("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, g = u.debug === true;
            g && ee.enable("prisma:client");
            let h = At.resolve(e.dirname, e.relativePath);
            Si.existsSync(h) || (h = e.dirname), _e("dirname", e.dirname), _e("relativePath", e.relativePath), _e("cwd", h);
            let v = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : y.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: h, dirname: e.dirname, enableDebugLogs: g, allowTriggerPanic: v.allowTriggerPanic, datamodelPath: At.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: v.binaryPath ?? void 0, engineEndpoint: v.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Ws(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((S) => typeof S == "string" ? S === "query" : S.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: vs(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: yt, getBatchRequestPayload: Vr, prismaGraphQLToJSError: Gt, PrismaClientUnknownRequestError: ne, PrismaClientInitializationError: G, PrismaClientKnownRequestError: W, debug: ee("prisma:client:accelerateEngine"), engineVersion: ca.version, clientVersion: e.clientVersion } }, _e("clientVersion", e.clientVersion), this._engine = Ms(e, this._engineConfig), this._requestHandler = new Yr(this, i), l.log)
              for (let S of l.log) {
                let A = typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
                A && this.$on(A, (R) => {
                  It.log(`${It.tags[A] ?? ""}`, R.message || R.query);
                });
              }
            this._metrics = new ft(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = Qt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Vi();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: ei({ clientMethod: i, activeProvider: a }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = ua(n, i);
              return Xn(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new K("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Xn(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new K(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Ns, callsite: Fe(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: ei({ clientMethod: i, activeProvider: a }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...ua(n, i));
            throw new K("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql"))
              throw new K("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Xc.nextId(), s = Hs(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let g = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, h = { kind: "batch", id: o, index: u, isolationLevel: g, lock: s };
            return l.requestTransaction?.(h) ?? l;
          });
          return la(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return Qt(be(ls(this), [te("_appliedParent", () => this._appliedParent._createItxClient(n)), te("_createPrismaPromise", () => ti(n)), te(Zc, () => n.id), gt(Us)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Yc, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = /* @__PURE__ */ __name(async (u) => {
            let g = this._middlewares.get(++a);
            if (g)
              return this._tracingHelper.runInChildSpan(s.middleware, (M) => g(u, (F) => (M?.end(), l(F))));
            let { runInTransaction: h, args: v, ...S } = u, A = { ...n, ...S };
            v && (A.args = i.middlewareArgsToRequestArgs(v)), n.transaction !== void 0 && h === false && delete A.transaction;
            let R = await hs(this, A);
            return A.model ? ds({ result: R, modelName: A.model, args: A.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : R;
          }, "l");
          return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: g, unpacker: h, otelParentCtx: v, customDataProxyFetch: S }) {
          try {
            n = u ? u(n) : n;
            let A = { name: "serialize" }, R = this._tracingHelper.runInChildSpan(A, () => qr({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return ee.enabled("prisma:client") && (_e("Prisma Client call:"), _e(`prisma.${i}(${Yo(n)})`), _e("Generated request:"), _e(JSON.stringify(R, null, 2) + `
`)), g?.kind === "batch" && await g.lock, this._requestHandler.request({ protocolQuery: R, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: v, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: S });
          } catch (A) {
            throw A.clientVersion = this._clientVersion, A;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new K("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      __name(t, "t");
      return t;
    }
    __name(pa, "pa");
    function ua(e, t) {
      return ep(e) ? [new oe(e, t), Vs] : [e, js];
    }
    __name(ua, "ua");
    function ep(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(ep, "ep");
    f();
    c();
    p();
    d();
    m();
    var tp = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function da(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!tp.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(da, "da");
    f();
    c();
    p();
    d();
    m();
  }
});

// ../../../../node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "../../../../node_modules/.prisma/client/edge.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.22.0",
      engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      name: "name",
      password: "password"
    };
    exports.Prisma.PostScalarFieldEnum = {
      id: "id",
      title: "title",
      content: "content",
      published: "published",
      authorId: "authorId"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Post: "Post"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\Yash Tyagi\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "C:\\Users\\Yash Tyagi\\Desktop\\Backend cohort\\13_medium\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../Desktop/Backend cohort/13_medium/.env"
      },
      "relativePath": "../../../Desktop/Backend cohort/13_medium/prisma",
      "clientVersion": "5.22.0",
      "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       Int     @id @default(autoincrement()) //universally unique indentifier\n  email    String  @unique\n  name     String?\n  password String\n  posts    Post[]\n}\n\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  title     String\n  content   String\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n  authorId  Int\n}\n',
      "inlineSchemaHash": "b99315146540e51f3742f0371e708f93702ee8f1adfe1bc182bd641a2d82a7db",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"PostToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient3 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient3;
    Object.assign(exports, Prisma);
  }
});

// ../../../../node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "../../../../node_modules/@prisma/client/edge.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// .wrangler/tmp/bundle-g9VCox/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-g9VCox/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/index.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = /* @__PURE__ */ __name(class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
}, "setHeaders");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.#newResponse(text, arg, headers) : this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
}, "Context");

// node_modules/hono/dist/compose.js
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    const isContext = context instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (isContext) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (isContext && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.#addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  #errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.#errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.#errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.#errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.#errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.#errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "Hono");

// node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "Node");

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = /* @__PURE__ */ __name(class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.routes).concat(Object.keys(this.middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
}, "RegExpRouter");

// node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
}, "SmartRouter");

// node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var Node2 = /* @__PURE__ */ __name(class {
  methods;
  children;
  patterns;
  order = 0;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  #gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          const processed = processedSet[handlerSet.score];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.score] = true;
        }
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.#gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.#gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.#gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.#gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast) {
                handlerSets.push(...this.#gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(
                    ...this.#gHSets(child.children["*"], method, params, node.params)
                  );
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
}, "Node");

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.node.insert(method, results[i], handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
}, "TrieRouter");

// node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// node_modules/hono/dist/middleware/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/middleware/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/helper/cookie/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/cookie.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/encode.js
init_checked_fetch();
init_modules_watch_stub();
var decodeBase64Url = /* @__PURE__ */ __name((str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
}, "decodeBase64Url");
var encodeBase64Url = /* @__PURE__ */ __name((buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m), "encodeBase64Url");
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}, "encodeBase64");
var decodeBase64 = /* @__PURE__ */ __name((str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
}, "decodeBase64");

// node_modules/hono/dist/utils/jwt/jwa.js
init_checked_fetch();
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// node_modules/hono/dist/utils/jwt/jws.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/helper/adapter/index.js
init_checked_fetch();
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = /* @__PURE__ */ __name(() => {
  const global = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global?.fastly !== void 0) {
    return "fastly";
  }
  if (global?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}, "getRuntimeKey");
var checkUserAgentEquals = /* @__PURE__ */ __name((platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
}, "checkUserAgentEquals");

// node_modules/hono/dist/utils/jwt/types.js
init_checked_fetch();
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = /* @__PURE__ */ __name(class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
}, "JwtAlgorithmNotImplemented");
var JwtTokenInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
}, "JwtTokenInvalid");
var JwtTokenNotBefore = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
}, "JwtTokenNotBefore");
var JwtTokenExpired = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
}, "JwtTokenExpired");
var JwtTokenIssuedAt = /* @__PURE__ */ __name(class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
}, "JwtTokenIssuedAt");
var JwtHeaderInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
}, "JwtHeaderInvalid");
var JwtTokenSignatureMismatched = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
}, "JwtTokenSignatureMismatched");
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// node_modules/hono/dist/utils/jwt/utf8.js
init_checked_fetch();
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
__name(signing, "signing");
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
__name(verifying, "verifying");
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
__name(pemToBinary, "pemToBinary");
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private" && key.type !== "secret") {
      throw new Error(
        `unexpected key type: CryptoKey.type is ${key.type}, expected private or secret`
      );
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPrivateKey, "importPrivateKey");
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPublicKey, "importPublicKey");
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x, y } = jwk;
  return { kty, alg, e, n, crv, x, y, key_ops: [CryptoKeyUsage.Verify] };
}
__name(exportPublicJwkFrom, "exportPublicJwkFrom");
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
__name(getKeyAlgorithm, "getKeyAlgorithm");
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
__name(isCryptoKey, "isCryptoKey");

// node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = /* @__PURE__ */ __name((part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, ""), "encodeJwtPart");
var encodeSignaturePart = /* @__PURE__ */ __name((buf) => encodeBase64Url(buf).replace(/=/g, ""), "encodeSignaturePart");
var decodeJwtPart = /* @__PURE__ */ __name((part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part))), "decodeJwtPart");
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
__name(isTokenHeader, "isTokenHeader");
var sign = /* @__PURE__ */ __name(async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
}, "sign");
var verify = /* @__PURE__ */ __name(async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Date.now() / 1e3 | 0;
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
}, "verify");
var decode = /* @__PURE__ */ __name((token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decode");

// node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode };

// node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// src/router/user.ts
init_checked_fetch();
init_modules_watch_stub();
var import_client = __toESM(require_default2());

// ../../../../node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
init_checked_fetch();
init_modules_watch_stub();

// ../../../../node_modules/@prisma/extension-accelerate/dist/esm/extension.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index2 = __toESM(require_default_index(), 1);

// ../../../../node_modules/@prisma/extension-accelerate/dist/esm/semver.js
init_checked_fetch();
init_modules_watch_stub();
function compareSemVer(a, b) {
  const [major1 = 0, minor1 = 0, patch1 = 0] = a.split(".").map(Number);
  const [major2 = 0, minor2 = 0, patch2 = 0] = b.split(".").map(Number);
  const major = major2 - major1;
  const minor = minor2 - minor1;
  const patch = patch2 - patch1;
  return major || minor || patch;
}
__name(compareSemVer, "compareSemVer");

// ../../../../node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
function getUserAgent() {
  const prismaVersion = import_default_index.default.Prisma.prismaVersion;
  const parts = [
    getRuntimeSegment(),
    `PrismaEngine/${prismaVersion.engine}`,
    `PrismaClient/${prismaVersion.client}`
  ];
  return parts.join(" ");
}
__name(getUserAgent, "getUserAgent");
function getRuntimeSegment() {
  if (typeof navigator !== "undefined") {
    return "Cloudflare-Workers";
  } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
    return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
  } else if ("EdgeRuntime" in globalThis) {
    return `Vercel-Edge-Runtime`;
  } else {
    return `UnknownRuntime`;
  }
}
__name(getRuntimeSegment, "getRuntimeSegment");

// ../../../../node_modules/@prisma/extension-accelerate/dist/esm/extension.js
var EXTENSION_NAME = "@prisma/extension-accelerate";
var FETCH_FAILURE_MESSAGE = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function makeWithCacheHeaders(fetcher) {
  const userAgent = getUserAgent();
  let machineHint = void 0;
  return async (params) => {
    const { args } = params;
    const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
    let info = null;
    const { __internalParams, query } = params;
    __internalParams.customDataProxyFetch = () => {
      return async (url, options) => {
        const cacheControl = new Array();
        if (typeof cacheStrategy?.ttl === "number") {
          cacheControl.push(`max-age=${cacheStrategy.ttl}`);
        }
        if (typeof cacheStrategy?.swr === "number") {
          cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
        }
        const cacheTags = cacheStrategy?.tags?.join(",") ?? "";
        options.headers = {
          ...options.headers,
          "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
          "user-agent": userAgent,
          ...cacheTags.length > 0 ? { "accelerate-cache-tags": cacheTags } : {}
        };
        if (machineHint) {
          options.headers["accelerate-query-engine-jwt"] = machineHint;
        }
        try {
          const response = await fetcher(url, options);
          info = {
            cacheStatus: response.headers.get("accelerate-cache-status"),
            lastModified: new Date(response.headers.get("last-modified") ?? ""),
            region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
            requestId: response.headers.get("cf-ray") ?? "unspecified",
            signature: response.headers.get("accelerate-signature") ?? "unspecified"
          };
          machineHint = response.headers.get("accelerate-query-engine-jwt") ?? void 0;
          return response;
        } catch (e) {
          throw new Error(FETCH_FAILURE_MESSAGE);
        }
      };
    };
    if (__accelerateInfo) {
      const data = await query(rest, __internalParams);
      return { data, info };
    } else {
      return query(rest, __internalParams);
    }
  };
}
__name(makeWithCacheHeaders, "makeWithCacheHeaders");
function makeAccelerateExtension(fetcher) {
  const enableCtxParent = compareSemVer("5.1.0", import_default_index2.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index2.default.Prisma.defineExtension((client) => {
    const withCacheHeaders = makeWithCacheHeaders(fetcher);
    const apiKeyPromise = client._engine.start().then(() => client._engine.apiKey?.());
    const xclient = client.$extends({
      name: EXTENSION_NAME,
      query: {
        $allModels: {
          // also apply withCacheHeaders to mutations for machine hint benefit
          $allOperations: withCacheHeaders
        }
      }
    });
    return xclient.$extends({
      name: EXTENSION_NAME,
      client: {
        $accelerate: {
          /**
           * Initiates an invalidation request for the specified cache tag values.
           *
           * A tag may only contain alphanumeric characters and underscores.
           * Each tag may contain a maximum of 64 characters.
           * A maximum of 5 tags may be invalidated per call.
           */
          invalidate: async (input) => {
            const apiKey = await apiKeyPromise;
            if (!apiKey) {
              return { requestId: "unspecified" };
            }
            let response;
            try {
              response = await fetcher(`https://accelerate.prisma-data.net/invalidate`, {
                method: "POST",
                headers: {
                  authorization: `Bearer ${apiKey}`,
                  "content-type": "application/json"
                },
                body: JSON.stringify(input)
              });
            } catch (e) {
              throw new Error(FETCH_FAILURE_MESSAGE);
            }
            if (!response?.ok) {
              const body = await response.text();
              throw new Error(`Failed to invalidate Accelerate cache. Response was ${response.status} ${response.statusText}. ${body}`);
            }
            void response.body?.cancel();
            return {
              requestId: response.headers.get("cf-ray") ?? "unspecified"
            };
          }
        }
      },
      model: {
        $allModels: {
          // TODO: these functions are repetitive. Is there a type we can use to generic this?
          // TODO: can we define these in a map that ensures query and model overrides stay in sync/
          aggregate(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.aggregate(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.aggregate({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          count(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.count(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.count({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirst(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirst(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirst({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirstOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirstOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirstOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findMany(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findMany(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findMany({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUnique(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUnique(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUnique({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUniqueOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUniqueOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUniqueOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          groupBy(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.groupBy(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.groupBy({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          }
        }
      }
    });
  });
}
__name(makeAccelerateExtension, "makeAccelerateExtension");

// ../../../../node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
function withAccelerate() {
  return makeAccelerateExtension(globalThis.fetch);
}
__name(withAccelerate, "withAccelerate");

// src/router/user.ts
var userRouter = new Hono2();
userRouter.post("/signup", async (c) => {
  const prisma = new import_client.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password
      }
    });
    const token = await sign2({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token
    });
  } catch (error) {
    console.log("error", error);
    c.status(403);
    return c.json({ error: "error while signing up " });
  }
});
userRouter.get("/users", async (c) => {
  const prisma = new import_client.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const users = await prisma.user.findMany();
    return c.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return c.json({ error: "Failed to fetch users" }, 500);
  }
});
userRouter.post("/signin", async (c) => {
  try {
    const prisma = new import_client.PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const user = await prisma.user.findFirst({
      where: {
        email: body.username,
        password: body.password
      }
    });
    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
    const token = await sign2({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token });
  } catch (error) {
    console.log("error", error);
  }
});

// src/router/blog.ts
init_checked_fetch();
init_modules_watch_stub();
var import_edge = __toESM(require_edge3());
var blogRouter = new Hono2();
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const token = header.split(" ")[1];
  try {
    const response = await verify2(token, c.env.JWT_SECRET);
    if (response) {
      c.set("jwtPayload", response.id);
      next();
    }
  } catch (error) {
    c.status(403);
    return c.json({ message: "UnAuthorized" });
  }
});
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const authorId = c.get("jwtPayload");
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(authorId)
        // parseInt or Number both of them are fine...
      }
    });
    return c.json({ id: post.id });
  } catch (error) {
    console.error("error", error);
    c.status(500);
    return c.json({ error: "failed to create post" });
  }
});
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const updatePost = await prisma.post.update({
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        content: body.content
      }
    });
    return c.json(updatePost);
  } catch (error) {
    console.error("error updating post", error);
    c.status(500);
    return c.json({ error: "failed to update post" });
  }
});
blogRouter.get("/", async (c) => {
  const body = await c.req.json();
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const findPost = await prisma.post.findFirst({
      where: {
        id: body.id
      }
    });
    return c.json(findPost);
  } catch (error) {
    c.status(411);
    c.json({ message: "error while fetching blog post" });
  }
});
blogRouter.get("/bulk", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const allPost = await prisma.post.findMany();
    return c.json({ allPost });
  } catch (error) {
    c.status(411);
    c.json({ message: "error while fetching blog post" });
  }
});

// src/index.ts
var app = new Hono2();
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
app.use("api/v1/blog/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const token = header.split(" ")[1];
  const response = await verify2(token, c.env.JWT_SECRET);
  if (response.id) {
    await next();
  } else {
    return c.json({ error: "unauthorized" });
  }
});
app.get("/", (C) => {
  return C.text("hello hono");
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-g9VCox/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-g9VCox/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@prisma/client/runtime/index-browser.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
//# sourceMappingURL=index.js.map
