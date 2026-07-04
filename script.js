function yv(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var Iu = {
    exports: {}
}
  , Mi = {};
var Gm;
function vv() {
    if (Gm)
        return Mi;
    Gm = 1;
    var a = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function r(o, c, f) {
        var h = null;
        if (f !== void 0 && (h = "" + f),
        c.key !== void 0 && (h = "" + c.key),
        "key"in c) {
            f = {};
            for (var g in c)
                g !== "key" && (f[g] = c[g])
        } else
            f = c;
        return c = f.ref,
        {
            $$typeof: a,
            type: o,
            key: h,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return Mi.Fragment = i,
    Mi.jsx = r,
    Mi.jsxs = r,
    Mi
}
var Ym;
function Sv() {
    return Ym || (Ym = 1,
    Iu.exports = vv()),
    Iu.exports
}
var m = Sv()
  , $u = {
    exports: {}
}
  , ot = {};
var Vm;
function bv() {
    if (Vm)
        return ot;
    Vm = 1;
    var a = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , g = Symbol.for("react.forward_ref")
      , y = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , b = Symbol.for("react.lazy")
      , S = Symbol.for("react.activity")
      , E = Symbol.iterator;
    function _(j) {
        return j === null || typeof j != "object" ? null : (j = E && j[E] || j["@@iterator"],
        typeof j == "function" ? j : null)
    }
    var w = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , O = Object.assign
      , C = {};
    function M(j, Y, F) {
        this.props = j,
        this.context = Y,
        this.refs = C,
        this.updater = F || w
    }
    M.prototype.isReactComponent = {},
    M.prototype.setState = function(j, Y) {
        if (typeof j != "object" && typeof j != "function" && j != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, Y, "setState")
    }
    ,
    M.prototype.forceUpdate = function(j) {
        this.updater.enqueueForceUpdate(this, j, "forceUpdate")
    }
    ;
    function k() {}
    k.prototype = M.prototype;
    function Q(j, Y, F) {
        this.props = j,
        this.context = Y,
        this.refs = C,
        this.updater = F || w
    }
    var q = Q.prototype = new k;
    q.constructor = Q,
    O(q, M.prototype),
    q.isPureReactComponent = !0;
    var $ = Array.isArray;
    function W() {}
    var X = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , K = Object.prototype.hasOwnProperty;
    function J(j, Y, F) {
        var P = F.ref;
        return {
            $$typeof: a,
            type: j,
            key: Y,
            ref: P !== void 0 ? P : null,
            props: F
        }
    }
    function rt(j, Y) {
        return J(j.type, Y, j.props)
    }
    function et(j) {
        return typeof j == "object" && j !== null && j.$$typeof === a
    }
    function dt(j) {
        var Y = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + j.replace(/[=:]/g, function(F) {
            return Y[F]
        })
    }
    var yt = /\/+/g;
    function Gt(j, Y) {
        return typeof j == "object" && j !== null && j.key != null ? dt("" + j.key) : Y.toString(36)
    }
    function jt(j) {
        switch (j.status) {
        case "fulfilled":
            return j.value;
        case "rejected":
            throw j.reason;
        default:
            switch (typeof j.status == "string" ? j.then(W, W) : (j.status = "pending",
            j.then(function(Y) {
                j.status === "pending" && (j.status = "fulfilled",
                j.value = Y)
            }, function(Y) {
                j.status === "pending" && (j.status = "rejected",
                j.reason = Y)
            })),
            j.status) {
            case "fulfilled":
                return j.value;
            case "rejected":
                throw j.reason
            }
        }
        throw j
    }
    function U(j, Y, F, P, at) {
        var ft = typeof j;
        (ft === "undefined" || ft === "boolean") && (j = null);
        var St = !1;
        if (j === null)
            St = !0;
        else
            switch (ft) {
            case "bigint":
            case "string":
            case "number":
                St = !0;
                break;
            case "object":
                switch (j.$$typeof) {
                case a:
                case i:
                    St = !0;
                    break;
                case b:
                    return St = j._init,
                    U(St(j._payload), Y, F, P, at)
                }
            }
        if (St)
            return at = at(j),
            St = P === "" ? "." + Gt(j, 0) : P,
            $(at) ? (F = "",
            St != null && (F = St.replace(yt, "$&/") + "/"),
            U(at, Y, F, "", function(en) {
                return en
            })) : at != null && (et(at) && (at = rt(at, F + (at.key == null || j && j.key === at.key ? "" : ("" + at.key).replace(yt, "$&/") + "/") + St)),
            Y.push(at)),
            1;
        St = 0;
        var kt = P === "" ? "." : P + ":";
        if ($(j))
            for (var Ot = 0; Ot < j.length; Ot++)
                P = j[Ot],
                ft = kt + Gt(P, Ot),
                St += U(P, Y, F, ft, at);
        else if (Ot = _(j),
        typeof Ot == "function")
            for (j = Ot.call(j),
            Ot = 0; !(P = j.next()).done; )
                P = P.value,
                ft = kt + Gt(P, Ot++),
                St += U(P, Y, F, ft, at);
        else if (ft === "object") {
            if (typeof j.then == "function")
                return U(jt(j), Y, F, P, at);
            throw Y = String(j),
            Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.")
        }
        return St
    }
    function Z(j, Y, F) {
        if (j == null)
            return j;
        var P = []
          , at = 0;
        return U(j, P, "", "", function(ft) {
            return Y.call(F, ft, at++)
        }),
        P
    }
    function it(j) {
        if (j._status === -1) {
            var Y = j._result;
            Y = Y(),
            Y.then(function(F) {
                (j._status === 0 || j._status === -1) && (j._status = 1,
                j._result = F)
            }, function(F) {
                (j._status === 0 || j._status === -1) && (j._status = 2,
                j._result = F)
            }),
            j._status === -1 && (j._status = 0,
            j._result = Y)
        }
        if (j._status === 1)
            return j._result.default;
        throw j._result
    }
    var _t = typeof reportError == "function" ? reportError : function(j) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var Y = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
                error: j
            });
            if (!window.dispatchEvent(Y))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", j);
            return
        }
        console.error(j)
    }
      , Tt = {
        map: Z,
        forEach: function(j, Y, F) {
            Z(j, function() {
                Y.apply(this, arguments)
            }, F)
        },
        count: function(j) {
            var Y = 0;
            return Z(j, function() {
                Y++
            }),
            Y
        },
        toArray: function(j) {
            return Z(j, function(Y) {
                return Y
            }) || []
        },
        only: function(j) {
            if (!et(j))
                throw Error("React.Children.only expected to receive a single React element child.");
            return j
        }
    };
    return ot.Activity = S,
    ot.Children = Tt,
    ot.Component = M,
    ot.Fragment = r,
    ot.Profiler = c,
    ot.PureComponent = Q,
    ot.StrictMode = o,
    ot.Suspense = y,
    ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X,
    ot.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(j) {
            return X.H.useMemoCache(j)
        }
    },
    ot.cache = function(j) {
        return function() {
            return j.apply(null, arguments)
        }
    }
    ,
    ot.cacheSignal = function() {
        return null
    }
    ,
    ot.cloneElement = function(j, Y, F) {
        if (j == null)
            throw Error("The argument must be a React element, but you passed " + j + ".");
        var P = O({}, j.props)
          , at = j.key;
        if (Y != null)
            for (ft in Y.key !== void 0 && (at = "" + Y.key),
            Y)
                !K.call(Y, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && Y.ref === void 0 || (P[ft] = Y[ft]);
        var ft = arguments.length - 2;
        if (ft === 1)
            P.children = F;
        else if (1 < ft) {
            for (var St = Array(ft), kt = 0; kt < ft; kt++)
                St[kt] = arguments[kt + 2];
            P.children = St
        }
        return J(j.type, at, P)
    }
    ,
    ot.createContext = function(j) {
        return j = {
            $$typeof: h,
            _currentValue: j,
            _currentValue2: j,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        j.Provider = j,
        j.Consumer = {
            $$typeof: f,
            _context: j
        },
        j
    }
    ,
    ot.createElement = function(j, Y, F) {
        var P, at = {}, ft = null;
        if (Y != null)
            for (P in Y.key !== void 0 && (ft = "" + Y.key),
            Y)
                K.call(Y, P) && P !== "key" && P !== "__self" && P !== "__source" && (at[P] = Y[P]);
        var St = arguments.length - 2;
        if (St === 1)
            at.children = F;
        else if (1 < St) {
            for (var kt = Array(St), Ot = 0; Ot < St; Ot++)
                kt[Ot] = arguments[Ot + 2];
            at.children = kt
        }
        if (j && j.defaultProps)
            for (P in St = j.defaultProps,
            St)
                at[P] === void 0 && (at[P] = St[P]);
        return J(j, ft, at)
    }
    ,
    ot.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ot.forwardRef = function(j) {
        return {
            $$typeof: g,
            render: j
        }
    }
    ,
    ot.isValidElement = et,
    ot.lazy = function(j) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: j
            },
            _init: it
        }
    }
    ,
    ot.memo = function(j, Y) {
        return {
            $$typeof: p,
            type: j,
            compare: Y === void 0 ? null : Y
        }
    }
    ,
    ot.startTransition = function(j) {
        var Y = X.T
          , F = {};
        X.T = F;
        try {
            var P = j()
              , at = X.S;
            at !== null && at(F, P),
            typeof P == "object" && P !== null && typeof P.then == "function" && P.then(W, _t)
        } catch (ft) {
            _t(ft)
        } finally {
            Y !== null && F.types !== null && (Y.types = F.types),
            X.T = Y
        }
    }
    ,
    ot.unstable_useCacheRefresh = function() {
        return X.H.useCacheRefresh()
    }
    ,
    ot.use = function(j) {
        return X.H.use(j)
    }
    ,
    ot.useActionState = function(j, Y, F) {
        return X.H.useActionState(j, Y, F)
    }
    ,
    ot.useCallback = function(j, Y) {
        return X.H.useCallback(j, Y)
    }
    ,
    ot.useContext = function(j) {
        return X.H.useContext(j)
    }
    ,
    ot.useDebugValue = function() {}
    ,
    ot.useDeferredValue = function(j, Y) {
        return X.H.useDeferredValue(j, Y)
    }
    ,
    ot.useEffect = function(j, Y) {
        return X.H.useEffect(j, Y)
    }
    ,
    ot.useEffectEvent = function(j) {
        return X.H.useEffectEvent(j)
    }
    ,
    ot.useId = function() {
        return X.H.useId()
    }
    ,
    ot.useImperativeHandle = function(j, Y, F) {
        return X.H.useImperativeHandle(j, Y, F)
    }
    ,
    ot.useInsertionEffect = function(j, Y) {
        return X.H.useInsertionEffect(j, Y)
    }
    ,
    ot.useLayoutEffect = function(j, Y) {
        return X.H.useLayoutEffect(j, Y)
    }
    ,
    ot.useMemo = function(j, Y) {
        return X.H.useMemo(j, Y)
    }
    ,
    ot.useOptimistic = function(j, Y) {
        return X.H.useOptimistic(j, Y)
    }
    ,
    ot.useReducer = function(j, Y, F) {
        return X.H.useReducer(j, Y, F)
    }
    ,
    ot.useRef = function(j) {
        return X.H.useRef(j)
    }
    ,
    ot.useState = function(j) {
        return X.H.useState(j)
    }
    ,
    ot.useSyncExternalStore = function(j, Y, F) {
        return X.H.useSyncExternalStore(j, Y, F)
    }
    ,
    ot.useTransition = function() {
        return X.H.useTransition()
    }
    ,
    ot.version = "19.2.6",
    ot
}
var km;
function Zi() {
    return km || (km = 1,
    $u.exports = bv()),
    $u.exports
}
var I = Zi();
const Gi = yv(I);
var tc = {
    exports: {}
}
  , zi = {}
  , ec = {
    exports: {}
}
  , nc = {};
var Xm;
function xv() {
    return Xm || (Xm = 1,
    (function(a) {
        function i(U, Z) {
            var it = U.length;
            U.push(Z);
            t: for (; 0 < it; ) {
                var _t = it - 1 >>> 1
                  , Tt = U[_t];
                if (0 < c(Tt, Z))
                    U[_t] = Z,
                    U[it] = Tt,
                    it = _t;
                else
                    break t
            }
        }
        function r(U) {
            return U.length === 0 ? null : U[0]
        }
        function o(U) {
            if (U.length === 0)
                return null;
            var Z = U[0]
              , it = U.pop();
            if (it !== Z) {
                U[0] = it;
                t: for (var _t = 0, Tt = U.length, j = Tt >>> 1; _t < j; ) {
                    var Y = 2 * (_t + 1) - 1
                      , F = U[Y]
                      , P = Y + 1
                      , at = U[P];
                    if (0 > c(F, it))
                        P < Tt && 0 > c(at, F) ? (U[_t] = at,
                        U[P] = it,
                        _t = P) : (U[_t] = F,
                        U[Y] = it,
                        _t = Y);
                    else if (P < Tt && 0 > c(at, it))
                        U[_t] = at,
                        U[P] = it,
                        _t = P;
                    else
                        break t
                }
            }
            return Z
        }
        function c(U, Z) {
            var it = U.sortIndex - Z.sortIndex;
            return it !== 0 ? it : U.id - Z.id
        }
        if (a.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            a.unstable_now = function() {
                return f.now()
            }
        } else {
            var h = Date
              , g = h.now();
            a.unstable_now = function() {
                return h.now() - g
            }
        }
        var y = []
          , p = []
          , b = 1
          , S = null
          , E = 3
          , _ = !1
          , w = !1
          , O = !1
          , C = !1
          , M = typeof setTimeout == "function" ? setTimeout : null
          , k = typeof clearTimeout == "function" ? clearTimeout : null
          , Q = typeof setImmediate < "u" ? setImmediate : null;
        function q(U) {
            for (var Z = r(p); Z !== null; ) {
                if (Z.callback === null)
                    o(p);
                else if (Z.startTime <= U)
                    o(p),
                    Z.sortIndex = Z.expirationTime,
                    i(y, Z);
                else
                    break;
                Z = r(p)
            }
        }
        function $(U) {
            if (O = !1,
            q(U),
            !w)
                if (r(y) !== null)
                    w = !0,
                    W || (W = !0,
                    dt());
                else {
                    var Z = r(p);
                    Z !== null && jt($, Z.startTime - U)
                }
        }
        var W = !1
          , X = -1
          , K = 5
          , J = -1;
        function rt() {
            return C ? !0 : !(a.unstable_now() - J < K)
        }
        function et() {
            if (C = !1,
            W) {
                var U = a.unstable_now();
                J = U;
                var Z = !0;
                try {
                    t: {
                        w = !1,
                        O && (O = !1,
                        k(X),
                        X = -1),
                        _ = !0;
                        var it = E;
                        try {
                            e: {
                                for (q(U),
                                S = r(y); S !== null && !(S.expirationTime > U && rt()); ) {
                                    var _t = S.callback;
                                    if (typeof _t == "function") {
                                        S.callback = null,
                                        E = S.priorityLevel;
                                        var Tt = _t(S.expirationTime <= U);
                                        if (U = a.unstable_now(),
                                        typeof Tt == "function") {
                                            S.callback = Tt,
                                            q(U),
                                            Z = !0;
                                            break e
                                        }
                                        S === r(y) && o(y),
                                        q(U)
                                    } else
                                        o(y);
                                    S = r(y)
                                }
                                if (S !== null)
                                    Z = !0;
                                else {
                                    var j = r(p);
                                    j !== null && jt($, j.startTime - U),
                                    Z = !1
                                }
                            }
                            break t
                        } finally {
                            S = null,
                            E = it,
                            _ = !1
                        }
                        Z = void 0
                    }
                } finally {
                    Z ? dt() : W = !1
                }
            }
        }
        var dt;
        if (typeof Q == "function")
            dt = function() {
                Q(et)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var yt = new MessageChannel
              , Gt = yt.port2;
            yt.port1.onmessage = et,
            dt = function() {
                Gt.postMessage(null)
            }
        } else
            dt = function() {
                M(et, 0)
            }
            ;
        function jt(U, Z) {
            X = M(function() {
                U(a.unstable_now())
            }, Z)
        }
        a.unstable_IdlePriority = 5,
        a.unstable_ImmediatePriority = 1,
        a.unstable_LowPriority = 4,
        a.unstable_NormalPriority = 3,
        a.unstable_Profiling = null,
        a.unstable_UserBlockingPriority = 2,
        a.unstable_cancelCallback = function(U) {
            U.callback = null
        }
        ,
        a.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < U ? Math.floor(1e3 / U) : 5
        }
        ,
        a.unstable_getCurrentPriorityLevel = function() {
            return E
        }
        ,
        a.unstable_next = function(U) {
            switch (E) {
            case 1:
            case 2:
            case 3:
                var Z = 3;
                break;
            default:
                Z = E
            }
            var it = E;
            E = Z;
            try {
                return U()
            } finally {
                E = it
            }
        }
        ,
        a.unstable_requestPaint = function() {
            C = !0
        }
        ,
        a.unstable_runWithPriority = function(U, Z) {
            switch (U) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                U = 3
            }
            var it = E;
            E = U;
            try {
                return Z()
            } finally {
                E = it
            }
        }
        ,
        a.unstable_scheduleCallback = function(U, Z, it) {
            var _t = a.unstable_now();
            switch (typeof it == "object" && it !== null ? (it = it.delay,
            it = typeof it == "number" && 0 < it ? _t + it : _t) : it = _t,
            U) {
            case 1:
                var Tt = -1;
                break;
            case 2:
                Tt = 250;
                break;
            case 5:
                Tt = 1073741823;
                break;
            case 4:
                Tt = 1e4;
                break;
            default:
                Tt = 5e3
            }
            return Tt = it + Tt,
            U = {
                id: b++,
                callback: Z,
                priorityLevel: U,
                startTime: it,
                expirationTime: Tt,
                sortIndex: -1
            },
            it > _t ? (U.sortIndex = it,
            i(p, U),
            r(y) === null && U === r(p) && (O ? (k(X),
            X = -1) : O = !0,
            jt($, it - _t))) : (U.sortIndex = Tt,
            i(y, U),
            w || _ || (w = !0,
            W || (W = !0,
            dt()))),
            U
        }
        ,
        a.unstable_shouldYield = rt,
        a.unstable_wrapCallback = function(U) {
            var Z = E;
            return function() {
                var it = E;
                E = Z;
                try {
                    return U.apply(this, arguments)
                } finally {
                    E = it
                }
            }
        }
    }
    )(nc)),
    nc
}
var Qm;
function Ev() {
    return Qm || (Qm = 1,
    ec.exports = xv()),
    ec.exports
}
var ac = {
    exports: {}
}
  , de = {};
var Zm;
function _v() {
    if (Zm)
        return de;
    Zm = 1;
    var a = Zi();
    function i(y) {
        var p = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++)
                p += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + y + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r() {}
    var o = {
        d: {
            f: r,
            r: function() {
                throw Error(i(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function f(y, p, b) {
        var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: S == null ? null : "" + S,
            children: y,
            containerInfo: p,
            implementation: b
        }
    }
    var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(y, p) {
        if (y === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    de.createPortal = function(y, p) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(i(299));
        return f(y, p, null, b)
    }
    ,
    de.flushSync = function(y) {
        var p = h.T
          , b = o.p;
        try {
            if (h.T = null,
            o.p = 2,
            y)
                return y()
        } finally {
            h.T = p,
            o.p = b,
            o.d.f()
        }
    }
    ,
    de.preconnect = function(y, p) {
        typeof y == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        o.d.C(y, p))
    }
    ,
    de.prefetchDNS = function(y) {
        typeof y == "string" && o.d.D(y)
    }
    ,
    de.preinit = function(y, p) {
        if (typeof y == "string" && p && typeof p.as == "string") {
            var b = p.as
              , S = g(b, p.crossOrigin)
              , E = typeof p.integrity == "string" ? p.integrity : void 0
              , _ = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            b === "style" ? o.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: S,
                integrity: E,
                fetchPriority: _
            }) : b === "script" && o.d.X(y, {
                crossOrigin: S,
                integrity: E,
                fetchPriority: _,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    de.preinitModule = function(y, p) {
        if (typeof y == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var b = g(p.as, p.crossOrigin);
                    o.d.M(y, {
                        crossOrigin: b,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && o.d.M(y)
    }
    ,
    de.preload = function(y, p) {
        if (typeof y == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var b = p.as
              , S = g(b, p.crossOrigin);
            o.d.L(y, b, {
                crossOrigin: S,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    de.preloadModule = function(y, p) {
        if (typeof y == "string")
            if (p) {
                var b = g(p.as, p.crossOrigin);
                o.d.m(y, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: b,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                o.d.m(y)
    }
    ,
    de.requestFormReset = function(y) {
        o.d.r(y)
    }
    ,
    de.unstable_batchedUpdates = function(y, p) {
        return y(p)
    }
    ,
    de.useFormState = function(y, p, b) {
        return h.H.useFormState(y, p, b)
    }
    ,
    de.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    de.version = "19.2.6",
    de
}
var Km;
function Yp() {
    if (Km)
        return ac.exports;
    Km = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (i) {
                console.error(i)
            }
    }
    return a(),
    ac.exports = _v(),
    ac.exports
}
var Fm;
function Av() {
    if (Fm)
        return zi;
    Fm = 1;
    var a = Ev()
      , i = Zi()
      , r = Yp();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function f(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function h(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function g(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function y(t) {
        if (f(t) !== t)
            throw Error(o(188))
    }
    function p(t) {
        var e = t.alternate;
        if (!e) {
            if (e = f(t),
            e === null)
                throw Error(o(188));
            return e !== t ? null : t
        }
        for (var n = t, l = e; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var u = s.alternate;
            if (u === null) {
                if (l = s.return,
                l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (s.child === u.child) {
                for (u = s.child; u; ) {
                    if (u === n)
                        return y(s),
                        t;
                    if (u === l)
                        return y(s),
                        e;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== l.return)
                n = s,
                l = u;
            else {
                for (var d = !1, v = s.child; v; ) {
                    if (v === n) {
                        d = !0,
                        n = s,
                        l = u;
                        break
                    }
                    if (v === l) {
                        d = !0,
                        l = s,
                        n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!d) {
                    for (v = u.child; v; ) {
                        if (v === n) {
                            d = !0,
                            n = u,
                            l = s;
                            break
                        }
                        if (v === l) {
                            d = !0,
                            l = u,
                            n = s;
                            break
                        }
                        v = v.sibling
                    }
                    if (!d)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== l)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? t : e
    }
    function b(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = b(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var S = Object.assign
      , E = Symbol.for("react.element")
      , _ = Symbol.for("react.transitional.element")
      , w = Symbol.for("react.portal")
      , O = Symbol.for("react.fragment")
      , C = Symbol.for("react.strict_mode")
      , M = Symbol.for("react.profiler")
      , k = Symbol.for("react.consumer")
      , Q = Symbol.for("react.context")
      , q = Symbol.for("react.forward_ref")
      , $ = Symbol.for("react.suspense")
      , W = Symbol.for("react.suspense_list")
      , X = Symbol.for("react.memo")
      , K = Symbol.for("react.lazy")
      , J = Symbol.for("react.activity")
      , rt = Symbol.for("react.memo_cache_sentinel")
      , et = Symbol.iterator;
    function dt(t) {
        return t === null || typeof t != "object" ? null : (t = et && t[et] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var yt = Symbol.for("react.client.reference");
    function Gt(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === yt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case O:
            return "Fragment";
        case M:
            return "Profiler";
        case C:
            return "StrictMode";
        case $:
            return "Suspense";
        case W:
            return "SuspenseList";
        case J:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case w:
                return "Portal";
            case Q:
                return t.displayName || "Context";
            case k:
                return (t._context.displayName || "Context") + ".Consumer";
            case q:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case X:
                return e = t.displayName || null,
                e !== null ? e : Gt(t.type) || "Memo";
            case K:
                e = t._payload,
                t = t._init;
                try {
                    return Gt(t(e))
                } catch {}
            }
        return null
    }
    var jt = Array.isArray
      , U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Z = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , it = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , _t = []
      , Tt = -1;
    function j(t) {
        return {
            current: t
        }
    }
    function Y(t) {
        0 > Tt || (t.current = _t[Tt],
        _t[Tt] = null,
        Tt--)
    }
    function F(t, e) {
        Tt++,
        _t[Tt] = t.current,
        t.current = e
    }
    var P = j(null)
      , at = j(null)
      , ft = j(null)
      , St = j(null);
    function kt(t, e) {
        switch (F(ft, e),
        F(at, t),
        F(P, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? um(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = um(e),
                t = cm(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        Y(P),
        F(P, t)
    }
    function Ot() {
        Y(P),
        Y(at),
        Y(ft)
    }
    function en(t) {
        t.memoizedState !== null && F(St, t);
        var e = P.current
          , n = cm(e, t.type);
        e !== n && (F(at, t),
        F(P, n))
    }
    function nn(t) {
        at.current === t && (Y(P),
        Y(at)),
        St.current === t && (Y(St),
        Ci._currentValue = it)
    }
    var wn, Ll;
    function Ke(t) {
        if (wn === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                wn = e && e[1] || "",
                Ll = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + wn + t + Ll
    }
    var Nl = !1;
    function Ya(t, e) {
        if (!t || Nl)
            return "";
        Nl = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var V = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(V.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(V, [])
                                } catch (N) {
                                    var L = N
                                }
                                Reflect.construct(t, [], V)
                            } else {
                                try {
                                    V.call()
                                } catch (N) {
                                    L = N
                                }
                                t.call(V.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (N) {
                                L = N
                            }
                            (V = t()) && typeof V.catch == "function" && V.catch(function() {})
                        }
                    } catch (N) {
                        if (N && L && typeof N.stack == "string")
                            return [N.stack, L.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = l.DetermineComponentFrameRoot()
              , d = u[0]
              , v = u[1];
            if (d && v) {
                var A = d.split(`
`)
                  , B = v.split(`
`);
                for (s = l = 0; l < A.length && !A[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; s < B.length && !B[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (l === A.length || s === B.length)
                    for (l = A.length - 1,
                    s = B.length - 1; 1 <= l && 0 <= s && A[l] !== B[s]; )
                        s--;
                for (; 1 <= l && 0 <= s; l--,
                s--)
                    if (A[l] !== B[s]) {
                        if (l !== 1 || s !== 1)
                            do
                                if (l--,
                                s--,
                                0 > s || A[l] !== B[s]) {
                                    var H = `
` + A[l].replace(" at new ", " at ");
                                    return t.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", t.displayName)),
                                    H
                                }
                            while (1 <= l && 0 <= s);
                        break
                    }
            }
        } finally {
            Nl = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Ke(n) : ""
    }
    function Ji(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Ke(t.type);
        case 16:
            return Ke("Lazy");
        case 13:
            return t.child !== e && e !== null ? Ke("Suspense Fallback") : Ke("Suspense");
        case 19:
            return Ke("SuspenseList");
        case 0:
        case 15:
            return Ya(t.type, !1);
        case 11:
            return Ya(t.type.render, !1);
        case 1:
            return Ya(t.type, !0);
        case 31:
            return Ke("Activity");
        default:
            return ""
        }
    }
    function an(t) {
        try {
            var e = ""
              , n = null;
            do
                e += Ji(t, n),
                n = t,
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var da = Object.prototype.hasOwnProperty
      , ke = a.unstable_scheduleCallback
      , Ul = a.unstable_cancelCallback
      , Wi = a.unstable_shouldYield
      , Hs = a.unstable_requestPaint
      , fe = a.unstable_now
      , Lt = a.unstable_getCurrentPriorityLevel
      , ae = a.unstable_ImmediatePriority
      , Fe = a.unstable_UserBlockingPriority
      , Va = a.unstable_NormalPriority
      , I0 = a.unstable_LowPriority
      , Vc = a.unstable_IdlePriority
      , $0 = a.log
      , tg = a.unstable_setDisableYieldValue
      , Hl = null
      , Ae = null;
    function Mn(t) {
        if (typeof $0 == "function" && tg(t),
        Ae && typeof Ae.setStrictMode == "function")
            try {
                Ae.setStrictMode(Hl, t)
            } catch {}
    }
    var Te = Math.clz32 ? Math.clz32 : ag
      , eg = Math.log
      , ng = Math.LN2;
    function ag(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (eg(t) / ng | 0) | 0
    }
    var Pi = 256
      , Ii = 262144
      , $i = 4194304;
    function ha(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function tr(t, e, n) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var s = 0
          , u = t.suspendedLanes
          , d = t.pingedLanes;
        t = t.warmLanes;
        var v = l & 134217727;
        return v !== 0 ? (l = v & ~u,
        l !== 0 ? s = ha(l) : (d &= v,
        d !== 0 ? s = ha(d) : n || (n = v & ~t,
        n !== 0 && (s = ha(n))))) : (v = l & ~u,
        v !== 0 ? s = ha(v) : d !== 0 ? s = ha(d) : n || (n = l & ~t,
        n !== 0 && (s = ha(n)))),
        s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s,
        n = e & -e,
        u >= n || u === 32 && (n & 4194048) !== 0) ? e : s
    }
    function ql(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function lg(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function kc() {
        var t = $i;
        return $i <<= 1,
        ($i & 62914560) === 0 && ($i = 4194304),
        t
    }
    function qs(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function Gl(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function ig(t, e, n, l, s, u) {
        var d = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , A = t.expirationTimes
          , B = t.hiddenUpdates;
        for (n = d & ~n; 0 < n; ) {
            var H = 31 - Te(n)
              , V = 1 << H;
            v[H] = 0,
            A[H] = -1;
            var L = B[H];
            if (L !== null)
                for (B[H] = null,
                H = 0; H < L.length; H++) {
                    var N = L[H];
                    N !== null && (N.lane &= -536870913)
                }
            n &= ~V
        }
        l !== 0 && Xc(t, l, 0),
        u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e))
    }
    function Xc(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var l = 31 - Te(e);
        t.entangledLanes |= e,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930
    }
    function Qc(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var l = 31 - Te(n)
              , s = 1 << l;
            s & e | t[l] & e && (t[l] |= e),
            n &= ~s
        }
    }
    function Zc(t, e) {
        var n = e & -e;
        return n = (n & 42) !== 0 ? 1 : Gs(n),
        (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    }
    function Gs(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Ys(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Kc() {
        var t = Z.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Dm(t.type))
    }
    function Fc(t, e) {
        var n = Z.p;
        try {
            return Z.p = t,
            e()
        } finally {
            Z.p = n
        }
    }
    var zn = Math.random().toString(36).slice(2)
      , le = "__reactFiber$" + zn
      , me = "__reactProps$" + zn
      , ka = "__reactContainer$" + zn
      , Vs = "__reactEvents$" + zn
      , rg = "__reactListeners$" + zn
      , sg = "__reactHandles$" + zn
      , Jc = "__reactResources$" + zn
      , Yl = "__reactMarker$" + zn;
    function ks(t) {
        delete t[le],
        delete t[me],
        delete t[Vs],
        delete t[rg],
        delete t[sg]
    }
    function Xa(t) {
        var e = t[le];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[ka] || n[le]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = ym(t); t !== null; ) {
                        if (n = t[le])
                            return n;
                        t = ym(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function Qa(t) {
        if (t = t[le] || t[ka]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Vl(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function Za(t) {
        var e = t[Jc];
        return e || (e = t[Jc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function te(t) {
        t[Yl] = !0
    }
    var Wc = new Set
      , Pc = {};
    function ma(t, e) {
        Ka(t, e),
        Ka(t + "Capture", e)
    }
    function Ka(t, e) {
        for (Pc[t] = e,
        t = 0; t < e.length; t++)
            Wc.add(e[t])
    }
    var og = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Ic = {}
      , $c = {};
    function ug(t) {
        return da.call($c, t) ? !0 : da.call(Ic, t) ? !1 : og.test(t) ? $c[t] = !0 : (Ic[t] = !0,
        !1)
    }
    function er(t, e, n) {
        if (ug(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function nr(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function ln(t, e, n, l) {
        if (l === null)
            t.removeAttribute(n);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + l)
        }
    }
    function De(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function tf(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function cg(t, e, n) {
        var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var s = l.get
              , u = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(d) {
                    n = "" + d,
                    u.call(this, d)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(d) {
                    n = "" + d
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Xs(t) {
        if (!t._valueTracker) {
            var e = tf(t) ? "checked" : "value";
            t._valueTracker = cg(t, e, "" + t[e])
        }
    }
    function ef(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , l = "";
        return t && (l = tf(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function ar(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var fg = /[\n"\\]/g;
    function Be(t) {
        return t.replace(fg, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function Qs(t, e, n, l, s, u, d, v) {
        t.name = "",
        d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"),
        e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + De(e)) : t.value !== "" + De(e) && (t.value = "" + De(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"),
        e != null ? Zs(t, d, De(e)) : n != null ? Zs(t, d, De(n)) : l != null && t.removeAttribute("value"),
        s == null && u != null && (t.defaultChecked = !!u),
        s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + De(v) : t.removeAttribute("name")
    }
    function nf(t, e, n, l, s, u, d, v) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        e != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                Xs(t);
                return
            }
            n = n != null ? "" + De(n) : "",
            e = e != null ? "" + De(e) : n,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        l = l ?? s,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = v ? t.checked : !!l,
        t.defaultChecked = !!l,
        d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d),
        Xs(t)
    }
    function Zs(t, e, n) {
        e === "number" && ar(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function Fa(t, e, n, l) {
        if (t = t.options,
        e) {
            e = {};
            for (var s = 0; s < n.length; s++)
                e["$" + n[s]] = !0;
            for (n = 0; n < t.length; n++)
                s = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== s && (t[n].selected = s),
                s && l && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + De(n),
            e = null,
            s = 0; s < t.length; s++) {
                if (t[s].value === n) {
                    t[s].selected = !0,
                    l && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function af(t, e, n) {
        if (e != null && (e = "" + De(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + De(n) : ""
    }
    function lf(t, e, n, l) {
        if (e == null) {
            if (l != null) {
                if (n != null)
                    throw Error(o(92));
                if (jt(l)) {
                    if (1 < l.length)
                        throw Error(o(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""),
            e = n
        }
        n = De(e),
        t.defaultValue = n,
        l = t.textContent,
        l === n && l !== "" && l !== null && (t.value = l),
        Xs(t)
    }
    function Ja(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var dg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function rf(t, e, n) {
        var l = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || dg.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function sf(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(o(62));
        if (t = t.style,
        n != null) {
            for (var l in n)
                !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var s in e)
                l = e[s],
                e.hasOwnProperty(s) && n[s] !== l && rf(t, s, l)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && rf(t, u, e[u])
    }
    function Ks(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var hg = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , mg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function lr(t) {
        return mg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function rn() {}
    var Fs = null;
    function Js(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Wa = null
      , Pa = null;
    function of(t) {
        var e = Qa(t);
        if (e && (t = e.stateNode)) {
            var n = t[me] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (Qs(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Be("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var l = n[e];
                        if (l !== t && l.form === t.form) {
                            var s = l[me] || null;
                            if (!s)
                                throw Error(o(90));
                            Qs(l, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        l = n[e],
                        l.form === t.form && ef(l)
                }
                break t;
            case "textarea":
                af(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && Fa(t, !!n.multiple, e, !1)
            }
        }
    }
    var Ws = !1;
    function uf(t, e, n) {
        if (Ws)
            return t(e, n);
        Ws = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (Ws = !1,
            (Wa !== null || Pa !== null) && (Qr(),
            Wa && (e = Wa,
            t = Pa,
            Pa = Wa = null,
            of(e),
            t)))
                for (e = 0; e < t.length; e++)
                    of(t[e])
        }
    }
    function kl(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var l = n[me] || null;
        if (l === null)
            return null;
        n = l[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, e, typeof n));
        return n
    }
    var sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Ps = !1;
    if (sn)
        try {
            var Xl = {};
            Object.defineProperty(Xl, "passive", {
                get: function() {
                    Ps = !0
                }
            }),
            window.addEventListener("test", Xl, Xl),
            window.removeEventListener("test", Xl, Xl)
        } catch {
            Ps = !1
        }
    var On = null
      , Is = null
      , ir = null;
    function cf() {
        if (ir)
            return ir;
        var t, e = Is, n = e.length, l, s = "value"in On ? On.value : On.textContent, u = s.length;
        for (t = 0; t < n && e[t] === s[t]; t++)
            ;
        var d = n - t;
        for (l = 1; l <= d && e[n - l] === s[u - l]; l++)
            ;
        return ir = s.slice(t, 1 < l ? 1 - l : void 0)
    }
    function rr(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function sr() {
        return !0
    }
    function ff() {
        return !1
    }
    function pe(t) {
        function e(n, l, s, u, d) {
            this._reactName = n,
            this._targetInst = s,
            this.type = l,
            this.nativeEvent = u,
            this.target = d,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (n = t[v],
                this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? sr : ff,
            this.isPropagationStopped = ff,
            this
        }
        return S(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = sr)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = sr)
            },
            persist: function() {},
            isPersistent: sr
        }),
        e
    }
    var pa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, or = pe(pa), Ql = S({}, pa, {
        view: 0,
        detail: 0
    }), pg = pe(Ql), $s, to, Zl, ur = S({}, Ql, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: no,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Zl && (Zl && t.type === "mousemove" ? ($s = t.screenX - Zl.screenX,
            to = t.screenY - Zl.screenY) : to = $s = 0,
            Zl = t),
            $s)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : to
        }
    }), df = pe(ur), gg = S({}, ur, {
        dataTransfer: 0
    }), yg = pe(gg), vg = S({}, Ql, {
        relatedTarget: 0
    }), eo = pe(vg), Sg = S({}, pa, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), bg = pe(Sg), xg = S({}, pa, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Eg = pe(xg), _g = S({}, pa, {
        data: 0
    }), hf = pe(_g), Ag = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Tg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Cg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Rg(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = Cg[t]) ? !!e[t] : !1
    }
    function no() {
        return Rg
    }
    var jg = S({}, Ql, {
        key: function(t) {
            if (t.key) {
                var e = Ag[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = rr(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Tg[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: no,
        charCode: function(t) {
            return t.type === "keypress" ? rr(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? rr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , wg = pe(jg)
      , Mg = S({}, ur, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , mf = pe(Mg)
      , zg = S({}, Ql, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: no
    })
      , Og = pe(zg)
      , Dg = S({}, pa, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Bg = pe(Dg)
      , Lg = S({}, ur, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Ng = pe(Lg)
      , Ug = S({}, pa, {
        newState: 0,
        oldState: 0
    })
      , Hg = pe(Ug)
      , qg = [9, 13, 27, 32]
      , ao = sn && "CompositionEvent"in window
      , Kl = null;
    sn && "documentMode"in document && (Kl = document.documentMode);
    var Gg = sn && "TextEvent"in window && !Kl
      , pf = sn && (!ao || Kl && 8 < Kl && 11 >= Kl)
      , gf = " "
      , yf = !1;
    function vf(t, e) {
        switch (t) {
        case "keyup":
            return qg.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Sf(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Ia = !1;
    function Yg(t, e) {
        switch (t) {
        case "compositionend":
            return Sf(e);
        case "keypress":
            return e.which !== 32 ? null : (yf = !0,
            gf);
        case "textInput":
            return t = e.data,
            t === gf && yf ? null : t;
        default:
            return null
        }
    }
    function Vg(t, e) {
        if (Ia)
            return t === "compositionend" || !ao && vf(t, e) ? (t = cf(),
            ir = Is = On = null,
            Ia = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return pf && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var kg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function bf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!kg[t.type] : e === "textarea"
    }
    function xf(t, e, n, l) {
        Wa ? Pa ? Pa.push(l) : Pa = [l] : Wa = l,
        e = Ir(e, "onChange"),
        0 < e.length && (n = new or("onChange","change",null,n,l),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var Fl = null
      , Jl = null;
    function Xg(t) {
        am(t, 0)
    }
    function cr(t) {
        var e = Vl(t);
        if (ef(e))
            return t
    }
    function Ef(t, e) {
        if (t === "change")
            return e
    }
    var _f = !1;
    if (sn) {
        var lo;
        if (sn) {
            var io = "oninput"in document;
            if (!io) {
                var Af = document.createElement("div");
                Af.setAttribute("oninput", "return;"),
                io = typeof Af.oninput == "function"
            }
            lo = io
        } else
            lo = !1;
        _f = lo && (!document.documentMode || 9 < document.documentMode)
    }
    function Tf() {
        Fl && (Fl.detachEvent("onpropertychange", Cf),
        Jl = Fl = null)
    }
    function Cf(t) {
        if (t.propertyName === "value" && cr(Jl)) {
            var e = [];
            xf(e, Jl, t, Js(t)),
            uf(Xg, e)
        }
    }
    function Qg(t, e, n) {
        t === "focusin" ? (Tf(),
        Fl = e,
        Jl = n,
        Fl.attachEvent("onpropertychange", Cf)) : t === "focusout" && Tf()
    }
    function Zg(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return cr(Jl)
    }
    function Kg(t, e) {
        if (t === "click")
            return cr(e)
    }
    function Fg(t, e) {
        if (t === "input" || t === "change")
            return cr(e)
    }
    function Jg(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Ce = typeof Object.is == "function" ? Object.is : Jg;
    function Wl(t, e) {
        if (Ce(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , l = Object.keys(e);
        if (n.length !== l.length)
            return !1;
        for (l = 0; l < n.length; l++) {
            var s = n[l];
            if (!da.call(e, s) || !Ce(t[s], e[s]))
                return !1
        }
        return !0
    }
    function Rf(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function jf(t, e) {
        var n = Rf(t);
        t = 0;
        for (var l; n; ) {
            if (n.nodeType === 3) {
                if (l = t + n.textContent.length,
                t <= e && l >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = l
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Rf(n)
        }
    }
    function wf(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? wf(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Mf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = ar(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = ar(t.document)
        }
        return e
    }
    function ro(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var Wg = sn && "documentMode"in document && 11 >= document.documentMode
      , $a = null
      , so = null
      , Pl = null
      , oo = !1;
    function zf(t, e, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        oo || $a == null || $a !== ar(l) || (l = $a,
        "selectionStart"in l && ro(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Pl && Wl(Pl, l) || (Pl = l,
        l = Ir(so, "onSelect"),
        0 < l.length && (e = new or("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: l
        }),
        e.target = $a)))
    }
    function ga(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var tl = {
        animationend: ga("Animation", "AnimationEnd"),
        animationiteration: ga("Animation", "AnimationIteration"),
        animationstart: ga("Animation", "AnimationStart"),
        transitionrun: ga("Transition", "TransitionRun"),
        transitionstart: ga("Transition", "TransitionStart"),
        transitioncancel: ga("Transition", "TransitionCancel"),
        transitionend: ga("Transition", "TransitionEnd")
    }
      , uo = {}
      , Of = {};
    sn && (Of = document.createElement("div").style,
    "AnimationEvent"in window || (delete tl.animationend.animation,
    delete tl.animationiteration.animation,
    delete tl.animationstart.animation),
    "TransitionEvent"in window || delete tl.transitionend.transition);
    function ya(t) {
        if (uo[t])
            return uo[t];
        if (!tl[t])
            return t;
        var e = tl[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in Of)
                return uo[t] = e[n];
        return t
    }
    var Df = ya("animationend")
      , Bf = ya("animationiteration")
      , Lf = ya("animationstart")
      , Pg = ya("transitionrun")
      , Ig = ya("transitionstart")
      , $g = ya("transitioncancel")
      , Nf = ya("transitionend")
      , Uf = new Map
      , co = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    co.push("scrollEnd");
    function Xe(t, e) {
        Uf.set(t, e),
        ma(e, [t])
    }
    var fr = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , Le = []
      , el = 0
      , fo = 0;
    function dr() {
        for (var t = el, e = fo = el = 0; e < t; ) {
            var n = Le[e];
            Le[e++] = null;
            var l = Le[e];
            Le[e++] = null;
            var s = Le[e];
            Le[e++] = null;
            var u = Le[e];
            if (Le[e++] = null,
            l !== null && s !== null) {
                var d = l.pending;
                d === null ? s.next = s : (s.next = d.next,
                d.next = s),
                l.pending = s
            }
            u !== 0 && Hf(n, s, u)
        }
    }
    function hr(t, e, n, l) {
        Le[el++] = t,
        Le[el++] = e,
        Le[el++] = n,
        Le[el++] = l,
        fo |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function ho(t, e, n, l) {
        return hr(t, e, n, l),
        mr(t)
    }
    function va(t, e) {
        return hr(t, null, null, e),
        mr(t)
    }
    function Hf(t, e, n) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n);
        for (var s = !1, u = t.return; u !== null; )
            u.childLanes |= n,
            l = u.alternate,
            l !== null && (l.childLanes |= n),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (s = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        s && e !== null && (s = 31 - Te(n),
        t = u.hiddenUpdates,
        l = t[s],
        l === null ? t[s] = [e] : l.push(e),
        e.lane = n | 536870912),
        u) : null
    }
    function mr(t) {
        if (50 < Si)
            throw Si = 0,
            Eu = null,
            Error(o(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var nl = {};
    function ty(t, e, n, l) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Re(t, e, n, l) {
        return new ty(t,e,n,l)
    }
    function mo(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function on(t, e) {
        var n = t.alternate;
        return n === null ? (n = Re(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function qf(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function pr(t, e, n, l, s, u) {
        var d = 0;
        if (l = t,
        typeof t == "function")
            mo(t) && (d = 1);
        else if (typeof t == "string")
            d = iv(t, n, P.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case J:
                return t = Re(31, n, e, s),
                t.elementType = J,
                t.lanes = u,
                t;
            case O:
                return Sa(n.children, s, u, e);
            case C:
                d = 8,
                s |= 24;
                break;
            case M:
                return t = Re(12, n, e, s | 2),
                t.elementType = M,
                t.lanes = u,
                t;
            case $:
                return t = Re(13, n, e, s),
                t.elementType = $,
                t.lanes = u,
                t;
            case W:
                return t = Re(19, n, e, s),
                t.elementType = W,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case Q:
                        d = 10;
                        break t;
                    case k:
                        d = 9;
                        break t;
                    case q:
                        d = 11;
                        break t;
                    case X:
                        d = 14;
                        break t;
                    case K:
                        d = 16,
                        l = null;
                        break t
                    }
                d = 29,
                n = Error(o(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return e = Re(d, n, e, s),
        e.elementType = t,
        e.type = l,
        e.lanes = u,
        e
    }
    function Sa(t, e, n, l) {
        return t = Re(7, t, l, e),
        t.lanes = n,
        t
    }
    function po(t, e, n) {
        return t = Re(6, t, null, e),
        t.lanes = n,
        t
    }
    function Gf(t) {
        var e = Re(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function go(t, e, n) {
        return e = Re(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var Yf = new WeakMap;
    function Ne(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = Yf.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: an(e)
            },
            Yf.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: an(e)
        }
    }
    var al = []
      , ll = 0
      , gr = null
      , Il = 0
      , Ue = []
      , He = 0
      , Dn = null
      , Je = 1
      , We = "";
    function un(t, e) {
        al[ll++] = Il,
        al[ll++] = gr,
        gr = t,
        Il = e
    }
    function Vf(t, e, n) {
        Ue[He++] = Je,
        Ue[He++] = We,
        Ue[He++] = Dn,
        Dn = t;
        var l = Je;
        t = We;
        var s = 32 - Te(l) - 1;
        l &= ~(1 << s),
        n += 1;
        var u = 32 - Te(e) + s;
        if (30 < u) {
            var d = s - s % 5;
            u = (l & (1 << d) - 1).toString(32),
            l >>= d,
            s -= d,
            Je = 1 << 32 - Te(e) + s | n << s | l,
            We = u + t
        } else
            Je = 1 << u | n << s | l,
            We = t
    }
    function yo(t) {
        t.return !== null && (un(t, 1),
        Vf(t, 1, 0))
    }
    function vo(t) {
        for (; t === gr; )
            gr = al[--ll],
            al[ll] = null,
            Il = al[--ll],
            al[ll] = null;
        for (; t === Dn; )
            Dn = Ue[--He],
            Ue[He] = null,
            We = Ue[--He],
            Ue[He] = null,
            Je = Ue[--He],
            Ue[He] = null
    }
    function kf(t, e) {
        Ue[He++] = Je,
        Ue[He++] = We,
        Ue[He++] = Dn,
        Je = e.id,
        We = e.overflow,
        Dn = t
    }
    var ie = null
      , Nt = null
      , vt = !1
      , Bn = null
      , qe = !1
      , So = Error(o(519));
    function Ln(t) {
        var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw $l(Ne(e, t)),
        So
    }
    function Xf(t) {
        var e = t.stateNode
          , n = t.type
          , l = t.memoizedProps;
        switch (e[le] = t,
        e[me] = l,
        n) {
        case "dialog":
            mt("cancel", e),
            mt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            mt("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < xi.length; n++)
                mt(xi[n], e);
            break;
        case "source":
            mt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            mt("error", e),
            mt("load", e);
            break;
        case "details":
            mt("toggle", e);
            break;
        case "input":
            mt("invalid", e),
            nf(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            mt("invalid", e);
            break;
        case "textarea":
            mt("invalid", e),
            lf(e, l.value, l.defaultValue, l.children)
        }
        n = l.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || sm(e.textContent, n) ? (l.popover != null && (mt("beforetoggle", e),
        mt("toggle", e)),
        l.onScroll != null && mt("scroll", e),
        l.onScrollEnd != null && mt("scrollend", e),
        l.onClick != null && (e.onclick = rn),
        e = !0) : e = !1,
        e || Ln(t, !0)
    }
    function Qf(t) {
        for (ie = t.return; ie; )
            switch (ie.tag) {
            case 5:
            case 31:
            case 13:
                qe = !1;
                return;
            case 27:
            case 3:
                qe = !0;
                return;
            default:
                ie = ie.return
            }
    }
    function il(t) {
        if (t !== ie)
            return !1;
        if (!vt)
            return Qf(t),
            vt = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || Uu(t.type, t.memoizedProps)),
        n = !n),
        n && Nt && Ln(t),
        Qf(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            Nt = gm(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            Nt = gm(t)
        } else
            e === 27 ? (e = Nt,
            Jn(t.type) ? (t = Vu,
            Vu = null,
            Nt = t) : Nt = e) : Nt = ie ? Ye(t.stateNode.nextSibling) : null;
        return !0
    }
    function ba() {
        Nt = ie = null,
        vt = !1
    }
    function bo() {
        var t = Bn;
        return t !== null && (Se === null ? Se = t : Se.push.apply(Se, t),
        Bn = null),
        t
    }
    function $l(t) {
        Bn === null ? Bn = [t] : Bn.push(t)
    }
    var xo = j(null)
      , xa = null
      , cn = null;
    function Nn(t, e, n) {
        F(xo, e._currentValue),
        e._currentValue = n
    }
    function fn(t) {
        t._currentValue = xo.current,
        Y(xo)
    }
    function Eo(t, e, n) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function _o(t, e, n, l) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null; ) {
            var u = s.dependencies;
            if (u !== null) {
                var d = s.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var v = u;
                    u = s;
                    for (var A = 0; A < e.length; A++)
                        if (v.context === e[A]) {
                            u.lanes |= n,
                            v = u.alternate,
                            v !== null && (v.lanes |= n),
                            Eo(u.return, n, t),
                            l || (d = null);
                            break t
                        }
                    u = v.next
                }
            } else if (s.tag === 18) {
                if (d = s.return,
                d === null)
                    throw Error(o(341));
                d.lanes |= n,
                u = d.alternate,
                u !== null && (u.lanes |= n),
                Eo(d, n, t),
                d = null
            } else
                d = s.child;
            if (d !== null)
                d.return = s;
            else
                for (d = s; d !== null; ) {
                    if (d === t) {
                        d = null;
                        break
                    }
                    if (s = d.sibling,
                    s !== null) {
                        s.return = d.return,
                        d = s;
                        break
                    }
                    d = d.return
                }
            s = d
        }
    }
    function rl(t, e, n, l) {
        t = null;
        for (var s = e, u = !1; s !== null; ) {
            if (!u) {
                if ((s.flags & 524288) !== 0)
                    u = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var d = s.alternate;
                if (d === null)
                    throw Error(o(387));
                if (d = d.memoizedProps,
                d !== null) {
                    var v = s.type;
                    Ce(s.pendingProps.value, d.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (s === St.current) {
                if (d = s.alternate,
                d === null)
                    throw Error(o(387));
                d.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Ci) : t = [Ci])
            }
            s = s.return
        }
        t !== null && _o(e, t, n, l),
        e.flags |= 262144
    }
    function yr(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ce(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Ea(t) {
        xa = t,
        cn = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function re(t) {
        return Zf(xa, t)
    }
    function vr(t, e) {
        return xa === null && Ea(t),
        Zf(t, e)
    }
    function Zf(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        cn === null) {
            if (t === null)
                throw Error(o(308));
            cn = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            cn = cn.next = e;
        return n
    }
    var ey = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , ny = a.unstable_scheduleCallback
      , ay = a.unstable_NormalPriority
      , Kt = {
        $$typeof: Q,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ao() {
        return {
            controller: new ey,
            data: new Map,
            refCount: 0
        }
    }
    function ti(t) {
        t.refCount--,
        t.refCount === 0 && ny(ay, function() {
            t.controller.abort()
        })
    }
    var ei = null
      , To = 0
      , sl = 0
      , ol = null;
    function ly(t, e) {
        if (ei === null) {
            var n = ei = [];
            To = 0,
            sl = ju(),
            ol = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return To++,
        e.then(Kf, Kf),
        e
    }
    function Kf() {
        if (--To === 0 && ei !== null) {
            ol !== null && (ol.status = "fulfilled");
            var t = ei;
            ei = null,
            sl = 0,
            ol = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function iy(t, e) {
        var n = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                n.push(s)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var s = 0; s < n.length; s++)
                (0,
                n[s])(e)
        }, function(s) {
            for (l.status = "rejected",
            l.reason = s,
            s = 0; s < n.length; s++)
                (0,
                n[s])(void 0)
        }),
        l
    }
    var Ff = U.S;
    U.S = function(t, e) {
        zh = fe(),
        typeof e == "object" && e !== null && typeof e.then == "function" && ly(t, e),
        Ff !== null && Ff(t, e)
    }
    ;
    var _a = j(null);
    function Co() {
        var t = _a.current;
        return t !== null ? t : Dt.pooledCache
    }
    function Sr(t, e) {
        e === null ? F(_a, _a.current) : F(_a, e.pool)
    }
    function Jf() {
        var t = Co();
        return t === null ? null : {
            parent: Kt._currentValue,
            pool: t
        }
    }
    var ul = Error(o(460))
      , Ro = Error(o(474))
      , br = Error(o(542))
      , xr = {
        then: function() {}
    };
    function Wf(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function Pf(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then(rn, rn),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            $f(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(rn, rn);
            else {
                if (t = Dt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e,
                t.status = "pending",
                t.then(function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                $f(t),
                t
            }
            throw Ta = e,
            ul
        }
    }
    function Aa(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ta = n,
            ul) : n
        }
    }
    var Ta = null;
    function If() {
        if (Ta === null)
            throw Error(o(459));
        var t = Ta;
        return Ta = null,
        t
    }
    function $f(t) {
        if (t === ul || t === br)
            throw Error(o(483))
    }
    var cl = null
      , ni = 0;
    function Er(t) {
        var e = ni;
        return ni += 1,
        cl === null && (cl = []),
        Pf(cl, t, e)
    }
    function ai(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function _r(t, e) {
        throw e.$$typeof === E ? Error(o(525)) : (t = Object.prototype.toString.call(e),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function td(t) {
        function e(z, R) {
            if (t) {
                var D = z.deletions;
                D === null ? (z.deletions = [R],
                z.flags |= 16) : D.push(R)
            }
        }
        function n(z, R) {
            if (!t)
                return null;
            for (; R !== null; )
                e(z, R),
                R = R.sibling;
            return null
        }
        function l(z) {
            for (var R = new Map; z !== null; )
                z.key !== null ? R.set(z.key, z) : R.set(z.index, z),
                z = z.sibling;
            return R
        }
        function s(z, R) {
            return z = on(z, R),
            z.index = 0,
            z.sibling = null,
            z
        }
        function u(z, R, D) {
            return z.index = D,
            t ? (D = z.alternate,
            D !== null ? (D = D.index,
            D < R ? (z.flags |= 67108866,
            R) : D) : (z.flags |= 67108866,
            R)) : (z.flags |= 1048576,
            R)
        }
        function d(z) {
            return t && z.alternate === null && (z.flags |= 67108866),
            z
        }
        function v(z, R, D, G) {
            return R === null || R.tag !== 6 ? (R = po(D, z.mode, G),
            R.return = z,
            R) : (R = s(R, D),
            R.return = z,
            R)
        }
        function A(z, R, D, G) {
            var lt = D.type;
            return lt === O ? H(z, R, D.props.children, G, D.key) : R !== null && (R.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === K && Aa(lt) === R.type) ? (R = s(R, D.props),
            ai(R, D),
            R.return = z,
            R) : (R = pr(D.type, D.key, D.props, null, z.mode, G),
            ai(R, D),
            R.return = z,
            R)
        }
        function B(z, R, D, G) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== D.containerInfo || R.stateNode.implementation !== D.implementation ? (R = go(D, z.mode, G),
            R.return = z,
            R) : (R = s(R, D.children || []),
            R.return = z,
            R)
        }
        function H(z, R, D, G, lt) {
            return R === null || R.tag !== 7 ? (R = Sa(D, z.mode, G, lt),
            R.return = z,
            R) : (R = s(R, D),
            R.return = z,
            R)
        }
        function V(z, R, D) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return R = po("" + R, z.mode, D),
                R.return = z,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case _:
                    return D = pr(R.type, R.key, R.props, null, z.mode, D),
                    ai(D, R),
                    D.return = z,
                    D;
                case w:
                    return R = go(R, z.mode, D),
                    R.return = z,
                    R;
                case K:
                    return R = Aa(R),
                    V(z, R, D)
                }
                if (jt(R) || dt(R))
                    return R = Sa(R, z.mode, D, null),
                    R.return = z,
                    R;
                if (typeof R.then == "function")
                    return V(z, Er(R), D);
                if (R.$$typeof === Q)
                    return V(z, vr(z, R), D);
                _r(z, R)
            }
            return null
        }
        function L(z, R, D, G) {
            var lt = R !== null ? R.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
                return lt !== null ? null : v(z, R, "" + D, G);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case _:
                    return D.key === lt ? A(z, R, D, G) : null;
                case w:
                    return D.key === lt ? B(z, R, D, G) : null;
                case K:
                    return D = Aa(D),
                    L(z, R, D, G)
                }
                if (jt(D) || dt(D))
                    return lt !== null ? null : H(z, R, D, G, null);
                if (typeof D.then == "function")
                    return L(z, R, Er(D), G);
                if (D.$$typeof === Q)
                    return L(z, R, vr(z, D), G);
                _r(z, D)
            }
            return null
        }
        function N(z, R, D, G, lt) {
            if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
                return z = z.get(D) || null,
                v(R, z, "" + G, lt);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case _:
                    return z = z.get(G.key === null ? D : G.key) || null,
                    A(R, z, G, lt);
                case w:
                    return z = z.get(G.key === null ? D : G.key) || null,
                    B(R, z, G, lt);
                case K:
                    return G = Aa(G),
                    N(z, R, D, G, lt)
                }
                if (jt(G) || dt(G))
                    return z = z.get(D) || null,
                    H(R, z, G, lt, null);
                if (typeof G.then == "function")
                    return N(z, R, D, Er(G), lt);
                if (G.$$typeof === Q)
                    return N(z, R, D, vr(R, G), lt);
                _r(R, G)
            }
            return null
        }
        function tt(z, R, D, G) {
            for (var lt = null, bt = null, nt = R, ct = R = 0, gt = null; nt !== null && ct < D.length; ct++) {
                nt.index > ct ? (gt = nt,
                nt = null) : gt = nt.sibling;
                var xt = L(z, nt, D[ct], G);
                if (xt === null) {
                    nt === null && (nt = gt);
                    break
                }
                t && nt && xt.alternate === null && e(z, nt),
                R = u(xt, R, ct),
                bt === null ? lt = xt : bt.sibling = xt,
                bt = xt,
                nt = gt
            }
            if (ct === D.length)
                return n(z, nt),
                vt && un(z, ct),
                lt;
            if (nt === null) {
                for (; ct < D.length; ct++)
                    nt = V(z, D[ct], G),
                    nt !== null && (R = u(nt, R, ct),
                    bt === null ? lt = nt : bt.sibling = nt,
                    bt = nt);
                return vt && un(z, ct),
                lt
            }
            for (nt = l(nt); ct < D.length; ct++)
                gt = N(nt, z, ct, D[ct], G),
                gt !== null && (t && gt.alternate !== null && nt.delete(gt.key === null ? ct : gt.key),
                R = u(gt, R, ct),
                bt === null ? lt = gt : bt.sibling = gt,
                bt = gt);
            return t && nt.forEach(function(ta) {
                return e(z, ta)
            }),
            vt && un(z, ct),
            lt
        }
        function st(z, R, D, G) {
            if (D == null)
                throw Error(o(151));
            for (var lt = null, bt = null, nt = R, ct = R = 0, gt = null, xt = D.next(); nt !== null && !xt.done; ct++,
            xt = D.next()) {
                nt.index > ct ? (gt = nt,
                nt = null) : gt = nt.sibling;
                var ta = L(z, nt, xt.value, G);
                if (ta === null) {
                    nt === null && (nt = gt);
                    break
                }
                t && nt && ta.alternate === null && e(z, nt),
                R = u(ta, R, ct),
                bt === null ? lt = ta : bt.sibling = ta,
                bt = ta,
                nt = gt
            }
            if (xt.done)
                return n(z, nt),
                vt && un(z, ct),
                lt;
            if (nt === null) {
                for (; !xt.done; ct++,
                xt = D.next())
                    xt = V(z, xt.value, G),
                    xt !== null && (R = u(xt, R, ct),
                    bt === null ? lt = xt : bt.sibling = xt,
                    bt = xt);
                return vt && un(z, ct),
                lt
            }
            for (nt = l(nt); !xt.done; ct++,
            xt = D.next())
                xt = N(nt, z, ct, xt.value, G),
                xt !== null && (t && xt.alternate !== null && nt.delete(xt.key === null ? ct : xt.key),
                R = u(xt, R, ct),
                bt === null ? lt = xt : bt.sibling = xt,
                bt = xt);
            return t && nt.forEach(function(gv) {
                return e(z, gv)
            }),
            vt && un(z, ct),
            lt
        }
        function zt(z, R, D, G) {
            if (typeof D == "object" && D !== null && D.type === O && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case _:
                    t: {
                        for (var lt = D.key; R !== null; ) {
                            if (R.key === lt) {
                                if (lt = D.type,
                                lt === O) {
                                    if (R.tag === 7) {
                                        n(z, R.sibling),
                                        G = s(R, D.props.children),
                                        G.return = z,
                                        z = G;
                                        break t
                                    }
                                } else if (R.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === K && Aa(lt) === R.type) {
                                    n(z, R.sibling),
                                    G = s(R, D.props),
                                    ai(G, D),
                                    G.return = z,
                                    z = G;
                                    break t
                                }
                                n(z, R);
                                break
                            } else
                                e(z, R);
                            R = R.sibling
                        }
                        D.type === O ? (G = Sa(D.props.children, z.mode, G, D.key),
                        G.return = z,
                        z = G) : (G = pr(D.type, D.key, D.props, null, z.mode, G),
                        ai(G, D),
                        G.return = z,
                        z = G)
                    }
                    return d(z);
                case w:
                    t: {
                        for (lt = D.key; R !== null; ) {
                            if (R.key === lt)
                                if (R.tag === 4 && R.stateNode.containerInfo === D.containerInfo && R.stateNode.implementation === D.implementation) {
                                    n(z, R.sibling),
                                    G = s(R, D.children || []),
                                    G.return = z,
                                    z = G;
                                    break t
                                } else {
                                    n(z, R);
                                    break
                                }
                            else
                                e(z, R);
                            R = R.sibling
                        }
                        G = go(D, z.mode, G),
                        G.return = z,
                        z = G
                    }
                    return d(z);
                case K:
                    return D = Aa(D),
                    zt(z, R, D, G)
                }
                if (jt(D))
                    return tt(z, R, D, G);
                if (dt(D)) {
                    if (lt = dt(D),
                    typeof lt != "function")
                        throw Error(o(150));
                    return D = lt.call(D),
                    st(z, R, D, G)
                }
                if (typeof D.then == "function")
                    return zt(z, R, Er(D), G);
                if (D.$$typeof === Q)
                    return zt(z, R, vr(z, D), G);
                _r(z, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D,
            R !== null && R.tag === 6 ? (n(z, R.sibling),
            G = s(R, D),
            G.return = z,
            z = G) : (n(z, R),
            G = po(D, z.mode, G),
            G.return = z,
            z = G),
            d(z)) : n(z, R)
        }
        return function(z, R, D, G) {
            try {
                ni = 0;
                var lt = zt(z, R, D, G);
                return cl = null,
                lt
            } catch (nt) {
                if (nt === ul || nt === br)
                    throw nt;
                var bt = Re(29, nt, null, z.mode);
                return bt.lanes = G,
                bt.return = z,
                bt
            }
        }
    }
    var Ca = td(!0)
      , ed = td(!1)
      , Un = !1;
    function jo(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function wo(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Hn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function qn(t, e, n) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (At & 2) !== 0) {
            var s = l.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            l.pending = e,
            e = mr(t),
            Hf(t, null, n),
            e
        }
        return hr(t, l, e, n),
        mr(t)
    }
    function li(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            Qc(t, n)
        }
    }
    function Mo(t, e) {
        var n = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        n === l)) {
            var s = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var d = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? s = u = d : u = u.next = d,
                    n = n.next
                } while (n !== null);
                u === null ? s = u = e : u = u.next = e
            } else
                s = u = e;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: u,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var zo = !1;
    function ii() {
        if (zo) {
            var t = ol;
            if (t !== null)
                throw t
        }
    }
    function ri(t, e, n, l) {
        zo = !1;
        var s = t.updateQueue;
        Un = !1;
        var u = s.firstBaseUpdate
          , d = s.lastBaseUpdate
          , v = s.shared.pending;
        if (v !== null) {
            s.shared.pending = null;
            var A = v
              , B = A.next;
            A.next = null,
            d === null ? u = B : d.next = B,
            d = A;
            var H = t.alternate;
            H !== null && (H = H.updateQueue,
            v = H.lastBaseUpdate,
            v !== d && (v === null ? H.firstBaseUpdate = B : v.next = B,
            H.lastBaseUpdate = A))
        }
        if (u !== null) {
            var V = s.baseState;
            d = 0,
            H = B = A = null,
            v = u;
            do {
                var L = v.lane & -536870913
                  , N = L !== v.lane;
                if (N ? (pt & L) === L : (l & L) === L) {
                    L !== 0 && L === sl && (zo = !0),
                    H !== null && (H = H.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var tt = t
                          , st = v;
                        L = e;
                        var zt = n;
                        switch (st.tag) {
                        case 1:
                            if (tt = st.payload,
                            typeof tt == "function") {
                                V = tt.call(zt, V, L);
                                break t
                            }
                            V = tt;
                            break t;
                        case 3:
                            tt.flags = tt.flags & -65537 | 128;
                        case 0:
                            if (tt = st.payload,
                            L = typeof tt == "function" ? tt.call(zt, V, L) : tt,
                            L == null)
                                break t;
                            V = S({}, V, L);
                            break t;
                        case 2:
                            Un = !0
                        }
                    }
                    L = v.callback,
                    L !== null && (t.flags |= 64,
                    N && (t.flags |= 8192),
                    N = s.callbacks,
                    N === null ? s.callbacks = [L] : N.push(L))
                } else
                    N = {
                        lane: L,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    H === null ? (B = H = N,
                    A = V) : H = H.next = N,
                    d |= L;
                if (v = v.next,
                v === null) {
                    if (v = s.shared.pending,
                    v === null)
                        break;
                    N = v,
                    v = N.next,
                    N.next = null,
                    s.lastBaseUpdate = N,
                    s.shared.pending = null
                }
            } while (!0);
            H === null && (A = V),
            s.baseState = A,
            s.firstBaseUpdate = B,
            s.lastBaseUpdate = H,
            u === null && (s.shared.lanes = 0),
            Xn |= d,
            t.lanes = d,
            t.memoizedState = V
        }
    }
    function nd(t, e) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(e)
    }
    function ad(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                nd(n[t], e)
    }
    var fl = j(null)
      , Ar = j(0);
    function ld(t, e) {
        t = bn,
        F(Ar, t),
        F(fl, e),
        bn = t | e.baseLanes
    }
    function Oo() {
        F(Ar, bn),
        F(fl, fl.current)
    }
    function Do() {
        bn = Ar.current,
        Y(fl),
        Y(Ar)
    }
    var je = j(null)
      , Ge = null;
    function Gn(t) {
        var e = t.alternate;
        F(Xt, Xt.current & 1),
        F(je, t),
        Ge === null && (e === null || fl.current !== null || e.memoizedState !== null) && (Ge = t)
    }
    function Bo(t) {
        F(Xt, Xt.current),
        F(je, t),
        Ge === null && (Ge = t)
    }
    function id(t) {
        t.tag === 22 ? (F(Xt, Xt.current),
        F(je, t),
        Ge === null && (Ge = t)) : Yn()
    }
    function Yn() {
        F(Xt, Xt.current),
        F(je, je.current)
    }
    function we(t) {
        Y(je),
        Ge === t && (Ge = null),
        Y(Xt)
    }
    var Xt = j(0);
    function Tr(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || Gu(n) || Yu(n)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var dn = 0
      , ut = null
      , wt = null
      , Ft = null
      , Cr = !1
      , dl = !1
      , Ra = !1
      , Rr = 0
      , si = 0
      , hl = null
      , ry = 0;
    function Yt() {
        throw Error(o(321))
    }
    function Lo(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!Ce(t[n], e[n]))
                return !1;
        return !0
    }
    function No(t, e, n, l, s, u) {
        return dn = u,
        ut = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        U.H = t === null || t.memoizedState === null ? Vd : Po,
        Ra = !1,
        u = n(l, s),
        Ra = !1,
        dl && (u = sd(e, n, l, s)),
        rd(t),
        u
    }
    function rd(t) {
        U.H = ci;
        var e = wt !== null && wt.next !== null;
        if (dn = 0,
        Ft = wt = ut = null,
        Cr = !1,
        si = 0,
        hl = null,
        e)
            throw Error(o(300));
        t === null || Jt || (t = t.dependencies,
        t !== null && yr(t) && (Jt = !0))
    }
    function sd(t, e, n, l) {
        ut = t;
        var s = 0;
        do {
            if (dl && (hl = null),
            si = 0,
            dl = !1,
            25 <= s)
                throw Error(o(301));
            if (s += 1,
            Ft = wt = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            U.H = kd,
            u = e(n, l)
        } while (dl);
        return u
    }
    function sy() {
        var t = U.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? oi(e) : e,
        t = t.useState()[0],
        (wt !== null ? wt.memoizedState : null) !== t && (ut.flags |= 1024),
        e
    }
    function Uo() {
        var t = Rr !== 0;
        return Rr = 0,
        t
    }
    function Ho(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function qo(t) {
        if (Cr) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Cr = !1
        }
        dn = 0,
        Ft = wt = ut = null,
        dl = !1,
        si = Rr = 0,
        hl = null
    }
    function he() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ft === null ? ut.memoizedState = Ft = t : Ft = Ft.next = t,
        Ft
    }
    function Qt() {
        if (wt === null) {
            var t = ut.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = wt.next;
        var e = Ft === null ? ut.memoizedState : Ft.next;
        if (e !== null)
            Ft = e,
            wt = t;
        else {
            if (t === null)
                throw ut.alternate === null ? Error(o(467)) : Error(o(310));
            wt = t,
            t = {
                memoizedState: wt.memoizedState,
                baseState: wt.baseState,
                baseQueue: wt.baseQueue,
                queue: wt.queue,
                next: null
            },
            Ft === null ? ut.memoizedState = Ft = t : Ft = Ft.next = t
        }
        return Ft
    }
    function jr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function oi(t) {
        var e = si;
        return si += 1,
        hl === null && (hl = []),
        t = Pf(hl, t, e),
        e = ut,
        (Ft === null ? e.memoizedState : Ft.next) === null && (e = e.alternate,
        U.H = e === null || e.memoizedState === null ? Vd : Po),
        t
    }
    function wr(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return oi(t);
            if (t.$$typeof === Q)
                return re(t)
        }
        throw Error(o(438, String(t)))
    }
    function Go(t) {
        var e = null
          , n = ut.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var l = ut.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = jr(),
        ut.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            l = 0; l < t; l++)
                n[l] = rt;
        return e.index++,
        n
    }
    function hn(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function Mr(t) {
        var e = Qt();
        return Yo(e, wt, t)
    }
    function Yo(t, e, n) {
        var l = t.queue;
        if (l === null)
            throw Error(o(311));
        l.lastRenderedReducer = n;
        var s = t.baseQueue
          , u = l.pending;
        if (u !== null) {
            if (s !== null) {
                var d = s.next;
                s.next = u.next,
                u.next = d
            }
            e.baseQueue = s = u,
            l.pending = null
        }
        if (u = t.baseState,
        s === null)
            t.memoizedState = u;
        else {
            e = s.next;
            var v = d = null
              , A = null
              , B = e
              , H = !1;
            do {
                var V = B.lane & -536870913;
                if (V !== B.lane ? (pt & V) === V : (dn & V) === V) {
                    var L = B.revertLane;
                    if (L === 0)
                        A !== null && (A = A.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: B.action,
                            hasEagerState: B.hasEagerState,
                            eagerState: B.eagerState,
                            next: null
                        }),
                        V === sl && (H = !0);
                    else if ((dn & L) === L) {
                        B = B.next,
                        L === sl && (H = !0);
                        continue
                    } else
                        V = {
                            lane: 0,
                            revertLane: B.revertLane,
                            gesture: null,
                            action: B.action,
                            hasEagerState: B.hasEagerState,
                            eagerState: B.eagerState,
                            next: null
                        },
                        A === null ? (v = A = V,
                        d = u) : A = A.next = V,
                        ut.lanes |= L,
                        Xn |= L;
                    V = B.action,
                    Ra && n(u, V),
                    u = B.hasEagerState ? B.eagerState : n(u, V)
                } else
                    L = {
                        lane: V,
                        revertLane: B.revertLane,
                        gesture: B.gesture,
                        action: B.action,
                        hasEagerState: B.hasEagerState,
                        eagerState: B.eagerState,
                        next: null
                    },
                    A === null ? (v = A = L,
                    d = u) : A = A.next = L,
                    ut.lanes |= V,
                    Xn |= V;
                B = B.next
            } while (B !== null && B !== e);
            if (A === null ? d = u : A.next = v,
            !Ce(u, t.memoizedState) && (Jt = !0,
            H && (n = ol,
            n !== null)))
                throw n;
            t.memoizedState = u,
            t.baseState = d,
            t.baseQueue = A,
            l.lastRenderedState = u
        }
        return s === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function Vo(t) {
        var e = Qt()
          , n = e.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = t;
        var l = n.dispatch
          , s = n.pending
          , u = e.memoizedState;
        if (s !== null) {
            n.pending = null;
            var d = s = s.next;
            do
                u = t(u, d.action),
                d = d.next;
            while (d !== s);
            Ce(u, e.memoizedState) || (Jt = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            n.lastRenderedState = u
        }
        return [u, l]
    }
    function od(t, e, n) {
        var l = ut
          , s = Qt()
          , u = vt;
        if (u) {
            if (n === void 0)
                throw Error(o(407));
            n = n()
        } else
            n = e();
        var d = !Ce((wt || s).memoizedState, n);
        if (d && (s.memoizedState = n,
        Jt = !0),
        s = s.queue,
        Qo(fd.bind(null, l, s, t), [t]),
        s.getSnapshot !== e || d || Ft !== null && Ft.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            ml(9, {
                destroy: void 0
            }, cd.bind(null, l, s, n, e), null),
            Dt === null)
                throw Error(o(349));
            u || (dn & 127) !== 0 || ud(l, e, n)
        }
        return n
    }
    function ud(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = ut.updateQueue,
        e === null ? (e = jr(),
        ut.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function cd(t, e, n, l) {
        e.value = n,
        e.getSnapshot = l,
        dd(e) && hd(t)
    }
    function fd(t, e, n) {
        return n(function() {
            dd(e) && hd(t)
        })
    }
    function dd(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !Ce(t, n)
        } catch {
            return !0
        }
    }
    function hd(t) {
        var e = va(t, 2);
        e !== null && be(e, t, 2)
    }
    function ko(t) {
        var e = he();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            Ra) {
                Mn(!0);
                try {
                    n()
                } finally {
                    Mn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hn,
            lastRenderedState: t
        },
        e
    }
    function md(t, e, n, l) {
        return t.baseState = n,
        Yo(t, wt, typeof l == "function" ? l : hn)
    }
    function oy(t, e, n, l, s) {
        if (Dr(t))
            throw Error(o(485));
        if (t = e.action,
        t !== null) {
            var u = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(d) {
                    u.listeners.push(d)
                }
            };
            U.T !== null ? n(!0) : u.isTransition = !1,
            l(u),
            n = e.pending,
            n === null ? (u.next = e.pending = u,
            pd(e, u)) : (u.next = n.next,
            e.pending = n.next = u)
        }
    }
    function pd(t, e) {
        var n = e.action
          , l = e.payload
          , s = t.state;
        if (e.isTransition) {
            var u = U.T
              , d = {};
            U.T = d;
            try {
                var v = n(s, l)
                  , A = U.S;
                A !== null && A(d, v),
                gd(t, e, v)
            } catch (B) {
                Xo(t, e, B)
            } finally {
                u !== null && d.types !== null && (u.types = d.types),
                U.T = u
            }
        } else
            try {
                u = n(s, l),
                gd(t, e, u)
            } catch (B) {
                Xo(t, e, B)
            }
    }
    function gd(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            yd(t, e, l)
        }, function(l) {
            return Xo(t, e, l)
        }) : yd(t, e, n)
    }
    function yd(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        vd(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        pd(t, n)))
    }
    function Xo(t, e, n) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = n,
                vd(e),
                e = e.next;
            while (e !== l)
        }
        t.action = null
    }
    function vd(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Sd(t, e) {
        return e
    }
    function bd(t, e) {
        if (vt) {
            var n = Dt.formState;
            if (n !== null) {
                t: {
                    var l = ut;
                    if (vt) {
                        if (Nt) {
                            e: {
                                for (var s = Nt, u = qe; s.nodeType !== 8; ) {
                                    if (!u) {
                                        s = null;
                                        break e
                                    }
                                    if (s = Ye(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                u = s.data,
                                s = u === "F!" || u === "F" ? s : null
                            }
                            if (s) {
                                Nt = Ye(s.nextSibling),
                                l = s.data === "F!";
                                break t
                            }
                        }
                        Ln(l)
                    }
                    l = !1
                }
                l && (e = n[0])
            }
        }
        return n = he(),
        n.memoizedState = n.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Sd,
            lastRenderedState: e
        },
        n.queue = l,
        n = qd.bind(null, ut, l),
        l.dispatch = n,
        l = ko(!1),
        u = Wo.bind(null, ut, !1, l.queue),
        l = he(),
        s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = s,
        n = oy.bind(null, ut, s, u, n),
        s.dispatch = n,
        l.memoizedState = t,
        [e, n, !1]
    }
    function xd(t) {
        var e = Qt();
        return Ed(e, wt, t)
    }
    function Ed(t, e, n) {
        if (e = Yo(t, e, Sd)[0],
        t = Mr(hn)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var l = oi(e)
            } catch (d) {
                throw d === ul ? br : d
            }
        else
            l = e;
        e = Qt();
        var s = e.queue
          , u = s.dispatch;
        return n !== e.memoizedState && (ut.flags |= 2048,
        ml(9, {
            destroy: void 0
        }, uy.bind(null, s, n), null)),
        [l, u, t]
    }
    function uy(t, e) {
        t.action = e
    }
    function _d(t) {
        var e = Qt()
          , n = wt;
        if (n !== null)
            return Ed(e, n, t);
        Qt(),
        e = e.memoizedState,
        n = Qt();
        var l = n.queue.dispatch;
        return n.memoizedState = t,
        [e, l, !1]
    }
    function ml(t, e, n, l) {
        return t = {
            tag: t,
            create: n,
            deps: l,
            inst: e,
            next: null
        },
        e = ut.updateQueue,
        e === null && (e = jr(),
        ut.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (l = n.next,
        n.next = t,
        t.next = l,
        e.lastEffect = t),
        t
    }
    function Ad() {
        return Qt().memoizedState
    }
    function zr(t, e, n, l) {
        var s = he();
        ut.flags |= t,
        s.memoizedState = ml(1 | e, {
            destroy: void 0
        }, n, l === void 0 ? null : l)
    }
    function Or(t, e, n, l) {
        var s = Qt();
        l = l === void 0 ? null : l;
        var u = s.memoizedState.inst;
        wt !== null && l !== null && Lo(l, wt.memoizedState.deps) ? s.memoizedState = ml(e, u, n, l) : (ut.flags |= t,
        s.memoizedState = ml(1 | e, u, n, l))
    }
    function Td(t, e) {
        zr(8390656, 8, t, e)
    }
    function Qo(t, e) {
        Or(2048, 8, t, e)
    }
    function cy(t) {
        ut.flags |= 4;
        var e = ut.updateQueue;
        if (e === null)
            e = jr(),
            ut.updateQueue = e,
            e.events = [t];
        else {
            var n = e.events;
            n === null ? e.events = [t] : n.push(t)
        }
    }
    function Cd(t) {
        var e = Qt().memoizedState;
        return cy({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((At & 2) !== 0)
                throw Error(o(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Rd(t, e) {
        return Or(4, 2, t, e)
    }
    function jd(t, e) {
        return Or(4, 4, t, e)
    }
    function wd(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Md(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        Or(4, 4, wd.bind(null, e, t), n)
    }
    function Zo() {}
    function zd(t, e) {
        var n = Qt();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        return e !== null && Lo(e, l[1]) ? l[0] : (n.memoizedState = [t, e],
        t)
    }
    function Od(t, e) {
        var n = Qt();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        if (e !== null && Lo(e, l[1]))
            return l[0];
        if (l = t(),
        Ra) {
            Mn(!0);
            try {
                t()
            } finally {
                Mn(!1)
            }
        }
        return n.memoizedState = [l, e],
        l
    }
    function Ko(t, e, n) {
        return n === void 0 || (dn & 1073741824) !== 0 && (pt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Dh(),
        ut.lanes |= t,
        Xn |= t,
        n)
    }
    function Dd(t, e, n, l) {
        return Ce(n, e) ? n : fl.current !== null ? (t = Ko(t, n, l),
        Ce(t, e) || (Jt = !0),
        t) : (dn & 42) === 0 || (dn & 1073741824) !== 0 && (pt & 261930) === 0 ? (Jt = !0,
        t.memoizedState = n) : (t = Dh(),
        ut.lanes |= t,
        Xn |= t,
        e)
    }
    function Bd(t, e, n, l, s) {
        var u = Z.p;
        Z.p = u !== 0 && 8 > u ? u : 8;
        var d = U.T
          , v = {};
        U.T = v,
        Wo(t, !1, e, n);
        try {
            var A = s()
              , B = U.S;
            if (B !== null && B(v, A),
            A !== null && typeof A == "object" && typeof A.then == "function") {
                var H = iy(A, l);
                ui(t, e, H, Oe(t))
            } else
                ui(t, e, l, Oe(t))
        } catch (V) {
            ui(t, e, {
                then: function() {},
                status: "rejected",
                reason: V
            }, Oe())
        } finally {
            Z.p = u,
            d !== null && v.types !== null && (d.types = v.types),
            U.T = d
        }
    }
    function fy() {}
    function Fo(t, e, n, l) {
        if (t.tag !== 5)
            throw Error(o(476));
        var s = Ld(t).queue;
        Bd(t, s, e, it, n === null ? fy : function() {
            return Nd(t),
            n(l)
        }
        )
    }
    function Ld(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: it,
            baseState: it,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: it
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Nd(t) {
        var e = Ld(t);
        e.next === null && (e = t.alternate.memoizedState),
        ui(t, e.next.queue, {}, Oe())
    }
    function Jo() {
        return re(Ci)
    }
    function Ud() {
        return Qt().memoizedState
    }
    function Hd() {
        return Qt().memoizedState
    }
    function dy(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = Oe();
                t = Hn(n);
                var l = qn(e, t, n);
                l !== null && (be(l, e, n),
                li(l, e, n)),
                e = {
                    cache: Ao()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function hy(t, e, n) {
        var l = Oe();
        n = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Dr(t) ? Gd(e, n) : (n = ho(t, e, n, l),
        n !== null && (be(n, t, l),
        Yd(n, e, l)))
    }
    function qd(t, e, n) {
        var l = Oe();
        ui(t, e, n, l)
    }
    function ui(t, e, n, l) {
        var s = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Dr(t))
            Gd(e, s);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var d = e.lastRenderedState
                      , v = u(d, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = v,
                    Ce(v, d))
                        return hr(t, e, s, 0),
                        Dt === null && dr(),
                        !1
                } catch {}
            if (n = ho(t, e, s, l),
            n !== null)
                return be(n, t, l),
                Yd(n, e, l),
                !0
        }
        return !1
    }
    function Wo(t, e, n, l) {
        if (l = {
            lane: 2,
            revertLane: ju(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Dr(t)) {
            if (e)
                throw Error(o(479))
        } else
            e = ho(t, n, l, 2),
            e !== null && be(e, t, 2)
    }
    function Dr(t) {
        var e = t.alternate;
        return t === ut || e !== null && e === ut
    }
    function Gd(t, e) {
        dl = Cr = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function Yd(t, e, n) {
        if ((n & 4194048) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            Qc(t, n)
        }
    }
    var ci = {
        readContext: re,
        use: wr,
        useCallback: Yt,
        useContext: Yt,
        useEffect: Yt,
        useImperativeHandle: Yt,
        useLayoutEffect: Yt,
        useInsertionEffect: Yt,
        useMemo: Yt,
        useReducer: Yt,
        useRef: Yt,
        useState: Yt,
        useDebugValue: Yt,
        useDeferredValue: Yt,
        useTransition: Yt,
        useSyncExternalStore: Yt,
        useId: Yt,
        useHostTransitionStatus: Yt,
        useFormState: Yt,
        useActionState: Yt,
        useOptimistic: Yt,
        useMemoCache: Yt,
        useCacheRefresh: Yt
    };
    ci.useEffectEvent = Yt;
    var Vd = {
        readContext: re,
        use: wr,
        useCallback: function(t, e) {
            return he().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: re,
        useEffect: Td,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            zr(4194308, 4, wd.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return zr(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            zr(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = he();
            e = e === void 0 ? null : e;
            var l = t();
            if (Ra) {
                Mn(!0);
                try {
                    t()
                } finally {
                    Mn(!1)
                }
            }
            return n.memoizedState = [l, e],
            l
        },
        useReducer: function(t, e, n) {
            var l = he();
            if (n !== void 0) {
                var s = n(e);
                if (Ra) {
                    Mn(!0);
                    try {
                        n(e)
                    } finally {
                        Mn(!1)
                    }
                }
            } else
                s = e;
            return l.memoizedState = l.baseState = s,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: s
            },
            l.queue = t,
            t = t.dispatch = hy.bind(null, ut, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var e = he();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = ko(t);
            var e = t.queue
              , n = qd.bind(null, ut, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: Zo,
        useDeferredValue: function(t, e) {
            var n = he();
            return Ko(n, t, e)
        },
        useTransition: function() {
            var t = ko(!1);
            return t = Bd.bind(null, ut, t.queue, !0, !1),
            he().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var l = ut
              , s = he();
            if (vt) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = e(),
                Dt === null)
                    throw Error(o(349));
                (pt & 127) !== 0 || ud(l, e, n)
            }
            s.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: e
            };
            return s.queue = u,
            Td(fd.bind(null, l, u, t), [t]),
            l.flags |= 2048,
            ml(9, {
                destroy: void 0
            }, cd.bind(null, l, u, n, e), null),
            n
        },
        useId: function() {
            var t = he()
              , e = Dt.identifierPrefix;
            if (vt) {
                var n = We
                  , l = Je;
                n = (l & ~(1 << 32 - Te(l) - 1)).toString(32) + n,
                e = "_" + e + "R_" + n,
                n = Rr++,
                0 < n && (e += "H" + n.toString(32)),
                e += "_"
            } else
                n = ry++,
                e = "_" + e + "r_" + n.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Jo,
        useFormState: bd,
        useActionState: bd,
        useOptimistic: function(t) {
            var e = he();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = Wo.bind(null, ut, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: Go,
        useCacheRefresh: function() {
            return he().memoizedState = dy.bind(null, ut)
        },
        useEffectEvent: function(t) {
            var e = he()
              , n = {
                impl: t
            };
            return e.memoizedState = n,
            function() {
                if ((At & 2) !== 0)
                    throw Error(o(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , Po = {
        readContext: re,
        use: wr,
        useCallback: zd,
        useContext: re,
        useEffect: Qo,
        useImperativeHandle: Md,
        useInsertionEffect: Rd,
        useLayoutEffect: jd,
        useMemo: Od,
        useReducer: Mr,
        useRef: Ad,
        useState: function() {
            return Mr(hn)
        },
        useDebugValue: Zo,
        useDeferredValue: function(t, e) {
            var n = Qt();
            return Dd(n, wt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Mr(hn)[0]
              , e = Qt().memoizedState;
            return [typeof t == "boolean" ? t : oi(t), e]
        },
        useSyncExternalStore: od,
        useId: Ud,
        useHostTransitionStatus: Jo,
        useFormState: xd,
        useActionState: xd,
        useOptimistic: function(t, e) {
            var n = Qt();
            return md(n, wt, t, e)
        },
        useMemoCache: Go,
        useCacheRefresh: Hd
    };
    Po.useEffectEvent = Cd;
    var kd = {
        readContext: re,
        use: wr,
        useCallback: zd,
        useContext: re,
        useEffect: Qo,
        useImperativeHandle: Md,
        useInsertionEffect: Rd,
        useLayoutEffect: jd,
        useMemo: Od,
        useReducer: Vo,
        useRef: Ad,
        useState: function() {
            return Vo(hn)
        },
        useDebugValue: Zo,
        useDeferredValue: function(t, e) {
            var n = Qt();
            return wt === null ? Ko(n, t, e) : Dd(n, wt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Vo(hn)[0]
              , e = Qt().memoizedState;
            return [typeof t == "boolean" ? t : oi(t), e]
        },
        useSyncExternalStore: od,
        useId: Ud,
        useHostTransitionStatus: Jo,
        useFormState: _d,
        useActionState: _d,
        useOptimistic: function(t, e) {
            var n = Qt();
            return wt !== null ? md(n, wt, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: Go,
        useCacheRefresh: Hd
    };
    kd.useEffectEvent = Cd;
    function Io(t, e, n, l) {
        e = t.memoizedState,
        n = n(l, e),
        n = n == null ? e : S({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var $o = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var l = Oe()
              , s = Hn(l);
            s.payload = e,
            n != null && (s.callback = n),
            e = qn(t, s, l),
            e !== null && (be(e, t, l),
            li(e, t, l))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var l = Oe()
              , s = Hn(l);
            s.tag = 1,
            s.payload = e,
            n != null && (s.callback = n),
            e = qn(t, s, l),
            e !== null && (be(e, t, l),
            li(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = Oe()
              , l = Hn(n);
            l.tag = 2,
            e != null && (l.callback = e),
            e = qn(t, l, n),
            e !== null && (be(e, t, n),
            li(e, t, n))
        }
    };
    function Xd(t, e, n, l, s, u, d) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, d) : e.prototype && e.prototype.isPureReactComponent ? !Wl(n, l) || !Wl(s, u) : !0
    }
    function Qd(t, e, n, l) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l),
        e.state !== t && $o.enqueueReplaceState(e, e.state, null)
    }
    function ja(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var l in e)
                l !== "ref" && (n[l] = e[l])
        }
        if (t = t.defaultProps) {
            n === e && (n = S({}, n));
            for (var s in t)
                n[s] === void 0 && (n[s] = t[s])
        }
        return n
    }
    function Zd(t) {
        fr(t)
    }
    function Kd(t) {
        console.error(t)
    }
    function Fd(t) {
        fr(t)
    }
    function Br(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function Jd(t, e, n) {
        try {
            var l = t.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function tu(t, e, n) {
        return n = Hn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            Br(t, e)
        }
        ,
        n
    }
    function Wd(t) {
        return t = Hn(t),
        t.tag = 3,
        t
    }
    function Pd(t, e, n, l) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var u = l.value;
            t.payload = function() {
                return s(u)
            }
            ,
            t.callback = function() {
                Jd(e, n, l)
            }
        }
        var d = n.stateNode;
        d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
            Jd(e, n, l),
            typeof s != "function" && (Qn === null ? Qn = new Set([this]) : Qn.add(this));
            var v = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function my(t, e, n, l, s) {
        if (n.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = n.alternate,
            e !== null && rl(e, n, s, !0),
            n = je.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return Ge === null ? Zr() : n.alternate === null && Vt === 0 && (Vt = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = s,
                    l === xr ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([l]) : e.add(l),
                    Tu(t, l, s)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    l === xr ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([l]) : n.add(l)),
                    Tu(t, l, s)),
                    !1
                }
                throw Error(o(435, n.tag))
            }
            return Tu(t, l, s),
            Zr(),
            !1
        }
        if (vt)
            return e = je.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            l !== So && (t = Error(o(422), {
                cause: l
            }),
            $l(Ne(t, n)))) : (l !== So && (e = Error(o(423), {
                cause: l
            }),
            $l(Ne(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            s &= -s,
            t.lanes |= s,
            l = Ne(l, n),
            s = tu(t.stateNode, l, s),
            Mo(t, s),
            Vt !== 4 && (Vt = 2)),
            !1;
        var u = Error(o(520), {
            cause: l
        });
        if (u = Ne(u, n),
        vi === null ? vi = [u] : vi.push(u),
        Vt !== 4 && (Vt = 2),
        e === null)
            return !0;
        l = Ne(l, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = s & -s,
                n.lanes |= t,
                t = tu(n.stateNode, l, t),
                Mo(n, t),
                !1;
            case 1:
                if (e = n.type,
                u = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Qn === null || !Qn.has(u))))
                    return n.flags |= 65536,
                    s &= -s,
                    n.lanes |= s,
                    s = Wd(s),
                    Pd(s, t, n, l),
                    Mo(n, s),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var eu = Error(o(461))
      , Jt = !1;
    function se(t, e, n, l) {
        e.child = t === null ? ed(e, null, n, l) : Ca(e, t.child, n, l)
    }
    function Id(t, e, n, l, s) {
        n = n.render;
        var u = e.ref;
        if ("ref"in l) {
            var d = {};
            for (var v in l)
                v !== "ref" && (d[v] = l[v])
        } else
            d = l;
        return Ea(e),
        l = No(t, e, n, d, u, s),
        v = Uo(),
        t !== null && !Jt ? (Ho(t, e, s),
        mn(t, e, s)) : (vt && v && yo(e),
        e.flags |= 1,
        se(t, e, l, s),
        e.child)
    }
    function $d(t, e, n, l, s) {
        if (t === null) {
            var u = n.type;
            return typeof u == "function" && !mo(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = u,
            th(t, e, u, l, s)) : (t = pr(n.type, null, l, e, e.mode, s),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (u = t.child,
        !uu(t, s)) {
            var d = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : Wl,
            n(d, l) && t.ref === e.ref)
                return mn(t, e, s)
        }
        return e.flags |= 1,
        t = on(u, l),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function th(t, e, n, l, s) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Wl(u, l) && t.ref === e.ref)
                if (Jt = !1,
                e.pendingProps = l = u,
                uu(t, s))
                    (t.flags & 131072) !== 0 && (Jt = !0);
                else
                    return e.lanes = t.lanes,
                    mn(t, e, s)
        }
        return nu(t, e, n, l, s)
    }
    function eh(t, e, n, l) {
        var s = l.children
          , u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | n : n,
                t !== null) {
                    for (l = e.child = t.child,
                    s = 0; l !== null; )
                        s = s | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = s & ~u
                } else
                    l = 0,
                    e.child = null;
                return nh(t, e, u, n, l)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Sr(e, u !== null ? u.cachePool : null),
                u !== null ? ld(e, u) : Oo(),
                id(e);
            else
                return l = e.lanes = 536870912,
                nh(t, e, u !== null ? u.baseLanes | n : n, n, l)
        } else
            u !== null ? (Sr(e, u.cachePool),
            ld(e, u),
            Yn(),
            e.memoizedState = null) : (t !== null && Sr(e, null),
            Oo(),
            Yn());
        return se(t, e, s, n),
        e.child
    }
    function fi(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function nh(t, e, n, l, s) {
        var u = Co();
        return u = u === null ? null : {
            parent: Kt._currentValue,
            pool: u
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: u
        },
        t !== null && Sr(e, null),
        Oo(),
        id(e),
        t !== null && rl(t, e, l, !0),
        e.childLanes = s,
        null
    }
    function Lr(t, e) {
        return e = Ur({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function ah(t, e, n) {
        return Ca(e, t.child, null, n),
        t = Lr(e, e.pendingProps),
        t.flags |= 2,
        we(e),
        e.memoizedState = null,
        t
    }
    function py(t, e, n) {
        var l = e.pendingProps
          , s = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (vt) {
                if (l.mode === "hidden")
                    return t = Lr(e, l),
                    e.lanes = 536870912,
                    fi(null, t);
                if (Bo(e),
                (t = Nt) ? (t = pm(t, qe),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Dn !== null ? {
                        id: Je,
                        overflow: We
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Gf(t),
                n.return = e,
                e.child = n,
                ie = e,
                Nt = null)) : t = null,
                t === null)
                    throw Ln(e);
                return e.lanes = 536870912,
                null
            }
            return Lr(e, l)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var d = u.dehydrated;
            if (Bo(e),
            s)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = ah(t, e, n);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(o(558));
            else if (Jt || rl(t, e, n, !1),
            s = (n & t.childLanes) !== 0,
            Jt || s) {
                if (l = Dt,
                l !== null && (d = Zc(l, n),
                d !== 0 && d !== u.retryLane))
                    throw u.retryLane = d,
                    va(t, d),
                    be(l, t, d),
                    eu;
                Zr(),
                e = ah(t, e, n)
            } else
                t = u.treeContext,
                Nt = Ye(d.nextSibling),
                ie = e,
                vt = !0,
                Bn = null,
                qe = !1,
                t !== null && kf(e, t),
                e = Lr(e, l),
                e.flags |= 4096;
            return e
        }
        return t = on(t.child, {
            mode: l.mode,
            children: l.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Nr(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(o(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function nu(t, e, n, l, s) {
        return Ea(e),
        n = No(t, e, n, l, void 0, s),
        l = Uo(),
        t !== null && !Jt ? (Ho(t, e, s),
        mn(t, e, s)) : (vt && l && yo(e),
        e.flags |= 1,
        se(t, e, n, s),
        e.child)
    }
    function lh(t, e, n, l, s, u) {
        return Ea(e),
        e.updateQueue = null,
        n = sd(e, l, n, s),
        rd(t),
        l = Uo(),
        t !== null && !Jt ? (Ho(t, e, u),
        mn(t, e, u)) : (vt && l && yo(e),
        e.flags |= 1,
        se(t, e, n, u),
        e.child)
    }
    function ih(t, e, n, l, s) {
        if (Ea(e),
        e.stateNode === null) {
            var u = nl
              , d = n.contextType;
            typeof d == "object" && d !== null && (u = re(d)),
            u = new n(l,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = $o,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = l,
            u.state = e.memoizedState,
            u.refs = {},
            jo(e),
            d = n.contextType,
            u.context = typeof d == "object" && d !== null ? re(d) : nl,
            u.state = e.memoizedState,
            d = n.getDerivedStateFromProps,
            typeof d == "function" && (Io(e, n, d, l),
            u.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            d !== u.state && $o.enqueueReplaceState(u, u.state, null),
            ri(e, l, u, s),
            ii(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (t === null) {
            u = e.stateNode;
            var v = e.memoizedProps
              , A = ja(n, v);
            u.props = A;
            var B = u.context
              , H = n.contextType;
            d = nl,
            typeof H == "object" && H !== null && (d = re(H));
            var V = n.getDerivedStateFromProps;
            H = typeof V == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            H || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || B !== d) && Qd(e, u, l, d),
            Un = !1;
            var L = e.memoizedState;
            u.state = L,
            ri(e, l, u, s),
            ii(),
            B = e.memoizedState,
            v || L !== B || Un ? (typeof V == "function" && (Io(e, n, V, l),
            B = e.memoizedState),
            (A = Un || Xd(e, n, A, l, L, B, d)) ? (H || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = B),
            u.props = l,
            u.state = B,
            u.context = d,
            l = A) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            u = e.stateNode,
            wo(t, e),
            d = e.memoizedProps,
            H = ja(n, d),
            u.props = H,
            V = e.pendingProps,
            L = u.context,
            B = n.contextType,
            A = nl,
            typeof B == "object" && B !== null && (A = re(B)),
            v = n.getDerivedStateFromProps,
            (B = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== V || L !== A) && Qd(e, u, l, A),
            Un = !1,
            L = e.memoizedState,
            u.state = L,
            ri(e, l, u, s),
            ii();
            var N = e.memoizedState;
            d !== V || L !== N || Un || t !== null && t.dependencies !== null && yr(t.dependencies) ? (typeof v == "function" && (Io(e, n, v, l),
            N = e.memoizedState),
            (H = Un || Xd(e, n, H, l, L, N, A) || t !== null && t.dependencies !== null && yr(t.dependencies)) ? (B || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, N, A),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, N, A)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = N),
            u.props = l,
            u.state = N,
            u.context = A,
            l = H) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return u = l,
        Nr(t, e),
        l = (e.flags & 128) !== 0,
        u || l ? (u = e.stateNode,
        n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        t !== null && l ? (e.child = Ca(e, t.child, null, s),
        e.child = Ca(e, null, n, s)) : se(t, e, n, s),
        e.memoizedState = u.state,
        t = e.child) : t = mn(t, e, s),
        t
    }
    function rh(t, e, n, l) {
        return ba(),
        e.flags |= 256,
        se(t, e, n, l),
        e.child
    }
    var au = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function lu(t) {
        return {
            baseLanes: t,
            cachePool: Jf()
        }
    }
    function iu(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= ze),
        t
    }
    function sh(t, e, n) {
        var l = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, d;
        if ((d = u) || (d = t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
        d && (s = !0,
        e.flags &= -129),
        d = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (vt) {
                if (s ? Gn(e) : Yn(),
                (t = Nt) ? (t = pm(t, qe),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Dn !== null ? {
                        id: Je,
                        overflow: We
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Gf(t),
                n.return = e,
                e.child = n,
                ie = e,
                Nt = null)) : t = null,
                t === null)
                    throw Ln(e);
                return Yu(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var v = l.children;
            return l = l.fallback,
            s ? (Yn(),
            s = e.mode,
            v = Ur({
                mode: "hidden",
                children: v
            }, s),
            l = Sa(l, s, n, null),
            v.return = e,
            l.return = e,
            v.sibling = l,
            e.child = v,
            l = e.child,
            l.memoizedState = lu(n),
            l.childLanes = iu(t, d, n),
            e.memoizedState = au,
            fi(null, l)) : (Gn(e),
            ru(e, v))
        }
        var A = t.memoizedState;
        if (A !== null && (v = A.dehydrated,
        v !== null)) {
            if (u)
                e.flags & 256 ? (Gn(e),
                e.flags &= -257,
                e = su(t, e, n)) : e.memoizedState !== null ? (Yn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (Yn(),
                v = l.fallback,
                s = e.mode,
                l = Ur({
                    mode: "visible",
                    children: l.children
                }, s),
                v = Sa(v, s, n, null),
                v.flags |= 2,
                l.return = e,
                v.return = e,
                l.sibling = v,
                e.child = l,
                Ca(e, t.child, null, n),
                l = e.child,
                l.memoizedState = lu(n),
                l.childLanes = iu(t, d, n),
                e.memoizedState = au,
                e = fi(null, l));
            else if (Gn(e),
            Yu(v)) {
                if (d = v.nextSibling && v.nextSibling.dataset,
                d)
                    var B = d.dgst;
                d = B,
                l = Error(o(419)),
                l.stack = "",
                l.digest = d,
                $l({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = su(t, e, n)
            } else if (Jt || rl(t, e, n, !1),
            d = (n & t.childLanes) !== 0,
            Jt || d) {
                if (d = Dt,
                d !== null && (l = Zc(d, n),
                l !== 0 && l !== A.retryLane))
                    throw A.retryLane = l,
                    va(t, l),
                    be(d, t, l),
                    eu;
                Gu(v) || Zr(),
                e = su(t, e, n)
            } else
                Gu(v) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = A.treeContext,
                Nt = Ye(v.nextSibling),
                ie = e,
                vt = !0,
                Bn = null,
                qe = !1,
                t !== null && kf(e, t),
                e = ru(e, l.children),
                e.flags |= 4096);
            return e
        }
        return s ? (Yn(),
        v = l.fallback,
        s = e.mode,
        A = t.child,
        B = A.sibling,
        l = on(A, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = A.subtreeFlags & 65011712,
        B !== null ? v = on(B, v) : (v = Sa(v, s, n, null),
        v.flags |= 2),
        v.return = e,
        l.return = e,
        l.sibling = v,
        e.child = l,
        fi(null, l),
        l = e.child,
        v = t.child.memoizedState,
        v === null ? v = lu(n) : (s = v.cachePool,
        s !== null ? (A = Kt._currentValue,
        s = s.parent !== A ? {
            parent: A,
            pool: A
        } : s) : s = Jf(),
        v = {
            baseLanes: v.baseLanes | n,
            cachePool: s
        }),
        l.memoizedState = v,
        l.childLanes = iu(t, d, n),
        e.memoizedState = au,
        fi(t.child, l)) : (Gn(e),
        n = t.child,
        t = n.sibling,
        n = on(n, {
            mode: "visible",
            children: l.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (d = e.deletions,
        d === null ? (e.deletions = [t],
        e.flags |= 16) : d.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function ru(t, e) {
        return e = Ur({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function Ur(t, e) {
        return t = Re(22, t, null, e),
        t.lanes = 0,
        t
    }
    function su(t, e, n) {
        return Ca(e, t.child, null, n),
        t = ru(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function oh(t, e, n) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e),
        Eo(t.return, e, n)
    }
    function ou(t, e, n, l, s, u) {
        var d = t.memoizedState;
        d === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: s,
            treeForkCount: u
        } : (d.isBackwards = e,
        d.rendering = null,
        d.renderingStartTime = 0,
        d.last = l,
        d.tail = n,
        d.tailMode = s,
        d.treeForkCount = u)
    }
    function uh(t, e, n) {
        var l = e.pendingProps
          , s = l.revealOrder
          , u = l.tail;
        l = l.children;
        var d = Xt.current
          , v = (d & 2) !== 0;
        if (v ? (d = d & 1 | 2,
        e.flags |= 128) : d &= 1,
        F(Xt, d),
        se(t, e, l, n),
        l = vt ? Il : 0,
        !v && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && oh(t, n, e);
                else if (t.tag === 19)
                    oh(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (s) {
        case "forwards":
            for (n = e.child,
            s = null; n !== null; )
                t = n.alternate,
                t !== null && Tr(t) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = e.child,
            e.child = null) : (s = n.sibling,
            n.sibling = null),
            ou(e, !1, s, n, u, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && Tr(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = n,
                n = s,
                s = t
            }
            ou(e, !0, n, null, u, l);
            break;
        case "together":
            ou(e, !1, null, null, void 0, l);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function mn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        Xn |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (rl(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child,
            n = on(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = on(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function uu(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && yr(t)))
    }
    function gy(t, e, n) {
        switch (e.tag) {
        case 3:
            kt(e, e.stateNode.containerInfo),
            Nn(e, Kt, t.memoizedState.cache),
            ba();
            break;
        case 27:
        case 5:
            en(e);
            break;
        case 4:
            kt(e, e.stateNode.containerInfo);
            break;
        case 10:
            Nn(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                Bo(e),
                null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Gn(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? sh(t, e, n) : (Gn(e),
                t = mn(t, e, n),
                t !== null ? t.sibling : null);
            Gn(e);
            break;
        case 19:
            var s = (t.flags & 128) !== 0;
            if (l = (n & e.childLanes) !== 0,
            l || (rl(t, e, n, !1),
            l = (n & e.childLanes) !== 0),
            s) {
                if (l)
                    return uh(t, e, n);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            F(Xt, Xt.current),
            l)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            eh(t, e, n, e.pendingProps);
        case 24:
            Nn(e, Kt, t.memoizedState.cache)
        }
        return mn(t, e, n)
    }
    function ch(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Jt = !0;
            else {
                if (!uu(t, n) && (e.flags & 128) === 0)
                    return Jt = !1,
                    gy(t, e, n);
                Jt = (t.flags & 131072) !== 0
            }
        else
            Jt = !1,
            vt && (e.flags & 1048576) !== 0 && Vf(e, Il, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var l = e.pendingProps;
                if (t = Aa(e.elementType),
                e.type = t,
                typeof t == "function")
                    mo(t) ? (l = ja(t, l),
                    e.tag = 1,
                    e = ih(null, e, t, l, n)) : (e.tag = 0,
                    e = nu(null, e, t, l, n));
                else {
                    if (t != null) {
                        var s = t.$$typeof;
                        if (s === q) {
                            e.tag = 11,
                            e = Id(null, e, t, l, n);
                            break t
                        } else if (s === X) {
                            e.tag = 14,
                            e = $d(null, e, t, l, n);
                            break t
                        }
                    }
                    throw e = Gt(t) || t,
                    Error(o(306, e, ""))
                }
            }
            return e;
        case 0:
            return nu(t, e, e.type, e.pendingProps, n);
        case 1:
            return l = e.type,
            s = ja(l, e.pendingProps),
            ih(t, e, l, s, n);
        case 3:
            t: {
                if (kt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                l = e.pendingProps;
                var u = e.memoizedState;
                s = u.element,
                wo(t, e),
                ri(e, l, null, n);
                var d = e.memoizedState;
                if (l = d.cache,
                Nn(e, Kt, l),
                l !== u.cache && _o(e, [Kt], n, !0),
                ii(),
                l = d.element,
                u.isDehydrated)
                    if (u = {
                        element: l,
                        isDehydrated: !1,
                        cache: d.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = rh(t, e, l, n);
                        break t
                    } else if (l !== s) {
                        s = Ne(Error(o(424)), e),
                        $l(s),
                        e = rh(t, e, l, n);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        Nt = Ye(t.firstChild),
                        ie = e,
                        vt = !0,
                        Bn = null,
                        qe = !0,
                        n = ed(e, null, l, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (ba(),
                    l === s) {
                        e = mn(t, e, n);
                        break t
                    }
                    se(t, e, l, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return Nr(t, e),
            t === null ? (n = xm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : vt || (n = e.type,
            t = e.pendingProps,
            l = $r(ft.current).createElement(n),
            l[le] = e,
            l[me] = t,
            oe(l, n, t),
            te(l),
            e.stateNode = l) : e.memoizedState = xm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return en(e),
            t === null && vt && (l = e.stateNode = vm(e.type, e.pendingProps, ft.current),
            ie = e,
            qe = !0,
            s = Nt,
            Jn(e.type) ? (Vu = s,
            Nt = Ye(l.firstChild)) : Nt = s),
            se(t, e, e.pendingProps.children, n),
            Nr(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && vt && ((s = l = Nt) && (l = Zy(l, e.type, e.pendingProps, qe),
            l !== null ? (e.stateNode = l,
            ie = e,
            Nt = Ye(l.firstChild),
            qe = !1,
            s = !0) : s = !1),
            s || Ln(e)),
            en(e),
            s = e.type,
            u = e.pendingProps,
            d = t !== null ? t.memoizedProps : null,
            l = u.children,
            Uu(s, u) ? l = null : d !== null && Uu(s, d) && (e.flags |= 32),
            e.memoizedState !== null && (s = No(t, e, sy, null, null, n),
            Ci._currentValue = s),
            Nr(t, e),
            se(t, e, l, n),
            e.child;
        case 6:
            return t === null && vt && ((t = n = Nt) && (n = Ky(n, e.pendingProps, qe),
            n !== null ? (e.stateNode = n,
            ie = e,
            Nt = null,
            t = !0) : t = !1),
            t || Ln(e)),
            null;
        case 13:
            return sh(t, e, n);
        case 4:
            return kt(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            t === null ? e.child = Ca(e, null, l, n) : se(t, e, l, n),
            e.child;
        case 11:
            return Id(t, e, e.type, e.pendingProps, n);
        case 7:
            return se(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return se(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return se(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return l = e.pendingProps,
            Nn(e, e.type, l.value),
            se(t, e, l.children, n),
            e.child;
        case 9:
            return s = e.type._context,
            l = e.pendingProps.children,
            Ea(e),
            s = re(s),
            l = l(s),
            e.flags |= 1,
            se(t, e, l, n),
            e.child;
        case 14:
            return $d(t, e, e.type, e.pendingProps, n);
        case 15:
            return th(t, e, e.type, e.pendingProps, n);
        case 19:
            return uh(t, e, n);
        case 31:
            return py(t, e, n);
        case 22:
            return eh(t, e, n, e.pendingProps);
        case 24:
            return Ea(e),
            l = re(Kt),
            t === null ? (s = Co(),
            s === null && (s = Dt,
            u = Ao(),
            s.pooledCache = u,
            u.refCount++,
            u !== null && (s.pooledCacheLanes |= n),
            s = u),
            e.memoizedState = {
                parent: l,
                cache: s
            },
            jo(e),
            Nn(e, Kt, s)) : ((t.lanes & n) !== 0 && (wo(t, e),
            ri(e, null, null, n),
            ii()),
            s = t.memoizedState,
            u = e.memoizedState,
            s.parent !== l ? (s = {
                parent: l,
                cache: l
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            Nn(e, Kt, l)) : (l = u.cache,
            Nn(e, Kt, l),
            l !== s.cache && _o(e, [Kt], n, !0))),
            se(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }
    function pn(t) {
        t.flags |= 4
    }
    function cu(t, e, n, l, s) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (s & 335544128) === s)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Uh())
                    t.flags |= 8192;
                else
                    throw Ta = xr,
                    Ro
        } else
            t.flags &= -16777217
    }
    function fh(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Cm(e))
            if (Uh())
                t.flags |= 8192;
            else
                throw Ta = xr,
                Ro
    }
    function Hr(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? kc() : 536870912,
        t.lanes |= e,
        vl |= e)
    }
    function di(t, e) {
        if (!vt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var l = null; n !== null; )
                    n.alternate !== null && (l = n),
                    n = n.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function Ut(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , l = 0;
        if (e)
            for (var s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags & 65011712,
                l |= s.flags & 65011712,
                s.return = t,
                s = s.sibling;
        else
            for (s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags,
                l |= s.flags,
                s.return = t,
                s = s.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = n,
        e
    }
    function yy(t, e, n) {
        var l = e.pendingProps;
        switch (vo(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ut(e),
            null;
        case 1:
            return Ut(e),
            null;
        case 3:
            return n = e.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            fn(Kt),
            Ot(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (il(e) ? pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            bo())),
            Ut(e),
            null;
        case 26:
            var s = e.type
              , u = e.memoizedState;
            return t === null ? (pn(e),
            u !== null ? (Ut(e),
            fh(e, u)) : (Ut(e),
            cu(e, s, null, l, n))) : u ? u !== t.memoizedState ? (pn(e),
            Ut(e),
            fh(e, u)) : (Ut(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== l && pn(e),
            Ut(e),
            cu(e, s, t, l, n)),
            null;
        case 27:
            if (nn(e),
            n = ft.current,
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && pn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Ut(e),
                    null
                }
                t = P.current,
                il(e) ? Xf(e) : (t = vm(s, l, n),
                e.stateNode = t,
                pn(e))
            }
            return Ut(e),
            null;
        case 5:
            if (nn(e),
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && pn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Ut(e),
                    null
                }
                if (u = P.current,
                il(e))
                    Xf(e);
                else {
                    var d = $r(ft.current);
                    switch (u) {
                    case 1:
                        u = d.createElementNS("http://www.w3.org/2000/svg", s);
                        break;
                    case 2:
                        u = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                        break;
                    default:
                        switch (s) {
                        case "svg":
                            u = d.createElementNS("http://www.w3.org/2000/svg", s);
                            break;
                        case "math":
                            u = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                            break;
                        case "script":
                            u = d.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof l.is == "string" ? d.createElement("select", {
                                is: l.is
                            }) : d.createElement("select"),
                            l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                            break;
                        default:
                            u = typeof l.is == "string" ? d.createElement(s, {
                                is: l.is
                            }) : d.createElement(s)
                        }
                    }
                    u[le] = e,
                    u[me] = l;
                    t: for (d = e.child; d !== null; ) {
                        if (d.tag === 5 || d.tag === 6)
                            u.appendChild(d.stateNode);
                        else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                            d.child.return = d,
                            d = d.child;
                            continue
                        }
                        if (d === e)
                            break t;
                        for (; d.sibling === null; ) {
                            if (d.return === null || d.return === e)
                                break t;
                            d = d.return
                        }
                        d.sibling.return = d.return,
                        d = d.sibling
                    }
                    e.stateNode = u;
                    t: switch (oe(u, s, l),
                    s) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break t;
                    case "img":
                        l = !0;
                        break t;
                    default:
                        l = !1
                    }
                    l && pn(e)
                }
            }
            return Ut(e),
            cu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && pn(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = ft.current,
                il(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    l = null,
                    s = ie,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            l = s.memoizedProps
                        }
                    t[le] = e,
                    t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || sm(t.nodeValue, n)),
                    t || Ln(e, !0)
                } else
                    t = $r(t).createTextNode(l),
                    t[le] = e,
                    e.stateNode = t
            }
            return Ut(e),
            null;
        case 31:
            if (n = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (l = il(e),
                n !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(o(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(o(557));
                        t[le] = e
                    } else
                        ba(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Ut(e),
                    t = !1
                } else
                    n = bo(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (we(e),
                    e) : (we(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return Ut(e),
            null;
        case 13:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (s = il(e),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(o(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(o(317));
                        s[le] = e
                    } else
                        ba(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Ut(e),
                    s = !1
                } else
                    s = bo(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (we(e),
                    e) : (we(e),
                    null)
            }
            return we(e),
            (e.flags & 128) !== 0 ? (e.lanes = n,
            e) : (n = l !== null,
            t = t !== null && t.memoizedState !== null,
            n && (l = e.child,
            s = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool),
            u = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool),
            u !== s && (l.flags |= 2048)),
            n !== t && n && (e.child.flags |= 8192),
            Hr(e, e.updateQueue),
            Ut(e),
            null);
        case 4:
            return Ot(),
            t === null && Ou(e.stateNode.containerInfo),
            Ut(e),
            null;
        case 10:
            return fn(e.type),
            Ut(e),
            null;
        case 19:
            if (Y(Xt),
            l = e.memoizedState,
            l === null)
                return Ut(e),
                null;
            if (s = (e.flags & 128) !== 0,
            u = l.rendering,
            u === null)
                if (s)
                    di(l, !1);
                else {
                    if (Vt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (u = Tr(t),
                            u !== null) {
                                for (e.flags |= 128,
                                di(l, !1),
                                t = u.updateQueue,
                                e.updateQueue = t,
                                Hr(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    qf(n, t),
                                    n = n.sibling;
                                return F(Xt, Xt.current & 1 | 2),
                                vt && un(e, l.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && fe() > kr && (e.flags |= 128,
                    s = !0,
                    di(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!s)
                    if (t = Tr(u),
                    t !== null) {
                        if (e.flags |= 128,
                        s = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        Hr(e, t),
                        di(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !u.alternate && !vt)
                            return Ut(e),
                            null
                    } else
                        2 * fe() - l.renderingStartTime > kr && n !== 536870912 && (e.flags |= 128,
                        s = !0,
                        di(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (u.sibling = e.child,
                e.child = u) : (t = l.last,
                t !== null ? t.sibling = u : e.child = u,
                l.last = u)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = fe(),
            t.sibling = null,
            n = Xt.current,
            F(Xt, s ? n & 1 | 2 : n & 1),
            vt && un(e, l.treeForkCount),
            t) : (Ut(e),
            null);
        case 22:
        case 23:
            return we(e),
            Do(),
            l = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ut(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Ut(e),
            n = e.updateQueue,
            n !== null && Hr(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== n && (e.flags |= 2048),
            t !== null && Y(_a),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            fn(Kt),
            Ut(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, e.tag))
    }
    function vy(t, e) {
        switch (vo(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return fn(Kt),
            Ot(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return nn(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (we(e),
                e.alternate === null)
                    throw Error(o(340));
                ba()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (we(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                ba()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return Y(Xt),
            null;
        case 4:
            return Ot(),
            null;
        case 10:
            return fn(e.type),
            null;
        case 22:
        case 23:
            return we(e),
            Do(),
            t !== null && Y(_a),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return fn(Kt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function dh(t, e) {
        switch (vo(e),
        e.tag) {
        case 3:
            fn(Kt),
            Ot();
            break;
        case 26:
        case 27:
        case 5:
            nn(e);
            break;
        case 4:
            Ot();
            break;
        case 31:
            e.memoizedState !== null && we(e);
            break;
        case 13:
            we(e);
            break;
        case 19:
            Y(Xt);
            break;
        case 10:
            fn(e.type);
            break;
        case 22:
        case 23:
            we(e),
            Do(),
            t !== null && Y(_a);
            break;
        case 24:
            fn(Kt)
        }
    }
    function hi(t, e) {
        try {
            var n = e.updateQueue
              , l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var s = l.next;
                n = s;
                do {
                    if ((n.tag & t) === t) {
                        l = void 0;
                        var u = n.create
                          , d = n.inst;
                        l = u(),
                        d.destroy = l
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (v) {
            Rt(e, e.return, v)
        }
    }
    function Vn(t, e, n) {
        try {
            var l = e.updateQueue
              , s = l !== null ? l.lastEffect : null;
            if (s !== null) {
                var u = s.next;
                l = u;
                do {
                    if ((l.tag & t) === t) {
                        var d = l.inst
                          , v = d.destroy;
                        if (v !== void 0) {
                            d.destroy = void 0,
                            s = e;
                            var A = n
                              , B = v;
                            try {
                                B()
                            } catch (H) {
                                Rt(s, A, H)
                            }
                        }
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (H) {
            Rt(e, e.return, H)
        }
    }
    function hh(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                ad(e, n)
            } catch (l) {
                Rt(t, t.return, l)
            }
        }
    }
    function mh(t, e, n) {
        n.props = ja(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            Rt(t, e, l)
        }
    }
    function mi(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(l) : n.current = l
            }
        } catch (s) {
            Rt(t, e, s)
        }
    }
    function Pe(t, e) {
        var n = t.ref
          , l = t.refCleanup;
        if (n !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (s) {
                    Rt(t, e, s)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (s) {
                    Rt(t, e, s)
                }
            else
                n.current = null
    }
    function ph(t) {
        var e = t.type
          , n = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && l.focus();
                break t;
            case "img":
                n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        } catch (s) {
            Rt(t, t.return, s)
        }
    }
    function fu(t, e, n) {
        try {
            var l = t.stateNode;
            Gy(l, t.type, n, e),
            l[me] = e
        } catch (s) {
            Rt(t, t.return, s)
        }
    }
    function gh(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Jn(t.type) || t.tag === 4
    }
    function du(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || gh(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Jn(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function hu(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = rn));
        else if (l !== 4 && (l === 27 && Jn(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (hu(t, e, n),
            t = t.sibling; t !== null; )
                hu(t, e, n),
                t = t.sibling
    }
    function qr(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (l !== 4 && (l === 27 && Jn(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (qr(t, e, n),
            t = t.sibling; t !== null; )
                qr(t, e, n),
                t = t.sibling
    }
    function yh(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var l = t.type, s = e.attributes; s.length; )
                e.removeAttributeNode(s[0]);
            oe(e, l, n),
            e[le] = t,
            e[me] = n
        } catch (u) {
            Rt(t, t.return, u)
        }
    }
    var gn = !1
      , Wt = !1
      , mu = !1
      , vh = typeof WeakSet == "function" ? WeakSet : Set
      , ee = null;
    function Sy(t, e) {
        if (t = t.containerInfo,
        Lu = rs,
        t = Mf(t),
        ro(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var l = n.getSelection && n.getSelection();
                    if (l && l.rangeCount !== 0) {
                        n = l.anchorNode;
                        var s = l.anchorOffset
                          , u = l.focusNode;
                        l = l.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var d = 0
                          , v = -1
                          , A = -1
                          , B = 0
                          , H = 0
                          , V = t
                          , L = null;
                        e: for (; ; ) {
                            for (var N; V !== n || s !== 0 && V.nodeType !== 3 || (v = d + s),
                            V !== u || l !== 0 && V.nodeType !== 3 || (A = d + l),
                            V.nodeType === 3 && (d += V.nodeValue.length),
                            (N = V.firstChild) !== null; )
                                L = V,
                                V = N;
                            for (; ; ) {
                                if (V === t)
                                    break e;
                                if (L === n && ++B === s && (v = d),
                                L === u && ++H === l && (A = d),
                                (N = V.nextSibling) !== null)
                                    break;
                                V = L,
                                L = V.parentNode
                            }
                            V = N
                        }
                        n = v === -1 || A === -1 ? null : {
                            start: v,
                            end: A
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Nu = {
            focusedElem: t,
            selectionRange: n
        },
        rs = !1,
        ee = e; ee !== null; )
            if (e = ee,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                ee = t;
            else
                for (; ee !== null; ) {
                    switch (e = ee,
                    u = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (n = 0; n < t.length; n++)
                                s = t[n],
                                s.ref.impl = s.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            n = e,
                            s = u.memoizedProps,
                            u = u.memoizedState,
                            l = n.stateNode;
                            try {
                                var tt = ja(n.type, s);
                                t = l.getSnapshotBeforeUpdate(tt, u),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (st) {
                                Rt(n, n.return, st)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                qu(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    qu(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        ee = t;
                        break
                    }
                    ee = e.return
                }
    }
    function Sh(t, e, n) {
        var l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            vn(t, n),
            l & 4 && hi(5, n);
            break;
        case 1:
            if (vn(t, n),
            l & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (d) {
                        Rt(n, n.return, d)
                    }
                else {
                    var s = ja(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (d) {
                        Rt(n, n.return, d)
                    }
                }
            l & 64 && hh(n),
            l & 512 && mi(n, n.return);
            break;
        case 3:
            if (vn(t, n),
            l & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    ad(t, e)
                } catch (d) {
                    Rt(n, n.return, d)
                }
            }
            break;
        case 27:
            e === null && l & 4 && yh(n);
        case 26:
        case 5:
            vn(t, n),
            e === null && l & 4 && ph(n),
            l & 512 && mi(n, n.return);
            break;
        case 12:
            vn(t, n);
            break;
        case 31:
            vn(t, n),
            l & 4 && Eh(t, n);
            break;
        case 13:
            vn(t, n),
            l & 4 && _h(t, n),
            l & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = jy.bind(null, n),
            Fy(t, n))));
            break;
        case 22:
            if (l = n.memoizedState !== null || gn,
            !l) {
                e = e !== null && e.memoizedState !== null || Wt,
                s = gn;
                var u = Wt;
                gn = l,
                (Wt = e) && !u ? Sn(t, n, (n.subtreeFlags & 8772) !== 0) : vn(t, n),
                gn = s,
                Wt = u
            }
            break;
        case 30:
            break;
        default:
            vn(t, n)
        }
    }
    function bh(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        bh(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && ks(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Ht = null
      , ge = !1;
    function yn(t, e, n) {
        for (n = n.child; n !== null; )
            xh(t, e, n),
            n = n.sibling
    }
    function xh(t, e, n) {
        if (Ae && typeof Ae.onCommitFiberUnmount == "function")
            try {
                Ae.onCommitFiberUnmount(Hl, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Wt || Pe(n, e),
            yn(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Wt || Pe(n, e);
            var l = Ht
              , s = ge;
            Jn(n.type) && (Ht = n.stateNode,
            ge = !1),
            yn(t, e, n),
            _i(n.stateNode),
            Ht = l,
            ge = s;
            break;
        case 5:
            Wt || Pe(n, e);
        case 6:
            if (l = Ht,
            s = ge,
            Ht = null,
            yn(t, e, n),
            Ht = l,
            ge = s,
            Ht !== null)
                if (ge)
                    try {
                        (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(n.stateNode)
                    } catch (u) {
                        Rt(n, e, u)
                    }
                else
                    try {
                        Ht.removeChild(n.stateNode)
                    } catch (u) {
                        Rt(n, e, u)
                    }
            break;
        case 18:
            Ht !== null && (ge ? (t = Ht,
            hm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            Cl(t)) : hm(Ht, n.stateNode));
            break;
        case 4:
            l = Ht,
            s = ge,
            Ht = n.stateNode.containerInfo,
            ge = !0,
            yn(t, e, n),
            Ht = l,
            ge = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Vn(2, n, e),
            Wt || Vn(4, n, e),
            yn(t, e, n);
            break;
        case 1:
            Wt || (Pe(n, e),
            l = n.stateNode,
            typeof l.componentWillUnmount == "function" && mh(n, e, l)),
            yn(t, e, n);
            break;
        case 21:
            yn(t, e, n);
            break;
        case 22:
            Wt = (l = Wt) || n.memoizedState !== null,
            yn(t, e, n),
            Wt = l;
            break;
        default:
            yn(t, e, n)
        }
    }
    function Eh(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Cl(t)
            } catch (n) {
                Rt(e, e.return, n)
            }
        }
    }
    function _h(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Cl(t)
            } catch (n) {
                Rt(e, e.return, n)
            }
    }
    function by(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new vh),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new vh),
            e;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function Gr(t, e) {
        var n = by(t);
        e.forEach(function(l) {
            if (!n.has(l)) {
                n.add(l);
                var s = wy.bind(null, t, l);
                l.then(s, s)
            }
        })
    }
    function ye(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var s = n[l]
                  , u = t
                  , d = e
                  , v = d;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (Jn(v.type)) {
                            Ht = v.stateNode,
                            ge = !1;
                            break t
                        }
                        break;
                    case 5:
                        Ht = v.stateNode,
                        ge = !1;
                        break t;
                    case 3:
                    case 4:
                        Ht = v.stateNode.containerInfo,
                        ge = !0;
                        break t
                    }
                    v = v.return
                }
                if (Ht === null)
                    throw Error(o(160));
                xh(u, d, s),
                Ht = null,
                ge = !1,
                u = s.alternate,
                u !== null && (u.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                Ah(e, t),
                e = e.sibling
    }
    var Qe = null;
    function Ah(t, e) {
        var n = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ye(e, t),
            ve(t),
            l & 4 && (Vn(3, t, t.return),
            hi(3, t),
            Vn(5, t, t.return));
            break;
        case 1:
            ye(e, t),
            ve(t),
            l & 512 && (Wt || n === null || Pe(n, n.return)),
            l & 64 && gn && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
            break;
        case 26:
            var s = Qe;
            if (ye(e, t),
            ve(t),
            l & 512 && (Wt || n === null || Pe(n, n.return)),
            l & 4) {
                var u = n !== null ? n.memoizedState : null;
                if (l = t.memoizedState,
                n === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                n = t.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (l) {
                                case "title":
                                    u = s.getElementsByTagName("title")[0],
                                    (!u || u[Yl] || u[le] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(l),
                                    s.head.insertBefore(u, s.querySelector("head > title"))),
                                    oe(u, l, n),
                                    u[le] = t,
                                    te(u),
                                    l = u;
                                    break t;
                                case "link":
                                    var d = Am("link", "href", s).get(l + (n.href || ""));
                                    if (d) {
                                        for (var v = 0; v < d.length; v++)
                                            if (u = d[v],
                                            u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                d.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = s.createElement(l),
                                    oe(u, l, n),
                                    s.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (d = Am("meta", "content", s).get(l + (n.content || ""))) {
                                        for (v = 0; v < d.length; v++)
                                            if (u = d[v],
                                            u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                d.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = s.createElement(l),
                                    oe(u, l, n),
                                    s.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, l))
                                }
                                u[le] = t,
                                te(u),
                                l = u
                            }
                            t.stateNode = l
                        } else
                            Tm(s, t.type, t.stateNode);
                    else
                        t.stateNode = _m(s, l, t.memoizedProps);
                else
                    u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : u.count--,
                    l === null ? Tm(s, t.type, t.stateNode) : _m(s, l, t.memoizedProps)) : l === null && t.stateNode !== null && fu(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            ye(e, t),
            ve(t),
            l & 512 && (Wt || n === null || Pe(n, n.return)),
            n !== null && l & 4 && fu(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (ye(e, t),
            ve(t),
            l & 512 && (Wt || n === null || Pe(n, n.return)),
            t.flags & 32) {
                s = t.stateNode;
                try {
                    Ja(s, "")
                } catch (tt) {
                    Rt(t, t.return, tt)
                }
            }
            l & 4 && t.stateNode != null && (s = t.memoizedProps,
            fu(t, s, n !== null ? n.memoizedProps : s)),
            l & 1024 && (mu = !0);
            break;
        case 6:
            if (ye(e, t),
            ve(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                l = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = l
                } catch (tt) {
                    Rt(t, t.return, tt)
                }
            }
            break;
        case 3:
            if (ns = null,
            s = Qe,
            Qe = ts(e.containerInfo),
            ye(e, t),
            Qe = s,
            ve(t),
            l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Cl(e.containerInfo)
                } catch (tt) {
                    Rt(t, t.return, tt)
                }
            mu && (mu = !1,
            Th(t));
            break;
        case 4:
            l = Qe,
            Qe = ts(t.stateNode.containerInfo),
            ye(e, t),
            ve(t),
            Qe = l;
            break;
        case 12:
            ye(e, t),
            ve(t);
            break;
        case 31:
            ye(e, t),
            ve(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Gr(t, l)));
            break;
        case 13:
            ye(e, t),
            ve(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Vr = fe()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Gr(t, l)));
            break;
        case 22:
            s = t.memoizedState !== null;
            var A = n !== null && n.memoizedState !== null
              , B = gn
              , H = Wt;
            if (gn = B || s,
            Wt = H || A,
            ye(e, t),
            Wt = H,
            gn = B,
            ve(t),
            l & 8192)
                t: for (e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (n === null || A || gn || Wt || wa(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            A = n = e;
                            try {
                                if (u = A.stateNode,
                                s)
                                    d = u.style,
                                    typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                else {
                                    v = A.stateNode;
                                    var V = A.memoizedProps.style
                                      , L = V != null && V.hasOwnProperty("display") ? V.display : null;
                                    v.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim()
                                }
                            } catch (tt) {
                                Rt(A, A.return, tt)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            A = e;
                            try {
                                A.stateNode.nodeValue = s ? "" : A.memoizedProps
                            } catch (tt) {
                                Rt(A, A.return, tt)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (n === null) {
                            A = e;
                            try {
                                var N = A.stateNode;
                                s ? mm(N, !0) : mm(A.stateNode, !1)
                            } catch (tt) {
                                Rt(A, A.return, tt)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (n = l.retryQueue,
            n !== null && (l.retryQueue = null,
            Gr(t, n))));
            break;
        case 19:
            ye(e, t),
            ve(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Gr(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ye(e, t),
            ve(t)
        }
    }
    function ve(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, l = t.return; l !== null; ) {
                    if (gh(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null)
                    throw Error(o(160));
                switch (n.tag) {
                case 27:
                    var s = n.stateNode
                      , u = du(t);
                    qr(t, u, s);
                    break;
                case 5:
                    var d = n.stateNode;
                    n.flags & 32 && (Ja(d, ""),
                    n.flags &= -33);
                    var v = du(t);
                    qr(t, v, d);
                    break;
                case 3:
                case 4:
                    var A = n.stateNode.containerInfo
                      , B = du(t);
                    hu(t, B, A);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (H) {
                Rt(t, t.return, H)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function Th(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                Th(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function vn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Sh(t, e.alternate, e),
                e = e.sibling
    }
    function wa(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Vn(4, e, e.return),
                wa(e);
                break;
            case 1:
                Pe(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && mh(e, e.return, n),
                wa(e);
                break;
            case 27:
                _i(e.stateNode);
            case 26:
            case 5:
                Pe(e, e.return),
                wa(e);
                break;
            case 22:
                e.memoizedState === null && wa(e);
                break;
            case 30:
                wa(e);
                break;
            default:
                wa(e)
            }
            t = t.sibling
        }
    }
    function Sn(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , s = t
              , u = e
              , d = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                Sn(s, u, n),
                hi(4, u);
                break;
            case 1:
                if (Sn(s, u, n),
                l = u,
                s = l.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (B) {
                        Rt(l, l.return, B)
                    }
                if (l = u,
                s = l.updateQueue,
                s !== null) {
                    var v = l.stateNode;
                    try {
                        var A = s.shared.hiddenCallbacks;
                        if (A !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < A.length; s++)
                                nd(A[s], v)
                    } catch (B) {
                        Rt(l, l.return, B)
                    }
                }
                n && d & 64 && hh(u),
                mi(u, u.return);
                break;
            case 27:
                yh(u);
            case 26:
            case 5:
                Sn(s, u, n),
                n && l === null && d & 4 && ph(u),
                mi(u, u.return);
                break;
            case 12:
                Sn(s, u, n);
                break;
            case 31:
                Sn(s, u, n),
                n && d & 4 && Eh(s, u);
                break;
            case 13:
                Sn(s, u, n),
                n && d & 4 && _h(s, u);
                break;
            case 22:
                u.memoizedState === null && Sn(s, u, n),
                mi(u, u.return);
                break;
            case 30:
                break;
            default:
                Sn(s, u, n)
            }
            e = e.sibling
        }
    }
    function pu(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && ti(n))
    }
    function gu(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && ti(t))
    }
    function Ze(t, e, n, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Ch(t, e, n, l),
                e = e.sibling
    }
    function Ch(t, e, n, l) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ze(t, e, n, l),
            s & 2048 && hi(9, e);
            break;
        case 1:
            Ze(t, e, n, l);
            break;
        case 3:
            Ze(t, e, n, l),
            s & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && ti(t)));
            break;
        case 12:
            if (s & 2048) {
                Ze(t, e, n, l),
                t = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , d = u.id
                      , v = u.onPostCommit;
                    typeof v == "function" && v(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (A) {
                    Rt(e, e.return, A)
                }
            } else
                Ze(t, e, n, l);
            break;
        case 31:
            Ze(t, e, n, l);
            break;
        case 13:
            Ze(t, e, n, l);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            d = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? Ze(t, e, n, l) : pi(t, e) : u._visibility & 2 ? Ze(t, e, n, l) : (u._visibility |= 2,
            pl(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            s & 2048 && pu(d, e);
            break;
        case 24:
            Ze(t, e, n, l),
            s & 2048 && gu(e.alternate, e);
            break;
        default:
            Ze(t, e, n, l)
        }
    }
    function pl(t, e, n, l, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var u = t
              , d = e
              , v = n
              , A = l
              , B = d.flags;
            switch (d.tag) {
            case 0:
            case 11:
            case 15:
                pl(u, d, v, A, s),
                hi(8, d);
                break;
            case 23:
                break;
            case 22:
                var H = d.stateNode;
                d.memoizedState !== null ? H._visibility & 2 ? pl(u, d, v, A, s) : pi(u, d) : (H._visibility |= 2,
                pl(u, d, v, A, s)),
                s && B & 2048 && pu(d.alternate, d);
                break;
            case 24:
                pl(u, d, v, A, s),
                s && B & 2048 && gu(d.alternate, d);
                break;
            default:
                pl(u, d, v, A, s)
            }
            e = e.sibling
        }
    }
    function pi(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , l = e
                  , s = l.flags;
                switch (l.tag) {
                case 22:
                    pi(n, l),
                    s & 2048 && pu(l.alternate, l);
                    break;
                case 24:
                    pi(n, l),
                    s & 2048 && gu(l.alternate, l);
                    break;
                default:
                    pi(n, l)
                }
                e = e.sibling
            }
    }
    var gi = 8192;
    function gl(t, e, n) {
        if (t.subtreeFlags & gi)
            for (t = t.child; t !== null; )
                Rh(t, e, n),
                t = t.sibling
    }
    function Rh(t, e, n) {
        switch (t.tag) {
        case 26:
            gl(t, e, n),
            t.flags & gi && t.memoizedState !== null && rv(n, Qe, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            gl(t, e, n);
            break;
        case 3:
        case 4:
            var l = Qe;
            Qe = ts(t.stateNode.containerInfo),
            gl(t, e, n),
            Qe = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate,
            l !== null && l.memoizedState !== null ? (l = gi,
            gi = 16777216,
            gl(t, e, n),
            gi = l) : gl(t, e, n));
            break;
        default:
            gl(t, e, n)
        }
    }
    function jh(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function yi(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    ee = l,
                    Mh(l, t)
                }
            jh(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                wh(t),
                t = t.sibling
    }
    function wh(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            yi(t),
            t.flags & 2048 && Vn(9, t, t.return);
            break;
        case 3:
            yi(t);
            break;
        case 12:
            yi(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            Yr(t)) : yi(t);
            break;
        default:
            yi(t)
        }
    }
    function Yr(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    ee = l,
                    Mh(l, t)
                }
            jh(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Vn(8, e, e.return),
                Yr(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                Yr(e));
                break;
            default:
                Yr(e)
            }
            t = t.sibling
        }
    }
    function Mh(t, e) {
        for (; ee !== null; ) {
            var n = ee;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Vn(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var l = n.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                ti(n.memoizedState.cache)
            }
            if (l = n.child,
            l !== null)
                l.return = n,
                ee = l;
            else
                t: for (n = t; ee !== null; ) {
                    l = ee;
                    var s = l.sibling
                      , u = l.return;
                    if (bh(l),
                    l === n) {
                        ee = null;
                        break t
                    }
                    if (s !== null) {
                        s.return = u,
                        ee = s;
                        break t
                    }
                    ee = u
                }
        }
    }
    var xy = {
        getCacheForType: function(t) {
            var e = re(Kt)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        },
        cacheSignal: function() {
            return re(Kt).controller.signal
        }
    }
      , Ey = typeof WeakMap == "function" ? WeakMap : Map
      , At = 0
      , Dt = null
      , ht = null
      , pt = 0
      , Ct = 0
      , Me = null
      , kn = !1
      , yl = !1
      , yu = !1
      , bn = 0
      , Vt = 0
      , Xn = 0
      , Ma = 0
      , vu = 0
      , ze = 0
      , vl = 0
      , vi = null
      , Se = null
      , Su = !1
      , Vr = 0
      , zh = 0
      , kr = 1 / 0
      , Xr = null
      , Qn = null
      , Pt = 0
      , Zn = null
      , Sl = null
      , xn = 0
      , bu = 0
      , xu = null
      , Oh = null
      , Si = 0
      , Eu = null;
    function Oe() {
        return (At & 2) !== 0 && pt !== 0 ? pt & -pt : U.T !== null ? ju() : Kc()
    }
    function Dh() {
        if (ze === 0)
            if ((pt & 536870912) === 0 || vt) {
                var t = Ii;
                Ii <<= 1,
                (Ii & 3932160) === 0 && (Ii = 262144),
                ze = t
            } else
                ze = 536870912;
        return t = je.current,
        t !== null && (t.flags |= 32),
        ze
    }
    function be(t, e, n) {
        (t === Dt && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null) && (bl(t, 0),
        Kn(t, pt, ze, !1)),
        Gl(t, n),
        ((At & 2) === 0 || t !== Dt) && (t === Dt && ((At & 2) === 0 && (Ma |= n),
        Vt === 4 && Kn(t, pt, ze, !1)),
        Ie(t))
    }
    function Bh(t, e, n) {
        if ((At & 6) !== 0)
            throw Error(o(327));
        var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ql(t, e)
          , s = l ? Ty(t, e) : Au(t, e, !0)
          , u = l;
        do {
            if (s === 0) {
                yl && !l && Kn(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                u && !_y(n)) {
                    s = Au(t, e, !1),
                    u = !1;
                    continue
                }
                if (s === 2) {
                    if (u = e,
                    t.errorRecoveryDisabledLanes & u)
                        var d = 0;
                    else
                        d = t.pendingLanes & -536870913,
                        d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                    if (d !== 0) {
                        e = d;
                        t: {
                            var v = t;
                            s = vi;
                            var A = v.current.memoizedState.isDehydrated;
                            if (A && (bl(v, d).flags |= 256),
                            d = Au(v, d, !1),
                            d !== 2) {
                                if (yu && !A) {
                                    v.errorRecoveryDisabledLanes |= u,
                                    Ma |= u,
                                    s = 4;
                                    break t
                                }
                                u = Se,
                                Se = s,
                                u !== null && (Se === null ? Se = u : Se.push.apply(Se, u))
                            }
                            s = d
                        }
                        if (u = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    bl(t, 0),
                    Kn(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    u = s,
                    u) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        Kn(l, e, ze, !kn);
                        break t;
                    case 2:
                        Se = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (s = Vr + 300 - fe(),
                    10 < s)) {
                        if (Kn(l, e, ze, !kn),
                        tr(l, 0, !0) !== 0)
                            break t;
                        xn = e,
                        l.timeoutHandle = fm(Lh.bind(null, l, n, Se, Xr, Su, e, ze, Ma, vl, kn, u, "Throttled", -0, 0), s);
                        break t
                    }
                    Lh(l, n, Se, Xr, Su, e, ze, Ma, vl, kn, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Ie(t)
    }
    function Lh(t, e, n, l, s, u, d, v, A, B, H, V, L, N) {
        if (t.timeoutHandle = -1,
        V = e.subtreeFlags,
        V & 8192 || (V & 16785408) === 16785408) {
            V = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: rn
            },
            Rh(e, u, V);
            var tt = (u & 62914560) === u ? Vr - fe() : (u & 4194048) === u ? zh - fe() : 0;
            if (tt = sv(V, tt),
            tt !== null) {
                xn = u,
                t.cancelPendingCommit = tt(kh.bind(null, t, e, u, n, l, s, d, v, A, H, V, null, L, N)),
                Kn(t, u, d, !B);
                return
            }
        }
        kh(t, e, u, n, l, s, d, v, A)
    }
    function _y(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var s = n[l]
                      , u = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ce(u(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function Kn(t, e, n, l) {
        e &= ~vu,
        e &= ~Ma,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        l && (t.warmLanes |= e),
        l = t.expirationTimes;
        for (var s = e; 0 < s; ) {
            var u = 31 - Te(s)
              , d = 1 << u;
            l[u] = -1,
            s &= ~d
        }
        n !== 0 && Xc(t, n, e)
    }
    function Qr() {
        return (At & 6) === 0 ? (bi(0),
        !1) : !0
    }
    function _u() {
        if (ht !== null) {
            if (Ct === 0)
                var t = ht.return;
            else
                t = ht,
                cn = xa = null,
                qo(t),
                cl = null,
                ni = 0,
                t = ht;
            for (; t !== null; )
                dh(t.alternate, t),
                t = t.return;
            ht = null
        }
    }
    function bl(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        ky(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        xn = 0,
        _u(),
        Dt = t,
        ht = n = on(t.current, null),
        pt = e,
        Ct = 0,
        Me = null,
        kn = !1,
        yl = ql(t, e),
        yu = !1,
        vl = ze = vu = Ma = Xn = Vt = 0,
        Se = vi = null,
        Su = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= e; 0 < l; ) {
                var s = 31 - Te(l)
                  , u = 1 << s;
                e |= t[s],
                l &= ~u
            }
        return bn = e,
        dr(),
        n
    }
    function Nh(t, e) {
        ut = null,
        U.H = ci,
        e === ul || e === br ? (e = If(),
        Ct = 3) : e === Ro ? (e = If(),
        Ct = 4) : Ct = e === eu ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Me = e,
        ht === null && (Vt = 1,
        Br(t, Ne(e, t.current)))
    }
    function Uh() {
        var t = je.current;
        return t === null ? !0 : (pt & 4194048) === pt ? Ge === null : (pt & 62914560) === pt || (pt & 536870912) !== 0 ? t === Ge : !1
    }
    function Hh() {
        var t = U.H;
        return U.H = ci,
        t === null ? ci : t
    }
    function qh() {
        var t = U.A;
        return U.A = xy,
        t
    }
    function Zr() {
        Vt = 4,
        kn || (pt & 4194048) !== pt && je.current !== null || (yl = !0),
        (Xn & 134217727) === 0 && (Ma & 134217727) === 0 || Dt === null || Kn(Dt, pt, ze, !1)
    }
    function Au(t, e, n) {
        var l = At;
        At |= 2;
        var s = Hh()
          , u = qh();
        (Dt !== t || pt !== e) && (Xr = null,
        bl(t, e)),
        e = !1;
        var d = Vt;
        t: do
            try {
                if (Ct !== 0 && ht !== null) {
                    var v = ht
                      , A = Me;
                    switch (Ct) {
                    case 8:
                        _u(),
                        d = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        je.current === null && (e = !0);
                        var B = Ct;
                        if (Ct = 0,
                        Me = null,
                        xl(t, v, A, B),
                        n && yl) {
                            d = 0;
                            break t
                        }
                        break;
                    default:
                        B = Ct,
                        Ct = 0,
                        Me = null,
                        xl(t, v, A, B)
                    }
                }
                Ay(),
                d = Vt;
                break
            } catch (H) {
                Nh(t, H)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        cn = xa = null,
        At = l,
        U.H = s,
        U.A = u,
        ht === null && (Dt = null,
        pt = 0,
        dr()),
        d
    }
    function Ay() {
        for (; ht !== null; )
            Gh(ht)
    }
    function Ty(t, e) {
        var n = At;
        At |= 2;
        var l = Hh()
          , s = qh();
        Dt !== t || pt !== e ? (Xr = null,
        kr = fe() + 500,
        bl(t, e)) : yl = ql(t, e);
        t: do
            try {
                if (Ct !== 0 && ht !== null) {
                    e = ht;
                    var u = Me;
                    e: switch (Ct) {
                    case 1:
                        Ct = 0,
                        Me = null,
                        xl(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Wf(u)) {
                            Ct = 0,
                            Me = null,
                            Yh(e);
                            break
                        }
                        e = function() {
                            Ct !== 2 && Ct !== 9 || Dt !== t || (Ct = 7),
                            Ie(t)
                        }
                        ,
                        u.then(e, e);
                        break t;
                    case 3:
                        Ct = 7;
                        break t;
                    case 4:
                        Ct = 5;
                        break t;
                    case 7:
                        Wf(u) ? (Ct = 0,
                        Me = null,
                        Yh(e)) : (Ct = 0,
                        Me = null,
                        xl(t, e, u, 7));
                        break;
                    case 5:
                        var d = null;
                        switch (ht.tag) {
                        case 26:
                            d = ht.memoizedState;
                        case 5:
                        case 27:
                            var v = ht;
                            if (d ? Cm(d) : v.stateNode.complete) {
                                Ct = 0,
                                Me = null;
                                var A = v.sibling;
                                if (A !== null)
                                    ht = A;
                                else {
                                    var B = v.return;
                                    B !== null ? (ht = B,
                                    Kr(B)) : ht = null
                                }
                                break e
                            }
                        }
                        Ct = 0,
                        Me = null,
                        xl(t, e, u, 5);
                        break;
                    case 6:
                        Ct = 0,
                        Me = null,
                        xl(t, e, u, 6);
                        break;
                    case 8:
                        _u(),
                        Vt = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                Cy();
                break
            } catch (H) {
                Nh(t, H)
            }
        while (!0);
        return cn = xa = null,
        U.H = l,
        U.A = s,
        At = n,
        ht !== null ? 0 : (Dt = null,
        pt = 0,
        dr(),
        Vt)
    }
    function Cy() {
        for (; ht !== null && !Wi(); )
            Gh(ht)
    }
    function Gh(t) {
        var e = ch(t.alternate, t, bn);
        t.memoizedProps = t.pendingProps,
        e === null ? Kr(t) : ht = e
    }
    function Yh(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = lh(n, e, e.pendingProps, e.type, void 0, pt);
            break;
        case 11:
            e = lh(n, e, e.pendingProps, e.type.render, e.ref, pt);
            break;
        case 5:
            qo(e);
        default:
            dh(n, e),
            e = ht = qf(e, bn),
            e = ch(n, e, bn)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? Kr(t) : ht = e
    }
    function xl(t, e, n, l) {
        cn = xa = null,
        qo(e),
        cl = null,
        ni = 0;
        var s = e.return;
        try {
            if (my(t, s, e, n, pt)) {
                Vt = 1,
                Br(t, Ne(n, t.current)),
                ht = null;
                return
            }
        } catch (u) {
            if (s !== null)
                throw ht = s,
                u;
            Vt = 1,
            Br(t, Ne(n, t.current)),
            ht = null;
            return
        }
        e.flags & 32768 ? (vt || l === 1 ? t = !0 : yl || (pt & 536870912) !== 0 ? t = !1 : (kn = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = je.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        Vh(e, t)) : Kr(e)
    }
    function Kr(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Vh(e, kn);
                return
            }
            t = e.return;
            var n = yy(e.alternate, e, bn);
            if (n !== null) {
                ht = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                ht = e;
                return
            }
            ht = e = t
        } while (e !== null);
        Vt === 0 && (Vt = 5)
    }
    function Vh(t, e) {
        do {
            var n = vy(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                ht = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                ht = t;
                return
            }
            ht = t = n
        } while (t !== null);
        Vt = 6,
        ht = null
    }
    function kh(t, e, n, l, s, u, d, v, A) {
        t.cancelPendingCommit = null;
        do
            Fr();
        while (Pt !== 0);
        if ((At & 6) !== 0)
            throw Error(o(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(o(177));
            if (u = e.lanes | e.childLanes,
            u |= fo,
            ig(t, n, u, d, v, A),
            t === Dt && (ht = Dt = null,
            pt = 0),
            Sl = e,
            Zn = t,
            xn = n,
            bu = u,
            xu = s,
            Oh = l,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            My(Va, function() {
                return Fh(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || l) {
                l = U.T,
                U.T = null,
                s = Z.p,
                Z.p = 2,
                d = At,
                At |= 4;
                try {
                    Sy(t, e, n)
                } finally {
                    At = d,
                    Z.p = s,
                    U.T = l
                }
            }
            Pt = 1,
            Xh(),
            Qh(),
            Zh()
        }
    }
    function Xh() {
        if (Pt === 1) {
            Pt = 0;
            var t = Zn
              , e = Sl
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = U.T,
                U.T = null;
                var l = Z.p;
                Z.p = 2;
                var s = At;
                At |= 4;
                try {
                    Ah(e, t);
                    var u = Nu
                      , d = Mf(t.containerInfo)
                      , v = u.focusedElem
                      , A = u.selectionRange;
                    if (d !== v && v && v.ownerDocument && wf(v.ownerDocument.documentElement, v)) {
                        if (A !== null && ro(v)) {
                            var B = A.start
                              , H = A.end;
                            if (H === void 0 && (H = B),
                            "selectionStart"in v)
                                v.selectionStart = B,
                                v.selectionEnd = Math.min(H, v.value.length);
                            else {
                                var V = v.ownerDocument || document
                                  , L = V && V.defaultView || window;
                                if (L.getSelection) {
                                    var N = L.getSelection()
                                      , tt = v.textContent.length
                                      , st = Math.min(A.start, tt)
                                      , zt = A.end === void 0 ? st : Math.min(A.end, tt);
                                    !N.extend && st > zt && (d = zt,
                                    zt = st,
                                    st = d);
                                    var z = jf(v, st)
                                      , R = jf(v, zt);
                                    if (z && R && (N.rangeCount !== 1 || N.anchorNode !== z.node || N.anchorOffset !== z.offset || N.focusNode !== R.node || N.focusOffset !== R.offset)) {
                                        var D = V.createRange();
                                        D.setStart(z.node, z.offset),
                                        N.removeAllRanges(),
                                        st > zt ? (N.addRange(D),
                                        N.extend(R.node, R.offset)) : (D.setEnd(R.node, R.offset),
                                        N.addRange(D))
                                    }
                                }
                            }
                        }
                        for (V = [],
                        N = v; N = N.parentNode; )
                            N.nodeType === 1 && V.push({
                                element: N,
                                left: N.scrollLeft,
                                top: N.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < V.length; v++) {
                            var G = V[v];
                            G.element.scrollLeft = G.left,
                            G.element.scrollTop = G.top
                        }
                    }
                    rs = !!Lu,
                    Nu = Lu = null
                } finally {
                    At = s,
                    Z.p = l,
                    U.T = n
                }
            }
            t.current = e,
            Pt = 2
        }
    }
    function Qh() {
        if (Pt === 2) {
            Pt = 0;
            var t = Zn
              , e = Sl
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = U.T,
                U.T = null;
                var l = Z.p;
                Z.p = 2;
                var s = At;
                At |= 4;
                try {
                    Sh(t, e.alternate, e)
                } finally {
                    At = s,
                    Z.p = l,
                    U.T = n
                }
            }
            Pt = 3
        }
    }
    function Zh() {
        if (Pt === 4 || Pt === 3) {
            Pt = 0,
            Hs();
            var t = Zn
              , e = Sl
              , n = xn
              , l = Oh;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Pt = 5 : (Pt = 0,
            Sl = Zn = null,
            Kh(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (Qn = null),
            Ys(n),
            e = e.stateNode,
            Ae && typeof Ae.onCommitFiberRoot == "function")
                try {
                    Ae.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                e = U.T,
                s = Z.p,
                Z.p = 2,
                U.T = null;
                try {
                    for (var u = t.onRecoverableError, d = 0; d < l.length; d++) {
                        var v = l[d];
                        u(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    U.T = e,
                    Z.p = s
                }
            }
            (xn & 3) !== 0 && Fr(),
            Ie(t),
            s = t.pendingLanes,
            (n & 261930) !== 0 && (s & 42) !== 0 ? t === Eu ? Si++ : (Si = 0,
            Eu = t) : Si = 0,
            bi(0)
        }
    }
    function Kh(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        ti(e)))
    }
    function Fr() {
        return Xh(),
        Qh(),
        Zh(),
        Fh()
    }
    function Fh() {
        if (Pt !== 5)
            return !1;
        var t = Zn
          , e = bu;
        bu = 0;
        var n = Ys(xn)
          , l = U.T
          , s = Z.p;
        try {
            Z.p = 32 > n ? 32 : n,
            U.T = null,
            n = xu,
            xu = null;
            var u = Zn
              , d = xn;
            if (Pt = 0,
            Sl = Zn = null,
            xn = 0,
            (At & 6) !== 0)
                throw Error(o(331));
            var v = At;
            if (At |= 4,
            wh(u.current),
            Ch(u, u.current, d, n),
            At = v,
            bi(0, !1),
            Ae && typeof Ae.onPostCommitFiberRoot == "function")
                try {
                    Ae.onPostCommitFiberRoot(Hl, u)
                } catch {}
            return !0
        } finally {
            Z.p = s,
            U.T = l,
            Kh(t, e)
        }
    }
    function Jh(t, e, n) {
        e = Ne(n, e),
        e = tu(t.stateNode, e, 2),
        t = qn(t, e, 2),
        t !== null && (Gl(t, 2),
        Ie(t))
    }
    function Rt(t, e, n) {
        if (t.tag === 3)
            Jh(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    Jh(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qn === null || !Qn.has(l))) {
                        t = Ne(n, t),
                        n = Wd(2),
                        l = qn(e, n, 2),
                        l !== null && (Pd(n, l, e, t),
                        Gl(l, 2),
                        Ie(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function Tu(t, e, n) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new Ey;
            var s = new Set;
            l.set(e, s)
        } else
            s = l.get(e),
            s === void 0 && (s = new Set,
            l.set(e, s));
        s.has(n) || (yu = !0,
        s.add(n),
        t = Ry.bind(null, t, e, n),
        e.then(t, t))
    }
    function Ry(t, e, n) {
        var l = t.pingCache;
        l !== null && l.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        Dt === t && (pt & n) === n && (Vt === 4 || Vt === 3 && (pt & 62914560) === pt && 300 > fe() - Vr ? (At & 2) === 0 && bl(t, 0) : vu |= n,
        vl === pt && (vl = 0)),
        Ie(t)
    }
    function Wh(t, e) {
        e === 0 && (e = kc()),
        t = va(t, e),
        t !== null && (Gl(t, e),
        Ie(t))
    }
    function jy(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        Wh(t, n)
    }
    function wy(t, e) {
        var n = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode
              , s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        l !== null && l.delete(e),
        Wh(t, n)
    }
    function My(t, e) {
        return ke(t, e)
    }
    var Jr = null
      , El = null
      , Cu = !1
      , Wr = !1
      , Ru = !1
      , Fn = 0;
    function Ie(t) {
        t !== El && t.next === null && (El === null ? Jr = El = t : El = El.next = t),
        Wr = !0,
        Cu || (Cu = !0,
        Oy())
    }
    function bi(t, e) {
        if (!Ru && Wr) {
            Ru = !0;
            do
                for (var n = !1, l = Jr; l !== null; ) {
                    if (t !== 0) {
                        var s = l.pendingLanes;
                        if (s === 0)
                            var u = 0;
                        else {
                            var d = l.suspendedLanes
                              , v = l.pingedLanes;
                            u = (1 << 31 - Te(42 | t) + 1) - 1,
                            u &= s & ~(d & ~v),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0,
                        tm(l, u))
                    } else
                        u = pt,
                        u = tr(l, l === Dt ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (u & 3) === 0 || ql(l, u) || (n = !0,
                        tm(l, u));
                    l = l.next
                }
            while (n);
            Ru = !1
        }
    }
    function zy() {
        Ph()
    }
    function Ph() {
        Wr = Cu = !1;
        var t = 0;
        Fn !== 0 && Vy() && (t = Fn);
        for (var e = fe(), n = null, l = Jr; l !== null; ) {
            var s = l.next
              , u = Ih(l, e);
            u === 0 ? (l.next = null,
            n === null ? Jr = s : n.next = s,
            s === null && (El = n)) : (n = l,
            (t !== 0 || (u & 3) !== 0) && (Wr = !0)),
            l = s
        }
        Pt !== 0 && Pt !== 5 || bi(t),
        Fn !== 0 && (Fn = 0)
    }
    function Ih(t, e) {
        for (var n = t.suspendedLanes, l = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var d = 31 - Te(u)
              , v = 1 << d
              , A = s[d];
            A === -1 ? ((v & n) === 0 || (v & l) !== 0) && (s[d] = lg(v, e)) : A <= e && (t.expiredLanes |= v),
            u &= ~v
        }
        if (e = Dt,
        n = pt,
        n = tr(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        n === 0 || t === e && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && Ul(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || ql(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (l !== null && Ul(l),
            Ys(n)) {
            case 2:
            case 8:
                n = Fe;
                break;
            case 32:
                n = Va;
                break;
            case 268435456:
                n = Vc;
                break;
            default:
                n = Va
            }
            return l = $h.bind(null, t),
            n = ke(n, l),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return l !== null && l !== null && Ul(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function $h(t, e) {
        if (Pt !== 0 && Pt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (Fr() && t.callbackNode !== n)
            return null;
        var l = pt;
        return l = tr(t, t === Dt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (Bh(t, l, e),
        Ih(t, fe()),
        t.callbackNode != null && t.callbackNode === n ? $h.bind(null, t) : null)
    }
    function tm(t, e) {
        if (Fr())
            return null;
        Bh(t, e, !0)
    }
    function Oy() {
        Xy(function() {
            (At & 6) !== 0 ? ke(ae, zy) : Ph()
        })
    }
    function ju() {
        if (Fn === 0) {
            var t = sl;
            t === 0 && (t = Pi,
            Pi <<= 1,
            (Pi & 261888) === 0 && (Pi = 256)),
            Fn = t
        }
        return Fn
    }
    function em(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : lr("" + t)
    }
    function nm(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function Dy(t, e, n, l, s) {
        if (e === "submit" && n && n.stateNode === s) {
            var u = em((s[me] || null).action)
              , d = l.submitter;
            d && (e = (e = d[me] || null) ? em(e.formAction) : d.getAttribute("formAction"),
            e !== null && (u = e,
            d = null));
            var v = new or("action","action",null,l,s);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Fn !== 0) {
                                var A = d ? nm(s, d) : new FormData(s);
                                Fo(n, {
                                    pending: !0,
                                    data: A,
                                    method: s.method,
                                    action: u
                                }, null, A)
                            }
                        } else
                            typeof u == "function" && (v.preventDefault(),
                            A = d ? nm(s, d) : new FormData(s),
                            Fo(n, {
                                pending: !0,
                                data: A,
                                method: s.method,
                                action: u
                            }, u, A))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var wu = 0; wu < co.length; wu++) {
        var Mu = co[wu]
          , By = Mu.toLowerCase()
          , Ly = Mu[0].toUpperCase() + Mu.slice(1);
        Xe(By, "on" + Ly)
    }
    Xe(Df, "onAnimationEnd"),
    Xe(Bf, "onAnimationIteration"),
    Xe(Lf, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(Pg, "onTransitionRun"),
    Xe(Ig, "onTransitionStart"),
    Xe($g, "onTransitionCancel"),
    Xe(Nf, "onTransitionEnd"),
    Ka("onMouseEnter", ["mouseout", "mouseover"]),
    Ka("onMouseLeave", ["mouseout", "mouseover"]),
    Ka("onPointerEnter", ["pointerout", "pointerover"]),
    Ka("onPointerLeave", ["pointerout", "pointerover"]),
    ma("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ma("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ma("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ma("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    ma("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var xi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Ny = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));
    function am(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var l = t[n]
              , s = l.event;
            l = l.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var d = l.length - 1; 0 <= d; d--) {
                        var v = l[d]
                          , A = v.instance
                          , B = v.currentTarget;
                        if (v = v.listener,
                        A !== u && s.isPropagationStopped())
                            break t;
                        u = v,
                        s.currentTarget = B;
                        try {
                            u(s)
                        } catch (H) {
                            fr(H)
                        }
                        s.currentTarget = null,
                        u = A
                    }
                else
                    for (d = 0; d < l.length; d++) {
                        if (v = l[d],
                        A = v.instance,
                        B = v.currentTarget,
                        v = v.listener,
                        A !== u && s.isPropagationStopped())
                            break t;
                        u = v,
                        s.currentTarget = B;
                        try {
                            u(s)
                        } catch (H) {
                            fr(H)
                        }
                        s.currentTarget = null,
                        u = A
                    }
            }
        }
    }
    function mt(t, e) {
        var n = e[Vs];
        n === void 0 && (n = e[Vs] = new Set);
        var l = t + "__bubble";
        n.has(l) || (lm(e, t, 2, !1),
        n.add(l))
    }
    function zu(t, e, n) {
        var l = 0;
        e && (l |= 4),
        lm(n, t, l, e)
    }
    var Pr = "_reactListening" + Math.random().toString(36).slice(2);
    function Ou(t) {
        if (!t[Pr]) {
            t[Pr] = !0,
            Wc.forEach(function(n) {
                n !== "selectionchange" && (Ny.has(n) || zu(n, !1, t),
                zu(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Pr] || (e[Pr] = !0,
            zu("selectionchange", !1, e))
        }
    }
    function lm(t, e, n, l) {
        switch (Dm(e)) {
        case 2:
            var s = cv;
            break;
        case 8:
            s = fv;
            break;
        default:
            s = Ku
        }
        n = s.bind(null, e, n, t),
        s = void 0,
        !Ps || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        l ? s !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
            passive: s
        }) : t.addEventListener(e, n, !1)
    }
    function Du(t, e, n, l, s) {
        var u = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var d = l.tag;
                if (d === 3 || d === 4) {
                    var v = l.stateNode.containerInfo;
                    if (v === s)
                        break;
                    if (d === 4)
                        for (d = l.return; d !== null; ) {
                            var A = d.tag;
                            if ((A === 3 || A === 4) && d.stateNode.containerInfo === s)
                                return;
                            d = d.return
                        }
                    for (; v !== null; ) {
                        if (d = Xa(v),
                        d === null)
                            return;
                        if (A = d.tag,
                        A === 5 || A === 6 || A === 26 || A === 27) {
                            l = u = d;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                l = l.return
            }
        uf(function() {
            var B = u
              , H = Js(n)
              , V = [];
            t: {
                var L = Uf.get(t);
                if (L !== void 0) {
                    var N = or
                      , tt = t;
                    switch (t) {
                    case "keypress":
                        if (rr(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        N = wg;
                        break;
                    case "focusin":
                        tt = "focus",
                        N = eo;
                        break;
                    case "focusout":
                        tt = "blur",
                        N = eo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        N = eo;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        N = df;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        N = yg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        N = Og;
                        break;
                    case Df:
                    case Bf:
                    case Lf:
                        N = bg;
                        break;
                    case Nf:
                        N = Bg;
                        break;
                    case "scroll":
                    case "scrollend":
                        N = pg;
                        break;
                    case "wheel":
                        N = Ng;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        N = Eg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        N = mf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        N = Hg
                    }
                    var st = (e & 4) !== 0
                      , zt = !st && (t === "scroll" || t === "scrollend")
                      , z = st ? L !== null ? L + "Capture" : null : L;
                    st = [];
                    for (var R = B, D; R !== null; ) {
                        var G = R;
                        if (D = G.stateNode,
                        G = G.tag,
                        G !== 5 && G !== 26 && G !== 27 || D === null || z === null || (G = kl(R, z),
                        G != null && st.push(Ei(R, G, D))),
                        zt)
                            break;
                        R = R.return
                    }
                    0 < st.length && (L = new N(L,tt,null,n,H),
                    V.push({
                        event: L,
                        listeners: st
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (L = t === "mouseover" || t === "pointerover",
                    N = t === "mouseout" || t === "pointerout",
                    L && n !== Fs && (tt = n.relatedTarget || n.fromElement) && (Xa(tt) || tt[ka]))
                        break t;
                    if ((N || L) && (L = H.window === H ? H : (L = H.ownerDocument) ? L.defaultView || L.parentWindow : window,
                    N ? (tt = n.relatedTarget || n.toElement,
                    N = B,
                    tt = tt ? Xa(tt) : null,
                    tt !== null && (zt = f(tt),
                    st = tt.tag,
                    tt !== zt || st !== 5 && st !== 27 && st !== 6) && (tt = null)) : (N = null,
                    tt = B),
                    N !== tt)) {
                        if (st = df,
                        G = "onMouseLeave",
                        z = "onMouseEnter",
                        R = "mouse",
                        (t === "pointerout" || t === "pointerover") && (st = mf,
                        G = "onPointerLeave",
                        z = "onPointerEnter",
                        R = "pointer"),
                        zt = N == null ? L : Vl(N),
                        D = tt == null ? L : Vl(tt),
                        L = new st(G,R + "leave",N,n,H),
                        L.target = zt,
                        L.relatedTarget = D,
                        G = null,
                        Xa(H) === B && (st = new st(z,R + "enter",tt,n,H),
                        st.target = D,
                        st.relatedTarget = zt,
                        G = st),
                        zt = G,
                        N && tt)
                            e: {
                                for (st = Uy,
                                z = N,
                                R = tt,
                                D = 0,
                                G = z; G; G = st(G))
                                    D++;
                                G = 0;
                                for (var lt = R; lt; lt = st(lt))
                                    G++;
                                for (; 0 < D - G; )
                                    z = st(z),
                                    D--;
                                for (; 0 < G - D; )
                                    R = st(R),
                                    G--;
                                for (; D--; ) {
                                    if (z === R || R !== null && z === R.alternate) {
                                        st = z;
                                        break e
                                    }
                                    z = st(z),
                                    R = st(R)
                                }
                                st = null
                            }
                        else
                            st = null;
                        N !== null && im(V, L, N, st, !1),
                        tt !== null && zt !== null && im(V, zt, tt, st, !0)
                    }
                }
                t: {
                    if (L = B ? Vl(B) : window,
                    N = L.nodeName && L.nodeName.toLowerCase(),
                    N === "select" || N === "input" && L.type === "file")
                        var bt = Ef;
                    else if (bf(L))
                        if (_f)
                            bt = Fg;
                        else {
                            bt = Zg;
                            var nt = Qg
                        }
                    else
                        N = L.nodeName,
                        !N || N.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? B && Ks(B.elementType) && (bt = Ef) : bt = Kg;
                    if (bt && (bt = bt(t, B))) {
                        xf(V, bt, n, H);
                        break t
                    }
                    nt && nt(t, L, B),
                    t === "focusout" && B && L.type === "number" && B.memoizedProps.value != null && Zs(L, "number", L.value)
                }
                switch (nt = B ? Vl(B) : window,
                t) {
                case "focusin":
                    (bf(nt) || nt.contentEditable === "true") && ($a = nt,
                    so = B,
                    Pl = null);
                    break;
                case "focusout":
                    Pl = so = $a = null;
                    break;
                case "mousedown":
                    oo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    oo = !1,
                    zf(V, n, H);
                    break;
                case "selectionchange":
                    if (Wg)
                        break;
                case "keydown":
                case "keyup":
                    zf(V, n, H)
                }
                var ct;
                if (ao)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var gt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            gt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            gt = "onCompositionUpdate";
                            break t
                        }
                        gt = void 0
                    }
                else
                    Ia ? vf(t, n) && (gt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (gt = "onCompositionStart");
                gt && (pf && n.locale !== "ko" && (Ia || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && Ia && (ct = cf()) : (On = H,
                Is = "value"in On ? On.value : On.textContent,
                Ia = !0)),
                nt = Ir(B, gt),
                0 < nt.length && (gt = new hf(gt,t,null,n,H),
                V.push({
                    event: gt,
                    listeners: nt
                }),
                ct ? gt.data = ct : (ct = Sf(n),
                ct !== null && (gt.data = ct)))),
                (ct = Gg ? Yg(t, n) : Vg(t, n)) && (gt = Ir(B, "onBeforeInput"),
                0 < gt.length && (nt = new hf("onBeforeInput","beforeinput",null,n,H),
                V.push({
                    event: nt,
                    listeners: gt
                }),
                nt.data = ct)),
                Dy(V, t, B, n, H)
            }
            am(V, e)
        })
    }
    function Ei(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function Ir(t, e) {
        for (var n = e + "Capture", l = []; t !== null; ) {
            var s = t
              , u = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || u === null || (s = kl(t, n),
            s != null && l.unshift(Ei(t, s, u)),
            s = kl(t, e),
            s != null && l.push(Ei(t, s, u))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function Uy(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function im(t, e, n, l, s) {
        for (var u = e._reactName, d = []; n !== null && n !== l; ) {
            var v = n
              , A = v.alternate
              , B = v.stateNode;
            if (v = v.tag,
            A !== null && A === l)
                break;
            v !== 5 && v !== 26 && v !== 27 || B === null || (A = B,
            s ? (B = kl(n, u),
            B != null && d.unshift(Ei(n, B, A))) : s || (B = kl(n, u),
            B != null && d.push(Ei(n, B, A)))),
            n = n.return
        }
        d.length !== 0 && t.push({
            event: e,
            listeners: d
        })
    }
    var Hy = /\r\n?/g
      , qy = /\u0000|\uFFFD/g;
    function rm(t) {
        return (typeof t == "string" ? t : "" + t).replace(Hy, `
`).replace(qy, "")
    }
    function sm(t, e) {
        return e = rm(e),
        rm(t) === e
    }
    function Mt(t, e, n, l, s, u) {
        switch (n) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Ja(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Ja(t, "" + l);
            break;
        case "className":
            nr(t, "class", l);
            break;
        case "tabIndex":
            nr(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            nr(t, n, l);
            break;
        case "style":
            sf(t, l, u);
            break;
        case "data":
            if (e !== "object") {
                nr(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = lr("" + l),
            t.setAttribute(n, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (n === "formAction" ? (e !== "input" && Mt(t, e, "name", s.name, s, null),
                Mt(t, e, "formEncType", s.formEncType, s, null),
                Mt(t, e, "formMethod", s.formMethod, s, null),
                Mt(t, e, "formTarget", s.formTarget, s, null)) : (Mt(t, e, "encType", s.encType, s, null),
                Mt(t, e, "method", s.method, s, null),
                Mt(t, e, "target", s.target, s, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = lr("" + l),
            t.setAttribute(n, l);
            break;
        case "onClick":
            l != null && (t.onclick = rn);
            break;
        case "onScroll":
            l != null && mt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && mt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = lr("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
            break;
        case "popover":
            mt("beforetoggle", t),
            mt("toggle", t),
            er(t, "popover", l);
            break;
        case "xlinkActuate":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            er(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = hg.get(n) || n,
            er(t, n, l))
        }
    }
    function Bu(t, e, n, l, s, u) {
        switch (n) {
        case "style":
            sf(t, l, u);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof l == "string" ? Ja(t, l) : (typeof l == "number" || typeof l == "bigint") && Ja(t, "" + l);
            break;
        case "onScroll":
            l != null && mt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && mt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = rn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Pc.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"),
                    e = n.slice(2, s ? n.length - 7 : void 0),
                    u = t[me] || null,
                    u = u != null ? u[n] : null,
                    typeof u == "function" && t.removeEventListener(e, u, s),
                    typeof l == "function")) {
                        typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, l, s);
                        break t
                    }
                    n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : er(t, n, l)
                }
        }
    }
    function oe(t, e, n) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            mt("error", t),
            mt("load", t);
            var l = !1, s = !1, u;
            for (u in n)
                if (n.hasOwnProperty(u)) {
                    var d = n[u];
                    if (d != null)
                        switch (u) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            Mt(t, e, u, d, n, null)
                        }
                }
            s && Mt(t, e, "srcSet", n.srcSet, n, null),
            l && Mt(t, e, "src", n.src, n, null);
            return;
        case "input":
            mt("invalid", t);
            var v = u = d = s = null
              , A = null
              , B = null;
            for (l in n)
                if (n.hasOwnProperty(l)) {
                    var H = n[l];
                    if (H != null)
                        switch (l) {
                        case "name":
                            s = H;
                            break;
                        case "type":
                            d = H;
                            break;
                        case "checked":
                            A = H;
                            break;
                        case "defaultChecked":
                            B = H;
                            break;
                        case "value":
                            u = H;
                            break;
                        case "defaultValue":
                            v = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null)
                                throw Error(o(137, e));
                            break;
                        default:
                            Mt(t, e, l, H, n, null)
                        }
                }
            nf(t, u, v, A, B, d, s, !1);
            return;
        case "select":
            mt("invalid", t),
            l = d = u = null;
            for (s in n)
                if (n.hasOwnProperty(s) && (v = n[s],
                v != null))
                    switch (s) {
                    case "value":
                        u = v;
                        break;
                    case "defaultValue":
                        d = v;
                        break;
                    case "multiple":
                        l = v;
                    default:
                        Mt(t, e, s, v, n, null)
                    }
            e = u,
            n = d,
            t.multiple = !!l,
            e != null ? Fa(t, !!l, e, !1) : n != null && Fa(t, !!l, n, !0);
            return;
        case "textarea":
            mt("invalid", t),
            u = s = l = null;
            for (d in n)
                if (n.hasOwnProperty(d) && (v = n[d],
                v != null))
                    switch (d) {
                    case "value":
                        l = v;
                        break;
                    case "defaultValue":
                        s = v;
                        break;
                    case "children":
                        u = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(o(91));
                        break;
                    default:
                        Mt(t, e, d, v, n, null)
                    }
            lf(t, l, s, u);
            return;
        case "option":
            for (A in n)
                n.hasOwnProperty(A) && (l = n[A],
                l != null) && (A === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Mt(t, e, A, l, n, null));
            return;
        case "dialog":
            mt("beforetoggle", t),
            mt("toggle", t),
            mt("cancel", t),
            mt("close", t);
            break;
        case "iframe":
        case "object":
            mt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < xi.length; l++)
                mt(xi[l], t);
            break;
        case "image":
            mt("error", t),
            mt("load", t);
            break;
        case "details":
            mt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            mt("error", t),
            mt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (B in n)
                if (n.hasOwnProperty(B) && (l = n[B],
                l != null))
                    switch (B) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, e));
                    default:
                        Mt(t, e, B, l, n, null)
                    }
            return;
        default:
            if (Ks(e)) {
                for (H in n)
                    n.hasOwnProperty(H) && (l = n[H],
                    l !== void 0 && Bu(t, e, H, l, n, void 0));
                return
            }
        }
        for (v in n)
            n.hasOwnProperty(v) && (l = n[v],
            l != null && Mt(t, e, v, l, n, null))
    }
    function Gy(t, e, n, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , u = null
              , d = null
              , v = null
              , A = null
              , B = null
              , H = null;
            for (N in n) {
                var V = n[N];
                if (n.hasOwnProperty(N) && V != null)
                    switch (N) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        A = V;
                    default:
                        l.hasOwnProperty(N) || Mt(t, e, N, null, l, V)
                    }
            }
            for (var L in l) {
                var N = l[L];
                if (V = n[L],
                l.hasOwnProperty(L) && (N != null || V != null))
                    switch (L) {
                    case "type":
                        u = N;
                        break;
                    case "name":
                        s = N;
                        break;
                    case "checked":
                        B = N;
                        break;
                    case "defaultChecked":
                        H = N;
                        break;
                    case "value":
                        d = N;
                        break;
                    case "defaultValue":
                        v = N;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (N != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        N !== V && Mt(t, e, L, N, l, V)
                    }
            }
            Qs(t, d, v, A, B, H, u, s);
            return;
        case "select":
            N = d = v = L = null;
            for (u in n)
                if (A = n[u],
                n.hasOwnProperty(u) && A != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        N = A;
                    default:
                        l.hasOwnProperty(u) || Mt(t, e, u, null, l, A)
                    }
            for (s in l)
                if (u = l[s],
                A = n[s],
                l.hasOwnProperty(s) && (u != null || A != null))
                    switch (s) {
                    case "value":
                        L = u;
                        break;
                    case "defaultValue":
                        v = u;
                        break;
                    case "multiple":
                        d = u;
                    default:
                        u !== A && Mt(t, e, s, u, l, A)
                    }
            e = v,
            n = d,
            l = N,
            L != null ? Fa(t, !!n, L, !1) : !!l != !!n && (e != null ? Fa(t, !!n, e, !0) : Fa(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            N = L = null;
            for (v in n)
                if (s = n[v],
                n.hasOwnProperty(v) && s != null && !l.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Mt(t, e, v, null, l, s)
                    }
            for (d in l)
                if (s = l[d],
                u = n[d],
                l.hasOwnProperty(d) && (s != null || u != null))
                    switch (d) {
                    case "value":
                        L = s;
                        break;
                    case "defaultValue":
                        N = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(o(91));
                        break;
                    default:
                        s !== u && Mt(t, e, d, s, l, u)
                    }
            af(t, L, N);
            return;
        case "option":
            for (var tt in n)
                L = n[tt],
                n.hasOwnProperty(tt) && L != null && !l.hasOwnProperty(tt) && (tt === "selected" ? t.selected = !1 : Mt(t, e, tt, null, l, L));
            for (A in l)
                L = l[A],
                N = n[A],
                l.hasOwnProperty(A) && L !== N && (L != null || N != null) && (A === "selected" ? t.selected = L && typeof L != "function" && typeof L != "symbol" : Mt(t, e, A, L, l, N));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var st in n)
                L = n[st],
                n.hasOwnProperty(st) && L != null && !l.hasOwnProperty(st) && Mt(t, e, st, null, l, L);
            for (B in l)
                if (L = l[B],
                N = n[B],
                l.hasOwnProperty(B) && L !== N && (L != null || N != null))
                    switch (B) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (L != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        Mt(t, e, B, L, l, N)
                    }
            return;
        default:
            if (Ks(e)) {
                for (var zt in n)
                    L = n[zt],
                    n.hasOwnProperty(zt) && L !== void 0 && !l.hasOwnProperty(zt) && Bu(t, e, zt, void 0, l, L);
                for (H in l)
                    L = l[H],
                    N = n[H],
                    !l.hasOwnProperty(H) || L === N || L === void 0 && N === void 0 || Bu(t, e, H, L, l, N);
                return
            }
        }
        for (var z in n)
            L = n[z],
            n.hasOwnProperty(z) && L != null && !l.hasOwnProperty(z) && Mt(t, e, z, null, l, L);
        for (V in l)
            L = l[V],
            N = n[V],
            !l.hasOwnProperty(V) || L === N || L == null && N == null || Mt(t, e, V, L, l, N)
    }
    function om(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Yy() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
                var s = n[l]
                  , u = s.transferSize
                  , d = s.initiatorType
                  , v = s.duration;
                if (u && v && om(d)) {
                    for (d = 0,
                    v = s.responseEnd,
                    l += 1; l < n.length; l++) {
                        var A = n[l]
                          , B = A.startTime;
                        if (B > v)
                            break;
                        var H = A.transferSize
                          , V = A.initiatorType;
                        H && om(V) && (A = A.responseEnd,
                        d += H * (A < v ? 1 : (v - B) / (A - B)))
                    }
                    if (--l,
                    e += 8 * (u + d) / (s.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var Lu = null
      , Nu = null;
    function $r(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function um(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function cm(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function Uu(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Hu = null;
    function Vy() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Hu ? !1 : (Hu = t,
        !0) : (Hu = null,
        !1)
    }
    var fm = typeof setTimeout == "function" ? setTimeout : void 0
      , ky = typeof clearTimeout == "function" ? clearTimeout : void 0
      , dm = typeof Promise == "function" ? Promise : void 0
      , Xy = typeof queueMicrotask == "function" ? queueMicrotask : typeof dm < "u" ? function(t) {
        return dm.resolve(null).then(t).catch(Qy)
    }
    : fm;
    function Qy(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Jn(t) {
        return t === "head"
    }
    function hm(t, e) {
        var n = e
          , l = 0;
        do {
            var s = n.nextSibling;
            if (t.removeChild(n),
            s && s.nodeType === 8)
                if (n = s.data,
                n === "/$" || n === "/&") {
                    if (l === 0) {
                        t.removeChild(s),
                        Cl(e);
                        return
                    }
                    l--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    l++;
                else if (n === "html")
                    _i(t.ownerDocument.documentElement);
                else if (n === "head") {
                    n = t.ownerDocument.head,
                    _i(n);
                    for (var u = n.firstChild; u; ) {
                        var d = u.nextSibling
                          , v = u.nodeName;
                        u[Yl] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u),
                        u = d
                    }
                } else
                    n === "body" && _i(t.ownerDocument.body);
            n = s
        } while (n);
        Cl(e)
    }
    function mm(t, e) {
        var n = t;
        t = 0;
        do {
            var l = n.nextSibling;
            if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            l && l.nodeType === 8)
                if (n = l.data,
                n === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
            n = l
        } while (n)
    }
    function qu(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                qu(n),
                ks(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function Zy(t, e, n, l) {
        for (; t.nodeType === 1; ) {
            var s = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[Yl])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var u = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = Ye(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function Ky(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ye(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function pm(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ye(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Gu(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function Yu(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function Fy(t, e) {
        var n = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || n.readyState !== "loading")
            e();
        else {
            var l = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function Ye(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var Vu = null;
    function gm(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "/$" || n === "/&") {
                    if (e === 0)
                        return Ye(t.nextSibling);
                    e--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function ym(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n !== "/$" && n !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function vm(t, e, n) {
        switch (e = $r(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    function _i(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        ks(t)
    }
    var Ve = new Map
      , Sm = new Set;
    function ts(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var En = Z.d;
    Z.d = {
        f: Jy,
        r: Wy,
        D: Py,
        C: Iy,
        L: $y,
        m: tv,
        X: nv,
        S: ev,
        M: av
    };
    function Jy() {
        var t = En.f()
          , e = Qr();
        return t || e
    }
    function Wy(t) {
        var e = Qa(t);
        e !== null && e.tag === 5 && e.type === "form" ? Nd(e) : En.r(t)
    }
    var _l = typeof document > "u" ? null : document;
    function bm(t, e, n) {
        var l = _l;
        if (l && typeof e == "string" && e) {
            var s = Be(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]',
            typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
            Sm.has(s) || (Sm.add(s),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            l.querySelector(s) === null && (e = l.createElement("link"),
            oe(e, "link", t),
            te(e),
            l.head.appendChild(e)))
        }
    }
    function Py(t) {
        En.D(t),
        bm("dns-prefetch", t, null)
    }
    function Iy(t, e) {
        En.C(t, e),
        bm("preconnect", t, e)
    }
    function $y(t, e, n) {
        En.L(t, e, n);
        var l = _l;
        if (l && t && e) {
            var s = 'link[rel="preload"][as="' + Be(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Be(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (s += '[imagesizes="' + Be(n.imageSizes) + '"]')) : s += '[href="' + Be(t) + '"]';
            var u = s;
            switch (e) {
            case "style":
                u = Al(t);
                break;
            case "script":
                u = Tl(t)
            }
            Ve.has(u) || (t = S({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Ve.set(u, t),
            l.querySelector(s) !== null || e === "style" && l.querySelector(Ai(u)) || e === "script" && l.querySelector(Ti(u)) || (e = l.createElement("link"),
            oe(e, "link", t),
            te(e),
            l.head.appendChild(e)))
        }
    }
    function tv(t, e) {
        En.m(t, e);
        var n = _l;
        if (n && t) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + Be(l) + '"][href="' + Be(t) + '"]'
              , u = s;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Tl(t)
            }
            if (!Ve.has(u) && (t = S({
                rel: "modulepreload",
                href: t
            }, e),
            Ve.set(u, t),
            n.querySelector(s) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Ti(u)))
                        return
                }
                l = n.createElement("link"),
                oe(l, "link", t),
                te(l),
                n.head.appendChild(l)
            }
        }
    }
    function ev(t, e, n) {
        En.S(t, e, n);
        var l = _l;
        if (l && t) {
            var s = Za(l).hoistableStyles
              , u = Al(t);
            e = e || "default";
            var d = s.get(u);
            if (!d) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (d = l.querySelector(Ai(u)))
                    v.loading = 5;
                else {
                    t = S({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Ve.get(u)) && ku(t, n);
                    var A = d = l.createElement("link");
                    te(A),
                    oe(A, "link", t),
                    A._p = new Promise(function(B, H) {
                        A.onload = B,
                        A.onerror = H
                    }
                    ),
                    A.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    A.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    es(d, e, l)
                }
                d = {
                    type: "stylesheet",
                    instance: d,
                    count: 1,
                    state: v
                },
                s.set(u, d)
            }
        }
    }
    function nv(t, e) {
        En.X(t, e);
        var n = _l;
        if (n && t) {
            var l = Za(n).hoistableScripts
              , s = Tl(t)
              , u = l.get(s);
            u || (u = n.querySelector(Ti(s)),
            u || (t = S({
                src: t,
                async: !0
            }, e),
            (e = Ve.get(s)) && Xu(t, e),
            u = n.createElement("script"),
            te(u),
            oe(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            l.set(s, u))
        }
    }
    function av(t, e) {
        En.M(t, e);
        var n = _l;
        if (n && t) {
            var l = Za(n).hoistableScripts
              , s = Tl(t)
              , u = l.get(s);
            u || (u = n.querySelector(Ti(s)),
            u || (t = S({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Ve.get(s)) && Xu(t, e),
            u = n.createElement("script"),
            te(u),
            oe(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            l.set(s, u))
        }
    }
    function xm(t, e, n, l) {
        var s = (s = ft.current) ? ts(s) : null;
        if (!s)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Al(n.href),
            n = Za(s).hoistableStyles,
            l = n.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = Al(n.href);
                var u = Za(s).hoistableStyles
                  , d = u.get(t);
                if (d || (s = s.ownerDocument || s,
                d = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, d),
                (u = s.querySelector(Ai(t))) && !u._p && (d.instance = u,
                d.state.loading = 5),
                Ve.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Ve.set(t, n),
                u || lv(s, t, n, d.state))),
                e && l === null)
                    throw Error(o(528, ""));
                return d
            }
            if (e && l !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Tl(n),
            n = Za(s).hoistableScripts,
            l = n.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function Al(t) {
        return 'href="' + Be(t) + '"'
    }
    function Ai(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Em(t) {
        return S({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function lv(t, e, n, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        oe(e, "link", n),
        te(e),
        t.head.appendChild(e))
    }
    function Tl(t) {
        return '[src="' + Be(t) + '"]'
    }
    function Ti(t) {
        return "script[async]" + t
    }
    function _m(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + Be(n.href) + '"]');
                if (l)
                    return e.instance = l,
                    te(l),
                    l;
                var s = S({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                te(l),
                oe(l, "style", s),
                es(l, n.precedence, t),
                e.instance = l;
            case "stylesheet":
                s = Al(n.href);
                var u = t.querySelector(Ai(s));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    te(u),
                    u;
                l = Em(n),
                (s = Ve.get(s)) && ku(l, s),
                u = (t.ownerDocument || t).createElement("link"),
                te(u);
                var d = u;
                return d._p = new Promise(function(v, A) {
                    d.onload = v,
                    d.onerror = A
                }
                ),
                oe(u, "link", l),
                e.state.loading |= 4,
                es(u, n.precedence, t),
                e.instance = u;
            case "script":
                return u = Tl(n.src),
                (s = t.querySelector(Ti(u))) ? (e.instance = s,
                te(s),
                s) : (l = n,
                (s = Ve.get(u)) && (l = S({}, n),
                Xu(l, s)),
                t = t.ownerDocument || t,
                s = t.createElement("script"),
                te(s),
                oe(s, "link", l),
                t.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            es(l, n.precedence, t));
        return e.instance
    }
    function es(t, e, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = l.length ? l[l.length - 1] : null, u = s, d = 0; d < l.length; d++) {
            var v = l[d];
            if (v.dataset.precedence === e)
                u = v;
            else if (u !== s)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function ku(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function Xu(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var ns = null;
    function Am(t, e, n) {
        if (ns === null) {
            var l = new Map
              , s = ns = new Map;
            s.set(n, l)
        } else
            s = ns,
            l = s.get(n),
            l || (l = new Map,
            s.set(n, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        n = n.getElementsByTagName(t),
        s = 0; s < n.length; s++) {
            var u = n[s];
            if (!(u[Yl] || u[le] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var d = u.getAttribute(e) || "";
                d = t + d;
                var v = l.get(d);
                v ? v.push(u) : l.set(d, [u])
            }
        }
        return l
    }
    function Tm(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function iv(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            return e.rel === "stylesheet" ? (t = e.disabled,
            typeof e.precedence == "string" && t == null) : !0;
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Cm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function rv(t, e, n, l) {
        if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var s = Al(l.href)
                  , u = e.querySelector(Ai(s));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = as.bind(t),
                    e.then(t, t)),
                    n.state.loading |= 4,
                    n.instance = u,
                    te(u);
                    return
                }
                u = e.ownerDocument || e,
                l = Em(l),
                (s = Ve.get(s)) && ku(l, s),
                u = u.createElement("link"),
                te(u);
                var d = u;
                d._p = new Promise(function(v, A) {
                    d.onload = v,
                    d.onerror = A
                }
                ),
                oe(u, "link", l),
                n.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(n, e),
            (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++,
            n = as.bind(t),
            e.addEventListener("load", n),
            e.addEventListener("error", n))
        }
    }
    var Qu = 0;
    function sv(t, e) {
        return t.stylesheets && t.count === 0 && is(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(n) {
            var l = setTimeout(function() {
                if (t.stylesheets && is(t, t.stylesheets),
                t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Qu === 0 && (Qu = 62500 * Yy());
            var s = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && is(t, t.stylesheets),
                t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, (t.imgBytes > Qu ? 50 : 800) + e);
            return t.unsuspend = n,
            function() {
                t.unsuspend = null,
                clearTimeout(l),
                clearTimeout(s)
            }
        }
        : null
    }
    function as() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                is(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var ls = null;
    function is(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        ls = new Map,
        e.forEach(ov, t),
        ls = null,
        as.call(t))
    }
    function ov(t, e) {
        if (!(e.state.loading & 4)) {
            var n = ls.get(t);
            if (n)
                var l = n.get(null);
            else {
                n = new Map,
                ls.set(t, n);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < s.length; u++) {
                    var d = s[u];
                    (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d),
                    l = d)
                }
                l && n.set(null, l)
            }
            s = e.instance,
            d = s.getAttribute("data-precedence"),
            u = n.get(d) || l,
            u === l && n.set(null, s),
            n.set(d, s),
            this.count++,
            l = as.bind(this),
            s.addEventListener("load", l),
            s.addEventListener("error", l),
            u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(s, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Ci = {
        $$typeof: Q,
        Provider: null,
        Consumer: null,
        _currentValue: it,
        _currentValue2: it,
        _threadCount: 0
    };
    function uv(t, e, n, l, s, u, d, v, A) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = qs(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = qs(0),
        this.hiddenUpdates = qs(null),
        this.identifierPrefix = l,
        this.onUncaughtError = s,
        this.onCaughtError = u,
        this.onRecoverableError = d,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = A,
        this.incompleteTransitions = new Map
    }
    function Rm(t, e, n, l, s, u, d, v, A, B, H, V) {
        return t = new uv(t,e,n,d,A,B,H,V,v),
        e = 1,
        u === !0 && (e |= 24),
        u = Re(3, null, null, e),
        t.current = u,
        u.stateNode = t,
        e = Ao(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: e
        },
        jo(u),
        t
    }
    function jm(t) {
        return t ? (t = nl,
        t) : nl
    }
    function wm(t, e, n, l, s, u) {
        s = jm(s),
        l.context === null ? l.context = s : l.pendingContext = s,
        l = Hn(e),
        l.payload = {
            element: n
        },
        u = u === void 0 ? null : u,
        u !== null && (l.callback = u),
        n = qn(t, l, e),
        n !== null && (be(n, t, e),
        li(n, t, e))
    }
    function Mm(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function Zu(t, e) {
        Mm(t, e),
        (t = t.alternate) && Mm(t, e)
    }
    function zm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = va(t, 67108864);
            e !== null && be(e, t, 67108864),
            Zu(t, 67108864)
        }
    }
    function Om(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Oe();
            e = Gs(e);
            var n = va(t, e);
            n !== null && be(n, t, e),
            Zu(t, e)
        }
    }
    var rs = !0;
    function cv(t, e, n, l) {
        var s = U.T;
        U.T = null;
        var u = Z.p;
        try {
            Z.p = 2,
            Ku(t, e, n, l)
        } finally {
            Z.p = u,
            U.T = s
        }
    }
    function fv(t, e, n, l) {
        var s = U.T;
        U.T = null;
        var u = Z.p;
        try {
            Z.p = 8,
            Ku(t, e, n, l)
        } finally {
            Z.p = u,
            U.T = s
        }
    }
    function Ku(t, e, n, l) {
        if (rs) {
            var s = Fu(l);
            if (s === null)
                Du(t, e, l, ss, n),
                Bm(t, l);
            else if (hv(s, t, e, n, l))
                l.stopPropagation();
            else if (Bm(t, l),
            e & 4 && -1 < dv.indexOf(t)) {
                for (; s !== null; ) {
                    var u = Qa(s);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var d = ha(u.pendingLanes);
                                if (d !== 0) {
                                    var v = u;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; d; ) {
                                        var A = 1 << 31 - Te(d);
                                        v.entanglements[1] |= A,
                                        d &= ~A
                                    }
                                    Ie(u),
                                    (At & 6) === 0 && (kr = fe() + 500,
                                    bi(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            v = va(u, 2),
                            v !== null && be(v, u, 2),
                            Qr(),
                            Zu(u, 2)
                        }
                    if (u = Fu(l),
                    u === null && Du(t, e, l, ss, n),
                    u === s)
                        break;
                    s = u
                }
                s !== null && l.stopPropagation()
            } else
                Du(t, e, l, null, n)
        }
    }
    function Fu(t) {
        return t = Js(t),
        Ju(t)
    }
    var ss = null;
    function Ju(t) {
        if (ss = null,
        t = Xa(t),
        t !== null) {
            var e = f(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 31) {
                    if (t = g(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return ss = t,
        null
    }
    function Dm(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Lt()) {
            case ae:
                return 2;
            case Fe:
                return 8;
            case Va:
            case I0:
                return 32;
            case Vc:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Wu = !1
      , Wn = null
      , Pn = null
      , In = null
      , Ri = new Map
      , ji = new Map
      , $n = []
      , dv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Bm(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            Wn = null;
            break;
        case "dragenter":
        case "dragleave":
            Pn = null;
            break;
        case "mouseover":
        case "mouseout":
            In = null;
            break;
        case "pointerover":
        case "pointerout":
            Ri.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ji.delete(e.pointerId)
        }
    }
    function wi(t, e, n, l, s, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: u,
            targetContainers: [s]
        },
        e !== null && (e = Qa(e),
        e !== null && zm(e)),
        t) : (t.eventSystemFlags |= l,
        e = t.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t)
    }
    function hv(t, e, n, l, s) {
        switch (e) {
        case "focusin":
            return Wn = wi(Wn, t, e, n, l, s),
            !0;
        case "dragenter":
            return Pn = wi(Pn, t, e, n, l, s),
            !0;
        case "mouseover":
            return In = wi(In, t, e, n, l, s),
            !0;
        case "pointerover":
            var u = s.pointerId;
            return Ri.set(u, wi(Ri.get(u) || null, t, e, n, l, s)),
            !0;
        case "gotpointercapture":
            return u = s.pointerId,
            ji.set(u, wi(ji.get(u) || null, t, e, n, l, s)),
            !0
        }
        return !1
    }
    function Lm(t) {
        var e = Xa(t.target);
        if (e !== null) {
            var n = f(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = h(n),
                    e !== null) {
                        t.blockedOn = e,
                        Fc(t.priority, function() {
                            Om(n)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = g(n),
                    e !== null) {
                        t.blockedOn = e,
                        Fc(t.priority, function() {
                            Om(n)
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function os(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = Fu(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var l = new n.constructor(n.type,n);
                Fs = l,
                n.target.dispatchEvent(l),
                Fs = null
            } else
                return e = Qa(n),
                e !== null && zm(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function Nm(t, e, n) {
        os(t) && n.delete(e)
    }
    function mv() {
        Wu = !1,
        Wn !== null && os(Wn) && (Wn = null),
        Pn !== null && os(Pn) && (Pn = null),
        In !== null && os(In) && (In = null),
        Ri.forEach(Nm),
        ji.forEach(Nm)
    }
    function us(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Wu || (Wu = !0,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, mv)))
    }
    var cs = null;
    function Um(t) {
        cs !== t && (cs = t,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            cs === t && (cs = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , l = t[e + 1]
                  , s = t[e + 2];
                if (typeof l != "function") {
                    if (Ju(l || n) === null)
                        continue;
                    break
                }
                var u = Qa(n);
                u !== null && (t.splice(e, 3),
                e -= 3,
                Fo(u, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: l
                }, l, s))
            }
        }))
    }
    function Cl(t) {
        function e(A) {
            return us(A, t)
        }
        Wn !== null && us(Wn, t),
        Pn !== null && us(Pn, t),
        In !== null && us(In, t),
        Ri.forEach(e),
        ji.forEach(e);
        for (var n = 0; n < $n.length; n++) {
            var l = $n[n];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < $n.length && (n = $n[0],
        n.blockedOn === null); )
            Lm(n),
            n.blockedOn === null && $n.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (l = 0; l < n.length; l += 3) {
                var s = n[l]
                  , u = n[l + 1]
                  , d = s[me] || null;
                if (typeof u == "function")
                    d || Um(n);
                else if (d) {
                    var v = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (s = u,
                        d = u[me] || null)
                            v = d.formAction;
                        else if (Ju(s) !== null)
                            continue
                    } else
                        v = d.action;
                    typeof v == "function" ? n[l + 1] = v : (n.splice(l, 3),
                    l -= 3),
                    Um(n)
                }
            }
    }
    function Hm() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(d) {
                        return s = d
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            s !== null && (s(),
            s = null),
            l || setTimeout(n, 20)
        }
        function n() {
            if (!l && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , s = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(n, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                s !== null && (s(),
                s = null)
            }
        }
    }
    function Pu(t) {
        this._internalRoot = t
    }
    fs.prototype.render = Pu.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(o(409));
        var n = e.current
          , l = Oe();
        wm(n, l, t, e, null, null)
    }
    ,
    fs.prototype.unmount = Pu.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            wm(t.current, 2, null, t, null, null),
            Qr(),
            e[ka] = null
        }
    }
    ;
    function fs(t) {
        this._internalRoot = t
    }
    fs.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Kc();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < $n.length && e !== 0 && e < $n[n].priority; n++)
                ;
            $n.splice(n, 0, t),
            n === 0 && Lm(t)
        }
    }
    ;
    var qm = i.version;
    if (qm !== "19.2.6")
        throw Error(o(527, qm, "19.2.6"));
    Z.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = p(e),
        t = t !== null ? b(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var pv = {
        bundleType: 0,
        version: "19.2.6",
        rendererPackageName: "react-dom",
        currentDispatcherRef: U,
        reconcilerVersion: "19.2.6"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ds.isDisabled && ds.supportsFiber)
            try {
                Hl = ds.inject(pv),
                Ae = ds
            } catch {}
    }
    return zi.createRoot = function(t, e) {
        if (!c(t))
            throw Error(o(299));
        var n = !1
          , l = ""
          , s = Zd
          , u = Kd
          , d = Fd;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        e = Rm(t, 1, !1, null, null, n, l, null, s, u, d, Hm),
        t[ka] = e.current,
        Ou(t),
        new Pu(e)
    }
    ,
    zi.hydrateRoot = function(t, e, n) {
        if (!c(t))
            throw Error(o(299));
        var l = !1
          , s = ""
          , u = Zd
          , d = Kd
          , v = Fd
          , A = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
        n.onCaughtError !== void 0 && (d = n.onCaughtError),
        n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
        n.formState !== void 0 && (A = n.formState)),
        e = Rm(t, 1, !0, e, n ?? null, l, s, A, u, d, v, Hm),
        e.context = jm(null),
        n = e.current,
        l = Oe(),
        l = Gs(l),
        s = Hn(l),
        s.callback = null,
        qn(n, s, l),
        n = l,
        e.current.lanes = n,
        Gl(e, n),
        Ie(e),
        t[ka] = e.current,
        Ou(t),
        new fs(e)
    }
    ,
    zi.version = "19.2.6",
    zi
}
var Jm;
function Tv() {
    if (Jm)
        return tc.exports;
    Jm = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (i) {
                console.error(i)
            }
    }
    return a(),
    tc.exports = Av(),
    tc.exports
}
var Cv = Tv()
  , Rv = "__TSS_CONTEXT"
  , _c = Symbol.for("TSS_SERVER_FUNCTION")
  , jv = "application/x-tss-framed"
  , _n = {
    JSON: 0,
    CHUNK: 1,
    END: 2,
    ERROR: 3
}
  , wv = /;\s*v=(\d+)/;
function Mv(a) {
    const i = a.match(wv);
    return i ? parseInt(i[1], 10) : void 0
}
function zv(a) {
    const i = Mv(a);
    if (i !== void 0 && i !== 1)
        throw new Error(`Incompatible framed protocol version: server=${i}, client=1. Please ensure client and server are using compatible versions.`)
}
var Vp = () => window.__TSS_START_OPTIONS__
  , kp = !1;
function Yi(a) {
    return a[a.length - 1]
}
function Ov(a) {
    return typeof a == "function"
}
function aa(a, i) {
    return Ov(a) ? a(i) : a
}
var Dv = Object.prototype.hasOwnProperty
  , Wm = Object.prototype.propertyIsEnumerable
  , Bv = () => Object.create(null)
  , za = (a, i) => la(a, i, Bv);
function la(a, i, r= () => ({}), o=0) {
    if (a === i)
        return a;
    if (o > 500)
        return i;
    const c = i
      , f = $m(a) && $m(c);
    if (!f && !(Dl(a) && Dl(c)))
        return c;
    const h = f ? a : Pm(a);
    if (!h)
        return c;
    const g = f ? c : Pm(c);
    if (!g)
        return c;
    const y = h.length
      , p = g.length
      , b = f ? new Array(p) : r();
    let S = 0;
    for (let E = 0; E < p; E++) {
        const _ = f ? E : g[E]
          , w = a[_]
          , O = c[_];
        if (w === O) {
            b[_] = w,
            (f ? E < y : Dv.call(a, _)) && S++;
            continue
        }
        if (w === null || O === null || typeof w != "object" || typeof O != "object") {
            b[_] = O;
            continue
        }
        const C = la(w, O, r, o + 1);
        b[_] = C,
        C === w && S++
    }
    return y === p && S === y ? a : b
}
function Pm(a) {
    const i = Object.getOwnPropertyNames(a);
    for (const c of i)
        if (!Wm.call(a, c))
            return !1;
    const r = Object.getOwnPropertySymbols(a);
    if (r.length === 0)
        return i;
    const o = i;
    for (const c of r) {
        if (!Wm.call(a, c))
            return !1;
        o.push(c)
    }
    return o
}
function Dl(a) {
    if (!Im(a))
        return !1;
    const i = a.constructor;
    if (typeof i > "u")
        return !0;
    const r = i.prototype;
    return !(!Im(r) || !r.hasOwnProperty("isPrototypeOf"))
}
function Im(a) {
    return Object.prototype.toString.call(a) === "[object Object]"
}
function $m(a) {
    return Array.isArray(a) && a.length === Object.keys(a).length
}
function xe(a, i, r) {
    if (a === i)
        return !0;
    if (typeof a != typeof i)
        return !1;
    if (Array.isArray(a) && Array.isArray(i)) {
        if (a.length !== i.length)
            return !1;
        for (let o = 0, c = a.length; o < c; o++)
            if (!xe(a[o], i[o], r))
                return !1;
        return !0
    }
    if (Dl(a) && Dl(i)) {
        const o = r?.ignoreUndefined ?? !0;
        if (r?.partial) {
            for (const h in i)
                if ((!o || i[h] !== void 0) && !xe(a[h], i[h], r))
                    return !1;
            return !0
        }
        let c = 0;
        if (!o)
            c = Object.keys(a).length;
        else
            for (const h in a)
                a[h] !== void 0 && c++;
        let f = 0;
        for (const h in i)
            if ((!o || i[h] !== void 0) && (f++,
            f > c || !xe(a[h], i[h], r)))
                return !1;
        return c === f
    }
    return !1
}
function Ua(a) {
    let i, r;
    const o = new Promise( (c, f) => {
        i = c,
        r = f
    }
    );
    return o.status = "pending",
    o.resolve = c => {
        o.status = "resolved",
        o.value = c,
        i(c),
        a?.(c)
    }
    ,
    o.reject = c => {
        o.status = "rejected",
        r(c)
    }
    ,
    o
}
function Lv(a) {
    return typeof a?.message != "string" ? !1 : a.message.startsWith("Failed to fetch dynamically imported module") || a.message.startsWith("error loading dynamically imported module") || a.message.startsWith("Importing a module script failed")
}
function Vi(a) {
    return !!(a && typeof a == "object" && typeof a.then == "function")
}
function Nv(a) {
    return a.replace(/[\x00-\x1f\x7f]/g, "")
}
function tp(a) {
    let i;
    try {
        i = decodeURI(a)
    } catch {
        i = a.replaceAll(/%[0-9A-F]{2}/gi, r => {
            try {
                return decodeURI(r)
            } catch {
                return r
            }
        }
        )
    }
    return Nv(i)
}
var Uv = ["http:", "https:", "mailto:", "tel:"];
function As(a, i) {
    if (!a)
        return !1;
    try {
        const r = new URL(a);
        return !i.has(r.protocol)
    } catch {
        return !1
    }
}
var Hv = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
  , qv = /[&><\u2028\u2029]/g;
function Gv(a) {
    return a.replace(qv, i => Hv[i])
}
function Oi(a) {
    if (!a)
        return {
            path: a,
            handledProtocolRelativeURL: !1
        };
    if (!/[%\\\x00-\x1f\x7f]/.test(a) && !a.startsWith("//"))
        return {
            path: a,
            handledProtocolRelativeURL: !1
        };
    const i = /%25|%5C/gi;
    let r = 0, o = "", c;
    for (; (c = i.exec(a)) !== null; )
        o += tp(a.slice(r, c.index)) + c[0],
        r = i.lastIndex;
    o = o + tp(r ? a.slice(r) : a);
    let f = !1;
    return o.startsWith("//") && (f = !0,
    o = "/" + o.replace(/^\/+/, "")),
    {
        path: o,
        handledProtocolRelativeURL: f
    }
}
function Yv(a) {
    return /\s|[^\u0000-\u007F]/.test(a) ? a.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : a
}
function Vv(a, i) {
    if (a === i)
        return !0;
    if (a.length !== i.length)
        return !1;
    for (let r = 0; r < a.length; r++)
        if (a[r] !== i[r])
            return !1;
    return !0
}
function _e() {
    throw new Error("Invariant failed")
}
function ki(a) {
    const i = new Map;
    let r, o;
    const c = f => {
        f.next && (f.prev ? (f.prev.next = f.next,
        f.next.prev = f.prev,
        f.next = void 0,
        o && (o.next = f,
        f.prev = o)) : (f.next.prev = void 0,
        r = f.next,
        f.next = void 0,
        o && (f.prev = o,
        o.next = f)),
        o = f)
    }
    ;
    return {
        get(f) {
            const h = i.get(f);
            if (h)
                return c(h),
                h.value
        },
        set(f, h) {
            if (i.size >= a && r) {
                const y = r;
                i.delete(y.key),
                y.next && (r = y.next,
                y.next.prev = void 0),
                y === o && (o = void 0)
            }
            const g = i.get(f);
            if (g)
                g.value = h,
                c(g);
            else {
                const y = {
                    key: f,
                    value: h,
                    prev: o
                };
                o && (o.next = y),
                o = y,
                r || (r = y),
                i.set(f, y)
            }
        },
        clear() {
            i.clear(),
            r = void 0,
            o = void 0
        }
    }
}
var Oa = 4
  , Xp = 5;
function kv(a) {
    const i = a.indexOf("{");
    if (i === -1)
        return null;
    const r = a.indexOf("}", i);
    return r === -1 || i + 1 >= a.length ? null : [i, r]
}
function Oc(a, i, r=new Uint16Array(6)) {
    const o = a.indexOf("/", i)
      , c = o === -1 ? a.length : o
      , f = a.substring(i, c);
    if (!f || !f.includes("$"))
        return r[0] = 0,
        r[1] = i,
        r[2] = i,
        r[3] = c,
        r[4] = c,
        r[5] = c,
        r;
    if (f === "$") {
        const g = a.length;
        return r[0] = 2,
        r[1] = i,
        r[2] = i,
        r[3] = g,
        r[4] = g,
        r[5] = g,
        r
    }
    if (f.charCodeAt(0) === 36)
        return r[0] = 1,
        r[1] = i,
        r[2] = i + 1,
        r[3] = c,
        r[4] = c,
        r[5] = c,
        r;
    const h = kv(f);
    if (h) {
        const [g,y] = h
          , p = f.charCodeAt(g + 1);
        if (p === 45) {
            if (g + 2 < f.length && f.charCodeAt(g + 2) === 36) {
                const b = g + 3
                  , S = y;
                if (b < S)
                    return r[0] = 3,
                    r[1] = i + g,
                    r[2] = i + b,
                    r[3] = i + S,
                    r[4] = i + y + 1,
                    r[5] = c,
                    r
            }
        } else if (p === 36) {
            const b = g + 1
              , S = g + 2;
            return S === y ? (r[0] = 2,
            r[1] = i + g,
            r[2] = i + b,
            r[3] = i + S,
            r[4] = i + y + 1,
            r[5] = a.length,
            r) : (r[0] = 1,
            r[1] = i + g,
            r[2] = i + S,
            r[3] = i + y,
            r[4] = i + y + 1,
            r[5] = c,
            r)
        }
    }
    return r[0] = 0,
    r[1] = i,
    r[2] = i,
    r[3] = c,
    r[4] = c,
    r[5] = c,
    r
}
function zs(a, i, r, o, c, f, h) {
    h?.(r);
    let g = o;
    {
        const y = r.fullPath ?? r.from
          , p = y.length
          , b = r.options?.caseSensitive ?? a
          , S = !!(r.options?.params?.parse && r.options?.skipRouteOnParseError?.params);
        for (; g < p; ) {
            const _ = Oc(y, g, i);
            let w;
            const O = g
              , C = _[5];
            switch (g = C + 1,
            f++,
            _[0]) {
            case 0:
                {
                    const M = y.substring(_[2], _[3]);
                    if (b) {
                        const k = c.static?.get(M);
                        if (k)
                            w = k;
                        else {
                            c.static ??= new Map;
                            const Q = Da(r.fullPath ?? r.from);
                            Q.parent = c,
                            Q.depth = f,
                            w = Q,
                            c.static.set(M, Q)
                        }
                    } else {
                        const k = M.toLowerCase()
                          , Q = c.staticInsensitive?.get(k);
                        if (Q)
                            w = Q;
                        else {
                            c.staticInsensitive ??= new Map;
                            const q = Da(r.fullPath ?? r.from);
                            q.parent = c,
                            q.depth = f,
                            w = q,
                            c.staticInsensitive.set(k, q)
                        }
                    }
                    break
                }
            case 1:
                {
                    const M = y.substring(O, _[1])
                      , k = y.substring(_[4], C)
                      , Q = b && !!(M || k)
                      , q = M ? Q ? M : M.toLowerCase() : void 0
                      , $ = k ? Q ? k : k.toLowerCase() : void 0
                      , W = !S && c.dynamic?.find(X => !X.skipOnParamError && X.caseSensitive === Q && X.prefix === q && X.suffix === $);
                    if (W)
                        w = W;
                    else {
                        const X = ic(1, r.fullPath ?? r.from, Q, q, $);
                        w = X,
                        X.depth = f,
                        X.parent = c,
                        c.dynamic ??= [],
                        c.dynamic.push(X)
                    }
                    break
                }
            case 3:
                {
                    const M = y.substring(O, _[1])
                      , k = y.substring(_[4], C)
                      , Q = b && !!(M || k)
                      , q = M ? Q ? M : M.toLowerCase() : void 0
                      , $ = k ? Q ? k : k.toLowerCase() : void 0
                      , W = !S && c.optional?.find(X => !X.skipOnParamError && X.caseSensitive === Q && X.prefix === q && X.suffix === $);
                    if (W)
                        w = W;
                    else {
                        const X = ic(3, r.fullPath ?? r.from, Q, q, $);
                        w = X,
                        X.parent = c,
                        X.depth = f,
                        c.optional ??= [],
                        c.optional.push(X)
                    }
                    break
                }
            case 2:
                {
                    const M = y.substring(O, _[1])
                      , k = y.substring(_[4], C)
                      , Q = b && !!(M || k)
                      , q = M ? Q ? M : M.toLowerCase() : void 0
                      , $ = k ? Q ? k : k.toLowerCase() : void 0
                      , W = ic(2, r.fullPath ?? r.from, Q, q, $);
                    w = W,
                    W.parent = c,
                    W.depth = f,
                    c.wildcard ??= [],
                    c.wildcard.push(W)
                }
            }
            c = w
        }
        if (S && r.children && !r.isRoot && r.id && r.id.charCodeAt(r.id.lastIndexOf("/") + 1) === 95) {
            const _ = Da(r.fullPath ?? r.from);
            _.kind = Xp,
            _.parent = c,
            f++,
            _.depth = f,
            c.pathless ??= [],
            c.pathless.push(_),
            c = _
        }
        const E = (r.path || !r.children) && !r.isRoot;
        if (E && y.endsWith("/")) {
            const _ = Da(r.fullPath ?? r.from);
            _.kind = Oa,
            _.parent = c,
            f++,
            _.depth = f,
            c.index = _,
            c = _
        }
        c.parse = r.options?.params?.parse ?? null,
        c.skipOnParamError = S,
        c.parsingPriority = r.options?.skipRouteOnParseError?.priority ?? 0,
        E && !c.route && (c.route = r,
        c.fullPath = r.fullPath ?? r.from)
    }
    if (r.children)
        for (const y of r.children)
            zs(a, i, y, g, c, f, h)
}
function lc(a, i) {
    if (a.skipOnParamError && !i.skipOnParamError)
        return -1;
    if (!a.skipOnParamError && i.skipOnParamError)
        return 1;
    if (a.skipOnParamError && i.skipOnParamError && (a.parsingPriority || i.parsingPriority))
        return i.parsingPriority - a.parsingPriority;
    if (a.prefix && i.prefix && a.prefix !== i.prefix) {
        if (a.prefix.startsWith(i.prefix))
            return -1;
        if (i.prefix.startsWith(a.prefix))
            return 1
    }
    if (a.suffix && i.suffix && a.suffix !== i.suffix) {
        if (a.suffix.endsWith(i.suffix))
            return -1;
        if (i.suffix.endsWith(a.suffix))
            return 1
    }
    return a.prefix && !i.prefix ? -1 : !a.prefix && i.prefix ? 1 : a.suffix && !i.suffix ? -1 : !a.suffix && i.suffix ? 1 : a.caseSensitive && !i.caseSensitive ? -1 : !a.caseSensitive && i.caseSensitive ? 1 : 0
}
function ea(a) {
    if (a.pathless)
        for (const i of a.pathless)
            ea(i);
    if (a.static)
        for (const i of a.static.values())
            ea(i);
    if (a.staticInsensitive)
        for (const i of a.staticInsensitive.values())
            ea(i);
    if (a.dynamic?.length) {
        a.dynamic.sort(lc);
        for (const i of a.dynamic)
            ea(i)
    }
    if (a.optional?.length) {
        a.optional.sort(lc);
        for (const i of a.optional)
            ea(i)
    }
    if (a.wildcard?.length) {
        a.wildcard.sort(lc);
        for (const i of a.wildcard)
            ea(i)
    }
}
function Da(a) {
    return {
        kind: 0,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: a,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0
    }
}
function ic(a, i, r, o, c) {
    return {
        kind: a,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: i,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0,
        caseSensitive: r,
        prefix: o,
        suffix: c
    }
}
function Xv(a, i) {
    const r = Da("/")
      , o = new Uint16Array(6);
    for (const c of a)
        zs(!1, o, c, 1, r, 0);
    ea(r),
    i.masksTree = r,
    i.flatCache = ki(1e3)
}
function Qv(a, i) {
    a ||= "/";
    const r = i.flatCache.get(a);
    if (r)
        return r;
    const o = Dc(a, i.masksTree);
    return i.flatCache.set(a, o),
    o
}
function Zv(a, i, r, o, c) {
    a ||= "/",
    o ||= "/";
    const f = i ? `case\0${a}` : a;
    let h = c.singleCache.get(f);
    return h || (h = Da("/"),
    zs(i, new Uint16Array(6), {
        from: a
    }, 1, h, 0),
    c.singleCache.set(f, h)),
    Dc(o, h, r)
}
function Kv(a, i, r=!1) {
    const o = r ? a : `nofuzz\0${a}`
      , c = i.matchCache.get(o);
    if (c !== void 0)
        return c;
    a ||= "/";
    let f;
    try {
        f = Dc(a, i.segmentTree, r)
    } catch (h) {
        if (h instanceof URIError)
            f = null;
        else
            throw h
    }
    return f && (f.branch = Wv(f.route)),
    i.matchCache.set(o, f),
    f
}
function Fv(a) {
    return a === "/" ? a : a.replace(/\/{1,}$/, "")
}
function Jv(a, i=!1, r) {
    const o = Da(a.fullPath)
      , c = new Uint16Array(6)
      , f = {}
      , h = {};
    let g = 0;
    return zs(i, c, a, 1, o, 0, y => {
        if (r?.(y, g),
        y.id in f && _e(),
        f[y.id] = y,
        g !== 0 && y.path) {
            const p = Fv(y.fullPath);
            (!h[p] || y.fullPath.endsWith("/")) && (h[p] = y)
        }
        g++
    }
    ),
    ea(o),
    {
        processedTree: {
            segmentTree: o,
            singleCache: ki(1e3),
            matchCache: ki(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: f,
        routesByPath: h
    }
}
function Dc(a, i, r=!1) {
    const o = a.split("/")
      , c = Iv(a, o, i, r);
    if (!c)
        return null;
    const [f] = Qp(a, o, c);
    return {
        route: c.node.route,
        rawParams: f,
        parsedParams: c.parsedParams
    }
}
function Qp(a, i, r) {
    const o = Pv(r.node);
    let c = null;
    const f = Object.create(null);
    let h = r.extract?.part ?? 0
      , g = r.extract?.node ?? 0
      , y = r.extract?.path ?? 0
      , p = r.extract?.segment ?? 0;
    for (; g < o.length; h++,
    g++,
    y++,
    p++) {
        const b = o[g];
        if (b.kind === Oa)
            break;
        if (b.kind === Xp) {
            p--,
            h--,
            y--;
            continue
        }
        const S = i[h]
          , E = y;
        if (S && (y += S.length),
        b.kind === 1) {
            c ??= r.node.fullPath.split("/");
            const _ = c[p]
              , w = b.prefix?.length ?? 0;
            if (_.charCodeAt(w) === 123) {
                const O = b.suffix?.length ?? 0
                  , C = _.substring(w + 2, _.length - O - 1)
                  , M = S.substring(w, S.length - O);
                f[C] = decodeURIComponent(M)
            } else {
                const O = _.substring(1);
                f[O] = decodeURIComponent(S)
            }
        } else if (b.kind === 3) {
            if (r.skipped & 1 << g) {
                h--,
                y = E - 1;
                continue
            }
            c ??= r.node.fullPath.split("/");
            const _ = c[p]
              , w = b.prefix?.length ?? 0
              , O = b.suffix?.length ?? 0
              , C = _.substring(w + 3, _.length - O - 1)
              , M = b.suffix || b.prefix ? S.substring(w, S.length - O) : S;
            M && (f[C] = decodeURIComponent(M))
        } else if (b.kind === 2) {
            const _ = b
              , w = a.substring(E + (_.prefix?.length ?? 0), a.length - (_.suffix?.length ?? 0))
              , O = decodeURIComponent(w);
            f["*"] = O,
            f._splat = O;
            break
        }
    }
    return r.rawParams && Object.assign(f, r.rawParams),
    [f, {
        part: h,
        node: g,
        path: y,
        segment: p
    }]
}
function Wv(a) {
    const i = [a];
    for (; a.parentRoute; )
        a = a.parentRoute,
        i.push(a);
    return i.reverse(),
    i
}
function Pv(a) {
    const i = Array(a.depth + 1);
    do
        i[a.depth] = a,
        a = a.parent;
    while (a);
    return i
}
function Iv(a, i, r, o) {
    if (a === "/" && r.index)
        return {
            node: r.index,
            skipped: 0
        };
    const c = !Yi(i)
      , f = c && a !== "/"
      , h = i.length - (c ? 1 : 0)
      , g = [{
        node: r,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 1,
        dynamics: 0,
        optionals: 0
    }];
    let y = null
      , p = null
      , b = null;
    for (; g.length; ) {
        const S = g.pop()
          , {node: E, index: _, skipped: w, depth: O, statics: C, dynamics: M, optionals: k} = S;
        let {extract: Q, rawParams: q, parsedParams: $} = S;
        if (E.skipOnParamError) {
            if (!rc(a, i, S))
                continue;
            q = S.rawParams,
            Q = S.extract,
            $ = S.parsedParams
        }
        o && E.route && E.kind !== Oa && Di(p, S) && (p = S);
        const W = _ === h;
        if (W && (E.route && !f && Di(b, S) && (b = S),
        !E.optional && !E.wildcard && !E.index && !E.pathless))
            continue;
        const X = W ? void 0 : i[_];
        let K;
        if (W && E.index) {
            const J = {
                node: E.index,
                index: _,
                skipped: w,
                depth: O + 1,
                statics: C,
                dynamics: M,
                optionals: k,
                extract: Q,
                rawParams: q,
                parsedParams: $
            };
            let rt = !0;
            if (E.index.skipOnParamError && (rc(a, i, J) || (rt = !1)),
            rt) {
                if (C === h && !M && !k && !w)
                    return J;
                Di(b, J) && (b = J)
            }
        }
        if (E.wildcard && Di(y, S))
            for (const J of E.wildcard) {
                const {prefix: rt, suffix: et} = J;
                if (rt && (W || !(J.caseSensitive ? X : K ??= X.toLowerCase()).startsWith(rt)))
                    continue;
                if (et) {
                    if (W)
                        continue;
                    const yt = i.slice(_).join("/").slice(-et.length);
                    if ((J.caseSensitive ? yt : yt.toLowerCase()) !== et)
                        continue
                }
                const dt = {
                    node: J,
                    index: h,
                    skipped: w,
                    depth: O,
                    statics: C,
                    dynamics: M,
                    optionals: k,
                    extract: Q,
                    rawParams: q,
                    parsedParams: $
                };
                if (!(J.skipOnParamError && !rc(a, i, dt))) {
                    y = dt;
                    break
                }
            }
        if (E.optional) {
            const J = w | 1 << O
              , rt = O + 1;
            for (let et = E.optional.length - 1; et >= 0; et--) {
                const dt = E.optional[et];
                g.push({
                    node: dt,
                    index: _,
                    skipped: J,
                    depth: rt,
                    statics: C,
                    dynamics: M,
                    optionals: k,
                    extract: Q,
                    rawParams: q,
                    parsedParams: $
                })
            }
            if (!W)
                for (let et = E.optional.length - 1; et >= 0; et--) {
                    const dt = E.optional[et]
                      , {prefix: yt, suffix: Gt} = dt;
                    if (yt || Gt) {
                        const jt = dt.caseSensitive ? X : K ??= X.toLowerCase();
                        if (yt && !jt.startsWith(yt) || Gt && !jt.endsWith(Gt))
                            continue
                    }
                    g.push({
                        node: dt,
                        index: _ + 1,
                        skipped: w,
                        depth: rt,
                        statics: C,
                        dynamics: M,
                        optionals: k + 1,
                        extract: Q,
                        rawParams: q,
                        parsedParams: $
                    })
                }
        }
        if (!W && E.dynamic && X)
            for (let J = E.dynamic.length - 1; J >= 0; J--) {
                const rt = E.dynamic[J]
                  , {prefix: et, suffix: dt} = rt;
                if (et || dt) {
                    const yt = rt.caseSensitive ? X : K ??= X.toLowerCase();
                    if (et && !yt.startsWith(et) || dt && !yt.endsWith(dt))
                        continue
                }
                g.push({
                    node: rt,
                    index: _ + 1,
                    skipped: w,
                    depth: O + 1,
                    statics: C,
                    dynamics: M + 1,
                    optionals: k,
                    extract: Q,
                    rawParams: q,
                    parsedParams: $
                })
            }
        if (!W && E.staticInsensitive) {
            const J = E.staticInsensitive.get(K ??= X.toLowerCase());
            J && g.push({
                node: J,
                index: _ + 1,
                skipped: w,
                depth: O + 1,
                statics: C + 1,
                dynamics: M,
                optionals: k,
                extract: Q,
                rawParams: q,
                parsedParams: $
            })
        }
        if (!W && E.static) {
            const J = E.static.get(X);
            J && g.push({
                node: J,
                index: _ + 1,
                skipped: w,
                depth: O + 1,
                statics: C + 1,
                dynamics: M,
                optionals: k,
                extract: Q,
                rawParams: q,
                parsedParams: $
            })
        }
        if (E.pathless) {
            const J = O + 1;
            for (let rt = E.pathless.length - 1; rt >= 0; rt--) {
                const et = E.pathless[rt];
                g.push({
                    node: et,
                    index: _,
                    skipped: w,
                    depth: J,
                    statics: C,
                    dynamics: M,
                    optionals: k,
                    extract: Q,
                    rawParams: q,
                    parsedParams: $
                })
            }
        }
    }
    if (b && y)
        return Di(y, b) ? b : y;
    if (b)
        return b;
    if (y)
        return y;
    if (o && p) {
        let S = p.index;
        for (let _ = 0; _ < p.index; _++)
            S += i[_].length;
        const E = S === a.length ? "/" : a.slice(S);
        return p.rawParams ??= Object.create(null),
        p.rawParams["**"] = decodeURIComponent(E),
        p
    }
    return null
}
function rc(a, i, r) {
    try {
        const [o,c] = Qp(a, i, r);
        r.rawParams = o,
        r.extract = c;
        const f = r.node.parse(o);
        return r.parsedParams = Object.assign(Object.create(null), r.parsedParams, f),
        !0
    } catch {
        return null
    }
}
function Di(a, i) {
    return a ? i.statics > a.statics || i.statics === a.statics && (i.dynamics > a.dynamics || i.dynamics === a.dynamics && (i.optionals > a.optionals || i.optionals === a.optionals && ((i.node.kind === Oa) > (a.node.kind === Oa) || i.node.kind === Oa == (a.node.kind === Oa) && i.depth > a.depth))) : !0
}
function vs(a) {
    return Bc(a.filter(i => i !== void 0).join("/"))
}
function Bc(a) {
    return a.replace(/\/{2,}/g, "/")
}
function Zp(a) {
    return a === "/" ? a : a.replace(/^\/{1,}/, "")
}
function ra(a) {
    const i = a.length;
    return i > 1 && a[i - 1] === "/" ? a.replace(/\/{1,}$/, "") : a
}
function Kp(a) {
    return ra(Zp(a))
}
function Ts(a, i) {
    return a?.endsWith("/") && a !== "/" && a !== `${i}/` ? a.slice(0, -1) : a
}
function $v(a, i, r) {
    return Ts(a, r) === Ts(i, r)
}
function t1({base: a, to: i, trailingSlash: r="never", cache: o}) {
    const c = i.startsWith("/")
      , f = !c && i === ".";
    let h;
    if (o) {
        h = c ? i : f ? a : a + "\0" + i;
        const S = o.get(h);
        if (S)
            return S
    }
    let g;
    if (f)
        g = a.split("/");
    else if (c)
        g = i.split("/");
    else {
        for (g = a.split("/"); g.length > 1 && Yi(g) === ""; )
            g.pop();
        const S = i.split("/");
        for (let E = 0, _ = S.length; E < _; E++) {
            const w = S[E];
            w === "" ? E ? E === _ - 1 && g.push(w) : g = [w] : w === ".." ? g.pop() : w === "." || g.push(w)
        }
    }
    g.length > 1 && (Yi(g) === "" ? r === "never" && g.pop() : r === "always" && g.push(""));
    let y, p = "";
    for (let S = 0; S < g.length; S++) {
        S > 0 && (p += "/");
        const E = g[S];
        if (!E)
            continue;
        y = Oc(E, 0, y);
        const _ = y[0];
        if (_ === 0) {
            p += E;
            continue
        }
        const w = y[5]
          , O = E.substring(0, y[1])
          , C = E.substring(y[4], w)
          , M = E.substring(y[2], y[3]);
        _ === 1 ? p += O || C ? `${O}{$${M}}${C}` : `$${M}` : _ === 2 ? p += O || C ? `${O}{$}${C}` : "$" : p += `${O}{-$${M}}${C}`
    }
    p = Bc(p);
    const b = p || "/";
    return h && o && o.set(h, b),
    b
}
function e1(a) {
    const i = new Map(a.map(c => [encodeURIComponent(c), c]))
      , r = Array.from(i.keys()).map(c => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
      , o = new RegExp(r,"g");
    return c => c.replace(o, f => i.get(f) ?? f)
}
function sc(a, i, r) {
    const o = i[a];
    return typeof o != "string" ? o : a === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(o) ? o : o.split("/").map(c => np(c, r)).join("/") : np(o, r)
}
function ep({path: a, params: i, decoder: r, ...o}) {
    let c = !1;
    const f = Object.create(null);
    if (!a || a === "/")
        return {
            interpolatedPath: "/",
            usedParams: f,
            isMissingParams: c
        };
    if (!a.includes("$"))
        return {
            interpolatedPath: a,
            usedParams: f,
            isMissingParams: c
        };
    const h = a.length;
    let g = 0, y, p = "";
    for (; g < h; ) {
        const b = g;
        y = Oc(a, b, y);
        const S = y[5];
        if (g = S + 1,
        b === S)
            continue;
        const E = y[0];
        if (E === 0) {
            p += "/" + a.substring(b, S);
            continue
        }
        if (E === 2) {
            const _ = i._splat;
            f._splat = _,
            f["*"] = _;
            const w = a.substring(b, y[1])
              , O = a.substring(y[4], S);
            if (!_) {
                c = !0,
                (w || O) && (p += "/" + w + O);
                continue
            }
            const C = sc("_splat", i, r);
            p += "/" + w + C + O;
            continue
        }
        if (E === 1) {
            const _ = a.substring(y[2], y[3]);
            !c && !(_ in i) && (c = !0),
            f[_] = i[_];
            const w = a.substring(b, y[1])
              , O = a.substring(y[4], S)
              , C = sc(_, i, r) ?? "undefined";
            p += "/" + w + C + O;
            continue
        }
        if (E === 3) {
            const _ = a.substring(y[2], y[3])
              , w = i[_];
            if (w == null)
                continue;
            f[_] = w;
            const O = a.substring(b, y[1])
              , C = a.substring(y[4], S)
              , M = sc(_, i, r) ?? "";
            p += "/" + O + M + C;
            continue
        }
    }
    return a.endsWith("/") && (p += "/"),
    {
        usedParams: f,
        interpolatedPath: p || "/",
        isMissingParams: c
    }
}
function np(a, i) {
    const r = encodeURIComponent(a);
    return i?.(r) ?? r
}
function ne(a) {
    return a?.isNotFound === !0
}
function n1() {
    try {
        return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0
    } catch {
        return
    }
}
var a1 = "tsr-scroll-restoration-v1_3";
function l1() {
    const a = n1();
    if (!a)
        return null;
    let i = {};
    try {
        const o = JSON.parse(a.getItem("tsr-scroll-restoration-v1_3") || "{}");
        Dl(o) && (i = o)
    } catch {}
    return {
        get state() {
            return i
        },
        set: o => {
            i = aa(o, i) || i
        }
        ,
        persist: () => {
            try {
                a.setItem(a1, JSON.stringify(i))
            } catch {}
        }
    }
}
var ap = l1()
  , i1 = a => a.state.__TSR_key || a.href;
function r1(a) {
    const i = [];
    let r;
    for (; r = a.parentNode; )
        i.push(`${a.tagName}:nth-child(${Array.prototype.indexOf.call(r.children, a) + 1})`),
        a = r;
    return `${i.reverse().join(" > ")}`.toLowerCase()
}
var hs = !1
  , Bi = "window"
  , lp = "data-scroll-restoration-id";
function s1(a, i) {
    if (!ap)
        return;
    const r = ap;
    if ((a.options.scrollRestoration ?? !1) && (a.isScrollRestoring = !0),
    a.isScrollRestorationSetup || !r)
        return;
    a.isScrollRestorationSetup = !0,
    hs = !1;
    const o = a.options.getScrollRestorationKey || i1
      , c = new Map;
    window.history.scrollRestoration = "manual";
    const f = g => {
        if (!(hs || !a.isScrollRestoring))
            if (g.target === document || g.target === window)
                c.set(Bi, {
                    scrollX: window.scrollX || 0,
                    scrollY: window.scrollY || 0
                });
            else {
                const y = g.target;
                c.set(y, {
                    scrollX: y.scrollLeft || 0,
                    scrollY: y.scrollTop || 0
                })
            }
    }
      , h = g => {
        if (!a.isScrollRestoring || !g || c.size === 0 || !r)
            return;
        const y = r.state[g] ||= {};
        for (const [p,b] of c) {
            let S;
            if (p === Bi)
                S = Bi;
            else if (p.isConnected) {
                const E = p.getAttribute(lp);
                S = E ? `[${lp}="${E}"]` : r1(p)
            }
            S && (y[S] = b)
        }
    }
    ;
    document.addEventListener("scroll", f, !0),
    a.subscribe("onBeforeLoad", g => {
        h(g.fromLocation ? o(g.fromLocation) : void 0),
        c.clear()
    }
    ),
    window.addEventListener("pagehide", () => {
        h(o(a.stores.resolvedLocation.get() ?? a.stores.location.get())),
        r.persist()
    }
    ),
    a.subscribe("onRendered", g => {
        const y = o(g.toLocation)
          , p = a.options.scrollRestorationBehavior
          , b = a.options.scrollToTopSelectors;
        if (c.clear(),
        !a.resetNextScroll) {
            a.resetNextScroll = !0;
            return
        }
        if (!(typeof a.options.scrollRestoration == "function" && !a.options.scrollRestoration({
            location: a.latestLocation
        }))) {
            hs = !0;
            try {
                const S = a.isScrollRestoring ? r.state[y] : void 0;
                let E = !1;
                if (S)
                    for (const _ in S) {
                        const w = S[_];
                        if (!Dl(w))
                            continue;
                        const {scrollX: O, scrollY: C} = w;
                        if (!(!Number.isFinite(O) || !Number.isFinite(C))) {
                            if (_ === Bi)
                                window.scrollTo({
                                    top: C,
                                    left: O,
                                    behavior: p
                                }),
                                E = !0;
                            else if (_) {
                                let M;
                                try {
                                    M = document.querySelector(_)
                                } catch {
                                    continue
                                }
                                M && (M.scrollLeft = O,
                                M.scrollTop = C,
                                E = !0)
                            }
                        }
                    }
                if (!E) {
                    const _ = a.history.location.hash.slice(1);
                    if (_) {
                        const w = window.history.state?.__hashScrollIntoViewOptions ?? !0;
                        if (w) {
                            const O = document.getElementById(_);
                            O && O.scrollIntoView(w)
                        }
                    } else {
                        const w = {
                            top: 0,
                            left: 0,
                            behavior: p
                        };
                        if (window.scrollTo(w),
                        b)
                            for (const O of b) {
                                if (O === Bi)
                                    continue;
                                const C = typeof O == "function" ? O() : document.querySelector(O);
                                C && C.scrollTo(w)
                            }
                    }
                }
            } finally {
                hs = !1
            }
            a.isScrollRestoring && r.set(S => (S[y] ||= {},
            S))
        }
    }
    )
}
function Fp(a, i=String) {
    const r = new URLSearchParams;
    for (const o in a) {
        const c = a[o];
        c !== void 0 && r.set(o, i(c))
    }
    return r.toString()
}
function oc(a) {
    return a ? a === "false" ? !1 : a === "true" ? !0 : +a * 0 === 0 && +a + "" === a ? +a : a : ""
}
function o1(a) {
    const i = new URLSearchParams(a)
      , r = Object.create(null);
    for (const [o,c] of i.entries()) {
        const f = r[o];
        f == null ? r[o] = oc(c) : Array.isArray(f) ? f.push(oc(c)) : r[o] = [f, oc(c)]
    }
    return r
}
var u1 = f1(JSON.parse)
  , c1 = d1(JSON.stringify, JSON.parse);
function f1(a) {
    return i => {
        i[0] === "?" && (i = i.substring(1));
        const r = o1(i);
        for (const o in r) {
            const c = r[o];
            if (typeof c == "string")
                try {
                    r[o] = a(c)
                } catch {}
        }
        return r
    }
}
function d1(a, i) {
    const r = typeof i == "function";
    function o(c) {
        if (typeof c == "object" && c !== null)
            try {
                return a(c)
            } catch {}
        else if (r && typeof c == "string")
            try {
                return i(c),
                a(c)
            } catch {}
        return c
    }
    return c => {
        const f = Fp(c, o);
        return f ? `?${f}` : ""
    }
}
var La = "__root__";
function Jp(a) {
    if (a.statusCode = a.statusCode || a.code || 307,
    !a._builtLocation && !a.reloadDocument && typeof a.href == "string")
        try {
            new URL(a.href),
            a.reloadDocument = !0
        } catch {}
    const i = new Headers(a.headers);
    a.href && i.get("Location") === null && i.set("Location", a.href);
    const r = new Response(null,{
        status: a.statusCode,
        headers: i
    });
    if (r.options = a,
    a.throw)
        throw r;
    return r
}
function Ee(a) {
    return a instanceof Response && !!a.options
}
function h1(a) {
    if (a !== null && typeof a == "object" && a.isSerializedRedirect)
        return Jp(a)
}
function m1(a) {
    return {
        input: ({url: i}) => {
            for (const r of a)
                i = Ac(r, i);
            return i
        }
        ,
        output: ({url: i}) => {
            for (let r = a.length - 1; r >= 0; r--)
                i = Wp(a[r], i);
            return i
        }
    }
}
function p1(a) {
    const i = Kp(a.basepath)
      , r = `/${i}`
      , o = `${r}/`
      , c = a.caseSensitive ? r : r.toLowerCase()
      , f = a.caseSensitive ? o : o.toLowerCase();
    return {
        input: ({url: h}) => {
            const g = a.caseSensitive ? h.pathname : h.pathname.toLowerCase();
            return g === c ? h.pathname = "/" : g.startsWith(f) && (h.pathname = h.pathname.slice(r.length)),
            h
        }
        ,
        output: ({url: h}) => (h.pathname = vs(["/", i, h.pathname]),
        h)
    }
}
function Ac(a, i) {
    const r = a?.input?.({
        url: i
    });
    if (r) {
        if (typeof r == "string")
            return new URL(r);
        if (r instanceof URL)
            return r
    }
    return i
}
function Wp(a, i) {
    const r = a?.output?.({
        url: i
    });
    if (r) {
        if (typeof r == "string")
            return new URL(r);
        if (r instanceof URL)
            return r
    }
    return i
}
function g1(a, i) {
    const {createMutableStore: r, createReadonlyStore: o, batch: c, init: f} = i
      , h = new Map
      , g = new Map
      , y = new Map
      , p = r(a.status)
      , b = r(a.loadedAt)
      , S = r(a.isLoading)
      , E = r(a.isTransitioning)
      , _ = r(a.location)
      , w = r(a.resolvedLocation)
      , O = r(a.statusCode)
      , C = r(a.redirect)
      , M = r([])
      , k = r([])
      , Q = r([])
      , q = o( () => uc(h, M.get()))
      , $ = o( () => uc(g, k.get()))
      , W = o( () => uc(y, Q.get()))
      , X = o( () => M.get()[0])
      , K = o( () => M.get().some(Z => h.get(Z)?.get().status === "pending"))
      , J = o( () => ({
        locationHref: _.get().href,
        resolvedLocationHref: w.get()?.href,
        status: p.get()
    }))
      , rt = o( () => ({
        status: p.get(),
        loadedAt: b.get(),
        isLoading: S.get(),
        isTransitioning: E.get(),
        matches: q.get(),
        location: _.get(),
        resolvedLocation: w.get(),
        statusCode: O.get(),
        redirect: C.get()
    }))
      , et = ki(64);
    function dt(Z) {
        let it = et.get(Z);
        return it || (it = o( () => {
            const _t = M.get();
            for (const Tt of _t) {
                const j = h.get(Tt);
                if (j && j.routeId === Z)
                    return j.get()
            }
        }
        ),
        et.set(Z, it)),
        it
    }
    const yt = {
        status: p,
        loadedAt: b,
        isLoading: S,
        isTransitioning: E,
        location: _,
        resolvedLocation: w,
        statusCode: O,
        redirect: C,
        matchesId: M,
        pendingIds: k,
        cachedIds: Q,
        matches: q,
        pendingMatches: $,
        cachedMatches: W,
        firstId: X,
        hasPending: K,
        matchRouteDeps: J,
        matchStores: h,
        pendingMatchStores: g,
        cachedMatchStores: y,
        __store: rt,
        getRouteMatchStore: dt,
        setMatches: Gt,
        setPending: jt,
        setCached: U
    };
    Gt(a.matches),
    f?.(yt);
    function Gt(Z) {
        cc(Z, h, M, r, c)
    }
    function jt(Z) {
        cc(Z, g, k, r, c)
    }
    function U(Z) {
        cc(Z, y, Q, r, c)
    }
    return yt
}
function uc(a, i) {
    const r = [];
    for (const o of i) {
        const c = a.get(o);
        c && r.push(c.get())
    }
    return r
}
function cc(a, i, r, o, c) {
    const f = a.map(g => g.id)
      , h = new Set(f);
    c( () => {
        for (const g of i.keys())
            h.has(g) || i.delete(g);
        for (const g of a) {
            const y = i.get(g.id);
            if (!y) {
                const p = o(g);
                p.routeId = g.routeId,
                i.set(g.id, p);
                continue
            }
            y.routeId = g.routeId,
            y.get() !== g && y.set(g)
        }
        Vv(r.get(), f) || r.set(f)
    }
    )
}
var Tc = a => {
    if (!a.rendered)
        return a.rendered = !0,
        a.onReady?.()
}
  , y1 = a => a.stores.matchesId.get().some(i => a.stores.matchStores.get(i)?.get()._forcePending)
  , Os = (a, i) => !!(a.preload && !a.router.stores.matchStores.has(i))
  , Na = (a, i, r=!0) => {
    const o = {
        ...a.router.options.context ?? {}
    }
      , c = r ? i : i - 1;
    for (let f = 0; f <= c; f++) {
        const h = a.matches[f];
        if (!h)
            continue;
        const g = a.router.getMatch(h.id);
        g && Object.assign(o, g.__routeContext, g.__beforeLoadContext)
    }
    return o
}
  , ip = (a, i) => {
    if (!a.matches.length)
        return;
    const r = i.routeId
      , o = a.matches.findIndex(h => h.routeId === a.router.routeTree.id)
      , c = o >= 0 ? o : 0;
    let f = r ? a.matches.findIndex(h => h.routeId === r) : a.firstBadMatchIndex ?? a.matches.length - 1;
    f < 0 && (f = c);
    for (let h = f; h >= 0; h--) {
        const g = a.matches[h];
        if (a.router.looseRoutesById[g.routeId].options.notFoundComponent)
            return h
    }
    return r ? f : c
}
  , ia = (a, i, r) => {
    if (!(!Ee(r) && !ne(r)))
        throw Ee(r) && r.redirectHandled && !r.options.reloadDocument || (i && (i._nonReactive.beforeLoadPromise?.resolve(),
        i._nonReactive.loaderPromise?.resolve(),
        i._nonReactive.beforeLoadPromise = void 0,
        i._nonReactive.loaderPromise = void 0,
        i._nonReactive.error = r,
        a.updateMatch(i.id, o => ({
            ...o,
            status: Ee(r) ? "redirected" : ne(r) ? "notFound" : o.status === "pending" ? "success" : o.status,
            context: Na(a, i.index),
            isFetching: !1,
            error: r
        })),
        ne(r) && !r.routeId && (r.routeId = i.routeId),
        i._nonReactive.loadPromise?.resolve()),
        Ee(r) && (a.rendered = !0,
        r.options._fromLocation = a.location,
        r.redirectHandled = !0,
        r = a.router.resolveRedirect(r))),
        r
}
  , Pp = (a, i) => {
    const r = a.router.getMatch(i);
    return !!(!r || r._nonReactive.dehydrated)
}
  , rp = (a, i, r) => {
    const o = Na(a, r);
    a.updateMatch(i, c => ({
        ...c,
        context: o
    }))
}
  , Li = (a, i, r, o) => {
    const {id: c, routeId: f} = a.matches[i]
      , h = a.router.looseRoutesById[f];
    if (r instanceof Promise)
        throw r;
    r.routerCode = o,
    a.firstBadMatchIndex ??= i,
    ia(a, a.router.getMatch(c), r);
    try {
        h.options.onError?.(r)
    } catch (g) {
        r = g,
        ia(a, a.router.getMatch(c), r)
    }
    a.updateMatch(c, g => (g._nonReactive.beforeLoadPromise?.resolve(),
    g._nonReactive.beforeLoadPromise = void 0,
    g._nonReactive.loadPromise?.resolve(),
    {
        ...g,
        error: r,
        status: "error",
        isFetching: !1,
        updatedAt: Date.now(),
        abortController: new AbortController
    })),
    !a.preload && !Ee(r) && !ne(r) && (a.serialError ??= r)
}
  , Ip = (a, i, r, o) => {
    if (o._nonReactive.pendingTimeout !== void 0)
        return;
    const c = r.options.pendingMs ?? a.router.options.defaultPendingMs;
    if (a.onReady && !Os(a, i) && (r.options.loader || r.options.beforeLoad || t0(r)) && typeof c == "number" && c !== 1 / 0 && (r.options.pendingComponent ?? a.router.options?.defaultPendingComponent)) {
        const f = setTimeout( () => {
            Tc(a)
        }
        , c);
        o._nonReactive.pendingTimeout = f
    }
}
  , v1 = (a, i, r) => {
    const o = a.router.getMatch(i);
    if (!o._nonReactive.beforeLoadPromise && !o._nonReactive.loaderPromise)
        return;
    Ip(a, i, r, o);
    const c = () => {
        const f = a.router.getMatch(i);
        f.preload && (f.status === "redirected" || f.status === "notFound") && ia(a, f, f.error)
    }
    ;
    return o._nonReactive.beforeLoadPromise ? o._nonReactive.beforeLoadPromise.then(c) : c()
}
  , S1 = (a, i, r, o) => {
    const c = a.router.getMatch(i);
    let f = c._nonReactive.loadPromise;
    c._nonReactive.loadPromise = Ua( () => {
        f?.resolve(),
        f = void 0
    }
    );
    const {paramsError: h, searchError: g} = c;
    h && Li(a, r, h, "PARSE_PARAMS"),
    g && Li(a, r, g, "VALIDATE_SEARCH"),
    Ip(a, i, o, c);
    const y = new AbortController;
    let p = !1;
    const b = () => {
        p || (p = !0,
        a.updateMatch(i, q => ({
            ...q,
            isFetching: "beforeLoad",
            fetchCount: q.fetchCount + 1,
            abortController: y
        })))
    }
      , S = () => {
        c._nonReactive.beforeLoadPromise?.resolve(),
        c._nonReactive.beforeLoadPromise = void 0,
        a.updateMatch(i, q => ({
            ...q,
            isFetching: !1
        }))
    }
    ;
    if (!o.options.beforeLoad) {
        a.router.batch( () => {
            b(),
            S()
        }
        );
        return
    }
    c._nonReactive.beforeLoadPromise = Ua();
    const E = {
        ...Na(a, r, !1),
        ...c.__routeContext
    }
      , {search: _, params: w, cause: O} = c
      , C = Os(a, i)
      , M = {
        search: _,
        abortController: y,
        params: w,
        preload: C,
        context: E,
        location: a.location,
        navigate: q => a.router.navigate({
            ...q,
            _fromLocation: a.location
        }),
        buildLocation: a.router.buildLocation,
        cause: C ? "preload" : O,
        matches: a.matches,
        routeId: o.id,
        ...a.router.options.additionalContext
    }
      , k = q => {
        if (q === void 0) {
            a.router.batch( () => {
                b(),
                S()
            }
            );
            return
        }
        (Ee(q) || ne(q)) && (b(),
        Li(a, r, q, "BEFORE_LOAD")),
        a.router.batch( () => {
            b(),
            a.updateMatch(i, $ => ({
                ...$,
                __beforeLoadContext: q
            })),
            S()
        }
        )
    }
    ;
    let Q;
    try {
        if (Q = o.options.beforeLoad(M),
        Vi(Q))
            return b(),
            Q.catch(q => {
                Li(a, r, q, "BEFORE_LOAD")
            }
            ).then(k)
    } catch (q) {
        b(),
        Li(a, r, q, "BEFORE_LOAD")
    }
    k(Q)
}
  , b1 = (a, i) => {
    const {id: r, routeId: o} = a.matches[i]
      , c = a.router.looseRoutesById[o]
      , f = () => g()
      , h = () => S1(a, r, i, c)
      , g = () => {
        if (Pp(a, r))
            return;
        const y = v1(a, r, c);
        return Vi(y) ? y.then(h) : h()
    }
    ;
    return f()
}
  , x1 = (a, i, r) => {
    const o = a.router.getMatch(i);
    if (!o || !r.options.head && !r.options.scripts && !r.options.headers)
        return;
    const c = {
        ssr: a.router.options.ssr,
        matches: a.matches,
        match: o,
        params: o.params,
        loaderData: o.loaderData
    };
    return Promise.all([r.options.head?.(c), r.options.scripts?.(c), r.options.headers?.(c)]).then( ([f,h,g]) => ({
        meta: f?.meta,
        links: f?.links,
        headScripts: f?.scripts,
        headers: g,
        scripts: h,
        styles: f?.styles
    }))
}
  , $p = (a, i, r, o, c) => {
    const f = i[o - 1]
      , {params: h, loaderDeps: g, abortController: y, cause: p} = a.router.getMatch(r)
      , b = Na(a, o)
      , S = Os(a, r);
    return {
        params: h,
        deps: g,
        preload: !!S,
        parentMatchPromise: f,
        abortController: y,
        context: b,
        location: a.location,
        navigate: E => a.router.navigate({
            ...E,
            _fromLocation: a.location
        }),
        cause: S ? "preload" : p,
        route: c,
        ...a.router.options.additionalContext
    }
}
  , sp = async (a, i, r, o, c) => {
    try {
        const f = a.router.getMatch(r);
        try {
            (!(kp ?? a.router.isServer) || f.ssr === !0) && Xi(c);
            const h = c.options.loader
              , g = typeof h == "function" ? h : h?.handler
              , y = g?.($p(a, i, r, o, c))
              , p = !!g && Vi(y);
            if ((p || c._lazyPromise || c._componentsPromise || c.options.head || c.options.scripts || c.options.headers || f._nonReactive.minPendingPromise) && a.updateMatch(r, S => ({
                ...S,
                isFetching: "loader"
            })),
            g) {
                const S = p ? await y : y;
                ia(a, a.router.getMatch(r), S),
                S !== void 0 && a.updateMatch(r, E => ({
                    ...E,
                    loaderData: S
                }))
            }
            c._lazyPromise && await c._lazyPromise;
            const b = f._nonReactive.minPendingPromise;
            b && await b,
            c._componentsPromise && await c._componentsPromise,
            a.updateMatch(r, S => ({
                ...S,
                error: void 0,
                context: Na(a, o),
                status: "success",
                isFetching: !1,
                updatedAt: Date.now()
            }))
        } catch (h) {
            let g = h;
            if (g?.name === "AbortError") {
                if (f.abortController.signal.aborted) {
                    f._nonReactive.loaderPromise?.resolve(),
                    f._nonReactive.loaderPromise = void 0;
                    return
                }
                a.updateMatch(r, p => ({
                    ...p,
                    status: p.status === "pending" ? "success" : p.status,
                    isFetching: !1,
                    context: Na(a, o)
                }));
                return
            }
            const y = f._nonReactive.minPendingPromise;
            y && await y,
            ne(h) && await c.options.notFoundComponent?.preload?.(),
            ia(a, a.router.getMatch(r), h);
            try {
                c.options.onError?.(h)
            } catch (p) {
                g = p,
                ia(a, a.router.getMatch(r), p)
            }
            !Ee(g) && !ne(g) && await Xi(c, ["errorComponent"]),
            a.updateMatch(r, p => ({
                ...p,
                error: g,
                context: Na(a, o),
                status: "error",
                isFetching: !1
            }))
        }
    } catch (f) {
        const h = a.router.getMatch(r);
        h && (h._nonReactive.loaderPromise = void 0),
        ia(a, h, f)
    }
}
  , E1 = async (a, i, r) => {
    async function o(_, w, O, C, M) {
        const k = Date.now() - w.updatedAt
          , Q = _ ? M.options.preloadStaleTime ?? a.router.options.defaultPreloadStaleTime ?? 3e4 : M.options.staleTime ?? a.router.options.defaultStaleTime ?? 0
          , q = M.options.shouldReload
          , $ = typeof q == "function" ? q($p(a, i, c, r, M)) : q
          , {status: W, invalid: X} = C
          , K = k >= Q && (!!a.forceStaleReload || C.cause === "enter" || O !== void 0 && O !== C.id);
        h = W === "success" && (X || ($ ?? K)),
        _ && M.options.preload === !1 || (h && !a.sync && b ? (g = !0,
        (async () => {
            try {
                await sp(a, i, c, r, M);
                const J = a.router.getMatch(c);
                J._nonReactive.loaderPromise?.resolve(),
                J._nonReactive.loadPromise?.resolve(),
                J._nonReactive.loaderPromise = void 0,
                J._nonReactive.loadPromise = void 0
            } catch (J) {
                Ee(J) && await a.router.navigate(J.options)
            }
        }
        )()) : W !== "success" || h ? await sp(a, i, c, r, M) : rp(a, c, r))
    }
    const {id: c, routeId: f} = a.matches[r];
    let h = !1
      , g = !1;
    const y = a.router.looseRoutesById[f]
      , p = y.options.loader
      , b = ((typeof p == "function" ? void 0 : p?.staleReloadMode) ?? a.router.options.defaultStaleReloadMode) !== "blocking";
    if (Pp(a, c)) {
        if (!a.router.getMatch(c))
            return a.matches[r];
        rp(a, c, r)
    } else {
        const _ = a.router.getMatch(c)
          , w = a.router.stores.matchesId.get()[r]
          , O = (w && a.router.stores.matchStores.get(w) || null)?.routeId === f ? w : a.router.stores.matches.get().find(M => M.routeId === f)?.id
          , C = Os(a, c);
        if (_._nonReactive.loaderPromise) {
            if (_.status === "success" && !a.sync && !_.preload && b)
                return _;
            await _._nonReactive.loaderPromise;
            const M = a.router.getMatch(c)
              , k = M._nonReactive.error || M.error;
            k && ia(a, M, k),
            M.status === "pending" && await o(C, _, O, M, y)
        } else {
            const M = C && !a.router.stores.matchStores.has(c)
              , k = a.router.getMatch(c);
            k._nonReactive.loaderPromise = Ua(),
            M !== k.preload && a.updateMatch(c, Q => ({
                ...Q,
                preload: M
            })),
            await o(C, _, O, k, y)
        }
    }
    const S = a.router.getMatch(c);
    g || (S._nonReactive.loaderPromise?.resolve(),
    S._nonReactive.loadPromise?.resolve(),
    S._nonReactive.loadPromise = void 0),
    clearTimeout(S._nonReactive.pendingTimeout),
    S._nonReactive.pendingTimeout = void 0,
    g || (S._nonReactive.loaderPromise = void 0),
    S._nonReactive.dehydrated = void 0;
    const E = g ? S.isFetching : !1;
    return E !== S.isFetching || S.invalid !== !1 ? (a.updateMatch(c, _ => ({
        ..._,
        isFetching: E,
        invalid: !1
    })),
    a.router.getMatch(c)) : S
}
;
async function op(a) {
    const i = a
      , r = [];
    y1(i.router) && Tc(i);
    let o;
    for (let E = 0; E < i.matches.length; E++) {
        try {
            const _ = b1(i, E);
            Vi(_) && await _
        } catch (_) {
            if (Ee(_))
                throw _;
            if (ne(_))
                o = _;
            else if (!i.preload)
                throw _;
            break
        }
        if (i.serialError || i.firstBadMatchIndex != null)
            break
    }
    const c = i.firstBadMatchIndex ?? i.matches.length
      , f = o && !i.preload ? ip(i, o) : void 0
      , h = o && i.preload ? 0 : f !== void 0 ? Math.min(f + 1, c) : c;
    let g, y;
    for (let E = 0; E < h; E++)
        r.push(E1(i, r, E));
    try {
        await Promise.all(r)
    } catch {
        const E = await Promise.allSettled(r);
        for (const _ of E) {
            if (_.status !== "rejected")
                continue;
            const w = _.reason;
            if (Ee(w))
                throw w;
            ne(w) ? g ??= w : y ??= w
        }
        if (y !== void 0)
            throw y
    }
    const p = g ?? (o && !i.preload ? o : void 0);
    let b = i.firstBadMatchIndex !== void 0 ? i.firstBadMatchIndex : i.matches.length - 1;
    if (!p && o && i.preload)
        return i.matches;
    if (p) {
        const E = ip(i, p);
        E === void 0 && _e();
        const _ = i.matches[E]
          , w = i.router.looseRoutesById[_.routeId]
          , O = i.router.options?.defaultNotFoundComponent;
        !w.options.notFoundComponent && O && (w.options.notFoundComponent = O),
        p.routeId = _.routeId;
        const C = _.routeId === i.router.routeTree.id;
        i.updateMatch(_.id, M => ({
            ...M,
            ...C ? {
                status: "success",
                globalNotFound: !0,
                error: void 0
            } : {
                status: "notFound",
                error: p
            },
            isFetching: !1
        })),
        b = E,
        await Xi(w, ["notFoundComponent"])
    } else if (!i.preload) {
        const E = i.matches[0];
        E.globalNotFound || i.router.getMatch(E.id)?.globalNotFound && i.updateMatch(E.id, _ => ({
            ..._,
            globalNotFound: !1,
            error: void 0
        }))
    }
    if (i.serialError && i.firstBadMatchIndex !== void 0) {
        const E = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
        await Xi(E, ["errorComponent"])
    }
    for (let E = 0; E <= b; E++) {
        const {id: _, routeId: w} = i.matches[E]
          , O = i.router.looseRoutesById[w];
        try {
            const C = x1(i, _, O);
            if (C) {
                const M = await C;
                i.updateMatch(_, k => ({
                    ...k,
                    ...M
                }))
            }
        } catch (C) {
            console.error(`Error executing head for route ${w}:`, C)
        }
    }
    const S = Tc(i);
    if (Vi(S) && await S,
    p)
        throw p;
    if (i.serialError && !i.preload && !i.onReady)
        throw i.serialError;
    return i.matches
}
function up(a, i) {
    const r = i.map(o => a.options[o]?.preload?.()).filter(Boolean);
    if (r.length !== 0)
        return Promise.all(r)
}
function Xi(a, i=Ss) {
    !a._lazyLoaded && a._lazyPromise === void 0 && (a.lazyFn ? a._lazyPromise = a.lazyFn().then(o => {
        const {id: c, ...f} = o.options;
        Object.assign(a.options, f),
        a._lazyLoaded = !0,
        a._lazyPromise = void 0
    }
    ) : a._lazyLoaded = !0);
    const r = () => a._componentsLoaded ? void 0 : i === Ss ? ( () => {
        if (a._componentsPromise === void 0) {
            const o = up(a, Ss);
            o ? a._componentsPromise = o.then( () => {
                a._componentsLoaded = !0,
                a._componentsPromise = void 0
            }
            ) : a._componentsLoaded = !0
        }
        return a._componentsPromise
    }
    )() : up(a, i);
    return a._lazyPromise ? a._lazyPromise.then(r) : r()
}
function t0(a) {
    for (const i of Ss)
        if (a.options[i]?.preload)
            return !0;
    return !1
}
var Ss = ["component", "errorComponent", "pendingComponent", "notFoundComponent"]
  , sa = "__TSR_index"
  , cp = "popstate"
  , fp = "beforeunload";
function _1(a) {
    let i = a.getLocation();
    const r = new Set
      , o = h => {
        i = a.getLocation(),
        r.forEach(g => g({
            location: i,
            action: h
        }))
    }
      , c = h => {
        a.notifyOnIndexChange ?? !0 ? o(h) : i = a.getLocation()
    }
      , f = async ({task: h, navigateOpts: g, ...y}) => {
        if (g?.ignoreBlocker ?? !1) {
            h();
            return
        }
        const p = a.getBlockers?.() ?? []
          , b = y.type === "PUSH" || y.type === "REPLACE";
        if (typeof document < "u" && p.length && b)
            for (const S of p) {
                const E = Cs(y.path, y.state);
                if (await S.blockerFn({
                    currentLocation: i,
                    nextLocation: E,
                    action: y.type
                })) {
                    a.onBlocked?.();
                    return
                }
            }
        h()
    }
    ;
    return {
        get location() {
            return i
        },
        get length() {
            return a.getLength()
        },
        subscribers: r,
        subscribe: h => (r.add(h),
        () => {
            r.delete(h)
        }
        ),
        push: (h, g, y) => {
            const p = i.state[sa];
            g = dp(p + 1, g),
            f({
                task: () => {
                    a.pushState(h, g),
                    o({
                        type: "PUSH"
                    })
                }
                ,
                navigateOpts: y,
                type: "PUSH",
                path: h,
                state: g
            })
        }
        ,
        replace: (h, g, y) => {
            const p = i.state[sa];
            g = dp(p, g),
            f({
                task: () => {
                    a.replaceState(h, g),
                    o({
                        type: "REPLACE"
                    })
                }
                ,
                navigateOpts: y,
                type: "REPLACE",
                path: h,
                state: g
            })
        }
        ,
        go: (h, g) => {
            f({
                task: () => {
                    a.go(h),
                    c({
                        type: "GO",
                        index: h
                    })
                }
                ,
                navigateOpts: g,
                type: "GO"
            })
        }
        ,
        back: h => {
            f({
                task: () => {
                    a.back(h?.ignoreBlocker ?? !1),
                    c({
                        type: "BACK"
                    })
                }
                ,
                navigateOpts: h,
                type: "BACK"
            })
        }
        ,
        forward: h => {
            f({
                task: () => {
                    a.forward(h?.ignoreBlocker ?? !1),
                    c({
                        type: "FORWARD"
                    })
                }
                ,
                navigateOpts: h,
                type: "FORWARD"
            })
        }
        ,
        canGoBack: () => i.state[sa] !== 0,
        createHref: h => a.createHref(h),
        block: h => {
            if (!a.setBlockers)
                return () => {}
                ;
            const g = a.getBlockers?.() ?? [];
            return a.setBlockers([...g, h]),
            () => {
                const y = a.getBlockers?.() ?? [];
                a.setBlockers?.(y.filter(p => p !== h))
            }
        }
        ,
        flush: () => a.flush?.(),
        destroy: () => a.destroy?.(),
        notify: o
    }
}
function dp(a, i) {
    i || (i = {});
    const r = Lc();
    return {
        ...i,
        key: r,
        __TSR_key: r,
        [sa]: a
    }
}
function A1(a) {
    const i = typeof document < "u" ? window : void 0
      , r = i.history.pushState
      , o = i.history.replaceState;
    let c = [];
    const f = () => c
      , h = K => c = K
      , g = (K => K)
      , y = ( () => Cs(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state));
    if (!i.history.state?.__TSR_key && !i.history.state?.key) {
        const K = Lc();
        i.history.replaceState({
            [sa]: 0,
            key: K,
            __TSR_key: K
        }, "")
    }
    let p = y(), b, S = !1, E = !1, _ = !1, w = !1;
    const O = () => p;
    let C, M;
    const k = () => {
        C && (X._ignoreSubscribers = !0,
        (C.isPush ? i.history.pushState : i.history.replaceState)(C.state, "", C.href),
        X._ignoreSubscribers = !1,
        C = void 0,
        M = void 0,
        b = void 0)
    }
      , Q = (K, J, rt) => {
        const et = g(J);
        M || (b = p),
        p = Cs(J, rt),
        C = {
            href: et,
            state: rt,
            isPush: C?.isPush || K === "push"
        },
        M || (M = Promise.resolve().then( () => k()))
    }
      , q = K => {
        p = y(),
        X.notify({
            type: K
        })
    }
      , $ = async () => {
        if (E) {
            E = !1;
            return
        }
        const K = y()
          , J = K.state[sa] - p.state[sa]
          , rt = J === 1
          , et = J === -1
          , dt = !rt && !et || S;
        S = !1;
        const yt = dt ? "GO" : et ? "BACK" : "FORWARD"
          , Gt = dt ? {
            type: "GO",
            index: J
        } : {
            type: et ? "BACK" : "FORWARD"
        };
        if (_)
            _ = !1;
        else {
            const jt = f();
            if (typeof document < "u" && jt.length) {
                for (const U of jt)
                    if (await U.blockerFn({
                        currentLocation: p,
                        nextLocation: K,
                        action: yt
                    })) {
                        E = !0,
                        i.history.go(1),
                        X.notify(Gt);
                        return
                    }
            }
        }
        p = y(),
        X.notify(Gt)
    }
      , W = K => {
        if (w) {
            w = !1;
            return
        }
        let J = !1;
        const rt = f();
        if (typeof document < "u" && rt.length)
            for (const et of rt) {
                const dt = et.enableBeforeUnload ?? !0;
                if (dt === !0) {
                    J = !0;
                    break
                }
                if (typeof dt == "function" && dt() === !0) {
                    J = !0;
                    break
                }
            }
        if (J)
            return K.preventDefault(),
            K.returnValue = ""
    }
      , X = _1({
        getLocation: O,
        getLength: () => i.history.length,
        pushState: (K, J) => Q("push", K, J),
        replaceState: (K, J) => Q("replace", K, J),
        back: K => (K && (_ = !0),
        w = !0,
        i.history.back()),
        forward: K => {
            K && (_ = !0),
            w = !0,
            i.history.forward()
        }
        ,
        go: K => {
            S = !0,
            i.history.go(K)
        }
        ,
        createHref: K => g(K),
        flush: k,
        destroy: () => {
            i.history.pushState = r,
            i.history.replaceState = o,
            i.removeEventListener(fp, W, {
                capture: !0
            }),
            i.removeEventListener(cp, $)
        }
        ,
        onBlocked: () => {
            b && p !== b && (p = b)
        }
        ,
        getBlockers: f,
        setBlockers: h,
        notifyOnIndexChange: !1
    });
    return i.addEventListener(fp, W, {
        capture: !0
    }),
    i.addEventListener(cp, $),
    i.history.pushState = function(...K) {
        const J = r.apply(i.history, K);
        return X._ignoreSubscribers || q("PUSH"),
        J
    }
    ,
    i.history.replaceState = function(...K) {
        const J = o.apply(i.history, K);
        return X._ignoreSubscribers || q("REPLACE"),
        J
    }
    ,
    X
}
function T1(a) {
    let i = a.replace(/[\x00-\x1f\x7f]/g, "");
    return i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")),
    i
}
function Cs(a, i) {
    const r = T1(a)
      , o = r.indexOf("#")
      , c = r.indexOf("?")
      , f = Lc();
    return {
        href: r,
        pathname: r.substring(0, o > 0 ? c > 0 ? Math.min(o, c) : o : c > 0 ? c : r.length),
        hash: o > -1 ? r.substring(o) : "",
        search: c > -1 ? r.slice(c, o === -1 ? void 0 : o) : "",
        state: i || {
            [sa]: 0,
            key: f,
            __TSR_key: f
        }
    }
}
function Lc() {
    return (Math.random() + 1).toString(36).substring(7)
}
function C1(a) {
    return a instanceof Error ? {
        name: a.name,
        message: a.message
    } : {
        data: a
    }
}
function Ml(a, i) {
    const r = i
      , o = a;
    return {
        fromLocation: r,
        toLocation: o,
        pathChanged: r?.pathname !== o.pathname,
        hrefChanged: r?.href !== o.href,
        hashChanged: r?.hash !== o.hash
    }
}
var R1 = class {
    constructor(a, i) {
        this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`,
        this.resetNextScroll = !0,
        this.shouldViewTransition = void 0,
        this.isViewTransitionTypesSupported = void 0,
        this.subscribers = new Set,
        this.isScrollRestoring = !1,
        this.isScrollRestorationSetup = !1,
        this.startTransition = r => r(),
        this.update = r => {
            const o = this.options
              , c = this.basepath ?? o?.basepath ?? "/"
              , f = this.basepath === void 0
              , h = o?.rewrite;
            if (this.options = {
                ...o,
                ...r
            },
            this.isServer = this.options.isServer ?? typeof document > "u",
            this.protocolAllowlist = new Set(this.options.protocolAllowlist),
            this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = e1(this.options.pathParamsAllowedCharacters)),
            (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = A1()),
            this.origin = this.options.origin,
            this.origin || (window?.origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree) {
                this.routeTree = this.options.routeTree;
                let b;
                this.resolvePathCache = ki(1e3),
                b = this.buildRouteTree(),
                this.setRoutes(b)
            }
            if (!this.stores && this.latestLocation) {
                const b = this.getStoreConfig(this);
                this.batch = b.batch,
                this.stores = g1(w1(this.latestLocation), b),
                s1(this)
            }
            let g = !1;
            const y = this.options.basepath ?? "/"
              , p = this.options.rewrite;
            if (f || c !== y || h !== p) {
                this.basepath = y;
                const b = []
                  , S = Kp(y);
                S && S !== "/" && b.push(p1({
                    basepath: y
                })),
                p && b.push(p),
                this.rewrite = b.length === 0 ? void 0 : b.length === 1 ? b[0] : m1(b),
                this.history && this.updateLatestLocation(),
                g = !0
            }
            g && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" && "CSS"in window && typeof window.CSS?.supports == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"))
        }
        ,
        this.updateLatestLocation = () => {
            this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
        }
        ,
        this.buildRouteTree = () => {
            const r = Jv(this.routeTree, this.options.caseSensitive, (o, c) => {
                o.init({
                    originalIndex: c
                })
            }
            );
            return this.options.routeMasks && Xv(this.options.routeMasks, r.processedTree),
            r
        }
        ,
        this.subscribe = (r, o) => {
            const c = {
                eventType: r,
                fn: o
            };
            return this.subscribers.add(c),
            () => {
                this.subscribers.delete(c)
            }
        }
        ,
        this.emit = r => {
            this.subscribers.forEach(o => {
                o.eventType === r.type && o.fn(r)
            }
            )
        }
        ,
        this.parseLocation = (r, o) => {
            const c = ({pathname: y, search: p, hash: b, href: S, state: E}) => {
                if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(y)) {
                    const M = this.options.parseSearch(p)
                      , k = this.options.stringifySearch(M);
                    return {
                        href: y + k + b,
                        publicHref: y + k + b,
                        pathname: Oi(y).path,
                        external: !1,
                        searchStr: k,
                        search: za(o?.search, M),
                        hash: Oi(b.slice(1)).path,
                        state: la(o?.state, E)
                    }
                }
                const _ = new URL(S,this.origin)
                  , w = Ac(this.rewrite, _)
                  , O = this.options.parseSearch(w.search)
                  , C = this.options.stringifySearch(O);
                return w.search = C,
                {
                    href: w.href.replace(w.origin, ""),
                    publicHref: S,
                    pathname: Oi(w.pathname).path,
                    external: !!this.rewrite && w.origin !== this.origin,
                    searchStr: C,
                    search: za(o?.search, O),
                    hash: Oi(w.hash.slice(1)).path,
                    state: la(o?.state, E)
                }
            }
              , f = c(r)
              , {__tempLocation: h, __tempKey: g} = f.state;
            if (h && (!g || g === this.tempLocationKey)) {
                const y = c(h);
                return y.state.key = f.state.key,
                y.state.__TSR_key = f.state.__TSR_key,
                delete y.state.__tempLocation,
                {
                    ...y,
                    maskedLocation: f
                }
            }
            return f
        }
        ,
        this.resolvePathWithBase = (r, o) => t1({
            base: r,
            to: Bc(o),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache
        }),
        this.matchRoutes = (r, o, c) => typeof r == "string" ? this.matchRoutesInternal({
            pathname: r,
            search: o
        }, c) : this.matchRoutesInternal(r, o),
        this.getMatchedRoutes = r => M1({
            pathname: r,
            routesById: this.routesById,
            processedTree: this.processedTree
        }),
        this.cancelMatch = r => {
            const o = this.getMatch(r);
            o && (o.abortController.abort(),
            clearTimeout(o._nonReactive.pendingTimeout),
            o._nonReactive.pendingTimeout = void 0)
        }
        ,
        this.cancelMatches = () => {
            this.stores.pendingIds.get().forEach(r => {
                this.cancelMatch(r)
            }
            ),
            this.stores.matchesId.get().forEach(r => {
                if (this.stores.pendingMatchStores.has(r))
                    return;
                const o = this.stores.matchStores.get(r)?.get();
                o && (o.status === "pending" || o.isFetching === "loader") && this.cancelMatch(r)
            }
            )
        }
        ,
        this.buildLocation = r => {
            const o = (f={}) => {
                const h = f._fromLocation || this.pendingBuiltLocation || this.latestLocation
                  , g = this.matchRoutesLightweight(h);
                f.from;
                const y = f.unsafeRelative === "path" ? h.pathname : f.from ?? g.fullPath
                  , p = this.resolvePathWithBase(y, ".")
                  , b = g.search
                  , S = Object.assign(Object.create(null), g.params)
                  , E = f.to ? this.resolvePathWithBase(p, `${f.to}`) : this.resolvePathWithBase(p, ".")
                  , _ = f.params === !1 || f.params === null ? Object.create(null) : (f.params ?? !0) === !0 ? S : Object.assign(S, aa(f.params, S))
                  , w = this.getMatchedRoutes(E);
                let O = w.matchedRoutes;
                if ((!w.foundRoute || w.foundRoute.path !== "/" && w.routeParams["**"]) && this.options.notFoundRoute && (O = [...O, this.options.notFoundRoute]),
                Object.keys(_).length > 0)
                    for (const rt of O) {
                        const et = rt.options.params?.stringify ?? rt.options.stringifyParams;
                        if (et)
                            try {
                                Object.assign(_, et(_))
                            } catch {}
                    }
                const C = r.leaveParams ? E : Oi(ep({
                    path: E,
                    params: _,
                    decoder: this.pathParamsDecoder,
                    server: this.isServer
                }).interpolatedPath).path;
                let M = b;
                if (r._includeValidateSearch && this.options.search?.strict) {
                    const rt = {};
                    O.forEach(et => {
                        if (et.options.validateSearch)
                            try {
                                Object.assign(rt, bs(et.options.validateSearch, {
                                    ...rt,
                                    ...M
                                }))
                            } catch {}
                    }
                    ),
                    M = rt
                }
                M = z1({
                    search: M,
                    dest: f,
                    destRoutes: O,
                    _includeValidateSearch: r._includeValidateSearch
                }),
                M = za(b, M);
                const k = this.options.stringifySearch(M)
                  , Q = f.hash === !0 ? h.hash : f.hash ? aa(f.hash, h.hash) : void 0
                  , q = Q ? `#${Q}` : "";
                let $ = f.state === !0 ? h.state : f.state ? aa(f.state, h.state) : {};
                $ = la(h.state, $);
                const W = `${C}${k}${q}`;
                let X, K, J = !1;
                if (this.rewrite) {
                    const rt = new URL(W,this.origin)
                      , et = Wp(this.rewrite, rt);
                    X = rt.href.replace(rt.origin, ""),
                    et.origin !== this.origin ? (K = et.href,
                    J = !0) : K = et.pathname + et.search + et.hash
                } else
                    X = Yv(W),
                    K = X;
                return {
                    publicHref: K,
                    href: X,
                    pathname: C,
                    search: M,
                    searchStr: k,
                    state: $,
                    hash: Q ?? "",
                    external: J,
                    unmaskOnReload: f.unmaskOnReload
                }
            }
              , c = (f={}, h) => {
                const g = o(f);
                let y = h ? o(h) : void 0;
                if (!y) {
                    const p = Object.create(null);
                    if (this.options.routeMasks) {
                        const b = Qv(g.pathname, this.processedTree);
                        if (b) {
                            Object.assign(p, b.rawParams);
                            const {from: S, params: E, ..._} = b.route
                              , w = E === !1 || E === null ? Object.create(null) : (E ?? !0) === !0 ? p : Object.assign(p, aa(E, p));
                            h = {
                                from: r.from,
                                ..._,
                                params: w
                            },
                            y = o(h)
                        }
                    }
                }
                return y && (g.maskedLocation = y),
                g
            }
            ;
            return r.mask ? c(r, {
                from: r.from,
                ...r.mask
            }) : c(r)
        }
        ,
        this.commitLocation = async ({viewTransition: r, ignoreBlocker: o, ...c}) => {
            const f = () => {
                const y = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
                y.forEach(b => {
                    c.state[b] = this.latestLocation.state[b]
                }
                );
                const p = xe(c.state, this.latestLocation.state);
                return y.forEach(b => {
                    delete c.state[b]
                }
                ),
                p
            }
              , h = ra(this.latestLocation.href) === ra(c.href);
            let g = this.commitLocationPromise;
            if (this.commitLocationPromise = Ua( () => {
                g?.resolve(),
                g = void 0
            }
            ),
            h && f())
                this.load();
            else {
                let {maskedLocation: y, hashScrollIntoView: p, ...b} = c;
                y && (b = {
                    ...y,
                    state: {
                        ...y.state,
                        __tempKey: void 0,
                        __tempLocation: {
                            ...b,
                            search: b.searchStr,
                            state: {
                                ...b.state,
                                __tempKey: void 0,
                                __tempLocation: void 0,
                                __TSR_key: void 0,
                                key: void 0
                            }
                        }
                    }
                },
                (b.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (b.state.__tempKey = this.tempLocationKey)),
                b.state.__hashScrollIntoViewOptions = p ?? this.options.defaultHashScrollIntoView ?? !0,
                this.shouldViewTransition = r,
                this.history[c.replace ? "replace" : "push"](b.publicHref, b.state, {
                    ignoreBlocker: o
                })
            }
            return this.resetNextScroll = c.resetScroll ?? !0,
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
        }
        ,
        this.buildAndCommitLocation = ({replace: r, resetScroll: o, hashScrollIntoView: c, viewTransition: f, ignoreBlocker: h, href: g, ...y}={}) => {
            if (g) {
                const S = this.history.location.state.__TSR_index
                  , E = Cs(g, {
                    __TSR_index: r ? S : S + 1
                })
                  , _ = new URL(E.pathname,this.origin);
                y.to = Ac(this.rewrite, _).pathname,
                y.search = this.options.parseSearch(E.search),
                y.hash = E.hash.slice(1)
            }
            const p = this.buildLocation({
                ...y,
                _includeValidateSearch: !0
            });
            this.pendingBuiltLocation = p;
            const b = this.commitLocation({
                ...p,
                viewTransition: f,
                replace: r,
                resetScroll: o,
                hashScrollIntoView: c,
                ignoreBlocker: h
            });
            return Promise.resolve().then( () => {
                this.pendingBuiltLocation === p && (this.pendingBuiltLocation = void 0)
            }
            ),
            b
        }
        ,
        this.navigate = async ({to: r, reloadDocument: o, href: c, publicHref: f, ...h}) => {
            let g = !1;
            if (c)
                try {
                    new URL(`${c}`),
                    g = !0
                } catch {}
            if (g && !o && (o = !0),
            o) {
                if (r !== void 0 || !c) {
                    const p = this.buildLocation({
                        to: r,
                        ...h
                    });
                    c = c ?? p.publicHref,
                    f = f ?? p.publicHref
                }
                const y = !g && f ? f : c;
                if (As(y, this.protocolAllowlist))
                    return Promise.resolve();
                if (!h.ignoreBlocker) {
                    const p = this.history.getBlockers?.() ?? [];
                    for (const b of p)
                        if (b?.blockerFn && await b.blockerFn({
                            currentLocation: this.latestLocation,
                            nextLocation: this.latestLocation,
                            action: "PUSH"
                        }))
                            return Promise.resolve()
                }
                return h.replace ? window.location.replace(y) : window.location.href = y,
                Promise.resolve()
            }
            return this.buildAndCommitLocation({
                ...h,
                href: c,
                to: r,
                _isNavigate: !0
            })
        }
        ,
        this.beforeLoad = () => {
            this.cancelMatches(),
            this.updateLatestLocation();
            const r = this.matchRoutes(this.latestLocation)
              , o = this.stores.cachedMatches.get().filter(c => !r.some(f => f.id === c.id));
            this.batch( () => {
                this.stores.status.set("pending"),
                this.stores.statusCode.set(200),
                this.stores.isLoading.set(!0),
                this.stores.location.set(this.latestLocation),
                this.stores.setPending(r),
                this.stores.setCached(o)
            }
            )
        }
        ,
        this.load = async r => {
            let o, c, f;
            const h = this.stores.resolvedLocation.get() ?? this.stores.location.get();
            for (f = new Promise(y => {
                this.startTransition(async () => {
                    try {
                        this.beforeLoad();
                        const p = this.latestLocation
                          , b = Ml(p, this.stores.resolvedLocation.get());
                        this.stores.redirect.get() || this.emit({
                            type: "onBeforeNavigate",
                            ...b
                        }),
                        this.emit({
                            type: "onBeforeLoad",
                            ...b
                        }),
                        await op({
                            router: this,
                            sync: r?.sync,
                            forceStaleReload: h.href === p.href,
                            matches: this.stores.pendingMatches.get(),
                            location: p,
                            updateMatch: this.updateMatch,
                            onReady: async () => {
                                this.startTransition( () => {
                                    this.startViewTransition(async () => {
                                        let S = null
                                          , E = null
                                          , _ = null
                                          , w = null;
                                        this.batch( () => {
                                            const O = this.stores.pendingMatches.get()
                                              , C = O.length
                                              , M = this.stores.matches.get();
                                            S = C ? M.filter(q => !this.stores.pendingMatchStores.has(q.id)) : null;
                                            const k = new Set;
                                            for (const q of this.stores.pendingMatchStores.values())
                                                q.routeId && k.add(q.routeId);
                                            const Q = new Set;
                                            for (const q of this.stores.matchStores.values())
                                                q.routeId && Q.add(q.routeId);
                                            E = C ? M.filter(q => !k.has(q.routeId)) : null,
                                            _ = C ? O.filter(q => !Q.has(q.routeId)) : null,
                                            w = C ? O.filter(q => Q.has(q.routeId)) : M,
                                            this.stores.isLoading.set(!1),
                                            this.stores.loadedAt.set(Date.now()),
                                            C && (this.stores.setMatches(O),
                                            this.stores.setPending([]),
                                            this.stores.setCached([...this.stores.cachedMatches.get(), ...S.filter(q => q.status !== "error" && q.status !== "notFound" && q.status !== "redirected")]),
                                            this.clearExpiredCache())
                                        }
                                        );
                                        for (const [O,C] of [[E, "onLeave"], [_, "onEnter"], [w, "onStay"]])
                                            if (O)
                                                for (const M of O)
                                                    this.looseRoutesById[M.routeId].options[C]?.(M)
                                    }
                                    )
                                }
                                )
                            }
                        })
                    } catch (p) {
                        Ee(p) ? (o = p,
                        this.navigate({
                            ...o.options,
                            replace: !0,
                            ignoreBlocker: !0
                        })) : ne(p) && (c = p);
                        const b = o ? o.status : c ? 404 : this.stores.matches.get().some(S => S.status === "error") ? 500 : 200;
                        this.batch( () => {
                            this.stores.statusCode.set(b),
                            this.stores.redirect.set(o)
                        }
                        )
                    }
                    this.latestLoadPromise === f && (this.commitLocationPromise?.resolve(),
                    this.latestLoadPromise = void 0,
                    this.commitLocationPromise = void 0),
                    y()
                }
                )
            }
            ),
            this.latestLoadPromise = f,
            await f; this.latestLoadPromise && f !== this.latestLoadPromise; )
                await this.latestLoadPromise;
            let g;
            this.hasNotFoundMatch() ? g = 404 : this.stores.matches.get().some(y => y.status === "error") && (g = 500),
            g !== void 0 && this.stores.statusCode.set(g)
        }
        ,
        this.startViewTransition = r => {
            const o = this.shouldViewTransition ?? this.options.defaultViewTransition;
            if (this.shouldViewTransition = void 0,
            o && typeof document < "u" && "startViewTransition"in document && typeof document.startViewTransition == "function") {
                let c;
                if (typeof o == "object" && this.isViewTransitionTypesSupported) {
                    const f = this.latestLocation
                      , h = this.stores.resolvedLocation.get()
                      , g = typeof o.types == "function" ? o.types(Ml(f, h)) : o.types;
                    if (g === !1) {
                        r();
                        return
                    }
                    c = {
                        update: r,
                        types: g
                    }
                } else
                    c = r;
                document.startViewTransition(c)
            } else
                r()
        }
        ,
        this.updateMatch = (r, o) => {
            this.startTransition( () => {
                const c = this.stores.pendingMatchStores.get(r);
                if (c) {
                    c.set(o);
                    return
                }
                const f = this.stores.matchStores.get(r);
                if (f) {
                    f.set(o);
                    return
                }
                const h = this.stores.cachedMatchStores.get(r);
                if (h) {
                    const g = o(h.get());
                    g.status === "redirected" ? this.stores.cachedMatchStores.delete(r) && this.stores.cachedIds.set(y => y.filter(p => p !== r)) : h.set(g)
                }
            }
            )
        }
        ,
        this.getMatch = r => this.stores.cachedMatchStores.get(r)?.get() ?? this.stores.pendingMatchStores.get(r)?.get() ?? this.stores.matchStores.get(r)?.get(),
        this.invalidate = r => {
            const o = c => r?.filter?.(c) ?? !0 ? {
                ...c,
                invalid: !0,
                ...r?.forcePending || c.status === "error" || c.status === "notFound" ? {
                    status: "pending",
                    error: void 0
                } : void 0
            } : c;
            return this.batch( () => {
                this.stores.setMatches(this.stores.matches.get().map(o)),
                this.stores.setCached(this.stores.cachedMatches.get().map(o)),
                this.stores.setPending(this.stores.pendingMatches.get().map(o))
            }
            ),
            this.shouldViewTransition = !1,
            this.load({
                sync: r?.sync
            })
        }
        ,
        this.getParsedLocationHref = r => r.publicHref || "/",
        this.resolveRedirect = r => {
            const o = r.headers.get("Location");
            if (!r.options.href || r.options._builtLocation) {
                const c = r.options._builtLocation ?? this.buildLocation(r.options)
                  , f = this.getParsedLocationHref(c);
                r.options.href = f,
                r.headers.set("Location", f)
            } else if (o)
                try {
                    const c = new URL(o);
                    if (this.origin && c.origin === this.origin) {
                        const f = c.pathname + c.search + c.hash;
                        r.options.href = f,
                        r.headers.set("Location", f)
                    }
                } catch {}
            if (r.options.href && !r.options._builtLocation && As(r.options.href, this.protocolAllowlist))
                throw new Error("Redirect blocked: unsafe protocol");
            return r.headers.get("Location") || r.headers.set("Location", r.options.href),
            r
        }
        ,
        this.clearCache = r => {
            const o = r?.filter;
            o !== void 0 ? this.stores.setCached(this.stores.cachedMatches.get().filter(c => !o(c))) : this.stores.setCached([])
        }
        ,
        this.clearExpiredCache = () => {
            const r = Date.now()
              , o = c => {
                const f = this.looseRoutesById[c.routeId];
                if (!f.options.loader)
                    return !0;
                const h = (c.preload ? f.options.preloadGcTime ?? this.options.defaultPreloadGcTime : f.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
                return c.status === "error" ? !0 : r - c.updatedAt >= h
            }
            ;
            this.clearCache({
                filter: o
            })
        }
        ,
        this.loadRouteChunk = Xi,
        this.preloadRoute = async r => {
            const o = r._builtLocation ?? this.buildLocation(r);
            let c = this.matchRoutes(o, {
                throwOnError: !0,
                preload: !0,
                dest: r
            });
            const f = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()])
              , h = new Set([...f, ...this.stores.cachedIds.get()])
              , g = c.filter(y => !h.has(y.id));
            if (g.length) {
                const y = this.stores.cachedMatches.get();
                this.stores.setCached([...y, ...g])
            }
            try {
                return c = await op({
                    router: this,
                    matches: c,
                    location: o,
                    preload: !0,
                    updateMatch: (y, p) => {
                        f.has(y) ? c = c.map(b => b.id === y ? p(b) : b) : this.updateMatch(y, p)
                    }
                }),
                c
            } catch (y) {
                if (Ee(y))
                    return y.options.reloadDocument ? void 0 : await this.preloadRoute({
                        ...y.options,
                        _fromLocation: o
                    });
                ne(y) || console.error(y);
                return
            }
        }
        ,
        this.matchRoute = (r, o) => {
            const c = {
                ...r,
                to: r.to ? this.resolvePathWithBase(r.from || "", r.to) : void 0,
                params: r.params || {},
                leaveParams: !0
            }
              , f = this.buildLocation(c);
            if (o?.pending && this.stores.status.get() !== "pending")
                return !1;
            const h = (o?.pending === void 0 ? !this.stores.isLoading.get() : o.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get()
              , g = Zv(f.pathname, o?.caseSensitive ?? !1, o?.fuzzy ?? !1, h.pathname, this.processedTree);
            return !g || r.params && !xe(g.rawParams, r.params, {
                partial: !0
            }) ? !1 : o?.includeSearch ?? !0 ? xe(h.search, f.search, {
                partial: !0
            }) ? g.rawParams : !1 : g.rawParams
        }
        ,
        this.hasNotFoundMatch = () => this.stores.matches.get().some(r => r.status === "notFound" || r.globalNotFound),
        this.getStoreConfig = i,
        this.update({
            defaultPreloadDelay: 50,
            defaultPendingMs: 1e3,
            defaultPendingMinMs: 500,
            context: void 0,
            ...a,
            caseSensitive: a.caseSensitive ?? !1,
            notFoundMode: a.notFoundMode ?? "fuzzy",
            stringifySearch: a.stringifySearch ?? c1,
            parseSearch: a.parseSearch ?? u1,
            protocolAllowlist: a.protocolAllowlist ?? Uv
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this)
    }
    isShell() {
        return !!this.options.isShell
    }
    isPrerendering() {
        return !!this.options.isPrerendering
    }
    get state() {
        return this.stores.__store.get()
    }
    setRoutes({routesById: a, routesByPath: i, processedTree: r}) {
        this.routesById = a,
        this.routesByPath = i,
        this.processedTree = r;
        const o = this.options.notFoundRoute;
        o && (o.init({
            originalIndex: 99999999999
        }),
        this.routesById[o.id] = o)
    }
    get looseRoutesById() {
        return this.routesById
    }
    getParentContext(a) {
        return a?.id ? a.context ?? this.options.context ?? void 0 : this.options.context ?? void 0
    }
    matchRoutesInternal(a, i) {
        const r = this.getMatchedRoutes(a.pathname)
          , {foundRoute: o, routeParams: c, parsedParams: f} = r;
        let {matchedRoutes: h} = r
          , g = !1;
        (o ? o.path !== "/" && c["**"] : ra(a.pathname)) && (this.options.notFoundRoute ? h = [...h, this.options.notFoundRoute] : g = !0);
        const y = g ? D1(this.options.notFoundMode, h) : void 0
          , p = new Array(h.length)
          , b = new Map;
        for (const S of this.stores.matchStores.values())
            S.routeId && b.set(S.routeId, S.get());
        for (let S = 0; S < h.length; S++) {
            const E = h[S]
              , _ = p[S - 1];
            let w, O, C;
            {
                const yt = _?.search ?? a.search
                  , Gt = _?._strictSearch ?? void 0;
                try {
                    const jt = bs(E.options.validateSearch, {
                        ...yt
                    }) ?? void 0;
                    w = {
                        ...yt,
                        ...jt
                    },
                    O = {
                        ...Gt,
                        ...jt
                    },
                    C = void 0
                } catch (jt) {
                    let U = jt;
                    if (jt instanceof Rs || (U = new Rs(jt.message,{
                        cause: jt
                    })),
                    i?.throwOnError)
                        throw U;
                    w = yt,
                    O = {},
                    C = U
                }
            }
            const M = E.options.loaderDeps?.({
                search: w
            }) ?? ""
              , k = M ? JSON.stringify(M) : ""
              , {interpolatedPath: Q, usedParams: q} = ep({
                path: E.fullPath,
                params: c,
                decoder: this.pathParamsDecoder,
                server: this.isServer
            })
              , $ = E.id + Q + k
              , W = this.getMatch($)
              , X = b.get(E.id)
              , K = W?._strictParams ?? q;
            let J;
            if (!W)
                try {
                    hp(E, q, f, K)
                } catch (yt) {
                    if (ne(yt) || Ee(yt) ? J = yt : J = new j1(yt.message,{
                        cause: yt
                    }),
                    i?.throwOnError)
                        throw J
                }
            Object.assign(c, K);
            const rt = X ? "stay" : "enter";
            let et;
            if (W)
                et = {
                    ...W,
                    cause: rt,
                    params: X?.params ?? c,
                    _strictParams: K,
                    search: za(X ? X.search : W.search, w),
                    _strictSearch: O
                };
            else {
                const yt = E.options.loader || E.options.beforeLoad || E.lazyFn || t0(E) ? "pending" : "success";
                et = {
                    id: $,
                    ssr: E.options.ssr,
                    index: S,
                    routeId: E.id,
                    params: X?.params ?? c,
                    _strictParams: K,
                    pathname: Q,
                    updatedAt: Date.now(),
                    search: X ? za(X.search, w) : w,
                    _strictSearch: O,
                    searchError: void 0,
                    status: yt,
                    isFetching: !1,
                    error: void 0,
                    paramsError: J,
                    __routeContext: void 0,
                    _nonReactive: {
                        loadPromise: Ua()
                    },
                    __beforeLoadContext: void 0,
                    context: {},
                    abortController: new AbortController,
                    fetchCount: 0,
                    cause: rt,
                    loaderDeps: X ? la(X.loaderDeps, M) : M,
                    invalid: !1,
                    preload: !1,
                    links: void 0,
                    scripts: void 0,
                    headScripts: void 0,
                    meta: void 0,
                    staticData: E.options.staticData || {},
                    fullPath: E.fullPath
                }
            }
            i?.preload || (et.globalNotFound = y === E.id),
            et.searchError = C;
            const dt = this.getParentContext(_);
            et.context = {
                ...dt,
                ...et.__routeContext,
                ...et.__beforeLoadContext
            },
            p[S] = et
        }
        for (let S = 0; S < p.length; S++) {
            const E = p[S]
              , _ = this.looseRoutesById[E.routeId]
              , w = this.getMatch(E.id)
              , O = b.get(E.routeId);
            if (E.params = O ? za(O.params, c) : c,
            !w) {
                const C = p[S - 1]
                  , M = this.getParentContext(C);
                if (_.options.context) {
                    const k = {
                        deps: E.loaderDeps,
                        params: E.params,
                        context: M ?? {},
                        location: a,
                        navigate: Q => this.navigate({
                            ...Q,
                            _fromLocation: a
                        }),
                        buildLocation: this.buildLocation,
                        cause: E.cause,
                        abortController: E.abortController,
                        preload: !!E.preload,
                        matches: p,
                        routeId: _.id
                    };
                    E.__routeContext = _.options.context(k) ?? void 0
                }
                E.context = {
                    ...M,
                    ...E.__routeContext,
                    ...E.__beforeLoadContext
                }
            }
        }
        return p
    }
    matchRoutesLightweight(a) {
        const {matchedRoutes: i, routeParams: r, parsedParams: o} = this.getMatchedRoutes(a.pathname)
          , c = Yi(i)
          , f = {
            ...a.search
        };
        for (const b of i)
            try {
                Object.assign(f, bs(b.options.validateSearch, f))
            } catch {}
        const h = Yi(this.stores.matchesId.get())
          , g = h && this.stores.matchStores.get(h)?.get()
          , y = g && g.routeId === c.id && g.pathname === a.pathname;
        let p;
        if (y)
            p = g.params;
        else {
            const b = Object.assign(Object.create(null), r);
            for (const S of i)
                try {
                    hp(S, r, o ?? {}, b)
                } catch {}
            p = b
        }
        return {
            matchedRoutes: i,
            fullPath: c.fullPath,
            search: f,
            params: p
        }
    }
}
  , Rs = class extends Error {
}
  , j1 = class extends Error {
}
;
function w1(a) {
    return {
        loadedAt: 0,
        isLoading: !1,
        isTransitioning: !1,
        status: "idle",
        resolvedLocation: void 0,
        location: a,
        matches: [],
        statusCode: 200
    }
}
function bs(a, i) {
    if (a == null)
        return {};
    if ("~standard"in a) {
        const r = a["~standard"].validate(i);
        if (r instanceof Promise)
            throw new Rs("Async validation not supported");
        if (r.issues)
            throw new Rs(JSON.stringify(r.issues, void 0, 2),{
                cause: r
            });
        return r.value
    }
    return "parse"in a ? a.parse(i) : typeof a == "function" ? a(i) : {}
}
function M1({pathname: a, routesById: i, processedTree: r}) {
    const o = Object.create(null)
      , c = ra(a);
    let f, h;
    const g = Kv(c, r, !0);
    return g && (f = g.route,
    Object.assign(o, g.rawParams),
    h = Object.assign(Object.create(null), g.parsedParams)),
    {
        matchedRoutes: g?.branch || [i.__root__],
        routeParams: o,
        foundRoute: f,
        parsedParams: h
    }
}
function z1({search: a, dest: i, destRoutes: r, _includeValidateSearch: o}) {
    return O1(r)(a, i, o ?? !1)
}
function O1(a) {
    const i = {
        dest: null,
        _includeValidateSearch: !1,
        middlewares: []
    };
    for (const c of a) {
        if ("search"in c.options)
            c.options.search?.middlewares && i.middlewares.push(...c.options.search.middlewares);
        else if (c.options.preSearchFilters || c.options.postSearchFilters) {
            const f = ({search: h, next: g}) => {
                let y = h;
                "preSearchFilters"in c.options && c.options.preSearchFilters && (y = c.options.preSearchFilters.reduce( (b, S) => S(b), h));
                const p = g(y);
                return "postSearchFilters"in c.options && c.options.postSearchFilters ? c.options.postSearchFilters.reduce( (b, S) => S(b), p) : p
            }
            ;
            i.middlewares.push(f)
        }
        if (c.options.validateSearch) {
            const f = ({search: h, next: g}) => {
                const y = g(h);
                if (!i._includeValidateSearch)
                    return y;
                try {
                    return {
                        ...y,
                        ...bs(c.options.validateSearch, y) ?? void 0
                    }
                } catch {
                    return y
                }
            }
            ;
            i.middlewares.push(f)
        }
    }
    const r = ({search: c}) => {
        const f = i.dest;
        return f.search ? f.search === !0 ? c : aa(f.search, c) : {}
    }
    ;
    i.middlewares.push(r);
    const o = (c, f, h) => {
        if (c >= h.length)
            return f;
        const g = h[c];
        return g({
            search: f,
            next: p => o(c + 1, p, h)
        })
    }
    ;
    return function(f, h, g) {
        return i.dest = h,
        i._includeValidateSearch = g,
        o(0, f, i.middlewares)
    }
}
function D1(a, i) {
    if (a !== "root")
        for (let r = i.length - 1; r >= 0; r--) {
            const o = i[r];
            if (o.children)
                return o.id
        }
    return La
}
function hp(a, i, r, o) {
    const c = a.options.params?.parse ?? a.options.parseParams;
    if (c)
        if (a.options.skipRouteOnParseError)
            for (const f in i)
                f in r && (o[f] = r[f]);
        else {
            const f = c(o);
            Object.assign(o, f)
        }
}
var tn = Symbol.for("TSR_DEFERRED_PROMISE");
function B1(a, i) {
    const r = a;
    return r[tn] || (r[tn] = {
        status: "pending"
    },
    r.then(o => {
        r[tn].status = "success",
        r[tn].data = o
    }
    ).catch(o => {
        r[tn].status = "error",
        r[tn].error = {
            data: C1(o),
            __isServerError: !0
        }
    }
    )),
    r
}
var L1 = "Error preloading route! ☝️";
function mp(a, i) {
    if (a)
        return typeof a == "string" ? a : a[i]
}
function N1(a) {
    return typeof a == "string" ? {
        href: a,
        crossOrigin: void 0
    } : a
}
var e0 = class {
    get to() {
        return this._to
    }
    get id() {
        return this._id
    }
    get path() {
        return this._path
    }
    get fullPath() {
        return this._fullPath
    }
    constructor(a) {
        if (this.init = i => {
            this.originalIndex = i.originalIndex;
            const r = this.options
              , o = !r?.path && !r?.id;
            this.parentRoute = this.options.getParentRoute?.(),
            o ? this._path = La : this.parentRoute || _e();
            let c = o ? La : r?.path;
            c && c !== "/" && (c = Zp(c));
            const f = r?.id || c;
            let h = o ? La : vs([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f]);
            c === "__root__" && (c = "/"),
            h !== "__root__" && (h = vs(["/", h]));
            const g = h === "__root__" ? "/" : vs([this.parentRoute.fullPath, c]);
            this._path = c,
            this._id = h,
            this._fullPath = g,
            this._to = ra(g)
        }
        ,
        this.addChildren = i => this._addFileChildren(i),
        this._addFileChildren = i => (Array.isArray(i) && (this.children = i),
        typeof i == "object" && i !== null && (this.children = Object.values(i)),
        this),
        this._addFileTypes = () => this,
        this.updateLoader = i => (Object.assign(this.options, i),
        this),
        this.update = i => (Object.assign(this.options, i),
        this),
        this.lazy = i => (this.lazyFn = i,
        this),
        this.redirect = i => Jp({
            from: this.fullPath,
            ...i
        }),
        this.options = a || {},
        this.isRoot = !a?.getParentRoute,
        a?.id && a?.path)
            throw new Error("Route cannot have both an 'id' and a 'path' option.")
    }
}
  , U1 = class extends e0 {
    constructor(a) {
        super(a)
    }
}
;
function H1(a) {
    if (typeof document < "u" && document.querySelector) {
        const i = a.stores.location.get()
          , r = i.state.__hashScrollIntoViewOptions ?? !0;
        if (r && i.hash !== "") {
            const o = document.getElementById(i.hash);
            o && o.scrollIntoView(r)
        }
    }
}
var q1 = (a => (a[a.AggregateError = 1] = "AggregateError",
a[a.ArrowFunction = 2] = "ArrowFunction",
a[a.ErrorPrototypeStack = 4] = "ErrorPrototypeStack",
a[a.ObjectAssign = 8] = "ObjectAssign",
a[a.BigIntTypedArray = 16] = "BigIntTypedArray",
a[a.RegExp = 32] = "RegExp",
a))(q1 || {})
  , An = Symbol.asyncIterator
  , n0 = Symbol.hasInstance
  , zl = Symbol.isConcatSpreadable
  , Tn = Symbol.iterator
  , a0 = Symbol.match
  , l0 = Symbol.matchAll
  , i0 = Symbol.replace
  , r0 = Symbol.search
  , s0 = Symbol.species
  , o0 = Symbol.split
  , u0 = Symbol.toPrimitive
  , Ol = Symbol.toStringTag
  , c0 = Symbol.unscopables
  , f0 = {
    [An]: 0,
    [n0]: 1,
    [zl]: 2,
    [Tn]: 3,
    [a0]: 4,
    [l0]: 5,
    [i0]: 6,
    [r0]: 7,
    [s0]: 8,
    [o0]: 9,
    [u0]: 10,
    [Ol]: 11,
    [c0]: 12
}
  , G1 = {
    0: An,
    1: n0,
    2: zl,
    3: Tn,
    4: a0,
    5: l0,
    6: i0,
    7: r0,
    8: s0,
    9: o0,
    10: u0,
    11: Ol,
    12: c0
}
  , x = void 0
  , Y1 = {
    2: !0,
    3: !1,
    1: x,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN
}
  , V1 = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError"
}
  , k1 = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError
};
function Et(a, i, r, o, c, f, h, g, y, p, b, S) {
    return {
        t: a,
        i,
        s: r,
        c: o,
        m: c,
        p: f,
        e: h,
        a: g,
        f: y,
        b: p,
        o: b,
        l: S
    }
}
function oa(a) {
    return Et(2, x, a, x, x, x, x, x, x, x, x, x)
}
var d0 = oa(2)
  , h0 = oa(3)
  , X1 = oa(1)
  , Q1 = oa(0)
  , Z1 = oa(4)
  , K1 = oa(5)
  , F1 = oa(6)
  , J1 = oa(7);
function W1(a) {
    switch (a) {
    case '"':
        return '\\"';
    case "\\":
        return "\\\\";
    case `
`:
        return "\\n";
    case "\r":
        return "\\r";
    case "\b":
        return "\\b";
    case "	":
        return "\\t";
    case "\f":
        return "\\f";
    case "<":
        return "\\x3C";
    case "\u2028":
        return "\\u2028";
    case "\u2029":
        return "\\u2029";
    default:
        return x
    }
}
function ua(a) {
    let i = "", r = 0, o;
    for (let c = 0, f = a.length; c < f; c++)
        o = W1(a[c]),
        o && (i += a.slice(r, c) + o,
        r = c + 1);
    return r === 0 ? i = a : i += a.slice(r),
    i
}
function P1(a) {
    switch (a) {
    case "\\\\":
        return "\\";
    case '\\"':
        return '"';
    case "\\n":
        return `
`;
    case "\\r":
        return "\r";
    case "\\b":
        return "\b";
    case "\\t":
        return "	";
    case "\\f":
        return "\f";
    case "\\x3C":
        return "<";
    case "\\u2028":
        return "\u2028";
    case "\\u2029":
        return "\u2029";
    default:
        return a
    }
}
function ca(a) {
    return a.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, P1)
}
var ms = "__SEROVAL_REFS__"
  , m0 = new Map
  , wl = new Map;
function p0(a) {
    return m0.has(a)
}
function I1(a) {
    return wl.has(a)
}
function $1(a) {
    if (p0(a))
        return m0.get(a);
    throw new MS(a)
}
function tS(a) {
    if (I1(a))
        return wl.get(a);
    throw new zS(a)
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, ms, {
    value: wl,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < "u" ? Object.defineProperty(window, ms, {
    value: wl,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < "u" ? Object.defineProperty(self, ms, {
    value: wl,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < "u" && Object.defineProperty(global, ms, {
    value: wl,
    configurable: !0,
    writable: !1,
    enumerable: !1
});
function Nc(a) {
    return a instanceof EvalError ? 1 : a instanceof RangeError ? 2 : a instanceof ReferenceError ? 3 : a instanceof SyntaxError ? 4 : a instanceof TypeError ? 5 : a instanceof URIError ? 6 : 0
}
function eS(a) {
    let i = V1[Nc(a)];
    return a.name !== i ? {
        name: a.name
    } : a.constructor.name !== i ? {
        name: a.constructor.name
    } : {}
}
function g0(a, i) {
    let r = eS(a)
      , o = Object.getOwnPropertyNames(a);
    for (let c = 0, f = o.length, h; c < f; c++)
        h = o[c],
        h !== "name" && h !== "message" && (h === "stack" ? i & 4 && (r = r || {},
        r[h] = a[h]) : (r = r || {},
        r[h] = a[h]));
    return r
}
function y0(a) {
    return Object.isFrozen(a) ? 3 : Object.isSealed(a) ? 2 : Object.isExtensible(a) ? 0 : 1
}
function nS(a) {
    switch (a) {
    case Number.POSITIVE_INFINITY:
        return K1;
    case Number.NEGATIVE_INFINITY:
        return F1
    }
    return a !== a ? J1 : Object.is(a, -0) ? Z1 : Et(0, x, a, x, x, x, x, x, x, x, x, x)
}
function v0(a) {
    return Et(1, x, ua(a), x, x, x, x, x, x, x, x, x)
}
function aS(a) {
    return Et(3, x, "" + a, x, x, x, x, x, x, x, x, x)
}
function lS(a) {
    return Et(4, a, x, x, x, x, x, x, x, x, x, x)
}
function iS(a, i) {
    let r = i.valueOf();
    return Et(5, a, r !== r ? "" : i.toISOString(), x, x, x, x, x, x, x, x, x)
}
function rS(a, i) {
    return Et(6, a, x, ua(i.source), i.flags, x, x, x, x, x, x, x)
}
function sS(a, i) {
    return Et(17, a, f0[i], x, x, x, x, x, x, x, x, x)
}
function oS(a, i) {
    return Et(18, a, ua($1(i)), x, x, x, x, x, x, x, x, x)
}
function uS(a, i, r) {
    return Et(25, a, r, ua(i), x, x, x, x, x, x, x, x)
}
function cS(a, i, r) {
    return Et(9, a, x, x, x, x, x, r, x, x, y0(i), x)
}
function fS(a, i) {
    return Et(21, a, x, x, x, x, x, x, i, x, x, x)
}
function dS(a, i, r) {
    return Et(15, a, x, i.constructor.name, x, x, x, x, r, i.byteOffset, x, i.length)
}
function hS(a, i, r) {
    return Et(16, a, x, i.constructor.name, x, x, x, x, r, i.byteOffset, x, i.byteLength)
}
function mS(a, i, r) {
    return Et(20, a, x, x, x, x, x, x, r, i.byteOffset, x, i.byteLength)
}
function pS(a, i, r) {
    return Et(13, a, Nc(i), x, ua(i.message), r, x, x, x, x, x, x)
}
function gS(a, i, r) {
    return Et(14, a, Nc(i), x, ua(i.message), r, x, x, x, x, x, x)
}
function yS(a, i) {
    return Et(7, a, x, x, x, x, x, i, x, x, x, x)
}
function vS(a, i) {
    return Et(28, x, x, x, x, x, x, [a, i], x, x, x, x)
}
function SS(a, i) {
    return Et(30, x, x, x, x, x, x, [a, i], x, x, x, x)
}
function bS(a, i, r) {
    return Et(31, a, x, x, x, x, x, r, i, x, x, x)
}
function xS(a, i) {
    return Et(32, a, x, x, x, x, x, x, i, x, x, x)
}
function ES(a, i) {
    return Et(33, a, x, x, x, x, x, x, i, x, x, x)
}
function _S(a, i) {
    return Et(34, a, x, x, x, x, x, x, i, x, x, x)
}
function AS(a, i, r, o) {
    return Et(35, a, r, x, x, x, x, i, x, x, x, o)
}
var TS = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};
function CS(a) {
    return `Seroval Error (step: ${TS[a]})`
}
var RS = (a, i) => CS(a)
  , S0 = class extends Error {
    constructor(a, i) {
        super(RS(a)),
        this.cause = i
    }
}
  , pp = class extends S0 {
    constructor(a) {
        super("parsing", a)
    }
}
  , jS = class extends S0 {
    constructor(a) {
        super("deserialization", a)
    }
}
;
function Cn(a) {
    return `Seroval Error (specific: ${a})`
}
var Ds = class extends Error {
    constructor(i) {
        super(Cn(1)),
        this.value = i
    }
}
  , b0 = class extends Error {
    constructor(a) {
        super(Cn(2))
    }
}
  , wS = class extends Error {
    constructor(i) {
        super(Cn(3))
    }
}
  , Ki = class extends Error {
    constructor(a) {
        super(Cn(4))
    }
}
  , MS = class extends Error {
    constructor(a) {
        super(Cn(5)),
        this.value = a
    }
}
  , zS = class extends Error {
    constructor(a) {
        super(Cn(6))
    }
}
  , OS = class extends Error {
    constructor(a) {
        super(Cn(7))
    }
}
  , Rn = class extends Error {
    constructor(a) {
        super(Cn(8))
    }
}
  , DS = class extends Error {
    constructor(a) {
        super(Cn(9))
    }
}
  , BS = class {
    constructor(a, i) {
        this.value = a,
        this.replacement = i
    }
}
  , Bs = () => {
    let a = {
        p: 0,
        s: 0,
        f: 0
    };
    return a.p = new Promise( (i, r) => {
        a.s = i,
        a.f = r
    }
    ),
    a
}
  , LS = (a, i) => {
    a.s(i),
    a.p.s = 1,
    a.p.v = i
}
  , NS = (a, i) => {
    a.f(i),
    a.p.s = 2,
    a.p.v = i
}
;
Bs.toString();
LS.toString();
NS.toString();
var US = () => {
    let a = []
      , i = []
      , r = !0
      , o = !1
      , c = 0
      , f = (y, p, b) => {
        for (b = 0; b < c; b++)
            i[b] && i[b][p](y)
    }
      , h = (y, p, b, S) => {
        for (p = 0,
        b = a.length; p < b; p++)
            S = a[p],
            !r && p === b - 1 ? y[o ? "return" : "throw"](S) : y.next(S)
    }
      , g = (y, p) => (r && (p = c++,
    i[p] = y),
    h(y),
    () => {
        r && (i[p] = i[c],
        i[c--] = void 0)
    }
    );
    return {
        __SEROVAL_STREAM__: !0,
        on: y => g(y),
        next: y => {
            r && (a.push(y),
            f(y, "next"))
        }
        ,
        throw: y => {
            r && (a.push(y),
            f(y, "throw"),
            r = !1,
            o = !1,
            i.length = 0)
        }
        ,
        return: y => {
            r && (a.push(y),
            f(y, "return"),
            r = !1,
            o = !0,
            i.length = 0)
        }
    }
}
  , HS = a => i => () => {
    let r = 0
      , o = {
        [a]: () => o,
        next: () => {
            if (r > i.d)
                return {
                    done: !0,
                    value: void 0
                };
            let c = r++
              , f = i.v[c];
            if (c === i.t)
                throw f;
            return {
                done: c === i.d,
                value: f
            }
        }
    };
    return o
}
  , qS = (a, i) => r => () => {
    let o = 0
      , c = -1
      , f = !1
      , h = []
      , g = []
      , y = (b=0, S=g.length) => {
        for (; b < S; b++)
            g[b].s({
                done: !0,
                value: void 0
            })
    }
    ;
    r.on({
        next: b => {
            let S = g.shift();
            S && S.s({
                done: !1,
                value: b
            }),
            h.push(b)
        }
        ,
        throw: b => {
            let S = g.shift();
            S && S.f(b),
            y(),
            c = h.length,
            f = !0,
            h.push(b)
        }
        ,
        return: b => {
            let S = g.shift();
            S && S.s({
                done: !0,
                value: b
            }),
            y(),
            c = h.length,
            h.push(b)
        }
    });
    let p = {
        [a]: () => p,
        next: () => {
            if (c === -1) {
                let E = o++;
                if (E >= h.length) {
                    let _ = i();
                    return g.push(_),
                    _.p
                }
                return {
                    done: !1,
                    value: h[E]
                }
            }
            if (o > c)
                return {
                    done: !0,
                    value: void 0
                };
            let b = o++
              , S = h[b];
            if (b !== c)
                return {
                    done: !1,
                    value: S
                };
            if (f)
                throw S;
            return {
                done: !0,
                value: S
            }
        }
    };
    return p
}
  , x0 = a => {
    let i = atob(a)
      , r = i.length
      , o = new Uint8Array(r);
    for (let c = 0; c < r; c++)
        o[c] = i.charCodeAt(c);
    return o.buffer
}
;
x0.toString();
function GS(a) {
    return "__SEROVAL_SEQUENCE__"in a
}
function E0(a, i, r) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: a,
        t: i,
        d: r
    }
}
function YS(a) {
    let i = []
      , r = -1
      , o = -1
      , c = a[Tn]();
    for (; ; )
        try {
            let f = c.next();
            if (i.push(f.value),
            f.done) {
                o = i.length - 1;
                break
            }
        } catch (f) {
            r = i.length,
            i.push(f)
        }
    return E0(i, r, o)
}
var VS = HS(Tn);
function kS(a) {
    return VS(a)
}
var XS = {}
  , QS = {}
  , ZS = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
};
function KS(a) {
    return "__SEROVAL_STREAM__"in a
}
function Ha() {
    return US()
}
function FS(a) {
    let i = Ha()
      , r = a[An]();
    async function o() {
        try {
            let c = await r.next();
            c.done ? i.return(c.value) : (i.next(c.value),
            await o())
        } catch (c) {
            i.throw(c)
        }
    }
    return o().catch( () => {}
    ),
    i
}
var JS = qS(An, Bs);
function WS(a) {
    return JS(a)
}
async function PS(a) {
    try {
        return [1, await a]
    } catch (i) {
        return [0, i]
    }
}
function IS(a, i) {
    return {
        plugins: i.plugins,
        mode: a,
        marked: new Set,
        features: 63 ^ (i.disabledFeatures || 0),
        refs: i.refs || new Map,
        depthLimit: i.depthLimit || 1e3
    }
}
function xs(a, i) {
    a.marked.add(i)
}
function $S(a, i) {
    let r = a.refs.size;
    return a.refs.set(i, r),
    r
}
function Ls(a, i) {
    let r = a.refs.get(i);
    return r != null ? (xs(a, r),
    {
        type: 1,
        value: lS(r)
    }) : {
        type: 0,
        value: $S(a, i)
    }
}
function Uc(a, i) {
    let r = Ls(a, i);
    return r.type === 1 ? r : p0(i) ? {
        type: 2,
        value: oS(r.value, i)
    } : r
}
function Ba(a, i) {
    let r = Uc(a, i);
    if (r.type !== 0)
        return r.value;
    if (i in f0)
        return sS(r.value, i);
    throw new Ds(i)
}
function Ns(a, i) {
    let r = Ls(a, ZS[i]);
    return r.type === 1 ? r.value : Et(26, r.value, i, x, x, x, x, x, x, x, x, x)
}
function tb(a) {
    let i = Ls(a, XS);
    return i.type === 1 ? i.value : Et(27, i.value, x, x, x, x, x, x, Ba(a, Tn), x, x, x)
}
function eb(a) {
    let i = Ls(a, QS);
    return i.type === 1 ? i.value : Et(29, i.value, x, x, x, x, x, [Ns(a, 1), Ba(a, An)], x, x, x, x)
}
function nb(a, i, r, o) {
    return Et(r ? 11 : 10, a, x, x, x, o, x, x, x, x, y0(i), x)
}
function ab(a, i, r, o) {
    return Et(8, i, x, x, x, x, {
        k: r,
        v: o
    }, x, Ns(a, 0), x, x, x)
}
function lb(a, i, r) {
    let o = new Uint8Array(r)
      , c = "";
    for (let f = 0, h = o.length; f < h; f++)
        c += String.fromCharCode(o[f]);
    return Et(19, i, ua(btoa(c)), x, x, x, x, x, Ns(a, 5), x, x, x)
}
function ib(a, i) {
    return {
        base: IS(a, i),
        child: void 0
    }
}
var rb = class {
    constructor(a, i) {
        this._p = a,
        this.depth = i
    }
    parse(a) {
        return It(this._p, this.depth, a)
    }
}
;
async function sb(a, i, r) {
    let o = [];
    for (let c = 0, f = r.length; c < f; c++)
        c in r ? o[c] = await It(a, i, r[c]) : o[c] = 0;
    return o
}
async function ob(a, i, r, o) {
    return cS(r, o, await sb(a, i, o))
}
async function Hc(a, i, r) {
    let o = Object.entries(r)
      , c = []
      , f = [];
    for (let h = 0, g = o.length; h < g; h++)
        c.push(ua(o[h][0])),
        f.push(await It(a, i, o[h][1]));
    return Tn in r && (c.push(Ba(a.base, Tn)),
    f.push(vS(tb(a.base), await It(a, i, YS(r))))),
    An in r && (c.push(Ba(a.base, An)),
    f.push(SS(eb(a.base), await It(a, i, FS(r))))),
    Ol in r && (c.push(Ba(a.base, Ol)),
    f.push(v0(r[Ol]))),
    zl in r && (c.push(Ba(a.base, zl)),
    f.push(r[zl] ? d0 : h0)),
    {
        k: c,
        v: f
    }
}
async function fc(a, i, r, o, c) {
    return nb(r, o, c, await Hc(a, i, o))
}
async function ub(a, i, r, o) {
    return fS(r, await It(a, i, o.valueOf()))
}
async function cb(a, i, r, o) {
    return dS(r, o, await It(a, i, o.buffer))
}
async function fb(a, i, r, o) {
    return hS(r, o, await It(a, i, o.buffer))
}
async function db(a, i, r, o) {
    return mS(r, o, await It(a, i, o.buffer))
}
async function gp(a, i, r, o) {
    let c = g0(o, a.base.features);
    return pS(r, o, c ? await Hc(a, i, c) : x)
}
async function hb(a, i, r, o) {
    let c = g0(o, a.base.features);
    return gS(r, o, c ? await Hc(a, i, c) : x)
}
async function mb(a, i, r, o) {
    let c = []
      , f = [];
    for (let[h,g] of o.entries())
        c.push(await It(a, i, h)),
        f.push(await It(a, i, g));
    return ab(a.base, r, c, f)
}
async function pb(a, i, r, o) {
    let c = [];
    for (let f of o.keys())
        c.push(await It(a, i, f));
    return yS(r, c)
}
async function _0(a, i, r, o) {
    let c = a.base.plugins;
    if (c)
        for (let f = 0, h = c.length; f < h; f++) {
            let g = c[f];
            if (g.parse.async && g.test(o))
                return uS(r, g.tag, await g.parse.async(o, new rb(a,i), {
                    id: r
                }))
        }
    return x
}
async function gb(a, i, r, o) {
    let[c,f] = await PS(o);
    return Et(12, r, c, x, x, x, x, x, await It(a, i, f), x, x, x)
}
function yb(a, i, r, o, c) {
    let f = []
      , h = r.on({
        next: g => {
            xs(this.base, i),
            It(this, a, g).then(y => {
                f.push(xS(i, y))
            }
            , y => {
                c(y),
                h()
            }
            )
        }
        ,
        throw: g => {
            xs(this.base, i),
            It(this, a, g).then(y => {
                f.push(ES(i, y)),
                o(f),
                h()
            }
            , y => {
                c(y),
                h()
            }
            )
        }
        ,
        return: g => {
            xs(this.base, i),
            It(this, a, g).then(y => {
                f.push(_S(i, y)),
                o(f),
                h()
            }
            , y => {
                c(y),
                h()
            }
            )
        }
    })
}
async function vb(a, i, r, o) {
    return bS(r, Ns(a.base, 4), await new Promise(yb.bind(a, i, r, o)))
}
async function Sb(a, i, r, o) {
    let c = [];
    for (let f = 0, h = o.v.length; f < h; f++)
        c[f] = await It(a, i, o.v[f]);
    return AS(r, c, o.t, o.d)
}
async function bb(a, i, r, o) {
    if (Array.isArray(o))
        return ob(a, i, r, o);
    if (KS(o))
        return vb(a, i, r, o);
    if (GS(o))
        return Sb(a, i, r, o);
    let c = o.constructor;
    if (c === BS)
        return It(a, i, o.replacement);
    let f = await _0(a, i, r, o);
    if (f)
        return f;
    switch (c) {
    case Object:
        return fc(a, i, r, o, !1);
    case x:
        return fc(a, i, r, o, !0);
    case Date:
        return iS(r, o);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
        return gp(a, i, r, o);
    case Number:
    case Boolean:
    case String:
    case BigInt:
        return ub(a, i, r, o);
    case ArrayBuffer:
        return lb(a.base, r, o);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
        return cb(a, i, r, o);
    case DataView:
        return db(a, i, r, o);
    case Map:
        return mb(a, i, r, o);
    case Set:
        return pb(a, i, r, o)
    }
    if (c === Promise || o instanceof Promise)
        return gb(a, i, r, o);
    let h = a.base.features;
    if (h & 32 && c === RegExp)
        return rS(r, o);
    if (h & 16)
        switch (c) {
        case BigInt64Array:
        case BigUint64Array:
            return fb(a, i, r, o)
        }
    if (h & 1 && typeof AggregateError < "u" && (c === AggregateError || o instanceof AggregateError))
        return hb(a, i, r, o);
    if (o instanceof Error)
        return gp(a, i, r, o);
    if (Tn in o || An in o)
        return fc(a, i, r, o, !!c);
    throw new Ds(o)
}
async function xb(a, i, r) {
    let o = Uc(a.base, r);
    if (o.type !== 0)
        return o.value;
    let c = await _0(a, i, o.value, r);
    if (c)
        return c;
    throw new Ds(r)
}
async function It(a, i, r) {
    switch (typeof r) {
    case "boolean":
        return r ? d0 : h0;
    case "undefined":
        return X1;
    case "string":
        return v0(r);
    case "number":
        return nS(r);
    case "bigint":
        return aS(r);
    case "object":
        {
            if (r) {
                let o = Uc(a.base, r);
                return o.type === 0 ? await bb(a, i + 1, o.value, r) : o.value
            }
            return Q1
        }
    case "symbol":
        return Ba(a.base, r);
    case "function":
        return xb(a, i, r);
    default:
        throw new Ds(r)
    }
}
async function Eb(a, i) {
    try {
        return await It(a, 0, i)
    } catch (r) {
        throw r instanceof pp ? r : new pp(r)
    }
}
var _b = (a => (a[a.Vanilla = 1] = "Vanilla",
a[a.Cross = 2] = "Cross",
a))(_b || {});
function A0(a, i) {
    for (let r = 0, o = i.length; r < o; r++) {
        let c = i[r];
        a.has(c) || (a.add(c),
        c.extends && A0(a, c.extends))
    }
}
function T0(a) {
    if (a) {
        let i = new Set;
        return A0(i, a),
        [...i]
    }
}
function Ab(a) {
    switch (a) {
    case "Int8Array":
        return Int8Array;
    case "Int16Array":
        return Int16Array;
    case "Int32Array":
        return Int32Array;
    case "Uint8Array":
        return Uint8Array;
    case "Uint16Array":
        return Uint16Array;
    case "Uint32Array":
        return Uint32Array;
    case "Uint8ClampedArray":
        return Uint8ClampedArray;
    case "Float32Array":
        return Float32Array;
    case "Float64Array":
        return Float64Array;
    case "BigInt64Array":
        return BigInt64Array;
    case "BigUint64Array":
        return BigUint64Array;
    default:
        throw new OS(a)
    }
}
var Tb = 1e6
  , Cb = 1e4
  , Rb = 2e4;
function C0(a, i) {
    switch (i) {
    case 3:
        return Object.freeze(a);
    case 1:
        return Object.preventExtensions(a);
    case 2:
        return Object.seal(a);
    default:
        return a
    }
}
var jb = 1e3;
function wb(a, i) {
    var r;
    let o = i.refs || new Map;
    return "types"in o || Object.assign(o, {
        types: new Map
    }),
    {
        mode: a,
        plugins: i.plugins,
        refs: o,
        features: (r = i.features) != null ? r : 63 ^ (i.disabledFeatures || 0),
        depthLimit: i.depthLimit || jb
    }
}
function Mb(a) {
    return {
        mode: 2,
        base: wb(2, a),
        child: x
    }
}
var zb = class {
    constructor(a, i) {
        this._p = a,
        this.depth = i
    }
    deserialize(a) {
        return Bt(this._p, this.depth, a)
    }
}
;
function R0(a, i) {
    if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i))
        throw new Rn({
            t: 4,
            i
        });
    if (a.refs.has(i))
        throw new Error("Conflicted ref id: " + i)
}
function Ob(a, i, r) {
    return R0(a.base, i),
    a.state.marked.has(i) && a.base.refs.set(i, r),
    r
}
function Db(a, i, r) {
    return R0(a.base, i),
    a.base.refs.set(i, r),
    r
}
function $t(a, i, r) {
    return a.mode === 1 ? Ob(a, i, r) : Db(a, i, r)
}
function Cc(a, i, r) {
    if (Object.hasOwn(i, r))
        return i[r];
    throw new Rn(a)
}
function Bb(a, i) {
    return $t(a, i.i, tS(ca(i.s)))
}
function Lb(a, i, r) {
    let o = r.a
      , c = o.length
      , f = $t(a, r.i, new Array(c));
    for (let h = 0, g; h < c; h++)
        g = o[h],
        g && (f[h] = Bt(a, i, g));
    return C0(f, r.o),
    f
}
function Nb(a) {
    switch (a) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
        return !1;
    default:
        return !0
    }
}
function Ub(a) {
    switch (a) {
    case An:
    case zl:
    case Ol:
    case Tn:
        return !0;
    default:
        return !1
    }
}
function yp(a, i, r) {
    Nb(i) ? a[i] = r : Object.defineProperty(a, i, {
        value: r,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}
function Hb(a, i, r, o, c) {
    if (typeof o == "string")
        yp(r, ca(o), Bt(a, i, c));
    else {
        let f = Bt(a, i, o);
        switch (typeof f) {
        case "string":
            yp(r, f, Bt(a, i, c));
            break;
        case "symbol":
            Ub(f) && (r[f] = Bt(a, i, c));
            break;
        default:
            throw new Rn(o)
        }
    }
}
function j0(a, i, r) {
    a.base.refs.types.set(i, r)
}
function Fi(a, i, r, o) {
    if (a.base.refs.types.get(r) !== o)
        throw new Rn(i)
}
function w0(a, i, r, o) {
    let c = r.k;
    if (c.length > 0)
        for (let f = 0, h = r.v, g = c.length; f < g; f++)
            Hb(a, i, o, c[f], h[f]);
    return o
}
function qb(a, i, r) {
    let o = $t(a, r.i, r.t === 10 ? {} : Object.create(null));
    return w0(a, i, r.p, o),
    C0(o, r.o),
    o
}
function Gb(a, i) {
    return $t(a, i.i, new Date(i.s))
}
function Yb(a, i) {
    if (a.base.features & 32) {
        let r = ca(i.c);
        if (r.length > Rb)
            throw new Rn(i);
        return $t(a, i.i, new RegExp(r,i.m))
    }
    throw new b0(i)
}
function Vb(a, i, r) {
    let o = $t(a, r.i, new Set);
    for (let c = 0, f = r.a, h = f.length; c < h; c++)
        o.add(Bt(a, i, f[c]));
    return o
}
function kb(a, i, r) {
    let o = $t(a, r.i, new Map);
    for (let c = 0, f = r.e.k, h = r.e.v, g = f.length; c < g; c++)
        o.set(Bt(a, i, f[c]), Bt(a, i, h[c]));
    return o
}
function Xb(a, i) {
    if (i.s.length > Tb)
        throw new Rn(i);
    return $t(a, i.i, x0(ca(i.s)))
}
function Qb(a, i, r) {
    var o;
    let c = Ab(r.c)
      , f = Bt(a, i, r.f)
      , h = (o = r.b) != null ? o : 0;
    if (h < 0 || h > f.byteLength)
        throw new Rn(r);
    return $t(a, r.i, new c(f,h,r.l))
}
function Zb(a, i, r) {
    var o;
    let c = Bt(a, i, r.f)
      , f = (o = r.b) != null ? o : 0;
    if (f < 0 || f > c.byteLength)
        throw new Rn(r);
    return $t(a, r.i, new DataView(c,f,r.l))
}
function M0(a, i, r, o) {
    if (r.p) {
        let c = w0(a, i, r.p, {});
        Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
    }
    return o
}
function Kb(a, i, r) {
    let o = $t(a, r.i, new AggregateError([],ca(r.m)));
    return M0(a, i, r, o)
}
function Fb(a, i, r) {
    let o = Cc(r, k1, r.s)
      , c = $t(a, r.i, new o(ca(r.m)));
    return M0(a, i, r, c)
}
function Jb(a, i, r) {
    let o = Bs()
      , c = $t(a, r.i, o.p)
      , f = Bt(a, i, r.f);
    return r.s ? o.s(f) : o.f(f),
    c
}
function Wb(a, i, r) {
    return $t(a, r.i, Object(Bt(a, i, r.f)))
}
function Pb(a, i, r) {
    let o = a.base.plugins;
    if (o) {
        let c = ca(r.c);
        for (let f = 0, h = o.length; f < h; f++) {
            let g = o[f];
            if (g.tag === c)
                return $t(a, r.i, g.deserialize(r.s, new zb(a,i), {
                    id: r.i
                }))
        }
    }
    throw new wS(r.c)
}
function Ib(a, i) {
    let r = $t(a, i.i, $t(a, i.s, Bs()).p);
    return j0(a, i.s, 22),
    r
}
function $b(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return Fi(a, r, r.i, 22),
        o.s(Bt(a, i, r.a[1])),
        x;
    throw new Ki("Promise")
}
function tx(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return Fi(a, r, r.i, 22),
        o.f(Bt(a, i, r.a[1])),
        x;
    throw new Ki("Promise")
}
function ex(a, i, r) {
    Bt(a, i, r.a[0]);
    let o = Bt(a, i, r.a[1]);
    return kS(o)
}
function nx(a, i, r) {
    Bt(a, i, r.a[0]);
    let o = Bt(a, i, r.a[1]);
    return WS(o)
}
function ax(a, i, r) {
    let o = $t(a, r.i, Ha());
    j0(a, r.i, 31);
    let c = r.a
      , f = c.length;
    if (f)
        for (let h = 0; h < f; h++)
            Bt(a, i, c[h]);
    return o
}
function lx(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return Fi(a, r, r.i, 31),
        o.next(Bt(a, i, r.f)),
        x;
    throw new Ki("Stream")
}
function ix(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return Fi(a, r, r.i, 31),
        o.throw(Bt(a, i, r.f)),
        x;
    throw new Ki("Stream")
}
function rx(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return Fi(a, r, r.i, 31),
        o.return(Bt(a, i, r.f)),
        x;
    throw new Ki("Stream")
}
function sx(a, i, r) {
    return Bt(a, i, r.f),
    x
}
function ox(a, i, r) {
    return Bt(a, i, r.a[1]),
    x
}
function ux(a, i, r) {
    let o = $t(a, r.i, E0([], r.s, r.l));
    for (let c = 0, f = r.a.length; c < f; c++)
        o.v[c] = Bt(a, i, r.a[c]);
    return o
}
function Bt(a, i, r) {
    if (i > a.base.depthLimit)
        throw new DS(a.base.depthLimit);
    switch (i += 1,
    r.t) {
    case 2:
        return Cc(r, Y1, r.s);
    case 0:
        return Number(r.s);
    case 1:
        return ca(String(r.s));
    case 3:
        if (String(r.s).length > Cb)
            throw new Rn(r);
        return BigInt(r.s);
    case 4:
        return a.base.refs.get(r.i);
    case 18:
        return Bb(a, r);
    case 9:
        return Lb(a, i, r);
    case 10:
    case 11:
        return qb(a, i, r);
    case 5:
        return Gb(a, r);
    case 6:
        return Yb(a, r);
    case 7:
        return Vb(a, i, r);
    case 8:
        return kb(a, i, r);
    case 19:
        return Xb(a, r);
    case 16:
    case 15:
        return Qb(a, i, r);
    case 20:
        return Zb(a, i, r);
    case 14:
        return Kb(a, i, r);
    case 13:
        return Fb(a, i, r);
    case 12:
        return Jb(a, i, r);
    case 17:
        return Cc(r, G1, r.s);
    case 21:
        return Wb(a, i, r);
    case 25:
        return Pb(a, i, r);
    case 22:
        return Ib(a, r);
    case 23:
        return $b(a, i, r);
    case 24:
        return tx(a, i, r);
    case 28:
        return ex(a, i, r);
    case 30:
        return nx(a, i, r);
    case 31:
        return ax(a, i, r);
    case 32:
        return lx(a, i, r);
    case 33:
        return ix(a, i, r);
    case 34:
        return rx(a, i, r);
    case 27:
        return sx(a, i, r);
    case 29:
        return ox(a, i, r);
    case 35:
        return ux(a, i, r);
    default:
        throw new b0(r)
    }
}
function cx(a, i) {
    try {
        return Bt(a, 0, i)
    } catch (r) {
        throw new jS(r)
    }
}
var fx = () => T;
fx.toString();
function vp(a, i) {
    let r = T0(i.plugins)
      , o = Mb({
        plugins: r,
        refs: i.refs,
        features: i.features,
        disabledFeatures: i.disabledFeatures,
        depthLimit: i.depthLimit
    });
    return cx(o, a)
}
async function dx(a, i={}) {
    let r = T0(i.plugins)
      , o = ib(1, {
        plugins: r,
        disabledFeatures: i.disabledFeatures
    });
    return {
        t: await Eb(o, a),
        f: o.base.features,
        m: Array.from(o.base.marked)
    }
}
function hx(a) {
    return {
        tag: "$TSR/t/" + a.key,
        test: a.test,
        parse: {
            sync(i, r, o) {
                return {
                    v: r.parse(a.toSerializable(i))
                }
            },
            async async(i, r, o) {
                return {
                    v: await r.parse(a.toSerializable(i))
                }
            },
            stream(i, r, o) {
                return {
                    v: r.parse(a.toSerializable(i))
                }
            }
        },
        serialize: void 0,
        deserialize(i, r, o) {
            return a.fromSerializable(r.deserialize(i.v))
        }
    }
}
var mx = class {
    constructor(a, i) {
        this.stream = a,
        this.hint = i?.hint ?? "binary"
    }
}
  , js = globalThis.Buffer
  , z0 = !!js && typeof js.from == "function";
function O0(a) {
    if (a.length === 0)
        return "";
    if (z0)
        return js.from(a).toString("base64");
    const i = 32768
      , r = [];
    for (let o = 0; o < a.length; o += i) {
        const c = a.subarray(o, o + i);
        r.push(String.fromCharCode.apply(null, c))
    }
    return btoa(r.join(""))
}
function D0(a) {
    if (a.length === 0)
        return new Uint8Array(0);
    if (z0) {
        const o = js.from(a, "base64");
        return new Uint8Array(o.buffer,o.byteOffset,o.byteLength)
    }
    const i = atob(a)
      , r = new Uint8Array(i.length);
    for (let o = 0; o < i.length; o++)
        r[o] = i.charCodeAt(o);
    return r
}
var Ni = Object.create(null)
  , Ui = Object.create(null)
  , px = a => new ReadableStream({
    start(i) {
        a.on({
            next(r) {
                try {
                    i.enqueue(D0(r))
                } catch {}
            },
            throw(r) {
                i.error(r)
            },
            return() {
                try {
                    i.close()
                } catch {}
            }
        })
    }
})
  , gx = new TextEncoder
  , yx = a => new ReadableStream({
    start(i) {
        a.on({
            next(r) {
                try {
                    typeof r == "string" ? i.enqueue(gx.encode(r)) : i.enqueue(D0(r.$b64))
                } catch {}
            },
            throw(r) {
                i.error(r)
            },
            return() {
                try {
                    i.close()
                } catch {}
            }
        })
    }
})
  , vx = "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))"
  , Sx = "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function Sp(a) {
    const i = Ha()
      , r = a.getReader();
    return (async () => {
        try {
            for (; ; ) {
                const {done: o, value: c} = await r.read();
                if (o) {
                    i.return(void 0);
                    break
                }
                i.next(O0(c))
            }
        } catch (o) {
            i.throw(o)
        } finally {
            r.releaseLock()
        }
    }
    )(),
    i
}
function bp(a) {
    const i = Ha()
      , r = a.getReader()
      , o = new TextDecoder("utf-8",{
        fatal: !0
    });
    return (async () => {
        try {
            for (; ; ) {
                const {done: c, value: f} = await r.read();
                if (c) {
                    try {
                        const h = o.decode();
                        h.length > 0 && i.next(h)
                    } catch {}
                    i.return(void 0);
                    break
                }
                try {
                    const h = o.decode(f, {
                        stream: !0
                    });
                    h.length > 0 && i.next(h)
                } catch {
                    i.next({
                        $b64: O0(f)
                    })
                }
            }
        } catch (c) {
            i.throw(c)
        } finally {
            r.releaseLock()
        }
    }
    )(),
    i
}
var bx = {
    tag: "tss/RawStream",
    extends: [{
        tag: "tss/RawStreamFactory",
        test(a) {
            return a === Ni
        },
        parse: {
            sync(a, i, r) {
                return {}
            },
            async async(a, i, r) {
                return {}
            },
            stream(a, i, r) {
                return {}
            }
        },
        serialize(a, i, r) {
            return vx
        },
        deserialize(a, i, r) {
            return Ni
        }
    }, {
        tag: "tss/RawStreamFactoryText",
        test(a) {
            return a === Ui
        },
        parse: {
            sync(a, i, r) {
                return {}
            },
            async async(a, i, r) {
                return {}
            },
            stream(a, i, r) {
                return {}
            }
        },
        serialize(a, i, r) {
            return Sx
        },
        deserialize(a, i, r) {
            return Ui
        }
    }],
    test(a) {
        return a instanceof mx
    },
    parse: {
        sync(a, i, r) {
            const o = a.hint === "text" ? Ui : Ni;
            return {
                hint: i.parse(a.hint),
                factory: i.parse(o),
                stream: i.parse(Ha())
            }
        },
        async async(a, i, r) {
            const o = a.hint === "text" ? Ui : Ni
              , c = a.hint === "text" ? bp(a.stream) : Sp(a.stream);
            return {
                hint: await i.parse(a.hint),
                factory: await i.parse(o),
                stream: await i.parse(c)
            }
        },
        stream(a, i, r) {
            const o = a.hint === "text" ? Ui : Ni
              , c = a.hint === "text" ? bp(a.stream) : Sp(a.stream);
            return {
                hint: i.parse(a.hint),
                factory: i.parse(o),
                stream: i.parse(c)
            }
        }
    },
    serialize(a, i, r) {
        return "(" + i.serialize(a.factory) + ")(" + i.serialize(a.stream) + ")"
    },
    deserialize(a, i, r) {
        const o = i.deserialize(a.stream);
        return i.deserialize(a.hint) === "text" ? yx(o) : px(o)
    }
};
function xx(a) {
    return {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize() {
            throw new Error("RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.")
        },
        deserialize(i, r, o) {
            return a(typeof r?.deserialize == "function" ? r.deserialize(i.streamId) : i.streamId)
        }
    }
}
var Ex = {
    tag: "$TSR/Error",
    test(a) {
        return a instanceof Error
    },
    parse: {
        sync(a, i) {
            return {
                message: i.parse(a.message)
            }
        },
        async async(a, i) {
            return {
                message: await i.parse(a.message)
            }
        },
        stream(a, i) {
            return {
                message: i.parse(a.message)
            }
        }
    },
    serialize(a, i) {
        return "new Error(" + i.serialize(a.message) + ")"
    },
    deserialize(a, i) {
        return new Error(i.deserialize(a.message))
    }
}
  , na = {}
  , B0 = a => new ReadableStream({
    start: i => {
        a.on({
            next: r => {
                try {
                    i.enqueue(r)
                } catch {}
            }
            ,
            throw: r => {
                i.error(r)
            }
            ,
            return: () => {
                try {
                    i.close()
                } catch {}
            }
        })
    }
})
  , _x = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(a) {
        return a === na
    },
    parse: {
        sync() {
            return na
        },
        async async() {
            return await Promise.resolve(na)
        },
        stream() {
            return na
        }
    },
    serialize() {
        return B0.toString()
    },
    deserialize() {
        return na
    }
};
function xp(a) {
    let i = Ha()
      , r = a.getReader();
    async function o() {
        try {
            let c = await r.read();
            c.done ? i.return(c.value) : (i.next(c.value),
            await o())
        } catch (c) {
            i.throw(c)
        }
    }
    return o().catch( () => {}
    ),
    i
}
var Ax = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [_x],
    test(a) {
        return typeof ReadableStream > "u" ? !1 : a instanceof ReadableStream
    },
    parse: {
        sync(a, i) {
            return {
                factory: i.parse(na),
                stream: i.parse(Ha())
            }
        },
        async async(a, i) {
            return {
                factory: await i.parse(na),
                stream: await i.parse(xp(a))
            }
        },
        stream(a, i) {
            return {
                factory: i.parse(na),
                stream: i.parse(xp(a))
            }
        }
    },
    serialize(a, i) {
        return "(" + i.serialize(a.factory) + ")(" + i.serialize(a.stream) + ")"
    },
    deserialize(a, i) {
        let r = i.deserialize(a.stream);
        return B0(r)
    }
}
  , Tx = Ax
  , Cx = [Ex, bx, Tx];
function Rx() {
    return [...Vp()?.serializationAdapters?.map(hx) ?? [], ...Cx]
}
var Ep = new TextDecoder
  , jx = new Uint8Array(0)
  , _p = 16 * 1024 * 1024
  , Ap = 32 * 1024 * 1024
  , Tp = 1024
  , Cp = 1e5;
function wx(a) {
    const i = new Map
      , r = new Map
      , o = new Set;
    let c = !1, f = null, h = 0, g;
    const y = new ReadableStream({
        start(S) {
            g = S
        },
        cancel() {
            c = !0;
            try {
                f?.cancel()
            } catch {}
            i.forEach(S => {
                try {
                    S.error(new Error("Framed response cancelled"))
                } catch {}
            }
            ),
            i.clear(),
            r.clear(),
            o.clear()
        }
    });
    function p(S) {
        const E = r.get(S);
        if (E)
            return E;
        if (o.has(S))
            return new ReadableStream({
                start(w) {
                    w.close()
                }
            });
        if (r.size >= Tp)
            throw new Error(`Too many raw streams in framed response (max ${Tp})`);
        const _ = new ReadableStream({
            start(w) {
                i.set(S, w)
            },
            cancel() {
                o.add(S),
                i.delete(S),
                r.delete(S)
            }
        });
        return r.set(S, _),
        _
    }
    function b(S) {
        return p(S),
        i.get(S)
    }
    return (async () => {
        const S = a.getReader();
        f = S;
        const E = [];
        let _ = 0;
        function w() {
            if (_ < 9)
                return null;
            const C = E[0];
            if (C.length >= 9)
                return {
                    type: C[0],
                    streamId: (C[1] << 24 | C[2] << 16 | C[3] << 8 | C[4]) >>> 0,
                    length: (C[5] << 24 | C[6] << 16 | C[7] << 8 | C[8]) >>> 0
                };
            const M = new Uint8Array(9);
            let k = 0
              , Q = 9;
            for (let q = 0; q < E.length && Q > 0; q++) {
                const $ = E[q]
                  , W = Math.min($.length, Q);
                M.set($.subarray(0, W), k),
                k += W,
                Q -= W
            }
            return {
                type: M[0],
                streamId: (M[1] << 24 | M[2] << 16 | M[3] << 8 | M[4]) >>> 0,
                length: (M[5] << 24 | M[6] << 16 | M[7] << 8 | M[8]) >>> 0
            }
        }
        function O(C) {
            if (C === 0)
                return jx;
            const M = new Uint8Array(C);
            let k = 0
              , Q = C;
            for (; Q > 0 && E.length > 0; ) {
                const q = E[0];
                if (!q)
                    break;
                const $ = Math.min(q.length, Q);
                M.set(q.subarray(0, $), k),
                k += $,
                Q -= $,
                $ === q.length ? E.shift() : E[0] = q.subarray($)
            }
            return _ -= C,
            M
        }
        try {
            for (; ; ) {
                const {done: C, value: M} = await S.read();
                if (c || C)
                    break;
                if (M) {
                    if (_ + M.length > Ap)
                        throw new Error(`Framed response buffer exceeded ${Ap} bytes`);
                    for (E.push(M),
                    _ += M.length; ; ) {
                        const k = w();
                        if (!k)
                            break;
                        const {type: Q, streamId: q, length: $} = k;
                        if (Q !== _n.JSON && Q !== _n.CHUNK && Q !== _n.END && Q !== _n.ERROR)
                            throw new Error(`Unknown frame type: ${Q}`);
                        if (Q === _n.JSON) {
                            if (q !== 0)
                                throw new Error("Invalid JSON frame streamId (expected 0)")
                        } else if (q === 0)
                            throw new Error("Invalid raw frame streamId (expected non-zero)");
                        if ($ > _p)
                            throw new Error(`Frame payload too large: ${$} bytes (max ${_p})`);
                        const W = 9 + $;
                        if (_ < W)
                            break;
                        if (++h > Cp)
                            throw new Error(`Too many frames in framed response (max ${Cp})`);
                        O(9);
                        const X = O($);
                        switch (Q) {
                        case _n.JSON:
                            try {
                                g.enqueue(Ep.decode(X))
                            } catch {}
                            break;
                        case _n.CHUNK:
                            {
                                const K = b(q);
                                K && K.enqueue(X);
                                break
                            }
                        case _n.END:
                            {
                                const K = b(q);
                                if (o.add(q),
                                K) {
                                    try {
                                        K.close()
                                    } catch {}
                                    i.delete(q)
                                }
                                break
                            }
                        case _n.ERROR:
                            {
                                const K = b(q);
                                if (o.add(q),
                                K) {
                                    const J = Ep.decode(X);
                                    K.error(new Error(J)),
                                    i.delete(q)
                                }
                                break
                            }
                        }
                    }
                }
            }
            if (_ !== 0)
                throw new Error("Incomplete frame at end of framed response");
            try {
                g.close()
            } catch {}
            i.forEach(C => {
                try {
                    C.close()
                } catch {}
            }
            ),
            i.clear()
        } catch (C) {
            try {
                g.error(C)
            } catch {}
            i.forEach(M => {
                try {
                    M.error(C)
                } catch {}
            }
            ),
            i.clear()
        } finally {
            try {
                S.releaseLock()
            } catch {}
            f = null
        }
    }
    )(),
    {
        getOrCreateStream: p,
        jsonChunks: y
    }
}
var Qi = null;
async function Rc(a) {
    a.length > 0 && await Promise.allSettled(a)
}
var Mx = Object.prototype.hasOwnProperty;
function L0(a) {
    for (const i in a)
        if (Mx.call(a, i))
            return !0;
    return !1
}
async function zx(a, i, r) {
    Qi || (Qi = Rx());
    const o = i[0]
      , c = o.fetch ?? r
      , f = o.data instanceof FormData ? "formData" : "payload"
      , h = o.headers ? new Headers(o.headers) : new Headers;
    if (h.set("x-tsr-serverFn", "true"),
    f === "payload" && h.set("accept", `${jv}, application/x-ndjson, application/json`),
    o.method === "GET") {
        if (f === "formData")
            throw new Error("FormData is not supported with GET requests");
        const y = await N0(o);
        if (y !== void 0) {
            const p = Fp({
                payload: y
            });
            a.includes("?") ? a += `&${p}` : a += `?${p}`
        }
    }
    let g;
    if (o.method === "POST") {
        const y = await Ox(o);
        y?.contentType && h.set("content-type", y.contentType),
        g = y?.body
    }
    return await Dx(async () => c(a, {
        method: o.method,
        headers: h,
        signal: o.signal,
        body: g
    }))
}
async function N0(a) {
    let i = !1;
    const r = {};
    if (a.data !== void 0 && (i = !0,
    r.data = a.data),
    a.context && L0(a.context) && (i = !0,
    r.context = a.context),
    i)
        return U0(r)
}
async function U0(a) {
    return JSON.stringify(await Promise.resolve(dx(a, {
        plugins: Qi
    })))
}
async function Ox(a) {
    if (a.data instanceof FormData) {
        let r;
        return a.context && L0(a.context) && (r = await U0(a.context)),
        r !== void 0 && a.data.set(Rv, r),
        {
            body: a.data
        }
    }
    const i = await N0(a);
    if (i)
        return {
            body: i,
            contentType: "application/json"
        }
}
async function Dx(a) {
    let i;
    try {
        i = await a()
    } catch (o) {
        if (o instanceof Response)
            i = o;
        else
            throw console.log(o),
            o
    }
    if (i.headers.get("x-tss-raw") === "true")
        return i;
    const r = i.headers.get("content-type");
    if (r || _e(),
    i.headers.get("x-tss-serialized")) {
        let o;
        if (r.includes("application/x-tss-framed")) {
            if (zv(r),
            !i.body)
                throw new Error("No response body for framed response");
            const {getOrCreateStream: c, jsonChunks: f} = wx(i.body)
              , h = [xx(c), ...Qi || []]
              , g = new Map;
            o = await Bx({
                jsonStream: f,
                onMessage: y => vp(y, {
                    refs: g,
                    plugins: h
                }),
                onError(y, p) {
                    console.error(y, p)
                }
            })
        } else if (r.includes("application/json")) {
            const c = await i.json()
              , f = [];
            o = vp(c, {
                plugins: Qi
            }),
            await Rc(f)
        }
        if (o || _e(),
        o instanceof Error)
            throw o;
        return o
    }
    if (r.includes("application/json")) {
        const o = await i.json()
          , c = h1(o);
        if (c)
            throw c;
        if (ne(o))
            throw o;
        return o
    }
    if (!i.ok)
        throw new Error(await i.text());
    return i
}
async function Bx({jsonStream: a, onMessage: i, onError: r}) {
    const o = a.getReader()
      , {value: c, done: f} = await o.read();
    if (f || !c)
        throw new Error("Stream ended before first object");
    const h = JSON.parse(c);
    let g = !1;
    const y = (async () => {
        try {
            for (; ; ) {
                const {value: S, done: E} = await o.read();
                if (E)
                    break;
                if (S)
                    try {
                        const _ = [];
                        try {
                            i(JSON.parse(S))
                        } finally {}
                        await Rc(_)
                    } catch (_) {
                        r?.(`Invalid JSON: ${S}`, _)
                    }
            }
        } catch (S) {
            g || r?.("Stream processing error:", S)
        }
    }
    )();
    let p;
    const b = [];
    try {
        p = i(h)
    } catch (S) {
        throw g = !0,
        o.cancel().catch( () => {}
        ),
        S
    }
    return await Rc(b),
    Promise.resolve(p).catch( () => {
        g = !0,
        o.cancel().catch( () => {}
        )
    }
    ),
    y.finally( () => {
        try {
            o.releaseLock()
        } catch {}
    }
    ),
    p
}
function Lx(a) {
    const i = "/_serverFn/" + a;
    return Object.assign( (...c) => {
        const f = Vp()?.serverFns?.fetch;
        return zx(i, c, f ?? fetch)
    }
    , {
        url: i,
        serverFnMeta: {
            id: a
        },
        [_c]: !0
    })
}
var Nx = {
    key: "$TSS/serverfn",
    test: a => typeof a != "function" || !(_c in a) ? !1 : !!a[_c],
    toSerializable: ({serverFnMeta: a}) => ({
        functionId: a.id
    }),
    fromSerializable: ({functionId: a}) => Lx(a)
};
function Rp(a) {
    return a.replaceAll("\0", "/").replaceAll("�", "/")
}
function Ux(a, i) {
    a.id = i.i,
    a.__beforeLoadContext = i.b,
    a.loaderData = i.l,
    a.status = i.s,
    a.ssr = i.ssr,
    a.updatedAt = i.u,
    a.error = i.e,
    i.g !== void 0 && (a.globalNotFound = i.g)
}
async function Hx(a) {
    window.$_TSR || _e();
    const i = a.options.serializationAdapters;
    if (i?.length) {
        const C = new Map;
        i.forEach(M => {
            C.set(M.key, M.fromSerializable)
        }
        ),
        window.$_TSR.t = C,
        window.$_TSR.buffer.forEach(M => M())
    }
    window.$_TSR.initialized = !0,
    window.$_TSR.router || _e();
    const r = window.$_TSR.router;
    r.matches.forEach(C => {
        C.i = Rp(C.i)
    }
    ),
    r.lastMatchId && (r.lastMatchId = Rp(r.lastMatchId));
    const {manifest: o, dehydratedData: c, lastMatchId: f} = r;
    a.ssr = {
        manifest: o
    };
    const h = document.querySelector('meta[property="csp-nonce"]')?.content;
    a.options.ssr = {
        nonce: h
    };
    const g = a.matchRoutes(a.stores.location.get())
      , y = Promise.all(g.map(C => a.loadRouteChunk(a.looseRoutesById[C.routeId])));
    function p(C) {
        const M = a.looseRoutesById[C.routeId].options.pendingMinMs ?? a.options.defaultPendingMinMs;
        if (M) {
            const k = Ua();
            C._nonReactive.minPendingPromise = k,
            C._forcePending = !0,
            setTimeout( () => {
                k.resolve(),
                a.updateMatch(C.id, Q => (Q._nonReactive.minPendingPromise = void 0,
                {
                    ...Q,
                    _forcePending: void 0
                }))
            }
            , M)
        }
    }
    function b(C) {
        const M = a.looseRoutesById[C.routeId];
        M && (M.options.ssr = C.ssr)
    }
    let S;
    g.forEach(C => {
        const M = r.matches.find(k => k.i === C.id);
        if (!M) {
            C._nonReactive.dehydrated = !1,
            C.ssr = !1,
            b(C);
            return
        }
        Ux(C, M),
        b(C),
        C._nonReactive.dehydrated = C.ssr !== !1,
        (C.ssr === "data-only" || C.ssr === !1) && S === void 0 && (S = C.index,
        p(C))
    }
    ),
    a.stores.setMatches(g),
    await a.options.hydrate?.(c);
    const E = a.stores.matches.get()
      , _ = a.stores.location.get();
    await Promise.all(E.map(async C => {
        try {
            const M = a.looseRoutesById[C.routeId]
              , k = E[C.index - 1]?.context ?? a.options.context;
            if (M.options.context) {
                const W = {
                    deps: C.loaderDeps,
                    params: C.params,
                    context: k ?? {},
                    location: _,
                    navigate: X => a.navigate({
                        ...X,
                        _fromLocation: _
                    }),
                    buildLocation: a.buildLocation,
                    cause: C.cause,
                    abortController: C.abortController,
                    preload: !1,
                    matches: g,
                    routeId: M.id
                };
                C.__routeContext = M.options.context(W) ?? void 0
            }
            C.context = {
                ...k,
                ...C.__routeContext,
                ...C.__beforeLoadContext
            };
            const Q = {
                ssr: a.options.ssr,
                matches: E,
                match: C,
                params: C.params,
                loaderData: C.loaderData
            }
              , q = await M.options.head?.(Q)
              , $ = await M.options.scripts?.(Q);
            C.meta = q?.meta,
            C.links = q?.links,
            C.headScripts = q?.scripts,
            C.styles = q?.styles,
            C.scripts = $
        } catch (M) {
            if (ne(M))
                C.error = {
                    isNotFound: !0
                },
                console.error(`NotFound error during hydration for routeId: ${C.routeId}`, M);
            else
                throw C.error = M,
                console.error(`Error during hydration for route ${C.routeId}:`, M),
                M
        }
    }
    ));
    const w = g[g.length - 1].id !== f;
    if (!g.some(C => C.ssr === !1) && !w)
        return g.forEach(C => {
            C._nonReactive.dehydrated = void 0
        }
        ),
        a.stores.resolvedLocation.set(a.stores.location.get()),
        y;
    const O = Promise.resolve().then( () => a.load()).catch(C => {
        console.error("Error during router hydration:", C)
    }
    );
    if (w) {
        const C = g[1];
        C || _e(),
        p(C),
        C._displayPending = !0,
        C._nonReactive.displayPendingPromise = O,
        O.then( () => {
            a.batch( () => {
                a.stores.status.get() === "pending" && (a.stores.status.set("idle"),
                a.stores.resolvedLocation.set(a.stores.location.get())),
                a.updateMatch(C.id, M => ({
                    ...M,
                    _displayPending: void 0,
                    displayPendingPromise: void 0
                }))
            }
            )
        }
        )
    }
    return y
}
var ws = I.use
  , qi = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function dc(a) {
    const i = I.useRef({
        value: a,
        prev: null
    })
      , r = i.current.value;
    return a !== r && (i.current = {
        value: a,
        prev: r
    }),
    i.current.prev
}
function qx(a, i, r={}, o={}) {
    I.useEffect( () => {
        if (!a.current || o.disabled || typeof IntersectionObserver != "function")
            return;
        const c = new IntersectionObserver( ([f]) => {
            i(f)
        }
        ,r);
        return c.observe(a.current),
        () => {
            c.disconnect()
        }
    }
    , [i, r, o.disabled, a])
}
function Gx(a) {
    const i = I.useRef(null);
    return I.useImperativeHandle(a, () => i.current, []),
    i
}
function Yx({promise: a}) {
    if (ws)
        return ws(a);
    const i = B1(a);
    if (i[tn].status === "pending")
        throw i;
    if (i[tn].status === "error")
        throw i[tn].error;
    return i[tn].data
}
function Vx(a) {
    const i = m.jsx(kx, {
        ...a
    });
    return a.fallback ? m.jsx(I.Suspense, {
        fallback: a.fallback,
        children: i
    }) : i
}
function kx(a) {
    const i = Yx(a);
    return a.children(i)
}
function qc(a) {
    const i = a.errorComponent ?? Gc;
    return m.jsx(Xx, {
        getResetKey: a.getResetKey,
        onCatch: a.onCatch,
        children: ({error: r, reset: o}) => r ? I.createElement(i, {
            error: r,
            reset: o
        }) : a.children
    })
}
var Xx = class extends I.Component {
    constructor(...a) {
        super(...a),
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromProps(a, i) {
        const r = a.getResetKey();
        return i.error && i.resetKey !== r ? {
            resetKey: r,
            error: null
        } : {
            resetKey: r
        }
    }
    static getDerivedStateFromError(a) {
        return {
            error: a
        }
    }
    reset() {
        this.setState({
            error: null
        })
    }
    componentDidCatch(a, i) {
        this.props.onCatch && this.props.onCatch(a, i)
    }
    render() {
        return this.props.children({
            error: this.state.error,
            reset: () => {
                this.reset()
            }
        })
    }
}
;
function Gc({error: a}) {
    const [i,r] = I.useState(!1);
    return m.jsxs("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [m.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [m.jsx("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), m.jsx("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => r(o => !o),
                children: i ? "Hide Error" : "Show Error"
            })]
        }), m.jsx("div", {
            style: {
                height: ".25rem"
            }
        }), i ? m.jsx("div", {
            children: m.jsx("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: a.message ? m.jsx("code", {
                    children: a.message
                }) : null
            })
        }) : null]
    })
}
function Qx({children: a, fallback: i=null}) {
    return Yc() ? m.jsx(Gi.Fragment, {
        children: a
    }) : m.jsx(Gi.Fragment, {
        children: i
    })
}
function Yc() {
    return Gi.useSyncExternalStore(Zx, () => !0, () => !1)
}
function Zx() {
    return () => {}
}
var H0 = I.createContext(null);
function ce(a) {
    return I.useContext(H0)
}
var Us = I.createContext(void 0)
  , Kx = I.createContext(void 0)
  , qt = (a => (a[a.None = 0] = "None",
a[a.Mutable = 1] = "Mutable",
a[a.Watching = 2] = "Watching",
a[a.RecursedCheck = 4] = "RecursedCheck",
a[a.Recursed = 8] = "Recursed",
a[a.Dirty = 16] = "Dirty",
a[a.Pending = 32] = "Pending",
a))(qt || {});
function Fx({update: a, notify: i, unwatched: r}) {
    return {
        link: o,
        unlink: c,
        propagate: f,
        checkDirty: h,
        shallowPropagate: g
    };
    function o(p, b, S) {
        const E = b.depsTail;
        if (E !== void 0 && E.dep === p)
            return;
        const _ = E !== void 0 ? E.nextDep : b.deps;
        if (_ !== void 0 && _.dep === p) {
            _.version = S,
            b.depsTail = _;
            return
        }
        const w = p.subsTail;
        if (w !== void 0 && w.version === S && w.sub === b)
            return;
        const O = b.depsTail = p.subsTail = {
            version: S,
            dep: p,
            sub: b,
            prevDep: E,
            nextDep: _,
            prevSub: w,
            nextSub: void 0
        };
        _ !== void 0 && (_.prevDep = O),
        E !== void 0 ? E.nextDep = O : b.deps = O,
        w !== void 0 ? w.nextSub = O : p.subs = O
    }
    function c(p, b=p.sub) {
        const S = p.dep
          , E = p.prevDep
          , _ = p.nextDep
          , w = p.nextSub
          , O = p.prevSub;
        return _ !== void 0 ? _.prevDep = E : b.depsTail = E,
        E !== void 0 ? E.nextDep = _ : b.deps = _,
        w !== void 0 ? w.prevSub = O : S.subsTail = O,
        O !== void 0 ? O.nextSub = w : (S.subs = w) === void 0 && r(S),
        _
    }
    function f(p) {
        let b = p.nextSub, S;
        t: do {
            const E = p.sub;
            let _ = E.flags;
            if (_ & 60 ? _ & 12 ? _ & 4 ? !(_ & 48) && y(p, E) ? (E.flags = _ | 40,
            _ &= 1) : _ = 0 : E.flags = _ & -9 | 32 : _ = 0 : E.flags = _ | 32,
            _ & 2 && i(E),
            _ & 1) {
                const w = E.subs;
                if (w !== void 0) {
                    const O = (p = w).nextSub;
                    O !== void 0 && (S = {
                        value: b,
                        prev: S
                    },
                    b = O);
                    continue
                }
            }
            if ((p = b) !== void 0) {
                b = p.nextSub;
                continue
            }
            for (; S !== void 0; )
                if (p = S.value,
                S = S.prev,
                p !== void 0) {
                    b = p.nextSub;
                    continue t
                }
            break
        } while (!0)
    }
    function h(p, b) {
        let S, E = 0, _ = !1;
        t: do {
            const w = p.dep
              , O = w.flags;
            if (b.flags & 16)
                _ = !0;
            else if ((O & 17) === 17) {
                if (a(w)) {
                    const C = w.subs;
                    C.nextSub !== void 0 && g(C),
                    _ = !0
                }
            } else if ((O & 33) === 33) {
                (p.nextSub !== void 0 || p.prevSub !== void 0) && (S = {
                    value: p,
                    prev: S
                }),
                p = w.deps,
                b = w,
                ++E;
                continue
            }
            if (!_) {
                const C = p.nextDep;
                if (C !== void 0) {
                    p = C;
                    continue
                }
            }
            for (; E--; ) {
                const C = b.subs
                  , M = C.nextSub !== void 0;
                if (M ? (p = S.value,
                S = S.prev) : p = C,
                _) {
                    if (a(b)) {
                        M && g(C),
                        b = p.sub;
                        continue
                    }
                    _ = !1
                } else
                    b.flags &= -33;
                b = p.sub;
                const k = p.nextDep;
                if (k !== void 0) {
                    p = k;
                    continue t
                }
            }
            return _
        } while (!0)
    }
    function g(p) {
        do {
            const b = p.sub
              , S = b.flags;
            (S & 48) === 32 && (b.flags = S | 16,
            (S & 6) === 2 && i(b))
        } while ((p = p.nextSub) !== void 0)
    }
    function y(p, b) {
        let S = b.depsTail;
        for (; S !== void 0; ) {
            if (S === p)
                return !0;
            S = S.prevDep
        }
        return !1
    }
}
function Jx(a, i, r) {
    const o = typeof a == "object"
      , c = o ? a : void 0;
    return {
        next: (o ? a.next : a)?.bind(c),
        error: (o ? a.error : i)?.bind(c),
        complete: (o ? a.complete : r)?.bind(c)
    }
}
const jc = [];
let Es = 0;
const {link: jp, unlink: Wx, propagate: Px, checkDirty: q0, shallowPropagate: wp} = Fx({
    update(a) {
        return a._update()
    },
    notify(a) {
        jc[wc++] = a,
        a.flags &= ~qt.Watching
    },
    unwatched(a) {
        a.depsTail !== void 0 && (a.depsTail = void 0,
        a.flags = qt.Mutable | qt.Dirty,
        Ms(a))
    }
});
let ps = 0, wc = 0, $e, Mc = 0;
function G0(a) {
    try {
        ++Mc,
        a()
    } finally {
        --Mc || Y0()
    }
}
function Ms(a) {
    const i = a.depsTail;
    let r = i !== void 0 ? i.nextDep : a.deps;
    for (; r !== void 0; )
        r = Wx(r, a)
}
function Y0() {
    if (!(Mc > 0)) {
        for (; ps < wc; ) {
            const a = jc[ps];
            jc[ps++] = void 0,
            a.notify()
        }
        ps = 0,
        wc = 0
    }
}
function Mp(a, i) {
    const r = typeof a == "function"
      , o = a
      , c = {
        _snapshot: r ? void 0 : a,
        subs: void 0,
        subsTail: void 0,
        deps: void 0,
        depsTail: void 0,
        flags: r ? qt.None : qt.Mutable,
        get() {
            return $e !== void 0 && jp(c, $e, Es),
            c._snapshot
        },
        subscribe(f) {
            const h = Jx(f)
              , g = {
                current: !1
            }
              , y = Ix( () => {
                c.get(),
                g.current ? h.next?.(c._snapshot) : g.current = !0
            }
            );
            return {
                unsubscribe: () => {
                    y.stop()
                }
            }
        },
        _update(f) {
            const h = $e
              , g = i?.compare ?? Object.is;
            if (r)
                $e = c,
                ++Es,
                c.depsTail = void 0;
            else if (f === void 0)
                return !1;
            r && (c.flags = qt.Mutable | qt.RecursedCheck);
            try {
                const y = c._snapshot
                  , p = typeof f == "function" ? f(y) : f === void 0 && r ? o(y) : f;
                return y === void 0 || !g(y, p) ? (c._snapshot = p,
                !0) : !1
            } finally {
                $e = h,
                r && (c.flags &= ~qt.RecursedCheck),
                Ms(c)
            }
        }
    };
    return r ? (c.flags = qt.Mutable | qt.Dirty,
    c.get = function() {
        const f = c.flags;
        if (f & qt.Dirty || f & qt.Pending && q0(c.deps, c)) {
            if (c._update()) {
                const h = c.subs;
                h !== void 0 && wp(h)
            }
        } else
            f & qt.Pending && (c.flags = f & ~qt.Pending);
        return $e !== void 0 && jp(c, $e, Es),
        c._snapshot
    }
    ) : c.set = function(f) {
        if (c._update(f)) {
            const h = c.subs;
            h !== void 0 && (Px(h),
            wp(h),
            Y0())
        }
    }
    ,
    c
}
function Ix(a) {
    const i = () => {
        const o = $e;
        $e = r,
        ++Es,
        r.depsTail = void 0,
        r.flags = qt.Watching | qt.RecursedCheck;
        try {
            return a()
        } finally {
            $e = o,
            r.flags &= ~qt.RecursedCheck,
            Ms(r)
        }
    }
      , r = {
        deps: void 0,
        depsTail: void 0,
        subs: void 0,
        subsTail: void 0,
        flags: qt.Watching | qt.RecursedCheck,
        notify() {
            const o = this.flags;
            o & qt.Dirty || o & qt.Pending && q0(this.deps, this) ? i() : this.flags = qt.Watching
        },
        stop() {
            this.flags = qt.None,
            this.depsTail = void 0,
            Ms(this)
        }
    };
    return i(),
    r
}
var hc = {
    exports: {}
}
  , mc = {}
  , pc = {
    exports: {}
}
  , gc = {};
var zp;
function $x() {
    if (zp)
        return gc;
    zp = 1;
    var a = Zi();
    function i(S, E) {
        return S === E && (S !== 0 || 1 / S === 1 / E) || S !== S && E !== E
    }
    var r = typeof Object.is == "function" ? Object.is : i
      , o = a.useState
      , c = a.useEffect
      , f = a.useLayoutEffect
      , h = a.useDebugValue;
    function g(S, E) {
        var _ = E()
          , w = o({
            inst: {
                value: _,
                getSnapshot: E
            }
        })
          , O = w[0].inst
          , C = w[1];
        return f(function() {
            O.value = _,
            O.getSnapshot = E,
            y(O) && C({
                inst: O
            })
        }, [S, _, E]),
        c(function() {
            return y(O) && C({
                inst: O
            }),
            S(function() {
                y(O) && C({
                    inst: O
                })
            })
        }, [S]),
        h(_),
        _
    }
    function y(S) {
        var E = S.getSnapshot;
        S = S.value;
        try {
            var _ = E();
            return !r(S, _)
        } catch {
            return !0
        }
    }
    function p(S, E) {
        return E()
    }
    var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : g;
    return gc.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : b,
    gc
}
var Op;
function t2() {
    return Op || (Op = 1,
    pc.exports = $x()),
    pc.exports
}
var Dp;
function e2() {
    if (Dp)
        return mc;
    Dp = 1;
    var a = Zi()
      , i = t2();
    function r(p, b) {
        return p === b && (p !== 0 || 1 / p === 1 / b) || p !== p && b !== b
    }
    var o = typeof Object.is == "function" ? Object.is : r
      , c = i.useSyncExternalStore
      , f = a.useRef
      , h = a.useEffect
      , g = a.useMemo
      , y = a.useDebugValue;
    return mc.useSyncExternalStoreWithSelector = function(p, b, S, E, _) {
        var w = f(null);
        if (w.current === null) {
            var O = {
                hasValue: !1,
                value: null
            };
            w.current = O
        } else
            O = w.current;
        w = g(function() {
            function M(W) {
                if (!k) {
                    if (k = !0,
                    Q = W,
                    W = E(W),
                    _ !== void 0 && O.hasValue) {
                        var X = O.value;
                        if (_(X, W))
                            return q = X
                    }
                    return q = W
                }
                if (X = q,
                o(Q, W))
                    return X;
                var K = E(W);
                return _ !== void 0 && _(X, K) ? (Q = W,
                X) : (Q = W,
                q = K)
            }
            var k = !1, Q, q, $ = S === void 0 ? null : S;
            return [function() {
                return M(b())
            }
            , $ === null ? void 0 : function() {
                return M($())
            }
            ]
        }, [b, S, E, _]);
        var C = c(p, w[0], w[1]);
        return h(function() {
            O.hasValue = !0,
            O.value = C
        }, [C]),
        y(C),
        C
    }
    ,
    mc
}
var Bp;
function n2() {
    return Bp || (Bp = 1,
    hc.exports = e2()),
    hc.exports
}
var a2 = n2();
function l2(a, i) {
    return a === i
}
function Zt(a, i, r=l2) {
    const o = I.useCallback(h => {
        if (!a)
            return () => {}
            ;
        const {unsubscribe: g} = a.subscribe(h);
        return g
    }
    , [a])
      , c = I.useCallback( () => a?.get(), [a]);
    return a2.useSyncExternalStoreWithSelector(o, c, c, i, r)
}
var i2 = {
    get: () => {}
    ,
    subscribe: () => ({
        unsubscribe: () => {}
    })
};
function qa(a) {
    const i = ce()
      , r = I.useContext(a.from ? Kx : Us)
      , o = a.from ?? r
      , c = o ? a.from ? i.stores.getRouteMatchStore(o) : i.stores.matchStores.get(o) : void 0
      , f = I.useRef(void 0);
    return Zt(c ?? i2, h => {
        if ((a.shouldThrow ?? !0) && !h && _e(),
        h === void 0)
            return;
        const g = a.select ? a.select(h) : h;
        if (a.structuralSharing ?? i.options.defaultStructuralSharing) {
            const y = la(f.current, g);
            return f.current = y,
            y
        }
        return g
    }
    )
}
function V0(a) {
    return qa({
        from: a.from,
        strict: a.strict,
        structuralSharing: a.structuralSharing,
        select: i => a.select ? a.select(i.loaderData) : i.loaderData
    })
}
function k0(a) {
    const {select: i, ...r} = a;
    return qa({
        ...r,
        select: o => i ? i(o.loaderDeps) : o.loaderDeps
    })
}
function X0(a) {
    return qa({
        from: a.from,
        shouldThrow: a.shouldThrow,
        structuralSharing: a.structuralSharing,
        strict: a.strict,
        select: i => {
            const r = a.strict === !1 ? i.params : i._strictParams;
            return a.select ? a.select(r) : r
        }
    })
}
function Q0(a) {
    return qa({
        from: a.from,
        strict: a.strict,
        shouldThrow: a.shouldThrow,
        structuralSharing: a.structuralSharing,
        select: i => a.select ? a.select(i.search) : i.search
    })
}
function Z0(a) {
    const i = ce();
    return I.useCallback(r => i.navigate({
        ...r,
        from: r.from ?? a?.from
    }), [a?.from, i])
}
function K0(a) {
    return qa({
        ...a,
        select: i => a.select ? a.select(i.context) : i.context
    })
}
var r2 = Yp();
function s2(a, i) {
    const r = ce()
      , o = Gx(i)
      , {activeProps: c, inactiveProps: f, activeOptions: h, to: g, preload: y, preloadDelay: p, preloadIntentProximity: b, hashScrollIntoView: S, replace: E, startTransition: _, resetScroll: w, viewTransition: O, children: C, target: M, disabled: k, style: Q, className: q, onClick: $, onBlur: W, onFocus: X, onMouseEnter: K, onMouseLeave: J, onTouchStart: rt, ignoreBlocker: et, params: dt, search: yt, hash: Gt, state: jt, mask: U, reloadDocument: Z, unsafeRelative: it, from: _t, _fromLocation: Tt, ...j} = a
      , Y = Yc()
      , F = I.useMemo( () => a, [r, a.from, a._fromLocation, a.hash, a.to, a.search, a.params, a.state, a.mask, a.unsafeRelative])
      , P = Zt(r.stores.location, Lt => Lt, (Lt, ae) => Lt.href === ae.href)
      , at = I.useMemo( () => {
        const Lt = {
            _fromLocation: P,
            ...F
        };
        return r.buildLocation(Lt)
    }
    , [r, P, F])
      , ft = at.maskedLocation ? at.maskedLocation.publicHref : at.publicHref
      , St = at.maskedLocation ? at.maskedLocation.external : at.external
      , kt = I.useMemo( () => h2(ft, St, r.history, k), [k, St, ft, r.history])
      , Ot = I.useMemo( () => {
        if (kt?.external)
            return As(kt.href, r.protocolAllowlist) ? void 0 : kt.href;
        if (!m2(g) && !(typeof g != "string" || g.indexOf(":") === -1))
            try {
                return new URL(g),
                As(g, r.protocolAllowlist) ? void 0 : g
            } catch {}
    }
    , [g, kt, r.protocolAllowlist])
      , en = I.useMemo( () => {
        if (Ot)
            return !1;
        if (h?.exact) {
            if (!$v(P.pathname, at.pathname, r.basepath))
                return !1
        } else {
            const Lt = Ts(P.pathname, r.basepath)
              , ae = Ts(at.pathname, r.basepath);
            if (!(Lt.startsWith(ae) && (Lt.length === ae.length || Lt[ae.length] === "/")))
                return !1
        }
        return (h?.includeSearch ?? !0) && !xe(P.search, at.search, {
            partial: !h?.exact,
            ignoreUndefined: !h?.explicitUndefined
        }) ? !1 : h?.includeHash ? Y && P.hash === at.hash : !0
    }
    , [h?.exact, h?.explicitUndefined, h?.includeHash, h?.includeSearch, P, Ot, Y, at.hash, at.pathname, at.search, r.basepath])
      , nn = en ? aa(c, {}) ?? o2 : yc
      , wn = en ? yc : aa(f, {}) ?? yc
      , Ll = [q, nn.className, wn.className].filter(Boolean).join(" ")
      , Ke = (Q || nn.style || wn.style) && {
        ...Q,
        ...nn.style,
        ...wn.style
    }
      , [Nl,Ya] = I.useState(!1)
      , Ji = I.useRef(!1)
      , an = a.reloadDocument || Ot ? !1 : y ?? r.options.defaultPreload
      , da = p ?? r.options.defaultPreloadDelay ?? 0
      , ke = I.useCallback( () => {
        r.preloadRoute({
            ...F,
            _builtLocation: at
        }).catch(Lt => {
            console.warn(Lt),
            console.warn(L1)
        }
        )
    }
    , [r, F, at]);
    qx(o, I.useCallback(Lt => {
        Lt?.isIntersecting && ke()
    }
    , [ke]), d2, {
        disabled: !!k || an !== "viewport"
    }),
    I.useEffect( () => {
        Ji.current || !k && an === "render" && (ke(),
        Ji.current = !0)
    }
    , [k, ke, an]);
    const Ul = Lt => {
        const ae = Lt.currentTarget.getAttribute("target")
          , Fe = M !== void 0 ? M : ae;
        if (!k && !p2(Lt) && !Lt.defaultPrevented && (!Fe || Fe === "_self") && Lt.button === 0) {
            Lt.preventDefault(),
            r2.flushSync( () => {
                Ya(!0)
            }
            );
            const Va = r.subscribe("onResolved", () => {
                Va(),
                Ya(!1)
            }
            );
            r.navigate({
                ...F,
                replace: E,
                resetScroll: w,
                hashScrollIntoView: S,
                startTransition: _,
                viewTransition: O,
                ignoreBlocker: et
            })
        }
    }
    ;
    if (Ot)
        return {
            ...j,
            ref: o,
            href: Ot,
            ...C && {
                children: C
            },
            ...M && {
                target: M
            },
            ...k && {
                disabled: k
            },
            ...Q && {
                style: Q
            },
            ...q && {
                className: q
            },
            ...$ && {
                onClick: $
            },
            ...W && {
                onBlur: W
            },
            ...X && {
                onFocus: X
            },
            ...K && {
                onMouseEnter: K
            },
            ...J && {
                onMouseLeave: J
            },
            ...rt && {
                onTouchStart: rt
            }
        };
    const Wi = Lt => {
        if (k || an !== "intent")
            return;
        if (!da) {
            ke();
            return
        }
        const ae = Lt.currentTarget;
        if (Hi.has(ae))
            return;
        const Fe = setTimeout( () => {
            Hi.delete(ae),
            ke()
        }
        , da);
        Hi.set(ae, Fe)
    }
      , Hs = Lt => {
        k || an !== "intent" || ke()
    }
      , fe = Lt => {
        if (k || !an || !da)
            return;
        const ae = Lt.currentTarget
          , Fe = Hi.get(ae);
        Fe && (clearTimeout(Fe),
        Hi.delete(ae))
    }
    ;
    return {
        ...j,
        ...nn,
        ...wn,
        href: kt?.href,
        ref: o,
        onClick: Rl([$, Ul]),
        onBlur: Rl([W, fe]),
        onFocus: Rl([X, Wi]),
        onMouseEnter: Rl([K, Wi]),
        onMouseLeave: Rl([J, fe]),
        onTouchStart: Rl([rt, Hs]),
        disabled: !!k,
        target: M,
        ...Ke && {
            style: Ke
        },
        ...Ll && {
            className: Ll
        },
        ...k && u2,
        ...en && c2,
        ...Y && Nl && f2
    }
}
var yc = {}
  , o2 = {
    className: "active"
}
  , u2 = {
    role: "link",
    "aria-disabled": !0
}
  , c2 = {
    "data-status": "active",
    "aria-current": "page"
}
  , f2 = {
    "data-transitioning": "transitioning"
}
  , Hi = new WeakMap
  , d2 = {
    rootMargin: "100px"
}
  , Rl = a => i => {
    for (const r of a)
        if (r) {
            if (i.defaultPrevented)
                return;
            r(i)
        }
}
;
function h2(a, i, r, o) {
    if (!o)
        return i ? {
            href: a,
            external: !0
        } : {
            href: r.createHref(a) || "/",
            external: !1
        }
}
function m2(a) {
    if (typeof a != "string")
        return !1;
    const i = a.charCodeAt(0);
    return i === 47 ? a.charCodeAt(1) !== 47 : i === 46
}
var ue = I.forwardRef( (a, i) => {
    const {_asChild: r, ...o} = a
      , {type: c, ...f} = s2(o, i)
      , h = typeof o.children == "function" ? o.children({
        isActive: f["data-status"] === "active"
    }) : o.children;
    if (!r) {
        const {disabled: g, ...y} = f;
        return I.createElement("a", y, h)
    }
    return I.createElement(r, f, h)
}
);
function p2(a) {
    return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)
}
var g2 = class extends e0 {
    constructor(i) {
        super(i),
        this.useMatch = r => qa({
            select: r?.select,
            from: this.id,
            structuralSharing: r?.structuralSharing
        }),
        this.useRouteContext = r => K0({
            ...r,
            from: this.id
        }),
        this.useSearch = r => Q0({
            select: r?.select,
            structuralSharing: r?.structuralSharing,
            from: this.id
        }),
        this.useParams = r => X0({
            select: r?.select,
            structuralSharing: r?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = r => k0({
            ...r,
            from: this.id
        }),
        this.useLoaderData = r => V0({
            ...r,
            from: this.id
        }),
        this.useNavigate = () => Z0({
            from: this.fullPath
        }),
        this.Link = Gi.forwardRef( (r, o) => m.jsx(ue, {
            ref: o,
            from: this.fullPath,
            ...r
        }))
    }
}
;
function y2(a) {
    return new g2(a)
}
var v2 = class extends U1 {
    constructor(a) {
        super(a),
        this.useMatch = i => qa({
            select: i?.select,
            from: this.id,
            structuralSharing: i?.structuralSharing
        }),
        this.useRouteContext = i => K0({
            ...i,
            from: this.id
        }),
        this.useSearch = i => Q0({
            select: i?.select,
            structuralSharing: i?.structuralSharing,
            from: this.id
        }),
        this.useParams = i => X0({
            select: i?.select,
            structuralSharing: i?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = i => k0({
            ...i,
            from: this.id
        }),
        this.useLoaderData = i => V0({
            ...i,
            from: this.id
        }),
        this.useNavigate = () => Z0({
            from: this.fullPath
        }),
        this.Link = Gi.forwardRef( (i, r) => m.jsx(ue, {
            ref: r,
            from: this.fullPath,
            ...i
        }))
    }
}
;
function S2(a) {
    return new v2(a)
}
function Bl(a) {
    return new b2(a,{
        silent: !0
    }).createRoute
}
var b2 = class {
    constructor(a, i) {
        this.path = a,
        this.createRoute = r => {
            const o = y2(r);
            return o.isRoot = !1,
            o
        }
        ,
        this.silent = i?.silent
    }
}
;
function x2(a, i) {
    let r, o, c, f;
    const h = () => (r || (r = a().then(y => {
        r = void 0,
        o = y[i]
    }
    ).catch(y => {
        if (c = y,
        Lv(c) && c instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
            const p = `tanstack_router_reload:${c.message}`;
            sessionStorage.getItem(p) || (sessionStorage.setItem(p, "1"),
            f = !0)
        }
    }
    )),
    r)
      , g = function(p) {
        if (f)
            throw window.location.reload(),
            new Promise( () => {}
            );
        if (c)
            throw c;
        if (!o)
            if (ws)
                ws(h());
            else
                throw h();
        return I.createElement(o, p)
    };
    return g.preload = h,
    g
}
function E2(a) {
    const i = ce()
      , r = `not-found-${Zt(i.stores.location, o => o.pathname)}-${Zt(i.stores.status, o => o)}`;
    return m.jsx(qc, {
        getResetKey: () => r,
        onCatch: (o, c) => {
            if (ne(o))
                a.onCatch?.(o, c);
            else
                throw o
        }
        ,
        errorComponent: ({error: o}) => {
            if (ne(o))
                return a.fallback?.(o);
            throw o
        }
        ,
        children: a.children
    })
}
function _2() {
    return m.jsx("p", {
        children: "Not Found"
    })
}
function jl(a) {
    return m.jsx(m.Fragment, {
        children: a.children
    })
}
function F0(a, i, r) {
    return i.options.notFoundComponent ? m.jsx(i.options.notFoundComponent, {
        ...r
    }) : a.options.defaultNotFoundComponent ? m.jsx(a.options.defaultNotFoundComponent, {
        ...r
    }) : m.jsx(_2, {})
}
function A2(a) {
    return null
}
function T2() {
    return A2(ce()),
    null
}
var J0 = I.memo(function({matchId: i}) {
    const r = ce()
      , o = r.stores.matchStores.get(i);
    o || _e();
    const c = Zt(r.stores.loadedAt, h => h)
      , f = Zt(o, h => h);
    return m.jsx(C2, {
        router: r,
        matchId: i,
        resetKey: c,
        matchState: I.useMemo( () => {
            const h = f.routeId
              , g = r.routesById[h].parentRoute?.id;
            return {
                routeId: h,
                ssr: f.ssr,
                _displayPending: f._displayPending,
                parentRouteId: g
            }
        }
        , [f._displayPending, f.routeId, f.ssr, r.routesById])
    })
});
function C2({router: a, matchId: i, resetKey: r, matchState: o}) {
    const c = a.routesById[o.routeId]
      , f = c.options.pendingComponent ?? a.options.defaultPendingComponent
      , h = f ? m.jsx(f, {}) : null
      , g = c.options.errorComponent ?? a.options.defaultErrorComponent
      , y = c.options.onCatch ?? a.options.defaultOnCatch
      , p = c.isRoot ? c.options.notFoundComponent ?? a.options.notFoundRoute?.options.component : c.options.notFoundComponent
      , b = o.ssr === !1 || o.ssr === "data-only"
      , S = (!c.isRoot || c.options.wrapInSuspense || b) && (c.options.wrapInSuspense ?? f ?? (c.options.errorComponent?.preload || b)) ? I.Suspense : jl
      , E = g ? qc : jl
      , _ = p ? E2 : jl;
    return m.jsxs(c.isRoot ? c.options.shellComponent ?? jl : jl, {
        children: [m.jsx(Us.Provider, {
            value: i,
            children: m.jsx(S, {
                fallback: h,
                children: m.jsx(E, {
                    getResetKey: () => r,
                    errorComponent: g || Gc,
                    onCatch: (w, O) => {
                        if (ne(w))
                            throw w.routeId ??= o.routeId,
                            w;
                        y?.(w, O)
                    }
                    ,
                    children: m.jsx(_, {
                        fallback: w => {
                            if (w.routeId ??= o.routeId,
                            !p || w.routeId && w.routeId !== o.routeId || !w.routeId && !c.isRoot)
                                throw w;
                            return I.createElement(p, w)
                        }
                        ,
                        children: b || o._displayPending ? m.jsx(Qx, {
                            fallback: h,
                            children: m.jsx(Lp, {
                                matchId: i
                            })
                        }) : m.jsx(Lp, {
                            matchId: i
                        })
                    })
                })
            })
        }), o.parentRouteId === La ? m.jsxs(m.Fragment, {
            children: [m.jsx(R2, {
                resetKey: r
            }), a.options.scrollRestoration && kp ? m.jsx(T2, {}) : null]
        }) : null]
    })
}
function R2({resetKey: a}) {
    const i = ce()
      , r = I.useRef(void 0);
    return qi( () => {
        const o = i.latestLocation.href;
        (r.current === void 0 || r.current !== o) && (i.emit({
            type: "onRendered",
            ...Ml(i.stores.location.get(), i.stores.resolvedLocation.get())
        }),
        r.current = o)
    }
    , [i.latestLocation.state.__TSR_key, a, i]),
    null
}
var Lp = I.memo(function({matchId: i}) {
    const r = ce()
      , o = (b, S) => r.getMatch(b.id)?._nonReactive[S] ?? b._nonReactive[S]
      , c = r.stores.matchStores.get(i);
    c || _e();
    const f = Zt(c, b => b)
      , h = f.routeId
      , g = r.routesById[h]
      , y = I.useMemo( () => {
        const b = (r.routesById[h].options.remountDeps ?? r.options.defaultRemountDeps)?.({
            routeId: h,
            loaderDeps: f.loaderDeps,
            params: f._strictParams,
            search: f._strictSearch
        });
        return b ? JSON.stringify(b) : void 0
    }
    , [h, f.loaderDeps, f._strictParams, f._strictSearch, r.options.defaultRemountDeps, r.routesById])
      , p = I.useMemo( () => {
        const b = g.options.component ?? r.options.defaultComponent;
        return b ? m.jsx(b, {}, y) : m.jsx(j2, {})
    }
    , [y, g.options.component, r.options.defaultComponent]);
    if (f._displayPending)
        throw o(f, "displayPendingPromise");
    if (f._forcePending)
        throw o(f, "minPendingPromise");
    if (f.status === "pending") {
        const b = g.options.pendingMinMs ?? r.options.defaultPendingMinMs;
        if (b) {
            const S = r.getMatch(f.id);
            if (S && !S._nonReactive.minPendingPromise) {
                const E = Ua();
                S._nonReactive.minPendingPromise = E,
                setTimeout( () => {
                    E.resolve(),
                    S._nonReactive.minPendingPromise = void 0
                }
                , b)
            }
        }
        throw o(f, "loadPromise")
    }
    if (f.status === "notFound")
        return ne(f.error) || _e(),
        F0(r, g, f.error);
    if (f.status === "redirected")
        throw Ee(f.error) || _e(),
        o(f, "loadPromise");
    if (f.status === "error")
        throw f.error;
    return p
})
  , j2 = I.memo(function() {
    const i = ce()
      , r = I.useContext(Us);
    let o, c = !1, f;
    {
        const p = r ? i.stores.matchStores.get(r) : void 0;
        [o,c] = Zt(p, b => [b?.routeId, b?.globalNotFound ?? !1]),
        f = Zt(i.stores.matchesId, b => b[b.findIndex(S => S === r) + 1])
    }
    const h = o ? i.routesById[o] : void 0
      , g = i.options.defaultPendingComponent ? m.jsx(i.options.defaultPendingComponent, {}) : null;
    if (c)
        return h || _e(),
        F0(i, h, void 0);
    if (!f)
        return null;
    const y = m.jsx(J0, {
        matchId: f
    });
    return o === La ? m.jsx(I.Suspense, {
        fallback: g,
        children: y
    }) : y
});
function w2() {
    const a = ce()
      , i = I.useRef({
        router: a,
        mounted: !1
    })
      , [r,o] = I.useState(!1)
      , c = Zt(a.stores.isLoading, S => S)
      , f = Zt(a.stores.hasPending, S => S)
      , h = dc(c)
      , g = c || r || f
      , y = dc(g)
      , p = c || f
      , b = dc(p);
    return a.startTransition = S => {
        o(!0),
        I.startTransition( () => {
            S(),
            o(!1)
        }
        )
    }
    ,
    I.useEffect( () => {
        const S = a.history.subscribe(a.load)
          , E = a.buildLocation({
            to: a.latestLocation.pathname,
            search: !0,
            params: !0,
            hash: !0,
            state: !0,
            _includeValidateSearch: !0
        });
        return ra(a.latestLocation.publicHref) !== ra(E.publicHref) && a.commitLocation({
            ...E,
            replace: !0
        }),
        () => {
            S()
        }
    }
    , [a, a.history]),
    qi( () => {
        if (typeof window < "u" && a.ssr || i.current.router === a && i.current.mounted)
            return;
        i.current = {
            router: a,
            mounted: !0
        },
        (async () => {
            try {
                await a.load()
            } catch (E) {
                console.error(E)
            }
        }
        )()
    }
    , [a]),
    qi( () => {
        h && !c && a.emit({
            type: "onLoad",
            ...Ml(a.stores.location.get(), a.stores.resolvedLocation.get())
        })
    }
    , [h, a, c]),
    qi( () => {
        b && !p && a.emit({
            type: "onBeforeRouteMount",
            ...Ml(a.stores.location.get(), a.stores.resolvedLocation.get())
        })
    }
    , [p, b, a]),
    qi( () => {
        if (y && !g) {
            const S = Ml(a.stores.location.get(), a.stores.resolvedLocation.get());
            a.emit({
                type: "onResolved",
                ...S
            }),
            G0( () => {
                a.stores.status.set("idle"),
                a.stores.resolvedLocation.set(a.stores.location.get())
            }
            ),
            S.hrefChanged && H1(a)
        }
    }
    , [g, y, a]),
    null
}
function M2() {
    const a = ce()
      , i = a.routesById[La].options.pendingComponent ?? a.options.defaultPendingComponent
      , r = i ? m.jsx(i, {}) : null
      , o = m.jsxs(typeof document < "u" && a.ssr ? jl : I.Suspense, {
        fallback: r,
        children: [m.jsx(w2, {}), m.jsx(z2, {})]
    });
    return a.options.InnerWrap ? m.jsx(a.options.InnerWrap, {
        children: o
    }) : o
}
function z2() {
    const a = ce()
      , i = Zt(a.stores.firstId, c => c)
      , r = Zt(a.stores.loadedAt, c => c)
      , o = i ? m.jsx(J0, {
        matchId: i
    }) : null;
    return m.jsx(Us.Provider, {
        value: i,
        children: a.options.disableGlobalCatchBoundary ? o : m.jsx(qc, {
            getResetKey: () => r,
            errorComponent: Gc,
            onCatch: void 0,
            children: o
        })
    })
}
var O2 = a => ({
    createMutableStore: Mp,
    createReadonlyStore: Mp,
    batch: G0
})
  , D2 = a => new B2(a)
  , B2 = class extends R1 {
    constructor(a) {
        super(a, O2)
    }
}
;
function L2({router: a, children: i, ...r}) {
    Object.keys(r).length > 0 && a.update({
        ...a.options,
        ...r,
        context: {
            ...a.options.context,
            ...r.context
        }
    });
    const o = m.jsx(H0.Provider, {
        value: a,
        children: i
    });
    return a.options.Wrap ? m.jsx(a.options.Wrap, {
        children: o
    }) : o
}
function N2({router: a, ...i}) {
    return m.jsx(L2, {
        router: a,
        ...i,
        children: m.jsx(M2, {})
    })
}
function U2(a) {
    const i = ce()
      , r = I.useRef(void 0);
    return Zt(i.stores.location, o => {
        const c = o;
        if (i.options.defaultStructuralSharing) {
            const f = la(r.current, c);
            return r.current = f,
            f
        }
        return c
    }
    )
}
function W0({tag: a, attrs: i, children: r, nonce: o}) {
    switch (a) {
    case "title":
        return m.jsx("title", {
            ...i,
            suppressHydrationWarning: !0,
            children: r
        });
    case "meta":
        return m.jsx("meta", {
            ...i,
            suppressHydrationWarning: !0
        });
    case "link":
        return m.jsx("link", {
            ...i,
            precedence: i?.precedence ?? (i?.rel === "stylesheet" ? "default" : void 0),
            nonce: o,
            suppressHydrationWarning: !0
        });
    case "style":
        return m.jsx("style", {
            ...i,
            dangerouslySetInnerHTML: {
                __html: r
            },
            nonce: o
        });
    case "script":
        return m.jsx(H2, {
            attrs: i,
            children: r
        });
    default:
        return null
    }
}
function H2({attrs: a, children: i}) {
    ce();
    const r = Yc()
      , o = typeof a?.type == "string" && a.type !== "" && a.type !== "text/javascript" && a.type !== "module";
    if (I.useEffect( () => {
        if (!o) {
            if (a?.src) {
                const c = ( () => {
                    try {
                        const h = document.baseURI || window.location.href;
                        return new URL(a.src,h).href
                    } catch {
                        return a.src
                    }
                }
                )();
                if (Array.from(document.querySelectorAll("script[src]")).find(h => h.src === c))
                    return;
                const f = document.createElement("script");
                for (const [h,g] of Object.entries(a))
                    h !== "suppressHydrationWarning" && g !== void 0 && g !== !1 && f.setAttribute(h, typeof g == "boolean" ? "" : String(g));
                return document.head.appendChild(f),
                () => {
                    f.parentNode && f.parentNode.removeChild(f)
                }
            }
            if (typeof i == "string") {
                const c = typeof a?.type == "string" ? a.type : "text/javascript"
                  , f = typeof a?.nonce == "string" ? a.nonce : void 0;
                if (Array.from(document.querySelectorAll("script:not([src])")).find(g => {
                    if (!(g instanceof HTMLScriptElement))
                        return !1;
                    const y = g.getAttribute("type") ?? "text/javascript"
                      , p = g.getAttribute("nonce") ?? void 0;
                    return g.textContent === i && y === c && p === f
                }
                ))
                    return;
                const h = document.createElement("script");
                if (h.textContent = i,
                a)
                    for (const [g,y] of Object.entries(a))
                        g !== "suppressHydrationWarning" && y !== void 0 && y !== !1 && h.setAttribute(g, typeof y == "boolean" ? "" : String(y));
                return document.head.appendChild(h),
                () => {
                    h.parentNode && h.parentNode.removeChild(h)
                }
            }
        }
    }
    , [a, i, o]),
    o && typeof i == "string")
        return m.jsx("script", {
            ...a,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: i
            }
        });
    if (!r) {
        if (a?.src)
            return m.jsx("script", {
                ...a,
                suppressHydrationWarning: !0
            });
        if (typeof i == "string")
            return m.jsx("script", {
                ...a,
                dangerouslySetInnerHTML: {
                    __html: i
                },
                suppressHydrationWarning: !0
            })
    }
    return null
}
var q2 = a => {
    const i = ce()
      , r = i.options.ssr?.nonce
      , o = Zt(i.stores.matches, p => p.map(b => b.meta).filter(Boolean), xe)
      , c = I.useMemo( () => {
        const p = []
          , b = {};
        let S;
        for (let E = o.length - 1; E >= 0; E--) {
            const _ = o[E];
            for (let w = _.length - 1; w >= 0; w--) {
                const O = _[w];
                if (O)
                    if (O.title)
                        S || (S = {
                            tag: "title",
                            children: O.title
                        });
                    else if ("script:ld+json"in O)
                        try {
                            const C = JSON.stringify(O["script:ld+json"]);
                            p.push({
                                tag: "script",
                                attrs: {
                                    type: "application/ld+json"
                                },
                                children: Gv(C)
                            })
                        } catch {}
                    else {
                        const C = O.name ?? O.property;
                        if (C) {
                            if (b[C])
                                continue;
                            b[C] = !0
                        }
                        p.push({
                            tag: "meta",
                            attrs: {
                                ...O,
                                nonce: r
                            }
                        })
                    }
            }
        }
        return S && p.push(S),
        r && p.push({
            tag: "meta",
            attrs: {
                property: "csp-nonce",
                content: r
            }
        }),
        p.reverse(),
        p
    }
    , [o, r])
      , f = Zt(i.stores.matches, p => {
        const b = p.map(_ => _.links).filter(Boolean).flat(1).map(_ => ({
            tag: "link",
            attrs: {
                ..._,
                nonce: r
            }
        }))
          , S = i.ssr?.manifest
          , E = p.map(_ => S?.routes[_.routeId]?.assets ?? []).filter(Boolean).flat(1).filter(_ => _.tag === "link").map(_ => ({
            tag: "link",
            attrs: {
                ..._.attrs,
                crossOrigin: mp(a, "stylesheet") ?? _.attrs?.crossOrigin,
                suppressHydrationWarning: !0,
                nonce: r
            }
        }));
        return [...b, ...E]
    }
    , xe)
      , h = Zt(i.stores.matches, p => {
        const b = [];
        return p.map(S => i.looseRoutesById[S.routeId]).forEach(S => i.ssr?.manifest?.routes[S.id]?.preloads?.filter(Boolean).forEach(E => {
            const _ = N1(E);
            b.push({
                tag: "link",
                attrs: {
                    rel: "modulepreload",
                    href: _.href,
                    crossOrigin: mp(a, "modulepreload") ?? _.crossOrigin,
                    nonce: r
                }
            })
        }
        )),
        b
    }
    , xe)
      , g = Zt(i.stores.matches, p => p.map(b => b.styles).flat(1).filter(Boolean).map( ({children: b, ...S}) => ({
        tag: "style",
        attrs: {
            ...S,
            nonce: r
        },
        children: b
    })), xe)
      , y = Zt(i.stores.matches, p => p.map(b => b.headScripts).flat(1).filter(Boolean).map( ({children: b, ...S}) => ({
        tag: "script",
        attrs: {
            ...S,
            nonce: r
        },
        children: b
    })), xe);
    return G2([...c, ...h, ...f, ...g, ...y], p => JSON.stringify(p))
}
;
function G2(a, i) {
    const r = new Set;
    return a.filter(o => {
        const c = i(o);
        return r.has(c) ? !1 : (r.add(c),
        !0)
    }
    )
}
function Y2(a) {
    const i = q2(a.assetCrossOrigin)
      , r = ce().options.ssr?.nonce;
    return m.jsx(m.Fragment, {
        children: i.map(o => I.createElement(W0, {
            ...o,
            key: `tsr-meta-${JSON.stringify(o)}`,
            nonce: r
        }))
    })
}
var V2 = () => {
    const a = ce()
      , i = a.options.ssr?.nonce
      , r = f => {
        const h = []
          , g = a.ssr?.manifest;
        return g ? (f.map(y => a.looseRoutesById[y.routeId]).forEach(y => g.routes[y.id]?.assets?.filter(p => p.tag === "script").forEach(p => {
            h.push({
                tag: "script",
                attrs: {
                    ...p.attrs,
                    nonce: i
                },
                children: p.children
            })
        }
        )),
        h) : []
    }
      , o = f => f.map(h => h.scripts).flat(1).filter(Boolean).map( ({children: h, ...g}) => ({
        tag: "script",
        attrs: {
            ...g,
            suppressHydrationWarning: !0,
            nonce: i
        },
        children: h
    }))
      , c = Zt(a.stores.matches, r, xe);
    return k2(a, Zt(a.stores.matches, o, xe), c)
}
;
function k2(a, i, r) {
    let o;
    a.serverSsr && (o = a.serverSsr.takeBufferedScripts());
    const c = [...i, ...r];
    return o && c.unshift(o),
    m.jsx(m.Fragment, {
        children: c.map( (f, h) => I.createElement(W0, {
            ...f,
            key: `tsr-scripts-${f.tag}-${h}`
        }))
    })
}
const P0 = (...a) => a.filter( (i, r, o) => !!i && i.trim() !== "" && o.indexOf(i) === r).join(" ").trim();
const X2 = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Q2 = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, r, o) => o ? o.toUpperCase() : r.toLowerCase());
const Np = a => {
    const i = Q2(a);
    return i.charAt(0).toUpperCase() + i.slice(1)
}
;
var Z2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const K2 = a => {
    for (const i in a)
        if (i.startsWith("aria-") || i === "role" || i === "title")
            return !0;
    return !1
}
;
const F2 = I.forwardRef( ({color: a="currentColor", size: i=24, strokeWidth: r=2, absoluteStrokeWidth: o, className: c="", children: f, iconNode: h, ...g}, y) => I.createElement("svg", {
    ref: y,
    ...Z2,
    width: i,
    height: i,
    stroke: a,
    strokeWidth: o ? Number(r) * 24 / Number(i) : r,
    className: P0("lucide", c),
    ...!f && !K2(g) && {
        "aria-hidden": "true"
    },
    ...g
}, [...h.map( ([p,b]) => I.createElement(p, b)), ...Array.isArray(f) ? f : [f]]));
const fa = (a, i) => {
    const r = I.forwardRef( ({className: o, ...c}, f) => I.createElement(F2, {
        ref: f,
        iconNode: i,
        className: P0(`lucide-${X2(Np(a))}`, `lucide-${a}`, o),
        ...c
    }));
    return r.displayName = Np(a),
    r
}
;
const J2 = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , jn = fa("arrow-right", J2);
const W2 = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , P2 = fa("check", W2);
const I2 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 6v6l4 2",
    key: "mmk7yg"
}]]
  , $2 = fa("clock", I2);
const t3 = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , e3 = fa("mail", t3);
const n3 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , a3 = fa("map-pin", n3);
const l3 = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , i3 = fa("menu", l3);
const r3 = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , s3 = fa("phone", r3);
const o3 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , u3 = fa("x", o3)
  , Up = [{
    to: "/",
    label: "Home"
}, {
    to: "/about",
    label: "About"
}, {
    to: "/services",
    label: "Services"
}, {
    to: "/projects",
    label: "Portfolio"
}, {
    to: "/contact",
    label: "Contact"
}];
function c3() {
    const [a,i] = I.useState(!1)
      , [r,o] = I.useState(!1)
      , c = U2();
    return I.useEffect( () => {
        const f = () => i(window.scrollY > 60);
        return window.addEventListener("scroll", f, {
            passive: !0
        }),
        f(),
        () => window.removeEventListener("scroll", f)
    }
    , []),
    I.useEffect( () => {
        o(!1)
    }
    , [c.pathname]),
    m.jsxs("header", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: "background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease",
            background: a ? "rgba(12, 12, 11, 0.96)" : "transparent",
            backdropFilter: a ? "blur(12px)" : "none",
            borderBottom: a ? "1px solid rgba(200, 168, 107, 0.12)" : "1px solid transparent"
        },
        children: [m.jsxs("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "80px"
            },
            className: "px-6 lg:px-12",
            children: [m.jsxs(ue, {
                to: "/",
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none"
                },
                children: [m.jsx(f3, {}), m.jsxs("div", {
                    children: [m.jsx("div", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "13px",
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            color: "#EDE9E0",
                            lineHeight: 1.2
                        },
                        children: "Waypoint"
                    }), m.jsx("div", {
                        style: {
                            fontSize: "9px",
                            letterSpacing: "0.42em",
                            textTransform: "uppercase",
                            color: "#C8A86B",
                            lineHeight: 1.2,
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontWeight: 400
                        },
                        children: "Builders LLC"
                    })]
                })]
            }), m.jsx("nav", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "2.5rem"
                },
                className: "hidden lg:flex",
                children: Up.map(f => {
                    const h = c.pathname === f.to;
                    return m.jsx(ue, {
                        to: f.to,
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            fontWeight: 400,
                            textDecoration: "none",
                            color: h ? "#C8A86B" : "#7A7570",
                            transition: "color 0.3s ease",
                            paddingBottom: "2px",
                            borderBottom: h ? "1px solid rgba(200, 168, 107, 0.5)" : "1px solid transparent"
                        },
                        onMouseEnter: g => {
                            h || (g.target.style.color = "#C8A86B")
                        }
                        ,
                        onMouseLeave: g => {
                            h || (g.target.style.color = "#7A7570")
                        }
                        ,
                        children: f.label
                    }, f.to)
                }
                )
            }), m.jsx(ue, {
                to: "/contact",
                className: "hidden lg:flex",
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: "#C8A86B",
                    border: "1px solid rgba(200, 168, 107, 0.35)",
                    padding: "10px 22px",
                    transition: "border-color 0.3s ease, background 0.3s ease"
                },
                onMouseEnter: f => {
                    const h = f.currentTarget;
                    h.style.borderColor = "#C8A86B",
                    h.style.background = "rgba(200, 168, 107, 0.06)"
                }
                ,
                onMouseLeave: f => {
                    const h = f.currentTarget;
                    h.style.borderColor = "rgba(200, 168, 107, 0.35)",
                    h.style.background = "transparent"
                }
                ,
                children: "Begin Your Build"
            }), m.jsx("button", {
                onClick: () => o(!r),
                className: "lg:hidden",
                style: {
                    background: "none",
                    border: "none",
                    color: "#EDE9E0",
                    cursor: "pointer",
                    padding: "8px"
                },
                "aria-label": "Toggle menu",
                children: r ? m.jsx(u3, {
                    size: 20
                }) : m.jsx(i3, {
                    size: 20
                })
            })]
        }), r && m.jsx("div", {
            style: {
                background: "#141412",
                borderTop: "1px solid rgba(200, 168, 107, 0.12)",
                padding: "2rem 1.5rem 2.5rem"
            },
            className: "lg:hidden",
            children: m.jsxs("nav", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem"
                },
                children: [Up.map(f => m.jsx(ue, {
                    to: f.to,
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "12px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        color: c.pathname === f.to ? "#C8A86B" : "#9A9590"
                    },
                    children: f.label
                }, f.to)), m.jsx(ue, {
                    to: "/contact",
                    style: {
                        display: "block",
                        textAlign: "center",
                        border: "1px solid rgba(200, 168, 107, 0.4)",
                        color: "#C8A86B",
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        padding: "14px",
                        marginTop: "0.5rem",
                        textDecoration: "none"
                    },
                    children: "Begin Your Build"
                })]
            })
        })]
    })
}
function f3() {
    return m.jsx("div", {
        style: {
            width: "40px",
            height: "40px",
            border: "1px solid rgba(200, 168, 107, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
        },
        children: m.jsx("svg", {
            width: "22",
            height: "18",
            viewBox: "0 0 22 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: m.jsx("path", {
                d: "M1 1L5.5 17L11 6L16.5 17L21 1",
                stroke: "#C8A86B",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
            })
        })
    })
}
function d3() {
    return m.jsx("footer", {
        style: {
            background: "#0C0C0B",
            borderTop: "1px solid rgba(200, 168, 107, 0.1)",
            paddingTop: "5rem",
            paddingBottom: "2.5rem"
        },
        children: m.jsxs("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 3rem"
            },
            className: "px-6 lg:px-12",
            children: [m.jsxs("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "3rem",
                    marginBottom: "4rem"
                },
                className: "lg:grid-cols-4",
                children: [m.jsxs("div", {
                    style: {
                        gridColumn: "span 1"
                    },
                    children: [m.jsxs("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            marginBottom: "1.5rem"
                        },
                        children: [m.jsx(h3, {}), m.jsxs("div", {
                            children: [m.jsx("div", {
                                style: {
                                    fontFamily: "Cormorant Garamond, Georgia, serif",
                                    fontSize: "14px",
                                    letterSpacing: "0.28em",
                                    textTransform: "uppercase",
                                    color: "#EDE9E0",
                                    lineHeight: 1.2
                                },
                                children: "Waypoint"
                            }), m.jsx("div", {
                                style: {
                                    fontSize: "9px",
                                    letterSpacing: "0.42em",
                                    textTransform: "uppercase",
                                    color: "#C8A86B",
                                    lineHeight: 1.2
                                },
                                children: "Builders LLC"
                            })]
                        })]
                    }), m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "13px",
                            lineHeight: 1.8,
                            color: "#5A5550",
                            maxWidth: "240px"
                        },
                        children: "Crafting extraordinary luxury residences where precision meets artistry."
                    })]
                }), m.jsx(vc, {
                    title: "Company",
                    links: [{
                        label: "About Us",
                        to: "/about"
                    }, {
                        label: "Our Philosophy",
                        to: "/about"
                    }, {
                        label: "Leadership",
                        to: "/about"
                    }, {
                        label: "Careers",
                        to: "/contact"
                    }]
                }), m.jsx(vc, {
                    title: "Services",
                    links: [{
                        label: "Custom Homes",
                        to: "/services"
                    }, {
                        label: "Architectural Design",
                        to: "/services"
                    }, {
                        label: "Interior Finishing",
                        to: "/services"
                    }, {
                        label: "Renovations",
                        to: "/services"
                    }]
                }), m.jsx(vc, {
                    title: "Connect",
                    links: [{
                        label: "Portfolio",
                        to: "/projects"
                    }, {
                        label: "Contact Us",
                        to: "/contact"
                    }, {
                        label: "Begin Your Build",
                        to: "/contact"
                    }, {
                        label: "Request Consultation",
                        to: "/contact"
                    }]
                })]
            }), m.jsx("div", {
                style: {
                    height: "1px",
                    background: "rgba(200, 168, 107, 0.08)",
                    marginBottom: "2rem"
                }
            }), m.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "flex-start"
                },
                className: "lg:flex-row lg:items-center lg:justify-between",
                children: [m.jsxs("p", {
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        color: "#3A3830"
                    },
                    children: ["© ", new Date().getFullYear(), " Waypoint Builders LLC. All rights reserved."]
                }), m.jsx("p", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "13px",
                        fontStyle: "italic",
                        color: "#3A3830",
                        letterSpacing: "0.05em"
                    },
                    children: "Building Beyond Expectations"
                })]
            })]
        })
    })
}
function h3() {
    return m.jsx("div", {
        style: {
            width: "36px",
            height: "36px",
            border: "1px solid rgba(200, 168, 107, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
        },
        children: m.jsx("svg", {
            width: "20",
            height: "16",
            viewBox: "0 0 22 18",
            fill: "none",
            children: m.jsx("path", {
                d: "M1 1L5.5 17L11 6L16.5 17L21 1",
                stroke: "#C8A86B",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
            })
        })
    })
}
function vc({title: a, links: i}) {
    return m.jsxs("div", {
        children: [m.jsx("div", {
            style: {
                fontFamily: "DM Sans, system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#C8A86B",
                marginBottom: "1.5rem",
                fontWeight: 500
            },
            children: a
        }), m.jsx("ul", {
            style: {
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem"
            },
            children: i.map(r => m.jsx("li", {
                children: m.jsx(ue, {
                    to: r.to,
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "13px",
                        color: "#5A5550",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                        letterSpacing: "0.02em"
                    },
                    onMouseEnter: o => o.target.style.color = "#C8A86B",
                    onMouseLeave: o => o.target.style.color = "#5A5550",
                    children: r.label
                })
            }, r.label))
        })]
    })
}
const Ga = S2({
    head: () => ({
        links: [{
            rel: "icon",
            type: "image/png",
            href: "/favicon.png"
        }, {
            rel: "shortcut icon",
            href: "/favicon.ico"
        }, {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        }, {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous"
        }, {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
        }],
        meta: [{
            charSet: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            title: "Waypoint Builders LLC — Luxury Custom Home Building"
        }, {
            name: "description",
            content: "Waypoint Builders LLC crafts extraordinary luxury custom homes with uncompromising quality, precision craftsmanship, and a deeply personal approach to every build."
        }]
    }),
    shellComponent: m3
});
function m3({children: a}) {
    return m.jsxs("html", {
        lang: "en",
        children: [m.jsx("head", {
            children: m.jsx(Y2, {})
        }), m.jsxs("body", {
            children: [m.jsx(c3, {}), a, m.jsx(d3, {}), m.jsx(V2, {})]
        })]
    })
}
const p3 = Bl("/services")({
    component: v3,
    head: () => ({
        meta: [{
            title: "Services — Waypoint Builders LLC"
        }]
    })
})
  , g3 = [{
    number: "01",
    title: "Custom Home Building",
    subtitle: "Ground-up luxury construction",
    desc: "Our flagship service: the complete ground-up construction of a bespoke residence, designed entirely around your life and aspirations. Every custom home we build begins with deep listening and ends with extraordinary results.",
    features: ["Full site acquisition support & evaluation", "Collaborative design with award-winning architects", "Premium material sourcing & procurement", "Custom millwork and artisan finishes", "Smart home integration & automation", "Landscape and exterior design coordination", "Dedicated project manager throughout", "10-year structural warranty"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80&fit=crop"
}, {
    number: "02",
    title: "Architectural Design",
    subtitle: "Vision made tangible",
    desc: "Through our in-house design studio and a network of partner architects, we translate your vision into detailed construction documents that guide every trade on your project. Our design process is collaborative, iterative, and deeply personal.",
    features: ["Site analysis and conceptual design", "Interior and exterior architectural drawings", "3D rendering and virtual walkthroughs", "Material and finish specification", "Sustainable design consultation", "Structural and MEP engineering coordination"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&fit=crop"
}, {
    number: "03",
    title: "Interior Finishing",
    subtitle: "Refined to the last detail",
    desc: "A Waypoint home is defined by the exquisite quality of its interior finishes. Our design team sources materials from the world's finest suppliers — stone quarries in Italy, custom cabinet makers in Germany, and artisan tile studios in Portugal.",
    features: ["Custom cabinetry and millwork", "Natural stone and hardwood selection", "Artisan tile and mosaic work", "Bespoke hardware and fixtures", "Custom lighting design", "Built-in furniture and architectural details"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&fit=crop"
}, {
    number: "04",
    title: "Estate Renovations",
    subtitle: "Transform without compromise",
    desc: "Breathing new life into an existing luxury property requires equal parts skill and sensitivity. Our renovation team brings the same standard of craftsmanship to renovation projects as we do to new builds, honoring the existing architecture while elevating every detail.",
    features: ["Structural assessment and planning", "Historic preservation expertise", "Full kitchen and bath renovations", "Room additions and expansions", "Systems modernization (HVAC, electrical, plumbing)", "Pool and outdoor living renovation"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&fit=crop"
}]
  , y3 = [{
    step: "01",
    title: "Discovery",
    desc: "A private consultation to understand your vision, your site, and your budget. We ask the questions others don't."
}, {
    step: "02",
    title: "Design",
    desc: "Working with our architects and your input, we develop detailed plans, 3D visualizations, and material palettes."
}, {
    step: "03",
    title: "Build",
    desc: "Our master tradespeople bring the design to life with the precision and care that defines every Waypoint project."
}, {
    step: "04",
    title: "Handover",
    desc: "A final walkthrough to your exacting standards — and a relationship that extends well beyond move-in day."
}];
function v3() {
    return m.jsxs("main", {
        style: {
            background: "#0C0C0B"
        },
        children: [m.jsx("section", {
            style: {
                paddingTop: "160px",
                paddingBottom: "5rem",
                borderBottom: "1px solid rgba(200, 168, 107, 0.08)"
            },
            className: "px-6 lg:px-12",
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto"
                },
                children: [m.jsx("div", {
                    className: "section-label",
                    children: "What We Offer"
                }), m.jsxs("div", {
                    style: {
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "2rem"
                    },
                    children: [m.jsxs("h1", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "clamp(3rem, 6vw, 6.5rem)",
                            fontWeight: 300,
                            color: "#EDE9E0",
                            margin: 0,
                            lineHeight: 1.02,
                            letterSpacing: "-0.01em"
                        },
                        children: ["Services Built", m.jsx("br", {}), "Around ", m.jsx("span", {
                            style: {
                                fontStyle: "italic",
                                color: "#C8A86B"
                            },
                            children: "You"
                        })]
                    }), m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "15px",
                            lineHeight: 1.8,
                            color: "#5A5550",
                            maxWidth: "380px",
                            fontWeight: 300
                        },
                        children: "From concept to completion, we offer a full spectrum of luxury building services — delivered with the same uncompromising standard across every engagement."
                    })]
                })]
            })
        }), g3.map( (a, i) => m.jsx(S3, {
            service: a,
            reverse: i % 2 === 1
        }, a.number)), m.jsx("section", {
            style: {
                background: "#141412",
                padding: "clamp(5rem, 10vw, 9rem) 0",
                borderTop: "1px solid rgba(200, 168, 107, 0.08)"
            },
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto"
                },
                className: "px-6 lg:px-12",
                children: [m.jsxs("div", {
                    style: {
                        marginBottom: "4rem",
                        textAlign: "center"
                    },
                    children: [m.jsx("div", {
                        className: "section-label",
                        style: {
                            justifyContent: "center"
                        },
                        children: "Our Approach"
                    }), m.jsxs("h2", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "clamp(2.2rem, 4vw, 4rem)",
                            fontWeight: 300,
                            color: "#EDE9E0",
                            margin: 0,
                            lineHeight: 1.1
                        },
                        children: ["The Waypoint ", m.jsx("span", {
                            style: {
                                fontStyle: "italic",
                                color: "#C8A86B"
                            },
                            children: "Process"
                        })]
                    })]
                }), m.jsx("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gap: "1px",
                        background: "rgba(200, 168, 107, 0.07)"
                    },
                    className: "lg:grid-cols-4",
                    children: y3.map(a => m.jsxs("div", {
                        style: {
                            background: "#141412",
                            padding: "3.5rem 2.5rem",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [m.jsx("div", {
                            "aria-hidden": "true",
                            style: {
                                position: "absolute",
                                top: "1rem",
                                right: "1.5rem",
                                fontFamily: "Cormorant Garamond, Georgia, serif",
                                fontSize: "6rem",
                                fontWeight: 300,
                                color: "rgba(200, 168, 107, 0.05)",
                                lineHeight: 1
                            },
                            children: a.step
                        }), m.jsxs("div", {
                            style: {
                                fontFamily: "DM Sans, system-ui, sans-serif",
                                fontSize: "10px",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                color: "#C8A86B",
                                marginBottom: "1.5rem"
                            },
                            children: ["Step ", a.step]
                        }), m.jsx("h3", {
                            style: {
                                fontFamily: "Cormorant Garamond, Georgia, serif",
                                fontSize: "1.8rem",
                                fontWeight: 400,
                                color: "#EDE9E0",
                                margin: "0 0 1rem",
                                lineHeight: 1.2
                            },
                            children: a.title
                        }), m.jsx("p", {
                            style: {
                                fontFamily: "DM Sans, system-ui, sans-serif",
                                fontSize: "13px",
                                lineHeight: 1.8,
                                color: "#5A5550",
                                margin: 0,
                                fontWeight: 300
                            },
                            children: a.desc
                        })]
                    }, a.step))
                })]
            })
        }), m.jsx("section", {
            style: {
                background: "#0C0C0B",
                padding: "6rem 0",
                textAlign: "center"
            },
            children: m.jsxs("div", {
                className: "px-6",
                children: [m.jsx("h2", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 300,
                        color: "#EDE9E0",
                        margin: "0 0 2.5rem",
                        fontStyle: "italic"
                    },
                    children: "Ready to begin your project?"
                }), m.jsxs(ue, {
                    to: "/contact",
                    className: "btn-gold",
                    children: ["Request a Consultation", m.jsx(jn, {
                        size: 14
                    })]
                })]
            })
        })]
    })
}
function S3({service: a, reverse: i}) {
    return m.jsx("section", {
        style: {
            padding: "clamp(5rem, 8vw, 8rem) 0",
            borderBottom: "1px solid rgba(200, 168, 107, 0.06)",
            background: i ? "#0E0E0D" : "#0C0C0B"
        },
        children: m.jsxs("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "4rem",
                alignItems: "center"
            },
            className: `px-6 lg:px-12 lg:grid-cols-2 ${i ? "lg:[direction:rtl]" : ""}`,
            children: [m.jsx("div", {
                style: {
                    direction: "ltr",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    position: "relative"
                },
                children: m.jsx("img", {
                    src: a.image,
                    alt: a.title,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.8s ease"
                    },
                    onMouseEnter: r => r.target.style.transform = "scale(1.04)",
                    onMouseLeave: r => r.target.style.transform = "scale(1)"
                })
            }), m.jsxs("div", {
                style: {
                    direction: "ltr"
                },
                children: [m.jsxs("div", {
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: "#C8A86B",
                        marginBottom: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem"
                    },
                    children: [m.jsx("span", {
                        style: {
                            display: "block",
                            width: "32px",
                            height: "1px",
                            background: "#C8A86B"
                        }
                    }), a.number]
                }), m.jsx("h2", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                        fontWeight: 300,
                        color: "#EDE9E0",
                        margin: "0 0 0.5rem",
                        lineHeight: 1.15
                    },
                    children: a.title
                }), m.jsx("div", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "1.1rem",
                        fontStyle: "italic",
                        color: "#5A5550",
                        marginBottom: "2rem"
                    },
                    children: a.subtitle
                }), m.jsx("p", {
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "15px",
                        lineHeight: 1.85,
                        color: "#5A5550",
                        margin: "0 0 2.5rem",
                        fontWeight: 300
                    },
                    children: a.desc
                }), m.jsx("ul", {
                    style: {
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem"
                    },
                    children: a.features.map(r => m.jsxs("li", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "13px",
                            color: "#6A6560",
                            lineHeight: 1.5,
                            fontWeight: 300
                        },
                        children: [m.jsx("span", {
                            style: {
                                color: "#C8A86B",
                                flexShrink: 0,
                                marginTop: "2px"
                            },
                            children: m.jsx(P2, {
                                size: 13
                            })
                        }), r]
                    }, r))
                })]
            })]
        })
    })
}
const b3 = Bl("/contact")({
    component: x3,
    head: () => ({
        meta: [{
            title: "Contact — Waypoint Builders LLC"
        }]
    })
});
function x3() {
    const [a,i] = I.useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: ""
    })
      , [r,o] = I.useState("idle")
      , c = h => {
        i(g => ({
            ...g,
            [h.target.name]: h.target.value
        }))
    }
      , f = async h => {
        h.preventDefault(),
        o("submitting"),
        await new Promise(g => setTimeout(g, 1400)),
        o("success")
    }
    ;
    return m.jsxs("main", {
        style: {
            background: "#0C0C0B"
        },
        children: [m.jsx("section", {
            style: {
                paddingTop: "160px",
                paddingBottom: "5rem",
                borderBottom: "1px solid rgba(200, 168, 107, 0.08)"
            },
            className: "px-6 lg:px-12",
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto"
                },
                children: [m.jsx("div", {
                    className: "section-label",
                    children: "Get in Touch"
                }), m.jsxs("h1", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(3rem, 6vw, 6.5rem)",
                        fontWeight: 300,
                        color: "#EDE9E0",
                        margin: 0,
                        lineHeight: 1.02,
                        letterSpacing: "-0.01em",
                        maxWidth: "700px"
                    },
                    children: ["Let's Begin", m.jsx("br", {}), "Your ", m.jsx("span", {
                        style: {
                            fontStyle: "italic",
                            color: "#C8A86B"
                        },
                        children: "Journey"
                    })]
                })]
            })
        }), m.jsx("section", {
            style: {
                padding: "clamp(5rem, 8vw, 8rem) 0"
            },
            className: "px-6 lg:px-12",
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "6rem"
                },
                className: "lg:grid-cols-5",
                children: [m.jsxs("div", {
                    style: {
                        gridColumn: "span 2"
                    },
                    children: [m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "16px",
                            lineHeight: 1.85,
                            color: "#5A5550",
                            margin: "0 0 3.5rem",
                            fontWeight: 300
                        },
                        children: "Whether you're ready to break ground or just beginning to dream, we'd love to hear from you. Every extraordinary home starts with a single conversation."
                    }), m.jsxs("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "2.5rem"
                        },
                        children: [m.jsx(gs, {
                            icon: m.jsx(a3, {
                                size: 16
                            }),
                            label: "Our Office",
                            value: "480 Ridgeline Drive, Suite 200\\nAspen, Colorado 81611"
                        }), m.jsx(gs, {
                            icon: m.jsx(s3, {
                                size: 16
                            }),
                            label: "Phone",
                            value: "(970) 923-4471"
                        }), m.jsx(gs, {
                            icon: m.jsx(e3, {
                                size: 16
                            }),
                            label: "Email",
                            value: "hello@waypointbuilders.com"
                        }), m.jsx(gs, {
                            icon: m.jsx($2, {
                                size: 16
                            }),
                            label: "Availability",
                            value: "Monday – Friday\\n8:00 AM – 5:00 PM MST"
                        })]
                    }), m.jsx("div", {
                        style: {
                            height: "1px",
                            background: "rgba(200, 168, 107, 0.1)",
                            margin: "3rem 0"
                        }
                    }), m.jsx("blockquote", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "1.3rem",
                            fontStyle: "italic",
                            fontWeight: 300,
                            color: "#C8A86B",
                            lineHeight: 1.6,
                            margin: 0,
                            paddingLeft: "1.5rem",
                            borderLeft: "1px solid rgba(200, 168, 107, 0.3)"
                        },
                        children: '"The best projects begin with the best conversations."'
                    })]
                }), m.jsx("div", {
                    style: {
                        gridColumn: "span 3"
                    },
                    children: r === "success" ? m.jsx(E3, {}) : m.jsxs("form", {
                        onSubmit: f,
                        children: [m.jsxs("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(1, 1fr)",
                                gap: "1.5rem",
                                marginBottom: "1.5rem"
                            },
                            className: "sm:grid-cols-2",
                            children: [m.jsx(Sc, {
                                label: "Full Name",
                                name: "name",
                                value: a.name,
                                onChange: c,
                                placeholder: "Your full name",
                                required: !0
                            }), m.jsx(Sc, {
                                label: "Email Address",
                                name: "email",
                                type: "email",
                                value: a.email,
                                onChange: c,
                                placeholder: "your@email.com",
                                required: !0
                            }), m.jsx(Sc, {
                                label: "Phone Number",
                                name: "phone",
                                type: "tel",
                                value: a.phone,
                                onChange: c,
                                placeholder: "(000) 000-0000"
                            }), m.jsxs("div", {
                                children: [m.jsx("label", {
                                    style: _s,
                                    children: "Project Type"
                                }), m.jsxs("select", {
                                    name: "projectType",
                                    value: a.projectType,
                                    onChange: c,
                                    style: {
                                        ...zc,
                                        color: a.projectType ? "#EDE9E0" : "#3A3830"
                                    },
                                    children: [m.jsx("option", {
                                        value: "",
                                        disabled: !0,
                                        children: "Select a service"
                                    }), m.jsx("option", {
                                        value: "custom-home",
                                        children: "Custom Home Build"
                                    }), m.jsx("option", {
                                        value: "design",
                                        children: "Architectural Design"
                                    }), m.jsx("option", {
                                        value: "interior",
                                        children: "Interior Finishing"
                                    }), m.jsx("option", {
                                        value: "renovation",
                                        children: "Estate Renovation"
                                    }), m.jsx("option", {
                                        value: "other",
                                        children: "Other"
                                    })]
                                })]
                            })]
                        }), m.jsxs("div", {
                            style: {
                                marginBottom: "1.5rem"
                            },
                            children: [m.jsx("label", {
                                style: _s,
                                children: "Approximate Budget"
                            }), m.jsx("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "0.75rem"
                                },
                                className: "sm:grid-cols-5",
                                children: ["$1M–$2M", "$2M–$4M", "$4M–$7M", "$7M–$10M", "$10M+"].map(h => m.jsx("button", {
                                    type: "button",
                                    onClick: () => i(g => ({
                                        ...g,
                                        budget: h
                                    })),
                                    style: {
                                        padding: "10px 8px",
                                        fontSize: "11px",
                                        fontFamily: "DM Sans, system-ui, sans-serif",
                                        letterSpacing: "0.05em",
                                        border: a.budget === h ? "1px solid rgba(200, 168, 107, 0.7)" : "1px solid rgba(200, 168, 107, 0.12)",
                                        background: a.budget === h ? "rgba(200, 168, 107, 0.08)" : "transparent",
                                        color: a.budget === h ? "#C8A86B" : "#5A5550",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease"
                                    },
                                    children: h
                                }, h))
                            })]
                        }), m.jsxs("div", {
                            style: {
                                marginBottom: "2.5rem"
                            },
                            children: [m.jsx("label", {
                                style: _s,
                                children: "Tell Us About Your Vision"
                            }), m.jsx("textarea", {
                                name: "message",
                                value: a.message,
                                onChange: c,
                                placeholder: "Share your ideas, site location, timeline, or any questions you have...",
                                rows: 6,
                                style: {
                                    ...zc,
                                    resize: "vertical",
                                    minHeight: "140px"
                                }
                            })]
                        }), m.jsxs("button", {
                            type: "submit",
                            disabled: r === "submitting",
                            className: "btn-gold",
                            style: {
                                fontSize: "12px",
                                padding: "1.1rem 2.5rem",
                                cursor: r === "submitting" ? "wait" : "pointer",
                                opacity: r === "submitting" ? .75 : 1,
                                width: "100%",
                                justifyContent: "center",
                                border: "none"
                            },
                            children: [r === "submitting" ? "Sending..." : "Send Your Inquiry", r !== "submitting" && m.jsx(jn, {
                                size: 15
                            })]
                        }), m.jsx("p", {
                            style: {
                                fontFamily: "DM Sans, system-ui, sans-serif",
                                fontSize: "11px",
                                color: "#3A3830",
                                textAlign: "center",
                                marginTop: "1.25rem",
                                letterSpacing: "0.05em"
                            },
                            children: "We typically respond within 24 hours."
                        })]
                    })
                })]
            })
        })]
    })
}
const _s = {
    display: "block",
    fontFamily: "DM Sans, system-ui, sans-serif",
    fontSize: "10px",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "#5A5550",
    marginBottom: "0.6rem"
}
  , zc = {
    width: "100%",
    background: "#141412",
    border: "1px solid rgba(200, 168, 107, 0.12)",
    padding: "14px 16px",
    fontFamily: "DM Sans, system-ui, sans-serif",
    fontSize: "14px",
    color: "#EDE9E0",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
    fontWeight: 300
};
function Sc({label: a, name: i, value: r, onChange: o, placeholder: c, type: f="text", required: h}) {
    return m.jsxs("div", {
        children: [m.jsx("label", {
            style: _s,
            children: a
        }), m.jsx("input", {
            type: f,
            name: i,
            value: r,
            onChange: o,
            placeholder: c,
            required: h,
            style: zc,
            onFocus: g => g.target.style.borderColor = "rgba(200, 168, 107, 0.45)",
            onBlur: g => g.target.style.borderColor = "rgba(200, 168, 107, 0.12)"
        })]
    })
}
function gs({icon: a, label: i, value: r}) {
    return m.jsxs("div", {
        style: {
            display: "flex",
            gap: "1.25rem",
            alignItems: "flex-start"
        },
        children: [m.jsx("div", {
            style: {
                color: "#C8A86B",
                marginTop: "2px",
                flexShrink: 0
            },
            children: a
        }), m.jsxs("div", {
            children: [m.jsx("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "#3A3830",
                    marginBottom: "0.5rem"
                },
                children: i
            }), m.jsx("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "14px",
                    color: "#6A6560",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                    fontWeight: 300
                },
                children: r
            })]
        })]
    })
}
function E3() {
    return m.jsxs("div", {
        style: {
            padding: "4rem 3rem",
            border: "1px solid rgba(200, 168, 107, 0.2)",
            textAlign: "center",
            background: "rgba(200, 168, 107, 0.03)"
        },
        children: [m.jsx("div", {
            style: {
                width: "56px",
                height: "56px",
                border: "1px solid rgba(200, 168, 107, 0.35)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
                color: "#C8A86B"
            },
            children: m.jsx("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: m.jsx("path", {
                    d: "M20 6L9 17l-5-5"
                })
            })
        }), m.jsx("h2", {
            style: {
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "2.2rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#EDE9E0",
                margin: "0 0 1rem"
            },
            children: "Message Received"
        }), m.jsx("p", {
            style: {
                fontFamily: "DM Sans, system-ui, sans-serif",
                fontSize: "15px",
                color: "#5A5550",
                lineHeight: 1.8,
                maxWidth: "380px",
                margin: "0 auto",
                fontWeight: 300
            },
            children: "Thank you for reaching out. A member of our team will be in touch within one business day to schedule your private consultation."
        })]
    })
}
const _3 = Bl("/about")({
    component: C3,
    head: () => ({
        meta: [{
            title: "About — Waypoint Builders LLC"
        }]
    })
})
  , A3 = [{
    number: "01",
    title: "Uncompromising Quality",
    desc: "Every material is chosen with intention. Every joint, surface, and detail reflects the standard that has defined Waypoint since our founding."
}, {
    number: "02",
    title: "Client Partnership",
    desc: "We believe a great home begins with a great relationship. We listen deeply, communicate honestly, and stay aligned with your vision at every stage."
}, {
    number: "03",
    title: "Timeless Design",
    desc: "Trends come and go. We collaborate with our clients to design homes that feel contemporary now and will feel relevant for generations."
}, {
    number: "04",
    title: "Transparent Process",
    desc: "From the first consultation to final walkthrough, we provide clear timelines, honest estimates, and full accountability at every step."
}]
  , T3 = [{
    name: "Marcus Whitfield",
    role: "Founder & Master Builder",
    years: "28 years experience",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop&faces"
}, {
    name: "Diana Ashmore",
    role: "Director of Design",
    years: "19 years experience",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop&faces"
}, {
    name: "Elliot Navarro",
    role: "Head of Construction",
    years: "22 years experience",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&faces"
}];
function C3() {
    return m.jsxs("main", {
        children: [m.jsxs("section", {
            style: {
                minHeight: "70vh",
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                overflow: "hidden"
            },
            children: [m.jsx("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center 40%"
                }
            }), m.jsx("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, rgba(12,12,11,0.96) 0%, rgba(12,12,11,0.7) 55%, rgba(12,12,11,0.35) 100%)"
                }
            }), m.jsxs("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1400px",
                    margin: "0 auto",
                    width: "100%",
                    padding: "0 3rem 6rem"
                },
                className: "px-6 lg:px-12 pb-20 lg:pb-24",
                children: [m.jsx("div", {
                    className: "section-label",
                    children: "Our Story"
                }), m.jsxs("h1", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(3rem, 6vw, 6rem)",
                        fontWeight: 300,
                        color: "#EDE9E0",
                        margin: "0",
                        lineHeight: 1.05,
                        letterSpacing: "-0.01em",
                        maxWidth: "600px"
                    },
                    children: ["Built on ", m.jsx("span", {
                        style: {
                            fontStyle: "italic",
                            color: "#C8A86B"
                        },
                        children: "Craft"
                    }), ",", m.jsx("br", {}), "Driven by ", m.jsx("span", {
                        style: {
                            fontStyle: "italic",
                            color: "#C8A86B"
                        },
                        children: "Passion"
                    })]
                })]
            })]
        }), m.jsx("section", {
            style: {
                background: "#0C0C0B",
                padding: "clamp(5rem, 10vw, 9rem) 0"
            },
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 3rem",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "4rem"
                },
                className: "px-6 lg:px-12 lg:grid-cols-2",
                children: [m.jsxs("div", {
                    children: [m.jsx("div", {
                        className: "section-label",
                        children: "Who We Are"
                    }), m.jsx("h2", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                            fontWeight: 300,
                            color: "#EDE9E0",
                            lineHeight: 1.2,
                            margin: "0 0 2rem"
                        },
                        children: "Three decades of excellence in luxury residential construction"
                    })]
                }), m.jsxs("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        justifyContent: "center"
                    },
                    children: [m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "16px",
                            lineHeight: 1.85,
                            color: "#6A6560",
                            margin: 0,
                            fontWeight: 300
                        },
                        children: "Waypoint Builders was founded in 1996 by Marcus Whitfield, a third-generation craftsman who believed luxury homebuilding should be defined not by price alone, but by the depth of skill, integrity of materials, and the closeness of the client relationship."
                    }), m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "16px",
                            lineHeight: 1.85,
                            color: "#6A6560",
                            margin: 0,
                            fontWeight: 300
                        },
                        children: "From our first commissioned home in Vail, Colorado, to a portfolio spanning mountain estates, coastal residences, and desert modernist properties across the American West, we have never wavered from our founding principle: every home deserves our absolute best."
                    }), m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "16px",
                            lineHeight: 1.85,
                            color: "#6A6560",
                            margin: 0,
                            fontWeight: 300
                        },
                        children: "Today, Waypoint employs 85 skilled tradespeople and professionals, and is recognized as one of the premier luxury home builders in the American West."
                    })]
                })]
            })
        }), m.jsx("section", {
            style: {
                background: "#141412",
                padding: "clamp(5rem, 10vw, 9rem) 0",
                borderTop: "1px solid rgba(200, 168, 107, 0.08)"
            },
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 3rem"
                },
                className: "px-6 lg:px-12",
                children: [m.jsxs("div", {
                    style: {
                        marginBottom: "4rem"
                    },
                    children: [m.jsx("div", {
                        className: "section-label",
                        children: "Our Foundation"
                    }), m.jsxs("h2", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "clamp(2.2rem, 4vw, 4rem)",
                            fontWeight: 300,
                            color: "#EDE9E0",
                            margin: 0,
                            lineHeight: 1.1
                        },
                        children: ["Core ", m.jsx("span", {
                            style: {
                                fontStyle: "italic",
                                color: "#C8A86B"
                            },
                            children: "Values"
                        })]
                    })]
                }), m.jsx("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gap: "1px",
                        background: "rgba(200, 168, 107, 0.07)"
                    },
                    className: "lg:grid-cols-2",
                    children: A3.map(a => m.jsxs("div", {
                        style: {
                            background: "#141412",
                            padding: "3.5rem 3rem",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [m.jsx("div", {
                            "aria-hidden": "true",
                            style: {
                                position: "absolute",
                                top: "1.5rem",
                                right: "2rem",
                                fontFamily: "Cormorant Garamond, Georgia, serif",
                                fontSize: "5rem",
                                fontWeight: 300,
                                color: "rgba(200, 168, 107, 0.06)",
                                lineHeight: 1,
                                pointerEvents: "none"
                            },
                            children: a.number
                        }), m.jsx("div", {
                            style: {
                                fontFamily: "DM Sans, system-ui, sans-serif",
                                fontSize: "10px",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                color: "#C8A86B",
                                marginBottom: "1.25rem"
                            },
                            children: a.number
                        }), m.jsx("h3", {
                            style: {
                                fontFamily: "Cormorant Garamond, Georgia, serif",
                                fontSize: "1.6rem",
                                fontWeight: 400,
                                color: "#EDE9E0",
                                margin: "0 0 1rem",
                                lineHeight: 1.2
                            },
                            children: a.title
                        }), m.jsx("p", {
                            style: {
                                fontFamily: "DM Sans, system-ui, sans-serif",
                                fontSize: "14px",
                                lineHeight: 1.8,
                                color: "#5A5550",
                                margin: 0,
                                fontWeight: 300,
                                maxWidth: "380px"
                            },
                            children: a.desc
                        })]
                    }, a.number))
                })]
            })
        }), m.jsx("section", {
            style: {
                background: "#0C0C0B",
                padding: "clamp(5rem, 10vw, 9rem) 0"
            },
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 3rem"
                },
                className: "px-6 lg:px-12",
                children: [m.jsxs("div", {
                    style: {
                        marginBottom: "4rem"
                    },
                    children: [m.jsx("div", {
                        className: "section-label",
                        children: "The People Behind the Work"
                    }), m.jsxs("h2", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "clamp(2.2rem, 4vw, 4rem)",
                            fontWeight: 300,
                            color: "#EDE9E0",
                            margin: 0,
                            lineHeight: 1.1
                        },
                        children: ["Our ", m.jsx("span", {
                            style: {
                                fontStyle: "italic",
                                color: "#C8A86B"
                            },
                            children: "Leadership"
                        })]
                    })]
                }), m.jsx("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gap: "2rem"
                    },
                    className: "lg:grid-cols-3",
                    children: T3.map(a => m.jsxs("div", {
                        children: [m.jsxs("div", {
                            style: {
                                aspectRatio: "3/4",
                                overflow: "hidden",
                                marginBottom: "1.5rem",
                                position: "relative"
                            },
                            children: [m.jsx("img", {
                                src: a.img,
                                alt: a.name,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "top",
                                    transition: "transform 0.7s ease",
                                    filter: "grayscale(20%)"
                                },
                                onMouseEnter: i => i.target.style.transform = "scale(1.04)",
                                onMouseLeave: i => i.target.style.transform = "scale(1)"
                            }), m.jsx("div", {
                                style: {
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "40%",
                                    background: "linear-gradient(to top, rgba(12,12,11,0.6), transparent)"
                                }
                            })]
                        }), m.jsx("div", {
                            style: {
                                fontFamily: "DM Sans, system-ui, sans-serif",
                                fontSize: "9px",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                color: "#C8A86B",
                                marginBottom: "0.4rem"
                            },
                            children: a.years
                        }), m.jsx("div", {
                            style: {
                                fontFamily: "Cormorant Garamond, Georgia, serif",
                                fontSize: "1.5rem",
                                fontWeight: 400,
                                color: "#EDE9E0",
                                marginBottom: "0.25rem"
                            },
                            children: a.name
                        }), m.jsx("div", {
                            style: {
                                fontFamily: "DM Sans, system-ui, sans-serif",
                                fontSize: "12px",
                                color: "#5A5550",
                                letterSpacing: "0.05em"
                            },
                            children: a.role
                        })]
                    }, a.name))
                })]
            })
        }), m.jsx("section", {
            style: {
                background: "#141412",
                padding: "5rem 0",
                borderTop: "1px solid rgba(200, 168, 107, 0.08)",
                textAlign: "center"
            },
            children: m.jsxs("div", {
                className: "px-6",
                children: [m.jsx("h2", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        fontWeight: 300,
                        color: "#EDE9E0",
                        margin: "0 0 2rem",
                        fontStyle: "italic"
                    },
                    children: "Let's build something remarkable together."
                }), m.jsxs(ue, {
                    to: "/contact",
                    className: "btn-gold",
                    children: ["Start a Conversation", m.jsx(jn, {
                        size: 14
                    })]
                })]
            })
        })]
    })
}
const R3 = Bl("/")({
    component: M3
})
  , j3 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80&fit=crop"
  , bc = [{
    id: 1,
    name: "The Crestwood",
    location: "Aspen, Colorado",
    type: "Mountain Estate",
    sqft: "8,400",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80&fit=crop"
}, {
    id: 2,
    name: "Solaris Residence",
    location: "Scottsdale, Arizona",
    type: "Desert Modern",
    sqft: "6,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&fit=crop"
}, {
    id: 3,
    name: "Harborview Estate",
    location: "Newport Beach, CA",
    type: "Coastal Luxury",
    sqft: "9,100",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80&fit=crop"
}]
  , Hp = [{
    value: "28",
    unit: "yrs",
    label: "Years of Excellence"
}, {
    value: "340+",
    unit: "",
    label: "Homes Completed"
}, {
    value: "$2.4B",
    unit: "",
    label: "Project Value Built"
}, {
    value: "97%",
    unit: "",
    label: "Client Satisfaction"
}]
  , w3 = [{
    icon: q3,
    title: "Custom Home Building",
    desc: "Ground-up construction of bespoke residences designed entirely around your vision and lifestyle."
}, {
    icon: G3,
    title: "Architectural Design",
    desc: "Collaborative design process with award-winning architects to create timeless, site-specific architecture."
}, {
    icon: Y3,
    title: "Interior Finishing",
    desc: "Curated material selections, custom millwork, and luxury finishes that define the character of your home."
}, {
    icon: V3,
    title: "Estate Renovations",
    desc: "Thoughtful transformation of existing luxury properties while honoring the original architectural intent."
}];
function M3() {
    return m.jsxs("main", {
        children: [m.jsx(z3, {}), m.jsx(O3, {}), m.jsx(D3, {}), m.jsx(B3, {}), m.jsx(L3, {}), m.jsx(N3, {}), m.jsx(U3, {}), m.jsx(H3, {})]
    })
}
function z3() {
    return m.jsxs("section", {
        style: {
            minHeight: "100dvh",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden"
        },
        children: [m.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${j3})`,
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
                zIndex: 0
            }
        }), m.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                background: "linear-gradient(105deg, rgba(12,12,11,0.97) 0%, rgba(12,12,11,0.82) 45%, rgba(12,12,11,0.3) 100%)",
                zIndex: 1
            }
        }), m.jsx("div", {
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background: "linear-gradient(to top, #0C0C0B, transparent)",
                zIndex: 2
            }
        }), m.jsxs("div", {
            style: {
                position: "relative",
                zIndex: 3,
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 3rem 7rem",
                width: "100%"
            },
            className: "px-6 lg:px-12 pb-20 lg:pb-28",
            children: [m.jsxs("div", {
                className: "opacity-0 animate-fade-up",
                style: {
                    maxWidth: "780px"
                },
                children: [m.jsx("div", {
                    className: "section-label",
                    style: {
                        marginBottom: "2rem"
                    },
                    children: "Luxury Custom Homes"
                }), m.jsxs("h1", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(3rem, 7vw, 7rem)",
                        fontWeight: 300,
                        lineHeight: 1.05,
                        color: "#EDE9E0",
                        margin: "0 0 2rem",
                        letterSpacing: "-0.01em"
                    },
                    children: ["Crafted for the", " ", m.jsx("span", {
                        style: {
                            fontStyle: "italic",
                            color: "#C8A86B"
                        },
                        children: "Extraordinary"
                    })]
                }), m.jsx("p", {
                    className: "opacity-0 animate-fade-up delay-200",
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "clamp(15px, 1.5vw, 17px)",
                        lineHeight: 1.8,
                        color: "#7A7570",
                        maxWidth: "480px",
                        margin: "0 0 3rem",
                        fontWeight: 300
                    },
                    children: "Waypoint Builders brings uncompromising craftsmanship, visionary design, and decades of expertise to every bespoke home we build."
                }), m.jsxs("div", {
                    className: "opacity-0 animate-fade-up delay-400",
                    style: {
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap"
                    },
                    children: [m.jsxs(ue, {
                        to: "/projects",
                        className: "btn-gold",
                        children: ["Explore Our Work", m.jsx(jn, {
                            size: 14
                        })]
                    }), m.jsx(ue, {
                        to: "/about",
                        className: "btn-outline",
                        children: "Our Story"
                    })]
                })]
            }), m.jsxs("div", {
                className: "opacity-0 animate-fade-in delay-700",
                style: {
                    position: "absolute",
                    bottom: "2.5rem",
                    right: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem"
                },
                children: [m.jsx("span", {
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: "#3A3830",
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)"
                    },
                    children: "Scroll"
                }), m.jsx("div", {
                    style: {
                        width: "1px",
                        height: "60px",
                        background: "linear-gradient(to bottom, #3A3830, transparent)"
                    }
                })]
            })]
        })]
    })
}
function O3() {
    const a = ["Craftsmanship", "Precision", "Legacy", "Innovation", "Excellence", "Vision", "Detail"];
    return m.jsx("div", {
        style: {
            background: "#141412",
            borderTop: "1px solid rgba(200, 168, 107, 0.08)",
            borderBottom: "1px solid rgba(200, 168, 107, 0.08)",
            padding: "1.25rem 0",
            overflow: "hidden"
        },
        children: m.jsx("div", {
            className: "animate-marquee",
            style: {
                display: "flex",
                gap: "4rem",
                whiteSpace: "nowrap",
                width: "max-content"
            },
            children: [...a, ...a, ...a, ...a].map( (i, r) => m.jsx("span", {
                style: {
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "13px",
                    fontStyle: "italic",
                    letterSpacing: "0.2em",
                    color: r % 2 === 0 ? "rgba(200, 168, 107, 0.3)" : "rgba(200, 168, 107, 0.12)",
                    textTransform: "capitalize"
                },
                children: i
            }, r))
        })
    })
}
function D3() {
    return m.jsxs("section", {
        style: {
            background: "#0C0C0B",
            padding: "clamp(5rem, 10vw, 10rem) 3rem",
            textAlign: "center",
            position: "relative"
        },
        className: "px-6 lg:px-12",
        children: [m.jsx("div", {
            style: {
                position: "absolute",
                top: "3rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "1px",
                height: "60px",
                background: "linear-gradient(to bottom, transparent, rgba(200, 168, 107, 0.25))"
            }
        }), m.jsxs("div", {
            style: {
                maxWidth: "900px",
                margin: "0 auto"
            },
            children: [m.jsxs("blockquote", {
                style: {
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.35,
                    color: "#EDE9E0",
                    margin: "0 0 2.5rem",
                    letterSpacing: "0.01em"
                },
                children: [`"We don't simply build homes.`, m.jsx("br", {}), "We create the spaces where", " ", m.jsx("span", {
                    style: {
                        color: "#C8A86B"
                    },
                    children: "legacies begin."
                }), '"']
            }), m.jsx("p", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "#4A4540"
                },
                children: "— Marcus Whitfield, Founder & Master Builder"
            })]
        }), m.jsx("div", {
            style: {
                position: "absolute",
                bottom: "3rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "1px",
                height: "60px",
                background: "linear-gradient(to top, transparent, rgba(200, 168, 107, 0.25))"
            }
        })]
    })
}
function B3() {
    return m.jsx("section", {
        style: {
            background: "#141412",
            borderTop: "1px solid rgba(200, 168, 107, 0.08)",
            borderBottom: "1px solid rgba(200, 168, 107, 0.08)"
        },
        children: m.jsx("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "4rem 3rem",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0"
            },
            className: "px-6 lg:px-12 lg:grid-cols-4",
            children: Hp.map( (a, i) => m.jsxs("div", {
                style: {
                    padding: "2.5rem 2rem",
                    borderRight: i < Hp.length - 1 ? "1px solid rgba(200, 168, 107, 0.08)" : "none",
                    textAlign: "center"
                },
                children: [m.jsxs("div", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(2.5rem, 4vw, 4rem)",
                        fontWeight: 300,
                        color: "#C8A86B",
                        lineHeight: 1,
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.02em"
                    },
                    children: [a.value, a.unit && m.jsx("span", {
                        style: {
                            fontSize: "0.45em",
                            verticalAlign: "top",
                            marginTop: "0.6em",
                            display: "inline-block",
                            marginLeft: "4px"
                        },
                        children: a.unit
                    })]
                }), m.jsx("div", {
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#4A4540"
                    },
                    children: a.label
                })]
            }, i))
        })
    })
}
function L3() {
    return m.jsx("section", {
        style: {
            background: "#0C0C0B",
            padding: "clamp(5rem, 10vw, 9rem) 0"
        },
        children: m.jsxs("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 3rem"
            },
            className: "px-6 lg:px-12",
            children: [m.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: "4rem",
                    flexWrap: "wrap",
                    gap: "1.5rem"
                },
                children: [m.jsxs("div", {
                    children: [m.jsx("div", {
                        className: "section-label",
                        children: "Signature Residences"
                    }), m.jsxs("h2", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "clamp(2.2rem, 4vw, 4rem)",
                            fontWeight: 300,
                            color: "#EDE9E0",
                            margin: 0,
                            lineHeight: 1.1,
                            letterSpacing: "-0.01em"
                        },
                        children: ["Recent ", m.jsx("span", {
                            style: {
                                fontStyle: "italic",
                                color: "#C8A86B"
                            },
                            children: "Works"
                        })]
                    })]
                }), m.jsxs(ue, {
                    to: "/projects",
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#C8A86B",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        paddingBottom: "2px",
                        borderBottom: "1px solid rgba(200, 168, 107, 0.3)",
                        transition: "border-color 0.3s ease"
                    },
                    children: ["View All Projects", m.jsx(jn, {
                        size: 12
                    })]
                })]
            }), m.jsxs("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1.5rem"
                },
                className: "lg:grid-cols-12",
                children: [m.jsx(xc, {
                    project: bc[0],
                    style: {
                        gridColumn: "span 7"
                    },
                    large: !0
                }), m.jsxs("div", {
                    style: {
                        gridColumn: "span 5",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem"
                    },
                    children: [m.jsx(xc, {
                        project: bc[1],
                        style: {
                            flex: 1
                        }
                    }), m.jsx(xc, {
                        project: bc[2],
                        style: {
                            flex: 1
                        }
                    })]
                })]
            })]
        })
    })
}
function xc({project: a, style: i, large: r}) {
    return m.jsxs("div", {
        className: "project-card",
        style: {
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            minHeight: r ? "520px" : "240px",
            ...i
        },
        children: [m.jsx("img", {
            src: a.image,
            alt: a.name,
            className: "project-img",
            style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }
        }), m.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(12,12,11,0.9) 0%, rgba(12,12,11,0.2) 60%, transparent 100%)"
            }
        }), m.jsx("div", {
            className: "project-overlay",
            style: {
                position: "absolute",
                inset: 0,
                background: "rgba(12,12,11,0.45)",
                border: "1px solid rgba(200, 168, 107, 0.2)"
            }
        }), m.jsxs("div", {
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: r ? "2.5rem" : "1.5rem",
                zIndex: 2
            },
            children: [m.jsx("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#C8A86B",
                    marginBottom: "0.5rem"
                },
                children: a.type
            }), m.jsx("div", {
                style: {
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: r ? "1.8rem" : "1.25rem",
                    fontWeight: 400,
                    color: "#EDE9E0",
                    lineHeight: 1.2,
                    marginBottom: "0.4rem"
                },
                children: a.name
            }), m.jsxs("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "11px",
                    color: "#5A5550",
                    letterSpacing: "0.05em"
                },
                children: [a.location, " · ", a.sqft, " sq ft"]
            })]
        })]
    })
}
function N3() {
    return m.jsx("section", {
        style: {
            background: "#141412",
            padding: "clamp(5rem, 10vw, 9rem) 0",
            borderTop: "1px solid rgba(200, 168, 107, 0.08)"
        },
        children: m.jsxs("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 3rem"
            },
            className: "px-6 lg:px-12",
            children: [m.jsxs("div", {
                style: {
                    marginBottom: "4rem",
                    maxWidth: "560px"
                },
                children: [m.jsx("div", {
                    className: "section-label",
                    children: "What We Offer"
                }), m.jsxs("h2", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(2.2rem, 4vw, 4rem)",
                        fontWeight: 300,
                        color: "#EDE9E0",
                        margin: 0,
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em"
                    },
                    children: ["Our ", m.jsx("span", {
                        style: {
                            fontStyle: "italic",
                            color: "#C8A86B"
                        },
                        children: "Services"
                    })]
                })]
            }), m.jsx("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    gap: "1px",
                    background: "rgba(200, 168, 107, 0.08)"
                },
                className: "lg:grid-cols-4",
                children: w3.map( (a, i) => m.jsxs("div", {
                    className: "service-card",
                    style: {
                        background: "#141412",
                        padding: "3rem 2.5rem",
                        cursor: "pointer",
                        transition: "background 0.3s ease"
                    },
                    onMouseEnter: r => r.currentTarget.style.background = "#1A1916",
                    onMouseLeave: r => r.currentTarget.style.background = "#141412",
                    children: [m.jsx("div", {
                        className: "service-icon",
                        style: {
                            color: "#3A3830",
                            marginBottom: "2rem"
                        },
                        children: m.jsx(a.icon, {})
                    }), m.jsx("h3", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "1.4rem",
                            fontWeight: 400,
                            color: "#EDE9E0",
                            margin: "0 0 1rem",
                            lineHeight: 1.2
                        },
                        children: a.title
                    }), m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "13px",
                            lineHeight: 1.75,
                            color: "#5A5550",
                            margin: 0,
                            fontWeight: 300
                        },
                        children: a.desc
                    })]
                }, i))
            }), m.jsx("div", {
                style: {
                    marginTop: "3rem",
                    textAlign: "center"
                },
                children: m.jsxs(ue, {
                    to: "/services",
                    className: "btn-outline",
                    children: ["All Services", m.jsx(jn, {
                        size: 13
                    })]
                })
            })]
        })
    })
}
function U3() {
    return m.jsxs("section", {
        style: {
            background: "#F7F2E8",
            padding: "clamp(5rem, 10vw, 10rem) 0",
            position: "relative",
            overflow: "hidden"
        },
        children: [m.jsx("div", {
            "aria-hidden": "true",
            style: {
                position: "absolute",
                right: "-2%",
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "40vw",
                fontWeight: 300,
                color: "rgba(200, 168, 107, 0.06)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none"
            },
            children: "W"
        }), m.jsxs("div", {
            style: {
                maxWidth: "900px",
                margin: "0 auto",
                padding: "0 3rem",
                position: "relative",
                zIndex: 1
            },
            className: "px-6 lg:px-12",
            children: [m.jsx("div", {
                style: {
                    marginBottom: "2.5rem"
                },
                children: m.jsx("svg", {
                    width: "32",
                    height: "24",
                    viewBox: "0 0 32 24",
                    fill: "none",
                    children: m.jsx("path", {
                        d: "M0 24V14.4C0 6.4 4.533 1.6 13.6 0L14.4 2.4C11.2 3.2 8.8 4.667 7.2 6.8C5.6 8.933 4.8 11.2 4.8 13.6H9.6V24H0ZM17.6 24V14.4C17.6 6.4 22.133 1.6 31.2 0L32 2.4C28.8 3.2 26.4 4.667 24.8 6.8C23.2 8.933 22.4 11.2 22.4 13.6H27.2V24H17.6Z",
                        fill: "#C8A86B",
                        fillOpacity: "0.4"
                    })
                })
            }), m.jsx("blockquote", {
                style: {
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.45,
                    color: "#1C1B18",
                    margin: "0 0 3rem",
                    letterSpacing: "0.01em"
                },
                children: "Working with Waypoint was unlike any building experience we'd had before. Every detail was considered, every timeline met, and the finished home exceeded anything we imagined possible. This is truly building at its finest."
            }), m.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem"
                },
                children: [m.jsx("div", {
                    style: {
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "rgba(200, 168, 107, 0.15)",
                        border: "1px solid rgba(200, 168, 107, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "1.1rem",
                        fontStyle: "italic",
                        color: "#C8A86B"
                    },
                    children: "CR"
                }), m.jsxs("div", {
                    children: [m.jsx("div", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#1C1B18",
                            letterSpacing: "0.05em"
                        },
                        children: "Catherine & Robert Ashford"
                    }), m.jsx("div", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "11px",
                            color: "#8A7A6A",
                            letterSpacing: "0.1em"
                        },
                        children: "The Crestwood Estate, Aspen"
                    })]
                })]
            })]
        })]
    })
}
function H3() {
    return m.jsx("section", {
        style: {
            background: "#0C0C0B",
            padding: "clamp(5rem, 10vw, 10rem) 0",
            borderTop: "1px solid rgba(200, 168, 107, 0.08)"
        },
        children: m.jsxs("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            },
            className: "px-6 lg:px-12",
            children: [m.jsx("div", {
                className: "section-label",
                style: {
                    justifyContent: "center"
                },
                children: "Your Vision Awaits"
            }), m.jsxs("h2", {
                style: {
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
                    fontWeight: 300,
                    color: "#EDE9E0",
                    margin: "0 0 2rem",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                    maxWidth: "700px"
                },
                children: ["Ready to Build Something", " ", m.jsx("span", {
                    style: {
                        fontStyle: "italic",
                        color: "#C8A86B"
                    },
                    children: "Extraordinary?"
                })]
            }), m.jsx("p", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: "#5A5550",
                    maxWidth: "480px",
                    margin: "0 0 3.5rem",
                    fontWeight: 300
                },
                children: "Begin with a private consultation. We'll listen to your vision, walk your site, and outline a path to the home you've always imagined."
            }), m.jsxs(ue, {
                to: "/contact",
                className: "btn-gold",
                style: {
                    fontSize: "12px",
                    padding: "1.1rem 2.5rem"
                },
                children: ["Begin Your Build", m.jsx(jn, {
                    size: 15
                })]
            })]
        })
    })
}
function q3() {
    return m.jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [m.jsx("path", {
            d: "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
        }), m.jsx("path", {
            d: "M9 21V12h6v9"
        })]
    })
}
function G3() {
    return m.jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [m.jsx("path", {
            d: "M12 20h9"
        }), m.jsx("path", {
            d: "M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
        })]
    })
}
function Y3() {
    return m.jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [m.jsx("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2"
        }), m.jsx("path", {
            d: "M3 9h18"
        }), m.jsx("path", {
            d: "M9 21V9"
        })]
    })
}
function V3() {
    return m.jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: m.jsx("path", {
            d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
        })
    })
}
const k3 = Bl("/projects/")({
    component: X3,
    head: () => ({
        meta: [{
            title: "Portfolio — Waypoint Builders LLC"
        }]
    })
})
  , ys = [{
    id: "crestwood",
    name: "The Crestwood",
    location: "Aspen, Colorado",
    type: "Mountain Estate",
    year: "2023",
    sqft: "8,400",
    bedrooms: 6,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80&fit=crop",
    featured: !0
}, {
    id: "solaris",
    name: "Solaris Residence",
    location: "Scottsdale, Arizona",
    type: "Desert Modern",
    year: "2023",
    sqft: "6,200",
    bedrooms: 5,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&fit=crop",
    featured: !0
}, {
    id: "harborview",
    name: "Harborview Estate",
    location: "Newport Beach, CA",
    type: "Coastal Luxury",
    year: "2022",
    sqft: "9,100",
    bedrooms: 7,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80&fit=crop",
    featured: !0
}, {
    id: "ridge-house",
    name: "Ridge House",
    location: "Park City, Utah",
    type: "Mountain Modern",
    year: "2022",
    sqft: "7,800",
    bedrooms: 5,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80&fit=crop",
    featured: !1
}, {
    id: "meridian-villa",
    name: "Meridian Villa",
    location: "Santa Barbara, CA",
    type: "Mediterranean",
    year: "2021",
    sqft: "10,200",
    bedrooms: 8,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop",
    featured: !1
}, {
    id: "pinecrest",
    name: "Pinecrest Lodge",
    location: "Jackson Hole, WY",
    type: "Rustic Luxury",
    year: "2021",
    sqft: "5,600",
    bedrooms: 4,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=900&q=80&fit=crop",
    featured: !1
}];
function X3() {
    return m.jsxs("main", {
        style: {
            background: "#0C0C0B"
        },
        children: [m.jsx("section", {
            style: {
                paddingTop: "160px",
                paddingBottom: "5rem",
                borderBottom: "1px solid rgba(200, 168, 107, 0.08)"
            },
            className: "px-6 lg:px-12",
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto"
                },
                children: [m.jsx("div", {
                    className: "section-label",
                    children: "Our Work"
                }), m.jsxs("div", {
                    style: {
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "2rem"
                    },
                    children: [m.jsxs("h1", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "clamp(3rem, 6vw, 6.5rem)",
                            fontWeight: 300,
                            color: "#EDE9E0",
                            margin: 0,
                            lineHeight: 1.02,
                            letterSpacing: "-0.01em"
                        },
                        children: ["Signature", m.jsx("br", {}), m.jsx("span", {
                            style: {
                                fontStyle: "italic",
                                color: "#C8A86B"
                            },
                            children: "Residences"
                        })]
                    }), m.jsx("p", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "15px",
                            lineHeight: 1.8,
                            color: "#5A5550",
                            maxWidth: "400px",
                            fontWeight: 300
                        },
                        children: "Each project is a collaboration between our team and the client — a unique expression of place, lifestyle, and enduring design."
                    })]
                })]
            })
        }), m.jsx("section", {
            style: {
                padding: "clamp(4rem, 8vw, 7rem) 0"
            },
            className: "px-6 lg:px-12",
            children: m.jsxs("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto"
                },
                children: [m.jsxs("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "1.5rem",
                        marginBottom: "1.5rem"
                    },
                    className: "lg:grid-cols-12",
                    children: [m.jsx(Q3, {
                        project: ys[0]
                    }), m.jsxs("div", {
                        style: {
                            gridColumn: "span 5",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem"
                        },
                        children: [m.jsx(qp, {
                            project: ys[1]
                        }), m.jsx(qp, {
                            project: ys[2]
                        })]
                    })]
                }), m.jsx("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gap: "1.5rem"
                    },
                    className: "lg:grid-cols-3",
                    children: ys.slice(3).map(a => m.jsx(Z3, {
                        project: a
                    }, a.id))
                })]
            })
        }), m.jsx("section", {
            style: {
                background: "#141412",
                padding: "6rem 0",
                borderTop: "1px solid rgba(200, 168, 107, 0.08)",
                textAlign: "center"
            },
            children: m.jsxs("div", {
                className: "px-6",
                children: [m.jsx("p", {
                    style: {
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#C8A86B",
                        marginBottom: "1.5rem"
                    },
                    children: "Your project awaits"
                }), m.jsx("h2", {
                    style: {
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 300,
                        color: "#EDE9E0",
                        margin: "0 0 2.5rem",
                        fontStyle: "italic"
                    },
                    children: "Begin your own signature residence"
                }), m.jsxs(ue, {
                    to: "/contact",
                    className: "btn-gold",
                    children: ["Schedule a Consultation", m.jsx(jn, {
                        size: 14
                    })]
                })]
            })
        })]
    })
}
function Q3({project: a}) {
    return m.jsxs("div", {
        className: "project-card",
        style: {
            gridColumn: "span 7",
            position: "relative",
            overflow: "hidden",
            minHeight: "600px",
            cursor: "pointer"
        },
        children: [m.jsx("img", {
            src: a.image,
            alt: a.name,
            className: "project-img",
            style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }
        }), m.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(12,12,11,0.92) 0%, rgba(12,12,11,0.3) 60%, transparent 100%)"
            }
        }), m.jsx("div", {
            className: "project-overlay",
            style: {
                position: "absolute",
                inset: 0,
                background: "rgba(12,12,11,0.35)",
                border: "1px solid rgba(200,168,107,0.2)"
            }
        }), m.jsx("div", {
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2.5rem",
                zIndex: 2
            },
            children: m.jsxs("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "1rem"
                },
                children: [m.jsxs("div", {
                    children: [m.jsx("div", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            color: "#C8A86B",
                            marginBottom: "0.6rem"
                        },
                        children: a.type
                    }), m.jsx("div", {
                        style: {
                            fontFamily: "Cormorant Garamond, Georgia, serif",
                            fontSize: "2.2rem",
                            fontWeight: 400,
                            color: "#EDE9E0",
                            lineHeight: 1.1,
                            marginBottom: "0.4rem"
                        },
                        children: a.name
                    }), m.jsxs("div", {
                        style: {
                            fontFamily: "DM Sans, system-ui, sans-serif",
                            fontSize: "12px",
                            color: "#5A5550"
                        },
                        children: [a.location, " · ", a.sqft, " sq ft · ", a.year]
                    })]
                }), m.jsxs(ue, {
                    to: "/contact",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#C8A86B",
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        textDecoration: "none"
                    },
                    children: ["Inquire ", m.jsx(jn, {
                        size: 12
                    })]
                })]
            })
        })]
    })
}
function qp({project: a}) {
    return m.jsxs("div", {
        className: "project-card",
        style: {
            flex: 1,
            position: "relative",
            overflow: "hidden",
            minHeight: "280px",
            cursor: "pointer"
        },
        children: [m.jsx("img", {
            src: a.image,
            alt: a.name,
            className: "project-img",
            style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }
        }), m.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(12,12,11,0.88) 0%, rgba(12,12,11,0.15) 70%, transparent 100%)"
            }
        }), m.jsx("div", {
            className: "project-overlay",
            style: {
                position: "absolute",
                inset: 0,
                background: "rgba(12,12,11,0.35)",
                border: "1px solid rgba(200,168,107,0.2)"
            }
        }), m.jsxs("div", {
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.75rem",
                zIndex: 2
            },
            children: [m.jsx("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#C8A86B",
                    marginBottom: "0.4rem"
                },
                children: a.type
            }), m.jsx("div", {
                style: {
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#EDE9E0",
                    lineHeight: 1.2,
                    marginBottom: "0.3rem"
                },
                children: a.name
            }), m.jsx("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "11px",
                    color: "#5A5550"
                },
                children: a.location
            })]
        })]
    })
}
function Z3({project: a}) {
    return m.jsxs("div", {
        className: "project-card",
        style: {
            position: "relative",
            overflow: "hidden",
            minHeight: "380px",
            cursor: "pointer"
        },
        children: [m.jsx("img", {
            src: a.image,
            alt: a.name,
            className: "project-img",
            style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }
        }), m.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(12,12,11,0.9) 0%, rgba(12,12,11,0.2) 60%, transparent 100%)"
            }
        }), m.jsx("div", {
            className: "project-overlay",
            style: {
                position: "absolute",
                inset: 0,
                background: "rgba(12,12,11,0.35)",
                border: "1px solid rgba(200,168,107,0.2)"
            }
        }), m.jsxs("div", {
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem",
                zIndex: 2
            },
            children: [m.jsxs("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#C8A86B",
                    marginBottom: "0.5rem"
                },
                children: [a.type, " · ", a.year]
            }), m.jsx("div", {
                style: {
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    color: "#EDE9E0",
                    lineHeight: 1.2,
                    marginBottom: "0.4rem"
                },
                children: a.name
            }), m.jsxs("div", {
                style: {
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    fontSize: "11px",
                    color: "#5A5550"
                },
                children: [a.location, " · ", a.sqft, " sq ft"]
            })]
        })]
    })
}
const K3 = "modulepreload"
  , F3 = function(a) {
    return "/" + a
}
  , Gp = {}
  , J3 = function(i, r, o) {
    let c = Promise.resolve();
    if (r && r.length > 0) {
        let y = function(p) {
            return Promise.all(p.map(b => Promise.resolve(b).then(S => ({
                status: "fulfilled",
                value: S
            }), S => ({
                status: "rejected",
                reason: S
            }))))
        };
        document.getElementsByTagName("link");
        const h = document.querySelector("meta[property=csp-nonce]")
          , g = h?.nonce || h?.getAttribute("nonce");
        c = y(r.map(p => {
            if (p = F3(p),
            p in Gp)
                return;
            Gp[p] = !0;
            const b = p.endsWith(".css")
              , S = b ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${p}"]${S}`))
                return;
            const E = document.createElement("link");
            if (E.rel = b ? "stylesheet" : K3,
            b || (E.as = "script"),
            E.crossOrigin = "",
            E.href = p,
            g && E.setAttribute("nonce", g),
            document.head.appendChild(E),
            b)
                return new Promise( (_, w) => {
                    E.addEventListener("load", _),
                    E.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${p}`)))
                }
                )
        }
        ))
    }
    function f(h) {
        const g = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (g.payload = h,
        window.dispatchEvent(g),
        !g.defaultPrevented)
            throw h
    }
    return c.then(h => {
        for (const g of h || [])
            g.status === "rejected" && f(g.reason);
        return i().catch(f)
    }
    )
}
  , W3 = [{
    id: 1,
    name: "Product 1",
    image: "/placeholder.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    shortDescription: "A generic product description for your first product.",
    price: 3e3
}]
  , P3 = () => J3( () => import("./_productId-Dn4Xi-s0.js"), [])
  , I3 = Bl("/products/$productId")({
    component: x2(P3, "component"),
    loader: async ({params: a}) => {
        const i = W3.find(r => r.id === +a.productId);
        if (!i)
            throw new Error("Product not found");
        return i
    }
})
  , $3 = p3.update({
    id: "/services",
    path: "/services",
    getParentRoute: () => Ga
})
  , tE = b3.update({
    id: "/contact",
    path: "/contact",
    getParentRoute: () => Ga
})
  , eE = _3.update({
    id: "/about",
    path: "/about",
    getParentRoute: () => Ga
})
  , nE = R3.update({
    id: "/",
    path: "/",
    getParentRoute: () => Ga
})
  , aE = k3.update({
    id: "/projects/",
    path: "/projects/",
    getParentRoute: () => Ga
})
  , lE = I3.update({
    id: "/products/$productId",
    path: "/products/$productId",
    getParentRoute: () => Ga
})
  , iE = {
    IndexRoute: nE,
    AboutRoute: eE,
    ContactRoute: tE,
    ServicesRoute: $3,
    ProductsProductIdRoute: lE,
    ProjectsIndexRoute: aE
}
  , rE = Ga._addFileChildren(iE)
  , sE = () => D2({
    routeTree: rE,
    scrollRestoration: !0,
    defaultPreloadStaleTime: 0
});
async function oE() {
    const a = await sE();
    let i;
    return i = [],
    window.__TSS_START_OPTIONS__ = {
        serializationAdapters: i
    },
    i.push(Nx),
    a.options.serializationAdapters && i.push(...a.options.serializationAdapters),
    a.update({
        basepath: "",
        serializationAdapters: i
    }),
    a.stores.matchesId.get().length || await Hx(a),
    a
}
async function uE() {
    const a = await oE();
    return window.$_TSR?.h(),
    a
}
var Ec;
function cE() {
    return Ec || (Ec = uE()),
    m.jsx(Vx, {
        promise: Ec,
        children: a => m.jsx(N2, {
            router: a
        })
    })
}
I.startTransition( () => {
    Cv.hydrateRoot(document, m.jsx(I.StrictMode, {
        children: m.jsx(cE, {})
    }))
}
);
export {ue as L, I3 as R, m as j};
